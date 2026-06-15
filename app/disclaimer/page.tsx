import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "Disclaimer"
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

export default function DisclaimerPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16 space-y-8">

      {/* Hero */}
      <div className="space-y-3 pb-2">
        <span className="inline-block px-3 py-1 stamp-badge text-xs font-medium text-[var(--accent)]">
          Disclaimer
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)]">
          What Love Compass is. And isn't.
        </h1>
        <p className="text-lg opacity-70 leading-relaxed max-w-xl">
          We'd rather be upfront about the limits of this tool than let
          you read more into the results than they're designed to carry.
        </p>
      </div>

      {/* Not a clinical tool */}
      <Section>
        <SectionHeading>This is not a clinical assessment</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Love Compass is a self-reflection tool. It is not a psychological
          instrument, a diagnostic tool, or a medical assessment of any kind.
          The results do not constitute a diagnosis, a clinical profile, or a
          professional opinion about your mental health or relationship fitness.
        </p>
        <p className="opacity-80 leading-relaxed">
          If you're dealing with mental health challenges, relationship trauma,
          attachment difficulties, or anything that feels beyond self-reflection,
          please seek support from a qualified professional. Love Compass is not
          a substitute for therapy or counseling.
        </p>
      </Section>

      {/* What results do and don't mean */}
      <Section>
        <SectionHeading>What your results do and don't mean</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Your results reflect patterns in how you answered a structured set of
          questions at a specific point in time. They describe tendencies and
          preferences. Not fixed traits, not permanent identity, and not a
          prediction of how any relationship will unfold.
        </p>
        <p className="opacity-80 leading-relaxed">
          Love Compass does not tell you who to be with, whether your current
          relationship will work, or what kind of person you fundamentally are.
          It gives you a clearer picture of your relational patterns as they
          stand today. What you do with that is entirely up to you.
        </p>
        <p className="opacity-80 leading-relaxed">
          Results can and do change over time. A profile taken during one period
          of your life may look quite different from one taken years later,
          both can be completely accurate for who you were at that moment.
        </p>
      </Section>

      {/* Adult content */}
      <Section>
        <SectionHeading>Adult content and consensual relationships</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Some assessments, particularly the Intimacy Style Test, How You
          Desire, and the Full Profile tests, include questions about physical
          intimacy, desire, and sexual preference. These questions are designed
          for adults and assume consensual adult relationships throughout.
        </p>
        <p className="opacity-80 leading-relaxed">
          Love Compass is intended for users aged 18 and over. If you are
          under 18, please do not take the intimacy-related assessments.
        </p>
      </Section>

      {/* No guarantees */}
      <Section>
        <SectionHeading>No guarantees</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          We've built Love Compass carefully and with genuine intention, but
          we make no guarantees about the accuracy, completeness, or suitability
          of the results for any particular person or purpose. Self-report tools
          have inherent limits, and this one is no exception.
        </p>
        <p className="opacity-80 leading-relaxed">
          The creators of Love Compass are not liable for any decisions,
          interpretations, or actions taken based on your results. Use them as
          a starting point for reflection. Not a conclusion.
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
