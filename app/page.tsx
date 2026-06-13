import Link from "next/link";
import { assessments } from "@/data/assessments";
import Button from "@/components/ui/Button";
import HeroBlob from "@/components/ui/HeroBlob";

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* -- Hero -- */}
      <section className="relative max-w-4xl mx-auto px-4 py-28 sm:py-36 space-y-6 overflow-hidden min-h-[480px] flex flex-col justify-center">
        <HeroBlob />

        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Love Compass
          </h1>
          <p className="text-xl opacity-70 max-w-xl leading-relaxed mt-4">
            Understand how you love, how you need to be loved, and how those
            two things shape every relationship you're in.
          </p>
          <div className="flex flex-wrap gap-3 pt-6">
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
              className={`relative block p-5 border transition-all bg-[var(--surface)] border-[var(--border-soft)] hover:border-[var(--primary)] hover:shadow-lg hover:-translate-y-0.5 overflow-hidden shadow-sm ${
                i % 2 === 0 ? "rounded-3xl" : "organic-edge"
              }`}
            >
              <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
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