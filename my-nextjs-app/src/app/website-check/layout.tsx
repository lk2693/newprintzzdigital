import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenloser Website-Check – SEO, Sicherheit & KI-Sichtbarkeit",
  description:
    "Website kostenlos prüfen: 25 Punkte zu SEO, Sicherheit, Technik und KI-Sichtbarkeit – wird Ihre Website von ChatGPT & Co. gefunden? Ohne Anmeldung, ohne Speicherung. Vom Braunschweiger Team hinter der Stadt-App „Deine City of Lions“.",
  keywords: [
    "Website Check kostenlos",
    "Website Check Braunschweig",
    "SEO Check Braunschweig",
    "SEO Check kostenlos",
    "Website prüfen",
    "Website Sicherheit testen",
    "Security Header prüfen",
    "Website Analyse kostenlos",
    "KI Sichtbarkeit prüfen",
    "ChatGPT Website Check",
    "llms.txt",
  ],
  openGraph: {
    title: "Kostenloser Website-Check – SEO, Sicherheit & KI-Sichtbarkeit",
    description:
      "25 Prüfpunkte in 30 Sekunden: Sicherheits-Header, SEO-Grundlagen, Technik und KI-Sichtbarkeit (ChatGPT & Co.) – kostenlos, ohne Anmeldung, ohne Speicherung.",
    url: "https://www.printzzdigital.de/website-check",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://www.printzzdigital.de/website-check",
  },
};

export default function WebsiteCheckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
