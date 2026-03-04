"use client";

import { Suspense, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SplashScreen from "@/components/SplashScreen";
import { organizationSchema, websiteSchema, servicesSchema } from "@/lib/schemas";

// Section components – critical ones loaded immediately
import HeroSection from "@/components/sections/HeroSection";
import AboutStatsSection from "@/components/sections/AboutStatsSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import CTASection from "@/components/sections/CTASection";
import ProcessSection from "@/components/sections/ProcessSection";
import PrioritySection from "@/components/sections/PrioritySection";

// Lazy loaded sections (below fold)
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), { ssr: false });
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { ssr: false });
const FinalCTASection = dynamic(() => import("@/components/sections/FinalCTASection"), { ssr: false });
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export default function Page() {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashFinish = useCallback(() => setSplashDone(true), []);

  return (
    <>
      <SplashScreen onFinish={handleSplashFinish} isVisible={!splashDone} />
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Structured Data for SEO */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <Header />

      <main id="main-content">
        {/* 1. Hero – große Typografie mit CTA */}
        <HeroSection />

        {/* 2. Stats & Über uns */}
        <AboutStatsSection />

        {/* 3. Leistungen – nummerierte Karten */}
        <ServicesGrid />

        {/* 4. Projekte-Showcase */}
        <ProjectsShowcase />

        {/* 5. CTA – "Haben Sie eine Idee?" */}
        <CTASection />

        {/* 6. Prozess – 3 Schritte */}
        <ProcessSection />

        {/* 7. Ihre Ziele, unsere Priorität */}
        <PrioritySection />

        {/* 8. Testimonials */}
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>

        {/* 8. Blog / News */}
        <Suspense fallback={null}>
          <BlogSection />
        </Suspense>

        {/* 9. FAQ */}
        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>

        {/* 10. Kontaktformular */}
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>

        {/* 11. Finaler CTA */}
        <Suspense fallback={null}>
          <FinalCTASection />
        </Suspense>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
    </>
  );
}
