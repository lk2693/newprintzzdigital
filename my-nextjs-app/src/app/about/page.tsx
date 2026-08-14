import Image from "next/image";
import Link from "next/link";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import ContactCta from "@/components/landing/ContactCta";
import { Reveal } from "@/components/landing/motion";
import { breadcrumbSchema } from "@/lib/schemas";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Olaf Jaeschke",
  "jobTitle": "Geschäftsführer",
  "worksFor": {
    "@type": "Organization",
    "name": "Printzz GmbH",
    "url": "https://printzzdigital.com",
  },
  "image": "https://printzzdigital.com/oj_jaeschke.png",
  "email": "olaf.jaeschke@printzzdigital.de",
  "telephone": "+49-531-70201786",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rischbleek 6",
    "addressLocality": "Braunschweig",
    "postalCode": "38126",
    "addressCountry": "DE",
  },
};

const aemter = [
  "Geschäftsführer Printzz GmbH",
  "IHK Vizepräsident Braunschweig",
  "Präsident Handelsverband Harz-Heide",
  "Vorstand Arbeitsausschuss",
  "Geschäftsführer Galerie Jaeschke",
];

const team = [
  {
    initialen: "OJ",
    foto: "/oj_jaeschke.png",
    name: "Olaf Jaeschke",
    rolle: "Geschäftsführer",
    text: "Über 20 Jahre Erfahrung im Druckgewerbe. Gründer von PrintzzDigital – und derjenige, mit dem Sie im Erstgespräch am Tisch sitzen.",
    kontakt: "olaf.jaeschke@printzzdigital.de",
  },
  {
    initialen: "CPO",
    rolle: "Scale-Up & Operations",
    name: "Chief Product Officer",
    text: "Early-Stage bei Trade Republic – vom Startup zum Unicorn. Skalierung bei Börse Stuttgart Digital. Experte für Prozessautomatisierung und Wachstum.",
  },
  {
    initialen: "BH",
    name: "Beate Herkenhoff",
    rolle: "Assistenz der Geschäftsführung",
    text: "Jahrelange Erfahrung in der Koordination von Großprojekten, Fördermittelanträgen und administrativer Unterstützung.",
    kontakt: "beate.herkenhoff@printzzdigital.de",
  },
];

