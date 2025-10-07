'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function TerminalHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-slate-950 to-slate-950" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Small overline */}
          <div className="mb-4 sm:mb-8 inline-block">
            <span className="text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase font-light">
              Digitale Excellence
            </span>
          </div>

          {/* Main headline - massive and minimal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white mb-4 sm:mb-8 leading-[0.9] tracking-tight">
            Digitale Lösungen
            <br />
            <span className="text-slate-400">für Ihr</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-medium">
              Business
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto mb-8 sm:mb-16 font-light leading-relaxed">
            Wir entwickeln moderne Websites, KI-Lösungen und digitale Strategien,
            die Ihr Unternehmen nachhaltig voranbringen.
          </p>

          {/* CTA Button - minimal and elegant */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center relative z-20">
            <a 
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-slate-950 text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              <span className="relative z-10">Projekt starten</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>

            <a 
              href="/portfolio"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300 text-lg cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              <span>Projekte ansehen</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
