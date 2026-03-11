import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-xl text-slate-300">
            PrintzzDigital – Printzz GmbH | Stand: März 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 space-y-8">
          
          {/* Einleitung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
            <div className="space-y-4 text-slate-300">
              <h3 className="text-xl font-semibold text-white">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, 
                mit denen Sie persönlich identifiziert werden können.
              </p>
              
              <h3 className="text-xl font-semibold text-white">Datenerfassung auf unserer Website</h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst 
                (z. B. Browser, Betriebssystem, Uhrzeit des Seitenaufrufs).
              </p>
            </div>
          </section>

          {/* Verantwortlicher */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Verantwortlicher</h2>
            <div className="space-y-2 text-slate-300">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p><strong>Printzz GmbH (Auftritt: PrintzzDigital)</strong></p>
                <p>Olaf Jaeschke</p>
                <p>Rischbleek 6</p>
                <p>38126 Braunschweig</p>
                <p>Deutschland</p>
                <br />
                <p>Telefon: 0531 – 70201786</p>
                <p>E-Mail: info@printzzdigital.de</p>
              </div>
              <p>
                Verantwortlicher ist die natürliche oder juristische Person, die allein oder gemeinsam 
                mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </div>
          </section>

          {/* Datenerfassung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Datenerfassung auf unserer Website</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">Kontaktformular</h3>
            <div className="space-y-3 text-slate-300">
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p>
                <strong>Verarbeitete Daten:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name und Vorname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Unternehmen (optional)</li>
                <li>Projektbeschreibung</li>
                <li>Budget und Zeitrahmen (optional)</li>
              </ul>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)<br />
                <strong>Zweck:</strong> Bearbeitung Ihrer Kontaktanfrage als potenzielle Geschäftsanfrage<br />
                <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage, 
                längstens 3 Jahre
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">E-Book Downloads</h3>
            <div className="space-y-3 text-slate-300">
              <p>
                Beim Download unserer kostenlosen E-Books erheben wir folgende Daten:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name und Vorname</li>
                <li>E-Mail-Adresse</li>
                <li>Unternehmen (optional)</li>
                <li>Download-Zeitpunkt</li>
              </ul>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                <strong>Zweck:</strong> Bereitstellung des E-Books und optionaler Newsletter<br />
                <strong>Speicherdauer:</strong> Bis zum Widerruf der Einwilligung
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Newsletter</h3>
            <div className="space-y-3 text-slate-300">
              <p>
                Mit Ihrer Einwilligung können Sie unseren Newsletter abonnieren, mit dem wir Sie 
                über unsere aktuellen Angebote informieren.
              </p>
              <p>
                <strong>Verarbeitete Daten:</strong> E-Mail-Adresse, Name (optional)<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit widerrufen.
              </p>
            </div>
          </section>

          {/* Server-Log-Dateien */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Server-Log-Dateien</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                so genannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                <strong>Zweck:</strong> Sicherstellung der Systemsicherheit und -stabilität<br />
                <strong>Speicherdauer:</strong> 7–30 Tage; danach automatische Löschung
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden.
              </p>
              
              <h4 className="text-lg font-medium text-white mb-2">Notwendige Cookies</h4>
              <p className="mb-3">
                Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                Sie speichern Ihre Cookie-Präferenzen und gewährleisten die Sicherheit der Website.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
              </p>

              <h4 className="text-lg font-medium text-white mb-2 mt-4">Analyse-Cookies</h4>
              <p className="mb-3">
                Diese Cookies helfen uns dabei, zu verstehen, wie Besucher mit unserer Website interagieren.
              </p>
              <p>
                <strong>Verwendete Dienste:</strong> Google Analytics (cookiebasiert, mit Einwilligung)<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                <strong>Speicherdauer:</strong> Bis zu 2 Jahre
              </p>

              <h4 className="text-lg font-medium text-white mb-2 mt-4">Datenschutzfreundliches Tracking: Vercel Analytics</h4>
              <p className="mb-3">
                Wir nutzen Vercel Analytics, ein datenschutzfreundliches Analysetool, das ohne Cookies, 
                ohne Fingerprinting und ohne Verarbeitung personenbezogener Daten auskommt. Es werden 
                ausschließlich anonymisierte, aggregierte Nutzungsdaten erhoben.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) – keine Einwilligung erforderlich, da keine personenbezogenen Daten verarbeitet werden<br />
                <strong>Anbieter:</strong> Vercel Inc., USA (Datenverarbeitung ausschließlich anonym/aggregiert)
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Cookie-Verwaltung</h3>
              <p>
                Sie können Ihre Cookie-Einstellungen jederzeit anpassen oder alle Cookies außer den notwendigen ablehnen. 
                Analyse-Cookies (Google Analytics) werden erst nach Ihrer aktiven Zustimmung gesetzt.
              </p>
            </div>
          </section>

          {/* Google Analytics */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Google Analytics</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited 
                (Gordon House, Barrow Street, Dublin 4, Irland).
              </p>
              <p>
                <strong>Verarbeitete Daten:</strong> Nutzungsverhalten, IP-Adresse (anonymisiert), Geräteinformationen, Standortdaten (Stadt-Ebene)<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                <strong>Zweck:</strong> Analyse des Nutzerverhaltens zur Optimierung unseres Webangebots<br />
                <strong>Speicherdauer:</strong> Bis zu 14 Monate (konfigurierbar)<br />
                <strong>Drittlandübertragung:</strong> Google LLC, USA – Grundlage: EU-Standardvertragsklauseln gem. Art. 46 Abs. 2 lit. c DSGVO<br />
                <strong>Auftragsverarbeitungsvertrag:</strong> Mit Google Ireland Limited gem. Art. 28 DSGVO abgeschlossen
              </p>
              <p>
                <strong>IP-Anonymisierung:</strong> Wir haben die IP-Anonymisierung (IP-Masking) aktiviert. 
                Ihre IP-Adresse wird innerhalb der EU gekürzt, bevor sie an Google-Server übertragen wird.
              </p>
              <p>
                <strong>Opt-Out:</strong> Sie können die Erfassung durch Google Analytics verhindern, indem Sie das Browser-Add-on installieren:{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://tools.google.com/dlpage/gaoptout</a><br />
                <strong>Datenschutzerklärung Google:</strong>{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://policies.google.com/privacy</a>
              </p>
            </div>
          </section>

          {/* Externe Dienste */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Externe Dienste</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">Hosting: Vercel</h3>
            <div className="space-y-3 text-slate-300">
              <p>
                Diese Website wird bei Vercel gehostet.
              </p>
              <p>
                <strong>Anbieter:</strong> Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA<br />
                <strong>Drittlandübertragung:</strong> USA – Grundlage: EU-Standardvertragsklauseln gem. Art. 46 Abs. 2 lit. c DSGVO<br />
                <strong>Auftragsverarbeitungsvertrag:</strong> Gem. Art. 28 DSGVO abgeschlossen<br />
                <strong>Datenschutz:</strong>{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://vercel.com/legal/privacy-policy</a>
              </p>
              <p>
                Vercel verarbeitet beim Hosting Server-Log-Daten (IP-Adresse, Zeitstempel, angefragte Ressource). 
                Diese Daten werden für den sicheren Betrieb der Website benötigt.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Datenbank: Supabase</h3>
            <div className="space-y-3 text-slate-300">
              <p>
                Wir verwenden Supabase für die Speicherung und Verarbeitung von Kontaktanfragen und Newsletter-Anmeldungen.
              </p>
              <p>
                <strong>Anbieter:</strong> Supabase Inc., USA<br />
                <strong>Hosting-Standort:</strong> Frankfurt am Main, Deutschland (EU-Region)<br />
                <strong>Drittlandübertragung:</strong> Alle Daten werden ausschließlich in der EU verarbeitet und gespeichert. Keine Übertragung in Drittländer.<br />
                <strong>Auftragsverarbeitungsvertrag:</strong> Gem. Art. 28 DSGVO abgeschlossen<br />
                <strong>Datenschutz:</strong>{" "}
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://supabase.com/privacy</a>
              </p>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Ihre Rechte</h2>
            <div className="space-y-3 text-slate-300">
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Recht auf Auskunft über Ihre gespeicherten Daten</li>
                <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Recht auf Berichtigung unrichtiger Daten</li>
                <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Recht auf Löschung Ihrer Daten</li>
                <li><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Recht auf Einschränkung der Verarbeitung</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Recht auf Datenportabilität</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Recht auf Widerspruch gegen die Verarbeitung</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Beschwerderecht bei der Aufsichtsbehörde</h3>
              <p>Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren:</p>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p><strong>Landesbeauftragte für den Datenschutz Niedersachsen (LfD Niedersachsen)</strong></p>
                <p>Prinzenstraße 5, 30159 Hannover</p>
                <p>Telefon: 0511 120-4500</p>
                <p>E-Mail: poststelle@lfd.niedersachsen.de</p>
                <p>Website:{" "}
                  <a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://www.lfd.niedersachsen.de</a>
                </p>
              </div>
            </div>
          </section>

          {/* SSL Verschlüsselung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. SSL-Verschlüsselung</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
                eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </section>

          {/* Änderungen */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Änderungen der Datenschutzerklärung</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an 
                geänderte Rechtslagen oder bei Änderungen unserer Dienstleistungen sowie der 
                Datenverarbeitung anzupassen. Wir empfehlen Ihnen, diese Seite regelmäßig zu besuchen, 
                um sich über mögliche Änderungen zu informieren.
              </p>
              <p>
                <strong>Stand:</strong> März 2026
              </p>
            </div>
          </section>

        </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
