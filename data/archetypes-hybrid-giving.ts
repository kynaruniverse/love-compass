import { Archetype, ArchetypeFlavor } from "@/types/quiz";

export const HYBRID_GIVING_ARCHETYPES: Record<string, Archetype> = {
  A: {
    key: "A",
    name: "The Open Voice",
    tagline: "You love and desire through what you say.",
    narrative: [
      "Across both love and desire, words are your primary language. You say what you feel, what you want, what you find beautiful and attractive about the people you love. You don't leave things implied or assumed — you speak them. A specific appreciation offered in a quiet moment. A desire stated plainly. An 'I love you' said for the seventeenth time and meant just as genuinely as the first.",
      "This is rarer than it sounds. Most people carry their appreciation and their desire silently, assuming it's communicated through other means. You don't assume. You speak. And in speaking, you give a partner something concrete to hold: the actual words, said aloud, undeniable.",
      "The partner who will feel most loved and most desired by you is one for whom words are the primary channel — who needs to hear both love and desire spoken to fully receive them. For that person, what comes naturally to you is the most intimate thing they could be given."
    ],
    strengths: [
      "You make love and desire explicit — a partner never has to guess where they stand.",
      "Your verbal openness creates emotional closeness that carries across both everyday love and intimate moments.",
      "You give a partner permission to be equally expressive through your own openness."
    ],
    watchOuts: [
      "Not every partner receives words the same way you give them — some need action or presence alongside.",
      "Keep what you say specific and genuine rather than habitual — the power is in the precision.",
      "Be patient with partners who are less verbally expressive — their love may be just as real, just differently spoken."
    ],
    partnerNeeds: [
      "A partner whose primary love and intimacy languages involve verbal affirmation — they'll receive everything you give most naturally.",
      "Someone who values open, ongoing communication as a core part of both love and desire.",
      "A partner who reciprocates verbally so the exchange feels genuinely mutual."
    ],
    pairings: {
      bestWith: "The Affirmer / Verbal Spark (receiving) — someone who needs to hear both love and desire spoken will feel completely known and wanted by you.",
      frictionWith: "The Quiet Helper / Silent Feeler (receiving) — a partner whose primary language is action or touch may find your verbal focus doesn't fully land in their register."
    },
    tryThis: [
      "Stay specific — 'I love this particular thing about you' lands deeper than 'I love you' said from habit.",
      "Notice how your partner responds to different kinds of verbal expression — some need appreciation, others need desire spoken; give them the kind that resonates most."
    ]
  },

  B: {
    key: "B",
    name: "The Ever-Present",
    tagline: "You love and desire by being fully, unhurriedly there.",
    narrative: [
      "Your primary gift — across love and desire alike — is presence. Real, unhurried, undivided attention. You put your phone away. You stay. You give someone the experience of having all of you, not the distracted version that most people in most relationships learn to accept as normal. For you, being fully there is not a technique; it's just how you love.",
      "This extends into intimate moments in the same way. You're not thinking about what comes next; you're completely in the current moment with your partner. That quality of full presence — in everyday love and in physical intimacy — creates a particular kind of connection that feels different from what most people have experienced.",
      "The partner who will feel most loved and desired by you is one who experiences presence as the deepest signal of being chosen. Who feels most wanted when someone is completely, unhurriedly with them — in both senses of the word."
    ],
    strengths: [
      "You create connection through attention — in love and desire both, you give the real thing.",
      "Your presence communicates choice — a partner feels picked, not just included.",
      "Being fully there in intimate moments creates depth that deliberate technique rarely matches."
    ],
    watchOuts: [
      "Life will sometimes make full presence hard — communicate when that's circumstantial, not a withdrawal.",
      "Presence alone may not communicate desire explicitly enough for some partners — add words or clear physical signals.",
      "Protect your own space for renewal — full presence is generous, but it requires something from you too."
    ],
    partnerNeeds: [
      "A partner whose primary love and intimacy languages involve quality time and unhurried presence.",
      "Someone who experiences full attention as the clearest form of being loved and desired.",
      "A partner who also gives full presence — so being together feels like both people are completely there."
    ],
    pairings: {
      bestWith: "The Anchor / Tender One (receiving) — someone who feels most loved and desired through unhurried, undivided presence will feel completely seen by what you give.",
      frictionWith: "The Pursuer / Co-Pilot (receiving) — someone whose primary need is active pursuit or forward momentum may find your present-focused love doesn't give them the energy they most need."
    },
    tryThis: [
      "Name what you're giving — 'I'm completely here with you right now' makes your presence feel intentional, not just accidental.",
      "Create small rituals of full presence — a morning without phones, an evening with no agenda — that make your gift consistent and reliable."
    ]
  },

  C: {
    key: "C",
    name: "The Touch Giver",
    tagline: "Your love and desire both speak through closeness.",
    narrative: [
      "Touch is your primary language for everything — love and desire, comfort and want, affection and attraction. You are naturally, instinctively physically warm. You move close. You reach for people. A hand held, a hug that lasts, warm physical proximity throughout a day — these aren't gestures you decide to make, they're how love moves through you.",
      "This carries directly into intimacy. You build closeness through physical presence — through warmth, through deliberate touch, through the kind of unhurried physical attention that communicates desire in the most immediate and visceral way. For you, the boundary between 'loving someone' and 'desiring someone' runs through the same physical channel.",
      "The partner who will feel most loved and most desired by you is one for whom touch is everything — who feels loved when you're close and desired when you reach for them, and who doesn't have to wonder what you're feeling because they can feel it."
    ],
    strengths: [
      "Your physical warmth creates immediate, ongoing connection in both love and desire.",
      "A partner always knows where they stand with you — your body communicates it clearly.",
      "You make closeness feel natural and continuous rather than reserved for special occasions."
    ],
    watchOuts: [
      "Not everyone experiences touch the same way — always stay attuned to a partner's comfort and signals.",
      "During emotional difficulty, physical warmth is powerful but may need verbal accompaniment.",
      "Make sure touch is always welcomed in the moment — enthusiastic consent goes both ways."
    ],
    partnerNeeds: [
      "A partner whose primary love and intimacy languages centre on physical touch and closeness.",
      "Someone who is comfortable with and genuinely welcomes frequent physical affection.",
      "A partner who understands your touch as language, not just habit."
    ],
    pairings: {
      bestWith: "The Warm Hand / Tender One (receiving) — someone who feels most loved and desired through physical warmth will feel continuously and completely held by you.",
      frictionWith: "The Vocal Heart / Verbal Spark (receiving) — a partner who primarily needs words may find your physical expression, while welcome, doesn't fully satisfy their need to hear it."
    },
    tryThis: [
      "Combine touch with occasional explicit expression — a hug paired with 'I love you' or 'I want you' gives a partner two channels at once.",
      "Pay close attention to what kind of touch your partner most welcomes — tender, playful, grounding, passionate — and give them that specific kind."
    ]
  },

  D: {
    key: "D",
    name: "The Devoted Doer",
    tagline: "You love and desire through what you do and how you show up.",
    narrative: [
      "For you, both love and desire are expressed through action. Love shows up as proactive care — handling things, helping without being asked, making a partner's life easier through consistent, reliable follow-through. Desire shows up as deliberate moves — pursuit, anticipation, showing a partner you were thinking about them before you were even together.",
      "In both cases, action is the verb. You don't say it as much as you do it — and what you do carries enormous weight. A partner who experiences care and want through what a person does, not what they say or how they sit, will feel profoundly loved and desired by you in a way they may not have felt before.",
      "The partner who will feel most loved and most desired by you is one who reads action as love — who notices what you do, feels what it means, and experiences your follow-through as the clearest signal of being chosen."
    ],
    strengths: [
      "Your love is tangible and reliable — it shows up consistently in ways that genuinely improve a partner's life.",
      "Your desire is active and deliberate — you pursue and show up rather than hoping your feelings are assumed.",
      "Your love is sustainable because it's built on doing, not just feeling."
    ],
    watchOuts: [
      "Action-based love can go unnoticed by partners whose primary language is words or presence — translate occasionally.",
      "Make sure you communicate desire explicitly alongside your deliberate actions.",
      "Be careful not to give so much through action that you neglect your own needs."
    ],
    partnerNeeds: [
      "A partner whose primary love and intimacy languages centre on acts of service and active pursuit.",
      "Someone who reads action as the most powerful signal of both love and desire.",
      "A partner who acknowledges and appreciates what you do, so your effort feels received."
    ],
    pairings: {
      bestWith: "The Quiet Helper / Pursuer (receiving) — someone who feels most loved and desired through action and deliberate pursuit will feel completely cared for by you.",
      frictionWith: "The Vocal Heart / Affirmer (receiving) — someone whose primary need is verbal expression may find your action-based love, while real, doesn't fully land in their language."
    },
    tryThis: [
      "Name what you're doing and why — 'I handled this because I wanted you to have space to rest' makes the love behind the action explicit.",
      "Occasionally be verbally direct about desire alongside your deliberate moves — words and actions together are more powerful than either alone."
    ]
  },

  E: {
    key: "E",
    name: "The Attentive One",
    tagline: "You love and desire by seeing someone completely.",
    narrative: [
      "You pay attention in a way that most people don't. In love, this shows as thoughtful gestures — gifts and tokens that could only have come from someone who was genuinely listening, remembering, noticing. In desire, this shows as genuine curiosity — interest in a partner's pleasure, attention to what they respond to, openness to discovery. In both cases, the gift is the same: being truly seen.",
      "For a partner, this experience is rare and powerful. To be with someone who actually notices what you love, what you want, what makes you light up — and who acts on that noticing, in both love and intimacy — is to experience a particular kind of being known that most people quietly hunger for.",
      "The partner who will feel most loved and most desired by you is one who needs to feel specifically, accurately seen — not generically cared for or wanted in the abstract, but noticed and responded to with precision."
    ],
    strengths: [
      "You make a partner feel uniquely known in both love and desire.",
      "Your attention stays fresh over time — you keep noticing, which keeps the connection alive.",
      "What you give, in gifts and in intimate curiosity, lands with unusual accuracy."
    ],
    watchOuts: [
      "Attention is wonderful but needs to be accompanied by action — noticing without responding loses its power.",
      "Make sure your curiosity in intimacy is accompanied by directness too — attention plus initiative is more powerful than either alone.",
      "Don't let thoughtful giving become a way of avoiding direct emotional expression."
    ],
    partnerNeeds: [
      "A partner whose primary love and intimacy languages involve receiving gifts and mutual exploration.",
      "Someone who values being specifically seen over being generally appreciated.",
      "A partner who pays equal attention to you — so the noticing is mutual."
    ],
    pairings: {
      bestWith: "The Thoughtful Curator / Curious One (receiving) — someone who feels most loved and desired through specific attention and mutual exploration will feel completely known by you.",
      frictionWith: "The Steady Doer / Initiator (receiving) — someone who primarily feels loved and desired through action and direct pursuit may find your attention-focused approach doesn't fully give them what they need."
    },
    tryThis: [
      "Pair your noticing with words — 'I chose this because I remembered you said...' makes your attention visible and its impact even greater.",
      "In intimacy, be direct about what you've noticed your partner responds to — curiosity plus confidence is more powerful than curiosity alone."
    ]
  },

  F: {
    key: "F",
    name: "The Grounding Force",
    tagline: "You love and desire by making everything feel safe.",
    narrative: [
      "Safety is what you give first, in love and in desire. Not as a strategy but as an instinct. You're steady. You're consistent. You're the person who creates a container where someone else can fully breathe — where they don't have to manage how they appear, where their vulnerability is held gently, where they can trust that whatever they bring, you're not going anywhere.",
      "This matters more than most people articulate. For many partners, the deepest obstacle to being fully present — in love and in intimacy — is not desire or affection, but fear. Fear of being too much, of being judged, of being left. You dissolve that fear through the simple, repeated fact of your steadiness. And what that unlocks is extraordinary.",
      "The partner who will feel most loved and most desired by you is one for whom safety is the prerequisite for everything else — whose emotional and physical openness is directly proportional to how safe they feel. You give them that, and what it opens is the fullest version of who they are."
    ],
    strengths: [
      "You create the conditions for a partner to be fully present in both love and intimacy.",
      "Your steadiness is a gift that accumulates over time — it deepens rather than diminishes.",
      "Partners who have struggled to feel safe in past relationships often experience something genuinely different with you."
    ],
    watchOuts: [
      "Safety without expressed desire can feel platonic — make sure your partner also feels wanted, not just secure.",
      "Being the grounding force for someone can be absorbing — invest in your own emotional replenishment.",
      "Occasionally let your partner be your safe space too — mutual safety is deeper than one-directional."
    ],
    partnerNeeds: [
      "A partner whose primary love and intimacy languages centre on emotional security and safety.",
      "Someone with enough self-awareness to know that safety is what they need and who can receive it without taking it for granted.",
      "A partner who also creates safety for you — so the groundedness flows both ways."
    ],
    pairings: {
      bestWith: "The Safe Harbour / Safe Receiver (receiving) — someone who needs emotional grounding as the foundation for both love and desire will feel completely held by what you give.",
      frictionWith: "The Initiator / Pursuer (receiving) — someone whose primary need is active, energetic pursuit may find your steady, grounding love doesn't carry the dynamic energy they most need."
    },
    tryThis: [
      "Express desire explicitly alongside your steadiness — 'you're safe with me, and I want you' gives a partner both the safety and the want they need.",
      "Ask what 'feeling safe' means specifically to your partner — it varies, and knowing their version makes your care more precise."
    ]
  },

  G: {
    key: "G",
    name: "The Believer",
    tagline: "You love and desire by investing in who someone is becoming.",
    narrative: [
      "You see people at their potential and you hold that vision for them — sometimes more clearly than they hold it themselves. In love, this shows as active investment in a partner's growth: asking about their goals, remembering what they said they wanted, celebrating progress they've already moved past, believing in who they're becoming. In desire, it shows as genuine celebration of who they are — making them feel confident, attractive, and capable.",
      "Both expressions come from the same place: a deep interest in a person as a whole, not just in the roles they play in your life. You love the becoming as much as the being. You desire people in their fullest self, not just in the moment. And that fullness of seeing — in love and in intimacy — creates a particular kind of connection that goes very deep.",
      "The partner who will feel most loved and most desired by you is one who needs to feel believed in — who lights up when someone sees their potential and names it, who feels most intimate when they feel celebrated rather than just wanted."
    ],
    strengths: [
      "You help people grow and feel more fully themselves — your love is actively developmental.",
      "You make a partner feel desired as a whole person, not just in moments of intimacy.",
      "Your belief in someone is a form of love that sustains a relationship through difficulty and change."
    ],
    watchOuts: [
      "Be careful not to invest in your vision of who someone should be rather than supporting who they're actually becoming.",
      "Love the person fully as they are now, not only for the potential you see.",
      "In intimacy, make sure celebration of who they are includes desire, not just encouragement."
    ],
    partnerNeeds: [
      "A partner whose primary love and intimacy languages involve shared growth and confidence support.",
      "Someone who values being believed in and who responds to encouragement as a form of love and desire.",
      "A partner who believes in your growth equally — so the investment is genuinely mutual."
    ],
    pairings: {
      bestWith: "The Co-Pilot / Blooming One (receiving) — someone who feels most loved and desired when believed in and supported in their growth will feel completely championed by you.",
      frictionWith: "The Safe Harbour / Grounding Force (receiving) — someone whose primary need is steadiness and safety may experience your forward-focused investment as energy they didn't ask for."
    },
    tryThis: [
      "Ask 'what would feel most supportive right now — encouragement or just someone to be with?' so your investment lands the way it's actually needed.",
      "In intimacy, pair your confidence-building with clear desire — 'you look incredible' alongside your encouragement creates both the celebration and the want."
    ]
  },

  H: {
    key: "H",
    name: "The True Equal",
    tagline: "You love and desire by making everything genuinely mutual.",
    narrative: [
      "For you, love and desire are both hollow without equality. You bring full effort to both — in the practical reality of a shared life and in the intimate space between two people. You pay attention to whether things are balanced. You take on your share without being asked — in the planning, the logistics, the emotional labour, and in intimate moments where you show up as completely invested rather than waiting to be led.",
      "This quality creates something distinctive: a relationship with you never feels like one person working while the other benefits. The load is shared. The desire is mutual. The investment is matched. And for a partner who has experienced the slow erosion of imbalance — in love or in intimacy — what you give is relief of the deepest kind.",
      "The partner who will feel most loved and most desired by you is one who values genuine equality — who gives as much as they receive, who invests as fully as you do, and who experiences mutuality itself as one of the most intimate things two people can share."
    ],
    strengths: [
      "You create true partnership — love and desire both feel genuinely shared with you.",
      "Your equality is proactive — you notice imbalance and correct it before it becomes resentment.",
      "Your investment is sustainable because it's never one-sided — mutual effort keeps both people present."
    ],
    watchOuts: [
      "Don't let fairness become scorekeeping — love and desire given from a ledger stop feeling like either.",
      "Equality in intimacy includes emotional investment, not just physical presence — make sure both are mutual.",
      "Be patient with partners who are less naturally oriented toward balance — sometimes they need guidance, not judgment."
    ],
    partnerNeeds: [
      "A partner whose primary love and intimacy languages centre on shared responsibility and mutual investment.",
      "Someone who values equality as a form of love and desire, not just a practical concern.",
      "A partner who stays equally invested over time and communicates openly when the balance shifts."
    ],
    pairings: {
      bestWith: "The Equal Partner / Equal Flame (receiving) — someone who feels most loved and desired through genuine mutuality will feel completely met by what you give.",
      frictionWith: "The Pursuer / Devoted Doer (receiving) — someone whose primary need is to feel actively pursued or taken care of may find that your equality-focused approach doesn't give them the directed attention they most need."
    },
    tryThis: [
      "Name the mutuality explicitly — 'I love that we both fully show up for this' makes equality feel like a feature, not just a default.",
      "Check in when you sense imbalance — 'I want this to feel equally shared — is there anything I'm missing?' keeps the conversation open without accusation."
    ]
  }
};

export const HYBRID_GIVING_FLAVORS: Record<string, ArchetypeFlavor> = {
  A: { key: "A", blurb: "Running alongside this, words come naturally — you express both love and desire verbally as a strong secondary thread." },
  B: { key: "B", blurb: "Woven through this is a quality of full presence — being unhurriedly there is part of how you give both love and desire." },
  C: { key: "C", blurb: "Alongside this, physical warmth is part of your expression — touch and closeness come instinctively in love and desire both." },
  D: { key: "D", blurb: "Running through this is action — you show love and desire through what you do as much as through anything else." },
  E: { key: "E", blurb: "Woven in is genuine attention — you notice and act on it, in love and in intimacy both." },
  F: { key: "F", blurb: "Alongside your primary way of giving, you create safety — emotional groundedness is a strong secondary thread in how you express both love and desire." },
  G: { key: "G", blurb: "Running through this is belief — you invest in who someone is becoming, in love and in desire both." },
  H: { key: "H", blurb: "Woven through this is equality — you ensure everything feels genuinely mutual as a strong secondary expression of how you love and desire." }
};