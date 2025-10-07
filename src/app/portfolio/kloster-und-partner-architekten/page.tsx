"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Globe2, ArrowRight, Eye, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KlosterPartnerArchitektenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />

      {/* Project Hero */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="px-4 py-2 text-sm font-medium bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30 backdrop-blur-sm mb-4 inline-block">
              Architecture Website
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Kloster & Partner Architekten
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Professionelle Website für ein etabliertes Braunschweiger Architekturbüro mit eleganter Projektgalerie und modernem Design
            </p>
          </motion.div>

          {/* Main Project Image - Clickable */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mb-16"
          >
            <a 
              href="https://www.kloster-und-partner-architekten.de/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&auto=format&q=80"
                  alt="Kloster & Partner Architekten Website Screenshot"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20" />
                
                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <Globe2 className="h-12 w-12 text-white mx-auto mb-4" />
                    <p className="text-white text-xl font-semibold mb-2">Live Website besuchen</p>
                    <p className="text-white/80">Klicken Sie hier um die echte Website zu öffnen</p>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                    <Eye className="h-4 w-4 text-orange-400" />
                    <span className="text-white text-sm font-medium">Live Demo</span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <Card className="bg-slate-900/50 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Projektbeschreibung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-200 leading-relaxed">
                    Für Kloster und Partner Architekten GbR haben wir eine moderne, professionelle Website entwickelt, 
                    die ihre architektonische Expertise und Projekte optimal präsentiert. Das Braunschweiger Architekturbüro 
                    erhielt eine elegante Online-Präsenz mit fokussierter Projektgalerie.
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Hauptfunktionen:</h3>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>Responsive Design für alle Geräte</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>Elegante Projektgalerie mit Kategorien (Neubau, Modernisierung, Innenraum, Planung)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>Professionelle Außendarstellung mit Fokus auf Qualität</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>SEO-optimierte Struktur für bessere Auffindbarkeit</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>Kontaktoptimierung für potenzielle Kunden</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Meta */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="bg-slate-900/50 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Projekt Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-1">Kunde</h4>
                    <p className="text-white">Kloster und Partner Architekten GbR</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-1">Branche</h4>
                    <p className="text-white">Architektur & Planung</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-1">Entwicklungszeit</h4>
                    <p className="text-white">3 Wochen</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-1">Standort</h4>
                    <p className="text-white">Braunschweig</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Technologien</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "Responsive Design", "Image Gallery", "SEO"].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-slate-800/70 text-slate-200 rounded-lg border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Button */}
              <a 
                href="https://www.kloster-und-partner-architekten.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-xl"
                >
                  <Globe2 className="mr-2 h-5 w-5" />
                  Website besuchen
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">Projektergebnisse</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                    <p className="text-slate-200">Moderne Web-Präsenz</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400 mb-2">✓</div>
                    <p className="text-slate-200">Professioneller Auftritt</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
                    <p className="text-slate-200">Wochen Entwicklungszeit</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Back to Portfolio */}
          <div className="text-center">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="border-white/20 text-slate-200 hover:border-orange-500/50 hover:bg-orange-500/10 rounded-xl">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Weitere Projekte ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
