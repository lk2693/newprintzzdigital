"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe2, ArrowRight, Star, CheckCircle2, Award, Sparkles, Code2, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Portfolio Showcase Component
function PortfolioShowcase() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl" />
      
      {/* Decorative Dots */}
      <div className="absolute top-6 right-6 w-20 h-20 grid grid-cols-4 gap-1.5 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-black rounded-full" />
        ))}
      </div>
      
      {/* Floating Project Cards */}
      <div className="absolute inset-0 p-8 flex items-center justify-center">
        {/* Project 1 - Website */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-[5%] top-[10%] w-44 h-28 bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform"
        >
          <div className="h-3/5 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            </div>
          </div>
          <div className="h-2/5 p-2 space-y-1">
            <div className="h-1.5 bg-slate-800 rounded w-2/3" />
            <div className="h-1 bg-slate-200 rounded w-full" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
            Website
          </div>
        </motion.div>

        {/* Project 2 - E-Commerce */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute right-[5%] top-[15%] w-40 h-52 bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform"
        >
          <div className="h-1/2 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🛒</span>
            </div>
          </div>
          <div className="h-1/2 p-3 space-y-2">
            <div className="h-2 bg-slate-800 rounded w-3/4" />
            <div className="h-1.5 bg-slate-200 rounded w-full" />
            <div className="flex gap-1 mt-2">
              <div className="h-4 w-8 bg-yellow-400 rounded text-[8px] flex items-center justify-center font-bold">€99</div>
              <div className="h-4 w-12 bg-slate-100 rounded" />
            </div>
          </div>
          <div className="absolute -bottom-2 -left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            Shop
          </div>
        </motion.div>

        {/* Project 3 - Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute left-[10%] bottom-[10%] w-48 h-32 bg-slate-900 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform"
        >
          <div className="p-3 h-full">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-yellow-400 rounded" />
              <div className="h-1.5 bg-white/30 rounded w-16" />
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-white/10 rounded p-2">
                <div className="h-1 bg-yellow-400 rounded w-full mb-1" />
                <div className="h-6 bg-gradient-to-t from-yellow-400/50 to-transparent rounded" />
              </div>
              <div className="flex-1 bg-white/10 rounded p-2">
                <div className="h-1 bg-green-400 rounded w-full mb-1" />
                <div className="h-6 bg-gradient-to-t from-green-400/50 to-transparent rounded" />
              </div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
            Dashboard
          </div>
        </motion.div>

        {/* Project 4 - Mobile App */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute right-[12%] bottom-[15%] w-24 h-44 bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-700 transform hover:scale-105 transition-transform"
        >
          <div className="w-8 h-1 bg-slate-700 rounded-full mx-auto mt-1" />
          <div className="p-2 h-full">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg h-16 mb-2 flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 bg-white/30 rounded w-full" />
              <div className="h-1.5 bg-white/20 rounded w-3/4" />
              <div className="h-1.5 bg-white/20 rounded w-1/2" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-yellow-400">
            App
          </div>
        </motion.div>

        {/* Center Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-2xl"
        >
          <div className="text-center">
            <Code2 className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
            <span className="text-white text-[10px] font-medium">15+<br/>Projekte</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Alle Projekte" },
    { id: "website", label: "Websites" },
    { id: "ai", label: "KI-Integration" },
    { id: "ecommerce", label: "E-Commerce" }
  ];

  const projects = [
    {
      id: 1,
      title: "Restaurant Website",
      category: "website",
      description: "Moderne Gastronomie-Website mit Speisekarte, Reservierungssystem und elegantem Dark-Mode Design",
      image: "/restaurant.png",
      technologies: ["Next.js", "React", "TypeScript", "Responsive"],
      duration: "3 Wochen",
      link: "/portfolio",
      stats: { performance: "96", seo: "98", accessibility: "97" },
      results: ["Responsive Design", "Speisekarte-Integration", "Mobile-First"]
    },
    {
      id: 2,
      title: "E-Commerce Shop",
      category: "ecommerce",
      description: "Moderner Online-Shop mit nahtloser Zahlungsintegration und intuitivem Checkout-Prozess",
      image: "/ecommerce.png",
      technologies: ["Next.js", "Stripe", "TypeScript", "Tailwind"],
      duration: "5 Wochen",
      stats: { performance: "94", seo: "96", accessibility: "95" },
      results: ["Stripe Integration", "Warenkorb-System", "Benutzerkonten"]
    },
    {
      id: 3,
      title: "Fashion Store",
      category: "ecommerce",
      description: "Eleganter Mode-Webshop mit Produktfiltern, Wunschliste und schnellem Checkout",
      image: "/ecommerce2.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      duration: "6 Wochen",
      stats: { performance: "92", seo: "95", accessibility: "94" },
      results: ["Produktfilter", "Wunschliste", "Schneller Checkout"]
    },
    {
      id: 4,
      title: "Online Shop Platform",
      category: "ecommerce",
      description: "Vollständige E-Commerce-Plattform mit Warenkorbsystem, Benutzerkonten und Bestellverfolgung",
      image: "/onlineshop.png",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      duration: "7 Wochen",
      stats: { performance: "93", seo: "94", accessibility: "96" },
      results: ["Bestellverfolgung", "Admin-Dashboard", "Produktverwaltung"]
    },
    {
      id: 5,
      title: "AI Health Platform",
      category: "ai",
      description: "KI-gestützte Gesundheitsplattform mit intelligenter Symptomanalyse und Empfehlungen",
      image: "/AiHealth.png",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      duration: "12 Wochen",
      stats: { performance: "91", seo: "93", accessibility: "97" },
      results: ["KI-Analyse", "Symptom-Checker", "DSGVO-konform"]
    },
    {
      id: 6,
      title: "Kunstmarkt Platform",
      category: "ecommerce",
      description: "Digitaler Marktplatz für Kunst und Antiquitäten mit Auktionssystem und Galerieansicht",
      image: "/artmarket.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      duration: "10 Wochen",
      stats: { performance: "90", seo: "96", accessibility: "94" },
      results: ["Auktionssystem", "Galerieansicht", "Premium Design"]
    },
    {
      id: 7,
      title: "Hotel Booking",
      category: "website",
      description: "Hotel-Website mit integriertem Buchungssystem, Zimmerübersicht und Verfügbarkeitsprüfung",
      image: "/hotel.png",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Calendar API"],
      duration: "8 Wochen",
      stats: { performance: "93", seo: "97", accessibility: "96" },
      results: ["Buchungssystem", "Zimmerübersicht", "Multi-Sprache"]
    },
    {
      id: 8,
      title: "Landing Page",
      category: "website",
      description: "Conversion-optimierte Landing Page mit modernem Design und Analytics-Integration",
      image: "/landing.png",
      technologies: ["Next.js", "TypeScript", "Analytics", "Tailwind"],
      duration: "2 Wochen",
      stats: { performance: "98", seo: "99", accessibility: "97" },
      results: ["Schnelle Ladezeit", "SEO optimiert", "Call-to-Action"]
    },
    {
      id: 9,
      title: "Kloster & Partner Architekten",
      category: "website",
      description: "Professionelle Website für etabliertes Braunschweiger Architekturbüro mit Projektgalerie und Kontaktformular",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80",
      technologies: ["Next.js", "React", "TypeScript", "Responsive"],
      duration: "3 Wochen",
      link: "/portfolio/kloster-und-partner-architekten",
      liveUrl: "https://www.kloster-und-partner-architekten.de/",
      stats: { performance: "95", seo: "100", accessibility: "98" },
      results: ["Projektgalerie", "Kontaktformular", "Responsive Design"]
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Unsere Referenzen
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Projekte, die{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  überzeugen
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Entdecken Sie unsere erfolgreich umgesetzten Projekte – von modernen Websites 
                über E-Commerce-Lösungen bis hin zu KI-Integrationen. Qualität, die Ergebnisse liefert.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                <Link href="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full group w-full sm:w-auto">
                    Projekt starten
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#projekte">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full w-full sm:w-auto">
                    Projekte ansehen
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <span>100% Kundenzufriedenheit</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                  <span>95+ Lighthouse Score</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  <span>15+ Projekte</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <PortfolioShowcase />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Erfolgreiche Projekte" },
              { value: "100%", label: "Zufriedene Kunden" },
              { value: "95+", label: "Ø Lighthouse Score" },
              { value: "48h", label: "Schnellste Umsetzung" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="projekte" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Alle Projekte</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Filtern Sie nach Kategorie und entdecken Sie unsere vielfältigen Arbeiten.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-yellow-400 text-black"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <Card className="bg-white border-slate-200 hover:border-slate-900 transition-all duration-300 overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden bg-slate-50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1 text-xs font-light uppercase tracking-wider">
                        {project.duration}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <motion.h3 
                        className="text-xl font-light text-slate-900 mb-2 transition-all duration-300"
                        whileHover={{ x: 4 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
                        {project.description}
                      </p>

                      {/* Lighthouse Scores */}
                      {project.stats && (
                        <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-slate-50 border border-slate-200">
                          <div className="text-center">
                            <div className="text-lg font-light text-slate-900">{project.stats.performance}</div>
                            <div className="text-xs text-slate-500 font-light">Performance</div>
                          </div>
                          <div className="text-center border-x border-slate-200">
                            <div className="text-lg font-light text-slate-900">{project.stats.seo}</div>
                            <div className="text-xs text-slate-500 font-light">SEO</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-light text-slate-900">{project.stats.accessibility}</div>
                            <div className="text-xs text-slate-500 font-light">Accessibility</div>
                          </div>
                        </div>
                      )}

                      {/* Results */}
                      {project.results && (
                        <div className="mb-4">
                          <div className="text-xs uppercase tracking-wider text-slate-900 mb-2 font-light">Ergebnisse</div>
                          <div className="space-y-1">
                            {project.results.map((result, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-light">
                                <div className="w-1 h-1 bg-slate-900 rounded-full" />
                                {result}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          className="px-3 py-1 border border-slate-200 text-slate-600 text-xs font-light"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.id === 1 ? (
                        <>
                          <Link href="/portfolio/kloster-und-partner-architekten" className="flex-1">
                            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-light">
                              Details ansehen
                            </Button>
                          </Link>
                          <a href="https://www.kloster-und-partner-architekten.de/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="border-slate-300 hover:border-slate-900 hover:bg-slate-50 font-light">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        </>
                      ) : (
                        <Button className="w-full border border-slate-200 bg-white text-slate-400 font-light cursor-not-allowed" disabled>
                          Bald verfügbar
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-sm uppercase tracking-wider text-yellow-600 mb-4 font-medium">Tech Stack</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technologien die wir{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                meistern
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Python", "TailwindCSS",
              "PostgreSQL", "MongoDB", "Prisma", "OpenAI", "Stripe", "AWS"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-slate-50 border border-slate-200 p-6 text-center hover:border-yellow-400 hover:bg-yellow-50 transition-all cursor-default rounded-xl"
              >
                <div className="text-slate-900 font-medium text-sm">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-sm uppercase tracking-wider text-yellow-600 mb-4 font-medium">Kundenstimmen</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Was unsere{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Kunden sagen
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Die Zusammenarbeit war professionell und unkompliziert. Unsere neue Website übertrifft alle Erwartungen.",
                author: "Thomas Kloster",
                role: "Geschäftsführer",
                company: "Kloster & Partner Architekten"
              },
              {
                quote: "Schnelle Umsetzung, moderne Technologie und persönliche Betreuung - genau was wir gebraucht haben.",
                author: "Sarah Meyer",
                role: "Marketing Lead",
                company: "TechStart GmbH"
              },
              {
                quote: "Der ROI war bereits nach 3 Monaten positiv. Die Performance-Optimierung hat unsere Conversion um 40% erhöht.",
                author: "Michael Fischer",
                role: "CEO",
                company: "Fashion Forward"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white border border-slate-200 p-8 hover:border-yellow-400 transition-all rounded-2xl"
              >
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-medium text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Bereit für Ihr nächstes Projekt?
            </motion.h2>
            <motion.p 
              className="text-xl text-black/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Lassen Sie uns gemeinsam etwas Großartiges schaffen. Von der Idee bis zur Umsetzung.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-black hover:bg-slate-800 text-white hover:scale-105 transition-transform rounded-full px-8">
                  Projekt anfragen <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10 rounded-full px-8">
                  Mehr über uns
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
