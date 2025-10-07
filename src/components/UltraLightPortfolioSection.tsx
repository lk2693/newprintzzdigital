'use client';

import { useState, memo, useMemo } from 'react';
import Image from 'next/image';

// Types für Performance-optimierte Komponente
interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string | null;
  tech: string[];
  cat: string;
}

// Minimale Icons ohne Lucide React für bessere Performance
const ArrowIcon = memo(() => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
));
ArrowIcon.displayName = 'ArrowIcon';

// Erweiterte Projekt-Daten mit ausführlichen Beschreibungen
const projectsData = [
  {
    id: 'kunstplattform',
    title: 'Kunstplattform',
    subtitle: 'Innovative E-Commerce-Lösung für die Kunstbranche',
    image: '/artmarket.png',
    tech: ['Next.js 14', 'TypeScript', 'Stripe', 'Prisma', 'Tailwind CSS'],
    cat: 'E-Commerce',
    description: 'Eine revolutionäre Plattform, die Künstlern ermöglicht, ihre Werke direkt zu vermarkten.',
    features: ['Sichere Zahlungen', 'Künstler-Dashboard', 'Mobile-First Design', 'SEO-Optimierung']
  },
  {
    id: 'architekten',
    title: 'Kloster & Partner',
    subtitle: 'Professionelle Architekturbüro-Website',
    image: null,
    tech: ['Next.js', 'Gallery'],
    cat: 'Architecture'
  },
  {
    id: 'ai-flow',
    title: 'AI Flow System',
    subtitle: 'Intelligente Automatisierung',
    image: '/aiflow.png',
    tech: ['ML', 'Dashboard'],
    cat: 'KI'
  },
  {
    id: 'shop',
    title: 'Online Shop',
    subtitle: 'E-Commerce-Lösung',
    image: '/onlineshop.png',
    tech: ['Next.js 14', 'Payment'],
    cat: 'E-Commerce'
  }
];

