import { QuizQuestion } from "@/types/quiz";
import { LOVE_QUESTIONS, INTIMACY_QUESTIONS } from "./questions/receiving";
import { LOVE_GIVING_QUESTIONS, INTIMACY_GIVING_QUESTIONS } from "./questions/giving";

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
