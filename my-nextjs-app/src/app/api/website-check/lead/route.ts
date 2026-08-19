import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

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

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: lead.email,
      subject: lead.wantsAppointment
        ? 'Ihre Termin-Anfrage bei Printzzdigital ist eingegangen'
        : 'Ihr Website-Check bei Printzzdigital',
      html: `
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
    date: new Date().toISOString(),
    status: 'new',
    createdAt: new Date().toLocaleString('de-DE'),
  }

  let saved = false
  try {
    const leads = await loadLeads()
    leads.unshift(lead)
    await saveLeads(leads)
    saved = true
  } catch (error) {
    console.error('Error saving website-check lead:', error)
  }

  const emailResult = await sendLeadEmails(lead)

  if (!saved && !emailResult.admin) {
    return NextResponse.json(
      { error: 'Das hat leider nicht geklappt. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
