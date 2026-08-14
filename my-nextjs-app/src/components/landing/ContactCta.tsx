import { Reveal } from "./motion";

export default function ContactCta() {
  return (
    <section id="kontakt" className="relative scroll-mt-20 overflow-hidden bg-[#FBB800]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#F28C00]/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-[#FFD34D]/50 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-[90px] sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
        <div className="flex flex-col gap-[18px]">
          <h2 className="font-expanded m-0 text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#141210] [text-wrap:balance] sm:text-[44px]">
            Haben Sie eine Idee? Lassen Sie uns sprechen.
          </h2>
          <p className="m-0 max-w-[520px] text-lg leading-[1.6] text-[#4A3A08] [text-wrap:pretty]">
            Im kostenlosen Beratungsgespräch besprechen wir, wie wir Ihre Vision umsetzen –
            persönlich, direkt aus Braunschweig.
          </p>
        </div>
        </Reveal>
        <Reveal delay={0.15}>
        <div className="flex flex-col items-start gap-3.5">
          <a
            href="mailto:info@printzzdigital.de"
            className="rounded-md bg-[#141210] px-[30px] py-4 text-[17px] font-bold text-[#FAF9F6] transition-all hover:-translate-y-0.5 hover:bg-[#26231E] hover:text-[#FBB800] hover:shadow-[0_16px_36px_rgba(20,18,16,0.3)] active:translate-y-0"
          >
            Kostenloses Beratungsgespräch buchen
          </a>
          <a
            href="tel:+4953170201786"
            className="text-[17px] font-bold text-[#141210] hover:text-[#4A3A08]"
          >
            0531 – 70 20 17 86
          </a>
          <span className="text-[15px] text-[#4A3A08]">oder per Mail: info@printzzdigital.de</span>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
