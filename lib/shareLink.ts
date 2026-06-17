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
  let base64: string;
  if (typeof window !== "undefined") {
    // TextEncoder gives us a proper UTF-8 byte array, then we base64 it safely
    const bytes = new TextEncoder().encode(payload);
    base64 = window.btoa(String.fromCharCode(...bytes));
  } else {
    base64 = Buffer.from(payload, "utf-8").toString("base64");
  }
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeShareData(
  encoded: string
): { scores: ScoreMap; type: string } | null {
  try {
    const restored = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const padded = restored + "=".repeat((4 - (restored.length % 4)) % 4);
    const json =
      typeof window !== "undefined"
        ? new TextDecoder().decode(
            Uint8Array.from(window.atob(padded), c => c.charCodeAt(0))
          )
        : Buffer.from(padded, "base64").toString("utf-8");
    const parsed = JSON.parse(json) as { s: ScoreMap; t: string };
    if (!parsed.s || !parsed.t || !QUESTION_BANK[parsed.t]) return null;
    return { scores: parsed.s, type: parsed.t };
  } catch {
    return null;
  }
}

/** Builds a fully shareable results URL that works for anyone, in any browser. */
export function buildShareUrl(scores: ScoreMap, type: string): string {
  const encoded = encodeShareData(scores, type);
  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://lovecompass.app";
  return `${origin}/results?d=${encoded}`;
}