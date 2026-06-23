import { Archetype, ArchetypeFlavor } from "@/types/quiz";

/**
 * Primary archetypes for the Intimacy Style Test ("How You Desire to Receive").
 * Keyed by the dominant category (A-H) from INTIMACY_CATEGORIES.
 */
export const INTIMACY_ARCHETYPES: Record<string, Archetype> = {
  A: {
    key: "A",
    name: "The Spoken Word",
    tagline: "If they're not saying it, it isn't landing.",
    narrative: [
      "For you, attraction becomes real the moment it's spoken. A partner telling you exactly what they've been thinking about, what they want to do, what about you they can't stop noticing, does something that touch alone can't replicate. Words don't just describe your desire. They deliver it.",
      "This means silence, even warm, comfortable silence, can leave something missing. A night can be physically affectionate and still feel like it's missing its main ingredient if nobody actually says anything: the low voice close to your ear, the plain admission of what they want, the naming of exactly what's turning them on. You're not asking for a performance. You're asking for honesty, said out loud.",
      "You're probably someone who isn't afraid to say what you want either, or who wishes you weren't. Either way, the spoken word isn't a side channel for you, it's one of the main ones, and a partner who understands that will find it unlocks something in you that little else does."
    ],
    strengths: [
      "You communicate desire with total clarity, which builds confidence and removes guesswork for a partner.",
      "You create erotic closeness through honest, direct conversation rather than leaving things to be guessed at.",
      "You're likely skilled at naming what you want, which leads to more satisfying intimacy for both people."
    ],
    watchOuts: [
      "A partner who's quieter in the moment may not be withholding. It might just not be their instinct, even if they want it just as much.",
      "Be careful not to read quietness as disinterest. Check in directly instead of assuming.",
      "Words land best paired with follow-through. What's said and what happens should match."
    ],
    partnerNeeds: [
      "A partner willing to say things aloud, including the things that feel a little exposing to admit.",
      "Verbal check-ins during and after, especially around what's working and what you'd like more of.",
      "Honesty over restraint when it comes to naming what's wanted."
    ],
    pairings: {
      bestWith: "The Initiator tends to pair well with you. Confident, direct action and confident, direct words reinforce each other naturally.",
      frictionWith: "The Slow Build can create friction at first. Their unhurried, quieter approach might leave you wanting more spoken confirmation than naturally comes their way."
    },
    tryThis: [
      "Try asking directly for what you want to hear. 'Tell me what you want to do to me' gives a quieter partner a clear way to meet you.",
      "Notice when a partner expresses desire without words, and try naming it out loud yourself. 'I can tell you want this' can bridge the gap."
    ]
  },

  B: {
    key: "B",
    name: "The Slow Build",
    tagline: "The build-up is the main event.",
    narrative: [
      "For you, intimacy isn't a switch, it's a slow climb, and the climb is the point. The unhurried lead-in, the kiss that doesn't rush toward anything else, the sense that there's no clock running because the closeness itself is what matters, not just where it eventually goes. A partner who understands pacing, who treats the build-up as worth savouring rather than skipping, speaks directly to how you experience desire.",
      "Rushed or purely goal-driven intimacy can feel like it's cutting out the part you actually value most. It's not that you don't want where things are going. It's that the slow, lingering middle has its own value, and compressing it loses something real, maybe even the best part.",
      "You probably bring this same quality to how you show affection generally: present, attentive, in no hurry. For you, the build isn't a warm-up act. It's a central part of the experience, deserving of time and attention in its own right."
    ],
    strengths: [
      "You bring presence and attentiveness to intimate moments, which often makes a partner feel deeply savoured.",
      "You value the build over urgency, which can deepen physical connection over time.",
      "You're likely attuned to subtlety: small shifts in breath, mood, and responsiveness."
    ],
    watchOuts: [
      "A partner with a different pace isn't necessarily mismatched. Different doesn't always mean incompatible, though it's worth discussing openly.",
      "Don't assume slower always means better for everyone. Check in rather than projecting your preference.",
      "Be mindful that 'slow' shouldn't become a way of avoiding more direct conversations about what you actually want."
    ],
    partnerNeeds: [
      "A partner who doesn't rush, who values lingering closeness as much as any destination.",
      "Patience and attentiveness, especially in how physical intimacy unfolds.",
      "Time and space that allows for an unhurried build rather than constantly squeezing it into small windows."
    ],
    pairings: {
      bestWith: "The Safe Harbour pairs especially well with you. Trust and unhurried pacing tend to build on each other.",
      frictionWith: "The Initiator can create friction. Their confident, decisive energy might feel like it's skipping the build-up you value most, even when enthusiasm is the whole intention."
    },
    tryThis: [
      "Try naming your pace preference directly. 'I love when we take our time' helps a partner understand that slowness is a preference, not hesitation.",
      "If things feel rushed, try suggesting a specific unhurried moment rather than just feeling the absence of one."
    ]
  },

  C: {
    key: "C",
    name: "The Initiator",
    tagline: "Hesitation kills it. Want it and show it.",
    narrative: [
      "There's something about clear, confident initiation that gets to you. Not aggression, but decisiveness, the kind that communicates real desire without any ambiguity left in the room. When a partner reaches for you first, with warmth and certainty, it tells you something you value most: that they want this, and they're not waiting for an invitation to want it.",
      "Hesitation or excessive second-guessing, even when well-intentioned, can dampen things for you. Not because consent and care aren't essential, they absolutely are, but because uncertainty can read as a lack of desire, even when that's not what's actually happening.",
      "You're probably someone who initiates too, often without overthinking it. For you, that confident energy isn't about dominance. It's about enthusiasm, about wanting something and being willing to reach for it without flinching. A relationship where both people feel free to move first tends to feel more alive to you."
    ],
    strengths: [
      "You bring energy and certainty to intimate connection, which can be infectious and confidence-building for a partner.",
      "You're comfortable taking the lead, which reduces ambiguity and can make things feel more electric.",
      "Your directness creates clarity. Less guessing about what's wanted, more of it actually happening."
    ],
    watchOuts: [
      "Confidence in initiation should always leave room for a partner's pace and comfort. Enthusiasm and pressure can look similar from the outside even when intentions differ.",
      "A partner who initiates less often may still want just as much. Different comfort levels with making the first move don't always map to different levels of desire.",
      "Make space for your partner to take the lead too, even if it happens less naturally for them. It can mean a lot when it does."
    ],
    partnerNeeds: [
      "A partner who's comfortable being pursued, and who responds to confidence with warmth rather than feeling overwhelmed.",
      "Mutual enthusiasm: feeling like your initiation is welcomed, not just tolerated.",
      "Open communication about pacing so confidence and consent are always moving together."
    ],
    pairings: {
      bestWith: "The Spoken Word pairs well with you. Clear words and confident action reinforce each other, reducing ambiguity on both sides.",
      frictionWith: "The Slow Build can create friction. Your confident, decisive energy might read as rushing to a partner who experiences desire as something that needs to be savoured, not seized."
    },
    tryThis: [
      "Try checking in verbally alongside initiating. 'Is this what you want?' keeps confidence and consent moving together.",
      "If a partner initiates less often, try making space for it explicitly. 'I'd love it if you made the first move sometime' removes some of the pressure."
    ]
  },

  D: {
    key: "D",
    name: "The Chase",
    tagline: "You don't chase. You get chased.",
    narrative: [
      "For you, there's something deeply affirming about being wanted in advance: a partner making it clear, hours before you're even alone, that they've been thinking about this. A message that lingers in your mind all afternoon, a look across the table that promises something for later, the small, deliberate thrill of being pursued. These aren't games to you. They're a genuine part of how desire actually gets felt.",
      "When that anticipation fades, when wanting starts to feel like something that only happens once you're already together rather than something that's been building, it can feel like something's gone missing, even if nothing is technically wrong. You're not asking for constant pursuit, just the occasional reminder that you're being actively wanted, not just available.",
      "You might build that same anticipation yourself in ways that invite rather than declare outright: a glance, a half-finished sentence, a kind of playful indirection that leaves room for the wait to do some of the work. For you, desire benefits from a runway, not just a destination."
    ],
    strengths: [
      "You bring a sense of aliveness and anticipation to a relationship. Things rarely feel fully settled in a stale way.",
      "You're attuned to the importance of ongoing pursuit in long-term intimacy, not just the early-relationship version of it.",
      "You likely appreciate and reciprocate effort when a partner makes it, which reinforces exactly the pattern you want."
    ],
    watchOuts: [
      "Long-term relationships naturally shift away from constant pursuit. It helps to find new forms of it rather than mourning the early version.",
      "Be careful not to interpret comfort or routine as a loss of desire. Sometimes it's simply a different phase, not an absence.",
      "If you want more pursuit, naming that directly tends to work better than waiting and hoping it returns on its own."
    ],
    partnerNeeds: [
      "A partner willing to build anticipation in advance: a message, a look, a small gesture of pursuit, even well into a relationship.",
      "Occasional novelty or surprise that signals active wanting, not just established routine.",
      "Reassurance, expressed through action, that desire hasn't faded quietly into the background."
    ],
    pairings: {
      bestWith: "The Explorer pairs especially well with you. Their appetite for novelty naturally generates the kind of ongoing interest and surprise that keeps things feeling alive for you.",
      frictionWith: "The Equal can create friction. Their instinct toward consistent, mutual effort might read as comfortable routine to you, even when it's meant as genuine investment."
    },
    tryThis: [
      "If you want more pursuit, try naming it playfully rather than waiting. 'I miss feeling chased a little' is an easy invitation, not a complaint.",
      "Try reciprocating with small gestures of your own. Pursuit tends to work best when it runs in both directions."
    ]
  },

  E: {
    key: "E",
    name: "The Explorer",
    tagline: "Bored in bed is a choice. You don't make it.",
    narrative: [
      "You're drawn to intimacy that has room to discover something, where both people are curious, willing to try, willing to ask 'what about this?' without it being a big deal either way. For you, novelty isn't about restlessness. It's about treating desire as something alive and evolving rather than fixed in place.",
      "Routine, when it becomes rigid rather than comfortable, can feel like it's closing a door you'd rather keep open. It's less about needing constant change and more about wanting the possibility of it: the sense that there's always more to find together, even in completely familiar territory.",
      "You're probably the one who brings up new ideas, who's willing to be a little exposed in suggesting something different. For you, mutual curiosity is itself a form of closeness. It says 'I trust you enough to want out loud, and I'm genuinely interested in what you want too.'"
    ],
    strengths: [
      "You keep things dynamic by bringing curiosity and openness into intimate moments.",
      "You're likely comfortable being a little vulnerable around preferences and ideas, which can deepen trust.",
      "Your openness can help a partner feel safe exploring their own curiosities too."
    ],
    watchOuts: [
      "Not every partner shares the same appetite for novelty. Pacing exploration to fit both people matters more than the exploration itself.",
      "Be mindful that 'we should try something new' can land as pressure if it isn't framed as a genuine, low-stakes invitation.",
      "Familiarity has value too. Exploration doesn't need to replace it, just sit alongside it."
    ],
    partnerNeeds: [
      "A partner who's open to talking about trying new things, even if the answer is sometimes 'not for me, but I'm glad you asked.'",
      "A judgment-free space to express curiosity without it being treated as a problem.",
      "Mutual willingness to occasionally step outside routine, even in small ways."
    ],
    pairings: {
      bestWith: "The Chase pairs naturally with you. Novelty and anticipation feed each other, keeping things feeling alive for both of you.",
      frictionWith: "The Safe Harbour can create friction at first. Their need for established trust before trying something new might feel, to you, like curiosity is being held back, even when it's just a different starting point."
    },
    tryThis: [
      "Try framing new ideas as low-stakes invitations. 'No pressure, just curious if this sounds good to you' takes the weight off.",
      "If a partner says no to something, try treating it as information rather than rejection. There's usually still plenty of room left to explore together."
    ]
  },

  F: {
    key: "F",
    name: "The Safe Harbour",
    tagline: "You can't get there without trust first.",
    narrative: [
      "For you, the emotional climate around intimacy matters as much as the intimacy itself. Feeling truly safe, trusting that you won't be judged, that being fully seen won't be used against you, isn't a precondition you tolerate before things get good. It's what makes things good in the first place.",
      "If that safety isn't there, if there's tension, unresolved conflict, or emotional distance sitting underneath, physical closeness can feel hollow even when it works on the surface. You're unlikely to feel fully present in the moment while you're unsettled anywhere else in the relationship.",
      "What you offer in return is often a kind of attentiveness to how a partner is actually feeling, not just what's happening physically. For you, desire is deeply relational. It's an extension of how connected two people are, not a separate compartment of the relationship that runs on its own."
    ],
    strengths: [
      "You create emotionally safe spaces, which often allows both partners to be more open and present.",
      "You're attuned to the link between emotional state and physical closeness: a whole-person view many relationships benefit from.",
      "Your need for safety often makes you a trustworthy, attentive partner in turn."
    ],
    watchOuts: [
      "Waiting for everything to feel perfect before intimacy can sometimes create a chicken-and-egg problem. Sometimes closeness itself helps repair the distance.",
      "Be careful not to use a lack of emotional safety as a reason to avoid addressing the actual issue underneath it.",
      "Communicate what 'safety' actually looks like for you. It can look completely different to different people."
    ],
    partnerNeeds: [
      "A partner who prioritises resolving emotional tension rather than letting it sit unaddressed.",
      "Consistency and trustworthiness as an ongoing foundation, not just during good moments.",
      "Open communication about emotional state: checking in, not just assuming things are fine."
    ],
    pairings: {
      bestWith: "The Equal pairs well with you. Mutual investment and trust reinforce each other, building the foundation you both value.",
      frictionWith: "The Initiator can create friction. Their confident, in-the-moment energy might move faster than feels comfortable if emotional tension hasn't been addressed yet."
    },
    tryThis: [
      "Try naming what 'feeling safe' looks like for you in concrete terms. 'I need us to talk through this first' gives a partner something specific to work with.",
      "If tension is unresolved, try addressing it directly rather than waiting for things to settle on their own. Sometimes the conversation is what creates the safety, not the other way around."
    ]
  },

  G: {
    key: "G",
    name: "The Spark",
    tagline: "Feel irresistible. Feel everything else more.",
    narrative: [
      "For you, feeling desired is closely tied to feeling seen, specifically, undeniably, as someone a partner can't help wanting. A partner who notices you, who reflects back something genuinely attractive about how you look or move or show up, changes how desired you feel in ways that might surprise people who don't share this.",
      "When self-doubt creeps in, about appearance, about performance, about anything really, it can dampen things for you more than it might for someone else. Not because the doubt is really about the relationship, but because confidence and desire are wired together for you. A partner's genuine, specific attention can make a real difference, fast.",
      "You probably offer this kind of attention too: noticing when someone seems uncertain and making it unmistakable that you want them anyway. For you, desire thrives in a room where both people feel irresistible, not despite the relationship but partly because of it."
    ],
    strengths: [
      "You respond strongly to genuine, specific attention, which makes you easy to make feel wanted when a partner gets it right.",
      "You understand the link between confidence and desire, which can lead to more emotionally intelligent intimacy.",
      "Your responsiveness gives a partner clear, immediate feedback that their attention is landing."
    ],
    watchOuts: [
      "Be careful that external validation doesn't become a substitute for your own sense of confidence. It helps, but isn't the whole picture.",
      "A partner can't be solely responsible for how desirable you feel. It helps to build some of that foundation independently too.",
      "Don't assume a confidence dip is about your partner, even if it surfaces during intimate moments."
    ],
    partnerNeeds: [
      "A partner who offers genuine, specific attention: not generically reassuring, but actually noticing real things.",
      "Patience around days when your confidence is lower than usual.",
      "A connection that feels like a source of confidence, not a source of pressure."
    ],
    pairings: {
      bestWith: "The Spoken Word pairs especially well with you. Specific, spoken desire is exactly the kind of attention that lands most deeply for you.",
      frictionWith: "The Initiator can create friction. Their confident, low-overthinking energy is great in itself, but might not naturally include the specific affirmation you sometimes need."
    },
    tryThis: [
      "Try naming what kind of attention actually lands. General reassurance feels different to something specific a partner noticed.",
      "On lower-confidence days, try sharing that directly rather than withdrawing. 'I'm feeling a bit insecure tonight' invites attention rather than leaving a partner guessing."
    ]
  },

  H: {
    key: "H",
    name: "The Equal",
    tagline: "Both hands in or don't bother.",
    narrative: [
      "For you, desire is deeply tied to a sense of fairness and mutual investment. Not transactional, but in the sense that both people are showing up, both reaching, both putting something real in. When that balance feels off, when wanting feels like something one person is consistently initiating or carrying, it registers, even when it's hard to put into words.",
      "This isn't about keeping score. It's that the same imbalance that shows up elsewhere in a relationship tends to echo into how connected you feel intimately too. For you, the two are linked. A relationship that feels equal in its everyday effort tends to feel more genuinely charged in its intimate moments as well.",
      "You probably approach intimacy the way you approach the rest of the relationship: as something both people are responsible for, something that benefits from attention from both sides rather than falling to one person to spark or sustain. For you, mutual hunger isn't unromantic. It's exactly what makes desire feel real."
    ],
    strengths: [
      "You bring a sense of fairness and mutual investment to intimacy, which often strengthens trust over time.",
      "You're likely attuned to patterns of imbalance, which can help address issues before they grow.",
      "Your approach treats desire as a shared responsibility, which most relationships genuinely benefit from."
    ],
    watchOuts: [
      "Avoid letting 'fairness' become a rigid framework. Desire doesn't always need to be perfectly reciprocal in any single moment to be balanced overall.",
      "Be mindful that different people initiate differently. A partner who initiates less might still be deeply invested, just expressing it differently.",
      "If imbalance is a recurring feeling, naming it directly tends to work better than waiting for it to self-correct."
    ],
    partnerNeeds: [
      "A partner who takes the lead at least some of the time, rather than consistently leaving it to you.",
      "Open conversation about how both people experience effort and investment, intimately and otherwise.",
      "A genuine sense that both people care about the connection, not just one person managing it."
    ],
    pairings: {
      bestWith: "The Safe Harbour pairs well with you. Mutual investment and trust naturally reinforce each other.",
      frictionWith: "The Chase can create friction. Their enjoyment of being sought after might read, to you, as one-sided effort, even when it's simply how they experience being wanted."
    },
    tryThis: [
      "If imbalance feels like a recurring pattern, try naming it directly and gently. 'I'd love it if you initiated sometime' is a clear, low-pressure way to raise it.",
      "Try noticing and naming effort when a partner does initiate. It reinforces exactly the pattern you're hoping for."
    ]
  }
};

