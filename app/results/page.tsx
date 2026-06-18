"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { NarrativeResult, CategoryResult, ScoreMap, Archetype } from "@/types/quiz";
import {
  isGivingMode,
  buildProfile,
  pickArchetype,
  getBlend,
  getAssessmentAssets,
  decodeShareData,
  encodeShareData,
  buildShareUrl,
  loadQuizSession,
  getQuizTypeLabel,
  exportText,
  exportMarkdown,
  buildResultTXT,
  buildResultMD,
} from "@/lib";
import { QUESTION_BANK } from "@/data/assessments";
import { ResultsProfile, ShareCard } from "@/components/quiz";
import { Button, PaperCard, GoldStampBadge } from "@/components/ui";
import { CompassProfile, ScoreBars } from "@/components/charts";

// ─── Co-located page-only components ─────────────────────────────────────────

function NoResults() {
  const router = useRouter();
  return (
    <main
      id="main-content"
      aria-label="No results found"
      className="max-w-3xl mx-auto px-4 py-16 flex items-center justify-center"
    >
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

function ResultsHeader({ isSharedView, quizType }: { isSharedView: boolean; quizType: string }) {
  return (
    <div className="space-y-3">
      <GoldStampBadge>{isSharedView ? "Shared Result" : "Your Result"}</GoldStampBadge>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)]">
        {isSharedView ? <>Here's who they are<br />in love.</> : <>Here's who you are<br />in love.</>}
      </h1>
      <p className="font-serif leading-relaxed max-w-xl" style={{ fontSize: 15, opacity: 0.7 }}>
        Based on {isSharedView ? "their" : "your"}{" "}
        {getQuizTypeLabel(quizType)}{" "}
        assessment. {isSharedView ? "" : "Sit with this — most people find it more accurate than they expected."}
      </p>

      {isGivingMode(quizType) && (
        <aside
          role="note"
          aria-label="About giving assessments"
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
        </aside>
      )}
    </div>
  );
}

type ViewMode = "bars" | "compass";

function ChartToggle({ profile }: { profile: CategoryResult[] }) {
  const [view, setView] = useState<ViewMode>("compass");
  return (
    <section aria-labelledby="chart-toggle-heading" className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 id="chart-toggle-heading" className="font-serif text-2xl font-bold text-[var(--primary)]">Visual Profile</h2>
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
        {view === "compass" ? <CompassProfile profile={profile} /> : <ScoreBars profile={profile} />}
      </PaperCard>
    </section>
  );
}

function SaveResults({ primary, profile }: { primary: Archetype; profile: CategoryResult[] }) {
  function handleExportTXT() {
    exportText("love-compass-results.txt", buildResultTXT(primary, profile));
  }
  function handleExportMD() {
    exportMarkdown("love-compass-results.md", buildResultMD(primary, profile));
  }
  return (
    <details className="group" aria-label="Save your results">
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
        <Button onClick={handleExportTXT} variant="secondary">Export TXT</Button>
        <Button onClick={handleExportMD} variant="secondary">Export Markdown</Button>
      </div>
    </details>
  );
}

function ResultsInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [profile, setProfile] = useState<CategoryResult[] | null>(null);
  const [result, setResult] = useState<NarrativeResult | null>(null);
  const [blend, setBlend] = useState<CategoryResult[]>([]);
  const [quizType, setQuizType] = useState<string>("love");
  const [scoresForShare, setScoresForShare] = useState<ScoreMap | null>(null);
  const [isSharedView, setIsSharedView] = useState(false);

  const loadFrom = useCallback((scores: ScoreMap, type: string): boolean => {
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
  }, []);

  useEffect(() => {
    const sharedParam = searchParams.get("d");
    if (sharedParam) {
      const decoded = decodeShareData(sharedParam);
      if (decoded) {
        try {
          loadFrom(decoded.scores, decoded.type);
          setIsSharedView(true);
          return;
        } catch {
          // fall through
        }
      }
    }

    const session = loadQuizSession();
    if (!session) return;

    const loaded = loadFrom(session.scores, session.type);
    if (loaded) {
      const encoded = encodeShareData(session.scores, session.type);
      router.replace(`/results?d=${encoded}`, { scroll: false });
    }
  }, [searchParams, loadFrom, router]);

  if (!profile || !result) {
    return <NoResults />;
  }

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 py-16 space-y-12">

      {/* -- Shared-result banner -- */}
      {isSharedView && (
        <div
          className="flex items-center gap-3 p-4 rounded-2xl text-sm leading-relaxed"
          role="note"
          aria-label="Viewing a shared result"
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

      <ResultsHeader isSharedView={isSharedView} quizType={quizType} />

      <ResultsProfile
        profile={profile}
        result={result}
        blend={blend}
        mode={isGivingMode(quizType) ? "giving" : "receiving"}
      />

      <ChartToggle profile={profile} />

      {!isSharedView && (
        <section aria-labelledby="share-heading" className="space-y-2">
          <h2 id="share-heading" className="font-serif text-2xl font-bold text-[var(--primary)]">Share Your Result</h2>
          <ShareCard
            result={result}
            profile={profile}
            quizType={quizType}
            shareUrl={scoresForShare ? buildShareUrl(scoresForShare, quizType) : undefined}
          />
        </section>
      )}

      <div className="flex flex-wrap gap-3">
        <Button onClick={() => router.push("/assessments")} variant="primary">
          Take Another Assessment
        </Button>
      </div>

      <SaveResults primary={result.primary} profile={profile} />

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