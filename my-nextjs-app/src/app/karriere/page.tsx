"use client";

import { motion } from "framer-motion";
import { 
  MapPin, Clock, Users, Rocket, Brain, Code2, Sparkles, 
  ArrowRight, CheckCircle2, Zap, Target, Award, Heart, 
  Briefcase, GraduationCap, Coffee, Laptop, Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Career Hero Showcase
function CareerShowcase() {
  const floatingItems = [
    { icon: Rocket, label: "Scale-Up", color: "bg-yellow-400", delay: 0 },
    { icon: Brain, label: "Innovation", color: "bg-black text-yellow-400", delay: 0.2 },
    { icon: Code2, label: "Tech", color: "bg-yellow-400", delay: 0.4 },
    { icon: Users, label: "Team", color: "bg-black text-yellow-400", delay: 0.6 },
  ];

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
      {/* Central Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl sm:rounded-3xl rotate-6" />
          <div className="absolute inset-0 bg-slate-900 rounded-2xl sm:rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-yellow-400 mx-auto mb-2 sm:mb-4" />
              <p className="text-yellow-400 font-bold text-sm sm:text-lg lg:text-xl">Join Us</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Items */}
      {floatingItems.map((item, index) => {
        const positions = [
          "top-2 left-2 sm:top-4 sm:left-4 lg:top-8 lg:left-8",
          "top-2 right-2 sm:top-4 sm:right-4 lg:top-8 lg:right-8",
          "bottom-2 left-2 sm:bottom-4 sm:left-4 lg:bottom-8 lg:left-8",
          "bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-8 lg:right-8"
        ];
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.delay }}
            className={`absolute ${positions[index]}`}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
              className={`${item.color} rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl`}
            >
              <item.icon className={`w-5 h-5 sm:w-8 sm:h-8 ${item.color.includes("text-yellow") ? "text-yellow-400" : "text-black"}`} />
              <p className={`text-xs sm:text-sm font-semibold mt-1 sm:mt-2 ${item.color.includes("text-yellow") ? "text-white" : "text-black"}`}>
                {item.label}
              </p>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Decorative dots - hidden on small mobile */}
      <div className="hidden sm:block absolute top-1/4 right-1/4 w-3 h-3 bg-yellow-400 rounded-full" />
      <div className="hidden sm:block absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-400 rounded-full" />
      <div className="hidden sm:block absolute top-1/3 left-1/4 w-4 h-4 bg-yellow-400/50 rounded-full" />
    </div>
  );
}

