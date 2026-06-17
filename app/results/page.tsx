"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NarrativeResult } from "@/types/quiz";
import { isGivingMode, getQuizTypeLabel } from "@/lib/helpers";
import { buildProfile, pickArchetype, getBlend, getAssessmentAssets } from "@/lib/resultBuilder";
import ResultsProfile from "@/components/quiz/ResultsProfile";
import ScoreBars from "@/components/charts/ScoreBars";
import CompassProfile from "@/components/charts/CompassProfile";
import Button from "@/components/ui/Button";
import { exportText, exportMarkdown, buildResultTXT, buildResultMD } from "@/lib/export";
import { loadQuizSession } from "@/lib/session";
import { getQuizTypeLabel } from "@/lib/helpers";
import { CategoryResult } from "@/types/quiz";
import ShareCard from "@/components/quiz/ShareCard";
import PaperCard from "@/components/ui/PaperCard";

type ViewMode = "bars" | "compass";

export default function ResultsPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<CategoryResult[] | null>(null);
  const [result, setResult] = useState<NarrativeResult | null>(null);
  const [blend, setBlend] = useState<CategoryResult[]>([]);
  const [quizType, setQuizType] = useState<string>("love");
  const [view, setView] = useState<ViewMode>("compass");

  useEffect(() => {
    const session = loadQuizSession();
    if (!session) return;
    const { scores, questions, type } = session;

    try {
      // Pick correct category map + archetype library based on quiz type + mode
      const { categoryMap, archetypes, flavors } = getAssessmentAssets(type);
      let categoryMap = LOVE_CATEGORIES;
      let archetypes = LOVE_ARCHETYPES;
      let flavors = LOVE_FLAVORS;

      if (type === "intimacy") {
        categoryMap = INTIMACY_CATEGORIES;
        archetypes = INTIMACY_ARCHETYPES;
        flavors = INTIMACY_FLAVORS;
      } else if (type === "love-giving") {
        categoryMap = LOVE_GIVING_CATEGORIES;
        archetypes = LOVE_GIVING_ARCHETYPES;
        flavors = LOVE_GIVING_FLAVORS;
      } else if (type === "intimacy-giving") {
        categoryMap = INTIMACY_GIVING_CATEGORIES;
        archetypes = INTIMACY_GIVING_ARCHETYPES;
        flavors = INTIMACY_GIVING_FLAVORS;
      }

      const built = buildProfile(scores, questions, categoryMap);
      setProfile(built);
      setResult(pickArchetype(built, archetypes, flavors));
      setBlend(getBlend(built));
      setQuizType(type);
    } catch {
      // Corrupted or stale sessionStorage data — fall back to "No results found"
    }
  }, []);

  if (!profile || !result) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-16 flex items-center justify-center">
        <PaperCard
            className="text-center space-y-5 max-w-md w-full rounded-3xl p-8"
            borderColor="rgba(201,161,74,0.25)"
            shadow="0 4px 32px rgba(158,59,78,0.10), inset 0 1px 2px rgba(255,255,255,0.7)"
            accent
          >
            <div className="space-y-4">
              <p className="font-serif opacity-60" style={{ fontSize: 16 }}>
                No results found.
              </p>
              <Button onClick={() => router.push("/assessments")} variant="primary">
                Take an Assessment
              </Button>
            </div>
          </PaperCard>
        </main>
    );
  }

  function handleExportTXT() {
    exportText("love-compass-results.txt", buildResultTXT(result!.primary, profile!));
  }

  function handleExportMD() {
    exportMarkdown("love-compass-results.md", buildResultMD(result!.primary, profile!));
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-12">

      {/* -- Header -- */}
      <div className="space-y-3">
        <span
          className="inline-block px-3 py-1 stamp-badge text-xs font-medium"
          style={{
            background: "linear-gradient(135deg, #f5e199 0%, #c9a14a 60%, #8a6520 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            borderColor: "#c9a14a",
          }}
        >
          Your Result
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)]">
          Here's who you are<br />in love.
        </h1>
        <p className="font-serif leading-relaxed max-w-xl" style={{ fontSize: 15, opacity: 0.7 }}>
          Based on your{" "}
          {getQuizTypeLabel(quizType)}{" "}
          assessment. Sit with this — most people find it more accurate than they expected.
        </p>

        {isGivingMode(quizType) && (
          <div
            className="mt-3 p-4 rounded-2xl text-sm leading-relaxed"
            style={{
              border: "1.5px solid rgba(201,161,74,0.35)",
              background: "var(--accent-soft)",
              boxShadow: "0 1px 8px rgba(201,161,74,0.08)",
            }}
          >
            <p className="font-medium text-[var(--foreground)] mb-1">You're looking at how you give.</p>
            <p className="opacity-80">
              This is how you naturally express love and desire — the specific way you show up for
              a partner without even thinking about it. The interesting part is what happens when
              you compare this to how you need to receive.{" "}
              <a
                href="/assessments"
                className="underline text-[var(--primary)] transition-opacity active:opacity-60"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Take a receiving test →
              </a>
            </p>
          </div>
        )}
      </div>

      {/* ── Narrative result + breakdown ── */}
      <ResultsProfile profile={profile} result={result} blend={blend} mode={isGivingMode(quizType) ? "giving" : "receiving"} />

      {/* ── Chart toggle ── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="font-serif text-2xl font-bold text-[var(--primary)]">Visual Profile</h2>
          <div className="flex gap-2">
            <Button
              variant={view === "compass" ? "primary" : "ghost"}
              onClick={() => setView("compass")}
            >
              Compass
            </Button>
            <Button
              variant={view === "bars" ? "primary" : "ghost"}
              onClick={() => setView("bars")}
            >
              Bar Chart
            </Button>
          </div>
        </div>

        <PaperCard
          className="rounded-3xl p-4"
          borderColor="rgba(201,161,74,0.25)"
          shadow="0 2px 16px rgba(158,59,78,0.07), inset 0 1px 2px rgba(255,255,255,0.7)"
        >
          {view === "compass" ? (
            <CompassProfile profile={profile} />
          ) : (
            <ScoreBars profile={profile} />
          )}
        </PaperCard>
      </div>

      {/* ── Share ── */}
      <div className="space-y-2">
        <h2 className="font-serif text-2xl font-bold text-[var(--primary)]">Share Your Result</h2>
        <ShareCard result={result} profile={profile} quizType={quizType} />
      </div>

      {/* ── Actions ── */}
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => router.push("/assessments")}
          variant="primary"
        >
          Take Another Assessment
        </Button>
      </div>

      {/* ── Save results ── */}
      <details className="group">
        <summary
          className="cursor-pointer text-sm opacity-50 active:opacity-70 transition-opacity list-none flex items-center gap-2"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span className="group-open:hidden">↓ Save your results</span>
          <span className="hidden group-open:inline">↑ Save your results</span>
        </summary>
        <div className="mt-3 flex flex-wrap gap-3">
          <Button onClick={handleExportTXT} variant="secondary">
            Export TXT
          </Button>
          <Button onClick={handleExportMD} variant="secondary">
            Export Markdown
          </Button>
        </div>
      </details>

      {/* ── Disclaimer ── */}
      <p className="text-xs opacity-40 text-center leading-relaxed">
        Love Compass is a self-reflection tool, not a clinical or psychological assessment.
        Results reflect patterns and preferences — not fixed traits — and may shift over time.
      </p>

    </main>
  );
}