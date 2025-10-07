import Link from "next/link";
import { ArrowLeft, Zap, RefreshCw, Clock, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Automatisierung | Printzz Digital',
  description: 'Business Process Automation und Workflow-Optimierung. Sparen Sie Zeit und Kosten durch intelligente Automatisierung.',
};

export default function AutomatisierungPage() {
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
              <Zap className="w-12 h-12 text-slate-900" />
              <div className="text-sm uppercase tracking-wider text-slate-600 font-light">Leistungen</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              Automatisi<span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">erung</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Automatisieren Sie repetitive Aufgaben und optimieren Sie Ihre Geschäftsprozesse. Mehr Zeit für strategische Arbeit.
            </p>
          </div>

          {/* Key Benefit */}
          <div className="bg-slate-50 border border-slate-200 p-12 mb-32">
            <div className="text-5xl font-light text-slate-900 mb-4">
              Durchschnittlich{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                15h
              </span>{" "}
              Zeitersparnis/Woche
            </div>
            <p className="text-slate-600 font-light">
              Durch intelligente Automatisierung repetitiver Tasks
            </p>
          </div>

          {/* Automation Tools */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Tools & Plattformen</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Beste <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Automation-Stack</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Zapier', description: 'No-Code Automation' },
                { name: 'Make (Integromat)', description: 'Advanced Workflows' },
                { name: 'n8n', description: 'Self-Hosted Automation' },
                { name: 'Custom APIs', description: 'Maßgeschneiderte Lösungen' },
              ].map((tool, index) => (
                <div key={index} className="border border-slate-200 p-6 hover:border-slate-900 transition-all">
                  <h3 className="text-lg font-light text-slate-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-slate-600 font-light">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Was wir automatisieren</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Typische Anwendungsfälle
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: RefreshCw,
                  title: 'Lead-Verarbeitung',
                  description: 'Automatisches Routing, Scoring und Nurturing von Leads zwischen Marketing- und CRM-Tools.'
                },
                {
                  icon: Clock,
                  title: 'Reporting & Analytics',
                  description: 'Automatische Erstellung von Reports, Dashboards und Performance-Tracking über alle Tools hinweg.'
                },
                {
                  icon: CheckCircle,
                  title: 'Daten-Synchronisation',
                  description: 'Echtzeit-Sync zwischen CRM, E-Commerce, Marketing und anderen Business-Systemen.'
                },
                {
                  icon: Zap,
                  title: 'Workflow Optimization',
                  description: 'End-to-End Prozessautomatisierung von Onboarding, Approval-Prozessen und mehr.'
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

          {/* Benefits */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Vorteile</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Warum Automatisierung?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { metric: 'Zeitersparnis', value: '15h/Woche', description: 'Mehr Zeit für strategische Aufgaben' },
                { metric: 'Fehlerreduktion', value: '95%', description: 'Weniger manuelle Fehler' },
                { metric: 'ROI', value: '6 Monate', description: 'Amortisation der Investition' },
              ].map((benefit, index) => (
                <div key={index} className="border border-slate-200 p-8 text-center hover:border-slate-900 transition-all">
                  <div className="text-3xl font-light bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                    {benefit.value}
                  </div>
                  <div className="text-lg font-light text-slate-900 mb-2">{benefit.metric}</div>
                  <p className="text-sm text-slate-600 font-light">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Vorgehen</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Von Analyse zu <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Automation</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Process Audit', description: 'Analyse aktueller Workflows und Identifikation von Automatisierungs-Potenzialen' },
                { step: '02', title: 'Konzeption', description: 'Design optimierter Workflows und Tool-Auswahl' },
                { step: '03', title: 'Implementation', description: 'Setup, Testing und Integration in bestehende Systeme' },
                { step: '04', title: 'Monitoring', description: 'Performance-Tracking und kontinuierliche Optimierung' }
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
              Bereit für <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Automatisierung?</span>
            </h2>
            <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Lassen Sie uns analysieren, welche Prozesse Sie automatisieren können.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              Kostenloses Process-Audit
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
