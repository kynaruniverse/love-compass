"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assessments, type Assessment } from "@/data/assessments";
import { Marquee } from "@/components/ui/Marquee";

const ASSESSMENTS_MARQUEE_ITEMS = [
  "Four assessments. Forty minutes total. A clearer picture of yourself.",
  "No sign-up. No storage. No watching.",
  "How you love and how you need to be loved aren't always the same.",
  "Start anywhere. Take your time.",
  "The most honest assessment you'll ever take is the one you're honest in.",
  "Receiving and giving. Two sides of the same thing.",
];

// ── Badge artwork per assessment ────────────────────────────────────────────
const BADGE_MAP: Record<string, string> = {
  love: "/icons/preference-badge.png",
  intimacy: "/icons/intimacy-badge.png",
  "love-giving": "/icons/love-badge.png",
  "intimacy-giving": "/icons/desire-badge.png",
};

// Fixed scatter angles so the layout is stable across re-renders
// (not random per render — random would make cards jitter on every state change)
const TILT_DECK: Record<string, number> = {
  love: -3,
  intimacy: 2.5,
  "love-giving": 3,
  "intimacy-giving": -2.5,
};

// ── Badge card ───────────────────────────────────────────────────────────
function BadgeCard({
  assessment,
  onSelect,
}: {
  assessment: Assessment;
  onSelect: (slug: string) => void;
}) {
  const tilt = TILT_DECK[assessment.slug] ?? 0;
  const badge = BADGE_MAP[assessment.slug];
  const isReceiving = assessment.mode === "receiving";

  return (
    <button
      onClick={() => onSelect(assessment.slug)}
      className="lc-badgecard"
      data-mode={assessment.mode}
      style={{ "--lc-tilt": `${tilt}deg` } as React.CSSProperties}
      aria-label={`${assessment.title}, ${isReceiving ? "Receiving" : "Giving"} assessment`}
    >
      <span className="lc-badgecard-glow" aria-hidden="true" />
      <div className="lc-badgecard-badge">
        {badge && (
          <Image
            src={badge}
            alt=""
            width={120}
            height={120}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            priority
          />
        )}
      </div>
      <h3 className="lc-badgecard-title">{assessment.title}</h3>
    </button>
  );
}

// ── Section (Receiving / Giving) ────────────────────────────────────────
function AssessmentSection({
  eyebrow,
  heading,
  sub,
  color,
  items,
  onSelect,
}: {
  eyebrow: string;
  heading: string;
  sub: string;
  color: string;
  items: Assessment[];
  onSelect: (slug: string) => void;
}) {
  return (
    <section className="lc-badge-section" aria-labelledby={`section-${heading}`}>
      <div className="lc-group-header">
        <p className="lc-group-eyebrow" style={{ color }}>{eyebrow}</p>
        <h2 className="lc-group-h2" id={`section-${heading}`}>{heading}</h2>
        <p className="lc-group-sub">{sub}</p>
      </div>

      <div className="lc-badgecard-grid">
        {items.map((a) => (
          <BadgeCard key={a.slug} assessment={a} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

// ── Modal ────────────────────────────────────────────────────────────────
function AssessmentModal({
  assessment,
  onClose,
}: {
  assessment: Assessment;
  onClose: () => void;
}) {
  const badge = BADGE_MAP[assessment.slug];

  return (
    <>
      <div
        className="lc-modal-overlay"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="lc-modal"
        role="dialog"
        aria-modal="true"
        aria-label={assessment.title}
      >
        <button
          onClick={onClose}
          className="lc-modal-close"
          aria-label="Close"
        >
          ✕
        </button>

        {badge && (
          <div className="lc-modal-badge">
            <Image src={badge} alt="" width={96} height={96} style={{ objectFit: "contain" }} />
          </div>
        )}

        <h2 className="lc-modal-title">{assessment.title}</h2>
        <p className="lc-modal-desc">{assessment.description}</p>
        <p className="lc-modal-note">Takes 5–10 minutes. Nothing leaves your browser.</p>

        <Link
          href={`/assessments/${assessment.slug}`}
          className="lc-btn-gold" style={{display:"block",width:"100%",padding:"0.9rem 1.25rem",minHeight:"48px"}}
          onClick={onClose}
        >
          Begin your assessment →
        </Link>
      </div>
    </>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function AssessmentsPage() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const receiving = assessments.filter((a) => a.mode === "receiving");
  const giving = assessments.filter((a) => a.mode === "giving");
  const selected = selectedSlug ? assessments.find((a) => a.slug === selectedSlug) ?? null : null;

  return (
    <main id="main-content" className="lc-assess-page">
      <section className="lc-assess-hero">
        <p className="lc-assess-eyebrow">ASSESSMENTS</p>
        <h1 className="lc-assess-h1">Stop guessing. Start knowing.</h1>
        <p className="lc-assess-sub">
          Two sides of the same question: how you receive love, and how you naturally give it back.
        </p>
      </section>

      <Marquee items={ASSESSMENTS_MARQUEE_ITEMS} />

      <AssessmentSection
        eyebrow="HOW LOVE FINDS YOU"
        heading="Receiving"
        sub="The love you receive isn't always the love you need."
        color="var(--primary)"
        items={receiving}
        onSelect={setSelectedSlug}
      />

      <AssessmentSection
        eyebrow="HOW YOU SHOW LOVE"
        heading="Giving"
        sub="Everyone has a default way of loving, this finds yours."
        color="var(--accent)"
        items={giving}
        onSelect={setSelectedSlug}
      />

      <section className="lc-assess-footnote">
        <p>Each assessment takes 5–10 minutes. Nothing you answer leaves your browser. No account. No record. Just you.</p>
      </section>

      {selected && (
        <AssessmentModal assessment={selected} onClose={() => setSelectedSlug(null)} />
      )}

    </main>
  );
}
