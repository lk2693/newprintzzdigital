"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Printer, Package, FileText, ImageIcon, Palette, CheckCircle2, Star, ArrowRight, Layers, Zap, ShieldCheck, Sparkles, Award, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

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
    icon: ImageIcon,
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

const sliderItems = [
  {
    image: "/flyer.png",
    title: "Flyer & Folder",
    description: "Perfekt für Events, Aktionen und Kampagnen",
    features: ["Ab 100 Stück", "DIN A4 bis A7", "Express möglich"],
    badge: "Bestseller"
  },
  {
    image: "/Assmann.png",
    title: "Kataloge & Broschüren",
    description: "Hochwertige Produktkataloge für Ihr Business",
    features: ["Klebebindung", "8-200+ Seiten", "Premium Papier"],
    badge: "Premium"
  },
  {
    image: "/plakat.png",
    title: "Poster & Plakate",
    description: "Großformatdruck für maximale Wirkung",
    features: ["Bis DIN A0", "Indoor & Outdoor", "Wetterfest"],
    badge: "Beliebt"
  },
  {
    image: "/fahnen.png",
    title: "Fahnen & Banner",
    description: "Professionelle Werbung für Messen und Events",
    features: ["Individuelle Größen", "Wetterfest", "Inklusive Zubehör"],
    badge: "Event"
  }
];

// Visual Print Slider Component
function PrintShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const next = prev + newDirection;
      if (next < 0) return sliderItems.length - 1;
      if (next >= sliderItems.length) return 0;
      return next;
    });
  };

  const currentItem = sliderItems[currentSlide];

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-yellow-50/30 to-gray-100 rounded-3xl" />
      
      {/* Decorative Elements */}
      <div className="absolute top-8 right-8 w-20 h-20 grid grid-cols-4 gap-1.5 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-yellow-500 rounded-full" />
        ))}
      </div>
      
      {/* Slider Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute"
          >
            <div className="relative w-[280px] h-[400px] md:w-[320px] md:h-[450px] lg:w-[360px] lg:h-[500px]">
              {/* Shadow layers for depth */}
              <div className="absolute inset-0 bg-black/5 rounded-2xl blur-xl translate-y-4" />
              <div className="absolute inset-0 bg-black/10 rounded-2xl blur-lg translate-y-2" />
              
              {/* Main product card */}
              <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden group p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    priority
                  />
                </div>
                
                {/* Quality badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  {currentItem.badge}
                </div>

                {/* Info overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{currentItem.title}</h3>
                    <p className="text-sm mb-3 text-white/90">{currentItem.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {currentItem.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-900" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {sliderItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentSlide ? 1 : -1);
              setCurrentSlide(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-yellow-400/30 rounded-full" />
      <div className="absolute bottom-12 left-12 w-12 h-12 border-2 border-yellow-400/20 rounded-full" />
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
                  <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-6 text-lg rounded-full group w-full sm:w-auto font-semibold shadow-lg hover:shadow-xl transition-all">
                    Kostenloses Angebot anfordern
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
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full border-slate-300 text-slate-700 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors group"
                  >
                    Jetzt anfragen
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA after Product Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-yellow-200">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Nicht sicher, welches Produkt zu Ihnen passt?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Unsere Experten beraten Sie kostenlos und unverbindlich zu allen Druckprodukten 
                und finden die perfekte Lösung für Ihr Projekt.
              </p>
              <Link href="/contact">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full group font-semibold shadow-lg hover:shadow-xl transition-all">
                  Individuelle Beratung vereinbaren
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>100% kostenlos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Antwort in 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Unverbindlich</span>
                </div>
              </div>
            </div>
          </motion.div>
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
