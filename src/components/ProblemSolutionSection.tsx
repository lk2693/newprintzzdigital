'use client';

import { memo } from 'react';
import { X, CheckCircle, TrendingDown, TrendingUp, Clock, DollarSign } from 'lucide-react';

const ProblemSolutionSection = memo(() => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Deine Website ist zu langsam",
      description: "Über 3 Sekunden Ladezeit? Du verlierst 40% deiner Besucher sofort.",
      pain: "= Weniger Kunden, weniger Umsatz"
    },
    {
      icon: X,
      title: "Schlechte Google-Rankings",
      description: "Seite 2 bei Google? Niemand findet dich. Deine Konkurrenz kassiert ab.",
      pain: "= Unsichtbar im Internet"
    },
    {
      icon: Clock,
      title: "Agenturen sind zu langsam",
      description: "3-6 Monate Wartezeit? In der Zeit macht deine Konkurrenz mehr Umsatz.",
      pain: "= Verpasste Chancen jeden Tag"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Website in 48h live",
      description: "Express-Umsetzung mit 95+ Lighthouse Score. Keine Wartezeit.",
      benefit: "= Sofort mehr Kunden"
    },
    {
      icon: TrendingUp,
      title: "Platz 1 bei Google",
      description: "SEO-optimiert von Tag 1. Deine Konkurrenz schaut in die Röhre.",
      benefit: "= 300% mehr Sichtbarkeit"
    },
    {
      icon: DollarSign,
      title: "ROI in 30 Tagen",
      description: "Schnellere Website = mehr Conversions = mehr Umsatz. Messbar.",
      benefit: "= Investition macht sich bezahlt"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Warum verlierst du jeden Tag{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              potenzielle Kunden?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Während du wartest, macht deine Konkurrenz mehr Umsatz. Jeden. Einzelnen. Tag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Problems (Left Side) */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 rounded-full px-4 py-2 mb-4">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-red-200 font-semibold">Deine aktuellen Probleme</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="bg-slate-800/50 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <problem.icon className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
                      <p className="text-gray-300 mb-3">{problem.description}</p>
                      <p className="text-red-400 font-semibold text-sm">{problem.pain}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pain Amplifier */}
            <div className="mt-8 p-6 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-xl">
              <h4 className="text-lg font-bold text-red-400 mb-2">💸 Was kostet dich das?</h4>
              <p className="text-gray-300">
                Bei 1.000 Besuchern pro Monat und nur 1% Conversion-Rate entgehen dir{" "}
                <strong className="text-white">mindestens €5.000 Umsatz</strong> jeden Monat durch eine schlechte Website.
              </p>
            </div>
          </div>

          {/* Solutions (Right Side) */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2 mb-4">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-200 font-semibold">Meine Lösung für dich</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <solution.icon className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-300 mb-3">{solution.description}</p>
                      <p className="text-green-400 font-semibold text-sm">{solution.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefit Amplifier */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl">
              <h4 className="text-lg font-bold text-green-400 mb-2">💰 Was bringt dir das?</h4>
              <p className="text-gray-300">
                Mit einer optimierten Website steigerst du deine Conversion-Rate auf 3-5%.{" "}
                <strong className="text-white">Das sind €15.000-25.000 mehr Umsatz</strong> pro Monat mit denselben Besuchern.
              </p>
            </div>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="text-center my-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/40 rounded-full px-8 py-4">
            <span className="text-red-400 font-bold">Verlust</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-green-400"></div>
              <div className="w-0 h-0 border-l-[8px] border-l-green-400 border-y-[4px] border-y-transparent"></div>
            </div>
            <span className="text-green-400 font-bold">Gewinn</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">In nur 48 Stunden</p>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stoppe den täglichen Verlust. Starte heute.
          </h3>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
            🚀 Ja, ich will mehr Kunden
          </button>
          <p className="text-sm text-gray-400 mt-4">
            ⏰ Kostenloses Erstgespräch noch heute möglich
          </p>
        </div>
      </div>
    </section>
  );
});

ProblemSolutionSection.displayName = 'ProblemSolutionSection';

export default ProblemSolutionSection;
