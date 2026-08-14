import Image from "next/image";
import Link from "next/link";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import FaqSection from "@/components/landing/FaqSection";
import ContactCta from "@/components/landing/ContactCta";
import { Reveal } from "@/components/landing/motion";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";

const druckFaqs = [
  {
    question: "Welche Druckdaten braucht ihr von mir?",
    answer:
      "Ideal ist ein PDF mit 3 mm Beschnitt – aber machen Sie sich keinen Kopf: Wir prüfen jede Datei vor dem Druck kostenlos und melden uns, wenn etwas nicht passt. Und wenn Sie nur ein Word-Dokument oder eine Canva-Datei haben, kriegen wir auch das hin.",
  },
  {
    question: "Was kosten Drucksachen bei euch?",
    answer:
      "Ehrliche Antwort: Das hängt an Auflage, Papier und Veredelung – eine Preisliste, die alle Fälle abdeckt, wäre gelogen. Deshalb machen wir es anders: Sie sagen uns kurz, was Sie brauchen, und bekommen einen konkreten Preis statt eines Konfigurator-Dschungels.",
  },
  {
    question: "Lohnt sich das auch für kleine Auflagen?",
    answer:
      "Ja – genau dafür ist Digitaldruck da. Visitenkarten gibt es ab 100 Stück, Flyer und Plakate auch in kleinen Stückzahlen, ohne die Einrichtungskosten einer klassischen Offset-Druckerei. Sie müssen also nicht 5.000 Flyer bestellen, wenn Sie 250 brauchen.",
  },
  {
    question: "Wie schnell geht das?",
    answer:
      "Die meisten Produkte sind in wenigen Werktagen fertig. Wenn es brennt – Messe am Wochenende, Eröffnung nächste Woche – sprechen Sie uns direkt an: Vieles geht auch kurzfristig, das klären wir am Telefon ehrlicher als mit einem pauschalen Express-Versprechen.",
  },
  {
    question: "Könnt ihr die Drucksachen auch gestalten?",
    answer:
      "Ja, Grafik gehört bei uns zum Haus – die Printzz GmbH kommt aus Druck und Gestaltung. Von der Visitenkarte über den Katalog bis zum Messebanner gestalten wir alles selbst, auf Wunsch im gleichen Design wie Ihre Website.",
  },
  {
    question: "Kann ich meine Bestellung abholen?",
    answer:
      "Klar – am Rischbleek 6 in Braunschweig, dann entfällt der Versand. Wir liefern aber auch: in Braunschweig und Umgebung oder per Versand in ganz Deutschland.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digitaldruck Braunschweig",
  "description":
    "Digitaldruck in Braunschweig: Visitenkarten, Flyer, Broschüren, Plakate, Fahnen und Geschäftsausstattung – mit Gestaltung aus dem eigenen Haus und kostenlosem Druckdaten-Check.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "PrintzzDigital / Printzz GmbH",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rischbleek 6",
      "addressLocality": "Braunschweig",
      "postalCode": "38126",
      "addressCountry": "DE",
    },
    "telephone": "+49-531-70201786",
  },
  "areaServed": [
    { "@type": "City", "name": "Braunschweig" },
    { "@type": "City", "name": "Wolfsburg" },
    { "@type": "City", "name": "Salzgitter" },
    { "@type": "City", "name": "Gifhorn" },
    { "@type": "City", "name": "Peine" },
  ],
  "serviceType": "Digitaldruck",
};

const produkte = [
  {
    number: "01",
    title: "Visitenkarten",
    text: "Der Klassiker – auf Papieren, die man gerne in die Hand nimmt, auf Wunsch mit Veredelung.",
    specs: ["Ab 100 Stück", "Diverse Papiere und Grammaturen", "Veredelungen möglich"],
  },
  {
    number: "02",
    title: "Flyer & Folder",
    text: "Für Aktionen, Events und Auslagen – gefalzt, wie Sie es brauchen.",
    specs: ["DIN A7 bis A4", "Alle gängigen Falzarten", "Matt oder glänzend"],
  },
  {
    number: "03",
    title: "Broschüren & Kataloge",
    text: "Vom Imagefolder bis zum Produktkatalog – gebunden und sauber verarbeitet.",
    specs: ["Heft- oder Klebebindung", "8 bis 200+ Seiten", "Hochwertige Papiere"],
  },
  {
    number: "04",
    title: "Plakate & Großformat",
    text: "Wenn es auffallen soll: Großformatdruck für drinnen und draußen.",
    specs: ["Bis DIN A0", "Wetterfeste Materialien", "Fotorealistische Qualität"],
  },
  {
    number: "05",
    title: "Fahnen, Banner & Werbetechnik",
    text: "Für Messe, Laden und Vereinsheim – inklusive Zubehör.",
    specs: ["Individuelle Größen", "Roll-Ups und Beachflags", "Aufkleber mit Konturschnitt"],
  },
  {
    number: "06",
    title: "Geschäftsausstattung",
    text: "Briefpapier, Umschläge, Blöcke und Stempel – alles im gleichen Look.",
    specs: ["Passend zum Corporate Design", "Alle Formate", "Unkomplizierte Nachbestellung"],
  },
];

