import Link from "next/link";
import { ArrowLeft, Code, Smartphone, Zap, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Webentwicklung | Printzz Digital',
  description: 'Moderne Webentwicklung mit Next.js, React und TypeScript für blitzschnelle, conversion-optimierte Websites.',
};

export default function WebentwicklungPage() {
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
              <Code className="w-12 h-12 text-slate-900" />
              <div className="text-sm uppercase tracking-wider text-slate-600 font-light">Leistungen</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              Web<span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">entwicklung</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Moderne, blitzschnelle Websites und Web-Anwendungen, die Ihre Nutzer begeistern und Ihr Business voranbringen.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Technologie</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Modernste <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Tech-Stack</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Next.js 14', description: 'React Framework für Production' },
                { name: 'TypeScript', description: 'Type-safe Development' },
                { name: 'Tailwind CSS', description: 'Utility-First CSS Framework' },
                { name: 'Vercel', description: 'Enterprise Hosting & CDN' },
              ].map((tech, index) => (
                <div key={index} className="border border-slate-200 p-6 hover:border-slate-900 transition-all">
                  <h3 className="text-lg font-light text-slate-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-slate-600 font-light">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Was wir bieten</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Unsere Leistungen
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: Zap,
                  title: 'Performance First',
                  description: 'Lighthouse Score 95+ garantiert. Sub-Second Ladezeiten durch Server-Side Rendering, Image Optimization und Code Splitting.'
                },
                {
                  icon: Smartphone,
                  title: 'Mobile-First Design',
                  description: 'Responsive Design für alle Geräte. Optimiert für Touch-Bedienung und mobile User Experience.'
                },
                {
                  icon: CheckCircle,
                  title: 'SEO Optimiert',
                  description: 'Technisches SEO von Anfang an. Strukturierte Daten, Meta-Tags und semantisches HTML für Top-Rankings.'
                },
                {
                  icon: Code,
                  title: 'Clean Code',
                  description: 'Wartbarer, dokumentierter Code nach Best Practices. TypeScript für Type-Safety und bessere Developer Experience.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <feature.icon className="w-12 h-12 text-slate-900 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-light text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-32">
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Vorgehen</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Von Konzept zu <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Launch</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Konzeption', description: 'Anforderungsanalyse, Wireframes und technische Architektur' },
                { step: '02', title: 'Design', description: 'UI/UX Design mit Fokus auf Conversion und User Experience' },
                { step: '03', title: 'Development', description: 'Agile Entwicklung mit wöchentlichen Demo-Sessions' },
                { step: '04', title: 'Launch', description: 'Testing, Optimierung und Deployment auf Production' }
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
              Bereit für Ihr <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Web-Projekt?</span>
            </h2>
            <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam eine Website entwickeln, die Ihre Nutzer begeistert.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              Projekt besprechen
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
