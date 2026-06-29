"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
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
  onOpen,
  triggerRef,
}: {
  assessment: Assessment;
  onOpen: (a: Assessment, ref: React.RefObject<HTMLButtonElement | null>) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const tilt = TILT_DECK[assessment.slug] ?? 0;
  const badge = BADGE_MAP[assessment.slug];
  const isReceiving = assessment.mode === "receiving";

  return (
    <button
      ref={triggerRef}
      onClick={() => onOpen(assessment, triggerRef)}
      className="lc-badgecard"
      data-mode={assessment.mode}
      style={{ "--lc-tilt": `${tilt}deg` } as React.CSSProperties}
      aria-label={`${assessment.title}, ${isReceiving ? "Receiving" : "Giving"} assessment. Opens preview.`}
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
      <p className="lc-badgecard-desc">{assessment.description}</p>
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
  onOpen,
  triggerRefs,
}: {
  eyebrow: string;
  heading: string;
  sub: string;
  color: string;
  items: Assessment[];
  onOpen: (a: Assessment, ref: React.RefObject<HTMLButtonElement | null>) => void;
  triggerRefs: Record<string, React.RefObject<HTMLButtonElement | null>>;
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
          <BadgeCard key={a.slug} assessment={a} onOpen={onOpen} triggerRef={triggerRefs[a.slug]!} />
        ))}
      </div>
    </section>
  );
}

// ── Modal ────────────────────────────────────────────────────────────────
function AssessmentModal({
  assessment,
  onClose,
  triggerRef,
}: {
  assessment: Assessment;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const badge = BADGE_MAP[assessment.slug];
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Move focus to close button when modal opens
  useEffect(() => {
    closeRef.current?.focus();
    const trigger = triggerRef.current;
    return () => {
      trigger?.focus();
    };
  }, [triggerRef]);

  // Trap focus within modal
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") { onClose(); return; }
    if (e.key !== "Tab") return;
    const modal = modalRef.current;
    if (!modal) return;
    const focusable = Array.from(
      modal.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }, [onClose]);

  return (
    <>
      <div
        className="lc-modal-overlay"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        className="lc-modal"
        role="dialog"
        aria-modal="true"
        aria-label={assessment.title}
        onKeyDown={handleKeyDown}
      >
        <button
          ref={closeRef}
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
  const receiving = assessments.filter((a) => a.mode === "receiving");
  const giving = assessments.filter((a) => a.mode === "giving");

  const [activeAssessment, setActiveAssessment] = useState<Assessment | null>(null);
  const [activeTriggerRef, setActiveTriggerRef] = useState<React.RefObject<HTMLButtonElement | null> | null>(null);

  const ref0 = useRef<HTMLButtonElement | null>(null);
  const ref1 = useRef<HTMLButtonElement | null>(null);
  const ref2 = useRef<HTMLButtonElement | null>(null);
  const ref3 = useRef<HTMLButtonElement | null>(null);
  const triggerRefs = assessments.reduce((acc, a, i) => {
    acc[a.slug] = [ref0, ref1, ref2, ref3][i];
    return acc;
  }, {} as Record<string, React.RefObject<HTMLButtonElement | null>>);

  const handleOpen = (a: Assessment, ref: React.RefObject<HTMLButtonElement | null>) => {
    setActiveAssessment(a);
    setActiveTriggerRef(ref);
  };

  const handleClose = () => {
    setActiveAssessment(null);
    setActiveTriggerRef(null);
  };

  return (
    <main id="main-content" className="lc-assess-page">
      {activeAssessment && activeTriggerRef && (
        <AssessmentModal
          assessment={activeAssessment}
          onClose={handleClose}
          triggerRef={activeTriggerRef}
        />
      )}      
      <section className="lc-assess-hero">
        <p className="lc-assess-eyebrow">ASSESSMENTS</p>
        <h1 className="lc-assess-h1">Stop guessing. Start knowing.</h1>
        <p className="lc-assess-sub">
          Two sides of the same question: how you receive love, and how you naturally give it back.
        </p>
      </section>

      <Marquee items={ASSESSMENTS_MARQUEE_ITEMS} />

      <section className="lc-assess-callout">
        <p>
          Relationships have two sides: how you receive connection and how you express it.
          These four assessments help you understand both.
        </p>
      </section>

      <AssessmentSection
        eyebrow="HOW LOVE FINDS YOU"
        heading="Receiving"
        sub="The love you receive isn't always the love you need."
        color="var(--primary)"
        items={receiving}
        onOpen={handleOpen}
        triggerRefs={triggerRefs}
      />

      <AssessmentSection
        eyebrow="HOW YOU SHOW LOVE"
        heading="Giving"
        sub="How you show love and how your partner feels it are rarely the same thing."
        color="var(--accent)"
        items={giving}
        onOpen={handleOpen}
        triggerRefs={triggerRefs}
      />

      <section className="lc-assess-footnote">
        <p>Each assessment takes 5–10 minutes. Nothing you answer leaves your browser. No account. No record. Just you.</p>
      </section>

    </main>
  );
}