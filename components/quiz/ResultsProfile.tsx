import { CategoryResult } from "@/types/quiz";
import ProgressBar from "@/components/ui/ProgressBar";

export default function ResultsProfile({
  profile,
  spotlight = 3
}: {
  profile: CategoryResult[];
  spotlight?: number;
}) {
  const top = profile.slice(0, spotlight);
  const rest = profile.slice(spotlight);

  return (
    <div className="space-y-10">
      {/* ── Spotlight: top N categories with full description ── */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Your Top Preferences
        </h2>
        {top.map((cat, i) => (
          <div
            key={cat.key}
            className="relative organic-edge p-6 border border-[var(--border-soft)] bg-[var(--surface)] shadow-sm space-y-3 overflow-hidden"
          >
            <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
            <div className="relative flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm">
                {i + 1}
              </span>
              <h3 className="font-serif text-lg font-semibold">{cat.title}</h3>
              <span className="ml-auto text-sm font-medium px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                {cat.percentage}%
              </span>
            </div>
            <div className="relative">
              <ProgressBar value={cat.percentage} />
            </div>
            <p className="relative text-sm opacity-70 leading-relaxed">
              {cat.description}
            </p>
          </div>
        ))}
      </div>

      {/* ── Full profile: remaining categories condensed ── */}
      {rest.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">
            Full Profile
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