export default function KarrierePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.05),transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Briefcase className="w-4 h-4" />
                  Karriere bei PrintzzDigital
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Gestalte die{" "}
                  <span className="text-yellow-400">Zukunft</span>{" "}
                  mit uns
                </h1>
                <p className="text-lg text-slate-300 mb-8 max-w-lg">
                  Werde Teil eines Teams, das mit Leidenschaft und Expertise 
                  die Grenzen von Print und Digital neu definiert. 
                  Von Early-Stage FinTech bis Hypergrowth – wir wissen, wie Skalierung geht.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#jobs">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 rounded-full">
                      Offene Stellen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="#initiativ">
                    <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 rounded-full">
                      Initiativbewerbung
                    </Button>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4 sm:gap-8 mt-8 sm:mt-12">
                  <div className="flex-1 min-w-[80px]">
                    <p className="text-2xl sm:text-3xl font-bold text-yellow-400">∞</p>
                    <p className="text-xs sm:text-sm text-slate-400">Growth Potential</p>
                  </div>
                  <div className="flex-1 min-w-[80px]">
                    <p className="text-2xl sm:text-3xl font-bold text-yellow-400">100%</p>
                    <p className="text-xs sm:text-sm text-slate-400">Remote möglich</p>
                  </div>
                  <div className="flex-1 min-w-[80px]">
                    <p className="text-2xl sm:text-3xl font-bold text-yellow-400">A+</p>
                    <p className="text-xs sm:text-sm text-slate-400">Team Spirit</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <CareerShowcase />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why PrintzzDigital */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Warum wir?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Was uns <span className="text-yellow-500">besonders</span> macht
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Erfahrung aus den schnellsten wachsenden FinTechs Deutschlands trifft auf 
                traditionelles Handwerk und innovative Drucklösungen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Rocket,
                  title: "Scale-Up DNA",
                  description: "Wissen aus Trade Republic & Börse Stuttgart Digital – wir kennen Hypergrowth.",
                  color: "bg-yellow-400"
                },
                {
                  icon: Brain,
                  title: "Innovation First",
                  description: "Modernste Technologien, KI-Integration und zukunftsweisende Prozesse.",
                  color: "bg-slate-900"
                },
                {
                  icon: Users,
                  title: "Team Culture",
                  description: "Flache Hierarchien, echte Eigenverantwortung und gegenseitiger Support.",
                  color: "bg-yellow-400"
                },
                {
                  icon: Target,
                  title: "Impact",
                  description: "Deine Arbeit zählt – sichtbare Ergebnisse und echte Verantwortung.",
                  color: "bg-slate-900"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <item.icon className={`w-7 h-7 ${item.color === "bg-slate-900" ? "text-yellow-400" : "text-black"}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Deine <span className="text-yellow-500">Benefits</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Wir investieren in unser Team – weil wir wissen, dass großartige Menschen großartige Arbeit leisten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "💰", title: "Attraktive Vergütung", description: "Leistungsgerechte Bezahlung mit Entwicklungsperspektive" },
                { icon: "🏠", title: "Remote Work", description: "100% flexibel – arbeite von wo du am produktivsten bist" },
                { icon: "📚", title: "Weiterbildung", description: "Budget für Kurse, Konferenzen und Zertifizierungen" },
                { icon: "💻", title: "Top Equipment", description: "MacBook, Monitore und die besten Tools für deine Arbeit" },
                { icon: "🎯", title: "Eigenverantwortung", description: "Echte Projekte, echte Verantwortung, echter Impact" },
                { icon: "🚀", title: "Startup-Spirit", description: "Schnelle Entscheidungen, kurze Wege, viel Gestaltungsraum" },
                { icon: "☕", title: "Team Events", description: "Regelmäßige Get-togethers und gemeinsame Aktivitäten" },
                { icon: "⚡", title: "Cutting-Edge Tech", description: "Arbeite mit den neuesten Technologien und Frameworks" },
                { icon: "🌟", title: "Karriere-Growth", description: "Persönliche Entwicklung und Aufstiegsmöglichkeiten" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:border-yellow-400 transition-colors"
                >
                  <span className="text-3xl mb-4 block">{benefit.icon}</span>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="jobs" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                Offene Stellen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Finde deinen <span className="text-yellow-500">Perfect Fit</span>
              </h2>
            </motion.div>

            {/* Job Listings - Currently Empty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-slate-50 rounded-2xl p-12 text-center border-2 border-dashed border-slate-300">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Aktuell keine offenen Stellen</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Aber lass dich davon nicht aufhalten! Wir sind immer auf der Suche nach außergewöhnlichen Talenten. 
                  Überzeuge uns mit deiner Initiativbewerbung.
                </p>
                <Link href="#initiativ">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full">
                    Initiativ bewerben
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Initiativbewerbung */}
        <section id="initiativ" className="py-24 bg-slate-900 text-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Heart className="w-4 h-4" />
                  Initiativbewerbung
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Du bist der Unterschied, den wir suchen
                </h2>
                <p className="text-slate-300 mb-8">
                  Keine passende Stelle gefunden? Kein Problem. Wir glauben an Menschen, nicht an Stellenbeschreibungen. 
                  Zeig uns, was du kannst und warum du zu uns passt.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-yellow-400">Bereiche, die uns interessieren:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Code2, label: "Development" },
                      { icon: Brain, label: "KI & Automation" },
                      { icon: Sparkles, label: "Design" },
                      { icon: Users, label: "Operations" },
                      { icon: Rocket, label: "Business Dev" },
                      { icon: Target, label: "Marketing" }
                    ].map((area, index) => (
                      <div key={index} className="flex items-center gap-3 text-slate-300">
                        <area.icon className="w-5 h-5 text-yellow-400" />
                        {area.label}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <h3 className="text-2xl font-bold mb-6">So bewirbst du dich</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">E-Mail an uns</h4>
                        <p className="text-slate-400 text-sm">info@printzz.de</p>
                        <p className="text-slate-500 text-xs mt-1">Betreff: &quot;Initiativbewerbung - [Dein Bereich]&quot;</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Deine Unterlagen</h4>
                        <ul className="text-slate-400 text-sm space-y-1">
                          <li>• Kurzes Anschreiben – warum wir?</li>
                          <li>• Lebenslauf</li>
                          <li>• Portfolio / GitHub (falls vorhanden)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Wir melden uns</h4>
                        <p className="text-slate-400 text-sm">Innerhalb von 5 Werktagen hörst du von uns</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <a 
                      href="mailto:info@printzz.de?subject=Initiativbewerbung"
                      className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-full text-center transition-colors"
                    >
                      Jetzt bewerben
                      <ArrowRight className="inline ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Unser <span className="text-yellow-500">Bewerbungsprozess</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Schnell, transparent und auf Augenhöhe – so wie wir arbeiten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Bewerbung", description: "Sende uns deine Unterlagen", icon: Briefcase, color: "bg-yellow-400" },
                { step: "02", title: "Kennenlernen", description: "30 Min. Video Call", icon: Users, color: "bg-slate-900" },
                { step: "03", title: "Deep Dive", description: "Fachgespräch mit dem Team", icon: Brain, color: "bg-yellow-400" },
                { step: "04", title: "Welcome!", description: "Onboarding & erstes Projekt", icon: Rocket, color: "bg-slate-900" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`w-10 h-10 ${item.color === "bg-slate-900" ? "text-yellow-400" : "text-black"}`} />
                  </div>
                  <p className="text-yellow-500 font-bold text-sm mb-2">{item.step}</p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bereit, Teil von etwas Großem zu werden?
              </h2>
              <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
                Von der Idee bis zum Unicorn – wir haben es erlebt. 
                Jetzt bauen wir die Zukunft von Print & Digital. Bist du dabei?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@printzz.de?subject=Initiativbewerbung"
                  className="inline-flex items-center justify-center bg-black hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
                >
                  Jetzt bewerben
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link href="/about">
                  <Button variant="outline" className="border-black text-black hover:bg-black/10 px-8 py-4 rounded-full">
                    Mehr über uns
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
