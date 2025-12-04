'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Globe, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface WebsiteShowcase {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
  url?: string;
  tags: string[];
}

export default function ProblemSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const websites: WebsiteShowcase[] = [
    {
      id: 1,
      title: "Kloster & Partner Architekten",
      category: "Corporate Website",
      description: "Moderne Architektur-Website mit Portfolio-Showcase und elegantem Design.",
      image: "/portfolio/kloster-partner.jpg",
      color: "from-slate-900 to-slate-700",
      url: "/portfolio/kloster-und-partner-architekten",
      tags: ["Next.js", "Responsive", "SEO"]
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Online Shop",
      description: "Vollständig integrierter Webshop mit Zahlungsabwicklung und Lagerverwaltung.",
      image: "/portfolio/ecommerce-demo.jpg",
      color: "from-yellow-500 to-orange-500",
      tags: ["Shopify", "Payment", "Analytics"]
    },
    {
      id: 3,
      title: "Dashboard Solution",
      category: "Web Application",
      description: "Interaktives Business-Dashboard mit Echtzeit-Datenvisualisierung.",
      image: "/portfolio/dashboard-demo.jpg",
      color: "from-blue-600 to-purple-600",
      tags: ["React", "Charts", "API"]
    },
    {
      id: 4,
      title: "Ihr Projekt",
      category: "Coming Soon",
      description: "Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.",
      image: "/portfolio/placeholder.jpg",
      color: "from-black to-slate-800",
      tags: ["Ihre Idee", "Unser Know-how"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % websites.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + websites.length) % websites.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Unsere Arbeit
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Websites, die{' '}
            <span className="text-yellow-400">begeistern</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Entdecken Sie unsere Projekte – von Corporate Websites bis zu komplexen Web-Applikationen.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative">
          {/* Large Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] max-w-4xl mx-auto mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br ${websites[currentIndex].color} shadow-2xl`}
              >
                {/* Placeholder Content - Replace with actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Globe className="w-12 h-12 text-white/80" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {websites[currentIndex].title}
                    </h3>
                    <p className="text-white/60 text-sm uppercase tracking-wider mb-4">
                      {websites[currentIndex].category}
                    </p>
                    <p className="text-white/80 max-w-md mx-auto mb-6">
                      {websites[currentIndex].description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {websites[currentIndex].tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {websites[currentIndex].url && (
                      <Link 
                        href={websites[currentIndex].url}
                        className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors"
                      >
                        Projekt ansehen
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-400 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-400 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </motion.div>

          {/* Thumbnail Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            {websites.map((website, index) => (
              <button
                key={website.id}
                onClick={() => goToSlide(index)}
                className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-yellow-400 scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${website.color}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white/60" />
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Projekte" },
            { value: "100%", label: "Zufriedene Kunden" },
            { value: "24h", label: "Express Service" },
            { value: "∞", label: "Kreativität" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/portfolio">
            <button className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full transition-all hover:scale-105">
              Alle Projekte entdecken
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
