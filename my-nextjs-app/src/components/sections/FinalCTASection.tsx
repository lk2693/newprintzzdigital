"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-36 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Haben Sie eine{" "}
            <span className="text-yellow-500">Idee?</span>
            <br />
            Lassen Sie uns zusammenarbeiten!
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/contact">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-6 rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link
              href="mailto:info@printzzdigital.de"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              info@printzzdigital.de
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
