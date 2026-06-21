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
        data-mode={mode}
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
        <div className="lc-hero-content">
          <FadeIn delay={0}>
            <Link href="/" aria-label="Love Compass home" className="lc-hero-logo">
              <Image
                src="/logo.svg"
                alt="Love Compass"
                width={120}
                height={120}
                priority
                sizes="120px"
                style={{ display: "block" }}
              />
            </Link>
          </FadeIn>

          <h1 className="lc-hero-h1">
            <FadeIn as="span" delay={150} className="lc-hero-h1-line">
              Have you ever asked yourself how you love, and how you want to be loved?
            </FadeIn>{" "}
            <FadeIn as="span" delay={550} className="lc-hero-h1-line">
              You're exactly where you need to be.
            </FadeIn>
          </h1>

          <FadeIn delay={250}>
            <p className="lc-hero-sub">
              Relationship assessments that map how you give and receive love.
            </p>
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
                DISCOVER THE LOVE YOU NEED
              </p>
              <h2 className="lc-group-h2" id="group-receiving">Receiving</h2>
              <p className="lc-group-sub">
                The love you receive isn't always the love you need. These two assessments help you see the difference.
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
                DISCOVER YOUR WAY OF LOVING
              </p>
              <h2 className="lc-group-h2" id="group-giving">Giving</h2>
              <p className="lc-group-sub">
                Everyone has a default way of loving. These two assessments find the real way you express yours.
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

      {/* ── Bridge section ── */}
      <section className="lc-bridge" aria-label="Why Love Compass">
        <FadeIn>
          <p className="lc-bridge-text">
            It's easy to assume everyone wants to be loved the way you do. Love Compass exists to challenge that assumption, gently. Four quiet assessments, ten minutes each, mapping what you need and what you give. No sign-up. No diagnosis. Just honest reflection, at your own pace.
          </p>
        </FadeIn>
      </section>

      <QuoteMarquee />

    </main>
  );
}
