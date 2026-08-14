"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Search,
  Gauge,
  Bot,
} from "lucide-react";
import { Reveal } from "./motion";

type CheckStatus = "pass" | "warn" | "fail";

type Check = {
  id: string;
  label: string;
  status: CheckStatus;
  detail: string;
};

type Category = {
  id: "security" | "seo" | "technical" | "ai";
  title: string;
  score: number;
  checks: Check[];
};

type CheckResult = {
  url: string;
  overall: { score: number; grade: string };
  categories: Category[];
};

const LOADING_STEPS = [
  "Website wird aufgerufen …",
  "Sicherheits-Header werden geprüft …",
  "SEO-Grundlagen werden analysiert …",
  "KI-Sichtbarkeit wird geprüft …",
  "Technik & Performance werden bewertet …",
];

const CATEGORY_ICONS = {
  security: ShieldCheck,
  seo: Search,
  technical: Gauge,
  ai: Bot,
} as const;

function gradeColor(grade: string): string {
  if (grade === "A" || grade === "B") return "#2E7D32";
  if (grade === "C" || grade === "D") return "#B45309";
  return "#C62828";
}

function StatusIcon({ status }: { status: CheckStatus }) {
  if (status === "pass")
    return <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#2E7D32]" aria-hidden />;
  if (status === "warn")
    return <AlertTriangle className="h-[18px] w-[18px] shrink-0 text-[#B45309]" aria-hidden />;
  return <XCircle className="h-[18px] w-[18px] shrink-0 text-[#C62828]" aria-hidden />;
}

const STATUS_TEXT: Record<CheckStatus, string> = {
  pass: "in Ordnung",
  warn: "verbesserungswürdig",
  fail: "mangelhaft",
};

type WebsiteCheckSectionProps = {
  /** Zeigt unter dem Formular einen Link zur ausführlichen Check-Seite (nur auf der Startseite). */
  infoLink?: boolean;
};

