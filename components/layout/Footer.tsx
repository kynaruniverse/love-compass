import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border-soft)] bg-[var(--surface-muted)]">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-60">
        <p className="font-serif">Love Compass — for clarity, not diagnosis.</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:opacity-100 hover:text-[var(--accent)] transition-all">
            Privacy
          </Link>
          <Link href="/terms" className="hover:opacity-100 hover:text-[var(--accent)] transition-all">
            Terms
          </Link>
          <Link href="/disclaimer" className="hover:opacity-100 hover:text-[var(--accent)] transition-all">
            Disclaimer
          </Link>
          <Link href="/methodology" className="hover:opacity-100 hover:text-[var(--accent)] transition-all">
            Methodology
          </Link>
        </div>
      </div>
    </footer>
  );
}