import { clamp } from "@/lib/helpers";

export default function ProgressBar({
  value,
}: {
  value: number;
  label?: string;
}) {
  const clamped = clamp(value, 0, 100);
  const filled = clamped >= 100;

  return (
    <div className="w-full flex items-center gap-3">
      {/* Hairline track */}
      <div
        className="flex-1 h-px bg-[var(--border-soft)] relative overflow-hidden"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="absolute inset-y-0 left-0 bg-[var(--primary)] transition-all duration-500 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>

      {/* Heart fill indicator */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0 transition-all duration-500"
      >
        {/* Outline (always visible) */}
        <path
          d="M8 13.5C8 13.5 1.5 9.5 1.5 5.5C1.5 3.5 3 2 5 2C6.2 2 7.2 2.6 8 3.5C8.8 2.6 9.8 2 11 2C13 2 14.5 3.5 14.5 5.5C14.5 9.5 8 13.5 8 13.5Z"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeLinejoin="round"
          opacity="0.3"
        />
        {/* Fill (clips based on progress) */}
        <clipPath id="heart-clip">
          <rect x="0" y="0" width={`${clamped * 0.16}`} height="16" />
        </clipPath>
        <path
          d="M8 13.5C8 13.5 1.5 9.5 1.5 5.5C1.5 3.5 3 2 5 2C6.2 2 7.2 2.6 8 3.5C8.8 2.6 9.8 2 11 2C13 2 14.5 3.5 14.5 5.5C14.5 9.5 8 13.5 8 13.5Z"
          fill={filled ? "var(--primary)" : "var(--primary)"}
          clipPath="url(#heart-clip)"
          opacity={filled ? 1 : 0.85}
        />
      </svg>
    </div>
  );
}
