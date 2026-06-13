export type OptionLetter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H";

/** forced-choice: pick one of 8 options (1 pt × weight to chosen category)
 *  likert:        rate 1-5 how much it resonates (score × weight to category)
 *  reverse:       rate 1-5 agreement; score subtracted from category (catches autopilot answering)
 */
export type QuestionType = "forced-choice" | "likert" | "reverse";

export interface QuizOption {
  letter: OptionLetter;
  text: string;
}

export interface QuizQuestion {
  id: number;
  /** Defaults to "forced-choice" if omitted */
  type?: QuestionType;
  /** Multiplier applied to raw score before adding to tally. Default 1. */
  weight?: number;
  /** Required for "likert" and "reverse" — which category this question targets */
  category?: OptionLetter;
  question: string;
  /** forced-choice: 8 options A-H
   *  likert/reverse: 5 options 1-5 with label text */
  options: QuizOption[];
}

export interface Category {
  id: OptionLetter;
  title: string;
  description: string;
}

export interface ScoreMap {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
  G: number;
  H: number;
}

/** Normalized result per category, 0-100 */
export interface CategoryResult {
  key: OptionLetter;
  title: string;
  description: string;
  score: number;       // raw weighted score
  percentage: number;  // 0-100 normalized
}

export interface AssessmentResult {
  category: string;
  score: number;
  percentage: number;
}

/** Likert scale labels (index 0 = value 1, index 4 = value 5) */
export const LIKERT_LABELS = [
  "Not at all like me",
  "Slightly like me",
  "Moderately like me",
  "Quite a lot like me",
  "Exactly like me"
] as const;