// Memoized Project Card für Performance
const ProjectCard = memo(({ project, isActive }: { project: Project; isActive: boolean }) => (
  <div className={`relative border border-slate-200 overflow-hidden ${
    isActive ? 'hover:border-slate-900 transition-all duration-300' : ''
  }`}>
    
    {/* Optimierte Bilddarstellung - Featured ist größer */}
    <div className={`relative ${isActive ? 'h-64 md:h-80' : 'h-48 md:h-52'}`}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain bg-slate-50"
          quality={60}
          loading={isActive ? 'eager' : 'lazy'}
          sizes="(max-width: 768px) 90vw, 400px"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <div className="text-center text-slate-600 p-4">
            <div className="text-lg font-light">{project.title}</div>
            <div className="text-xs opacity-75">{project.cat}</div>
          </div>
        </div>
      )}
      <div className="absolute top-3 left-3">
        <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1 text-xs font-light uppercase tracking-wider">
          {project.cat}
        </span>
      </div>
    </div>

    {/* Info - Featured ist größer */}
    <div className={`bg-white ${isActive ? 'p-6 md:p-8' : 'p-4 md:p-5'}`}>
      <h3 className={`font-light text-slate-900 mb-2 ${
        isActive ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
      }`}>
        {project.title}
      </h3>
      
      <p className={`text-slate-600 mb-3 line-clamp-2 font-light ${
        isActive ? 'text-base md:text-lg' : 'text-sm md:text-base'
      }`}>
        {project.subtitle}
      </p>

      {/* Minimale Tech Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.tech.slice(0, 2).map((tech: string) => (
          <span 
            key={tech}
            className="px-2 py-1 text-xs border border-slate-200 text-slate-600 font-light"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2 px-3 font-light text-sm transition-colors duration-200 flex items-center justify-center gap-2">
        Ansehen
        <ArrowIcon />
      </button>
    </div>
  </div>
));
ProjectCard.displayName = 'ProjectCard';

export default function UltraLightPortfolioSection() {
  const [activeProject, setActiveProject] = useState(0);

  // Memoize current project für Performance
  const currentProject = useMemo(() => projectsData[activeProject], [activeProject]);

  return (
    <section className="py-20 bg-white">
      
      {/* Kompakter Header */}
      <div className="px-4 mb-16 text-center max-w-4xl mx-auto">
        <span className="text-sm tracking-[0.3em] text-slate-400 uppercase font-light mb-4 block">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900">
          Projekte, die begeistern
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
          Von Startups bis etablierte Unternehmen – digitale Visionen verwirklicht.
        </p>
      </div>

      <div className="px-4 max-w-4xl mx-auto">
        
        {/* Mobile: Single Card */}
        <div className="block md:hidden">
          <ProjectCard 
            project={currentProject} 
            isActive={true}
          />

          {/* Minimale Navigation */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="flex gap-1">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`h-1 rounded-full transition-all duration-200 ${
                    index === activeProject 
                      ? 'bg-slate-900 w-4' 
                      : 'bg-slate-300 w-1'
                  }`}
                />
              ))}
            </div>
            <span className="text-slate-600 text-xs ml-2 font-light">
              {activeProject + 1}/{projectsData.length}
            </span>
          </div>
        </div>

        {/* Desktop: Featured Project + Grid Layout */}
        <div className="hidden md:block">
          {/* Featured Project - Gleichmäßig mit Bild links, Text rechts */}
          <div className="border border-slate-200 overflow-hidden mb-16 hover:border-slate-900 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Linke Seite: Zentriertes Bild */}
              <div className="relative h-80 lg:h-96 p-12 lg:p-16 flex items-center justify-center bg-slate-50">
                {projectsData[0].image ? (
                  <div className="relative w-full h-full max-w-md mx-auto">
                    <Image
                      src={projectsData[0].image}
                      alt={projectsData[0].title}
                      fill
                      className="object-contain"
                      quality={80}
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <div className="text-center text-slate-600">
                      <div className="text-2xl font-light">{projectsData[0].title}</div>
                    </div>
                  </div>
                )}
                <div className="absolute top-6 left-6">
                  <span className="bg-white border border-slate-200 text-slate-600 px-4 py-2 text-sm font-light uppercase tracking-wider">
                    {projectsData[0].cat}
                  </span>
                </div>
              </div>
              
              {/* Rechte Seite: Ausführlicher Text und Beschreibung */}
              <div className="p-8 lg:p-16 lg:col-span-2 flex flex-col justify-center bg-white">
                <h3 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6 leading-tight">
                  {projectsData[0].title}
                </h3>
                
                <p className="text-slate-600 text-xl lg:text-2xl mb-6 leading-relaxed font-light">
                  {projectsData[0].subtitle}
                </p>
                
                {/* Kompakte Beschreibung */}
                <div className="text-slate-600 text-base lg:text-lg mb-6 font-light">
                  <p>
                    Moderne E-Commerce-Plattform für Künstler mit sicherer Zahlungsabwicklung und optimierter Performance.
                  </p>
                </div>

                {/* Kompakte Features */}
                <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                  <div className="flex items-center text-slate-600 font-light">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-2"></span>
                    Stripe Integration
                  </div>
                  <div className="flex items-center text-slate-600 font-light">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-2"></span>
                    Mobile Optimiert
                  </div>
                  <div className="flex items-center text-slate-600 font-light">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-2"></span>
                    SEO-Optimierung
                  </div>
                  <div className="flex items-center text-slate-600 font-light">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-2"></span>
                    Dashboard
                  </div>
                </div>                {/* Tech Stack - Größer */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {projectsData[0].tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="border border-slate-200 text-slate-600 px-4 py-2 text-sm font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Button - Größer */}
                <button className="bg-slate-900 text-white px-8 py-4 font-light text-lg hover:bg-slate-800 transition-all duration-300 self-start flex items-center gap-2">
                  Projekt ansehen <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
          
          {/* Weitere Projekte - 3er Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.slice(1).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isActive={false}
              />
            ))}
          </div>
          
          {/* Call-to-Action */}
          <div className="text-center mt-10">
            <button className="bg-slate-900 text-white px-8 py-3 font-light hover:bg-slate-800 transition-all duration-300">
              Alle Projekte ansehen →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
