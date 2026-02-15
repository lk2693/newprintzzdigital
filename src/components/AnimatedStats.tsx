'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 50,
    suffix: '+',
    label: 'Erfolgreiche Projekte',
    description: 'Von Startups bis Enterprise — digital transformiert',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Kundenzufriedenheit',
    description: 'Langfristige Partnerschaften statt einmaliger Aufträge',
  },
  {
    value: 95,
    suffix: '+',
    label: 'Lighthouse Score',
    description: 'Performance ist kein Nice-to-have, sondern Standard',
  },
  {
    value: 3,
    suffix: 'x',
    label: 'Schnellere Ergebnisse',
    description: 'Dank moderner Technologien und agiler Methoden',
  },
];

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return count;
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCountUp(stat.value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div className="text-center p-6 sm:p-8">
        {/* Number */}
        <div className="mb-3 sm:mb-4">
          <span className="text-5xl sm:text-6xl md:text-7xl font-extralight text-white tabular-nums">
            {stat.prefix}
            {count}
            <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              {stat.suffix}
            </span>
          </span>
        </div>

        {/* Label */}
        <h3 className="text-base sm:text-lg text-white font-light mb-2">{stat.label}</h3>

        {/* Description */}
        <p className="text-sm text-slate-500 font-light leading-relaxed max-w-xs mx-auto">
          {stat.description}
        </p>
      </div>

      {/* Divider line (not on last) */}
      {index < stats.length - 1 && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
      )}
    </motion.div>
  );
}

export default function AnimatedStats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.05),transparent_50%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-xs sm:text-sm tracking-[0.3em] text-slate-500 uppercase font-light mb-4 block">
            03 — Zahlen die sprechen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
            Ergebnisse statt{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Versprechen
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
