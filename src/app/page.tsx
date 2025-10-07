"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { organizationSchema, websiteSchema, servicesSchema } from "@/lib/schemas";

// Critical components loaded immediately
import TerminalHero from "@/components/TerminalHero";
import ProblemSection from "@/components/ProblemSection";
import FullScreenServices from "@/components/FullScreenServices";
import MinimalCTA from "@/components/MinimalCTA";

// Lazy loaded sections
const PortfolioSection = dynamic(() => import("@/components/UltraLightPortfolioSection"), {
  ssr: false,
  loading: () => <div className="h-8 animate-pulse bg-slate-100 rounded"></div>
});
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });
const EBookDownload = dynamic(() => import("@/components/EBookDownload"), { ssr: false });
const BlogPreview = dynamic(() => import("@/components/BlogPreview"), { ssr: false });

export default function Page() {

  return (
    <div className="min-h-screen bg-white text-slate-900">
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
      
      {/* Hero Section - Terminal Style */}
      <TerminalHero />
      
      {/* Problem Statement Section */}
      <ProblemSection />
      
      {/* Full-Screen Service Sections */}
      <FullScreenServices />
      
      {/* Portfolio - Lazy loaded */}
      <Suspense fallback={<div className="h-8 animate-pulse bg-slate-100 rounded mx-4"></div>}>
        <PortfolioSection />
      </Suspense>
      
      {/* Minimal CTA Section */}
      <MinimalCTA />
      
      {/* Bottom sections - Only load when needed */}
      <Suspense fallback={null}>
        <EBookDownload />
      </Suspense>
      
      <Suspense fallback={null}>
        <BlogPreview />
      </Suspense>
      
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>

      <Footer />
    </div>
  );
}
