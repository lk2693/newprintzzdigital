import Image from "next/image";
import Link from "next/link";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import ContactCta from "@/components/landing/ContactCta";
import { Reveal } from "@/components/landing/motion";
import { breadcrumbSchema } from "@/lib/schemas";

const kundenprojekte = [
  {
    name: "Stadt Braunschweig – „Deine City of Lions“",
    tag: "Smart City · PWA",
    text: "Die offizielle digitale Stadtplattform: Events, Live-Parkplätze, ÖPNV und Buchungen in einer App – entwickelt mit Stadtmarketing, BLSK und Propstei.",
    liveUrl: "https://www.deinecityoflions.de",
    liveLabel: "deinecityoflions.de",
  },
  {
    name: "Kloster & Partner Architekten",
    tag: "Architektur · Website",
    text: "Ruhige, klare Website für das Braunschweiger Architekturbüro – die Projekte stehen im Mittelpunkt, nicht die Effekte.",
    liveUrl: "https://www.kloster-und-partner-architekten.de/",
    liveLabel: "kloster-und-partner-architekten.de",
    detailHref: "/portfolio/kloster-und-partner-architekten",
  },
  {
    name: "Jordan GmbH",
    tag: "Handwerk · Website",
    text: "Website für den Meisterbetrieb für Klima, Heizung, Sanitär und Elektro – mit Rückruf-Formular, 24/7-Notdienst und Online-Terminbuchung.",
    image: { src: "/assets/ref-jordan-v2.png", width: 2162, height: 1650 },
    liveUrl: "https://www.jordan24.de",
    liveLabel: "jordan24.de",
  },
  {
    name: "il Capriccio",
    tag: "Gastronomie · Website",
    text: "Website für das italienische Ristorante in Braunschweig – Speisekarte, Events, Galerie, Online-Bestellung und Tischreservierung.",
    image: { src: "/assets/ref-capriccio-v2.png", width: 1824, height: 1498 },
  },
  {
    name: "Kulturrat Braunschweig",
    tag: "Kultur · Plattform",
    text: "Digitale Plattform für die Braunschweiger Kulturszene – Veranstaltungskalender, Mitgliederbereich, Förderung und News.",
    image: { src: "/assets/ref-kulturrat-v2.png", width: 2620, height: 1638 },
  },
];

const studioArbeiten = [
  { src: "/AiHealth.png", width: 2074, height: 1416, label: "KI-Gesundheitsplattform" },
  { src: "/onlineshop.png", width: 2916, height: 1548, label: "E-Commerce-Plattform" },
  { src: "/hotel.png", width: 926, height: 572, label: "Hotel-Buchung" },
  { src: "/artmarket.png", width: 1978, height: 1278, label: "Kunstmarkt & Auktionen" },
  { src: "/landing.png", width: 1304, height: 690, label: "Conversion-Landingpage" },
  { src: "/restaurant.png", width: 568, height: 778, label: "Restaurant & Reservierung" },
  { src: "/ecommerce.png", width: 364, height: 388, label: "Shop-Konzept" },
  { src: "/ecommerce2.png", width: 372, height: 338, label: "Fashion-Store-Konzept" },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Portfolio – PrintzzDigital Braunschweig",
  "description":
    "Projekte von PrintzzDigital aus Braunschweig: die Stadt-App „Deine City of Lions“, Websites für Jordan GmbH, il Capriccio, Kloster & Partner Architekten und die Plattform des Kulturrats.",
  "url": "https://www.printzzdigital.de/portfolio",
  "publisher": {
    "@type": "Organization",
    "name": "PrintzzDigital",
    "url": "https://www.printzzdigital.de",
  },
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": kundenprojekte.length,
    "itemListElement": kundenprojekte.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "CreativeWork",
        "name": p.name,
        "description": p.text,
        ...(p.liveUrl ? { url: p.liveUrl } : {}),
      },
    })),
  },
};

