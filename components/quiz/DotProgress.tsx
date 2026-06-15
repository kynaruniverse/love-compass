import { useEffect, useRef, useState } from "react";

export default function DotProgress({
  total,
  current
}: {
  total: number;
  current: number;
}) {
  const pct = Math.round((current / total) * 100);
  const filled = pct >= 100;
  const [bloom, setBloom] = useState(false);
  const prevPct = useRef(pct);

  useEffect(() => {
    if (pct !== prevPct.current) {
      prevPct.current = pct;
      setBloom(true);
      const t = setTimeout(() => setBloom(false), 400);
      return () => clearTimeout(t);
    }
  }, [pct]);

  return (
    <div className="w-full flex items-center gap-3 px-4 max-w-md mx-auto">
      {/* Hairline track */}
      <div
        className="flex-1 relative overflow-hidden"
        style={{
          height: 6,
          borderRadius: 9999,
          background: "var(--surface-muted)",
          boxShadow: "inset 0 1px 3px rgba(94,58,115,0.13)",
        }}
      >
        <div
          className="absolute inset-y-0 left-0 transition-all duration-500 ease-out"
          style={{
            width: `${pct}%`,
            borderRadius: 9999,
            background: "linear-gradient(90deg, #5e3a73 0%, #7a4d96 50%, #5e3a73 100%)",
            boxShadow: pct > 0 ? "1px 0 0 0 #c9a14a" : "none",
          }}
        />
      </div>

      {/* Question counter */}
      <span className="font-serif text-sm text-[var(--primary)] opacity-70 flex-shrink-0 tabular-nums">
        {Math.min(current + 1, total)} / {total}
      </span>

      {/* Heart fill */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0 transition-all duration-300"
        style={{ transform: bloom ? "scale(1.35)" : "scale(1)" }}
      >
        <path
          d="M8 13.5C8 13.5 1.5 9.5 1.5 5.5C1.5 3.5 3 2 5 2C6.2 2 7.2 2.6 8 3.5C8.8 2.6 9.8 2 11 2C13 2 14.5 3.5 14.5 5.5C14.5 9.5 8 13.5 8 13.5Z"
          stroke="#c9a14a"
          strokeWidth="1.2"
          strokeLinejoin="round"
          opacity="0.3"
        />
        <clipPath id="dot-heart-clip">
          <rect x="0" y="0" width={`${pct * 0.16}`} height="16" />
        </clipPath>
        <path
          d="M8 13.5C8 13.5 1.5 9.5 1.5 5.5C1.5 3.5 3 2 5 2C6.2 2 7.2 2.6 8 3.5C8.8 2.6 9.8 2 11 2C13 2 14.5 3.5 14.5 5.5C14.5 9.5 8 13.5 8 13.5Z"
          fill="var(--primary)"
          clipPath="url(#dot-heart-clip)"
          opacity={filled ? 1 : 0.85}
        />
      </svg>
    </div>
  );
}