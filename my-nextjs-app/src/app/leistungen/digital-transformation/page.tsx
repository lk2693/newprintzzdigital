"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Rocket, Target, TrendingUp, Users, BarChart3, PieChart } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-gray-100">
      <Header />

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Startseite
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Digitale Transformation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ihr Unternehmen{" "}
              <span className="text-yellow-500">digital transformieren</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Wir begleiten Sie auf dem Weg zur digitalen Exzellenz. Von der Strategie über 
              die Implementierung bis zum nachhaltigen Erfolg.
            </p>
          </motion.div>

          {/* Bento Grid Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transformation mit{" "}
                <span className="text-yellow-500">Smart Features</span>
              </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Analytics */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Echtzeit-Analysen</h3>
                <p className="text-gray-600 mb-6">
                  Behalten Sie alle KPIs im Blick mit intuitiven, datengetriebenen Dashboards.
                </p>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">+127%</div>
                      <div className="text-sm text-gray-500">Wachstum</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Reports */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automatisierte Reports</h3>
                <p className="text-gray-600 mb-6">
                  Generieren Sie Zusammenfassungen automatisch – ohne manuellen Aufwand.
                </p>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="h-16 w-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 rounded-xl relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60">
                      <path d="M0,50 Q50,20 100,35 T200,15" fill="none" stroke="white" strokeWidth="3" opacity="0.8"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 3 - Budget */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smarte Budgetplanung</h3>
                <p className="text-gray-600 mb-6">
                  Planen und optimieren Sie mit KI-gestützten Budgetvorschlägen.
                </p>
                <div className="flex gap-3 justify-center">
                  <div className="relative w-16 h-16">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="42 100" strokeLinecap="round"/>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">45%</span>
                  </div>
                  <div className="relative w-16 h-16">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="55 100" strokeLinecap="round"/>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">55%</span>
                  </div>
                </div>
              </div>

              {/* Card 4 - Sync - Large */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sichere Synchronisation</h3>
                <p className="text-gray-600 mb-6">
                  Verknüpfen Sie alle Systeme sicher mit Echtzeit-Datensynchronisation.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-20 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                    <div className="flex gap-1">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-1.5 bg-yellow-400 rounded-full animate-pulse"
                          style={{ 
                            height: `${20 + Math.sin(i * 0.8) * 15}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 - Growth Score */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Score</h3>
                <p className="text-gray-600 mb-6">
                  Wichtige Metriken und Trends auf einen Blick.
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-20">
                    <svg viewBox="0 0 120 60" className="w-full h-full">
                      <path d="M10,55 A50,50 0 0,1 110,55" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round"/>
                      <path d="M10,55 A50,50 0 0,1 70,12" fill="none" stroke="url(#yellowGradient4)" strokeWidth="8" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="yellowGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fbbf24"/>
                          <stop offset="100%" stopColor="#f59e0b"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl font-bold text-gray-900">58</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Transformation Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Bereiche
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Transformations-Schwerpunkte
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Prozesse', description: 'Digitalisierung' },
                { name: 'Kundenservice', description: 'Omnichannel' },
                { name: 'Datenanalyse', description: 'Business Intelligence' },
                { name: 'Kultur', description: 'Change Management' },
              ].map((area, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{area.name}</h3>
                  <p className="text-sm text-gray-500">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Vorteile
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Warum <span className="text-yellow-500">Transformation?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: TrendingUp, title: 'Wettbewerbsvorteil', description: 'Bleiben Sie der Konkurrenz einen Schritt voraus mit modernen digitalen Lösungen.' },
                { icon: Users, title: 'Kundenzufriedenheit', description: 'Verbessern Sie das Kundenerlebnis durch nahtlose digitale Touchpoints.' },
                { icon: Target, title: 'Effizienzsteigerung', description: 'Optimieren Sie Prozesse und reduzieren Sie manuelle Aufwände um bis zu 60%.' },
                { icon: PieChart, title: 'Datengetriebene Entscheidungen', description: 'Treffen Sie fundierte Entscheidungen basierend auf Echtzeitdaten.' }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-yellow-300 transition-all flex gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-900 rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für die <span className="text-yellow-400">digitale Zukunft?</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre digitale Roadmap entwickeln und Ihr Unternehmen transformieren.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl group"
            >
              Transformation starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
