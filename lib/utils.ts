// ─── General helpers ──────────────────────────────────────────────────────────

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function isNonEmpty(str: string): boolean {
  return str.trim().length > 0;
}

export function getQuizTypeLabel(quizType: string): string {
  switch (quizType) {
    case "love":            return "Love Preference";
    case "intimacy":        return "Intimacy Style";
    case "love-giving":     return "Love Expression";
    case "intimacy-giving": return "Desire Expression";
    default:                return "Love Preference";
  }
}

export function isGivingMode(slug: string): boolean {
  return slug.endsWith("-giving");
}

/**
 * Derives a stable per-archetype accent hue from the category's position
 * on the compass (0-360deg), rotated to sit close to the brand's rose/gold
 * axis rather than producing arbitrary rainbow colors. Used to give each
 * of the 48 results a distinct but on-brand identity (results hero, seal,
 * active tab) without adding new fields to the archetype data files.
 *
 * Hue range (before clamping): ROSE_HUE ± SWING = 280–420 (raw).
 * Angles that produce extreme values at the 8 compass positions used:
 *   0°  → 350 (rose)      180° → 350 (rose)
 *   45° → 399 → 39 (gold) 135° → 399 → 39 (gold)
 *   90° → 420 → 60 (yellow — clamped to 40)
 *   225° → 301 (purple — clamped to 320)
 *   270° → 280 (blue-violet — clamped to 320)
 *   315° → 301 (purple — clamped to 320)
 * Clamping keeps all output within the rose-to-gold palette band (320–420).
 */
export function getArchetypeHue(angle: number): number {
  // Brand rose (~350) and gold (~38) sit roughly 48deg apart on the hue
  // wheel. Swing the hue within a band around that axis so every category
  // still reads as "this palette" rather than an unrelated color.
  const ROSE_HUE = 350;
  const SWING = 70;
  const t = (angle % 360) / 360;
  const raw = Math.round(ROSE_HUE + Math.sin(t * Math.PI * 2) * SWING);
  // Clamp to palette band: 320 (cool rose) → 420 (warm gold, wraps to ~60).
  // This prevents purple/violet/yellow outliers at 225°, 270°, 315°, 90°.
  return Math.min(420, Math.max(320, raw));
}

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const siteMeta = {
  title: "Love Wired",
  description:
    "Discover how you give and receive love. Love Wired is a free self-reflection tool built around four structured assessments. No sign-up required.",
  url: "https://lovewired.co.uk",
  siteName: "Love Wired",
};

export function generateMeta({
  title,
  description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}) {
  const desc = description ?? siteMeta.description;
  const url = `${siteMeta.url}${path}`;

  return {
    title: `${title} | ${siteMeta.title}`,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteMeta.title}`,
      description: desc,
      type: "website" as const,
      url,
      siteName: siteMeta.siteName,
    },
    twitter: {
      card: "summary" as const,
      title: `${title} | ${siteMeta.title}`,
      description: desc,
    },
  };
}