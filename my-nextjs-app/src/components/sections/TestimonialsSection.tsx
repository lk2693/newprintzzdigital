"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "M. Schneider",
    role: "Geschäftsführer",
    company: "StartupTech",
    location: "Braunschweig",
    text: "Endlich eine Agentur, die unsere Startup-Mentalität versteht! Schnell, modern und fair. Die Zusammenarbeit war von Anfang an sehr professionell.",
    rating: 5,
  },
  {
    name: "A. Weber",
    role: "Inhaberin",
    company: "LocalBiz",
    location: "Wolfsburg",
    text: "Als Early Adopter haben wir nicht nur eine top Website bekommen, sondern auch 20% gespart! Die KI-Integration hat unseren Kundenservice revolutioniert.",
    rating: 5,
  },
  {
    name: "S. Braun",
    role: "CTO",
    company: "InnovateCorp",
    location: "Hannover",
    text: "Frischer Wind! Das Team arbeitet mit Leidenschaft und den neuesten Technologien. Unsere neue Website lädt in unter einer Sekunde.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Das sagen unsere{" "}
            <span className="text-yellow-500">Kunden</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Hören Sie direkt von Unternehmen, die den Mehrwert und die Qualität unserer
            Zusammenarbeit erlebt haben.
          </p>
        </motion.div>

        {/* Testimonial Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-10">
            {/* Left - Names */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                    i === activeIndex
                      ? "bg-white shadow-lg border border-yellow-200"
                      : "bg-transparent hover:bg-white/60 border border-transparent"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                      i === activeIndex
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.location}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right - Quote */}
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg border border-gray-200"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-8">
                    &ldquo;{testimonials[activeIndex].text}&rdquo;
                  </h3>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-lg">
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