const prozess = [
  {
    number: "01",
    title: "Anfrage",
    text: "Sie sagen uns Produkt, Auflage und Wunschtermin – per Mail, Telefon oder persönlich. Zurück kommt ein konkreter Preis, keine Warteschleife.",
  },
  {
    number: "02",
    title: "Beratung zu Papier & Co.",
    text: "Welches Papier, welche Grammatur, lohnt sich Veredelung? Wir zeigen Muster – und raten auch mal zum günstigeren Material, wenn man den Unterschied nicht sieht.",
  },
  {
    number: "03",
    title: "Datencheck & Produktion",
    text: "Wir prüfen Ihre Druckdaten kostenlos, bevor gedruckt wird – fehlender Beschnitt fällt so am Bildschirm auf, nicht erst auf dem Papier. Ohne Daten? Wir gestalten.",
  },
  {
    number: "04",
    title: "Abholung oder Lieferung",
    text: "Abholen am Rischbleek 6, Lieferung in Braunschweig und Umgebung oder Versand deutschlandweit – wie es für Sie am besten passt.",
  },
];

export default function DigitaldruckPage() {
  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      <div aria-hidden className="landing-grain" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(druckFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://printzzdigital.com" },
              { name: "Digitaldruck Braunschweig", url: "https://printzzdigital.com/digitaldruck" },
            ])
          ),
        }}
      />

      <LandingHeader />

      {/* Hero */}
      <section id="inhalt" className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5F1E8]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-[80px]">
          <div className="flex flex-col gap-[26px]">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Digitaldruck · Braunschweig
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-expanded m-0 text-[36px] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[46px] lg:text-[54px]">
                Digitaldruck aus Braunschweig –{" "}
                <span className="text-[#A05F00]">da, wo Printzz herkommt.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="m-0 max-w-[560px] text-[19px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Bevor wir Websites und Apps gebaut haben, haben wir gedruckt – das steckt bis heute
                im Namen. Visitenkarten, Flyer, Kataloge, Plakate und Fahnen kommen bei uns aus
                einem Haus mit eigener Gestaltung: Sie bringen die Idee mit, wir kümmern uns um
                Papier, Daten und Druck.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/contact"
                  className="rounded-md bg-[#FBB800] px-7 py-[15px] text-base font-bold text-[#141210] transition-all hover:-translate-y-0.5 hover:bg-[#F28C00] hover:shadow-[0_12px_28px_rgba(251,184,0,0.4)] active:translate-y-0"
                >
                  Angebot anfragen
                </Link>
                <a
                  href="#produkte"
                  className="rounded-md border border-[#C9C2B4] px-7 py-[15px] text-base font-semibold text-[#26231E] transition-all hover:-translate-y-0.5 hover:border-[#FBB800] hover:text-[#A05F00] active:translate-y-0"
                >
                  Produkte ansehen
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <span className="text-sm text-[#7A7365]">
                Abholung am Rischbleek 6 · Beratung mit Papiermustern ·{" "}
                <a
                  href="tel:+4953170201786"
                  className="font-semibold text-[#6B655B] underline decoration-[#FBB800] decoration-2 underline-offset-4 transition-colors hover:text-[#A05F00]"
                >
                  0531 – 70 20 17 86
                </a>
              </span>
            </Reveal>
          </div>

          {/* Echte Drucksachen als Collage */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-[420px] pb-12 pt-4">
              <div
                aria-hidden
                className="absolute -inset-x-10 -inset-y-4"
                style={{
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(251,184,0,0.18), transparent 65%)",
                }}
              />
              {/* Fahne hinten rechts */}
              <div className="absolute right-0 top-0 w-[48%] rotate-[5deg] rounded-lg border border-[#E8E4DC] bg-white p-2.5 shadow-[0_16px_40px_rgba(38,35,30,0.14)]">
                <Image
                  src="/fahnen.png"
                  alt="Beachflags und Fahnen aus dem Digitaldruck von Printzz Braunschweig"
                  width={1024}
                  height={1536}
                  className="block h-auto w-full rounded-[4px]"
                />
              </div>
              {/* Plakat vorn links */}
              <div className="relative w-[60%] -rotate-[3deg] rounded-lg border border-[#E8E4DC] bg-white p-2.5 shadow-[0_24px_50px_rgba(38,35,30,0.18)]">
                <Image
                  src="/plakat.png"
                  alt="Großformat-Plakat, gedruckt bei Printzz in Braunschweig"
                  width={1024}
                  height={1536}
                  priority
                  className="block h-auto w-full rounded-[4px]"
                />
              </div>
              {/* Flyer unten rechts überlappend */}
              <div className="absolute -bottom-2 right-[6%] w-[44%] rotate-[7deg] rounded-lg border border-[#E8E4DC] bg-white p-2.5 shadow-[0_20px_44px_rgba(38,35,30,0.16)]">
                <Image
                  src="/flyer.png"
                  alt="Flyer aus dem Digitaldruck von Printzz Braunschweig"
                  width={1024}
                  height={1024}
                  className="block h-auto w-full rounded-[4px]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Produkte */}
      <section id="produkte" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pb-[90px] pt-[90px] sm:px-8">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Produkte
                </span>
              </div>
              <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
                Von der Visitenkarte bis zur Fahne.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
              Das Übliche und das Spezielle – und wenn Ihr Wunschprodukt nicht dabei ist, fragen
              Sie einfach: Meistens geht es doch.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {produkte.map((produkt, i) => (
            <Reveal key={produkt.number} delay={(i % 3) * 0.1}>
              <div className="group flex h-full flex-col gap-3.5 rounded-xl border border-[#E8E4DC] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_20px_48px_rgba(20,18,16,0.1)]">
                <div className="flex items-center justify-between">
                  <span className="font-expanded text-[15px] font-extrabold text-[#FBB800] transition-colors group-hover:text-[#F28C00]">
                    {produkt.number}
                  </span>
                  <span className="h-0.5 w-8 origin-left scale-x-0 bg-[#FBB800] transition-transform duration-300 group-hover:scale-x-100" />
                </div>
                <h3 className="m-0 text-[21px] font-bold text-[#26231E]">{produkt.title}</h3>
                <p className="m-0 text-[15px] leading-[1.6] text-[#6B655B]">{produkt.text}</p>
                <ul className="m-0 mt-auto flex list-none flex-col gap-2.5 p-0 pt-2">
                  {produkt.specs.map((spec) => (
                    <li key={spec} className="flex gap-3 text-[14px] leading-[1.5] text-[#26231E]">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-[#FBB800]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Druck + Digital aus einem Haus */}
      <section className="border-y border-[#E8E4DC] bg-[#F2EFE9]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-[100px] sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Druck + Digital
                </span>
              </div>
              <h2 className="font-expanded m-0 mb-5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
                Website und Visitenkarte aus einem Guss.
              </h2>
              <div className="flex flex-col gap-4 text-[17px] leading-[1.7] text-[#6B655B]">
                <p className="m-0">
                  Der stille Vorteil einer Druckerei, die auch Websites baut: Ihr Auftritt sieht
                  überall gleich aus. Logo, Farben und Schriften stimmen auf der Website, der
                  Visitenkarte und dem Messebanner überein – weil alles am selben Ort entsteht,
                  statt bei drei Dienstleistern, die nie miteinander reden.
                </p>
                <p className="m-0">
                  Viele Kunden starten mit Drucksachen und lassen später die{" "}
                  <Link
                    href="/webdesign-braunschweig"
                    className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                  >
                    Website
                  </Link>{" "}
                  dazu bauen – oder umgekehrt. Beides zusammen spart Abstimmung, Zeit und meistens
                  auch Geld.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-xl border border-[#E8E4DC] bg-white p-3 shadow-[0_24px_50px_rgba(38,35,30,0.12)]">
              <Image
                src="/designkit.png"
                alt="Design-Kit von Printzz: Logo, Farben und Schriften für Web und Druck"
                width={1344}
                height={768}
                className="block h-auto w-full rounded-lg"
              />
              <p className="m-0 px-3 pb-2 pt-3 text-center text-sm text-[#7A7365]">
                Ein Design-Kit für alles: Web, Visitenkarte, Briefpapier, Banner
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prozess */}
      <section className="mx-auto max-w-[1200px] px-5 py-[100px] sm:px-8">
        <Reveal>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-[34px] bg-[#F28C00]" />
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
              Der Ablauf
            </span>
          </div>
          <h2 className="font-expanded m-0 mb-14 max-w-[640px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
            Von der Anfrage bis zur Abholung.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {prozess.map((schritt, i) => (
            <Reveal key={schritt.number} delay={i * 0.12}>
              <div className="group flex h-full flex-col gap-3 border-t-[3px] border-[#FBB800] pt-6">
                <span className="font-expanded text-[15px] font-extrabold text-[#A05F00] transition-transform duration-300 group-hover:translate-x-1">
                  {schritt.number}
                </span>
                <h3 className="m-0 text-[20px] font-bold text-[#26231E]">{schritt.title}</h3>
                <p className="m-0 text-base leading-[1.6] text-[#6B655B]">{schritt.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        items={druckFaqs}
        eyebrow="Häufige Fragen"
        title="Digitaldruck: Was Sie wissen möchten."
      />

      <ContactCta />
      <LandingFooter />
    </div>
  );
}
