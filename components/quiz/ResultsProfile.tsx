"use client";

import { useMemo, useState } from "react";
import { CategoryResult, NarrativeResult } from "@/types/quiz";
import { ProgressBar, PaperCard, FadeIn } from "@/components/ui";
import { getIntensity } from "@/lib";

type TabKey = "strengths" | "watchFor" | "partner";

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
  const [activeTab, setActiveTab] = useState<TabKey>("strengths");

  const blendRest = useMemo(
    () => blend.filter(c => c.key !== primary.key),
    [blend, primary.key]
  );

  // Lead paragraph becomes the punchy "In short" pull quote; everything
  // after that — plus the secondary flavour blurb — becomes "The full picture".
  const [leadParagraph, ...restParagraphs] = primary.narrative;

  // Watermark initial — skip a leading "The " so e.g. "The Somatic Lover" -> "S".
  const watermarkLetter = useMemo(() => {
    const words = primary.name.replace(/^The\s+/i, "").split(" ");
    return (words[0]?.[0] ?? primary.name[0] ?? "?").toUpperCase();
  }, [primary.name]);

  const tabs: { key: TabKey; label: string; items: string[] }[] = [
    { key: "strengths", label: "Strengths", items: primary.strengths },
    { key: "watchFor", label: "Watch For", items: primary.watchOuts },
    {
      key: "partner",
      label: mode === "giving" ? "Who Receives You Best" : "From a Partner",
      items: primary.partnerNeeds,
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">

      {/* -- Hero spotlight: full-bleed manuscript panel with watermark initial -- */}
      <FadeIn>
        <div className="lc-results-hero">
          <span className="lc-results-watermark" aria-hidden="true">{watermarkLetter}</span>
          <div className="lc-results-hero-inner">
            <h2 className="lc-results-name">{primary.name}</h2>
            <p className="lc-results-tagline">{primary.tagline}</p>

            {profile[0] && (
              <p className="lc-results-intensity">{getIntensity(profile[0].percentage)}</p>
            )}

            {leadParagraph && (
              <div className="lc-results-inshort">
                <span className="lc-results-inshort-mark" aria-hidden="true">&ldquo;</span>
                <p className="lc-results-inshort-eyebrow">In short</p>
                <p>{leadParagraph}</p>
              </div>
            )}
          </div>
        </div>
      </FadeIn>

      {/* -- Profile Mix -- */}
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
              {blendRest.length === 1 && blendRest[0] && (
                <> -- but <span className="font-medium">{blendRest[0].title}</span> ({blendRest[0].percentage}%) is close behind, and shapes your profile too.</>
              )}
              {blendRest.length === 2 && blendRest[0] && blendRest[1] && (
                <> -- but <span className="font-medium">{blendRest[0].title}</span> ({blendRest[0].percentage}%) and <span className="font-medium">{blendRest[1].title}</span> ({blendRest[1].percentage}%) are both close behind, and shape your profile too.</>
              )}
              {" "}Rather than a single fixed label, think of your results as a blend -- these dimensions work alongside your primary type in how you {mode === "giving" ? "naturally express love and desire" : "experience love and connection"}.
            </p>
          </div>
        </PaperCard>
      )}

      {/* -- Insight tabs -- Strengths / Watch For / From a Partner -- */}
      <PaperCard className="rounded-3xl p-5 sm:p-6" borderColor="rgba(201,161,74,0.25)">
        <div
          className="lc-results-tabbar"
          role="tablist"
          aria-label="Archetype insights"
        >
          {tabs.map(tab => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={`lc-tab-${tab.key}`}
              aria-selected={activeTab === tab.key}
              aria-controls={`lc-tabpanel-${tab.key}`}
              className={`lc-results-tab ${activeTab === tab.key ? "lc-results-tab--active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map(tab => (
          <div
            key={tab.key}
            role="tabpanel"
            id={`lc-tabpanel-${tab.key}`}
            aria-labelledby={`lc-tab-${tab.key}`}
            hidden={activeTab !== tab.key}
            className="lc-results-tab-panel"
          >
            {activeTab === tab.key && (
              <ul>
                {tab.items.map((item, i) => (
                  <li key={i}>
                    <span className="lc-results-tab-bullet" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </PaperCard>

      {/* -- The full picture -- expanded narrative further down -- */}
      {(restParagraphs.length > 0 || secondary) && (
        <section aria-label="The full picture" className="space-y-3">
          <p className="lc-results-fullpicture-eyebrow">The Full Picture</p>
          <div className="lc-results-fullpicture">
            {restParagraphs.map((para, i) => <p key={i}>{para}</p>)}
            {secondary && <p>{secondary.blurb}</p>}
          </div>
        </section>
      )}

      {/* -- Full profile breakdown -- */}
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
