"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { ChevronRight } from "lucide-react";
import { assessments } from "@/data/assessments";
import { FadeIn } from "@/components/ui";
import { AssessmentIcon } from "@/components/ui/AssessmentIcon";

const CompassCanvas = dynamic(() => import("@/components/ui/CompassCanvas"), {
  ssr: false,
});

const QUOTES = [
  "Love isn't one language. It's a dialect only you speak.",
  "The way you give love is rarely the way you ask for it.",
  "Self-knowledge is the quietest form of generosity.",
  "You can't close a gap you haven't named.",
  "Every pattern was once a way of staying safe.",
  "Honesty with yourself is the first honest relationship.",
  "What you need and what you offer are rarely the same shape.",
  "Clarity isn't cold. It's just love with better aim.",
  "Knowing yourself is how you stop guessing at everyone else.",
];

// ── Assessment card (vertical stack) ──────────────────────────────────────
function AssessmentCard({
  slug,
  title,
  description,
  mode,
  index,
}: {
  slug: string;
  title: string;
  description: string;
  mode: "receiving" | "giving";
  index: number;
}) {
  const isReceiving = mode === "receiving";
  const modeColor = isReceiving ? "var(--primary)" : "var(--accent)";
  const modeBg    = isReceiving ? "var(--primary-soft)" : "var(--accent-soft)";

  return (
    <FadeIn delay={index * 80}>
      <Link
        href={`/assessments/${slug}`}
        className="lc-acard"
        aria-label={`${title} — ${mode === "receiving" ? "Receiving" : "Giving"} assessment`}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {/* Icon */}
        <span className="lc-acard-icon">
          <AssessmentIcon slug={slug} />
        </span>

        <div className="lc-acard-body">
          <h3 className="lc-acard-title">{title}</h3>
          <p className="lc-acard-desc">{description}</p>
        </div>

        <ChevronRight className="lc-acard-chevron" size={20} aria-hidden="true" />
      </Link>
    </FadeIn>
  );
}

// ── Quote marquee ──────────────────────────────────────────────────────────
function QuoteMarquee() {
  const track = [...QUOTES, ...QUOTES];

  return (
    <div className="lc-quote-marquee" aria-hidden="true">
      <div className="lc-quote-track">
        {track.map((q, i) => (
          <span className="lc-quote-item" key={i}>
            {q}
            <span className="lc-quote-sep">✧</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Section divider ────────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="lc-divider" aria-hidden="true">
      <span />
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function HomePage() {
  const receiving = useMemo(
    () => assessments.filter((a) => a.mode === "receiving"),
    []
  );
  const giving = useMemo(
    () => assessments.filter((a) => a.mode === "giving"),
    []
  );

  return (
    <main className="lc-home">

     {/* ── Hero ── */}
      <section className="lc-hero" aria-label="Introduction">
        {/* Masthead bar — logo left, tagline right */}
        <div className="lc-masthead">
          <Link href="/" aria-label="Love Compass home">
            <Image
              src="/logo.svg"
              alt="Love Compass"
              width={220}
              height={73}
              priority
              // Tell the browser this image is at most 220px wide on any
              // viewport — prevents fetching an oversized raster fallback.
              sizes="220px"
              style={{ display: "block" }}
            />
          </Link>
          <p className="lc-masthead-tagline">
            Knowing yourself in relationships changes everything.
          </p>
        </div>

        {/* Canvas — decorative, right-side only on mobile */}
        <div className="lc-hero-canvas" aria-hidden="true">
          <CompassCanvas />
        </div>

        <div className="lc-hero-content">
          <FadeIn delay={0}>
            <p className="lc-hero-eyebrow">Self-discovery · Relationships</p>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="lc-hero-h1">
              Understanding yourself is the most loving thing you can do.
            </h1>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="lc-hero-sub">
              For you. For them. For whoever comes next.
            </p>
          </FadeIn>

          <FadeIn delay={350}>
            <p className="lc-hero-body">
              Most of us love people the way we want to be loved. Love Compass helps you close that gap. Four quiet assessments that map how love lands for you, and how you naturally give it in return. No sign-up, no diagnosis. Just honest reflection, at your own pace.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="lc-hero-ctas">
              <Link href="/assessments" className="lc-cta-primary inline-flex items-center justify-center">
                Start exploring →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Stat strip ── */}
      <section className="lc-stat-strip" aria-label="At a glance">
        <FadeIn>
          <p className="lc-stat-strip-text">
            4 assessments · 10 minutes each · No sign-up · Nothing stored
          </p>
        </FadeIn>
      </section>

      {/* ── Assessments ── */}
      <section className="lc-assessments" aria-label="Available assessments">
        <div className="lc-assessments-inner">

          {/* Receiving */}
          <FadeIn>
            <div className="lc-group-header">
              <p className="lc-group-eyebrow" style={{ color: "var(--primary)" }}>
                How you need to be loved
              </p>
              <h2 className="lc-group-h2" id="group-receiving">Receiving</h2>
              <p className="lc-group-sub">
                Not all love lands the same way. These assessments help you understand what actually reaches you, the affection, closeness, and connection that makes you feel genuinely held.
              </p>
            </div>
          </FadeIn>

          <ul className="lc-card-stack" aria-labelledby="group-receiving">
            {receiving.map((a, i) => (
              <li key={a.slug}>
                <AssessmentCard {...a} index={i} />
              </li>
            ))}
          </ul>

          <Divider />

          {/* Giving */}
          <FadeIn>
            <div className="lc-group-header">
              <p className="lc-group-eyebrow" style={{ color: "var(--accent)" }}>
                How you naturally love
              </p>
              <h2 className="lc-group-h2" id="group-giving">Giving</h2>
              <p className="lc-group-sub">
                The love you give without thinking is often the truest thing about you. These assessments bring it into focus.
              </p>
            </div>
          </FadeIn>

          <ul className="lc-card-stack" aria-labelledby="group-giving">
            {giving.map((a, i) => (
              <li key={a.slug}>
                <AssessmentCard {...a} index={i} />
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="lc-final-cta" aria-label="Get started">
        <FadeIn>
          <h2 className="lc-final-h2">Ready to begin?</h2>
          <p className="lc-final-sub">Four assessments. No sign-up. Take as many or as few as you like.</p>
          <p className="lc-final-note">
            Not a clinical evaluation. No account required. Nothing stored ever.
          </p>
        </FadeIn>
      </section>

      <QuoteMarquee />

    </main>
  );
}
