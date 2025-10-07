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
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-12 font-light"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Link>

          {/* Hero */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="w-12 h-12 text-slate-900" />
              <div className="text-sm uppercase tracking-wider text-slate-600 font-light">Leistungen</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              Digital{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Ganzheitliche digitale Transformation für Ihr Unternehmen. Von der Strategie über die Implementation bis zur erfolgreichen Skalierung.
            </p>
          </div>

          {/* Key Stat */}
          <div className="bg-slate-50 border border-slate-200 p-12 mb-32">
            <div className="text-5xl font-light text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                3x
              </span>{" "}
              schnellere Time-to-Market
            </div>
            <p className="text-slate-600 font-light">
              Durch strukturierte Digitalisierung und moderne Prozesse
            </p>
          </div>

          {/* What is Digital Transformation */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Überblick</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-8">
              Was ist Digital Transformation?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mb-12">
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
                <div key={index} className="border border-slate-200 p-6 hover:border-slate-900 transition-all">
                  <h3 className="text-lg font-light text-slate-900 mb-2">{pillar.name}</h3>
                  <p className="text-sm text-slate-600 font-light">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Unsere Leistungen</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              End-to-End <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Begleitung</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
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
                <div key={index} className="flex gap-6">
                  <service.icon className="w-12 h-12 text-slate-900 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-light text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Framework */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Vorgehen</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Unser Transformation <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Framework</span>
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
                <div key={index} className="bg-slate-50 border border-slate-200 p-6">
                  <div className="text-4xl font-light text-slate-300 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">{phase.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Ergebnisse</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Typische <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Erfolge</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: 'Time-to-Market', value: '3x schneller' },
                { metric: 'Kostenreduktion', value: '-40%' },
                { metric: 'Produktivität', value: '+60%' },
                { metric: 'Customer Satisfaction', value: '+45%' }
              ].map((result, index) => (
                <div key={index} className="border border-slate-200 p-8 text-center hover:border-slate-900 transition-all">
                  <div className="text-3xl font-light bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                    {result.value}
                  </div>
                  <div className="text-sm text-slate-600 font-light">{result.metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 text-white p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Bereit für <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Transformation?</span>
            </h2>
            <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre digitale Roadmap entwickeln.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
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
