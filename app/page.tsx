import Link from "next/link";
import { assessments } from "@/data/assessments";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ── */}
      <section className="max-w-4xl mx-auto px-4 py-24 space-y-6">
        <h1 className="text-6xl font-bold tracking-tight">
          Love Compass
        </h1>
        <p className="text-xl opacity-70 max-w-xl leading-relaxed">
          A deeper look at how you experience love, intimacy, and
          connection — mapped across eight dimensions.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/assessments">
            <Button variant="primary">
              Take an Assessment →
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Assessment cards ── */}
      <section className="max-w-4xl mx-auto px-4 pb-24 space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Choose Your Assessment
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {assessments.map(a => (
            <Link
              key={a.slug}
              href={`/assessments/${a.slug}`}
              className="block p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-[var(--primary)] hover:shadow-md transition-all bg-white dark:bg-slate-900"
            >
              <h3 className="font-semibold mb-1">{a.title}</h3>
              <p className="text-sm opacity-60">{a.description}</p>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}