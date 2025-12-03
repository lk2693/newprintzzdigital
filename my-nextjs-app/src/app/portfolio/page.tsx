"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Globe2, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      title: "Kloster & Partner Architekten",
      category: "website",
      description: "Professionelle Website für etabliertes Braunschweiger Architekturbüro mit Projektgalerie und Kontaktformular",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80",
      technologies: ["Next.js", "React", "TypeScript", "Responsive"],
      duration: "3 Wochen",
      client: "Architekten GbR",
      link: "/portfolio/kloster-und-partner-architekten",
      liveUrl: "https://www.kloster-und-partner-architekten.de/",
      stats: { performance: "95", seo: "100", accessibility: "98" },
      results: ["50% schnellere Ladezeiten", "3x mehr Anfragen", "Top 3 bei Google"]
    },
    {
      id: 2,
      title: "TechStart Website",
      category: "website",
      description: "Moderne Corporate Website mit KI-gestütztem Chatbot für 24/7 Kundenservice",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
      technologies: ["Next.js", "TypeScript", "OpenAI", "Supabase"],
      duration: "4 Wochen",
      client: "TechStart GmbH",
      stats: { performance: "92", seo: "95", accessibility: "96" },
      results: ["40% mehr Conversions", "24/7 verfügbar", "200+ Anfragen/Tag"]
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "ecommerce",
      description: "Vollständige E-Commerce-Lösung mit KI-Produktempfehlungen und Stripe-Integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      duration: "8 Wochen",
      client: "Fashion Forward",
      stats: { performance: "90", seo: "93", accessibility: "95" },
      results: ["€100k+ Umsatz/Monat", "5.000+ Produkte", "98% Kundenzufriedenheit"]
    },
    {
      id: 4,
      title: "KI-Analysetool",
      category: "ai",
      description: "Intelligente Datenanalyse mit maschinellem Lernen für Business Intelligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=80",
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL"],
      duration: "12 Wochen",
      client: "DataCorp",
      stats: { performance: "88", seo: "90", accessibility: "94" },
      results: ["70% Zeitersparnis", "99.5% Genauigkeit", "Real-time Analytics"]
    },
    {
      id: 5,
      title: "Immobilien Portal",
      category: "website",
      description: "Modernes Immobilienportal mit Suchfiltern, Favoriten und Kontaktanfragen",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format&q=80",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Maps API"],
      duration: "6 Wochen",
      client: "ImmoVision",
      stats: { performance: "94", seo: "97", accessibility: "96" },
      results: ["1.000+ Immobilien", "5x mehr Leads", "15 Min. Ø Session"]
    },
    {
      id: 6,
      title: "Restaurant App",
      category: "ecommerce",
      description: "Online-Bestellsystem mit Reservierungen, Lieferung und Treueprogramm",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format&q=80",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      duration: "10 Wochen",
      client: "Bella Vita",
      stats: { performance: "91", seo: "92", accessibility: "93" },
      results: ["€50k+ Monatsumsatz", "10.000+ Downloads", "4.8★ Bewertung"]
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition group font-light">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-sm uppercase tracking-wider text-slate-600 font-light">Portfolio</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-light mb-6"
          >
            Unsere{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Projekte
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-light"
          >
            Entdecken Sie unsere erfolgreich umgesetzten Projekte und die beeindruckenden Ergebnisse für unsere Kunden.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 font-light transition-all ${
                  selectedCategory === category.id
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-900"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Erfolgreiche Projekte" },
              { number: "100%", label: "Zufriedene Kunden" },
              { number: "95+", label: "Ø Lighthouse Score" },
              { number: "48h", label: "Schnellste Umsetzung" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-light bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
                      <p className="text-sm text-slate-600 mb-3 font-light">für {project.client}</p>
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
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-4 font-light">Tech Stack</div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Technologien die wir{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
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
                className="bg-slate-50 border border-slate-200 p-6 text-center hover:border-slate-900 transition-all cursor-default"
              >
                <div className="text-slate-900 font-light text-sm">{tech}</div>
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
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-4 font-light">Kundenstimmen</div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Was unsere{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
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
                className="bg-white border border-slate-200 p-8 hover:border-slate-900 transition-all"
              >
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-slate-900 text-slate-900" />
                    ))}
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-light text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600 font-light">{testimonial.role}</div>
                  <div className="text-sm text-slate-500 font-light">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light mb-6 text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Bereit für Ihr{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                nächstes Projekt?
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-light"
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
              <Link href="/#kontakt">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-light hover:scale-105 transition-transform">
                  Projekt anfragen <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-900 hover:border-slate-900 hover:bg-slate-50 font-light">
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
