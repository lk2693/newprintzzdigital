import Image from "next/image";
import Link from "next/link";

const footerNav = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#case", label: "City of Lions" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#prozess", label: "Prozess" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function LandingFooter() {
  return (
    <footer className="bg-[#161310] text-[#B8B2A6]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pb-10 pt-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="self-start rounded-lg bg-[#FAF9F6] px-3.5 py-2.5">
            <Image
              src="/assets/printzz-logo-v2.png"
              alt="printzz Digital und Grafik"
              width={906}
              height={660}
              className="block h-[42px] w-auto"
            />
          </div>
          <p className="m-0 max-w-[340px] text-[15px] leading-[1.6]">
            Ihr Partner für digitale Transformation, KI-Integration und innovative Weblösungen. Wir
            machen den Mittelstand digital.
          </p>
          <a
            href="https://www.linkedin.com/company/printzzdigital"
            target="_blank"
            rel="noopener"
            className="text-[15px] font-semibold text-[#FBB800] hover:text-[#F28C00]"
          >
            LinkedIn →
          </a>
        </div>

        <div className="flex flex-col gap-2.5">
          <strong className="text-sm uppercase tracking-[0.1em] text-[#FAF9F6]">Kontakt</strong>
          <span className="text-[15px] leading-[1.6]">
            Rischbleek 6
            <br />
            38126 Braunschweig
          </span>
          <a href="tel:+4953170201786" className="text-[15px] text-[#B8B2A6] hover:text-[#FBB800]">
            0531 – 70 20 17 86
          </a>
          <a
            href="mailto:info@printzzdigital.de"
            className="text-[15px] text-[#B8B2A6] hover:text-[#FBB800]"
          >
            info@printzzdigital.de
          </a>
        </div>

        <div className="flex flex-col gap-2.5">
          <strong className="text-sm uppercase tracking-[0.1em] text-[#FAF9F6]">Navigation</strong>
          {footerNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-[#B8B2A6] hover:text-[#FBB800]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-[#2A2620]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 px-5 py-5 text-[13px] text-[#9A9385] sm:px-8">
          <span>© 2026 PrintzzDigital. Alle Rechte vorbehalten.</span>
          <div className="flex gap-5">
            <Link href="/impressum" className="text-[#9A9385] hover:text-[#FBB800]">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-[#9A9385] hover:text-[#FBB800]">
              Datenschutz
            </Link>
            <Link href="/agb" className="text-[#9A9385] hover:text-[#FBB800]">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
