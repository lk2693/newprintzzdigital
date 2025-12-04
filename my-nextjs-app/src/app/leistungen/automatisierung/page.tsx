"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, RefreshCw, Clock, Settings, TrendingUp, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AutomatisierungPage() {
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
              <Zap className="w-4 h-4" />
              Automatisierung
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Prozesse automatisieren,{" "}
              <span className="text-yellow-500">Zeit gewinnen</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Automatisieren Sie repetitive Aufgaben und optimieren Sie Ihre Geschäftsprozesse. 
              Mehr Zeit für strategische Arbeit, weniger manuelle Tasks.
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
                Intelligente Automatisierung mit{" "}
                <span className="text-yellow-500">Smart Features</span>
              </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Zeitersparnis */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Echtzeit-Automatisierung</h3>
                <p className="text-gray-600 mb-6">
                  Workflows laufen automatisch ab, sobald Trigger ausgelöst werden.
                </p>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">15h</div>
                      <div className="text-sm text-gray-500">Zeitersparnis/Woche</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Reports */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automatische Reports</h3>
                <p className="text-gray-600 mb-6">
                  Generieren Sie Zusammenfassungen und Berichte ohne manuellen Aufwand.
                </p>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="h-16 w-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 rounded-xl relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60">
                      <path d="M0,50 Q50,20 100,35 T200,15" fill="none" stroke="white" strokeWidth="3" opacity="0.8"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 3 - Workflow */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smarte Workflows</h3>
                <p className="text-gray-600 mb-6">
                  KI-gestützte Entscheidungen und adaptive Prozesssteuerung.
                </p>
                <div className="flex gap-2">
                  <div className="w-12 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1 h-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg flex items-center justify-center">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={`w-2 h-${4 + i * 2} bg-yellow-${300 + i * 100} rounded-full`} style={{ height: `${8 + i * 4}px` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Sync - Large */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nahtlose Synchronisation</h3>
                <p className="text-gray-600 mb-6">
                  Verbinden Sie alle Ihre Tools und halten Sie Daten automatisch synchron.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-yellow-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">95%</div>
                    <div className="text-sm text-gray-600">Weniger Fehler</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-gray-700">24/7</div>
                    <div className="text-sm text-gray-600">Automatisiert</div>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">∞</div>
                    <div className="text-sm text-gray-600">Skalierbar</div>
                  </div>
                </div>
              </div>

              {/* Card 5 - ROI */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ROI Tracking</h3>
                <p className="text-gray-600 mb-6">
                  Messen Sie den Erfolg Ihrer Automatisierungen.
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-20">
                    <svg viewBox="0 0 120 60" className="w-full h-full">
                      <path d="M10,55 A50,50 0 0,1 110,55" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round"/>
                      <path d="M10,55 A50,50 0 0,1 95,25" fill="none" stroke="url(#yellowGradient2)" strokeWidth="8" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="yellowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fbbf24"/>
                          <stop offset="100%" stopColor="#f59e0b"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl font-bold text-gray-900">6 Mo.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Tools & Plattformen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Beste Automation-Stack
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Zapier', description: 'No-Code Automation' },
                { name: 'Make', description: 'Advanced Workflows' },
                { name: 'n8n', description: 'Self-Hosted' },
                { name: 'Custom APIs', description: 'Maßgeschneidert' },
              ].map((tool, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tool.name}</h3>
                  <p className="text-sm text-gray-500">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Anwendungsfälle
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Was wir <span className="text-yellow-500">automatisieren</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: RefreshCw, title: 'Lead-Verarbeitung', description: 'Automatisches Routing, Scoring und Nurturing von Leads zwischen Marketing- und CRM-Tools.' },
                { icon: BarChart, title: 'Reporting & Analytics', description: 'Automatische Erstellung von Reports und Dashboards über alle Tools hinweg.' },
                { icon: Settings, title: 'Daten-Synchronisation', description: 'Echtzeit-Sync zwischen CRM, E-Commerce, Marketing und Business-Systemen.' },
                { icon: Zap, title: 'Workflow Automation', description: 'End-to-End Prozessautomatisierung von Onboarding bis Approval-Prozesse.' }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-yellow-300 transition-all flex gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 text-sm">{useCase.description}</p>
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
              Bereit für <span className="text-yellow-400">Automatisierung?</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns analysieren, welche Prozesse Sie automatisieren können und wie viel Zeit Sie sparen werden.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl group"
            >
              Kostenloses Process-Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
