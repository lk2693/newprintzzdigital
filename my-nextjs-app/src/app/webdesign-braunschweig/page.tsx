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
  "provider": { "@type": "LocalBusiness", "name": "PrintzzDigital", "address": { "@type": "PostalAddress", "streetAddress": "Rischbleek 6", "addressLocality": "Braunschweig", "postalCode": "38126", "addressCountry": "DE" }, "telephone": "+49-531-70201786" },
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
    { icon: Smartphone, title: "Responsive Design", desc: "Perfekt auf allen Geräten — Mobile-First für beste Google-Rankings.", color: "from-yellow-400 to-yellow-500" },
    { icon: Zap, title: "Blitzschnelle Ladezeiten", desc: "Sub-Second Performance. 95+ Lighthouse Score durch Server-Side Rendering.", color: "from-gray-700 to-gray-900" },
    { icon: Search, title: "SEO-Optimiert", desc: "Vom ersten Tag bei Google sichtbar. Lokale SEO-Strategien für Braunschweig.", color: "from-yellow-500 to-amber-500" },
    { icon: BarChart3, title: "Conversion-Optimiert", desc: "Design das verkauft. Strategische CTAs für mehr Anfragen und Kunden.", color: "from-gray-800 to-black" },
    { icon: Shield, title: "Sicher & Zuverlässig", desc: "SSL, DSGVO-konform und regelmäßige Updates. Ihre Daten sind sicher.", color: "from-yellow-400 to-orange-400" },
    { icon: Palette, title: "Individuelles Design", desc: "Kein Template-Look. Jedes Design wird maßgeschneidert für Ihre Marke.", color: "from-gray-600 to-gray-800" },
  ];

  const process = [
    { step: "01", title: "Erstgespräch", desc: "Wir treffen uns in Braunschweig und besprechen Ihre Ziele, Wünsche und Anforderungen.", icon: Phone },
    { step: "02", title: "Konzept & Design", desc: "Maßgeschneidertes Konzept und modernes Design, das Ihre Marke perfekt repräsentiert.", icon: Palette },
    { step: "03", title: "Entwicklung", desc: "Ihr Design wird mit modernsten Technologien umgesetzt — schnell, sicher und SEO-optimiert.", icon: Monitor },
    { step: "04", title: "Launch & Support", desc: "Ihre Website geht live. Wir supporten Sie mit Wartung, Updates und Weiterentwicklung.", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative mx-auto max-w-7xl w-full">
          <div className="bg-gradient-to-br from-gray-100 via-yellow-50 to-gray-100 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400/30 to-transparent" />
            </div>

            <div className="relative px-6 sm:px-12 lg:px-16 py-16 sm:py-24">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-8">
                    <Globe className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-medium">Webdesign Braunschweig</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
                    Professionelles{' '}
                    <span className="text-yellow-500">Webdesign</span>
                    <br />
                    aus Braunschweig
                  </h1>

                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                    Ihre Website ist Ihre digitale Visitenkarte. Wir erstellen moderne, schnelle und 
                    SEO-optimierte Websites, die Besucher in Kunden verwandeln.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                      Kostenloses Angebot anfordern
                    </Link>
                    <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300">
                      Unsere Referenzen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: Browser mockup */}
                <div className={`transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 rotate-2'}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60 group-hover:opacity-100" />
                    
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                      {/* Browser bar */}
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 ml-3">
                          <div className="bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-500 font-mono border border-gray-200">
                            https://ihre-website.de
                          </div>
                        </div>
                      </div>
                      
                      {/* Content mockup */}
                      <div className="p-6 space-y-4 bg-white">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded bg-gradient-to-r from-yellow-400 to-yellow-500" />
                          <div className="h-3 w-24 bg-gray-200 rounded" />
                          <div className="flex-1" />
                          <div className="flex gap-3">
                            <div className="h-2 w-12 bg-gray-100 rounded" />
                            <div className="h-2 w-12 bg-gray-100 rounded" />
                            <div className="h-2 w-12 bg-gray-100 rounded" />
                          </div>
                        </div>
                        <div className="h-4 w-3/4 bg-gradient-to-r from-yellow-200 to-transparent rounded" />
                        <div className="h-3 w-full bg-gray-100 rounded" />
                        <div className="h-3 w-5/6 bg-gray-100 rounded" />
                        <div className="mt-6 flex gap-3">
                          <div className="h-10 w-32 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full" />
                          <div className="h-10 w-32 border border-gray-200 rounded-full" />
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-6">
                          {[1,2,3].map((i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-4 space-y-2 border border-gray-100">
                              <div className="w-6 h-6 rounded bg-yellow-100" />
                              <div className="h-2 w-full bg-gray-200 rounded" />
                              <div className="h-2 w-2/3 bg-gray-100 rounded" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-20 px-4">
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
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-yellow-50 border border-yellow-200 flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-yellow-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-[0.3em] text-yellow-500 mb-4 font-semibold">Warum PrintzzDigital</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl leading-tight text-gray-900">
              Website erstellen lassen in{' '}
              <span className="text-yellow-500">Braunschweig</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="relative group h-full bg-white rounded-2xl sm:rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center leading-tight text-gray-900">
              So entsteht Ihre{' '}
              <span className="text-yellow-500">Website</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <AnimatedSection key={i} delay={i * 200}>
                <div className="relative group">
                  {/* Connecting line */}
                  {i < 3 && <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-yellow-300 to-transparent z-0" />}
                  
                  <div className="relative bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-8 hover:border-yellow-300 hover:shadow-xl transition-all duration-500">
                    <div className="text-5xl font-bold text-yellow-500 mb-6">{step.step}</div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BRANCHEN ==================== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-gray-900">
              Websites für jede{' '}
              <span className="text-yellow-500">Branche</span>
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
                <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-md transition-all duration-300 group cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-yellow-50 border border-yellow-200 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-colors">
                    <Check className="w-4 h-4 text-yellow-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{branche}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEO CONTENT ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-gray-900">
              Webdesign Braunschweig —{' '}
              <span className="text-yellow-500">Ihr Partner</span>
              {' '}für digitalen Erfolg
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
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
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">
              Häufige Fragen zu{' '}
              <span className="text-yellow-500">Webdesign</span>
              {' '}in Braunschweig
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${openFaq === i ? 'border-2 border-yellow-400 shadow-md' : 'border border-gray-100 hover:border-yellow-200'}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left font-semibold text-lg flex items-center justify-between gap-4">
                    <span className={openFaq === i ? 'text-yellow-600' : 'text-gray-900'}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-yellow-500 text-white rotate-45' : 'bg-gray-100 text-gray-600'}`}>
                      <span className="text-xl leading-none">+</span>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 via-yellow-50 to-gray-100 rounded-[2rem] sm:rounded-[3rem] p-12 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/10 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
                  Bereit für Ihre neue{' '}
                  <span className="text-yellow-500">Website</span>?
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                  Lassen Sie uns kostenlos und unverbindlich über Ihr Webdesign-Projekt sprechen.
                </p>

                <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-black text-white text-lg font-medium rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5" /> Kostenloses Angebot
                </Link>

                <div className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-500">
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-500" /> Kostenlos</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-500" /> Unverbindlich</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-500" /> Persönlich</span>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
