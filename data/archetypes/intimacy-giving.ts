import { Archetype, ArchetypeFlavor } from "@/types/quiz";

/**
 * Primary archetypes for the How You Desire Test ("How You Desire to Give").
 * Keyed by the dominant category (A-H) from INTIMACY_GIVING_CATEGORIES.
 */
export const INTIMACY_GIVING_ARCHETYPES: Record<string, Archetype> = {
  A: {
    key: "A",
    name: "The Spoken Word",
    tagline: "You make desire undeniable by saying it.",
    narrative: [
      "You say what you want. What you've been thinking about, what about them you can't stop noticing, what you'd like to do next. Clearly, directly, without softening it to the point where it disappears. For you, desire spoken aloud is desire amplified. Saying 'I want you' or 'I've been thinking about this all day' isn't just expression. It's how desire becomes real and shared, rather than something left to be guessed at.",
      "This is a gift many partners quietly crave and rarely receive. Most people experience desire implied, hinted at, assumed, rarely stated with the directness that actually lands. You don't leave it in the gaps. You close them, with your own voice.",
      "The partner who will feel most desired by you is one who needs to hear it to fully believe it. What feels completely natural to you is, for them, exactly the thing they've been waiting for someone to finally say."
    ],
    strengths: [
      "You eliminate ambiguity. A partner always knows, in plain terms, that they're wanted.",
      "You create erotic closeness through honest, direct verbal expression rather than implication.",
      "Your openness often gives a partner permission to be equally direct in return."
    ],
    watchOuts: [
      "Not every partner is equally comfortable with verbal directness at first. Read their response and adjust your pace.",
      "Make sure what you say is specific and genuine in the moment, not a habit running on autopilot.",
      "Words work best paired with follow-through. What you say and what actually happens should line up."
    ],
    partnerNeeds: [
      "A partner whose primary style is The Spoken Word. They'll receive your directness as the most powerful expression of desire there is.",
      "Someone who's comfortable with, and genuinely welcomes, explicit verbal expression of attraction.",
      "A partner who reciprocates verbally, so the exchange feels mutual rather than one-directional."
    ],
    pairings: {
      bestWith: "The Spoken Word (receiving). Someone who needs to hear desire spoken will feel completely wanted by your natural directness.",
      frictionWith: "The Slow Build (receiving). A partner who experiences desire primarily through unhurried physical warmth may find your verbal directness moves faster than they naturally follow."
    },
    tryThis: [
      "Stay specific. 'This particular thing about you is doing it for me right now' lands deeper than general praise.",
      "Notice whether your partner responds most to what you say in the moment versus what you say in anticipation, and give them more of the kind they respond to."
    ]
  },

  B: {
    key: "B",
    name: "The Slow Build",
    tagline: "You build desire through warmth, not speed.",
    narrative: [
      "You understand something many people miss: intimacy isn't a destination, it's a temperature, and you raise it slowly. You move close before you move fast. You linger in touch, in warmth, in the kind of quiet build that makes what comes next feel inevitable rather than rushed. Your desire expresses itself through attention and unhurried physical presence that communicates want without urgency.",
      "There's depth in this. The slow approach tells a partner you're not in a hurry, that this moment, right now, is enough on its own. That their presence is the point, not just a means to something else. For a partner who needs to feel savoured rather than consumed, you are exactly what they need.",
      "The partner who will feel most desired by you is one for whom the build matters as much as the intimacy itself, who feels most wanted when someone takes their time over them, not just time for them."
    ],
    strengths: [
      "You create deep, sensual connection through warmth and deliberate, unhurried closeness.",
      "A partner feels savoured and attended to, not rushed toward an outcome.",
      "Your pace creates safety, which allows partners to open more fully than they would otherwise."
    ],
    watchOuts: [
      "A partner who prefers directness or clear initiation may misread your slow approach as hesitation.",
      "Make sure your warmth comes with clear signals of desire. Slow doesn't have to mean ambiguous.",
      "Calibrate to your partner's current state. Sometimes slow is exactly right, sometimes they need you to move toward them clearly."
    ],
    partnerNeeds: [
      "A partner whose primary style is The Slow Build. They'll feel desired in exactly the way they need most.",
      "Someone who values the journey as much as the destination in intimate moments.",
      "A partner who communicates their pace preferences clearly, so you can attune to them in real time."
    ],
    pairings: {
      bestWith: "The Slow Build (receiving). Someone who feels most desired through unhurried, warm build-up will feel completely attuned to by your natural approach.",
      frictionWith: "The Initiator (receiving). Someone who feels most desired when a partner initiates with clear, confident energy may find your gradual approach doesn't fully signal your desire fast enough."
    },
    tryThis: [
      "Pair your slow approach with a clear verbal signal of desire. Warmth plus directness gives a partner the best of both.",
      "Ask how they're feeling as things build. Staying attuned in the moment makes your pacing feel caring, not cautious."
    ]
  },

  C: {
    key: "C",
    name: "The Initiator",
    tagline: "You make desire unmistakable.",
    narrative: [
      "You don't hint. You don't wait and hope it's picked up on. When you want someone, you move toward them: clearly, confidently, with energy that makes your desire impossible to misread. There's no ambiguity in your initiation, and for a partner who needs to feel actively wanted, that clarity is everything.",
      "This takes courage many people underestimate. Initiating clearly opens you to the full weight of the moment. You're saying 'I want this, I want you' without the protective distance of implication. And in that directness, something important gets communicated: not just desire, but the willingness to name it without flinching.",
      "The partner who will feel most desired by you is one who needs to feel pursued, who feels most wanted when someone comes toward them with unmistakable, confident energy. Your initiative, given freely and clearly, is exactly what they most need to receive."
    ],
    strengths: [
      "You eliminate the guesswork. A partner knows, instantly, that they're desired and chosen.",
      "Your confidence creates a safe space for a partner to receive rather than always having to initiate themselves.",
      "Clear initiation builds trust and removes the anxious ambiguity many partners quietly carry."
    ],
    watchOuts: [
      "Read your partner's energy and signals carefully. Confidence works best when it's attuned, not assumed.",
      "Make sure your initiation includes emotional presence, not just physical energy.",
      "Be open to the moments when a partner needs you to wait, even if moving first is your instinct."
    ],
    partnerNeeds: [
      "A partner whose primary style is The Initiator or The Chase. They'll feel completely desired by your natural directness.",
      "Someone who's comfortable receiving confident initiation and communicates their preferences clearly.",
      "A partner who also initiates sometimes, so the dynamic stays mutual rather than always falling to you."
    ],
    pairings: {
      bestWith: "The Chase (receiving). Someone who feels most desired when actively sought out will feel completely wanted by your natural confident initiation.",
      frictionWith: "The Equal (receiving). Someone who values equal, unscripted initiation may feel that your directed approach creates a dynamic they'd prefer to be more balanced."
    },
    tryThis: [
      "Check in occasionally. 'Is this good?' or 'what do you want right now?' keeps your confidence connected to your partner's present experience.",
      "Vary your approach sometimes. The same confident move every time can become predictable; surprise and attunement keep it feeling fresh."
    ]
  },

  D: {
    key: "D",
    name: "The Chase",
    tagline: "You make a partner feel wanted before you're even together.",
    narrative: [
      "You build it before you arrive. A message that makes it clear you've been thinking about them. A deliberate move that shows you've been anticipating this for hours. The particular charge of making someone feel sought out, not just welcomed when you finally show up, but actively wanted in the hours before. You understand that desire, at its most powerful, lives in the space between moments, and you fill that space on purpose.",
      "There's something deeply validating about being pursued, and you give that experience generously. A partner who's used to intimacy that just happens, without intention, without any anticipation built beforehand, will feel something shift with you. You make the wanting visible, well before it's acted on. You give them the experience of being someone worth chasing.",
      "The partner who will feel most desired by you is one who needs to feel they were thought about in advance, that you made moves with real intention, that the desire that finally arrives had been building long before either of you said a word."
    ],
    strengths: [
      "You create anticipation that amplifies desire and makes a partner feel genuinely, specifically wanted.",
      "Your pursuit shows a partner they're thought about and chosen, not just conveniently available.",
      "You bring intention and deliberateness to desire that creates real depth, not just heat."
    ],
    watchOuts: [
      "Make sure your pursuit reads as desire, not pressure. Stay attuned to a partner's actual response.",
      "Don't let the anticipation always carry the weight. Be equally present once you're finally together.",
      "Keep the dynamic reciprocal. Pursuit works best when it can occasionally be returned to you."
    ],
    partnerNeeds: [
      "A partner whose primary style is The Chase. They'll feel desired in exactly the way they need most.",
      "Someone who responds to anticipation and deliberate, advance signals of want.",
      "A partner who communicates their preferences clearly, so your pursuit lands exactly right."
    ],
    pairings: {
      bestWith: "The Chase (receiving). Someone who feels most desired when actively sought out will feel completely wanted by your intentional pursuit.",
      frictionWith: "The Equal (receiving). Someone who values equal, unscripted connection may experience your pursuit-led dynamic as a role they didn't sign up for."
    },
    tryThis: [
      "Tell your partner what you're building toward. A message that says 'I've been thinking about you all day' gives them the experience of being wanted long before you're together.",
      "Ask occasionally what kind of pursuit feels best to them. Some partners want bold moves, others want subtlety, so your instinct lands exactly right."
    ]
  },

  E: {
    key: "E",
    name: "The Explorer",
    tagline: "You desire best when you discover together.",
    narrative: [
      "For you, intimacy isn't a performance or a fixed routine. It's a genuine investigation. You bring real curiosity to a partner's pleasure. You ask. You pay attention to what works and what doesn't. You adjust. You stay open to discovery rather than defaulting to a script, and you give a partner the experience of being genuinely attended to, not just moved through.",
      "This mutual quality means intimacy with you keeps evolving. It doesn't calcify into habit. You're as interested in what a partner wants now as you were the very first time, which creates something that stays alive in a way more routine approaches simply don't.",
      "The partner who will feel most desired by you is one who values equal exchange, genuine curiosity, and the sense that both people are fully present in the discovery. Not following roles, but actually finding things out together."
    ],
    strengths: [
      "You create intimacy that evolves rather than calcifying. Your curiosity keeps things alive.",
      "A partner feels genuinely attended to rather than moved through a routine.",
      "Your balanced approach makes desire feel mutual and safe rather than directed at them."
    ],
    watchOuts: [
      "Some partners need more directness or clear initiation alongside your exploratory energy. Read what they actually need.",
      "Curiosity is wonderful, but make sure it comes with follow-through on what you learn.",
      "Don't let openness become indecision. Sometimes a partner needs you to simply take the lead."
    ],
    partnerNeeds: [
      "A partner whose primary style is The Explorer. They'll feel completely met by your natural curiosity and equal investment.",
      "Someone who values open communication about desire and is comfortable discovering together.",
      "A partner who stays equally curious and invested over time, not just at the beginning."
    ],
    pairings: {
      bestWith: "The Equal (receiving). Someone who values mutual discovery and equal participation will feel completely at home with your approach.",
      frictionWith: "The Chase (receiving). Someone who primarily feels desired when actively sought out may need more directional energy than your exploratory style naturally provides."
    },
    tryThis: [
      "Occasionally be the one to suggest or initiate something specific. Your curiosity is wonderful, but directness alongside it creates real electricity.",
      "Ask directly, 'what would you love more of?' rather than only reading signals. It makes your curiosity feel active, not passive."
    ]
  },

  F: {
    key: "F",
    name: "The Safe Harbour",
    tagline: "You make a partner feel trusted enough to be fully open.",
    narrative: [
      "You create the conditions for intimacy before intimacy happens. Emotional safety, the sense that this person is completely trustworthy, that being fully seen won't be used against them, that they can bring their whole self here, is what you give first. For many people, that foundation is the prerequisite for everything else.",
      "For you, desire and trust aren't separate channels. They flow from the same source. A partner who feels emotionally safe with you finds their walls come down in ways they didn't expect. Not because you dismantled them, but because you made it clear they never needed to exist with you.",
      "The partner who will feel most desired by you is one for whom emotional safety isn't a nice-to-have but a genuine prerequisite, whose openness in intimacy is directly proportional to how safe they feel. You give that safety, and what it unlocks is profound."
    ],
    strengths: [
      "You create the emotional foundation that allows a partner to be fully present and open.",
      "Your trustworthiness and emotional availability deepen intimacy well beyond the physical.",
      "Partners who've struggled to feel safe in past relationships may experience something genuinely new with you."
    ],
    watchOuts: [
      "Safety without expressed desire can read as platonic. Make sure your partner also feels wanted, not just safe.",
      "Don't absorb a partner's emotional weight without limits. The safety you give needs to be sustainable for you too.",
      "Be vulnerable yourself occasionally. Safety is most powerful when it flows in both directions."
    ],
    partnerNeeds: [
      "A partner whose primary style is The Safe Harbour. They'll open most fully within the space you naturally create.",
      "Someone with enough self-awareness to know they need safety as a foundation and can say so.",
      "A partner who creates that same safety for you in return, so the dynamic stays mutual."
    ],
    pairings: {
      bestWith: "The Safe Harbour (receiving). Someone who needs trust before they can be fully present will feel completely held and desired by what you give.",
      frictionWith: "The Initiator (receiving). Someone whose primary need is confident, direct pursuit may find your safety-first approach doesn't carry the energy they need to feel desired right away."
    },
    tryThis: [
      "Say the desire out loud alongside the safety you create. 'You're completely safe with me, and I want you' gives a partner both things at once.",
      "Ask what 'feeling safe' actually looks like for your specific partner. It's different for everyone, and knowing their version makes your care more precise."
    ]
  },

  G: {
    key: "G",
    name: "The Spark",
    tagline: "You make a partner feel like the most wanted version of themselves.",
    narrative: [
      "You have a particular gift in intimacy: you make people feel irresistible. Not through flattery, but through the specific way you direct your attention, your words, your energy. A partner who feels self-conscious, inhibited, or uncertain often finds something changes when they're with you, because you see them clearly and you let that show in how you engage with them.",
      "This is a profound thing to give. For many people, the biggest obstacle to fully letting go isn't physical. It's internal. It's the voice asking 'are they actually into this?' or 'do I look right?' You quieten that voice, not through abstract reassurance, but by engaging in a way that makes the answer obvious.",
      "The partner who will feel most desired by you is one whose confidence in intimate moments is tied to feeling seen and wanted, who comes alive when a partner makes it unmistakably clear, through everything they do, that they find them genuinely, specifically irresistible."
    ],
    strengths: [
      "You create a space where a partner feels free, confident, and genuinely wanted.",
      "Your attention communicates specific, real desire rather than generic interest.",
      "Partners who've felt self-conscious in past relationships may feel something shift with you."
    ],
    watchOuts: [
      "Be careful not to direct so much attention to a partner's confidence that you lose mutuality. Desire works best when both people feel wanted.",
      "Make sure your attention stays specific and genuine. Generic flattery loses its effect quickly.",
      "Let your partner make you feel irresistible too. Desire is most powerful when it flows both ways."
    ],
    partnerNeeds: [
      "A partner whose primary style is The Spark. They'll feel desired in exactly the way they need most.",
      "Someone with enough self-awareness to know that this kind of attention matters to them.",
      "A partner who also makes you feel wanted and confident, so the dynamic stays mutual."
    ],
    pairings: {
      bestWith: "The Spark (receiving). Someone who feels most desired when their confidence is actively fed will feel completely wanted by what you give.",
      frictionWith: "The Spoken Word (receiving). Someone whose primary need is desire expressed aloud may feel that your confidence-building, while wonderful, doesn't fully satisfy that need on its own."
    },
    tryThis: [
      "Stay specific. 'This particular thing about you right now is doing it for me' is more powerful than general praise.",
      "Ask your partner what makes them feel most wanted and confident in intimate moments, so you can give them exactly that."
    ]
  },

  H: {
    key: "H",
    name: "The Equal",
    tagline: "You desire best when everything is genuinely mutual.",
    narrative: [
      "For you, the most powerful intimacy is the kind where both people are fully invested, fully present, fully reaching. Not one person performing while the other receives. Not effort that skews to one side while the other coasts. The real thing: two people equally in it, equally showing up, equally choosing this.",
      "This isn't just a preference, it's how desire actually works for you. When you feel the mutuality, when your partner's investment is genuinely matching yours, something opens. The connection deepens in a way imbalance simply can't produce.",
      "The partner who will feel most desired by you is one who values this same equality, who shows up fully, invests completely, and finds that mutual effort is itself a form of desire. With that person, what you give and what you receive become inseparable."
    ],
    strengths: [
      "You create intimacy that's genuinely mutual. No one performing, no one coasting.",
      "Your commitment to equality makes a partner feel chosen rather than merely convenient.",
      "Your investment stays consistent because it's never one-sided. Mutual effort sustains itself."
    ],
    watchOuts: [
      "If a partner's investment fluctuates, talk about it before withdrawing your own. Imbalance is often temporary and fixable.",
      "Equality in desire includes emotional investment, not just physical. Make sure both stay genuinely mutual.",
      "Be careful not to keep score. Tracking effort too closely can turn desire into a transaction."
    ],
    partnerNeeds: [
      "A partner whose primary style is The Equal. They'll feel most desired when the investment is genuinely mutual.",
      "Someone who values fairness and full participation as a form of desire, not just a practical concern.",
      "A partner who stays equally invested over time and says something when the balance shifts."
    ],
    pairings: {
      bestWith: "The Equal (receiving). Someone who feels most desired in genuinely mutual intimacy will feel completely met by your natural investment.",
      frictionWith: "The Chase (receiving). Someone who primarily feels desired when being sought out may find that your equality-focused approach doesn't give them the directed pursuit they need most."
    },
    tryThis: [
      "Name the mutuality explicitly. 'I love that we're both fully here' helps a partner feel the equality as a feature, not just a dynamic.",
      "Check in when you sense imbalance. 'I want us both to feel fully present in this' opens the conversation without accusation."
    ]
  }
};

