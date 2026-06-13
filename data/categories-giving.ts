import { Category } from "@/types/quiz";

/**
 * Giving-mode category maps.
 * Same A–H keys and angles as the receiving maps in categories.ts.
 * Descriptions rewritten from the giving perspective:
 * "You express love / desire / connection through..."
 */

export const LOVE_GIVING_CATEGORIES: Record<string, Category> = {
  A: {
    id: "A",
    angle: 0,
    title: "Words of Affirmation",
    description:
      "You express love through words — encouragement, praise, and telling people specifically what you admire and appreciate about them. A partner who feels most loved when they hear it will thrive with you."
  },
  B: {
    id: "B",
    angle: 45,
    title: "Quality Time",
    description:
      "You show love by giving someone your full, undivided attention. You protect time with people you care about and show up present — not half-distracted. A partner who needs presence will feel deeply seen by you."
  },
  C: {
    id: "C",
    angle: 90,
    title: "Physical Touch",
    description:
      "You express love through warm, natural physical closeness — a hand on someone's shoulder, a long hug, cuddling. A partner who feels most loved through touch will feel consistently held by you."
  },
  D: {
    id: "D",
    angle: 135,
    title: "Acts of Service",
    description:
      "You show love by doing — handling things, helping before being asked, and quietly making life easier for the people you care about. A partner who feels most loved through action will notice everything you do."
  },
  E: {
    id: "E",
    angle: 180,
    title: "Giving Gifts",
    description:
      "You express love through thoughtful, well-chosen gestures — gifts that show you were paying attention. A partner who feels most loved through tokens of care will feel truly known by you."
  },
  F: {
    id: "F",
    angle: 225,
    title: "Emotional Security",
    description:
      "You express love by creating safety — being steady, reliable, and emotionally available. A partner who needs to feel secure above all else will feel anchored by your consistency."
  },
  G: {
    id: "G",
    angle: 270,
    title: "Shared Growth",
    description:
      "You show love by investing in someone's growth — encouraging their goals, supporting who they're becoming, and growing alongside them. A partner who feels most loved when supported in their development will flourish with you."
  },
  H: {
    id: "H",
    angle: 315,
    title: "Shared Mental Load",
    description:
      "You express love by sharing the weight — taking on your fair share of planning, organising, and responsibility without being asked. A partner who feels most loved when the load is equal will feel deeply respected by you."
  }
};

export const INTIMACY_GIVING_CATEGORIES: Record<string, Category> = {
  A: {
    id: "A",
    angle: 0,
    title: "Verbal Erotic Affirmation",
    description:
      "You express desire through words — saying what you find attractive, what you want, what you're feeling. A partner who needs to hear desire spoken aloud will feel wanted in the way they most need."
  },
  B: {
    id: "B",
    angle: 45,
    title: "Tender Sensual Touch",
    description:
      "You express desire through slow, deliberate, warm physical closeness. You build connection through touch before anything else. A partner who feels most desired through tender closeness will feel deeply held by you."
  },
  C: {
    id: "C",
    angle: 90,
    title: "Passionate Initiation",
    description:
      "You express desire by initiating — clearly, confidently, with real energy. A partner who feels most desired when someone pursues them with passion will always know where they stand with you."
  },
  D: {
    id: "D",
    angle: 135,
    title: "Pursuit & Anticipation",
    description:
      "You express desire by seeking someone out — building anticipation, making moves that show you were thinking about them. A partner who feels most desired when actively pursued will feel genuinely wanted by you."
  },
  E: {
    id: "E",
    angle: 180,
    title: "Mutual Exploration",
    description:
      "You express desire through curiosity and genuine interest in a partner's pleasure. You give as much as you receive and stay open to discovery. A partner who values equal, exploratory intimacy will feel met by you."
  },
  F: {
    id: "F",
    angle: 225,
    title: "Emotional Safety",
    description:
      "You express desire by creating emotional safety first — ensuring a partner feels trusted and grounded before anything else. A partner who needs to feel safe to be intimate will feel completely held by you."
  },
  G: {
    id: "G",
    angle: 270,
    title: "Confidence & Encouragement",
    description:
      "You express desire by building a partner's confidence — saying and doing things that make them feel attractive, capable, and celebrated. A partner who feels most desired when their confidence is supported will flourish with you."
  },
  H: {
    id: "H",
    angle: 315,
    title: "Shared Effort & Equality",
    description:
      "You express desire through fairness and equal investment — showing up as a full partner in both the relationship and the intimate space. A partner who feels most desired when effort is genuinely shared will feel deeply respected by you."
  }
};

export const HYBRID_GIVING_CATEGORIES: Record<string, Category> = {
  A: {
    id: "A",
    angle: 0,
    title: "Spoken Connection",
    description:
      "Across love and desire, you express yourself through words — affirmation, spoken attraction, open communication. A partner who needs to hear love and desire said aloud will feel completely seen by you."
  },
  B: {
    id: "B",
    angle: 45,
    title: "Unhurried Presence",
    description:
      "You give love and express desire through presence — slow, undistracted, fully attentive time. A partner who feels most loved and wanted when someone is genuinely there with them will feel deeply valued by you."
  },
  C: {
    id: "C",
    angle: 90,
    title: "Physical Closeness",
    description:
      "Touch and physical nearness are your primary language — for love and desire alike. A partner who feels most loved and most wanted through physical warmth will feel continuously held by you."
  },
  D: {
    id: "D",
    angle: 135,
    title: "Reliable Action",
    description:
      "You express both love and desire through what you do — consistent, dependable follow-through and help without being asked. A partner who feels most cared for and wanted through action will never have to wonder about you."
  },
  E: {
    id: "E",
    angle: 180,
    title: "Attentive Gestures",
    description:
      "You show love and desire through specific, well-chosen gestures that prove you were paying attention. A partner who feels most loved when they're truly seen and remembered will feel known by you in a rare way."
  },
  F: {
    id: "F",
    angle: 225,
    title: "Emotional Grounding",
    description:
      "You create safety as your primary expression of both love and desire — staying steady, being emotionally available, grounding the relationship. A partner who needs to feel safe before they can feel close will flourish with you."
  },
  G: {
    id: "G",
    angle: 270,
    title: "Mutual Growth",
    description:
      "You express love and desire by investing in someone's growth and confidence — championing who they are becoming. A partner who feels most loved and desired when supported in their development will feel deeply seen by you."
  },
  H: {
    id: "H",
    angle: 315,
    title: "Shared Partnership",
    description:
      "You express love and desire through true equality — sharing the weight, showing up fully, making everything feel genuinely mutual. A partner who feels most loved and desired when effort is balanced will feel completely respected by you."
  }
};