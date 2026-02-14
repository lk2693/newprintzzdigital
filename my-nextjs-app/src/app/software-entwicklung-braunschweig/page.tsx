'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Code, Zap, Shield, Database, Phone, Cpu, Layers, Workflow, Terminal, GitBranch, Boxes, Star } from 'lucide-react';

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
    const timer = setInterval(() => { start += step; if (start >= end) { setCount(end); clearInterval(timer); } else setCount(Math.floor(start)); }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function TerminalTyping() {
  const [displayedLines, setDisplayedLines] = useState<number>(0);
  const { ref, isInView } = useInView(0.3);
  
  const lines = [
    { prompt: '~', cmd: 'npx create-next-app@latest ihr-projekt', color: 'text-green-600' },
    { prompt: '', cmd: '✓ TypeScript? Yes', color: 'text-gray-500' },
    { prompt: '', cmd: '✓ Tailwind CSS? Yes', color: 'text-gray-500' },
    { prompt: '', cmd: '✓ App Router? Yes', color: 'text-gray-500' },
    { prompt: '~', cmd: 'npm run dev', color: 'text-green-600' },
    { prompt: '', cmd: '▲ Ready in 1.2s', color: 'text-yellow-600' },
    { prompt: '', cmd: '○ Local: http://localhost:3000', color: 'text-blue-600' },
    { prompt: '', cmd: '✨ Ihre Software wird gebaut...', color: 'text-yellow-500' },
  ];

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayedLines(i);
      if (i >= lines.length) clearInterval(timer);
    }, 400);
    return () => clearInterval(timer);
  }, [isInView, lines.length]);

  return (
    <div ref={ref} className="relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/10 to-yellow-300/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-700" />
      <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200">
        {/* Terminal bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 ml-2">
            <span className="text-xs text-gray-400 font-mono">Terminal — zsh</span>
          </div>
        </div>
        
        <div className="p-5 font-mono text-sm space-y-1.5 min-h-[280px] bg-gray-900 text-gray-300">
          {lines.slice(0, displayedLines).map((line, i) => (
            <div key={i} className={`${line.color} transition-all duration-300`} style={{ opacity: i < displayedLines ? 1 : 0 }}>
              {line.prompt && <span className="text-yellow-400">{line.prompt} $ </span>}
              {!line.prompt && <span className="ml-6" />}
              {line.cmd}
            </div>
          ))}
          {displayedLines < lines.length && (
            <div className="flex items-center">
              <span className="text-yellow-400">~ $ </span>
              <span className="w-2 h-4 bg-yellow-400 animate-pulse ml-1" />
            </div>
          )}
          {displayedLines >= lines.length && (
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">~ $ </span>
              <span className="w-2 h-4 bg-yellow-400 animate-pulse ml-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// JSON-LD
// ============================================================
const jsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  "name": "Software-Entwicklung Braunschweig",
  "description": "Individuelle Software-Entwicklung, App-Entwicklung und IT-Dienstleistungen in Braunschweig.",
  "provider": { "@type": "LocalBusiness", "name": "PrintzzDigital", "address": { "@type": "PostalAddress", "streetAddress": "Rischbleek 6", "addressLocality": "Braunschweig", "postalCode": "38126", "addressCountry": "DE" }, "telephone": "+49-531-70201786" },
  "areaServed": { "@type": "City", "name": "Braunschweig" }, "serviceType": "Software-Entwicklung"
};

const faqItems = [
  { q: "Was kostet individuelle Software-Entwicklung?", a: "Einfache Web-Anwendungen beginnen ab ca. 5.000€, komplexere Softwarelösungen ab 10.000€. Wir erstellen nach einem kostenlosen Beratungsgespräch ein transparentes Angebot." },
  { q: "Welche Technologien verwenden Sie?", a: "React, Next.js, TypeScript, Node.js, Python, PostgreSQL, Supabase und verschiedene Cloud-Dienste. Die Wahl hängt von Ihren Anforderungen ab." },
  { q: "Entwickeln Sie auch Mobile Apps?", a: "Ja! Progressive Web Apps (PWA) oder native Apps. PWAs funktionieren auf jedem Gerät und können wie eine App installiert werden." },
  { q: "Wie läuft ein Projekt ab?", a: "Agil: 1. Beratungsgespräch 2. Anforderungsanalyse 3. Design & Prototyp 4. Iterative Entwicklung 5. Testing & Launch 6. Wartung & Support." },
  { q: "Bieten Sie Wartung und Support an?", a: "Ja, umfassende Wartung und Support. Als lokale Agentur in Braunschweig sind wir jederzeit erreichbar und können bei Bedarf persönlich vor Ort unterstützen." },
];

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqItems.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

// ============================================================
// PAGE
// ============================================================
export default function SoftwareEntwicklungPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  const services = [
    { icon: Layers, title: "Web-Anwendungen", desc: "Komplexe Web-Apps mit React, Next.js und TypeScript. Skalierbar, sicher und performant.", color: "from-yellow-400 to-yellow-500" },
    { icon: Cpu, title: "Backend & APIs", desc: "Robuste Server-Anwendungen, REST-APIs und Datenbankarchitekturen mit Node.js und Python.", color: "from-gray-700 to-gray-900" },
    { icon: Database, title: "Datenbanklösungen", desc: "Professionelle Datenbankdesigns mit PostgreSQL, Supabase und Cloud-Datenbanken.", color: "from-yellow-500 to-amber-500" },
    { icon: Workflow, title: "Automatisierung", desc: "Geschäftsprozesse automatisieren. Workflows, Integrationen und KI-gestützte Automation.", color: "from-gray-800 to-black" },
    { icon: Shield, title: "CRM & Verwaltung", desc: "Individuelle CRM-Systeme und Verwaltungssoftware für effizientere Geschäftsprozesse.", color: "from-yellow-400 to-orange-400" },
    { icon: Zap, title: "KI-Integration", desc: "Intelligente Features mit OpenAI, Chatbots und Machine Learning für Ihr Unternehmen.", color: "from-gray-600 to-gray-800" },
  ];

  const techStack = [
    { name: "React & Next.js", desc: "Frontend-Frameworks", icon: "⚛️" },
    { name: "TypeScript", desc: "Type-safe Development", icon: "📘" },
    { name: "Node.js", desc: "Backend-Runtime", icon: "🟢" },
    { name: "Python", desc: "KI & Automatisierung", icon: "🐍" },
    { name: "PostgreSQL", desc: "Datenbank", icon: "🐘" },
    { name: "Supabase", desc: "Backend-as-a-Service", icon: "⚡" },
    { name: "Docker", desc: "Containerisierung", icon: "🐳" },
    { name: "Vercel / AWS", desc: "Cloud-Hosting", icon: "☁️" },
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
                    <Terminal className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-medium">Software-Entwicklung Braunschweig</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
                    Individuelle{' '}
                    <span className="text-yellow-500">Software</span>
                    <br />
                    aus Braunschweig
                  </h1>

                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                    Maßgeschneiderte Softwarelösungen für Ihr Unternehmen — von Web-Apps über Mobile Apps 
                    bis hin zu komplexen Automatisierungen.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                      Projekt besprechen
                    </Link>
                    <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300">
                      Referenzen ansehen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Terminal animation */}
                <div className={`transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                  <TerminalTyping />
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
              { value: 50, suffix: '+', label: 'Projekte geliefert', icon: Boxes },
              { value: 100, suffix: '%', label: 'Agile Entwicklung', icon: GitBranch },
              { value: 15, suffix: 'h', label: 'Zeitersparnis/Woche', icon: Zap },
              { value: 5, suffix: '', label: 'Sterne Bewertung', icon: Star },
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

      {/* ==================== SERVICES GRID ==================== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-[0.3em] text-yellow-500 mb-4 font-semibold">Software-Dienstleistungen</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl leading-tight text-gray-900">
              Software für{' '}
              <span className="text-yellow-500">jeden Bedarf</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="relative group h-full bg-white rounded-2xl sm:rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-gray-900">
              Unsere{' '}
              <span className="text-yellow-500">Technologien</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-yellow-300 hover:bg-yellow-50 hover:shadow-md transition-all duration-300 group cursor-default">
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">{tech.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== USE CASES ==================== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-gray-900">
              Software-Lösungen für{' '}
              <span className="text-yellow-500">Braunschweiger Unternehmen</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Kundenverwaltung (CRM) für den Mittelstand",
              "Buchungs- und Terminplattformen",
              "Interne Verwaltungstools und Dashboards",
              "E-Commerce und Marktplatz-Lösungen",
              "Automatisierte Rechnungssysteme",
              "Digitale Formulare und Workflows",
              "Schnittstellen zu bestehenden Systemen (API)",
              "KI-gestützte Datenanalyse-Tools"
            ].map((useCase, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-md transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-yellow-50 border border-yellow-200 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-colors">
                    <Check className="w-4 h-4 text-yellow-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{useCase}</span>
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
              Ihr Software-Partner in{' '}
              <span className="text-yellow-500">Braunschweig</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Als Software-Entwickler in Braunschweig verstehen wir die Bedürfnisse lokaler Unternehmen. 
                Ob kleines Handwerksunternehmen oder wachsendes Startup — wir entwickeln genau die Software, 
                die Sie brauchen.
              </p>
              <p>
                Im Gegensatz zu großen IT-Beratungen bieten wir persönliche Betreuung direkt in Braunschweig. 
                Sie sprechen immer mit dem Entwicklerteam, das auch Ihre Software baut. Keine überflüssigen 
                Zwischenschichten.
              </p>
              <p>
                Unsere Entwicklung folgt agilen Methoden: regelmäßige Fortschritte, Feedback-Schleifen und 
                flexible Anpassungen. So entsteht Software, die wirklich zu Ihrem Unternehmen passt.
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
              Häufige Fragen zur{' '}
              <span className="text-yellow-500">Software-Entwicklung</span>
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
                  Software-Projekt{' '}
                  <span className="text-yellow-500">starten</span>?
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                  Erzählen Sie uns von Ihrer Idee. Wir beraten Sie kostenlos und unverbindlich.
                </p>

                <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-black text-white text-lg font-medium rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5" /> Kostenloses Beratungsgespräch
                </Link>

                <div className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-500">
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-500" /> Kostenlos</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-500" /> Unverbindlich</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-500" /> Persönlich vor Ort</span>
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
