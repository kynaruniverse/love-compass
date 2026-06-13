"use client";

import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "dark" ? "Switch to Light" : "Switch to Dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="px-3 py-1.5 rounded-full border border-[var(--border-soft)] text-sm hover:bg-[var(--surface-muted)] transition-colors"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}