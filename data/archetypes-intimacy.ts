import { Archetype, ArchetypeFlavor } from "@/types/quiz";

/**
 * Primary archetypes for the Intimacy Style Test.
 * Keyed by the dominant category (A-H) from INTIMACY_CATEGORIES.
 */
export const INTIMACY_ARCHETYPES: Record<string, Archetype> = {
  A: {
    key: "A",
    name: "The Dirty Talker",
    tagline: "If you're not saying it, it isn't landing.",
    narrative: [
      "For you, attraction becomes real the moment it's spoken. A partner telling you what they find desirable about you — specifically, plainly, without hedging — does something that no amount of implication can replicate. Words don't just describe desire for you; in many ways, they're how desire is delivered.",
      "This means silence, even comfortable silence, can sometimes leave something missing. A relationship can be physically warm and still feel like it's missing a layer if the verbal dimension isn't there — the texting, the telling, the naming of what's wanted and appreciated. You're not asking for performance; you're asking for honesty spoken aloud.",
      "You're likely someone who isn't afraid to say what you want either — or who wishes you weren't. Either way, verbal communication isn't a side channel to your intimate connection, it's one of the main ones, and a partner who understands that will find it opens something up for you that little else does."
    ],
    strengths: [
      "You communicate desire clearly, which builds confidence and reduces guesswork for a partner.",
      "You create emotional and erotic closeness through honest, direct conversation.",
      "You're likely skilled at articulating needs and preferences, which leads to more satisfying intimacy overall."
    ],
    watchOuts: [
      "A partner who is less verbally expressive may not be withholding — it might just not be their primary language, even if they feel desire just as strongly.",
      "Be careful not to interpret quietness as disinterest; check in directly rather than assuming.",
      "Verbal affirmation works best paired with follow-through — words and actions reinforcing each other."
    ],
    partnerNeeds: [
      "A partner willing to communicate openly about desire, attraction, and preferences — including saying things that might feel vulnerable to say.",
      "Verbal check-ins and feedback, especially around what's working and what you'd like more of.",
      "Honesty over politeness when it comes to talking about intimacy."
    ],
    pairings: {
      bestWith: "The One Who Wants tends to pair well with you — confident, direct communication and confident initiation reinforce each other naturally.",
      frictionWith: "The Slow Seduction can create friction at first — their unhurried, less verbal approach might leave you wanting more spoken confirmation than naturally comes their way."
    },
    tryThis: [
      "Try asking directly for what you want to hear — 'it would mean a lot if you told me X' gives a less verbal partner a clear way to meet you.",
      "Notice when a partner expresses desire nonverbally, and try naming it out loud yourself — 'I can tell you want this' can bridge the gap."
    ]
  },

  B: {
    key: "B",
    name: "The Slow Seduction",
    tagline: "The buildup is the main event.",
    narrative: [
      "For you, intimacy isn't a switch, it's a gradient — and the slow part is the point. The unhurried build-up, the lingering touch, the sense that there's no rush because the closeness itself is what matters, not just where it leads. A partner who understands pacing, who doesn't treat tenderness as a mere prelude, speaks directly to how you experience connection.",
      "Rushed or purely goal-oriented intimacy can feel like it's skipping the part you actually value most. It's not that you don't want where things might go — it's that the slow, sensual middle has its own value, and compressing it loses something real.",
      "You probably bring this same quality to how you show affection — present, attentive, in no hurry. For you, tenderness isn't a warm-up act; it's a central part of the experience itself, deserving of time and attention in its own right."
    ],
    strengths: [
      "You bring presence and attentiveness to intimate moments, which often makes a partner feel deeply cared for.",
      "You value quality over urgency, which can deepen emotional and physical connection over time.",
      "You're likely attuned to subtlety — small shifts in mood, comfort, and responsiveness."
    ],
    watchOuts: [
      "A partner with a different pace isn't necessarily mismatched — different doesn't always mean incompatible, though it's worth discussing openly.",
      "Don't assume slower always equals better for everyone; check in rather than projecting your preference.",
      "Be mindful that 'slow' shouldn't become a euphemism for avoiding more direct conversations about needs."
    ],
    partnerNeeds: [
      "A partner who doesn't rush — who values lingering closeness as much as any destination.",
      "Patience and attentiveness, especially in how physical intimacy unfolds.",
      "An environment (time, space, mindset) that allows for unhurried connection rather than constantly fitting it into small windows."
    ],
    pairings: {
      bestWith: "The Open Gate pairs especially well with you — emotional safety and unhurried pacing tend to build on each other.",
      frictionWith: "The One Who Wants can create friction — their confident, decisive energy might feel like it's skipping the slow build-up you value most, even when enthusiasm is the intention."
    },
    tryThis: [
      "Try naming your pace preference directly — 'I love when we take our time' helps a partner understand that slowness is a preference, not hesitation.",
      "If things feel rushed, try suggesting a specific unhurried activity rather than just feeling the absence of one."
    ]
  },

  C: {
    key: "C",
    name: "The One Who Wants",
    tagline: "Hesitation kills it. Want it and show it.",
    narrative: [
      "There's something about clear, confident initiation that resonates with you — not aggression, but a kind of decisiveness that communicates genuine desire without ambiguity. When a partner makes the first move with warmth and confidence, it tells you something you value: that they want this, and they're not waiting for permission to want it.",
      "Hesitation or excessive second-guessing — even when well-intentioned — can sometimes dampen things for you, not because consent and care aren't essential (they absolutely are), but because uncertainty can read as a lack of desire, even when that's not what's actually happening.",
      "You're likely someone who initiates too, often without overthinking it. For you, that confident energy isn't about dominance — it's about enthusiasm, about wanting something and being willing to reach for it. A relationship where both people feel free to initiate tends to feel more alive to you."
    ],
    strengths: [
      "You bring energy and enthusiasm to intimate connection, which can be infectious and confidence-building for a partner.",
      "You're comfortable taking initiative, which reduces ambiguity and can make a relationship feel more dynamic.",
      "Your directness often creates clarity — less guessing about what's wanted."
    ],
    watchOuts: [
      "Confidence in initiation should always leave room for a partner's pace and comfort — enthusiasm and pressure can look similar from the outside even when intentions differ.",
      "A partner who initiates less often may still desire just as much — different comfort levels with initiation don't always map to different levels of desire.",
      "Make space for your partner to initiate too, even if it happens less naturally for them — it can mean a lot when it does."
    ],
    partnerNeeds: [
      "A partner who's comfortable being pursued, and who responds to confidence with warmth rather than feeling overwhelmed.",
      "Mutual enthusiasm — feeling like initiation is welcomed, not just tolerated.",
      "Open communication about pacing so confidence and consent are always aligned."
    ],
    pairings: {
      bestWith: "The Dirty Talker pairs well with you — clear words and confident action reinforce each other, reducing ambiguity on both sides.",
      frictionWith: "The Slow Seduction can create friction — your confident, decisive energy might read as rushing to a partner who experiences intimacy as a gradient rather than a moment."
    },
    tryThis: [
      "Try checking in verbally alongside initiating — 'how does this feel?' keeps confidence and consent moving together.",
      "If a partner initiates less often, try making space for it explicitly — 'I'd love it if you took the lead sometime' removes some of the pressure."
    ]
  },

  D: {
    key: "D",
    name: "The One Worth Chasing",
    tagline: "You don't chase. You get chased.",
    narrative: [
      "For you, there's something deeply affirming about being sought after — about a partner making it clear, through effort and attention, that they want you specifically and are willing to show it. Anticipation, build-up, the small thrill of being pursued — these aren't games to you, they're a genuine part of how desire gets communicated and felt.",
      "When that pursuit fades — when things become routine to the point that wanting seems to have quietly disappeared from the equation — it can feel like something has gone missing, even if nothing is technically 'wrong'. You're not asking for constant chase, but for the occasional reminder that you're still actively desired, not just present.",
      "You might express interest yourself in ways that invite rather than declare outright — a kind of playful indirection that leaves room for a little anticipation on both sides. For you, intimacy benefits from a sense of ongoing interest, not just established comfort."
    ],
    strengths: [
      "You bring a sense of aliveness and anticipation to relationships — things rarely feel fully 'settled' in a stale way.",
      "You're attuned to the importance of ongoing effort in long-term intimacy, not just early-stage romance.",
      "You likely appreciate and reciprocate effort when a partner makes it, which reinforces positive patterns."
    ],
    watchOuts: [
      "Long-term relationships naturally shift away from constant pursuit — it helps to find new forms of it rather than mourning the early-relationship version.",
      "Be careful not to interpret comfort or routine as a loss of desire — sometimes it's simply a different phase.",
      "If you want more pursuit, naming that directly tends to work better than waiting and hoping it returns on its own."
    ],
    partnerNeeds: [
      "A partner willing to make ongoing effort — small gestures of pursuit, even well into a relationship.",
      "Occasional novelty or surprise that signals active interest, not just established routine.",
      "Reassurance, expressed through action, that desire hasn't faded into the background."
    ],
    pairings: {
      bestWith: "The Willing Explorer pairs especially well with you — their appetite for novelty naturally generates the kind of ongoing interest and surprise that keeps things feeling alive for you.",
      frictionWith: "The Fair Game can create friction — their instinct toward consistent, mutual effort might read as comfortable routine to you, even when it's meant as genuine investment."
    },
    tryThis: [
      "If you want more pursuit, try naming it playfully rather than waiting — 'I miss feeling chased a little' is an easy invitation, not a complaint.",
      "Try reciprocating with small gestures of your own — pursuit tends to work best when it goes both directions."
    ]
  },

  E: {
    key: "E",
    name: "The Willing Explorer",
    tagline: "Bored in bed is a choice. You don't make it.",
    narrative: [
      "You're drawn to intimacy that has room to discover something — where both people are curious, willing to try, willing to ask 'what about this?' without it being a big deal either way. For you, novelty and exploration aren't about restlessness; they're about treating intimacy as something alive and evolving rather than fixed.",
      "Routine, when it becomes rigid rather than comfortable, can feel like it's closing a door you'd rather keep open. It's less about needing constant change and more about wanting the possibility of change — the sense that there's always more to discover together, even within familiar territory.",
      "You're probably the one who brings up new ideas, who's willing to be a little vulnerable in suggesting something different. For you, mutual curiosity is itself a form of closeness — it says 'I trust you enough to wonder out loud, and I'm interested in what you wonder too.'"
    ],
    strengths: [
      "You keep relationships dynamic by bringing curiosity and openness to intimacy.",
      "You're likely comfortable with vulnerability around preferences and ideas, which can deepen trust.",
      "Your openness can help a partner feel safe exploring their own curiosities too."
    ],
    watchOuts: [
      "Not every partner shares the same appetite for novelty — pacing exploration to fit both people's comfort matters more than the exploration itself.",
      "Be mindful that 'we should try new things' can land as pressure if not framed as a genuine, low-stakes invitation.",
      "Comfort and familiarity have value too — exploration doesn't need to replace them, just complement them."
    ],
    partnerNeeds: [
      "A partner who's open to conversation about trying new things, even if the answer is sometimes 'not for me, but I'm glad you asked'.",
      "A judgment-free space to express curiosity without it being treated as a problem.",
      "Mutual willingness to occasionally step outside routine, even in small ways."
    ],
    pairings: {
      bestWith: "The One Worth Chasing pairs naturally with you — novelty and anticipation feed each other, keeping things feeling alive for both of you.",
      frictionWith: "The Open Gate can create friction at first — their need for established safety before trying something new might feel, to you, like curiosity is being held back, even when it's just a different starting point."
    },
    tryThis: [
      "Try framing new ideas as low-stakes invitations — 'no pressure, just curious if this sounds interesting to you' takes the weight off.",
      "If a partner says no to something, try treating it as information rather than rejection — there's usually still plenty of room to explore together."
    ]
  },

  F: {
    key: "F",
    name: "The Open Gate",
    tagline: "You can't get there without trust first.",
    narrative: [
      "For you, the emotional climate around intimacy matters as much as the intimacy itself. Feeling truly safe — trusting that you won't be judged, that vulnerability won't be used against you, that the connection is solid — isn't a precondition you tolerate before things get good. It IS what makes things good.",
      "If that safety isn't there — if there's tension, unresolved conflict, or a sense of emotional distance — physical closeness can feel hollow, even when everything 'works' on a surface level. You're unlikely to feel fully present intimately while feeling emotionally unsettled elsewhere in the relationship.",
      "What you offer in turn is often a kind of attentiveness to how a partner is feeling, not just what's happening physically. For you, intimacy is deeply relational — it's an extension of how emotionally connected two people are, not a separate compartment of the relationship."
    ],
    strengths: [
      "You create emotionally safe spaces, which often allows both partners to be more open and present.",
      "You're attuned to the connection between emotional state and physical intimacy — a holistic view that many relationships benefit from.",
      "Your need for safety often translates into being a trustworthy, attentive partner."
    ],
    watchOuts: [
      "Waiting for 'everything to feel perfect' before intimacy can sometimes create a chicken-and-egg situation — sometimes closeness itself helps repair emotional distance.",
      "Be careful not to use a lack of emotional safety as a reason to avoid addressing the actual issue creating that feeling.",
      "Communicate what 'safety' looks like for you specifically — it can look different to different people."
    ],
    partnerNeeds: [
      "A partner who prioritizes resolving emotional tension rather than letting it sit unaddressed.",
      "Consistency and trustworthiness as an ongoing foundation, not just during good moments.",
      "Open communication about emotional state — checking in, not just assuming things are fine."
    ],
    pairings: {
      bestWith: "The Fair Game pairs well with you — mutual investment and emotional safety reinforce each other, building the kind of foundation you both value.",
      frictionWith: "The One Who Wants can create friction — their confident, in-the-moment energy might move faster than feels comfortable if emotional tension hasn't been addressed yet."
    },
    tryThis: [
      "Try naming what 'feeling safe' looks like for you in concrete terms — 'I need us to talk through X before I can really relax' gives a partner something specific to work with.",
      "If tension is unresolved, try addressing it directly rather than waiting for things to settle on their own — sometimes the conversation is what creates the safety, not the other way around."
    ]
  },

  G: {
    key: "G",
    name: "The Confident Lover",
    tagline: "Feel good about yourself. Feel everything else more.",
    narrative: [
      "For you, feeling desired is closely tied to feeling supported — particularly in how you see yourself. A partner who notices your confidence, who reflects back something positive about how you're showing up (in a relationship or in life more broadly), influences how desired you feel in ways that might surprise people who don't share this.",
      "When self-doubt creeps in — about appearance, about performance, about anything really — it can dampen intimacy for you more than it might for someone else, not because the doubt is really about the relationship, but because confidence and desire are linked for you. A partner's reassurance, genuinely given, can make a real difference.",
      "You likely offer this kind of support too — noticing when someone seems to be struggling with confidence and gently building them back up. For you, intimacy thrives in an environment where both people feel genuinely good about themselves, not despite the relationship but partly because of it."
    ],
    strengths: [
      "You're attuned to a partner's emotional state around self-image, often offering support without being asked.",
      "You understand the link between confidence and connection, which can lead to more emotionally intelligent intimacy.",
      "Your encouragement can have a real, positive impact on a partner's wellbeing."
    ],
    watchOuts: [
      "Be careful that reassurance doesn't become a substitute for addressing your own self-confidence directly — external validation helps, but isn't the whole picture.",
      "A partner can't be solely responsible for your confidence — it helps to build some of that foundation independently too.",
      "Don't assume a partner's confidence struggles are about you, even if they surface during intimate moments."
    ],
    partnerNeeds: [
      "A partner who offers genuine, specific affirmation — not just generically reassuring, but noticing real things.",
      "Patience around days when confidence is lower than usual.",
      "A relationship that feels like a source of support for self-esteem, not a source of pressure."
    ],
    pairings: {
      bestWith: "The Dirty Talker pairs especially well with you — specific, spoken affirmation is exactly the kind of support that lands most deeply for you.",
      frictionWith: "The One Who Wants can create friction — their confident, low-overthinking energy is great in itself, but might not naturally include the reassurance you sometimes need."
    },
    tryThis: [
      "Try naming what kind of affirmation actually helps — general reassurance lands differently than something specific a partner noticed.",
      "On lower-confidence days, try sharing that directly rather than withdrawing — 'I'm feeling a bit insecure today' invites support rather than leaving a partner guessing."
    ]
  },

  H: {
    key: "H",
    name: "The Fair Game",
    tagline: "Both hands in or don't bother.",
    narrative: [
      "For you, intimacy is deeply tied to a sense of fairness and mutual investment — not in a transactional sense, but in the sense that both people are showing up, both people are paying attention, both people are putting something in. When that balance feels off — when intimacy feels like something one person is consistently initiating, prioritizing, or maintaining — it registers, even if it's hard to articulate why.",
      "This isn't about scorekeeping in the bedroom specifically. It's that the same imbalance that shows up in who does the dishes or who remembers the plans tends to echo into how connected you feel intimately too. For you, the two are linked — a relationship that feels equal in its everyday effort tends to feel more genuinely close in its intimate moments as well.",
      "You probably approach intimacy the way you approach the rest of the relationship: as something both people are responsible for, something that benefits from attention from both sides rather than falling to one person to initiate or sustain. For you, mutual effort isn't unromantic — it's part of what makes closeness feel real."
    ],
    strengths: [
      "You bring a sense of fairness and mutual investment to intimacy, which often strengthens trust over time.",
      "You're likely attuned to patterns of imbalance, which can help address issues before they become significant.",
      "Your approach treats intimacy as a shared responsibility, which many relationships benefit from."
    ],
    watchOuts: [
      "Avoid letting 'fairness' become a rigid framework — intimacy doesn't always need to be perfectly reciprocal in the moment to be balanced overall.",
      "Be mindful that different people initiate differently — a partner who initiates less might still be deeply invested, just expressing it differently.",
      "If imbalance is a recurring feeling, naming it directly tends to work better than waiting for it to self-correct."
    ],
    partnerNeeds: [
      "A partner who takes initiative in intimacy at least some of the time, rather than consistently leaving it to you.",
      "Open conversation about how both people experience effort and investment, intimately and otherwise.",
      "A genuine sense that both people care about the quality of the connection, not just one person managing it."
    ],
    pairings: {
      bestWith: "The Open Gate pairs well with you — mutual investment and emotional safety naturally reinforce each other.",
      frictionWith: "The One Worth Chasing can create friction — their enjoyment of being sought after might read, to you, as one-sided effort, even when it's simply how they experience being wanted."
    },
    tryThis: [
      "If imbalance feels like a recurring pattern, try naming it directly and gently — 'I'd love it if you initiated sometime' is a clear, low-pressure way to raise it.",
      "Try noticing and naming effort when a partner does initiate or contribute — it reinforces exactly the pattern you're hoping for."
    ]
  }
};

