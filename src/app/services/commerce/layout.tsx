import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce & Online-Shop Braunschweig | Shop erstellen lassen",
  description: "Online-Shop erstellen lassen in Braunschweig ✓ E-Commerce Lösungen ✓ Webshop-Entwicklung ✓ Payment-Integration ✓ SEO-optimiert. Ihr E-Commerce Partner in Braunschweig.",
  keywords: ["Online Shop Braunschweig", "E-Commerce Braunschweig", "Webshop erstellen", "Online-Shop erstellen lassen Braunschweig", "E-Commerce Agentur"],
  openGraph: {
    title: "E-Commerce & Online-Shop Braunschweig | PrintzzDigital",
    description: "Online-Shop erstellen lassen vom Experten in Braunschweig.",
    url: "https://printzzdigital.com/services/commerce",
  },
  alternates: {
    canonical: "https://printzzdigital.com/services/commerce",
  },
};

export default function CommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
