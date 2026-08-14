import Image from "next/image";
import Link from "next/link";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import ReferencesSection from "@/components/landing/ReferencesSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactCta from "@/components/landing/ContactCta";
import { Reveal } from "@/components/landing/motion";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";

const webdesignFaqs = [
  {
    question: "Was kostet eine Website in Braunschweig?",
    answer:
      "Eine kompakte Website (Onepager) startet bei 1.500 €, eine Unternehmens-Website mit mehreren Unterseiten und CMS bei 2.500 €, Online-Shops und individuelle Projekte bei 5.000 €. Nach dem kostenlosen Erstgespräch bekommen Sie einen Festpreis – und der gilt dann auch.",
  },
  {
    question: "Wie lange dauert es, bis meine Website online ist?",
    answer:
      "Eine typische Unternehmens-Website ist in 4–8 Wochen live, ein kompakter Onepager oft schneller. Den ersten Design-Entwurf sehen Sie meist schon nach etwa einer Woche – direkt im Browser, nicht als PDF.",
  },
  {
    question: "Baut ihr mit WordPress?",
    answer:
      "Nein. Wir entwickeln mit Next.js und React – damit laden unsere Websites in unter einer Sekunde und es gibt keine Plugin-Updates, die man vergessen kann, und deutlich weniger Angriffsfläche für Hacker. Wenn Sie Inhalte selbst pflegen möchten, binden wir ein modernes CMS an – das können Sie ohne Technikkenntnisse bedienen.",
  },
  {
    question: "Kann ich Texte und Bilder später selbst ändern?",
    answer:
      "Ja, wenn Sie das möchten. Wir richten Ihnen ein CMS ein, in dem Sie Texte, Bilder, Öffnungszeiten oder Speisekarten selbst pflegen – ohne Programmierkenntnisse. Alternativ übernehmen wir die Pflege für Sie.",
  },
  {
    question: "Was passiert mit meiner alten Website?",
    answer:
      "Wir kümmern uns um den kompletten Umzug: Inhalte, Domain und E-Mail-Adressen bleiben erhalten. Wichtig für Google: Alte Adressen leiten wir sauber auf die neuen Seiten weiter, damit bestehende Rankings nicht verloren gehen.",
  },
  {
    question: "Werde ich mit der neuen Website bei Google gefunden?",
    answer:
      "Die technische Basis – Ladezeit, Struktur, lokale Suchbegriffe für Braunschweig – bauen wir von Anfang an ein. Ehrlich gesagt: Rankings wachsen über Wochen und Monate, nicht über Nacht. Wer Ihnen Platz 1 in zwei Wochen verspricht, verspricht zu viel. Wir zeigen Ihnen stattdessen, was realistisch ist und woran wir es messen.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Webdesign Braunschweig",
  "description":
    "Webdesign und Website-Erstellung in Braunschweig: handgebaute Websites mit Next.js, Ladezeit unter einer Sekunde, lokale Suchmaschinenoptimierung. Festpreise ab 1.500 €.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "PrintzzDigital",
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
  "serviceType": "Webdesign",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "1500",
    "priceCurrency": "EUR",
  },
};

const pakete = [
  {
    name: "Kompakt",
    preis: "ab 1.500 €",
    fuer: "Für Handwerk, Praxis und Gastronomie: alles Wichtige auf einer Seite.",
    leistungen: [
      "Onepager mit allen Infos: Leistungen, Kontakt, Anfahrt, Öffnungszeiten",
      "Für Google Braunschweig optimiert",
      "Ladezeit unter einer Sekunde",
      "Impressum & Datenschutz inklusive",
    ],
    highlight: false,
  },
  {
    name: "Unternehmens-Website",
    preis: "ab 2.500 €",
    fuer: "Der Standard für die meisten Betriebe: mehrere Seiten, selbst pflegbar.",
    leistungen: [
      "Mehrere Unterseiten (Leistungen, Team, Referenzen …)",
      "CMS – Texte und Bilder selbst pflegen",
      "Lokale SEO-Optimierung für Braunschweig und Region",
      "In 4–8 Wochen live, Festpreis nach Erstgespräch",
    ],
    highlight: true,
  },
  {
    name: "Shop & Individuell",
    preis: "ab 5.000 €",
    fuer: "Wenn es mehr sein soll: verkaufen, buchen, reservieren.",
    leistungen: [
      "Online-Shop oder Buchungs- / Reservierungssystem",
      "Anbindung an Ihre Warenwirtschaft oder Kasse",
      "Auch als PWA – wie unsere Stadt-App für Braunschweig",
      "Individuelle Kalkulation, transparent aufgeschlüsselt",
    ],
    highlight: false,
  },
];

