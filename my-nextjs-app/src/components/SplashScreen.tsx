"use client";

import { useState, useEffect } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<"logo" | "line" | "subtitle" | "exit">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("line"), 600);
    const t2 = setTimeout(() => setPhase("subtitle"), 1100);
    const t3 = setTimeout(() => setPhase("exit"), 2000);
    const t4 = setTimeout(() => onFinish(), 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  return (
    <div
      className={`splash-screen ${phase === "exit" ? "splash-exit" : ""}`}
      aria-hidden="true"
    >
      {/* Logo Text */}
      <div className="splash-logo">
        <span className="splash-logo-text">
          Printzz<span className="splash-logo-accent">Digital</span>
        </span>
      </div>

      {/* Horizontal line */}
      <div
        className={`splash-line ${
          phase === "line" || phase === "subtitle" || phase === "exit"
            ? "splash-line-visible"
            : ""
        }`}
      />

      {/* Subtitle */}
      <div
        className={`splash-subtitle ${
          phase === "subtitle" || phase === "exit"
            ? "splash-subtitle-visible"
            : ""
        }`}
      >
        Digitale Transformation
      </div>
    </div>
  );
}
