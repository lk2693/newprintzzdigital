import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Braunschweig | Professionelle Website erstellen lassen",
  description: "Professionelles Webdesign in Braunschweig ✓ Responsive Design ✓ SEO-optimiert ✓ Schnelle Ladezeiten ✓ Faire Preise. Website erstellen lassen vom Experten. Jetzt kostenloses Angebot anfordern!",
  keywords: ["Webdesign Braunschweig", "Website erstellen Braunschweig", "Homepage erstellen lassen Braunschweig", "Webdesigner Braunschweig", "Webseite erstellen Braunschweig", "responsive Webdesign Braunschweig", "Webseiten Gestaltung Braunschweig", "professionelles Webdesign Braunschweig"],
  openGraph: {
    title: "Webdesign Braunschweig | Professionelle Website erstellen lassen",
    description: "Professionelles Webdesign aus Braunschweig. Responsive, SEO-optimiert und blitzschnell. Jetzt Angebot anfordern!",
    url: "https://printzzdigital.com/webdesign-braunschweig",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://printzzdigital.com/webdesign-braunschweig",
  },
};

export default function WebdesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
