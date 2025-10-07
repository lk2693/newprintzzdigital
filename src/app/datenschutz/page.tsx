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
            Informationen zur Verarbeitung Ihrer Daten
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
                Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
            </div>
          </section>

          {/* Verantwortlicher */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Verantwortlicher</h2>
            <div className="space-y-2 text-slate-300">
              <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p><strong>Printzz GmbH</strong></p>
                <p>Olaf Jaeschke</p>
                <p>Schuhstraße 42</p>
                <p>38100 Braunschweig</p>
                <p>Deutschland</p>
                <br />
                <p>Telefon: 0531 - 270 33 97</p>
                <p>E-Mail: info@printzz.de</p>
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
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                <strong>Zweck:</strong> Bearbeitung Ihrer Kontaktanfrage<br />
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
                über unsere aktuellen interessanten Angebote informieren.
              </p>
              <p>
                <strong>Verarbeitete Daten:</strong> E-Mail-Adresse, Name (optional)<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit widerrufen
              </p>
            </div>
          </section>

          {/* Server-Log-Dateien */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Server-Log-Dateien</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                so genannten Server-Log-Dateien:
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
                <strong>Zweck:</strong> Sicherstellung der Systemsicherheit und -stabilität
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
              
              <h3 className="text-xl font-semibold text-white mb-3">Arten von Cookies</h3>
              
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
                Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym.
              </p>
              <p>
                <strong>Verwendete Dienste:</strong> Google Analytics, Vercel Analytics<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                <strong>Speicherdauer:</strong> Bis zu 2 Jahre
              </p>

              <h4 className="text-lg font-medium text-white mb-2 mt-4">Marketing-Cookies</h4>
              <p className="mb-3">
                Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte anzuzeigen. 
                Sie können auch zur Messung der Effektivität von Werbekampagnen verwendet werden.
              </p>
              <p>
                <strong>Verwendete Dienste:</strong> Google Ads, Facebook Pixel<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                <strong>Speicherdauer:</strong> 30-90 Tage
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Cookie-Verwaltung</h3>
              <p>
                Sie können Ihre Cookie-Einstellungen jederzeit anpassen oder alle Cookies außer den notwendigen ablehnen. 
                Detaillierte Informationen finden Sie in unserer{" "}
                <a href="/cookies" className="text-blue-400 hover:text-blue-300 underline">
                  Cookie-Richtlinie
                </a>.
              </p>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Ihre Rechte</h2>
            <div className="space-y-3 text-slate-300">
              <p>Sie haben folgende Rechte:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Recht auf Auskunft über Ihre gespeicherten Daten</li>
                <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Recht auf Berichtigung unrichtiger Daten</li>
                <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Recht auf Löschung Ihrer Daten</li>
                <li><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Recht auf Einschränkung der Verarbeitung</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Recht auf Datenportabilität</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Recht auf Widerspruch gegen die Verarbeitung</li>
                <li><strong>Beschwerderecht:</strong> Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
              </ul>
            </div>
          </section>

          {/* Externe Dienste */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Externe Dienste</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">Supabase (Datenbank)</h3>
            <div className="space-y-3 text-slate-300">
              <p>
                Wir verwenden Supabase für die Speicherung und Verarbeitung von Kontaktanfragen und Newsletter-Anmeldungen.
              </p>
              <p>
                <strong>Anbieter:</strong> Supabase Inc., USA<br />
                <strong>Hosting-Standort:</strong> Frankfurt am Main, Deutschland (EU-Region)<br />
                <strong>Datenübertragung:</strong> Alle Daten werden ausschließlich in der EU verarbeitet und gespeichert<br />
                <strong>Datenschutz:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://supabase.com/privacy</a>
              </p>
              <p>
                Die Datenbank wird in einem zertifizierten Rechenzentrum in Frankfurt am Main betrieben und 
                unterliegt somit vollständig der DSGVO. Es findet keine Übertragung personenbezogener Daten 
                in Drittländer statt.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Hosting</h3>
            <div className="space-y-3 text-slate-300">
              <p>
                Diese Website wird bei Vercel gehostet.
              </p>
              <p>
                <strong>Anbieter:</strong> Vercel Inc., USA<br />
                <strong>Datenschutz:</strong> <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://vercel.com/legal/privacy-policy</a>
              </p>
            </div>
          </section>

          {/* SSL Verschlüsselung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. SSL-Verschlüsselung</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
                eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p>
                Wenn die SSL-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, 
                nicht von Dritten mitgelesen werden.
              </p>
            </div>
          </section>

          {/* Änderungen */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Änderungen der Datenschutzerklärung</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an 
                geänderte Rechtslagen oder bei Änderungen unserer Dienstleistungen sowie der 
                Datenverarbeitung anzupassen.
              </p>
              <p>
                <strong>Stand:</strong> August 2025
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
