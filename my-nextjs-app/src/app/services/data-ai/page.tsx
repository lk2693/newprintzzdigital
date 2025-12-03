'use client';

import Link from "next/link";
import { ArrowLeft, Check, Database, Zap, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function DataAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-12 font-light"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Link>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <Database className="w-12 h-12 text-slate-900" />
              <div className="text-sm uppercase tracking-wider text-slate-600 font-light">06 — Services</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              Data &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Daten ohne Insights sind nutzlos. Wir bauen KI-Systeme, die echte Business-Probleme lösen.
            </p>
          </motion.div>

          {/* Key Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 border border-slate-200 p-12 mb-20"
          >
            <div className="text-5xl font-light text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                15h
              </span>{" "}
              Zeitersparnis/Woche
            </div>
            <p className="text-slate-600 font-light">
              Durch intelligente Automatisierung repetitiver Tasks
            </p>
          </motion.div>

          {/* The Problem */}
          <div className="grid lg:grid-cols-2 gap-20 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Das Problem</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-8 leading-tight">
                Daten-Chaos und verpasste AI-Chancen
              </h2>
              <div className="space-y-4 text-slate-600 font-light leading-relaxed">
                <p>
                  Daten verteilt über Dutzende Tools ohne zentrale Wahrheit. Entscheidungen aus dem Bauchgefühl statt aus Daten.
                </p>
                <p>
                  Ihr Team verbringt Stunden mit Copy-Paste und manueller Datenverarbeitung statt mit strategischer Arbeit.
                </p>
                <p>
                  KI-Buzzwords ohne konkrete Anwendungsfälle und ROI.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Unsere Lösung</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-8 leading-tight">
                Business-First AI Implementation
              </h2>
              <div className="space-y-4">
                {[
                  'Custom AI-Agenten für spezifische Anwendungsfälle',
                  'Data Warehousing & Analytics (BigQuery, Snowflake)',
                  'Real-time Dashboards & Business Intelligence',
                  'Predictive Analytics & Forecasting',
                  'Process Automation mit AI',
                  'ROI-getriebene AI-Strategie'
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-light">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* AI Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">AI Anwendungen</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Konkrete{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Use Cases
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Customer Support AI',
                  description: 'Automatische Ticket-Kategorisierung und Response-Vorschläge'
                },
                {
                  title: 'Sales Intelligence',
                  description: 'Lead-Scoring, Next-Best-Action und Deal-Forecasting'
                },
                {
                  title: 'Content Generation',
                  description: 'SEO-Content, Product Descriptions und Social Media'
                },
                {
                  title: 'Document Processing',
                  description: 'Rechnungen, Verträge und Formulare automatisch verarbeiten'
                },
                {
                  title: 'Predictive Analytics',
                  description: 'Churn-Prediction, Demand-Forecasting und Price-Optimization'
                },
                {
                  title: 'Personalization',
                  description: 'Dynamische Produktempfehlungen und Content-Personalisierung'
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-50 border border-slate-200 p-6 hover:border-slate-900 transition-all"
                >
                  <h3 className="text-lg font-light text-slate-900 mb-2">{useCase.title}</h3>
                  <p className="text-slate-600 font-light text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Technology</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                AI & Data{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Stack
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'OpenAI GPT-4',
                'Anthropic Claude',
                'LangChain',
                'Vector DBs',
                'Python',
                'BigQuery',
                'Snowflake',
                'Looker'
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-50 border border-slate-200 p-6 text-center hover:border-slate-900 transition-all"
                >
                  <div className="text-slate-900 font-light">{tech}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Vorgehen</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Von Proof of Concept zu{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Production
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Use-Case Identifikation und ROI-Bewertung'
                },
                {
                  step: '02',
                  title: 'Proof of Concept',
                  description: '2-4 Wochen MVP mit echten Daten'
                },
                {
                  step: '03',
                  title: 'Build',
                  description: 'Production-ready AI-System mit Monitoring'
                },
                {
                  step: '04',
                  title: 'Scale',
                  description: 'Optimierung und Expansion auf weitere Use Cases'
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-50 border border-slate-200 p-6"
                >
                  <div className="text-4xl font-light text-slate-300 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">{phase.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed text-sm">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Messbare{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Ergebnisse
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: 'Zeitersparnis', value: '15h/Woche' },
                { metric: 'Kostenreduktion', value: '-40%' },
                { metric: 'Accuracy', value: '95%+' },
                { metric: 'ROI', value: '6 Monate' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-slate-200 p-8 text-center hover:border-slate-900 transition-all"
                >
                  <div className="text-3xl font-light bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                    {item.value}
                  </div>
                  <div className="text-slate-600 font-light text-sm">{item.metric}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 text-white p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Bereit für{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                AI-gesteuerte Prozesse?
              </span>
            </h2>
            <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Use Cases identifizieren, die echten Business-Impact haben.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              AI-Workshop buchen
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
