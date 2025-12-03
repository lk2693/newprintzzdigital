'use client';

import Link from "next/link";
import { ArrowLeft, Check, TrendingUp, Target, BarChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function MarketingPage() {
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
              <TrendingUp className="w-12 h-12 text-slate-900" />
              <div className="text-sm uppercase tracking-wider text-slate-600 font-light">04 — Services</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              Digital{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Marketing-Budget verpufft ohne Ergebnis? Wir liefern datengetriebene Kampagnen mit nachweisbarem ROI.
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
              Durchschnittlich{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                4:1
              </span>{" "}
              ROAS
            </div>
            <p className="text-slate-600 font-light">
              Return on Ad Spend nach 6 Monaten
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
                Marketing ohne Strategie ist Geldverbrennen
              </h2>
              <div className="space-y-4 text-slate-600 font-light leading-relaxed">
                <p>
                  Unkoordinierte Kampagnen auf verschiedenen Kanälen ohne klare Zielsetzung.
                </p>
                <p>
                  Keine Ahnung, welche Marketing-Maßnahmen tatsächlich funktionieren und welche Budget verschwenden.
                </p>
                <p>
                  Veraltete Tactics ohne Tracking, A/B-Testing oder Optimierung.
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
                Performance Marketing mit System
              </h2>
              <div className="space-y-4">
                {[
                  'Datengetriebene Marketing-Strategie',
                  'Multi-Channel Kampagnen (Google, Meta, LinkedIn)',
                  'Conversion-Tracking & Attribution',
                  'A/B-Testing für alle Elemente',
                  'Real-time Reporting & Dashboards',
                  'Continuous Optimization'
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-light">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Marketing Channels</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Ihre Kunden{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  dort erreichen
                </span>
                , wo sie sind
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  channel: 'Google Ads',
                  description: 'Search, Display, Shopping & YouTube Kampagnen'
                },
                {
                  channel: 'Meta Ads',
                  description: 'Facebook & Instagram Performance Marketing'
                },
                {
                  channel: 'LinkedIn Ads',
                  description: 'B2B Lead Generation & Employer Branding'
                },
                {
                  channel: 'SEO',
                  description: 'Organisches Wachstum & Content Marketing'
                },
                {
                  channel: 'Email Marketing',
                  description: 'Automation, Nurturing & Retention'
                },
                {
                  channel: 'Affiliate',
                  description: 'Performance-basierte Partnerschaften'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-50 border border-slate-200 p-6 hover:border-slate-900 transition-all"
                >
                  <h3 className="text-lg font-light text-slate-900 mb-2">{item.channel}</h3>
                  <p className="text-slate-600 font-light text-sm">{item.description}</p>
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
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Unser Vorgehen</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Von Audit zu{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Scale
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Audit',
                  description: 'Analyse aktueller Marketing-Performance und Potenziale'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Channel-Mix, Budget-Allocation und KPI-Definition'
                },
                {
                  step: '03',
                  title: 'Launch',
                  description: 'Kampagnen-Setup mit Tracking und Testing'
                },
                {
                  step: '04',
                  title: 'Scale',
                  description: 'Kontinuierliche Optimierung und Skalierung'
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

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Key Metrics</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Was wir tracken
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: 'ROAS', value: '4:1+' },
                { metric: 'CPA', value: '-40%' },
                { metric: 'Conversion Rate', value: '+120%' },
                { metric: 'Customer LTV', value: '+65%' }
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
                profitables Marketing?
              </span>
            </h2>
            <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Lassen Sie uns eine datengetriebene Marketing-Strategie entwickeln, die wirklich funktioniert.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              Kostenloses Marketing-Audit
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
