import { ScoreMap, CategoryResult, OptionLetter, Archetype, ArchetypeFlavor, NarrativeResult } from "@/types/quiz";
import { QuizQuestion } from "@/types/quiz";
import { normalizeScores } from "./scoring";

type CategoryMap = Record<string, { id: string; title: string; description: string; angle: number }>;

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
        angle: cat?.angle ?? 0,
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
 * Picks the primary archetype (highest-scoring category) and, if there's
 * a clear second-place category (not a near-tie with first), a secondary
 * flavor blurb to layer on top of the primary narrative.
 *
 * "Clear second place" = the gap between #1 and #2 is less than `tieThreshold`
 * points difference AND #2 itself is meaningfully above the rest (at least
 * `minSecondaryScore` percentage points). This avoids attaching a flavor
 * blurb when the top category is overwhelmingly dominant and the "second
 * place" is essentially noise.
 */
export function pickArchetype(
  profile: CategoryResult[],
  archetypes: Record<string, Archetype>,
  flavors: Record<string, ArchetypeFlavor>,
  minSecondaryScore = 40
): NarrativeResult {
  const top = profile[0];
  const second = profile[1];

  const primary = archetypes[top.key];

  let secondary: ArchetypeFlavor | null = null;
  if (second && second.percentage >= minSecondaryScore && second.key !== top.key) {
    secondary = flavors[second.key] ?? null;
  }

  return { primary, secondary };
}

/**
 * Returns a short, second-person phrase reflecting how strongly a
 * percentage score "came through" — used to scale the primary
 * narrative's framing to the actual intensity of the result rather
 * than treating every winning category identically.
 */
export function getIntensity(pct: number): string {
  if (pct >= 80) return "This came through very strongly for you.";
  if (pct >= 60) return "This is a clear, consistent pattern for you.";
  if (pct >= 40) return "This shows up as a real leaning for you, though not an overwhelming one.";
  return "This came through as a mild preference rather than a defining trait.";
}

/**
 * Returns the top categories (primary + any near-ties) for use in a
 * "Your Profile Mix" blend section. Wraps dominantCategories with a
 * sensible default and caps the result at 3 categories.
 */
export function getBlend(profile: CategoryResult[], threshold = 8): CategoryResult[] {
  return dominantCategories(profile, threshold).slice(0, 3);
}


export function rankedScores(scores: ScoreMap): [string, number][] {
  return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}