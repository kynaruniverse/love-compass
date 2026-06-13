"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/85 backdrop-blur border-b border-[var(--border-soft)]">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-[var(--primary)]"
        >
          Love Compass
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <Link
            href="/assessments"
            className="font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
          >
            Take a Test
          </Link>
          <Link
            href="/about"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            About
          </Link>
          <Link
            href="/methodology"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            Methodology
          </Link>
          <Link
            href="/faq"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            FAQ
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}