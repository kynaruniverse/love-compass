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
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        pointerEvents: visible ? "auto" : "none",
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

          {/* Botanical divider */}
          <div className="lc-footer-divider-full" aria-hidden="true">
            <Image
              src="/botanical-divider.png"
              alt=""
              width={1544}
              height={232}
              style={{ width: "100%", height: "auto", maxWidth: "100%" }}
            />
          </div>

          <p className="lc-footer-tagline">
            Knowing yourself. For the people worth loving.
          </p>

          {/* Divider */}
          <div className="lc-footer-divider" />

          {/* Methodology — prominent, own row */}
          <div className="lc-footer-methodology-row">
            <Link href="/methodology" className="lc-footer-methodology">
              ✦ Read our Methodology
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
              <Link href="/faq"        className="lc-footer-link">FAQ</Link>
            </div>
            <p className="lc-footer-copy">
              © {new Date().getFullYear()} Love Wired
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
