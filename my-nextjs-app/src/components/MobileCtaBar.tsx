'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';

export default function MobileCtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Zeige die Bar nach 300px Scroll
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="px-4 py-3">
        <Link href="/contact">
          <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors">
            <PhoneCall className="w-5 h-5" />
            Kostenlose Beratung
          </button>
        </Link>
      </div>
    </div>
  );
}
