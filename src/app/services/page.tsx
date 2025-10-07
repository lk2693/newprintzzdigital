"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Globe2, Bot, Code2, Palette, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMemo } from "react";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  const services = useMemo(() => [
    {
      icon: Globe2,
      title: "Moderne Webentwicklung",
      description: "Responsive und performante Websites mit React, Next.js und modernstem Tech-Stack für maximale User Experience",
      features: [
        "React & Next.js Entwicklung mit TypeScript",
        "Responsive Design für alle Geräte", 
        "SEO-Optimierung & Core Web Vitals",
        "Performance-Optimierung & Caching",
        "Progressive Web Apps (PWA)",
        "Barrierefreiheit (WCAG 2.1)"
      ],
      category: "Web Development",
      duration: "2-4 Wochen",
      gradient: "from-blue-500 to-cyan-500",
      benefits: [
        "Bis zu 50% schnellere Ladezeiten",
        "Mobile-First Ansatz",
        "Skalierbare Architektur"
      ]
    },
    {
      icon: Bot,
      title: "KI-Integration & Automatisierung",
      description: "Intelligente Funktionen und Automatisierung durch modernste KI-Technologien für Effizienzsteigerung",
      features: [
        "ChatGPT & OpenAI Integration",
        "Intelligente Chatbots & Virtual Assistants", 
        "Automatisierte Workflows & Prozesse",
        "Datenanalyse & Predictive Analytics",
        "Natural Language Processing (NLP)",
        "Computer Vision & Bilderkennung"
      ],
      category: "AI & Automation", 
      duration: "3-6 Wochen",
      gradient: "from-purple-500 to-pink-500",
      benefits: [
        "Bis zu 70% Zeitersparnis",
        "24/7 Kundenservice",
        "Datenbasierte Entscheidungen"
      ]
    },
    {
      icon: Code2,
      title: "Custom Software & Apps",
      description: "Maßgeschneiderte Softwarelösungen und Apps für komplexe Geschäftsanforderungen und individuelle Prozesse",
      features: [
        "Fullstack-Entwicklung (Frontend & Backend)",
        "RESTful & GraphQL API-Entwicklung",
        "Datenbank-Design & Optimierung", 
        "Cloud-Integration (AWS, Azure, Google Cloud)",
        "Mobile App-Entwicklung (iOS & Android)",
        "Microservices-Architektur"
      ],
      category: "Enterprise Solutions",
      duration: "4-12 Wochen", 
      gradient: "from-green-500 to-emerald-500",
      benefits: [
        "Maßgeschneiderte Lösungen",
        "Skalierbar & wartbar",
        "Langfristige Unterstützung"
      ]
    },
    {
      icon: Shield,
      title: "E-Commerce & Online-Shops",
      description: "Vollständige Online-Shop-Lösungen mit moderner Technologie, Sicherheit und nahtloser Payment-Integration",
      features: [
        "Shopify & WooCommerce Integration",
        "Custom E-Commerce Plattformen",
        "Multi-Payment Integration (Stripe, PayPal)",
        "Produktverwaltung & Inventory",
        "Analytics, Reporting & Conversion-Optimierung",
        "Multi-Channel-Verkauf (Amazon, eBay)"
      ],
      category: "E-Commerce",
      duration: "4-8 Wochen",
      gradient: "from-indigo-500 to-purple-500",
      benefits: [
        "Sichere Zahlungsabwicklung",
        "Conversion-optimiert",
        "Automatisierte Bestellprozesse"
      ]
    },
    {
      icon: Palette,
      title: "UI/UX Design & Branding",
      description: "Professionelles Design und Branding für eine einzigartige und konsistente Markenidentität",
      features: [
        "User Interface (UI) Design",
        "User Experience (UX) Optimierung",
        "Corporate Design & Branding",
        "Design Systems & Style Guides",
        "Prototyping & Wireframing",
        "A/B Testing & User Research"
      ],
      category: "Design",
      duration: "2-6 Wochen",
      gradient: "from-pink-500 to-rose-500",
      benefits: [
        "Professioneller Markenauftritt",
        "Höhere Conversion Rates",
        "Bessere User Engagement"
      ]
    },
    {
      icon: Zap,
      title: "Performance & Optimierung",
      description: "Umfassende Optimierung bestehender Websites für maximale Geschwindigkeit und Effizienz",
      features: [
        "Core Web Vitals Optimierung",
        "Ladezeit-Optimierung & Caching",
        "Datenbank-Performance-Tuning",
        "Code-Refactoring & Best Practices",
        "SEO-Technical Audit",
        "Conversion Rate Optimierung (CRO)"
      ],
      category: "Optimization",
      duration: "1-3 Wochen",
      gradient: "from-yellow-500 to-orange-500",
      benefits: [
        "Bis zu 80% schnellere Websites",
        "Besseres Google Ranking",
        "Niedrigere Bounce Rate"
      ]
    }
  ], []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition group font-light">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </Link>
      </div>

      {/* Hero Section - Optimiert */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light"
            >
              Services
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-light mb-6"
            >
              Unsere{" "}
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-block"
              >
                Leistungen
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto font-light"
            >
              Vollumfängliche digitale Lösungen - von der Konzeption bis zur erfolgreichen Umsetzung.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-4 font-light">Unser Prozess</div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">So arbeiten wir</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Von der ersten Idee bis zum erfolgreichen Launch - ein strukturierter Prozess für maximale Qualität
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse & Konzept",
                description: "Wir analysieren Ihre Anforderungen und entwickeln ein maßgeschneidertes Konzept"
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Erstellung von Designs und interaktiven Prototypen zur Visualisierung"
              },
              {
                step: "03",
                title: "Entwicklung & Testing",
                description: "Agile Entwicklung mit regelmäßigen Tests und Quality Assurance"
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Erfolgreicher Launch mit fortlaufender Betreuung und Optimierung"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center group cursor-default"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 border border-slate-900 mb-6 group-hover:bg-slate-900 transition-colors duration-300"
                >
                  <span className="text-2xl font-light text-slate-900 group-hover:text-white transition-colors duration-300">{step.step}</span>
                </motion.div>
                <h3 className="text-xl font-light mb-3 group-hover:text-slate-900 transition-colors">{step.title}</h3>
                <p className="text-slate-600 font-light text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-4 font-light">Unsere Services</div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Umfassende digitale Lösungen</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Von Webentwicklung über KI-Integration bis hin zu E-Commerce - wir decken alle Bereiche ab
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-4 font-light">Technologien</div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Modernste Tech-Stacks</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Wir arbeiten mit den neuesten und bewährtesten Technologien
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Python", "TailwindCSS",
              "PostgreSQL", "MongoDB", "AWS", "OpenAI", "Stripe", "Vercel"
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.05,
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="bg-white border border-slate-200 p-6 text-center hover:border-slate-900 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <motion.div 
                  className="text-slate-900 font-light"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Vereinfacht */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light mb-6"
          >
            Bereit für Ihr{" "}
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-block"
            >
              digitales Projekt?
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto font-light"
          >
            Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/#kontakt"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 font-light transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
