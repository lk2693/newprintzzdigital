import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function AGBPage() {
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
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-xl text-slate-300">
            AGB für digitale Dienstleistungen
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 space-y-8">
          
          {/* Geltungsbereich */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Geltungsbereich</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der 
                Printzz GmbH (nachfolgend "Auftragnehmer") und ihren Auftraggebern (nachfolgend "Auftraggeber") 
                über die Erbringung von Dienstleistungen im Bereich Webentwicklung, Software-Entwicklung, 
                KI-Integration, Automatisierung und digitale Transformation.
              </p>
              <p>
                Abweichende Bedingungen des Auftraggebers werden nur wirksam, wenn sie ausdrücklich 
                schriftlich anerkannt werden.
              </p>
            </div>
          </section>

          {/* Vertragsschluss */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Vertragsschluss</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>2.1</strong> Angebote des Auftragnehmers sind freibleibend und unverbindlich, 
                sofern nicht ausdrücklich als verbindlich bezeichnet.
              </p>
              <p>
                <strong>2.2</strong> Ein Vertrag kommt durch schriftliche Auftragsbestätigung des 
                Auftragnehmers oder durch Beginn der Leistungserbringung zustande.
              </p>
              <p>
                <strong>2.3</strong> Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform.
              </p>
            </div>
          </section>

          {/* Leistungen */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Leistungen</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>3.1 Leistungsumfang:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Website- und Webshop-Entwicklung</li>
                <li>Custom Software-Entwicklung</li>
                <li>KI-Integration und Machine Learning</li>
                <li>Automatisierung von Geschäftsprozessen</li>
                <li>Digitale Transformation und Beratung</li>
                <li>Wartung und Support</li>
              </ul>
              <p>
                <strong>3.2</strong> Der genaue Leistungsumfang ergibt sich aus der jeweiligen 
                Projektbeschreibung und dem Angebot.
              </p>
              <p>
                <strong>3.3</strong> Änderungswünsche des Auftraggebers während der Projektlaufzeit 
                können zu Mehrkosten und Terminverschiebungen führen.
              </p>
            </div>
          </section>

          {/* Mitwirkungspflichten */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Mitwirkungspflichten des Auftraggebers</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>4.1</strong> Der Auftraggeber stellt alle für die Projektdurchführung 
                erforderlichen Informationen, Unterlagen und Zugänge rechtzeitig zur Verfügung.
              </p>
              <p>
                <strong>4.2</strong> Der Auftraggeber benennt einen fachlich qualifizierten 
                Ansprechpartner, der bevollmächtigt ist, die erforderlichen Entscheidungen zu treffen.
              </p>
              <p>
                <strong>4.3</strong> Verzögerungen durch unzureichende Mitwirkung des Auftraggebers 
                können zu Terminverschiebungen und Mehrkosten führen.
              </p>
            </div>
          </section>

          {/* Vergütung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Vergütung und Zahlungsbedingungen</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>5.1</strong> Die Vergütung richtet sich nach dem vereinbarten Angebot. 
                Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
              </p>
              <p>
                <strong>5.2 Zahlungsmodalitäten:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Bei Kleinprojekten (bis €5.000): 50% Anzahlung, 50% bei Fertigstellung</li>
                <li>Bei größeren Projekten: Nach Vereinbarung in Teilabschnitten</li>
                <li>Zahlungsziel: 14 Tage netto</li>
              </ul>
              <p>
                <strong>5.3</strong> Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9% über 
                dem Basiszinssatz berechnet.
              </p>
            </div>
          </section>

          {/* Termine */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Termine und Fristen</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>6.1</strong> Termine und Fristen sind nur dann verbindlich, wenn sie 
                ausdrücklich als verbindlich vereinbart wurden.
              </p>
              <p>
                <strong>6.2</strong> Terminverschiebungen durch höhere Gewalt, Streik oder 
                unzureichende Mitwirkung des Auftraggebers führen zu entsprechender Verlängerung 
                der Lieferfristen.
              </p>
            </div>
          </section>

          {/* Gewährleistung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Gewährleistung</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>7.1</strong> Der Auftragnehmer gewährleistet, dass die Leistungen entsprechend 
                dem vereinbarten Stand der Technik erbracht werden.
              </p>
              <p>
                <strong>7.2</strong> Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme bzw. 
                Inbetriebnahme der Software.
              </p>
              <p>
                <strong>7.3</strong> Bei berechtigten Mängelrügen wird der Auftragnehmer zunächst 
                Nachbesserung leisten. Schlägt die Nachbesserung zweimal fehl, kann der Auftraggeber 
                Minderung oder Rücktritt verlangen.
              </p>
            </div>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Urheberrecht und Nutzungsrechte</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>8.1</strong> Der Auftragnehmer räumt dem Auftraggeber nach vollständiger 
                Zahlung die erforderlichen Nutzungsrechte an den erstellten Werken ein.
              </p>
              <p>
                <strong>8.2</strong> Der Auftraggeber erhält ein einfaches, übertragbares Nutzungsrecht 
                für den vereinbarten Verwendungszweck.
              </p>
              <p>
                <strong>8.3</strong> Der Quellcode wird nur bei ausdrücklicher Vereinbarung übertragen.
              </p>
              <p>
                <strong>8.4</strong> Der Auftragnehmer darf das Projekt zu Referenzzwecken verwenden.
              </p>
            </div>
          </section>

          {/* Vertraulichkeit */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Vertraulichkeit</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>9.1</strong> Beide Parteien verpflichten sich, alle im Rahmen der 
                Zusammenarbeit bekannt gewordenen vertraulichen Informationen streng vertraulich 
                zu behandeln.
              </p>
              <p>
                <strong>9.2</strong> Die Vertraulichkeitspflicht besteht über die Beendigung 
                des Vertragsverhältnisses hinaus.
              </p>
            </div>
          </section>

          {/* Haftung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Haftung</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>10.1</strong> Der Auftragnehmer haftet unbeschränkt für Vorsatz und 
                grobe Fahrlässigkeit sowie für Schäden aus der Verletzung von Leben, Körper und Gesundheit.
              </p>
              <p>
                <strong>10.2</strong> Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei 
                Verletzung wesentlicher Vertragspflichten, beschränkt auf den typischen, 
                vorhersehbaren Schaden.
              </p>
              <p>
                <strong>10.3</strong> Die Haftung für mittelbare Schäden und entgangenen Gewinn 
                ist ausgeschlossen, soweit gesetzlich zulässig.
              </p>
            </div>
          </section>

          {/* Support und Wartung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Support und Wartung</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>11.1</strong> Support- und Wartungsleistungen werden nur gegen gesonderte 
                Vergütung erbracht, sofern nicht anders vereinbart.
              </p>
              <p>
                <strong>11.2</strong> Kostenloser Support beschränkt sich auf schwerwiegende 
                Funktionsfehler innerhalb der ersten 30 Tage nach Projektabschluss.
              </p>
            </div>
          </section>

          {/* Kündigung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Kündigung</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>12.1</strong> Beide Parteien können den Vertrag mit einer Frist von 
                4 Wochen zum Monatsende kündigen, sofern nicht anders vereinbart.
              </p>
              <p>
                <strong>12.2</strong> Das Recht zur außerordentlichen Kündigung aus wichtigem 
                Grund bleibt unberührt.
              </p>
              <p>
                <strong>12.3</strong> Bei Kündigung sind bis zum Kündigungszeitpunkt erbrachte 
                Leistungen zu vergüten.
              </p>
            </div>
          </section>

          {/* Salvatorische Klausel */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Schlussbestimmungen</h2>
            <div className="space-y-3 text-slate-300">
              <p>
                <strong>13.1</strong> Sollten einzelne Bestimmungen dieser AGB unwirksam sein, 
                berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
              </p>
              <p>
                <strong>13.2</strong> Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
              </p>
              <p>
                <strong>13.3</strong> Gerichtsstand ist Braunschweig, sofern der Auftraggeber 
                Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches 
                Sondervermögen ist.
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
