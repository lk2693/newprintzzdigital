import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie, Shield, BarChart3, Target } from "lucide-react";

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <Cookie className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie-Richtlinie
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transparente Informationen über unsere Verwendung von Cookies und ähnlichen Technologien
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Was sind Cookies?</h2>
            <p className="text-slate-300 mb-4">
              Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. 
              Sie helfen dabei, die Website funktionsfähig zu machen und Ihre Benutzererfahrung zu verbessern.
            </p>
            <p className="text-slate-300">
              Wir verwenden verschiedene Arten von Cookies, die in die folgenden Kategorien fallen:
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-8">
            {/* Essential Cookies */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Notwendige Cookies</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Diese Cookies sind für die ordnungsgemäße Funktion unserer Website unerlässlich und können nicht deaktiviert werden.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">Verwendungszweck:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Speicherung Ihrer Cookie-Präferenzen</li>
                  <li>• Sicherheitsfeatures und Authentifizierung</li>
                  <li>• Grundlegende Website-Funktionalität</li>
                  <li>• Session-Management</li>
                </ul>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Analyse-Cookies</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, damit wir sie verbessern können.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">Verwendungszweck:</h4>
                <ul className="text-slate-300 text-sm space-y-1 mb-3">
                  <li>• Erfassung anonymer Nutzungsstatistiken</li>
                  <li>• Verbesserung der Website-Performance</li>
                  <li>• Identifizierung beliebter Inhalte</li>
                  <li>• Optimierung der Benutzererfahrung</li>
                </ul>
                <div className="text-sm text-slate-400">
                  <strong>Anbieter:</strong> Google Analytics, Vercel Analytics<br />
                  <strong>Speicherdauer:</strong> Bis zu 2 Jahre
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Marketing-Cookies</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Diese Cookies werden verwendet, um Ihnen relevante Werbung und personalisierte Inhalte anzuzeigen.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">Verwendungszweck:</h4>
                <ul className="text-slate-300 text-sm space-y-1 mb-3">
                  <li>• Personalisierte Werbeanzeigen</li>
                  <li>• Remarketing und Retargeting</li>
                  <li>• Social Media Integration</li>
                  <li>• Conversion-Tracking</li>
                </ul>
                <div className="text-sm text-slate-400">
                  <strong>Anbieter:</strong> Google Ads, Facebook Pixel<br />
                  <strong>Speicherdauer:</strong> 30-90 Tage
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Ihre Rechte und Wahlmöglichkeiten</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Sie haben jederzeit die Kontrolle über Ihre Cookie-Einstellungen:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Cookie-Banner:</strong> Bei Ihrem ersten Besuch können Sie Ihre Präferenzen festlegen</li>
                <li>• <strong>Browser-Einstellungen:</strong> Sie können Cookies in Ihrem Browser deaktivieren</li>
                <li>• <strong>Opt-out:</strong> Sie können sich von Tracking-Diensten abmelden</li>
                <li>• <strong>Löschung:</strong> Sie können gespeicherte Cookies jederzeit löschen</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Kontakt & Weitere Informationen</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns gerne:
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p><strong>E-Mail:</strong> datenschutz@printzzdigital.de</p>
                <p><strong>Telefon:</strong> +49 (0) 123 456789</p>
              </div>
              <p className="text-sm">
                Diese Cookie-Richtlinie wurde zuletzt am 16. August 2025 aktualisiert.
                Weitere Informationen finden Sie in unserer{" "}
                <a href="/datenschutz" className="text-blue-400 hover:underline">
                  Datenschutzerklärung
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