const arbeitsweise = [
  {
    number: "01",
    title: "Handgebaut statt Baukasten",
    text: "Kein WordPress-Template, kein Baukasten-Look. Wir entwickeln mit Next.js und React – dadurch gibt es keine Plugin-Updates, die man vergessen kann, und deutlich weniger Angriffsfläche für Hacker.",
  },
  {
    number: "02",
    title: "Schnell ist bei uns Standard",
    text: "Unter einer Sekunde Ladezeit, Lighthouse-Score 95+. Das ist kein bezahltes Extra, sondern die Basis – weil Google und Ihre Besucher genau das honorieren.",
  },
  {
    number: "03",
    title: "In Braunschweig zu Hause",
    text: "Rischbleek 6, 38126 Braunschweig. Erstgespräch bei Ihnen im Betrieb oder bei uns – auch in Wolfsburg, Salzgitter, Gifhorn und Peine sind wir schnell vor Ort.",
  },
];

const prozess = [
  {
    number: "01",
    title: "Erstgespräch – kostenlos",
    text: "Bei Ihnen im Betrieb, bei uns oder per Video. Sie erzählen, wir hören zu – und Sie bekommen eine ehrliche Einschätzung samt Festpreis. Kein Verkaufsgespräch.",
  },
  {
    number: "02",
    title: "Erster Entwurf",
    text: "Nach etwa einer Woche sehen Sie den ersten Design-Entwurf – direkt im Browser auf Ihrem Handy und Rechner, nicht als PDF-Skizze.",
  },
  {
    number: "03",
    title: "Feedback & Umsetzung",
    text: "Wir bauen, Sie geben Feedback in kurzen Runden. Änderungen sind in dieser Phase normal und eingeplant – bis es wirklich passt.",
  },
  {
    number: "04",
    title: "Launch & danach",
    text: "Domain, Hosting, Google Search Console: übernehmen wir. Und wenn Sie möchten, bleiben wir auch nach dem Launch dran – mit Wartung und Weiterentwicklung.",
  },
];

