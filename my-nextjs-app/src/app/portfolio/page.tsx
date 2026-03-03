"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ──────────────────────────  DATA  ────────────────────────── */

const projects = [
  {
    id: 9,
    title: "Kloster & Partner Architekten",
    subtitle: "Architekturbüro Website",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80",
    link: "/portfolio/kloster-und-partner-architekten",
    liveUrl: "https://www.kloster-und-partner-architekten.de/",
    accent: "bg-yellow-500",
    featured: true,
  },
  {
    id: 1,
    title: "Restaurant Website",
    subtitle: "Gastronomie & Reservierung",
    image: "/restaurant.png",
    accent: "bg-gray-900",
  },
  {
    id: 5,
    title: "AI Health Platform",
    subtitle: "KI-gestützte Gesundheit",
    image: "/AiHealth.png",
    accent: "bg-emerald-600",
  },
  {
    id: 2,
    title: "E-Commerce Shop",
    subtitle: "Online-Shop & Payments",
    image: "/ecommerce.png",
    accent: "bg-blue-600",
    featured: true,
  },
  {
    id: 3,
    title: "Fashion Store",
    subtitle: "Mode & E-Commerce",
    image: "/ecommerce2.png",
    accent: "bg-rose-500",
  },
  {
    id: 7,
    title: "Hotel Booking",
    subtitle: "Buchung & Verfügbarkeit",
    image: "/hotel.png",
    accent: "bg-amber-600",
  },
  {
    id: 4,
    title: "Online-Shop Plattform",
    subtitle: "Vollständige E-Commerce-Lösung",
    image: "/onlineshop.png",
    accent: "bg-indigo-600",
    featured: true,
  },
  {
    id: 6,
    title: "Kunstmarkt Plattform",
    subtitle: "Kunst & Auktionen",
    image: "/artmarket.png",
    accent: "bg-purple-600",
  },
  {
    id: 8,
    title: "Conversion Landing Page",
    subtitle: "Performance & Optimierung",
    image: "/landing.png",
    accent: "bg-gray-900",
  },
];

/* ── Structured Data (SEO) ── */
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio – PrintzzDigital Referenzprojekte",
  description:
    "Unsere erfolgreich umgesetzten Projekte: Websites, E-Commerce-Shops, KI-Lösungen und digitale Transformationen für Unternehmen in Braunschweig und der Region.",
  url: "https://printzzdigital.de/portfolio",
  publisher: {
    "@type": "Organization",
    name: "PrintzzDigital",
    url: "https://printzzdigital.de",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.title,
        description: p.subtitle,
        ...(p.liveUrl ? { url: p.liveUrl } : {}),
      },
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://printzzdigital.de/" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://printzzdigital.de/portfolio" },
  ],
};

/* ──────────────────────────  COMPONENTS  ────────────────────────── */

/** Visual project card — Framer-style large image with overlay */
function ProjectCard({
  project,
  index,
  size = "normal",
}: {
  project: (typeof projects)[0];
  index: number;
  size?: "normal" | "wide" | "tall";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const Wrapper = project.link ? Link : "div";
  const wrapperProps = project.link
    ? { href: project.link }
    : {};

  const aspectClass =
    size === "wide"
      ? "aspect-[16/9] md:aspect-[2/1]"
      : size === "tall"
      ? "aspect-[4/5]"
      : "aspect-[4/3]";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className={`group relative ${
        size === "wide" ? "md:col-span-2" : ""
      }`}
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* @ts-expect-error dynamic wrapper */}
      <Wrapper
        {...wrapperProps}
        className="block relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer"
        aria-label={`Projekt: ${project.title}`}
      >
        {/* Image container */}
        <div className={`relative ${aspectClass} overflow-hidden bg-gray-100`}>
          <Image
            src={project.image}
            alt={`${project.title} – Projekt von PrintzzDigital`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes={
              size === "wide"
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            loading={index < 3 ? "eager" : "lazy"}
            itemProp="image"
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

          {/* Permanent bottom gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
            {/* Top row: accent dot + live link */}
            <div className="flex items-start justify-between">
              <div
                className={`w-3 h-3 rounded-full ${project.accent} ring-2 ring-white/30`}
              />
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white"
                  aria-label={`${project.title} live ansehen`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Bottom: project info */}
            <div>
              <p className="text-white/70 text-xs sm:text-sm font-medium uppercase tracking-wider mb-1">
                {project.subtitle}
              </p>
              <h3
                className="text-white text-lg sm:text-xl lg:text-2xl font-bold leading-tight mb-3"
                itemProp="name"
              >
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-yellow-400 transition-colors">
                <span>Projekt ansehen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.article>
  );
}

/* ──────────────────────────  PAGE  ────────────────────────── */

export default function PortfolioPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Structured Data */}
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      {/* ── 1. HERO ── */}
      <section
        ref={heroRef}
        className="relative pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol
              className="flex items-center gap-2 text-sm text-gray-500"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link
                  href="/"
                  className="hover:text-yellow-600 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <span className="text-gray-900 font-medium" itemProp="name">
                  Portfolio
                </span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.05] mb-6">
              Unsere neuesten{" "}
              <span className="text-yellow-500">Projekte</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              Entdecken Sie eine Auswahl unserer Arbeiten – von Websites über
              E-Commerce bis hin zu KI-Lösungen. Jedes Projekt ist maßgeschneidert
              und auf Ergebnisse ausgelegt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. PROJECT GRID ── */}
      <section ref={gridRef} className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Row 1: featured wide + normal */}
            <ProjectCard
              project={projects[0]}
              index={0}
              size="wide"
            />
            <ProjectCard
              project={projects[1]}
              index={1}
              size="tall"
            />

            {/* Row 2: normal + normal + tall */}
            <ProjectCard
              project={projects[2]}
              index={2}
              size="normal"
            />
            <ProjectCard
              project={projects[3]}
              index={3}
              size="wide"
            />

            {/* Row 3: tall + wide */}
            <ProjectCard
              project={projects[4]}
              index={4}
              size="tall"
            />
            <ProjectCard
              project={projects[5]}
              index={5}
              size="normal"
            />
            <ProjectCard
              project={projects[6]}
              index={6}
              size="normal"
            />

            {/* Row 4: wide + normal */}
            <ProjectCard
              project={projects[7]}
              index={7}
              size="wide"
            />
            <ProjectCard
              project={projects[8]}
              index={8}
              size="tall"
            />
          </div>
        </div>
      </section>

      {/* ── 3. CTA ── */}
      <section className="py-24 sm:py-32 bg-gray-950 relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Haben Sie eine Idee?{" "}
              <span className="text-yellow-500">
                Lassen Sie uns zusammenarbeiten.
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Von der ersten Idee bis zum fertigen Produkt – wir begleiten Sie
              bei jedem Schritt Ihres digitalen Projekts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-6 rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Projekt starten
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/leistungen">
                <Button
                  variant="outline"
                  className="px-8 py-6 rounded-full text-base font-medium border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                >
                  Unsere Leistungen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
