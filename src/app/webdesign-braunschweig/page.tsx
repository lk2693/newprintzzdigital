'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Globe, Zap, Smartphone, Search, BarChart3, Phone, Monitor, Palette, Shield, Clock } from 'lucide-react';

// ============================================================
// ANIMATION HOOKS
// ============================================================
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, isInView };
}

function AnimatedSection({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Counter({ end, suffix = '', prefix = '', duration = 2000 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const { ref, isInView } = useInView();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => { start += step; if (start >= end) { setCount(end); clearInterval(timer); } else setCount(Math.floor(start)); }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// ============================================================
// JSON-LD
// ============================================================
const jsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Webdesign Braunschweig",
  "description": "Professionelles Webdesign und Website-Erstellung in Braunschweig. Responsive Design, SEO-Optimierung und moderne Technologien.",
  "provider": { "@type": "LocalBusiness", "name": "PrintzzDigital", "address": { "@type": "PostalAddress", "streetAddress": "Schuhstraße 42", "addressLocality": "Braunschweig", "postalCode": "38100", "addressCountry": "DE" }, "telephone": "+49-531-12345678" },
  "areaServed": { "@type": "City", "name": "Braunschweig" }, "serviceType": "Webdesign"
};

const faqItems = [
  { q: "Was kostet Webdesign in Braunschweig?", a: "Eine einfache Website beginnt ab ca. 1.500€, Unternehmenswebsites mit CMS ab 2.500€, Online-Shops ab 5.000€. Transparente, faire Angebote ohne versteckte Kosten." },
  { q: "Ist die Website auch für Handys optimiert?", a: "Ja, alle Websites folgen dem Mobile-First-Ansatz und sehen auf Smartphones, Tablets und Desktops perfekt aus. Das ist auch entscheidend für gute Google-Rankings." },
  { q: "Wird meine Website bei Google gefunden?", a: "Alle Websites werden von Grund auf SEO-optimiert: technisches SEO, Ladezeit-Optimierung, strukturierte Daten und lokale SEO-Strategien für Braunschweig." },
  { q: "Welche Technologien verwendet PrintzzDigital?", a: "Next.js, React, TypeScript und Tailwind CSS. Diese garantieren maximale Performance, Sicherheit und Skalierbarkeit mit regelmäßig 95+ Lighthouse Score." },
  { q: "Kann ich die Website selbst bearbeiten?", a: "Auf Wunsch richten wir ein benutzerfreundliches CMS ein, mit dem Sie Texte, Bilder und Inhalte selbst pflegen können – ganz ohne Programmierkenntnisse." },
];

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqItems.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

// ============================================================
// PAGE
// ============================================================
export default function WebdesignBraunschweigPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  const features = [
    { icon: Smartphone, title: "Responsive Design", desc: "Perfekt auf allen Geräten — Mobile-First für beste Google-Rankings.", color: "from-blue-500 to-cyan-400" },
    { icon: Zap, title: "Blitzschnelle Ladezeiten", desc: "Sub-Second Performance. 95+ Lighthouse Score durch Server-Side Rendering.", color: "from-yellow-500 to-orange-400" },
    { icon: Search, title: "SEO-Optimiert", desc: "Vom ersten Tag bei Google sichtbar. Lokale SEO-Strategien für Braunschweig.", color: "from-green-500 to-emerald-400" },
    { icon: BarChart3, title: "Conversion-Optimiert", desc: "Design das verkauft. Strategische CTAs für mehr Anfragen und Kunden.", color: "from-violet-500 to-purple-400" },
    { icon: Shield, title: "Sicher & Zuverlässig", desc: "SSL, DSGVO-konform und regelmäßige Updates. Ihre Daten sind sicher.", color: "from-red-500 to-pink-400" },
    { icon: Palette, title: "Individuelles Design", desc: "Kein Template-Look. Jedes Design wird maßgeschneidert für Ihre Marke.", color: "from-amber-500 to-yellow-400" },
  ];

  const process = [
    { step: "01", title: "Erstgespräch", desc: "Wir treffen uns in Braunschweig und besprechen Ihre Ziele, Wünsche und Anforderungen.", icon: Phone },
    { step: "02", title: "Konzept & Design", desc: "Maßgeschneidertes Konzept und modernes Design, das Ihre Marke perfekt repräsentiert.", icon: Palette },
    { step: "03", title: "Entwicklung", desc: "Ihr Design wird mit modernsten Technologien umgesetzt — schnell, sicher und SEO-optimiert.", icon: Monitor },
    { step: "04", title: "Launch & Support", desc: "Ihre Website geht live. Wir supporten Sie mit Wartung, Updates und Weiterentwicklung.", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-950 to-violet-950/20" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        
        {/* Glow orbs */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-light tracking-wide">Webdesign Braunschweig</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-[0.95] tracking-tight">
                Professionelles{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-medium">
                  Webdesign
                </span>
                <br />
                <span className="text-slate-400">aus Braunschweig</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-xl">
                Ihre Website ist Ihre digitale Visitenkarte. Wir erstellen moderne, schnelle und 
                SEO-optimierte Websites, die Besucher in Kunden verwandeln.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 font-medium overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Kostenloses Angebot anfordern</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-8 py-4 transition-all duration-300">
                  Unsere Referenzen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Browser mockup */}
            <div className={`transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 rotate-2'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60 group-hover:opacity-100" />
                
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-800/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 ml-3">
                      <div className="bg-slate-700/50 rounded-md px-3 py-1 text-xs text-slate-400 font-mono">
                        https://ihre-website.de
                      </div>
                    </div>
                  </div>
                  
                  {/* Content mockup */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded bg-gradient-to-r from-orange-400 to-red-500" />
                      <div className="h-3 w-24 bg-slate-700 rounded" />
                      <div className="flex-1" />
                      <div className="flex gap-3">
                        <div className="h-2 w-12 bg-slate-700/50 rounded" />
                        <div className="h-2 w-12 bg-slate-700/50 rounded" />
                        <div className="h-2 w-12 bg-slate-700/50 rounded" />
                      </div>
                    </div>
                    <div className="h-4 w-3/4 bg-gradient-to-r from-orange-500/30 to-transparent rounded" />
                    <div className="h-3 w-full bg-slate-800 rounded" />
                    <div className="h-3 w-5/6 bg-slate-800 rounded" />
                    <div className="mt-6 flex gap-3">
                      <div className="h-10 w-32 bg-gradient-to-r from-orange-500 to-red-500 rounded" />
                      <div className="h-10 w-32 border border-slate-700 rounded" />
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {[1,2,3].map((i) => (
                        <div key={i} className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                          <div className="w-6 h-6 rounded bg-slate-700" />
                          <div className="h-2 w-full bg-slate-700/50 rounded" />
                          <div className="h-2 w-2/3 bg-slate-700/30 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-20 px-4 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 95, suffix: '+', label: 'Lighthouse Score', icon: Zap },
              { value: 1, prefix: '<', suffix: 's', label: 'Ladezeit', icon: Clock },
              { value: 100, suffix: '%', label: 'Responsive', icon: Smartphone },
              { value: 60, suffix: '%', label: 'Mehr Conversions', icon: BarChart3 },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group">
                  <stat.icon className="w-6 h-6 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl md:text-5xl font-light text-white mb-2">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-slate-400 font-light">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-[0.3em] text-orange-400 mb-6 font-light">Warum PrintzzDigital</div>
            <h2 className="text-4xl md:text-6xl font-light mb-16 max-w-4xl leading-tight">
              Website erstellen lassen in{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Braunschweig</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="relative group h-full">
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${feature.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`} />
                  <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-8 h-full transition-all duration-500 group-hover:bg-slate-900/80 group-hover:border-transparent">
                    <div className="w-12 h-12 rounded-lg bg-slate-800/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-slate-300" />
                    </div>
                    <h3 className="text-xl font-light text-white mb-3 group-hover:text-orange-300 transition-colors">{feature.title}</h3>
                    <p className="text-slate-400 font-light leading-relaxed text-sm">{feature.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-light mb-20 text-center leading-tight">
              So entsteht Ihre{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Website</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <AnimatedSection key={i} delay={i * 200}>
                <div className="relative group">
                  {/* Connecting line */}
                  {i < 3 && <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-slate-700 to-transparent z-0" />}
                  
                  <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500">
                    <div className="text-5xl font-light bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">{step.step}</div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <step.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-light text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BRANCHEN ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light mb-16">
              Websites für jede{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Branche</span>
              {' '}in Braunschweig
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Handwerksbetriebe", "Arztpraxen & Ärzte", "Restaurants & Gastronomie",
              "Rechtsanwälte & Kanzleien", "Immobilienmakler", "Steuerberater",
              "Friseure & Beauty", "Architekturbüros", "Fitnessstudios",
              "Einzelhandel", "Startups & Gründer", "Vereine & Verbände"
            ].map((branche, i) => (
              <AnimatedSection key={branche} delay={i * 60}>
                <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-orange-500/30 hover:bg-slate-900/80 transition-all duration-300 group cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Check className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="font-light text-slate-300 group-hover:text-white transition-colors">{branche}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEO CONTENT ==================== */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light mb-10">
              Webdesign Braunschweig —{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Ihr Partner</span>
              {' '}für digitalen Erfolg
            </h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
              <p>
                Sie suchen einen erfahrenen Webdesigner in Braunschweig? PrintzzDigital ist Ihre lokale Webagentur 
                für professionelles Webdesign und Webentwicklung. Wir erstellen moderne Websites, die nicht nur 
                gut aussehen, sondern auch bei Google gefunden werden und Besucher in Kunden verwandeln.
              </p>
              <p>
                Ob neue Homepage, Online-Shop oder Website-Modernisierung — wir sind Ihr Ansprechpartner in Braunschweig. 
                Mit unserer Expertise in Next.js, React und modernem Webdesign garantieren wir eine Website, 
                die technisch auf dem neuesten Stand ist.
              </p>
              <p>
                Jede Website wird von Grund auf für Suchmaschinen optimiert. Strukturierte Daten, optimierte Ladezeiten 
                und lokale SEO-Strategien sorgen dafür, dass Ihr Unternehmen bei Suchanfragen in Braunschweig 
                prominent angezeigt wird.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light mb-16 text-center">
              Häufige Fragen zu{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Webdesign</span>
              {' '}in Braunschweig
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-orange-500/30 bg-slate-900/50' : 'border-slate-800 hover:border-slate-700'}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left font-light text-lg flex items-center justify-between gap-4">
                    <span className={openFaq === i ? 'text-orange-300' : 'text-white'}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-orange-500/20 rotate-45' : 'bg-slate-800'}`}>
                      <span className="text-xl leading-none">+</span>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 text-slate-400 font-light leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-orange-500/5 to-violet-500/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Bereit für Ihre neue{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-medium">Website</span>?
            </h2>
            <p className="text-lg text-slate-400 font-light mb-12 max-w-2xl mx-auto">
              Lassen Sie uns kostenlos und unverbindlich über Ihr Webdesign-Projekt sprechen.
            </p>

            <Link href="/contact" className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-slate-950 text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2"><Phone className="w-5 h-5" /> Kostenloses Angebot</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>

            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-slate-500 font-light">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Kostenlos</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Unverbindlich</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Persönlich</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
