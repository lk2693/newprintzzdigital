"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function LandingHero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5F1E8]"
    >
      {/* Dezentes Punktraster oben rechts */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-[8%] hidden h-64 w-64 opacity-[0.35] lg:block"
        style={{
          backgroundImage: "radial-gradient(#C9C2B4 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at 50% 40%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%, black, transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:pb-20 lg:pt-[88px]">
        <motion.div
          className="flex flex-col gap-[26px]"
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.a
            variants={item}
            href="#case"
            className="group inline-flex items-center gap-3 self-start rounded-full border border-[#E8E4DC] bg-white py-2 pl-2.5 pr-4 transition-all hover:-translate-y-0.5 hover:border-[#FBB800] hover:shadow-[0_8px_24px_rgba(20,18,16,0.08)]"
          >
            <span className="rounded-full bg-[#FBB800] px-2.5 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-[#141210]">
              Neu
            </span>
            <span className="text-[15px] text-[#6B655B]">
              Unsere PWA <strong className="text-[#26231E]">„Deine City of Lions“</strong> ist live{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
          </motion.a>

          <motion.h1
            variants={item}
            className="font-expanded m-0 text-[38px] font-extrabold leading-[1.06] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[48px] lg:text-[60px]"
          >
            Digitale Lösungen, die eine{" "}
            <span className="relative inline-block whitespace-nowrap text-[#B36A00]">
              ganze Stadt
              <motion.svg
                aria-hidden
                viewBox="0 0 300 16"
                fill="none"
                className="absolute -bottom-[0.12em] left-0 h-[0.22em] w-full"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M5 11 C 75 4, 150 3, 200 6 C 240 8, 270 9, 295 8"
                  stroke="#FBB800"
                  strokeWidth={7}
                  strokeLinecap="round"
                  initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
                />
              </motion.svg>
            </span>{" "}
            bewegen.
          </motion.h1>

          <motion.p
            variants={item}
            className="m-0 max-w-[540px] text-[19px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]"
          >
            Von schnellen Websites über KI-Integration bis zur eigenen Stadt-App: Wir entwickeln
            digitale Produkte, auf die sich Unternehmen – und ganz Braunschweig – verlassen.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3.5">
            <a
              href="#kontakt"
              className="rounded-md bg-[#FBB800] px-7 py-[15px] text-base font-bold text-[#141210] transition-all hover:-translate-y-0.5 hover:bg-[#F28C00] hover:shadow-[0_12px_28px_rgba(251,184,0,0.4)] active:translate-y-0"
            >
              Kostenloses Beratungsgespräch
            </a>
            <a
              href="#case"
              className="rounded-md border border-[#C9C2B4] px-7 py-[15px] text-base font-semibold text-[#26231E] transition-all hover:-translate-y-0.5 hover:border-[#FBB800] hover:text-[#B36A00] active:translate-y-0"
            >
              Case Study ansehen
            </a>
          </motion.div>

          <motion.span variants={item} className="text-sm text-[#9A9385]">
            Bekannt aus{" "}
            <a
              href="https://www.braunschweiger-zeitung.de/niedersachsen/braunschweig/article411967592/braunschweig-startet-neue-stadt-app-deine-city-of-lions-das-kann-sie.html"
              target="_blank"
              rel="noopener"
              className="font-semibold text-[#6B655B] underline decoration-[#FBB800] decoration-2 underline-offset-4 transition-colors hover:text-[#B36A00]"
            >
              Braunschweiger Zeitung
            </a>{" "}
            &amp;{" "}
            <a
              href="https://regionalheute.de/braunschweig/alles-auf-einen-blick-das-bietet-die-neue-braunschweig-app-braunschweig-1778508878/"
              target="_blank"
              rel="noopener"
              className="font-semibold text-[#6B655B] underline decoration-[#FBB800] decoration-2 underline-offset-4 transition-colors hover:text-[#B36A00]"
            >
              regionalHeute.de
            </a>
          </motion.span>
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={reduce ? false : { opacity: 0, y: 40, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        >
          <div
            className="animate-glow-pulse absolute -inset-x-12 -inset-y-8"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(251,184,0,0.22), transparent 65%)",
            }}
          />
          <div className="rotate-[2.5deg] transition-transform duration-500 hover:rotate-0">
            <div className="animate-phone-float relative w-[264px] overflow-hidden rounded-[34px] border-[5px] border-[#26231E] bg-black shadow-[0_30px_60px_rgba(38,35,30,0.25)]">
              <Image
                src="/assets/city-of-lions-app-v2.png"
                alt="City of Lions App auf dem Smartphone"
                width={708}
                height={1508}
                priority
                className="block h-auto w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
