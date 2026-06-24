import { Archetype, ArchetypeFlavor } from "@/types/quiz";

/**
 * Primary archetypes for the Love Preference Test.
 * Keyed by the dominant category (A-H) from LOVE_CATEGORIES.
 */
export const LOVE_ARCHETYPES: Record<string, Archetype> = {
  A: {
    key: "A",
    name: "The Verbal Heart",
    tagline: "You need to hear it to believe it.",
    narrative: [
      "Words carry weight for you. Not decoration, proof. When someone tells you they love you, admire you, or are proud of you, it lands somewhere real and stays there. A specific compliment, a heartfelt thank-you, an unprompted 'I'm glad you're mine': these are the currency of connection, not small things.",
      "Silence reads as ambiguous to you, even when nothing is actually wrong. You'd rather things be said than assumed, because language is how you build a felt sense of being known. An objectively fine relationship can still feel like it's missing something if no one's naming what's good about it.",
      "You give the same way you need to receive. You notice things about people and say so. You remember what someone told you three weeks ago and bring it back up because it mattered. For you, love is something you say into existence, and something you need said back."
    ],
    strengths: [
      "You make people feel truly seen. Your attention to how you speak to others is rare and it lands.",
      "You're emotionally articulate, which makes conflict resolution and hard conversations feel more natural to you than to most.",
      "You build a verbal record of appreciation that strengthens a relationship over time, not just in the moment."
    ],
    watchOuts: [
      "You may read more into silence than is actually there. Not everyone shows affection through words, and that doesn't mean it's absent.",
      "Without regular verbal affirmation, you might feel disconnected even when the relationship is genuinely healthy.",
      "Watch for fishing for compliments or reassurance. It puts pressure on a partner who expresses love differently."
    ],
    partnerNeeds: [
      "Specific, sincere verbal affirmation, not generic compliments, ones that prove someone was actually paying attention.",
      "A partner willing to say things out loud rather than assume they're understood.",
      "Honest conversation as a regular habit, not something that only shows up during conflict."
    ],
    pairings: {
      bestWith: "The Growth Partner. They're naturally generous with encouragement and tend to say what they're thinking, which matches exactly how you experience love.",
      frictionWith: "The One Who Acts. Their care shows up as action rather than words, so it's worth both of you learning to translate the other's language."
    },
    tryThis: [
      "Name it directly when you feel unheard: 'I'd love to hear how you're feeling about this,' rather than waiting for it to be offered.",
      "Try affirming someone's actions, not just their words. It builds a bridge to partners who show love differently than they say it."
    ]
  },

  B: {
    key: "B",
    name: "The Chosen One",
    tagline: "You need to feel chosen, again and again.",
    narrative: [
      "For you, love isn't loud, it's continuous. It's the choice someone makes, again and again, to put their phone down, sit across from you, and actually be there. You'd take one uninterrupted evening over a grand gesture any day, because what you're really looking for is attention sustained over time, not a single moment of it.",
      "You notice more than most when someone is physically present but mentally elsewhere. A partner scrolling mid-conversation, or rescheduling plans 'just this once' too often, reads as more than an inconvenience. It registers as a quiet signal about priorities, even when that's not the intention behind it.",
      "What you offer in return is real presence. When you're with someone, you're actually with them, no half-measures. You build the kind of shared time that becomes the backbone of a relationship: the routines, the rituals, the ordinary Tuesday evenings that end up mattering most."
    ],
    strengths: [
      "You build deep familiarity through consistency. Your relationships tend to feel stable and genuinely well-known.",
      "You're fully present when you're with someone, which makes people feel valued rather than fit in.",
      "You create shared rituals and routines that give a relationship real texture over time."
    ],
    watchOuts: [
      "A packed schedule, yours or theirs, can feel like rejection even when it isn't personal at all.",
      "Say plainly that quality time doesn't need to mean elaborate plans. Ordinary time together counts just as much.",
      "Watch for keeping score of time spent. Connection isn't only quantitative."
    ],
    partnerNeeds: [
      "Regular, undistracted time together. Even brief is fine, as long as it's genuinely present.",
      "A partner who treats shared time as worth protecting, not just something to fill gaps in a schedule.",
      "Shared activities or rituals that become unmistakably yours as a couple."
    ],
    pairings: {
      bestWith: "The Verbal Heart. They'll happily fill quiet, present moments with the kind of warm words that deepen the connection you're already building.",
      frictionWith: "The Growth Partner. Their focus on momentum and future goals can feel like it's pulling attention away from the present moment you value most."
    },
    tryThis: [
      "Name what quality time actually looks like for you. A quiet evening with no agenda counts just as much as a planned outing, but not everyone assumes that.",
      "Next time plans get rescheduled, check in about the reason before reading it as a signal about priorities."
    ]
  },

  C: {
    key: "C",
    name: "The Somatic Lover",
    tagline: "You feel love in your body first.",
    narrative: [
      "Touch reassures you in a way nothing else quite does. A hand on your shoulder, an arm pulled around you on the sofa, a hug that lasts a beat longer than expected: these ground you. For you, physical affection is often the fastest, most direct route to feeling safe and connected.",
      "It doesn't need to be romantic or charged. Often it's the small, unspoken stuff: sitting close instead of across the room, a hand finding yours without a word, the simple fact of someone nearby. When that's missing, even an emotionally healthy relationship can start to feel oddly distant.",
      "You express affection the same way. You reach out instinctively, offering comfort through closeness alongside, or instead of, words. Bodies say things words sometimes can't, and a hug at the right moment can communicate more than a paragraph of explanation."
    ],
    strengths: [
      "You're naturally comforting to be around. Your affection registers immediately and physically, and people feel it.",
      "You're attuned to nonverbal cues, often noticing tension or distress in someone before they've said a word.",
      "Your way of showing love needs no translation. It's immediate and it's universal."
    ],
    watchOuts: [
      "Not everyone processes affection through touch the same way, and comfort levels vary. Consent and pacing matter.",
      "A lack of physical affection can feel like a bigger rupture to you than it was ever intended as.",
      "Touch shouldn't be the only language in the relationship. Pair it with words or time together for a fuller connection."
    ],
    partnerNeeds: [
      "Regular physical affection, not necessarily sexual, just consistent small gestures of closeness.",
      "A partner genuinely comfortable with casual touch as part of everyday life.",
      "Reassurance through presence: sitting close, holding hands, being physically near."
    ],
    pairings: {
      bestWith: "The Chosen One. Quiet, present closeness and physical affection tend to go hand in hand, quite literally.",
      frictionWith: "The Verbal Heart. If words are their main language, physical closeness alone might not feel like enough to them, even when it's everything to you."
    },
    tryThis: [
      "Pair a touch with a few words. A hand on the shoulder plus 'I'm glad you're here' helps a partner who needs both register what you're communicating.",
      "If physical affection feels missing, name it specifically rather than waiting: 'I'd love a hug right now' is a small, clear ask."
    ]
  },

  D: {
    key: "D",
    name: "The One Who Acts",
    tagline: "You show love by doing, not saying.",
    narrative: [
      "You show care by doing. Before anyone says what needs handling, you've usually already noticed and started on it. A partner who quietly takes something off your plate is telling you something real. For you, action isn't a substitute for love, it's love in its clearest form.",
      "Warm words without follow-through land oddly for you, even when they're meant well. 'I've got this' that never actually gets done reads as a gap, not a gesture. That's not because words don't matter to you. It's that you trust what changes, not what's said.",
      "You give the same way you receive. Picking up the slack, handling logistics, doing the unglamorous work that keeps everything running, usually without making it a moment. Being noticed is nice. Being needed less is the actual point."
    ],
    strengths: [
      "You're dependable in a way that quietly lowers everyone's stress, including your own.",
      "You turn care into something usable. Your support shows up as real, practical relief.",
      "You follow through, every time, and that builds trust faster than words ever could."
    ],
    watchOuts: [
      "You may discount verbal or emotional expressions of love that aren't backed by action. For some people, the words are the action.",
      "Unacknowledged effort can curdle into quiet resentment. It's worth naming before it builds.",
      "Acts of service can become a way to avoid harder emotional conversations. Notice if that's happening."
    ],
    partnerNeeds: [
      "Follow-through. When someone says they'll do something, you need them to actually do it.",
      "Practical support during hard stretches, not just sympathy.",
      "A little acknowledgment. Not praise, just confirmation that the effort was seen."
    ],
    pairings: {
      bestWith: "The Equal Measure. You both think in terms of shared responsibility, so your instincts reinforce each other instead of competing.",
      frictionWith: "The Verbal Heart. If 'I love you' isn't followed by something tangible, it can read as weightless to you, even when it's completely sincere."
    },
    tryThis: [
      "Say the appreciation out loud when someone follows through for you. It's a small thing that helps a words-first partner actually feel the connection.",
      "Name what you did, briefly: 'I handled X so you wouldn't have to.' Letting it go unnoticed teaches no one anything."
    ]
  },

  E: {
    key: "E",
    name: "The Detailed Keeper",
    tagline: "You notice everything, and remember it.",
    narrative: [
      "A small, well-chosen gift means something to you that's hard to explain to people who don't share this. It's not about the object's value, it's about what it proves: someone was thinking of you when you weren't there, and they translated that attention into something real.",
      "This gets unfairly stereotyped as materialism, but for you it's closer to the opposite. It's about being known well enough that someone can choose something specifically for you. A thoughtful, inexpensive item picked with you in mind lands harder than something expensive and generic ever could.",
      "You're probably the one who remembers what people mention in passing, a favorite snack, a band they liked, a book they've been meaning to read, and shows up with it later. For you, this is a love language with real depth, even when the people around you miss what's actually being said."
    ],
    strengths: [
      "You're attentive to detail, often remembering things someone has already forgotten they said.",
      "You translate attention into thoughtful, specific gestures better than almost anyone.",
      "You make people feel individually seen through the things you notice and keep."
    ],
    watchOuts: [
      "Don't let this get reduced to 'liking gifts' in others' eyes. The meaning behind the gesture is the real point, and it's worth saying so.",
      "If a partner doesn't share this language, gestures might not come back in kind. Look for their equivalent instead.",
      "Avoid equating the size or cost of a gesture with how much someone actually cares."
    ],
    partnerNeeds: [
      "Thoughtful gestures, even small ones. The attention behind it matters more than the gesture itself.",
      "A partner who actually registers the details you mention, even in passing.",
      "Occasional surprises that prove someone was thinking about you when you weren't around."
    ],
    pairings: {
      bestWith: "The Growth Partner. They notice things about you and act on them, which lines up closely with how you experience being thought of.",
      frictionWith: "The One Who Acts. Their practical, task-focused care can overlook the smaller, symbolic gestures that mean the most to you."
    },
    tryThis: [
      "Say what a gesture meant in the moment: 'this means a lot because you remembered I mentioned it' teaches a partner what to notice.",
      "If gestures feel one-sided, ask what would feel meaningful to your partner. Their version of thoughtful might look completely different from yours."
    ]
  },

  F: {
    key: "F",
    name: "The Stability Seeker",
    tagline: "You need to know the ground won't shift.",
    narrative: [
      "More than excitement, more than grand declarations, what you're actually looking for is the ability to fully relax around someone: to stop bracing, stop managing, stop performing. Emotional safety isn't a baseline assumption for you, it's something built carefully over time, and it's the foundation everything else stands on.",
      "You notice instability fast: mixed signals, inconsistency, hot-and-cold behavior. These land harder on you than they might on someone else, because they directly threaten the groundedness you need. A relationship that feels unpredictable, even in small ways, can be quietly exhausting no matter how exciting it otherwise is.",
      "In return, you offer a kind of calm that others gravitate toward. You're the person people feel they can say anything to without fear of an overreaction. You create the steady emotional climate that lets both people in a relationship actually be themselves."
    ],
    strengths: [
      "You create environments where people feel safe to be vulnerable and honest, often without realizing how rare that is.",
      "You're a stabilizing presence: calm, consistent, reliable in exactly how you show up.",
      "You're skilled at de-escalation, and at creating a sense of 'we're okay' even during hard moments."
    ],
    watchOuts: [
      "You may avoid necessary conflict to preserve a feeling of calm. Unresolved tension erodes safety too, just more slowly.",
      "Inconsistency from a partner may hit you disproportionately hard. Name that rather than treat it as your own oversensitivity.",
      "Watch for mistaking excitement or intensity for red flags. Not all unpredictability means instability."
    ],
    partnerNeeds: [
      "Consistency in communication, behavior, and follow-through, more than grand gestures.",
      "A partner who can sit with difficult emotions calmly rather than escalating or withdrawing.",
      "Clear, honest communication that reduces ambiguity, especially during conflict."
    ],
    pairings: {
      bestWith: "The Equal Measure. Their proactive, fair approach creates exactly the kind of predictability that helps you feel settled.",
      frictionWith: "The Detailed Keeper. Surprises, even nice ones, can read as unpredictability if you're not expecting them."
    },
    tryThis: [
      "Name the specific behavior, not the overall feeling: 'when plans change last-minute it throws me off' is easier for a partner to act on than 'I feel anxious.'",
      "Distinguish excitement from instability out loud. Telling a partner 'this is a good kind of unpredictable' can recalibrate your own response too."
    ]
  },

  G: {
    key: "G",
    name: "The Growth Partner",
    tagline: "You love best when you're both growing.",
    narrative: [
      "You're drawn to relationships that move, where both people are becoming someone, not just staying comfortable. A partner who asks about your goals, remembers what you're working toward, and genuinely roots for your growth, even when it doesn't involve them directly, is doing something that matters enormously to you.",
      "This isn't about needing a life coach. It's that stagnation can feel like a quiet kind of loneliness to you, even inside a relationship. You want to feel like you're heading somewhere, with someone walking alongside you, celebrating the wins and helping you back up after the setbacks.",
      "You're this kind of presence for others too. Asking real questions about their ambitions, remembering the goals they mentioned months ago, showing up with encouragement at the right moment. For you, love includes forward motion, a shared sense that both people are still growing, together or in parallel."
    ],
    strengths: [
      "You inspire growth in the people around you through genuine interest, not performance.",
      "You bring energy and forward momentum to relationships. Things rarely feel stagnant around you.",
      "You celebrate other people's wins without quietly making it about yourself."
    ],
    watchOuts: [
      "Not everyone is in a growth-oriented season all the time. Watch for unintentionally pressuring a partner who just needs to rest.",
      "Don't measure a relationship's health purely by how much progress is happening.",
      "Growth-focused relationships can deprioritize simple presence. Make room for just being, not just becoming."
    ],
    partnerNeeds: [
      "A partner who takes genuine interest in your goals, not as small talk but as something they track.",
      "Encouragement and belief, especially during periods of self-doubt.",
      "A relationship with room to grow and evolve, not one that stays static by default."
    ],
    pairings: {
      bestWith: "The Verbal Heart. Encouragement said out loud is exactly the fuel that growth-oriented momentum runs on.",
      frictionWith: "The Chosen One. Their focus on present, settled time together can read to you as comfortable but static, even when that's not the intent."
    },
    tryThis: [
      "Ask what growth actually looks like for your partner right now. Sometimes the most supportive thing is being present while someone rests, not pushing forward.",
      "When you notice progress in someone, name the specific thing you saw. It lands harder than general encouragement."
    ]
  },

  H: {
    key: "H",
    name: "The Equal Measure",
    tagline: "You need it to feel genuinely fair.",
    narrative: [
      "For you, love includes logistics. That's not a compromise, it's part of the point. A partner who shares the mental load, remembers things without being reminded, and notices what needs doing without a negotiation is showing you something real about how much they value the partnership.",
      "Imbalance in shared responsibility creates a particular kind of friction for you. Not always dramatic, but persistent, like background noise that never fully clears. Even in relationships that are loving in every other respect, an uneven split of mental and logistical labor quietly wears at the connection.",
      "You show up this way yourself. Tracking what needs to happen, anticipating needs, carrying your share without keeping score, though you notice if the scales tip too far for too long. For you, a relationship works best as a genuine team, where both people are invested in the whole picture, not just their half of it."
    ],
    strengths: [
      "You bring a strong sense of fairness and partnership to relationships, and it builds trust that lasts.",
      "You're proactive. You notice what needs to happen and act on it without needing direction.",
      "You think in terms of 'we,' not 'me and you,' and it shows in how the relationship actually runs."
    ],
    watchOuts: [
      "A mental tally of who's done what can turn corrosive if it's never said out loud.",
      "Don't assume a partner sees what you see. Invisible labor is, by definition, often invisible to others.",
      "A relationship doesn't need to be exactly 50/50 at all times. Flexibility across seasons matters more than constant precision."
    ],
    partnerNeeds: [
      "A partner who shares responsibility proactively, not one who needs to be asked repeatedly.",
      "Open conversations about how labor, emotional, logistical, and practical, actually gets divided.",
      "A genuine sense of teamwork, where both people feel invested in the relationship's day-to-day."
    ],
    pairings: {
      bestWith: "The One Who Acts. Their instinct to quietly take care of things lines up directly with the kind of shared effort you value most.",
      frictionWith: "The Detailed Keeper. If gestures substitute for follow-through on shared responsibilities, the imbalance you notice can sit oddly against otherwise generous intentions."
    },
    tryThis: [
      "Raise imbalance as a logistics conversation, not a complaint. 'Can we look at how we're splitting X' tends to land better than letting it build silently.",
      "When a partner takes something off your plate, name it specifically. It reinforces the pattern and makes invisible labor a little more visible."
    ]
  }
};

