import Image from "next/image";
import { Reveal } from "./motion";

const features = [
  {
    title: "Live-Daten der Stadt",
    text: "Freie Parkplätze, Busverbindungen und Wetter – täglich aktuell, auf einen Blick.",
  },
  {
    title: "Direkt buchbar",
    text: "Stadtführungen, Unterkünfte und Angebote lassen sich direkt in der App buchen.",
  },
  {
    title: "PWA statt App-Store",
    text: "Läuft auf iOS und Android im Browser, spart Speicher und aktualisiert sich sofort.",
  },
  {
    title: "Handel im Fokus",
    text: "Shopping, Gastronomie und Gutscheine stärken die Innenstadt – digital sichtbar.",
  },
];

const pressLinks = [
  {
    label: "Braunschweiger Zeitung →",
    href: "https://www.braunschweiger-zeitung.de/niedersachsen/braunschweig/article411967592/braunschweig-startet-neue-stadt-app-deine-city-of-lions-das-kann-sie.html",
  },
  {
    label: "regionalHeute.de →",
    href: "https://regionalheute.de/braunschweig/alles-auf-einen-blick-das-bietet-die-neue-braunschweig-app-braunschweig-1778508878/",
  },
];

export default function CaseStudySection() {
  return (
    <section id="case" className="scroll-mt-20 bg-[#161310] text-[#FAF9F6]">
      <div className="mx-auto max-w-[1200px] px-5 py-[100px] sm:px-8">
        <Reveal>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-[34px] bg-[#FBB800]" />
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#FBB800]">
              Case Study · Smart City
            </span>
          </div>
        </Reveal>

        <div className="grid items-start gap-16 lg:grid-cols-[1fr_0.75fr]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <h2 className="font-expanded m-0 text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] [text-wrap:balance] sm:text-[44px]">
                Braunschweig – Deine City of Lions
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
            <p className="m-0 text-lg leading-[1.65] text-[#B8B2A6] [text-wrap:pretty]">
              Für die Löwenstadt haben wir die offizielle digitale Stadtplattform entwickelt: eine
              Progressive Web App, die Events, Live-Parkplätze, ÖPNV, Shopping, Gastronomie und
              Stadtführungen in einer Anwendung bündelt.
            </p>
            </Reveal>

            <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-6 self-start rounded-[10px] bg-[#FAF9F6] px-5 py-3.5">
              <Image
                src="/assets/logo-stadtmarketing-v3.png"
                alt="Braunschweig Stadtmarketing"
                width={256}
                height={71}
                className="block h-[38px] w-auto"
              />
              <Image
                src="/assets/logo-blsk-v2.png"
                alt="BLSK – Braunschweigische Landessparkasse"
                width={256}
                height={120}
                className="block h-[42px] w-auto"
              />
              <Image
                src="/assets/logo-propstei-v2.png"
                alt="Ev.-Luth. Propstei Braunschweig"
                width={250}
                height={128}
                className="block h-[46px] w-auto"
              />
            </div>
            </Reveal>

            <div className="grid gap-3.5 sm:grid-cols-2">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 0.08} y={20}>
                  <div className="flex h-full flex-col gap-1.5 rounded-[10px] border border-[#353028] bg-[#221E18] px-[22px] py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FBB800]/60">
                    <strong className="text-base text-[#FBB800]">{feature.title}</strong>
                    <span className="text-[15px] leading-[1.55] text-[#B8B2A6]">{feature.text}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
            <blockquote className="relative m-0 flex flex-col gap-2 border-l-[3px] border-[#FBB800] py-1 pl-5">
              <span aria-hidden className="font-expanded pointer-events-none absolute -top-7 right-0 text-[90px] font-extrabold leading-none text-[#FBB800]/15 select-none">„</span>
              <p className="m-0 text-[17px] italic leading-[1.6] text-[#D8D2C6]">
                „Die Idee war, alle wichtigen Informationen – von Dienstleistungen über
                Erreichbarkeit bis zu Freizeittipps – in einer einzigen Anwendung abzudecken.“
              </p>
              <span className="text-sm not-italic text-[#9A9385]">
                Olaf Jaeschke, Geschäftsführer der Printzz GmbH
              </span>
            </blockquote>
            </Reveal>

            <Reveal>
            <div className="flex flex-col gap-3">
              <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#9A9385]">
                Bekannt aus
              </span>
              <div className="flex flex-wrap gap-3">
                {pressLinks.map((press) => (
                  <a
                    key={press.href}
                    href={press.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#353028] bg-[#221E18] px-4 py-2.5 text-[15px] font-bold text-[#D8D2C6] transition-colors hover:border-[#FBB800] hover:text-[#FBB800]"
                  >
                    {press.label}
                  </a>
                ))}
              </div>
            </div>
            </Reveal>

            <Reveal>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="https://www.deinecityoflions.de"
                target="_blank"
                rel="noopener"
                className="rounded-md bg-[#FBB800] px-[26px] py-3.5 text-base font-bold text-[#141210] transition-all hover:-translate-y-0.5 hover:bg-[#F28C00] hover:shadow-[0_12px_28px_rgba(251,184,0,0.25)] active:translate-y-0"
              >
                App live ansehen
              </a>
              <a
                href="#kontakt"
                className="rounded-md border border-[#4A443B] px-[26px] py-3.5 text-base font-semibold text-[#FAF9F6] transition-all hover:-translate-y-0.5 hover:border-[#FBB800] hover:text-[#FBB800] active:translate-y-0"
              >
                Ähnliches Projekt anfragen
              </a>
            </div>
            </Reveal>
          </div>

          <div className="flex flex-col items-center gap-5 lg:sticky lg:top-[110px]">
            <Reveal y={40}>
            <div className="-rotate-[2deg] transition-transform duration-500 hover:rotate-0">
            <div className="w-[280px] overflow-hidden rounded-[38px] border-[6px] border-[#2A2620] bg-black shadow-[0_40px_80px_rgba(0,0,0,0.5)] sm:w-[320px]">
              <Image
                src="/assets/city-of-lions-app-v2.png"
                alt="Screenshot der City of Lions App: Startseite mit Suche, Events und Live-Wetter"
                width={708}
                height={1508}
                className="block h-auto w-full"
              />
            </div>
            </div>
            </Reveal>
            <span className="text-[13px] text-[#9A9385]">
              deinecityoflions.de · läuft auf iOS &amp; Android
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
