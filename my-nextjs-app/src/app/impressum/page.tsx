import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impressum | Printzz GmbH',
  description: 'Impressum und rechtliche Informationen der Printzz GmbH.',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-gray-100 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Zurück Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Zurück zur Startseite</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-700 text-sm font-semibold rounded-full mb-4">
            Rechtliches
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Impressum
          </h1>
          <p className="text-gray-600 text-lg">
            Angaben gemäß § 5 TMG
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 md:p-12">
          <div className="space-y-8">
            
            {/* 1. Firmeninformationen */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full">1</span>
                <h2 className="text-xl font-bold text-gray-900">Firmeninformationen</h2>
              </div>
              <div className="pl-11 space-y-1">
                <p className="text-gray-700 font-semibold">Printzz GmbH</p>
                <p className="text-gray-600">Geschäftsführer: Olaf Jaeschke</p>
              </div>
            </section>

            {/* 2. Geschäftsadresse */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full">2</span>
                <h2 className="text-xl font-bold text-gray-900">Geschäftsadresse</h2>
              </div>
              <div className="pl-11 space-y-1">
                <p className="text-gray-600">Printzz GmbH</p>
                <p className="text-gray-600">Schuhstraße 42</p>
                <p className="text-gray-600">38100 Braunschweig</p>
                <p className="text-gray-600">DEUTSCHLAND</p>
              </div>
            </section>

            {/* 3. Produktion */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full">3</span>
                <h2 className="text-xl font-bold text-gray-900">Produktion</h2>
              </div>
              <div className="pl-11 space-y-1">
                <p className="text-gray-600">Rischbleek 6</p>
                <p className="text-gray-600">38126 Braunschweig</p>
                <p className="text-gray-600">DEUTSCHLAND</p>
              </div>
            </section>

            {/* 4. Vertreten durch */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full">4</span>
                <h2 className="text-xl font-bold text-gray-900">Vertreten durch</h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700">Olaf Jaeschke</p>
              </div>
            </section>

            {/* 5. Kontakt */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full">5</span>
                <h2 className="text-xl font-bold text-gray-900">Kontakt</h2>
              </div>
              <div className="pl-11 space-y-1">
                <p className="text-gray-600">
                  <span className="font-medium">Telefon:</span> <a href="tel:+495312703397" className="text-yellow-600 hover:text-yellow-700 underline transition-colors">0531 - 270 33 97</a>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Telefax:</span> 0531 - 270 33 98
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">E-Mail:</span> <a href="mailto:info@printzz.de" className="text-yellow-600 hover:text-yellow-700 underline transition-colors">info@printzz.de</a>
                </p>
              </div>
            </section>

            {/* 6. Registereintrag */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full">6</span>
                <h2 className="text-xl font-bold text-gray-900">Registereintrag</h2>
              </div>
              <div className="pl-11 space-y-1">
                <p className="text-gray-600">Eintragung im Handelsregister</p>
                <p className="text-gray-600"><span className="font-medium">Registergericht:</span> Amtsgericht Braunschweig</p>
                <p className="text-gray-600"><span className="font-medium">Registernummer:</span> HRB203533</p>
              </div>
            </section>

            {/* 7. Umsatzsteuer-ID */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full">7</span>
                <h2 className="text-xl font-bold text-gray-900">Umsatzsteuer-ID</h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-600">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                <p className="text-gray-700 font-semibold mt-1">DE281896307</p>
              </div>
            </section>

            {/* 8. Verantwortlich für den Inhalt */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full">8</span>
                <h2 className="text-xl font-bold text-gray-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              </div>
              <div className="pl-11 space-y-1">
                <p className="text-gray-700 font-semibold">Olaf Jaeschke</p>
                <p className="text-gray-600">Schuhstraße 42</p>
                <p className="text-gray-600">38100 Braunschweig</p>
                <p className="text-gray-600">DEUTSCHLAND</p>
              </div>
            </section>

            {/* 9. EU-Streitschlichtung */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full">9</span>
                <h2 className="text-xl font-bold text-gray-900">EU-Streitschlichtung</h2>
              </div>
              <div className="pl-11 space-y-2">
                <p className="text-gray-600">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 underline transition-colors"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-gray-600">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>
            </section>

            {/* 10. Verbraucherstreitbeilegung */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full">10</span>
                <h2 className="text-xl font-bold text-gray-900">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-600">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </section>

          </div>

          {/* Stand Box */}
          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
            <p className="text-gray-700 text-center">
              <span className="font-semibold">Stand:</span> Dezember 2025
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
