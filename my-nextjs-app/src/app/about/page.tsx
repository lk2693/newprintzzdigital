"use client";

import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award, Code2, Brain, Rocket, Shield, ArrowRight, CheckCircle2, Sparkles, Star, Mail, Phone, MapPin, Zap, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Founder Showcase Component
function FounderShowcase() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
      {/* Background Yellow Circle (offset) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full translate-x-6 translate-y-6"
      />
      
      {/* Decorative Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px] border-2 border-yellow-400/30 rounded-full"
      />

      {/* Decorative Dots */}
      <div className="absolute top-4 right-8 w-16 h-16 grid grid-cols-4 gap-1 opacity-40">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
        ))}
      </div>
      <div className="absolute bottom-8 left-4 w-12 h-12 grid grid-cols-3 gap-1 opacity-30">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
        ))}
      </div>

      {/* Main Photo Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10"
      >
        {/* Circular Photo */}
        <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="/oj_jaeschke.png"
            alt="Olaf Jaeschke - Gründer PrintzzDigital"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Name Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-xl whitespace-nowrap"
        >
          <div className="text-center">
            <div className="font-bold text-sm">Olaf Jaeschke</div>
            <div className="text-yellow-400 text-xs">Gründer & CEO</div>
          </div>
        </motion.div>

        {/* Experience Badge - floating left */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute -left-8 lg:-left-12 top-12 bg-white px-4 py-3 rounded-2xl shadow-lg border border-slate-100"
        >
          <div className="text-black font-bold text-xl">20+</div>
          <div className="text-slate-500 text-xs">Jahre Erfahrung</div>
        </motion.div>

        {/* Projects Badge - floating right */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute -right-8 lg:-right-12 top-1/3 bg-white px-4 py-3 rounded-2xl shadow-lg border border-slate-100"
        >
          <div className="text-black font-bold text-xl">500+</div>
          <div className="text-slate-500 text-xs">Projekte</div>
        </motion.div>

        {/* Star Badge - floating top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="absolute -top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
        >
          <Star className="w-6 h-6 text-black fill-black" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Über uns
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Ihr Partner für{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  digitalen Erfolg
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                PrintzzDigital vereint jahrzehntelange Erfahrung im Druckgewerbe mit 
                modernster Digitaltechnologie. Unter der Führung von Olaf Jaeschke 
                schaffen wir Lösungen, die begeistern.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                <Link href="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full group w-full sm:w-auto">
                    Jetzt Kontakt aufnehmen
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full w-full sm:w-auto">
                    Portfolio ansehen
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <span>20+ Jahre Erfahrung</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                  <span>500+ Projekte</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  <span>100% Zufriedenheit</span>
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
              <FounderShowcase />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Jahre Erfahrung" },
              { value: "500+", label: "Projekte umgesetzt" },
              { value: "100%", label: "Kundenzufriedenheit" },
              { value: "24/7", label: "Support verfügbar" }
            ].map((stat, index) => (
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

      {/* Mission & Vision */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-yellow-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold">Unsere Mission</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Wir verbinden traditionelles Druckhandwerk mit modernster Digitaltechnologie. 
                Unser Ziel ist es, Unternehmen durch hochwertige Druckprodukte und 
                innovative digitale Lösungen zum Erfolg zu führen.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  Premium Druckqualität für jeden Kunden
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  Transparente und faire Preisgestaltung
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  Langfristige Partnerschaften
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-yellow-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold">Unsere Vision</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Eine Zukunft, in der Druck und Digital nahtlos verschmelzen. 
                Wir schaffen Lösungen, die Ihr Unternehmen von der Konkurrenz abheben 
                und nachhaltig wachsen lassen.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  Digital und Print aus einer Hand
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  Modernste Technologien einsetzen
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  Nachhaltige Lösungen entwickeln
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Der Gründer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Olaf Jaeschke
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Mit über <span className="text-black font-semibold">20 Jahren Erfahrung</span> im 
                  Druckgewerbe hat Olaf Jaeschke PrintzzDigital gegründet, um die Brücke zwischen 
                  traditionellem Handwerk und moderner Digitaltechnologie zu schlagen.
                </p>
                <p>
                  <span className="text-black font-semibold">Der Mittelstand liegt ihm am Herzen:</span> Als 
                  Vorsitzender des <span className="text-black font-semibold">Handelsverband Harz-Heide</span>, 
                  Vorstand im Arbeitsausschuss und <span className="text-black font-semibold">IHK Vizepräsident 
                  Braunschweig</span> setzt er sich aktiv für die Interessen kleiner und mittlerer Unternehmen ein.
                </p>
                <p>
                  Seine Vision: Hochwertige Druckprodukte und digitale Lösungen aus einer Hand, 
                  die Unternehmen dabei helfen, sich von der Konkurrenz abzuheben.
                </p>
                <p>
                  <span className="text-black font-semibold">&quot;Qualität ist kein Zufall – 
                  sie ist das Ergebnis von Erfahrung, Leidenschaft und dem ständigen Streben 
                  nach Perfektion.&quot;</span>
                </p>
              </div>

              {/* Engagements */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                  Geschäftsführer Galerie Jaeschke
                </span>
                <span className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                  Vorsitzender Handelsverband Harz-Heide
                </span>
                <span className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                  IHK Vizepräsident Braunschweig
                </span>
                <span className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                  Vorstand Arbeitsausschuss
                </span>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span>oj@printzz.de</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span>+49 (0) 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span>Braunschweig, Deutschland</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl -rotate-3" />
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl rotate-0 h-full">
                  <Image
                    src="/oj_jaeschke.png"
                    alt="Olaf Jaeschke"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Unser Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Die Menschen hinter PrintzzDigital
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ein eingespieltes Team mit Erfahrung und Leidenschaft
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Geschäftsführer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transform translate-x-2 translate-y-2" />
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/oj_jaeschke.png"
                    alt="Olaf Jaeschke"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Olaf Jaeschke</h3>
                <p className="text-yellow-600 font-medium mb-3">Geschäftsführer</p>
                <p className="text-slate-600 text-sm">
                  Über 20 Jahre Erfahrung im Druckgewerbe. Visionär und Gründer von PrintzzDigital.
                </p>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                  20+ Jahre Erfahrung
                </span>
              </div>
            </motion.div>

            {/* CPO - FinTech Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transform translate-x-2 translate-y-2" />
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-900 flex items-center justify-center">
                  {/* Placeholder Avatar */}
                  <svg className="w-20 h-20 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Chief Product Officer</h3>
                <p className="text-yellow-600 font-medium mb-3">Scale-Up & Operations</p>
                <p className="text-slate-600 text-sm">
                  Early-Stage bei <span className="font-semibold text-black">Trade Republic</span> – vom Startup zum Unicorn. 
                  Skalierung bei <span className="font-semibold text-black">Börse Stuttgart Digital</span>. 
                  Experte für Prozessautomatisierung & Hypergrowth.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="px-3 py-1 bg-slate-900 text-yellow-400 text-xs font-medium rounded-full">
                  FinTech
                </span>
                <span className="px-3 py-1 bg-slate-900 text-yellow-400 text-xs font-medium rounded-full">
                  Scale-Up
                </span>
                <span className="px-3 py-1 bg-slate-900 text-yellow-400 text-xs font-medium rounded-full">
                  Automation
                </span>
              </div>
            </motion.div>

            {/* Assistenz der Geschäftsführung */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transform translate-x-2 translate-y-2" />
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-200 flex items-center justify-center">
                  {/* Placeholder Avatar */}
                  <svg className="w-20 h-20 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Assistenz der Geschäftsführung</h3>
                <p className="text-yellow-600 font-medium mb-3">Management & Förderungen</p>
                <p className="text-slate-600 text-sm">
                  Jahrelange Erfahrung in der Koordination von Großprojekten, Fördermittelanträgen und administrativer Unterstützung.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                  Großprojekte
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                  Förderungen
                </span>
              </div>
            </motion.div>
          </div>

          {/* Team Kompetenzen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Unsere Kernkompetenzen</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Hypergrowth Scaling", icon: Rocket },
                { title: "Prozess-Automation", icon: Zap },
                { title: "Fördermittelberatung", icon: Award },
                { title: "Digitale Transformation", icon: Target }
              ].map((kompetenz, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <kompetenz.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="font-medium text-slate-800">{kompetenz.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Diese Prinzipien leiten uns bei jeder Entscheidung und jedem Projekt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code2,
                title: "Qualität",
                description: "Höchste Standards in jedem Druckprodukt und jeder digitalen Lösung"
              },
              {
                icon: Brain,
                title: "Innovation",
                description: "Modernste Technologien für zukunftssichere Ergebnisse"
              },
              {
                icon: Shield,
                title: "Vertrauen",
                description: "Transparenz und Ehrlichkeit in jeder Zusammenarbeit"
              },
              {
                icon: Rocket,
                title: "Effizienz",
                description: "Schnelle Umsetzung ohne Kompromisse bei der Qualität"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Was wir bieten</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Von Druck bis Digital – alles aus einer Hand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Digitaldruck",
                description: "Hochwertige Druckprodukte von Visitenkarten bis Großformat",
                features: ["Visitenkarten", "Flyer & Folder", "Poster & Plakate", "Werbetechnik"]
              },
              {
                icon: Code2,
                title: "Webentwicklung",
                description: "Moderne Websites und Webanwendungen mit neuester Technologie",
                features: ["Corporate Websites", "E-Commerce", "Web Apps", "SEO Optimierung"]
              },
              {
                icon: Brain,
                title: "Digitale Lösungen",
                description: "Automatisierung und KI-Integration für Ihr Unternehmen",
                features: ["Automatisierung", "KI-Integration", "CRM Systeme", "Marketing"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Ideen verwirklichen. 
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-black hover:bg-slate-800 text-white rounded-full px-8">
                  Kostenloses Beratungsgespräch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10 rounded-full px-8">
                  Portfolio ansehen
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
