"use client";

import { useCallback, useMemo, useState } from "react";
import { NarrativeResult, CategoryResult } from "@/types/quiz";
import { Button, GoldStampBadge } from "@/components/ui";
import { getQuizTypeLabel, isGivingMode } from "@/lib";

interface Props {
  result: NarrativeResult;
  profile: CategoryResult[];
  quizType: string;
  /** A fully self-contained URL that reproduces this exact result for anyone who opens it. */
  shareUrl?: string;
}

export default function ShareCard({ result, profile, quizType, shareUrl }: Props) {
  type CopyState = "idle" | "text" | "link" | "error";
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const top3 = useMemo(() => profile.slice(0, 3), [profile]);
  const modeLabel = useMemo(() => getQuizTypeLabel(quizType), [quizType]);
  const giving = useMemo(() => isGivingMode(quizType), [quizType]);

  const copyString = useCallback((text: string, successState: CopyState) => {
    navigator.clipboard.writeText(text)
      .then(() => { setCopyState(successState); setTimeout(() => setCopyState("idle"), 2000); })
      .catch(() => { setCopyState("error"); setTimeout(() => setCopyState("idle"), 3000); });
  }, []);

  const handleCopyLink = useCallback(() => {
    copyString(shareUrl ?? window.location.href, "link");
  }, [copyString, shareUrl]);

  const handleCopyText = useCallback(() => {
    const text = [
      `My Love Compass Result — ${modeLabel}`,
      ``,
      result.primary.name,
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
    copyString(text, "text");
  }, [copyString, giving, modeLabel, result.primary.name, result.primary.tagline, top3]);

  return (
    <div className="space-y-4">
      {/* Visual card */}
      <figure
        className="relative overflow-hidden rounded-3xl p-8 max-w-sm mx-auto"
        aria-label={`Share card for ${result.primary.name}`}
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
            <GoldStampBadge>{modeLabel}</GoldStampBadge>
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
      </figure>

      {/* Share actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button onClick={handleCopyText} variant="primary">
          {copyState === "text" ? "Copied ✓" : "Copy Result to Share"}
        </Button>
        <Button onClick={handleCopyLink} variant="secondary">
          {copyState === "link" ? "Copied ✓" : "Copy Shareable Link"}
        </Button>
      </div>

      {/* Status announcements for screen readers */}
      <p role="status" aria-live="polite" className="sr-only">
        {copyState === "text"  && "Result text copied to clipboard."}
        {copyState === "link"  && "Shareable link copied to clipboard."}
        {copyState === "error" && "Couldn't copy automatically. Please copy manually."}
      </p>

      {copyState === "error" && (
        <p className="text-xs text-center" style={{ color: "var(--primary)" }}>
          Couldn't copy automatically — your browser may be blocking clipboard access.
        </p>
      )}

      <p className="text-xs opacity-40 text-center">
        Send the link to a partner — it opens straight to this result, even if they've never visited before. Ask them to take their own. See where you match, and where you don't.
      </p>
    </div>
  );
}