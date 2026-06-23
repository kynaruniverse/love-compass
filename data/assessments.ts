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
    description: "Some people feel loved through words, others through time, touch, or care. This shows your pattern.",
    mode: "receiving"
  },
  {
    slug: "intimacy",
    title: "Intimacy Style",
    description: "What you crave in the moments before, during, and after. This finds the shape of your desire.",
    mode: "receiving"
  },
  {
    slug: "love-giving",
    title: "How You Love",
    description: "However you express it, through words, actions, or somewhere between, this shows your style.",
    mode: "giving"
  },
  {
    slug: "intimacy-giving",
    title: "How You Desire",
    description: "The way you build anticipation, initiate, and make someone feel wanted. This is your style of desire.",
    mode: "giving"
  },
];