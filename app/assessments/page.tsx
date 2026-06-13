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
          Choose Your Assessment
        </h1>
        <p className="opacity-60">
          Each assessment takes 5–10 minutes. Your answers are
          never stored or transmitted.
        </p>
      </div>

      <div className="space-y-4">
        {assessments.map(a => (
          <Link
            key={a.slug}
            href={`/assessments/${a.slug}`}
            className="block p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-[var(--primary)] hover:shadow-md transition-all bg-white dark:bg-slate-900"
          >
            <h2 className="font-semibold text-lg mb-1">{a.title}</h2>
            <p className="text-sm opacity-60">{a.description}</p>
          </Link>
        ))}
      </div>

      <p className="text-xs opacity-40 text-center">
        All responses are stored in your browser session only and
        deleted when you close the tab.
      </p>
    </main>
  );
}