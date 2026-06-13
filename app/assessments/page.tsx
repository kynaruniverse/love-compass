import Link from "next/link";
import { assessments } from "@/data/assessments";
import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "Assessments"
});

export default function AssessmentsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Where do you want to start?
        </h1>
        <p className="opacity-60">
          Each assessment takes 5–10 minutes. Your answers stay in your
          browser — nothing is stored or transmitted.
        </p>
      </div>

      {/* Receiving group */}
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--primary)] opacity-60">
          Receiving — how you need to be loved
        </p>
        <div className="space-y-3">
          {assessments.filter(a => a.mode === "receiving").map(a => (
            <Link
              key={a.slug}
              href={`/assessments/${a.slug}`}
              className="relative block p-6 rounded-3xl border border-[var(--primary-soft)] bg-[var(--primary-soft)] hover:border-[var(--primary)] hover:shadow-lg transition-all overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif font-semibold text-lg mb-1">{a.title}</h2>
                  <p className="text-sm opacity-60">{a.description}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[var(--primary-soft)] text-[var(--primary)] border border-[var(--primary)] border-opacity-20 flex-shrink-0">
                  Receiving
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Giving group */}
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)] opacity-60">
          Giving — how you naturally love
        </p>
        <div className="space-y-3">
          {assessments.filter(a => a.mode === "giving").map(a => (
            <Link
              key={a.slug}
              href={`/assessments/${a.slug}`}
              className="relative block p-6 rounded-3xl border border-[var(--accent-soft)] bg-[var(--accent-soft)] hover:border-[var(--accent)] hover:shadow-lg transition-all overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif font-semibold text-lg mb-1">{a.title}</h2>
                  <p className="text-sm opacity-60">{a.description}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)] border-opacity-20 flex-shrink-0">
                  Giving
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <p className="text-xs opacity-40 text-center">
        All responses are stored in your browser session only and
        deleted when you close the tab.
      </p>
    </main>
  );
}