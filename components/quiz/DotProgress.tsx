import { useEffect, useId, useRef, useState } from "react";

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
  const uid = useId().replace(/:/g, "-");

  useEffect(() => {
    if (pct !== prevPct.current) {
      prevPct.current = pct;
      setBloom(true);
      const t = setTimeout(() => setBloom(false), 400);
      return () => clearTimeout(t);
    }
  }, [pct]);

  return (
    <>
      {/* Full-width flush progress bar — sits at very top of quiz shell */}
      <div
        className="w-full overflow-hidden"
        style={{
          height: 3,
          background: "var(--surface-muted)",
        }}
        role="progressbar"
        aria-valuenow={Math.min(current + 1, total)}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Question ${Math.min(current + 1, total)} of ${total}`}
      >
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #c9a14a 0%, #e8c97a 50%, #c9a14a 100%)",
          }}
        />
      </div>

      {/* Counter row */}
      <div className="w-full flex items-center justify-end px-4 pt-2 pb-1 max-w-xl mx-auto">
        <span className="font-serif text-xs text-[var(--primary)] opacity-60 tabular-nums">
          {Math.min(current + 1, total)} / {total}
        </span>
      </div>
    </>
  );
}