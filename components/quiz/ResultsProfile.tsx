import { CategoryResult, NarrativeResult } from "@/types/quiz";
import ProgressBar from "@/components/ui/ProgressBar";

export default function ResultsProfile({
  profile,
  result
}: {
  profile: CategoryResult[];
  result: NarrativeResult;
}) {
  const { primary, secondary } = result;
  const rest = profile.filter(c => c.key !== primary.key);

  return (
    <div className="space-y-10">

      {/* ── Primary archetype spotlight ── */}
      <div className="relative organic-edge p-8 sm:p-10 border border-[var(--border-soft)] bg-[var(--surface)] shadow-md overflow-hidden">
        <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
        <div className="relative space-y-5">
          <div>
            <span className="inline-block px-3 py-1 stamp-badge text-xs font-medium text-[var(--accent)] mb-3">
              Your Result
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[var(--primary)]">
              {primary.name}
            </h2>
            <p className="text-lg opacity-70 mt-1 font-serif italic">
              {primary.tagline}
            </p>
          </div>

          <div className="space-y-4">
            {primary.narrative.map((para, i) => (
              <p key={i} className="leading-relaxed opacity-90">
                {para}
              </p>
            ))}
            {secondary && (
              <p className="leading-relaxed opacity-90">
                {secondary.blurb}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Strengths / Watch-outs / Partner needs ── */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="relative rounded-3xl p-5 border border-[var(--border-soft)] bg-[var(--surface)] shadow-sm overflow-hidden">
          <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
          <div className="relative space-y-3">
            <h3 className="font-serif font-semibold text-[var(--primary)]">Strengths</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {primary.strengths.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--primary)] flex-shrink-0">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative rounded-3xl p-5 border border-[var(--border-soft)] bg-[var(--surface)] shadow-sm overflow-hidden">
          <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
          <div className="relative space-y-3">
            <h3 className="font-serif font-semibold text-[var(--accent)]">Watch For</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {primary.watchOuts.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--accent)] flex-shrink-0">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative rounded-3xl p-5 border border-[var(--border-soft)] bg-[var(--surface)] shadow-sm overflow-hidden">
          <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
          <div className="relative space-y-3">
            <h3 className="font-serif font-semibold text-[var(--primary)]">From a Partner</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {primary.partnerNeeds.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--primary)] flex-shrink-0">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Full profile breakdown ── */}
      {rest.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight font-serif">
            Full Profile Breakdown
          </h2>
          <div className="space-y-3">
            {rest.map(cat => (
              <div key={cat.key} className="space-y-1">
                <div className="flex justify-between text-sm">
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