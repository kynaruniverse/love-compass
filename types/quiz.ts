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
  /** Position in degrees (0-360) around the compass rose, evenly spaced A-H */
  angle: number;
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
  angle: number;       // position in degrees around the compass rose
}

/** Likert scale labels (index 0 = value 1, index 4 = value 5) */
export const LIKERT_LABELS = [
  "Not at all like me",
  "Slightly like me",
  "Moderately like me",
  "Quite a lot like me",
  "Exactly like me"
] as const;

/** A full narrative result profile tied to a dominant category */
export interface Archetype {
  key: OptionLetter;
  /** Display name, e.g. "The Devoted Anchor" */
  name: string;
  /** Short one-line tagline shown under the name */
  tagline: string;
  /** 2-3 paragraph narrative description, written in second person */
  narrative: string[];
  /** Bullet list of strengths */
  strengths: string[];
  /** Bullet list of things to watch out for / growth edges */
  watchOuts: string[];
  /** Bullet list of what this person tends to need from a partner */
  partnerNeeds: string[];
  /** How this type tends to pair with others */
  pairings: {
    /** Archetype name this type tends to pair well with, + why */
    bestWith: string;
    /** Archetype name this type may experience friction with, + why */
    frictionWith: string;
  };
  /** 1-2 short, concrete, actionable suggestions */
  tryThis: string[];
}

/** Short secondary "flavor" text describing the second-highest category */
export interface ArchetypeFlavor {
  key: OptionLetter;
  /** 1-2 sentence blurb, written in second person, meant to follow "with a strong streak of..." */
  blurb: string;
}

export interface NarrativeResult {
  primary: Archetype;
  secondary: ArchetypeFlavor | null;
}