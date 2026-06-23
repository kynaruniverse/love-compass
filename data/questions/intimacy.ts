import { QuizQuestion } from "@/types/quiz";

/**
 * Intimacy Style Test, "How You Desire to Receive"
 * Questions probe how a person experiences desire and the build toward
 * intimacy, not just the physical act itself, things that happen before,
 * during, and around it.
 */
export const INTIMACY_QUESTIONS: QuizQuestion[] = [

  // ── FORCED-CHOICE (weight 1) ──────────────────────────────────────────────

  {
    id: 201,
    type: "forced-choice",
    weight: 1,
    question: "I feel most wanted when a partner:",
    options: [
      { letter: "A", text: "Tells me exactly what they've been thinking about doing to me." },
      { letter: "B", text: "Takes their time, slow kisses, no rush to get anywhere." },
      { letter: "C", text: "Reaches for me first, no hesitation, no waiting for a sign." },
      { letter: "D", text: "Has clearly been thinking about this since earlier in the day." },
      { letter: "E", text: "Stays curious about what I like instead of running a routine." },
      { letter: "F", text: "Makes the room feel safe enough to let go completely." },
      { letter: "G", text: "Looks at me like I'm the only thing in the room." },
      { letter: "H", text: "Wants this as much as I do, and shows it." }
    ]
  },
  {
    id: 202,
    type: "forced-choice",
    weight: 1,
    question: "The moment right before things get physical, I want a partner who:",
    options: [
      { letter: "A", text: "Says something low and specific about what they want." },
      { letter: "B", text: "Lets the closeness build slowly instead of rushing in." },
      { letter: "C", text: "Moves with confidence, like there's no question about wanting this." },
      { letter: "D", text: "Has already been building toward this all evening." },
      { letter: "E", text: "Treats it like there's something new to find, even somewhere familiar." },
      { letter: "F", text: "Makes me feel completely at ease before anything else happens." },
      { letter: "G", text: "Makes me feel irresistible, like they can't help themselves." },
      { letter: "H", text: "Is just as eager to give as they are to take." }
    ]
  },
  {
    id: 203,
    type: "forced-choice",
    weight: 2,
    question: "What gets me there fastest is:",
    options: [
      { letter: "A", text: "Hearing exactly what they want, in plain, unmistakable words." },
      { letter: "B", text: "A slow, deliberate build that lingers before it goes anywhere." },
      { letter: "C", text: "Confident, decisive initiation, no fumbling, no asking permission." },
      { letter: "D", text: "Knowing they've wanted this since long before we were alone." },
      { letter: "E", text: "Genuine curiosity about what feels good, not a script." },
      { letter: "F", text: "Trusting the moment completely, no guard left up." },
      { letter: "G", text: "Feeling unmistakably, specifically desired." },
      { letter: "H", text: "Feeling like we're both fully in it, equally." }
    ]
  },
  {
    id: 204,
    type: "forced-choice",
    weight: 2,
    question: "I feel most turned on when:",
    options: [
      { letter: "A", text: "A partner tells me, in detail, what they want to do." },
      { letter: "B", text: "There's a long, slow build before anything else happens." },
      { letter: "C", text: "A partner is direct, certain, and moves like they mean it." },
      { letter: "D", text: "I can tell they've been thinking about this for hours." },
      { letter: "E", text: "We're discovering something together, no rehearsed moves." },
      { letter: "F", text: "I feel completely safe enough to stop overthinking." },
      { letter: "G", text: "I feel genuinely, specifically wanted, not just convenient." },
      { letter: "H", text: "It's clearly mutual, both of us reaching for each other." }
    ]
  },
  {
    id: 205,
    type: "forced-choice",
    weight: 1,
    question: "The best way a partner can build anticipation hours before we're alone is:",
    options: [
      { letter: "A", text: "A message that says exactly what they're thinking about." },
      { letter: "B", text: "A lingering touch earlier in the day, slow, unhurried." },
      { letter: "C", text: "Being direct: telling me plainly that they want me tonight." },
      { letter: "D", text: "Letting me know I've been on their mind all day." },
      { letter: "E", text: "Hinting at something new they want to try together." },
      { letter: "F", text: "Checking in emotionally, so I feel grounded going in." },
      { letter: "G", text: "Telling me something specific they find irresistible about me." },
      { letter: "H", text: "Showing they're just as invested in tonight as I am." }
    ]
  },
  {
    id: 206,
    type: "forced-choice",
    weight: 1,
    question: "I feel most connected during intimacy when:",
    options: [
      { letter: "A", text: "We're saying what we want, out loud, in the moment." },
      { letter: "B", text: "We're slow, close, and in no rush to get anywhere." },
      { letter: "C", text: "There's clear, undeniable want from both of us." },
      { letter: "D", text: "I can feel how long they've been waiting for this." },
      { letter: "E", text: "We're paying attention, discovering what works without a plan." },
      { letter: "F", text: "There's enough trust that I can be fully present, no guard up." },
      { letter: "G", text: "I feel completely desired, not just touched." },
      { letter: "H", text: "We're both equally lost in it." }
    ]
  },
  {
    id: 207,
    type: "forced-choice",
    weight: 1,
    question: "What makes me feel most desired is:",
    options: [
      { letter: "A", text: "Hearing exactly what they want, no euphemisms, no hinting." },
      { letter: "B", text: "Touch that takes its time before going anywhere else." },
      { letter: "C", text: "A partner who reaches for me first, with real certainty." },
      { letter: "D", text: "Knowing I've been on their mind well before we're together." },
      { letter: "E", text: "Genuine curiosity about what I actually like." },
      { letter: "F", text: "Feeling safe enough to be completely present." },
      { letter: "G", text: "Being told, specifically, what about me does it for them." },
      { letter: "H", text: "Both of us showing up fully, equally." }
    ]
  },
  {
    id: 208,
    type: "forced-choice",
    weight: 1,
    question: "In intimate moments, what I crave most is:",
    options: [
      { letter: "A", text: "Words, said low, specific, unmistakable." },
      { letter: "B", text: "A slow build that lingers, no rush toward the end." },
      { letter: "C", text: "Real, confident energy, someone who reaches with intention." },
      { letter: "D", text: "The feeling that this has been building for hours." },
      { letter: "E", text: "Genuine discovery, no script, no autopilot." },
      { letter: "F", text: "Deep trust, the kind that lets me fully let go." },
      { letter: "G", text: "Feeling irresistible, not just present." },
      { letter: "H", text: "Equal hunger, both of us reaching." }
    ]
  },
  {
    id: 209,
    type: "forced-choice",
    weight: 2,
    question: "If I could design exactly what intimacy felt like, it would be:",
    options: [
      { letter: "A", text: "Verbal: saying exactly what we want, in the moment." },
      { letter: "B", text: "Slow: a build-up that's savoured, not skipped." },
      { letter: "C", text: "Passionate: clear want, confident initiation." },
      { letter: "D", text: "Anticipated: wanted long before we're alone." },
      { letter: "E", text: "Curious: exploring, never on autopilot." },
      { letter: "F", text: "Safe: trusted enough to be completely present." },
      { letter: "G", text: "Electric: feeling unmistakably irresistible." },
      { letter: "H", text: "Equal: both of us fully reaching for each other." }
    ]
  },
  {
    id: 210,
    type: "forced-choice",
    weight: 1,
    question: "I feel most satisfied when intimacy is:",
    options: [
      { letter: "A", text: "Spoken: desire said out loud, not assumed." },
      { letter: "B", text: "Slow: lingering, unhurried, savoured." },
      { letter: "C", text: "Direct: clear want, clear energy, no hesitation." },
      { letter: "D", text: "Anticipated: I feel like I've been wanted all day." },
      { letter: "E", text: "Curious: both of us genuinely exploring." },
      { letter: "F", text: "Safe: completely trusted, completely present." },
      { letter: "G", text: "Charged: I feel desired, not just touched." },
      { letter: "H", text: "Mutual: both of us fully invested, fully present." }
    ]
  },
  {
    id: 211,
    type: "forced-choice",
    weight: 1,
    question: "What helps me let go most during intimacy is:",
    options: [
      { letter: "A", text: "Desire spoken plainly, without me having to ask." },
      { letter: "B", text: "Touch that builds slowly and never rushes." },
      { letter: "C", text: "Clear, confident energy from someone who means it." },
      { letter: "D", text: "Feeling like I've been wanted since long before now." },
      { letter: "E", text: "Genuine discovery, neither of us on autopilot." },
      { letter: "F", text: "Feeling emotionally safe enough to stop thinking entirely." },
      { letter: "G", text: "Feeling irresistible in that exact moment." },
      { letter: "H", text: "Both of us equally engaged, equally present." }
    ]
  },
  {
    id: 212,
    type: "forced-choice",
    weight: 2,
    question: "The kind of attention that gets under my skin most, hours before anything happens, is:",
    options: [
      { letter: "A", text: "Being told exactly what they want, in detail." },
      { letter: "B", text: "A lingering touch, slow, deliberate, unhurried." },
      { letter: "C", text: "Confident, direct pursuit, no ambiguity." },
      { letter: "D", text: "Knowing they've been thinking about me all day." },
      { letter: "E", text: "An invitation to try something neither of us has before." },
      { letter: "F", text: "Emotional warmth that makes me feel safe going in." },
      { letter: "G", text: "Being told, specifically, what they find irresistible." },
      { letter: "H", text: "A partner who's just as invested as I am." }
    ]
  },

  // ── LIKERT ────────────────────────────────────────────────────────────────

  {
    id: 213,
    type: "likert",
    weight: 1,
    category: "A",
    question: "Hearing a partner say exactly what they want to do to me turns me on more than the act itself sometimes can.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 214,
    type: "likert",
    weight: 1,
    category: "F",
    question: "I find it very difficult to fully let go during intimacy if I don't feel completely safe and trusted first.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 215,
    type: "likert",
    weight: 1,
    category: "C",
    question: "A partner who reaches for me with no hesitation, no waiting for permission, makes me feel deeply wanted.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 216,
    type: "likert",
    weight: 1,
    category: "B",
    question: "A slow, lingering build-up before anything else happens matters to me as much as what comes after.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 217,
    type: "likert",
    weight: 1,
    category: "E",
    question: "I feel most alive in intimate moments when a partner is genuinely curious about what feels good to me, not following a routine.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 218,
    type: "likert",
    weight: 1,
    category: "D",
    question: "Knowing a partner has been thinking about being with me hours before we're actually alone is a major turn-on.",
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
    id: 219,
    type: "reverse",
    weight: 1,
    category: "A",
    question: "I don't really need a partner to say anything during intimacy. Actions tell me everything words would.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 220,
    type: "reverse",
    weight: 1,
    category: "B",
    question: "I'd rather skip the slow build entirely and get straight to it. Long lead-ups feel unnecessary to me.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 221,
    type: "reverse",
    weight: 1,
    category: "F",
    question: "Feeling emotionally safe isn't really a prerequisite for me. I can be fully present without it.",
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
    id: 222,
    type: "forced-choice",
    weight: 2,
    question: "After a stretch of low intimacy in a relationship, what would feel like a genuine spark again?",
    options: [
      { letter: "A", text: "A partner telling me plainly that they still want me, in detail." },
      { letter: "B", text: "A slow, unhurried evening with no pressure toward an ending." },
      { letter: "C", text: "A partner initiating first, with real, unmistakable intent." },
      { letter: "D", text: "Feeling like they've been thinking about this all day." },
      { letter: "E", text: "Trying something new together, breaking the routine." },
      { letter: "F", text: "An honest, emotionally open conversation first." },
      { letter: "G", text: "A partner telling me exactly what about me they want." },
      { letter: "H", text: "Both of us making the effort equally, reaching at the same time." }
    ]
  },
  {
    id: 223,
    type: "forced-choice",
    weight: 2,
    question: "What a partner does hours before we're alone changes everything about how I feel that night. What matters most?",
    options: [
      { letter: "A", text: "A message that says, plainly, what they've been thinking." },
      { letter: "B", text: "Slow, lingering touch earlier in the day." },
      { letter: "C", text: "A partner being decisive and confident in how they approach me." },
      { letter: "D", text: "Knowing I've genuinely been on their mind." },
      { letter: "E", text: "Them suggesting something new to try together." },
      { letter: "F", text: "Them being emotionally open and present beforehand." },
      { letter: "G", text: "Them telling me something specific that turns them on about me." },
      { letter: "H", text: "Them showing they want this exactly as much as I do." }
    ]
  },
  {
    id: 224,
    type: "forced-choice",
    weight: 2,
    question: "Think of a time you felt completely, undeniably desired. What was actually happening?",
    options: [
      { letter: "A", text: "Clear, specific words about exactly how much I was wanted." },
      { letter: "B", text: "Warm, slow, deliberate touch that took its time." },
      { letter: "C", text: "Confident, direct initiation, no hesitation at all." },
      { letter: "D", text: "The sense that I'd been wanted since well before that moment." },
      { letter: "E", text: "A real sense of mutual discovery, nothing routine." },
      { letter: "F", text: "Deep trust that let me drop every guard." },
      { letter: "G", text: "Feeling specifically, undeniably irresistible." },
      { letter: "H", text: "A total sense of equal hunger, both of us reaching." }
    ]
  }
];
