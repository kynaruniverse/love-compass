"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { NarrativeResult, CategoryResult, ScoreMap } from "@/types/quiz";
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
} from "@/lib";
import { QUESTION_BANK } from "@/data/assessments";
import { ResultsProfile, ShareCard } from "@/components/quiz";
import { Button } from "@/components/ui";
import { ResultsHeader, ChartToggle, SaveResults, NoResults } from "@/components/results";

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