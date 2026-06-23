"use client";

import { useMemo, useState } from "react";
import { CategoryResult, NarrativeResult } from "@/types/quiz";
import { PaperCard, FadeIn } from "@/components/ui";
import { CompassProfile, ScoreBars } from "@/components/charts";
import { getIntensity } from "@/lib";

type TabKey = "strengths" | "growthEdges" | "partner";

export default function ResultsProfile({
  profile,
  result,
  blend,
  mode = "receiving",
  isSharedView = false,
}: {
  profile: CategoryResult[];
  result: NarrativeResult;
  blend: CategoryResult[];
  mode?: "receiving" | "giving";
  isSharedView?: boolean;
}) {
  const { primary, secondary } = result;
  const [activeTab, setActiveTab] = useState<TabKey>("strengths");

  const blendRest = useMemo(
    () => blend.filter(c => c.key !== primary.key),
    [blend, primary.key]
  );

  // Lead paragraph becomes the "In short" pull quote; everything after that,
  // plus the secondary flavour blurb, becomes "The full picture" further down.
  const [leadParagraph, ...restParagraphs] = primary.narrative;

  const tabs: { key: TabKey; label: string; items: string[] }[] = [
    { key: "strengths", label: "Strengths", items: primary.strengths },
    { key: "growthEdges", label: "Growth Edges", items: primary.watchOuts },
    { key: "partner", label: "From a Partner", items: primary.partnerNeeds },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">

      {/* -- Hero: faux-3D tilted card, stacked on ghost layers -- */}
      <FadeIn>
        <div className="lc-results-hero-wrap">
          <div className="lc-results-hero-card">
            <span className="lc-results-seal" aria-hidden="true">
              <span className="lc-results-seal-text">
                {isSharedView ? <>Their<br />Result</> : <>Your<br />Result</>}
              </span>
            </span>

            <div className="lc-results-hero-inner">
              <h2 className="lc-results-name">{primary.name}</h2>
              <p className="lc-results-tagline">{primary.tagline}</p>

              {profile[0] && (
                <p className="lc-results-intensity">{getIntensity(profile[0].percentage)}</p>
              )}

              {leadParagraph && (
                <div className="lc-results-inshort">
                  <p className="lc-results-inshort-eyebrow">In short</p>
                  <p>{leadParagraph}</p>
                </div>
              )}
            </div>
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
                <>, but <span className="font-medium">{blendRest[0].title}</span> ({blendRest[0].percentage}%) is close behind, and shapes your profile too.</>
              )}
              {blendRest.length === 2 && blendRest[0] && blendRest[1] && (
                <>, but <span className="font-medium">{blendRest[0].title}</span> ({blendRest[0].percentage}%) and <span className="font-medium">{blendRest[1].title}</span> ({blendRest[1].percentage}%) are both close behind, and shape your profile too.</>
              )}
              {" "}Rather than a single fixed label, think of your results as a blend, with these dimensions working alongside your primary type in how you {mode === "giving" ? "naturally express love and desire" : "experience love and connection"}.
            </p>
          </div>
        </PaperCard>
      )}

      {/* -- Insight tabs -- Strengths / Growth Edges / From a Partner -- */}
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

      {/* -- Merged visual: compass + score list, one section instead of two -- */}
      {profile.length > 0 && (
        <section aria-label="Your full profile">
          <PaperCard
            className="rounded-3xl p-5 sm:p-7"
            borderColor="rgba(201,161,74,0.25)"
            shadow="0 2px 16px rgba(158,59,78,0.07), inset 0 1px 2px rgba(255,255,255,0.7)"
          >
            <span className="lc-results-visual-tag">Your Full Profile</span>
            <CompassProfile profile={profile} />
            <div className="lc-results-visual-divider" aria-hidden="true" />
            <ScoreBars profile={profile} />
          </PaperCard>
        </section>
      )}
    </div>
  );
}
