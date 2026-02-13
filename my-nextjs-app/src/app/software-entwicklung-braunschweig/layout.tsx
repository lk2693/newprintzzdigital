import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software-Entwicklung Braunschweig | Individuelle Softwarelösungen",
  description: "Individuelle Software-Entwicklung in Braunschweig ✓ Web-Apps ✓ Mobile Apps ✓ Datenbanklösungen ✓ API-Entwicklung ✓ Automatisierung. Maßgeschneiderte Software vom Experten. Jetzt beraten lassen!",
  keywords: ["Software Entwicklung Braunschweig", "Softwareentwicklung Braunschweig", "App Entwicklung Braunschweig", "Programmierer Braunschweig", "IT Dienstleistungen Braunschweig", "Web Anwendung Braunschweig", "individuelle Software Braunschweig", "IT Unternehmen Braunschweig", "Softwarefirma Braunschweig"],
  openGraph: {
    title: "Software-Entwicklung Braunschweig | Individuelle Softwarelösungen",
    description: "Maßgeschneiderte Software-Entwicklung aus Braunschweig. Web-Apps, Mobile Apps und Automatisierung.",
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
