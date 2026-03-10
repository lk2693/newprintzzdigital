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
    { prompt: '~', cmd: 'npx create-next-app@latest ihr-projekt', color: 'text-green-400' },
    { prompt: '', cmd: '✓ TypeScript? Yes', color: 'text-slate-400' },
    { prompt: '', cmd: '✓ Tailwind CSS? Yes', color: 'text-slate-400' },
    { prompt: '', cmd: '✓ App Router? Yes', color: 'text-slate-400' },
    { prompt: '~', cmd: 'npm run dev', color: 'text-green-400' },
    { prompt: '', cmd: '▲ Ready in 1.2s', color: 'text-cyan-400' },
    { prompt: '', cmd: '○ Local: http://localhost:3000', color: 'text-blue-400' },
    { prompt: '', cmd: '✨ Ihre Software wird gebaut...', color: 'text-orange-400' },
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
      <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-700" />
      <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">
        {/* Terminal bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-800/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 ml-2">
            <span className="text-xs text-slate-500 font-mono">Terminal — zsh</span>
          </div>
        </div>
        
        <div className="p-5 font-mono text-sm space-y-1.5 min-h-[280px]">
          {lines.slice(0, displayedLines).map((line, i) => (
            <div key={i} className={`${line.color} transition-all duration-300`} style={{ opacity: i < displayedLines ? 1 : 0 }}>
              {line.prompt && <span className="text-violet-400">{line.prompt} $ </span>}
              {!line.prompt && <span className="ml-6" />}
              {line.cmd}
            </div>
          ))}
          {displayedLines < lines.length && (
            <div className="flex items-center">
              <span className="text-violet-400">~ $ </span>
              <span className="w-2 h-4 bg-green-400 animate-pulse ml-1" />
            </div>
          )}
          {displayedLines >= lines.length && (
            <div className="flex items-center mt-2">
              <span className="text-violet-400">~ $ </span>
              <span className="w-2 h-4 bg-green-400 animate-pulse ml-1" />
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
  "provider": { "@type": "LocalBusiness", "name": "PrintzzDigital", "address": { "@type": "PostalAddress", "streetAddress": "Rischbleek 6", "addressLocality": "Braunschweig", "postalCode": "38126", "addressCountry": "DE" }, "telephone": "+49-531-12345678" },
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
    { icon: Layers, title: "Web-Anwendungen", desc: "Komplexe Web-Apps mit React, Next.js und TypeScript. Skalierbar, sicher und performant.", color: "from-blue-500 to-cyan-400" },
    { icon: Cpu, title: "Backend & APIs", desc: "Robuste Server-Anwendungen, REST-APIs und Datenbankarchitekturen mit Node.js und Python.", color: "from-violet-500 to-purple-400" },
    { icon: Database, title: "Datenbanklösungen", desc: "Professionelle Datenbankdesigns mit PostgreSQL, Supabase und Cloud-Datenbanken.", color: "from-emerald-500 to-green-400" },
    { icon: Workflow, title: "Automatisierung", desc: "Geschäftsprozesse automatisieren. Workflows, Integrationen und KI-gestützte Automation.", color: "from-orange-500 to-amber-400" },
    { icon: Shield, title: "CRM & Verwaltung", desc: "Individuelle CRM-Systeme und Verwaltungssoftware für effizientere Geschäftsprozesse.", color: "from-pink-500 to-rose-400" },
    { icon: Zap, title: "KI-Integration", desc: "Intelligente Features mit OpenAI, Chatbots und Machine Learning für Ihr Unternehmen.", color: "from-amber-500 to-yellow-400" },
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
    <div className="min-h-screen bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-slate-950 to-blue-950/10" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
        {/* Glow orbs */}
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/3 -left-20 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300 font-light tracking-wide">Software-Entwicklung Braunschweig</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-[0.95] tracking-tight">
                Individuelle{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-medium">
                  Software
                </span>
                <br />
                <span className="text-slate-400">aus Braunschweig</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-xl">
                Maßgeschneiderte Softwarelösungen für Ihr Unternehmen — von Web-Apps über Mobile Apps 
                bis hin zu komplexen Automatisierungen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 font-medium overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Projekt besprechen</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-8 py-4 transition-all duration-300">
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
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-20 px-4 border-y border-slate-800/50 bg-slate-900/30">
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

      {/* ==================== SERVICES GRID ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-sm uppercase tracking-[0.3em] text-green-400 mb-6 font-light">Software-Dienstleistungen</div>
            <h2 className="text-4xl md:text-6xl font-light mb-16 max-w-4xl leading-tight">
              Software für{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">jeden Bedarf</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="relative group h-full">
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${service.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`} />
                  <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-8 h-full transition-all duration-500 group-hover:bg-slate-900/80 group-hover:border-transparent">
                    <div className="w-12 h-12 rounded-lg bg-slate-800/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-slate-300" />
                    </div>
                    <h3 className="text-xl font-light text-white mb-3 group-hover:text-orange-300 transition-colors">{service.title}</h3>
                    <p className="text-slate-400 font-light leading-relaxed text-sm">{service.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK ==================== */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light mb-16">
              Unsere{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Technologien</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-orange-500/30 hover:bg-slate-900/80 transition-all duration-300 group cursor-default">
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">{tech.icon}</div>
                  <h3 className="font-light text-white mb-1 group-hover:text-orange-300 transition-colors">{tech.name}</h3>
                  <p className="text-sm text-slate-500 font-light">{tech.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== USE CASES ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light mb-16">
              Software-Lösungen für{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Braunschweiger Unternehmen</span>
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
                <div className="flex items-center gap-4 p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-green-500/30 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="font-light text-slate-300 group-hover:text-white transition-colors">{useCase}</span>
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
              Ihr Software-Partner in{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Braunschweig</span>
            </h2>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
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
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light mb-16 text-center">
              Häufige Fragen zur{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Software-Entwicklung</span>
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-orange-500/5 to-violet-500/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Software-Projekt{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-medium">starten</span>?
            </h2>
            <p className="text-lg text-slate-400 font-light mb-12 max-w-2xl mx-auto">
              Erzählen Sie uns von Ihrer Idee. Wir beraten Sie kostenlos und unverbindlich.
            </p>

            <Link href="/contact" className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-slate-950 text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2"><Phone className="w-5 h-5" /> Kostenloses Beratungsgespräch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>

            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-slate-500 font-light">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Kostenlos</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Unverbindlich</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Persönlich vor Ort</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
