import Link from "next/link";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import FaqSection from "@/components/landing/FaqSection";
import ContactCta from "@/components/landing/ContactCta";
import { Reveal } from "@/components/landing/motion";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";

const kiFaqs = [
  {
    question: "Was kostet eine KI-Lösung für mein Unternehmen?",
    answer:
      "Ein Chatbot, der mit Ihrem Firmenwissen antwortet, startet bei 3.000 €. Umfassendere KI-Automatisierungen – etwa Dokumentenverarbeitung oder Datenauswertung – beginnen bei 8.000 €. Vorher gibt es ein kostenloses Erstgespräch, in dem wir ehrlich sagen, ob sich das für Ihren Fall rechnet.",
  },
  {
    question: "Brauche ich dafür große Datenmengen?",
    answer:
      "Nein. Für einen Chatbot reichen meist Ihre Website, Preislisten und ein paar interne Unterlagen – daraus baut die KI ihre Antworten. Eigene Trainingsdaten in großem Stil brauchen Sie erst für Spezialfälle, und dann sagen wir Ihnen das vorher.",
  },
  {
    question: "Was ist mit Datenschutz und DSGVO?",
    answer:
      "Das klären wir vor der Technik: Wir arbeiten mit Business-Schnittstellen, bei denen Ihre Daten nicht zum Training der Modelle verwendet werden, hosten in deutschen bzw. europäischen Rechenzentren – und wo das nicht reicht, setzen wir lokale Modelle ein, bei denen nichts Ihr Haus verlässt.",
  },
  {
    question: "Wie schnell ist so etwas einsatzbereit?",
    answer:
      "Ein Chatbot ist in 2–4 Wochen live, komplexere Automatisierungen brauchen 2–3 Monate. Wir starten immer mit einem kleinen Pilot mit echten Daten – so sehen Sie früh, ob es funktioniert, bevor Sie groß investieren.",
  },
  {
    question: "Ersetzt die KI meine Mitarbeiter?",
    answer:
      "Nein – und das versprechen wir auch nicht. KI nimmt die Routine ab: die zwanzigste gleiche Anfrage, das Abtippen von Belegen, das Zusammensuchen von Zahlen. Die Entscheidungen, das Fachwissen und der Kundenkontakt bleiben bei Ihren Leuten – die haben dafür dann mehr Zeit.",
  },
  {
    question: "Was, wenn die KI Unsinn erzählt?",
    answer:
      "Das Risiko ist real, deshalb bauen wir Leitplanken ein: Der Chatbot antwortet nur aus Ihren Unterlagen statt frei zu fantasieren, bei unklaren Fragen übergibt er an einen Menschen, und vor dem Livegang testen wir mit echten Kundenfragen. Nach dem Start schauen wir regelmäßig in die Antworten und schärfen nach.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "KI-Anwendungen Braunschweig",
  "description":
    "KI-Anwendungen für Unternehmen in Braunschweig: Chatbots mit eigenem Firmenwissen, Dokumentenverarbeitung, Automatisierung und Datenauswertung. DSGVO-konform, ab 3.000 €.",
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
  "serviceType": "KI-Anwendungen",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "3000",
    "priceCurrency": "EUR",
  },
};

const beispiele = [
  {
    zeit: "22:41 Uhr",
    text: "Ihr Chatbot beantwortet die Frage nach Öffnungszeiten und schickt den Link zur Terminbuchung. Sie erfahren es morgens aus der Zusammenfassung.",
  },
  {
    zeit: "Posteingang, montags",
    text: "30 Lieferscheine und Rechnungen. Die Texterkennung hat sie ausgelesen und sortiert, bevor der Kaffee durchgelaufen ist.",
  },
  {
    zeit: "Vor dem Termin",
    text: "„Wie liefen die letzten drei Monate im Vergleich?“ – Die Auswertung antwortet in Sekunden. Ohne Excel-Abend.",
  },
];

