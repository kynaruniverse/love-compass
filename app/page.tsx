import Link from "next/link";
import { assessments } from "@/data/assessments";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* -- Hero -- */}
      <section className="relative max-w-4xl mx-auto px-4 py-24 space-y-6 overflow-hidden">
        <div className="hero-blob w-[26rem] h-[26rem] -top-20 -left-24 opacity-70" aria-hidden="true" />
        <div className="hero-blob w-72 h-72 top-32 right-0 opacity-40" aria-hidden="true" />

        <h1 className="text-6xl font-bold tracking-tight">
          <span className="squiggle-underline">Love Compass</span>
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

      {/* -- Assessment cards -- */}
      <section className="max-w-4xl mx-auto px-4 pb-24 space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Choose Your Assessment
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {assessments.map((a, i) => (
            <Link
              key={a.slug}
              href={`/assessments/${a.slug}`}
              className={`relative block p-5 border transition-all bg-[var(--surface)] border-[var(--border-soft)] hover:border-[var(--primary)] hover:shadow-md hover:-translate-y-0.5 overflow-hidden before:absolute before:inset-0 before:paper-texture before:pointer-events-none before:opacity-60 ${
                i % 2 === 0 ? "rounded-3xl" : "organic-edge"
              }`}
            >
              <div className="relative">
                <h3 className="font-serif font-semibold text-lg mb-1">{a.title}</h3>
                <p className="text-sm opacity-60">{a.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}