export default function WebdesignBraunschweigPage() {
  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      <div aria-hidden className="landing-grain" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(webdesignFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://printzzdigital.com" },
              { name: "Webdesign Braunschweig", url: "https://printzzdigital.com/webdesign-braunschweig" },
            ])
          ),
        }}
      />

      <LandingHeader />

      {/* Hero */}
      <section id="inhalt" className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5F1E8]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20 lg:pt-[80px]">
          <div className="flex flex-col gap-[26px]">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Webdesign · Braunschweig
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-expanded m-0 text-[36px] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[46px] lg:text-[54px]">
                Webdesign aus Braunschweig –{" "}
                <span className="text-[#A05F00]">Websites, die man hier kennt.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="m-0 max-w-[560px] text-[19px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Die Stadt-App „Deine City of Lions“, die Website vom Meisterbetrieb Jordan, das
                Ristorante il Capriccio: Vieles, was Sie in Braunschweig digital nutzen, haben wir
                gebaut. Ihre Website kann das nächste Projekt sein – handgemacht, in unter einer
                Sekunde geladen, ab 1.500 €.
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
                  href="#preise"
                  className="rounded-md border border-[#C9C2B4] px-7 py-[15px] text-base font-semibold text-[#26231E] transition-all hover:-translate-y-0.5 hover:border-[#FBB800] hover:text-[#A05F00] active:translate-y-0"
                >
                  Was kostet das?
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

          {/* Echte Referenz statt Mockup */}
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
              <div className="relative overflow-hidden rounded-xl border border-[#E8E4DC] bg-white shadow-[0_30px_60px_rgba(38,35,30,0.18)]">
                <div className="flex items-center gap-2 border-b border-[#E8E4DC] bg-[#FAF9F6] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8E4DC]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8E4DC]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FBB800]" />
                  <span className="ml-3 rounded bg-white px-3 py-0.5 font-mono text-xs text-[#7A7365]">
                    jordan24.de
                  </span>
                </div>
                <Image
                  src="/assets/ref-jordan-v2.png"
                  alt="Website der Jordan GmbH aus Braunschweig – Webdesign von PrintzzDigital"
                  width={2162}
                  height={1650}
                  priority
                  className="block h-auto w-full"
                />
              </div>
              <p className="mt-3 text-center text-sm text-[#7A7365]">
                Umgesetzt für die Jordan GmbH, Meisterbetrieb aus Braunschweig
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="mx-auto max-w-[1200px] px-5 pb-[90px] pt-[90px] sm:px-8">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  So arbeiten wir
                </span>
              </div>
              <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
                Drei Dinge, die uns von der Masse unterscheiden.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
              Webdesign-Agenturen gibt es viele. Deshalb sagen wir lieber konkret, wie wir bauen –
              und Sie entscheiden, ob das zu Ihnen passt.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {arbeitsweise.map((punkt, i) => (
            <Reveal key={punkt.number} delay={i * 0.12}>
              <div className="group flex h-full flex-col gap-3.5 rounded-xl border border-[#E8E4DC] bg-white p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_20px_48px_rgba(20,18,16,0.1)]">
                <div className="flex items-center justify-between">
                  <span className="font-expanded text-[15px] font-extrabold text-[#FBB800] transition-colors group-hover:text-[#F28C00]">
                    {punkt.number}
                  </span>
                  <span className="h-0.5 w-8 origin-left scale-x-0 bg-[#FBB800] transition-transform duration-300 group-hover:scale-x-100" />
                </div>
                <h3 className="m-0 text-[22px] font-bold text-[#26231E]">{punkt.title}</h3>
                <p className="m-0 flex-1 text-base leading-[1.6] text-[#6B655B]">{punkt.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="scroll-mt-20 border-y border-[#E8E4DC] bg-[#F2EFE9]">
        <div className="mx-auto max-w-[1200px] px-5 py-[100px] sm:px-8">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                    Preise
                  </span>
                </div>
                <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
                  Was eine Website bei uns kostet.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Keine „Preis auf Anfrage“-Spielchen: Das sind unsere Einstiegspreise. Nach dem
                Erstgespräch bekommen Sie einen Festpreis – und der gilt.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pakete.map((paket, i) => (
              <Reveal key={paket.name} delay={i * 0.12}>
                <div
                  className={`relative flex h-full flex-col gap-5 rounded-xl border bg-white p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(20,18,16,0.1)] ${
                    paket.highlight ? "border-[#FBB800]" : "border-[#E8E4DC] hover:border-[#FBB800]"
                  }`}
                >
                  {paket.highlight && (
                    <span className="absolute -top-3.5 left-9 rounded-full bg-[#FBB800] px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-[#141210]">
                      Am häufigsten gewählt
                    </span>
                  )}
                  <div>
                    <h3 className="m-0 text-[20px] font-bold text-[#26231E]">{paket.name}</h3>
                    <div className="font-expanded mt-2 text-[34px] font-extrabold tracking-[-0.01em] text-[#26231E]">
                      {paket.preis}
                    </div>
                    <p className="m-0 mt-2 text-[15px] leading-[1.55] text-[#6B655B]">
                      {paket.fuer}
                    </p>
                  </div>
                  <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-0">
                    {paket.leistungen.map((leistung) => (
                      <li key={leistung} className="flex gap-3 text-[15px] leading-[1.55] text-[#26231E]">
                        <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[#FBB800]" />
                        {leistung}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`rounded-md px-6 py-3.5 text-center text-[15px] font-bold transition-all hover:-translate-y-0.5 active:translate-y-0 ${
                      paket.highlight
                        ? "bg-[#FBB800] text-[#141210] hover:bg-[#F28C00] hover:shadow-[0_12px_28px_rgba(251,184,0,0.4)]"
                        : "border border-[#C9C2B4] text-[#26231E] hover:border-[#FBB800] hover:text-[#A05F00]"
                    }`}
                  >
                    Unverbindlich anfragen
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Referenzen – echte Projekte aus Braunschweig */}
      <ReferencesSection />

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
            Vom ersten Kaffee bis zum Launch.
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

      {/* Über uns, lokal & konkret */}
      <section className="border-t border-[#E8E4DC]">
        <div className="mx-auto max-w-[900px] px-5 py-[90px] sm:px-8">
          <Reveal>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-[34px] bg-[#F28C00]" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                Wer dahinter steckt
              </span>
            </div>
            <h2 className="font-expanded m-0 mb-8 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
              Eine Agentur aus Braunschweig – keine anonyme Web-Fabrik.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5 text-[17px] leading-[1.7] text-[#6B655B]">
              <p className="m-0">
                PrintzzDigital sitzt am Rischbleek 6 in Braunschweig. Zusammen mit dem Stadtmarketing,
                der BLSK und der Propstei haben wir „Deine City of Lions“ gebaut – die offizielle
                Stadt-App, über die die Braunschweiger Zeitung und regionalHeute.de berichtet haben.
                Daneben betreuen wir Handwerksbetriebe, Restaurants und Institutionen aus der Region:
                vom{" "}
                <Link href="/portfolio" className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]">
                  Meisterbetrieb bis zur Kulturplattform
                </Link>
                .
              </p>
              <p className="m-0">
                Das heißt für Sie: Wenn Sie anrufen, sprechen Sie mit den Leuten, die Ihre Website
                tatsächlich bauen. Termine machen wir persönlich – in Braunschweig, Wolfsburg,
                Salzgitter, Gifhorn oder Peine. Und wenn Sie mehr brauchen als eine Website, etwa{" "}
                <Link href="/software-entwicklung-braunschweig" className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]">
                  individuelle Software
                </Link>{" "}
                oder{" "}
                <Link href="/ki-anwendungen-braunschweig" className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]">
                  KI-Anwendungen
                </Link>
                , sind wir auch dafür die richtigen Ansprechpartner.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        items={webdesignFaqs}
        eyebrow="Häufige Fragen"
        title="Webdesign in Braunschweig: Was Sie wissen möchten."
      />

      <ContactCta />
      <LandingFooter />
    </div>
  );
}
