"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-cookies', 'true');
    localStorage.setItem('marketing-cookies', 'true');
    setShowBanner(false);
    
    // Initialize analytics/tracking here
    initializeTracking();
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    localStorage.setItem('analytics-cookies', 'false');
    localStorage.setItem('marketing-cookies', 'false');
    setShowBanner(false);
  };

  const initializeTracking = () => {
    // Add Google Analytics or other tracking code here
    console.log('Analytics initialized');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="bg-slate-900/95 border-white/20 backdrop-blur-lg shadow-2xl">
        <CardContent className="p-6">
          {!showDetails ? (
            // Simple Banner
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Cookie className="h-5 w-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium mb-1">
                    Wir verwenden Cookies
                  </p>
                  <p className="text-slate-300 text-sm">
                    Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                    Durch die weitere Nutzung stimmen Sie der Verwendung zu.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDetails(true)}
                  className="border-white/20 text-slate-200 hover:border-blue-500/50 hover:bg-blue-500/10"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Einstellungen
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptEssential}
                  className="border-white/20 text-slate-200 hover:border-slate-500/50 hover:bg-slate-700/50"
                >
                  Nur Notwendige
                </Button>
                <Button
                  size="sm"
                  onClick={acceptAll}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          ) : (
            // Detailed Settings
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <h3 className="text-white font-semibold">Cookie-Einstellungen</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4 max-h-64 overflow-y-auto">
                {/* Essential Cookies */}
                <div className="border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">Notwendige Cookies</h4>
                    <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                      Immer aktiv
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">Analyse-Cookies</h4>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um die Benutzererfahrung zu verbessern.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">Marketing-Cookies</h4>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte anzuzeigen.
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-white/10">
                <Button
                  variant="outline"
                  onClick={acceptEssential}
                  className="border-white/20 text-slate-200 hover:border-slate-500/50 hover:bg-slate-700/50"
                >
                  Nur Notwendige
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowDetails(false)}
                    className="border-white/20 text-slate-200 hover:border-blue-500/50 hover:bg-blue-500/10"
                  >
                    Zurück
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Auswahl speichern
                  </Button>
                </div>
              </div>

              <p className="text-xs text-slate-400 text-center">
                Weitere Informationen finden Sie in unserer{" "}
                <a href="/datenschutz" className="text-blue-400 hover:underline">
                  Datenschutzerklärung
                </a>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
