"use client";

import { useCallback, useMemo, useState } from "react";
import { NarrativeResult, CategoryResult } from "@/types/quiz";
import { Button } from "@/components/ui";
import { getQuizTypeLabel, isGivingMode } from "@/lib";

type CopyState = "idle" | "text" | "link" | "error";

interface ShareCardProps {
  result: NarrativeResult;
  profile: CategoryResult[];
  quizType: string;
  /** A fully self-contained URL that reproduces this exact result for anyone who opens it. */
  shareUrl?: string;
}

export default function ShareCard({ result, profile, quizType, shareUrl }: ShareCardProps) {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  }, []);
  const top = profile[0];
  const top3 = useMemo(() => profile.slice(0, 3), [profile]);
  const modeLabel = useMemo(() => getQuizTypeLabel(quizType), [quizType]);
  const giving = useMemo(() => isGivingMode(quizType), [quizType]);

  const copyString = useCallback((text: string, successState: CopyState, toastText: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopyState(successState);
        showToast(toastText);
        setTimeout(() => setCopyState("idle"), 2000);
      })
      .catch(() => {
        setCopyState("error");
        showToast("Couldn't copy — please try manually.");
        setTimeout(() => setCopyState("idle"), 3000);
      });
  }, [showToast]);

  const handleCopyLink = useCallback(() => {
    copyString(shareUrl ?? window.location.href, "link", "Shareable link copied to clipboard.");
  }, [copyString, shareUrl]);

  const handleCopyText = useCallback(() => {
    const text = [
      `My Love Wired Result: ${modeLabel}`,
      ``,
      result.primary.name,
      `"${result.primary.tagline}"`,
      ``,
      giving
        ? `This is how I naturally express love and desire.`
        : `This is how I feel most loved and connected.`,
      ``,
      `Top dimensions:`,
      ...top3.map(c => `  ${c.title}: ${c.percentage}%`),
      ``,
      `Take your own at lovewired.co.uk`,
    ].join("\n");
    copyString(text, "text", "Result text copied to clipboard.");
  }, [copyString, giving, modeLabel, result.primary.name, result.primary.tagline, top3]);

  return (
    <div className="space-y-3" style={{ position: "relative" }}>
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            bottom: "5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 50,
            background: "var(--primary)",
            color: "#fff",
            padding: "0.6rem 1.25rem",
            borderRadius: "2rem",
            fontSize: "0.85rem",
            fontFamily: "var(--font-serif), Georgia, serif",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            whiteSpace: "nowrap",
            animation: "lc-toast-in 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {toastMessage}
        </div>
      )}
      <div className="lc-results-sharestrip">
        <div className="lc-results-sharestrip-row">
          <div>
            <p className="lc-results-sharestrip-name">{result.primary.name}</p>
            {top && (
              <p className="lc-results-sharestrip-dim">
                Strongest in <strong>{top.title}</strong> at {top.percentage}%
              </p>
            )}
          </div>
        </div>

        <div className="lc-results-sharestrip-ctas">
          <Button onClick={handleCopyText} variant="primary">
            {copyState === "text" ? "Copied ✓" : "Copy Result to Share"}
          </Button>
          <Button onClick={handleCopyLink} variant="secondary">
            {copyState === "link" ? "Copied ✓" : "Copy Shareable Link"}
          </Button>
        </div>
      </div>

      {/* Status announcements for screen readers */}
      <p role="status" aria-live="polite" className="sr-only">
        {copyState === "text"  && "Result text copied to clipboard."}
        {copyState === "link"  && "Shareable link copied to clipboard."}
        {copyState === "error" && "Couldn't copy automatically. Please copy manually."}
      </p>

      {copyState === "error" && (
        <p className="text-xs text-center" style={{ color: "var(--primary)" }}>
          Couldn't copy automatically. Your browser may be blocking clipboard access.
        </p>
      )}

      <p className="text-xs opacity-40 text-center">
        Send the link to a partner. It opens straight to this result, even if they've never visited before. Ask them to take their own. See where you match, and where you don't.
      </p>
    </div>
  );
}
