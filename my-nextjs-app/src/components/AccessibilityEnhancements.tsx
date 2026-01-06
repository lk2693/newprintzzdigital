'use client';

import { useEffect } from 'react';

export default function AccessibilityEnhancements() {
  useEffect(() => {
    // Füge Skip-to-Content Link hinzu
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Zum Hauptinhalt springen';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-yellow-500 focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Verbessere Keyboard-Navigation mit sichtbarem Focus-Ring
    const style = document.createElement('style');
    style.textContent = `
      *:focus-visible {
        outline: 2px solid #EAB308;
        outline-offset: 2px;
        border-radius: 4px;
      }
      
      button:focus-visible,
      a:focus-visible,
      input:focus-visible,
      textarea:focus-visible,
      select:focus-visible {
        outline: 2px solid #EAB308;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
}
