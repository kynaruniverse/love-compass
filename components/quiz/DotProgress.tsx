export default function DotProgress({
  total,
  current
}: {
  total: number;
  current: number;
}) {
  return (
    <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-md mx-auto px-4">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i < current
              ? "w-4 bg-[var(--primary)]"
              : i === current
              ? "w-6 bg-[var(--accent)]"
              : "w-1.5 bg-[var(--border-soft)]"
          }`}
        />
      ))}
    </div>
  );
}