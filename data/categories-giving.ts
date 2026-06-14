import { Category } from "@/types/quiz";

/**
 * Giving-mode category maps.
 * Same A–H keys and angles as the receiving maps in categories.ts.
 * Descriptions written from the giving perspective:
 * "You express love / desire / connection through..."
 */

export const LOVE_GIVING_CATEGORIES: Record<string, Category> = {
  A: {
    id: "A",
    angle: 0,
    title: "Words of Affirmation",
    description:
      "You express love through words — specific, genuine, and often. You tell people what you admire about them, what you're grateful for, what you notice. A partner who needs to hear love spoken clearly will feel consistently seen and valued by you. What you say lands."
  },
  B: {
    id: "B",
    angle: 45,
    title: "Quality Time",
    description:
      "You show love by showing up fully — phone down, attention undivided, genuinely present. You protect time with people you care about and treat it as non-negotiable. A partner who needs presence over everything else will feel like your priority, because to you, they are."
  },
  C: {
    id: "C",
    angle: 90,
    title: "Physical Touch",
    description:
      "You express love through natural, warm physical closeness — a hand on someone's back, a long hug, the kind of steady physical presence that says 'I'm here' without needing words. A partner who feels most loved through touch will feel continuously held by you."
  },
  D: {
    id: "D",
    angle: 135,
    title: "Acts of Service",
    description:
      "You show love by doing — quietly handling things, helping before being asked, making life easier for the people you care about without drawing attention to it. A partner who feels most loved through action will notice everything you do, even when you assume it went unseen."
  },
  E: {
    id: "E",
    angle: 180,
    title: "Giving Gifts",
    description:
      "You express love through carefully chosen gestures — gifts that prove you were thinking about someone when they weren't there. The thought behind the choice matters more to you than the cost. A partner who feels most loved through tokens of attention will feel genuinely known by you in a way that's rare."
  },
  F: {
    id: "F",
    angle: 225,
    title: "Emotional Security",
    description:
      "You express love by being steady — showing up consistently, managing conflict without threatening the relationship, and making a partner feel like the ground beneath them is solid. A partner who needs emotional safety above all else will feel anchored by your reliability in a way they may never have felt before."
  },
  G: {
    id: "G",
    angle: 270,
    title: "Shared Growth",
    description:
      "You show love by investing in who someone is becoming — encouraging their ambitions, challenging them to grow, and treating the relationship itself as something worth developing. A partner who feels most loved when they're supported in their development will find in you someone who makes them better."
  },
  H: {
    id: "H",
    angle: 315,
    title: "Shared Mental Load",
    description:
      "You express love by carrying your share — not just the visible tasks, but the planning, tracking, and anticipating that keeps a life running. You do it without being asked and without keeping score. A partner who feels most loved when the invisible work is shared will feel deeply and genuinely partnered by you."
  }
};

export const INTIMACY_GIVING_CATEGORIES: Record<string, Category> = {
  A: {
    id: "A",
    angle: 0,
    title: "Verbal Erotic Affirmation",
    description:
      "You express desire through words — naming what you find attractive, saying what you want, describing what you feel. You don't leave it to implication. A partner who needs to hear desire spoken clearly and specifically will feel unmistakably wanted by you, in the exact way they most need."
  },
  B: {
    id: "B",
    angle: 45,
    title: "Tender Sensual Touch",
    description:
      "You express desire through slow, deliberate physical closeness — touch that lingers, that pays attention, that isn't rushing toward anything. You build connection through warmth before urgency. A partner who feels most desired through tender, unhurried closeness will feel held by you in a way that goes beyond the physical."
  },
  C: {
    id: "C",
    angle: 90,
    title: "Passionate Initiation",
    description:
      "You express desire by initiating — clearly, confidently, with real energy that leaves no room for ambiguity. You don't hint. You reach. A partner who feels most desired when someone pursues them with unmistakable intention will always know exactly where they stand with you."
  },
  D: {
    id: "D",
    angle: 135,
    title: "Pursuit & Anticipation",
    description:
      "You express desire by actively seeking someone out — creating moments, building anticipation, making moves that show you were thinking about them before you were in the same room. A partner who feels most desired when genuinely pursued will feel wanted by you in a way that's hard to fake and impossible to miss."
  },
  E: {
    id: "E",
    angle: 180,
    title: "Mutual Exploration",
    description:
      "You express desire through genuine curiosity — you're as interested in a partner's experience as your own, and you stay open to discovering what works rather than defaulting to a script. A partner who values equal, exploratory intimacy will feel truly met by you, not just accommodated."
  },
  F: {
    id: "F",
    angle: 225,
    title: "Emotional Safety",
    description:
      "You express desire by creating the conditions for it — ensuring a partner feels trusted, steady, and emotionally grounded before anything else. You understand that for some people, safety is the precondition for openness. A partner who needs to feel safe before they can feel close will find in you someone who makes that possible."
  },
  G: {
    id: "G",
    angle: 270,
    title: "Confidence & Encouragement",
    description:
      "You express desire by building a partner up — saying and doing things that make them feel attractive, capable, and celebrated. You understand that confidence and desire are connected, and you actively feed both. A partner who feels most desired when their confidence is supported will flourish in your hands."
  },
  H: {
    id: "H",
    angle: 315,
    title: "Shared Effort & Equality",
    description:
      "You express desire through genuine equal investment — you initiate, you contribute, you show up as a full partner in the intimate space rather than expecting the other person to carry it. A partner who feels most desired when effort is genuinely shared will feel deeply respected by you, and that respect will read as desire."
  }
};
