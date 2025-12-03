import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-white/50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wider">Rechtliches</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-xl text-gray-600">
            Informationen zur Verarbeitung Ihrer Daten
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl space-y-8">
          
          {/* Einleitung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">1</span>
              Datenschutz auf einen Blick
            </h2>
            <div className="space-y-4 text-gray-600 pl-11">
              <h3 className="text-xl font-semibold text-gray-900">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, 
                mit denen Sie persönlich identifiziert werden können.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900">Datenerfassung auf unserer Website</h3>
              <p>
                <strong className="text-gray-900">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <p>
                <strong className="text-gray-900">Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
            </div>
          </section>

          {/* Verantwortlicher */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">2</span>
              Verantwortlicher
            </h2>
            <div className="space-y-2 text-gray-600 pl-11">
              <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                <p><strong className="text-gray-900">Printzz GmbH</strong></p>
                <p>Olaf Jaeschke</p>
                <p>Rischbleek 6</p>
                <p>38126 Braunschweig</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">3</span>
              Datenerfassung auf unserer Website
            </h2>
            <div className="pl-11">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontaktformular</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  <strong className="text-gray-900">Verarbeitete Daten:</strong>
                </p>
                <ul className="list-none space-y-2 ml-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Name und Vorname
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    E-Mail-Adresse
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Telefonnummer (optional)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Unternehmen (optional)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Projektbeschreibung
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Budget und Zeitrahmen (optional)
                  </li>
                </ul>
                <p>
                  <strong className="text-gray-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                  <strong className="text-gray-900">Zweck:</strong> Bearbeitung Ihrer Kontaktanfrage<br />
                  <strong className="text-gray-900">Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage, 
                  längstens 3 Jahre
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">E-Book Downloads</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  Beim Download unserer kostenlosen E-Books erheben wir folgende Daten:
                </p>
                <ul className="list-none space-y-2 ml-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Name und Vorname
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    E-Mail-Adresse
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Unternehmen (optional)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Download-Zeitpunkt
                  </li>
                </ul>
                <p>
                  <strong className="text-gray-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                  <strong className="text-gray-900">Zweck:</strong> Bereitstellung des E-Books und optionaler Newsletter<br />
                  <strong className="text-gray-900">Speicherdauer:</strong> Bis zum Widerruf der Einwilligung
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Newsletter</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  Mit Ihrer Einwilligung können Sie unseren Newsletter abonnieren, mit dem wir Sie 
                  über unsere aktuellen interessanten Angebote informieren.
                </p>
                <p>
                  <strong className="text-gray-900">Verarbeitete Daten:</strong> E-Mail-Adresse, Name (optional)<br />
                  <strong className="text-gray-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                  <strong className="text-gray-900">Widerruf:</strong> Sie können Ihre Einwilligung jederzeit widerrufen
                </p>
              </div>
            </div>
          </section>

          {/* Server-Log-Dateien */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">4</span>
              Server-Log-Dateien
            </h2>
            <div className="space-y-3 text-gray-600 pl-11">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                so genannten Server-Log-Dateien:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Browsertyp und Browserversion
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Verwendetes Betriebssystem
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Referrer URL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Hostname des zugreifenden Rechners
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Uhrzeit der Serveranfrage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  IP-Adresse
                </li>
              </ul>
              <p>
                <strong className="text-gray-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                <strong className="text-gray-900">Zweck:</strong> Sicherstellung der Systemsicherheit und -stabilität
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">5</span>
              Cookies
            </h2>
            <div className="space-y-4 text-gray-600 pl-11">
              <p>
                Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Arten von Cookies</h3>
              
              <h4 className="text-lg font-medium text-gray-900 mb-2">Notwendige Cookies</h4>
              <p className="mb-3">
                Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                Sie speichern Ihre Cookie-Präferenzen und gewährleisten die Sicherheit der Website.
              </p>
              <p>
                <strong className="text-gray-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
              </p>

              <h4 className="text-lg font-medium text-gray-900 mb-2 mt-4">Analyse-Cookies</h4>
              <p className="mb-3">
                Diese Cookies helfen uns dabei, zu verstehen, wie Besucher mit unserer Website interagieren. 
                Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym.
              </p>
              <p>
                <strong className="text-gray-900">Verwendete Dienste:</strong> Google Analytics, Vercel Analytics<br />
                <strong className="text-gray-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                <strong className="text-gray-900">Speicherdauer:</strong> Bis zu 2 Jahre
              </p>

              <h4 className="text-lg font-medium text-gray-900 mb-2 mt-4">Marketing-Cookies</h4>
              <p className="mb-3">
                Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte anzuzeigen. 
                Sie können auch zur Messung der Effektivität von Werbekampagnen verwendet werden.
              </p>
              <p>
                <strong className="text-gray-900">Verwendete Dienste:</strong> Google Ads, Facebook Pixel<br />
                <strong className="text-gray-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                <strong className="text-gray-900">Speicherdauer:</strong> 30-90 Tage
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Cookie-Verwaltung</h3>
              <p>
                Sie können Ihre Cookie-Einstellungen jederzeit anpassen oder alle Cookies außer den notwendigen ablehnen. 
                Detaillierte Informationen finden Sie in unserer{" "}
                <Link href="/cookies" className="text-yellow-600 hover:text-yellow-700 underline">
                  Cookie-Richtlinie
                </Link>.
              </p>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">6</span>
              Ihre Rechte
            </h2>
            <div className="space-y-3 text-gray-600 pl-11">
              <p>Sie haben folgende Rechte:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2"></span>
                  <span><strong className="text-gray-900">Auskunftsrecht (Art. 15 DSGVO):</strong> Recht auf Auskunft über Ihre gespeicherten Daten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2"></span>
                  <span><strong className="text-gray-900">Berichtigungsrecht (Art. 16 DSGVO):</strong> Recht auf Berichtigung unrichtiger Daten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2"></span>
                  <span><strong className="text-gray-900">Löschungsrecht (Art. 17 DSGVO):</strong> Recht auf Löschung Ihrer Daten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2"></span>
                  <span><strong className="text-gray-900">Einschränkungsrecht (Art. 18 DSGVO):</strong> Recht auf Einschränkung der Verarbeitung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2"></span>
                  <span><strong className="text-gray-900">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Recht auf Datenportabilität</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2"></span>
                  <span><strong className="text-gray-900">Widerspruchsrecht (Art. 21 DSGVO):</strong> Recht auf Widerspruch gegen die Verarbeitung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2"></span>
                  <span><strong className="text-gray-900">Beschwerderecht:</strong> Recht auf Beschwerde bei einer Aufsichtsbehörde</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Externe Dienste */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">7</span>
              Externe Dienste
            </h2>
            <div className="pl-11">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supabase (Datenbank)</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  Wir verwenden Supabase für die Speicherung und Verarbeitung von Kontaktanfragen und Newsletter-Anmeldungen.
                </p>
                <p>
                  <strong className="text-gray-900">Anbieter:</strong> Supabase Inc., USA<br />
                  <strong className="text-gray-900">Hosting-Standort:</strong> Frankfurt am Main, Deutschland (EU-Region)<br />
                  <strong className="text-gray-900">Datenübertragung:</strong> Alle Daten werden ausschließlich in der EU verarbeitet und gespeichert<br />
                  <strong className="text-gray-900">Datenschutz:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 underline">https://supabase.com/privacy</a>
                </p>
                <p>
                  Die Datenbank wird in einem zertifizierten Rechenzentrum in Frankfurt am Main betrieben und 
                  unterliegt somit vollständig der DSGVO. Es findet keine Übertragung personenbezogener Daten 
                  in Drittländer statt.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Hosting</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  Diese Website wird bei Vercel gehostet.
                </p>
                <p>
                  <strong className="text-gray-900">Anbieter:</strong> Vercel Inc., USA<br />
                  <strong className="text-gray-900">Datenschutz:</strong> <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 underline">https://vercel.com/legal/privacy-policy</a>
                </p>
              </div>
            </div>
          </section>

          {/* SSL Verschlüsselung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">8</span>
              SSL-Verschlüsselung
            </h2>
            <div className="space-y-3 text-gray-600 pl-11">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
                eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p>
                Wenn die SSL-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, 
                nicht von Dritten mitgelesen werden.
              </p>
            </div>
          </section>

          {/* Änderungen */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">9</span>
              Änderungen der Datenschutzerklärung
            </h2>
            <div className="space-y-3 text-gray-600 pl-11">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an 
                geänderte Rechtslagen oder bei Änderungen unserer Dienstleistungen sowie der 
                Datenverarbeitung anzupassen.
              </p>
              <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-semibold">
                  Stand: August 2025
                </p>
              </div>
            </div>
          </section>

        </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
