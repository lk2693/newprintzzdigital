import Link from "next/link";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import ReferencesSection from "@/components/landing/ReferencesSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactCta from "@/components/landing/ContactCta";
import { Reveal } from "@/components/landing/motion";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";

const bsFaqs = [
  {
    question: "Was kostet eine Website bei einer Agentur in Braunschweig?",
    answer:
      "Bei uns: kompakte Website ab 1.500 €, Unternehmens-Website mit CMS ab 2.500 €, Online-Shops und Web-Anwendungen ab 5.000 €. Nach dem kostenlosen Erstgespräch bekommen Sie einen Festpreis. Alle Details stehen offen auf unserer Webdesign-Seite – keine „Preis auf Anfrage“-Spielchen.",
  },
  {
    question: "Wie lange dauert ein Website-Projekt?",
    answer:
      "Eine typische Unternehmens-Website ist in 4–8 Wochen live, ein kompakter Onepager oft schneller. Den ersten Design-Entwurf sehen Sie meist nach etwa einer Woche – und weil wir in Braunschweig sitzen, stimmen wir uns zwischendurch auch mal am Tisch ab statt nur per Mail.",
  },
  {
    question: "Arbeitet ihr nur mit großen Unternehmen?",
    answer:
      "Nein – unsere Kunden reichen vom Meisterbetrieb über das Ristorante bis zur Stadt Braunschweig selbst. Die meisten sind Mittelständler aus der Region, die einen verlässlichen digitalen Partner suchen statt einer anonymen Agentur-Fabrik.",
  },
  {
    question: "Welche Leistungen bietet PrintzzDigital an?",
    answer:
      "Vier Kernbereiche: Webdesign und Webentwicklung, individuelle Software und Apps (wie die Stadt-App „Deine City of Lions“), KI-Anwendungen wie Chatbots und Automatisierung – und aus unserer Herkunft als Printzz GmbH auch Digitaldruck und Grafik. Website und Visitenkarte aus einem Haus, das gibt es nicht oft.",
  },
  {
    question: "Kann ich euch in Braunschweig persönlich besuchen?",
    answer:
      "Gerne – wir sitzen am Rischbleek 6 in 38126 Braunschweig. Machen Sie am besten kurz einen Termin aus (0531 – 70 20 17 86), dann ist auch Zeit und Kaffee da. Alternativ kommen wir zu Ihnen in den Betrieb, auch nach Wolfsburg, Salzgitter, Gifhorn oder Peine.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PrintzzDigital – Digitalagentur Braunschweig",
  "description":
    "Digitalagentur in Braunschweig für Webdesign, Software-Entwicklung, KI-Anwendungen und Digitaldruck. Bekannt durch die Stadt-App „Deine City of Lions“.",
  "url": "https://www.printzzdigital.de/braunschweig",
  "telephone": "+49-531-70201786",
  "email": "info@printzzdigital.de",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rischbleek 6",
    "addressLocality": "Braunschweig",
    "postalCode": "38126",
    "addressRegion": "Niedersachsen",
    "addressCountry": "DE",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 52.2177, "longitude": 10.5668 },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00",
  },
  "sameAs": ["https://www.linkedin.com/company/printzzdigital"],
  "areaServed": [
    { "@type": "City", "name": "Braunschweig" },
    { "@type": "City", "name": "Wolfsburg" },
    { "@type": "City", "name": "Salzgitter" },
    { "@type": "City", "name": "Gifhorn" },
    { "@type": "City", "name": "Peine" },
  ],
};

const leistungen = [
  {
    number: "01",
    title: "Webdesign & Websites",
    preis: "ab 1.500 €",
    text: "Handgebaute Websites mit Next.js statt Baukasten: unter einer Sekunde Ladezeit, für Google Braunschweig optimiert, Festpreis nach Erstgespräch.",
    linkLabel: "Webdesign in Braunschweig",
    linkHref: "/webdesign-braunschweig",
  },
  {
    number: "02",
    title: "Software & Apps",
    preis: "ab 5.000 €",
    text: "Web-Anwendungen, Buchungssysteme und PWAs – wie die offizielle Stadt-App „Deine City of Lions“, die wir für Braunschweig entwickelt haben.",
    linkLabel: "Software-Entwicklung",
    linkHref: "/software-entwicklung-braunschweig",
  },
  {
    number: "03",
    title: "KI-Anwendungen",
    preis: "ab 3.000 €",
    text: "Chatbots mit Ihrem Firmenwissen, Texterkennung für den Papierkram, Auswertungen auf Zuruf – nur dort, wo KI messbar Zeit spart.",
    linkLabel: "KI-Anwendungen entdecken",
    linkHref: "/ki-anwendungen-braunschweig",
  },
  {
    number: "04",
    title: "Digitaldruck & Grafik",
    preis: "auf Anfrage",
    text: "Unsere Wurzeln als Printzz GmbH: Flyer, Plakate, Fahnen und Geschäftsausstattung – Website und Visitenkarte aus einem Haus, im gleichen Design.",
    linkLabel: "Zum Digitaldruck",
    linkHref: "/digitaldruck",
  },
];

