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
      "Words carry weight for you — not as decoration, but as proof. When someone tells you they love you, admire you, or are proud of you, it lands somewhere real. You don't just hear it, you keep it. A specific compliment, a heartfelt thank-you, an unprompted 'I'm glad you're mine' — these aren't small things to you, they're the currency of connection.",
      "This isn't about needing constant praise or being unable to function without validation. It's that language is how you build a felt sense of being known. Silence, to you, can feel ambiguous — even when everything is objectively fine, the absence of words can leave a quiet question mark hanging in the air. You'd rather things be said than assumed.",
      "In relationships, you tend to be generous with this same currency. You notice things about people and you say so. You remember what someone told you three weeks ago and bring it up again because it mattered. For you, love is something you say into existence — and something you need said back."
    ],
    strengths: [
      "You make people feel truly seen — your attention to detail in how you speak to others is rare and meaningful.",
      "You're emotionally articulate, which makes conflict resolution and deep conversations feel more natural to you than to most.",
      "You create a verbal record of appreciation that strengthens relationships over time."
    ],
    watchOuts: [
      "You may read more into silence than is actually there — not everyone communicates affection through words, and that doesn't mean it's absent.",
      "Without regular verbal affirmation, you might start to feel disconnected even when a relationship is otherwise healthy.",
      "Be mindful of fishing for compliments or reassurance in ways that put pressure on a partner who expresses love differently."
    ],
    partnerNeeds: [
      "Specific, sincere verbal affirmation — not generic compliments, but ones that show you were really paying attention.",
      "A partner willing to say things out loud rather than assuming they're understood.",
      "Open, honest conversation as a regular part of the relationship, not just during conflict."
    ],
    pairings: {
      bestWith: "The Growth Partner tends to pair well with you — they're naturally generous with encouragement and tend to say what they're thinking, which matches how you experience love.",
      frictionWith: "The One Who Acts can create friction at first — their care shows up as action rather than words, so it's worth both of you learning to translate."
    },
    tryThis: [
      "Next time you feel unheard, try naming it directly — 'I'd love to hear how you're feeling about this' — rather than waiting for it to be offered unprompted.",
      "Try affirming someone's actions, not just their words — it builds a bridge for partners who show love differently than they say it."
    ]
  },

  B: {
    key: "B",
    name: "The Chosen One",
    tagline: "You need to feel chosen, again and again.",
    narrative: [
      "For you, love isn't loud — it's continuous. It's the choice someone makes, again and again, to put their phone down, sit across from you, and actually be there. You'd take one uninterrupted evening over a grand gesture any day, because what you're really looking for isn't a moment, it's attention sustained over time.",
      "You probably notice — more than most — when someone is physically present but mentally elsewhere. A partner scrolling during a conversation, or rescheduling plans 'just this once' too often, registers as something more than an inconvenience. It reads as a quiet signal about priorities, even when that's not the intention.",
      "What you offer in return is real presence. When you're with someone, you're with them — fully, without half-measures. You create the kind of shared time that becomes the backbone of a relationship: the routines, the rituals, the ordinary Tuesday evenings that end up mattering the most."
    ],
    strengths: [
      "You build deep familiarity and closeness through consistency — your relationships tend to feel stable and well-known.",
      "You're genuinely present when you're with someone, which makes others feel valued and prioritized.",
      "You're good at creating shared rituals and routines that give a relationship texture and meaning."
    ],
    watchOuts: [
      "A packed schedule — yours or theirs — can feel like rejection even when it isn't personal.",
      "You may need to communicate clearly that 'quality time' doesn't have to mean elaborate plans; ordinary time together counts too.",
      "Watch for keeping score of time spent — connection isn't only quantitative."
    ],
    partnerNeeds: [
      "Regular, undistracted time together — even if it's brief, it needs to be genuinely present.",
      "A partner who treats shared time as a priority worth protecting, not just filling gaps in a schedule.",
      "Shared activities or rituals that become 'yours' as a couple."
    ],
    pairings: {
      bestWith: "The Verbal Heart often pairs well with you — they'll happily fill quiet, present moments with the kind of warm words that deepen the connection you're already building.",
      frictionWith: "The Growth Partner can create friction — their focus on momentum and future goals can feel, to you, like it's pulling attention away from the present moment you value most."
    },
    tryThis: [
      "Try naming what 'quality time' looks like for you specifically — a quiet evening with no agenda counts just as much as a planned outing, but not everyone assumes that.",
      "Next time plans get rescheduled, try checking in about the reason before reading it as a signal about priorities."
    ]
  },

  C: {
    key: "C",
    name: "The Somatic Lover",
    tagline: "You feel love in your body first.",
    narrative: [
      "There's a kind of reassurance that only touch can give you. A hand on your shoulder, an arm pulled around you on the sofa, a hug that lasts a beat longer than expected — these aren't just nice, they're grounding. For you, physical affection is often the fastest, most direct route to feeling safe and connected.",
      "This doesn't have to be about anything romantic or charged. Often it's the small, unspoken stuff: sitting close rather than across the room, a hand finding yours without a word, the simple fact of someone's physical presence nearby. When that's missing, even a relationship that's emotionally fine can start to feel oddly distant.",
      "You probably express affection this way too — instinctively reaching out, offering comfort through closeness rather than (or alongside) words. For you, bodies say things that sometimes words can't, and a hug at the right moment can communicate more than a paragraph of explanation."
    ],
    strengths: [
      "You're naturally comforting to be around — your affection is felt immediately and physically, which many people respond to deeply.",
      "You're attuned to nonverbal cues and closeness, often noticing tension or distress in others before it's said aloud.",
      "Your way of showing love requires no translation — it's immediate and universal."
    ],
    watchOuts: [
      "Be mindful that not everyone processes affection through touch the same way, and comfort levels vary — consent and pacing matter.",
      "A lack of physical affection can feel like a bigger rupture to you than it might be intended as.",
      "Touch shouldn't be the only language in the relationship — pairing it with words or quality time builds a fuller connection."
    ],
    partnerNeeds: [
      "Regular physical affection — not necessarily sexual, but consistent small gestures of closeness.",
      "A partner who is comfortable with casual touch as part of everyday life.",
      "Reassurance through presence — sitting close, holding hands, being physically near."
    ],
    pairings: {
      bestWith: "The Chosen One often pairs naturally with you — quiet, present closeness and physical affection tend to go hand in hand, quite literally.",
      frictionWith: "The Verbal Heart can create friction at first — if words are their main language, physical closeness alone might not feel like 'enough' to them, even when it's everything to you."
    },
    tryThis: [
      "Try pairing a touch with a few words — a hand on the shoulder plus 'I'm glad you're here' can help a partner who needs both register what you're communicating.",
      "If physical affection feels missing, try naming it specifically rather than waiting — 'I'd love a hug right now' is a small, clear ask."
    ]
  },

  D: {
    key: "D",
    name: "The One Who Acts",
    tagline: "You show love by doing, not saying.",
    narrative: [
      "You tend to notice what needs doing before anyone says it out loud — and for you, doing it is how care gets expressed. A partner who quietly handles something so you don't have to carry it is, in your eyes, saying something significant. Actions aren't a substitute for love; for you, they often are the clearest version of it.",
      "This means you might feel a flicker of disappointment when someone offers warm words but doesn't follow through on small commitments — when 'I've got this' doesn't actually translate into anything getting done. It's not that words don't matter, it's that for you, the proof tends to be in what changes.",
      "You likely show love the same way: picking up the slack, taking care of logistics, doing the unglamorous tasks that keep life running smoothly — often without making a big deal of it. Recognition matters less to you than the relief itself, though it's still nice to be noticed."
    ],
    strengths: [
      "You're dependable in a way that quietly reduces stress for the people you love.",
      "You translate care into tangible relief — your support is practical and immediately useful.",
      "You tend to follow through, which builds deep trust over time."
    ],
    watchOuts: [
      "You may undervalue verbal or emotional expressions of love if they aren't backed by action — but for some people, words are the action.",
      "Doing too much without acknowledgment can lead to quiet resentment if it goes unnoticed for too long.",
      "Be careful not to use acts of service as a way to avoid emotional conversations."
    ],
    partnerNeeds: [
      "A partner who follows through on what they say — consistency between words and actions matters a great deal.",
      "Practical support and shared responsibility, especially during stressful periods.",
      "Occasional acknowledgment of effort — not constant praise, but enough to know it's seen."
    ],
    pairings: {
      bestWith: "The Equal Measure pairs especially well with you — you both think in terms of shared responsibility, and your styles reinforce each other rather than competing.",
      frictionWith: "The Verbal Heart can create friction — if 'I love you' isn't followed by action, it may register to you as words without weight, even when it's genuinely meant."
    },
    tryThis: [
      "Try voicing appreciation out loud when someone follows through for you — even a simple acknowledgment helps a partner whose primary language is words feel the connection too.",
      "Next time you do something practical for someone, try briefly naming it — 'I took care of X so you wouldn't have to' — rather than letting it go unnoticed."
    ]
  },

  E: {
    key: "E",
    name: "The Detailed Keeper",
    tagline: "You notice everything — and remember it.",
    narrative: [
      "A small, well-chosen gift means something to you that's hard to fully explain to people who don't share this — it's not about the value of the object, it's about what it proves. Someone was thinking of you when you weren't there. They paid attention to something you mentioned once. They translated that attention into something tangible.",
      "This can get unfairly stereotyped as materialism, but for you it's closer to the opposite: it's about being known well enough that someone can choose something specifically for you. A thoughtful, inexpensive item chosen with you in mind will land far better than something expensive and generic.",
      "You're probably the person who remembers what others mention in passing — a favorite snack, a band they liked, a book they've been meaning to read — and shows up with it later. For you, gestures like this are a love language with real depth, even if the people around you sometimes miss what's actually being communicated."
    ],
    strengths: [
      "You're attentive to details about the people you love, often remembering things they've forgotten they said.",
      "You're skilled at translating attention into thoughtful, specific gestures.",
      "You make people feel individually seen through the things you notice and remember."
    ],
    watchOuts: [
      "Be careful that this doesn't get reduced to 'liking gifts' in others' eyes — the meaning behind the gesture is the real point, and it's worth explaining that.",
      "If a partner doesn't share this language, gestures might go unreciprocated in kind — look for the equivalent in how they express care.",
      "Avoid equating the size or cost of a gesture with how much someone cares."
    ],
    partnerNeeds: [
      "Thoughtful gestures, even small ones — the effort and attention matter more than the gesture itself.",
      "A partner who pays attention to the details you share, even in passing.",
      "Occasional surprises that show someone was thinking about you when you weren't around."
    ],
    pairings: {
      bestWith: "The Growth Partner tends to pair well with you — they notice things about you and act on them, which lines up closely with how you experience being thought of.",
      frictionWith: "The One Who Acts can create friction — their practical, task-focused care might overlook the smaller, symbolic gestures that mean the most to you."
    },
    tryThis: [
      "Try explaining what a gesture means to you in the moment — 'this means a lot because you remembered I mentioned it' helps a partner learn what to notice.",
      "If gestures feel one-sided, try asking what would feel meaningful to your partner — their version of 'thoughtful' might look different from yours."
    ]
  },

  F: {
    key: "F",
    name: "The Stability Seeker",
    tagline: "You need to know the ground won't shift.",
    narrative: [
      "More than excitement, more than grand declarations, what you're really looking for is the feeling of being able to fully relax around someone — to stop bracing, stop managing, stop performing. Emotional safety, to you, isn't a baseline assumption; it's something built, carefully, over time, and it's the foundation everything else stands on.",
      "You probably notice instability quickly — mixed signals, inconsistency, hot-and-cold behavior — and these things land harder on you than they might on someone else, because they directly threaten the sense of groundedness you need. A relationship that feels unpredictable, even in small ways, can be quietly exhausting no matter how exciting it might otherwise be.",
      "In return, you tend to offer a kind of calm that others gravitate toward. You're the person people feel they can say anything to without fear of an overreaction. You create the steady emotional climate that lets both people in a relationship actually be themselves."
    ],
    strengths: [
      "You create emotional environments where others feel safe to be vulnerable and honest.",
      "You're a stabilizing presence — calm, consistent, and reliable in how you show up.",
      "You're skilled at de-escalation and creating a sense of 'we're okay' even during difficult moments."
    ],
    watchOuts: [
      "You may avoid necessary conflict in order to preserve a feeling of calm — but unresolved tension can erode safety over time too.",
      "Inconsistency from a partner may feel disproportionately destabilizing to you — it helps to name this rather than internalize it as your own oversensitivity.",
      "Be wary of mistaking excitement or intensity for red flags — not all unpredictability is instability."
    ],
    partnerNeeds: [
      "Consistency — in communication, behavior, and follow-through — more than grand gestures.",
      "A partner who can sit with difficult emotions calmly rather than escalating or withdrawing.",
      "Clear, honest communication that reduces ambiguity, especially during conflict."
    ],
    pairings: {
      bestWith: "The Equal Measure pairs well with you — their proactive, fair approach tends to create exactly the kind of predictability that helps you feel settled.",
      frictionWith: "The Detailed Keeper can occasionally create friction — surprises, even nice ones, can read as unpredictability if you're not expecting them."
    },
    tryThis: [
      "If something feels unsettling, try naming the specific behavior rather than the overall feeling — 'when plans change last-minute it throws me off' is easier for a partner to act on than 'I feel anxious'.",
      "Try distinguishing excitement from instability out loud — telling a partner 'this is a good kind of unpredictable' can help recalibrate your own response too."
    ]
  },

  G: {
    key: "G",
    name: "The Growth Partner",
    tagline: "You love best when you're both growing.",
    narrative: [
      "You're drawn to relationships that move — where both people are becoming someone, not just staying comfortable. A partner who asks about your goals, remembers what you're working toward, and genuinely roots for your growth (even when it doesn't directly involve them) is doing something that matters enormously to you.",
      "This isn't about needing a partner to be a life coach. It's that stagnation, for you, can feel like a quiet kind of loneliness — even within a relationship. You want to feel like you're heading somewhere, and you want someone walking alongside you while you do, celebrating the wins and helping you up after the setbacks.",
      "You're likely this kind of presence for others too — asking real questions about their ambitions, remembering the goals they mentioned months ago, showing up with encouragement at the right moments. For you, love includes a kind of forward motion, a shared sense that both people are still growing, together or in parallel."
    ],
    strengths: [
      "You inspire growth in the people around you through genuine interest and encouragement.",
      "You bring energy and forward momentum to relationships — things rarely feel stagnant around you.",
      "You're good at celebrating others' wins without making it about yourself."
    ],
    watchOuts: [
      "Not everyone is in a growth-oriented season at all times — be mindful of unintentionally pressuring a partner who needs to simply rest.",
      "Avoid measuring a relationship's health purely by how much 'progress' is happening.",
      "Growth-focused relationships can sometimes deprioritize simple presence — make space for just being, not just becoming."
    ],
    partnerNeeds: [
      "A partner who takes genuine interest in your goals and ambitions, not just as small talk.",
      "Encouragement and belief, especially during periods of self-doubt.",
      "A relationship that has room to grow and evolve rather than staying static."
    ],
    pairings: {
      bestWith: "The Verbal Heart pairs naturally with you — encouragement said out loud is exactly the fuel that growth-oriented momentum runs on.",
      frictionWith: "The Chosen One can create friction — their focus on present, settled time together might read to you as comfortable but static, even when it isn't intended that way."
    },
    tryThis: [
      "Try asking what 'growth' looks like for your partner right now — sometimes the most supportive thing is simply being present while someone rests, not pushing forward.",
      "Next time you notice progress in someone, try naming the specific thing you noticed — it lands more than general encouragement."
    ]
  },

  H: {
    key: "H",
    name: "The Equal Measure",
    tagline: "You need it to feel genuinely fair.",
    narrative: [
      "For you, love includes logistics — and that's not a compromise, it's part of the point. A partner who shares the mental load, who remembers things without being reminded, who notices what needs doing and steps in without a negotiation, is showing you something real about how much they value the partnership.",
      "You may have noticed that imbalance in shared responsibility creates a particular kind of friction — not always dramatic, but persistent, like background noise that never fully goes away. Even in relationships that are loving in every other respect, an uneven division of mental and logistical labor can quietly wear at the connection.",
      "You likely show up this way yourself — tracking what needs to happen, anticipating needs, carrying your share without keeping score (though you probably notice if the scales tip too far for too long). For you, a relationship functions best as a genuine team, where both people are invested in the whole picture, not just their half of it."
    ],
    strengths: [
      "You bring a strong sense of fairness and partnership to relationships, which builds long-term trust.",
      "You're proactive — you notice what needs to happen and act on it without requiring direction.",
      "You think in terms of 'we' rather than 'me and you', which fosters genuine teamwork."
    ],
    watchOuts: [
      "Keeping a mental tally of who's done what can become corrosive if it's not occasionally discussed openly.",
      "Be careful not to assume a partner sees the same things you do — invisible labor is, by definition, often invisible to others.",
      "A relationship doesn't need to be perfectly 50/50 at all times — flexibility over different seasons matters more than constant exact balance."
    ],
    partnerNeeds: [
      "A partner who proactively shares responsibility rather than needing to be asked repeatedly.",
      "Open conversations about how labor — emotional, logistical, practical — is divided.",
      "A genuine sense of teamwork, where both people feel invested in the relationship's day-to-day functioning."
    ],
    pairings: {
      bestWith: "The One Who Acts pairs especially well with you — their instinct to quietly take care of things lines up directly with the kind of shared effort you value most.",
      frictionWith: "The Detailed Keeper can create friction — if gestures substitute for follow-through on shared responsibilities, the imbalance you notice can feel at odds with otherwise generous intentions."
    },
    tryThis: [
      "Try raising imbalance as a logistics conversation rather than a complaint — 'can we look at how we're splitting X' tends to land better than letting it build up silently.",
      "Next time a partner takes something off your plate, try naming it specifically — it reinforces the pattern and makes invisible labor a little more visible."
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
    blurb: "You also light up when people put feelings into words — a heartfelt message or an unexpected compliment carries extra weight for you. It doesn't have to be elaborate. Specific and sincere lands every time, and you keep those moments longer than most people realise."
  },
  B: {
    key: "B",
    blurb: "You also place real value on undistracted time together — presence, not just words or actions, rounds out how you feel cared for. Not scheduled time, necessarily. Just someone choosing to be fully there, without the pull of everything else competing for their attention."
  },
  C: {
    key: "C",
    blurb: "You also respond strongly to physical closeness — a hug or a hand to hold adds something words alone can't. It's not about grand displays. The small, instinctive gestures — moving closer, a touch on the arm, sitting side by side — register as something real."
  },
  D: {
    key: "D",
    blurb: "You also notice and appreciate practical support — when someone follows through on the small stuff, it adds up for you. Actions that remove friction from your life, done quietly and without fanfare, communicate care in a language you understand immediately."
  },
  E: {
    key: "E",
    blurb: "You also have a soft spot for thoughtful gestures — a small, well-chosen surprise goes further with you than people might expect. What moves you isn't the gesture itself but the evidence behind it: someone was paying attention, remembered, and acted on it."
  },
  F: {
    key: "F",
    blurb: "You also need a baseline of emotional steadiness — consistency and reassurance matter to you more than you might let on. Not constant check-ins, just the quiet knowledge that the ground beneath the relationship is solid and won't shift without warning."
  },
  G: {
    key: "G",
    blurb: "You also want to feel like you're growing — encouragement and shared momentum add an extra layer to how connected you feel. A partner who remembers what you're working toward and asks about it unprompted does something for you that comfort alone can't replicate."
  },
  H: {
    key: "H",
    blurb: "You also care about fairness in the everyday details — shared effort behind the scenes means more to you than it might seem. When both people are genuinely invested in the whole picture, not just their half of it, you feel the relationship more fully."
  }
};