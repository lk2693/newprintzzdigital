'use client';

import Link from 'next/link';
import Image from 'next/image';

// Echte Projekt-Daten
const projects = [
  {
    name: 'Kunstplattform E-Commerce',
    priority: 'High',
    priorityColor: 'bg-green-100 text-green-700',
    image: '/artmarket.png',
    assigned: ['K', 'P', 'L'],
    link: '/portfolio',
    description: 'E-Commerce-Lösung für die Kunstbranche',
    category: 'E-Commerce'
  },
  {
    name: 'Kloster & Partner',
    priority: 'Medium',
    priorityColor: 'bg-yellow-100 text-yellow-700',
    image: null,
    assigned: ['A', 'M'],
    link: '/portfolio/kloster-und-partner-architekten',
    description: 'Architekturbüro-Website',
    category: 'Website'
  },
  {
    name: 'AI Flow System',
    priority: 'High',
    priorityColor: 'bg-green-100 text-green-700',
    image: '/aiflow.png',
    assigned: ['K', 'P', 'L'],
    link: '/portfolio',
    description: 'Intelligente Automatisierung',
    category: 'KI'
  },
  {
    name: 'Online Shop',
    priority: 'Medium',
    priorityColor: 'bg-yellow-100 text-yellow-700',
    image: '/onlineshop.png',
    assigned: ['M', 'K'],
    link: '/portfolio',
    description: 'E-Commerce-Lösung',
    category: 'E-Commerce'
  },
  {
    name: 'Digital Marketing',
    priority: 'Low',
    priorityColor: 'bg-red-100 text-red-700',
    image: null,
    assigned: ['P', 'A', 'L'],
    link: '/portfolio',
    description: 'Marketing Suite',
    category: 'Marketing'
  }
];

