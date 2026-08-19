import Link from "next/link";

import { LegalShell, LegalSection, LegalBox } from "@/components/landing/Legal";

export default function DatenschutzPage() {
  return (
    <LegalShell
      title="Datenschutzerklärung"
      subtitle="Informationen zur Verarbeitung Ihrer Daten"
      stand="August 2025"
    >
      <LegalSection nr="01" title="Datenschutz auf einen Blick">
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene
          Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
        <h3>Datenerfassung auf unserer Website</h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
          <br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
          Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
        </p>
        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong>
          <br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
          es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
      </LegalSection>

      <LegalSection nr="02" title="Verantwortlicher">
        <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
        <LegalBox>
          <p className="m-0 leading-[1.7]">
            <strong>Printzz GmbH</strong>
            <br />
            Olaf Jaeschke
            <br />
            Rischbleek 6
            <br />
            38126 Braunschweig
            <br />
            Deutschland
          </p>
          <p className="m-0 mt-3 leading-[1.7]">
            Telefon: 0531 - 70201786
            <br />
            E-Mail: info@printzzdigital.de
          </p>
        </LegalBox>
        <p>
          Verantwortlicher ist die natürliche oder juristische Person, die allein oder gemeinsam
          mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
          entscheidet.
        </p>
      </LegalSection>

      <LegalSection nr="03" title="Datenerfassung auf unserer Website">
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
          der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
        </p>
        <p>
          <strong>Verarbeitete Daten:</strong>
        </p>
        <ul>
          <li>Name und Vorname</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer (optional)</li>
          <li>Unternehmen (optional)</li>
          <li>Projektbeschreibung</li>
          <li>Budget und Zeitrahmen (optional)</li>
        </ul>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
          <br />
          <strong>Zweck:</strong> Bearbeitung Ihrer Kontaktanfrage
          <br />
          <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage,
          längstens 3 Jahre
        </p>

        <h3>E-Book Downloads</h3>
        <p>Beim Download unserer kostenlosen E-Books erheben wir folgende Daten:</p>
        <ul>
          <li>Name und Vorname</li>
          <li>E-Mail-Adresse</li>
          <li>Unternehmen (optional)</li>
          <li>Download-Zeitpunkt</li>
        </ul>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
          <br />
          <strong>Zweck:</strong> Bereitstellung des E-Books und optionaler Newsletter
          <br />
          <strong>Speicherdauer:</strong> Bis zum Widerruf der Einwilligung
        </p>

        <h3>Website-Check</h3>
        <p>
          Unser kostenloser Website-Check ruft ausschließlich öffentlich sichtbare Daten der von
          Ihnen angegebenen Website ab. Wenn Sie die detaillierte Auswertung freischalten oder ein
          Beratungsgespräch anfragen, erheben wir folgende Daten:
        </p>
        <ul>
          <li>E-Mail-Adresse</li>
          <li>Name (optional)</li>
          <li>Telefonnummer (optional, bei Termin-Anfrage)</li>
          <li>Geprüfte Website-Adresse und Check-Ergebnis</li>
        </ul>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
          <br />
          <strong>Zweck:</strong> Zusendung der Auswertung und Kontaktaufnahme zu Ihrem
          Website-Check bzw. Terminvereinbarung
          <br />
          <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage,
          längstens 3 Jahre; bei Widerruf der Einwilligung früher
        </p>

        <h3>Newsletter</h3>
        <p>
          Mit Ihrer Einwilligung können Sie unseren Newsletter abonnieren, mit dem wir Sie über
          unsere aktuellen interessanten Angebote informieren.
        </p>
        <p>
          <strong>Verarbeitete Daten:</strong> E-Mail-Adresse, Name (optional)
          <br />
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
          <br />
          <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit widerrufen
        </p>
      </LegalSection>

      <LegalSection nr="04" title="Server-Log-Dateien">
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
          Server-Log-Dateien:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
          <br />
          <strong>Zweck:</strong> Sicherstellung der Systemsicherheit und -stabilität
        </p>
      </LegalSection>

      <LegalSection nr="05" title="Cookies">
        <p>
          Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten.
          Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden.
        </p>

        <h3>Arten von Cookies</h3>

        <h4>Notwendige Cookies</h4>
        <p>
          Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht
          deaktiviert werden. Sie speichern Ihre Cookie-Präferenzen und gewährleisten die
          Sicherheit der Website.
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
        </p>

        <h4>Analyse-Cookies</h4>
        <p>
          Diese Cookies helfen uns dabei, zu verstehen, wie Besucher mit unserer Website
          interagieren. Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher
          anonym.
        </p>
        <p>
          <strong>Verwendete Dienste:</strong> Google Analytics, Vercel Analytics
          <br />
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
          <br />
          <strong>Speicherdauer:</strong> Bis zu 2 Jahre
        </p>

        <h4>Marketing-Cookies</h4>
        <p>
          Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte
          anzuzeigen. Sie können auch zur Messung der Effektivität von Werbekampagnen verwendet
          werden.
        </p>
        <p>
          <strong>Verwendete Dienste:</strong> Google Ads, Facebook Pixel
          <br />
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
          <br />
          <strong>Speicherdauer:</strong> 30-90 Tage
        </p>

        <h3>Cookie-Verwaltung</h3>
        <p>
          Sie können Ihre Cookie-Einstellungen jederzeit anpassen oder alle Cookies außer den
          notwendigen ablehnen. Detaillierte Informationen finden Sie in unserer{" "}
          <Link href="/cookies">Cookie-Richtlinie</Link>.
        </p>
      </LegalSection>

      <LegalSection nr="06" title="Ihre Rechte">
        <p>Sie haben folgende Rechte:</p>
        <ul>
          <li>
            <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Recht auf Auskunft über Ihre
            gespeicherten Daten
          </li>
          <li>
            <strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Recht auf Berichtigung
            unrichtiger Daten
          </li>
          <li>
            <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Recht auf Löschung Ihrer Daten
          </li>
          <li>
            <strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Recht auf Einschränkung der
            Verarbeitung
          </li>
          <li>
            <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Recht auf Datenportabilität
          </li>
          <li>
            <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Recht auf Widerspruch gegen die
            Verarbeitung
          </li>
          <li>
            <strong>Beschwerderecht:</strong> Recht auf Beschwerde bei einer Aufsichtsbehörde
          </li>
        </ul>
      </LegalSection>

      <LegalSection nr="07" title="Externe Dienste">
        <h3>Supabase (Datenbank)</h3>
        <p>
          Wir verwenden Supabase für die Speicherung und Verarbeitung von Kontaktanfragen und
          Newsletter-Anmeldungen.
        </p>
        <p>
          <strong>Anbieter:</strong> Supabase Inc., USA
          <br />
          <strong>Hosting-Standort:</strong> Frankfurt am Main, Deutschland (EU-Region)
          <br />
          <strong>Datenübertragung:</strong> Alle Daten werden ausschließlich in der EU
          verarbeitet und gespeichert
          <br />
          <strong>Datenschutz:</strong>{" "}
          <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
            https://supabase.com/privacy
          </a>
        </p>
        <p>
          Die Datenbank wird in einem zertifizierten Rechenzentrum in Frankfurt am Main betrieben
          und unterliegt somit vollständig der DSGVO. Es findet keine Übertragung
          personenbezogener Daten in Drittländer statt.
        </p>

        <h3>Hosting</h3>
        <p>Diese Website wird bei Vercel gehostet.</p>
        <p>
          <strong>Anbieter:</strong> Vercel Inc., USA
          <br />
          <strong>Datenschutz:</strong>{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://vercel.com/legal/privacy-policy
          </a>
        </p>
      </LegalSection>

      <LegalSection nr="08" title="SSL-Verschlüsselung">
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
          Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot;
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
          übermitteln, nicht von Dritten mitgelesen werden.
        </p>
      </LegalSection>

      <LegalSection nr="09" title="Änderungen der Datenschutzerklärung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an
          geänderte Rechtslagen oder bei Änderungen unserer Dienstleistungen sowie der
          Datenverarbeitung anzupassen.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
