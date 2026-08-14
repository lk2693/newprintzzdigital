import Image from "next/image";
import { Reveal } from "./motion";

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-[100px] sm:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="relative min-w-0">
          <div className="relative h-[320px] sm:h-[460px]">
            {/* Versetzter Farbrahmen hinter dem Foto */}
            <div
              aria-hidden
              className="absolute -left-3 -top-3 h-full w-full -rotate-2 rounded-[14px] border-2 border-[#FBB800]"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[14px] rotate-1 transition-transform duration-500 hover:rotate-0">
              <Image
                src="/assets/buero.png"
                alt="Das Büro von PrintzzDigital in Braunschweig"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-[18px] right-4 -rotate-2 rounded-[10px] bg-[#FBB800] px-[22px] py-4 text-[15px] font-bold text-[#141210] shadow-[0_16px_40px_rgba(20,18,16,0.18)] lg:-right-[18px]">
              Print + Digital
              <br />
              unter einem Dach
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="min-w-0">
        <div className="flex min-w-0 flex-col gap-[22px]">
          <div className="flex items-center gap-2.5">
            <span className="h-0.5 w-[34px] bg-[#F28C00]" />
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B36A00]">
              Über uns
            </span>
          </div>
          <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[40px]">
            Vom Braunschweiger Druckhaus zur Digitalagentur.
          </h2>
          <p className="m-0 text-[17px] leading-[1.65] text-[#6B655B] [text-wrap:pretty]">
            PrintzzDigital ist die Digitalsparte der Printzz GmbH. Aus jahrelanger Erfahrung mit
            Druck und Werbetechnik wissen wir, wie Marken wirken – heute bringen wir dieses Handwerk
            ins Digitale: Websites, Apps und KI-Lösungen, die genauso präzise umgesetzt sind wie ein
            guter Druckbogen.
          </p>
          <p className="m-0 text-[17px] leading-[1.65] text-[#6B655B] [text-wrap:pretty]">
            Wir arbeiten persönlich, ohne Agentur-Overhead und mit kurzen Wegen – Ihr
            Ansprechpartner sitzt in Braunschweig, nicht in einem Ticketsystem.
          </p>
          <div className="flex gap-3.5">
            <a
              href="#kontakt"
              className="self-start rounded-md bg-[#141210] px-[26px] py-3.5 text-base font-bold text-[#FAF9F6] transition-all hover:-translate-y-0.5 hover:bg-[#26231E] hover:text-[#FBB800] active:translate-y-0"
            >
              Lernen Sie uns kennen
            </a>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
