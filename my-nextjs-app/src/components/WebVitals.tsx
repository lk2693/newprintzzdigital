'use client';

import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';
import { useEffect } from 'react';

export default function WebVitals() {
  useEffect(() => {
    onCLS(console.log);
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);
  }, []);

  return null;
}
