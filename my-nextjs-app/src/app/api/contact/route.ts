import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

const DATA_DIR = path.join(process.cwd(), 'data')
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json')

// E-Mail Transporter erstellen
function createEmailTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // printzzdigitalbs@gmail.com
      pass: process.env.EMAIL_PASSWORD, // App-Password from Gmail
    },
  });
}

// E-Mail senden
async function sendContactEmail(contactData: any) {
  try {
    const transporter = createEmailTransporter();
    
    const { name, email, message, subject, phone, company, services } = contactData;
    
    // Prepare services list
    const servicesList = services && services.length > 0 
      ? services.join(', ') 
      : 'Keine spezifischen Services ausgewählt';

    // 1. E-Mail an Admin (printzzdigitalbs@gmail.com)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'printzzdigitalbs@gmail.com',
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            Neue Kontaktanfrage - Printzzdigital
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Kontaktdaten</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
            ${subject ? `<p><strong>Betreff:</strong> ${subject}</p>` : ''}
          </div>

          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Interessierte Services</h3>
            <p>${servicesList}</p>
          </div>

          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Nachricht</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e;">
              <strong>💡 Tipp:</strong> Antworte schnell auf diese Anfrage für die beste Kundenerfahrung!
            </p>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 14px; text-align: center;">
            Diese E-Mail wurde automatisch über das Kontaktformular auf printzzdigital.de gesendet.<br>
            Zeitpunkt: ${new Date().toLocaleString('de-DE')}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);

    // 2. Bestätigungs-E-Mail an Kunden
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Ihre Anfrage bei Printzzdigital ist eingegangen - Wir melden uns bald!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Vielen Dank für Ihre Anfrage!</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">Printzzdigital - Ihre digitale Zukunft beginnt hier</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #0ea5e9;">
              <h2 style="color: #0f172a; margin-top: 0; font-size: 20px;">Hallo ${name}!</h2>
              <p style="color: #475569; line-height: 1.6; margin: 10px 0;">
                Ihre Anfrage ist erfolgreich bei uns eingegangen. Wir freuen uns über Ihr Interesse an unseren Services!
              </p>
            </div>

            <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #eab308;">
              <h3 style="color: #374151; margin-top: 0; font-size: 18px;">📋 Ihre Anfrage im Überblick</h3>
              <div style="background-color: white; padding: 15px; border-radius: 6px; margin-top: 15px;">
                <p style="margin: 5px 0;"><strong>Services:</strong> ${servicesList}</p>
                ${company ? `<p style="margin: 5px 0;"><strong>Unternehmen:</strong> ${company}</p>` : ''}
                <p style="margin: 5px 0;"><strong>Eingegangen am:</strong> ${new Date().toLocaleString('de-DE')}</p>
              </div>
            </div>

            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0; font-size: 18px;">⚡ Wie geht es weiter?</h3>
              <ul style="color: #475569; line-height: 1.8; padding-left: 20px;">
                <li><strong>Schnelle Antwort:</strong> Wir melden uns innerhalb von 24 Stunden bei Ihnen</li>
                <li><strong>Kostenlose Beratung:</strong> Unverbindliches Erstgespräch zu Ihrem Projekt</li>
                <li><strong>Maßgeschneidertes Angebot:</strong> Individuelle Lösung für Ihre Anforderungen</li>
                <li><strong>Transparenz:</strong> Klare Preise und faire Konditionen</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://printzzdigital.de" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);">
                🌐 Unsere Website besuchen
              </a>
            </div>

            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0; font-size: 16px;">📞 Direkter Kontakt</h3>
              <p style="color: #475569; margin: 5px 0;">
                <strong>E-Mail:</strong> printzzdigitalbs@gmail.com<br>
                <strong>Web:</strong> www.printzzdigital.de
              </p>
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 14px; text-align: center; margin: 0;">
              Diese E-Mail wurde automatisch generiert. Bei Fragen antworten Sie einfach auf diese E-Mail.<br>
              <strong>Printzzdigital</strong> - Ihr Partner für digitale Transformation
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(customerMailOptions);
    
    return { admin: true, customer: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Stelle sicher, dass das data Verzeichnis existiert
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
}

// Lade alle Kontaktanfragen
async function loadContacts() {
  try {
    if (!existsSync(CONTACTS_FILE)) {
      return []
    }
    const data = await readFile(CONTACTS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error loading contacts:', error)
    return []
  }
}

// Speichere Kontaktanfragen
async function saveContacts(contacts: any[]) {
  await ensureDataDir()
  await writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2))
}

// GET - Alle Kontaktanfragen abrufen
export async function GET() {
  try {
    const contacts = await loadContacts()
    return NextResponse.json({ contacts })
  } catch (error) {
    console.error('Error getting contacts:', error)
    return NextResponse.json(
      { error: 'Failed to load contacts' },
      { status: 500 }
    )
  }
}

// POST - Neue Kontaktanfrage speichern
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, subject, phone, company, services } = body

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, Email und Nachricht sind erforderlich' },
        { status: 400 }
      )
    }

    const contacts = await loadContacts()
    
    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      message,
      subject: subject || 'Keine Betreff',
      phone: phone || '',
      company: company || '',
      services: services || [],
      date: new Date().toISOString(),
      status: 'unread', // unread, read, replied
      createdAt: new Date().toLocaleString('de-DE')
    }

    // E-Mail senden
    const emailResult = await sendContactEmail(newContact);
    
    contacts.unshift(newContact) // Neue Anfragen oben
    await saveContacts(contacts)

    const isEmailSuccess = emailResult && typeof emailResult === 'object';
    const adminSent = isEmailSuccess && emailResult.admin;
    const customerSent = isEmailSuccess && emailResult.customer;

    return NextResponse.json({ 
      success: true, 
      message: adminSent && customerSent
        ? 'Kontaktanfrage erfolgreich gespeichert. E-Mails an Admin und Kunde versendet!'
        : adminSent 
          ? 'Kontaktanfrage gespeichert. Admin-E-Mail versendet, Kunden-E-Mail fehlgeschlagen.'
          : 'Kontaktanfrage gespeichert, aber E-Mail-Versand fehlgeschlagen.',
      contact: newContact,
      emailResult
    })
  } catch (error) {
    console.error('Error saving contact:', error)
    return NextResponse.json(
      { error: 'Failed to save contact' },
      { status: 500 }
    )
  }
}

// PUT - Kontaktanfrage-Status aktualisieren
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID und Status sind erforderlich' },
        { status: 400 }
      )
    }

    const contacts = await loadContacts()
    const contactIndex = contacts.findIndex((c: any) => c.id === id)
    
    if (contactIndex === -1) {
      return NextResponse.json(
        { error: 'Kontakt nicht gefunden' },
        { status: 404 }
      )
    }

    contacts[contactIndex].status = status
    contacts[contactIndex].updatedAt = new Date().toLocaleString('de-DE')
    
    await saveContacts(contacts)

    return NextResponse.json({ 
      success: true, 
      message: 'Status erfolgreich aktualisiert' 
    })
  } catch (error) {
    console.error('Error updating contact:', error)
    return NextResponse.json(
      { error: 'Failed to update contact' },
      { status: 500 }
    )
  }
}
