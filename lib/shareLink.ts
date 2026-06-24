import { ScoreMap } from "@/types/quiz";
import { QUESTION_BANK } from "@/data/assessments";

/**
 * Encodes only the raw category scores + quiz type into a compact,
 * URL-safe string. We deliberately do NOT encode the question bank —
 * QUESTION_BANK[type] already has it, so re-deriving max-possible-score
 * normalization works identically for anyone who opens the link, without
 * bloating the URL with the full question text.
 */
export function encodeShareData(scores: ScoreMap, type: string): string {
  const payload = JSON.stringify({ s: scores, t: type });
  const base64 = typeof window !== "undefined"
    ? window.btoa(String.fromCharCode(...Array.from(new TextEncoder().encode(payload))))
    : Buffer.from(payload, "utf-8").toString("base64");
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeShareData(
  encoded: string
): { scores: ScoreMap; type: string } | null {
  try {
    const restored = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const padded = restored + "=".repeat((4 - (restored.length % 4)) % 4);
    const json = typeof window !== "undefined"
      ? new TextDecoder().decode(Uint8Array.from(window.atob(padded), c => c.charCodeAt(0)))
      : Buffer.from(padded, "base64").toString("utf-8");
    const parsed = JSON.parse(json) as { s: ScoreMap; t: string };
    // Basic structural validation for scores (s) and type (t)
    if (!parsed.s || typeof parsed.s !== 'object' || !parsed.t || typeof parsed.t !== 'string') return null;

    // Further validate that all expected keys in ScoreMap are present and are numbers
    const scoreKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (const key of scoreKeys) {
      if (!(key in parsed.s) || typeof parsed.s[key as keyof ScoreMap] !== 'number') {
        return null;
      }
    }

    // Validate that the quiz type exists in the QUESTION_BANK
    if (!QUESTION_BANK[parsed.t]) return null;

    return { scores: parsed.s, type: parsed.t };
  } catch {
    return null;
  }
}

/** Builds a fully shareable results URL that works for anyone, in any browser. */
export function buildShareUrl(scores: ScoreMap, type: string): string {
  const encoded = encodeShareData(scores, type);
  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://lovewired.co.uk";
  return `${origin}/results?d=${encoded}`;
}