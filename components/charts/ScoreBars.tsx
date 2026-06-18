"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CategoryResult } from "@/types/quiz";

function getBarStyle(rank: number, pct: number): { barGradient: string; barOpacity: number } {
  if (rank === 0) return { barGradient: "linear-gradient(90deg, #8a5fc0 0%, #c9a14a 100%)", barOpacity: 1 };
  if (rank === 1) return { barGradient: "linear-gradient(90deg, #6b3f8a 0%, #a07838 100%)", barOpacity: 0.82 };
  return { barGradient: "linear-gradient(90deg, #9E3B4E 0%, #C45070 100%)", barOpacity: Math.max(0.4, pct / 100 * 0.75 + 0.2) };
}

function ScoreBar({ result, rank, delay }: {
  result: CategoryResult;
  rank: number;
  delay: number;
}) {
  const [filled, setFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Animate in on scroll into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setFilled(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const isTop    = rank === 0;
  const isSecond = rank === 1;

  const { barGradient, barOpacity } = getBarStyle(rank, result.percentage);

  return (
    <div ref={ref} className="lc-scorebar-row">
      {/* Label row */}
      <div className="lc-scorebar-label-row">
        <span className="lc-scorebar-title">
          {isTop && <span className="lc-scorebar-crown" aria-hidden="true">◆ </span>}
          {result.title}
        </span>
        <span
          className="lc-scorebar-pct"
          style={{ color: isTop ? "var(--accent)" : undefined }}
        >
          {result.percentage}%
        </span>
      </div>

      {/* Track + fill */}
      <div
        className="lc-scorebar-track"
        role="progressbar"
        aria-valuenow={result.percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${result.title}: ${result.percentage}%`}
      >
        <div
          className="lc-scorebar-fill"
          style={{
            width: filled ? `${result.percentage}%` : "0%",
            background: barGradient,
            opacity: barOpacity,
          }}
        />
      </div>
    </div>
  );
}

export default function ScoreBars({ profile }: { profile: CategoryResult[] }) {
  // Sort highest to lowest
  const sorted = useMemo(
    () => [...profile].sort((a, b) => b.percentage - a.percentage),
    [profile]
  );

  return (
    <div className="lc-scorebars">
      {sorted.map((result, i) => (
        <ScoreBar
          key={result.key}
          result={result}
          rank={i}
          delay={i * 80}
        />
      ))}
    </div>
  );
}
