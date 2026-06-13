import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "Methodology"
});

function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] overflow-hidden shadow-sm p-7 sm:p-9">
      <div className="absolute inset-0 paper-texture opacity-[0.3] pointer-events-none" />
      <div className="relative space-y-4">{children}</div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl font-bold text-[var(--primary)] leading-snug">
      {children}
    </h2>
  );
}

export default function MethodologyPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16 space-y-8">

      {/* Hero */}
      <div className="space-y-3 pb-2">
        <span className="inline-block px-3 py-1 stamp-badge text-xs font-medium text-[var(--accent)]">
          Methodology
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)]">
          How it works
        </h1>
        <p className="text-lg opacity-70 leading-relaxed max-w-xl">
          Love Compass isn't a personality quiz. Here's exactly how the
          assessments are built, how your answers are scored, and what
          the results actually mean.
        </p>
      </div>

      {/* Question design */}
      <Section>
        <SectionHeading>How the questions are designed</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Every question is written to surface genuine relational preference —
          not the answer you think sounds healthiest, most mature, or most
          desirable. That's harder to achieve than it sounds. People are
          remarkably good at answering as the version of themselves they're
          working toward rather than the version that actually shows up in
          relationships.
        </p>
        <p className="opacity-80 leading-relaxed">
          To counter this, the assessments use two question formats. Forced-choice
          questions ask you to pick between two options when you can't have both —
          revealing your true relative preferences under constraint. Scale questions
          measure the strength of feeling on a specific dimension. Some questions
          are reverse-scored to catch automatic or socially desirable answering
          patterns.
        </p>
        <p className="opacity-80 leading-relaxed">
          The instruction to answer as you actually are — not as you want to be —
          is the most important part of the whole process. The questions only work
          if you take it seriously.
        </p>
      </Section>

      {/* Scoring */}
      <Section>
        <SectionHeading>How scoring works</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Your answers accumulate weighted scores across eight relational
          dimensions. Each question is mapped to one or more dimensions, and
          the weight reflects how strongly that question distinguishes between
          them.
        </p>
        <p className="opacity-80 leading-relaxed">
          Scores are then normalised so your results show a genuine distribution —
          not just which dimension scored highest, but by how much, and what came
          close behind. That full picture matters. Two people can share the same
          primary result and feel completely different to love, because their
          secondary dimensions diverge.
        </p>
        <p className="opacity-80 leading-relaxed">
          The percentage shown next to each category reflects how consistently
          that dimension appeared across your answers, measured against the
          maximum it could have scored. Think of it as signal strength, not a
          grade.
        </p>
      </Section>

      {/* Archetypes */}
      <Section>
        <SectionHeading>Archetypes and flavours</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Once your profile is scored, it's matched to an archetype — a named
          pattern that captures how your top dimensions combine in practice.
          Archetypes aren't labels. They're shorthand for something more
          complex: a way of describing how your relational tendencies show up
          together, not in isolation.
        </p>
        <p className="opacity-80 leading-relaxed">
          Your secondary dimension — the one that scored closest behind your
          primary — is called your flavour. It's where a lot of the nuance
          lives. Two people with the same primary archetype can feel very
          different to be in a relationship with, because their flavours pull
          in different directions. Pay attention to it.
        </p>
      </Section>

      {/* Interpretation */}
      <Section>
        <SectionHeading>What the results mean</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          A higher score in a dimension reflects a stronger relative preference
          — not a fixed trait, not a personality type, and not a prediction
          about how any specific relationship will go. People are complex,
          context-dependent, and capable of change. Your results today may look
          different from your results in three years, and both can be completely
          accurate.
        </p>
        <p className="opacity-80 leading-relaxed">
          The goal is clarity, not categorisation. Use your profile as a map —
          a clearer picture of your actual patterns — not as a conclusion about
          who you are or who you can be.
        </p>
      </Section>

      {/* Limitations */}
      <Section>
        <SectionHeading>Limitations</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Love Compass is not clinically validated and should not be used for
          psychological diagnosis, professional relationship advice, or any
          clinical purpose. It is a self-reflection tool, built carefully and
          grounded in relationship research — but it is not a substitute for
          therapy, counselling, or professional support.
        </p>
        <p className="opacity-80 leading-relaxed">
          Self-report tools have well-documented limits. People don't always
          know themselves as well as they think. Social desirability bias is
          real. Emotional state at the time of answering affects responses.
          These are not flaws unique to Love Compass — they're inherent to
          any tool of this kind, and worth keeping in mind when reading your
          results.
        </p>
        <p className="opacity-80 leading-relaxed">
          What we can say is that the assessments are designed with those
          limits in mind — and that the most useful thing you can bring to
          them is honesty.
        </p>
      </Section>

      {/* Disclaimer */}
      <p className="text-xs opacity-40 text-center leading-relaxed pb-4">
        Love Compass is a self-reflection tool, not a clinical or psychological
        assessment. Results reflect patterns and preferences, not fixed traits.
      </p>

    </main>
  );
}
