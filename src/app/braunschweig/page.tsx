'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, ArrowRight, Check, Code, Globe, Bot, Palette, BarChart3, ShoppingCart, Star, Zap, Users } from 'lucide-react';

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

function Counter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const { ref, isInView } = useInView();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ============================================================
// JSON-LD (SEO)
// ============================================================
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PrintzzDigital - Digitalagentur Braunschweig",
  "description": "Ihre Digitalagentur in Braunschweig für Webdesign, Webentwicklung, Software-Entwicklung und KI-Integration.",
  "url": "https://printzzdigital.com/braunschweig",
  "telephone": "+49-531-12345678",
  "email": "info@printzz.de",
  "priceRange": "$$",
  "address": { "@type": "PostalAddress", "streetAddress": "Rischbleek 6", "addressLocality": "Braunschweig", "postalCode": "38126", "addressRegion": "Niedersachsen", "addressCountry": "DE" },
  "geo": { "@type": "GeoCoordinates", "latitude": 52.2646, "longitude": 10.5236 },
  "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
  "areaServed": [{ "@type": "City", "name": "Braunschweig" },{ "@type": "City", "name": "Wolfsburg" },{ "@type": "City", "name": "Salzgitter" },{ "@type": "City", "name": "Gifhorn" },{ "@type": "City", "name": "Peine" }]
};

const faqItems = [
  { q: "Was kostet eine professionelle Website in Braunschweig?", a: "Eine einfache Unternehmenswebsite beginnt ab ca. 2.500€, komplexere Web-Anwendungen oder Online-Shops ab 5.000€. Wir erstellen Ihnen gerne ein individuelles Angebot." },
  { q: "Wie lange dauert die Erstellung einer Website?", a: "Eine professionelle Website erstellen wir in 2-4 Wochen. Komplexere Projekte können 4-8 Wochen dauern. Bei uns in Braunschweig stimmen wir uns jederzeit persönlich ab." },
  { q: "Bieten Sie auch SEO für Unternehmen in Braunschweig an?", a: "Ja! Wir optimieren jede Website für Suchmaschinen. Als lokale Digitalagentur kennen wir den regionalen Markt und setzen gezielt lokale SEO-Strategien um." },
  { q: "Welche Dienstleistungen bietet PrintzzDigital an?", a: "Webdesign, Webentwicklung mit Next.js & React, Software-Entwicklung, App-Entwicklung, KI-Integration, SEO & Online Marketing, E-Commerce und CRM-Systeme." },
  { q: "Kann ich PrintzzDigital in Braunschweig persönlich besuchen?", a: "Unser Büro ist in der Rischbleek 6, 38126 Braunschweig. Vereinbaren Sie einen Termin für ein kostenloses Beratungsgespräch." },
];

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqItems.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

