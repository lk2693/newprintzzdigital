'use client';

import Link from "next/link";
import { ArrowLeft, Check, Users, Target, GitBranch } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function CRMPage() {
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
              <Users className="w-12 h-12 text-slate-900" />
              <div className="text-sm uppercase tracking-wider text-slate-600 font-light">05 — Services</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              CRM &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Revenue Ops
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Leads verschwinden im Chaos? Wir bauen Ihr Revenue-System - von Lead-Generierung bis Customer Success.
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
              Bis zu{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                40%
              </span>{" "}
              mehr qualifizierte Leads
            </div>
            <p className="text-slate-600 font-light">
              Durch automatisierte Lead-Qualifizierung und Nurturing
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
                Ihre Sales Pipeline ist ein schwarzes Loch
              </h2>
              <div className="space-y-4 text-slate-600 font-light leading-relaxed">
                <p>
                  Leads fallen zwischen Marketing und Sales durch die Ritzen. Niemand weiß, wer wann woran arbeitet.
                </p>
                <p>
                  Excel-Tabellen, unstrukturierte E-Mails und Post-its sind keine Revenue-Strategie.
                </p>
                <p>
                  Ihr Team verbringt mehr Zeit mit Admin-Arbeit als mit dem Verkaufen.
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
                End-to-End Revenue Operating System
              </h2>
              <div className="space-y-4">
                {[
                  'Automatisiertes Lead-Scoring & Routing',
                  'Multi-Touch Attribution Modelle',
                  'Sales Pipeline Automation',
                  'Customer Success Playbooks',
                  'Revenue Forecasting & Analytics',
                  'Integration aller Revenue-Tools'
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-light">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CRM Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Technology Stack</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Best-in-Class{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Tools
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'HubSpot',
                'Salesforce',
                'Pipedrive',
                'Zapier',
                'Make',
                'Calendly',
                'Intercom',
                'Segment'
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-50 border border-slate-200 p-6 text-center hover:border-slate-900 transition-all"
                >
                  <div className="text-slate-900 font-light">{tool}</div>
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
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Revenue Operations Framework</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Von Chaos zu{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Predictable Revenue
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Audit',
                  description: 'Analyse aktueller Prozesse, Tools und Datenqualität'
                },
                {
                  step: '02',
                  title: 'Design',
                  description: 'Revenue-Architektur & Tool-Stack Definition'
                },
                {
                  step: '03',
                  title: 'Build',
                  description: 'Implementation, Automation & Integration'
                },
                {
                  step: '04',
                  title: 'Optimize',
                  description: 'Training, Reporting & kontinuierliche Optimierung'
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

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Module</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Was wir aufbauen
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Marketing Ops',
                  description: 'Lead-Generierung, Scoring, Nurturing und Attribution'
                },
                {
                  title: 'Sales Ops',
                  description: 'Pipeline-Management, Forecasting und Deal-Automation'
                },
                {
                  title: 'Customer Success',
                  description: 'Onboarding, Health-Scores und Retention-Automation'
                }
              ].map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-slate-200 p-8 hover:border-slate-900 transition-all"
                >
                  <h3 className="text-xl font-light text-slate-900 mb-4">{module.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{module.description}</p>
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
                Typische{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Ergebnisse
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: 'Lead-to-Customer Rate', value: '+40%' },
                { metric: 'Sales Cycle Zeit', value: '-30%' },
                { metric: 'Customer LTV', value: '+65%' },
                { metric: 'Admin-Zeit', value: '-15h/Woche' }
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
              Bereit für ein{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                professionelles Revenue-System?
              </span>
            </h2>
            <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Sales & Marketing Operations auf das nächste Level bringen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              Kostenloses CRM-Audit
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
