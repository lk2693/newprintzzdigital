"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 via-white to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full border border-yellow-200">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            Ihr Partner für digitale Exzellenz
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 leading-[1.05]">
            Digitale{" "}
            <span className="relative inline-block">
              <span className="text-yellow-500">Lösungen</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            für Ihren Erfolg
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Von moderner Webentwicklung über KI-Integration bis zur digitalen
          Transformation – wir machen Ihr Unternehmen zukunftsfähig.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-24"
        >
          <Link href="/contact">
            <Button className="bg-black hover:bg-yellow-500 hover:text-black text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Kostenloses Beratungsgespräch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/leistungen">
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full text-base font-medium border-gray-300 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300"
            >
              Leistungen entdecken
            </Button>
          </Link>
        </motion.div>

        {/* Image Grid - Framer template style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {[
            { src: "/restaurant.png", alt: "Restaurant Website Projekt", rotate: "-rotate-2" },
            { src: "/ecommerce.png", alt: "E-Commerce Shop Projekt", rotate: "rotate-1" },
            { src: "/hotel.png", alt: "Hotel Booking Projekt", rotate: "-rotate-1" },
            { src: "/landing.png", alt: "Landing Page Projekt", rotate: "rotate-2" },
          ].map((img, i) => (
            <div
              key={i}
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${img.rotate}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