export default function AboutPage() {
  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      <div aria-hidden className="landing-grain" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://printzzdigital.com" },
              { name: "Über uns", url: "https://printzzdigital.com/about" },
            ])
          ),
        }}
      />

      <LandingHeader />

      {/* Hero mit Portrait */}
      <section
        id="inhalt"
        className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5F1E8]"
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-[80px]">
          <div className="flex flex-col gap-[26px]">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Über uns
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-expanded m-0 text-[36px] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[46px] lg:text-[54px]">
                Hinter Printzz steht ein Name:{" "}
                <span className="text-[#A05F00]">Olaf Jaeschke.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="m-0 max-w-[560px] text-[19px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Über 20 Jahre Druckgewerbe, dann der Schritt ins Digitale: Olaf Jaeschke hat
                PrintzzDigital gegründet, um traditionelles Handwerk und moderne Technologie
                zusammenzubringen. Heute baut sein Team Websites, Software und die offizielle
                Stadt-App für Braunschweig – und druckt immer noch.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/contact"
                  className="rounded-md bg-[#FBB800] px-7 py-[15px] text-base font-bold text-[#141210] transition-all hover:-translate-y-0.5 hover:bg-[#F28C00] hover:shadow-[0_12px_28px_rgba(251,184,0,0.4)] active:translate-y-0"
                >
                  Gespräch vereinbaren
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-md border border-[#C9C2B4] px-7 py-[15px] text-base font-semibold text-[#26231E] transition-all hover:-translate-y-0.5 hover:border-[#FBB800] hover:text-[#A05F00] active:translate-y-0"
                >
                  Unsere Arbeiten ansehen
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-[380px]">
              <div
                aria-hidden
                className="absolute -inset-x-10 -inset-y-6"
                style={{
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(251,184,0,0.2), transparent 65%)",
                }}
              />
              <div className="relative -rotate-[2deg] rounded-lg border border-[#E8E4DC] bg-white p-3 shadow-[0_30px_60px_rgba(38,35,30,0.18)] transition-transform duration-500 hover:rotate-0">
                <Image
                  src="/oj_jaeschke.png"
                  alt="Olaf Jaeschke, Geschäftsführer der Printzz GmbH in Braunschweig"
                  width={1330}
                  height={1594}
                  priority
                  className="block h-auto w-full rounded-[4px]"
                />
                <p className="m-0 px-2 pb-1.5 pt-3 text-center text-sm text-[#7A7365]">
                  Olaf Jaeschke · Geschäftsführer der Printzz GmbH
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sein Weg */}
      <section className="mx-auto max-w-[900px] px-5 py-[90px] sm:px-8">
        <Reveal>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-[34px] bg-[#F28C00]" />
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
              Sein Weg
            </span>
          </div>
          <h2 className="font-expanded m-0 mb-8 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
            Vom Druckgewerbe zur Stadt-App.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-5 text-[17px] leading-[1.7] text-[#6B655B]">
            <p className="m-0">
              Mit über 20 Jahren Erfahrung im Druckgewerbe hat Olaf Jaeschke PrintzzDigital
              gegründet, um die Brücke zwischen traditionellem Handwerk und moderner
              Digitaltechnologie zu schlagen. Das Ergebnis sieht man heute überall in
              Braunschweig: auf Visitenkarten und Fahnen genauso wie in der Stadt-App „Deine City
              of Lions“.
            </p>
            <p className="m-0">
              Der Mittelstand liegt ihm dabei besonders am Herzen – und zwar nicht als
              Marketing-Floskel: Als Präsident des Handelsverbands Harz-Heide, IHK-Vizepräsident
              Braunschweig und Vorstand im Arbeitsausschuss kennt er die Sorgen der Betriebe aus
              den Gremien, nicht aus der Marktforschung. Nebenbei führt er die Galerie Jaeschke –
              das Auge für Gestaltung kommt also nicht von ungefähr.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <blockquote className="relative m-0 mt-10 flex flex-col gap-2 border-l-[3px] border-[#FBB800] py-1 pl-5">
            <span
              aria-hidden
              className="font-expanded pointer-events-none absolute -top-7 right-0 text-[90px] font-extrabold leading-none text-[#FBB800]/20 select-none"
            >
              „
            </span>
            <p className="m-0 text-[18px] italic leading-[1.6] text-[#4A453C]">
              „Qualität ist kein Zufall – sie ist das Ergebnis von Erfahrung, Leidenschaft und dem
              ständigen Streben nach Perfektion.“
            </p>
            <span className="text-sm not-italic text-[#7A7365]">
              Olaf Jaeschke, Geschäftsführer der Printzz GmbH
            </span>
          </blockquote>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {aemter.map((amt) => (
              <span
                key={amt}
                className="rounded-full border border-[#E8E4DC] bg-white px-4 py-2 text-[14px] font-semibold text-[#26231E]"
              >
                {amt}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 rounded-xl border border-[#E8E4DC] bg-white p-7">
            <span className="mb-2 block text-[13px] font-bold uppercase tracking-[0.1em] text-[#A05F00]">
              Direkter Draht
            </span>
            <p className="m-0 text-[16px] leading-[1.8] text-[#26231E]">
              <a
                href="mailto:olaf.jaeschke@printzzdigital.de"
                className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
              >
                olaf.jaeschke@printzzdigital.de
              </a>
              <br />
              <a
                href="tel:+4953170201786"
                className="font-semibold text-[#26231E] hover:text-[#A05F00]"
              >
                0531 – 70 20 17 86
              </a>
              <span className="text-[#6B655B]"> · Rischbleek 6, 38126 Braunschweig</span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* Team */}
      <section className="border-y border-[#E8E4DC] bg-[#F2EFE9]">
        <div className="mx-auto max-w-[1200px] px-5 py-[100px] sm:px-8">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                    Das Team
                  </span>
                </div>
                <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
                  Klein genug für kurze Wege.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Bei uns gibt es keine zehn Hierarchie-Ebenen: Wer Ihr Projekt betreut, sitzt auch
                im Erstgespräch – und geht ans Telefon, wenn Sie anrufen.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.12}>
                <div className="flex h-full flex-col gap-4 rounded-xl border border-[#E8E4DC] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_20px_48px_rgba(20,18,16,0.1)]">
                  {person.foto ? (
                    <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[#FBB800]">
                      <Image
                        src={person.foto}
                        alt={person.name}
                        width={128}
                        height={128}
                        className="block h-full w-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F2EFE9]">
                      <span className="font-expanded text-[15px] font-extrabold text-[#A05F00]">
                        {person.initialen}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="m-0 text-[20px] font-bold text-[#26231E]">{person.name}</h3>
                    <span className="text-[14px] font-semibold text-[#A05F00]">
                      {person.rolle}
                    </span>
                  </div>
                  <p className="m-0 flex-1 text-[15px] leading-[1.6] text-[#6B655B]">
                    {person.text}
                  </p>
                  {person.kontakt && (
                    <a
                      href={`mailto:${person.kontakt}`}
                      className="break-all text-[14px] font-semibold text-[#A05F00] hover:text-[#F28C00]"
                    >
                      {person.kontakt}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
      <LandingFooter />
    </div>
  );
}
