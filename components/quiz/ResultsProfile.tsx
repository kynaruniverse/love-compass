"use client";

import { useMemo } from "react";
import { CategoryResult, NarrativeResult } from "@/types/quiz";
import { ProgressBar, PaperCard } from "@/components/ui";
import { getIntensity } from "@/lib";

export default function ResultsProfile({
  profile,
  result,
  blend,
  mode = "receiving"
}: {
  profile: CategoryResult[];
  result: NarrativeResult;
  blend: CategoryResult[];
  mode?: "receiving" | "giving";
}) {
  const { primary, secondary } = result;
  const blendRest = useMemo(
    () => blend.filter(c => c.key !== primary.key),
    [blend, primary.key]
  );

  const insightCards = useMemo(() => [
    {
      title: "Strengths",
      items: primary.strengths,
      accent: "var(--primary)",
    },
    {
      title: "Watch For",
      items: primary.watchOuts,
      accent: "var(--accent)",
    },
    {
      title: mode === "giving" ? "Who Receives You Best" : "From a Partner",
      items: primary.partnerNeeds,
      accent: "var(--primary)",
    },
  ], [mode, primary.strengths, primary.watchOuts, primary.partnerNeeds]);

  return (
    <div className="space-y-6 sm:space-y-8">

      {/* ── Primary archetype spotlight ── */}
      <PaperCard className="organic-edge p-5 sm:p-8 lg:p-10" accent>
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[var(--primary)]">
              {primary.name}
            </h2>
            <p className="text-lg opacity-70 mt-1 font-serif italic">
              {primary.tagline}
            </p>
          </div>

          {profile[0] && (
            <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
              {getIntensity(profile[0].percentage)}
            </p>
          )}


          <div className="space-y-4">
            {primary.narrative.map((para, i) => (
              <p key={i} className="leading-relaxed opacity-90 font-serif" style={{ fontSize: 16 }}>
                {para}
              </p>
            ))}
            {secondary && (
              <p className="leading-relaxed opacity-90 font-serif" style={{ fontSize: 16 }}>
                {secondary.blurb}
              </p>
            )}
          </div>
        </div>
      </PaperCard>

      {/* ── Profile Mix ── */}
      {blendRest.length > 0 && (
        <PaperCard
          className="rounded-3xl p-6"
          borderColor="var(--border-soft)"
          shadow="0 1px 8px rgba(158,59,78,0.06), inset 0 1px 2px rgba(255,255,255,0.6)"
        >
          <div className="space-y-2">
            <h3 className="font-serif font-semibold text-[var(--primary)]">Your Profile Mix</h3>
            <p className="text-sm leading-relaxed opacity-80 font-serif" style={{ fontSize: 15 }}>
              You're primarily <span className="font-medium text-[var(--primary)]">{primary.name}</span>
              {blendRest.length === 1 && (
                <> — but <span className="font-medium">{blendRest[0].title}</span> ({blendRest[0].percentage}%) is close behind, and shapes your profile too.</>
              )}
              {blendRest.length === 2 && (
                <> — but <span className="font-medium">{blendRest[0].title}</span> ({blendRest[0].percentage}%) and <span className="font-medium">{blendRest[1].title}</span> ({blendRest[1].percentage}%) are both close behind, and shape your profile too.</>
              )}
              {" "}Rather than a single fixed label, think of your results as a blend — these dimensions work alongside your primary type in how you {mode === "giving" ? "naturally express love and desire" : "experience love and connection"}.
            </p>
          </div>
        </PaperCard>
      )}

      {/* ── Insight cards — horizontal swipe deck ── */}
      <div className="lc-insight-scroll">
        <div
          className="flex gap-4 overflow-x-auto pb-3 px-1"
          role="region"
          aria-label="Insight cards"
          aria-roledescription="carousel"
          tabIndex={0}
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {insightCards.map((card, idx) => (
            <PaperCard
              key={card.title}
              className="rounded-2xl p-5 flex-shrink-0"
              role="group"
              aria-label={`${card.title} — ${idx + 1} of ${insightCards.length}`}
              style={{
                width: "min(72vw, 280px)",
                scrollSnapAlign: "start",
                borderColor: `${card.accent}33`,
              }}
            >
              <div className="space-y-3">
                <h3
                  className="font-serif font-semibold text-sm uppercase tracking-widest"
                  style={{ color: card.accent, fontSize: "0.68rem" }}
                >
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item, i) => (
                    <li
                      key={i}
                      className="font-serif leading-snug"
                      style={{ fontSize: 14, opacity: 0.85 }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </PaperCard>
          ))}
        </div>
      </div>

      {/* ── Full profile breakdown ── */}
      {profile.length > 0 && (
        <section aria-label="Full Profile Breakdown" className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[var(--primary)]">
            Full Profile Breakdown
          </h2>
          <div className="space-y-3">
            {profile.map(cat => {
              const isPrimary = cat.key === primary.key;
              return (
                <div key={cat.key} className="space-y-1">
                  <div className="flex justify-between text-sm font-serif">
                    <span className="font-medium" style={{ color: isPrimary ? "var(--primary)" : undefined }}>
                      {isPrimary && <span aria-hidden="true" style={{ color: "var(--accent)", marginRight: "0.3rem" }}>◆</span>}
                      {cat.title}
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: isPrimary ? "var(--accent)" : undefined, opacity: isPrimary ? 1 : 0.5 }}
                    >
                      {cat.percentage}%
                    </span>
                  </div>
                  <ProgressBar value={cat.percentage} />
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}