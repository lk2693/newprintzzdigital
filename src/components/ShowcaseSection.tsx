'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'kunstplattform',
    title: 'Kunstplattform',
    subtitle: 'E-Commerce für die Kunstbranche',
    description:
      'Eine innovative Plattform, die Künstlern ermöglicht, ihre Werke direkt zu vermarkten. Sichere Zahlungen via Stripe, personalisiertes Dashboard und optimierte Performance.',
    image: '/artmarket.png',
    tech: ['Next.js 14', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    results: [
      { value: '+180%', label: 'Conversions' },
      { value: '0.8s', label: 'Ladezeit' },
      { value: '95+', label: 'Lighthouse' },
    ],
    color: 'from-blue-500 to-violet-500',
  },
  {
    id: 'ai-flow',
    title: 'AI Flow System',
    subtitle: 'Intelligente Workflow-Automatisierung',
    description:
      'KI-gestütztes System zur Automatisierung von Geschäftsprozessen. Predictive Analytics, Smart Routing und ein intuitives Dashboard für volle Kontrolle.',
    image: '/aiflow.png',
    tech: ['Python', 'OpenAI', 'React', 'PostgreSQL'],
    results: [
      { value: '15h', label: 'Zeitersparnis/Woche' },
      { value: '-70%', label: 'Manuelle Tasks' },
      { value: '99.9%', label: 'Uptime' },
    ],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'shop',
    title: 'Online Shop',
    subtitle: 'Moderne E-Commerce-Lösung',
    description:
      'Voll skalierbarer Online-Shop mit personalisierter Shopping-Experience, friktionslosem Checkout und automatisiertem Inventar-Management.',
    image: '/onlineshop.png',
    tech: ['Next.js', 'Stripe', 'Supabase', 'Vercel'],
    results: [
      { value: '+40%', label: 'Umsatz' },
      { value: '-35%', label: 'Abbrüche' },
      { value: '4:1', label: 'ROAS' },
    ],
    color: 'from-emerald-500 to-teal-500',
  },
];

function ProjectCard({ project, index, isActive, onClick }: {
  project: (typeof projects)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <button
        onClick={onClick}
        className={`w-full text-left p-5 sm:p-6 border transition-all duration-300 cursor-pointer ${
          isActive
            ? 'border-slate-900 bg-slate-900 text-white'
            : 'border-slate-200 bg-white hover:border-slate-400 text-slate-900'
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <div
              className={`text-xs tracking-[0.2em] uppercase font-light mb-2 ${
                isActive ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {project.subtitle}
            </div>
            <h3 className="text-lg sm:text-xl font-light">{project.title}</h3>
          </div>
          <ArrowRight
            className={`w-5 h-5 transition-all duration-300 ${
              isActive ? 'text-white rotate-0' : 'text-slate-400 -rotate-45'
            }`}
          />
        </div>
      </button>
    </motion.div>
  );
}

export default function ShowcaseSection() {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const project = projects[activeProject];

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-20"
        >
          <span className="text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase font-light mb-4 block">
            05 — Ausgewählte Projekte
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.1] mb-6">
            Projekte, die{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              begeistern
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            Echte Ergebnisse für echte Unternehmen — vom Konzept bis zum Go-Live.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Left: Project selector */}
          <div className="lg:col-span-4 space-y-3">
            {projects.map((p, index) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={index}
                isActive={activeProject === index}
                onClick={() => setActiveProject(index)}
              />
            ))}

            {/* View all link */}
            <Link
              href="/portfolio"
              className="flex items-center gap-2 px-6 py-4 text-sm text-slate-500 hover:text-slate-900 font-light transition-colors group"
            >
              Alle Projekte ansehen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Project preview */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image with browser chrome */}
                <div className="relative border border-slate-200 overflow-hidden bg-slate-50 group">
                  {/* Browser bar */}
                  <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      <div className="bg-slate-100 rounded px-3 py-1 text-xs text-slate-400 font-mono flex-1 max-w-xs">
                        {project.id}.printzzdigital.com
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                  </div>

                  {/* Project image */}
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>

                {/* Project details below image */}
                <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-6">
                  {/* Description */}
                  <div>
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs border border-slate-200 text-slate-500 font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {project.results.map((result) => (
                      <div key={result.label} className="text-center sm:text-left">
                        <div
                          className={`text-2xl sm:text-3xl font-light bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                        >
                          {result.value}
                        </div>
                        <div className="text-xs text-slate-500 font-light mt-1">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
