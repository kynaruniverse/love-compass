"use client";

import { useState } from "react";
import { CategoryResult } from "@/types/quiz";
import { Button, PaperCard } from "@/components/ui";
import { CompassProfile, ScoreBars } from "@/components/charts";

type ViewMode = "bars" | "compass";

export default function ChartToggle({ profile }: { profile: CategoryResult[] }) {
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
        {view === "compass" ? (
          <CompassProfile profile={profile} />
        ) : (
          <ScoreBars profile={profile} />
        )}
      </PaperCard>
    </section>
  );
}