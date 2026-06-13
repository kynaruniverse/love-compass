"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ScoreMap, QuizQuestion, NarrativeResult } from "@/types/quiz";
import { LOVE_CATEGORIES, INTIMACY_CATEGORIES, HYBRID_CATEGORIES } from "@/data/categories";
import { LOVE_GIVING_CATEGORIES, INTIMACY_GIVING_CATEGORIES, HYBRID_GIVING_CATEGORIES } from "@/data/categories-giving";
import { LOVE_ARCHETYPES, LOVE_FLAVORS } from "@/data/archetypes-love";
import { INTIMACY_ARCHETYPES, INTIMACY_FLAVORS } from "@/data/archetypes-intimacy";
import { HYBRID_ARCHETYPES, HYBRID_FLAVORS } from "@/data/archetypes-hybrid";
import { LOVE_GIVING_ARCHETYPES, LOVE_GIVING_FLAVORS } from "@/data/archetypes-love-giving";
import { INTIMACY_GIVING_ARCHETYPES, INTIMACY_GIVING_FLAVORS } from "@/data/archetypes-intimacy-giving";
import { HYBRID_GIVING_ARCHETYPES, HYBRID_GIVING_FLAVORS } from "@/data/archetypes-hybrid-giving";
import { isGivingMode } from "@/data/assessments";
import { buildProfile, pickArchetype, getBlend } from "@/lib/resultBuilder";
import ResultsProfile from "@/components/quiz/ResultsProfile";
import ScoreBars from "@/components/charts/ScoreBars";
import RadarProfile from "@/components/charts/RadarProfile";
import CompassProfile from "@/components/charts/CompassProfile";
import Button from "@/components/ui/Button";
import { exportText, exportMarkdown } from "@/lib/export";
import { CategoryResult } from "@/types/quiz";

type ViewMode = "bars" | "radar" | "compass";

