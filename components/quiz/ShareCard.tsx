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
    }).catch(() => {
      // Clipboard unavailable (HTTP, permission denied, etc.) — fail silently
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
    }).catch(() => {
      // Clipboard unavailable — fail silently
    });
  }

  return (
    <div className="space-y-4">
      {/* Visual card */}
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-3xl p-8 max-w-sm mx-auto"
        style={{
          minHeight: 280,
          border: "1.5px solid #c9a14a",
          background: "var(--surface)",
          boxShadow: "0 4px 32px rgba(158,59,78,0.13), 0 1px 4px rgba(158,59,78,0.08), inset 0 1px 2px rgba(255,255,255,0.7)",
        }}
      >
        <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />

        {/* Top label */}
        <div className="relative space-y-5">
          <div
            className="absolute -top-8 left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, #c9a14a66, transparent)" }}
          />
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium opacity-40 tracking-widest uppercase">
              Love Compass
            </span>
            <span
              className="px-2 py-0.5 stamp-badge text-xs font-medium"
              style={{
                background: "linear-gradient(135deg, #f5e199 0%, #c9a14a 60%, #8a6520 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                borderColor: "#c9a14a",
              }}
            >
              {modeLabel}
            </span>
          </div>

          {/* Archetype name */}
          <div>
            <h3 className="font-serif text-3xl font-bold leading-tight" style={{ color: "var(--primary)" }}>
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
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--surface-muted)" }}>
                  <div
                    className="h-full rounded-full relative"
                    style={{
                      width: `${c.percentage}%`,
                      background: "linear-gradient(90deg, #9E3B4E 0%, #C45070 100%)",
                    }}
                  >
                    <span
                      className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        width: 6,
                        height: 6,
                        background: "#c9a14a",
                        boxShadow: "0 0 4px rgba(201,161,74,0.6)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer tag */}
          <p className="opacity-30 tracking-wide" style={{ fontSize: 13 }}>
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