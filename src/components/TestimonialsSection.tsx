'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Weber',
    company: 'Weber Consulting GmbH',
    role: 'Geschäftsführerin',
    text: 'PrintzzDigital hat unsere Website komplett transformiert. Die Ladezeit sank von 4 auf 1.2 Sekunden — und unsere Conversion Rate stieg um 180%. Absolut beeindruckend.',
    result: '+180% Conversions',
    rating: 5,
    projectType: 'Website & Performance',
  },
  {
    id: 2,
    name: 'Michael Hoffmann',
    company: 'TechStart München',
    role: 'CTO',
    text: 'Unfassbar schnelle Umsetzung! In kürzester Zeit hatten wir eine komplette E-Commerce Plattform mit 95 Lighthouse Score. Professionell, modern und performant.',
    result: '95 Lighthouse Score',
    rating: 5,
    projectType: 'E-Commerce',
  },
  {
    id: 3,
    name: 'Dr. Anna Schmidt',
    company: 'Schmidt & Partner',
    role: 'Partnerin',
    text: 'Endlich eine Website, die nicht nur schön aussieht, sondern auch bei Google gefunden wird. 300% mehr Anfragen seit dem Relaunch — das spricht für sich.',
    result: '+300% Anfragen',
    rating: 5,
    projectType: 'SEO & Website',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-slate-950 overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,146,60,0.06),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-xs sm:text-sm tracking-[0.3em] text-slate-500 uppercase font-light mb-4 block">
            06 — Kundenstimmen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
            Was unsere Kunden{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              sagen
            </span>
          </h2>
        </motion.div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500/30 mx-auto mb-6 sm:mb-8" />

              {/* Quote text */}
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8 sm:mb-12">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-lg font-light">
                  {testimonials[current].name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <div>
                  <div className="text-white font-light text-lg">{testimonials[current].name}</div>
                  <div className="text-slate-500 font-light text-sm">
                    {testimonials[current].role} — {testimonials[current].company}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                  ))}
                </div>

                {/* Result badge */}
                <div className="mt-2 px-4 py-2 border border-white/10 bg-white/5 rounded-full">
                  <span className="text-sm text-orange-400 font-light">
                    {testimonials[current].result}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10 sm:mt-16">
            <button
              onClick={() => goTo((current - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all text-white"
              aria-label="Vorheriges Testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-1 transition-all duration-500 ${
                    index === current ? 'w-8 bg-orange-500' : 'w-3 bg-white/20 hover:bg-white/30'
                  }`}
                  aria-label={`Zu Testimonial ${index + 1} wechseln`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo((current + 1) % testimonials.length)}
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all text-white"
              aria-label="Nächstes Testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
