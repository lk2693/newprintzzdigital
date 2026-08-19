import Link from "next/link";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import WebsiteCheckSection from "@/components/landing/WebsiteCheckSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactCta from "@/components/landing/ContactCta";
import { Reveal } from "@/components/landing/motion";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";

const checkFaqs = [
  {
    question: "Ist der Website-Check wirklich kostenlos?",
    answer:
      "Ja, komplett. Ihren Score und die Note sehen Sie sofort und ohne Anmeldung. Die detaillierte Auswertung mit allen Verbesserungstipps schalten Sie mit Ihrer E-Mail-Adresse frei – ebenfalls kostenlos und ohne versteckte Kosten. Wir bieten den Check an, weil er in 30 Sekunden zeigt, worauf wir bei jeder Website achten, die wir bauen.",
  },
  {
    question: "Was genau wird geprüft?",
    answer:
      "25 Punkte in vier Kategorien: Sicherheit (die sechs wichtigsten Schutz-Header Ihrer Website), SEO & Sichtbarkeit (Seitentitel, Meta-Description, Überschriften, Alt-Texte, Sitemap und mehr), Technik & Performance (Verschlüsselung, Antwortzeit, mobile Darstellung) sowie KI-Sichtbarkeit (wird Ihre Website von ChatGPT, Claude, Perplexity und Gemini gelesen?). Zusätzlich erkennt der Check, womit Ihre Website gebaut wurde – Homepage-Baukasten wie Wix oder Jimdo, CMS wie WordPress oder individuell entwickelt. Jeder Punkt wird verständlich erklärt – ohne Fachchinesisch.",
  },
  {
    question: "Taucht meine Website in ChatGPT & Co. auf?",
    answer:
      "Genau das prüft die Kategorie KI-Sichtbarkeit: Immer mehr Menschen fragen ChatGPT, Perplexity oder Gemini nach Empfehlungen – etwa „guter Handwerker in Braunschweig“. Damit Ihre Website dort auftauchen kann, müssen die KI-Crawler sie lesen dürfen (robots.txt), die Inhalte müssen ohne JavaScript lesbar sein und strukturierte Daten helfen den KI-Diensten zu verstehen, wer Sie sind. Der Check zeigt Ihnen, wo Sie stehen.",
  },
  {
    question: "Werden meine Daten oder Ergebnisse gespeichert?",
    answer:
      "Der Check selbst ruft nur öffentlich sichtbare Daten Ihrer Website ab – genau das, was jeder Browser beim Besuch auch sieht. Erst wenn Sie die detaillierte Auswertung freischalten oder ein Beratungsgespräch anfragen, speichern wir Ihre E-Mail-Adresse und das Ergebnis, um Sie kontaktieren zu können. Eine Weitergabe an Dritte findet nicht statt – Details in unserer Datenschutzerklärung.",
  },
  {
    question: "Was sind Security-Header – und warum sind sie wichtig?",
    answer:
      "Security-Header sind Anweisungen, die Ihre Website jedem Browser mitgibt: etwa „führe keinen fremden Code aus“ oder „lass dich nicht in fremde Seiten einbetten“. Sie kosten nichts, schützen aber vor gängigen Angriffen wie Cross-Site-Scripting und Clickjacking. Die meisten Websites haben sie schlicht nicht gesetzt – ein vermeidbares Risiko.",
  },
  {
    question: "Meine Website hat eine schlechte Note bekommen. Was jetzt?",
    answer:
      "Kein Grund zur Panik – die meisten Punkte sind schnell behebbar, viele davon in wenigen Stunden. Im kostenlosen Erstgespräch erklären wir Ihnen, was hinter den einzelnen Ergebnissen steckt, was davon wirklich dringend ist und was es kostet, es zu beheben. Ehrlich und ohne Verkaufsdruck.",
  },
  {
    question: "Funktioniert der Check mit jeder Website?",
    answer:
      "Mit jeder öffentlich erreichbaren Website – egal ob WordPress, Baukasten, Shop oder handgebaut. Passwortgeschützte Seiten und interne Systeme können nicht geprüft werden.",
  },
  {
    question: "Ersetzt der Check eine vollständige SEO-Analyse?",
    answer:
      "Ehrlich gesagt: nein. Der Check prüft die technische Basis – die muss stimmen, sonst verschenken Sie Rankings. Eine vollständige SEO-Analyse schaut zusätzlich auf Suchbegriffe, Inhalte, Konkurrenz und Verlinkung. Wenn Sie das interessiert, sprechen Sie uns einfach an.",
  },
  {
    question: "Wie oft sollte ich meine Website prüfen?",
    answer:
      "Nach jeder größeren Änderung an der Website – und sonst etwa einmal im Quartal. Updates, neue Plugins oder ein Hosting-Wechsel können Einstellungen unbemerkt verändern.",
  },
];

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kostenloser Website-Check",
  url: "https://www.printzzdigital.de/website-check",
  description:
    "Kostenloser Website-Check: 25 Prüfpunkte zu Sicherheit, SEO, Technik und KI-Sichtbarkeit (ChatGPT, Claude, Perplexity, Gemini) in 30 Sekunden – Score sofort, detaillierte Auswertung kostenlos per E-Mail-Freischaltung.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  provider: {
    "@type": "LocalBusiness",
    name: "PrintzzDigital",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rischbleek 6",
      addressLocality: "Braunschweig",
      postalCode: "38126",
      addressCountry: "DE",
    },
    telephone: "+49-531-70201786",
  },
};

