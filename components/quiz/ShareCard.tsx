"use client";

import { useRef, useState } from "react";
import { NarrativeResult, CategoryResult } from "@/types/quiz";
import Button from "@/components/ui/Button";

interface Props {
  result: NarrativeResult;
  profile: CategoryResult[];
  quizType: string;
}

function getModeLabel(quizType: string): string {
  switch (quizType) {
    case "love": return "Love Preference";
    case "intimacy": return "Intimacy Style";
    case "love-giving": return "Love Expression";
    case "intimacy-giving": return "Desire Expression";
    default: return "Love Preference";
  }
}

function isGiving(quizType: string): boolean {
  return quizType.endsWith("-giving");
}

export default function ShareCard({ result, profile, quizType }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copiedText, setCopiedText] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const top3 = profile.slice(0, 3);
  const modeLabel = getModeLabel(quizType);
  const giving = isGiving(quizType);

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  }

  function handleCopyText() {
    const text = [
      `My Love Compass Result — ${modeLabel}`,
      ``,
      `${result.primary.name}`,
      `"${result.primary.tagline}"`,
      ``,
      giving
        ? `This is how I naturally express love and desire.`
        : `This is how I feel most loved and connected.`,
      ``,
      `Top dimensions:`,
      ...top3.map(c => `  ${c.title} — ${c.percentage}%`),
      ``,
      `Take your own at lovecompass.app`,
    ].join("\n");

    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    });
  }

  return (
    <div className="space-y-4">
      {/* Visual card */}
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] shadow-md p-8 max-w-sm mx-auto"
        style={{ minHeight: 280 }}
      >
        <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />

        {/* Top label */}
        <div className="relative space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium opacity-40 tracking-widest uppercase">
              Love Compass
            </span>
            <span className="px-2 py-0.5 stamp-badge text-xs font-medium text-[var(--accent)]">
              {modeLabel}
            </span>
          </div>

          {/* Archetype name */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-[var(--primary)] leading-tight">
              {result.primary.name}
            </h3>
            <p className="font-serif italic text-sm opacity-60 mt-1">
              {result.primary.tagline}
            </p>
          </div>

          {/* Top 3 dimension bars */}
          <div className="space-y-2">
            {top3.map(c => (
              <div key={c.key}>
                <div className="flex justify-between text-xs mb-0.5">
                  <span className="opacity-70 font-medium">{c.title}</span>
                  <span className="opacity-40">{c.percentage}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--border-soft)] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[var(--primary)]"
                    style={{ width: `${c.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer tag */}
          <p className="text-xs opacity-30 tracking-wide">
            lovecompass.app
          </p>
        </div>
      </div>

      {/* Share actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button onClick={handleCopyText} variant="primary">
          {copiedText ? "Copied ✓" : "Copy Result to Share"}
        </Button>
        <Button onClick={handleCopyLink} variant="secondary">
          {copiedLink ? "Copied ✓" : "Copy Link"}
        </Button>
      </div>

      <p className="text-xs opacity-40 text-center">
        Send it to a partner. Ask them to take theirs. See where you match — and where you don't.
      </p>
    </div>
  );
}