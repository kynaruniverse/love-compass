"use client";

import { CategoryResult } from "@/types/quiz";

/**
 * An 8-point compass rose visualizing a user's profile.
 * Each of the 8 categories sits at its fixed angle (from data/categories.ts,
 * 45° apart). A needle points toward the user's dominant category, and its
 * length reflects how strongly that category scored. Smaller dots around the
 * rim are sized by each category's own percentage, giving a sense of the
 * full shape of the profile at a glance.
 *
 * This is the same angle-per-archetype mapping that could later double as a
 * profile "compass badge" in a future matching feature — see project bible.
 */
export default function CompassProfile({
  profile
}: {
  profile: CategoryResult[];
}) {
  const size = 320;
  const center = size / 2;
  const outerRadius = center - 36;

  if (profile.length === 0) return null;

  const top = profile[0];
  const topAngle = top.angle;

  // Needle length scales with the top category's percentage (min 30% of radius)
  const needleLength = outerRadius * Math.max(0.3, top.percentage / 100);

  // Convert angle (0 = up/North, clockwise) to x/y
  function point(angleDeg: number, radius: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad)
    };
  }

  const needleTip = point(topAngle, needleLength);

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`Compass pointing toward ${top.title}, your strongest category at ${top.percentage}%`}
      >
        {/* Outer ring */}
        <circle
          cx={center}
          cy={center}
          r={outerRadius}
          fill="none"
          stroke="var(--border-soft)"
          strokeWidth={1.5}
        />
        <circle
          cx={center}
          cy={center}
          r={outerRadius * 0.66}
          fill="none"
          stroke="var(--border-soft)"
          strokeWidth={1}
          strokeDasharray="3 4"
        />
        <circle
          cx={center}
          cy={center}
          r={outerRadius * 0.33}
          fill="none"
          stroke="var(--border-soft)"
          strokeWidth={1}
          strokeDasharray="3 4"
        />

        {/* Spokes + category labels */}
        {profile.map(cat => {
          const angle = cat.angle;
          const spokeEnd = point(angle, outerRadius);
          const labelPos = point(angle, outerRadius + 22);
          const dotPos = point(angle, outerRadius * (cat.percentage / 100));
          const isPrimary = cat.key === top.key;

          return (
            <g key={cat.key}>
              <line
                x1={center}
                y1={center}
                x2={spokeEnd.x}
                y2={spokeEnd.y}
                stroke="var(--border-soft)"
                strokeWidth={1}
              />
              {/* Dot showing this category's own score along its spoke */}
              <circle
                cx={dotPos.x}
                cy={dotPos.y}
                r={isPrimary ? 5 : 3.5}
                fill={isPrimary ? "var(--primary)" : "var(--accent)"}
                fillOpacity={isPrimary ? 1 : 0.7}
              />
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={10}
                fill="var(--foreground)"
                opacity={isPrimary ? 1 : 0.55}
                fontWeight={isPrimary ? 600 : 400}
              >
                {cat.title.split(" ").slice(0, 2).join(" ")}
              </text>
            </g>
          );
        })}

        {/* Needle */}
        <line
          x1={center}
          y1={center}
          x2={needleTip.x}
          y2={needleTip.y}
          stroke="var(--primary)"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <circle cx={center} cy={center} r={6} fill="var(--primary)" />
        <circle cx={needleTip.x} cy={needleTip.y} r={4} fill="var(--primary)" />
      </svg>

      <p className="text-sm text-center opacity-70 max-w-xs">
        Your compass points toward{" "}
        <span className="font-semibold text-[var(--primary)]">{top.title}</span>{" "}
        — your strongest dimension at {top.percentage}%.
      </p>
    </div>
  );
}