const pruefKategorien = [
  {
    title: "Sicherheit",
    intro:
      "Die sechs wichtigsten Schutz-Header – dieselben Prüfungen, die auch Sicherheits-Scanner wie securityheaders.com durchführen.",
    checks: [
      { name: "Content-Security-Policy", why: "blockiert eingeschleusten Fremdcode (XSS)" },
      { name: "Strict-Transport-Security", why: "erzwingt verschlüsselte Verbindungen" },
      { name: "X-Frame-Options", why: "schützt vor Clickjacking" },
      { name: "X-Content-Type-Options", why: "unterbindet das Erraten von Dateitypen" },
      { name: "Referrer-Policy", why: "regelt, welche Daten an Drittseiten fließen" },
      { name: "Permissions-Policy", why: "beschränkt Kamera, Mikrofon & Co." },
    ],
  },
  {
    title: "SEO & Sichtbarkeit",
    intro:
      "Die On-Page-Grundlagen, ohne die kein gutes Google-Ranking möglich ist – inklusive Längen-Prüfung nach Googles Vorgaben.",
    checks: [
      { name: "Seitentitel", why: "das wichtigste einzelne SEO-Element" },
      { name: "Meta-Description", why: "Ihr Werbetext im Google-Suchergebnis" },
      { name: "H1-Überschrift", why: "sagt Google das Hauptthema der Seite" },
      { name: "Alt-Texte", why: "macht Bilder für Google & Screenreader lesbar" },
      { name: "Canonical-Tag", why: "verhindert Duplicate-Content-Probleme" },
      { name: "Open Graph", why: "die Vorschau beim Teilen auf Social Media" },
      { name: "robots.txt", why: "die Steuerungsdatei für Suchmaschinen" },
      { name: "XML-Sitemap", why: "damit Google alle Unterseiten findet" },
    ],
  },
  {
    title: "Technik & Performance",
    intro:
      "Das technische Fundament: Was hier fehlt, kostet Besucher – und wird von Google direkt abgestraft.",
    checks: [
      { name: "SSL-Verschlüsselung", why: "ohne HTTPS warnt der Browser Ihre Besucher" },
      { name: "Server-Antwortzeit", why: "Ladezeit ist offizieller Rankingfaktor" },
      { name: "Mobile Optimierung", why: "korrekte Darstellung auf dem Smartphone" },
      { name: "Sprachauszeichnung", why: "wichtig für Barrierefreiheit und Google" },
      { name: "Favicon", why: "Ihr Markenzeichen im Browser-Tab" },
    ],
  },
  {
    title: "KI-Sichtbarkeit",
    intro:
      "Wird Ihre Website von ChatGPT, Claude, Perplexity und Gemini gelesen? Die neue Disziplin, die kaum jemand auf dem Schirm hat.",
    checks: [
      { name: "ChatGPT-Crawler", why: "darf OpenAI Ihre Inhalte lesen und zitieren?" },
      { name: "Claude, Perplexity & Gemini", why: "Freigaben für die weiteren KI-Dienste" },
      { name: "Lesbarkeit ohne JavaScript", why: "KI-Crawler führen kein JavaScript aus" },
      { name: "Strukturierte Daten", why: "damit KI versteht, wer Sie sind und was Sie anbieten" },
      { name: "llms.txt", why: "der neue Standard für KI-Assistenten" },
      { name: "Snippet-Freigabe", why: "dürfen KI-Suche & Google Sie zitieren?" },
    ],
  },
];

