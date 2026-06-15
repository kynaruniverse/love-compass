"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { assessments } from "@/data/assessments";
import Button from "@/components/ui/Button";

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
      { threshold: 0.12 }
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
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Swipeable card deck ────────────────────────────────────────────────────
function CardDeck({
  items,
  mode,
}: {
  items: typeof assessments;
  mode: "receiving" | "giving";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const isReceiving = mode === "receiving";
  const accentColor = isReceiving ? "var(--primary)" : "var(--accent)";
  const softBg = isReceiving ? "var(--primary-soft)" : "var(--accent-soft)";
  const modeLabel = isReceiving ? "Receiving" : "Giving";

  function scrollTo(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
    setActive(i);
  }

  // Update active dot on scroll
  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - track.scrollLeft - 16);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }

  return (
    <div className="lc-deck">
      {/* Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="lc-deck-track"
        style={{ scrollSnapType: "x mandatory", overflowX: "auto" }}
      >
        {items.map((a) => (
          <Link
            key={a.slug}
            href={`/assessments/${a.slug}`}
            className="lc-card"
            style={{
              scrollSnapAlign: "start",
              background: softBg,
              borderColor: softBg,
            }}
          >
            <div className="lc-card-inner">
              {/* Mode badge */}
              <span
                className="lc-badge"
                style={{ color: accentColor, borderColor: accentColor }}
              >
                {modeLabel}
              </span>

              <h3 className="lc-card-title">{a.title}</h3>
              <p className="lc-card-desc">{a.description}</p>

              <span className="lc-card-cta" style={{ color: accentColor }}>
                Begin →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Dots */}
      {items.length > 1 && (
        <div className="lc-dots">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Card ${i + 1}`}
              onClick={() => scrollTo(i)}
              className="lc-dot"
              style={{
                background: i === active ? accentColor : "rgba(0,0,0,0.15)",
                transform: i === active ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      )}
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
        <div className="lc-hero-canvas">
          <CompassCanvas />
        </div>

        <div className="lc-hero-content">
          <FadeIn delay={0}>
            <p className="lc-hero-eyebrow">Self-discovery · Relationships</p>
          </FadeIn>

          <FadeIn delay={120}>
            <h1 className="lc-hero-h1">
              You know how they<br />
              make you feel.
            </h1>
          </FadeIn>

          <FadeIn delay={240}>
            <p className="lc-hero-sub">
              You've never asked why.
            </p>
          </FadeIn>

          <FadeIn delay={360}>
            <p className="lc-hero-body">
              Love Compass is a set of quiet assessments that turn the mirror around — no sign-up, no diagnosis, just honest reflection.
            </p>
          </FadeIn>

          <FadeIn delay={480}>
            <div className="lc-hero-ctas">
              <Link href="/assessments">
                <Button variant="primary" className="lc-cta-primary">
                  Begin Your Assessment →
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="lc-cta-ghost">
                  What is this?
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Scroll hint */}
        <div className="lc-scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── Receiving deck ── */}
      <section className="lc-section">
        <FadeIn>
          <div className="lc-section-header">
            <p className="lc-section-eyebrow" style={{ color: "var(--primary)" }}>
              How you need to be loved
            </p>
            <h2 className="lc-section-h2">Receiving</h2>
            <p className="lc-section-sub">
              These assessments map the ways love lands for you — how affection, intimacy, and connection actually register.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <CardDeck items={receiving} mode="receiving" />
        </FadeIn>
      </section>

      {/* ── Giving deck ── */}
      <section className="lc-section lc-section-giving">
        <FadeIn>
          <div className="lc-section-header">
            <p className="lc-section-eyebrow" style={{ color: "var(--accent)" }}>
              How you naturally love
            </p>
            <h2 className="lc-section-h2">Giving</h2>
            <p className="lc-section-sub">
              These reveal the love you offer without thinking — your instincts, your reach, what your body already knows.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <CardDeck items={giving} mode="giving" />
        </FadeIn>
      </section>

      {/* ── Trust section ── */}
      <section className="lc-trust">
        <FadeIn>
          <div className="lc-trust-inner">
            <p className="lc-trust-icon" aria-hidden="true">◈</p>
            <h2 className="lc-trust-h2">A tool for reflection.</h2>
            <p className="lc-trust-body">
              Love Compass is not a clinical evaluation. Results are personal insights — a language for patterns you already live, made visible. No account required. Nothing stored.
            </p>
            <Link href="/methodology">
              <span className="lc-trust-link">Read our methodology →</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Final CTA ── */}
      <section className="lc-final-cta">
        <FadeIn>
          <h2 className="lc-final-h2">Ready to begin?</h2>
          <p className="lc-final-sub">Four assessments. No sign-up. Take as many or as few as you like.</p>
          <Link href="/assessments">
            <Button variant="primary" className="lc-cta-primary">
              Begin Your Assessment →
            </Button>
          </Link>
        </FadeIn>
      </section>

    </main>
  );
}
