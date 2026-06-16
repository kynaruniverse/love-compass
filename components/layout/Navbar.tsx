"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  { href: "/assessments", label: "Assessments" },
  { href: "/about",       label: "About" },
];

const menuLinks = [
  { href: "/faq",         label: "FAQ" },
  { href: "/methodology", label: "Methodology" },
  { href: "/privacy",     label: "Privacy" },
  { href: "/terms",       label: "Terms" },
  { href: "/disclaimer",  label: "Disclaimer" },
];

import Image from "next/image";

// ── Hamburger icon ─────────────────────────────────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect
        x="2" y={open ? "8.5" : "4"} width="14" height="1.5"
        rx="0.75"
        fill="currentColor"
        style={{
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transformOrigin: "9px 9px",
          transition: "transform 0.25s ease, y 0.25s ease",
        }}
      />
      <rect
        x="2" y="8.25" width="14" height="1.5"
        rx="0.75"
        fill="currentColor"
        style={{
          opacity: open ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      />
      <rect
        x="2" y={open ? "8.5" : "12.5"} width="14" height="1.5"
        rx="0.75"
        fill="currentColor"
        style={{
          transform: open ? "rotate(-45deg)" : "rotate(0deg)",
          transformOrigin: "9px 9px",
          transition: "transform 0.25s ease, y 0.25s ease",
        }}
      />
    </svg>
  );
}

// ── Main navbar ────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname  = usePathname();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY     = useRef(0);
  const menuRef   = useRef<HTMLDivElement>(null);

  // Scroll-hide / scroll-show
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y < 80) { setVisible(true); return; }
      if (y < lastY.current - 8)  setVisible(true);   // scrolling up
      if (y > lastY.current + 8)  setVisible(false);  // scrolling down
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Close menu on outside tap
  useEffect(() => {
    if (!menuOpen) return;
    function onTap(e: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onTap);
    document.addEventListener("touchstart", onTap);
    return () => {
      document.removeEventListener("mousedown", onTap);
      document.removeEventListener("touchstart", onTap);
    };
  }, [menuOpen]);

  const homeActive = pathname === "/";

  return (
    <>

      {/* Slide-up menu sheet */}
      <div
        className="lc-nav-sheet"
        style={{
          opacity:    menuOpen ? 1 : 0,
          transform:  menuOpen ? "translateY(0)" : "translateY(12px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        {menuLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`lc-nav-sheet-link ${pathname.startsWith(l.href) ? "lc-nav-sheet-link--active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Pill nav */}
      <div
        ref={menuRef}
        className="lc-nav-wrap"
        style={{
          transform: `translateX(-50%) translateY(${visible ? "0" : "110%"})`,
          opacity:   visible ? 1 : 0,
        }}
      >
        <nav className="lc-nav-pill" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>

          {/* Home / logo */}
          <Link
            href="/"
            className="lc-nav-icon-btn"
            aria-label="Home"
            style={{ color: homeActive ? "var(--accent)" : "rgba(245,240,232,0.55)" }}
          >
            <div className={`lc-nav-aura ${homeActive ? "lc-nav-aura--active" : ""}`} />
            <Image
              src="/apple-touch-icon.png"
              alt="Love Compass"
              width={24}
              height={24}
              style={{
                opacity: homeActive ? 1 : 0.55,
                transition: "opacity 0.2s ease",
              }}
            />
            <span className="lc-nav-label" style={{ color: homeActive ? "var(--accent)" : undefined }}>
              Home
            </span>
          </Link>

          {/* Primary links */}
          {primaryLinks.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className="lc-nav-icon-btn"
                aria-current={active ? "page" : undefined}
                style={{ color: active ? "var(--accent)" : "rgba(245,240,232,0.55)" }}
              >
                <div className={`lc-nav-aura ${active ? "lc-nav-aura--active" : ""}`} />
                <span className="lc-nav-text-label">{l.label}</span>
              </Link>
            );
          })}

          {/* Divider */}
          <div className="lc-nav-divider" aria-hidden="true" />

          {/* Hamburger */}
          <button
            className="lc-nav-icon-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            style={{ color: menuOpen ? "var(--accent)" : "rgba(245,240,232,0.55)" }}
          >
            <div className={`lc-nav-aura ${menuOpen ? "lc-nav-aura--active" : ""}`} />
            <HamburgerIcon open={menuOpen} />
            <span className="lc-nav-label">More</span>
          </button>

        </nav>
      </div>
    </>
  );
}
