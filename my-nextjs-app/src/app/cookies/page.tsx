import Link from "next/link";

import { LegalShell, LegalSection, LegalBox } from "@/components/landing/Legal";

export default function CookiePage() {
  return (
    <LegalShell
      title="Cookie-Richtlinie"
      subtitle="Transparente Informationen über unsere Verwendung von Cookies und ähnlichen Technologien"
      stand="16. August 2025"
    >
      <LegalSection nr="01" title="Was sind Cookies?">
        <p>
          Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine
          Website besuchen. Sie helfen dabei, die Website funktionsfähig zu machen und Ihre
          Benutzererfahrung zu verbessern.
        </p>
        <p>Wir verwenden verschiedene Arten von Cookies, die in die folgenden Kategorien fallen:</p>
      </LegalSection>

      <LegalSection nr="02" title="Notwendige Cookies">
        <p>
          Diese Cookies sind für die ordnungsgemäße Funktion unserer Website unerlässlich und
          können nicht deaktiviert werden.
        </p>
        <p>
          <strong>Verwendungszweck:</strong>
        </p>
        <ul>
          <li>Speicherung Ihrer Cookie-Präferenzen</li>
          <li>Sicherheitsfeatures und Authentifizierung</li>
          <li>Grundlegende Website-Funktionalität</li>
          <li>Session-Management</li>
        </ul>
      </LegalSection>

      <LegalSection nr="03" title="Analyse-Cookies">
        <p>
          Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren,
          damit wir sie verbessern können.
        </p>
        <p>
          <strong>Verwendungszweck:</strong>
        </p>
        <ul>
          <li>Erfassung anonymer Nutzungsstatistiken</li>
          <li>Verbesserung der Website-Performance</li>
          <li>Identifizierung beliebter Inhalte</li>
          <li>Optimierung der Benutzererfahrung</li>
        </ul>
        <p>
          <strong>Anbieter:</strong> Google Analytics, Vercel Analytics
          <br />
          <strong>Speicherdauer:</strong> Bis zu 2 Jahre
        </p>
      </LegalSection>

      <LegalSection nr="04" title="Marketing-Cookies">
        <p>
          Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte
          anzuzeigen.
        </p>
        <p>
          <strong>Verwendungszweck:</strong>
        </p>
        <ul>
          <li>Personalisierte Werbeanzeigen</li>
          <li>Remarketing und Retargeting</li>
          <li>Social Media Integration</li>
          <li>Conversion-Tracking</li>
        </ul>
        <p>
          <strong>Anbieter:</strong> Google Ads, Facebook Pixel
          <br />
          <strong>Speicherdauer:</strong> 30-90 Tage
        </p>
      </LegalSection>

      <LegalSection nr="05" title="Ihre Rechte und Wahlmöglichkeiten">
        <p>Sie haben jederzeit die Kontrolle über Ihre Cookie-Einstellungen:</p>
        <ul>
          <li>
            <strong>Cookie-Banner:</strong> Bei Ihrem ersten Besuch können Sie Ihre Präferenzen
            festlegen
          </li>
          <li>
            <strong>Browser-Einstellungen:</strong> Sie können Cookies in Ihrem Browser
            deaktivieren
          </li>
          <li>
            <strong>Opt-out:</strong> Sie können sich von Tracking-Diensten abmelden
          </li>
          <li>
            <strong>Löschung:</strong> Sie können gespeicherte Cookies jederzeit löschen
          </li>
        </ul>
      </LegalSection>

      <LegalSection nr="06" title="Kontakt & Weitere Informationen">
        <p>Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns gerne:</p>
        <LegalBox>
          <p className="m-0 leading-[1.7]">
            <strong>E-Mail:</strong>{" "}
            <a href="mailto:info@printzzdigital.de">info@printzzdigital.de</a>
            <br />
            <strong>Telefon:</strong> <a href="tel:+4953170201786">0531 - 70201786</a>
          </p>
        </LegalBox>
        <p>
          Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz">Datenschutzerklärung</Link>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
