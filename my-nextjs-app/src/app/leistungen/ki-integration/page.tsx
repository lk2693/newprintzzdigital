import Link from "next/link";
import { ArrowLeft, Brain, Sparkles, Zap, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'KI-Integration | Printzz Digital',
  description: 'Intelligente KI-Lösungen für Ihr Business. Von Chatbots über Automatisierung bis zu Custom AI-Agenten.',
};

export default function KIIntegrationPage() {
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
              <Brain className="w-12 h-12 text-slate-900" />
              <div className="text-sm uppercase tracking-wider text-slate-600 font-light">Leistungen</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              KI-<span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Integration</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Nutzen Sie die Kraft künstlicher Intelligenz für Ihr Business. Von intelligenten Chatbots bis zu maßgeschneiderten AI-Lösungen.
            </p>
          </div>

          {/* AI Technologies */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Technologie</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Modernste <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">KI-Stack</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'OpenAI GPT-4', description: 'Large Language Models' },
                { name: 'LangChain', description: 'AI Application Framework' },
                { name: 'Vector DBs', description: 'Semantic Search & RAG' },
                { name: 'Python/FastAPI', description: 'AI Backend Development' },
              ].map((tech, index) => (
                <div key={index} className="border border-slate-200 p-6 hover:border-slate-900 transition-all">
                  <h3 className="text-lg font-light text-slate-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-slate-600 font-light">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Anwendungsfälle</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              KI für Ihr Business
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: Sparkles,
                  title: 'Intelligente Chatbots',
                  description: 'Automatisieren Sie Kundenservice mit KI-gestützten Chatbots. 24/7 Support mit natürlicher Sprachverarbeitung.'
                },
                {
                  icon: TrendingUp,
                  title: 'Predictive Analytics',
                  description: 'Vorhersage von Kundenverhalten, Churn-Prediction und Demand-Forecasting mit Machine Learning.'
                },
                {
                  icon: Zap,
                  title: 'Process Automation',
                  description: 'Automatisieren Sie repetitive Aufgaben mit KI. Document Processing, Data Entry und mehr.'
                },
                {
                  icon: Brain,
                  title: 'Custom AI-Agenten',
                  description: 'Maßgeschneiderte AI-Lösungen für Ihre spezifischen Business-Anforderungen und Workflows.'
                }
              ].map((useCase, index) => (
                <div key={index} className="flex gap-6">
                  <useCase.icon className="w-12 h-12 text-slate-900 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-light text-slate-900 mb-3">{useCase.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Vorgehen</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Von Idee zu <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Production</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'Use-Case Analyse und ROI-Bewertung Ihrer KI-Initiative' },
                { step: '02', title: 'Proof of Concept', description: '2-4 Wochen MVP mit echten Daten und messbaren Ergebnissen' },
                { step: '03', title: 'Development', description: 'Production-ready AI-System mit Monitoring und Testing' },
                { step: '04', title: 'Optimization', description: 'Kontinuierliches Training und Verbesserung der Modelle' }
              ].map((phase, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 p-6">
                  <div className="text-4xl font-light text-slate-300 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">{phase.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 text-white p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Bereit für <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">KI-Integration?</span>
            </h2>
            <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Use Cases identifizieren, die echten Business-Impact haben.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              KI-Workshop buchen
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
