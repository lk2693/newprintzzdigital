import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KI-Beratung & Data Science Braunschweig | KI-Integration",
  description: "KI-Integration & Data Science in Braunschweig ✓ ChatGPT-Integration ✓ Machine Learning ✓ Datenanalyse ✓ Automatisierung mit KI. Künstliche Intelligenz für Ihr Unternehmen.",
  keywords: ["KI Beratung Braunschweig", "KI-Integration", "Data Science Braunschweig", "Machine Learning", "ChatGPT Integration", "Künstliche Intelligenz Braunschweig"],
  openGraph: {
    title: "KI-Beratung & Data Science Braunschweig | PrintzzDigital",
    description: "KI-Integration und Data Science für Unternehmen in Braunschweig.",
    url: "https://printzzdigital.com/services/data-ai",
  },
  alternates: {
    canonical: "https://printzzdigital.com/services/data-ai",
  },
};

export default function DataAILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
