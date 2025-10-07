'use client';

import Link from "next/link";
import { ArrowLeft, Check, Sparkles, TrendingUp, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function DigitalstrategiePage() {
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
              <Sparkles className="w-12 h-12 text-slate-900" />
              <div className="text-sm uppercase tracking-wider text-slate-600 font-light">02 — Services</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              Digital
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                strategie
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Ohne klare Strategie verschwenden Sie Budget und verpassen Chancen. Wir entwickeln datenbasierte Roadmaps für nachhaltiges digitales Wachstum.
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
                3x
              </span>{" "}
              schnellere Time-to-Market
            </div>
            <p className="text-slate-600 font-light">
              Mit klarer Strategie kommen Sie 3x schneller ans Ziel
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
                Viele Unternehmen digitalisieren planlos
              </h2>
              <div className="space-y-4 text-slate-600 font-light leading-relaxed">
                <p>
                  Sie investieren in einzelne Tools und Technologien, ohne zu wissen, ob sie zusammenpassen oder die richtigen Probleme lösen.
                </p>
                <p>
                  Das Ergebnis: Hohe Kosten, fragmentierte Systeme und am Ende keine messbaren Ergebnisse.
                </p>
                <p>
                  Mitarbeiter sind überfordert, Prozesse bleiben ineffizient und die Konkurrenz zieht davon.
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
                Eine Strategie, die funktioniert
              </h2>
              <div className="space-y-4">
                {[
                  'Datenbasierte Analyse Ihrer Ist-Situation',
                  'Klarer Fahrplan mit messbaren Zielen',
                  'Technologie-Roadmap für nachhaltiges Wachstum',
                  'Priorisierung nach Impact und Aufwand',
                  'Change Management für Ihre Teams'
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-light">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Unser Prozess</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Von der Analyse zur{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Umsetzung
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Analyse Ihrer aktuellen Situation, Ziele und Herausforderungen'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Entwicklung einer maßgeschneiderten Digitalstrategie mit klaren KPIs'
                },
                {
                  step: '03',
                  title: 'Roadmap',
                  description: 'Priorisierte Umsetzungsplanung mit Meilensteinen und Quick Wins'
                },
                {
                  step: '04',
                  title: 'Execution',
                  description: 'Begleitung bei der Implementierung und kontinuierliche Optimierung'
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
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Beispiele</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Für wen ist das geeignet?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Scale-ups',
                  description: 'Sie wachsen schnell und brauchen skalierbare Systeme und Prozesse'
                },
                {
                  title: 'Traditionelle Unternehmen',
                  description: 'Sie wollen digital transformieren, wissen aber nicht wo anfangen'
                },
                {
                  title: 'E-Commerce',
                  description: 'Sie wollen Ihren Online-Umsatz systematisch steigern'
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-slate-200 p-8 hover:border-slate-900 transition-all"
                >
                  <h3 className="text-xl font-light text-slate-900 mb-4">{useCase.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{useCase.description}</p>
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
              Bereit für eine klare{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Digitalstrategie?
              </span>
            </h2>
            <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre aktuelle Situation analysieren und einen maßgeschneiderten Fahrplan entwickeln.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              Kostenloses Strategiegespräch
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
