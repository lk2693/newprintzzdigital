import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Unternehmen */}
          <div className="space-y-4">
            <h3 className="text-xl font-light text-white">Printzz GmbH</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Ihr Partner für digitale Transformation und innovative Weblösungen.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/" 
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-white">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="font-light">Schuhstraße 42, 38100 Braunschweig</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="h-4 w-4 text-orange-400" />
                <Link href="tel:+4953112345" className="hover:text-white transition-colors font-light">
                  +49 531 123456
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="h-4 w-4 text-orange-400" />
                <Link href="mailto:info@printzz.de" className="hover:text-white transition-colors font-light">
                  info@printzz.de
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-white">Leistungen</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/leistungen/webentwicklung" className="hover:text-white transition-colors font-light">
                  Webentwicklung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/ki-integration" className="hover:text-white transition-colors font-light">
                  KI-Integration
                </Link>
              </li>
              <li>
                <Link href="/leistungen/automatisierung" className="hover:text-white transition-colors font-light">
                  Automatisierung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/digital-transformation" className="hover:text-white transition-colors font-light">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-white">Unternehmen</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link 
                  href="/karriere" 
                  className="hover:text-white transition-colors font-light"
                >
                  Karriere
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-white transition-colors font-light"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-white transition-colors font-light"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-white">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link 
                  href="/impressum" 
                  className="hover:text-white transition-colors font-light"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link 
                  href="/datenschutz" 
                  className="hover:text-white transition-colors font-light"
                >
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link 
                  href="/agb" 
                  className="hover:text-white transition-colors font-light"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500 font-light">
              © 2025 Printzz GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/karriere" 
                className="text-slate-500 hover:text-white transition-colors font-light"
              >
                Karriere
              </Link>
              <Link 
                href="/impressum" 
                className="text-slate-500 hover:text-white transition-colors font-light"
              >
                Impressum
              </Link>
              <Link 
                href="/datenschutz" 
                className="text-slate-500 hover:text-white transition-colors font-light"
              >
                Datenschutz
              </Link>
              <Link 
                href="/agb" 
                className="text-slate-500 hover:text-white transition-colors font-light"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
