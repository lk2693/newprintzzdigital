"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { organizationSchema, websiteSchema, servicesSchema, localBusinessSchema } from "@/lib/schemas";

// Critical components loaded immediately (above the fold)
import CinematicHero from "@/components/CinematicHero";
import LogoMarquee from "@/components/LogoMarquee";
import BentoServices from "@/components/BentoServices";
import AnimatedStats from "@/components/AnimatedStats";

// Lazy loaded sections (below the fold)
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), { ssr: false });
const ShowcaseSection = dynamic(() => import("@/components/ShowcaseSection"), {
  ssr: false,
  loading: () => <div className="h-8 animate-pulse bg-slate-100 rounded mx-4"></div>
});
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), { ssr: false });
const EBookDownload = dynamic(() => import("@/components/EBookDownload"), { ssr: false });
const BlogPreview = dynamic(() => import("@/components/BlogPreview"), { ssr: false });
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

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
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Header />

      {/* 01 — Cinematic Hero with animated text, floating mockups & gradient orbs */}
      <CinematicHero />

      {/* Tech Stack Marquee */}
      <LogoMarquee />

      {/* 02 — Services als visuelles Bento Grid */}
      <BentoServices />

      {/* 03 — Animated Stats with scroll-triggered counters */}
      <AnimatedStats />

      {/* 04 — How We Work Process */}
      <Suspense fallback={null}>
        <ProcessSection />
      </Suspense>

      {/* 05 — Project Showcase with visual browser mockups */}
      <Suspense fallback={<div className="h-8 animate-pulse bg-slate-100 rounded mx-4"></div>}>
        <ShowcaseSection />
      </Suspense>

      {/* 06 — Testimonials */}
      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>

      {/* 07 — Final CTA */}
      <Suspense fallback={null}>
        <FinalCTA />
      </Suspense>

      {/* 08 — E-Book Download */}
      <Suspense fallback={null}>
        <EBookDownload />
      </Suspense>

      {/* 09 — Blog Preview */}
      <Suspense fallback={null}>
        <BlogPreview />
      </Suspense>

      {/* 10 — Contact Form */}
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>

      <Footer />
    </div>
  );
}
