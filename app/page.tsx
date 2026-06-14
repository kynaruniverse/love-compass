import Link from "next/link";
import dynamic from "next/dynamic";
import { assessments } from "@/data/assessments";
import Button from "@/components/ui/Button";

const HeroBlob = dynamic(() => import("@/components/ui/HeroBlob"), { ssr: false });

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
            Most people move through relationships collecting evidence about other people. Rarely about themselves. Love Compass is the other kind of mirror.
          </p>
          <div className="flex flex-wrap gap-3 pt-6">
            <Link href="/assessments">
              <Button variant="primary">
                Take an Assessment →
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">
                What is this?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* -- Assessment cards -- */}
      <section className="max-w-4xl mx-auto px-4 pb-24 space-y-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Two questions worth sitting with.
        </h2>

        {/* Receiving group */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--primary)] opacity-60">
            How you need to be loved
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {assessments.filter(a => a.mode === "receiving").map((a, i) => (
              <Link
                key={a.slug}
                href={`/assessments/${a.slug}`}
                className={`relative block p-5 border transition-all bg-[var(--primary-soft)] border-[var(--primary-soft)] hover:border-[var(--primary)] hover:shadow-lg hover:-translate-y-0.5 overflow-hidden shadow-sm ${
                  i % 2 === 0 ? "rounded-3xl" : "organic-edge"
                }`}
              >
                <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif font-semibold text-lg">{a.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[var(--primary-soft)] text-[var(--primary)] border border-[var(--primary)] border-opacity-20 flex-shrink-0">
                      Receiving
                    </span>
                  </div>
                  <p className="text-sm opacity-60">{a.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Giving group */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)] opacity-60">
            How you naturally love
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {assessments.filter(a => a.mode === "giving").map((a, i) => (
              <Link
                key={a.slug}
                href={`/assessments/${a.slug}`}
                className={`relative block p-5 border transition-all bg-[var(--accent-soft)] border-[var(--accent-soft)] hover:border-[var(--accent)] hover:shadow-lg hover:-translate-y-0.5 overflow-hidden shadow-sm ${
                  i % 2 === 0 ? "rounded-3xl" : "organic-edge"
                }`}
              >
                <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif font-semibold text-lg">{a.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)] border-opacity-20 flex-shrink-0">
                      Giving
                    </span>
                  </div>
                  <p className="text-sm opacity-60">{a.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}