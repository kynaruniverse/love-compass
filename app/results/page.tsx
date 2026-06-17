"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { NarrativeResult, CategoryResult, ScoreMap } from "@/types/quiz";
import { isGivingMode, getQuizTypeLabel } from "@/lib/helpers";
import { GoldStampBadge } from "@/components/ui/ContentSection";
import { buildProfile, pickArchetype, getBlend, getAssessmentAssets } from "@/lib/resultBuilder";
import { QUESTION_BANK } from "@/data/assessments";
import ResultsProfile from "@/components/quiz/ResultsProfile";
import ScoreBars from "@/components/charts/ScoreBars";
import CompassProfile from "@/components/charts/CompassProfile";
import Button from "@/components/ui/Button";
import { exportText, exportMarkdown, buildResultTXT, buildResultMD } from "@/lib/export";
import { loadQuizSession } from "@/lib/session";
import { decodeShareData, encodeShareData, buildShareUrl } from "@/lib/shareLink";
import ShareCard from "@/components/quiz/ShareCard";
import PaperCard from "@/components/ui/PaperCard";

type ViewMode = "bars" | "compass";

function ResultsInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [profile, setProfile] = useState<CategoryResult[] | null>(null);
  const [result, setResult] = useState<NarrativeResult | null>(null);
  const [blend, setBlend] = useState<CategoryResult[]>([]);
  const [quizType, setQuizType] = useState<string>("love");
  const [scoresForShare, setScoresForShare] = useState<ScoreMap | null>(null);
  const [isSharedView, setIsSharedView] = useState(false);
  const [view, setView] = useState<ViewMode>("compass");
  
  function GoldBadge({ children }: { children: React.ReactNode }) {
    return (
      <span
        className="inline-block px-3 py-1 stamp-badge text-xs font-medium"
        style={{
          background: "linear-gradient(135deg, #f5e199 0%, #c9a14a 60%, #8a6520 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          borderColor: "#c9a14a",
        }}
      >
        {children}
      </span>
    );
  }

  useEffect(() => {
    function loadFrom(scores: ScoreMap, type: string) {
      const questions = QUESTION_BANK[type];
      if (!questions) return false;
      const { categoryMap, archetypes, flavors } = getAssessmentAssets(type);
      const built = buildProfile(scores, questions, categoryMap);
      setProfile(built);
      setResult(pickArchetype(built, archetypes, flavors));
      setBlend(getBlend(built));
      setQuizType(type);
      setScoresForShare(scores);
      return true;
    }

    // 1. A shared link always takes priority — anyone opening it should see
    //    that result, even if they have their own session data.
    const sharedParam = searchParams.get("d");
    if (sharedParam) {
      const decoded = decodeShareData(sharedParam);
      if (decoded) {
        try {
          loadFrom(decoded.scores, decoded.type);
          setIsSharedView(true);
          return;
        } catch {
          // Fall through to session-based load below.
        }
      }
    }

    // 2. Otherwise, load the current browser's own just-completed session.
    const session = loadQuizSession();
    if (!session) return;

    try {
      const loaded = loadFrom(session.scores, session.type);
      if (loaded) {
        // Encode the result into the URL so refreshing or bookmarking this page
        // doesn't depend on sessionStorage surviving. Also ensures "Copy Link"
        // always has real data.
        const encoded = encodeShareData(session.scores, session.type);
        router.replace(`/results?d=${encoded}`, { scroll: false });
      }
    } catch {
      // Corrupted or stale sessionStorage data — fall back to "No results found"
    }
    // questions is intentionally omitted — it's fully determined by `type`,
    // re-including it would just churn this effect on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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
              <p className="font-serif font-semibold" style={{ fontSize: 17, color: "var(--primary)" }}>
                No results found
              </p>
              <p className="font-serif opacity-60 leading-relaxed" style={{ fontSize: 15 }}>
                Results aren't saved anywhere — they only exist for the
                browser tab that completed the assessment, or in a shared
                link. If you refreshed, closed the tab, or this link is
                incomplete, you'll need to take the assessment again.
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
    <main id="main-content" className="max-w-3xl mx-auto px-4 py-12 space-y-12">

      {/* -- Shared-result banner -- */}
      {isSharedView && (
        <div
          className="flex items-center gap-3 p-4 rounded-2xl text-sm leading-relaxed"
          role="status"
          style={{
            border: "1.5px solid rgba(158,59,78,0.25)",
            background: "var(--primary-soft)",
          }}
        >
          <span aria-hidden="true" style={{ fontSize: 18 }}>↗</span>
          <p className="font-serif" style={{ color: "var(--foreground)", opacity: 0.85 }}>
            You're viewing a result someone shared with you. Curious what
            yours looks like?{" "}
            <a href="/assessments" className="underline font-medium" style={{ color: "var(--primary)" }}>
              Take the assessment →
            </a>
          </p>
        </div>
      )}

      {/* -- Header -- */}
      <div className="space-y-3">
        <GoldBadge>{isSharedView ? "Shared Result" : "Your Result"}</GoldBadge>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)]">
          {isSharedView ? <>Here's who they are<br />in love.</> : <>Here's who you are<br />in love.</>}
        </h1>
        <p className="font-serif leading-relaxed max-w-xl" style={{ fontSize: 15, opacity: 0.7 }}>
          Based on {isSharedView ? "their" : "your"}{" "}
          {getQuizTypeLabel(quizType)}{" "}
          assessment. {isSharedView ? "" : "Sit with this — most people find it more accurate than they expected."}
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
          <div className="flex gap-2" role="group" aria-label="Chart view toggle">
            <Button
              variant={view === "compass" ? "primary" : "secondary"}
              onClick={() => setView("compass")}
              aria-pressed={view === "compass"}
            >
              Compass
            </Button>
            <Button
              variant={view === "bars" ? "primary" : "secondary"}
              onClick={() => setView("bars")}
              aria-pressed={view === "bars"}
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
      {!isSharedView && (
        <div className="space-y-2">
          <h2 className="font-serif text-2xl font-bold text-[var(--primary)]">Share Your Result</h2>
          <ShareCard
            result={result}
            profile={profile}
            quizType={quizType}
            shareUrl={scoresForShare ? buildShareUrl(scoresForShare, quizType) : undefined}
          />
        </div>
      )}

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
          className="cursor-pointer text-sm opacity-50 active:opacity-70 transition-opacity list-none flex items-center gap-2 select-none"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span
            className="inline-block transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          >
            ↓
          </span>
          Save your results
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

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <main className="max-w-3xl mx-auto px-4 py-16 flex items-center justify-center">
          <p
            className="font-serif italic text-center"
            style={{ color: "var(--primary)", fontSize: 18, opacity: 0.7 }}
          >
            Loading your results…
          </p>
        </main>
      }
    >
      <ResultsInner />
    </Suspense>
  );
}