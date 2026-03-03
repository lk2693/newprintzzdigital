"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Beratung & Analyse",
    description:
      "In einem kostenlosen Erstgespräch analysieren wir Ihre Anforderungen und definieren gemeinsam klare Projektziele.",
  },
  {
    number: "02",
    title: "Konzept & Design",
    description:
      "Wir erstellen ein maßgeschneidertes Konzept mit Wireframes und Design-Entwürfen, abgestimmt auf Ihre Marke.",
  },
  {
    number: "03",
    title: "Umsetzung & Launch",
    description:
      "Agile Entwicklung mit regelmäßigem Feedback. Sie erhalten Ihr fertiges Projekt pünktlich und einsatzbereit.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Unser{" "}
              <span className="text-yellow-500">Prozess</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Unser klarer Prozess sorgt für transparente Kommunikation und
              effiziente Ergebnisse – von der ersten Idee bis zum erfolgreichen Launch.
            </p>
          </div>
          <Link href="/contact">
            <Button className="bg-black hover:bg-yellow-500 hover:text-black text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-300">
              Kontakt aufnehmen
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 h-full border border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg group">
                {/* Number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl sm:text-6xl font-bold text-gray-200 group-hover:text-yellow-200 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-12 h-1 bg-yellow-500 rounded-full mb-6" />

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 lg:-right-5 w-4 lg:w-5">
                  <ArrowRight className="w-5 h-5 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
