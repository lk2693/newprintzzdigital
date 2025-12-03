import { ArrowLeft, MapPin, Clock, Users, Rocket, Brain, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

export default function KarrierePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück zur Startseite
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Karriere bei{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Printzz
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Gestalte die Zukunft der digitalen Transformation mit uns. 
              Werde Teil eines innovativen Teams, das mit KI und modernster Technologie 
              die Grenzen des Möglichen verschiebt.
            </p>
          </div>

          {/* Warum Printzz */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Warum Printzz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-900/50 border-white/10">
                <CardHeader>
                  <Rocket className="h-8 w-8 text-blue-400 mb-2" />
                  <CardTitle className="text-white">Innovation</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  Arbeite mit cutting-edge Technologien wie KI, Machine Learning und modernen Frameworks.
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-white/10">
                <CardHeader>
                  <Users className="h-8 w-8 text-green-400 mb-2" />
                  <CardTitle className="text-white">Team Spirit</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  Ein motiviertes Team, das sich gegenseitig unterstützt und gemeinsam große Ziele erreicht.
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-white/10">
                <CardHeader>
                  <Brain className="h-8 w-8 text-purple-400 mb-2" />
                  <CardTitle className="text-white">Weiterbildung</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  Kontinuierliche Weiterbildung und die Möglichkeit, neue Technologien zu erlernen.
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-white/10">
                <CardHeader>
                  <Sparkles className="h-8 w-8 text-yellow-400 mb-2" />
                  <CardTitle className="text-white">Flexibilität</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  Flexible Arbeitszeiten, Remote-Work Möglichkeiten und Work-Life-Balance.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Initiativbewerbung */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Initiativbewerbung
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-900/50 border-white/10">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-4">
                    Werde Teil unseres Teams!
                  </CardTitle>
                  <p className="text-slate-300 text-lg">
                    Du passt perfekt zu uns, siehst aber keine passende Stelle? 
                    Bewirb dich initiativ und überzeuge uns von deinen Fähigkeiten!
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">
                        Bereiche, in denen wir suchen:
                      </h3>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-center">
                          <Code2 className="h-4 w-4 mr-2 text-blue-400" />
                          Frontend & Backend Entwicklung
                        </li>
                        <li className="flex items-center">
                          <Brain className="h-4 w-4 mr-2 text-purple-400" />
                          KI & Machine Learning
                        </li>
                        <li className="flex items-center">
                          <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                          UX/UI Design
                        </li>
                        <li className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-green-400" />
                          Projektmanagement
                        </li>
                        <li className="flex items-center">
                          <Rocket className="h-4 w-4 mr-2 text-red-400" />
                          Business Development
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">
                        Was wir uns wünschen:
                      </h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Leidenschaft für Technologie und Innovation</li>
                        <li>• Eigeninitiative und selbstständiges Arbeiten</li>
                        <li>• Teamgeist und kommunikative Fähigkeiten</li>
                        <li>• Bereitschaft, Neues zu lernen</li>
                        <li>• Erfahrung in deinem Fachgebiet</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      So bewirbst du dich:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                      <div>
                        <p className="font-semibold text-white mb-2">📧 Per E-Mail:</p>
                        <p>karriere@printzz.de</p>
                        <p className="text-sm text-slate-400 mt-1">
                          Betreff: "Initiativbewerbung - [Dein Fachbereich]"
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-2">📎 Deine Unterlagen:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Anschreiben mit Motivation</li>
                          <li>• Lebenslauf</li>
                          <li>• Portfolio (falls vorhanden)</li>
                          <li>• Gehaltsvorstellung</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Deine Benefits
            </h2>
            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">💰 Attraktive Vergütung</h3>
                  <p className="text-slate-300">Leistungsgerechte Bezahlung und jährliche Gehaltsreviews</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">🏠 Remote Work</h3>
                  <p className="text-slate-300">Flexibles Arbeiten von überall oder in unserem Büro</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">📚 Weiterbildung</h3>
                  <p className="text-slate-300">Budget für Kurse, Konferenzen und Zertifizierungen</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">⚡ Moderne Technik</h3>
                  <p className="text-slate-300">MacBook Pro, externe Monitore und beste Tools</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">🎯 Eigenverantwortung</h3>
                  <p className="text-slate-300">Flache Hierarchien und eigenständiges Arbeiten</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">🌟 Team Events</h3>
                  <p className="text-slate-300">Regelmäßige Team-Events und gemeinsame Aktivitäten</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bewerbungsprozess */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Bewerbungsprozess
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Bewerbung</h3>
                <p className="text-slate-300">Sende uns deine Unterlagen per E-Mail</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Erstgespräch</h3>
                <p className="text-slate-300">Kennenlern-Call von 30 Minuten</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Tech Interview</h3>
                <p className="text-slate-300">Fachliches Gespräch mit dem Team</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Welcome!</h3>
                <p className="text-slate-300">Onboarding und erstes Projekt</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-xl text-slate-300 mb-6">
                Sende uns deine Initiativbewerbung und überzeuge uns von deinem Talent!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 font-semibold">
                  <Link href="mailto:karriere@printzz.de?subject=Initiativbewerbung&body=Hallo%20Printzz%20Team,%0A%0Aich%20interessiere%20mich%20für%20eine%20Position%20in%20Ihrem%20Unternehmen...">
                    karriere@printzz.de
                  </Link>
                </Button>
                <Button variant="outline" className="border-slate-400 text-slate-300 hover:bg-slate-700 hover:border-slate-300 hover:text-white text-lg px-8 py-3 font-semibold">
                  <Link href="/#kontakt">
                    Mehr über uns
                  </Link>
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
