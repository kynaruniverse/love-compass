import { clamp } from "@/lib";
import { useId } from "react";

export default function ProgressBar({
  value,
}: {
  value: number;
}) {
  const uid = useId().replace(/:/g, "-");
  const clamped = clamp(value, 0, 100);

  return (
    <div className="w-full flex items-center gap-3">
      {/* Pill track */}
      <div
        className="flex-1 relative overflow-hidden"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Category score"
        aria-valuetext={`${clamped} out of 100`}
        style={{
          height: 6,
          borderRadius: 9999,
          background: "var(--surface-muted)",
          boxShadow: "inset 0 1px 3px rgba(158,59,78,0.13)",
        }}
      >
        <div
          className="absolute inset-y-0 left-0 transition-all duration-500 ease-out"
          style={{
            width: `${clamped}%`,
            borderRadius: 9999,
            background: "linear-gradient(90deg, #9E3B4E 0%, #C45070 50%, #9E3B4E 100%)",
          }}
        >
          {/* Gold tip marker */}
          {clamped > 2 && (
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 6,
                height: 6,
                background: "#c9a14a",
                boxShadow: "0 0 4px rgba(201,161,74,0.6)",
              }}
            />
          )}
        </div>
      </div>

      {/* Heart fill indicator */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <defs>
          <clipPath id={`heart-clip-${uid}`}>
            <rect x="0" y="0" width={`${clamped * 0.16}`} height="16" />
          </clipPath>
        </defs>
        {/* Outline */}
        <path
          d="M8 13.5C8 13.5 1.5 9.5 1.5 5.5C1.5 3.5 3 2 5 2C6.2 2 7.2 2.6 8 3.5C8.8 2.6 9.8 2 11 2C13 2 14.5 3.5 14.5 5.5C14.5 9.5 8 13.5 8 13.5Z"
          stroke="#c9a14a"
          strokeWidth="1.2"
          strokeLinejoin="round"
          opacity="0.45"
        />
        {/* Fill */}
        <path
          d="M8 13.5C8 13.5 1.5 9.5 1.5 5.5C1.5 3.5 3 2 5 2C6.2 2 7.2 2.6 8 3.5C8.8 2.6 9.8 2 11 2C13 2 14.5 3.5 14.5 5.5C14.5 9.5 8 13.5 8 13.5Z"
          fill="var(--primary)"
          clipPath={`url(#heart-clip-${uid})`}
          opacity={clamped >= 100 ? 1 : 0.85}
        />
      </svg>
    </div>
  );
}