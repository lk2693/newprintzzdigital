"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Wie läuft ein typisches Projekt ab?",
    answer:
      "Wir starten mit einem kostenlosen Beratungsgespräch, in dem wir Ihre Anforderungen analysieren. Dann erstellen wir ein Konzept mit Zeitplan und Kostenvoranschlag. Nach Ihrer Freigabe entwickeln wir agil mit regelmäßigen Updates, bis Ihr Projekt einsatzbereit ist.",
  },
  {
    question: "Wie lange dauert die Umsetzung einer Website?",
    answer:
      "Je nach Umfang dauert ein typisches Website-Projekt 2-6 Wochen. Einfache Landingpages können in 1-2 Wochen fertig sein, während komplexe Web-Apps oder E-Commerce-Shops 6-12 Wochen benötigen. Wir halten Sie während der gesamten Entwicklung auf dem Laufenden.",
  },
  {
    question: "Welche Technologien setzen Sie ein?",
    answer:
      "Wir arbeiten hauptsächlich mit React, Next.js, TypeScript und Tailwind CSS für Frontend-Projekte. Für Backend und KI nutzen wir Node.js, Python, OpenAI und verschiedene Cloud-Services. Für Druck setzen wir auf modernste Digitaldruck-Technik.",
  },
  {
    question: "Bieten Sie auch laufenden Support an?",
    answer:
      "Ja! Nach dem Launch bieten wir verschiedene Support-Pakete an – von regelmäßigen Updates und Wartung bis hin zu dediziertem Support mit garantierten Antwortzeiten. Sprechen Sie uns einfach an.",
  },
  {
    question: "Wie sieht es mit den Kosten aus?",
    answer:
      "Unsere Preise richten sich nach dem Projektumfang. Nach einem ersten Gespräch erhalten Sie einen transparenten Kostenvoranschlag ohne versteckte Gebühren. Wir bieten zudem flexible Zahlungsmodelle an.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-8 group-hover:text-yellow-600 transition-colors">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-50 transition-all duration-300">
          {isOpen ? (
            <Minus className="w-4 h-4 text-yellow-600" />
          ) : (
            <Plus className="w-4 h-4 text-gray-500" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-6 max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-20">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Häufige{" "}
              <span className="text-yellow-500">Fragen</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren
              Leistungen, dem Ablauf und unserer Arbeitsweise.
            </p>
            <Link href="/contact">
              <Button className="bg-black hover:bg-yellow-500 hover:text-black text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-300">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Right - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
