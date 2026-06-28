import { ScoreMap } from "@/types/quiz";

const VALID_QUIZ_TYPES = new Set(["love", "intimacy", "love-giving", "intimacy-giving"]);

/**
 * Encodes only the raw category scores + quiz type into a compact,
 * URL-safe string. We deliberately do NOT encode the question bank —
 * QUESTION_BANK[type] already has it, so re-deriving max-possible-score
 * normalization works identically for anyone who opens the link, without
 * bloating the URL with the full question text.
 *
 * ENCODING FORMAT (URL-safe Base64):
 *   1. Build a JSON payload: { v: number, s: ScoreMap, t: string }
 *      - v: payload version (currently 1). Increment if ScoreMap shape changes.
 *      - s: raw category scores (keys A–H, numeric values)
 *      - t: assessment slug (e.g. "love", "intimacy-giving")
 *   2. UTF-8 encode the JSON string.
 *   3. Standard Base64-encode the bytes.
 *   4. Make URL-safe: replace + → -, / → _, strip trailing = padding.
 *
 * To decode server-side (Node.js):
 *   const restored = encoded.replace(/-/g, '+').replace(/_/g, '/');
 *   const padded   = restored + '='.repeat((4 - (restored.length % 4)) % 4);
 *   const json     = Buffer.from(padded, 'base64').toString('utf-8');
 *   const payload  = JSON.parse(json); // { v, s, t }
 *
 * If payload.v is undefined, the URL predates versioning (treat as v0).
 * If payload.v > CURRENT_SHARE_VERSION, show an "outdated link" message.
 */

/** Increment this when the ScoreMap structure or payload shape changes. */
const CURRENT_SHARE_VERSION = 1;

export function encodeShareData(scores: ScoreMap, type: string): string {
  const payload = JSON.stringify({ v: CURRENT_SHARE_VERSION, s: scores, t: type });
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
    const parsed = JSON.parse(json) as { v?: number; s: ScoreMap; t: string };
    // Payload version check — v is absent on pre-versioning URLs (treat as v0).
    // We accept v0 and v1 silently; future versions may warrant a user-facing warning.
    const payloadVersion = parsed.v ?? 0;
    if (payloadVersion > CURRENT_SHARE_VERSION) return null;
    // Basic structural validation for scores (s) and type (t)
    if (!parsed.s || typeof parsed.s !== 'object' || !parsed.t || typeof parsed.t !== 'string') return null;

    // Further validate that all expected keys in ScoreMap are present and are numbers
    const scoreKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (const key of scoreKeys) {
      const val = parsed.s[key as keyof ScoreMap];
      if (!(key in parsed.s) || typeof val !== 'number' || val < 0 || val > 500) {
        return null;
      }
    }

    // Validate that the quiz type is recognised
    if (!VALID_QUIZ_TYPES.has(parsed.t)) return null;

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