/**
 * Secondary "flavor" blurbs for the Intimacy Style Test.
 */
export const INTIMACY_FLAVORS: Record<string, ArchetypeFlavor> = {
  A: {
    key: "A",
    blurb: "You also respond strongly to things being said aloud. A clearly spoken want adds something touch alone doesn't capture. When desire is named directly, it lands in a way that implication never quite manages."
  },
  B: {
    key: "B",
    blurb: "You also value a slower pace. Lingering, unhurried closeness rounds out how connected you feel. The build matters to you as much as anything else, and a partner who understands that gives you something most people rush past."
  },
  C: {
    key: "C",
    blurb: "You also appreciate confident initiation. A little decisiveness from a partner adds an extra spark. There's something about clear, unhesitating want that communicates desire more directly than any amount of waiting."
  },
  D: {
    key: "D",
    blurb: "You also enjoy the feeling of being pursued. A bit of ongoing anticipation means more to you than you might admit. Being actively wanted in advance, even in subtle ways, tells you something that routine comfort never quite does."
  },
  E: {
    key: "E",
    blurb: "You also have a curious streak. Openness to trying something new adds an extra layer to how connected you feel. Intimacy with room left to discover holds your attention in a way pure routine doesn't."
  },
  F: {
    key: "F",
    blurb: "You also need emotional grounding underneath it all. Feeling safe shapes how present you can be. When the trust is right, everything else opens up. When it isn't, even the warmest touch has a ceiling."
  },
  G: {
    key: "G",
    blurb: "You also respond to being told you're wanted, specifically. Feeling irresistible changes how connected intimacy feels. A partner who genuinely makes that clear, not in a hollow way but with real, specific attention, unlocks something physical closeness alone can't."
  },
  H: {
    key: "H",
    blurb: "You also notice fairness in effort. Mutual initiative adds something one-sided effort can't. When both people are reaching and choosing this equally, the connection feels categorically different to you than when one person is carrying it."
  }
};
