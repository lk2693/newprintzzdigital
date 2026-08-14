"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#case", label: "City of Lions" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function LandingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[rgba(250,249,246,0.92)] backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-[#E8E4DC] shadow-[0_8px_30px_rgba(20,18,16,0.07)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center">
          <Image
            src="/assets/printzz-logo-v2.png"
            alt="printzz Digital und Grafik"
            width={906}
            height={660}
            priority
            className="block h-[46px] w-auto"
          />
        </a>

        <nav className="hidden items-center gap-7 text-[15px] font-medium lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#26231E] transition-colors hover:text-[#F28C00]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden whitespace-nowrap rounded-md bg-[#FBB800] px-[22px] py-[11px] text-[15px] font-bold text-[#141210] transition-colors hover:bg-[#F28C00] sm:block"
          >
            Kostenlose Beratung
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md border border-[#E8E4DC] bg-white lg:hidden"
          >
            <span
              className={`block h-0.5 w-5 bg-[#26231E] transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-[#26231E] ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-[#26231E] transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#E8E4DC] bg-[#FAF9F6] px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-[16px] font-medium text-[#26231E] hover:bg-[#F2EFE9] hover:text-[#B36A00]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-md bg-[#FBB800] px-4 py-3 text-center text-[15px] font-bold text-[#141210]"
            >
              Kostenlose Beratung
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
