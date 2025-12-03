'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FullScreenServices() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const allMessages = [
    { sender: "user", text: "Wir brauchen eine neue Website für unser Unternehmen." },
    { sender: "bot", text: "Gerne! Welche Funktionen sind Ihnen besonders wichtig?" },
    { sender: "user", text: "Online-Buchung und ein modernes Design." },
    { sender: "bot", text: "Perfekt! Wir erstellen Ihnen einen individuellen Vorschlag." },
    { sender: "user", text: "Wie lange dauert die Umsetzung?" },
    { sender: "bot", text: "Je nach Umfang ca. 4-8 Wochen. Wir halten Sie stets auf dem Laufenden!" }
  ];

  // Animation: Nachrichten nacheinander einblenden
  useEffect(() => {
    if (visibleMessages < allMessages.length) {
      const isBot = allMessages[visibleMessages]?.sender === 'bot';
      
      if (isBot && visibleMessages > 0) {
        setIsTyping(true);
        const typingTimer = setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(prev => prev + 1);
        }, 1200);
        return () => clearTimeout(typingTimer);
      } else {
        const timer = setTimeout(() => {
          setVisibleMessages(prev => prev + 1);
        }, 800);
        return () => clearTimeout(timer);
      }
    } else {
      // Reset nach allen Nachrichten
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [visibleMessages]);

  const features = [
    {
      title: "Professionelle Beratung",
      subtitle: "PrintzzDigital berät Sie individuell für Ihre digitale Strategie.",
      type: "chat"
    },
    {
      title: "Video-Beratung & Support",
      subtitle: "PrintzzDigital bietet persönliche Betreuung per Video-Call oder in einem persönlichen Gespräch vor Ort.",
      type: "video",
      image: "/call.png"
    },
    {
      title: "Kundenübersicht & CRM",
      subtitle: "PrintzzDigital hilft Ihnen, alle Kundendaten zentral zu verwalten.",
      type: "profile",
      profile: {
        name: "Max Mustermann",
        company: "Musterfirma GmbH",
        info: [
          { label: "Projektstart", value: "15. Nov 2024" },
          { label: "Projekt-ID", value: "PD-2024-089" },
          { label: "Branche", value: "E-Commerce" },
          { label: "Standort", value: "München" }
        ],
        status: "Aktiv"
      },
      report: {
        title: "Projekt-Report",
        items: [
          { label: "Website Performance", value: "Optimal" },
          { label: "Conversion Rate", value: "4.2% (Sehr gut)" },
          { label: "SEO Score", value: "92/100" }
        ]
      }
    },
    {
      title: "Projektplanung & Timeline",
      subtitle: "PrintzzDigital plant Ihre Projekte effizient und transparent.",
      type: "calendar"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-2xl">
            Features für Ihre{' '}
            <span className="text-yellow-500">digitale Reise</span>
          </h2>
          <p className="text-gray-600 max-w-md text-lg">
            PrintzzDigital ist darauf ausgelegt, Ihr Unternehmen zu unterstützen und fundierte Entscheidungen für nachhaltiges Wachstum zu treffen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 - Chat */}
          <div className="bg-gray-50 rounded-3xl p-6 lg:p-8 min-h-[400px]">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{features[0].title}</h3>
              <p className="text-gray-500 text-sm">{features[0].subtitle}</p>
            </div>
            
            {/* Interactive Chat Interface */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mt-6 h-[280px] flex flex-col">
              {/* Messages Area */}
              <div className="flex-1 space-y-3 overflow-y-auto">
                {allMessages.slice(0, visibleMessages).map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm transition-all ${
                      msg.sender === 'user' 
                        ? 'bg-gray-100 text-gray-800 rounded-br-md' 
                        : 'bg-yellow-500 text-black rounded-bl-md'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-yellow-500 px-4 py-2 rounded-2xl rounded-bl-md">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-black/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-black/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-black/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Input Area */}
              <div className="flex items-center gap-2 pt-3 border-t border-gray-100 mt-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Schreiben Sie eine Nachricht..."
                  className="flex-1 text-sm text-gray-600 bg-transparent outline-none placeholder:text-gray-400"
                />
                <button className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Video Call */}
          <div className="bg-gray-50 rounded-3xl p-6 lg:p-8 min-h-[400px]">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{features[1].title}</h3>
              <p className="text-gray-500 text-sm">{features[1].subtitle}</p>
            </div>
            
            {/* Video Interface */}
            <div className="relative rounded-2xl overflow-hidden mt-6 bg-gray-200 aspect-video">
              {features[1].image && (
                <Image
                  src={features[1].image}
                  alt="Video Call"
                  fill
                  className="object-contain"
                />
              )}
              {/* Status Badge */}
              <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                LIVE
              </div>
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Profile & Report */}
          <div className="bg-gray-50 rounded-3xl p-6 lg:p-8 min-h-[400px]">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{features[2].title}</h3>
              <p className="text-gray-500 text-sm">{features[2].subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                    MM
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{features[2].profile?.name}</h4>
                    <p className="text-xs text-gray-500">{features[2].profile?.company}</p>
                  </div>
                  <button className="ml-auto text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-yellow-600 text-xs font-medium bg-yellow-50 px-2 py-1 rounded-lg w-fit">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    {features[2].profile?.status}
                  </div>
                  
                  {features[2].profile?.info?.map((item, index) => (
                    <div key={index} className="flex justify-between text-xs">
                      <span className="text-gray-500">{item.label}</span>
                      <span className="text-gray-900 font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 bg-yellow-500 text-black font-medium py-2 rounded-xl text-sm hover:bg-yellow-600 transition-colors">
                  Projekt öffnen
                </button>
              </div>
              
              {/* Report Card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{features[2].report?.title}</h4>
                </div>
                
                <div className="space-y-3">
                  {features[2].report?.items?.map((item, index) => (
                    <div key={index}>
                      <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 bg-gray-100 text-gray-700 font-medium py-2 rounded-xl text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Report herunterladen
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 - Calendar */}
          <div className="bg-gray-50 rounded-3xl p-6 lg:p-8 min-h-[400px]">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{features[3].title}</h3>
              <p className="text-gray-500 text-sm">{features[3].subtitle}</p>
            </div>
            
            {/* Calendar */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold text-gray-900">Dezember 2024</span>
                </div>
                <div className="flex gap-1">
                  <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {['S', 'M', 'D', 'M', 'D', 'F', 'S'].map((day, i) => (
                  <div key={i} className="py-2 text-gray-400 font-medium">{day}</div>
                ))}
                {/* Empty cells for alignment */}
                {[...Array(6)].map((_, i) => (
                  <div key={`empty-${i}`} className="py-2 text-gray-300"></div>
                ))}
                {/* Days */}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const isToday = day === 3;
                  const hasEvent = [5, 12, 18, 24].includes(day);
                  return (
                    <div 
                      key={day} 
                      className={`py-2 rounded-lg cursor-pointer transition-colors ${
                        isToday 
                          ? 'bg-yellow-500 text-black font-bold' 
                          : hasEvent 
                            ? 'bg-yellow-100 text-yellow-700 font-medium hover:bg-yellow-200'
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              
              {/* Upcoming Events */}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Website Launch</p>
                    <p className="text-xs text-gray-500">5. Dez, 10:00 Uhr</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Design Review</p>
                    <p className="text-xs text-gray-500">12. Dez, 14:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
