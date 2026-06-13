import { clamp } from "@/lib/helpers";

export default function ProgressBar({
  value,
  label
}: {
  value: number;
  label?: string;
}) {
  const clamped = clamp(value, 0, 100);

  return (
    <div className="w-full space-y-1">
      {label && (
        <p className="text-xs text-[var(--foreground)] opacity-60">{label}</p>
      )}
      <div
        className="w-full h-2.5 bg-[var(--surface-muted)] rounded-full overflow-hidden border border-[var(--border-soft)]"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-[var(--primary)] rounded-full transition-all duration-300"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}