// ============================================================
// PAGE
// ============================================================
export default function BraunschweigPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  const services = [
    { icon: Globe, title: "Webdesign & Webentwicklung", desc: "Blitzschnelle, responsive Websites mit Next.js & React. 95+ Lighthouse Score garantiert.", link: "/services/website", color: "from-blue-500 to-cyan-400" },
    { icon: Code, title: "Software-Entwicklung", desc: "Individuelle Web-Apps, APIs und Datenbank-Lösungen. Maßgeschneidert für Ihre Prozesse.", link: "/services/digitalstrategie", color: "from-violet-500 to-purple-400" },
    { icon: Bot, title: "KI-Integration", desc: "Chatbots, Automatisierung und intelligente Datenanalyse mit OpenAI und Machine Learning.", link: "/leistungen/ki-integration", color: "from-emerald-500 to-green-400" },
    { icon: BarChart3, title: "SEO & Online Marketing", desc: "Lokale SEO-Strategien für Top-Rankings in Braunschweig. Messbar mehr Sichtbarkeit.", link: "/services/marketing", color: "from-orange-500 to-amber-400" },
    { icon: ShoppingCart, title: "E-Commerce & Shops", desc: "Professionelle Online-Shops mit optimiertem Checkout. Verkaufen Sie rund um die Uhr.", link: "/services/commerce", color: "from-pink-500 to-rose-400" },
    { icon: Palette, title: "UI/UX Design", desc: "Conversion-optimiertes Design, das Besucher in Kunden verwandelt. User Experience auf Top-Niveau.", link: "/services/website", color: "from-amber-500 to-yellow-400" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Headline */}
            <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-300 font-light tracking-wide">Braunschweig & Region</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-[0.95] tracking-tight">
                Ihre{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-medium">
                  Digital&shy;agentur
                </span>
                <br />
                <span className="text-slate-400">in Braunschweig</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-xl">
                Professionelles Webdesign, Software-Entwicklung und KI-Integration — 
                persönlich, transparent und mit messbaren Ergebnissen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 font-medium overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2"><Phone className="w-4 h-4" /> Kostenlose Beratung</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-8 py-4 transition-all duration-300">
                  Unsere Leistungen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Contact Card */}
            <div className={`transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative group">
                {/* Glow effect behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100" />
                
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 lg:p-10">
                  <h2 className="text-2xl font-light mb-8">
                    Kontakt{' '}
                    <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Braunschweig</span>
                  </h2>

                  <div className="space-y-5 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-light text-white">PrintzzDigital / Printzz GmbH</p>
                        <p className="text-slate-400 font-light">Rischbleek 6</p>
                        <p className="text-slate-400 font-light">38126 Braunschweig</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-orange-400" />
                      </div>
                      <a href="tel:+4953112345678" className="text-white hover:text-orange-400 transition-colors font-light">
                        +49 531 123 456 78
                      </a>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-orange-400" />
                      </div>
                      <a href="mailto:info@printzz.de" className="text-white hover:text-orange-400 transition-colors font-light">
                        info@printzz.de
                      </a>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                    <p className="text-sm text-slate-400 font-light mb-1">Öffnungszeiten</p>
                    <p className="text-white font-light">Mo – Fr: 09:00 – 18:00 Uhr</p>
                    <p className="text-sm text-slate-500 font-light mt-1">Termine nach Vereinbarung</p>
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
              { value: 50, suffix: '+', label: 'Erfolgreiche Projekte', icon: Globe },
              { value: 100, suffix: '%', label: 'Kundenzufriedenheit', icon: Star },
              { value: 48, suffix: 'h', label: 'Express Umsetzung', icon: Users },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group">
                  <stat.icon className="w-6 h-6 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl md:text-5xl font-light text-white mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-slate-400 font-light">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-[0.3em] text-orange-400 mb-6 font-light">Leistungen in Braunschweig</div>
            <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
              Digitale{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Dienstleistungen</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mb-16 max-w-3xl">
              Von der Website über individuelle Software bis hin zu KI-Lösungen — alles aus einer Hand für Braunschweiger Unternehmen.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Link href={service.link} className="block h-full">
                  <div className="relative group h-full">
                    <div className={`absolute -inset-[1px] bg-gradient-to-r ${service.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`} />
                    <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-8 h-full transition-all duration-500 group-hover:bg-slate-900/80 group-hover:border-transparent">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-slate-800/80`}>
                        <service.icon className="w-6 h-6 text-slate-300" />
                      </div>
                      <h3 className="text-xl font-light text-white mb-3 group-hover:text-orange-300 transition-colors">{service.title}</h3>
                      <p className="text-slate-400 font-light leading-relaxed text-sm">{service.desc}</p>
                      <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 group-hover:text-orange-400 transition-colors">
                        <span>Mehr erfahren</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY LOCAL ==================== */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-light mb-20 text-center leading-tight">
              Warum eine{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">lokale Agentur</span>?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Persönlicher Kontakt', desc: 'Treffen Sie uns persönlich in Braunschweig. Echte Menschen, die Ihr Business verstehen — keine anonymen Ticket-Systeme.', highlight: 'Face-to-Face Meetings' },
              { icon: MapPin, title: 'Regionale Expertise', desc: 'Wir kennen den Braunschweiger Markt, die lokalen Besonderheiten und wissen, wie Ihre Zielgruppe tickt.', highlight: 'Lokales Know-how' },
              { icon: Zap, title: 'Schnelle Reaktion', desc: 'Bei dringenden Anfragen sind wir sofort vor Ort. Keine langen Wartezeiten, direkte Kommunikation ohne Umwege.', highlight: 'Vor Ort in 30 Min' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 200}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500/40 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 mb-4">
                    <span className="text-xs text-orange-400 font-medium">{item.highlight}</span>
                  </div>
                  <h3 className="text-xl font-light mb-3">{item.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
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
            <h2 className="text-3xl md:text-5xl font-light mb-10">
              Webdesign & Webentwicklung in{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Braunschweig</span>
            </h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
              <p>
                Als Digitalagentur in Braunschweig entwickeln wir professionelle Websites und Web-Anwendungen für Unternehmen in der Region. 
                Ob Sie eine neue Homepage erstellen lassen möchten, Ihren bestehenden Webauftritt modernisieren oder eine komplexe 
                Softwarelösung benötigen — wir sind Ihr kompetenter Partner vor Ort.
              </p>
              <p>
                Unsere Webentwicklung basiert auf modernsten Technologien wie Next.js, React und TypeScript. 
                Damit garantieren wir Ihnen blitzschnelle Ladezeiten, ein responsives Design für alle Endgeräte und eine 
                optimale Suchmaschinenplatzierung.
              </p>
              <p>
                Neben Webdesign bieten wir in Braunschweig auch individuelle Software-Entwicklung, 
                App-Entwicklung, KI-Integration und umfassendes Online Marketing an. Von der ersten Idee bis zum fertigen 
                Produkt begleiten wir Sie persönlich.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-16">
            <h3 className="text-2xl md:text-3xl font-light mb-6">
              Software-Entwicklung für <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Braunschweiger Unternehmen</span>
            </h3>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
              <p>
                Sie benötigen eine maßgeschneiderte Softwarelösung? Wir erstellen individuelle Web-Anwendungen, 
                Datenbanklösungen, CRM-Systeme und Automatisierungen, die exakt auf Ihre Geschäftsprozesse zugeschnitten sind.
              </p>
              <p>
                Besonders für KMUs in Braunschweig und der Region bieten wir kostengünstige digitale Lösungen an, 
                die sofort messbare Ergebnisse liefern. Ob Handwerksbetrieb, Arztpraxis, Restaurant oder Kanzlei — 
                wir haben für jede Branche die passende Lösung.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== SERVICE AREA ==================== */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Aktiv in der{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">gesamten Region</span>
            </h2>
            <p className="text-lg text-slate-400 font-light mb-12 max-w-3xl mx-auto">
              Neben Braunschweig betreuen wir Kunden in Wolfsburg, Salzgitter, Gifhorn, 
              Peine, Helmstedt und der gesamten Region Niedersachsen.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3">
            {["Braunschweig", "Wolfsburg", "Salzgitter", "Gifhorn", "Peine", "Helmstedt", "Wolfenbüttel", "Goslar", "Hildesheim", "Hannover"].map((city, i) => (
              <AnimatedSection key={city} delay={i * 50}>
                <span className={`inline-block px-5 py-2.5 rounded-full text-sm font-light transition-all duration-300 cursor-default ${
                  city === 'Braunschweig' 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                    : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:border-orange-500/30 hover:text-orange-300'
                }`}>
                  {city}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light mb-16 text-center">
              Häufig gestellte{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Fragen</span>
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-violet-500/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Bereit für Ihre{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-medium">digitale Zukunft</span>?
            </h2>
            <p className="text-lg text-slate-400 font-light mb-12 max-w-2xl mx-auto">
              Lassen Sie uns in einem kostenlosen Beratungsgespräch herausfinden, 
              wie wir Ihr Unternehmen digital voranbringen können.
            </p>

            <Link href="/contact" className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-slate-950 text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2"><Phone className="w-5 h-5" /> Kostenloses Erstgespräch</span>
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
