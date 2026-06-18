import { ReactNode } from "react";
import PaperCard from "./PaperCard";

export function ContentSection({ children }: { children: ReactNode }) {
  return (
    <PaperCard 
      className="rounded-3xl p-7 sm:p-9"
      borderColor="rgba(201,161,74,0.25)"
      shadow="0 2px 16px rgba(158,59,78,0.07), inset 0 1px 2px rgba(255,255,255,0.7)"
    >
      <div className="relative space-y-4 font-serif [&_p]:opacity-80 [&_p]:leading-relaxed" style={{ fontSize: 16 }}>
        {children}
      </div>

    </PaperCard>
  );
}

export function ContentSectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-serif text-2xl font-bold text-[var(--primary)] leading-snug">
      {children}
    </h2>
  );
}

/** Gold stamp badge — dashed border, metallic gradient text */
export function GoldStampBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-3 py-1 stamp-badge text-xs font-medium"
      style={{
        background: "linear-gradient(135deg, #f5e199 0%, #c9a14a 60%, #8a6520 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        borderColor: "#c9a14a",
      }}
    >
      {children}
    </span>
  );
}

/** Reusable page-level stamp badge + h1 + subtitle hero block */
export function PageHero({
  badge,
  heading,
  subheading,
}: {
  badge: string;
  heading: string;
  subheading?: string;
}) {
  return (
    <div className="space-y-3 pb-2">
      <GoldStampBadge>{badge}</GoldStampBadge>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)] leading-tight">
        {heading}
      </h1>
      {subheading && (
        <p className="text-lg opacity-70 leading-relaxed max-w-xl font-serif">
          {subheading}
        </p>
      )}
    </div>
  );
}
