import { NextRequest, NextResponse } from 'next/server'
import { lookup } from 'dns/promises'
import { isIP } from 'net'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// ---------------------------------------------------------------------------
// Typen
// ---------------------------------------------------------------------------

type CheckStatus = 'pass' | 'warn' | 'fail'

type Check = {
  id: string
  label: string
  status: CheckStatus
  detail: string
}

type Category = {
  id: 'security' | 'seo' | 'technical' | 'ai'
  title: string
  score: number
  checks: Check[]
}

// ---------------------------------------------------------------------------
// Rate-Limiting (best effort, pro Serverless-Instanz)
// ---------------------------------------------------------------------------

const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const rateMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > RATE_LIMIT
}

// ---------------------------------------------------------------------------
// SSRF-Schutz: nur öffentliche Hosts zulassen
// ---------------------------------------------------------------------------

function isPrivateIPv4(ip: string): boolean {
  const parts = ip.split('.').map(Number)
  const [a, b] = parts
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168)
  )
}

function isPrivateIp(ip: string): boolean {
  if (isIP(ip) === 4) return isPrivateIPv4(ip)
  const lower = ip.toLowerCase()
  // IPv4-mapped IPv6 (::ffff:192.168.0.1)
  const mapped = lower.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/)
  if (mapped) return isPrivateIPv4(mapped[1])
  return (
    lower === '::' ||
    lower === '::1' ||
    lower.startsWith('fc') ||
    lower.startsWith('fd') ||
    lower.startsWith('fe80')
  )
}

async function assertPublicHost(url: URL): Promise<void> {
  const host = url.hostname.toLowerCase()
  if (
    host === 'localhost' ||
    host.endsWith('.localhost') ||
    host.endsWith('.local') ||
    host.endsWith('.internal')
  ) {
    throw new Error('BLOCKED_HOST')
  }
  if (isIP(host)) {
    if (isPrivateIp(host)) throw new Error('BLOCKED_HOST')
    return
  }
  const results = await lookup(host, { all: true })
  if (results.length === 0) throw new Error('DNS_FAIL')
  if (results.some((r) => isPrivateIp(r.address))) throw new Error('BLOCKED_HOST')
}

// ---------------------------------------------------------------------------
// Fetch mit manueller Redirect-Verfolgung (jeder Hop wird geprüft)
// ---------------------------------------------------------------------------

const FETCH_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (compatible; PrintzzdigitalWebsiteCheck/1.0; +https://printzzdigital.de)',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
}

async function fetchWithRedirects(
  startUrl: URL,
  timeoutMs: number
): Promise<{ response: Response; finalUrl: URL; redirects: number }> {
  let current = startUrl
  for (let hop = 0; hop <= 5; hop++) {
    await assertPublicHost(current)
    const response = await fetch(current.toString(), {
      redirect: 'manual',
      headers: FETCH_HEADERS,
      signal: AbortSignal.timeout(timeoutMs),
    })
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location')
      if (!location) return { response, finalUrl: current, redirects: hop }
      response.body?.cancel()
      current = new URL(location, current)
      continue
    }
    return { response, finalUrl: current, redirects: hop }
  }
  throw new Error('TOO_MANY_REDIRECTS')
}

