'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
          {/* Background orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-orange-500/10 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-red-500/10 blur-[100px]" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-light">
                  Kostenlose Erstberatung verfügbar
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-8 leading-[1.05]">
                Bereit, Ihr Projekt
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  zum Leben zu erwecken?
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 sm:mb-14 font-light leading-relaxed">
                Lassen Sie uns in einem unverbindlichen Gespräch herausfinden,
                wie wir Ihre digitale Vision verwirklichen können.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 sm:mb-14">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-10 sm:px-14 py-5 sm:py-6 bg-white text-slate-900 text-base sm:text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="relative z-10">Jetzt Gespräch vereinbaren</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-base sm:text-lg font-light px-6 py-4"
                >
                  Leistungen entdecken
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-slate-500 font-light">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500/60" />
                  Kostenlose Beratung
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500/60" />
                  Unverbindlich
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500/60" />
                  Antwort innerhalb 24h
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
