"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "5.5rem", // sits above the bottom nav bar
        right: "1.25rem",
        zIndex: 40,
        width: "44px",
        height: "44px",
        borderRadius: "9999px",
        background: "rgba(26,10,46,0.85)",
        border: "1px solid rgba(201,161,74,0.35)",
        color: "rgba(201,161,74,0.85)",
        fontSize: "1.1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
        cursor: "pointer",
      }}
    >
      ↑
    </button>
  );
}

export default function Footer() {
  return (
    <>
      <BackToTop />

      <footer
        style={{
          background: "linear-gradient(to bottom, #1a0a2e 0%, #241530 60%, #2e1c3a 100%)",
          marginTop: 0,
        }}
      >
        <div className="lc-footer-inner">

          {/* Brand block */}
          <div className="lc-footer-brand">
            <Link href="/" className="lc-footer-logo">
              Love Compass
            </Link>
            <p className="lc-footer-tagline">
              For clarity, not diagnosis. A self-reflection tool built around
              one idea: knowing yourself in relationships changes everything.
            </p>
          </div>

          {/* CTA */}
          <Link href="/assessments" className="lc-footer-cta">
            Begin Your Assessment →
          </Link>

          {/* Divider */}
          <div className="lc-footer-divider" />

          {/* Methodology — prominent, own row */}
          <div className="lc-footer-methodology-row">
            <Link href="/methodology" className="lc-footer-methodology">
              ◈ Read our Methodology
            </Link>
            <p className="lc-footer-methodology-sub">
              How these assessments were built and what they measure.
            </p>
          </div>

          {/* Divider */}
          <div className="lc-footer-divider" />

          {/* Legal links + copyright */}
          <div className="lc-footer-bottom">
            <div className="lc-footer-links">
              <Link href="/privacy"    className="lc-footer-link">Privacy</Link>
              <Link href="/terms"      className="lc-footer-link">Terms</Link>
              <Link href="/disclaimer" className="lc-footer-link">Disclaimer</Link>
            </div>
            <p className="lc-footer-copy">
              © {new Date().getFullYear()} Love Compass
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
