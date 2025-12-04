"use client";

import { motion } from "framer-motion";
import { Printer, Package, FileText, Image, Palette, CheckCircle2, Star, ArrowRight, Layers, Zap, ShieldCheck, Sparkles, Award, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    icon: FileText,
    title: "Visitenkarten",
    description: "Der erste Eindruck zählt. Premium Visitenkarten mit hochwertigen Veredelungen.",
    features: ["Ab 100 Stück", "Diverse Papiere", "Veredelungen möglich"],
    highlight: "Bestseller"
  },
  {
    icon: Package,
    title: "Flyer & Folder",
    description: "Perfekt für Events, Aktionen und Kampagnen. In allen gängigen Formaten.",
    features: ["DIN A4 bis A7", "Verschiedene Falzarten", "Matt oder glänzend"],
    highlight: null
  },
  {
    icon: Layers,
    title: "Broschüren",
    description: "Professionelle Broschüren und Kataloge für Ihre Produkte und Services.",
    features: ["Klebe- oder Heftbindung", "8 bis 200+ Seiten", "Hochwertige Papiere"],
    highlight: null
  },
  {
    icon: Image,
    title: "Poster & Plakate",
    description: "Großformatdruck für maximale Wirkung. Indoor und Outdoor.",
    features: ["Bis DIN A0", "Wetterfest möglich", "Fotorealistisch"],
    highlight: "Beliebt"
  },
  {
    icon: Palette,
    title: "Werbetechnik",
    description: "Banner, Roll-Ups, Aufkleber und mehr für Ihre Werbung.",
    features: ["Individuelle Größen", "Konturschnitt", "Langlebige Materialien"],
    highlight: null
  },
  {
    icon: Printer,
    title: "Geschäftsausstattung",
    description: "Briefpapier, Umschläge, Blöcke – alles aus einer Hand.",
    features: ["Corporate Design", "Alle Formate", "Schnelle Nachbestellung"],
    highlight: null
  }
];

const stats = [
  { value: "500+", label: "Zufriedene Kunden" },
  { value: "50k+", label: "Druckaufträge" },
  { value: "24h", label: "Express möglich" },
  { value: "100%", label: "Qualitätsgarantie" }
];

// Visual Print Preview Component
function PrintShowcase() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl" />
      
      {/* Decorative Dots */}
      <div className="absolute top-6 right-6 w-20 h-20 grid grid-cols-4 gap-1.5 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-black rounded-full" />
        ))}
      </div>
      
      {/* Floating Print Products */}
      <div className="absolute inset-0 p-8 flex items-center justify-center">
        {/* Business Card Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-[10%] top-[15%] w-40 h-24 bg-white rounded-lg shadow-2xl p-3 transform hover:scale-105 transition-transform"
        >
          <div className="w-full h-full border-2 border-slate-100 rounded flex flex-col justify-between p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-400 rounded" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 bg-slate-200 rounded w-3/4" />
                <div className="h-1 bg-slate-100 rounded w-1/2" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="h-1 bg-slate-100 rounded w-full" />
              <div className="h-1 bg-slate-100 rounded w-2/3" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
            Visitenkarten
          </div>
        </motion.div>

        {/* Flyer */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute right-[10%] top-[20%] w-32 h-44 bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform"
        >
          <div className="h-1/2 bg-gradient-to-br from-slate-800 to-slate-900" />
          <div className="h-1/2 p-3 space-y-2">
            <div className="h-2 bg-yellow-400 rounded w-3/4" />
            <div className="h-1.5 bg-slate-200 rounded w-full" />
            <div className="h-1.5 bg-slate-200 rounded w-2/3" />
            <div className="h-1 bg-slate-100 rounded w-1/2" />
          </div>
          <div className="absolute -bottom-2 -left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            Flyer
          </div>
        </motion.div>

        {/* Brochure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute left-[20%] bottom-[15%] w-36 h-48 bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform"
        >
          <div className="h-2/3 bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/30 rounded-full" />
          </div>
          <div className="h-1/3 p-3 space-y-1.5">
            <div className="h-2 bg-slate-800 rounded w-2/3" />
            <div className="h-1.5 bg-slate-200 rounded w-full" />
            <div className="h-1.5 bg-slate-200 rounded w-3/4" />
          </div>
          <div className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            Broschüre
          </div>
        </motion.div>

        {/* Poster */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute right-[15%] bottom-[20%] w-28 h-40 bg-slate-900 rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform"
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center">
            <div className="w-10 h-10 bg-yellow-400 rounded-full mb-2" />
            <div className="h-2 bg-yellow-400 rounded w-3/4 mb-1" />
            <div className="h-1.5 bg-white/30 rounded w-full" />
            <div className="h-1.5 bg-white/30 rounded w-2/3 mt-1" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
            Poster
          </div>
        </motion.div>

        {/* Center Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-2xl"
        >
          <div className="text-center">
            <Printer className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
            <span className="text-white text-[10px] font-medium">Premium<br/>Druck</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function DigitaldruckPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Professioneller Digitaldruck
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Druck, der{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  beeindruckt
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Von der Visitenkarte bis zum Großformat-Poster – wir bringen Ihre Ideen 
                auf Papier. Mit modernster Drucktechnologie und hochwertigen Materialien 
                für Ergebnisse, die überzeugen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-full group w-full sm:w-auto">
                    Jetzt Angebot anfragen
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#produkte">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 text-lg rounded-full w-full sm:w-auto">
                    Produkte entdecken
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-yellow-500" />
                  <span>Express-Lieferung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span>Qualitätsgarantie</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <PrintShowcase />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Schnelle Lieferung", description: "Express-Produktion für dringende Projekte." },
              { icon: ShieldCheck, title: "Premium Qualität", description: "Hochwertige Materialien und modernste Technik." },
              { icon: Palette, title: "Individuelle Beratung", description: "Persönliche Beratung zu Materialien." },
              { icon: Star, title: "Faire Preise", description: "Transparente Preise ohne versteckte Kosten." }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-medium text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="produkte" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Unsere Druckprodukte</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Entdecken Sie unser vielfältiges Angebot an hochwertigen Druckprodukten.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-yellow-300 transition-all duration-300"
              >
                {product.highlight && (
                  <div className="absolute -top-3 right-6 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {product.highlight}
                  </div>
                )}
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                  <product.icon className="w-7 h-7 text-white group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                <p className="text-slate-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">So einfach geht&apos;s</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Von der Anfrage bis zur Lieferung – wir begleiten Sie bei jedem Schritt.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Anfrage", description: "Kontaktieren Sie uns mit Ihren Anforderungen" },
              { step: "02", title: "Beratung", description: "Wir beraten Sie zu Materialien und Optionen" },
              { step: "03", title: "Produktion", description: "Professionelle Fertigung Ihrer Druckprodukte" },
              { step: "04", title: "Lieferung", description: "Schnelle und sichere Zustellung" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-yellow-400 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-black">
              Bereit für Ihr Druckprojekt?
            </h2>
            <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Angebot. Wir beraten Sie gerne 
              zu Materialien, Veredelungen und Lieferzeiten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-black hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-full group">
                  Jetzt anfragen
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="tel:+4915678123456">
                <Button variant="outline" className="border-black text-black hover:bg-black/10 px-8 py-6 text-lg rounded-full">
                  Direkt anrufen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
