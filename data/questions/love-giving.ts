import { QuizQuestion } from "@/types/quiz";

/**
 * Love Expression Test, "How You Love"
 * Questions probe how a person naturally gives love, not how they prefer to receive it.
 * The result profile describes the kind of partner they are, and by extension
 * the kind of partner whose receiving style will match their giving style.
 */
export const LOVE_GIVING_QUESTIONS: QuizQuestion[] = [

  // ── FORCED-CHOICE (weight 1) ──────────────────────────────────────────────

  {
    id: 401,
    type: "forced-choice",
    weight: 1,
    question: "When someone I love is going through a hard time, my first instinct is to:",
    options: [
      { letter: "A", text: "Tell them I believe in them and remind them how strong they are." },
      { letter: "B", text: "Drop what I'm doing and just be with them, fully present." },
      { letter: "C", text: "Hold them, sit close, offer physical comfort." },
      { letter: "D", text: "Find something practical I can fix or handle for them." },
      { letter: "E", text: "Bring them something, a small treat, something they love." },
      { letter: "F", text: "Make sure they feel safe and emotionally held." },
      { letter: "G", text: "Help them see a way forward and believe in what they're capable of." },
      { letter: "H", text: "Take something off their plate without being asked." }
    ]
  },
  {
    id: 402,
    type: "forced-choice",
    weight: 1,
    question: "The way I most naturally show someone I was thinking about them is:",
    options: [
      { letter: "A", text: "Sending a message that says something specific and genuine." },
      { letter: "B", text: "Carving out time to be with them properly." },
      { letter: "C", text: "A touch, a hand on their arm, a hug out of nowhere." },
      { letter: "D", text: "Doing something for them before they have to ask." },
      { letter: "E", text: "Picking up something I know they'd love." },
      { letter: "F", text: "Checking in to make sure they feel okay." },
      { letter: "G", text: "Asking about something they're working toward and encouraging them." },
      { letter: "H", text: "Quietly handling something they've been putting off." }
    ]
  },
  {
    id: 403,
    type: "forced-choice",
    weight: 1,
    question: "In a long-term relationship, I tend to show love mostly through:",
    options: [
      { letter: "A", text: "Regular verbal appreciation, I say what I notice and feel." },
      { letter: "B", text: "Protecting time with them, making sure we actually connect." },
      { letter: "C", text: "Physical affection as a constant, natural part of our life." },
      { letter: "D", text: "Doing things, helping, fixing, making life smoother." },
      { letter: "E", text: "Thoughtful gifts and gestures that mark moments." },
      { letter: "F", text: "Being steady, showing up the same way, every time." },
      { letter: "G", text: "Actively investing in who they're becoming." },
      { letter: "H", text: "Sharing the weight of life equally and without keeping score." }
    ]
  },
  {
    id: 404,
    type: "forced-choice",
    weight: 2,
    question: "After a disagreement, the way I naturally try to repair things is:",
    options: [
      { letter: "A", text: "Saying clearly that I'm sorry, what I appreciate about them, and that we're okay." },
      { letter: "B", text: "Sitting with them, offering unhurried, undistracted time to reconnect." },
      { letter: "C", text: "Reaching for them physically, a hug, closeness." },
      { letter: "D", text: "Doing something concrete to show I care, fixing what I can." },
      { letter: "E", text: "A small meaningful gesture to bridge the gap." },
      { letter: "F", text: "Making sure they feel emotionally safe with me again." },
      { letter: "G", text: "Talking about what we can both learn and do better." },
      { letter: "H", text: "Adjusting how I show up so the same thing doesn't happen again." }
    ]
  },
  {
    id: 405,
    type: "forced-choice",
    weight: 1,
    question: "If I'm honest, the thing I do most naturally to show love is:",
    options: [
      { letter: "A", text: "Notice things about people and say them out loud." },
      { letter: "B", text: "Show up and stay, reliably, consistently present." },
      { letter: "C", text: "Be physically affectionate without thinking about it." },
      { letter: "D", text: "Handle things before they become problems." },
      { letter: "E", text: "Remember what people love and act on it." },
      { letter: "F", text: "Be the calm, steady thing someone can lean on." },
      { letter: "G", text: "Champion people's goals and growth actively." },
      { letter: "H", text: "Carry my share, and often a bit more, without complaint." }
    ]
  },
  {
    id: 406,
    type: "forced-choice",
    weight: 1,
    question: "When I want to make someone feel truly seen, I:",
    options: [
      { letter: "A", text: "Tell them something specific I've noticed and admire about them." },
      { letter: "B", text: "Give them my full attention, phone away, fully there." },
      { letter: "C", text: "Move closer to them physically, warmth, touch, closeness." },
      { letter: "D", text: "Do something they mentioned needing, without being reminded." },
      { letter: "E", text: "Choose something for them that only someone paying close attention would know to get." },
      { letter: "F", text: "Make sure they feel safe to be exactly as they are around me." },
      { letter: "G", text: "Reflect back their potential and remind them what they're capable of." },
      { letter: "H", text: "Show that I'm carrying my weight so they don't have to carry mine too." }
    ]
  },
  {
    id: 407,
    type: "forced-choice",
    weight: 2,
    question: "On a day when someone I love has had a terrible time, what I actually do is:",
    options: [
      { letter: "A", text: "Tell them I love them and that it's going to be okay, specifically, not just generally." },
      { letter: "B", text: "Clear my evening and just be with them, no agenda." },
      { letter: "C", text: "Hold them, physically close, for as long as they need." },
      { letter: "D", text: "Handle the one thing that's weighing on them most." },
      { letter: "E", text: "Show up with something small but perfectly chosen." },
      { letter: "F", text: "Stay calm and steady so they have something solid to lean on." },
      { letter: "G", text: "Remind them of their strength and what they're capable of." },
      { letter: "H", text: "Take on more than my share so they can fully rest." }
    ]
  },
  {
    id: 408,
    type: "forced-choice",
    weight: 1,
    question: "In daily life, I show a partner I love them mainly by:",
    options: [
      { letter: "A", text: "Saying it, and saying specific things I appreciate about them." },
      { letter: "B", text: "Protecting time for us in a busy life." },
      { letter: "C", text: "Being naturally physically affectionate throughout the day." },
      { letter: "D", text: "Taking care of things so they don't have to." },
      { letter: "E", text: "Surprising them with small gestures that show I was thinking of them." },
      { letter: "F", text: "Being consistent and emotionally available every day." },
      { letter: "G", text: "Asking about their goals and celebrating their progress." },
      { letter: "H", text: "Sharing household and logistical responsibilities fairly." }
    ]
  },
  {
    id: 409,
    type: "forced-choice",
    weight: 1,
    question: "The way my love tends to show up, whether I plan it or not, is:",
    options: [
      { letter: "A", text: "In what I say, words of appreciation, affirmation, honesty." },
      { letter: "B", text: "In my time, showing up and staying." },
      { letter: "C", text: "In touch, I'm naturally physically warm with people I love." },
      { letter: "D", text: "In action, I do things before I say things." },
      { letter: "E", text: "In gestures, I think about what someone would love and do that." },
      { letter: "F", text: "In steadiness, I'm the reliable presence people can count on." },
      { letter: "G", text: "In investment, I push people toward their best selves." },
      { letter: "H", text: "In effort, I make sure things feel fair and equal." }
    ]
  },
  {
    id: 410,
    type: "forced-choice",
    weight: 2,
    question: "On a partner's most meaningful occasion, my instinct is to:",
    options: [
      { letter: "A", text: "Write or say something heartfelt and specific to them." },
      { letter: "B", text: "Clear the day entirely, just for them." },
      { letter: "C", text: "Be physically close and warm with them all day." },
      { letter: "D", text: "Handle everything logistical so they can just enjoy it." },
      { letter: "E", text: "Find a gift that perfectly captures what makes them them." },
      { letter: "F", text: "Make them feel completely secure and loved throughout." },
      { letter: "G", text: "Connect it to who they're becoming and what this means for their future." },
      { letter: "H", text: "Ensure everything is shared and managed so they carry nothing." }
    ]
  },
  {
    id: 411,
    type: "forced-choice",
    weight: 1,
    question: "If someone asked my partner how I show love, they would most likely say:",
    options: [
      { letter: "A", text: "They always say exactly what they appreciate about me." },
      { letter: "B", text: "They're always really present, they give me their full attention." },
      { letter: "C", text: "They're very physically affectionate, always close." },
      { letter: "D", text: "They just handle things, I never have to ask twice." },
      { letter: "E", text: "They always remember things and give the most thoughtful gifts." },
      { letter: "F", text: "They're incredibly steady, I always feel safe with them." },
      { letter: "G", text: "They believe in me more than anyone, they push me to grow." },
      { letter: "H", text: "They always pull their weight, everything feels genuinely equal." }
    ]
  },
  {
    id: 412,
    type: "forced-choice",
    weight: 2,
    question: "When I feel close to someone and want to close the distance between us, I:",
    options: [
      { letter: "A", text: "Tell them, say something honest and warm about what they mean to me." },
      { letter: "B", text: "Suggest we spend real, unhurried time together." },
      { letter: "C", text: "Move toward them physically, touch, closeness, warmth." },
      { letter: "D", text: "Do something for them that shows I'm paying attention." },
      { letter: "E", text: "Give them something meaningful that bridges the gap." },
      { letter: "F", text: "Make sure they feel completely safe and cared for." },
      { letter: "G", text: "Invest in something that matters to them, their goals, their growth." },
      { letter: "H", text: "Take on more responsibility so they feel supported." }
    ]
  },
  {
    id: 413,
    type: "forced-choice",
    weight: 1,
    question: "The kind of partner effort I give most naturally, without thinking, is:",
    options: [
      { letter: "A", text: "Verbal appreciation, I say what I feel and notice." },
      { letter: "B", text: "Protected time together, I make space for us." },
      { letter: "C", text: "Physical warmth, I'm instinctively affectionate." },
      { letter: "D", text: "Proactive help, I act before I'm asked." },
      { letter: "E", text: "Thoughtful remembering, I notice what people love." },
      { letter: "F", text: "Emotional reliability, I show up the same way every time." },
      { letter: "G", text: "Growth investment, I actively support who they're becoming." },
      { letter: "H", text: "Equal effort, I make sure nothing is one-sided." }
    ]
  },
  {
    id: 414,
    type: "forced-choice",
    weight: 1,
    question: "I feel most like myself in a relationship when I'm:",
    options: [
      { letter: "A", text: "Freely expressing appreciation and admiration for my partner." },
      { letter: "B", text: "Spending real, present time with them." },
      { letter: "C", text: "Being physically close and warm with them." },
      { letter: "D", text: "Taking care of things and making life easier for them." },
      { letter: "E", text: "Finding thoughtful ways to show them I was thinking of them." },
      { letter: "F", text: "Being the stable, emotionally available presence they can rely on." },
      { letter: "G", text: "Encouraging their growth and helping them reach their potential." },
      { letter: "H", text: "Making sure everything feels genuinely fair and shared." }
    ]
  },
  {
    id: 415,
    type: "forced-choice",
    weight: 1,
    question: "My most natural way of saying 'I love you' without using those words is:",
    options: [
      { letter: "A", text: "Saying something specific about what I admire or appreciate." },
      { letter: "B", text: "Showing up, being there, reliably and fully." },
      { letter: "C", text: "Touch, a hand held, a hug that lasts a moment longer." },
      { letter: "D", text: "Quietly doing something that makes their life easier." },
      { letter: "E", text: "Remembering something they mentioned and acting on it." },
      { letter: "F", text: "Being steady when everything else is uncertain." },
      { letter: "G", text: "Telling them what I see in them that they might not see in themselves." },
      { letter: "H", text: "Carrying my share, and making sure they never carry mine too." }
    ]
  },
  {
    id: 416,
    type: "forced-choice",
    weight: 2,
    question: "When I think about how I show love at my best, the truest description is:",
    options: [
      { letter: "A", text: "I say things, specifically, genuinely, often." },
      { letter: "B", text: "I'm present, fully, consistently, without distraction." },
      { letter: "C", text: "I'm warm, physically close, affectionate, naturally tactile." },
      { letter: "D", text: "I do, I act, I help, I handle things." },
      { letter: "E", text: "I remember, I pay attention and give accordingly." },
      { letter: "F", text: "I'm steady, reliable, safe, always there." },
      { letter: "G", text: "I invest, in their growth, their goals, their becoming." },
      { letter: "H", text: "I share, everything, equally, without resentment." }
    ]
  },

  // ── LIKERT ────────────────────────────────────────────────────────────────

  {
    id: 417,
    type: "likert",
    weight: 1,
    category: "A",
    question: "I naturally and frequently tell people I love what I appreciate, admire, or find wonderful about them.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 418,
    type: "likert",
    weight: 1,
    category: "B",
    question: "I consistently protect and prioritise time with people I love, even when life is busy.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 419,
    type: "likert",
    weight: 1,
    category: "C",
    question: "Physical affection comes naturally to me, I'm instinctively warm and tactile with people I love.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 420,
    type: "likert",
    weight: 1,
    category: "D",
    question: "I frequently take action to make a partner's life easier, handling things before they ask.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 421,
    type: "likert",
    weight: 1,
    category: "F",
    question: "Being emotionally steady and reliable is something I actively cultivate, I want people to feel safe with me.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 422,
    type: "likert",
    weight: 1,
    category: "G",
    question: "I actively encourage and invest in the growth and goals of people I love, it genuinely matters to me.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 423,
    type: "likert",
    weight: 1,
    category: "H",
    question: "I pay close attention to whether responsibilities are shared fairly, and I actively ensure they are.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 424,
    type: "likert",
    weight: 1,
    category: "E",
    question: "I put real thought into gifts and gestures, I pay attention to what people love and act on it.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },

  // ── REVERSE-SCORED ────────────────────────────────────────────────────────

  {
    id: 425,
    type: "reverse",
    weight: 1,
    category: "A",
    question: "I'm not someone who often says 'I love you' or verbalises appreciation, I'd rather show it in other ways.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 426,
    type: "reverse",
    weight: 1,
    category: "C",
    question: "I'm not particularly physically affectionate, touch isn't how I naturally express love.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 427,
    type: "reverse",
    weight: 1,
    category: "B",
    question: "I don't tend to prioritise one-on-one time specifically, I show love in other ways.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 428,
    type: "reverse",
    weight: 1,
    category: "F",
    question: "Being someone's emotional anchor isn't something I naturally gravitate toward, I express love differently.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },

  // ── PARALLEL / REWORDED REPEATS ───────────────────────────────────────────

  {
    id: 429,
    type: "forced-choice",
    weight: 2,
    question: "A partner is going through a period of self-doubt and low confidence. Your natural response is to:",
    options: [
      { letter: "A", text: "Tell them specifically what you see in them that they can't see right now." },
      { letter: "B", text: "Clear time to just be with them, no pressure, no agenda." },
      { letter: "C", text: "Be physically close, hold them, sit with them, let them feel you there." },
      { letter: "D", text: "Handle something they've been avoiding so they have one less thing to carry." },
      { letter: "E", text: "Do something small and perfectly chosen that says 'I see you.'" },
      { letter: "F", text: "Be calm and steady, the safe place they can fall apart without consequence." },
      { letter: "G", text: "Actively encourage them toward the next step and remind them of what they've already done." },
      { letter: "H", text: "Take on more of the shared load so they have space to recover." }
    ]
  },
  {
    id: 430,
    type: "forced-choice",
    weight: 2,
    question: "Thinking about the relationships where you've been most loved back, what did you give that seemed to resonate most?",
    options: [
      { letter: "A", text: "Words, I said things that made people feel truly seen and valued." },
      { letter: "B", text: "Time, I was consistently, fully present." },
      { letter: "C", text: "Touch, I was warm, close, physically affectionate." },
      { letter: "D", text: "Action, I did things that made a tangible difference." },
      { letter: "E", text: "Gestures, I remembered and acted on what mattered to them." },
      { letter: "F", text: "Safety, I was the steady, reliable thing they could count on." },
      { letter: "G", text: "Belief, I saw what they were capable of and told them." },
      { letter: "H", text: "Fairness, I made sure everything felt genuinely shared." }
    ]
  },
  {
    id: 431,
    type: "forced-choice",
    weight: 2,
    question: "If you could only give one thing in a relationship, one way of expressing love, it would be:",
    options: [
      { letter: "A", text: "Honest, specific, consistent verbal appreciation." },
      { letter: "B", text: "My full, undivided, unhurried presence." },
      { letter: "C", text: "Warm, natural, constant physical affection." },
      { letter: "D", text: "Reliable, proactive, practical help." },
      { letter: "E", text: "Thoughtful, attentive, well-chosen gestures." },
      { letter: "F", text: "Emotional steadiness, always being safe to come home to." },
      { letter: "G", text: "Genuine investment in who they're becoming." },
      { letter: "H", text: "True equality, in effort, in care, in everything." }
    ]
  },
  {
    id: 432,
    type: "forced-choice",
    weight: 2,
    question: "During a difficult season in a relationship, when things are hard between you, the love you give looks like:",
    options: [
      { letter: "A", text: "Saying more, not less, speaking love into the gap." },
      { letter: "B", text: "Staying close and present even when it's uncomfortable." },
      { letter: "C", text: "Physical warmth, reaching for them even when the distance feels hard." },
      { letter: "D", text: "Taking practical pressure off them without being asked." },
      { letter: "E", text: "A gesture that says 'I'm still choosing you.'" },
      { letter: "F", text: "Staying steady, being the calm in the difficulty." },
      { letter: "G", text: "Helping us both see what this could teach us and where we could grow." },
      { letter: "H", text: "Making sure neither of us is carrying more than our share." }
    ]
  }
];