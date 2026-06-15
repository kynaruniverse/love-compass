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
      style={variant === "primary" ? {
        background: "linear-gradient(160deg, #C45070 0%, #9E3B4E 100%)",
        WebkitTapHighlightColor: "transparent",
      } : { WebkitTapHighlightColor: "transparent" }}
      className={clsx(
        "h-12 px-7 rounded-2xl font-serif text-base tracking-wide",
        "flex items-center justify-center gap-2",
        "transition-all duration-150",
        "active:scale-95 active:duration-75",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        "-webkit-tap-highlight-color: transparent",

        variant === "primary" && [
          "text-white",
          "shadow-[0_4px_0_0_rgba(158,59,78,0.35)]",
          "active:shadow-none active:translate-y-0.5",
        ],

        variant === "secondary" && [
          "bg-white text-[var(--primary)]",
          "border-2 border-[var(--accent)]",
          "shadow-sm",
          "active:bg-[var(--accent-soft)]",
        ],

        variant === "ghost" && [
          "h-auto px-4 text-[var(--primary)]",
          "border border-[var(--border-soft)]",
          "active:opacity-60",
        ],

        disabled && "opacity-40 cursor-not-allowed grayscale pointer-events-none",
        className
      )}
    >
      {children}
    </button>
  );
}