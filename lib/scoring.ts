import { ScoreMap, QuizQuestion, QuestionType, OptionLetter } from "@/types/quiz";

/** Parse a likert/reverse string value ("1"–"5") into a number, or null if invalid. */
function parseLikertRating(value: string | undefined): number | null {
  if (value === undefined) return null;
  const n = parseInt(value, 10);
  return isNaN(n) ? null : n;
}

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
const VALID_LETTERS: OptionLetter[] = ["A", "B", "C", "D", "E", "F", "G", "H"];

export function tallyAnswers(
  answers: string[],
  questions: QuizQuestion[]
): ScoreMap {
  const scores = createEmptyScores();

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    const q = questions[i];
    if (!q) continue;

    const type: QuestionType = q.type ?? "forced-choice";
    const weight = q.weight ?? 1;

    if (type === "forced-choice") {
      const key = answer as OptionLetter;
      // OptionLetter is a union type, not an enum — use a constant array for
      // the runtime guard. This is equivalent to what Object.values() would
      // do on an enum, but works correctly with a TypeScript union type.
      if (VALID_LETTERS.includes(key)) {
        scores[key] += weight;
      }
      continue;
    }

    const rating = parseLikertRating(answer);
    if (rating === null || !q.category || !(q.category in scores)) continue;

    if (type === "likert") scores[q.category] += rating * weight;
    else                   scores[q.category] -= (rating - 1) * weight;
  }

  (Object.keys(scores) as (keyof ScoreMap)[]).forEach(k => {
    scores[k] = Math.max(0, scores[k]);
  });

  return scores;
}

/**
 * Apply a single answer to an existing score map.
 * Used by useQuiz to update scores incrementally as the user answers.
 * Extracted here to avoid duplicating scoring logic in the hook.
 */
export function applyAnswer(
  prev: ScoreMap,
  q: QuizQuestion,
  value: string
): ScoreMap {
  const next = { ...prev };
  const type: QuestionType = q.type ?? "forced-choice";
  const weight = q.weight ?? 1;

  if (type === "forced-choice") {
    const key = value as OptionLetter;
    if (VALID_LETTERS.includes(key)) {
      next[key] += weight;
    }
    return next;
  }

  const rating = parseLikertRating(value);
  if (rating === null || !q.category || !(q.category in next)) return next;

  if (type === "likert") next[q.category] += rating * weight;
  else                   next[q.category] = Math.max(0, next[q.category] - (rating - 1) * weight);

  return next;
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