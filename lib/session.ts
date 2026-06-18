import { ScoreMap, QuizQuestion } from "@/types/quiz";

const KEYS = {
  results:   "lc_results",
  questions: "lc_questions",
  type:      "lc_type",
} as const;

export interface QuizSession {
  scores:    ScoreMap;
  questions: QuizQuestion[];
  type:      string;
}

export function saveQuizSession(
  scores: ScoreMap,
  questions: QuizQuestion[],
  type: string
): void {
  sessionStorage.setItem(KEYS.results,   JSON.stringify(scores));
  sessionStorage.setItem(KEYS.questions, JSON.stringify(questions));
  sessionStorage.setItem(KEYS.type,      type);
}

export function loadQuizSession(): QuizSession | null {
  try {
    const rawScores    = sessionStorage.getItem(KEYS.results);
    const rawQuestions = sessionStorage.getItem(KEYS.questions);
    if (!rawScores || !rawQuestions) return null;
    const type = sessionStorage.getItem(KEYS.type) ?? "love";
    return {
      scores:    JSON.parse(rawScores) as ScoreMap,
      questions: JSON.parse(rawQuestions) as QuizQuestion[],
      type,
    };
  } catch {
    return null;
  }
}