export default function ResultsPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<CategoryResult[] | null>(null);
  const [result, setResult] = useState<NarrativeResult | null>(null);
  const [blend, setBlend] = useState<CategoryResult[]>([]);
  const [quizType, setQuizType] = useState<string>("love");
  const [view, setView] = useState<ViewMode>("compass");

  useEffect(() => {
    const rawScores = sessionStorage.getItem("results");
    const rawQuestions = sessionStorage.getItem("questions");
    const type = sessionStorage.getItem("type") ?? "love";

    if (!rawScores || !rawQuestions) return;

    const scores: ScoreMap = JSON.parse(rawScores);
    const questions: QuizQuestion[] = JSON.parse(rawQuestions);

    // Pick correct category map + archetype library based on quiz type + mode
    let categoryMap = LOVE_CATEGORIES;
    let archetypes = LOVE_ARCHETYPES;
    let flavors = LOVE_FLAVORS;

    if (type === "intimacy") {
      categoryMap = INTIMACY_CATEGORIES;
      archetypes = INTIMACY_ARCHETYPES;
      flavors = INTIMACY_FLAVORS;
    } else if (type === "hybrid") {
      categoryMap = HYBRID_CATEGORIES;
      archetypes = HYBRID_ARCHETYPES;
      flavors = HYBRID_FLAVORS;
    } else if (type === "love-giving") {
      categoryMap = LOVE_GIVING_CATEGORIES;
      archetypes = LOVE_GIVING_ARCHETYPES;
      flavors = LOVE_GIVING_FLAVORS;
    } else if (type === "intimacy-giving") {
      categoryMap = INTIMACY_GIVING_CATEGORIES;
      archetypes = INTIMACY_GIVING_ARCHETYPES;
      flavors = INTIMACY_GIVING_FLAVORS;
    } else if (type === "hybrid-giving") {
      categoryMap = HYBRID_GIVING_CATEGORIES;
      archetypes = HYBRID_GIVING_ARCHETYPES;
      flavors = HYBRID_GIVING_FLAVORS;
    }

    const built = buildProfile(scores, questions, categoryMap);
    setProfile(built);
    setResult(pickArchetype(built, archetypes, flavors));
    setBlend(getBlend(built));
    setQuizType(type);
  }, []);

  if (!profile || !result) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <p className="opacity-60">No results found.</p>
        <Button onClick={() => router.push("/assessments")} variant="primary">
          Take an Assessment
        </Button>
      </main>
    );
  }

  function handleExportTXT() {
    const lines = [
      result!.primary.name,
      result!.primary.tagline,
      "",
      ...result!.primary.narrative,
      "",
      "Strengths:",
      ...result!.primary.strengths.map(s => `- ${s}`),
      "",
      "Watch For:",
      ...result!.primary.watchOuts.map(s => `- ${s}`),
      "",
      "From a Partner:",
      ...result!.primary.partnerNeeds.map(s => `- ${s}`),
      "",
      "Try This:",
      ...result!.primary.tryThis.map(s => `- ${s}`),
      "",
      "Best With:",
      result!.primary.pairings.bestWith,
      "",
      "Friction With:",
      result!.primary.pairings.frictionWith,
    ];
    exportText("love-compass-results.txt", lines.join("\n"));
  }

  function handleExportMD() {
    const lines = [
      `# ${result!.primary.name}`,
      ``,
      `_${result!.primary.tagline}_`,
      ``,
      ...result!.primary.narrative.map(p => `${p}\n`),
      `## Strengths`,
      ...result!.primary.strengths.map(s => `- ${s}`),
      ``,
      `## Watch For`,
      ...result!.primary.watchOuts.map(s => `- ${s}`),
      ``,
      `## From a Partner`,
      ...result!.primary.partnerNeeds.map(s => `- ${s}`),
      ``,
      `## Try This`,
      ...result!.primary.tryThis.map(s => `- ${s}`),
      ``,
      `## Best With`,
      result!.primary.pairings.bestWith,
      ``,
      `## Friction With`,
      result!.primary.pairings.frictionWith,
      ``,
      `## Full Profile`,
      ...profile!.map(c => `- ${c.title}: ${c.percentage}%`)
    ];
    exportMarkdown("love-compass-results.md", lines.join("\n"));
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-12">

      {/* -- Header -- */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Your Result
        </h1>
        <p className="opacity-60 text-sm">
          Based on your{" "}
          {quizType === "love"
            ? "Love Preference"
            : quizType === "intimacy"
            ? "Intimacy Style"
            : quizType === "hybrid"
            ? "Full Profile"
            : quizType === "love-giving"
            ? "How You Love"
            : quizType === "intimacy-giving"
            ? "How You Desire"
            : "Full Expression Profile"}{" "}
          assessment.
        </p>

        {isGivingMode(quizType) && (
          <div className="mt-3 p-4 rounded-2xl border border-[var(--accent)] bg-[var(--accent-soft)] text-sm leading-relaxed">
            <p className="font-medium text-[var(--foreground)] mb-1">This is your giving profile.</p>
            <p className="opacity-80">
              These results describe how you naturally express love and desire — and the kind of
              partner whose receiving style will match what you give most naturally.{" "}
              <a
                href="/assessments"
                className="underline text-[var(--primary)] hover:opacity-80 transition-opacity"
              >
                Take a receiving test →
              </a>
            </p>
          </div>
        )}
      </div>

      {/* ── Narrative result + breakdown ── */}
      <ResultsProfile profile={profile} result={result} blend={blend} />

      {/* ── Chart toggle ── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-xl font-semibold font-serif">Visual Profile</h2>
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
            <Button
              variant={view === "radar" ? "primary" : "ghost"}
              onClick={() => setView("radar")}
            >
              Radar
            </Button>
          </div>
        </div>

        <div className="relative rounded-3xl border border-[var(--border-soft)] p-4 bg-[var(--surface)] overflow-hidden shadow-sm">
          <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
          <div className="relative">
            {view === "compass" ? (
              <CompassProfile profile={profile} />
            ) : view === "bars" ? (
              <ScoreBars profile={profile} />
            ) : (
              <RadarProfile profile={profile} />
            )}
          </div>
        </div>
      </div>

      {/* ── Actions ── */}
      <div className="flex flex-wrap gap-3">
        <Button onClick={handleExportTXT} variant="secondary">
          Export TXT
        </Button>
        <Button onClick={handleExportMD} variant="secondary">
          Export Markdown
        </Button>
        <Button
          onClick={() => router.push("/assessments")}
          variant="ghost"
        >
          Take Another Assessment
        </Button>
      </div>

      {/* ── Disclaimer ── */}
      <p className="text-xs opacity-40 text-center leading-relaxed">
        Love Compass is a self-reflection tool, not a psychological assessment.
        Results reflect preferences, not fixed traits, and may change over time.
      </p>

    </main>
  );
}