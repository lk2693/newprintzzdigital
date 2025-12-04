'use client';

import Link from "next/link";
import { ArrowRight, Globe, Sparkles, TrendingUp, Users, Database, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website & Plattform",
    description: "Blitzschnelle, conversion-optimierte Websites die Besucher zu Kunden machen.",
    href: "/services/website",
    icon: Globe,
    stat: "+60%",
    statLabel: "Conversion"
  },
  {
    title: "Digitalstrategie",
    description: "Datenbasierte Roadmaps für nachhaltiges digitales Wachstum.",
    href: "/services/digitalstrategie",
    icon: Sparkles,
    stat: "3x",
    statLabel: "Schneller"
  },
  {
    title: "Digital Marketing",
    description: "Datengetriebene Kampagnen mit nachweisbarem ROI.",
    href: "/services/marketing",
    icon: TrendingUp,
    stat: "4:1",
    statLabel: "ROAS"
  },
  {
    title: "CRM & Revenue Ops",
    description: "Revenue-System von Lead-Generierung bis Customer Success.",
    href: "/services/crm",
    icon: Users,
    stat: "+40%",
    statLabel: "Mehr Leads"
  },
  {
    title: "Data & AI",
    description: "KI-Systeme, die echte Business-Probleme lösen.",
    href: "/services/data-ai",
    icon: Database,
    stat: "15h",
    statLabel: "Ersparnis/Woche"
  },
  {
    title: "Commerce Lösungen",
    description: "Hochperformante E-Commerce-Systeme, die verkaufen.",
    href: "/services/commerce",
    icon: ShoppingBag,
    stat: "-35%",
    statLabel: "Abbrüche"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50/30 to-gray-100">
      <Header />

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Unsere Services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Digitale Lösungen für{" "}
              <span className="text-yellow-500">Ihr Wachstum</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Strategie bis zur Umsetzung – wir begleiten Sie auf dem Weg zur digitalen Exzellenz.
            </p>
          </motion.div>

          {/* Services Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full group">
                    {/* Icon & Stat */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-yellow-600" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-500">{service.stat}</div>
                        <div className="text-xs text-gray-500">{service.statLabel}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center text-yellow-500 font-medium">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gray-900 rounded-3xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
