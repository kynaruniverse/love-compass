import { Archetype, ArchetypeFlavor } from "@/types/quiz";

export const LOVE_GIVING_ARCHETYPES: Record<string, Archetype> = {
  A: {
    key: "A",
    name: "The Vocal Heart",
    tagline: "You love out loud — and the right person will need exactly that.",
    narrative: [
      "You are someone who says it. Not as performance, not as habit, but because for you, love that stays unspoken feels incomplete. You notice things about the people you care about — specific things, true things — and you say them. A compliment offered from nowhere. An 'I'm proud of you' sent for no particular reason. A detailed observation that only someone paying very close attention could have made.",
      "This is a rare quality. Many people feel appreciation deeply but carry it silently, assuming it's implied or unnecessary to say. You don't assume. You speak it into existence, and in doing so, you give people something they carry with them long after the moment has passed.",
      "The partner who will feel most loved by you is someone whose primary need is to hear it — someone who experiences verbal affirmation as the truest form of being known. Your instinct to say things aloud becomes, for the right person, a daily experience of feeling seen."
    ],
    strengths: [
      "You make people feel genuinely appreciated in a way that many partners never provide.",
      "You're emotionally articulate, which makes difficult conversations more navigable.",
      "Your love creates a verbal record — people in your life know where they stand."
    ],
    watchOuts: [
      "A partner who is quieter or more action-oriented may feel pressure to match your verbal expressiveness.",
      "Words can become habitual — make sure what you say stays specific and genuine, not automatic.",
      "Be aware that not everyone receives words the same way you give them."
    ],
    partnerNeeds: [
      "A partner whose primary love language is receiving Words of Affirmation — they'll absorb everything you give.",
      "Someone who values open, ongoing verbal communication as a core part of the relationship.",
      "A partner who won't mistake your expressiveness for neediness, but will match your openness."
    ],
    pairings: {
      bestWith: "The Affirmer (receiving) — someone who needs to hear love spoken will receive everything you give and reflect it back in kind.",
      frictionWith: "The Quiet Helper (receiving) — their primary language is action, not words, and they may not naturally meet your verbal expressiveness with the same."
    },
    tryThis: [
      "Keep specificity alive — 'I love the way you handled that today' lands deeper than 'I love you' said from habit.",
      "When a partner expresses love through action rather than words, try translating: 'when they did that, they were saying this.'"
    ]
  },

  B: {
    key: "B",
    name: "The Present One",
    tagline: "You show love by showing up — fully, every time.",
    narrative: [
      "Your love language as a giver is attention — not the distracted, half-there kind, but the real thing. When you love someone, you give them your time with both hands. You sit across from them and you're actually there. You protect the time you have together from interruption, from the pull of other things, from the slow erosion of busy lives. For you, love is a choice you make with your schedule.",
      "People who have been loved by you often describe it as rare — the feeling of actually having someone's full presence is something most people are quietly starved for, and you give it naturally. You create the kind of shared time that becomes the texture of a relationship: the unhurried evenings, the rituals, the Tuesdays that end up meaning as much as the anniversaries.",
      "The partner who will feel most loved by you is one who experiences presence as the primary signal of being chosen. When they need you to be there — fully, without agenda — you already are."
    ],
    strengths: [
      "You create deep familiarity and connection through consistent, quality presence.",
      "You make people feel chosen — not by what you say, but by where you direct your attention.",
      "Your love builds slowly and reliably into something substantial and real."
    ],
    watchOuts: [
      "If life gets busy and time becomes scarce, make sure your partner knows it's circumstantial, not a withdrawal of love.",
      "Presence doesn't always have to be scheduled or elaborate — make sure small everyday moments count too.",
      "Some partners need verbal confirmation alongside presence — presence alone may not communicate everything."
    ],
    partnerNeeds: [
      "A partner whose primary love language is Quality Time — they'll feel deeply loved by exactly what you give most naturally.",
      "Someone who values shared rituals and unhurried togetherness over grand gestures.",
      "A partner who communicates clearly about how they need you to show up, so your presence can be most meaningful."
    ],
    pairings: {
      bestWith: "The Anchor (receiving) — someone who needs consistent, undivided time will feel completely loved by your natural generosity with presence.",
      frictionWith: "The Co-Pilot (receiving) — their forward momentum and independence may make it harder to create the shared time you give most naturally."
    },
    tryThis: [
      "Name what you're giving — sometimes saying 'I'm putting my phone down because you're what matters right now' makes the presence feel even more intentional.",
      "Protect small daily rituals — a morning coffee together, an evening walk — that reinforce your commitment to presence consistently."
    ]
  },

  C: {
    key: "C",
    name: "The Warm Hand",
    tagline: "Your love is felt before it's heard.",
    narrative: [
      "You are naturally, instinctively physically warm. Touch isn't something you think about giving — it just comes out of you. A hand on someone's arm when they're talking. A hug that lasts a moment longer than expected. Moving close when you're sitting together. For you, physical closeness isn't a supplement to love, it's often the primary way it moves from inside you to the person you love.",
      "There's something quietly profound in this. In a world where people often communicate at a distance — through screens, through words, through space — you close the gap. Your love is tactile and immediate. It doesn't wait to be communicated; it arrives through the body.",
      "The partner who will feel most loved by you is one for whom touch is the clearest signal of being wanted. When they feel your hand, they feel your love. What you give without thinking is exactly what they most need to receive."
    ],
    strengths: [
      "Your physical warmth creates an immediate and ongoing sense of connection that words often can't replicate.",
      "You communicate comfort and safety through touch in moments when a partner most needs it.",
      "Your affection is continuous — not saved for special occasions, but woven through everyday life."
    ],
    watchOuts: [
      "Not everyone is equally comfortable with physical affection — always read your partner's signals and stay attuned to their comfort.",
      "During periods of emotional tension, your instinct to move toward someone physically may land differently — check in verbally too.",
      "Physical warmth is powerful, but make sure it's accompanied by emotional presence as well."
    ],
    partnerNeeds: [
      "A partner whose primary love language is Physical Touch — they'll feel continuously and deeply loved by what comes naturally to you.",
      "Someone who is comfortable with and welcoming of frequent physical affection.",
      "A partner who understands that your touch is how you speak, not just how you act."
    ],
    pairings: {
      bestWith: "The Warm Hand (receiving) — someone who primarily feels loved through touch will experience your natural affection as a continuous expression of love.",
      frictionWith: "The Verbal Spark (receiving) — someone who primarily needs words may feel that your physical warmth, while welcome, doesn't fully satisfy their need to hear it."
    },
    tryThis: [
      "Combine touch with words occasionally — a hug paired with 'I love you' creates two channels at once for partners who need both.",
      "Pay attention to the kind of touch your partner most welcomes — gentle, playful, grounding — and give that specifically."
    ]
  },

  D: {
    key: "D",
    name: "The Quiet Helper",
    tagline: "Your love shows in what you do before you're asked.",
    narrative: [
      "Love, for you, is a verb. You show it through action — handling things, solving problems, making life easier for the people you care about. Not because you've been asked to. Not because you need credit for it. But because seeing a partner's load lightened, a difficulty smoothed over, a problem removed — that's what feels like love to you, and that's what you give.",
      "There's a particular quality to this kind of love that is often undervalued and rarely named. It's the dinner already made when someone comes home stressed. The errand run without mention. The thing that needed doing, done. Your love is practical and real and it shows up in the texture of daily life rather than in grand declarations.",
      "The partner who will feel most loved by you is one for whom action is the clearest signal of care. They feel loved not through what you say or how close you sit, but through the quiet, consistent evidence that you were thinking about them — and acted on it."
    ],
    strengths: [
      "Your love is tangible and reliable — it shows up in ways that genuinely improve a partner's life.",
      "You're proactive — you anticipate needs and act on them, which creates a profound sense of being cared for.",
      "Your love is consistent rather than dramatic — it's the kind that sustains a relationship over years."
    ],
    watchOuts: [
      "Acts of service can go unnoticed if a partner's love language is different — make sure you communicate your love through their language too.",
      "Be careful not to express love exclusively through doing, without verbal or emotional accompaniment — especially in conflict.",
      "You may feel unappreciated if your actions aren't acknowledged — try naming what you're giving occasionally."
    ],
    partnerNeeds: [
      "A partner whose primary love language is Acts of Service — they'll feel the depth of your care in everything you do.",
      "Someone who notices and appreciates practical help as an expression of love, not just a practical task.",
      "A partner who expresses gratitude for what you do, so your efforts feel received and valued."
    ],
    pairings: {
      bestWith: "The Steady Doer (receiving) — someone who feels most loved when a partner takes action will feel completely cared for by your natural instincts.",
      frictionWith: "The Affirmer (receiving) — someone who primarily needs verbal affirmation may not fully receive your action-based love without translation."
    },
    tryThis: [
      "Occasionally name what you're doing and why — 'I handled that because I wanted you to have one less thing to think about' — so the love behind the action lands clearly.",
      "Ask your partner directly what would most help them right now — your instincts are good, but their answer is better."
    ]
  },

  E: {
    key: "E",
    name: "The Thoughtful Curator",
    tagline: "You love through attention made visible.",
    narrative: [
      "You pay attention in a way that most people don't. You remember what someone mentioned wanting three months ago. You notice what lights someone up. You see what they'd never buy for themselves but would love to have. And then, quietly, you act on it — a gift, a gesture, a token that says 'I was listening.' For you, love is demonstrated through specificity: not a generic expression of care, but something uniquely theirs.",
      "The gift itself isn't really the point. What the gift carries is the point — the evidence of attention, the proof of knowing. Anyone can give something. You give the right thing, and that's a different act entirely.",
      "The partner who will feel most loved by you is one who experiences receiving as a signal of being truly seen. Not the size or price of what you give, but the accuracy — the way it could only have come from someone who was really, genuinely paying attention to them."
    ],
    strengths: [
      "Your gifts and gestures communicate a depth of attention that most partners never experience.",
      "You make people feel uniquely known — not generally cared for, but specifically seen.",
      "Your love accumulates over time through a record of gestures that say 'I remember who you are.'"
    ],
    watchOuts: [
      "A partner whose primary language isn't gifts may not feel loved by gestures the same way you intend them — check in.",
      "The effort behind your gestures can go invisible — sometimes expressing what it meant to you makes the gesture land even more.",
      "Don't substitute thoughtful gestures for direct emotional presence or communication."
    ],
    partnerNeeds: [
      "A partner whose primary love language is Receiving Gifts — they'll feel completely seen by exactly what you give most naturally.",
      "Someone who pays attention to and values the thoughtfulness behind a gesture, not just its face value.",
      "A partner who reciprocates in ways that show they've been paying attention to you too."
    ],
    pairings: {
      bestWith: "The Thoughtful Receiver (receiving) — someone who experiences gifts as proof of knowing will receive your love exactly as you intend it.",
      frictionWith: "The Steady Doer (receiving) — someone who primarily feels loved through action may appreciate your gestures but still feel something missing."
    },
    tryThis: [
      "Pair your gesture with words about why — 'I saw this and thought of you because...' amplifies the love it carries.",
      "Ask your partner occasionally what they've been wanting or thinking about — your instincts are strong, but an update keeps them sharp."
    ]
  },

  F: {
    key: "F",
    name: "The Steady Anchor",
    tagline: "You love by becoming someone's safest place.",
    narrative: [
      "You are consistent. Reliable. The same person on a hard day as you are on an easy one. When the people you love are anxious, struggling, or uncertain, they know where to find you — not because you've promised anything, but because you've shown up the same way, every time, for as long as they've known you. Your love looks like steadiness, and steadiness is rarer than most people know.",
      "You don't love loudly or dramatically. You love through constancy. Through the text message replied to at 11pm. The argument navigated without anyone leaving. The quiet reassurance that comes not from words but from the evidence of who you've always been. For you, the deepest expression of love is creating a place someone can be completely themselves — because you're not going anywhere.",
      "The partner who will feel most loved by you is one who needs, above all else, to feel safe. Whose anxiety is quieted by reliability. Who needs to know the ground beneath them is solid before they can be fully present. You are that ground — and for the right person, that is everything."
    ],
    strengths: [
      "You create genuine emotional safety — a partner can bring their full, unfiltered self to you.",
      "Your consistency means love is never uncertain or conditional — it just is.",
      "You're a stabilising force that allows a partner to take risks, grow, and flourish."
    ],
    watchOuts: [
      "Steadiness can sometimes read as emotional flatness — make sure your partner knows your constancy is love, not indifference.",
      "Make sure your stability doesn't mean absorbing more than your share — safety goes both ways.",
      "Being the anchor can be exhausting over time — invest in your own emotional support too."
    ],
    partnerNeeds: [
      "A partner whose primary love language is Emotional Security — they'll feel completely loved by the safety you create.",
      "Someone who can distinguish between emotional steadiness and emotional unavailability — your love is deep, just quiet.",
      "A partner who also creates safety for you — not just receives it from you."
    ],
    pairings: {
      bestWith: "The Safe Harbour (receiving) — someone who needs emotional safety above all else will feel completely held by your natural steadiness.",
      frictionWith: "The Vocal Heart (receiving) — someone who primarily needs verbal affirmation may find your quiet, steady love doesn't fully land without more explicit expression."
    },
    tryThis: [
      "Occasionally name your steadiness — 'I'm not going anywhere' or 'you can bring me anything' makes your constancy visible rather than assumed.",
      "Check in emotionally even during calm periods — safety includes knowing you're paying attention, not just being there."
    ]
  },

  G: {
    key: "G",
    name: "The Co-Pilot",
    tagline: "You love by believing in someone harder than they believe in themselves.",
    narrative: [
      "When you love someone, you invest in who they're becoming. You see their potential — sometimes before they do — and you hold it for them. You ask about their goals. You remember what they said they wanted and bring it back up. You celebrate progress that they've already moved past. You push, gently but consistently, toward the version of them they're still reaching for.",
      "This is a particular kind of love that goes beyond affection or companionship. It's a belief made active. A relationship with you doesn't just feel safe or warm or comfortable — it feels like it's going somewhere. Like you're both pointed at something bigger than where you started.",
      "The partner who will feel most loved by you is one whose deepest need is to feel supported in their growth. Who lights up when they feel seen not just as they are, but as they could be. For them, your belief in their potential is the most intimate thing you could offer."
    ],
    strengths: [
      "You help people become more than they were — your love is actively developmental.",
      "You create a sense of shared forward motion in a relationship, which keeps it alive and purposeful.",
      "You remember and honour what matters to a partner's growth, which makes them feel consistently seen."
    ],
    watchOuts: [
      "Be careful not to push toward your vision of who someone should become — make sure you're supporting their goals, not your version of their goals.",
      "A partner who needs rest, not momentum, right now may experience your encouragement as pressure.",
      "Love the person as they are today, not only for the person you believe they're becoming."
    ],
    partnerNeeds: [
      "A partner whose primary love language is Shared Growth — they'll feel most loved when you invest in who they're becoming.",
      "Someone ambitious, curious, or in active development who wants a partner who grows alongside them.",
      "A partner who gives the same investment back — who believes in your growth as much as you believe in theirs."
    ],
    pairings: {
      bestWith: "The Rising One (receiving) — someone who feels most loved when a partner supports their development will feel completely seen by your natural investment in their growth.",
      frictionWith: "The Safe Harbour (receiving) — someone whose primary need is emotional stability may experience your forward-focused energy as unsettling rather than loving."
    },
    tryThis: [
      "Ask 'what would be most helpful right now — encouragement or just someone to listen?' so your investment lands the way it's needed.",
      "Celebrate who they are today, not just who they're becoming — make sure they feel loved in the present tense."
    ]
  },

  H: {
    key: "H",
    name: "The Equal Partner",
    tagline: "You love by making sure nothing is carried alone.",
    narrative: [
      "For you, love is not a feeling that lives separately from the practical reality of a shared life. It shows in who does what. In whether the weight is distributed fairly. In whether one person carries more than their share — and you won't let that happen. You show up for the planning, the logistics, the things nobody wants to do. Not because you have to. Because you believe that love, at its most real, is demonstrated through fairness.",
      "This is not a small thing. The mental load of a relationship — the thinking, the managing, the anticipating — is invisible work that falls unevenly in most partnerships. You notice it, name it, and actively correct it. Your love looks like equality made real, and for the partner who feels the weight of imbalance most acutely, what you give is relief of a very deep kind.",
      "The partner who will feel most loved by you is one who has spent time in relationships where they carried too much. Who knows exactly what it feels like when the load is uneven — and who will feel, with you, what it's like when it isn't."
    ],
    strengths: [
      "You create true partnership — your love makes a shared life feel genuinely shared.",
      "You notice and act on imbalance before it becomes resentment — your fairness is proactive.",
      "Your love is sustainable — equality means neither of you is depleted by the relationship."
    ],
    watchOuts: [
      "Be careful not to turn fairness into scorekeeping — love given from a ledger stops feeling like love.",
      "A partner who doesn't naturally think in terms of balance may need guidance rather than judgment about what equal looks like.",
      "Make sure your focus on fairness includes emotional labour, not just practical tasks."
    ],
    partnerNeeds: [
      "A partner whose primary love language is Shared Mental Load — they'll feel most loved when the weight is genuinely equal.",
      "Someone who values fairness and partnership, and who actively participates rather than passively receives.",
      "A partner who notices and appreciates your investment in balance, so your effort feels seen."
    ],
    pairings: {
      bestWith: "The Load-Sharer (receiving) — someone who feels most loved when responsibilities are genuinely equal will feel completely respected and cared for by you.",
      frictionWith: "The Thoughtful Curator (receiving) — someone who primarily experiences love through gifts and gestures may not feel that your fairness, while valued, speaks their primary language."
    },
    tryThis: [
      "Name the fairness explicitly sometimes — 'I want this to feel equally shared, so let me know if it ever doesn't' keeps the conversation open.",
      "Ask about emotional labour specifically — 'what am I not seeing that you're carrying?' — since invisible work is the hardest to share fairly."
    ]
  }
};

export const LOVE_GIVING_FLAVORS: Record<string, ArchetypeFlavor> = {
  A: { key: "A", blurb: "Woven through this, you also express love verbally — saying what you feel and what you appreciate comes naturally alongside your primary way of giving." },
  B: { key: "B", blurb: "Alongside this, presence is part of how you give — you protect time and show up fully for the people you love." },
  C: { key: "C", blurb: "Running through this is a natural physical warmth — touch and closeness come instinctively as part of how you love." },
  D: { key: "D", blurb: "Alongside this, you show love through action — doing things proactively and practically is a strong secondary thread in how you give." },
  E: { key: "E", blurb: "Woven in is thoughtful attention — you notice what people love and act on it, giving gestures that carry the evidence of real knowing." },
  F: { key: "F", blurb: "Running alongside this is a deep steadiness — you love by being reliable, consistent, and emotionally available." },
  G: { key: "G", blurb: "Alongside your primary way of giving, you invest in growth — you believe in people actively and show it." },
  H: { key: "H", blurb: "Woven through this is a commitment to equality — you ensure the load is shared and that love feels genuinely mutual." }
};