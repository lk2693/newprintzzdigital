import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const DATA_DIR = path.join(process.cwd(), 'data');
const EBOOK_FILE = path.join(DATA_DIR, 'ebook-downloads.json');

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

// Stelle sicher, dass das data Verzeichnis existiert
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

// Lade alle E-Book Downloads
async function loadEbookDownloads() {
  try {
    if (!existsSync(EBOOK_FILE)) {
      return [];
    }
    const data = await readFile(EBOOK_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading ebook downloads:', error);
    return [];
  }
}

// Speichere E-Book Downloads
async function saveEbookDownloads(downloads: any[]) {
  await ensureDataDir();
  await writeFile(EBOOK_FILE, JSON.stringify(downloads, null, 2));
}

// E-Mail für E-Book Download senden
async function sendEbookNotificationEmail(downloadData: any) {
  try {
    const transporter = createEmailTransporter();
    
    const { name, email, company, ebookTitle } = downloadData;

    // 1. E-Mail an Admin (Lead-Benachrichtigung)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'printzzdigitalbs@gmail.com',
      subject: `Neuer E-Book Download: ${ebookTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            📚 Neuer E-Book Download - Printzzdigital
          </h2>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
            <h3 style="color: #374151; margin-top: 0;">E-Book Information</h3>
            <p><strong>📖 E-Book:</strong> ${ebookTitle}</p>
            <p><strong>📅 Download-Zeit:</strong> ${new Date().toLocaleString('de-DE')}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Lead-Daten</h3>
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 E-Mail:</strong> ${email}</p>
            ${company ? `<p><strong>🏢 Unternehmen:</strong> ${company}</p>` : ''}
          </div>

          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <h3 style="color: #374151; margin-top: 0;">🎯 Lead-Opportunity</h3>
            <p style="margin: 0; color: #92400e;">
              <strong>Heißer Lead!</strong> Dieser Interessent hat aktiv ein E-Book heruntergeladen. 
              Das zeigt echtes Interesse an euren Services. Jetzt ist der perfekte Zeitpunkt für eine Follow-up E-Mail!
            </p>
          </div>

          <div style="background-color: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">💡 Empfohlene Nächste Schritte</h3>
            <ul style="color: #166534; margin: 0;">
              <li>Personalisierte Follow-up E-Mail senden</li>
              <li>Kostenloses Beratungsgespräch anbieten</li>
              <li>Relevante Case Studies teilen</li>
              <li>In CRM-System als qualifizierten Lead markieren</li>
            </ul>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 14px; text-align: center;">
            Diese E-Mail wurde automatisch über das E-Book Download-System auf printzzdigital.de gesendet.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);

    // 2. Bestätigungs-E-Mail an Kunden
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Ihr E-Book "${ebookTitle}" ist bereit! 📚`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">📚 Ihr E-Book ist da!</h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">Vielen Dank für Ihr Interesse an Printzzdigital</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #0ea5e9;">
              <h2 style="color: #0f172a; margin-top: 0; font-size: 20px;">Hallo ${name}!</h2>
              <p style="color: #475569; line-height: 1.6; margin: 10px 0;">
                Ihr Download von <strong>"${ebookTitle}"</strong> war erfolgreich! Wir hoffen, dass Ihnen die Inhalte bei Ihrer digitalen Transformation helfen.
              </p>
            </div>

            <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #eab308;">
              <h3 style="color: #374151; margin-top: 0; font-size: 18px;">🎯 Nächste Schritte</h3>
              <p style="color: #475569; line-height: 1.6;">
                Sie möchten die Erkenntnisse aus dem E-Book direkt umsetzen? Wir helfen Ihnen gerne dabei! 
                Buchen Sie ein <strong>kostenloses Beratungsgespräch</strong> und lassen Sie uns gemeinsam Ihre digitale Zukunft planen.
              </p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://printzzdigital.de#kontakt" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3); margin-right: 10px;">
                📞 Kostenlose Beratung buchen
              </a>
              <a href="https://printzzdigital.de#portfolio" style="background: transparent; color: #059669; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; border: 2px solid #059669;">
                🎨 Unsere Projekte ansehen
              </a>
            </div>

            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0; font-size: 18px;">💡 Was wir für Sie tun können</h3>
              <ul style="color: #475569; line-height: 1.8; padding-left: 20px;">
                <li><strong>Webentwicklung:</strong> Moderne, schnelle Websites & Web-Apps</li>
                <li><strong>KI-Integration:</strong> Intelligente Automatisierung für Ihr Business</li>
                <li><strong>E-Commerce:</strong> Professionelle Onlineshop-Lösungen</li>
                <li><strong>Digital Consulting:</strong> Strategische Beratung für Ihre Transformation</li>
              </ul>
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
              Sie erhalten diese E-Mail, weil Sie unser E-Book heruntergeladen haben.<br>
              <strong>Printzzdigital</strong> - Ihr Partner für digitale Innovation
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(customerMailOptions);

    return { admin: true, customer: true };
  } catch (error) {
    console.error('Error sending ebook notification email:', error);
    return false;
  }
}

// GET - Alle E-Book Downloads abrufen
export async function GET() {
  try {
    const downloads = await loadEbookDownloads();
    return NextResponse.json({ downloads });
  } catch (error) {
    console.error('Error getting ebook downloads:', error);
    return NextResponse.json(
      { error: 'Failed to load ebook downloads' },
      { status: 500 }
    );
  }
}

// POST - Neuen E-Book Download registrieren
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, ebookTitle } = body;

    // Validierung
    if (!name || !email || !ebookTitle) {
      return NextResponse.json(
        { error: 'Name, E-Mail und E-Book Titel sind erforderlich' },
        { status: 400 }
      );
    }

    const downloads = await loadEbookDownloads();
    
    const newDownload = {
      id: Date.now().toString(),
      name,
      email,
      company: company || '',
      ebookTitle,
      downloadDate: new Date().toISOString(),
      createdAt: new Date().toLocaleString('de-DE'),
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // E-Mail Benachrichtigung senden
    const emailResult = await sendEbookNotificationEmail(newDownload);
    
    downloads.unshift(newDownload); // Neue Downloads oben
    await saveEbookDownloads(downloads);

    const isEmailSuccess = emailResult && typeof emailResult === 'object';
    const adminSent = isEmailSuccess && emailResult.admin;
    const customerSent = isEmailSuccess && emailResult.customer;

    return NextResponse.json({ 
      success: true, 
      message: adminSent && customerSent
        ? 'E-Book Download erfolgreich registriert. Benachrichtigungen an Admin und Kunde versendet!'
        : adminSent 
          ? 'E-Book Download registriert. Admin-Benachrichtigung versendet, Kunden-E-Mail fehlgeschlagen.'
          : 'E-Book Download registriert, aber E-Mail-Versand fehlgeschlagen.',
      download: newDownload,
      emailResult
    });
  } catch (error) {
    console.error('Error saving ebook download:', error);
    return NextResponse.json(
      { error: 'Failed to save ebook download' },
      { status: 500 }
    );
  }
}
