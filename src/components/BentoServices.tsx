'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Globe, TrendingUp, Users, Database, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCard {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  color: string;
  gradient: string;
  image?: string;
  size: 'large' | 'medium' | 'small';
}

const services: ServiceCard[] = [
  {
    id: 'website',
    icon: Globe,
    title: 'Website & Plattform',
    description: 'Blitzschnelle Websites mit modernem Design, die auf allen Geräten perfekt aussehen und Besucher zu Kunden machen.',
    stat: '60%',
    statLabel: 'bessere Conversion',
    color: 'text-blue-500',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    image: '/artmarket.png',
    size: 'large',
  },
  {
    id: 'data-ai',
    icon: Database,
    title: 'Data & KI',
    description: 'KI-gestützte Analysen und Automatisierung für bessere Entscheidungen und mehr Effizienz.',
    stat: '15h',
    statLabel: 'Zeitersparnis / Woche',
    color: 'text-violet-500',
    gradient: 'from-violet-500/10 to-purple-500/10',
    image: '/aiflow.png',
    size: 'large',
  },
  {
    id: 'digitalstrategie',
    icon: Sparkles,
    title: 'Digitalstrategie',
    description: 'Datenbasierte Analyse und klarer Fahrplan mit messbaren Zielen für nachhaltiges Wachstum.',
    stat: '3x',
    statLabel: 'schnellere Time-to-Market',
    color: 'text-orange-500',
    gradient: 'from-orange-500/10 to-amber-500/10',
    size: 'medium',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Performance Marketing mit ROI-Fokus und kontinuierlicher A/B Testing Optimierung.',
    stat: '4:1',
    statLabel: 'ROAS durchschnittlich',
    color: 'text-emerald-500',
    gradient: 'from-emerald-500/10 to-green-500/10',
    size: 'small',
  },
  {
    id: 'crm',
    icon: Users,
    title: 'CRM & Revenue Ops',
    description: 'Zentrale Kundendatenbank mit automatisierten Lead-Nurturing Prozessen.',
    stat: '40%',
    statLabel: 'mehr qualifizierte Leads',
    color: 'text-rose-500',
    gradient: 'from-rose-500/10 to-pink-500/10',
    size: 'small',
  },
  {
    id: 'commerce',
    icon: ShoppingBag,
    title: 'Commerce',
    description: 'Friktionsloser Checkout und personalisierte Shopping-Experience auf skalierbarer Plattform.',
    stat: '35%',
    statLabel: 'weniger Abbrüche',
    color: 'text-amber-500',
    gradient: 'from-amber-500/10 to-yellow-500/10',
    image: '/onlineshop.png',
    size: 'medium',
  },
];

function BentoCard({ service, index }: { service: ServiceCard; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-2 md:row-span-1',
    small: 'md:col-span-1 md:row-span-1',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`${sizeClasses[service.size]} group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/services/${service.id}`} className="block h-full">
        <div
          className={`relative h-full border border-slate-200 bg-white overflow-hidden transition-all duration-500 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 ${
            service.size === 'large' ? 'min-h-[400px] sm:min-h-[500px]' : 'min-h-[260px] sm:min-h-[300px]'
          }`}
        >
          {/* Gradient background on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
            {/* Top: Icon + Stat */}
            <div className="flex items-start justify-between mb-4 sm:mb-6">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className={`w-6 h-6 ${service.color}`} strokeWidth={1.5} />
              </div>
              <div className="text-right">
                <div className={`text-2xl sm:text-3xl font-light ${service.color}`}>
                  {service.stat}
                </div>
                <div className="text-xs text-slate-400 font-light">{service.statLabel}</div>
              </div>
            </div>

            {/* Middle: Title + Description */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-light text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Image for large cards */}
            {service.image && service.size === 'large' && (
              <div className="mt-6 relative h-48 sm:h-64 -mx-8 -mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-10 h-12 top-0" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            {/* Bottom: CTA arrow */}
            <div className={`flex items-center gap-2 text-sm ${service.color} mt-4 ${service.image && service.size === 'large' ? 'relative z-20 -mt-8 mb-8 ml-2' : ''}`}>
              <span className="font-light">Mehr erfahren</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`}
              />
            </div>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 -translate-y-16 translate-x-16">
            <div
              className={`w-full h-full rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-700`}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BentoServices() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-20"
        >
          <span className="text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase font-light mb-4 block">
            02 — Was wir machen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.1] mb-6">
            Alles was Sie für Ihren{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              digitalen Erfolg
            </span>{' '}
            brauchen.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            Von der Strategie bis zur Umsetzung — sechs Kompetenzfelder, ein Ziel: Ihr Wachstum.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <BentoCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
