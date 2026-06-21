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
    description: "Everyone receives love differently. Find yours.",
    mode: "receiving"
  },
  {
    slug: "intimacy",
    title: "Intimacy Style",
    description: "Intimacy looks different for everyone. Find yours.",
    mode: "receiving"
  },
  {
    slug: "love-giving",
    title: "How You Love",
    description: "Understand the kind of love you naturally put into the world.",
    mode: "giving"
  },
  {
    slug: "intimacy-giving",
    title: "How You Desire",
    description: "Your body already has its own language. This helps you to read it.",
    mode: "giving"
  },
];
