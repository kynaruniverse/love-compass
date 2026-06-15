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
      <section className="max-w-4xl mx-auto px-4 pb-24" style={{ background: "var(--canvas-base)" }}>
        <h2 className="text-2xl font-semibold tracking-tight pt-10 pb-2">
          Two questions worth sitting with.
        </h2>

        {/* Receiving group */}
        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-widest opacity-60 mb-2" style={{ color: "var(--color-receiving-dark)" }}>
            How you need to be loved
          </p>
          {assessments.filter(a => a.mode === "receiving").map((a) => (
            <Link key={a.slug} href={`/assessments/${a.slug}`} className="block">
              <div className="lc-assessment-card" data-type="receiving">
                <span className="lc-card-badge">Receiving</span>
                <h3 className="lc-card-title">{a.title}</h3>
                <p className="lc-card-description">{a.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Giving group */}
        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-widest opacity-60 mb-2" style={{ color: "var(--color-giving-dark)" }}>
            How you naturally love
          </p>
          {assessments.filter(a => a.mode === "giving").map((a) => (
            <Link key={a.slug} href={`/assessments/${a.slug}`} className="block">
              <div className="lc-assessment-card" data-type="giving">
                <span className="lc-card-badge">Giving</span>
                <h3 className="lc-card-title">{a.title}</h3>
                <p className="lc-card-description">{a.description}</p>
              </div>
            </Link>
          ))}
        </div>

      </section>

    </main>
  );
}