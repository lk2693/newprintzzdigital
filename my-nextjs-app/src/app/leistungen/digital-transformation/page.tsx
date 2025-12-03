import Link from "next/link";
import { ArrowLeft, TrendingUp, Target, Layers, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Digital Transformation | Printzz Digital',
  description: 'Ganzheitliche digitale Transformation für Ihr Unternehmen. Von Strategie über Implementation bis zur Skalierung.',
};

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-gray-100">
      <Header />

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>

          {/* Hero */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-700 text-sm font-semibold rounded-full">
                Leistungen
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-gray-900">
              Digital{" "}
              <span className="text-yellow-500">
                Transformation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Ganzheitliche digitale Transformation für Ihr Unternehmen. Von der Strategie über die Implementation bis zur erfolgreichen Skalierung.
            </p>
          </div>

          {/* Key Stat */}
          <div className="bg-white border border-gray-200 rounded-3xl p-12 mb-32 shadow-xl">
            <div className="text-5xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">
                3x
              </span>{" "}
              schnellere Time-to-Market
            </div>
            <p className="text-gray-600">
              Durch strukturierte Digitalisierung und moderne Prozesse
            </p>
          </div>

          {/* What is Digital Transformation */}
          <div className="mb-32">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-700 text-sm font-semibold rounded-full mb-6">
              Überblick
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Was ist Digital Transformation?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
              Digital Transformation bedeutet mehr als nur neue Software. Es geht um die fundamentale Neuausrichtung 
              Ihres Business auf digitale Prozesse, Datengetriebene Entscheidungen und moderne Technologie-Stacks.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Strategie', description: 'Digitale Vision & Roadmap' },
                { name: 'Prozesse', description: 'Workflow-Optimierung' },
                { name: 'Technologie', description: 'Moderne Tool-Stacks' },
                { name: 'Kultur', description: 'Change Management' },
              ].map((pillar, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.name}</h3>
                  <p className="text-sm text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-32">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-700 text-sm font-semibold rounded-full mb-6">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              End-to-End <span className="text-yellow-500">Begleitung</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Digital Strategy',
                  description: 'Entwicklung einer klaren digitalen Vision und Roadmap mit messbaren Zielen und Meilensteinen.'
                },
                {
                  icon: Layers,
                  title: 'Technology Stack',
                  description: 'Auswahl und Implementation moderner Tools: CRM, Marketing-Automation, Analytics und mehr.'
                },
                {
                  icon: RefreshCw,
                  title: 'Process Optimization',
                  description: 'Redesign von Geschäftsprozessen für maximale Effizienz und Automatisierung.'
                },
                {
                  icon: TrendingUp,
                  title: 'Change Management',
                  description: 'Begleitung Ihrer Teams durch den Transformationsprozess mit Training und Support.'
                }
              ].map((service, index) => (
                <div key={index} className="flex gap-6 bg-white border border-gray-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Framework */}
          <div className="mb-32">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-700 text-sm font-semibold rounded-full mb-6">
              Vorgehen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Unser Transformation <span className="text-yellow-500">Framework</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Assessment', 
                  description: 'Analyse aktueller Stand, Herausforderungen und Digitalisierungs-Potenziale'
                },
                { 
                  step: '02', 
                  title: 'Strategy', 
                  description: 'Entwicklung digitaler Vision, Roadmap und Business-Case mit ROI-Berechnung'
                },
                { 
                  step: '03', 
                  title: 'Implementation', 
                  description: 'Schrittweise Umsetzung mit Quick Wins und messbaren Erfolgen'
                },
                { 
                  step: '04', 
                  title: 'Scale', 
                  description: 'Kontinuierliche Optimierung und Expansion auf weitere Bereiche'
                }
              ].map((phase, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-lg transition-all">
                  <div className="text-4xl font-bold text-yellow-500 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-32">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-700 text-sm font-semibold rounded-full mb-6">
              Ergebnisse
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Typische <span className="text-yellow-500">Erfolge</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: 'Time-to-Market', value: '3x schneller' },
                { metric: 'Kostenreduktion', value: '-40%' },
                { metric: 'Produktivität', value: '+60%' },
                { metric: 'Customer Satisfaction', value: '+45%' }
              ].map((result, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-yellow-400 hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">
                    {result.value}
                  </div>
                  <div className="text-sm text-gray-600">{result.metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white border border-gray-200 rounded-3xl p-12 md:p-16 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bereit für <span className="text-yellow-500">Transformation?</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre digitale Roadmap entwickeln.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Kostenloses Assessment
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
