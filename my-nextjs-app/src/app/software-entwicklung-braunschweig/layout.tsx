import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software-Entwicklung Braunschweig – Web-Apps & PWAs ab 5.000 €",
  description: "Individuelle Software aus Braunschweig von den Entwicklern der Stadt-App „Deine City of Lions“: Web-Anwendungen, Buchungssysteme, Schnittstellen und Automatisierung. Erstgespräch kostenlos, ehrliche Einschätzung inklusive.",
  keywords: ["Software Entwicklung Braunschweig", "Softwareentwicklung Braunschweig", "App Entwicklung Braunschweig", "Programmierer Braunschweig", "Web Anwendung Braunschweig", "individuelle Software Braunschweig", "Softwarefirma Braunschweig"],
  openGraph: {
    title: "Software-Entwicklung Braunschweig – Web-Apps & PWAs ab 5.000 €",
    description: "Von den Entwicklern der Stadt-App „Deine City of Lions“: Web-Anwendungen, Buchungssysteme und Automatisierung für Unternehmen aus Braunschweig und der Region.",
    url: "https://printzzdigital.com/software-entwicklung-braunschweig",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://printzzdigital.com/software-entwicklung-braunschweig",
  },
};

export default function SoftwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
