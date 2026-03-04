"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    title: "Moderne Webentwicklung",
    description:
      "Wir entwickeln schnelle, responsive Websites und Web-Apps mit React, Next.js und modernsten Technologien für maximale Performance und Conversion.",
    href: "/leistungen/webentwicklung",
    image: "/JordanLaptop.png",
  },
  {
    number: "02",
    title: "KI-Integration & Automatisierung",
    description:
      "Intelligente Chatbots, automatisierte Workflows und datengetriebene Insights – wir integrieren KI nahtlos in Ihre Geschäftsprozesse.",
    href: "/leistungen/ki-integration",
    image: "/Weg_mit_dem_digitalen_Ballast__version_1.png",
  },
  {
    number: "03",
    title: "Digitale Transformation",
    description:
      "Von der Analyse bis zur Umsetzung – wir entwickeln eine klare digitale Strategie für nachhaltiges Wachstum und Wettbewerbsvorteile.",
    href: "/leistungen/digital-transformation",
  },
  {
    number: "04",
    title: "Digitaldruck & Werbetechnik",
    description:
      "Banner, Fahrzeugbeschriftung, Großformatdruck und mehr – wir bringen Ihre Marke in die reale Welt mit professioneller Drucktechnik.",
    href: "/digitaldruck",
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="leistungen"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-36 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Unsere{" "}
            <span className="text-yellow-500">Leistungen</span>{" "}
            im Überblick
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Von Webentwicklung und KI-Integration bis hin zu Digitaldruck und
            Werbetechnik – entdecken Sie unser umfassendes Angebot an kreativen
            und technischen Lösungen.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={service.image ? "sm:col-span-2" : ""}
            >
              <Link href={service.href} className="group block h-full">
                <div
                  className={`relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl h-full overflow-hidden ${
                    service.image ? "grid lg:grid-cols-2 gap-0" : "p-6 sm:p-8 lg:p-10"
                  }`}
                >
                  {/* Image (only for featured card) */}
                  {service.image && (
                    <div className="relative aspect-[16/9] lg:aspect-auto bg-gray-900">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  )}

                  <div className={service.image ? "p-6 sm:p-8 lg:p-10 flex flex-col justify-center" : ""}>
                    {/* Number */}
                    <span className="text-sm font-mono text-gray-400 mb-4 block">
                      {service.number}
                    </span>

                    {/* Title */}
                    <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors ${
                      service.image ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
                    }`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-gray-600 leading-relaxed mb-6 ${
                      service.image ? "text-base sm:text-lg" : "text-sm sm:text-base"
                    }`}>
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link href="/contact">
            <Button className="bg-black hover:bg-yellow-500 hover:text-black text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-300">
              Kontakt aufnehmen
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/leistungen">
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full text-base font-medium border-gray-300 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300"
            >
              Alle Leistungen
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
