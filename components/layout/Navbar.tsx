"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Home, ClipboardList, HelpCircle, FlaskConical } from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const tabs = [
  { href: "/",             label: "Home",        Icon: Home },
  { href: "/assessments",  label: "Assessments", Icon: ClipboardList },
  { href: "/faq",          label: "FAQ",         Icon: HelpCircle },
  { href: "/methodology",  label: "Methodology", Icon: FlaskConical },
];

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  const isQuiz = pathname.startsWith("/assessments/");
  const isResults = pathname === "/results";
  const reducedMotion = useReducedMotion();

  // Scroll-hide / scroll-show — disabled on results (always visible), quiz (nav hidden entirely),
  // and reduced-motion users (sudden appearance/disappearance is as disruptive as animation).
  const onScroll = useCallback(() => {
    if (isResults || reducedMotion) return;
    const y = window.scrollY;
    if (y < 80) {
      setVisible(true);
      lastY.current = y;
      return;
    }
    if (y < lastY.current - 8) setVisible(true);
    if (y > lastY.current + 8) setVisible(false);
    lastY.current = y;
  }, [isResults]);

  useEffect(() => {
    if (isResults || reducedMotion) { setVisible(true); return; }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll, isResults, reducedMotion]);

  if (isQuiz) return null;

  return (
    <nav
      aria-label="Site navigation"
      className="lc-tabbar"
      style={{
        transform: `translateY(${visible ? "0" : "120%"})`,
        opacity: visible ? 1 : 0,
      }}
    >
      {tabs.map(({ href, label, Icon }) => {
        // Active if exact match, or if the pathname is a genuine child route
        // (starts with href + "/"). Simple startsWith would false-positive on
        // routes that share a prefix, e.g. /faq-something lighting up /faq.
        const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            className={`lc-tab ${active ? "lc-tab--active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <Icon size={22} strokeWidth={active ? 2.25 : 1.75} aria-hidden="true" />
            <span className="lc-tab-label">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}