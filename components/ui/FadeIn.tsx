"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  role,
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  role?: string;
  "aria-label"?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Single shared MediaQueryList instance — not re-queried per component.
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [prefersReduced]);

  return (
    <div
      ref={ref}
      className={className}
      role={role}
      aria-label={ariaLabel}
      style={
        prefersReduced
          ? { opacity: 1 }
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  );
}