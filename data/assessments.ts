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
    description: "Discover the ways you most naturally receive love and affection, and learn what helps you feel valued, connected, and understood.",
    mode: "receiving"
  },
  {
    slug: "intimacy",
    title: "Intimacy Style",
    description: "Explore the emotional and physical connection you seek in intimate relationships, and understand what helps you feel safe, desired, and fulfilled.",
    mode: "receiving"
  },
  {
    slug: "love-giving",
    title: "How You Love",
    description: "Understand how you naturally express love and care for others, and discover the patterns that shape your relationships.",
    mode: "giving"
  },
  {
    slug: "intimacy-giving",
    title: "How You Desire",
    description: "Discover how you create attraction, express desire, and make others feel wanted, and learn the patterns behind your romantic chemistry.",
    mode: "giving"
  },
];