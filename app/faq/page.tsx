"use client";

import { useState } from "react";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

// ── Accordion item ────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string | React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] overflow-hidden shadow-sm">
      <div className="absolute inset-0 paper-texture opacity-[0.25] pointer-events-none" />
      <button
        onClick={() => setOpen(o => !o)}
        className="relative w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="font-serif font-semibold text-[var(--primary)] leading-snug group-hover:opacity-80 transition-opacity">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--accent)] text-lg font-light transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="relative overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "600px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-5 text-sm leading-relaxed opacity-75">
          {a}
        </div>
      </div>
    </div>
  );
}

// ── FAQ data ──────────────────────────────────────────────────────────────────

const faqs: { category: string; items: { q: string; a: string | React.ReactNode }[] }[] = [
  {
    category: "About the assessments",
    items: [
      {
        q: "Is this scientifically validated?",
        a: "Honestly, no. Let's be clear about what that question is really asking. Science is exceptional at measuring repeatable, observable phenomena. Love is neither. No lab has successfully bottled why one person can feel completely known by a partner and completely invisible with another who, on paper, ticks every box. Love Compass doesn't claim clinical validation. What it does is give you a structured mirror built on frameworks grounded in decades of relationship research, filtered through the one variable that actually matters: whether the results make you recognise something true about yourself. That's the only measure worth having here."
      },
      {
        q: "What's the difference between the receiving and giving tests?",
        a: "The receiving tests are about what you need: how love and desire need to arrive for you to feel them. The giving tests are about what you naturally offer: how you express care and want without even thinking about it, and which kind of partner will feel most seen by exactly that. Most people have taken tests like this before and only ever seen one side. Taking both is where it gets genuinely interesting. Sometimes uncomfortable too."
      },
      {
        q: "How long does each assessment take?",
        a: "Five to ten minutes. But the time is the least interesting thing about it. Sit with each question properly rather than clicking through on instinct. The answers that come quickest are often the least honest ones."
      },
      {
        q: "Should I answer based on how I am, or how I want to be?",
        a: "How you actually are. Every time. It's tempting to answer as the version of yourself you're working toward. More secure, more generous, more emotionally available. But that person doesn't need the results. You do. The most useful thing you can bring to this is honesty, even when the honest answer is a little uncomfortable to look at."
      },
      {
        q: "Can I take the tests more than once?",
        a: "As many times as you like. Nothing is saved between sessions. Each visit is a clean slate. People often find their results shift meaningfully after a significant relationship, a period of therapy, or simply a few years of living differently. Who you are at 24, coming out of your first real relationship, and who you are at 36 having genuinely learned some things: they can look almost nothing alike. Both can be accurate. It's worth checking in."
      },
    ]
  },
  {
    category: "Understanding your results",
    items: [
      {
        q: "Why do I have multiple top results instead of one clear answer?",
        a: "Because you're not one thing. Any tool that tells you otherwise is simplifying you for its own convenience. Relational preferences are almost always a blend, and your profile mix is usually more accurate and more interesting than a single tidy label. If two categories are close, that's not a flaw in the results. That's the results being honest about you."
      },
      {
        q: "My result doesn't feel accurate. What should I do?",
        a: "First, honest question: did you answer as you actually are, or as you'd prefer to be? That gap is where most inaccurate results come from. If you're genuinely confident your answers were honest and it still feels off, sit with it a little longer before dismissing it. Sometimes the result that feels wrong is the most revealing one. The Intimacy test in particular has a way of returning things people weren't quite ready to see."
      },
      {
        q: "What does the percentage next to each category mean?",
        a: "It shows how consistently that dimension appeared across your answers, measured against the maximum it could have scored. Think of it as signal strength, not a grade. A high percentage means that category came through loudly and repeatedly. Lower doesn't mean absent. Just quieter. And none of these numbers are a measure of how loveable or desirable you are. That's not what we're measuring."
      },
      {
        q: "What does the secondary flavor in my result mean?",
        a: "It's the dimension that came in second, close enough to matter, strong enough to shape how your primary type actually shows up in real life. Two people can share a primary archetype and feel completely different to love or be loved by, because their secondary flavors pull in different directions. Pay attention to it. It's where most of the nuance lives.",
      },
      {
        q: "Can my results change over time?",
        a: "Yes. And if they don't across many years, that might be the more interesting thing to examine. Attachment patterns shift. Old damage heals or deepens. A result you got at 22 and one you get at 35 can look almost nothing alike, and both can be entirely true for who you were at that moment. Think of it less as a one-time test and more as a periodic check-in with yourself."
      },
    ]
  },
  {
    category: "Privacy & data",
    items: [
      {
        q: "Is my data stored anywhere?",
        a: "No. Your answers live only in your browser session and disappear the moment you close the tab. Nothing is sent to a server. Nothing sits in a database. We genuinely cannot see your answers. That's by design, not just policy."
      },
      {
        q: "Do I need to create an account?",
        a: "No account, no sign-up, no email required. You open the assessment, you take it, you get your results. That's it. We think that's how it should be."
      },
      {
        q: "Is Love Compass free?",
        a: "Completely free. No paywalls, no premium tier, no 'unlock your full results' gate. What you see is what you get."
      },
    ]
  },
  {
    category: "Using results in relationships",
    items: [
      {
        q: "Should I share my results with my partner?",
        a: "If you're in a relationship, yes. Sooner rather than later. Sharing results opens conversations that most couples spend years dancing around. Seeing where your giving and receiving profiles align, and where they don't, gives you something real and concrete to work with instead of another vague argument about feeling misunderstood. Just go in treating it as a starting point, not a verdict on either of you."
      },
      {
        q: "My partner's giving profile doesn't match my receiving profile. Is that a problem?",
        a: "It's one of the most common things we see, and no, it's not a death sentence for the relationship. Most couples have meaningful mismatch between how they give and receive love. The difference between couples who struggle with it and couples who don't is almost always the same thing: awareness. You can't bridge a gap you haven't named. Now you've named it."
      },
      {
        q: "Can I use this to find a compatible partner?",
        a: "Not yet. Love Compass is currently a self-reflection tool, not a matching platform. But here's the thing: most people go looking for a partner before they've done this work, which is a bit like shopping without knowing what you actually need. Taking both your receiving and giving assessments gives you a genuinely clear picture of what you're looking for and what you bring. That clarity is more useful than any algorithm."
      },
    ]
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  return (
    <>
      <ParticleCanvas />

      <main className="relative z-10 max-w-3xl mx-auto px-5 py-16 space-y-12">

        {/* Header */}
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 stamp-badge text-xs font-medium text-[var(--accent)]">
            FAQ
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)]">
            Common questions
          </h1>
          <p className="text-lg opacity-70 leading-relaxed max-w-xl">
            Honest answers. No filler. No upsell at the bottom.
          </p>
        </div>

        {/* FAQ sections */}
        {faqs.map(section => (
          <div key={section.category} className="space-y-3">
            <h2 className="font-serif text-lg font-semibold text-[var(--accent)] tracking-wide">
              {section.category}
            </h2>
            <div className="space-y-2">
              {section.items.map(item => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="relative rounded-3xl border border-[var(--primary-soft)] bg-[var(--primary-soft)] p-7 text-center space-y-3 overflow-hidden">
          <div className="absolute inset-0 paper-texture opacity-[0.25] pointer-events-none" />
          <div className="relative">
            <p className="font-serif text-lg font-semibold text-[var(--primary)]">
              Still have a question?
            </p>
            <p className="text-sm opacity-60 mt-1">
              The best way to understand your results is to take an assessment and
              sit with what comes up. Most people find it more revealing than they expected.
            </p>
            <a
              href="/assessments"
              className="inline-block mt-4 px-5 py-2.5 rounded-2xl bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
              Take an Assessment →
            </a>
          </div>
        </div>

        <p className="text-xs opacity-40 text-center leading-relaxed pb-4">
          Love Compass is a self-reflection tool, not a clinical or psychological assessment.
        </p>

      </main>
    </>
  );
}