import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
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
            Impressum
          </h1>
          <p className="text-xl text-slate-300">
            Angaben gemäß § 5 TMG
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 space-y-8">
          
          {/* Firmeninformationen */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Firmeninformationen</h2>
            <div className="space-y-2 text-slate-300">
              <p className="text-lg font-semibold text-white">Printzz GmbH</p>
              <p>Geschäftsführer: Olaf Jaeschke</p>
            </div>
          </section>

          {/* Anschrift */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Geschäftsadresse</h2>
            <div className="space-y-1 text-slate-300">
              <p>Printzz GmbH</p>
              <p>Schuhstraße 42</p>
              <p>38100 Braunschweig</p>
              <p>DEUTSCHLAND</p>
            </div>
          </section>

          {/* Produktion */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Produktion</h2>
            <div className="space-y-1 text-slate-300">
              <p>Rischbleek 6</p>
              <p>38126 Braunschweig</p>
              <p>DEUTSCHLAND</p>
            </div>
          </section>

          {/* Vertreten durch */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Vertreten durch</h2>
            <p className="text-slate-300">Olaf Jaeschke</p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
            <div className="space-y-2 text-slate-300">
              <p><span className="font-medium">Telefon:</span> 0531 - 270 33 97</p>
              <p><span className="font-medium">Telefax:</span> 0531 - 270 33 98</p>
              <p><span className="font-medium">E-Mail:</span> info@printzz.de</p>
            </div>
          </section>

          {/* Registereintrag */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Registereintrag</h2>
            <div className="space-y-2 text-slate-300">
              <p>Eintragung im Handelsregister</p>
              <p><span className="font-medium">Registergericht:</span> Amtsgericht Braunschweig</p>
              <p><span className="font-medium">Registernummer:</span> HRB203533</p>
            </div>
          </section>

          {/* Umsatzsteuer-ID */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Umsatzsteuer-ID</h2>
            <div className="space-y-2 text-slate-300">
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
              <p className="font-medium">DE281896307</p>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="space-y-1 text-slate-300">
              <p>Olaf Jaeschke</p>
              <p>Schuhstraße 42</p>
              <p>38100 Braunschweig</p>
              <p>DEUTSCHLAND</p>
            </div>
          </section>

          {/* EU-Streitschlichtung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">EU-Streitschlichtung</h2>
            <div className="space-y-2 text-slate-300">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 ml-1 underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <div className="space-y-2 text-slate-300">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
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
