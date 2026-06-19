"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CategoryResult } from "@/types/quiz";

export default function CompassProfile({
  profile
}: {
  profile: CategoryResult[];
}) {
  const size = 340;
  const center = size / 2;
  const outerRadius = center - 44;
  // Note: the SVG renders at size×size in the viewBox coordinate space
  // but is displayed at 100% container width via width="100%" below.
  
  const [needleAngle, setNeedleAngle] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const animRef = useRef<number>(0);

  // Derive stable values before hooks — profile[0] is safe because
  // the early return below fires only when length === 0, but hooks must
  // always be called unconditionally, so we guard with a fallback here.
  const top = profile[0] ?? null;
  const topAngle = top?.angle ?? 0;

  useEffect(() => {
    if (!top) return;
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
    return () => cancelAnimationFrame(animRef.current ?? 0);
  }, [topAngle, top]);

  // ─── All hooks above this line. ───────────────────────────────────────────
  // This is the only permitted early return in this component.
  if (profile.length === 0 || !top) return null;

  const needleLength = outerRadius * Math.max(0.35, top.percentage / 100);

  function point(angleDeg: number, radius: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  }

  const displayAngle = needleAngle ?? topAngle - 180;
  const needleTip = point(displayAngle, needleLength);
  const needleBack = point(displayAngle + 180, needleLength * 0.18);

  // Callout position for tapped category
  const activeProfile = activeCat ? (profile.find(c => c.key === activeCat) ?? null) : null;
  const calloutPos = activeProfile ? point(activeProfile.angle, outerRadius * 0.62) : null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleCatTap = useCallback((key: string) => {
    setHasInteracted(true);
    setActiveCat(prev => prev === key ? null : key);
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <svg
        width="100%"
        height="auto"
        viewBox={`0 0 ${size} ${size}`}
        style={{ maxWidth: size, display: "block" }}
        role="img"
        aria-label={`Compass pointing toward ${top.title}, your strongest category at ${top.percentage}%`}
      >
        <defs>
          {/* Compass background glow */}
          <radialGradient id="compass-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9E3B4E" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#9E3B4E" stopOpacity="0" />
          </radialGradient>

          {/* Gold metallic needle gradient */}
          <linearGradient id="needle-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#f5e199" />
            <stop offset="35%"  stopColor="#c9a14a" />
            <stop offset="65%"  stopColor="#e8c96a" />
            <stop offset="100%" stopColor="#8a6520" />
          </linearGradient>

          {/* Counter-needle (back stub) gradient */}
          <linearGradient id="needle-back-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#c9a14a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8a6520" stopOpacity="0.4" />
          </linearGradient>

          {/* Jewel center radial */}
          <radialGradient id="jewel-center" cx="40%" cy="35%" r="60%">
            <stop offset="0%"   stopColor="#fff8e0" stopOpacity="0.95" />
            <stop offset="45%"  stopColor="#c9a14a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#9E3B4E" stopOpacity="0.3" />
          </radialGradient>

          {/* Needle glow */}
          <radialGradient id="needle-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c9a14a" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#c9a14a" stopOpacity="0" />
          </radialGradient>

          {/* Callout bubble filter */}
          <filter id="callout-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#9E3B4E" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Background fill */}
        <circle cx={center} cy={center} r={outerRadius} fill="url(#compass-bg)" />

        {/* Outer decorative rings */}
        <circle cx={center} cy={center} r={outerRadius + 12} fill="none" stroke="#9E3B4E" strokeWidth={1} strokeDasharray="2 6" strokeOpacity={0.25} />
        <circle cx={center} cy={center} r={outerRadius} fill="none" stroke="#9E3B4E" strokeWidth={1.5} strokeOpacity={0.3} />
        <circle cx={center} cy={center} r={outerRadius * 0.66} fill="none" stroke="#9E3B4E" strokeWidth={1} strokeDasharray="3 5" strokeOpacity={0.15} />
        <circle cx={center} cy={center} r={outerRadius * 0.33} fill="none" stroke="#9E3B4E" strokeWidth={1} strokeDasharray="3 5" strokeOpacity={0.15} />

        {/* Tick mark ring */}
        {Array.from({ length: 36 }).map((_, i) => {
          const tickAngle = (i * 360) / 36;
          const isMajor = i % 3 === 0;
          const r1 = outerRadius + 2;
          const r2 = outerRadius + (isMajor ? 9 : 5);
          const t1 = point(tickAngle, r1);
          const t2 = point(tickAngle, r2);
          return (
            <line
              key={i}
              x1={t1.x} y1={t1.y}
              x2={t2.x} y2={t2.y}
              stroke="#c9a14a"
              strokeWidth={isMajor ? 1.2 : 0.6}
              strokeOpacity={isMajor ? 0.55 : 0.25}
            />
          );
        })}

        {/* Spokes + dots + labels */}
        {profile.map(cat => {
          const spokeEnd = point(cat.angle, outerRadius - 2);
          const labelPos = point(cat.angle, outerRadius + 26);
          const dotRadius = outerRadius * Math.max(0.08, cat.percentage / 100);
          const dotPos = point(cat.angle, dotRadius);
          const isPrimary = cat.key === top.key;
          const isActive = cat.key === activeCat;
          const touchRadius = 22;
          const touchPos = point(cat.angle, outerRadius * Math.max(0.08, cat.percentage / 100));

          return (
            <g key={cat.key}>
              <line
                x1={center} y1={center}
                x2={spokeEnd.x} y2={spokeEnd.y}
                stroke="#9E3B4E"
                strokeWidth={isPrimary ? 1.5 : 1}
                strokeOpacity={isPrimary ? 0.45 : 0.2}
              />

              {/* Score dot */}
              <circle
                cx={dotPos.x}
                cy={dotPos.y}
                r={isPrimary ? 6 : 4}
                fill={isPrimary ? "#c9a14a" : "#9E3B4E"}
                fillOpacity={isPrimary ? 1 : 0.5}
              >
                {isPrimary && mounted && !hasInteracted && (
                  <animate
                    attributeName="r"
                    values="6;9;6"
                    dur="2.4s"
                    repeatCount="indefinite"
                    begin="0.9s"
                  />
                )}
                {isPrimary && mounted && !hasInteracted && (
                  <animate
                    attributeName="fill-opacity"
                    values="1;0.4;1"
                    dur="2.4s"
                    repeatCount="indefinite"
                    begin="0.9s"
                  />
                )}
              </circle>

              {/* Invisible touch target */}
              <circle
                cx={touchPos.x}
                cy={touchPos.y}
                r={touchRadius}
                fill="transparent"
                style={{ cursor: "pointer" }}
                onClick={() => handleCatTap(cat.key)}
              />

              {/* Label */}
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={isPrimary ? 13 : 11}
                fill={isActive ? "#c9a14a" : "var(--foreground)"}
                opacity={isPrimary || isActive ? 1 : 0.45}
                fontWeight={isPrimary || isActive ? 700 : 400}
                fontFamily="Georgia, serif"
                style={{ cursor: "pointer" }}
                onClick={() => handleCatTap(cat.key)}
              >
                {cat.title.split(" ").slice(0, 2).join(" ")}
              </text>
            </g>
          );
        })}

        {/* Needle glow */}
        <ellipse
          cx={center}
          cy={center}
          rx={needleLength * 0.25}
          ry={needleLength * 0.25}
          fill="url(#needle-glow)"
          transform={`rotate(${displayAngle}, ${center}, ${center})`}
        />

        {/* Needle — gold gradient */}
        <polygon
          points={`
            ${needleTip.x},${needleTip.y}
            ${point(displayAngle + 90, 5).x},${point(displayAngle + 90, 5).y}
            ${needleBack.x},${needleBack.y}
            ${point(displayAngle - 90, 5).x},${point(displayAngle - 90, 5).y}
          `}
          fill="url(#needle-gold)"
          opacity={0.95}
        />

        {/* Counter-needle */}
        <polygon
          points={`
            ${needleBack.x},${needleBack.y}
            ${point(displayAngle + 90, 4).x},${point(displayAngle + 90, 4).y}
            ${point(displayAngle + 180, needleLength * 0.12).x},${point(displayAngle + 180, needleLength * 0.12).y}
            ${point(displayAngle - 90, 4).x},${point(displayAngle - 90, 4).y}
          `}
          fill="url(#needle-back-gold)"
        />

        {/* Center pivot — jewel style */}
        <circle cx={center} cy={center} r={11} fill="var(--surface)" stroke="#c9a14a" strokeWidth={1.5} strokeOpacity={0.6} />
        <circle cx={center} cy={center} r={8} fill="url(#jewel-center)" />
        <circle cx={center} cy={center} r={3} fill="#f5e199" fillOpacity={0.9} />

        {/* Tap callout */}
        {activeProfile && calloutPos && (
          <g>
            <rect
              x={calloutPos.x - 38}
              y={calloutPos.y - 18}
              width={76}
              height={36}
              rx={8}
              fill="#9E3B4E"
              fillOpacity={0.93}
              filter="url(#callout-shadow)"
            />
            <text
              x={calloutPos.x}
              y={calloutPos.y - 4}
              textAnchor="middle"
              fontSize={11}
              fill="#f5e199"
              fontFamily="Georgia, serif"
              fontWeight={700}
            >
              {activeProfile.title.split(" ").slice(0, 2).join(" ")}
            </text>
            <text
              x={calloutPos.x}
              y={calloutPos.y + 10}
              textAnchor="middle"
              fontSize={10}
              fill="#c9a14a"
              fontFamily="Georgia, serif"
            >
              {activeProfile.percentage}%
            </text>
          </g>
        )}
      </svg>

      <p className="text-sm text-center max-w-xs leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.8 }}>
        Your compass points toward{" "}
        <span className="font-semibold" style={{ color: "var(--accent)" }}>{top.title}</span>
        {" "}— your strongest dimension at{" "}
        <span className="font-semibold" style={{ color: "var(--accent)" }}>{top.percentage}%</span>.
      </p>
      {!hasInteracted && (
        <p
          className="text-center font-serif"
          style={{ fontSize: 11, color: "var(--accent)", opacity: 0.5, letterSpacing: "0.06em" }}
          aria-hidden="true"
        >
          tap a spoke to explore ›
        </p>
      )}
    </div>
  );
}