import { ScoreMap, QuizQuestion, QuestionType } from "@/types/quiz";

export function createEmptyScores(): ScoreMap {
  return { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
}

/**
 * Maximum possible score, per category, given a question bank.
 * Used for normalization.
 * - forced-choice: every question can theoretically go to any single
 *   category, so its weight counts toward every category's ceiling.
 * - likert: max = 5 × weight, but only toward that question's own
 *   category — a likert question can never inflate another category's max.
 * - reverse: max contribution is 0 (reverse can only subtract, never add)
 */
export function maxPossibleScores(questions: QuizQuestion[]): ScoreMap {
  let forcedChoiceTotal = 0;
  const likertMaxByCategory = createEmptyScores();

  for (const q of questions) {
    const type: QuestionType = q.type ?? "forced-choice";
    const weight = q.weight ?? 1;
    if (type === "forced-choice") {
      forcedChoiceTotal += weight;
    } else if (type === "likert" && q.category) {
      likertMaxByCategory[q.category] += 5 * weight;
    }
    // reverse questions can only reduce scores, never increase max
  }

  const max = createEmptyScores();
  (Object.keys(max) as (keyof ScoreMap)[]).forEach(k => {
    max[k] = forcedChoiceTotal + likertMaxByCategory[k];
  });
  return max;
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
 * Each category is normalized against its own achievable ceiling, so a
 * category reachable only via forced-choice answers (no likert question)
 * is scaled fairly against one backed by both forced-choice and likert.
 */
export function normalizeScores(
  scores: ScoreMap,
  questions: QuizQuestion[]
): ScoreMap {
  const max = maxPossibleScores(questions);

  const normalized = createEmptyScores();
  (Object.keys(scores) as (keyof ScoreMap)[]).forEach(k => {
    normalized[k] = max[k] === 0 ? 0 : Math.round((scores[k] / max[k]) * 100);
  });
  return normalized;
}