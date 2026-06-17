import { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

interface PaperCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Render the gold top-accent hairline */
  accent?: boolean;
  /** Border colour. Defaults to gold. */
  borderColor?: string;
  /** Box shadow override */
  shadow?: string;
}

export default function PaperCard({
  children,
  className,
  style,
  accent = false,
  borderColor = "#c9a14a",
  shadow = "0 2px 24px rgba(158,59,78,0.08), inset 0 1px 3px rgba(255,255,255,0.7)",
}: PaperCardProps) {
  return (
    <div
      className={clsx("relative overflow-hidden", className)}
      style={{
        border: `1.5px solid ${borderColor}`,
        background: "var(--surface)",
        boxShadow: shadow,
        ...style,
      }}
    >
      <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
      {accent && (
        <div
          className="absolute top-0 left-8 right-8 h-px pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, #c9a14a55, transparent)",
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}