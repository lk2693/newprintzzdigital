"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Restaurant Website",
    client: "Gastronomie",
    description:
      "Moderne Gastronomie-Website mit digitaler Speisekarte und Reservierungssystem für ein verbessertes Kundenerlebnis.",
    image: "/restaurant.png",
    href: "/portfolio",
  },
  {
    title: "E-Commerce Shop",
    client: "Online-Handel",
    description:
      "Performanter Online-Shop mit Zahlungsintegration und automatisiertem Bestellmanagement.",
    image: "/ecommerce.png",
    href: "/portfolio",
  },
  {
    title: "Fashion Store",
    client: "Mode & Lifestyle",
    description:
      "Eleganter Mode-Webshop mit intuitivem Design und nahtloser Checkout-Experience.",
    image: "/ecommerce2.png",
    href: "/portfolio",
  },
  {
    title: "Hotel Booking",
    client: "Hotellerie",
    description:
      "Hotel-Website mit individuellem Buchungssystem und Gästemanagement.",
    image: "/hotel.png",
    href: "/portfolio",
  },
];

export default function ProjectsShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

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
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Unsere neuesten{" "}
              <span className="text-yellow-500">Projekte</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Werfen Sie einen Blick auf unsere aktuellen Arbeiten und sehen Sie,
              welche Qualität und Vielfalt wir für unsere Kunden liefern.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link href={projects[activeIndex].href} className="group block">
            <div className="relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-yellow-400 transition-all duration-500 hover:shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[450px]">
                  <Image
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full mb-6 w-fit">
                    {projects[activeIndex].client}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                    {projects[activeIndex].title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                    {projects[activeIndex].description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                    Projekt ansehen
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Dots */}
                  <div className="flex items-center gap-2 mt-10">
                    {projects.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveIndex(i);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? "bg-yellow-500 w-8"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center mt-12"
        >
          <Link href="/contact">
            <Button className="bg-black hover:bg-yellow-500 hover:text-black text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-300">
              Kontakt aufnehmen
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full text-base font-medium border-gray-300 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300"
            >
              Alle Projekte ansehen
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
