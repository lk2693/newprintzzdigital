import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion";

export default function ReferencesSection() {
  return (
    <section
      id="referenzen"
      className="scroll-mt-20 border-y border-[#E8E4DC] bg-[#F2EFE9]"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-[100px] sm:px-8">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-[34px] bg-[#F28C00]" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                Referenzen
              </span>
            </div>
            <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
              Kunden, die uns vertrauen.
            </h2>
          </div>
          </Reveal>
          <Reveal delay={0.15}>
          <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
            Von der Stadtplattform bis zum Handwerksbetrieb: Wir arbeiten für Unternehmen und
            Institutionen aus Braunschweig und der Region – langfristig und auf Augenhöhe.
          </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Stadt Braunschweig – dunkle Hero-Karte */}
          <Reveal>
          <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-[#161310] text-[#FAF9F6] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(20,18,16,0.35)]">
            <div className="h-[220px] overflow-hidden bg-black">
              <Image
                src="/assets/city-of-lions-app-v2.png"
                alt="City of Lions App"
                width={708}
                height={1508}
                className="block h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-8 pb-8 pt-7">
              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#FBB800]">
                Smart City · PWA
              </span>
              <h3 className="m-0 text-[22px] font-bold">Stadt Braunschweig</h3>
              <p className="m-0 flex-1 text-[15px] leading-[1.6] text-[#B8B2A6]">
                „Deine City of Lions“ – die offizielle digitale Stadtplattform, mit Stadtmarketing,
                BLSK und Propstei Braunschweig.
              </p>
              <a
                href="/#case"
                className="text-[15px] font-semibold text-[#FBB800] hover:text-[#F28C00]"
              >
                Zur Case Study →
              </a>
            </div>
          </div>
          </Reveal>

          {/* Jordan GmbH */}
          <Reveal delay={0.12}>
          <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E8E4DC] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_24px_56px_rgba(20,18,16,0.12)]">
            <div className="h-[220px] overflow-hidden border-b border-[#E8E4DC]">
              <Image
                src="/assets/ref-jordan-v2.png"
                alt="Website der Jordan GmbH"
                width={2162}
                height={1650}
                className="block h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-8 pb-8 pt-7">
              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#A05F00]">
                Handwerk · Website
              </span>
              <h3 className="m-0 text-[22px] font-bold text-[#26231E]">Jordan GmbH</h3>
              <p className="m-0 flex-1 text-[15px] leading-[1.6] text-[#6B655B]">
                Website für den Braunschweiger Meisterbetrieb für Klima, Heizung, Sanitär und
                Elektro – mit Rückruf-Formular, 24/7-Notdienst und Online-Terminbuchung.
              </p>
              <a
                href="https://www.jordan24.de"
                target="_blank"
                rel="noopener"
                className="text-[15px] font-semibold text-[#A05F00] hover:text-[#F28C00]"
              >
                jordan24.de →
              </a>
            </div>
          </div>
          </Reveal>

          {/* il Capriccio */}
          <Reveal>
          <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E8E4DC] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_24px_56px_rgba(20,18,16,0.12)]">
            <div className="h-[220px] overflow-hidden border-b border-[#E8E4DC]">
              <Image
                src="/assets/ref-capriccio-v2.png"
                alt="Website des Ristorante il Capriccio"
                width={1824}
                height={1498}
                className="block h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-8 pb-8 pt-7">
              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#A05F00]">
                Gastronomie · Website
              </span>
              <h3 className="m-0 text-[22px] font-bold text-[#26231E]">il Capriccio</h3>
              <p className="m-0 flex-1 text-[15px] leading-[1.6] text-[#6B655B]">
                Website für das italienische Ristorante in Braunschweig – mit Speisekarte, Events,
                Galerie, Online-Bestellung und Tischreservierung.
              </p>
              <Link
                href="/portfolio"
                className="text-[15px] font-semibold text-[#A05F00] hover:text-[#F28C00]"
              >
                Zum Projekt →
              </Link>
            </div>
          </div>
          </Reveal>

          {/* Kulturrat Braunschweig */}
          <Reveal delay={0.12}>
          <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E8E4DC] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_24px_56px_rgba(20,18,16,0.12)]">
            <div className="h-[220px] overflow-hidden border-b border-[#E8E4DC]">
              <Image
                src="/assets/ref-kulturrat-v2.png"
                alt="Website des Kulturrats Braunschweig"
                width={2620}
                height={1638}
                className="block h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-8 pb-8 pt-7">
              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#A05F00]">
                Kultur · Plattform
              </span>
              <h3 className="m-0 text-[22px] font-bold text-[#26231E]">Kulturrat Braunschweig</h3>
              <p className="m-0 flex-1 text-[15px] leading-[1.6] text-[#6B655B]">
                Digitale Plattform für die Braunschweiger Kulturszene – mit Veranstaltungskalender,
                Mitgliederbereich, Förderung und News.
              </p>
              <Link
                href="/portfolio"
                className="text-[15px] font-semibold text-[#A05F00] hover:text-[#F28C00]"
              >
                Zum Projekt →
              </Link>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
