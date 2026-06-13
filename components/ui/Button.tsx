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
        "px-5 py-2.5 rounded-2xl transition-all font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        variant === "primary" &&
          "bg-[var(--primary)] text-white shadow-sm hover:opacity-90 hover:shadow-md",
        variant === "secondary" &&
          "bg-[var(--accent-soft)] text-[var(--foreground)] hover:bg-[var(--blush)]",
        variant === "ghost" &&
          "border border-[var(--border-soft)] hover:bg-[var(--surface-muted)]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}