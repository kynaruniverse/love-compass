import { ScoreMap, CategoryResult, OptionLetter } from "@/types/quiz";
import { QuizQuestion } from "@/types/quiz";
import { normalizeScores } from "./scoring";

type CategoryMap = Record<string, { id: string; title: string; description: string }>;

/**
 * Build a full sorted profile of CategoryResult objects.
 * Normalizes raw scores against the question bank then maps to category metadata.
 */
export function buildProfile(
  rawScores: ScoreMap,
  questions: QuizQuestion[],
  categoryMap: CategoryMap
): CategoryResult[] {
  const normalized = normalizeScores(rawScores, questions);

  return (Object.keys(normalized) as OptionLetter[])
    .map(key => {
      const cat = categoryMap[key];
      return {
        key,
        title: cat?.title ?? key,
        description: cat?.description ?? "",
        score: rawScores[key],
        percentage: normalized[key],
      };
    })
    .sort((a, b) => b.percentage - a.percentage);
}

/**
 * Returns categories where the top score and a given score are within
 * `threshold` percentage points — used to detect ties or near-ties.
 */
export function dominantCategories(
  profile: CategoryResult[],
  threshold = 8
): CategoryResult[] {
  if (profile.length === 0) return [];
  const top = profile[0].percentage;
  return profile.filter(c => top - c.percentage <= threshold);
}

/**
 * Legacy: ranked raw score entries, highest first.
 * Kept for backward compatibility.
 */
export function rankedScores(scores: ScoreMap): [string, number][] {
  return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}

/**
 * Legacy: categories within 1 raw point of the highest score.
 */
export function balancedCategories(scores: ScoreMap): [string, number][] {
  const ranked = rankedScores(scores);
  const highest = ranked[0][1];
  return ranked.filter(([, score]) => highest - score <= 1);
}