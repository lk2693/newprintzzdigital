'use client';

import Link from "next/link";
import { ArrowLeft, Check, ShoppingBag, CreditCard, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function CommercePage() {
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
              <ShoppingBag className="w-12 h-12 text-slate-900" />
              <div className="text-sm uppercase tracking-wider text-slate-600 font-light">07 — Services</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              Commerce{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Lösungen
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Hohe Abbruchraten und schlechte Conversion? Wir bauen hochperformante E-Commerce-Systeme, die verkaufen.
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
                35%
              </span>{" "}
              weniger Abbrüche
            </div>
            <p className="text-slate-600 font-light">
              Durch optimierten Checkout und bessere UX
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
                Ihr Shop verliert Kunden an der Kasse
              </h2>
              <div className="space-y-4 text-slate-600 font-light leading-relaxed">
                <p>
                  69% der Warenkörbe werden abgebrochen. Langsame Ladezeiten, komplizierter Checkout und schlechte Mobile-Experience kosten Sie täglich Umsatz.
                </p>
                <p>
                  Ihre Commerce-Plattform ist nicht skalierbar, langsam und teuer im Betrieb.
                </p>
                <p>
                  Keine Integration mit ERP, CRM und anderen Business-Systemen führt zu manueller Arbeit und Fehlern.
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
                Headless Commerce für maximale Performance
              </h2>
              <div className="space-y-4">
                {[
                  'Headless Architecture mit Shopify/Commerce.js',
                  'Sub-Second Ladezeiten durch Edge Caching',
                  'Optimierter Checkout (Apple Pay, Google Pay, etc.)',
                  'Mobile-First Design für höchste Conversion',
                  'Real-time Inventory & Order Management',
                  'Integration mit ERP, CRM und Fulfillment'
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-light">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Commerce Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Plattformen</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Best-in-Class{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  E-Commerce Stack
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Shopify Plus',
                'Commerce.js',
                'Stripe',
                'PayPal',
                'Klarna',
                'Sendcloud',
                'Algolia',
                'Contentful'
              ].map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-50 border border-slate-200 p-6 text-center hover:border-slate-900 transition-all"
                >
                  <div className="text-slate-900 font-light">{platform}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Features</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Alles was Ihr{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Shop braucht
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Express Checkout',
                  description: 'Apple Pay, Google Pay, Shop Pay für One-Click Käufe'
                },
                {
                  title: 'Smart Search',
                  description: 'AI-gestützte Produktsuche mit Autocomplete und Filtern'
                },
                {
                  title: 'Personalization',
                  description: 'Dynamische Produktempfehlungen basierend auf Verhalten'
                },
                {
                  title: 'Multi-Currency',
                  description: 'Automatische Währungskonvertierung und lokale Zahlarten'
                },
                {
                  title: 'Inventory Sync',
                  description: 'Real-time Bestandsverwaltung über alle Kanäle'
                },
                {
                  title: 'Analytics',
                  description: 'Detailliertes Tracking von Customer Journey und Conversion'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-50 border border-slate-200 p-6 hover:border-slate-900 transition-all"
                >
                  <h3 className="text-lg font-light text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 font-light text-sm">{feature.description}</p>
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
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Von Konzept zu Launch</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                In 6-12 Wochen{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  live
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Anforderungen, Product-Feed und Payment-Integration'
                },
                {
                  step: '02',
                  title: 'Design',
                  description: 'UX/UI optimiert auf Conversion und Mobile'
                },
                {
                  step: '03',
                  title: 'Build',
                  description: 'Development mit wöchentlichen Demo-Sessions'
                },
                {
                  step: '04',
                  title: 'Launch',
                  description: 'Migration, Testing und Go-Live mit Monitoring'
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
                Typische{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Verbesserungen
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: 'Conversion Rate', value: '+45%' },
                { metric: 'Checkout-Abbrüche', value: '-35%' },
                { metric: 'Mobile Revenue', value: '+80%' },
                { metric: 'Average Order Value', value: '+25%' }
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
              Bereit für einen{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                High-Performance Shop?
              </span>
            </h2>
            <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre E-Commerce-Vision in eine conversion-optimierte Realität verwandeln.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              Shop-Projekt starten
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
