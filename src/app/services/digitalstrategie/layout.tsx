import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digitalstrategie Braunschweig | Digitale Transformation für Unternehmen",
  description: "Digitale Strategie für Ihr Unternehmen in Braunschweig ✓ Digital Audit ✓ Roadmap ✓ Beratung ✓ Umsetzung. Wir begleiten Ihre digitale Transformation – persönlich und effektiv.",
  keywords: ["Digitalstrategie Braunschweig", "digitale Transformation Braunschweig", "Digital Beratung", "IT-Beratung Braunschweig"],
  openGraph: {
    title: "Digitalstrategie Braunschweig | PrintzzDigital",
    description: "Digitale Strategie und Transformation für Braunschweiger Unternehmen.",
    url: "https://printzzdigital.com/services/digitalstrategie",
  },
  alternates: {
    canonical: "https://printzzdigital.com/services/digitalstrategie",
  },
};

export default function DigitalstrategieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
