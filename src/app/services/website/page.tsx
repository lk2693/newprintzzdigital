'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Globe, Zap, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function WebsitePage() {
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
              <Globe className="w-12 h-12 text-slate-900" />
              <div className="text-sm uppercase tracking-wider text-slate-600 font-light">03 — Services</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
              Website &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Plattform
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
              Ihre Website lädt langsam und konvertiert schlecht? Wir entwickeln blitzschnelle, conversion-optimierte Web-Erlebnisse.
            </p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="relative w-full aspect-video border border-slate-200 overflow-hidden">
              <Image
                src="/artmarket.png"
                alt="Artmarket - High-Performance Website Projekt"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Key Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-50 border border-slate-200 p-12 mb-20"
          >
            <div className="text-5xl font-light text-slate-900 mb-4">
              Bis zu{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                60%
              </span>{" "}
              bessere Conversion
            </div>
            <p className="text-slate-600 font-light">
              Durch optimierte Performance und User Experience
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
                Langsame Websites verlieren Kunden
              </h2>
              <div className="space-y-4 text-slate-600 font-light leading-relaxed">
                <p>
                  53% der mobilen Nutzer verlassen eine Website, die länger als 3 Sekunden lädt.
                </p>
                <p>
                  Veraltete Technologie, schlechte Performance und frustrierende User Experience kosten Sie jeden Tag Kunden und Umsatz.
                </p>
                <p>
                  Ihre Konkurrenz ist schneller, moderner und benutzerfreundlicher.
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
                Performance trifft Design
              </h2>
              <div className="space-y-4">
                {[
                  'Blitzschnelle Ladezeiten (< 1s) mit Next.js',
                  'Mobile-First Design für alle Geräte',
                  'Conversion-optimierte User Experience',
                  'SEO-optimiert für Top-Rankings',
                  'Lighthouse Score 95+ garantiert',
                  'WCAG 2.1 barrierefrei'
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-light">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Technologie</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Modernste{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Tech-Stack
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Next.js 14',
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Framer Motion',
                'Vercel',
                'Prisma',
                'PostgreSQL'
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
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Von Konzept zu Launch</div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                In 4-8 Wochen{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  online
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Konzept',
                  description: 'Wireframes, User Flows und technische Architektur'
                },
                {
                  step: '02',
                  title: 'Design',
                  description: 'Visuelles Design mit Fokus auf Conversion'
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Agile Entwicklung mit wöchentlichen Updates'
                },
                {
                  step: '04',
                  title: 'Launch',
                  description: 'Testing, Optimierung und Go-Live'
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
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Einsatzbereiche</div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
              Perfekt für
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Corporate Websites',
                  description: 'Professioneller Unternehmensauftritt mit höchsten Performance-Standards'
                },
                {
                  title: 'Landing Pages',
                  description: 'Conversion-optimierte Pages für Kampagnen und Produktlaunches'
                },
                {
                  title: 'Web Applications',
                  description: 'Komplexe Plattformen und SaaS-Lösungen'
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
              Bereit für eine{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                High-Performance Website?
              </span>
            </h2>
            <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Vision in eine blitzschnelle, conversion-optimierte Website verwandeln.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              Projekt besprechen
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
