import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'
import { saveRecordToBlob } from '@/lib/blobStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data')
const LEADS_FILE = path.join(DATA_DIR, 'website-check-leads.json')

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
// Helpers
// ---------------------------------------------------------------------------

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
}

async function loadLeads(): Promise<any[]> {
  try {
    if (!existsSync(LEADS_FILE)) return []
    return JSON.parse(await readFile(LEADS_FILE, 'utf-8'))
  } catch (error) {
    console.error('Error loading website-check leads:', error)
    return []
  }
}

async function saveLeads(leads: any[]) {
  await ensureDataDir()
  await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2))
}

function createEmailTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
}

// ---------------------------------------------------------------------------
// Report-Daten (volle Check-Ergebnisse aus dem Frontend, streng validiert)
// ---------------------------------------------------------------------------

type ReportCheck = { label: string; status: 'pass' | 'warn' | 'fail'; detail: string }
type ReportCategory = { title: string; score: number; checks: ReportCheck[] }

function sanitizeCategories(raw: unknown): ReportCategory[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 8) return null
  const categories: ReportCategory[] = []
  for (const cat of raw) {
    if (!cat || typeof cat.title !== 'string' || !Array.isArray(cat.checks) || cat.checks.length > 40) {
      return null
    }
    const checks: ReportCheck[] = []
    for (const check of cat.checks) {
      const status = check?.status
      if (
        !check ||
        typeof check.label !== 'string' ||
        (status !== 'pass' && status !== 'warn' && status !== 'fail')
      ) {
        return null
      }
      checks.push({
        label: check.label.slice(0, 200),
        status,
        detail: typeof check.detail === 'string' ? check.detail.slice(0, 500) : '',
      })
    }
    categories.push({
      title: cat.title.slice(0, 100),
      score: Math.max(0, Math.min(100, Math.round(Number(cat.score) || 0))),
      checks,
    })
  }
  return categories
}

// ---------------------------------------------------------------------------
// Report-E-Mail
// ---------------------------------------------------------------------------

const STATUS_STYLE: Record<ReportCheck['status'], { symbol: string; color: string }> = {
  pass: { symbol: '✓', color: '#2E7D32' },
  warn: { symbol: '!', color: '#B45309' },
  fail: { symbol: '✕', color: '#C62828' },
}

function scoreColor(score: number): string {
  if (score >= 75) return '#2E7D32'
  if (score >= 50) return '#B45309'
  return '#C62828'
}

