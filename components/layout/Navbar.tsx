"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/assessments", label: "Assessments" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

function OrbitingHeart() {
  const [angle, setAngle] = useState(0);
  const rafRef = useRef<number>(0);
  const lastRef = useRef<number>(0);

  useEffect(() => {
    function tick(ts: number) {
      const delta = ts - (lastRef.current || ts);
      lastRef.current = ts;
      setAngle(a => (a + delta * 0.12) % 360);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const rad = (angle * Math.PI) / 180;
  const r = 18;
  const x = Math.cos(rad) * r;
  const y = Math.sin(rad) * r;

  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        fontSize: "7px",
        lineHeight: 1,
        pointerEvents: "none",
        userSelect: "none",
        color: "var(--accent)",
        opacity: 0.85,
      }}
    >
      ♥
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeIndex = links.findIndex(l => pathname.startsWith(l.href));
    if (activeIndex === -1) return;
    const el = linkRefs.current[activeIndex];
    const nav = navRef.current;
    if (!el || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setUnderlineStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
    });
  }, [pathname]);

  return (
    <>
      {/* Spacer so content doesn't hide behind bottom nav */}
      <div className="h-16" aria-hidden="true" />

      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-[var(--background)]/95 backdrop-blur border-t border-[var(--border-soft)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div
          ref={navRef}
          className="max-w-lg mx-auto px-6 py-3 flex items-center justify-between relative"
        >
          {/* Logo with orbiting heart */}
          <Link
            href="/"
            className="relative font-serif text-lg font-semibold tracking-tight text-[var(--primary)] w-10 h-10 flex items-center justify-center flex-shrink-0"
            aria-label="Love Compass home"
          >
            <span className="relative z-10">LC</span>
            <OrbitingHeart />
          </Link>

          {/* Nav links + sliding underline */}
          <div className="relative flex items-center gap-6">
            {/* Sliding underline */}
            <span
              className="absolute -bottom-1 h-px bg-[var(--primary)] transition-all duration-300 ease-out"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />

            {links.map((link, i) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={el => { linkRefs.current[i] = el; }}
                  className={`text-sm font-medium transition-opacity ${
                    active
                      ? "text-[var(--primary)] opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
