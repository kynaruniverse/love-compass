import clsx from "clsx";

export default function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative rounded-3xl p-6 shadow-[0_2px_16px_-4px_rgba(46,39,34,0.08)] bg-[var(--surface)] border border-[var(--border-soft)] overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}