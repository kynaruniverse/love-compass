import { Archetype, ArchetypeFlavor } from "@/types/quiz";

/**
 * Primary archetypes for the Full Profile (Hybrid) assessment.
 * Keyed by the dominant category (A-H) from HYBRID_CATEGORIES.
 * These blend emotional and physical/intimate dimensions.
 */
export const HYBRID_ARCHETYPES: Record<string, Archetype> = {
  A: {
    key: "A",
    name: "The Open Communicator",
    tagline: "For you, love and desire both start with saying it.",
    narrative: [
      "Across both how you give and receive love, and how you experience desire and closeness, one thread runs through everything: words matter. A partner telling you they love you, telling you they want you, telling you what they're feeling — these aren't just nice extras for you, they're often the primary way connection becomes real and felt.",
      "This shows up everywhere — in everyday affirmation, in how desire gets communicated, in how conflict gets resolved. Silence or assumption, even well-intentioned, can leave you feeling slightly unmoored, like something important hasn't quite landed yet. You'd rather things be said, even imperfectly, than left unsaid.",
      "You're likely a generous communicator yourself — saying what you appreciate, naming what you want, checking in with words rather than assuming things are understood. For you, a relationship where both people talk openly — about love, about desire, about everything in between — tends to feel the most alive."
    ],
    strengths: [
      "You build deep emotional and intimate connection through honest, consistent communication.",
      "You make people feel both loved and desired through specific, heartfelt expression.",
      "Your openness often gives a partner permission to be equally open."
    ],
    watchOuts: [
      "Not everyone defaults to words — some partners show love and desire through action or presence, and that's not absence, just a different dialect.",
      "Be mindful of needing constant verbal reassurance in ways that might feel like pressure to a quieter partner.",
      "Words are powerful — and that cuts both ways during conflict, so the same openness benefits from care in difficult moments."
    ],
    partnerNeeds: [
      "A partner willing to communicate openly — about love, about desire, about the relationship as a whole.",
      "Specific, genuine affirmation rather than vague reassurance.",
      "A relationship culture where talking about feelings (and wants) is normal, not loaded."
    ]
  },

  B: {
    key: "B",
    name: "The Present One",
    tagline: "For you, closeness — of every kind — needs unhurried time.",
    narrative: [
      "Whether it's emotional connection or physical intimacy, you're drawn to the unrushed version. Full attention, no distractions, time that isn't being squeezed between other things — this is when you feel most loved AND most connected. The quality of presence matters more to you than almost anything else.",
      "When time together feels rushed or constantly interrupted — by phones, by schedules, by a general sense of always being somewhere else mentally — it affects you on more than one level. It's not just that you miss the time itself; it's that both emotional closeness and physical intimacy seem to need that unhurried foundation to really land for you.",
      "You likely offer this same quality of presence in return — when you're with someone, you're really there. For you, the ordinary, unhurried moments — the ones that don't look like anything special from the outside — are often where the deepest connection actually happens."
    ],
    strengths: [
      "You create deep connection through quality presence, both emotionally and physically.",
      "You're attuned to the difference between time together and quality time — and you protect the latter.",
      "Your full presence makes others feel genuinely valued."
    ],
    watchOuts: [
      "Busy seasons of life are normal — try not to read temporary scarcity of time as a permanent signal about the relationship.",
      "Be careful not to need every moment to be 'quality' — some unstructured, low-stakes time matters too.",
      "Communicate your need for unhurried time clearly rather than just feeling its absence."
    ],
    partnerNeeds: [
      "Genuinely undistracted time together — both for emotional connection and physical intimacy.",
      "A partner who treats presence as something worth protecting, not an automatic given.",
      "Patience with pacing — rushing either form of connection tends to undercut it for you."
    ]
  },

  C: {
    key: "C",
    name: "The Physically Present",
    tagline: "Touch is how you feel loved AND how you feel wanted.",
    narrative: [
      "For you, physical closeness does double duty — it's how you feel cared for, and it's how you feel desired, often blurring the line between the two in a way that feels completely natural to you. A hand on your back, a long hug, sitting close — these carry emotional weight and a spark of something more, often at the same time.",
      "When physical affection is missing — even the non-sexual, everyday kind — it can affect more than just one part of your connection with a partner. It can feel like both the emotional warmth and the desire have gone quiet, even if that's not really what's happening underneath.",
      "You're likely affectionate in a way that's instinctive — reaching out, staying close, using touch as a constant low-key channel of both reassurance and attraction. For you, physical and emotional intimacy aren't really separate categories; they're deeply intertwined."
    ],
    strengths: [
      "You create connection that feels both warm and alive — touch communicates multiple things for you at once.",
      "You're naturally affectionate, which often makes a relationship feel close on a daily basis, not just during big moments.",
      "Your comfort with physical closeness can help a partner feel both loved and desired simultaneously."
    ],
    watchOuts: [
      "Be aware that for some partners, affection and desire are more separated — non-sexual touch isn't always 'leading somewhere' for them, and that's fine.",
      "A lack of physical affection doesn't always mean a lack of love or desire from a partner — communication styles vary.",
      "Pair physical affection with the other languages too — touch alone, without words or attention, can feel incomplete over time."
    ],
    partnerNeeds: [
      "Regular physical affection, both everyday and intimate — for you these reinforce each other.",
      "A partner who's comfortable with casual touch as a normal part of life, not just a precursor to something else.",
      "Reassurance through closeness, especially during stressful times."
    ]
  },

  D: {
    key: "D",
    name: "The Reliable One",
    tagline: "For you, what someone does says more than what they say.",
    narrative: [
      "Across the board — emotionally and intimately — actions are how you read a relationship. A partner who follows through, who shows up consistently, who does what they said they'd do, is communicating something to you that words alone can't fully replace. Reliability isn't just practical to you; it's a form of both love and desire.",
      "When there's a gap between what someone says and what they do — even small gaps — it registers for you in a way that can feel disproportionate to others. It's not pettiness; it's that consistency is genuinely how you experience trust, and trust underlies everything else, including how desired and connected you feel.",
      "You likely show up this way yourself — quietly dependable, following through without needing to announce it. For you, a relationship where actions and words line up consistently tends to feel both emotionally secure and genuinely desired — the two reinforce each other."
    ],
    strengths: [
      "You build deep trust through consistency, which strengthens both emotional and physical connection over time.",
      "You're dependable in ways that quietly reduce a partner's stress and increase their sense of security.",
      "Your actions often speak clearly, reducing ambiguity in the relationship."
    ],
    watchOuts: [
      "Not everyone is naturally consistent in the same ways you are — occasional inconsistency doesn't always mean a lack of care.",
      "Be careful not to dismiss verbal expressions of love or desire just because they aren't (yet) backed by visible action — sometimes words come first.",
      "Recognition matters less to you, but acknowledging a partner's efforts (even small ones) helps reinforce the same pattern in them."
    ],
    partnerNeeds: [
      "A partner whose words and actions are generally aligned — consistency matters more to you than grand gestures.",
      "Follow-through on commitments, both small and large.",
      "Reliability as an ongoing pattern, which becomes the foundation for both emotional security and desire."
    ]
  },

  E: {
    key: "E",
    name: "The Attentive One",
    tagline: "You notice the details — and you need to be noticed too.",
    narrative: [
      "Small, specific gestures mean a great deal to you — both as a way of feeling loved and as a way of feeling desired. A partner remembering something you mentioned in passing, or noticing something about you that most people wouldn't, communicates a kind of attention that feels deeply personal, on every level of the relationship.",
      "When that attentiveness fades — when things start to feel generic, like effort isn't being individually directed at you anymore — it can affect how loved AND how desired you feel, even if the relationship is otherwise stable. For you, the specific and the personal carry real weight.",
      "You're probably the one who remembers the small things about others too — what they mentioned, what they like, the details that show you were really listening. For you, both love and desire are expressed through this kind of attentiveness — the sense of being individually, specifically seen."
    ],
    strengths: [
      "You make people feel specifically, individually seen — both emotionally and in terms of attraction.",
      "You're attentive to detail, which often translates into thoughtful gestures across the relationship.",
      "Your attentiveness can deepen both emotional intimacy and a sense of being desired."
    ],
    watchOuts: [
      "Be careful not to equate attentiveness purely with gestures or gifts — attention can show up in many forms.",
      "If a partner is less naturally detail-oriented, that doesn't necessarily mean less care — it might just be expressed differently.",
      "Don't let the absence of small gestures overshadow larger patterns of care that might be present."
    ],
    partnerNeeds: [
      "A partner who notices details — about you, your preferences, what you've mentioned — and occasionally acts on them.",
      "Gestures (big or small) that feel specifically chosen for you, not generic.",
      "A sense of being individually seen, both emotionally and in terms of attraction."
    ]
  },

  F: {
    key: "F",
    name: "The Grounded Partner",
    tagline: "Everything — connection, desire, closeness — needs to feel safe first.",
    narrative: [
      "For you, emotional safety isn't separate from intimacy — it's the foundation everything else is built on. Feeling secure, trusting that you can be vulnerable without it being used against you, knowing where things stand — these aren't preconditions you tolerate before things get good. For you, they ARE what makes things good, emotionally and physically.",
      "When that safety is shaky — through inconsistency, unresolved tension, or unpredictability — it tends to affect everything else too. Physical closeness can feel hollow, emotional connection can feel tentative, even when nothing specific seems 'wrong' on the surface.",
      "What you bring to a relationship is often a steady, grounding presence — the kind that makes both emotional vulnerability and physical intimacy feel possible because the foundation underneath feels solid. For you, the emotional climate of a relationship and the quality of its intimacy are deeply connected — almost the same conversation."
    ],
    strengths: [
      "You create a foundation of safety that allows both emotional and physical intimacy to deepen.",
      "You're a stabilizing presence — consistency and calm tend to radiate outward from you.",
      "You're attuned to the connection between emotional state and intimacy in a way that benefits the whole relationship."
    ],
    watchOuts: [
      "Waiting for everything to feel completely settled before allowing closeness can sometimes become circular — sometimes closeness itself helps build the safety.",
      "Be careful not to avoid necessary conflict in the name of preserving calm — unresolved issues can erode safety over time too.",
      "Communicate clearly what 'feeling safe' looks like for you — it can vary a lot between people."
    ],
    partnerNeeds: [
      "Consistency — in words, actions, and emotional availability — as an ongoing foundation.",
      "A partner who can navigate difficult conversations calmly, without escalation or withdrawal.",
      "Reassurance that the relationship is stable, especially during uncertain moments."
    ]
  },

  G: {
    key: "G",
    name: "The Growth-Oriented",
    tagline: "Connection feels best to you when it's going somewhere.",
    narrative: [
      "Across emotional connection and intimacy alike, you're drawn to relationships that have momentum — where both people are growing, individually and together, and where that growth is mutually supported. A partner who believes in you, who's genuinely invested in who you're becoming, affects how loved AND how desired you feel.",
      "Stagnation — even comfortable stagnation — can feel like something's missing for you, even within an otherwise solid relationship. It's not about needing constant change, but about wanting the sense that there's a future being built together, not just a present being maintained.",
      "You likely bring this energy to your relationships too — encouraging, engaged, genuinely interested in a partner's growth and excited about your own. For you, intimacy and connection thrive in an environment that feels like it's heading somewhere, together."
    ],
    strengths: [
      "You bring energy and forward momentum to relationships, on both an emotional and intimate level.",
      "You're genuinely supportive of a partner's growth, which deepens trust and connection.",
      "Your growth-orientation can help keep a long-term relationship feeling alive."
    ],
    watchOuts: [
      "Not every season of a relationship (or life) is about growth — some need rest, and that's not the same as stagnation.",
      "Be careful not to measure a relationship's health purely by how much 'progress' is visible.",
      "Make space for simply being together, not just becoming — presence has its own value."
    ],
    partnerNeeds: [
      "A partner who takes genuine interest in your growth — and shares their own.",
      "A relationship that feels like it has room to evolve, rather than staying static.",
      "Encouragement and belief, especially during periods of change or uncertainty."
    ]
  },

  H: {
    key: "H",
    name: "The True Partner",
    tagline: "For you, fairness IS intimacy.",
    narrative: [
      "Across every dimension — emotional, practical, and physical — you're drawn to relationships that feel like genuine partnerships. Shared effort, shared responsibility, both people showing up for the whole relationship rather than just their half of it — this isn't unromantic to you, it's actually one of the most important things.",
      "When that balance feels off — when one person seems to be carrying more, whether that's logistics, emotional labor, or initiative in intimacy — it tends to affect your sense of connection broadly, not just in the specific area where the imbalance shows up. For you, these things are linked.",
      "You likely show up as a true partner yourself — noticing what needs attention, contributing without being asked, and expecting (reasonably) that effort flows both ways. For you, a relationship that feels balanced tends to feel close in every sense — emotionally, practically, and intimately."
    ],
    strengths: [
      "You bring a strong sense of fairness and mutual investment to every part of a relationship.",
      "You're proactive — noticing and acting on what needs attention without requiring direction.",
      "Your 'team' mentality often strengthens trust and connection across the board."
    ],
    watchOuts: [
      "Keeping mental tallies across multiple areas of a relationship can become exhausting — occasional open conversation works better than silent tracking.",
      "Be careful not to assume a partner sees imbalances the same way you do — what's obvious to you might be invisible to them.",
      "A relationship doesn't need to be perfectly balanced in every moment — overall patterns matter more than any single instance."
    ],
    partnerNeeds: [
      "A partner who proactively shares responsibility — emotionally, practically, and intimately.",
      "Open conversations about balance across the relationship, not just one specific area.",
      "A genuine sense of being on the same team, invested in the whole relationship together."
    ]
  }
};

/**
 * Secondary "flavor" blurbs for the Full Profile (Hybrid) assessment.
 */
export const HYBRID_FLAVORS: Record<string, ArchetypeFlavor> = {
  A: {
    key: "A",
    blurb: "You also respond strongly to things being said aloud — clear, spoken communication adds a layer that other gestures alone don't reach."
  },
  B: {
    key: "B",
    blurb: "You also need unhurried time together — presence, without distraction, rounds out how connected you feel."
  },
  C: {
    key: "C",
    blurb: "You also respond strongly to physical closeness — touch adds something that words and time alone don't capture."
  },
  D: {
    key: "D",
    blurb: "You also notice consistency between words and actions — follow-through adds real weight for you."
  },
  E: {
    key: "E",
    blurb: "You also appreciate small, specific gestures — being individually noticed adds an extra layer of connection."
  },
  F: {
    key: "F",
    blurb: "You also need a foundation of emotional safety — feeling secure shapes how connected everything else feels."
  },
  G: {
    key: "G",
    blurb: "You also want a sense of forward motion — shared growth adds something static comfort doesn't."
  },
  H: {
    key: "H",
    blurb: "You also care about fairness across the relationship — mutual effort adds something one-sided effort can't replace."
  }
};