function renderCheckRow(check: ReportCheck): string {
  const style = STATUS_STYLE[check.status]
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
      <tr>
        <td width="26" valign="top" style="padding: 8px 0; font-weight: bold; font-size: 15px; color: ${style.color};">${style.symbol}</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE0;">
          <span style="font-size: 14px; color: #26231E; font-weight: 600;">${escapeHtml(check.label)}</span>
          ${check.detail ? `<br><span style="font-size: 13px; color: #6b7280; line-height: 1.5;">${escapeHtml(check.detail)}</span>` : ''}
        </td>
      </tr>
    </table>`
}

function buildReportEmailHtml(lead: any, categories: ReportCategory[]): string {
  const name = escapeHtml(lead.name || '')
  const anrede = name ? `Hallo ${name}` : 'Hallo'
  const url = escapeHtml(lead.url)
  const score = Number(lead.score)
  const grade = escapeHtml(String(lead.grade))
  const gradeCol = scoreColor(score)
  const dateStr = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })

  // Quick Wins: zuerst alle Fails (Kategorien sind nach Gewicht sortiert), dann Warns
  const flat = categories.flatMap((c) => c.checks)
  const quickWins = [
    ...flat.filter((c) => c.status === 'fail'),
    ...flat.filter((c) => c.status === 'warn'),
  ].slice(0, 3)

  const categoryBlocks = categories
    .map(
      (cat) => `
      <div style="background-color: #ffffff; border: 1px solid #EDE6DA; border-radius: 10px; padding: 20px 24px; margin: 0 0 16px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-bottom: 10px;">
          <tr>
            <td style="font-size: 16px; font-weight: 700; color: #26231E;">${escapeHtml(cat.title)}</td>
            <td align="right" style="font-size: 14px; font-weight: 700; color: ${scoreColor(cat.score)};">${cat.score}/100</td>
          </tr>
        </table>
        <div style="background-color: #F0EAE0; border-radius: 6px; height: 8px; margin-bottom: 14px;">
          <div style="background-color: ${scoreColor(cat.score)}; border-radius: 6px; height: 8px; width: ${cat.score}%;"></div>
        </div>
        ${cat.checks.map(renderCheckRow).join('')}
      </div>`
    )
    .join('')

  const quickWinBlock =
    quickWins.length > 0
      ? `
      <div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; border-radius: 8px; padding: 20px 24px; margin: 0 0 24px 0;">
        <p style="margin: 0 0 12px 0; font-size: 16px; font-weight: 700; color: #92400E;">🎯 Ihre größten Hebel</p>
        ${quickWins
          .map(
            (win) => `
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #78350F; line-height: 1.5;">
            <strong>${escapeHtml(win.label)}:</strong> ${escapeHtml(win.detail || 'Hier besteht Verbesserungspotenzial.')}
          </p>`
          )
          .join('')}
      </div>`
      : ''

  const ctaBlock = lead.wantsAppointment
    ? `
      <div style="background-color: #26231E; border-radius: 10px; padding: 24px; margin: 0 0 24px 0; text-align: center;">
        <p style="margin: 0 0 6px 0; font-size: 16px; font-weight: 700; color: #ffffff;">📅 Ihr Beratungstermin</p>
        <p style="margin: 0; font-size: 14px; color: #D6CDBF; line-height: 1.6;">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen, um einen Termin zu vereinbaren.
          Dort gehen wir diesen Report gemeinsam durch – ehrlich und ohne Verkaufsdruck.
        </p>
      </div>`
    : `
      <div style="background-color: #26231E; border-radius: 10px; padding: 24px; margin: 0 0 24px 0; text-align: center;">
        <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: 700; color: #ffffff;">Ergebnisse mit einem Experten durchgehen?</p>
        <p style="margin: 0 0 16px 0; font-size: 14px; color: #D6CDBF; line-height: 1.6;">
          Im kostenlosen Erstgespräch zeigen wir Ihnen, was sich mit wenig Aufwand beheben lässt –
          unverbindlich und ohne Verkaufsdruck.
        </p>
        <a href="mailto:info@printzzdigital.de?subject=Erstgespräch%20Website-Check" style="display: inline-block; background-color: #A05F00; color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 8px;">Kostenloses Erstgespräch anfragen</a>
        <p style="margin: 14px 0 0 0; font-size: 13px; color: #D6CDBF;">oder direkt anrufen: 0531 – 70 20 17 86</p>
      </div>`

  return `
    <div style="background-color: #F7F3EC; padding: 24px 12px; font-family: Arial, Helvetica, sans-serif;">
      <div style="max-width: 640px; margin: 0 auto;">

        <div style="background-color: #26231E; border-radius: 12px 12px 0 0; padding: 28px 24px; text-align: center;">
          <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; letter-spacing: 3px; color: #C98A1B; text-transform: uppercase;">Printzzdigital</p>
          <h1 style="margin: 0; font-size: 26px; color: #ffffff;">Ihr Website-Report</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; color: #D6CDBF;">${url} · ${dateStr}</p>
        </div>

        <div style="background-color: #ffffff; padding: 28px 24px; text-align: center; border-bottom: 1px solid #EDE6DA;">
          <p style="margin: 0 0 4px 0; font-size: 14px; color: #6b7280;">${anrede}, hier ist Ihr Gesamtergebnis:</p>
          <p style="margin: 8px 0; font-size: 52px; font-weight: 800; color: ${gradeCol}; line-height: 1;">${score}<span style="font-size: 22px; font-weight: 600; color: #9ca3af;">/100</span></p>
          <span style="display: inline-block; background-color: ${gradeCol}; color: #ffffff; font-size: 15px; font-weight: 700; padding: 6px 18px; border-radius: 999px;">Note ${grade}</span>
          ${lead.system ? `<p style="margin: 14px 0 0 0; font-size: 13px; color: #6b7280;">Erkanntes System: <strong>${escapeHtml(lead.system)}</strong></p>` : ''}
        </div>

        <div style="background-color: #FBF8F3; padding: 24px 20px; border-radius: 0 0 12px 12px;">
          ${quickWinBlock}
          <p style="margin: 0 0 14px 0; font-size: 17px; font-weight: 700; color: #26231E;">Die Auswertung im Detail</p>
          ${categoryBlocks}
          ${ctaBlock}
          <p style="margin: 0; font-size: 13px; color: #6b7280; line-height: 1.6; text-align: center;">
            Herzliche Grüße<br>
            <strong style="color: #26231E;">Ihr Team von Printzzdigital</strong><br>
            Telefon: 0531 – 70 20 17 86 · <a href="https://www.printzzdigital.de" style="color: #A05F00;">www.printzzdigital.de</a>
          </p>
          <hr style="margin: 24px 0 16px 0; border: none; border-top: 1px solid #EDE6DA;">
          <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center; line-height: 1.6;">
            Sie erhalten diese E-Mail, weil Sie auf printzzdigital.de die detaillierte Auswertung
            des Website-Checks angefordert haben. Der Report ist eine automatisierte Momentaufnahme
            und ersetzt keine vollständige Analyse.
          </p>
        </div>

      </div>
    </div>`
}

// ---------------------------------------------------------------------------
// E-Mails
// ---------------------------------------------------------------------------

async function sendLeadEmails(lead: any): Promise<{ admin: boolean; customer: boolean }> {
  const result = { admin: false, customer: false }
  const transporter = createEmailTransporter()

  const name = escapeHtml(lead.name || '')
  const email = escapeHtml(lead.email)
  const phone = escapeHtml(lead.phone || '')
  const url = escapeHtml(lead.url)
  const anrede = name ? `Hallo ${name}` : 'Hallo'

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@printzzdigital.de',
      subject: `🎯 Website-Check-Lead: ${lead.url} (Note ${lead.grade}${lead.wantsAppointment ? ', TERMIN GEWÜNSCHT' : ''})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b45309; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            🎯 Neuer Website-Check-Lead - Printzzdigital
          </h2>

          ${
            lead.wantsAppointment
              ? `<div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                  <p style="margin: 0; color: #92400e;"><strong>📅 Beratungstermin gewünscht!</strong> Bitte zeitnah melden${phone ? ` – Telefon: <strong>${phone}</strong>` : ''}.</p>
                </div>`
              : ''
          }

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Lead-Daten</h3>
            ${name ? `<p><strong>👤 Name:</strong> ${name}</p>` : ''}
            <p><strong>📧 E-Mail:</strong> ${email}</p>
            ${phone ? `<p><strong>📞 Telefon:</strong> ${phone}</p>` : ''}
          </div>

          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Check-Ergebnis</h3>
            <p><strong>🌐 Geprüfte Website:</strong> ${url}</p>
            ${lead.system ? `<p><strong>🧩 System:</strong> ${escapeHtml(lead.system)}</p>` : ''}
            <p><strong>📊 Score:</strong> ${Number(lead.score)} von 100 (Note ${escapeHtml(String(lead.grade))})</p>
            <p><strong>⚠️ Verbesserungspunkte:</strong> ${Number(lead.failCount)}</p>
            ${
              Array.isArray(lead.categories)
                ? (lead.categories as ReportCategory[])
                    .flatMap((c) => c.checks)
                    .filter((c) => c.status !== 'pass')
                    .map(
                      (c) =>
                        `<p style="margin: 4px 0; color: ${STATUS_STYLE[c.status].color};">${STATUS_STYLE[c.status].symbol} ${escapeHtml(c.label)}</p>`
                    )
                    .join('')
                : ''
            }
          </div>

          <div style="background-color: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #166534;">
              <strong>Heißer Lead:</strong> Hat aktiv die eigene Website geprüft und die detaillierte
              Auswertung angefordert – idealer Aufhänger für ein Follow-up mit konkreten Verbesserungsvorschlägen.
            </p>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px; text-align: center;">
            Automatisch gesendet vom Website-Check auf printzzdigital.de<br>
            Zeitpunkt: ${new Date().toLocaleString('de-DE')}
          </p>
        </div>
      `,
    })
    result.admin = true
  } catch (error) {
    console.error('Error sending admin lead email:', error)
  }

  const domain = String(lead.url).replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const reportHtml: string | null = Array.isArray(lead.categories)
    ? buildReportEmailHtml(lead, lead.categories)
    : null

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: lead.email,
      subject: reportHtml
        ? `Ihr Website-Report für ${domain}: Note ${lead.grade} (${Number(lead.score)}/100)`
        : lead.wantsAppointment
          ? 'Ihre Termin-Anfrage bei Printzzdigital ist eingegangen'
          : 'Ihr Website-Check bei Printzzdigital',
      html: reportHtml ?? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #26231E;">
          <h2 style="color: #26231E;">${anrede},</h2>
          <p style="line-height: 1.6;">
            vielen Dank für Ihr Interesse! Ihre Website <strong>${url}</strong> hat im Check
            <strong>${Number(lead.score)} von 100 Punkten (Note ${escapeHtml(String(lead.grade))})</strong> erreicht.
            Die detaillierte Auswertung mit allen Verbesserungstipps finden Sie direkt auf der Website-Check-Seite.
          </p>
          ${
            lead.wantsAppointment
              ? `<p style="line-height: 1.6;">
                  <strong>Ihr kostenloses Beratungsgespräch:</strong> Wir melden uns innerhalb von 24 Stunden
                  bei Ihnen, um einen Termin zu vereinbaren. Dort gehen wir die Ergebnisse gemeinsam durch
                  und zeigen Ihnen, was sich mit wenig Aufwand beheben lässt – ehrlich und ohne Verkaufsdruck.
                </p>`
              : `<p style="line-height: 1.6;">
                  Sie möchten die Ergebnisse mit einem Experten durchgehen? Antworten Sie einfach auf diese
                  E-Mail oder rufen Sie uns an – das Erstgespräch ist kostenlos und unverbindlich.
                </p>`
          }
          <p style="line-height: 1.6; margin-top: 24px;">
            Herzliche Grüße<br>
            <strong>Ihr Team von Printzzdigital</strong><br>
            Telefon: 0531 – 70 20 17 86<br>
            <a href="https://www.printzzdigital.de" style="color: #A05F00;">www.printzzdigital.de</a>
          </p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 13px;">
            Sie erhalten diese E-Mail, weil Sie auf printzzdigital.de die detaillierte Auswertung
            des Website-Checks angefordert haben.
          </p>
        </div>
      `,
    })
    result.customer = true
  } catch (error) {
    console.error('Error sending customer lead email:', error)
  }

  return result
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte versuchen Sie es in ein paar Minuten erneut.' },
      { status: 429 }
    )
  }

  let body: any
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const url = typeof body?.url === 'string' ? body.url.trim().slice(0, 300) : ''

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
      { status: 400 }
    )
  }
  if (!url) {
    return NextResponse.json(
      { error: 'Bitte führen Sie zuerst einen Website-Check durch.' },
      { status: 400 }
    )
  }

  const lead = {
    id: Date.now().toString(),
    email,
    name: typeof body?.name === 'string' ? body.name.trim().slice(0, 120) : '',
    phone: typeof body?.phone === 'string' ? body.phone.trim().slice(0, 60) : '',
    wantsAppointment: body?.wantsAppointment === true,
    url,
    system: typeof body?.system === 'string' ? body.system.trim().slice(0, 120) : '',
    score: Number(body?.score) || 0,
    grade: typeof body?.grade === 'string' ? body.grade.slice(0, 2) : '?',
    failCount: Number(body?.failCount) || 0,
    categories: sanitizeCategories(body?.categories),
    date: new Date().toISOString(),
    status: 'new',
    createdAt: new Date().toLocaleString('de-DE'),
  }

  // Immer loggen, damit der Lead notfalls in den Runtime-Logs auffindbar ist
  console.log('[website-check-lead]', JSON.stringify(lead))

  const blobSaved = await saveRecordToBlob('website-check-leads', lead)

  let fileSaved = false
  try {
    const leads = await loadLeads()
    leads.unshift(lead)
    await saveLeads(leads)
    fileSaved = true
  } catch (error) {
    console.error('Error saving website-check lead:', error)
  }

  const emailResult = await sendLeadEmails(lead)

  if (!blobSaved && !fileSaved && !emailResult.admin) {
    return NextResponse.json(
      { error: 'Das hat leider nicht geklappt. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