export default function WebsiteCheckPage() {
  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      <div aria-hidden className="landing-grain" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(checkFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://www.printzzdigital.de" },
              { name: "Kostenloser Website-Check", url: "https://www.printzzdigital.de/website-check" },
            ])
          ),
        }}
      />

      <LandingHeader />

      {/* Hero */}
      <section id="inhalt" className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#F5F1E8]">
        <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-14 sm:px-8 lg:pb-20 lg:pt-[80px]">
          <div className="flex max-w-[760px] flex-col gap-[26px]">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Kostenloser Website-Check · Braunschweig
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-expanded m-0 text-[36px] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#26231E] [text-wrap:balance] sm:text-[46px] lg:text-[54px]">
                Website-Check: 25 Prüfpunkte,{" "}
                <span className="text-[#A05F00]">30 Sekunden, 0 Euro.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="m-0 max-w-[600px] text-[19px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
                Sicherheit, SEO, Technik und KI-Sichtbarkeit – wir prüfen Ihre Website
                auf die 25 Punkte, die über Ihr Google-Ranking entscheiden und darüber,
                ob ChatGPT &amp; Co. Sie empfehlen können. Ihren Score sehen Sie sofort,
                die komplette Auswertung mit verständlichen Erklärungen statt
                Fachchinesisch gibt es kostenlos per E-Mail.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#website-check"
                  className="rounded-md bg-[#FBB800] px-7 py-[15px] text-base font-bold text-[#141210] transition-all hover:-translate-y-0.5 hover:bg-[#F28C00] hover:shadow-[0_12px_28px_rgba(251,184,0,0.4)] active:translate-y-0"
                >
                  Jetzt kostenlos prüfen
                </a>
                <span className="text-sm text-[#7A7365]">
                  Vom Team hinter der Stadt-App „Deine City of Lions“
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Das Tool */}
      <WebsiteCheckSection />

      {/* Was geprüft wird */}
      <section className="mx-auto max-w-[1200px] px-5 py-[100px] sm:px-8">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-0.5 w-[34px] bg-[#F28C00]" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                  Die 25 Prüfpunkte
                </span>
              </div>
              <h2 className="font-expanded m-0 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
                Was der Website-Check im Detail prüft.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0 text-[17px] leading-[1.6] text-[#6B655B] [text-wrap:pretty]">
              Kein Blackbox-Score: Jeder Prüfpunkt hat einen klaren Grund. Das sind
              dieselben Kriterien, nach denen wir jede Website bauen, die unser Haus
              verlässt.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pruefKategorien.map((kategorie, i) => (
            <Reveal key={kategorie.title} delay={i * 0.12}>
              <div className="flex h-full flex-col gap-4 rounded-xl border border-[#E8E4DC] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FBB800] hover:shadow-[0_20px_48px_rgba(20,18,16,0.1)]">
                <h3 className="m-0 text-[21px] font-bold text-[#26231E]">{kategorie.title}</h3>
                <p className="m-0 text-[15px] leading-[1.55] text-[#6B655B]">{kategorie.intro}</p>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {kategorie.checks.map((check) => (
                    <li key={check.name} className="flex gap-3 text-[15px] leading-[1.5]">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[#FBB800]" />
                      <span>
                        <span className="font-semibold text-[#26231E]">{check.name}</span>{" "}
                        <span className="text-[#6B655B]">– {check.why}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Warum das über Rankings entscheidet */}
      <section className="border-t border-[#E8E4DC]">
        <div className="mx-auto max-w-[900px] px-5 py-[90px] sm:px-8">
          <Reveal>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-[34px] bg-[#F28C00]" />
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
                Warum das wichtig ist
              </span>
            </div>
            <h2 className="font-expanded m-0 mb-8 text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
              Diese Punkte entscheiden mit, wo Sie bei Google stehen.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5 text-[17px] leading-[1.7] text-[#6B655B]">
              <p className="m-0">
                Google bewertet nicht nur, <em>was</em> auf Ihrer Website steht, sondern auch,{" "}
                <em>wie</em> sie gebaut ist: Lädt sie schnell? Ist sie verschlüsselt? Funktioniert
                sie auf dem Smartphone? Findet der Google-Crawler alle Unterseiten? Wer hier Lücken
                hat, verschenkt Rankings an Wettbewerber – oft ohne es zu wissen, denn von außen
                sieht die Website ja gut aus. Mehr dazu, wie stark die{" "}
                <Link
                  href="/blog/website-ladezeit-optimierung-2026"
                  className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                >
                  Ladezeit über Ihren Google-Erfolg entscheidet
                </Link>
                , lesen Sie in unserem Blog.
              </p>
              <p className="m-0">
                Dazu kommt eine Entwicklung, die viele noch unterschätzen: Immer mehr Menschen
                fragen nicht mehr Google, sondern ChatGPT, Perplexity oder Gemini – „Wer macht gute
                Websites in Braunschweig?“, „Welcher Dachdecker ist empfehlenswert?“. Ob Ihre
                Website in diesen Antworten auftauchen kann, entscheiden ein paar technische
                Weichen: Dürfen die KI-Crawler Ihre Seite lesen? Steht Ihr Inhalt direkt im HTML
                oder erst nach JavaScript-Ausführung? Genau das prüft unsere Kategorie
                KI-Sichtbarkeit.
              </p>
              <p className="m-0">
                Die Sicherheits-Header wiederum sieht kein Besucher – aber jeder Browser und jeder
                Angreifer. Fehlen sie, ist Ihre Website anfälliger für Angriffe, und im Schadensfall
                haftet der Betreiber. Das Gute: Fast alle 25 Punkte sind mit überschaubarem Aufwand
                behebbar. Bei einem{" "}
                <Link
                  href="/blog/website-relaunch-warnsignale-2026"
                  className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                >
                  in die Jahre gekommenen Auftritt
                </Link>{" "}
                lohnt sich manchmal auch der Blick aufs Ganze – etwa mit einem{" "}
                <Link
                  href="/webdesign-braunschweig"
                  className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                >
                  neuen Webauftritt aus Braunschweig
                </Link>
                .
              </p>
              <p className="m-0">
                Übrigens: Bei jeder Website, die wir bauen, sind diese Punkte von Anfang an
                erfüllt – prüfen Sie gern printzzdigital.de selbst im Check oben.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        items={checkFaqs}
        eyebrow="Häufige Fragen"
        title="Website-Check: Was Sie wissen möchten."
      />

      <ContactCta />
      <LandingFooter />
    </div>
  );
}
