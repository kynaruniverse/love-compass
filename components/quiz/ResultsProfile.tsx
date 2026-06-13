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
            className="rounded-2xl p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold">{cat.title}</h3>
              <span className="ml-auto text-sm font-medium text-[var(--primary)]">
                {cat.percentage}%
              </span>
            </div>
            <ProgressBar value={cat.percentage} />
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
                  <span className="text-slate-500">{cat.percentage}%</span>
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