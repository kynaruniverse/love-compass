"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="lc-back-to-top"
      style={{
        position: "fixed",
        bottom: "5.5rem",
        right: "1.25rem",
        zIndex: 40,
        width: "44px",
        height: "44px",
        borderRadius: "9999px",
        background: "rgba(201,161,74,0.18)",
        border: "1px solid rgba(201,161,74,0.45)",
        color: "var(--accent)",
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
        WebkitTapHighlightColor: "transparent",
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

      <footer>
        <div className="lc-footer-inner">

          {/* Brand block */}
          <div className="lc-footer-brand">
            <Link href="/" className="lc-footer-logo" aria-label="Love Compass home">
              <Image
                src="/logo.svg"
                alt="Love Compass"
                width={100}
                height={33}
                style={{ opacity: 0.8 }}
              />
            </Link>
            <p className="lc-footer-tagline">
              For self-knowledge and better love. A tool built around one idea: knowing yourself in relationships changes everything.
            </p>
          </div>

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