/**
 * Secondary "flavor" blurbs for the Love Preference Test.
 * Appended after the primary archetype narrative when there's a clear
 * second-highest category.
 */
export const LOVE_FLAVORS: Record<string, ArchetypeFlavor> = {
  A: {
    key: "A",
    blurb: "You also light up when people put feelings into words. A heartfelt message or an unexpected compliment carries extra weight for you. It doesn't need to be elaborate. Specific and sincere lands every time, and you keep those moments longer than most people realize."
  },
  B: {
    key: "B",
    blurb: "You also place real value on undistracted time together. Presence, not just words or actions, rounds out how cared for you feel. Not scheduled time, necessarily, just someone choosing to be fully there, without everything else pulling at their attention."
  },
  C: {
    key: "C",
    blurb: "You also respond strongly to physical closeness. A hug or a hand to hold adds something words alone can't reach. It's not about grand displays. The small, instinctive gestures, moving closer, a touch on the arm, sitting side by side, register as something real."
  },
  D: {
    key: "D",
    blurb: "You also notice and appreciate practical support. When someone follows through on the small stuff, it adds up for you. Actions that quietly remove friction from your life communicate care in a language you understand immediately."
  },
  E: {
    key: "E",
    blurb: "You also have a soft spot for thoughtful gestures. A small, well-chosen surprise goes further with you than people expect. What moves you isn't the gesture itself, it's the evidence behind it: someone paid attention, remembered, and acted on it."
  },
  F: {
    key: "F",
    blurb: "You also need a baseline of emotional steadiness. Consistency and reassurance matter to you more than you let on. Not constant check-ins, just the quiet knowledge that the ground beneath the relationship is solid and won't shift without warning."
  },
  G: {
    key: "G",
    blurb: "You also want to feel like you're growing. Encouragement and shared momentum add an extra layer to how connected you feel. A partner who remembers what you're working toward, and asks unprompted, does something comfort alone can't replicate."
  },
  H: {
    key: "H",
    blurb: "You also care about fairness in the everyday details. Shared effort behind the scenes means more to you than it might seem. When both people are genuinely invested in the whole picture, not just their half of it, you feel the relationship more fully."
  }
};