export const INTIMACY_GIVING_FLAVORS: Record<string, ArchetypeFlavor> = {
  A: { key: "A", blurb: "Running alongside this, you also express desire verbally. What you want comes out in words naturally. You don't leave attraction implied when you could say it, and that directness tends to land." },
  B: { key: "B", blurb: "Woven through this is a natural warmth. You build desire through slow, lingering physical closeness. The unhurried approach isn't hesitation, it's how you communicate that someone is worth taking your time over." },
  C: { key: "C", blurb: "Alongside this, you bring confident initiation. Your desire is rarely ambiguous or left to implication. When you want something, you move toward it, and that clarity is a gift to a partner who needs to feel actively chosen." },
  D: { key: "D", blurb: "Running through this is a pursuit quality. You build anticipation and make moves that show you were thinking about a partner well in advance. The desire arrives before you do, and a partner who needs to feel thought about will feel it." },
  E: { key: "E", blurb: "Woven in is genuine mutual curiosity. You stay interested in a partner's experience and keep intimacy exploratory. You ask rather than assume, and that active interest makes a partner feel attended to rather than moved through." },
  F: { key: "F", blurb: "Alongside this, you create safety. Emotional groundedness is part of how you express desire. A partner senses they can be fully themselves with you, and that permission is itself a form of wanting them." },
  G: { key: "G", blurb: "Running through this is a gift for making someone feel irresistible alongside your primary way of desiring. The way you direct your attention quietens their inner critic in a way they probably didn't expect." },
  H: { key: "H", blurb: "Woven through this is a commitment to equality. You want intimacy to feel genuinely mutual and fully invested on both sides. When the effort is matched, something opens in you that one-sided intimacy simply doesn't reach." }
};
