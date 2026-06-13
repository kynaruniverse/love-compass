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
        <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
      )}
      <div
        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-2 bg-[var(--primary)] rounded-full transition-all duration-300"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}