export default function WebsiteCheckSection({ infoLink = false }: WebsiteCheckSectionProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CheckResult | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading) return;
    setLoadingStep(0);
    const interval = setInterval(
      () => setLoadingStep((s) => Math.min(s + 1, LOADING_STEPS.length - 1)),
      1800
    );
    return () => clearInterval(interval);
  }, [loading]);

  async function runCheck(event: React.FormEvent) {
    event.preventDefault();
    if (loading || url.trim().length === 0) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/website-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error ?? "Die Prüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.");
        return;
      }
      setResult(data);
      requestAnimationFrame(() =>
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
      );
    } catch {
      setError("Die Prüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  }

  const failCount =
    result?.categories.reduce(
      (acc, c) => acc + c.checks.filter((check) => check.status !== "pass").length,
      0
    ) ?? 0;

  return (
    <section
      id="website-check"
      className="scroll-mt-20 border-t border-[#E8E4DC] bg-[#F2EFE9]"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-[100px] sm:px-8">
        <Reveal>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-[34px] bg-[#F28C00]" />
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#A05F00]">
              Kostenloser Website-Check
            </span>
          </div>
          <h2 className="font-expanded m-0 mb-4 max-w-[680px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
            Wie gut ist Ihre Website wirklich?
          </h2>
          <p className="m-0 mb-10 max-w-[560px] text-lg leading-[1.6] text-[#6B655B]">
            Geben Sie Ihre Adresse ein und erhalten Sie in wenigen Sekunden eine
            ehrliche Bewertung zu Sicherheit, SEO, Technik und KI-Sichtbarkeit –
            wird Ihre Website von ChatGPT &amp; Co. gefunden? Kostenlos und ohne
            Anmeldung.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={runCheck}
            className="flex max-w-[640px] flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="website-check-url" className="sr-only">
              Adresse Ihrer Website
            </label>
            <input
              id="website-check-url"
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="ihre-website.de"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
              className="min-w-0 flex-1 rounded-md border border-[#D8D2C6] bg-white px-5 py-4 text-[17px] text-[#26231E] placeholder:text-[#A39C8E] focus:border-[#F28C00] focus:outline-none focus:ring-2 focus:ring-[#FBB800]/40 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || url.trim().length === 0}
              className="flex items-center justify-center gap-2 rounded-md bg-[#141210] px-[30px] py-4 text-[17px] font-bold text-[#FAF9F6] transition-all hover:-translate-y-0.5 hover:bg-[#26231E] hover:text-[#FBB800] hover:shadow-[0_16px_36px_rgba(20,18,16,0.3)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:text-[#FAF9F6] disabled:hover:shadow-none"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
              ) : (
                "Jetzt prüfen"
              )}
            </button>
          </form>
          <p className="mt-3 text-[13px] text-[#A39C8E]">
            Es werden nur öffentlich sichtbare Daten Ihrer Website geprüft. Keine
            Speicherung, keine Anmeldung.
            {infoLink && (
              <>
                {" "}
                <Link
                  href="/website-check"
                  className="font-semibold text-[#A05F00] underline decoration-[#FBB800] decoration-2 underline-offset-4 hover:text-[#F28C00]"
                >
                  Was genau geprüft wird
                </Link>
              </>
            )}
          </p>
        </Reveal>

        <AnimatePresence mode="wait">
          {loading && (
            <motion.p
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-8 flex items-center gap-2.5 text-base text-[#6B655B]"
              role="status"
            >
              <Loader2 className="h-4 w-4 animate-spin text-[#F28C00]" aria-hidden />
              {LOADING_STEPS[loadingStep]}
            </motion.p>
          )}

          {error && !loading && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 max-w-[640px] rounded-md border border-[#C62828]/30 bg-[#C62828]/5 px-5 py-4 text-base text-[#8C1F1F]"
              role="alert"
            >
              {error}
            </motion.p>
          )}

          {result && !loading && (
            <motion.div
              key="result"
              ref={resultRef}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-12"
            >
              {/* Gesamtergebnis */}
              <div className="mb-8 flex flex-wrap items-center gap-6">
                <div
                  className="flex h-[92px] w-[92px] items-center justify-center rounded-full border-4"
                  style={{ borderColor: gradeColor(result.overall.grade) }}
                >
                  <span
                    className="font-expanded text-[40px] font-extrabold leading-none"
                    style={{ color: gradeColor(result.overall.grade) }}
                  >
                    {result.overall.grade}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-expanded text-[24px] font-extrabold text-[#26231E]">
                    {result.overall.score} von 100 Punkten
                  </span>
                  <span className="max-w-[440px] text-[15px] leading-[1.5] text-[#6B655B]">
                    Geprüfte Adresse: {result.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </div>
              </div>

              {/* Kategorien */}
              <div className="grid gap-6 lg:grid-cols-2">
                {result.categories.map((category) => {
                  const Icon = CATEGORY_ICONS[category.id];
                  return (
                    <div
                      key={category.id}
                      className="flex flex-col gap-4 rounded-lg border border-[#E8E4DC] bg-white p-6"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-5 w-5 text-[#F28C00]" aria-hidden />
                          <h3 className="m-0 text-[17px] font-bold text-[#26231E]">
                            {category.title}
                          </h3>
                        </div>
                        <span
                          className="font-expanded text-[17px] font-extrabold"
                          style={{ color: gradeColor(gradeOfScore(category.score)) }}
                        >
                          {category.score}
                        </span>
                      </div>
                      <ul className="m-0 flex list-none flex-col gap-3 p-0">
                        {category.checks.map((check) => (
                          <li key={check.id} className="flex items-start gap-2.5">
                            <span className="mt-0.5">
                              <StatusIcon status={check.status} />
                              <span className="sr-only">{STATUS_TEXT[check.status]}:</span>
                            </span>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-[14px] font-semibold leading-tight text-[#26231E]">
                                {check.label}
                              </span>
                              <span className="text-[13px] leading-[1.45] text-[#6B655B]">
                                {check.detail}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col items-start gap-4 rounded-lg bg-[#141210] p-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1.5">
                  <span className="font-expanded text-[21px] font-extrabold text-[#FAF9F6]">
                    {failCount > 0
                      ? `${failCount} Punkte mit Verbesserungspotenzial gefunden.`
                      : "Starkes Ergebnis – da lässt sich aufbauen."}
                  </span>
                  <span className="text-[15px] leading-[1.5] text-[#B8B2A6]">
                    Wir erklären Ihnen im kostenlosen Erstgespräch, was dahintersteckt
                    – und beheben es für Sie.
                  </span>
                </div>
                <a
                  href="#kontakt"
                  className="flex shrink-0 items-center gap-2 rounded-md bg-[#FBB800] px-7 py-3.5 text-[16px] font-bold text-[#141210] transition-all hover:-translate-y-0.5 hover:bg-[#FFD34D] hover:shadow-[0_16px_36px_rgba(251,184,0,0.25)] active:translate-y-0"
                >
                  Kostenlose Beratung
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function gradeOfScore(score: number): string {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  if (score >= 45) return "D";
  if (score >= 30) return "E";
  return "F";
}
