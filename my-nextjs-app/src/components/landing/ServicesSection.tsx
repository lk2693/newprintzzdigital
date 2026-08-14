import Link from "next/link";
import { Reveal } from "./motion";

const services = [
  {
    number: "01",
    title: "PWA- & App-Entwicklung",
    text: "Progressive Web Apps, die sich wie native Apps anfühlen – ohne App-Store, ohne Update-Hürden. Bewiesen im Großprojekt für die Stadt Braunschweig.",
    linkLabel: "Zur Case Study",
    linkHref: "#case",
  },
  {
    number: "02",
    title: "Moderne Webentwicklung",
    text: "Schnelle, responsive Websites mit React und Next.js – Ladezeiten unter einer Sekunde, gebaut für Sichtbarkeit und Conversion.",
    linkLabel: "Webdesign in Braunschweig",
    linkHref: "/webdesign-braunschweig",
  },
  {
    number: "03",
    title: "KI-Integration & Automatisierung",
    text: "Intelligente Chatbots, automatisierte Workflows und datengetriebene Insights – nahtlos in Ihre bestehenden Geschäftsprozesse integriert.",
    linkLabel: "KI-Anwendungen entdecken",
    linkHref: "/ki-anwendungen-braunschweig",
  },
  {
    number: "04",
    title: "Digitale Transformation",
    text: "Von der Analyse bis zur Umsetzung: eine klare digitale Strategie für nachhaltiges Wachstum und echte Wettbewerbsvorteile.",
    linkLabel: "Mehr zur Transformation",
    linkHref: "/leistungen/digital-transformation",
  },
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pb-[90px] pt-[100px] sm:px-8">
      <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-[34px] bg-[#F28C00]" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                Leistungen
              </span>
            </div>
            <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
              Alles, was Ihr Unternehmen digital braucht.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
            Vier Kernleistungen, ein Anspruch: messbare Ergebnisse statt digitaler Deko – von der
            ersten Idee bis zum laufenden Betrieb.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, i) => (
          <Reveal
            key={service.number}
            delay={(i % 2) * 0.12}
            className={i % 2 === 1 ? "md:translate-y-8" : undefined}
          >
            <div className="group flex h-full flex-col gap-3.5 rounded-xl border border-[#E8E4DC] bg-white p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_20px_48px_rgba(20,18,16,0.1)]">
              <div className="flex items-center justify-between">
                <span className="font-expanded text-[15px] font-extrabold text-[#FBB800] transition-colors group-hover:text-[#F28C00]">
                  {service.number}
                </span>
                <span className="h-0.5 w-8 origin-left scale-x-0 bg-[#FBB800] transition-transform duration-300 group-hover:scale-x-100" />
              </div>
              <h3 className="m-0 text-[23px] font-bold text-[#26231E]">{service.title}</h3>
              <p className="m-0 flex-1 text-base leading-[1.6] text-[#6B655B]">{service.text}</p>
              <Link
                href={service.linkHref}
                className="text-[15px] font-semibold text-[#A05F00] transition-colors hover:text-[#F28C00]"
              >
                {service.linkLabel}{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
