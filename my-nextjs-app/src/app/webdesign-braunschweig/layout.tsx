import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Braunschweig – Website erstellen lassen ab 1.500 €",
  description: "Webdesign aus Braunschweig von der Agentur hinter der Stadt-App „Deine City of Lions“: handgebaute Websites, Ladezeit unter einer Sekunde, Festpreise ab 1.500 €. Erstgespräch kostenlos – vor Ort in Braunschweig und Region.",
  keywords: ["Webdesign Braunschweig", "Website erstellen Braunschweig", "Homepage erstellen lassen Braunschweig", "Webdesigner Braunschweig", "Webagentur Braunschweig", "responsive Webdesign Braunschweig"],
  openGraph: {
    title: "Webdesign Braunschweig – Website erstellen lassen ab 1.500 €",
    description: "Handgebaute Websites aus Braunschweig: unter einer Sekunde Ladezeit, Festpreise, persönliche Betreuung vor Ort. Von der Agentur hinter „Deine City of Lions“.",
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
