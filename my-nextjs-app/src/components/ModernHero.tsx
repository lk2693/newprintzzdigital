"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const features = {
  automation: {
    title: "Automatisierung",
    subtitle: "Effizienz durch Automation",
    description: "Automatisieren Sie wiederkehrende Prozesse und steigern Sie die Produktivität Ihres Teams",
    stat: "75%",
    statLabel: "Zeitersparnis",
    icon: (
      <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    link: "/leistungen/automatisierung",
    technologies: ["Python", "Zapier", "Make.com"]
  },
  webdev: {
    title: "Web-Development",
    subtitle: "Moderne Webanwendungen",
    description: "Professionelle Web-Lösungen mit modernsten Technologien für maximale Performance",
    stat: "99%",
    statLabel: "Uptime",
    icon: (
      <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    link: "/leistungen/webentwicklung",
    technologies: ["React", "Next.js", "TypeScript"]
  },
  ai: {
    title: "KI-Integration",
    subtitle: "Künstliche Intelligenz",
    description: "Integrieren Sie KI-Lösungen für smarte Automatisierung und datengetriebene Entscheidungen",
    stat: "3x",
    statLabel: "ROI Steigerung",
    icon: (
      <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    link: "/leistungen/ki-integration",
    technologies: ["OpenAI", "TensorFlow", "LangChain"]
  },
  digital: {
    title: "Digital Strategy",
    subtitle: "Digitale Transformation",
    description: "Ganzheitliche digitale Strategien für nachhaltiges Wachstum und Wettbewerbsvorteile",
    stat: "95%",
    statLabel: "Effizienzsteigerung",
    icon: (
      <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    link: "/leistungen/digital-transformation",
    technologies: ["Cloud", "Analytics", "CRM"]
  },
  digitaldruck: {
    title: "Digitaldruck & Werbetechnik",
    subtitle: "Professionelle Drucklösungen",
    description: "Von Bannern über Fahrzeugbeschriftung bis hin zu Großformatdruck – wir bringen Ihre Marke groß raus",
    stat: "10K+",
    statLabel: "Druckaufträge",
    icon: (
      <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    link: "/druck",
    technologies: ["Banner", "Folienschnitt", "Werbetechnik"]
  }
};

export default function ModernHero() {
  const [activeFeature, setActiveFeature] = useState<keyof typeof features>("digital");
  const [mobileFeatureIndex, setMobileFeatureIndex] = useState(0);
  const feature = features[activeFeature];
  
  const featureKeys = Object.keys(features) as (keyof typeof features)[];
  const mobileFeature = features[featureKeys[mobileFeatureIndex]];

  // Auto-rotate features on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileFeatureIndex((prev) => (prev + 1) % featureKeys.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [featureKeys.length]);

  return (
    <section className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 pt-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-gray-100 via-yellow-50 to-gray-100 rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400/30 to-transparent"></div>
          </div>

          <div className="relative px-4 sm:px-12 lg:px-16 pt-12 sm:pt-24 pb-12 sm:pb-16">
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5 space-y-5 sm:space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                  <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-700 font-medium">
                    Innovative Software-Lösungen
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Wir machen Mittelstand{" "}
                    <span className="text-yellow-500 block sm:inline">digital-einfach, sichtbar, effizient</span>
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Von digitaler Transformation bis KI-Integration – unser Team ist darauf ausgelegt, Ihr Unternehmen zu unterstützen.
                  </p>
                </div>

                <div>
                  <Link href="/contact">
                    <Button className="text-sm px-6 py-5 rounded-full shadow-lg w-full sm:w-auto">
                      Kostenloses Beratungsgespräch
                    </Button>
                  </Link>
                </div>

                {/* Mobile Service Tags */}
                <div className="flex flex-wrap gap-2 lg:hidden">
                  {['Automatisierung', 'Webentwicklung', 'KI', 'Digitaldruck'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white/80 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Feature Highlight Card */}
                <div className="lg:hidden bg-white rounded-2xl p-5 border border-gray-100 shadow-lg overflow-hidden">
                  <div className="flex items-start gap-4">
                    {/* Animated Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      {mobileFeature.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gray-900 text-sm truncate">{mobileFeature.title}</h3>
                        <span className="text-xl font-bold text-yellow-500 ml-2">{mobileFeature.stat}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{mobileFeature.statLabel}</p>
                      <p className="text-xs text-gray-600 line-clamp-2">{mobileFeature.description}</p>
                    </div>
                  </div>
                  
                  {/* Progress Dots */}
                  <div className="flex justify-center gap-1.5 mt-4">
                    {featureKeys.map((key, index) => (
                      <button
                        key={key}
                        onClick={() => setMobileFeatureIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === mobileFeatureIndex 
                            ? 'w-6 bg-yellow-500' 
                            : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {mobileFeature.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-gray-100 rounded-full text-[10px] font-medium text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/40 shadow-xl">
                  <div className="flex sm:block items-center gap-4 sm:space-y-6">
                    <div className="text-4xl sm:text-6xl font-bold text-gray-900">10+</div>
                    <div className="hidden sm:flex items-center gap-4">
                      <div className="flex -space-x-3">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-3 border-white"></div>
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-black border-3 border-white"></div>
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 border-3 border-white"></div>
                      </div>
                      <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex sm:hidden items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 border-2 border-white"></div>
                      </div>
                      <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="hidden sm:block text-base text-gray-600 leading-relaxed">
                      Zufriedene Kunden vertrauen auf unsere Lösungen
                    </p>
                    <p className="text-xs sm:hidden text-gray-600">
                      Zufriedene Kunden
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block lg:col-span-7 relative">
                <div className="flex flex-wrap gap-2 justify-end absolute top-0 right-0 max-w-md z-10">
                  <button
                    onClick={() => setActiveFeature("automation")}
                    className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all shadow-sm ${
                      activeFeature === "automation"
                        ? "bg-yellow-500 text-black"
                        : "bg-white/90 text-gray-700 hover:bg-yellow-500 hover:text-black"
                    }`}
                  >
                    Automatisierung
                  </button>
                  <button
                    onClick={() => setActiveFeature("webdev")}
                    className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all shadow-sm ${
                      activeFeature === "webdev"
                        ? "bg-yellow-500 text-black"
                        : "bg-white/90 text-gray-700 hover:bg-yellow-500 hover:text-black"
                    }`}
                  >
                    Web-Development
                  </button>
                  <button
                    onClick={() => setActiveFeature("ai")}
                    className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all shadow-sm ${
                      activeFeature === "ai"
                        ? "bg-yellow-500 text-black"
                        : "bg-white/90 text-gray-700 hover:bg-yellow-500 hover:text-black"
                    }`}
                  >
                    KI-Integration
                  </button>
                  <button
                    onClick={() => setActiveFeature("digital")}
                    className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all shadow-sm ${
                      activeFeature === "digital"
                        ? "bg-yellow-500 text-black"
                        : "bg-white/90 text-gray-700 hover:bg-yellow-500 hover:text-black"
                    }`}
                  >
                    Digital Strategy
                  </button>
                  <button
                    onClick={() => setActiveFeature("digitaldruck")}
                    className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all shadow-sm ${
                      activeFeature === "digitaldruck"
                        ? "bg-yellow-500 text-black"
                        : "bg-white/90 text-gray-700 hover:bg-yellow-500 hover:text-black"
                    }`}
                  >
                    Digitaldruck
                  </button>
                </div>

                {/* Phone Mockup */}
                <div className="mt-8 lg:mt-16 flex justify-center perspective-1000">
                  <div className="relative group">
                    {/* Animated Gradient Circles */}
                    <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 rounded-full opacity-90 blur-xl animate-pulse"></div>
                    <div className="absolute -left-16 top-1/3 w-40 h-40 bg-gradient-to-tr from-yellow-300 to-yellow-500 rounded-full opacity-60 blur-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
                    
                    {/* Floating Elements - Hidden on mobile */}
                    <div className="hidden sm:flex absolute -right-8 top-20 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl items-center justify-center animate-float z-20">
                      {feature.icon}
                    </div>
                    <div className="hidden sm:flex absolute -left-4 bottom-32 w-14 h-14 bg-black rounded-xl shadow-xl items-center justify-center animate-float-delayed z-20">
                      <svg className="w-7 h-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    {/* Stats Badge - Hidden on mobile */}
                    <div className="hidden sm:block absolute -right-12 bottom-40 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full shadow-lg z-20 animate-float">
                      <span className="font-bold text-lg">{feature.stat}</span>
                      <span className="text-xs ml-1">{feature.statLabel}</span>
                    </div>
                    
                    {/* Phone Frame - iPhone 15 Pro Style */}
                    <div className="relative z-10 w-[260px] sm:w-[300px] bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] sm:rounded-[3.5rem] p-[3px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_50px_100px_-20px_rgba(234,179,8,0.3)] transition-all duration-500 group-hover:scale-[1.02]">
                      {/* Titanium Frame Effect */}
                      <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-b from-gray-600 via-gray-800 to-gray-900 opacity-50"></div>
                      
                      {/* Inner Frame */}
                      <div className="relative bg-black rounded-[3.3rem] p-[2px]">
                        {/* Dynamic Island */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                        </div>
                        
                        {/* Phone Screen */}
                        <div className="bg-gradient-to-b from-gray-50 to-white rounded-[3.2rem] overflow-hidden min-h-[580px] relative">
                          {/* Status Bar */}
                          <div className="flex justify-between items-center px-8 pt-4 pb-2">
                            <span className="text-xs font-semibold text-gray-900">9:41</span>
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3C7.5 3 3.75 6.25 2 11c1.75 4.75 5.5 8 10 8s8.25-3.25 10-8c-1.75-4.75-5.5-8-10-8z" opacity="0.3"/>
                              </svg>
                              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-6.77l1.3.75-.85 1.47H12v1.5h-1.7l.85 1.48-1.3.75L9 9.65l-.85 1.48-1.3-.75.85-1.48H6v-1.5h1.7l-.85-1.47 1.3-.75L9 6.66l.85-1.48zm7 0l1.3.75-.85 1.47H19v1.5h-1.7l.85 1.48-1.3.75-1.85-3.23-.85 1.48-1.3-.75.85-1.48H13v-1.5h1.7l-.85-1.47 1.3-.75.85 1.48.85-1.48z"/>
                              </svg>
                              <div className="w-6 h-3 bg-gray-900 rounded-sm relative">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-1.5 bg-gray-900 -mr-[2px] rounded-r"></div>
                                <div className="absolute inset-[2px] bg-yellow-500 rounded-sm" style={{ width: '70%' }}></div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="px-6 pt-8 pb-6 space-y-5">
                            {/* App Header */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                  <span className="text-black font-bold text-sm">PD</span>
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-gray-900">PrintzzDigital</h3>
                                  <p className="text-xs text-gray-500">Dashboard</p>
                                </div>
                              </div>
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                              </div>
                            </div>

                            {/* Feature Card */}
                            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 text-white transition-all duration-500">
                              <div className="flex items-start justify-between mb-3">
                                <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                                  {feature.icon}
                                </div>
                                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">Aktiv</span>
                              </div>
                              <h3 className="font-bold text-base mb-1">{feature.title}</h3>
                              <p className="text-xs text-gray-400 mb-3 line-clamp-2">{feature.description}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex -space-x-2">
                                  <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-gray-900"></div>
                                  <div className="w-6 h-6 rounded-full bg-gray-600 border-2 border-gray-900"></div>
                                  <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-gray-900"></div>
                                </div>
                                <span className="text-2xl font-bold text-yellow-500">{feature.stat}</span>
                              </div>
                            </div>

                            {/* Tasks */}
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-bold text-gray-900">Aufgaben</h4>
                                <span className="text-xs text-gray-500">2/3 erledigt</span>
                              </div>
                              {feature.technologies.map((tech, index) => (
                                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 transition-all hover:bg-gray-100">
                                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${index === 0 ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'}`}>
                                    {index === 0 && (
                                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    )}
                                  </div>
                                  <span className={`text-sm flex-1 ${index === 0 ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{tech}</span>
                                  <div className="w-6 h-6 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <span className="text-yellow-600 text-xs font-bold">{index + 1}</span>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Bottom CTA */}
                            <Link href={feature.link}>
                              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm">
                                Mehr erfahren →
                              </button>
                            </Link>
                          </div>
                          
                          {/* Home Indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
