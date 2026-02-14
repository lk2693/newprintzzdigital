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
  "telephone": "+49-531-70201786",
  "email": "info@printzzdigital.de",
  "priceRange": "$$",
  "address": { "@type": "PostalAddress", "streetAddress": "Rischbleek 6", "addressLocality": "Braunschweig", "postalCode": "38126", "addressRegion": "Niedersachsen", "addressCountry": "DE" },
  "geo": { "@type": "GeoCoordinates", "latitude": 52.2177, "longitude": 10.5668 },
  "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
  "areaServed": [{ "@type": "City", "name": "Braunschweig" },{ "@type": "City", "name": "Wolfsburg" },{ "@type": "City", "name": "Salzgitter" },{ "@type": "City", "name": "Gifhorn" },{ "@type": "City", "name": "Peine" }]
};

const faqItems = [
  { q: "Was kostet eine professionelle Website in Braunschweig?", a: "Eine einfache Unternehmenswebsite beginnt ab ca. 2.500€, komplexere Web-Anwendungen oder Online-Shops ab 5.000€. Wir erstellen Ihnen gerne ein individuelles Angebot." },
  { q: "Wie lange dauert die Erstellung einer Website?", a: "Eine professionelle Website erstellen wir in 2-4 Wochen. Komplexere Projekte können 4-8 Wochen dauern. Bei uns in Braunschweig stimmen wir uns jederzeit persönlich ab." },
  { q: "Bieten Sie auch SEO für Unternehmen in Braunschweig an?", a: "Ja! Wir optimieren jede Website für Suchmaschinen. Als lokale Digitalagentur kennen wir den regionalen Markt und setzen gezielt lokale SEO-Strategien um." },
  { q: "Welche Dienstleistungen bietet PrintzzDigital an?", a: "Webdesign, Webentwicklung mit Next.js & React, Software-Entwicklung, App-Entwicklung, KI-Integration, SEO & Online Marketing, E-Commerce und CRM-Systeme." },
  { q: "Kann ich PrintzzDigital in Braunschweig persönlich besuchen?", a: "Unser Büro ist in Rischbleek 6, 38126 Braunschweig. Vereinbaren Sie einen Termin für ein kostenloses Beratungsgespräch." },
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
    { icon: Globe, title: "Webdesign & Webentwicklung", desc: "Blitzschnelle, responsive Websites mit Next.js & React. 95+ Lighthouse Score garantiert.", link: "/services/website", color: "from-yellow-400 to-yellow-500" },
    { icon: Code, title: "Software-Entwicklung", desc: "Individuelle Web-Apps, APIs und Datenbank-Lösungen. Maßgeschneidert für Ihre Prozesse.", link: "/services/digitalstrategie", color: "from-gray-700 to-gray-900" },
    { icon: Bot, title: "KI-Integration", desc: "Chatbots, Automatisierung und intelligente Datenanalyse mit OpenAI und Machine Learning.", link: "/leistungen/ki-integration", color: "from-yellow-500 to-amber-500" },
    { icon: BarChart3, title: "SEO & Online Marketing", desc: "Lokale SEO-Strategien für Top-Rankings in Braunschweig. Messbar mehr Sichtbarkeit.", link: "/services/marketing", color: "from-gray-800 to-black" },
    { icon: ShoppingCart, title: "E-Commerce & Shops", desc: "Professionelle Online-Shops mit optimiertem Checkout. Verkaufen Sie rund um die Uhr.", link: "/services/commerce", color: "from-yellow-400 to-orange-400" },
    { icon: Palette, title: "UI/UX Design", desc: "Conversion-optimiertes Design, das Besucher in Kunden verwandelt. User Experience auf Top-Niveau.", link: "/services/website", color: "from-gray-600 to-gray-800" },
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
                    <MapPin className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-medium">Braunschweig & Region</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
                    Ihre{' '}
                    <span className="text-yellow-500">Digitalagentur</span>
                    <br />
                    in Braunschweig
                  </h1>

                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                    Professionelles Webdesign, Software-Entwicklung und KI-Integration — 
                    persönlich, transparent und mit messbaren Ergebnissen.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                      <Phone className="w-4 h-4" />
                      Kostenlose Beratung
                    </Link>
                    <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300">
                      Unsere Leistungen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={`transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                    <h2 className="text-2xl font-bold mb-8 text-gray-900">
                      Kontakt{' '}
                      <span className="text-yellow-500">Braunschweig</span>
                    </h2>

                    <div className="space-y-5 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-yellow-500" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">PrintzzDigital / Printzz GmbH</p>
                          <p className="text-gray-500">Rischbleek 6</p>
                          <p className="text-gray-500">38126 Braunschweig</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-yellow-500" />
                        </div>
                        <a href="tel:+4953170201786" className="text-gray-900 hover:text-yellow-500 transition-colors font-medium">
                          +49 531 702 017 86
                        </a>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-yellow-500" />
                        </div>
                        <a href="mailto:info@printzzdigital.de" className="text-gray-900 hover:text-yellow-500 transition-colors font-medium">
                          info@printzzdigital.de
                        </a>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <p className="text-sm text-gray-500 mb-1">Öffnungszeiten</p>
                      <p className="text-gray-900 font-medium">Mo – Fr: 09:00 – 18:00 Uhr</p>
                      <p className="text-sm text-gray-400 mt-1">Termine nach Vereinbarung</p>
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
              { value: 50, suffix: '+', label: 'Erfolgreiche Projekte', icon: Globe },
              { value: 100, suffix: '%', label: 'Kundenzufriedenheit', icon: Star },
              { value: 48, suffix: 'h', label: 'Express Umsetzung', icon: Users },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-yellow-50 border border-yellow-200 flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-yellow-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-[0.3em] text-yellow-500 mb-4 font-semibold">Leistungen in Braunschweig</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Digitale{' '}
              <span className="text-yellow-500">Dienstleistungen</span>
            </h2>
            <p className="text-lg text-gray-600 mb-16 max-w-3xl">
              Von der Website über individuelle Software bis hin zu KI-Lösungen — alles aus einer Hand für Braunschweiger Unternehmen.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <Link href={service.link} className="block h-full">
                  <div className="relative group h-full bg-white rounded-2xl sm:rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-500 hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-gray-400 group-hover:text-yellow-500 transition-colors font-medium">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY LOCAL ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center leading-tight text-gray-900">
              Warum eine{' '}
              <span className="text-yellow-500">lokale Agentur</span>?
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
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 mb-4">
                    <span className="text-xs text-yellow-600 font-semibold">{item.highlight}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEO CONTENT ==================== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-gray-900">
              Webdesign & Webentwicklung in{' '}
              <span className="text-yellow-500">Braunschweig</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
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
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Software-Entwicklung für <span className="text-yellow-500">Braunschweiger Unternehmen</span>
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
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
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Aktiv in der{' '}
              <span className="text-yellow-500">gesamten Region</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Neben Braunschweig betreuen wir Kunden in Wolfsburg, Salzgitter, Gifhorn, 
              Peine, Helmstedt und der gesamten Region Niedersachsen.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3">
            {["Braunschweig", "Wolfsburg", "Salzgitter", "Gifhorn", "Peine", "Helmstedt", "Wolfenbüttel", "Goslar", "Hildesheim", "Hannover"].map((city, i) => (
              <AnimatedSection key={city} delay={i * 50}>
                <span className={`inline-block px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-default ${
                  city === 'Braunschweig' 
                    ? 'bg-yellow-500 text-black shadow-lg' 
                    : 'bg-gray-100 border border-gray-200 text-gray-700 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700'
                }`}>
                  {city}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">
              Häufig gestellte{' '}
              <span className="text-yellow-500">Fragen</span>
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
                  Bereit für Ihre{' '}
                  <span className="text-yellow-500">digitale Zukunft</span>?
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                  Lassen Sie uns in einem kostenlosen Beratungsgespräch herausfinden, 
                  wie wir Ihr Unternehmen digital voranbringen können.
                </p>

                <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-black text-white text-lg font-medium rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5" /> Kostenloses Erstgespräch
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
