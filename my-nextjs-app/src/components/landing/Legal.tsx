import Link from "next/link";

import LandingHeader from "./LandingHeader";
import LandingFooter from "./LandingFooter";

/** Einheitlicher Rahmen für Rechtsseiten (Impressum, AGB, Datenschutz, Cookies). */
export function LegalShell({
  title,
  subtitle,
  stand,
  children,
}: {
  title: string;
  subtitle?: string;
  stand?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      <div aria-hidden className="landing-grain" />
      <LandingHeader />

      <main id="inhalt" className="mx-auto max-w-[820px] px-5 pb-[90px] pt-14 sm:px-8 lg:pt-[72px]">
        <Link
          href="/"
          className="inline-block text-[15px] font-semibold text-[#A05F00] transition-colors hover:text-[#F28C00]"
        >
          ← Zurück zur Startseite
        </Link>

        <header className="mb-12 mt-8">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-[34px] bg-[#F28C00]" />
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
              Rechtliches
            </span>
          </div>
          <h1 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.1] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[42px]">
            {title}
          </h1>
          {subtitle && (
            <p className="m-0 mt-4 text-[18px] leading-[1.6] text-[#6B655B]">{subtitle}</p>
          )}
        </header>

        <div className="flex flex-col gap-10">{children}</div>

        {stand && (
          <div className="mt-12 rounded-[10px] bg-[#F2EFE9] px-6 py-4">
            <p className="m-0 text-[15px] text-[#26231E]">
              <strong className="font-semibold">Stand:</strong> {stand}
            </p>
          </div>
        )}
      </main>

      <LandingFooter />
    </div>
  );
}

/**
 * Nummerierter Abschnitt einer Rechtsseite. Der Inhalt (p, ul, h3, h4, strong, a)
 * wird über Arbitrary Variants einheitlich gestylt – Markup bleibt semantisch schlank.
 */
export function LegalSection({
  nr,
  title,
  children,
}: {
  nr: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t-[3px] border-[#FBB800] pt-6">
      <div className="mb-4 flex items-baseline gap-3.5">
        <span className="font-expanded text-[15px] font-extrabold text-[#A05F00]">{nr}</span>
        <h2 className="m-0 text-[20px] font-bold leading-[1.3] text-[#26231E]">{title}</h2>
      </div>
      <div className="flex flex-col gap-3.5 text-[15.5px] leading-[1.7] text-[#6B655B] [&_a]:font-semibold [&_a]:text-[#A05F00] [&_a]:underline [&_a]:decoration-[#FBB800] [&_a]:decoration-2 [&_a]:underline-offset-4 [&_h3]:m-0 [&_h3]:mt-3 [&_h3]:text-[17px] [&_h3]:font-bold [&_h3]:text-[#26231E] [&_h4]:m-0 [&_h4]:mt-2 [&_h4]:text-[15.5px] [&_h4]:font-bold [&_h4]:text-[#26231E] [&_p]:m-0 [&_strong]:font-semibold [&_strong]:text-[#26231E] [&_ul]:m-0 [&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:p-0 [&_ul>li]:relative [&_ul>li]:pl-5 [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[10px] [&_ul>li]:before:h-1.5 [&_ul>li]:before:w-1.5 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-[#FBB800] [&_ul>li]:before:content-['']">
        {children}
      </div>
    </section>
  );
}

/** Hervorgehobener Info-Kasten (z. B. Adressblock des Verantwortlichen). */
export function LegalBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[10px] border border-[#E8E4DC] bg-white px-5 py-4">{children}</div>
  );
}
