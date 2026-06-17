"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  { href: "/",            label: "Home" },
  { href: "/assessments", label: "Assessments" },
  { href: "/about",       label: "About" },
];

const moreLinks = [
  { href: "/faq",         label: "FAQ" },
  { href: "/methodology", label: "Methodology" },
  { href: "/privacy",     label: "Privacy" },
  { href: "/terms",       label: "Terms" },
  { href: "/disclaimer",  label: "Disclaimer" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [menuOpen, setMenuOpen]   = useState(false);
  const [moreOpen, setMoreOpen]   = useState(false);
  const [visible,  setVisible]    = useState(true);
  const lastY   = useRef(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Scroll-hide / scroll-show
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y < 80) {
        setVisible(true);
        lastY.current = y;
        return;
      }
      if (y < lastY.current - 8) setVisible(true);
      if (y > lastY.current + 8) setVisible(false);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  // Close on outside tap
  useEffect(() => {
    if (!menuOpen) return;
    function onTap(e: MouseEvent | TouchEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", onTap);
    document.addEventListener("touchstart", onTap);
    return () => {
      document.removeEventListener("mousedown", onTap);
      document.removeEventListener("touchstart", onTap);
    };
  }, [menuOpen]);

  return (
    <div ref={wrapRef} className="lc-sigil-wrap" style={{
      transform: `translateY(${visible ? "0" : "120%"})`,
      opacity: visible ? 1 : 0,
    }}>

      {/* ── Bloom menu ── */}
      <div className="lc-bloom-menu" aria-hidden={!menuOpen} style={{
        pointerEvents: menuOpen ? "auto" : "none",
      }}>

        {/* More sub-menu */}
        {moreOpen && (
          <div className="lc-bloom-more">
            {moreLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={`lc-bloom-more-link ${pathname.startsWith(l.href) ? "lc-bloom-link--active" : ""}`}
                onClick={() => { setMenuOpen(false); setMoreOpen(false); }}
                tabIndex={menuOpen ? 0 : -1}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}

        {/* Primary bloom links */}
        {primaryLinks.map((l, i) => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`lc-bloom-link ${active ? "lc-bloom-link--active" : ""}`}
              onClick={() => { setMenuOpen(false); setMoreOpen(false); }}
              tabIndex={menuOpen ? 0 : -1}
              style={{
                animationDelay: menuOpen ? `${i * 60}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
              }}
            >
              {l.label}
            </Link>
          );
        })}

        {/* More trigger */}
        <button
          className={`lc-bloom-link lc-bloom-more-btn ${moreOpen ? "lc-bloom-link--active" : ""}`}
          onClick={() => setMoreOpen((o) => !o)}
          tabIndex={menuOpen ? 0 : -1}
          aria-expanded={moreOpen}
          aria-label={moreOpen ? "Collapse more links" : "Show more links"}
          style={{
            animationDelay: menuOpen ? "180ms" : "0ms",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
          }}
        >
          More {moreOpen ? "↓" : "↑"}
        </button>

      </div>

      {/* ── Sigil button ── */}
      <button
        className={`lc-sigil-btn ${menuOpen ? "lc-sigil-btn--open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => { setMenuOpen((o) => !o); if (menuOpen) setMoreOpen(false); }}
      >
        <Image
          src="/icon.svg"
          alt=""
          width={32}
          height={32}
          aria-hidden
          style={{
            transition: "transform 0.4s ease, opacity 0.3s ease",
            transform: menuOpen ? "rotate(45deg) scale(0.85)" : "rotate(0deg) scale(1)",
            opacity: menuOpen ? 0.7 : 1,
          }}
        />
      </button>

    </div>
  );
}