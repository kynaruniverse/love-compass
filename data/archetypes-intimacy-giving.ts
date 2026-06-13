import { Archetype, ArchetypeFlavor } from "@/types/quiz";

export const INTIMACY_GIVING_ARCHETYPES: Record<string, Archetype> = {
  A: {
    key: "A",
    name: "The Spoken Flame",
    tagline: "You make desire undeniable by saying it.",
    narrative: [
      "You say what you want, what you find attractive, and what you're feeling — clearly, directly, without softening it to the point where it disappears. For you, desire communicated is desire amplified. The act of saying 'I want you' or 'I find this about you incredibly attractive' isn't just expression — it's part of how desire becomes real and shared.",
      "This is a gift that many partners quietly crave and rarely receive. Most people experience desire implied, hinted at, assumed — rarely stated with the directness that actually lands. You don't leave it in the gaps. You close them.",
      "The partner who will feel most desired by you is one for whom words are the primary channel — who needs to hear attraction spoken to fully receive it. What feels natural to you is, for them, the thing they most need."
    ],
    strengths: [
      "You eliminate ambiguity — a partner always knows they're desired.",
      "You create emotional and erotic closeness through honest, direct verbal expression.",
      "Your openness often gives a partner permission to be equally expressive."
    ],
    watchOuts: [
      "Not every partner is equally comfortable with verbal directness — gauge their response and adjust.",
      "Make sure your verbal expression is specific and genuine, not habitual.",
      "Words work best when accompanied by follow-through — what you say and what you do should align."
    ],
    partnerNeeds: [
      "A partner whose primary intimacy language is Verbal Erotic Affirmation — they'll receive your directness as the most powerful expression of desire.",
      "Someone who is comfortable with and welcomes explicit verbal expression of attraction.",
      "A partner who reciprocates verbally, so the exchange feels mutual."
    ],
    pairings: {
      bestWith: "The Verbal Spark (receiving) — someone who needs to hear desire spoken will feel completely wanted by your natural directness.",
      frictionWith: "The Silent Feeler (receiving) — a partner who expresses and receives desire primarily through action or touch may find your verbal focus feels misaligned."
    },
    tryThis: [
      "Stay specific — 'I find this particular thing about you incredibly attractive' lands deeper than general praise.",
      "Notice whether your partner responds most to what you say in the moment versus what you say in anticipation — and give them the kind they respond to most."
    ]
  },

  B: {
    key: "B",
    name: "The Slow Burn",
    tagline: "You build desire through warmth, not speed.",
    narrative: [
      "You understand something that many people miss: intimacy isn't a destination, it's a temperature. And you raise it slowly. You move close before you move faster. You linger in warmth, in touch, in the quiet build that makes what comes next feel inevitable rather than rushed. Your desire expresses itself through attention, through closeness, through the kind of unhurried physical presence that communicates want without urgency.",
      "There's a depth to this. The slow approach tells a partner that you're not in a hurry — that this, right now, is enough. That their presence is the point, not just a means to something else. For a partner who needs to feel savoured, not consumed, you are exactly what they need.",
      "The partner who will feel most desired by you is one for whom build-up is as important as the intimacy itself — who feels most wanted when someone takes time with them, not just time for them."
    ],
    strengths: [
      "You create deep sensual connection through warmth and deliberate closeness.",
      "A partner feels savoured and attended to — not rushed toward an outcome.",
      "Your approach creates safety through its pace, which allows partners to open more fully."
    ],
    watchOuts: [
      "A partner who prefers directness or clear initiation may misread your slow approach as hesitation.",
      "Make sure your warmth is accompanied by clear signals of desire — slow doesn't mean ambiguous.",
      "Calibrate pace to your partner's current needs — sometimes slow is perfect, sometimes they need you to move toward them clearly."
    ],
    partnerNeeds: [
      "A partner whose primary intimacy language is Tender Sensual Touch — they'll feel desired in exactly the way they most need.",
      "Someone who values the journey over the destination in intimate moments.",
      "A partner who communicates their pace preferences clearly, so you can attune to them."
    ],
    pairings: {
      bestWith: "The Tender One (receiving) — someone who feels most desired through slow, warm build-up will feel completely attuned to by your natural approach.",
      frictionWith: "The Passionate Initiator (receiving) — someone who feels most desired when a partner initiates with clear energy may find your gradual approach doesn't fully signal your desire."
    },
    tryThis: [
      "Pair your slow approach with a clear verbal signal of desire — warmth plus directness creates the best of both.",
      "Ask your partner how they're feeling as intimacy builds — staying attuned in the moment makes your approach feel caring, not cautious."
    ]
  },

  C: {
    key: "C",
    name: "The Initiator",
    tagline: "You make desire unmistakable.",
    narrative: [
      "You don't hint. You don't wait and hope it's picked up on. When you want someone, you move toward them — clearly, confidently, with energy that makes your desire impossible to misread. There's no ambiguity in your initiation, and for a partner who needs to feel actively wanted, that clarity is everything.",
      "This takes courage that many people underestimate. Initiating clearly opens you to the full weight of the moment — you're saying 'I want this, I want you' without the protective distance of implication. And in that directness, something important is communicated: not just desire, but the willingness to be vulnerable enough to name it.",
      "The partner who will feel most desired by you is one who needs to feel pursued — who feels most wanted when a partner comes toward them with unmistakable, confident energy. Your initiative, given freely and clearly, is exactly what they most need to receive."
    ],
    strengths: [
      "You eliminate the guesswork — a partner knows they're desired and chosen.",
      "Your confidence creates a safe space for a partner to receive rather than have to initiate themselves.",
      "Clear initiation builds trust and removes the anxious ambiguity that many partners quietly carry."
    ],
    watchOuts: [
      "Read your partner's energy and signals carefully — confidence works best when it's attuned.",
      "Make sure your initiation includes emotional presence, not just physical energy.",
      "Be open to moments when a partner needs you to wait, even if initiating is your instinct."
    ],
    partnerNeeds: [
      "A partner whose primary intimacy language is Passionate Initiation or Being Pursued — they'll feel completely desired by your natural directness.",
      "Someone who is comfortable receiving confident initiation and who communicates their preferences clearly.",
      "A partner who also initiates sometimes — so the dynamic stays mutual and neither person always carries the role."
    ],
    pairings: {
      bestWith: "The Receiver (Being Pursued) — someone who feels most desired when actively sought out will feel completely wanted by your natural confident initiation.",
      frictionWith: "The Mutual Explorer (receiving) — someone who values equal, unscripted initiation may feel that your directed approach creates a dynamic they'd prefer to be more balanced."
    },
    tryThis: [
      "Check in occasionally — 'is this good?' or 'what do you want?' — to ensure your confidence stays connected to your partner's present experience.",
      "Vary your initiation style sometimes — the same confident approach every time can become predictable; surprise and attunement make it feel fresh."
    ]
  },

  D: {
    key: "D",
    name: "The Pursuer",
    tagline: "You make a partner feel chosen before you're even together.",
    narrative: [
      "You build it before you arrive. A message that makes clear you've been thinking about them. A deliberate move that shows you've been anticipating this. The particular energy of being sought out — not just welcomed when you show up, but actively wanted in the hours before. You understand that desire, at its most powerful, lives in the space between — and you fill that space intentionally.",
      "There is something deeply validating about being pursued, and you give that experience generously. A partner who has felt the passive experience of intimacy that just happens — without intention, without building — will feel something shift with you. You make the wanting visible. You give them the experience of being someone worth pursuing.",
      "The partner who will feel most desired by you is one who needs to feel that they were thought about, that their partner made moves with intention, that the desire that arrives was building long before it was expressed."
    ],
    strengths: [
      "You create anticipation that amplifies desire and makes a partner feel genuinely wanted.",
      "Your pursuit shows a partner they're thought about and chosen, not just conveniently there.",
      "You bring intention and deliberateness to intimacy that creates depth and meaning."
    ],
    watchOuts: [
      "Ensure your pursuit feels like desire, not pressure — attune to a partner's response and stay flexible.",
      "Don't let anticipation always carry the weight — be equally present when you arrive.",
      "Make sure the dynamic stays reciprocal — pursuit works best when it can occasionally be returned."
    ],
    partnerNeeds: [
      "A partner whose primary intimacy language is Being Pursued — they'll feel desired in exactly the way they most need.",
      "Someone who responds to anticipation and deliberate signals of want.",
      "A partner who communicates their preferences clearly, so your pursuit lands exactly right."
    ],
    pairings: {
      bestWith: "The Pursued (receiving) — someone who feels most desired when actively sought out will feel completely wanted by your intentional pursuit.",
      frictionWith: "The Mutual Explorer (receiving) — someone who values equal, unscripted connection may experience your pursuit-focused dynamic as a role they didn't sign up for."
    },
    tryThis: [
      "Let your partner know what you're building toward — a message that says 'I've been thinking about you all day' gives them the experience of being wanted before you're even together.",
      "Ask occasionally what kind of pursuit feels best to them — some partners want bold moves, others want subtlety — so your intention lands exactly right."
    ]
  },

  E: {
    key: "E",
    name: "The Mutual Explorer",
    tagline: "You desire best when you discover together.",
    narrative: [
      "For you, intimacy is not a performance or a role — it's a genuine investigation. You bring real curiosity to a partner's pleasure. You ask. You pay attention to what works and what doesn't. You adjust. You stay open to discovery rather than defaulting to a script, and you give a partner the experience of being genuinely attended to, not just participated with.",
      "This mutual quality means that intimacy with you evolves. It doesn't calcify into habit. You're as interested in what your partner wants now as you were at the beginning, which creates a dynamic that stays alive over time in ways that more routine approaches don't.",
      "The partner who will feel most desired by you is one who values equal exchange, genuine curiosity, and the sense that both people are fully present in the exploration — not following roles, but discovering together."
    ],
    strengths: [
      "You create intimacy that evolves rather than calcifying — your curiosity keeps things alive.",
      "A partner feels genuinely attended to rather than moved through a routine.",
      "Your balanced approach makes intimacy feel mutual and safe rather than directed."
    ],
    watchOuts: [
      "Some partners need more directness or clear initiation alongside your exploratory energy — read what they need.",
      "Curiosity is wonderful, but make sure it's accompanied by follow-through on what you learn.",
      "Don't let openness become indefiniteness — sometimes a partner needs you to take the lead."
    ],
    partnerNeeds: [
      "A partner whose primary intimacy language is Mutual Exploration — they'll feel completely met by your natural curiosity and equal investment.",
      "Someone who values open communication about desire and is comfortable discovering together.",
      "A partner who stays equally curious and invested over time."
    ],
    pairings: {
      bestWith: "The Curious One (receiving) — someone who values mutual discovery and equal participation will feel completely at home with your approach.",
      frictionWith: "The Receiver (Being Pursued) — someone who primarily feels desired when actively sought out may need more directional energy than your exploratory style naturally provides."
    },
    tryThis: [
      "Occasionally be the one to suggest or initiate something specific — your curiosity is wonderful, but directness alongside it creates real electricity.",
      "Ask directly 'what would you love more of?' rather than only reading signals — it makes your curiosity feel active, not passive."
    ]
  },

  F: {
    key: "F",
    name: "The Safe Space",
    tagline: "You make a partner feel trusted enough to be fully open.",
    narrative: [
      "You create the conditions for intimacy before intimacy happens. Emotional safety — the sense that this person is completely trustworthy, that vulnerability won't be used against you, that you can bring your full self here — is what you give first. And for many people, that foundation is the prerequisite for everything else.",
      "For you, desire and trust are not separate channels. They flow from the same source. A partner who feels emotionally safe with you finds that their walls come down in ways they didn't expect — not because you dismantled them, but because you made it clear they didn't need to exist here.",
      "The partner who will feel most desired by you is one for whom emotional safety is not a nice-to-have but a prerequisite — whose openness in intimacy is directly proportional to how safe they feel. You give that safety, and what it unlocks is profound."
    ],
    strengths: [
      "You create the emotional foundation that allows a partner to be fully present and open.",
      "Your trustworthiness and emotional availability deepen intimacy beyond the physical.",
      "Partners who have struggled to feel safe in past relationships may experience something genuinely new with you."
    ],
    watchOuts: [
      "Safety without expressed desire can feel platonic — make sure your partner also feels wanted, not just safe.",
      "Don't absorb a partner's emotional weight without limits — safety you give needs to be sustainable for you.",
      "Occasionally be vulnerable yourself — safety is most powerful when it flows in both directions."
    ],
    partnerNeeds: [
      "A partner whose primary intimacy language is Emotional Safety — they'll be able to open most fully within the container you naturally create.",
      "Someone who has the self-awareness to know they need safety as a foundation and can communicate that.",
      "A partner who creates emotional safety for you in return, so the dynamic is mutual."
    ],
    pairings: {
      bestWith: "The Safe Receiver (receiving) — someone who needs emotional safety before they can be fully intimate will feel completely held and desired by what you give.",
      frictionWith: "The Passionate Initiator (receiving) — someone whose primary need is confident, direct pursuit may find your safety-first approach doesn't carry the energy they most need to feel desired."
    },
    tryThis: [
      "Express desire explicitly alongside the safety you create — 'you're completely safe with me, and I want you' gives a partner both what they need.",
      "Ask what 'feeling safe' looks like for your specific partner — it's different for everyone, and knowing their version makes your care more precise."
    ]
  },

  G: {
    key: "G",
    name: "The Confidence Builder",
    tagline: "You make a partner feel like the most attractive version of themselves.",
    narrative: [
      "You have a particular quality in intimacy: you make people feel good about themselves. Not through flattery, but through the specific way you direct your attention, your words, your energy. A partner who feels self-conscious, inhibited, or uncertain about themselves often finds something changes when they're with you — because you see them clearly and you show that seeing in how you engage with them.",
      "This is a profound gift. For many people, the primary obstacle to full intimacy isn't physical — it's internal. It's the voice that says 'are they actually attracted to me?' or 'do I look right?' or 'am I enough?' You quieten that voice, not by reassuring in the abstract, but by engaging in a way that makes the answer feel self-evident.",
      "The partner who will feel most desired by you is one whose confidence in intimate moments is tied to feeling seen and celebrated — who flourishes when a partner makes it clear, through everything they do, that they find them genuinely, specifically attractive."
    ],
    strengths: [
      "You create an environment where a partner feels free, confident, and celebrated.",
      "Your attention communicates specific, genuine attraction rather than generic desire.",
      "Partners who have felt self-conscious in past relationships may feel something shift with you."
    ],
    watchOuts: [
      "Be careful not to direct so much attention to a partner's confidence that you lose mutuality — intimacy works best when both people feel desired.",
      "Make sure your encouragement is specific and genuine — generalised flattery loses its effect quickly.",
      "Let your partner also build your confidence — intimacy is most powerful when it flows both ways."
    ],
    partnerNeeds: [
      "A partner whose primary intimacy language is Confidence & Growth Support — they'll feel desired in exactly the way they most need.",
      "Someone who has enough self-awareness to know that confidence support matters to them.",
      "A partner who also makes you feel attractive and confident, so the dynamic stays mutual."
    ],
    pairings: {
      bestWith: "The Blooming One (receiving) — someone who feels most desired when their confidence is actively supported will feel completely celebrated by what you give.",
      frictionWith: "The Vocal Spark (receiving) — someone whose primary need is verbal desire expressed aloud may feel that your confidence-building, while wonderful, doesn't fully scratch the itch."
    },
    tryThis: [
      "Stay specific — 'I find this particular thing about you incredibly attractive right now' is more powerful than general praise.",
      "Ask your partner what makes them feel most confident and attractive in intimate moments — so you can give precisely that."
    ]
  },

  H: {
    key: "H",
    name: "The Equal Flame",
    tagline: "You desire best when everything is genuinely mutual.",
    narrative: [
      "For you, the most powerful intimacy is the kind where both people are fully invested, fully present, and fully contributing. Not one person performing while the other receives. Not effort that skews to one side and leaves the other coasting. But the real thing — two people equally in it, equally showing up, equally choosing this.",
      "This isn't just a preference; it's how desire works for you. When you feel the mutuality — when you can feel your partner's investment matching yours — something opens. The physical and emotional connection deepens in a way that imbalance simply doesn't produce.",
      "The partner who will feel most desired by you is one who values this same equality — who shows up fully, invests completely, and finds that mutual effort is itself an expression of desire. With that person, what you give and what you receive become inseparable."
    ],
    strengths: [
      "You create intimacy that's genuinely mutual — no one performing, no one coasting.",
      "Your commitment to equality makes a partner feel chosen rather than convenient.",
      "Your investment stays consistent because it's never one-sided — mutual effort sustains itself."
    ],
    watchOuts: [
      "If a partner's investment fluctuates, communicate before withdrawing yours — imbalance is often temporary and fixable.",
      "Equality in intimacy includes emotional investment, not just physical — make sure both are genuinely mutual.",
      "Be careful not to keep score — tracking effort can shift intimacy from connection to transaction."
    ],
    partnerNeeds: [
      "A partner whose primary intimacy language is Shared Effort & Equality — they'll feel most desired when the investment is genuinely mutual.",
      "Someone who values fairness and full participation as a form of desire, not just a practical concern.",
      "A partner who stays equally invested over time and communicates when the balance shifts."
    ],
    pairings: {
      bestWith: "The Equal Partner (receiving) — someone who feels most desired in genuinely mutual intimacy will feel completely met by your natural investment.",
      frictionWith: "The Pursuer (receiving) — someone who primarily feels desired when being sought out may find that your equality-focused approach doesn't give them the directed pursuit they most need."
    },
    tryThis: [
      "Name the mutuality explicitly — 'I love that we're both fully here' — so a partner feels the equality as a feature, not just a dynamic.",
      "Check in when you sense imbalance — 'I want us both to feel fully present in this' opens the conversation without accusation."
    ]
  }
};

export const INTIMACY_GIVING_FLAVORS: Record<string, ArchetypeFlavor> = {
  A: { key: "A", blurb: "Running alongside this, you also express desire verbally — what you want and find attractive comes out in words naturally." },
  B: { key: "B", blurb: "Woven through this is a natural warmth — you build desire through slow, tender physical closeness." },
  C: { key: "C", blurb: "Alongside this, you bring confident initiation — your desire is rarely ambiguous or left to implication." },
  D: { key: "D", blurb: "Running through this is a pursuit quality — you build anticipation and make moves that show you were thinking about a partner." },
  E: { key: "E", blurb: "Woven in is genuine mutual curiosity — you stay interested in a partner's experience and keep intimacy exploratory." },
  F: { key: "F", blurb: "Alongside this, you create safety — emotional groundedness is part of how you express desire." },
  G: { key: "G", blurb: "Running through this is confidence-building — you make a partner feel attractive and celebrated alongside your primary way of desiring." },
  H: { key: "H", blurb: "Woven through this is a commitment to equality — you want intimacy to feel genuinely mutual and fully invested on both sides." }
};