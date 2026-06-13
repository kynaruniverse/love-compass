import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-60">
        <p>Love Compass — Self-reflection tool only. Not diagnostic.</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:opacity-100 transition-opacity">
            Privacy
          </Link>
          <Link href="/terms" className="hover:opacity-100 transition-opacity">
            Terms
          </Link>
          <Link href="/disclaimer" className="hover:opacity-100 transition-opacity">
            Disclaimer
          </Link>
          <Link href="/methodology" className="hover:opacity-100 transition-opacity">
            Methodology
          </Link>
        </div>
      </div>
    </footer>
  );
}