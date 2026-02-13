'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Phone, Bot, Brain, Sparkles, BarChart3, MessageSquare, Workflow, Cog, TrendingUp, Shield, Zap, Users, Clock, Target } from 'lucide-react';

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

// ============================================================
// AI CHAT DEMO COMPONENT
// ============================================================
function AIChatDemo() {
  const { ref, isInView } = useInView(0.3);
  const [visibleMessages, setVisibleMessages] = useState(0);

  const messages = [
    { role: 'user', text: 'Wie viele Kundenanfragen hatten wir diese Woche?' },
    { role: 'ai', text: 'Diese Woche gab es 47 Anfragen — 23% mehr als letzte Woche. Die meisten kamen über das Kontaktformular (62%) und den Chatbot (31%).' },
    { role: 'user', text: 'Welche Themen waren am häufigsten?' },
    { role: 'ai', text: 'Top 3: 1. Preisanfragen (38%), 2. Terminbuchungen (27%), 3. Support-Tickets (19%). Soll ich einen automatischen Report erstellen?' },
  ];

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setVisibleMessages(i);
      if (i >= messages.length) clearInterval(timer);
    }, 800);
    return () => clearInterval(timer);
  }, [isInView, messages.length]);

  return (
    <div ref={ref} className="relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/10 to-yellow-300/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-700" />
      <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-md">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm">KI-Assistent</div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-400">Online</span>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div className="p-5 space-y-4 min-h-[320px] bg-gradient-to-b from-white to-gray-50">
          {messages.slice(0, visibleMessages).map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} transition-all duration-500`} style={{ opacity: i < visibleMessages ? 1 : 0, transform: i < visibleMessages ? 'translateY(0)' : 'translateY(8px)' }}>
              {msg.role === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-yellow-500 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-black text-white rounded-br-md' : 'bg-gray-100 text-gray-700 rounded-bl-md border border-gray-200'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {visibleMessages < messages.length && (
            <div className="flex justify-start">
              <div className="w-7 h-7 rounded-lg bg-yellow-500 flex items-center justify-center mr-2 flex-shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="bg-gray-100 border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="px-4 py-3 border-t border-gray-100 bg-white">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2.5 border border-gray-200">
            <span className="text-sm text-gray-400 flex-1">Fragen Sie Ihren KI-Assistenten...</span>
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
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
  "name": "KI-Anwendungen Braunschweig",
  "description": "Individuelle KI-Lösungen, Chatbots, Automatisierung und Datenanalyse für Unternehmen in Braunschweig.",
  "provider": { "@type": "LocalBusiness", "name": "PrintzzDigital", "address": { "@type": "PostalAddress", "streetAddress": "Schuhstraße 42", "addressLocality": "Braunschweig", "postalCode": "38100", "addressCountry": "DE" }, "telephone": "+49-531-70201786" },
  "areaServed": { "@type": "City", "name": "Braunschweig" }, "serviceType": "KI-Anwendungen"
};

const faqItems = [
  { q: "Was kostet eine KI-Lösung für mein Unternehmen?", a: "Einfache Chatbot-Integrationen starten ab ca. 3.000€, umfassendere KI-Automatisierungen ab 8.000€. Im kostenlosen Erstgespräch ermitteln wir den tatsächlichen Bedarf und erstellen ein transparentes Angebot." },
  { q: "Brauche ich große Datenmengen für KI?", a: "Nicht unbedingt. Moderne KI-Modelle wie GPT funktionieren auch ohne eigene Trainingsdaten. Für maßgeschneiderte Analysen helfen bestehende Geschäftsdaten, aber wir können auch mit wenig Daten starten." },
  { q: "Ist KI sicher für sensible Geschäftsdaten?", a: "Ja. Wir setzen auf DSGVO-konforme Lösungen und können KI-Modelle auch lokal oder in deutschen Rechenzentren betreiben, sodass keine Daten das Land verlassen." },
  { q: "Wie lange dauert die Einführung von KI?", a: "Ein einfacher Chatbot kann in 2-4 Wochen live sein. Komplexere Automatisierungen dauern 2-3 Monate. Wir arbeiten agil, sodass Sie schon früh erste Ergebnisse sehen." },
  { q: "Können Sie KI in meine bestehende Software integrieren?", a: "Ja! Wir integrieren KI-Funktionen in bestehende Systeme, CRMs, Websites und Apps. Dank offener APIs ist eine nahtlose Integration fast immer möglich." },
  { q: "Welche KI-Technologien nutzen Sie?", a: "OpenAI (GPT-4o), Anthropic Claude, lokale LLMs, Python-basiertes Machine Learning, Langchain, Retrieval-Augmented Generation (RAG) und weitere — je nach Anwendungsfall." },
];

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqItems.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

// ============================================================
// PAGE
// ============================================================
export default function KIAnwendungenPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  const services = [
    { icon: Bot, title: "KI-Chatbots", desc: "Intelligente Chatbots für Kundensupport, Terminbuchung und Beratung — 24/7 verfügbar auf Ihrer Website.", color: "from-yellow-400 to-yellow-500" },
    { icon: Workflow, title: "Prozess-Automatisierung", desc: "Wiederkehrende Aufgaben automatisieren: Datenverarbeitung, E-Mail-Workflows und Dokumentenmanagement.", color: "from-gray-700 to-gray-900" },
    { icon: BarChart3, title: "Datenanalyse & Insights", desc: "KI-gestützte Auswertung Ihrer Geschäftsdaten. Trends erkennen, Prognosen erstellen, Entscheidungen optimieren.", color: "from-yellow-500 to-amber-500" },
    { icon: MessageSquare, title: "Content-Generierung", desc: "Automatisierte Erstellung von Produktbeschreibungen, Social-Media-Posts und Marketingtexten.", color: "from-gray-800 to-black" },
    { icon: Cog, title: "System-Integration", desc: "KI-Funktionen in bestehende CRM-, ERP- und Verwaltungssysteme nahtlos integrieren.", color: "from-yellow-400 to-orange-400" },
    { icon: Brain, title: "Individuelle KI-Modelle", desc: "Maßgeschneiderte Machine-Learning-Modelle, trainiert auf Ihren Unternehmensdaten.", color: "from-gray-600 to-gray-800" },
  ];

  const benefits = [
    { icon: Clock, value: "70", suffix: "%", label: "Zeitersparnis bei Routineaufgaben" },
    { icon: TrendingUp, value: "40", suffix: "%", label: "Mehr Kundenanfragen bearbeitet" },
    { icon: Users, value: "24", suffix: "/7", label: "Verfügbarkeit für Ihre Kunden" },
    { icon: Target, value: "95", suffix: "%", label: "Kundenzufriedenheit" },
  ];

  const useCases = [
    { branch: "Handwerk & Dienstleistung", example: "KI-Chatbot für Terminbuchung und Kostenvoranschläge", icon: "🔧" },
    { branch: "Einzelhandel", example: "Automatische Produktempfehlungen und Bestandsoptimierung", icon: "🛒" },
    { branch: "Gastronomie", example: "Intelligente Reservierungssysteme und Feedback-Analyse", icon: "🍽️" },
    { branch: "Immobilien", example: "Automatisierte Exposé-Erstellung und Lead-Qualifizierung", icon: "🏠" },
    { branch: "Gesundheitswesen", example: "Terminmanagement und automatisierte Patientenkommunikation", icon: "🏥" },
    { branch: "Rechtsanwälte & Steuerberater", example: "Dokumentenanalyse und automatisierte Mandantenkommunikation", icon: "⚖️" },
    { branch: "Logistik & Transport", example: "Routenoptimierung und predictive Wartungsplanung", icon: "🚛" },
    { branch: "Bildung & Schulung", example: "Personalisierte Lernpfade und automatisierte Auswertungen", icon: "📚" },
  ];

  const techStack = [
    { name: "OpenAI / GPT-4o", desc: "Sprachmodelle", icon: "🤖" },
    { name: "Anthropic Claude", desc: "KI-Assistent", icon: "🧠" },
    { name: "Python", desc: "ML & Data Science", icon: "🐍" },
    { name: "LangChain", desc: "LLM-Framework", icon: "🔗" },
    { name: "RAG", desc: "Retrieval-Augmented", icon: "📄" },
    { name: "Supabase + pgvector", desc: "Vektor-Datenbank", icon: "⚡" },
    { name: "Vercel AI SDK", desc: "Streaming & Edge", icon: "▲" },
    { name: "Hugging Face", desc: "Open-Source-Modelle", icon: "🤗" },
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
                    <Brain className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-medium">KI-Anwendungen Braunschweig</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
                    Künstliche{' '}
                    <span className="text-yellow-500">Intelligenz</span>
                    <br />
                    für Ihr Business
                  </h1>

                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                    Von intelligenten Chatbots bis zur automatisierten Datenanalyse — wir bringen 
                    KI-Power in Braunschweiger Unternehmen.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                      <Sparkles className="w-4 h-4" /> KI-Beratung starten
                    </Link>
                    <Link href="/leistungen/ki-integration" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300">
                      Mehr erfahren <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* AI Chat Demo */}
                <div className={`transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                  <AIChatDemo />
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
            {benefits.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-yellow-50 border border-yellow-200 flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-yellow-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    <Counter end={parseInt(stat.value)} suffix={stat.suffix} />
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
            <div className="text-sm uppercase tracking-[0.3em] text-yellow-500 mb-4 font-semibold">KI-Dienstleistungen</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight text-gray-900">
              KI-Lösungen, die{' '}
              <span className="text-yellow-500">wirklich helfen</span>
            </h2>
            <p className="text-lg text-gray-500 mb-16 max-w-2xl">
              Keine Science Fiction, sondern praktische Anwendungen, die sofort Mehrwert für Ihr Unternehmen schaffen.
            </p>
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

      {/* ==================== USE CASES BY BRANCH ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              KI für jede{' '}
              <span className="text-yellow-500">Branche</span>
            </h2>
            <p className="text-lg text-gray-500 mb-16 max-w-2xl">
              Praktische KI-Anwendungsbeispiele für Braunschweiger Unternehmen — von Handwerk bis Gesundheitswesen.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((uc, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-md transition-all duration-300 group">
                  <div className="text-3xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">{uc.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">{uc.branch}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{uc.example}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">
              In <span className="text-yellow-500">4 Schritten</span> zur KI-Lösung
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "KI-Workshop", desc: "Wir analysieren Ihre Prozesse und identifizieren KI-Potenziale in Ihrem Unternehmen." },
              { step: "02", title: "Konzept & Prototyp", desc: "Schneller Prototyp zeigt, wie die KI-Lösung in der Praxis funktioniert." },
              { step: "03", title: "Entwicklung & Training", desc: "Wir entwickeln die Lösung und trainieren sie mit Ihren Daten und Anforderungen." },
              { step: "04", title: "Launch & Optimierung", desc: "Go-live mit fortlaufender Überwachung und kontinuierlicher Verbesserung." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-500 text-center group">
                  <div className="text-5xl font-black text-gray-100 group-hover:text-yellow-100 transition-colors mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-yellow-400" />
                    </div>
                  )}
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
              <span className="text-yellow-500">KI-Technologien</span>
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

      {/* ==================== SEO CONTENT ==================== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-gray-900">
              KI-Partner für{' '}
              <span className="text-yellow-500">Braunschweig</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Künstliche Intelligenz ist längst keine Zukunftsmusik mehr — sie verändert heute schon, 
                wie Unternehmen in Braunschweig arbeiten. Von automatisierten Kundenanfragen über intelligente 
                Datenanalysen bis hin zu KI-gestützten Entscheidungshilfen: Die Möglichkeiten sind vielfältig.
              </p>
              <p>
                Als Ihr lokaler KI-Partner in Braunschweig helfen wir Ihnen, die richtigen Einsatzbereiche 
                zu identifizieren. Nicht jede KI-Lösung passt zu jedem Unternehmen — deshalb starten wir 
                mit einem kostenlosen Workshop, in dem wir Ihre Prozesse analysieren und konkrete 
                Automatisierungspotenziale aufdecken.
              </p>
              <p>
                Besonders für den Mittelstand in der Region Braunschweig bieten KI-Anwendungen enorme Chancen: 
                Routineaufgaben automatisieren, Kundenservice verbessern und datenbasierte Entscheidungen treffen. 
                Wir setzen auf DSGVO-konforme Lösungen und können bei Bedarf KI-Modelle auch vollständig 
                auf deutschen Servern betreiben.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">
              Häufige Fragen zu{' '}
              <span className="text-yellow-500">KI-Anwendungen</span>
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
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-8">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-700 font-medium">Kostenloser KI-Workshop</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
                  Bereit für{' '}
                  <span className="text-yellow-500">KI</span>?
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                  Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringt. 
                  Kostenloser Workshop — vor Ort in Braunschweig oder remote.
                </p>

                <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-black text-white text-lg font-medium rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5" /> Kostenlosen KI-Workshop buchen
                </Link>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-500">
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-500" /> Kostenlos</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-500" /> DSGVO-konform</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-500" /> Persönlich in Braunschweig</span>
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
