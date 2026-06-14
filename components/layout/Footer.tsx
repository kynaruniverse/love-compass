import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border-soft)]">
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-28">

        {/* Top row — brand + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[var(--border-soft)]">
          <div className="space-y-1">
            <p className="font-serif text-base font-semibold text-[var(--primary)]">
              Love Compass
            </p>
            <p className="text-xs opacity-50 leading-relaxed max-w-xs">
              For clarity, not diagnosis. A self-reflection tool built around
              one idea: knowing yourself in relationships changes everything.
            </p>
          </div>

          <Link
            href="/assessments"
            className="self-start sm:self-auto inline-block px-4 py-2 rounded-2xl border border-[var(--border-soft)] text-xs font-medium opacity-60 hover:opacity-100 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
          >
            Take an Assessment →
          </Link>
        </div>

        {/* Bottom row — links + copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6">
          <div className="flex flex-wrap gap-5 text-xs opacity-50">
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

          <p className="text-xs opacity-30">
            © {new Date().getFullYear()} Love Compass
          </p>
        </div>

      </div>
    </footer>
  );
}
