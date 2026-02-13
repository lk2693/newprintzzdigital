import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digitalagentur Braunschweig | Webdesign, Webentwicklung & Software",
  description: "PrintzzDigital - Ihre Digitalagentur in Braunschweig. ✓ Webdesign ✓ Webentwicklung ✓ Software-Entwicklung ✓ KI-Integration ✓ SEO & Online Marketing. Persönliche Beratung vor Ort. Jetzt kostenloses Erstgespräch!",
  keywords: ["Digitalagentur Braunschweig", "Webdesign Braunschweig", "Webentwicklung Braunschweig", "Software Entwicklung Braunschweig", "Website erstellen Braunschweig", "SEO Braunschweig", "Webagentur Braunschweig", "App Entwicklung Braunschweig", "IT Dienstleistungen Braunschweig", "Homepage erstellen Braunschweig"],
  openGraph: {
    title: "Digitalagentur Braunschweig | PrintzzDigital",
    description: "Professionelles Webdesign, Webentwicklung & Software-Entwicklung in Braunschweig. Persönliche Beratung, faire Preise, messbare Ergebnisse.",
    url: "https://printzzdigital.com/braunschweig",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://printzzdigital.com/braunschweig",
  },
};

export default function BraunschweigLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
