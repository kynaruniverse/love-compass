import { ScoreMap, QuizQuestion, QuestionType } from "@/types/quiz";

export function createEmptyScores(): ScoreMap {
  return { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
}

/**
 * Maximum possible score per category given a question bank.
 * Used for normalization.
 * - forced-choice: each question contributes (weight) to exactly one category
 *   so max per category = sum of all weights (best case all go to one bucket)
 * - likert: max = 5 × weight to the target category
 * - reverse: max contribution is 0 (reverse can only subtract, never add)
 */
export function maxPossibleScore(questions: QuizQuestion[]): number {
  let total = 0;
  for (const q of questions) {
    const type: QuestionType = q.type ?? "forced-choice";
    const weight = q.weight ?? 1;
    if (type === "forced-choice") {
      total += weight;
    } else if (type === "likert") {
      total += 5 * weight;
    }
    // reverse questions can only reduce scores, never increase max
  }
  return total;
}

/**
 * Tally raw weighted scores from the answer array.
 * answers[i] corresponds to questions[i].
 *
 * forced-choice answer: "A" | "B" | ... | "H"
 * likert/reverse answer: "1" | "2" | "3" | "4" | "5"
 */
export function tallyAnswers(
  answers: string[],
  questions: QuizQuestion[]
): ScoreMap {
  const scores = createEmptyScores();

  answers.forEach((answer, i) => {
    const q = questions[i];
    if (!q) return;

    const type: QuestionType = q.type ?? "forced-choice";
    const weight = q.weight ?? 1;

    if (type === "forced-choice") {
      const key = answer as keyof ScoreMap;
      if (key in scores) {
        scores[key] += weight;
      }
    } else if (type === "likert") {
      const rating = parseInt(answer, 10);
      if (!isNaN(rating) && q.category && q.category in scores) {
        scores[q.category] += rating * weight;
      }
    } else if (type === "reverse") {
      const rating = parseInt(answer, 10);
      if (!isNaN(rating) && q.category && q.category in scores) {
        // Flip: "5 = Exactly like me" means LESS of this category
        scores[q.category] -= (rating - 1) * weight;
      }
    }
  });

  // Clamp all scores to 0 (reverse questions can't push below zero)
  (Object.keys(scores) as (keyof ScoreMap)[]).forEach(k => {
    scores[k] = Math.max(0, scores[k]);
  });

  return scores;
}

/**
 * Normalize raw scores to 0-100 percentages.
 * Uses the actual max possible score across all questions as the ceiling.
 */
export function normalizeScores(
  scores: ScoreMap,
  questions: QuizQuestion[]
): ScoreMap {
  const max = maxPossibleScore(questions);
  if (max === 0) return scores;

  const normalized = createEmptyScores();
  (Object.keys(scores) as (keyof ScoreMap)[]).forEach(k => {
    normalized[k] = Math.round((scores[k] / max) * 100);
  });
  return normalized;
}