'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const problems = [
    // Website & Performance
    {
      stat: "40%",
      title: "der Websites verlieren Besucher",
      subtitle: "wegen schlechter Performance",
      description: "Langsame Ladezeiten, veraltetes Design und fehlende Mobile-Optimierung kosten Unternehmen täglich potenzielle Kunden und Umsatz.",
      impact: "Mit modernen Technologien und datenbasiertem Ansatz entwickeln wir Lösungen, die Ihre digitale Präsenz transformieren."
    },
    {
      stat: "73%",
      title: "der Nutzer verlassen Websites",
      subtitle: "wegen mangelnder Mobile-Optimierung",
      description: "Mobile-First ist kein Trend mehr - es ist Standard. Responsive Design und Touch-optimierte Interfaces sind heute unverzichtbar.",
      impact: "Wir entwickeln Mobile-First Lösungen, die auf allen Geräten perfekt funktionieren und nachweislich konvertieren."
    },
    {
      stat: "88%",
      title: "der Besucher kehren nie wieder zurück",
      subtitle: "nach schlechter User Experience",
      description: "Komplizierte Navigation, unklare Call-to-Actions und frustrierende Interaktionen vertreiben Ihre potenziellen Kunden dauerhaft.",
      impact: "Durch UX-optimiertes Design und intuitive Benutzerführung schaffen wir Websites, die Besucher zu Kunden machen."
    },
    {
      stat: "53%",
      title: "der Websites sind unsichtbar",
      subtitle: "wegen fehlendem SEO",
      description: "Ohne professionelle Suchmaschinenoptimierung verschwindet Ihre Website in den Tiefen von Google - niemand findet Sie.",
      impact: "Mit technischem SEO und durchdachter Content-Strategie bringen wir Ihre Website auf Seite 1 der Suchergebnisse."
    },
    // KI & Automatisierung
    {
      stat: "70%",
      title: "der KMUs nutzen KI nicht",
      subtitle: "und verlieren Wettbewerbsvorteile",
      description: "Während Konkurrenten mit KI-Automatisierung Zeit und Kosten sparen, bleiben viele KMUs in manuellen Prozessen stecken.",
      impact: "Wir integrieren KI-Lösungen, die Ihre Workflows automatisieren, Kosten senken und Ihr Team entlasten - ohne komplexe IT."
    },
    {
      stat: "65%",
      title: "der Arbeitszeit wird verschwendet",
      subtitle: "durch manuelle, wiederkehrende Aufgaben",
      description: "Dateneingabe, E-Mail-Bearbeitung, Terminplanung - manuelle Prozesse kosten wertvolle Zeit, die in Ihr Kerngeschäft fließen sollte.",
      impact: "Durch intelligente Automatisierung schaffen wir Systeme, die sich wiederholende Tasks übernehmen und Ihrem Team Raum für Wachstum geben."
    },
    {
      stat: "80%",
      title: "der Kundenanfragen bleiben unbeantwortet",
      subtitle: "außerhalb der Geschäftszeiten",
      description: "Potenzielle Kunden kontaktieren Sie nachts oder am Wochenende - ohne intelligente Systeme gehen diese Leads verloren.",
      impact: "Mit KI-gestützten Chatbots und automatisierten Systemen sind Sie 24/7 erreichbar und konvertieren mehr Anfragen zu Kunden."
    },
    // Daten & Analytics
    {
      stat: "92%",
      title: "der Unternehmen haben keine Datenstrategie",
      subtitle: "und treffen Entscheidungen im Blindflug",
      description: "Ohne klare Datenanalyse und Insights bleiben wichtige Geschäftsentscheidungen Bauchgefühl statt datenbasierte Strategie.",
      impact: "Wir entwickeln Dashboards und Analytics-Systeme, die Ihnen echte Insights liefern und bessere Entscheidungen ermöglichen."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentProblem((prev) => (prev + 1) % problems.length);
    }, 4000); // Wechselt alle 4 Sekunden

    return () => clearInterval(interval);
  }, [isVisible, problems.length]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          
          {/* Section number */}
          <div className="mb-6 sm:mb-12">
            <span className="text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase font-light">
              01 — Das Problem
            </span>
          </div>

          {/* Main statement - huge and impactful with animation */}
          <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[280px] lg:min-h-[240px] mb-12 sm:mb-20">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentProblem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-[1.1] max-w-5xl absolute"
              >
                <motion.span 
                  className="text-red-500"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {problems[currentProblem].stat}
                </motion.span>{" "}
                {problems[currentProblem].title}
                <br />
                <span className="italic font-normal">
                  {problems[currentProblem].subtitle}
                </span>
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Supporting text with animation */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`desc-${currentProblem}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                  {problems[currentProblem].description}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`impact-${currentProblem}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                  {problems[currentProblem].impact}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress indicators */}
          <div className="flex gap-2 mt-8 sm:mt-16 max-w-4xl">
            {problems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProblem(index)}
                className="group relative h-1 flex-1 bg-slate-200 overflow-hidden hover:bg-slate-300 transition-colors cursor-pointer"
                aria-label={`Zu Problem ${index + 1} wechseln`}
              >
                <motion.div
                  className="absolute inset-0 bg-slate-900 group-hover:bg-slate-800"
                  initial={{ width: "0%" }}
                  animate={{
                    width: currentProblem === index ? "100%" : "0%"
                  }}
                  transition={{
                    duration: currentProblem === index ? 4 : 0.3,
                    ease: "linear"
                  }}
                />
              </button>
            ))}
          </div>

          {/* Problem counter with navigation */}
          <div className="mt-6 max-w-4xl flex items-center justify-between">
            <span className="text-sm text-slate-400 font-light">
              Problem {currentProblem + 1} von {problems.length}
            </span>
            
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentProblem((prev) => (prev - 1 + problems.length) % problems.length)}
                className="w-8 h-8 flex items-center justify-center border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
                aria-label="Vorheriges Problem"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentProblem((prev) => (prev + 1) % problems.length)}
                className="w-8 h-8 flex items-center justify-center border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
                aria-label="Nächstes Problem"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
