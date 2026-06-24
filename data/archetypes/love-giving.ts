import { Archetype, ArchetypeFlavor } from "@/types/quiz";

export const LOVE_GIVING_ARCHETYPES: Record<string, Archetype> = {
  A: {
    key: "A",
    name: "The Vocal Heart",
    tagline: "You love out loud, and the right person will need exactly that.",
    narrative: [
      "You say it. Not as performance, not out of habit, but because love that stays unspoken feels incomplete to you. You notice specific, true things about the people you care about, and you say them. A compliment offered from nowhere. An 'I'm proud of you' sent for no particular reason. An observation only someone paying very close attention could have made.",
      "You speak love into existence rather than assuming it's implied, and people carry what you say long after the moment has passed.",
      "The partner who feels most loved by you is someone who needs to hear it: who experiences verbal affirmation as the truest form of being known. Your instinct to say things aloud becomes, for the right person, a daily experience of feeling seen."
    ],
    strengths: [
      "You make people feel genuinely appreciated in a way many partners never provide.",
      "You're emotionally articulate, which makes hard conversations easier to navigate.",
      "Your love leaves a verbal record. People in your life know exactly where they stand."
    ],
    watchOuts: [
      "A quieter or more action-oriented partner may feel pressure to match your verbal expressiveness.",
      "Words can become habitual. Keep what you say specific and genuine, not automatic.",
      "Not everyone receives words the way you give them. Stay aware of that gap."
    ],
    partnerNeeds: [
      "A partner whose primary love language is words of affirmation. They'll absorb everything you give.",
      "Someone who values open, ongoing verbal communication as a core part of the relationship.",
      "A partner who won't mistake your expressiveness for neediness, but matches your openness."
    ],
    pairings: {
      bestWith: "The Verbal Heart. Someone who needs to hear love spoken will receive everything you give and reflect it straight back.",
      frictionWith: "The One Who Acts. Their primary language is action, not words, and they may not naturally meet your verbal expressiveness with the same."
    },
    tryThis: [
      "Keep specificity alive. 'I love the way you handled that today' lands deeper than 'I love you' said from habit.",
      "When a partner expresses love through action rather than words, translate it out loud: 'when they did that, they were saying this.'"
    ]
  },

  B: {
    key: "B",
    name: "The Present One",
    tagline: "You show love by showing up. Fully, every time.",
    narrative: [
      "Your love language as a giver is attention, the real kind, not the distracted half-there version. When you love someone, you give them your time with both hands. You sit across from them and you're actually there. You protect that time from interruption, from the pull of other things, from the slow erosion of a busy life. For you, love is a choice you make with your schedule.",
      "People loved by you often describe it as rare. Full presence is something most people are quietly starved for, and you give it naturally. You build the kind of shared time that becomes the texture of a relationship: unhurried evenings, rituals, the Tuesdays that end up mattering as much as the anniversaries.",
      "The partner who feels most loved by you is one who reads presence as the primary signal of being chosen. When they need you fully there, without agenda, you already are."
    ],
    strengths: [
      "You build deep familiarity through consistent, real presence.",
      "You make people feel chosen, not by what you say, but by where you put your attention.",
      "Your love builds slowly and reliably into something substantial."
    ],
    watchOuts: [
      "If life gets busy and time turns scarce, make sure your partner knows it's circumstance, not a withdrawal of love.",
      "Presence doesn't need to be scheduled or elaborate. Let small everyday moments count too.",
      "Some partners need verbal confirmation alongside presence. Presence alone may not say everything."
    ],
    partnerNeeds: [
      "A partner whose primary love language is quality time. They'll feel deeply loved by exactly what comes naturally to you.",
      "Someone who values shared rituals and unhurried togetherness over grand gestures.",
      "A partner who tells you clearly how they need you to show up, so your presence lands where it matters."
    ],
    pairings: {
      bestWith: "The Chosen One. Someone who needs consistent, undivided time will feel completely loved by your natural generosity with presence.",
      frictionWith: "The Growth Partner. Their forward momentum and independence can make it harder to build the shared time you give most naturally."
    },
    tryThis: [
      "Name what you're giving. Saying 'I'm putting my phone down because you're what matters right now' makes the presence feel even more intentional.",
      "Protect small daily rituals, a morning coffee, an evening walk, that reinforce presence consistently rather than occasionally."
    ]
  },

  C: {
    key: "C",
    name: "The Reaching Hand",
    tagline: "Physical affection is your first language.",
    narrative: [
      "You're instinctively physically warm. Touch isn't something you think about giving, it just happens: a hand on someone's arm mid-conversation, a hug that lasts a beat longer than expected, moving closer when you're sitting together. For you, physical closeness isn't a supplement to love, it's often the primary way it moves from you to the person you love.",
      "In a world where people often connect at a distance, through screens, through words, through space, you close the gap. Your love is tactile and immediate. It doesn't wait to be communicated, it arrives through the body.",
      "The partner who feels most loved by you is one for whom touch is the clearest signal of being wanted. When they feel your hand, they feel your love. What you give without thinking is exactly what they need to receive."
    ],
    strengths: [
      "Your physical warmth creates an immediate, ongoing connection that words often can't replicate.",
      "You communicate comfort and safety through touch at exactly the moments a partner needs it most.",
      "Your affection is continuous, woven through everyday life, not saved for special occasions."
    ],
    watchOuts: [
      "Not everyone is equally comfortable with physical affection. Read your partner's signals and stay attuned to their comfort.",
      "During emotional tension, your instinct to move toward someone physically may land differently. Check in verbally too.",
      "Physical warmth is powerful, but pair it with emotional presence, not instead of it."
    ],
    partnerNeeds: [
      "A partner whose primary love language is physical touch. They'll feel continuously and deeply loved by what comes naturally to you.",
      "Someone genuinely comfortable with and welcoming of frequent physical affection.",
      "A partner who understands your touch is how you speak, not just how you act."
    ],
    pairings: {
      bestWith: "The Somatic Lover. Someone who primarily feels loved through touch will experience your natural reaching affection as a continuous expression of love.",
      frictionWith: "The Verbal Heart. Someone who primarily needs words may find your physical warmth welcome, but not quite enough on its own."
    },
    tryThis: [
      "Combine touch with words occasionally. A hug paired with 'I love you' creates two channels at once for partners who need both.",
      "Pay attention to the kind of touch your partner most welcomes, gentle, playful, grounding, and give that specifically."
    ]
  },

  D: {
    key: "D",
    name: "The Quiet Helper",
    tagline: "Your love shows in what you do before you're asked.",
    narrative: [
      "Love, for you, is a verb. You show it through action: handling things, solving problems, making life easier for the people you care about. Not because you've been asked, not for credit, but because a partner's load lightened, a difficulty smoothed over, a problem removed, that's what love feels like to you, so that's what you give.",
      "It's the dinner already made when someone comes home stressed. The errand run without mention. The thing that needed doing, done. Your love is practical and real, and it lives in the texture of daily life rather than in grand declarations.",
      "The partner who feels most loved by you is one for whom action is the clearest signal of care. They feel loved not through what you say or how close you sit, but through the quiet, consistent evidence that you were thinking about them and acted on it."
    ],
    strengths: [
      "Your love is tangible and reliable. It shows up in ways that genuinely improve a partner's life.",
      "You're proactive. You anticipate needs and act on them, which creates a real sense of being cared for.",
      "Your love is consistent rather than dramatic, the kind that sustains a relationship over years."
    ],
    watchOuts: [
      "Acts of service can go unnoticed if a partner's love language is different. Find a way to also speak theirs.",
      "Don't express love exclusively through doing, with no verbal or emotional accompaniment, especially in conflict.",
      "You may feel unappreciated if your actions go unacknowledged. Name what you're giving occasionally."
    ],
    partnerNeeds: [
      "A partner whose primary love language is acts of service. They'll feel the depth of your care in everything you do.",
      "Someone who reads practical help as an expression of love, not just a task completed.",
      "A partner who voices gratitude for what you do, so your effort feels received."
    ],
    pairings: {
      bestWith: "The One Who Acts. Someone who feels most loved when a partner takes action will feel completely cared for by your natural instincts.",
      frictionWith: "The Verbal Heart. Someone who primarily needs verbal affirmation may not fully receive your action-based love without translation."
    },
    tryThis: [
      "Occasionally name what you're doing and why. 'I handled that because I wanted you to have one less thing to think about' helps the love behind the action land clearly.",
      "Ask your partner directly what would most help them right now. Your instincts are good, but their answer is better."
    ]
  },

  E: {
    key: "E",
    name: "The Thoughtful Curator",
    tagline: "You love through attention made visible.",
    narrative: [
      "You pay attention in a way most people don't. You remember what someone mentioned wanting three months ago. You notice what lights someone up, what they'd never buy for themselves but would love to have. Then, quietly, you act on it: a gift, a gesture, something that says 'I was listening.' For you, love is demonstrated through specificity, not a generic gesture of care, but something uniquely theirs.",
      "The gift itself isn't really the point. What it carries is the point: proof of attention, evidence of knowing. Anyone can give something. You give the right thing, and that's a different act entirely.",
      "The partner who feels most loved by you is one who reads receiving as a signal of being truly seen. Not the size or price of what you give, but the accuracy, the way it could only have come from someone genuinely paying attention to them."
    ],
    strengths: [
      "Your gifts and gestures communicate a depth of attention most partners never experience.",
      "You make people feel uniquely known, not generally cared for, but specifically seen.",
      "Your love accumulates over time through a record of gestures that say 'I remember who you are.'"
    ],
    watchOuts: [
      "A partner whose primary language isn't gifts may not feel loved by gestures the way you intend. Check in.",
      "The effort behind a gesture can go invisible. Saying what it meant to you can make it land even harder.",
      "Don't let thoughtful gestures substitute for direct emotional presence or conversation."
    ],
    partnerNeeds: [
      "A partner whose primary love language is receiving gifts. They'll feel completely seen by exactly what comes naturally to you.",
      "Someone who values the thoughtfulness behind a gesture, not just its face value.",
      "A partner who reciprocates in ways that show they've been paying attention to you too."
    ],
    pairings: {
      bestWith: "The Detailed Keeper. Someone who experiences gifts as proof of knowing will receive your love exactly as you intend it.",
      frictionWith: "The One Who Acts. Someone who primarily feels loved through action may appreciate your gestures but still feel something's missing."
    },
    tryThis: [
      "Pair the gesture with words about why. 'I saw this and thought of you because...' amplifies what it carries.",
      "Ask your partner occasionally what they've been wanting or thinking about. Your instincts are strong, but an update keeps them sharp."
    ]
  },

  F: {
    key: "F",
    name: "The Steady Anchor",
    tagline: "You love by becoming someone's safest place.",
    narrative: [
      "You're consistent, reliable, the same person on a hard day as on an easy one. When the people you love are anxious, struggling, or uncertain, they know where to find you. Not because you've promised anything, but because you've shown up the same way, every time, for as long as they've known you. Your love looks like steadiness, and steadiness is rarer than most people realise.",
      "You don't love loudly. You love through constancy: the message replied to at 11pm, the argument navigated without anyone leaving, reassurance that comes not from words but from the evidence of who you've always been. For you, the deepest expression of love is creating a place someone can be completely themselves, because you're not going anywhere.",
      "The partner who feels most loved by you is one who needs, above all else, to feel safe. Whose anxiety quiets with reliability. Who needs solid ground before they can be fully present. You are that ground, and for the right person, that's everything."
    ],
    strengths: [
      "You create genuine emotional safety. A partner can bring their full, unfiltered self to you.",
      "Your consistency means love is never uncertain or conditional. It just is.",
      "You're a stabilising force that lets a partner take risks, grow, and flourish."
    ],
    watchOuts: [
      "Steadiness can read as emotional flatness from the outside. Make sure your partner knows your constancy is love, not indifference.",
      "Don't let your stability mean absorbing more than your share. Safety goes both ways.",
      "Being the anchor can be exhausting over time. Invest in your own emotional support too."
    ],
    partnerNeeds: [
      "A partner whose primary love language is emotional security. They'll feel completely loved by the safety you create.",
      "Someone who can tell the difference between emotional steadiness and emotional unavailability. Your love is deep, just quiet.",
      "A partner who also creates safety for you, not just receives it from you."
    ],
    pairings: {
      bestWith: "The Stability Seeker. Someone who needs emotional safety above all else will feel completely held by your natural steadiness.",
      frictionWith: "The Verbal Heart. Someone who primarily needs verbal affirmation may find your quiet, steady love doesn't fully land without more explicit expression."
    },
    tryThis: [
      "Occasionally name your steadiness. 'I'm not going anywhere' or 'you can bring me anything' makes your constancy visible rather than assumed.",
      "Check in emotionally even during calm periods. Safety includes knowing you're paying attention, not just being there."
    ]
  },

  G: {
    key: "G",
    name: "The Co-Pilot",
    tagline: "You love by believing in someone harder than they believe in themselves.",
    narrative: [
      "When you love someone, you invest in who they're becoming. You see their potential, sometimes before they do, and hold it for them. You ask about their goals, remember what they said they wanted, bring it back up. You celebrate progress they've already moved past. You push, gently but consistently, toward the version of them they're still reaching for.",
      "This goes beyond affection or companionship. It's belief made active. A relationship with you doesn't just feel safe or warm. It feels like it's going somewhere, like you're both pointed at something bigger than where you started.",
      "The partner who feels most loved by you is one whose deepest need is to feel supported in their growth, who lights up being seen not just as they are, but as they could be. For them, your belief in their potential is the most intimate thing you could offer."
    ],
    strengths: [
      "You help people become more than they were. Your love is actively developmental.",
      "You create a sense of shared forward motion that keeps a relationship alive and purposeful.",
      "You remember and honour what matters to a partner's growth, which makes them feel consistently seen."
    ],
    watchOuts: [
      "Watch for pushing toward your own vision of who someone should become, rather than supporting their actual goals.",
      "A partner who needs rest, not momentum, right now may experience your encouragement as pressure.",
      "Love the person as they are today, not only for who you believe they're becoming."
    ],
    partnerNeeds: [
      "A partner whose primary love language is shared growth. They'll feel most loved when you invest in who they're becoming.",
      "Someone ambitious, curious, or in active development who wants a partner growing alongside them.",
      "A partner who gives the same investment back, who believes in your growth as much as you believe in theirs."
    ],
    pairings: {
      bestWith: "The Growth Partner. Someone who feels most loved when a partner supports their development will feel completely seen by your natural investment in their growth.",
      frictionWith: "The Stability Seeker. Someone whose primary need is emotional stability may experience your forward-focused energy as unsettling rather than loving."
    },
    tryThis: [
      "Ask 'what would be most helpful right now, encouragement or just someone to listen?' so your investment lands the way it's needed.",
      "Celebrate who they are today, not just who they're becoming. Make sure they feel loved in the present tense."
    ]
  },

  H: {
    key: "H",
    name: "The Equal Partner",
    tagline: "You love by making sure nothing is carried alone.",
    narrative: [
      "For you, love isn't a feeling that lives separately from the practical reality of a shared life. It shows in who does what, in whether the weight is distributed fairly, in whether one person carries more than their share, and you won't let that happen. You show up for the planning, the logistics, the things nobody wants to do. Not because you have to, but because you believe love, at its most real, is demonstrated through fairness.",
      "The mental load of a relationship, the thinking, the managing, the anticipating, is invisible work that falls unevenly in most partnerships. You notice it, name it, and actively correct it. Your love looks like equality made real, and for a partner who has felt the weight of imbalance before, what you give is relief of a very deep kind.",
      "The partner who feels most loved by you is one who has spent time in relationships where they carried too much, who knows exactly what an uneven load feels like, and who will feel, with you, what it's like when it isn't."
    ],
    strengths: [
      "You create true partnership. Your love makes a shared life feel genuinely shared.",
      "You notice and act on imbalance before it becomes resentment. Your fairness is proactive.",
      "Your love is sustainable. Equality means neither of you is depleted by the relationship."
    ],
    watchOuts: [
      "Watch for fairness tipping into scorekeeping. Love measured from a ledger stops feeling like love.",
      "A partner who doesn't naturally think in terms of balance may need guidance rather than judgment about what equal looks like.",
      "Make sure your focus on fairness includes emotional labour, not just practical tasks."
    ],
    partnerNeeds: [
      "A partner whose primary love language is shared mental load. They'll feel most loved when the weight is genuinely equal.",
      "Someone who values fairness and partnership, and actively participates rather than passively receives.",
      "A partner who notices and appreciates your investment in balance, so your effort feels seen."
    ],
    pairings: {
      bestWith: "The Equal Measure. Someone who feels most loved when responsibilities are genuinely equal will feel completely respected and cared for by you.",
      frictionWith: "The Detailed Keeper. Someone who primarily experiences love through gifts and gestures may value your fairness without it quite speaking their primary language."
    },
    tryThis: [
      "Name the fairness explicitly sometimes. 'I want this to feel equally shared, so let me know if it ever doesn't' keeps the conversation open.",
      "Ask about emotional labour specifically: 'what am I not seeing that you're carrying?' since invisible work is the hardest to share fairly."
    ]
  }
};

export const LOVE_GIVING_FLAVORS: Record<string, ArchetypeFlavor> = {
  A: { key: "A", blurb: "Woven through this, you also express love verbally. Saying what you feel and what you appreciate comes naturally alongside your primary way of giving." },
  B: { key: "B", blurb: "Alongside this, presence is part of how you give. You protect time and show up fully for the people you love." },
  C: { key: "C", blurb: "Running through this is a natural physical warmth. Touch and closeness come instinctively as part of how you love." },
  D: { key: "D", blurb: "Alongside this, you show love through action. Doing things proactively and practically is a strong secondary thread in how you give." },
  E: { key: "E", blurb: "Woven in is thoughtful attention. You notice what people love and act on it, giving gestures that carry the evidence of real knowing." },
  F: { key: "F", blurb: "Running alongside this is a deep steadiness. You love by being reliable, consistent, and emotionally available." },
  G: { key: "G", blurb: "Alongside your primary way of giving, you invest in growth. You believe in people actively and show it." },
  H: { key: "H", blurb: "Woven through this is a commitment to equality. You ensure the load is shared and that love feels genuinely mutual." }
};
