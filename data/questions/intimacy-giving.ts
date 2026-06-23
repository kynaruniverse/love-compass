import { QuizQuestion } from "@/types/quiz";

/**
 * How You Desire Test, "How You Desire to Give"
 * Questions probe how a person naturally initiates and expresses desire,
 * the build toward intimacy, not how they prefer to receive it.
 */
export const INTIMACY_GIVING_QUESTIONS: QuizQuestion[] = [

  // ── FORCED-CHOICE ─────────────────────────────────────────────────────────

  {
    id: 501,
    type: "forced-choice",
    weight: 1,
    question: "When I want someone and want them to know it, I most naturally:",
    options: [
      { letter: "A", text: "Say it, exactly what I want, low and direct, no softening it." },
      { letter: "B", text: "Move slowly, let the closeness build before anything else happens." },
      { letter: "C", text: "Reach for them first, with real, unmistakable intention." },
      { letter: "D", text: "Build it for hours beforehand, so they feel it coming." },
      { letter: "E", text: "Stay curious, ask what they want instead of assuming." },
      { letter: "F", text: "Make sure they feel completely safe before anything else." },
      { letter: "G", text: "Tell them, specifically, what about them I can't stop noticing." },
      { letter: "H", text: "Show up wanting it exactly as much as they do." }
    ]
  },
  {
    id: 502,
    type: "forced-choice",
    weight: 1,
    question: "During intimacy, what I naturally give most is:",
    options: [
      { letter: "A", text: "Words, I say exactly what I'm feeling, what I want, what I'm noticing." },
      { letter: "B", text: "Patience, I take my time and let things build slowly." },
      { letter: "C", text: "Energy, I'm direct, confident, and I initiate without hesitating." },
      { letter: "D", text: "Anticipation, I make sure they've been thinking about this beforehand." },
      { letter: "E", text: "Curiosity, I'm genuinely interested in what they want, not a routine." },
      { letter: "F", text: "Safety, I make sure they feel completely trusted and present." },
      { letter: "G", text: "Heat, I make them feel irresistible, not just touched." },
      { letter: "H", text: "Equality, I make sure we're both fully invested." }
    ]
  },
  {
    id: 503,
    type: "forced-choice",
    weight: 2,
    question: "The way I most naturally build anticipation hours before we're alone is:",
    options: [
      { letter: "A", text: "Telling them exactly what I've been thinking about." },
      { letter: "B", text: "A lingering touch, slow, unhurried, throughout the day." },
      { letter: "C", text: "Being direct: making it unmistakably clear I want them tonight." },
      { letter: "D", text: "Letting them know they've been on my mind all day." },
      { letter: "E", text: "Suggesting something new we haven't tried together." },
      { letter: "F", text: "Being emotionally open, so they feel grounded going in." },
      { letter: "G", text: "Telling them something specific I find irresistible about them." },
      { letter: "H", text: "Showing I'm just as invested in tonight as they are." }
    ]
  },
  {
    id: 504,
    type: "forced-choice",
    weight: 2,
    question: "When I initiate intimacy, it usually looks like:",
    options: [
      { letter: "A", text: "Saying it plainly: telling them exactly what I want." },
      { letter: "B", text: "Moving slowly toward them, touch and closeness first." },
      { letter: "C", text: "A clear, confident move, no hesitation, no checking first." },
      { letter: "D", text: "Something I've been building toward all day, deliberately." },
      { letter: "E", text: "An invitation: 'I want to try this' or 'show me what you want.'" },
      { letter: "F", text: "Creating safety first, checking in, being fully present." },
      { letter: "G", text: "Something that makes them feel completely irresistible." },
      { letter: "H", text: "Meeting their energy exactly, equal investment from the start." }
    ]
  },
  {
    id: 505,
    type: "forced-choice",
    weight: 1,
    question: "The way I show a partner they're desired hours before we're alone is:",
    options: [
      { letter: "A", text: "Telling them exactly what I've been thinking about." },
      { letter: "B", text: "Tender, lingering touch throughout the day." },
      { letter: "C", text: "Making moves that leave zero room for doubt." },
      { letter: "D", text: "Letting them know I've been thinking about tonight all day." },
      { letter: "E", text: "Suggesting we explore something new together." },
      { letter: "F", text: "Being emotionally warm and open beforehand." },
      { letter: "G", text: "Telling them something specific that's been driving me crazy." },
      { letter: "H", text: "Showing up equally invested in how the night goes." }
    ]
  },
  {
    id: 506,
    type: "forced-choice",
    weight: 1,
    question: "What I want most to give a partner during intimacy is:",
    options: [
      { letter: "A", text: "Total clarity: they always know exactly what I want and feel." },
      { letter: "B", text: "An unhurried build that lingers, no rush toward an ending." },
      { letter: "C", text: "Confidence: I want them to feel how certain I am." },
      { letter: "D", text: "The sense that I've wanted this for hours, maybe all day." },
      { letter: "E", text: "Genuine curiosity, paying attention rather than running a script." },
      { letter: "F", text: "A sense of total safety, no judgment, nothing held back." },
      { letter: "G", text: "The feeling of being completely irresistible to me." },
      { letter: "H", text: "Equal hunger, never one-sided effort." }
    ]
  },
  {
    id: 507,
    type: "forced-choice",
    weight: 1,
    question: "In intimate moments, I naturally bring:",
    options: [
      { letter: "A", text: "Words: I say what I feel and want, out loud, specifically." },
      { letter: "B", text: "Patience: I let things build slowly and stay there." },
      { letter: "C", text: "Confidence: I reach with real, unmistakable intention." },
      { letter: "D", text: "Anticipation: I build toward it well in advance." },
      { letter: "E", text: "Curiosity: I pay close attention, never on autopilot." },
      { letter: "F", text: "Trust: I make sure they feel completely safe." },
      { letter: "G", text: "Heat: I make sure they feel irresistible, not just present." },
      { letter: "H", text: "Equality: I show up wanting it exactly as much as they do." }
    ]
  },
  {
    id: 508,
    type: "forced-choice",
    weight: 2,
    question: "If I could design exactly how I make a partner feel desired, it would be:",
    options: [
      { letter: "A", text: "Verbal: saying exactly what I want, leaving nothing unspoken." },
      { letter: "B", text: "Slow: a deliberate, savoured build that's never rushed." },
      { letter: "C", text: "Passionate: clear, confident, unmistakable initiation." },
      { letter: "D", text: "Anticipated: they feel wanted for hours before we're alone." },
      { letter: "E", text: "Curious: exploring together, never running a routine." },
      { letter: "F", text: "Safe: trusted enough to be completely present." },
      { letter: "G", text: "Electric: feeling unmistakably irresistible to me." },
      { letter: "H", text: "Equal: both of us fully reaching, fully invested." }
    ]
  },
  {
    id: 509,
    type: "forced-choice",
    weight: 1,
    question: "I feel proudest of how I show desire when:",
    options: [
      { letter: "A", text: "I said exactly what I wanted, with no hedging." },
      { letter: "B", text: "I let the moment build slowly instead of rushing it." },
      { letter: "C", text: "I reached for them first, with total confidence." },
      { letter: "D", text: "I'd clearly been thinking about it for hours beforehand." },
      { letter: "E", text: "I stayed curious about what they wanted, not what I assumed." },
      { letter: "F", text: "I made them feel completely safe to let go." },
      { letter: "G", text: "I made them feel irresistible, not just wanted in general." },
      { letter: "H", text: "We were both equally lost in it, together." }
    ]
  },
  {
    id: 510,
    type: "forced-choice",
    weight: 1,
    question: "What helps a partner feel most desired by me is:",
    options: [
      { letter: "A", text: "Hearing it plainly, no euphemisms, no hinting." },
      { letter: "B", text: "Touch that takes its time before going anywhere else." },
      { letter: "C", text: "Watching me reach for them with real certainty." },
      { letter: "D", text: "Knowing they've been on my mind well before we're together." },
      { letter: "E", text: "Feeling my genuine curiosity about what they actually like." },
      { letter: "F", text: "Feeling completely safe with me, no guard needed." },
      { letter: "G", text: "Hearing exactly what about them does it for me." },
      { letter: "H", text: "Feeling like I show up just as fully as they do." }
    ]
  },
  {
    id: 511,
    type: "forced-choice",
    weight: 1,
    question: "What I try hardest to give during intimacy is:",
    options: [
      { letter: "A", text: "Words, said low, specific, unmistakable." },
      { letter: "B", text: "A build that lingers, with no rush toward the end." },
      { letter: "C", text: "Real, confident energy, someone who reaches with intention." },
      { letter: "D", text: "The feeling that this has been building for hours." },
      { letter: "E", text: "Genuine discovery, no script, no autopilot." },
      { letter: "F", text: "Deep trust, the kind that lets them fully let go." },
      { letter: "G", text: "The feeling of being irresistible, not just present." },
      { letter: "H", text: "Equal hunger, reaching exactly as much as they do." }
    ]
  },
  {
    id: 512,
    type: "forced-choice",
    weight: 2,
    question: "The kind of attention I most like to give hours before anything happens is:",
    options: [
      { letter: "A", text: "Telling them exactly what I want, in detail." },
      { letter: "B", text: "A lingering touch, slow, deliberate, unhurried." },
      { letter: "C", text: "Confident, direct pursuit, leaving no ambiguity." },
      { letter: "D", text: "Making sure they know they've been on my mind all day." },
      { letter: "E", text: "Suggesting something new neither of us has tried before." },
      { letter: "F", text: "Emotional warmth that makes them feel safe going in." },
      { letter: "G", text: "Telling them, specifically, what I find irresistible." },
      { letter: "H", text: "Showing I'm just as invested as they are." }
    ]
  },

  // ── LIKERT ────────────────────────────────────────────────────────────────

  {
    id: 513,
    type: "likert",
    weight: 1,
    category: "A",
    question: "I naturally say exactly what I want to do to a partner, rather than leaving it to be inferred.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 514,
    type: "likert",
    weight: 1,
    category: "F",
    question: "Before anything physical happens, I make sure a partner feels safe enough to be fully present.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 515,
    type: "likert",
    weight: 1,
    category: "C",
    question: "I tend to reach for a partner first, with confidence, rather than waiting for a clear invitation.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 516,
    type: "likert",
    weight: 1,
    category: "B",
    question: "I naturally take my time, letting things build slowly rather than rushing toward an ending.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 517,
    type: "likert",
    weight: 1,
    category: "E",
    question: "I stay genuinely curious about what a partner wants in the moment, rather than relying on what's worked before.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 518,
    type: "likert",
    weight: 1,
    category: "D",
    question: "I like building anticipation for hours before a partner and I are actually alone together.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },

  // ── REVERSE-SCORED (high agreement = LESS of that category) ──────────────

  {
    id: 519,
    type: "reverse",
    weight: 1,
    category: "A",
    question: "I rarely say what I want out loud during intimacy. I'd rather a partner pick up on it through how I move.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 520,
    type: "reverse",
    weight: 1,
    category: "B",
    question: "I tend to move things along quickly. Drawing things out for too long isn't really my style.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 521,
    type: "reverse",
    weight: 1,
    category: "F",
    question: "I don't think much about creating emotional safety before intimacy. It tends to take care of itself.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },

  // ── PARALLEL / REWORDED REPEATS (high-diagnostic weight 2) ───────────────

  {
    id: 522,
    type: "forced-choice",
    weight: 2,
    question: "After a stretch of low intimacy in a relationship, the way I'd naturally try to reignite things is:",
    options: [
      { letter: "A", text: "Telling them plainly that I still want them, in detail." },
      { letter: "B", text: "Creating a slow, unhurried evening with zero pressure." },
      { letter: "C", text: "Initiating first, with real, unmistakable intent." },
      { letter: "D", text: "Building anticipation for hours before we're even alone." },
      { letter: "E", text: "Suggesting something new, breaking the routine entirely." },
      { letter: "F", text: "Starting with an honest, emotionally open conversation." },
      { letter: "G", text: "Telling them exactly what about them I still want." },
      { letter: "H", text: "Making sure I'm matching their effort, not waiting on theirs." }
    ]
  },
  {
    id: 523,
    type: "forced-choice",
    weight: 2,
    question: "What I do hours before a partner and I are alone tends to set the tone for the whole night. What do I usually lead with?",
    options: [
      { letter: "A", text: "A message that says plainly what I've been thinking." },
      { letter: "B", text: "Slow, lingering touch earlier in the day." },
      { letter: "C", text: "Being decisive and confident in how I approach them." },
      { letter: "D", text: "Making sure they know they've genuinely been on my mind." },
      { letter: "E", text: "Suggesting something new to try together." },
      { letter: "F", text: "Being emotionally open and present beforehand." },
      { letter: "G", text: "Telling them something specific that's turning me on." },
      { letter: "H", text: "Showing I want this exactly as much as they do." }
    ]
  },
  {
    id: 524,
    type: "forced-choice",
    weight: 2,
    question: "Think of a time you know you made someone feel completely, undeniably desired. What were you actually doing?",
    options: [
      { letter: "A", text: "Saying clear, specific words about exactly how much I wanted them." },
      { letter: "B", text: "Giving warm, slow, deliberate touch that took its time." },
      { letter: "C", text: "Initiating with total confidence, no hesitation at all." },
      { letter: "D", text: "Letting them feel I'd wanted this since well before that moment." },
      { letter: "E", text: "Creating a real sense of mutual discovery, nothing routine." },
      { letter: "F", text: "Building enough trust that they dropped every guard." },
      { letter: "G", text: "Making them feel specifically, undeniably irresistible." },
      { letter: "H", text: "Matching their hunger completely, both of us reaching." }
    ]
  }
];
