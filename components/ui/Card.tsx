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
        "rounded-2xl p-6 shadow-md bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800",
        className
      )}
    >
      {children}
    </div>
  );
}