const leistungen = [
  {
    number: "01",
    title: "Chatbots mit Ihrem Wissen",
    text: "Kein Bla-Bla-Bot: Der Assistent antwortet aus Ihren Unterlagen – Preise, Leistungen, Abläufe – und übergibt an einen Menschen, wenn es knifflig wird. Auf Ihrer Website, rund um die Uhr.",
  },
  {
    number: "02",
    title: "Dokumente & Texterkennung",
    text: "Belege, Lieferscheine, Bewerbungen, E-Mail-Flut: KI liest aus, sortiert ein und legt ab – die Handarbeit fällt weg, die Kontrolle bleibt bei Ihnen.",
  },
  {
    number: "03",
    title: "Automatisierte Abläufe",
    text: "Anfrage rein, Angebot raus, Nachfassen nicht vergessen: Wir verketten Ihre Systeme zu Abläufen, die von allein laufen – KI übernimmt die Stellen, an denen bisher jemand tippen musste.",
    linkLabel: "Mehr zur Automatisierung",
    linkHref: "/leistungen/automatisierung",
  },
  {
    number: "04",
    title: "Auswertungen in Klartext",
    text: "Stellen Sie Ihre Fragen in normaler Sprache an Ihre eigenen Zahlen – Umsatz, Auslastung, Lager. Die Antwort kommt sofort, nicht erst nach dem nächsten Steuerberater-Termin.",
  },
];

const abraten = [
  {
    title: "Wenn der Ablauf selbst das Problem ist",
    text: "Ein chaotischer Prozess wird mit KI nur schneller chaotisch. Dann räumen wir erst den Ablauf auf – das ist oft die günstigere Hälfte der Lösung.",
  },
  {
    title: "Wenn ein einfaches Werkzeug reicht",
    text: "Nicht alles braucht ein Sprachmodell. Manchmal löst ein gutes Formular, eine Weiterleitung oder ein simples Skript das Problem – für ein Zehntel des Preises.",
  },
  {
    title: "Wenn der Datenschutz dagegen spricht",
    text: "Gehen sensible Daten nicht sicher unter – weder in deutsche Rechenzentren noch in ein lokales Modell – dann bauen wir die Lösung nicht. Auch wenn wir daran verdient hätten.",
  },
];

const pakete = [
  {
    name: "Potenzial-Check",
    preis: "kostenlos",
    fuer: "Der Anfang: Wir schauen auf Ihre Abläufe und sagen, wo KI etwas bringt – und wo nicht.",
    leistungen: [
      "Gespräch bei Ihnen im Betrieb oder per Video",
      "Konkrete Liste: Was lohnt sich, was nicht",
      "Ehrliche Einschätzung zu Kosten und Aufwand",
      "Kein Verkaufsdruck – Sie entscheiden danach",
    ],
    highlight: false,
    cta: "Termin ausmachen",
  },
  {
    name: "Chatbot & Assistent",
    preis: "ab 3.000 €",
    fuer: "Der übliche Einstieg: ein Assistent, der mit Ihrem Firmenwissen antwortet.",
    leistungen: [
      "Antwortet aus Ihren Unterlagen und Ihrer Website",
      "Übergabe an Menschen, wenn es knifflig wird",
      "In 2–4 Wochen live auf Ihrer Website",
      "DSGVO-konform, auf Wunsch deutsche Server",
    ],
    highlight: true,
    cta: "Unverbindlich anfragen",
  },
  {
    name: "KI-Automatisierung",
    preis: "ab 8.000 €",
    fuer: "Für wiederkehrende Arbeit im großen Stil: Dokumente, Workflows, Auswertungen.",
    leistungen: [
      "Pilot mit Ihren echten Daten vor der Investition",
      "Anbindung an CRM, Buchhaltung oder Warenwirtschaft",
      "Einführung gemeinsam mit Ihren Mitarbeitern",
      "Betrieb und Nachschärfen inklusive Absprache",
    ],
    highlight: false,
    cta: "Unverbindlich anfragen",
  },
];

const techStack = [
  "OpenAI GPT",
  "Anthropic Claude",
  "Lokale Modelle",
  "RAG",
  "pgvector",
  "Python",
  "Vercel AI SDK",
];

