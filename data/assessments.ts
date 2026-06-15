export type AssessmentMode = "receiving" | "giving";

export interface Assessment {
  slug: string;
  title: string;
  description: string;
  mode: AssessmentMode;
}

export const assessments: Assessment[] = [
  {
    slug: "love",
    title: "Love Preference Test",
    description: "What does love actually feel like when it lands for you? This maps where you really live.",
    mode: "receiving"
  },
  {
    slug: "intimacy",
    title: "Intimacy Style Test",
    description: "Desire has a grammar. This finds yours.",
    mode: "receiving"
  },
  {
    slug: "love-giving",
    title: "How You Love",
    description: "The love you give without thinking about it, and who it reaches.",
    mode: "giving"
  },
  {
    slug: "intimacy-giving",
    title: "How You Desire",
    description: "How you communicate want. What you reach for. What your body already knows.",
    mode: "giving"
  }
];

export function isGivingMode(slug: string): boolean {
  return slug.endsWith("-giving");
}