export default function UltraLightPortfolioSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 via-yellow-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ========== SECTION 1: Projektmanagement ========== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Project Dashboard */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-yellow-50 px-6 py-5">
                <h3 className="text-xl font-bold text-gray-900">Projekte</h3>
              </div>
              
              {/* Search Bar */}
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-200">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-gray-400 text-sm">Projekt suchen...</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Filter
                  </button>
                </div>
              </div>

              {/* Section: Ongoing */}
              <div className="px-6 py-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="font-semibold text-gray-900">In Bearbeitung</span>
                  <span className="text-gray-400 text-sm ml-1">5</span>
                </div>
              </div>

              {/* Table Header - Hidden on mobile */}
              <div className="hidden md:block px-6 py-3 bg-gray-50 border-b border-gray-100">
                <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="col-span-5">Projekt</div>
                  <div className="col-span-2">Priorität</div>
                  <div className="col-span-2">Kunden</div>
                  <div className="col-span-3">Team</div>
                </div>
              </div>

              {/* Project Rows */}
              <div className="divide-y divide-gray-100">
                {projects.map((project, index) => (
                  <Link 
                    key={index} 
                    href={project.link}
                    className={`block px-4 md:px-6 py-4 hover:bg-yellow-50/50 transition-colors ${
                      index === projects.length - 1 ? 'bg-gradient-to-r from-orange-50/30 to-yellow-50/30' : ''
                    }`}
                  >
                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                          {project.name.charAt(0)}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-900 block">{project.name}</span>
                          <span className="text-xs text-gray-500">{project.category}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.priorityColor}`}>
                        {project.priority}
                      </span>
                    </div>
                    
                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-5 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                          {project.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-900 truncate">{project.name}</span>
                      </div>
                      <div className="col-span-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${project.priorityColor}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            project.priority === 'High' ? 'bg-green-500' : 
                            project.priority === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></span>
                          {project.priority}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-semibold text-yellow-700">{project.category.substring(0,2).toUpperCase()}</span>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <div className="flex -space-x-2">
                          {project.assigned.map((initial, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                              {initial}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Footer Sections */}
              <div className="px-6 py-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="font-medium text-gray-700">In Prüfung</span>
                  <span className="text-gray-400 text-sm ml-1">8</span>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="font-medium text-gray-700">Abgeschlossen</span>
                  <span className="text-gray-400 text-sm ml-1">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wider">
              Projektmanagement
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Jedes Projekt<br />im Blick behalten
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">Planen, zuweisen und liefern</span> – alles an einem Ort. 
              Mit intelligentem Projekttracking, klaren Deadlines und Echtzeit-Fortschritt.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg">
                  Kostenlose Beratung
                </button>
              </Link>
            </div>
            {/* Feature Tags */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {['Tasks', 'Time tracking', 'Timesheets', 'Reports'].map((label, i) => (
                <div key={i} className="flex items-center justify-center bg-white px-5 py-3.5 rounded-full border border-gray-200 shadow-sm hover:border-gray-900 hover:bg-gray-50 transition-all">
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== SECTION 2: Projekt Showcase ========== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div>
            <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wider">
              Unsere Projekte
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Von der Idee zur<br />digitalen Realität
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">Erstklassige Lösungen erstellen</span>, Projekte verfolgen und 
              Ergebnisse liefern. Ob E-Commerce, KI-Integration oder Webentwicklung – 
              wir setzen Ihre Vision um.
            </p>
            <div className="mt-8">
              <Link href="/portfolio">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg">
                  Alle Projekte ansehen
                </button>
              </Link>
            </div>
            {/* Feature Tags */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {['Webentwicklung', 'KI-Integration', 'Automatisierung', 'Design'].map((label, i) => (
                <div key={i} className="flex items-center justify-center bg-white px-5 py-3.5 rounded-full border border-gray-200 shadow-sm hover:border-gray-900 hover:bg-gray-50 transition-all">
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Budget Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Projekt Budget</h3>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-2xl font-bold text-gray-900">€18.090</span>
                  </div>
                  <span className="text-sm text-gray-500">Abrechenbar gesamt</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-2xl font-bold text-gray-900">€22.090</span>
                  </div>
                  <span className="text-sm text-gray-500">Erwarteter Gewinn</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-2xl font-bold text-gray-900">€2.325</span>
                  </div>
                  <span className="text-sm text-gray-500">Projektkosten</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-2xl font-bold text-gray-900">89.3</span>
                  </div>
                  <span className="text-sm text-gray-500">Marge %</span>
                </div>
              </div>

              {/* Analytics Chart */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Analytics</h4>
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-green-500"></div>
                    <span className="text-gray-600">Budget verwendet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-green-500 border-dashed"></div>
                    <span className="text-gray-600">Prognose</span>
                  </div>
                </div>
                {/* Chart Visualization */}
                <div className="h-32 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="400" y2="25" stroke="#f0f0f0" strokeWidth="1"/>
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#f0f0f0" strokeWidth="1"/>
                    <line x1="0" y1="75" x2="400" y2="75" stroke="#f0f0f0" strokeWidth="1"/>
                    {/* Main line */}
                    <path 
                      d="M0,80 Q50,75 100,70 T200,50 T280,30 T350,35" 
                      fill="none" 
                      stroke="#22c55e" 
                      strokeWidth="2"
                    />
                    {/* Forecast line (dashed) */}
                    <path 
                      d="M280,30 Q320,25 400,20" 
                      fill="none" 
                      stroke="#22c55e" 
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    {/* Area under curve */}
                    <path 
                      d="M0,80 Q50,75 100,70 T200,50 T280,30 L280,100 L0,100 Z" 
                      fill="url(#gradient)" 
                      opacity="0.1"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22c55e"/>
                        <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 pt-2">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mär</span>
                    <span>Apr</span>
                    <span>Mai</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 3: Projekt Grid ========== */}
        <div>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4">
              Ausgewählte Arbeiten
            </h2>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <Link 
                key={index}
                href={project.link}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-yellow-400"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-contain p-4"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                        {project.name.split(' ').map(w => w[0]).join('').substring(0,2)}
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.priorityColor}`}>
                      {project.priority}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors mb-1">
                    {project.name}
                  </h3>
                  <span className="text-xs font-medium text-yellow-600 uppercase tracking-wide">{project.category}</span>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {project.assigned.map((initial, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-gray-800 border-2 border-white flex items-center justify-center text-white text-xs">
                          {initial}
                        </div>
                      ))}
                    </div>
                    <span className="text-yellow-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Ansehen →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link href="/portfolio">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
                Alle Projekte ansehen →
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
