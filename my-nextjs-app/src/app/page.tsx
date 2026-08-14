import { organizationSchema, websiteSchema, servicesSchema, faqSchema } from "@/lib/schemas";
import { faqs } from "@/components/landing/faq-data";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import PartnerBar from "@/components/landing/PartnerBar";
import StatsSection from "@/components/landing/StatsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import WebsiteCheckSection from "@/components/landing/WebsiteCheckSection";
import CaseStudySection from "@/components/landing/CaseStudySection";
import ReferencesSection from "@/components/landing/ReferencesSection";
import AboutSection from "@/components/landing/AboutSection";
import ProcessSection from "@/components/landing/ProcessSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactCta from "@/components/landing/ContactCta";
import LandingFooter from "@/components/landing/LandingFooter";

// Inhalte zentral anpassbar (entspricht den Props des Designs)
const JAHRE_ERFAHRUNG = "15+";
const ANZAHL_PROJEKTE = "50+";
const PARTNER_ZEILE_ANZEIGEN = true;
const PROZESS_ANZEIGEN = true;

export default function Page() {
  return (
    <div className="landing min-h-screen bg-[#FAF9F6] text-[#26231E]">
      {/* Feine Papier-Textur über der ganzen Seite */}
      <div aria-hidden className="landing-grain" />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <LandingHeader />
      <LandingHero />
      {PARTNER_ZEILE_ANZEIGEN && <PartnerBar />}
      <StatsSection jahreErfahrung={JAHRE_ERFAHRUNG} anzahlProjekte={ANZAHL_PROJEKTE} />
      <ServicesSection />
      <WebsiteCheckSection infoLink />
      <CaseStudySection />
      <ReferencesSection />
      <AboutSection />
      {PROZESS_ANZEIGEN && <ProcessSection />}
      <FaqSection />
      <ContactCta />
      <LandingFooter />
    </div>
  );
}
