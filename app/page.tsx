"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { assessments } from "@/data/assessments";

/* ── Scroll-reveal hook ── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) translateZ(0)";
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Single assessment card ── */
function AssessmentCard({
  a,
  index,
}: {
  a: (typeof assessments)[0];
  index: number;
}) {
  const ref = useScrollReveal();
  const isReceiving = a.mode === "receiving";
  const accentColor = isReceiving ? "#583d72" : "#846226";
  const delay = `${index * 90}ms`;

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(28px) translateZ(0)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
      }}
    >
      <Link href={`/assessments/${a.slug}`} className="block group">
        <div
          className="lc-tile"
          style={{ "--tile-accent": accentColor } as React.CSSProperties}
        >
          {/* Floating badge */}
          <span className="lc-tile-badge">{isReceiving ? "Receiving" : "Giving"}</span>

          {/* Glow orb */}
          <div className="lc-tile-glow" aria-hidden="true" />

          <h3 className="lc-tile-title">{a.title}</h3>
          <p className="lc-tile-desc">{a.description}</p>

          {/* Arrow */}
          <span className="lc-tile-arrow" aria-hidden="true">→</span>
        </div>
      </Link>
    </div>
  );
}

/* ── Hero orbs (pure CSS, no canvas) ── */
function HeroOrbs() {
  return (
    <div className="lc-orb-field" aria-hidden="true">
      <div className="lc-orb lc-orb-1" />
      <div className="lc-orb lc-orb-2" />
      <div className="lc-orb lc-orb-3" />
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  /* Gentle parallax on hero text */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.18}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const receiving = assessments.filter((a) => a.mode === "receiving");
  const giving = assessments.filter((a) => a.mode === "giving");

  return (
    <main className="min-h-screen" style={{ background: "#faf8f5" }}>

      {/* ── Hero ── */}
      <section className="lc-hero">
        <HeroOrbs />
        <div className="lc-hero-inner" ref={heroRef}>
          <p className="lc-hero-tag">A mirror for the way you love</p>
          <h1 className="lc-hero-h1">
            You know how<br />they make you feel.
          </h1>
          <p className="lc-hero-h2">
            You've never asked&nbsp;why.
          </p>
          <p className="lc-hero-body">
            Love Compass is a set of quiet assessments<br className="hidden sm:inline" /> that turn the mirror around.
          </p>
          <div className="lc-hero-actions">
            <Link href="/assessments" className="lc-btn-primary">
              Take an Assessment →
            </Link>
            <Link href="/about" className="lc-btn-ghost">
              What is this?
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="lc-cards-section">
        <h2 className="lc-section-heading">Two questions worth sitting with.</h2>

        {/* Receiving */}
        <div className="lc-group">
          <p className="lc-group-label" style={{ color: "#583d72" }}>How you need to be loved</p>
          <div className="lc-grid">
            {receiving.map((a, i) => (
              <AssessmentCard key={a.slug} a={a} index={i} />
            ))}
          </div>
        </div>

        {/* Giving */}
        <div className="lc-group">
          <p className="lc-group-label" style={{ color: "#846226" }}>How you naturally love</p>
          <div className="lc-grid">
            {giving.map((a, i) => (
              <AssessmentCard key={a.slug} a={a} index={i + 2} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}