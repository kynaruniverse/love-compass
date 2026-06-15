"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { assessments } from "@/data/assessments";
import Button from "@/components/ui/Button";
import InkCanvas from "@/components/ui/InkCanvas";

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* -- Hero -- */}
      <section className="relative w-full overflow-hidden min-h-[520px] flex flex-col justify-center px-6 py-20 sm:py-28" style={{ background: "#1a0a2e" }}>
        {/* Ink bleed animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <InkCanvas />
        </div>

        <div className="relative z-10 max-w-lg">
          <p className="text-3xl sm:text-4xl font-serif leading-tight mb-4" style={{ color: "#f5f0e8" }}>
            You know how they make you feel.
          </p>
          <p className="text-3xl sm:text-4xl font-serif leading-tight mb-8" style={{ color: "#c9a14a" }}>
            You've never asked why.
          </p>
          <p className="text-base sm:text-lg mb-10 leading-relaxed" style={{ color: "#c4b8d4", opacity: 0.85 }}>
            Love Compass is a set of quiet assessments that turn the mirror around.
          </p>
          <div className="flex flex-wrap gap-3">
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