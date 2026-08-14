import type { Metadata } from "next";
import Link from "next/link";

import { LegalShell, LegalSection, LegalBox } from "@/components/landing/Legal";

export const metadata: Metadata = {
  title: "Barrierefreiheit",
  description:
    "Erklärung zur Barrierefreiheit von printzzdigital.com: umgesetzte Maßnahmen, bekannte Einschränkungen und wie Sie uns Barrieren melden können.",
  alternates: {
    canonical: "https://printzzdigital.com/barrierefreiheit",
  },
};

export default function BarrierefreiheitPage() {
  return (
    <LegalShell
      title="Erklärung zur Barrierefreiheit"
      subtitle="Unser Anspruch: eine Website, die alle benutzen können"
      stand="August 2026"
    >
      <LegalSection nr="01" title="Unser Anspruch">
        <p>
          Die Printzz GmbH möchte, dass möglichst alle Menschen diese Website nutzen können –
          unabhängig von körperlichen oder technischen Einschränkungen. Wir orientieren uns dabei
          an den Web Content Accessibility Guidelines (WCAG) 2.1, Stufe AA.
        </p>
        <p>
          Ehrlich gesagt: Eine formale Prüfung oder Zertifizierung ist bisher nicht erfolgt. Diese
          Erklärung ist eine freiwillige Selbstverpflichtung – wir verbessern die Zugänglichkeit
          laufend und benennen bekannte Lücken offen.
        </p>
      </LegalSection>

      <LegalSection nr="02" title="Umgesetzte Maßnahmen">
        <ul>
          <li>Semantischer HTML-Aufbau mit klarer Überschriften-Struktur</li>
          <li>Vollständige Bedienbarkeit per Tastatur mit sichtbarem Fokus-Rahmen</li>
          <li>Sprungmarke („Zum Inhalt springen“) am Seitenanfang für Tastatur- und Screenreader-Nutzer</li>
          <li>Ausreichende Farbkontraste für Text auf allen neu gestalteten Seiten</li>
          <li>Alternativtexte für inhaltstragende Bilder</li>
          <li>Reduzierte Animationen, wenn Ihr System „Bewegung reduzieren“ eingestellt hat</li>
          <li>Responsives Layout, das auch bei starkem Zoom (bis 200 %) nutzbar bleibt</li>
          <li>Deklarierte Seitensprache (Deutsch) für Screenreader</li>
        </ul>
      </LegalSection>

      <LegalSection nr="03" title="Bekannte Einschränkungen">
        <p>An diesen Punkten arbeiten wir noch:</p>
        <ul>
          <li>
            Einzelne ältere Unterseiten (z. B. Kontakt, Über uns) entsprechen noch nicht in allen
            Punkten dem Stand der neu gestalteten Seiten
          </li>
          <li>
            Die eingebundene Karte auf der Kontaktseite stammt von einem Drittanbieter und ist nur
            eingeschränkt per Tastatur bedienbar
          </li>
          <li>Ältere PDF-Dokumente (z. B. E-Books) sind noch nicht barrierefrei aufbereitet</li>
        </ul>
      </LegalSection>

      <LegalSection nr="04" title="Barriere gefunden? Sagen Sie uns Bescheid">
        <p>
          Wenn Sie auf dieser Website auf eine Barriere stoßen, freuen wir uns über eine kurze
          Nachricht – wir kümmern uns zeitnah darum und melden uns bei Ihnen zurück.
        </p>
        <LegalBox>
          <p className="m-0 leading-[1.7]">
            <strong>Printzz GmbH</strong>
            <br />
            Rischbleek 6, 38126 Braunschweig
            <br />
            <strong>E-Mail:</strong>{" "}
            <a href="mailto:info@printzzdigital.de">info@printzzdigital.de</a>
            <br />
            <strong>Telefon:</strong> <a href="tel:+4953170201786">0531 - 70201786</a>
          </p>
        </LegalBox>
        <p>
          Weitere rechtliche Informationen finden Sie im <Link href="/impressum">Impressum</Link>{" "}
          und in der <Link href="/datenschutz">Datenschutzerklärung</Link>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
