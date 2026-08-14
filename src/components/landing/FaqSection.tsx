"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const faqs = [
  {
    question: "Was kostet eine Website oder App?",
    answer:
      "Das hängt vom Umfang ab: Eine kompakte Unternehmens-Website startet im vierstelligen Bereich, komplexe Projekte wie eine PWA kalkulieren wir individuell. Im kostenlosen Erstgespräch erhalten Sie eine transparente Einschätzung – ohne versteckte Kosten.",
  },
  {
    question: "Wie lange dauert ein Projekt?",
    answer:
      "Eine typische Unternehmens-Website ist in 4–8 Wochen live, größere Projekte wie Apps oder Portale planen wir in Etappen. Sie bekommen von Anfang an einen verbindlichen Zeitplan mit festen Meilensteinen.",
  },
  {
    question: "Was ist eine PWA – und brauche ich eine?",
    answer:
      "Eine Progressive Web App läuft im Browser, fühlt sich aber wie eine native App an – ohne App-Store, ohne Installationshürde, immer aktuell. Ideal, wenn Sie Kunden mobil erreichen wollen, ohne zwei separate Apps für iOS und Android zu bezahlen. So haben wir auch „Deine City of Lions“ für Braunschweig gebaut.",
  },
  {
    question: "Betreuen Sie die Website auch nach dem Launch?",
    answer:
      "Ja. Auf Wunsch übernehmen wir Hosting, Updates, Sicherheit und Weiterentwicklung – damit Ihre Website dauerhaft schnell und sicher bleibt und Sie sich auf Ihr Geschäft konzentrieren können.",
  },
  {
    question: "Wir haben schon eine Website – lohnt sich ein Relaunch?",
    answer:
      "Wenn Ihre Seite langsam lädt, auf dem Smartphone schlecht aussieht oder bei Google nicht gefunden wird: ja. Wir analysieren Ihren Auftritt kostenlos und sagen Ihnen ehrlich, ob ein Relaunch oder gezielte Verbesserungen sinnvoller sind.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-20 border-t border-[#E8E4DC] bg-[#F2EFE9]">
      <div className="mx-auto max-w-[900px] px-5 py-[100px] sm:px-8">
        <Reveal>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-[34px] bg-[#F28C00]" />
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B36A00]">
              Häufige Fragen
            </span>
          </div>
          <h2 className="font-expanded m-0 mb-12 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
            Was Sie wissen möchten.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.06} y={20}>
                <div
                  className={`rounded-[10px] border bg-white transition-colors duration-300 ${
                    isOpen ? "border-[#FBB800]" : "border-[#E8E4DC] hover:border-[#C9C2B4]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-[26px] py-[22px] text-left text-lg font-bold text-[#26231E]"
                  >
                    {faq.question}
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
                      className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-xl font-semibold transition-colors ${
                        isOpen ? "bg-[#FBB800] text-[#141210]" : "bg-[#F2EFE9] text-[#6B655B]"
                      }`}
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="m-0 px-[26px] pb-[22px] text-base leading-[1.65] text-[#6B655B]">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
