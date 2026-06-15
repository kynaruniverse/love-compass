import { CategoryResult, NarrativeResult } from "@/types/quiz";
import ProgressBar from "@/components/ui/ProgressBar";
import { getIntensity } from "@/lib/resultBuilder";

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
  const rest = profile.filter(c => c.key !== primary.key);
  const blendRest = blend.filter(c => c.key !== primary.key);

  const insightCards = [
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
  ];

  return (
    <div className="space-y-8">

      {/* ── Primary archetype spotlight ── */}
      <div
        className="relative organic-edge p-8 sm:p-10 overflow-hidden"
        style={{
          border: "1.5px solid #c9a14a",
          background: "var(--surface)",
          boxShadow: "0 2px 24px rgba(158,59,78,0.08), inset 0 1px 3px rgba(255,255,255,0.7)",
        }}
      >
        <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
        {/* Gold top accent line */}
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #c9a14a55, transparent)" }}
        />
        <div className="relative space-y-5">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[var(--primary)]">
              {primary.name}
            </h2>
            <p className="text-lg opacity-70 mt-1 font-serif italic">
              {primary.tagline}
            </p>
          </div>

          <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
            {getIntensity(profile[0].percentage)}
          </p>

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
      </div>

      {/* ── Profile Mix ── */}
      {blendRest.length > 0 && (
        <div
          className="relative rounded-3xl p-6 overflow-hidden"
          style={{
            border: "1.5px solid var(--border-soft)",
            background: "var(--surface)",
            boxShadow: "0 1px 8px rgba(158,59,78,0.06), inset 0 1px 2px rgba(255,255,255,0.6)",
          }}
        >
          <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
          <div className="relative space-y-3">
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
        </div>
      )}

      {/* ── Insight cards — horizontal swipe deck ── */}
      <div>
        <div
          className="flex gap-4 overflow-x-auto pb-3"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {insightCards.map(card => (
            <div
              key={card.title}
              className="relative rounded-3xl p-5 flex-shrink-0 overflow-hidden"
              style={{
                width: "72vw",
                maxWidth: 280,
                scrollSnapAlign: "start",
                border: "1.5px solid var(--border-soft)",
                background: "var(--surface)",
                boxShadow: "0 1px 8px rgba(158,59,78,0.06), inset 0 1px 2px rgba(255,255,255,0.6)",
              }}
            >
              <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
              <div className="relative space-y-3">
                <h3
                  className="font-serif font-semibold"
                  style={{ color: card.accent }}
                >
                  {card.title}
                </h3>
                <ul className="space-y-2 text-sm opacity-80">
                  {card.items.map((s, i) => (
                    <li key={i} className="flex gap-2 font-serif">
                      <span className="flex-shrink-0" style={{ color: card.accent }}>◆</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Swipe hint */}
        <p
          className="text-center font-serif mt-1"
          style={{ fontSize: 11, color: "var(--accent)", opacity: 0.5, letterSpacing: "0.06em" }}
        >
          swipe to explore ›
        </p>
      </div>

      {/* ── Try This ── */}
      <div
        className="relative rounded-3xl p-6 overflow-hidden"
        style={{
          border: "1.5px solid var(--border-soft)",
          background: "var(--surface)",
          boxShadow: "0 1px 8px rgba(158,59,78,0.06), inset 0 1px 2px rgba(255,255,255,0.6)",
        }}
      >
        <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
        <div className="relative space-y-3">
          <h3 className="font-serif font-semibold" style={{ color: "var(--accent)" }}>Try This</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {primary.tryThis.map((s, i) => (
              <li key={i} className="flex gap-2 font-serif">
                <span className="flex-shrink-0" style={{ color: "var(--accent)" }}>◆</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Pairings ── */}
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { title: "Best With", body: primary.pairings.bestWith, accent: "var(--primary)" },
          { title: "Friction With", body: primary.pairings.frictionWith, accent: "var(--accent)" },
        ].map(p => (
          <div
            key={p.title}
            className="relative rounded-3xl p-5 overflow-hidden"
            style={{
              border: "1.5px solid var(--border-soft)",
              background: "var(--surface)",
              boxShadow: "0 1px 8px rgba(158,59,78,0.06), inset 0 1px 2px rgba(255,255,255,0.6)",
            }}
          >
            <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
            <div className="relative space-y-2">
              <h3 className="font-serif font-semibold" style={{ color: p.accent }}>{p.title}</h3>
              <p className="text-sm leading-relaxed opacity-80 font-serif">{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Full profile breakdown ── */}
      {rest.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[var(--primary)]">
            Full Profile Breakdown
          </h2>
          <div className="space-y-3">
            {rest.map(cat => (
              <div key={cat.key} className="space-y-1">
                <div className="flex justify-between text-sm font-serif">
                  <span className="font-medium">{cat.title}</span>
                  <span className="opacity-50">{cat.percentage}%</span>
                </div>
                <ProgressBar value={cat.percentage} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}