/**
 * Secondary "flavor" blurbs for the Intimacy Style Test.
 */
export const INTIMACY_FLAVORS: Record<string, ArchetypeFlavor> = {
  A: {
    key: "A",
    blurb: "You also respond strongly to things being said aloud — a clearly expressed want adds something physical closeness alone doesn't capture. When desire is named directly, it lands in a way that implication never quite manages."
  },
  B: {
    key: "B",
    blurb: "You also value a slower pace — lingering, unhurried closeness rounds out how connected you feel. The build matters to you as much as anything else, and a partner who understands that gives you something most people rush past."
  },
  C: {
    key: "C",
    blurb: "You also appreciate confident initiation — a little decisiveness from a partner adds an extra spark. There's something about clear, unhesitating want that communicates desire more directly than any amount of suggestion."
  },
  D: {
    key: "D",
    blurb: "You also enjoy the feeling of being pursued — a bit of ongoing effort and anticipation means more to you than you might admit. Being actively sought out, even in subtle ways, tells you something about desire that routine comfort never quite does."
  },
  E: {
    key: "E",
    blurb: "You also have a curious streak — openness to trying new things adds an extra layer to how connected you feel. Intimacy that has room to discover something new, even within familiar territory, holds your attention in a way that pure routine doesn't."
  },
  F: {
    key: "F",
    blurb: "You also need emotional grounding underneath it all — feeling safe shapes how present you can be. When the emotional climate is right, everything else opens up. When it isn't, even the warmest physical closeness has a ceiling."
  },
  G: {
    key: "G",
    blurb: "You also respond to encouragement — feeling confident in yourself changes how connected intimacy feels. A partner who genuinely builds you up, not in a hollow way but with specific, true things, unlocks something that physical closeness alone can't."
  },
  H: {
    key: "H",
    blurb: "You also notice fairness in effort — mutual initiative adds something that one-sided effort can't. When both people are showing up and choosing this equally, the connection feels categorically different to you than when one person is carrying it."
  }
};