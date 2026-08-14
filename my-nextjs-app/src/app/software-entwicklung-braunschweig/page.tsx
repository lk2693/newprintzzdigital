import Image from "next/image";
import Link from "next/link";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import CaseStudySection from "@/components/landing/CaseStudySection";
import FaqSection from "@/components/landing/FaqSection";
import ContactCta from "@/components/landing/ContactCta";
import { Reveal } from "@/components/landing/motion";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";

const softwareFaqs = [
  {
    question: "Was kostet individuelle Software?",
    answer:
      "Eine kompakte Web-Anwendung startet bei 5.000 €, komplexere Lösungen bei 10.000 €. Wir starten bewusst klein: erst die Version mit den Funktionen, die Ihnen sofort Arbeit abnehmen – erweitert wird, wenn sie sich bewährt hat. Nach dem Erstgespräch bekommen Sie ein Festpreis-Angebot, transparent aufgeschlüsselt.",
  },
  {
    question: "Lohnt sich Individual-Software für einen kleinen Betrieb überhaupt?",
    answer:
      "Nicht immer – und das sagen wir Ihnen auch. Wenn ein fertiges Tool Ihr Problem löst, empfehlen wir das fertige Tool. Individual-Software lohnt sich, wenn Ihre Abläufe speziell sind, Sie in mehreren Programmen doppelt pflegen oder die Lizenzkosten Jahr für Jahr steigen. Genau das klären wir im kostenlosen Erstgespräch.",
  },
  {
    question: "App fürs Handy: nativ oder Progressive Web App?",
    answer:
      "Für die meisten Projekte ist eine PWA die bessere Wahl: Sie läuft auf iOS und Android, braucht keinen App-Store und aktualisiert sich sofort – so haben wir auch die Stadt-App „Deine City of Lions“ für Braunschweig gebaut. Eine native App lohnt sich erst, wenn Sie spezielle Hardware-Funktionen brauchen.",
  },
  {
    question: "Mit welchen Technologien arbeitet ihr?",
    answer:
      "React, Next.js und TypeScript im Frontend, Node.js und Python im Backend, PostgreSQL und Supabase für Daten. Bewusst keine Exoten: Diese Technologien sind bewährt, gut dokumentiert und es gibt viele Entwickler dafür – Sie machen sich also nicht von uns abhängig.",
  },
  {
    question: "Bin ich später an euch gebunden?",
    answer:
      "Nein. Wir bauen mit offenen Standard-Technologien und sauber dokumentiertem Code – jeder fähige Entwickler kann das Projekt übernehmen. Wir möchten, dass Sie bleiben, weil die Zusammenarbeit gut ist, nicht weil ein Wechsel unmöglich wäre.",
  },
  {
    question: "Was passiert nach dem Launch?",
    answer:
      "Software ist nie „fertig“: Auf Wunsch übernehmen wir Hosting, Monitoring, Updates und Weiterentwicklung. Und weil wir in Braunschweig sitzen, sind wir bei Problemen auch mal persönlich bei Ihnen – nicht nur per Ticketsystem.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Software-Entwicklung Braunschweig",
  "description":
    "Individuelle Software-Entwicklung in Braunschweig: Web-Anwendungen, Progressive Web Apps, Schnittstellen und Automatisierung. Von der Agentur hinter der Stadt-App „Deine City of Lions“. Projekte ab 5.000 €.",
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
  "serviceType": "Software-Entwicklung",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "5000",
    "priceCurrency": "EUR",
  },
};

