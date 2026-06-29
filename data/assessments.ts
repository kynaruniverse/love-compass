import { QuizQuestion } from "@/types/quiz";
import { LOVE_QUESTIONS, INTIMACY_QUESTIONS, LOVE_GIVING_QUESTIONS, INTIMACY_GIVING_QUESTIONS } from "./questions";

export const QUESTION_BANK: Record<string, QuizQuestion[]> = {
  "love":            LOVE_QUESTIONS,
  "intimacy":        INTIMACY_QUESTIONS,
  "love-giving":     LOVE_GIVING_QUESTIONS,
  "intimacy-giving": INTIMACY_GIVING_QUESTIONS,
};

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
    title: "Love Preference",
    description: "Discover how you naturally receive love and what makes you feel truly valued.",
    mode: "receiving"
  },
  {
    slug: "intimacy",
    title: "Intimacy Style",
    description: "Explore the connection you seek in relationships and what makes you feel safe and desired.",
    mode: "receiving"
  },
  {
    slug: "love-giving",
    title: "How You Love",
    description: "Understand how you express love and the patterns that shape how you care for others.",
    mode: "giving"
  },
  {
    slug: "intimacy-giving",
    title: "How You Desire",
    description: "Discover how you create attraction and what drives your romantic chemistry.",
    mode: "giving"
  },
];