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
        "before:absolute before:inset-0 before:paper-texture before:pointer-events-none before:opacity-60",
        className
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}