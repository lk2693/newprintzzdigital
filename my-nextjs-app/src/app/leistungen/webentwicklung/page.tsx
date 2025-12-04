"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Code, Smartphone, Zap, Search } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WebentwicklungPage() {
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
              <Code className="w-4 h-4" />
              Webentwicklung
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Moderne Websites, die{" "}
              <span className="text-yellow-500">konvertieren</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Wir entwickeln blitzschnelle, responsive Websites mit modernstem Tech-Stack. 
              Performance und User Experience stehen bei uns an erster Stelle.
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
                Optimierte Web-Erlebnisse mit{" "}
                <span className="text-yellow-500">Smart Features</span>
              </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Performance */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Blitzschnelle Performance</h3>
                <p className="text-gray-600 mb-6">
                  Lighthouse Score 95+ garantiert. Sub-Second Ladezeiten für beste User Experience.
                </p>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">0.8s</div>
                      <div className="text-sm text-gray-500">Ladezeit</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - SEO */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Optimiert</h3>
                <p className="text-gray-600 mb-6">
                  Strukturierte Daten, Meta-Tags und semantisches HTML für Top-Rankings.
                </p>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="h-16 w-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 rounded-xl relative overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60">
                        <path d="M0,50 Q50,20 100,35 T200,15" fill="none" stroke="white" strokeWidth="3" opacity="0.8"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Responsive */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile-First Design</h3>
                <p className="text-gray-600 mb-6">
                  Responsive Design für alle Geräte. Optimiert für Touch und mobile UX.
                </p>
                <div className="flex gap-2">
                  <div className="w-12 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1 h-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Conversion - Large */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conversion-Optimierung</h3>
                <p className="text-gray-600 mb-6">
                  Strategisch platzierte CTAs und optimierte User Journeys für mehr Leads und Verkäufe.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-yellow-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">+45%</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-gray-700">-60%</div>
                    <div className="text-sm text-gray-600">Bounce Rate</div>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">3x</div>
                    <div className="text-sm text-gray-600">Mehr Leads</div>
                  </div>
                </div>
              </div>

              {/* Card 5 - Growth Score */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Score</h3>
                <p className="text-gray-600 mb-6">
                  Performance-Metriken auf einen Blick.
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-20">
                    <svg viewBox="0 0 120 60" className="w-full h-full">
                      <path d="M10,55 A50,50 0 0,1 110,55" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round"/>
                      <path d="M10,55 A50,50 0 0,1 85,15" fill="none" stroke="url(#yellowGradient)" strokeWidth="8" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fbbf24"/>
                          <stop offset="100%" stopColor="#f59e0b"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl font-bold text-gray-900">95</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Technologie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Modernster Tech-Stack
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Next.js 15', description: 'React Framework' },
                { name: 'TypeScript', description: 'Type-safe Code' },
                { name: 'Tailwind CSS', description: 'Utility-First CSS' },
                { name: 'Vercel', description: 'Edge Hosting' },
              ].map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Prozess
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Von Konzept zu <span className="text-yellow-500">Launch</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Konzeption', description: 'Anforderungsanalyse und Wireframes' },
                { step: '02', title: 'Design', description: 'UI/UX Design mit Fokus auf Conversion' },
                { step: '03', title: 'Development', description: 'Agile Entwicklung mit Updates' },
                { step: '04', title: 'Launch', description: 'Testing und Go-Live' }
              ].map((phase, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-yellow-300 transition-all">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-yellow-600">{phase.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
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
              Bereit für Ihr <span className="text-yellow-400">Web-Projekt?</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam eine Website entwickeln, die Ihre Nutzer begeistert und Ihr Business voranbringt.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl group"
            >
              Projekt besprechen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
