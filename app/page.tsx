"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { assessments } from "@/data/assessments";
import Button from "@/components/ui/Button";
import Image from "next/image";

const CompassCanvas = dynamic(() => import("@/components/ui/CompassCanvas"), {
  ssr: false,
});

// ── Fade-in on scroll ──────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

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

  return (
    <FadeIn delay={index * 80}>
      <Link
        href={`/assessments/${slug}`}
        className="lc-acard"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {/* Left accent bar */}
        <span
          className="lc-acard-bar"
          style={{
            background: isReceiving ? "var(--primary)" : "var(--accent)",
          }}
        />

        <div className="lc-acard-body">
          {/* Mode tag */}
          <span
            className="lc-acard-tag"
            style={{
              color: isReceiving ? "var(--primary)" : "var(--accent)",
              background: isReceiving ? "var(--primary-soft)" : "var(--accent-soft)",
            }}
          >
            {isReceiving ? "Receiving" : "Giving"}
          </span>

          <h3 className="lc-acard-title">{title}</h3>
          <p className="lc-acard-desc">{description}</p>
        </div>

        {/* Arrow */}
        <span className="lc-acard-arrow" aria-hidden="true">→</span>
      </Link>
    </FadeIn>
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
  const receiving = assessments.filter((a) => a.mode === "receiving");
  const giving = assessments.filter((a) => a.mode === "giving");

  return (
    <main className="lc-home">

      {/* ── Hero ── */}
      <section className="lc-hero">

        {/* Canvas — decorative, right-side only on mobile */}
        <div className="lc-hero-canvas" aria-hidden="true">
          <CompassCanvas />
        </div>

        <div className="lc-hero-content">
          <FadeIn delay={0}>
            <Image
              src="/logo.svg"
              alt="Love Compass"
              width={180}
              height={60}
              priority
              style={{ marginBottom: "1.5rem" }}
            />
          </FadeIn>
          
          <FadeIn delay={50}>
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
              Most of us love people the way we want to be loved. Love Compass helps you close that gap — four quiet assessments that map how love lands for you, and how you naturally give it in return. No sign-up, no diagnosis. Just honest reflection, at your own pace.
            </p>
          </FadeIn>

          <FadeIn delay={450}>
            <div className="lc-hero-ctas">
              <Link href="/assessments">
                <Button variant="primary" className="lc-cta-primary">
                  Start exploring →
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="lc-cta-ghost">
                  How it works
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="lc-scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── Assessments ── */}
      <section className="lc-assessments">
        <div className="lc-assessments-inner">

          {/* Receiving */}
          <FadeIn>
            <div className="lc-group-header">
              <p className="lc-group-eyebrow" style={{ color: "var(--primary)" }}>
                How you need to be loved
              </p>
              <h2 className="lc-group-h2">Receiving</h2>
              <p className="lc-group-sub">
                Not all love lands the same way. These assessments help you understand what actually reaches you — the affection, closeness, and connection that makes you feel genuinely held.
              </p>
            </div>
          </FadeIn>

          <div className="lc-card-stack">
            {receiving.map((a, i) => (
              <AssessmentCard key={a.slug} {...a} index={i} />
            ))}
          </div>

          <Divider />

          {/* Giving */}
          <FadeIn>
            <div className="lc-group-header">
              <p className="lc-group-eyebrow" style={{ color: "var(--accent)" }}>
                How you naturally love
              </p>
              <h2 className="lc-group-h2">Giving</h2>
              <p className="lc-group-sub">
                The love you give without thinking is often the truest thing about you. These assessments bring it into focus.
              </p>
            </div>
          </FadeIn>

          <div className="lc-card-stack">
            {giving.map((a, i) => (
              <AssessmentCard key={a.slug} {...a} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="lc-final-cta">
        <FadeIn>
          <h2 className="lc-final-h2">Ready to begin?</h2>
          <p className="lc-final-sub">Four assessments. No sign-up. Take as many or as few as you like.</p>
          <Link href="/assessments">
            <Button variant="primary" className="lc-cta-primary">
              Start exploring →
            </Button>
          </Link>
          <p className="lc-final-note">
            Not a clinical evaluation. No account required. Nothing stored.
          </p>
        </FadeIn>
      </section>

    </main>
  );
}
