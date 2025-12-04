"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, Sparkles, Bot, MessageSquare, LineChart, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KIIntegrationPage() {
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
              <Brain className="w-4 h-4" />
              KI-Integration
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Künstliche Intelligenz für{" "}
              <span className="text-yellow-500">Ihr Business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Integrieren Sie KI-Lösungen in Ihre Geschäftsprozesse. Von Chatbots über 
              intelligente Analysen bis hin zu automatisierten Entscheidungen.
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
                KI-Lösungen mit{" "}
                <span className="text-yellow-500">Smart Features</span>
              </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Chatbots */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligente Chatbots</h3>
                <p className="text-gray-600 mb-6">
                  24/7 Kundenservice mit KI-gestützten Chatbots, die lernen und sich verbessern.
                </p>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">24/7</div>
                      <div className="text-sm text-gray-500">Verfügbarkeit</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Predictive */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Vorhersagen Sie Trends, Verkäufe und Kundenverhalten mit Machine Learning.
                </p>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="h-16 w-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 rounded-xl relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60">
                      <path d="M0,45 Q30,40 60,35 T120,25 T200,10" fill="none" stroke="white" strokeWidth="3" opacity="0.8"/>
                      <path d="M120,25 L200,10" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 3 - NLP */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sprachverarbeitung</h3>
                <p className="text-gray-600 mb-6">
                  Natural Language Processing für Textanalyse, Sentiment und Automatisierung.
                </p>
                <div className="flex gap-2">
                  <div className="w-12 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1 h-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg flex items-center justify-center px-3">
                    <div className="text-xs text-yellow-700 font-medium">Sentiment: Positiv 😊</div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Automation - Large */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">KI-gestützte Automatisierung</h3>
                <p className="text-gray-600 mb-6">
                  Intelligente Prozesse, die selbstständig lernen und Entscheidungen treffen.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-yellow-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">85%</div>
                    <div className="text-sm text-gray-600">Zeitersparnis</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-gray-700">99%</div>
                    <div className="text-sm text-gray-600">Genauigkeit</div>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">10x</div>
                    <div className="text-sm text-gray-600">Schneller</div>
                  </div>
                </div>
              </div>

              {/* Card 5 - AI Score */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">KI-Readiness Score</h3>
                <p className="text-gray-600 mb-6">
                  Bewerten Sie Ihr KI-Potenzial.
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-20">
                    <svg viewBox="0 0 120 60" className="w-full h-full">
                      <path d="M10,55 A50,50 0 0,1 110,55" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round"/>
                      <path d="M10,55 A50,50 0 0,1 75,10" fill="none" stroke="url(#yellowGradient3)" strokeWidth="8" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="yellowGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fbbf24"/>
                          <stop offset="100%" stopColor="#f59e0b"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl font-bold text-gray-900">78</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* KI Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Lösungen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Unsere KI-Services
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'ChatGPT Integration', description: 'OpenAI APIs' },
                { name: 'Custom AI Models', description: 'Maßgeschneidert' },
                { name: 'Data Analytics', description: 'ML Insights' },
                { name: 'Voice AI', description: 'Sprachassistenten' },
              ].map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
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
                KI in <span className="text-yellow-500">Aktion</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Bot, title: 'Kundenservice Chatbots', description: 'Intelligente Assistenten, die Kundenanfragen verstehen und beantworten.' },
                { icon: LineChart, title: 'Sales Prediction', description: 'Vorhersage von Verkaufszahlen und optimale Preisgestaltung mit ML.' },
                { icon: Sparkles, title: 'Content Generation', description: 'Automatische Erstellung von Texten, E-Mails und Marketing-Content.' },
                { icon: Cpu, title: 'Process Mining', description: 'KI-gestützte Analyse und Optimierung von Geschäftsprozessen.' }
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
              Bereit für <span className="text-yellow-400">KI-Innovation?</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam entdecken, wie KI Ihr Business transformieren kann.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl group"
            >
              KI-Beratung anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
