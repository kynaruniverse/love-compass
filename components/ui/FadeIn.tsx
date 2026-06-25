"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  role,
  "aria-label": ariaLabel,
  as: Tag = "div",
  subtle = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  role?: string;
  "aria-label"?: string;
  as?: "div" | "span";
  subtle?: boolean;
}) {
  const ref = useRef<HTMLDivElement & HTMLSpanElement>(null);
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

  const translateY = subtle ? "8px" : "20px";
  const duration   = subtle ? "0.35s" : "0.6s";

  const style = prefersReduced
    ? { opacity: 1 }
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${translateY})`,
        transition: `opacity ${duration} ease ${delay}ms, transform ${duration} ease ${delay}ms`,
      };

  return (
    <Tag ref={ref} className={className} role={role} aria-label={ariaLabel} style={style}>
      {children}
    </Tag>
  );
}