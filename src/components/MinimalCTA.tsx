'use client';

import { ArrowRight } from 'lucide-react';

export default function MinimalCTA() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-slate-950 to-slate-950" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center py-8 sm:py-0">
        
        {/* Section label */}
        <div className="mb-4 sm:mb-8">
          <span className="text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase font-light">
            08 — Bereit?
          </span>
        </div>

        {/* Main CTA text */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-8 leading-[1.1]">
          Bereit für digitale
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Transformation
          </span>
          ?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten.
          Kostenlose Erstberatung, unverbindlich.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a 
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 text-lg font-light"
          >
            Projekt starten
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 text-white hover:text-orange-400 transition-colors text-lg font-light"
          >
            Projekte ansehen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Small trust indicators */}
        <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-500">
            <span>✓ Kostenlose Beratung</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Unverbindlich</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ 50+ erfolgreiche Projekte</span>
          </div>
        </div>
      </div>
    </section>
  );
}
