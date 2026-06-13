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
    description: "How you feel loved in relationships.",
    mode: "receiving"
  },
  {
    slug: "intimacy",
    title: "Intimacy Style Test",
    description: "How you experience desire and connection.",
    mode: "receiving"
  },
  {
    slug: "hybrid",
    title: "Full Profile Test",
    description: "Combined love + intimacy assessment.",
    mode: "receiving"
  },
  {
    slug: "love-giving",
    title: "How You Love",
    description: "How you naturally express love to a partner.",
    mode: "giving"
  },
  {
    slug: "intimacy-giving",
    title: "How You Desire",
    description: "How you naturally express desire and intimacy.",
    mode: "giving"
  },
  {
    slug: "hybrid-giving",
    title: "Your Full Expression Profile",
    description: "How you love and desire — your complete giving profile.",
    mode: "giving"
  }
];

export function isGivingMode(slug: string): boolean {
  return slug.endsWith("-giving");
}