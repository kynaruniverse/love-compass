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

// ── Compass SVG logo mark ──────────────────────────────────────────────────
function CompassMark({ active }: { active: boolean }) {
  return (
    <svg
      width="22" height="22" viewBox="0 0 22 22"
      fill="none" aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* Outer ring */}
      <circle
        cx="11" cy="11" r="9.5"
        stroke={active ? "var(--accent)" : "currentColor"}
        strokeWidth="1"
        opacity={active ? 0.9 : 0.45}
      />
      {/* North petal */}
      <path
        d="M11 2.5 L12.4 9.5 L11 8 L9.6 9.5 Z"
        fill={active ? "var(--accent)" : "currentColor"}
        opacity={active ? 1 : 0.6}
      />
      {/* South petal */}
      <path
        d="M11 19.5 L12.4 12.5 L11 14 L9.6 12.5 Z"
        fill={active ? "var(--accent)" : "currentColor"}
        opacity={active ? 0.45 : 0.25}
      />
      {/* East petal */}
      <path
        d="M19.5 11 L12.5 9.6 L14 11 L12.5 12.4 Z"
        fill={active ? "var(--accent)" : "currentColor"}
        opacity={active ? 0.45 : 0.25}
      />
      {/* West petal */}
      <path
        d="M2.5 11 L9.5 9.6 L8 11 L9.5 12.4 Z"
        fill={active ? "var(--accent)" : "currentColor"}
        opacity={active ? 0.45 : 0.25}
      />
      {/* Centre dot */}
      <circle
        cx="11" cy="11" r="1.5"
        fill={active ? "var(--accent)" : "currentColor"}
        opacity={active ? 1 : 0.5}
      />
    </svg>
  );
}

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
      {/* Spacer — prevents content hiding behind nav */}
      <div className="h-24" aria-hidden="true" />

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

          {/* Home / compass */}
          <Link
            href="/"
            className="lc-nav-icon-btn"
            aria-label="Home"
            style={{ color: homeActive ? "var(--accent)" : "rgba(245,240,232,0.55)" }}
          >
            <div className={`lc-nav-aura ${homeActive ? "lc-nav-aura--active" : ""}`} />
            <CompassMark active={homeActive} />
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