const staedte = [
  "Braunschweig",
  "Wolfsburg",
  "Salzgitter",
  "Gifhorn",
  "Peine",
  "Wolfenbüttel",
  "Helmstedt",
];

export default function BraunschweigPage() {
  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      <div aria-hidden className="landing-grain" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(bsFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://www.printzzdigital.de" },
              { name: "Digitalagentur Braunschweig", url: "https://www.printzzdigital.de/braunschweig" },
            ])
          ),
        }}
      />

      <LandingHeader />

      {/* Hero mit Kontakt-Karte */}
      <section id="inhalt" className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5F1E8]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20 lg:pt-[80px]">
          <div className="flex flex-col gap-[26px]">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Digitalagentur · Braunschweig
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-expanded m-0 text-[36px] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[46px] lg:text-[54px]">
                Ihre Digitalagentur in Braunschweig –{" "}
                <span className="text-[#A05F00]">zu Hause am Rischbleek.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="m-0 max-w-[560px] text-[19px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Die Stadt-App „Deine City of Lions“, die Website vom Meisterbetrieb Jordan, die
                Plattform des Kulturrats: Wir bauen die digitalen Werkzeuge, die Braunschweig im
                Alltag nutzt. Websites, Software, KI – und dank unserer Druckerei-Wurzeln auch
                gleich die Visitenkarten dazu.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/contact"
                  className="rounded-md bg-[#FBB800] px-7 py-[15px] text-base font-bold text-[#141210] transition-all hover:-translate-y-0.5 hover:bg-[#F28C00] hover:shadow-[0_12px_28px_rgba(251,184,0,0.4)] active:translate-y-0"
                >
                  Kostenloses Erstgespräch
                </Link>
                <a
                  href="#leistungen-bs"
                  className="rounded-md border border-[#C9C2B4] px-7 py-[15px] text-base font-semibold text-[#26231E] transition-all hover:-translate-y-0.5 hover:border-[#FBB800] hover:text-[#A05F00] active:translate-y-0"
                >
                  Leistungen & Preise
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <span className="text-sm text-[#7A7365]">
                Bekannt aus{" "}
                <a
                  href="https://www.braunschweiger-zeitung.de/niedersachsen/braunschweig/article411967592/braunschweig-startet-neue-stadt-app-deine-city-of-lions-das-kann-sie.html"
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-[#6B655B] underline decoration-[#FBB800] decoration-2 underline-offset-4 transition-colors hover:text-[#A05F00]"
                >
                  Braunschweiger Zeitung
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://regionalheute.de/braunschweig/alles-auf-einen-blick-das-bietet-die-neue-braunschweig-app-braunschweig-1778508878/"
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-[#6B655B] underline decoration-[#FBB800] decoration-2 underline-offset-4 transition-colors hover:text-[#A05F00]"
                >
                  regionalHeute.de
                </a>
              </span>
            </Reveal>
          </div>

          {/* Kontakt-Karte – Adresse & Zeiten sichtbar auf der Seite */}
          <Reveal delay={0.2}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-x-10 -inset-y-6"
                style={{
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(251,184,0,0.18), transparent 65%)",
                }}
              />
              <div className="relative flex flex-col gap-6 rounded-xl border border-[#E8E4DC] bg-white p-8 shadow-[0_30px_60px_rgba(38,35,30,0.12)] sm:p-9">
                <div>
                  <span className="mb-1.5 block text-[13px] font-bold uppercase tracking-[0.1em] text-[#A05F00]">
                    So finden Sie uns
                  </span>
                  <h2 className="font-expanded m-0 text-[24px] font-extrabold text-[#26231E]">
                    PrintzzDigital · Printzz GmbH
                  </h2>
                </div>

                <div className="flex flex-col gap-4 text-[16px] leading-[1.6]">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#7A7365]">
                      Adresse
                    </span>
                    <span className="text-[#26231E]">
                      Rischbleek 6, 38126 Braunschweig
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#7A7365]">
                      Telefon
                    </span>
                    <a
                      href="tel:+4953170201786"
                      className="font-semibold text-[#26231E] transition-colors hover:text-[#A05F00]"
                    >
                      0531 – 70 20 17 86
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#7A7365]">
                      E-Mail
                    </span>
                    <a
                      href="mailto:info@printzzdigital.de"
                      className="font-semibold text-[#26231E] transition-colors hover:text-[#A05F00]"
                    >
                      info@printzzdigital.de
                    </a>
                  </div>
                </div>

                <div className="rounded-[10px] bg-[#F2EFE9] px-5 py-4">
                  <span className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-[#7A7365]">
                    Öffnungszeiten
                  </span>
                  <span className="font-semibold text-[#26231E]">Mo – Fr, 9:00 – 18:00 Uhr</span>
                  <span className="mt-0.5 block text-sm text-[#6B655B]">
                    Termine nach Vereinbarung – bei uns oder bei Ihnen im Betrieb.
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leistungen mit Preisen */}
      <section
        id="leistungen-bs"
        className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pb-[90px] pt-[90px] sm:px-8"
      >
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Leistungen & Preise
                </span>
              </div>
              <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
                Vier Leistungen, klare Einstiegspreise.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
              Jede Leistung hat ihre eigene Seite mit Preisen, Ablauf und häufigen Fragen – damit
              Sie vor dem ersten Gespräch schon wissen, woran Sie sind.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leistungen.map((leistung, i) => (
            <Reveal
              key={leistung.number}
              delay={(i % 2) * 0.12}
              className={i % 2 === 1 ? "md:translate-y-8" : undefined}
            >
              <div className="group flex h-full flex-col gap-3.5 rounded-xl border border-[#E8E4DC] bg-white p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_20px_48px_rgba(20,18,16,0.1)]">
                <div className="flex items-center justify-between">
                  <span className="font-expanded text-[15px] font-extrabold text-[#FBB800] transition-colors group-hover:text-[#F28C00]">
                    {leistung.number}
                  </span>
                  <span className="rounded-full bg-[#F2EFE9] px-3 py-1 text-[13px] font-bold text-[#A05F00]">
                    {leistung.preis}
                  </span>
                </div>
                <h3 className="m-0 text-[23px] font-bold text-[#26231E]">{leistung.title}</h3>
                <p className="m-0 flex-1 text-base leading-[1.6] text-[#6B655B]">{leistung.text}</p>
                <Link
                  href={leistung.linkHref}
                  className="text-[15px] font-semibold text-[#A05F00] transition-colors hover:text-[#F28C00]"
                >
                  {leistung.linkLabel}{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Referenzen – echte Projekte aus Braunschweig */}
      <ReferencesSection />

      {/* Region */}
      <section className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 py-[100px] sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-[34px] bg-[#F28C00]" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                Braunschweig & Region
              </span>
            </div>
            <h2 className="font-expanded m-0 mb-5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
              Lokal heißt bei uns: Wir kommen vorbei.
            </h2>
            <div className="flex flex-col gap-4 text-[17px] leading-[1.7] text-[#6B655B]">
              <p className="m-0">
                Das Erstgespräch machen wir gerne bei Ihnen im Betrieb – da sehen wir Ihre Abläufe
                gleich in echt. Von Braunschweig aus sind wir schnell in der ganzen Region, und
                wer mag, kommt bei uns am Rischbleek vorbei.
              </p>
              <p className="m-0">
                Und danach? Bleiben die Wege kurz. Wenn etwas klemmt, sprechen Sie mit den Leuten,
                die Ihr Projekt gebaut haben – nicht mit einer Hotline. Projekte außerhalb der
                Region betreuen wir genauso, dann eben per Video.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-3 lg:pt-[76px]">
            {staedte.map((stadt) => (
              <span
                key={stadt}
                className={`rounded-lg border px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                  stadt === "Braunschweig"
                    ? "border-[#FBB800] bg-[#FBB800] text-[#141210]"
                    : "border-[#E8E4DC] bg-white text-[#26231E] hover:border-[#FBB800] hover:text-[#A05F00]"
                }`}
              >
                {stadt}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <FaqSection
        items={bsFaqs}
        eyebrow="Häufige Fragen"
        title="Digitalagentur in Braunschweig: Was Sie wissen möchten."
      />

      <ContactCta />
      <LandingFooter />
    </div>
  );
}