const leistungen = [
  {
    number: "01",
    title: "Progressive Web Apps",
    text: "Apps ohne App-Store-Hürde: ein Klick, installiert, immer aktuell – auf iOS und Android. So haben wir „Deine City of Lions“ für Braunschweig gebaut, mit Live-Parkplätzen, ÖPNV und Buchungen.",
    linkLabel: "Zur Case Study",
    linkHref: "#case",
  },
  {
    number: "02",
    title: "Web-Anwendungen & Portale",
    text: "Buchungssysteme, Kundenportale, interne Dashboards: Software, die im Browser läuft und Ihre Excel-Listen ablöst – wie der Veranstaltungskalender mit Mitgliederbereich für den Kulturrat Braunschweig.",
    linkLabel: "Referenzen ansehen",
    linkHref: "/portfolio",
  },
  {
    number: "03",
    title: "Schnittstellen & Automatisierung",
    text: "Ihre Warenwirtschaft, Kasse, Kalender und Website reden nicht miteinander? Wir verbinden sie – und automatisieren die Handarbeit, die Sie jede Woche Stunden kostet.",
    linkLabel: "Mehr zur Automatisierung",
    linkHref: "/leistungen/automatisierung",
  },
  {
    number: "04",
    title: "KI-Integration",
    text: "Chatbots, die Kundenfragen wirklich beantworten, Texterkennung für Ihre Belege, Auswertungen aus Ihren Daten – KI dort, wo sie messbar Zeit spart, nicht als Buzzword.",
    linkLabel: "KI-Anwendungen entdecken",
    linkHref: "/ki-anwendungen-braunschweig",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Supabase",
  "Vercel / AWS",
];

const pakete = [
  {
    name: "Web-App / MVP",
    preis: "ab 5.000 €",
    fuer: "Der übliche Einstieg: die kleinste Version, die Ihnen sofort Arbeit abnimmt.",
    leistungen: [
      "Eine Kernfunktion, sauber umgesetzt – z. B. Buchung, Verwaltung oder Portal",
      "Läuft im Browser, auf jedem Gerät",
      "Klickbarer Prototyp vor der Entwicklung",
      "Erweiterbar, wenn es sich bewährt",
    ],
    highlight: true,
  },
  {
    name: "Individuelle Software",
    preis: "ab 10.000 €",
    fuer: "Für komplexere Anforderungen: mehrere Nutzerrollen, Schnittstellen, Datenmigration.",
    leistungen: [
      "Mehrere Module und Nutzerrollen",
      "Anbindung an Ihre bestehenden Systeme",
      "Übernahme Ihrer Alt-Daten",
      "Entwicklung in Etappen mit festen Meilensteinen",
    ],
    highlight: false,
  },
  {
    name: "Betrieb & Weiterentwicklung",
    preis: "nach Umfang",
    fuer: "Damit Ihre Software läuft und mitwächst – monatliche Pauschale statt Überraschungen.",
    leistungen: [
      "Hosting, Monitoring und Sicherheits-Updates",
      "Feste Reaktionszeiten bei Problemen",
      "Laufende Weiterentwicklung nach Prioritäten",
      "Ansprechpartner vor Ort in Braunschweig",
    ],
    highlight: false,
  },
];

const prozess = [
  {
    number: "01",
    title: "Erstgespräch – kostenlos",
    text: "Sie beschreiben Ihren Ablauf, wir hören zu. Und wir sagen ehrlich, ob sich Individual-Software lohnt – oder ob ein fertiges Tool Ihr Problem günstiger löst.",
  },
  {
    number: "02",
    title: "Konzept & Prototyp",
    text: "Bevor viel Geld fließt, sehen Sie einen klickbaren Prototyp. So merken wir früh, was fehlt – nicht erst nach Monaten Entwicklung.",
  },
  {
    number: "03",
    title: "Entwicklung in Etappen",
    text: "Alle ein bis zwei Wochen sehen Sie den echten Stand und testen selbst. Prioritäten dürfen sich ändern – das ist eingeplant, kein Problem.",
  },
  {
    number: "04",
    title: "Launch & Betrieb",
    text: "Wir bringen die Software live und bleiben dran: Hosting, Monitoring, Weiterentwicklung. Bei Fragen sind wir da – auch persönlich vor Ort.",
  },
];

export default function SoftwareEntwicklungPage() {
  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      <div aria-hidden className="landing-grain" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(softwareFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://www.printzzdigital.de" },
              {
                name: "Software-Entwicklung Braunschweig",
                url: "https://www.printzzdigital.de/software-entwicklung-braunschweig",
              },
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
                  Software-Entwicklung · Braunschweig
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-expanded m-0 text-[36px] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[46px] lg:text-[54px]">
                Software aus Braunschweig,{" "}
                <span className="text-[#A05F00]">die eine ganze Stadt nutzt.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="m-0 max-w-[560px] text-[19px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Mit „Deine City of Lions“ haben wir die offizielle Stadt-App für Braunschweig
                entwickelt – gemeinsam mit Stadtmarketing, BLSK und Propstei. Dieselbe Sorgfalt
                stecken wir in Software für Unternehmen: Web-Apps, Buchungssysteme und interne
                Tools, die Excel-Listen und Zettelwirtschaft ablösen. Ab 5.000 €.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/contact"
                  className="rounded-md bg-[#FBB800] px-7 py-[15px] text-base font-bold text-[#141210] transition-all hover:-translate-y-0.5 hover:bg-[#F28C00] hover:shadow-[0_12px_28px_rgba(251,184,0,0.4)] active:translate-y-0"
                >
                  Projekt besprechen
                </Link>
                <a
                  href="#case"
                  className="rounded-md border border-[#C9C2B4] px-7 py-[15px] text-base font-semibold text-[#26231E] transition-all hover:-translate-y-0.5 hover:border-[#FBB800] hover:text-[#A05F00] active:translate-y-0"
                >
                  Case Study: die Stadt-App
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

          {/* Echte Referenz: Kulturrat-Plattform */}
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
                    Kulturplattform · Mitgliederbereich
                  </span>
                </div>
                <Image
                  src="/assets/ref-kulturrat-v2.png"
                  alt="Digitale Plattform des Kulturrats Braunschweig – Software-Entwicklung von PrintzzDigital"
                  width={2620}
                  height={1638}
                  priority
                  className="block h-auto w-full"
                />
              </div>
              <p className="mt-3 text-center text-sm text-[#7A7365]">
                Plattform mit Veranstaltungskalender und Mitgliederbereich für den Kulturrat
                Braunschweig
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Was wir bauen */}
      <section className="mx-auto max-w-[1200px] px-5 pb-[90px] pt-[90px] sm:px-8">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Was wir bauen
                </span>
              </div>
              <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
                Software, die Arbeit abnimmt – nicht macht.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
              Kein Projekt beginnt bei uns mit Technik, sondern mit Ihrem Ablauf: Was kostet Sie
              jede Woche Zeit? Genau dort setzen wir an.
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
                  <span className="h-0.5 w-8 origin-left scale-x-0 bg-[#FBB800] transition-transform duration-300 group-hover:scale-x-100" />
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

      {/* Case Study: City of Lions */}
      <CaseStudySection />

      {/* Tech-Stack */}
      <section className="border-b border-[#E8E4DC]">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 py-[90px] sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Technologie
                </span>
              </div>
              <h2 className="font-expanded m-0 mb-5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
                Bewährt schlägt trendig.
              </h2>
              <p className="m-0 text-[17px] leading-[1.7] text-[#6B655B] [text-wrap:pretty]">
                Wir wählen Technologien nicht nach Hype, sondern danach, ob sie in fünf Jahren noch
                wartbar sind. Alles, was wir einsetzen, ist offen, gut dokumentiert und weit
                verbreitet – Ihr Projekt hängt also nie an einem exotischen System oder an uns als
                einzigem Anbieter, der es versteht.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 lg:pt-[76px]">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#E8E4DC] bg-white px-4 py-2.5 font-mono text-[15px] font-semibold text-[#26231E] transition-colors hover:border-[#FBB800] hover:text-[#A05F00]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="scroll-mt-20 border-b border-[#E8E4DC] bg-[#F2EFE9]">
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
                  Was Software bei uns kostet.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Software-Preise hängen vom Umfang ab – aber „kommt drauf an“ hilft Ihnen nicht
                weiter. Deshalb: unsere Einstiegspreise, ehrlich benannt.
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
                      Der übliche Einstieg
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
                    {paket.leistungen.map((punkt) => (
                      <li
                        key={punkt}
                        className="flex gap-3 text-[15px] leading-[1.55] text-[#26231E]"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[#FBB800]" />
                        {punkt}
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
            Erst verstehen, dann bauen – in Etappen statt Blindflug.
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

      {/* Wer dahinter steckt */}
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
              Entwickler, mit denen Sie direkt sprechen.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5 text-[17px] leading-[1.7] text-[#6B655B]">
              <p className="m-0">
                Bei großen IT-Beratungen sprechen Sie mit Vertrieblern, Projektleitern und
                Account-Managern – nur selten mit denen, die Ihre Software bauen. Bei uns ist das
                anders: PrintzzDigital sitzt am Rischbleek 6 in Braunschweig, und am Tisch sitzen
                die Entwickler selbst. Kurze Wege, schnelle Entscheidungen, keine
                Stille-Post-Effekte.
              </p>
              <p className="m-0">
                Was wir können, sehen Sie am besten an dem, was läuft: die{" "}
                <a
                  href="https://www.deinecityoflions.de"
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                >
                  Stadt-App für Braunschweig
                </a>
                , die Plattform des Kulturrats und weitere Projekte im{" "}
                <Link
                  href="/portfolio"
                  className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                >
                  Portfolio
                </Link>
                . Wenn es „nur“ eine richtig gute Website sein soll:{" "}
                <Link
                  href="/webdesign-braunschweig"
                  className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                >
                  Webdesign in Braunschweig
                </Link>{" "}
                machen wir auch – ab 1.500 €.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        items={softwareFaqs}
        eyebrow="Häufige Fragen"
        title="Software-Entwicklung: Was Sie wissen möchten."
      />

      <ContactCta />
      <LandingFooter />
    </div>
  );
}
