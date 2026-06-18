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
    const parsedScores = JSON.parse(rawScores);
    const parsedQuestions = JSON.parse(rawQuestions);

    // Basic validation for scores
    const scoreKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    if (typeof parsedScores !== 'object' || parsedScores === null) return null;
    for (const key of scoreKeys) {
      if (!(key in parsedScores) || typeof parsedScores[key] !== 'number') {
        return null;
      }
    }

    // Basic validation for questions (ensure it's an array and contains objects with 'id' and 'question')
    if (!Array.isArray(parsedQuestions)) return null;
    for (const q of parsedQuestions) {
      if (typeof q !== 'object' || q === null || !('id' in q) || !('question' in q)) {
        return null;
      }
    }

    return {
      scores:    parsedScores as ScoreMap,
      questions: parsedQuestions as QuizQuestion[],
      type,
    };
  } catch {
    return null;
  }
}