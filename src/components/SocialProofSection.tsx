'use client';

import { useState, useEffect, memo } from 'react';
import { Star, Quote, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sarah Weber",
    company: "Weber Consulting GmbH",
    role: "Geschäftsführerin",
    text: "Lucas hat unsere Website von 4 Sekunden auf 1.2 Sekunden Ladezeit optimiert. Unsere Conversion Rate ist um 180% gestiegen!",
    result: "+180% Conversions",
    metric: "1.2s Ladezeit",
    rating: 5,
    image: "/testimonials/sarah-weber.jpg",
    projectType: "Performance-Optimierung"
  },
  {
    id: 2,
    name: "Michael Hoffmann",
    company: "TechStart München",
    role: "CTO",
    text: "Unfassbar schnelle Umsetzung! In 3 Tagen hatte ich eine komplette E-Commerce Plattform mit 95 Lighthouse Score.",
    result: "95 Lighthouse Score",
    metric: "3 Tage Umsetzung",
    rating: 5,
    image: "/testimonials/michael-hoffmann.jpg",
    projectType: "E-Commerce System"
  },
  {
    id: 3,
    name: "Dr. Anna Schmidt",
    company: "Schmidt & Partner Rechtsanwälte",
    role: "Partnerin",
    text: "Endlich eine Website, die nicht nur schön aussieht, sondern auch bei Google gefunden wird. +300% mehr Anfragen!",
    result: "+300% Anfragen",
    metric: "Platz 1 Google",
    rating: 5,
    image: "/testimonials/anna-schmidt.jpg",
    projectType: "SEO & Website"
  }
];

const liveActivity = [
  { text: "🚀 Gerade live: Performance-Boost für Münchener Startup (+2.1s Geschwindigkeit)", time: "vor 2 Min" },
  { text: "⚡ Soeben abgeschlossen: E-Shop mit 97 Lighthouse Score", time: "vor 15 Min" },
  { text: "🎯 Live optimiert: SEO-Ranking von Position 45 auf Position 3", time: "vor 1 Std" },
  { text: "🔥 Gerade deployed: KI-Integration für Beratungsunternehmen", time: "vor 2 Std" }
];

const TrustBadges = memo(() => (
  <div className="flex flex-wrap justify-center gap-6 items-center text-sm text-gray-400">
    <div className="flex items-center gap-2">
      <CheckCircle className="w-4 h-4 text-green-400" />
      <span>Google Partner Zertifiziert</span>
    </div>
    <div className="flex items-center gap-2">
      <CheckCircle className="w-4 h-4 text-green-400" />
      <span>DSGVO Konform</span>
    </div>
    <div className="flex items-center gap-2">
      <CheckCircle className="w-4 h-4 text-green-400" />
      <span>99.9% Uptime Garantie</span>
    </div>
  </div>
));
TrustBadges.displayName = 'TrustBadges';

const LiveActivityFeed = memo(() => {
  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % liveActivity.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-800/30 border border-orange-500/20 rounded-lg p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-300 font-medium">Live Aktivität</span>
      </div>
      <div className="text-sm text-gray-100 min-h-[2.5rem] flex items-center">
        <p className="transition-opacity duration-300">
          {liveActivity[currentActivity].text}
        </p>
      </div>
      <div className="text-xs text-orange-300 mt-1">
        {liveActivity[currentActivity].time}
      </div>
    </div>
  );
});
LiveActivityFeed.displayName = 'LiveActivityFeed';

const TestimonialCard = memo(({ testimonial, isActive }: { testimonial: typeof testimonials[0], isActive: boolean }) => (
  <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}>
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-white">{testimonial.name}</h4>
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-300">{testimonial.role}</p>
          <p className="text-sm text-orange-300">{testimonial.company}</p>
        </div>
      </div>
      
      <Quote className="w-6 h-6 text-orange-400 mb-3" />
      <p className="text-gray-100 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">{testimonial.result}</div>
            <div className="text-xs text-gray-400">Ergebnis</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-400">{testimonial.metric}</div>
            <div className="text-xs text-gray-400">Kennzahl</div>
          </div>
        </div>
        <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full">
          {testimonial.projectType}
        </span>
      </div>
    </div>
  </div>
));
TestimonialCard.displayName = 'TestimonialCard';

const SuccessMetrics = memo(() => {
  const metrics = [
    { number: "47+", label: "Erfolgreiche Projekte", icon: TrendingUp },
    { number: "98%", label: "Kundenzufriedenheit", icon: Star },
    { number: "<48h", label: "Express-Umsetzung", icon: Clock },
    { number: "95+", label: "Ø Lighthouse Score", icon: CheckCircle }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg border border-white/5">
          <metric.icon className="w-6 h-6 mx-auto mb-2 text-orange-400" />
          <div className="text-2xl font-bold text-white mb-1">{metric.number}</div>
          <div className="text-xs text-gray-400">{metric.label}</div>
        </div>
      ))}
    </div>
  );
});
SuccessMetrics.displayName = 'SuccessMetrics';

export default function SocialProofSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Success Metrics */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Zahlen die{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              überzeugen
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">Echte Ergebnisse für echte Unternehmen</p>
          <SuccessMetrics />
        </div>

        {/* Live Activity Feed */}
        <div className="mb-12">
          <LiveActivityFeed />
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Was unsere Kunden sagen</h3>
          
          <div className="max-w-2xl mx-auto relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === activeTestimonial}
              />
            ))}
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeTestimonial ? 'bg-orange-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <TrustBadges />
      </div>
    </section>
  );
}
