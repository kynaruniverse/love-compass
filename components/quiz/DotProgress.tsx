export default function DotProgress({
  total,
  current
}: {
  total: number;
  current: number;
}) {
  const pct = Math.round((current / total) * 100);
  const filled = pct >= 100;

  return (
    <div className="w-full flex items-center gap-3 px-4 max-w-md mx-auto">
      {/* Hairline track */}
      <div className="flex-1 h-px bg-[var(--border-soft)] relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-[var(--primary)] transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Question counter */}
      <span className="font-serif text-xs text-[var(--primary)] opacity-60 flex-shrink-0 tabular-nums">
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
        className="flex-shrink-0 transition-all duration-500"
      >
        <path
          d="M8 13.5C8 13.5 1.5 9.5 1.5 5.5C1.5 3.5 3 2 5 2C6.2 2 7.2 2.6 8 3.5C8.8 2.6 9.8 2 11 2C13 2 14.5 3.5 14.5 5.5C14.5 9.5 8 13.5 8 13.5Z"
          stroke="var(--primary)"
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