async function quietFetch(url: string): Promise<Response | null> {
  try {
    const target = new URL(url)
    await assertPublicHost(target)
    return await fetch(target.toString(), {
      headers: FETCH_HEADERS,
      signal: AbortSignal.timeout(6000),
    })
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// HTML-Analyse (bewusst ohne zusätzliche Parser-Dependency)
// ---------------------------------------------------------------------------

function stripComments(html: string): string {
  return html.replace(/<!--[\s\S]*?-->/g, '')
}

function getTitle(html: string): string | null {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  return m ? m[1].replace(/\s+/g, ' ').trim() : null
}

function getMetaContent(html: string, name: string): string | null {
  const re = new RegExp(
    `<meta[^>]+(?:name|property)=["']${name}["'][^>]*>`,
    'i'
  )
  const tag = html.match(re)?.[0]
  if (!tag) return null
  const content = tag.match(/content=["']([^"']*)["']/i)
  return content ? content[1].trim() : null
}

function countMatches(html: string, re: RegExp): number {
  return (html.match(re) ?? []).length
}

/** Sichtbarer Text ohne Skripte/Styles – das, was ein KI-Crawler ohne JavaScript liest. */
function visibleTextLength(html: string): number {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim().length
}

// ---------------------------------------------------------------------------
// robots.txt-Auswertung für KI-Crawler
// ---------------------------------------------------------------------------

type RobotsGroup = { agents: string[]; disallowAll: boolean }

function parseRobotsGroups(txt: string): RobotsGroup[] {
  const groups: RobotsGroup[] = []
  let current: RobotsGroup | null = null
  let lastWasAgent = false
  for (const rawLine of txt.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, '').trim()
    const m = line.match(/^([a-z-]+)\s*:\s*(.*)$/i)
    if (!m) continue
    const key = m[1].toLowerCase()
    const value = m[2].trim()
    if (key === 'user-agent') {
      if (!lastWasAgent || !current) {
        current = { agents: [], disallowAll: false }
        groups.push(current)
      }
      current.agents.push(value.toLowerCase())
      lastWasAgent = true
    } else {
      if (current && value === '/') {
        if (key === 'disallow') current.disallowAll = true
        if (key === 'allow') current.disallowAll = false
      }
      lastWasAgent = false
    }
  }
  return groups
}

function isBotBlocked(groups: RobotsGroup[], bot: string): boolean {
  const botLower = bot.toLowerCase()
  const specific = groups.filter((g) =>
    g.agents.some((a) => a !== '*' && botLower.includes(a))
  )
  if (specific.length > 0) return specific.some((g) => g.disallowAll)
  return groups.filter((g) => g.agents.includes('*')).some((g) => g.disallowAll)
}

// ---------------------------------------------------------------------------
// Checks
// ---------------------------------------------------------------------------

function checkSecurityHeaders(headers: Headers, isHttps: boolean): Check[] {
  const checks: Check[] = []
  const has = (name: string) => headers.get(name) !== null

  const csp = has('content-security-policy')
  checks.push({
    id: 'csp',
    label: 'Content-Security-Policy',
    status: csp ? 'pass' : 'fail',
    detail: csp
      ? 'Eine Content-Security-Policy ist gesetzt.'
      : 'Ohne CSP kann eingeschleuster Fremdcode (XSS) ungehindert ausgeführt werden.',
  })

  const hsts = has('strict-transport-security')
  checks.push({
    id: 'hsts',
    label: 'Strict-Transport-Security',
    status: hsts ? 'pass' : isHttps ? 'fail' : 'warn',
    detail: hsts
      ? 'HSTS erzwingt verschlüsselte Verbindungen.'
      : 'Browser werden nicht gezwungen, die verschlüsselte Verbindung zu nutzen.',
  })

  const xfo =
    has('x-frame-options') ||
    (headers.get('content-security-policy') ?? '').includes('frame-ancestors')
  checks.push({
    id: 'xfo',
    label: 'X-Frame-Options',
    status: xfo ? 'pass' : 'fail',
    detail: xfo
      ? 'Die Seite ist gegen Clickjacking (Einbettung in fremde Frames) geschützt.'
      : 'Die Seite kann in fremde Websites eingebettet werden (Clickjacking-Risiko).',
  })

  const xcto = (headers.get('x-content-type-options') ?? '').toLowerCase() === 'nosniff'
  checks.push({
    id: 'xcto',
    label: 'X-Content-Type-Options',
    status: xcto ? 'pass' : 'fail',
    detail: xcto
      ? 'MIME-Sniffing ist unterbunden.'
      : 'Browser dürfen Dateitypen erraten – ein unnötiges Sicherheitsrisiko.',
  })

  const referrer = has('referrer-policy')
  checks.push({
    id: 'referrer',
    label: 'Referrer-Policy',
    status: referrer ? 'pass' : 'warn',
    detail: referrer
      ? 'Die Weitergabe von Referrer-Daten ist geregelt.'
      : 'Besucherdaten können ungewollt an Drittseiten weitergegeben werden.',
  })

  const permissions = has('permissions-policy')
  checks.push({
    id: 'permissions',
    label: 'Permissions-Policy',
    status: permissions ? 'pass' : 'warn',
    detail: permissions
      ? 'Browser-Funktionen (Kamera, Mikrofon u. a.) sind eingeschränkt.'
      : 'Zugriff auf sensible Browser-Funktionen ist nicht eingeschränkt.',
  })

  return checks
}

function checkSeo(
  html: string,
  robotsOk: boolean,
  sitemapOk: boolean
): Check[] {
  const checks: Check[] = []

  const title = getTitle(html)
  checks.push({
    id: 'title',
    label: 'Seitentitel (Title-Tag)',
    status: !title ? 'fail' : title.length >= 30 && title.length <= 65 ? 'pass' : 'warn',
    detail: !title
      ? 'Es wurde kein Title-Tag gefunden – das wichtigste SEO-Element fehlt.'
      : title.length < 30
        ? `Der Titel ist mit ${title.length} Zeichen sehr kurz (empfohlen: 30–65).`
        : title.length > 65
          ? `Der Titel ist mit ${title.length} Zeichen zu lang und wird bei Google abgeschnitten.`
          : `Titel vorhanden und mit ${title.length} Zeichen optimal lang.`,
  })

  const description = getMetaContent(html, 'description')
  checks.push({
    id: 'description',
    label: 'Meta-Description',
    status: !description
      ? 'fail'
      : description.length >= 70 && description.length <= 160
        ? 'pass'
        : 'warn',
    detail: !description
      ? 'Keine Meta-Description gefunden – Google zeigt beliebigen Text im Suchergebnis.'
      : description.length < 70
        ? `Die Beschreibung ist mit ${description.length} Zeichen zu kurz (empfohlen: 70–160).`
        : description.length > 160
          ? `Die Beschreibung ist mit ${description.length} Zeichen zu lang und wird abgeschnitten.`
          : `Meta-Description vorhanden und mit ${description.length} Zeichen optimal lang.`,
  })

  const h1Count = countMatches(html, /<h1[\s>]/gi)
  checks.push({
    id: 'h1',
    label: 'H1-Überschrift',
    status: h1Count === 1 ? 'pass' : h1Count === 0 ? 'fail' : 'warn',
    detail:
      h1Count === 1
        ? 'Genau eine H1-Überschrift – so soll es sein.'
        : h1Count === 0
          ? 'Keine H1-Überschrift gefunden – Google fehlt das Hauptthema der Seite.'
          : `${h1Count} H1-Überschriften gefunden – empfohlen ist genau eine.`,
  })

  const imgTotal = countMatches(html, /<img[\s>]/gi)
  const imgWithAlt = countMatches(html, /<img[^>]*\salt=["'][^"']+["'][^>]*>/gi)
  const altStatus: CheckStatus =
    imgTotal === 0 || imgWithAlt === imgTotal
      ? 'pass'
      : imgWithAlt >= imgTotal * 0.7
        ? 'warn'
        : 'fail'
  checks.push({
    id: 'alt',
    label: 'Alt-Texte für Bilder',
    status: altStatus,
    detail:
      imgTotal === 0
        ? 'Keine Bilder auf der Startseite gefunden.'
        : `${imgWithAlt} von ${imgTotal} Bildern haben einen Alt-Text (wichtig für Google & Barrierefreiheit).`,
  })

  const canonical = /<link[^>]+rel=["']canonical["'][^>]*>/i.test(html)
  checks.push({
    id: 'canonical',
    label: 'Canonical-Tag',
    status: canonical ? 'pass' : 'warn',
    detail: canonical
      ? 'Canonical-URL ist definiert – keine Duplicate-Content-Probleme.'
      : 'Ohne Canonical-Tag kann Google doppelte Inhalte falsch bewerten.',
  })

  const ogTitle = getMetaContent(html, 'og:title')
  const ogImage = getMetaContent(html, 'og:image')
  checks.push({
    id: 'og',
    label: 'Social-Media-Vorschau (Open Graph)',
    status: ogTitle && ogImage ? 'pass' : ogTitle || ogImage ? 'warn' : 'fail',
    detail:
      ogTitle && ogImage
        ? 'Beim Teilen auf Social Media erscheint eine ansprechende Vorschau.'
        : 'Beim Teilen der Seite (WhatsApp, LinkedIn, Facebook) fehlt die Vorschau ganz oder teilweise.',
  })

  checks.push({
    id: 'robots',
    label: 'robots.txt',
    status: robotsOk ? 'pass' : 'warn',
    detail: robotsOk
      ? 'robots.txt ist vorhanden und erreichbar.'
      : 'Keine robots.txt gefunden – Suchmaschinen fehlt die Steuerungsdatei.',
  })

  checks.push({
    id: 'sitemap',
    label: 'XML-Sitemap',
    status: sitemapOk ? 'pass' : 'warn',
    detail: sitemapOk
      ? 'Eine XML-Sitemap ist vorhanden – Google findet alle Unterseiten.'
      : 'Keine Sitemap unter /sitemap.xml gefunden – Unterseiten werden ggf. langsamer indexiert.',
  })

  return checks
}

function checkTechnical(
  html: string,
  finalUrl: URL,
  responseTimeMs: number,
  faviconOk: boolean
): Check[] {
  const checks: Check[] = []

  const isHttps = finalUrl.protocol === 'https:'
  checks.push({
    id: 'https',
    label: 'SSL-Verschlüsselung (HTTPS)',
    status: isHttps ? 'pass' : 'fail',
    detail: isHttps
      ? 'Die Website wird verschlüsselt ausgeliefert.'
      : 'Die Website läuft unverschlüsselt – Browser warnen Besucher, Google straft ab.',
  })

  checks.push({
    id: 'speed',
    label: 'Server-Antwortzeit',
    status: responseTimeMs < 800 ? 'pass' : responseTimeMs < 2000 ? 'warn' : 'fail',
    detail: `Der Server antwortete in ${(responseTimeMs / 1000).toFixed(1)} Sekunden${
      responseTimeMs < 800 ? ' – sehr gut.' : responseTimeMs < 2000 ? ' – ausbaufähig.' : ' – deutlich zu langsam.'
    }`,
  })

  const viewport = /<meta[^>]+name=["']viewport["'][^>]*>/i.test(html)
  checks.push({
    id: 'viewport',
    label: 'Mobile Optimierung (Viewport)',
    status: viewport ? 'pass' : 'fail',
    detail: viewport
      ? 'Die Seite ist für Smartphones konfiguriert.'
      : 'Kein Viewport-Tag – die Seite wird auf Smartphones falsch dargestellt.',
  })

  const lang = /<html[^>]+lang=["'][a-z]{2}/i.test(html)
  checks.push({
    id: 'lang',
    label: 'Sprachauszeichnung',
    status: lang ? 'pass' : 'warn',
    detail: lang
      ? 'Die Seitensprache ist ausgezeichnet (wichtig für Screenreader & Google).'
      : 'Das lang-Attribut fehlt – schlecht für Barrierefreiheit und Suchmaschinen.',
  })

  checks.push({
    id: 'favicon',
    label: 'Favicon',
    status: faviconOk ? 'pass' : 'warn',
    detail: faviconOk
      ? 'Ein Favicon ist vorhanden.'
      : 'Kein Favicon gefunden – im Browser-Tab fehlt Ihr Markenzeichen.',
  })

  return checks
}

const OPENAI_BOTS = ['gptbot', 'oai-searchbot', 'chatgpt-user']
const OTHER_AI_BOTS = ['claudebot', 'perplexitybot', 'google-extended']

function aiCrawlerCheck(
  id: string,
  label: string,
  bots: string[],
  robotsTxt: string | null,
  blockedDetail: string
): Check {
  if (robotsTxt === null) {
    return {
      id,
      label,
      status: 'pass',
      detail: 'Keine robots.txt-Sperren – die KI-Crawler dürfen Ihre Inhalte lesen.',
    }
  }
  const groups = parseRobotsGroups(robotsTxt)
  const blocked = bots.filter((bot) => isBotBlocked(groups, bot))
  if (blocked.length === 0) {
    return {
      id,
      label,
      status: 'pass',
      detail: 'Die KI-Crawler sind in Ihrer robots.txt nicht gesperrt.',
    }
  }
  return {
    id,
    label,
    status: blocked.length === bots.length ? 'fail' : 'warn',
    detail: blockedDetail,
  }
}

function checkAiVisibility(
  html: string,
  robotsTxt: string | null,
  llmsOk: boolean
): Check[] {
  const checks: Check[] = []

  checks.push(
    aiCrawlerCheck(
      'chatgpt',
      'ChatGPT-Crawler erlaubt',
      OPENAI_BOTS,
      robotsTxt,
      'Ihre robots.txt sperrt ChatGPT ganz oder teilweise aus – Ihre Website kann in ChatGPT-Antworten kaum auftauchen.'
    )
  )

  checks.push(
    aiCrawlerCheck(
      'other-ai',
      'Claude, Perplexity & Gemini erlaubt',
      OTHER_AI_BOTS,
      robotsTxt,
      'Ihre robots.txt sperrt weitere KI-Dienste ganz oder teilweise aus – dort bleibt Ihre Website unsichtbar.'
    )
  )

  const textLength = visibleTextLength(html)
  checks.push({
    id: 'ssr-text',
    label: 'Inhalte ohne JavaScript lesbar',
    status: textLength >= 500 ? 'pass' : textLength >= 150 ? 'warn' : 'fail',
    detail:
      textLength >= 500
        ? 'Ihre Inhalte stehen direkt im HTML – KI-Crawler können sie vollständig lesen.'
        : `KI-Crawler führen kein JavaScript aus und sehen nur ${textLength} Zeichen Text – der Rest Ihrer Inhalte bleibt für ChatGPT & Co. unsichtbar.`,
  })

  const jsonLdCount = countMatches(html, /<script[^>]+application\/ld\+json/gi)
  checks.push({
    id: 'structured-data',
    label: 'Strukturierte Daten (Schema.org)',
    status: jsonLdCount > 0 ? 'pass' : 'warn',
    detail:
      jsonLdCount > 0
        ? `${jsonLdCount} Schema.org-Block${jsonLdCount === 1 ? '' : 's'} gefunden – KI-Dienste verstehen, wer Sie sind und was Sie anbieten.`
        : 'Ohne strukturierte Daten müssen KI-Dienste raten, was Ihr Unternehmen anbietet.',
  })

  checks.push({
    id: 'llms-txt',
    label: 'llms.txt für KI-Assistenten',
    status: llmsOk ? 'pass' : 'warn',
    detail: llmsOk
      ? 'Eine llms.txt ist vorhanden – Sie geben KI-Assistenten aktiv die wichtigsten Infos mit.'
      : 'Noch keine llms.txt vorhanden – der neue Standard, mit dem Websites KI-Assistenten gezielt informieren. Kaum jemand hat das: eine Chance, voraus zu sein.',
  })

  const metaRobots = (getMetaContent(html, 'robots') ?? '').toLowerCase()
  const noindex = metaRobots.includes('noindex') || metaRobots.includes('none')
  const nosnippet = metaRobots.includes('nosnippet') || metaRobots.includes('max-snippet:0')
  checks.push({
    id: 'snippets',
    label: 'Freigabe für KI-Antworten',
    status: noindex ? 'fail' : nosnippet ? 'warn' : 'pass',
    detail: noindex
      ? 'Ein noindex-Tag verbietet die Aufnahme in Suchmaschinen und KI-Suche komplett.'
      : nosnippet
        ? 'Eine Snippet-Sperre verhindert, dass KI-Suche und Google Ihre Inhalte zitieren.'
        : 'Suchmaschinen und KI-Suche dürfen Ihre Inhalte anzeigen und zitieren.',
  })

  return checks
}

// ---------------------------------------------------------------------------
// Scoring
// ---------------------------------------------------------------------------

const STATUS_POINTS: Record<CheckStatus, number> = { pass: 1, warn: 0.5, fail: 0 }

function scoreOf(checks: Check[]): number {
  const sum = checks.reduce((acc, c) => acc + STATUS_POINTS[c.status], 0)
  return Math.round((sum / checks.length) * 100)
}

function gradeOf(score: number): string {
  if (score >= 90) return 'A'
  if (score >= 75) return 'B'
  if (score >= 60) return 'C'
  if (score >= 45) return 'D'
  if (score >= 30) return 'E'
  return 'F'
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte versuchen Sie es in ein paar Minuten erneut.' },
      { status: 429 }
    )
  }

  let rawUrl: unknown
  try {
    const body = await request.json()
    rawUrl = body?.url
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  if (typeof rawUrl !== 'string' || rawUrl.trim().length === 0) {
    return NextResponse.json({ error: 'Bitte geben Sie eine URL ein.' }, { status: 400 })
  }

  let startUrl: URL
  try {
    const normalized = rawUrl.trim().match(/^https?:\/\//i)
      ? rawUrl.trim()
      : `https://${rawUrl.trim()}`
    startUrl = new URL(normalized)
    if (startUrl.protocol !== 'https:' && startUrl.protocol !== 'http:') {
      throw new Error('BAD_PROTOCOL')
    }
    if (!startUrl.hostname.includes('.')) throw new Error('BAD_HOST')
  } catch {
    return NextResponse.json(
      { error: 'Das sieht nicht nach einer gültigen Website-Adresse aus.' },
      { status: 400 }
    )
  }

  try {
    const startedAt = Date.now()
    const { response, finalUrl } = await fetchWithRedirects(startUrl, 12000)
    const responseTimeMs = Date.now() - startedAt

    if (response.status >= 400) {
      return NextResponse.json(
        {
          error: `Die Website antwortete mit Fehlercode ${response.status}. Bitte prüfen Sie die Adresse.`,
        },
        { status: 422 }
      )
    }

    const rawHtml = (await response.text()).slice(0, 800_000)
    const html = stripComments(rawHtml)
    const origin = finalUrl.origin

    const [robotsRes, sitemapRes, faviconRes, llmsRes] = await Promise.all([
      quietFetch(`${origin}/robots.txt`),
      quietFetch(`${origin}/sitemap.xml`),
      /<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]*>/i.test(html)
        ? Promise.resolve(new Response(null, { status: 200 }))
        : quietFetch(`${origin}/favicon.ico`),
      quietFetch(`${origin}/llms.txt`),
    ])

    const robotsOk =
      robotsRes !== null &&
      robotsRes.ok &&
      (robotsRes.headers.get('content-type') ?? '').includes('text')
    const robotsTxt = robotsOk ? (await robotsRes.text()).slice(0, 100_000) : null
    const sitemapOk = sitemapRes !== null && sitemapRes.ok
    const faviconOk = faviconRes !== null && faviconRes.ok
    const llmsContentType = llmsRes?.headers.get('content-type') ?? ''
    const llmsOk =
      llmsRes !== null &&
      llmsRes.ok &&
      llmsContentType.startsWith('text/') &&
      !llmsContentType.includes('html')

    const isHttps = finalUrl.protocol === 'https:'
    const securityChecks = checkSecurityHeaders(response.headers, isHttps)
    const seoChecks = checkSeo(html, robotsOk, sitemapOk)
    const technicalChecks = checkTechnical(html, finalUrl, responseTimeMs, faviconOk)
    const aiChecks = checkAiVisibility(html, robotsTxt, llmsOk)

    const categories: Category[] = [
      { id: 'security', title: 'Sicherheit', score: scoreOf(securityChecks), checks: securityChecks },
      { id: 'seo', title: 'SEO & Sichtbarkeit', score: scoreOf(seoChecks), checks: seoChecks },
      { id: 'technical', title: 'Technik & Performance', score: scoreOf(technicalChecks), checks: technicalChecks },
      { id: 'ai', title: 'KI-Sichtbarkeit', score: scoreOf(aiChecks), checks: aiChecks },
    ]

    const overallScore = Math.round(
      categories.reduce((acc, c) => acc + c.score, 0) / categories.length
    )

    return NextResponse.json({
      url: finalUrl.toString(),
      checkedAt: new Date().toISOString(),
      overall: { score: overallScore, grade: gradeOf(overallScore) },
      categories,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : ''
    if (message === 'BLOCKED_HOST') {
      return NextResponse.json(
        { error: 'Diese Adresse kann nicht geprüft werden.' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      {
        error:
          'Die Website konnte nicht erreicht werden. Bitte prüfen Sie die Adresse oder versuchen Sie es später erneut.',
      },
      { status: 422 }
    )
  }
}
