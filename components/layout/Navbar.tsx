"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Home, ClipboardList, Info } from "lucide-react";

const tabs = [
  { href: "/",            label: "Home",        Icon: Home },
  { href: "/assessments", label: "Assessments", Icon: ClipboardList },
  { href: "/about",       label: "About",        Icon: Info },
];

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  // Scroll-hide / scroll-show
  const onScroll = useCallback(() => {
    const y = window.scrollY;
    if (y < 80) {
      setVisible(true);
      lastY.current = y;
      return;
    }
    if (y < lastY.current - 8) setVisible(true);
    if (y > lastY.current + 8) setVisible(false);
    lastY.current = y;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

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
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
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