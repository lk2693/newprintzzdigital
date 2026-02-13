import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Marketing & SEO Braunschweig | Digital Marketing Agentur",
  description: "Online Marketing & SEO in Braunschweig ✓ Google Ads ✓ Social Media ✓ Content Marketing ✓ Lokale SEO-Strategien. Mehr Sichtbarkeit, mehr Kunden – PrintzzDigital Braunschweig.",
  keywords: ["Online Marketing Braunschweig", "SEO Braunschweig", "Google Ads Braunschweig", "Social Media Marketing Braunschweig", "Marketing Agentur Braunschweig"],
  openGraph: {
    title: "Online Marketing & SEO Braunschweig | PrintzzDigital",
    description: "Mehr Sichtbarkeit bei Google. Online Marketing & SEO für Braunschweiger Unternehmen.",
    url: "https://printzzdigital.com/services/marketing",
  },
  alternates: {
    canonical: "https://printzzdigital.com/services/marketing",
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
