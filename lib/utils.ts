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

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const siteMeta = {
  title: "Love Compass",
  description:
    "Discover how you give and receive love. Love Compass is a free self-reflection tool built around four structured assessments — no sign-up required.",
  url: "https://lovecompass.app",
  siteName: "Love Compass",
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