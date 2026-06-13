"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur border-b border-[var(--border-soft)]">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-[var(--primary)] whitespace-nowrap"
        >
          Love Compass
        </Link>

        <div className="flex items-center gap-4 sm:gap-5 text-sm overflow-x-auto whitespace-nowrap">
          <Link
            href="/assessments"
            className="font-medium text-[var(--accent)] hover:opacity-80 transition-opacity shrink-0"
          >
            Take Test
          </Link>
          <Link
            href="/about"
            className="opacity-70 hover:opacity-100 transition-opacity shrink-0"
          >
            About
          </Link>
          <Link
            href="/methodology"
            className="opacity-70 hover:opacity-100 transition-opacity shrink-0 hidden sm:inline"
          >
            Methodology
          </Link>
          <Link
            href="/faq"
            className="opacity-70 hover:opacity-100 transition-opacity shrink-0"
          >
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}