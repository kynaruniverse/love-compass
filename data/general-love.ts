import { QuizQuestion } from "@/types/quiz";

export const generalLoveQuestions: QuizQuestion[] = [

  // ── FORCED-CHOICE (weight 1) ──────────────────────────────────────────────

  {
    id: 101,
    type: "forced-choice",
    weight: 1,
    question: "When I'm stressed, I feel most supported when a partner:",
    options: [
      { letter: "A", text: "Says something specific and reassuring, reminding me I'm okay." },
      { letter: "B", text: "Puts everything else down and just sits with me." },
      { letter: "C", text: "Holds me, a long hug, physical comfort, closeness." },
      { letter: "D", text: "Quietly takes something off my plate without being asked." },
      { letter: "E", text: "Shows up with a small, thoughtful treat or gesture." },
      { letter: "F", text: "Makes me feel calm and emotionally safe again." },
      { letter: "G", text: "Reminds me of what I'm capable of and what I'm working toward." },
      { letter: "H", text: "Steps in to organise or manage what needs doing." }
    ]
  },
  {
    id: 102,
    type: "forced-choice",
    weight: 1,
    question: "The most meaningful way for a partner to show they were thinking about me is:",
    options: [
      { letter: "A", text: "A message that says something specific and true about me." },
      { letter: "B", text: "Carving out real time, not catching up, actually being together." },
      { letter: "C", text: "Reaching for me physically, a hand held, a hug out of nowhere." },
      { letter: "D", text: "Handling something for me before I had to ask." },
      { letter: "E", text: "Choosing something that shows they really know me." },
      { letter: "F", text: "Checking in on how I'm actually doing, not just in passing." },
      { letter: "G", text: "Asking about something I'm working toward and following up." },
      { letter: "H", text: "Remembering the detail and taking care of the logistics." }
    ]
  },
  {
    id: 103,
    type: "forced-choice",
    weight: 1,
    question: "In a long-term relationship, I value most:",
    options: [
      { letter: "A", text: "Being told, often and specifically, that I matter." },
      { letter: "B", text: "Regular time together where we're actually present with each other." },
      { letter: "C", text: "Warmth that's physical and ongoing, not just in big moments." },
      { letter: "D", text: "A partner who handles things and makes daily life easier." },
      { letter: "E", text: "Occasional gestures that show real attention and thought." },
      { letter: "F", text: "Knowing I can rely on them emotionally, every time." },
      { letter: "G", text: "A relationship where we're both still growing." },
      { letter: "H", text: "The mental load split fairly, without having to ask." }
    ]
  },
  {
    id: 104,
    type: "forced-choice",
    weight: 2,
    question: "After a disagreement, I feel most repaired when a partner:",
    options: [
      { letter: "A", text: "Clearly apologizes and affirms my value." },
      { letter: "B", text: "Sits with me and talks it through calmly." },
      { letter: "C", text: "Reaches for me physically and reconnects." },
      { letter: "D", text: "Fixes what went wrong in a concrete way." },
      { letter: "E", text: "Offers a meaningful gesture or token." },
      { letter: "F", text: "Makes me feel emotionally safe again." },
      { letter: "G", text: "Shows willingness to learn and improve." },
      { letter: "H", text: "Changes the system so the problem doesn't repeat." }
    ]
  },
  {
    id: 105,
    type: "forced-choice",
    weight: 1,
    question: "I feel most loved when a partner:",
    options: [
      { letter: "A", text: "Notices something specific about me and says it out loud." },
      { letter: "B", text: "Gives me their full attention, phone down, actually there." },
      { letter: "C", text: "Reaches for me, instinctive, warm, physical." },
      { letter: "D", text: "Handles something before I have to ask." },
      { letter: "E", text: "Remembers what matters to me and acts on it." },
      { letter: "F", text: "Is the same person every time, reliable, steady, there." },
      { letter: "G", text: "Takes real interest in where I'm going and helps me get there." },
      { letter: "H", text: "Carries their share without keeping score." }
    ]
  },
  {
    id: 106,
    type: "forced-choice",
    weight: 1,
    question: "The thing that would make me feel most seen is:",
    options: [
      { letter: "A", text: "Specific appreciation, not 'you're great', but why, exactly." },
      { letter: "B", text: "Being listened to properly, without their eyes drifting." },
      { letter: "C", text: "Being held or drawn close without needing to ask for it." },
      { letter: "D", text: "Someone handling something before I even mentioned it." },
      { letter: "E", text: "A gesture that could only have come from someone paying attention." },
      { letter: "F", text: "Someone noticing I'm off before I've said a word." },
      { letter: "G", text: "Someone who sees what I'm capable of and says so." },
      { letter: "H", text: "Someone who's already thought ahead to what needs doing." }
    ]
  },
  {
    id: 107,
    type: "forced-choice",
    weight: 2,
    question: "If I had a rough day, my ideal partner response would be:",
    options: [
      { letter: "A", text: "Telling me it's going to be okay, and meaning it specifically." },
      { letter: "B", text: "A quiet evening together with no agenda or pressure." },
      { letter: "C", text: "A hug that lasts, or just being physically close." },
      { letter: "D", text: "Sorting something so I have one less thing to think about." },
      { letter: "E", text: "A small surprise that says they were thinking of me." },
      { letter: "F", text: "Calm validation, not fixing it, just being steady with me." },
      { letter: "G", text: "A reminder that this is temporary and I'm more capable than it feels." },
      { letter: "H", text: "Taking charge of the evening so I don't have to coordinate anything." }
    ]
  },
  {
    id: 108,
    type: "forced-choice",
    weight: 1,
    question: "In everyday life, I feel closest to a partner when they:",
    options: [
      { letter: "A", text: "Say something unprompted that tells me they notice me." },
      { letter: "B", text: "Give me their full attention, properly, not half-distracted." },
      { letter: "C", text: "Reach for me without a reason, a touch, a moment of closeness." },
      { letter: "D", text: "Handle ordinary things without needing to be asked." },
      { letter: "E", text: "Show up with something small that proves they were thinking of me." },
      { letter: "F", text: "Are the same, steady, available, no hot-and-cold." },
      { letter: "G", text: "Are still curious about who I'm becoming." },
      { letter: "H", text: "Share the invisible work without making it a negotiation." }
    ]
  },
  {
    id: 109,
    type: "forced-choice",
    weight: 1,
    question: "A partner's affection feels most genuine when it is:",
    options: [
      { letter: "A", text: "Said out loud, clearly, specifically, in their own words." },
      { letter: "B", text: "Given through time that's actually protected and unhurried." },
      { letter: "C", text: "Felt, warm, deliberate, physical." },
      { letter: "D", text: "Shown through what they quietly do, consistently." },
      { letter: "E", text: "Expressed through something chosen only for me." },
      { letter: "F", text: "Grounded, the same every time, no uncertainty." },
      { letter: "G", text: "Connected to who I'm trying to become." },
      { letter: "H", text: "Demonstrated through how we share the weight of life." }
    ]
  },
  {
    id: 110,
    type: "forced-choice",
    weight: 2,
    question: "On a meaningful occasion, I would be most touched by:",
    options: [
      { letter: "A", text: "A heartfelt message or speech." },
      { letter: "B", text: "A day spent entirely and intentionally together." },
      { letter: "C", text: "Warm physical closeness throughout the day." },
      { letter: "D", text: "Having tasks and logistics handled for me." },
      { letter: "E", text: "A meaningful, well-chosen present." },
      { letter: "F", text: "Feeling deeply secure and cared for." },
      { letter: "G", text: "Being supported in a shared dream or goal." },
      { letter: "H", text: "Having all the planning taken care of." }
    ]
  },
  {
    id: 111,
    type: "forced-choice",
    weight: 1,
    question: "What matters most in a partner is:",
    options: [
      { letter: "A", text: "That they say things, the right things, the true things." },
      { letter: "B", text: "That they're actually present when they're with me." },
      { letter: "C", text: "That physical affection is natural and ongoing between us." },
      { letter: "D", text: "That they follow through, reliably, without needing reminders." },
      { letter: "E", text: "That they pay attention to me specifically and show it." },
      { letter: "F", text: "That I feel safe with them, emotionally, consistently." },
      { letter: "G", text: "That they're invested in who I'm becoming, not just who I am." },
      { letter: "H", text: "That they carry their share without being managed into it." }
    ]
  },
  {
    id: 112,
    type: "forced-choice",
    weight: 2,
    question: "If I'm feeling disconnected, the fastest way to reconnect is:",
    options: [
      { letter: "A", text: "An honest conversation where things actually get said." },
      { letter: "B", text: "Time together with nowhere to be and nothing to finish." },
      { letter: "C", text: "Physical closeness, being held, being near." },
      { letter: "D", text: "Them doing something that shows they're still paying attention." },
      { letter: "E", text: "A small gesture that bridges the gap without a big conversation." },
      { letter: "F", text: "Hearing that we're okay, directly, not implied." },
      { letter: "G", text: "Working on something together that reminds us we're a team." },
      { letter: "H", text: "Both of us stepping up and splitting what needs doing." }
    ]
  },
  {
    id: 113,
    type: "forced-choice",
    weight: 1,
    question: "The kind of partner effort I notice and appreciate most is:",
    options: [
      { letter: "A", text: "Saying something genuine, not prompted, just because." },
      { letter: "B", text: "Time that's actually protected, not squeezed in, set aside." },
      { letter: "C", text: "Physical warmth that's just part of how we are together." },
      { letter: "D", text: "Acting on something before I had to bring it up." },
      { letter: "E", text: "Remembering something I said once and doing something about it." },
      { letter: "F", text: "Showing up the same way, every time, without having to be asked." },
      { letter: "G", text: "Genuinely caring about where I'm headed, not just where I am." },
      { letter: "H", text: "Taking ownership of their share without it becoming a conversation." }
    ]
  },
  {
    id: 114,
    type: "forced-choice",
    weight: 1,
    question: "I feel appreciated when someone:",
    options: [
      { letter: "A", text: "Says something that shows they actually see me." },
      { letter: "B", text: "Carves out real time, not just the leftover minutes." },
      { letter: "C", text: "Reaches for me, initiates closeness without being asked." },
      { letter: "D", text: "Takes something off my list without making it a favour." },
      { letter: "E", text: "Picks something for me that only someone paying attention would choose." },
      { letter: "F", text: "Lets me feel what I'm feeling without rushing to fix it." },
      { letter: "G", text: "Actively helps me become who I'm trying to be." },
      { letter: "H", text: "Shows up equally, not 60/40, actually equal." }
    ]
  },
  {
    id: 115,
    type: "forced-choice",
    weight: 1,
    question: "What I need most from love is:",
    options: [
      { letter: "A", text: "To be told, specifically and sincerely." },
      { letter: "B", text: "Someone who is actually there when they're with me." },
      { letter: "C", text: "Physical warmth, the kind that's just part of us." },
      { letter: "D", text: "Someone who handles things and makes life lighter." },
      { letter: "E", text: "A partner who pays attention and shows it." },
      { letter: "F", text: "To feel safe, consistently, without having to earn it." },
      { letter: "G", text: "A relationship that's still going somewhere." },
      { letter: "H", text: "Someone who carries their half, genuinely." }
    ]
  },
  {
    id: 116,
    type: "forced-choice",
    weight: 2,
    question: "I feel most secure in love when:",
    options: [
      { letter: "A", text: "I'm told where I stand, clearly, and more than once." },
      { letter: "B", text: "Time with them is consistent and actually mine." },
      { letter: "C", text: "Physical affection is a regular, unremarkable part of us." },
      { letter: "D", text: "They do what they say they'll do, without needing reminding." },
      { letter: "E", text: "They notice what matters to me and quietly act on it." },
      { letter: "F", text: "My feelings land somewhere soft, not analysed, not minimised." },
      { letter: "G", text: "Someone is invested in where I'm going, not just where I am." },
      { letter: "H", text: "The invisible work is split without it becoming a negotiation." }
    ]
  },

  // ── LIKERT, rate 1-5 how much this resonates (targets one category) ───────

  {
    id: 117,
    type: "likert",
    weight: 1,
    category: "A",
    question: "Hearing 'I love you', 'I'm proud of you', or specific praise makes me feel deeply loved.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 118,
    type: "likert",
    weight: 1,
    category: "B",
    question: "When a partner cancels plans or is often distracted, I feel unloved even if nothing was said.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 119,
    type: "likert",
    weight: 1,
    category: "C",
    question: "A hug from my partner can change my entire mood, even after a hard day.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 120,
    type: "likert",
    weight: 1,
    category: "D",
    question: "When a partner handles something without being asked, I feel genuinely cared for.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 121,
    type: "likert",
    weight: 1,
    category: "F",
    question: "Knowing my partner is emotionally steady makes me feel safe enough to be fully myself.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 122,
    type: "likert",
    weight: 1,
    category: "G",
    question: "A partner who actively supports my ambitions and growth makes me feel deeply loved.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 123,
    type: "likert",
    weight: 1,
    category: "H",
    question: "When planning, errands, and logistics are shared equally, I feel respected and loved.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 124,
    type: "likert",
    weight: 1,
    category: "E",
    question: "A small, well-chosen gift can mean more to me than an entire evening of quality time.",
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
    id: 125,
    type: "reverse",
    weight: 1,
    category: "A",
    question: "Words of appreciation are nice but I don't really need to hear them, I know how my partner feels.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 126,
    type: "reverse",
    weight: 1,
    category: "C",
    question: "I'm perfectly fine going days without physical affection from a partner, it doesn't affect how connected I feel.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 127,
    type: "reverse",
    weight: 1,
    category: "B",
    question: "I don't need a lot of one-on-one time with a partner to feel loved, I'm happy with less.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 128,
    type: "reverse",
    weight: 1,
    category: "F",
    question: "I rarely need emotional reassurance in a relationship, I'm comfortable managing uncertainty on my own.",
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
    id: 129,
    type: "forced-choice",
    weight: 2,
    question: "Imagine you are celebrating a personal achievement. What would mean the most from your partner?",
    options: [
      { letter: "A", text: "Hearing them say they're proud of you, specifically." },
      { letter: "B", text: "Them clearing their whole day to celebrate with you." },
      { letter: "C", text: "A long, warm embrace." },
      { letter: "D", text: "Them handling everything logistical so you can enjoy it." },
      { letter: "E", text: "A carefully chosen gift to mark the moment." },
      { letter: "F", text: "Knowing they are completely in your corner emotionally." },
      { letter: "G", text: "Them expressing belief in your next goal." },
      { letter: "H", text: "Them taking on extra responsibilities so you had space to achieve." }
    ]
  },
  {
    id: 130,
    type: "forced-choice",
    weight: 2,
    question: "You're going through a difficult period that has lasted several weeks. What sustains you most in a relationship?",
    options: [
      { letter: "A", text: "Regular verbal affirmation that you are loved and capable." },
      { letter: "B", text: "A partner who shows up and stays present." },
      { letter: "C", text: "Physical closeness, sleeping near them, being held." },
      { letter: "D", text: "A partner who quietly takes burdens off your plate." },
      { letter: "E", text: "Small gestures that show they're thinking of you." },
      { letter: "F", text: "A partner who remains steady and emotionally available." },
      { letter: "G", text: "A partner who helps you see the path forward and grow." },
      { letter: "H", text: "A partner who steps up and carries more of the shared load." }
    ]
  },
  {
    id: 131,
    type: "forced-choice",
    weight: 2,
    question: "When thinking about the relationship you've felt most loved in, what made it feel that way?",
    options: [
      { letter: "A", text: "They said the right things, often and sincerely." },
      { letter: "B", text: "They prioritized time with me above other things." },
      { letter: "C", text: "There was a lot of natural, warm physical affection." },
      { letter: "D", text: "They were always ready to help without needing to be asked." },
      { letter: "E", text: "They gave thoughtful gifts and marked occasions." },
      { letter: "F", text: "I always felt emotionally safe and secure." },
      { letter: "G", text: "We grew together, they supported who I was becoming." },
      { letter: "H", text: "Life felt genuinely shared, responsibilities, planning, effort." }
    ]
  },
  {
    id: 132,
    type: "forced-choice",
    weight: 2,
    question: "In a long-distance or low-contact period, what would you miss most?",
    options: [
      { letter: "A", text: "Hearing their voice saying they love and miss me." },
      { letter: "B", text: "The undivided time we'd normally have together." },
      { letter: "C", text: "Physical touch, holding hands, hugging, closeness." },
      { letter: "D", text: "Them quietly making my life easier." },
      { letter: "E", text: "The little gifts or surprises they'd leave." },
      { letter: "F", text: "The emotional steadiness they bring to my life." },
      { letter: "G", text: "Growing together toward shared goals." },
      { letter: "H", text: "The ease of shared responsibility, not carrying it alone." }
    ]
  }
];