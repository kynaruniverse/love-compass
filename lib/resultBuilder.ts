import {
  Archetype,
  ArchetypeFlavor,
  Category,
  CategoryResult,
  NarrativeResult,
  OptionLetter,
  QuizQuestion,
  ScoreMap,
} from "@/types/quiz";
import { normalizeScores } from "./scoring";
import {
  LOVE_ASSESSMENT,
  INTIMACY_ASSESSMENT,
  INTIMACY_CATEGORIES,
  INTIMACY_GIVING_CATEGORIES,
  LOVE_CATEGORIES,
  LOVE_GIVING_CATEGORIES,
} from "@/data/archetypes";

interface AssessmentAssets {
  categoryMap: Record<string, Category>;
  archetypes:  Record<string, Archetype>;
  flavors:     Record<string, ArchetypeFlavor>;
}

function makeAssets(
  categoryMap: Record<string, Category>,
  mode: { archetypes: Record<string, Archetype>; flavors: Record<string, ArchetypeFlavor> }
): AssessmentAssets {
  return { categoryMap, archetypes: mode.archetypes, flavors: mode.flavors };
}

export function getAssessmentAssets(type: string): AssessmentAssets {
  switch (type) {
    case "intimacy":        return makeAssets(INTIMACY_CATEGORIES,       INTIMACY_ASSESSMENT.receiving);
    case "love-giving":     return makeAssets(LOVE_GIVING_CATEGORIES,    LOVE_ASSESSMENT.giving);
    case "intimacy-giving": return makeAssets(INTIMACY_GIVING_CATEGORIES, INTIMACY_ASSESSMENT.giving);
    case "love":
    default:                return makeAssets(LOVE_CATEGORIES,           LOVE_ASSESSMENT.receiving);
  }
}

/**
 * Build a full sorted profile of CategoryResult objects.
 * Normalizes raw scores against the question bank then maps to category metadata.
 */
export function buildProfile(
  rawScores: ScoreMap,
  questions: QuizQuestion[],
  categoryMap: Record<string, Category>
): CategoryResult[] {
  const normalized = normalizeScores(rawScores, questions);

  return (Object.keys(normalized) as OptionLetter[])
    .map(key => {
      const cat = categoryMap[key];
      return {
        key,
        title: cat?.title ?? key,
        description: cat?.description ?? "",
        score: rawScores[key] ?? 0,
        percentage: normalized[key] ?? 0,
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
  const top = profile[0]?.percentage ?? 0;
  return profile.filter(c => top - c.percentage <= threshold);
}

/**
 * Picks the primary archetype (highest-scoring category) and, if the
 * second-place category scored at least `minSecondaryScore` percentage
 * points, attaches a secondary flavor blurb to layer on top of the
 * primary narrative. This avoids a secondary blurb when the second
 * category is essentially noise (scored below 40%).
 */
export function pickArchetype(
  profile: CategoryResult[],
  archetypes: Record<string, Archetype>,
  flavors: Record<string, ArchetypeFlavor>,
  minSecondaryScore = 40
): NarrativeResult {
  const top = profile[0];
  const second = profile[1] ?? null;

  if (!top) {
    throw new Error("pickArchetype called with empty profile");
  }

  const primary = archetypes[top.key];
  if (!primary) {
    throw new Error(`No archetype found for category key: ${top.key}`);
  }

  const secondary: ArchetypeFlavor | null =
    second !== null && second.percentage >= minSecondaryScore && second.key !== top.key
      ? (flavors[second.key] ?? null)
      : null;

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
