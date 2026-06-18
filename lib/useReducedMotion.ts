"use client";

import { useEffect, useState } from "react";

// Module-level cache: the MediaQueryList is created once per JS context
// (once per browser tab) and shared across all component instances.
// This avoids N separate matchMedia calls for N FadeIn elements.
let _mql: MediaQueryList | null = null;

function getMQL(): MediaQueryList | null {
  if (typeof window === "undefined") return null;
  if (!_mql) {
    _mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  }
  return _mql;
}

/**
 * Returns true when the user has requested reduced motion.
 * The MediaQueryList is shared at module scope — all callers subscribe
 * to the same instance, so N FadeIn components incur only 1 matchMedia
 * query total rather than N.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState<boolean>(() => {
    // Safe SSR default: do not animate until we know the preference.
    // This also avoids a flash of animated content on first paint.
    const mql = getMQL();
    return mql?.matches ?? false;
  });

  useEffect(() => {
    const mql = getMQL();
    if (!mql) return;

    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return prefersReduced;
}