'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

// Animated word reveal component
function AnimatedHeadline() {
  const words = ['Websites', 'KI-Lösungen', 'Plattformen', 'Apps'];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block min-w-[200px] sm:min-w-[300px] md:min-w-[380px]">
      {words.map((word, index) => (
        <motion.span
          key={word}
          className="absolute left-0 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent bg-[length:200%_100%]"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{
            opacity: currentWord === index ? 1 : 0,
            y: currentWord === index ? 0 : -40,
            filter: currentWord === index ? 'blur(0px)' : 'blur(8px)',
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            animation: currentWord === index ? 'gradient-shift 3s ease infinite' : undefined,
          }}
        >
          {word}
        </motion.span>
      ))}
      {/* Invisible spacer to maintain height */}
      <span className="invisible">Plattformen</span>
    </span>
  );
}

// Floating gradient orb
function GradientOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[100px] opacity-20 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function CinematicHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <GradientOrb className="w-[600px] h-[600px] bg-orange-500 -top-40 -left-40" delay={0} />
      <GradientOrb className="w-[500px] h-[500px] bg-red-600 top-1/2 -right-20" delay={3} />
      <GradientOrb className="w-[400px] h-[400px] bg-violet-600 -bottom-20 left-1/3" delay={6} />

      {/* Subtle grid pattern that moves with scroll */}
      <motion.div className="absolute inset-0 opacity-[0.03]" style={{ y: backgroundY }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_70%)]" />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-32"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-light tracking-wide">
                Digitalagentur aus Braunschweig
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 sm:mb-8 leading-[1.05] tracking-tight"
            >
              Wir entwickeln
              <br />
              <AnimatedHeadline />
              <br />
              <span className="text-slate-400">die begeistern.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl mb-8 sm:mb-12 font-light leading-relaxed"
            >
              Von der Strategie bis zum Launch — wir verwandeln Ihre digitale Vision
              in performante Lösungen, die Kunden gewinnen und Prozesse automatisieren.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-white text-slate-950 text-base sm:text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10">Projekt starten</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>

              <a
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-3 text-slate-300 hover:text-white transition-all duration-300 text-base sm:text-lg px-4 py-4"
              >
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300">
                  <Play className="w-4 h-4 ml-0.5" />
                </span>
                <span>Projekte ansehen</span>
              </a>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-6"
            >
              {[
                { value: '50+', label: 'Projekte' },
                { value: '98%', label: 'Zufriedenheit' },
                { value: '<1s', label: 'Ladezeit' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-light text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-light mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating visual showcase */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main mockup */}
              <motion.div
                className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/5"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Browser chrome */}
                <div className="bg-slate-900/80 backdrop-blur-sm px-4 py-3 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-slate-500 font-mono">
                      printzzdigital.com
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/artmarket.png"
                    alt="Projekt Beispiel: Kunstplattform"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 0vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* Floating card 1 - Dashboard */}
              <motion.div
                className="absolute -bottom-8 -left-12 z-20 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-xl"
                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-sm font-bold">
                    +60%
                  </div>
                  <div>
                    <div className="text-sm text-white font-medium">Conversion Rate</div>
                    <div className="text-xs text-slate-400">Durchschnittlich</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 - Performance */}
              <motion.div
                className="absolute -top-4 -right-8 z-20 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-xl"
                animate={{ y: [0, -6, 0], x: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-sm font-bold">
                    95+
                  </div>
                  <div>
                    <div className="text-sm text-white font-medium">Lighthouse Score</div>
                    <div className="text-xs text-slate-400">Performance</div>
                  </div>
                </div>
              </motion.div>

              {/* Glow effect behind mockup */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-[60px] scale-110 rounded-full" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-2"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-white/60"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* CSS for gradient animation */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
