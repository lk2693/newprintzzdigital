"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Lightbulb, Award, Code2, Brain, Rocket, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageGallery } from "@/components/Lightbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-sm uppercase tracking-wider text-slate-600 mb-6 font-light">Über uns</div>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Über{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                printzzdigital
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Wir sind ein innovatives Team von Entwicklern, Designern und KI-Experten, 
              die digitale Träume in beeindruckende Realitäten verwandeln.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-slate-900" />
                <h2 className="text-3xl font-light">Unsere Mission</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
                Wir demokratisieren modernste Technologien und machen sie für Unternehmen 
                jeder Größe zugänglich. Unser Ziel ist es, durch innovative Webentwicklung 
                und KI-Integration nachhaltigen digitalen Erfolg zu schaffen.
              </p>
              <ul className="space-y-3 text-slate-600 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full" />
                  Modernste Technologien für jeden Kunden
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full" />
                  Transparente und faire Preisgestaltung
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full" />
                  Langfristige Partnerschaften statt Einmalgeschäft
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-slate-900" />
                <h2 className="text-3xl font-light">Unsere Vision</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
                Eine Zukunft, in der jedes Unternehmen von den Möglichkeiten der 
                Digitalisierung und Künstlichen Intelligenz profitiert. Wir träumen 
                von einer Welt, in der Technologie menschliche Kreativität verstärkt.
              </p>
              <ul className="space-y-3 text-slate-600 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full" />
                  KI als Standard in jedem Unternehmen
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full" />
                  Vollautomatisierte Geschäftsprozesse
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-900 rounded-full" />
                  Nachhaltige digitale Transformation
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-6">Unsere Werte</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Diese Prinzipien leiten uns bei jeder Entscheidung und jedem Projekt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code2,
                title: "Exzellenz",
                description: "Wir streben nach Perfektion in jedem Code und jedem Design",
                color: "text-slate-900"
              },
              {
                icon: Brain,
                title: "Innovation",
                description: "Wir nutzen neueste Technologien und denken außerhalb der Box",
                color: "text-slate-900"
              },
              {
                icon: Shield,
                title: "Vertrauen",
                description: "Transparenz und Ehrlichkeit sind die Basis unserer Arbeit",
                color: "text-slate-900"
              },
              {
                icon: Rocket,
                title: "Geschwindigkeit",
                description: "Schnelle Umsetzung ohne Kompromisse bei der Qualität",
                color: "text-slate-900"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-slate-200 h-full hover:border-slate-900 transition-colors">
                  <CardContent className="p-6 text-center">
                    <value.icon className={`w-12 h-12 ${value.color} mx-auto mb-4`} />
                    <h3 className="text-xl font-light mb-3">{value.title}</h3>
                    <p className="text-slate-600 font-light">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-slate-900" />
                <h2 className="text-4xl font-light">Unser Team</h2>
              </div>
              <div className="space-y-6 text-lg text-slate-600 font-light">
                <p>
                  printzzdigital wurde 2024 aus der Vision heraus gegründet, modernste 
                  Webtechnologien und KI für Unternehmen jeder Größe zugänglich zu machen - 
                  <span className="text-slate-900 font-normal"> ohne die Altlasten traditioneller Agenturen</span>.
                </p>
                <p>
                  Als <span className="text-slate-900 font-normal">frisches, agiles Team</span> 
                  setzen wir ausschließlich auf die neuesten Technologien und modernste Entwicklungsmethoden. 
                  Während andere noch mit veralteten Systemen kämpfen, starten wir direkt mit dem State-of-the-Art.
                </p>
                <p>
                  Unsere <span className="text-slate-900 font-normal">ersten Projekte haben bereits beeindruckende Ergebnisse</span> 
                  erzielt - dank unserem Fokus auf Innovation, persönlicher Betreuung und dem Mut, 
                  neue Wege zu gehen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageGallery
                images={[
                  {
                    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=faces",
                    alt: "Team Meeting",
                    title: "Kreative Brainstorming Sessions",
                    description: "Unser Team bei der Entwicklung innovativer Lösungen"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=faces",
                    alt: "Entwickler bei der Arbeit",
                    title: "Modernste Entwicklungsumgebung",
                    description: "Neueste Hardware und Software für optimale Ergebnisse"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=faces",
                    alt: "Team Collaboration",
                    title: "Agile Zusammenarbeit",
                    description: "Effiziente Teamarbeit mit modernsten Tools"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop&crop=faces",
                    alt: "Home Office Setup",
                    title: "Flexible Arbeitsplätze",
                    description: "Remote-first Ansatz für maximale Produktivität"
                  }
                ]}
                columns={2}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "15+", label: "Projekte erfolgreich gestartet" },
                { number: "1", label: "Jahr frische Innovation" },
                { number: "100%", label: "Zufriedene Early Adopter" },
                { number: "24/7", label: "Persönlicher Support" }
              ].map((stat, index) => (
                <Card key={index} className="bg-white border-slate-200 text-center hover:border-slate-900 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-3xl font-light bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 font-light">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-slate-900" />
                <h2 className="text-4xl font-light">Unsere Geschichte</h2>
              </div>
              <div className="space-y-6 text-lg text-slate-600 font-light">
                <p>
                  Was als Vision begann, ist heute Realität: Ein Team von passionierten 
                  Entwicklern und Designern, die täglich an der Zukunft des Webs arbeiten.
                </p>
                <p>
                  Unsere moderne Arbeitsweise kombiniert bewährte Methoden mit den 
                  neuesten Technologien - immer mit dem Fokus auf echte Ergebnisse 
                  für unsere Kunden.
                </p>
                <p>
                  Jedes Projekt ist für uns eine Chance, etwas Besonderes zu schaffen 
                  und gemeinsam zu wachsen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-6">Warum printzzdigital?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Was uns von der Konkurrenz unterscheidet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Fresh Innovation",
                description: "Keine Altlasten - wir setzen von Anfang an auf die neuesten Technologien und Methoden",
                features: ["Neueste Tech-Stacks", "Agile Entwicklung", "Moderne KI-Integration"]
              },
              {
                icon: Shield,
                title: "Persönlicher Service",
                description: "Als junges Team können wir uns voll auf jeden Kunden konzentrieren - keine Massenabfertigung",
                features: ["Direkter Draht zum Team", "Flexible Anpassungen", "Ehrliche Kommunikation"]
              },
              {
                icon: Rocket,
                title: "Competitive Preise",
                description: "Faire Preise ohne Agentur-Overhead - Top-Qualität zum Start-up-freundlichen Preis",
                features: ["Transparente Preise", "Flexible Zahlungsmodelle", "Startup-Rabatte verfügbar"]
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-slate-200 h-full hover:border-slate-900 transition-colors">
                  <CardHeader>
                    <reason.icon className="w-12 h-12 text-slate-900 mb-4" />
                    <CardTitle className="text-xl font-light">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6 font-light">{reason.description}</p>
                    <ul className="space-y-2">
                      {reason.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-6">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-light">
              Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen. 
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 font-light">
                  Kostenloses Beratungsgespräch
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-slate-300 hover:border-slate-900 text-slate-900 font-light">
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
