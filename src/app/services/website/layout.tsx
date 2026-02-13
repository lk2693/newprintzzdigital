import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professionelle Website erstellen lassen | Webdesign Braunschweig",
  description: "Website erstellen lassen in Braunschweig ✓ Responsive Design ✓ SEO-optimiert ✓ Next.js & React ✓ Bis zu 60% bessere Conversion. Ihre Webagentur in Braunschweig – jetzt beraten lassen!",
  keywords: ["Website erstellen lassen", "Webdesign Braunschweig", "Homepage erstellen", "Webagentur Braunschweig", "responsive Webdesign"],
  openGraph: {
    title: "Professionelle Website erstellen lassen | PrintzzDigital Braunschweig",
    description: "Website erstellen lassen in Braunschweig. Responsive, SEO-optimiert und blitzschnell mit Next.js & React.",
    url: "https://printzzdigital.com/services/website",
  },
  alternates: {
    canonical: "https://printzzdigital.com/services/website",
  },
};

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
