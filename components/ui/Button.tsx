"use client";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({
  children,
  onClick,
  disabled,
  variant = "primary",
  type = "button",
  className
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={clsx(
        "px-4 py-2 rounded-xl transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]",
        variant === "primary" &&
          "bg-[var(--primary)] text-white hover:opacity-90",
        variant === "secondary" &&
          "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700",
        variant === "ghost" &&
          "border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}