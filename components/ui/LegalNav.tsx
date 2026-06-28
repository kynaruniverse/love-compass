"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LEGAL_PAGES = [
  { href: "/methodology", label: "Methodology" },
  { href: "/about",       label: "About"       },
  { href: "/privacy",     label: "Privacy"     },
  { href: "/terms",       label: "Terms"       },
  { href: "/disclaimer",  label: "Disclaimer"  },
];

export default function LegalNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Secondary pages"
      className="lc-legal-nav"
    >
      {LEGAL_PAGES.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="lc-legal-nav-link"
            aria-current={active ? "page" : undefined}
            style={{ opacity: active ? 1 : undefined }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}