const prozess = [
  {
    number: "01",
    title: "Potenzial-Check – kostenlos",
    text: "Wir schauen uns Ihre Abläufe an und benennen konkret, wo KI Zeit spart. Und genauso konkret, wo sie es nicht tut.",
  },
  {
    number: "02",
    title: "Pilot mit echten Daten",
    text: "Bevor Sie groß investieren, bauen wir einen kleinen Testlauf mit Ihren echten Anfragen oder Dokumenten. Ergebnis nach Wochen, nicht Monaten.",
  },
  {
    number: "03",
    title: "Integration & Einführung",
    text: "Die Lösung wandert in Ihre Website, Ihr CRM oder Ihren Ablauf – und Ihre Mitarbeiter lernen, damit zu arbeiten. Ohne die geht es nämlich nicht.",
  },
  {
    number: "04",
    title: "Betrieb & Nachschärfen",
    text: "Wir schauen regelmäßig in die Antworten und Ergebnisse, justieren nach und halten die Lösung aktuell, wenn sich Ihr Geschäft ändert.",
  },
];

export default function KIAnwendungenPage() {
  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      <div aria-hidden className="landing-grain" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(kiFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://www.printzzdigital.de" },
              {
                name: "KI-Anwendungen Braunschweig",
                url: "https://www.printzzdigital.de/ki-anwendungen-braunschweig",
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
                  KI-Anwendungen · Braunschweig
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-expanded m-0 text-[36px] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[46px] lg:text-[54px]">
                KI-Anwendungen aus Braunschweig –{" "}
                <span className="text-[#A05F00]">ohne Buzzword-Bingo.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="m-0 max-w-[560px] text-[19px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Wir bauen KI dort ein, wo sie messbar Zeit spart: Chatbots, die aus Ihren
                Unterlagen antworten, Texterkennung für den Papierkram, Auswertungen auf Zuruf.
                Und wo KI nichts bringt, sagen wir es Ihnen – bevor es Geld kostet. DSGVO-konform,
                ab 3.000 €.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/contact"
                  className="rounded-md bg-[#FBB800] px-7 py-[15px] text-base font-bold text-[#141210] transition-all hover:-translate-y-0.5 hover:bg-[#F28C00] hover:shadow-[0_12px_28px_rgba(251,184,0,0.4)] active:translate-y-0"
                >
                  Kostenloser Potenzial-Check
                </Link>
                <a
                  href="#preise"
                  className="rounded-md border border-[#C9C2B4] px-7 py-[15px] text-base font-semibold text-[#26231E] transition-all hover:-translate-y-0.5 hover:border-[#FBB800] hover:text-[#A05F00] active:translate-y-0"
                >
                  Was kostet KI?
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <span className="text-sm text-[#7A7365]">
                Von den Entwicklern der Stadt-App{" "}
                <a
                  href="https://www.deinecityoflions.de"
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-[#6B655B] underline decoration-[#FBB800] decoration-2 underline-offset-4 transition-colors hover:text-[#A05F00]"
                >
                  „Deine City of Lions“
                </a>
              </span>
            </Reveal>
          </div>

          {/* Alltags-Beispiele statt Fake-Chat */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4">
              <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#7A7365]">
                So sieht das im Alltag aus
              </span>
              {beispiele.map((beispiel, i) => (
                <div
                  key={beispiel.zeit}
                  className={`rounded-xl border border-[#E8E4DC] bg-white p-6 shadow-[0_10px_30px_rgba(38,35,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FBB800] ${
                    i === 1 ? "lg:translate-x-6" : ""
                  }`}
                >
                  <span className="mb-1.5 block text-[13px] font-bold uppercase tracking-[0.08em] text-[#A05F00]">
                    {beispiel.zeit}
                  </span>
                  <p className="m-0 text-[15px] leading-[1.6] text-[#6B655B]">{beispiel.text}</p>
                </div>
              ))}
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
                Vier Dinge, die KI heute zuverlässig kann.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
              Keine Zukunftsversprechen: Alles hier läuft heute schon in Betrieben – und rechnet
              sich über gesparte Arbeitsstunden, nicht über Hoffnung.
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
                {leistung.linkHref && (
                  <Link
                    href={leistung.linkHref}
                    className="text-[15px] font-semibold text-[#A05F00] transition-colors hover:text-[#F28C00]"
                  >
                    {leistung.linkLabel}{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Wann wir abraten – dunkle Ehrlichkeits-Sektion */}
      <section className="bg-[#161310] text-[#FAF9F6]">
        <div className="mx-auto max-w-[1200px] px-5 py-[100px] sm:px-8">
          <Reveal>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-[34px] bg-[#FBB800]" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#FBB800]">
                Ehrlichkeit vorab
              </span>
            </div>
            <h2 className="font-expanded m-0 mb-6 max-w-[720px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] [text-wrap:balance] sm:text-[40px]">
              Drei Fälle, in denen wir Ihnen von KI abraten.
            </h2>
            <p className="m-0 mb-12 max-w-[620px] text-[17px] leading-[1.65] text-[#B8B2A6]">
              Gerade weil überall „KI“ draufsteht: Sie sollen bei uns nichts kaufen, was sich für
              Sie nicht rechnet. Das hier sagen wir Interessenten regelmäßig im Erstgespräch.
            </p>
          </Reveal>

          <div className="grid gap-3.5 md:grid-cols-3">
            {abraten.map((punkt, i) => (
              <Reveal key={punkt.title} delay={i * 0.1} y={20}>
                <div className="flex h-full flex-col gap-2 rounded-[10px] border border-[#353028] bg-[#221E18] px-[22px] py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FBB800]/60">
                  <strong className="text-base text-[#FBB800]">{punkt.title}</strong>
                  <span className="text-[15px] leading-[1.6] text-[#B8B2A6]">{punkt.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
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
                  Was KI bei uns kostet.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                KI-Projekte müssen sich über gesparte Arbeitszeit rechnen – deshalb rechnen wir
                Ihnen das im Erstgespräch konkret vor. Hier die Einstiegspreise.
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
                    {paket.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologie */}
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
                An kein Modell gekettet.
              </h2>
              <p className="m-0 text-[17px] leading-[1.7] text-[#6B655B] [text-wrap:pretty]">
                Der KI-Markt dreht sich schnell: Was heute das beste Modell ist, ist es in sechs
                Monaten vielleicht nicht mehr. Deshalb bauen wir Ihre Lösung so, dass das Modell
                dahinter austauschbar bleibt – wird etwas Besseres oder Günstigeres verfügbar,
                wechseln wir, ohne dass Sie neu bezahlen müssen. Und wo Ihre Daten besonders
                sensibel sind, laufen lokale Modelle direkt bei Ihnen.
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
            Klein anfangen, ehrlich messen, dann ausbauen.
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
              Software-Entwickler, die KI einbauen – nicht umgekehrt.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5 text-[17px] leading-[1.7] text-[#6B655B]">
              <p className="m-0">
                KI-Beratung gibt es gerade an jeder Ecke. Der Unterschied bei uns: Wir sind zuerst{" "}
                <Link
                  href="/software-entwicklung-braunschweig"
                  className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                >
                  Software-Entwickler
                </Link>{" "}
                – mit der Stadt-App „Deine City of Lions“ und Projekten für Betriebe aus der
                Region im{" "}
                <Link
                  href="/portfolio"
                  className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                >
                  Portfolio
                </Link>
                . KI ist bei uns kein Verkaufsargument, sondern ein Werkzeug, das in solide
                Software eingebaut wird.
              </p>
              <p className="m-0">
                Und weil wir am Rischbleek 6 in Braunschweig sitzen, klären wir Fragen am Tisch
                statt im Ticketsystem – auch in Wolfsburg, Salzgitter, Gifhorn und Peine. Wenn
                Ihre Website gleich mit modernisiert werden soll:{" "}
                <Link
                  href="/webdesign-braunschweig"
                  className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                >
                  Webdesign in Braunschweig
                </Link>{" "}
                machen wir ab 1.500 €.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        items={kiFaqs}
        eyebrow="Häufige Fragen"
        title="KI im Unternehmen: Was Sie wissen möchten."
      />

      <ContactCta />
      <LandingFooter />
    </div>
  );
}
