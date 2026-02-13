import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM-Systeme Braunschweig | Kundenmanagement-Software",
  description: "CRM-System für Ihr Unternehmen in Braunschweig ✓ Kundenverwaltung ✓ Vertriebsautomatisierung ✓ Individuelle Anpassung. Mehr Effizienz durch modernes Kundenmanagement.",
  keywords: ["CRM Braunschweig", "CRM-System", "Kundenverwaltung Software", "Vertriebsautomatisierung Braunschweig"],
  openGraph: {
    title: "CRM-Systeme Braunschweig | PrintzzDigital",
    description: "Individuelle CRM-Systeme für Braunschweiger Unternehmen.",
    url: "https://printzzdigital.com/services/crm",
  },
  alternates: {
    canonical: "https://printzzdigital.com/services/crm",
  },
};

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
