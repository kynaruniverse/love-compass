"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ScoreMap, QuizQuestion } from "@/types/quiz";
import { LOVE_CATEGORIES, INTIMACY_CATEGORIES } from "@/data/categories";
import { buildProfile, dominantCategories } from "@/lib/resultBuilder";
import ResultsProfile from "@/components/quiz/ResultsProfile";
import ScoreBars from "@/components/charts/ScoreBars";
import RadarProfile from "@/components/charts/RadarProfile";
import Button from "@/components/ui/Button";
import { exportText, exportMarkdown } from "@/lib/export";
import { CategoryResult } from "@/types/quiz";

type ViewMode = "bars" | "radar";

export default function ResultsPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<CategoryResult[] | null>(null);
  const [quizType, setQuizType] = useState<string>("love");
  const [view, setView] = useState<ViewMode>("bars");

  useEffect(() => {
    const rawScores = sessionStorage.getItem("results");
    const rawQuestions = sessionStorage.getItem("questions");
    const type = sessionStorage.getItem("type") ?? "love";

    if (!rawScores || !rawQuestions) return;

    const scores: ScoreMap = JSON.parse(rawScores);
    const questions: QuizQuestion[] = JSON.parse(rawQuestions);

    // Pick correct category map based on quiz type
    const categoryMap =
      type === "intimacy" ? INTIMACY_CATEGORIES : LOVE_CATEGORIES;

    const built = buildProfile(scores, questions, categoryMap);
    setProfile(built);
    setQuizType(type);
  }, []);

  if (!profile) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <p className="opacity-60">No results found.</p>
        <Button onClick={() => router.push("/assessments")} variant="primary">
          Take an Assessment
        </Button>
      </main>
    );
  }

  const dominant = dominantCategories(profile);
  const spotlightCount = Math.min(dominant.length + 1, 3);

  function handleExportTXT() {
    const text = profile!
      .slice(0, 3)
      .map(c => `${c.title}: ${c.percentage}%`)
      .join("\n");
    exportText("love-compass-results.txt", text);
  }

  function handleExportMD() {
    const lines = [
      `# Love Compass Results`,
      ``,
      `## Top Preferences`,
      ...profile!.slice(0, 3).map(
        c => `- **${c.title}**: ${c.percentage}%\n  ${c.description}`
      ),
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
          Your Love Profile
        </h1>
        <p className="opacity-60 text-sm">
          Based on your{" "}
          {quizType === "love"
            ? "Love Preference"
            : quizType === "intimacy"
            ? "Intimacy Style"
            : "Full Profile"}{" "}
          assessment.
        </p>
      </div>

      {/* ── Spotlight + full profile list ── */}
      <ResultsProfile profile={profile} spotlight={spotlightCount} />

      {/* ── Chart toggle ── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Visual Profile</h2>
          <div className="flex gap-2">
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

        <div className="relative rounded-3xl border border-[var(--border-soft)] p-4 bg-[var(--surface)] overflow-hidden before:absolute before:inset-0 before:paper-texture before:pointer-events-none before:opacity-60">
          <div className="relative rounded-3xl border border-[var(--border-soft)] p-4 bg-[var(--surface)] overflow-hidden shadow-sm">
          <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
          <div className="relative">
            {view === "bars" ? (
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