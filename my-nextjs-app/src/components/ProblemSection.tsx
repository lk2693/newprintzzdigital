'use client';

import Link from 'next/link';

export default function ProblemSection() {
  const benefits = [
    {
      title: "Maximale Effizienz durch Automatisierung",
      description: "PrintzzDigital hilft Ihnen, wiederkehrende Aufgaben zu automatisieren und wertvolle Zeit für Ihr Kerngeschäft zu gewinnen.",
      stat: "75%",
      statLabel: "Zeitersparnis",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: "/leistungen/automatisierung"
    },
    {
      title: "Steigerung Ihrer digitalen Präsenz",
      description: "Von modernen Websites bis zu KI-Integration – wir bringen Ihr Unternehmen auf das nächste Level.",
      tags: [
        { label: "Webentwicklung", href: "/leistungen/webentwicklung" },
        { label: "KI-Integration", href: "/leistungen/ki-integration" },
        { label: "Digitaldruck", href: "/druck" },
        { label: "Automatisierung", href: "/leistungen/automatisierung" },
        { label: "Digital Strategy", href: "/leistungen/digital-transformation" }
      ],
      hasImage: true,
      link: "/services"
    },
    {
      title: "Schnellere Reaktion auf Marktveränderungen",
      description: "PrintzzDigital ist darauf ausgelegt, Ihr Unternehmen agil und wettbewerbsfähig zu halten.",
      stat: "3x",
      statLabel: "schnellere Time-to-Market",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      link: "/leistungen/digital-transformation"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Warum PrintzzDigital für Ihre{' '}
            <span className="text-yellow-500">digitale Transformation?</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Left */}
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col justify-between min-h-[400px] group hover:bg-gray-100 transition-all duration-300">
            <div>
              <div className="flex items-start justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900 max-w-[200px] leading-snug">
                  {benefits[0].title}
                </h3>
                <Link href={benefits[0].link}>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full border border-gray-200 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all">
                    Explore
                  </button>
                </Link>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-auto">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefits[0].description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-yellow-500">
                {benefits[0].icon}
              </div>
              <span className="text-5xl font-bold text-gray-900">{benefits[0].stat}</span>
            </div>
          </div>

          {/* Card 2 - Center (Featured with Image) */}
          <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-300/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-600/30 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 inline-block mb-4">
                <h3 className="text-lg font-bold text-black">
                  {benefits[1].title}
                </h3>
              </div>
              
              {/* Abstract Visual Element */}
              <div className="my-8 flex justify-center">
                <div className="relative">
                  {/* DNA-like structure with code symbols */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="w-1 h-8 bg-black/20 rounded-full"></div>
                    <div className="w-16 h-16 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="w-1 h-8 bg-black/20 rounded-full"></div>
                    <div className="w-14 h-14 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {benefits[1].tags?.map((tag, index) => (
                <Link 
                  key={index}
                  href={tag.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    index === 1 
                      ? 'bg-black text-yellow-400 hover:bg-gray-800' 
                      : 'bg-white/80 text-gray-800 hover:bg-black hover:text-yellow-400'
                  }`}
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Card 3 - Right */}
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col justify-between min-h-[400px] group hover:bg-gray-100 transition-all duration-300">
            <div>
              <div className="flex items-start justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900 max-w-[200px] leading-snug">
                  {benefits[2].title}
                </h3>
                <Link href={benefits[2].link}>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full border border-gray-200 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all">
                    Explore
                  </button>
                </Link>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-auto">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefits[2].description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-yellow-500">
                {benefits[2].icon}
              </div>
              <span className="text-5xl font-bold text-gray-900">{benefits[2].stat}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
