import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digitalagentur Braunschweig – Webdesign, Software & KI vor Ort",
  description: "PrintzzDigital, Rischbleek 6 in Braunschweig: die Agentur hinter der Stadt-App „Deine City of Lions“. Websites ab 1.500 €, Software ab 5.000 €, KI ab 3.000 € – mit Festpreisen und persönlichen Terminen in der ganzen Region.",
  keywords: ["Digitalagentur Braunschweig", "Webdesign Braunschweig", "Webentwicklung Braunschweig", "Software Entwicklung Braunschweig", "Website erstellen Braunschweig", "Webagentur Braunschweig"],
  openGraph: {
    title: "Digitalagentur Braunschweig – Webdesign, Software & KI vor Ort",
    description: "Die Agentur hinter der Stadt-App „Deine City of Lions“: Websites, Software und KI mit Festpreisen – persönlich in Braunschweig und Region.",
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
