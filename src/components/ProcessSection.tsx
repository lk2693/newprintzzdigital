'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Lightbulb, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Gespräch & Analyse',
    description:
      'Wir hören zu, verstehen Ihre Ziele und analysieren Ihre aktuelle Situation. Kostenlos und unverbindlich.',
    details: ['Anforderungen verstehen', 'Zielgruppe definieren', 'Wettbewerb analysieren'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategie & Konzept',
    description:
      'Basierend auf der Analyse entwickeln wir eine maßgeschneiderte Strategie mit klarem Fahrplan.',
    details: ['Technologie-Auswahl', 'UX/UI Design', 'Projektplan erstellen'],
    color: 'from-orange-500 to-amber-500',
    bgColor: 'from-orange-500/10 to-amber-500/10',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Design & Entwicklung',
    description:
      'Agile Umsetzung mit regelmäßigem Feedback. Sie sehen den Fortschritt in Echtzeit.',
    details: ['Iteratives Development', 'Wöchentliche Updates', 'Qualitätssicherung'],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-500/10 to-purple-500/10',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Optimierung',
    description:
      'Go-Live mit vollem Support. Danach kontinuierliche Optimierung für maximale Performance.',
    details: ['Performance-Monitoring', 'SEO-Optimierung', 'Langfristiger Support'],
    color: 'from-emerald-500 to-green-500',
    bgColor: 'from-emerald-500/10 to-green-500/10',
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-[calc(100%+0.25rem)] w-[calc(100%-1rem)] h-px">
          <motion.div
            className={`h-full bg-gradient-to-r ${step.color} opacity-20`}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      )}

      <div className="relative p-6 sm:p-8 border border-slate-200 bg-white hover:border-slate-300 transition-all duration-500 hover:shadow-lg hover:shadow-slate-200/50 h-full">
        {/* Gradient hover effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          {/* Number + Icon */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
            >
              <Icon className="w-7 h-7 text-slate-700" strokeWidth={1.5} />
            </div>
            <span
              className={`text-4xl font-extralight bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
            >
              {step.number}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-3">{step.title}</h3>
          <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed mb-6">
            {step.description}
          </p>

          {/* Detail list */}
          <ul className="space-y-2">
            {step.details.map((detail) => (
              <li key={detail} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
        >
          <span className="text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase font-light mb-4 block">
            04 — So arbeiten wir
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.1] mb-6">
            Von der Idee zum{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Launch
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            Ein transparenter Prozess, bei dem Sie jederzeit den Überblick behalten.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
