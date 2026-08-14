import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion";

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-[100px] sm:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="relative min-w-0">
          <div className="relative h-[380px] sm:h-[500px]">
            {/* Versetzter Farbrahmen hinter dem Foto */}
            <div
              aria-hidden
              className="absolute -left-3 -top-3 h-full w-full -rotate-2 rounded-[14px] border-2 border-[#FBB800]"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[14px] rotate-1 transition-transform duration-500 hover:rotate-0">
              <Image
                src="/oj_jaeschke.png"
                alt="Olaf Jaeschke, Gründer und Geschäftsführer der Printzz GmbH in Braunschweig"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-[18px] right-4 -rotate-2 rounded-[10px] bg-[#FBB800] px-[22px] py-4 text-[15px] font-bold text-[#141210] shadow-[0_16px_40px_rgba(20,18,16,0.18)] lg:-right-[18px]">
              Olaf Jaeschke
              <br />
              Gründer &amp; Geschäftsführer
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="min-w-0">
        <div className="flex min-w-0 flex-col gap-[22px]">
          <div className="flex items-center gap-2.5">
            <span className="h-0.5 w-[34px] bg-[#F28C00]" />
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
              Über uns
            </span>
          </div>
          <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[40px]">
            Vom Braunschweiger Druckhaus zur Digitalagentur.
          </h2>
          <p className="m-0 text-[17px] leading-[1.65] text-[#6B655B] [text-wrap:pretty]">
            Hinter PrintzzDigital steht Olaf Jaeschke: über 20 Jahre Druckgewerbe, dann der
            Schritt ins Digitale. Sein Team baut heute Websites, Apps und KI-Lösungen, die genauso
            präzise umgesetzt sind wie ein guter Druckbogen – und druckt Ihre Visitenkarten gleich
            mit.
          </p>
          <p className="m-0 text-[17px] leading-[1.65] text-[#6B655B] [text-wrap:pretty]">
            Den Mittelstand kennt er nicht aus der Marktforschung: Als IHK-Vizepräsident
            Braunschweig und Präsident des Handelsverbands Harz-Heide sitzt er dort, wo über die
            Region entschieden wird. Und wenn Sie anrufen, sitzt er auch am Tisch – nicht ein
            Ticketsystem.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/about"
              className="self-start rounded-md bg-[#141210] px-[26px] py-3.5 text-base font-bold text-[#FAF9F6] transition-all hover:-translate-y-0.5 hover:bg-[#26231E] hover:text-[#FBB800] active:translate-y-0"
            >
              Lernen Sie uns kennen
            </Link>
            <a
              href="#kontakt"
              className="self-start rounded-md border border-[#C9C2B4] px-[26px] py-3.5 text-base font-semibold text-[#26231E] transition-all hover:-translate-y-0.5 hover:border-[#FBB800] hover:text-[#A05F00] active:translate-y-0"
            >
              Gespräch vereinbaren
            </a>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
