"use client";

import { useMemo } from "react";
import { CategoryResult } from "@/types/quiz";
import { getArchetypeHue } from "@/lib";

/**
 * Compact legend living directly under the compass: every category's
 * percentage in one glance, no tap required. This is what makes the
 * compass + numbers a real single visual instead of two sections
 * showing the same data (compass = interactive/explorable, chips =
 * always-visible summary of the same numbers, not a duplicate chart).
 */
export default function ScoreChips({ profile }: { profile: CategoryResult[] }) {
  const sorted = useMemo(
    () => [...profile].sort((a, b) => b.percentage - a.percentage),
    [profile]
  );

  return (
    <ul className="lc-scorechips" aria-label="All category scores">
      {sorted.map((result, i) => {
        const hue = getArchetypeHue(result.angle);
        return (
          <li key={result.key} className="lc-scorechip">
            <span
              className="lc-scorechip-dot"
              style={{ background: `hsl(${hue}, 58%, ${i === 0 ? 46 : 62}%)` }}
              aria-hidden="true"
            />
            <span className="lc-scorechip-title">{result.title}</span>
            <span className="lc-scorechip-pct">{result.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}
