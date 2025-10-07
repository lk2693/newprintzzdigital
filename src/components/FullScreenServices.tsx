'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Globe, TrendingUp, Users, Database, ShoppingBag, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  problem: string;
  solution: string[];
  stat?: string;
  image?: string;
}

const services: Service[] = [
  {
    id: 'digitalstrategie',
    number: '02',
    icon: Sparkles,
    title: 'Digitalstrategie',
    problem: 'Ohne klare Strategie verschwenden Sie Budget und verpassen Chancen',
    solution: [
      'Datenbasierte Analyse Ihrer Ist-Situation',
      'Klarer Fahrplan mit messbaren Zielen',
      'Technologie-Roadmap für nachhaltiges Wachstum'
    ],
    stat: '3x schnellere Time-to-Market',
    image: '/digitalmeeting.png'
  },
  {
    id: 'website',
    number: '03',
    icon: Globe,
    title: 'Website & Plattform',
    problem: 'Ihre Website lädt langsam und konvertiert schlecht',
    solution: [
      'Blitzschnelle Performance (< 1s Ladezeit)',
      'Mobile-First Design für alle Geräte',
      'Conversion-optimierte User Experience'
    ],
    stat: 'Bis zu 60% bessere Conversion',
    image: '/artmarket.png'
  },
  {
    id: 'marketing',
    number: '04',
    icon: TrendingUp,
    title: 'Digital Marketing',
    problem: 'Hohe Werbeausgaben ohne messbare Ergebnisse',
    solution: [
      'Performance Marketing mit ROI-Fokus',
      'A/B Testing für kontinuierliche Optimierung',
      'Multi-Channel Attribution & Analytics'
    ],
    stat: 'Durchschnittlich 4:1 ROAS',
    image: '/marketing.png'
  },
  {
    id: 'crm',
    number: '05',
    icon: Users,
    title: 'CRM & Revenue Ops',
    problem: 'Kundendaten sind fragmentiert, Leads gehen verloren',
    solution: [
      'Zentrale Kundendatenbank mit 360°-Sicht',
      'Automatisierte Lead-Nurturing-Prozesse',
      'Nahtlose Integration aller Marketing- & Sales-Tools'
    ],
    stat: 'Bis zu 40% mehr qualifizierte Leads',
    image: '/dashboard.png'
  },
  {
    id: 'data-ai',
    number: '06',
    icon: Database,
    title: 'Data & AI',
    problem: 'Sie haben Daten, aber keine Erkenntnisse',
    solution: [
      'KI-gestützte Analyse für bessere Entscheidungen',
      'Predictive Analytics & Customer Insights',
      'Automatisierung repetitiver Aufgaben'
    ],
    stat: 'Durchschnittlich 15h Zeitersparnis/Woche',
    image: '/aiforeacastleads.png'
  },
  {
    id: 'commerce',
    number: '07',
    icon: ShoppingBag,
    title: 'Commerce Lösungen',
    problem: 'Ihr Online-Shop verliert Kunden im Checkout',
    solution: [
      'Friktionsloser Checkout-Prozess',
      'Personalisierte Shopping-Experience',
      'Skalierbare E-Commerce-Plattform'
    ],
    stat: 'Bis zu 35% weniger Abbrüche',
    image: '/onlineshop.png'
  }
];

function ServiceSection({ service, index }: { service: Service; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
      }`}
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className={`transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          
          {/* Section number and title */}
          <div className="mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase font-light mb-3 sm:mb-4 block">
              {service.number} — Services
            </span>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Icon className="w-8 h-8 sm:w-12 sm:h-12 text-orange-500" strokeWidth={1.5} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900">
                {service.title}
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: Problem & Solution */}
            <div>
              {/* Problem */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xs sm:text-sm tracking-[0.2em] text-red-500 uppercase font-medium mb-3 sm:mb-4">
                  Das Problem
                </h3>
                <p className="text-xl sm:text-2xl md:text-3xl font-light text-slate-700 leading-relaxed">
                  {service.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xs sm:text-sm tracking-[0.2em] text-green-600 uppercase font-medium mb-4 sm:mb-6">
                  Unsere Lösung
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {service.solution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                      <span className="text-base sm:text-lg text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat */}
              {service.stat && (
                <div className="mb-6 sm:mb-8">
                  <p className="text-lg sm:text-xl font-light text-slate-900 border-l-2 border-orange-500 pl-4 sm:pl-6">
                    {service.stat}
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="flex gap-4">
                <Link 
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-slate-900 hover:text-orange-500 transition-colors"
                >
                  Projekt starten
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Visual placeholder */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}>
              {service.image ? (
                <div className="relative w-full aspect-[4/3] border border-slate-200 overflow-hidden group cursor-pointer">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <Icon className="w-32 h-32 text-slate-300" strokeWidth={1} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FullScreenServices() {
  return (
    <>
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </>
  );
}
