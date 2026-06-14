"use client";

import { useEffect, useRef, useState } from "react";
import { CategoryResult } from "@/types/quiz";

export default function CompassProfile({
  profile
}: {
  profile: CategoryResult[];
}) {
  const size = 340;
  const center = size / 2;
  const outerRadius = center - 44;

  const [needleAngle, setNeedleAngle] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const animRef = useRef<number>(0);

  if (profile.length === 0) return null;

  const top = profile[0];
  const topAngle = top.angle;
  const needleLength = outerRadius * Math.max(0.35, top.percentage / 100);

  function point(angleDeg: number, radius: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  }

  // Animate needle sweep on mount
  useEffect(() => {
    setMounted(true);
    const startAngle = topAngle - 180;
    const duration = 900;
    const startTime = performance.now();

    function easeOut(t: number) {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = startAngle + (topAngle - startAngle) * easeOut(progress);
      setNeedleAngle(current);
      if (progress < 1) {
        animRef.current = requestAnimationFrame(tick);
      }
    }

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [topAngle]);

  const displayAngle = needleAngle ?? topAngle - 180;
  const needleTip = point(displayAngle, needleLength);
  const needleBack = point(displayAngle + 180, needleLength * 0.18);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <svg
        width="100%"
        viewBox={`0 0 ${size} ${size}`}
        style={{ maxWidth: size }}
        role="img"
        aria-label={`Compass pointing toward ${top.title}, your strongest category at ${top.percentage}%`}
      >
        {/* Outer decorative rings */}
        <circle cx={center} cy={center} r={outerRadius + 12} fill="none" stroke="var(--border-soft)" strokeWidth={1} strokeDasharray="2 6" />
        <circle cx={center} cy={center} r={outerRadius} fill="none" stroke="var(--border-soft)" strokeWidth={1.5} />
        <circle cx={center} cy={center} r={outerRadius * 0.66} fill="none" stroke="var(--border-soft)" strokeWidth={1} strokeDasharray="3 5" />
        <circle cx={center} cy={center} r={outerRadius * 0.33} fill="none" stroke="var(--border-soft)" strokeWidth={1} strokeDasharray="3 5" />

        {/* Subtle radial gradient fill inside outer ring */}
        <defs>
          <radialGradient id="compass-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="needle-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={center} cy={center} r={outerRadius} fill="url(#compass-bg)" />

        {/* Spokes + dots + labels */}
        {profile.map(cat => {
          const spokeEnd = point(cat.angle, outerRadius);
          const labelPos = point(cat.angle, outerRadius + 26);
          const dotRadius = outerRadius * Math.max(0.08, cat.percentage / 100);
          const dotPos = point(cat.angle, dotRadius);
          const isPrimary = cat.key === top.key;

          return (
            <g key={cat.key}>
              <line
                x1={center} y1={center}
                x2={spokeEnd.x} y2={spokeEnd.y}
                stroke="var(--border-soft)"
                strokeWidth={isPrimary ? 1.5 : 1}
              />

              {/* Score dot */}
              <circle
                cx={dotPos.x}
                cy={dotPos.y}
                r={isPrimary ? 6 : 4}
                fill={isPrimary ? "var(--primary)" : "var(--accent)"}
                fillOpacity={isPrimary ? 1 : 0.6}
              >
                {isPrimary && mounted && (
                  <animate
                    attributeName="r"
                    values="6;9;6"
                    dur="2.4s"
                    repeatCount="indefinite"
                    begin="0.9s"
                  />
                )}
                {isPrimary && mounted && (
                  <animate
                    attributeName="fill-opacity"
                    values="1;0.4;1"
                    dur="2.4s"
                    repeatCount="indefinite"
                    begin="0.9s"
                  />
                )}
              </circle>

              {/* Label */}
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={isPrimary ? 11 : 10}
                fill="var(--foreground)"
                opacity={isPrimary ? 1 : 0.45}
                fontWeight={isPrimary ? 700 : 400}
                fontFamily="Georgia, serif"
              >
                {cat.title.split(" ").slice(0, 2).join(" ")}
              </text>
            </g>
          );
        })}

        {/* Needle glow behind needle */}
        <ellipse
          cx={center}
          cy={center}
          rx={needleLength * 0.25}
          ry={needleLength * 0.25}
          fill="url(#needle-glow)"
          transform={`rotate(${displayAngle}, ${center}, ${center})`}
        />

        {/* Needle — tapered diamond shape */}
        <polygon
          points={`
            ${needleTip.x},${needleTip.y}
            ${point(displayAngle + 90, 5).x},${point(displayAngle + 90, 5).y}
            ${needleBack.x},${needleBack.y}
            ${point(displayAngle - 90, 5).x},${point(displayAngle - 90, 5).y}
          `}
          fill="var(--primary)"
          opacity={0.95}
        />

        {/* Counter-needle (back stub) */}
        <polygon
          points={`
            ${needleBack.x},${needleBack.y}
            ${point(displayAngle + 90, 4).x},${point(displayAngle + 90, 4).y}
            ${point(displayAngle + 180, needleLength * 0.12).x},${point(displayAngle + 180, needleLength * 0.12).y}
            ${point(displayAngle - 90, 4).x},${point(displayAngle - 90, 4).y}
          `}
          fill="var(--accent)"
          opacity={0.7}
        />

        {/* Center pivot */}
        <circle cx={center} cy={center} r={8} fill="var(--surface)" stroke="var(--primary)" strokeWidth={2} />
        <circle cx={center} cy={center} r={3} fill="var(--primary)" />
      </svg>

      <p className="text-sm text-center opacity-60 max-w-xs leading-relaxed">
        Your compass points toward{" "}
        <span className="font-semibold text-[var(--primary)]">{top.title}</span>
        {" "}— your strongest dimension at{" "}
        <span className="font-semibold text-[var(--primary)]">{top.percentage}%</span>.
      </p>
    </div>
  );
}
