import { QuizQuestion } from "@/types/quiz";

/**
 * Hybrid assessment — unified question bank that probes love AND intimacy
 * simultaneously. Questions are written to reveal how emotional and physical
 * needs intersect rather than treating them as separate domains.
 */
export const hybridQuestions: QuizQuestion[] = [

  // ── FORCED-CHOICE (weight 1) ──────────────────────────────────────────────

  {
    id: 301,
    type: "forced-choice",
    weight: 1,
    question: "When I feel truly close to a partner, it is usually because:",
    options: [
      { letter: "A", text: "They express love and desire through words." },
      { letter: "B", text: "We spend unhurried, focused time together." },
      { letter: "C", text: "There is natural, warm physical closeness between us." },
      { letter: "D", text: "They show love through action — helping, doing, being reliable." },
      { letter: "E", text: "They give thoughtful gestures that show they see me." },
      { letter: "F", text: "I feel emotionally safe enough to be completely myself." },
      { letter: "G", text: "They support who I am and who I am becoming." },
      { letter: "H", text: "We share the weight of life equally." }
    ]
  },
  {
    id: 302,
    type: "forced-choice",
    weight: 1,
    question: "The moment I feel most wanted by a partner is when:",
    options: [
      { letter: "A", text: "They say it — clearly, specifically, out loud." },
      { letter: "B", text: "They give me their complete attention." },
      { letter: "C", text: "They reach for me physically." },
      { letter: "D", text: "They do something for me without being asked." },
      { letter: "E", text: "They choose something — a gesture, a gift — just for me." },
      { letter: "F", text: "They make me feel completely secure." },
      { letter: "G", text: "They show genuine belief in me." },
      { letter: "H", text: "They show up as a true equal." }
    ]
  },
  {
    id: 303,
    type: "forced-choice",
    weight: 2,
    question: "After a hard week, what I need most from a partner is:",
    options: [
      { letter: "A", text: "To hear that I am loved, valued, and doing okay." },
      { letter: "B", text: "Their presence — calm, close, unhurried." },
      { letter: "C", text: "Physical comfort — being held, closeness." },
      { letter: "D", text: "Them handling something so I can rest." },
      { letter: "E", text: "A small gesture that shows they were thinking of me." },
      { letter: "F", text: "Emotional steadiness — knowing we are okay." },
      { letter: "G", text: "Encouragement — someone who believes in me." },
      { letter: "H", text: "Them carrying more of the shared load." }
    ]
  },
  {
    id: 304,
    type: "forced-choice",
    weight: 1,
    question: "In both love and intimacy, what I need most is:",
    options: [
      { letter: "A", text: "Clear verbal expression of desire and appreciation." },
      { letter: "B", text: "Presence — fully there, not half-distracted." },
      { letter: "C", text: "Physical warmth and closeness." },
      { letter: "D", text: "A partner who acts — reliable, helpful, consistent." },
      { letter: "E", text: "Thoughtfulness — gestures that show I am seen." },
      { letter: "F", text: "Safety — emotional and physical." },
      { letter: "G", text: "Growth — a partner who builds me up." },
      { letter: "H", text: "Equality — a relationship that feels genuinely shared." }
    ]
  },
  {
    id: 305,
    type: "forced-choice",
    weight: 1,
    question: "The kind of partner attention that means the most to me is:",
    options: [
      { letter: "A", text: "Being told — with words — how they feel about me." },
      { letter: "B", text: "Being given time that is just ours." },
      { letter: "C", text: "Being touched warmly and often." },
      { letter: "D", text: "Having things done for me before I ask." },
      { letter: "E", text: "Being remembered — gifts, occasions, details." },
      { letter: "F", text: "Being made to feel safe." },
      { letter: "G", text: "Being encouraged and believed in." },
      { letter: "H", text: "Being treated as a true equal partner." }
    ]
  },
  {
    id: 306,
    type: "forced-choice",
    weight: 2,
    question: "When I feel disconnected from a partner — emotionally or physically — what brings me back is:",
    options: [
      { letter: "A", text: "An honest conversation where they express how they feel." },
      { letter: "B", text: "Time — slow, close, just the two of us." },
      { letter: "C", text: "Physical reconnection — a hug, closeness." },
      { letter: "D", text: "Them doing something that shows they care." },
      { letter: "E", text: "A meaningful gesture." },
      { letter: "F", text: "Reassurance that we are emotionally okay." },
      { letter: "G", text: "Them showing they believe in us and in me." },
      { letter: "H", text: "Both of us actively choosing to reconnect equally." }
    ]
  },
  {
    id: 307,
    type: "forced-choice",
    weight: 1,
    question: "I feel most secure in a relationship when:",
    options: [
      { letter: "A", text: "Love and desire are spoken, not just assumed." },
      { letter: "B", text: "We consistently make time for each other." },
      { letter: "C", text: "There is regular physical affection." },
      { letter: "D", text: "My partner is dependable in everyday action." },
      { letter: "E", text: "My partner remembers and marks what matters to me." },
      { letter: "F", text: "I feel emotionally safe at all times." },
      { letter: "G", text: "My partner supports my growth and confidence." },
      { letter: "H", text: "Responsibilities are shared without keeping score." }
    ]
  },
  {
    id: 308,
    type: "forced-choice",
    weight: 1,
    question: "What signals real love and desire to me is:",
    options: [
      { letter: "A", text: "Being told — specifically and often." },
      { letter: "B", text: "Being chosen with someone's time." },
      { letter: "C", text: "Being touched with warmth and intention." },
      { letter: "D", text: "Being shown through consistent helpful action." },
      { letter: "E", text: "Being remembered in small, thoughtful ways." },
      { letter: "F", text: "Being made to feel completely safe." },
      { letter: "G", text: "Being believed in and supported." },
      { letter: "H", text: "Being treated as an equal in every sense." }
    ]
  },
  {
    id: 309,
    type: "forced-choice",
    weight: 2,
    question: "Think about the most loved and desired you have ever felt in a relationship. What was the main reason?",
    options: [
      { letter: "A", text: "They said it — often, sincerely, and specifically." },
      { letter: "B", text: "They were always present and gave me their full attention." },
      { letter: "C", text: "There was a lot of natural warmth and physical closeness." },
      { letter: "D", text: "They showed up consistently through action." },
      { letter: "E", text: "They remembered and marked things that mattered to me." },
      { letter: "F", text: "I felt completely emotionally safe with them." },
      { letter: "G", text: "They believed in me and helped me grow." },
      { letter: "H", text: "Everything felt genuinely shared and equal." }
    ]
  },
  {
    id: 310,
    type: "forced-choice",
    weight: 1,
    question: "In a relationship, the thing I would notice first if it were missing is:",
    options: [
      { letter: "A", text: "Verbal affection and appreciation." },
      { letter: "B", text: "Quality time and presence." },
      { letter: "C", text: "Physical warmth and closeness." },
      { letter: "D", text: "Practical support and reliability." },
      { letter: "E", text: "Thoughtful gestures and gifts." },
      { letter: "F", text: "Emotional safety and steadiness." },
      { letter: "G", text: "Support for my growth and confidence." },
      { letter: "H", text: "Shared responsibility and equality." }
    ]
  },
  {
    id: 311,
    type: "forced-choice",
    weight: 1,
    question: "What makes intimacy feel like an extension of love for me is:",
    options: [
      { letter: "A", text: "Words — desire spoken clearly during and outside it." },
      { letter: "B", text: "Presence — being fully there, unhurried." },
      { letter: "C", text: "Touch — warm, deliberate, connected." },
      { letter: "D", text: "Action — a partner who shows up consistently." },
      { letter: "E", text: "Thoughtfulness — they pay attention to what I like." },
      { letter: "F", text: "Safety — I feel trusted and emotionally grounded." },
      { letter: "G", text: "Confidence — they make me feel good about myself." },
      { letter: "H", text: "Equality — both of us fully invested." }
    ]
  },
  {
    id: 312,
    type: "forced-choice",
    weight: 2,
    question: "If a partner wanted to show they loved and desired me at the same time, the most powerful thing they could do is:",
    options: [
      { letter: "A", text: "Tell me exactly what they feel and find attractive about me." },
      { letter: "B", text: "Clear their schedule and spend the whole day with me." },
      { letter: "C", text: "Be physically close and affectionate throughout the day." },
      { letter: "D", text: "Quietly handle everything so I could be fully present." },
      { letter: "E", text: "Give me something that shows they really know me." },
      { letter: "F", text: "Create an environment where I feel completely safe and wanted." },
      { letter: "G", text: "Do something that makes me feel confident and celebrated." },
      { letter: "H", text: "Show up as a full equal — in effort, attention, and care." }
    ]
  },
  {
    id: 313,
    type: "forced-choice",
    weight: 1,
    question: "The thing that makes a relationship feel truly intimate — beyond the physical — is:",
    options: [
      { letter: "A", text: "Honest verbal expression of how we feel." },
      { letter: "B", text: "Time that is protected and fully shared." },
      { letter: "C", text: "Consistent warmth and physical closeness." },
      { letter: "D", text: "A partner who reliably shows up through action." },
      { letter: "E", text: "Small gestures that show deep attention." },
      { letter: "F", text: "A sense of total emotional safety." },
      { letter: "G", text: "A partner who champions my growth." },
      { letter: "H", text: "A relationship where everything feels balanced." }
    ]
  },
  {
    id: 314,
    type: "forced-choice",
    weight: 1,
    question: "When I imagine a relationship that perfectly meets my needs, what stands out most is:",
    options: [
      { letter: "A", text: "Open, warm verbal communication about love and desire." },
      { letter: "B", text: "Rich, unhurried time together." },
      { letter: "C", text: "A lot of natural physical warmth and closeness." },
      { letter: "D", text: "A partner who is quietly, consistently helpful." },
      { letter: "E", text: "Thoughtful gestures that show I am truly known." },
      { letter: "F", text: "Deep emotional safety and trust." },
      { letter: "G", text: "Mutual growth and genuine encouragement." },
      { letter: "H", text: "True equality in every part of life." }
    ]
  },
  {
    id: 315,
    type: "forced-choice",
    weight: 1,
    question: "When I feel taken for granted — in love or in intimacy — it is usually because:",
    options: [
      { letter: "A", text: "My partner stopped expressing appreciation verbally." },
      { letter: "B", text: "They stopped prioritizing time with me." },
      { letter: "C", text: "Physical affection became rare or absent." },
      { letter: "D", text: "They stopped helping or showing up in practical ways." },
      { letter: "E", text: "They stopped making thoughtful gestures." },
      { letter: "F", text: "I no longer felt emotionally safe or seen." },
      { letter: "G", text: "They stopped supporting my growth or confidence." },
      { letter: "H", text: "The balance of effort became unequal." }
    ]
  },
  {
    id: 316,
    type: "forced-choice",
    weight: 2,
    question: "On a day when everything has gone wrong, the single thing a partner could do that would mean the most is:",
    options: [
      { letter: "A", text: "Tell me they love me and that I'm going to be okay." },
      { letter: "B", text: "Put their phone down and just be with me." },
      { letter: "C", text: "Hold me." },
      { letter: "D", text: "Fix or handle the one thing causing me the most stress." },
      { letter: "E", text: "Show up with something small but perfectly chosen." },
      { letter: "F", text: "Sit with me and make me feel completely safe." },
      { letter: "G", text: "Remind me of my strength and what I'm capable of." },
      { letter: "H", text: "Take on more than their share without being asked." }
    ]
  },
  {
    id: 317,
    type: "forced-choice",
    weight: 1,
    question: "A partner who makes me feel both loved and desired is one who:",
    options: [
      { letter: "A", text: "Tells me how they feel regularly and specifically." },
      { letter: "B", text: "Gives me consistent, focused time and presence." },
      { letter: "C", text: "Is physically affectionate in and out of the bedroom." },
      { letter: "D", text: "Reliably shows care through action." },
      { letter: "E", text: "Remembers what matters to me and acts on it." },
      { letter: "F", text: "Makes me feel safe in every sense." },
      { letter: "G", text: "Builds my confidence and supports my growth." },
      { letter: "H", text: "Treats every part of our life together as shared." }
    ]
  },
  {
    id: 318,
    type: "forced-choice",
    weight: 1,
    question: "What I find hardest to go without in a relationship is:",
    options: [
      { letter: "A", text: "Verbal love and desire." },
      { letter: "B", text: "Quality time and real presence." },
      { letter: "C", text: "Physical affection and closeness." },
      { letter: "D", text: "Practical help and reliability." },
      { letter: "E", text: "Thoughtful gestures and being remembered." },
      { letter: "F", text: "Emotional safety and consistency." },
      { letter: "G", text: "Being believed in and supported in my growth." },
      { letter: "H", text: "True equality and shared effort." }
    ]
  },
  {
    id: 319,
    type: "forced-choice",
    weight: 1,
    question: "The way I prefer a partner to initiate — whether emotionally or physically — is:",
    options: [
      { letter: "A", text: "With words — clear, warm, specific." },
      { letter: "B", text: "By creating space — time set aside just for us." },
      { letter: "C", text: "Through touch — a hand, closeness, warmth." },
      { letter: "D", text: "Through action — doing something that shows they care." },
      { letter: "E", text: "Through a gesture — something chosen just for me." },
      { letter: "F", text: "By creating safety — making sure I feel secure first." },
      { letter: "G", text: "By lifting me up — making me feel confident." },
      { letter: "H", text: "By meeting me equally — matching my energy and effort." }
    ]
  },
  {
    id: 320,
    type: "forced-choice",
    weight: 2,
    question: "If you could only keep one thing from a relationship — one way of being loved — what would it be?",
    options: [
      { letter: "A", text: "Being told, in words, that I am loved and wanted." },
      { letter: "B", text: "Having someone's time and full presence." },
      { letter: "C", text: "Being held and touched with warmth." },
      { letter: "D", text: "Having someone show up for me in action." },
      { letter: "E", text: "Being truly seen through thoughtful gestures." },
      { letter: "F", text: "Feeling completely emotionally safe." },
      { letter: "G", text: "Being believed in and helped to grow." },
      { letter: "H", text: "Having a relationship that feels genuinely equal." }
    ]
  },

  // ── LIKERT — rate 1-5 how much this resonates ─────────────────────────────

  {
    id: 321,
    type: "likert",
    weight: 1,
    category: "A",
    question: "When a partner expresses love and desire verbally — during everyday moments and during intimacy — I feel far more connected than through any other means.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 322,
    type: "likert",
    weight: 1,
    category: "F",
    question: "I find it almost impossible to feel truly close — emotionally or physically — unless I feel emotionally safe with my partner first.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 323,
    type: "likert",
    weight: 1,
    category: "C",
    question: "Physical closeness — holding, touching, being near — is how I feel most loved and most connected, in and out of intimate moments.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 324,
    type: "likert",
    weight: 1,
    category: "H",
    question: "A relationship where one partner carries more of the mental load or emotional labor feels fundamentally unloving to me, regardless of other gestures.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 325,
    type: "likert",
    weight: 1,
    category: "G",
    question: "A partner who actively supports my confidence, ambitions, and growth makes me feel loved and desired in a way nothing else quite matches.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 326,
    type: "likert",
    weight: 1,
    category: "B",
    question: "Undistracted, unhurried time with a partner — where I have their full presence — is one of the most important things a relationship can offer me.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 327,
    type: "likert",
    weight: 1,
    category: "D",
    question: "When a partner quietly handles things — helps without being asked, shows up reliably — I feel more loved than I do from words or gestures alone.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 328,
    type: "likert",
    weight: 1,
    category: "E",
    question: "A carefully chosen gift or gesture — one that shows my partner truly pays attention to who I am — moves me deeply, even if it costs very little.",
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
    id: 329,
    type: "reverse",
    weight: 1,
    category: "A",
    question: "I don't need a partner to say 'I love you' or express desire in words — what they do is enough for me.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 330,
    type: "reverse",
    weight: 1,
    category: "F",
    question: "I am comfortable with emotional uncertainty in a relationship — I don't need constant reassurance to feel secure.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 331,
    type: "reverse",
    weight: 1,
    category: "B",
    question: "I don't need a lot of one-on-one time to feel close — I feel connected even when we spend time apart or with others.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  },
  {
    id: 332,
    type: "reverse",
    weight: 1,
    category: "C",
    question: "Physical affection isn't something I need a lot of — I feel just as close to a partner without it.",
    options: [
      { letter: "A", text: "Not at all like me" },
      { letter: "B", text: "Slightly like me" },
      { letter: "C", text: "Moderately like me" },
      { letter: "D", text: "Quite a lot like me" },
      { letter: "E", text: "Exactly like me" }
    ]
  }
];