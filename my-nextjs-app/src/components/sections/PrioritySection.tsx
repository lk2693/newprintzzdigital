"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Clock,
  Settings2,
  Palette,
  Smartphone,
  CheckCircle2,
  Circle,
  Folder,
  Link2,
  PenTool,
  Type,
  AlignLeft,
  Layers,
} from "lucide-react";

export default function PrioritySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 italic font-serif">
            Ihre Ziele,{" "}
            <br className="hidden sm:block" />
            unsere Priorität
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Vom Konzept bis zum Launch – wir sind Ihrem Erfolg verpflichtet, mit
            schnellen Reaktionszeiten und persönlicher Betreuung.
          </p>
        </motion.div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 – 24/7 Priority Care */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="priority-card priority-card-image group"
          >
            <div className="priority-card-img-wrapper">
              <div className="priority-card-img-placeholder">
                <Clock className="w-16 h-16 text-yellow-500 opacity-60" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Prioritäts-Support 24/7
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Wir sind für Sie da – mit einer{" "}
                <strong className="text-gray-900">
                  durchschnittlichen Antwortzeit von 24 Stunden
                </strong>{" "}
                für alle Anfragen.
              </p>
            </div>
          </motion.div>

          {/* Card 2 – Tailored Tweaks */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="priority-card priority-card-tweaks"
          >
            {/* Corner accent */}
            <div className="absolute top-4 right-4">
              <div className="w-3 h-3 border-t-2 border-r-2 border-yellow-500" />
            </div>

            <div className="p-6 sm:p-7">
              <h3 className="text-xl font-bold text-gray-900 mb-1 leading-snug">
                Maßgeschneiderte
                <br />
                Anpassungen
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mt-3 mb-5">
                Individuelle Änderungen jederzeit möglich. Wir bieten{" "}
                <strong className="text-gray-900">bis zu 5 Revisionen</strong>{" "}
                nach Launch, damit alles perfekt ist.
              </p>

              {/* Avatars */}
              <div className="flex -space-x-2 mb-5">
                {[
                  "bg-yellow-400",
                  "bg-gray-800",
                  "bg-yellow-300",
                  "bg-gray-400",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${bg} border-2 border-white`}
                  />
                ))}
              </div>

              {/* Checklist */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Post-Launch Anfragen
                </p>
                <ul className="space-y-2">
                  {[
                    { text: "Textabstände korrigieren", done: true },
                    { text: "Mobile Menü-Schriftgröße", done: true },
                    { text: "Bilder austauschen", done: true },
                    { text: "Button-Farbe anpassen", done: false },
                    { text: "Ladezeit optimieren", done: false },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      {item.done ? (
                        <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                      )}
                      <span
                        className={
                          item.done ? "text-gray-500" : "text-gray-700"
                        }
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
                  <span>📅</span>
                  <span>3 Monate nach Launch gültig</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 – Brand Kit */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="priority-card priority-card-brand"
          >
            <div className="relative w-full h-full min-h-[380px] overflow-hidden">
              {/* Background image */}
              <Image
                src="/designkit.png"
                alt="Brand Kit – Logos, Farben, Typografie"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
              
              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <h3 className="text-xl font-bold text-white mb-2">
                  Ihr Brand Kit
                  <br />
                  immer griffbereit
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Vollständiges Branding-Toolkit – Logos, Farben &amp; Typografie.{" "}
                  <strong className="text-white">
                    Alle Assets herunterladen
                  </strong>{" "}
                  oder mit Ihrem Team teilen.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 – Real-Time Support */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="priority-card priority-card-realtime"
          >
            <div className="p-6 sm:p-7 flex flex-col h-full">
              {/* Phone mockup */}
              <div className="flex-1 flex items-center justify-center mb-4">
                <div className="relative w-44">
                  {/* Phone frame */}
                  <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[1.6rem] overflow-hidden">
                      {/* Notch */}
                      <div className="flex justify-center pt-2">
                        <div className="w-16 h-5 bg-gray-900 rounded-full" />
                      </div>
                      {/* Clock */}
                      <div className="text-center py-6">
                        <span className="text-5xl font-extralight text-white">
                          10:45
                        </span>
                      </div>
                      {/* Notification */}
                      <div className="mx-3 mb-4 bg-white/95 backdrop-blur rounded-2xl p-3 shadow-lg">
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 rounded-full bg-yellow-400 flex-shrink-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              P
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-900">
                              PrintzzDigital{" "}
                              <span className="text-gray-400 font-normal">
                                Heute 09:17
                              </span>
                            </p>
                            <p className="text-xs text-gray-600 mt-0.5">
                              Update fertig – bereit zum Review! 🚀
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-center">
                <p className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-1">
                  PrintzzDigital
                </p>
                <p className="text-xs text-yellow-600 font-medium">
                  Echtzeit-Support
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