export default function PortfolioPage() {
  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      <div aria-hidden className="landing-grain" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://www.printzzdigital.de" },
              { name: "Portfolio", url: "https://www.printzzdigital.de/portfolio" },
            ])
          ),
        }}
      />

      <LandingHeader />

      {/* Kopf */}
      <section id="inhalt" className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5F1E8]">
        <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-14 sm:px-8 lg:pt-[80px]">
          <Reveal>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-[34px] bg-[#F28C00]" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                Portfolio
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-expanded m-0 max-w-[800px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[46px] lg:text-[54px]">
              Arbeiten, die man{" "}
              <span className="text-[#A05F00]">besuchen kann.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="m-0 mt-6 max-w-[620px] text-[19px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
              Keine anonymen Referenz-Kacheln: Das hier sind echte Projekte mit Namen und Adresse –
              die meisten können Sie direkt im Browser öffnen oder in Braunschweig im Alltag
              benutzen. Darunter: Konzepte aus unserem Studio, ehrlich als solche markiert.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Kundenprojekte */}
      <section className="mx-auto max-w-[1200px] px-5 pb-[90px] pt-[80px] sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* City of Lions – dunkle Hero-Karte */}
          <Reveal>
            <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-[#161310] text-[#FAF9F6] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(20,18,16,0.35)]">
              <div className="h-[220px] overflow-hidden bg-black">
                <Image
                  src="/assets/city-of-lions-app-v2.png"
                  alt="City of Lions App – die offizielle Stadt-App für Braunschweig"
                  width={708}
                  height={1508}
                  className="block h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-8 pb-8 pt-7">
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#FBB800]">
                  {kundenprojekte[0].tag}
                </span>
                <h2 className="m-0 text-[22px] font-bold">{kundenprojekte[0].name}</h2>
                <p className="m-0 flex-1 text-[15px] leading-[1.6] text-[#B8B2A6]">
                  {kundenprojekte[0].text}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href={kundenprojekte[0].liveUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-[15px] font-semibold text-[#FBB800] hover:text-[#F28C00]"
                  >
                    {kundenprojekte[0].liveLabel} →
                  </a>
                  <a
                    href="/#case"
                    className="text-[15px] font-semibold text-[#B8B2A6] hover:text-[#FBB800]"
                  >
                    Zur Case Study →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Kloster & Partner – typografische Karte */}
          <Reveal delay={0.12}>
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E8E4DC] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_24px_56px_rgba(20,18,16,0.12)]">
              <div className="flex h-[220px] flex-col justify-between border-b border-[#E8E4DC] bg-[#F2EFE9] p-8">
                <span className="font-mono text-[13px] text-[#7A7365]">
                  kloster-und-partner-architekten.de
                </span>
                <div>
                  <span className="font-expanded block text-[34px] font-extrabold leading-[1.05] tracking-[-0.01em] text-[#26231E]">
                    Kloster &amp;<br />Partner
                  </span>
                  <span className="mt-1 block text-[15px] font-semibold uppercase tracking-[0.14em] text-[#A05F00]">
                    Architekten
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 px-8 pb-8 pt-7">
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#A05F00]">
                  {kundenprojekte[1].tag}
                </span>
                <h2 className="m-0 text-[22px] font-bold text-[#26231E]">
                  {kundenprojekte[1].name}
                </h2>
                <p className="m-0 flex-1 text-[15px] leading-[1.6] text-[#6B655B]">
                  {kundenprojekte[1].text}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href={kundenprojekte[1].liveUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-[15px] font-semibold text-[#A05F00] hover:text-[#F28C00]"
                  >
                    Live ansehen →
                  </a>
                  <Link
                    href={kundenprojekte[1].detailHref!}
                    className="text-[15px] font-semibold text-[#7A7365] hover:text-[#A05F00]"
                  >
                    Zur Projektseite →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Jordan, Capriccio, Kulturrat – Bildkarten */}
          {kundenprojekte.slice(2).map((projekt, i) => (
            <Reveal key={projekt.name} delay={(i % 2) * 0.12}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E8E4DC] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_24px_56px_rgba(20,18,16,0.12)]">
                <div className="h-[220px] overflow-hidden border-b border-[#E8E4DC]">
                  <Image
                    src={projekt.image!.src}
                    alt={`${projekt.name} – Projekt von PrintzzDigital Braunschweig`}
                    width={projekt.image!.width}
                    height={projekt.image!.height}
                    className="block h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 px-8 pb-8 pt-7">
                  <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#A05F00]">
                    {projekt.tag}
                  </span>
                  <h2 className="m-0 text-[22px] font-bold text-[#26231E]">{projekt.name}</h2>
                  <p className="m-0 flex-1 text-[15px] leading-[1.6] text-[#6B655B]">
                    {projekt.text}
                  </p>
                  {projekt.liveUrl ? (
                    <a
                      href={projekt.liveUrl}
                      target="_blank"
                      rel="noopener"
                      className="text-[15px] font-semibold text-[#A05F00] hover:text-[#F28C00]"
                    >
                      {projekt.liveLabel} →
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="text-[15px] font-semibold text-[#A05F00] hover:text-[#F28C00]"
                    >
                      Ähnliches Projekt anfragen →
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Platzhalter-Karte: Ihr Projekt */}
          <Reveal delay={0.12}>
            <Link
              href="/contact"
              className="group flex h-full min-h-[300px] flex-col items-start justify-end gap-3 rounded-xl border-2 border-dashed border-[#C9C2B4] bg-transparent p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800]"
            >
              <span className="font-expanded text-[15px] font-extrabold text-[#FBB800] transition-colors group-hover:text-[#F28C00]">
                06
              </span>
              <span className="font-expanded text-[26px] font-extrabold leading-[1.1] text-[#26231E]">
                Hier ist noch Platz.
              </span>
              <p className="m-0 text-[15px] leading-[1.6] text-[#6B655B]">
                Die nächste Karte könnte Ihr Projekt sein – erzählen Sie uns im kostenlosen
                Erstgespräch davon.
              </p>
              <span className="text-[15px] font-semibold text-[#A05F00] group-hover:text-[#F28C00]">
                Projekt besprechen{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Studio-Konzepte */}
      <section className="border-t border-[#E8E4DC] bg-[#F2EFE9]">
        <div className="mx-auto max-w-[1200px] px-5 py-[100px] sm:px-8">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                    Aus dem Studio
                  </span>
                </div>
                <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
                  Konzepte, an denen wir uns austoben.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Ehrlich gesagt: Das hier sind keine Kundenaufträge, sondern Designstudien aus
                unserer Werkstatt – so probieren wir Layouts, Branchen und Ideen aus, bevor sie in
                echte Projekte wandern.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {studioArbeiten.map((arbeit, i) => (
              <Reveal key={arbeit.src} delay={(i % 4) * 0.08} y={20}>
                <div className="group overflow-hidden rounded-xl border border-[#E8E4DC] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FBB800] hover:shadow-[0_16px_40px_rgba(20,18,16,0.1)]">
                  <div className="h-[150px] overflow-hidden border-b border-[#E8E4DC] bg-white sm:h-[180px]">
                    <Image
                      src={arbeit.src}
                      alt={`Designstudie: ${arbeit.label}`}
                      width={arbeit.width}
                      height={arbeit.height}
                      className="block h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="px-4 py-3.5">
                    <span className="text-[14px] font-semibold text-[#26231E]">
                      {arbeit.label}
                    </span>
                  </div>
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
