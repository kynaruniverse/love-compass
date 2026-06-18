import { generateMeta } from "@/lib";
import { ContentSection, ContentSectionHeading, PageHero } from "@/components/ui";

export const metadata = generateMeta({
  title: "Disclaimer"
});

const Section = ContentSection;
const SectionHeading = ContentSectionHeading;

export default function DisclaimerPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16 space-y-8">

      <PageHero
        badge="Disclaimer"
        heading="What Love Compass is. And isn't."
        subheading="We'd rather be upfront about the limits of this tool than let you read more into the results than they're designed to carry."
      />

      {/* Not a clinical tool */}
      <Section>
        <SectionHeading>This is not a clinical assessment</SectionHeading>
        <p>
          Love Compass is a self-reflection tool. It is not a psychological
          instrument, a diagnostic tool, or a medical assessment of any kind.
          The results do not constitute a diagnosis, a clinical profile, or a
          professional opinion about your mental health or relationship fitness.
        </p>
        <p>
          If you're dealing with mental health challenges, relationship trauma,
          attachment difficulties, or anything that feels beyond self-reflection,
          please seek support from a qualified professional. Love Compass is not
          a substitute for therapy or counseling.
        </p>

      </Section>

      {/* What results do and don't mean */}
      <Section>
        <SectionHeading>What your results do and don't mean</SectionHeading>
        <p>
          Your results reflect patterns in how you answered a structured set of
          questions at a specific point in time. They describe tendencies and
          preferences. Not fixed traits, not permanent identity, and not a
          prediction of how any relationship will unfold.
        </p>
        <p>
          Love Compass does not tell you who to be with, whether your current
          relationship will work, or what kind of person you fundamentally are.
          It gives you a clearer picture of your relational patterns as they
          stand today. What you do with that is entirely up to you.
        </p>
        <p>
          Results can and do change over time. A profile taken during one period
          of your life may look quite different from one taken years later,
          both can be completely accurate for who you were at that moment.
        </p>

      </Section>

      {/* Adult content */}
      <Section>
        <SectionHeading>Adult content and consensual relationships</SectionHeading>
        <p>
          Some assessments, particularly the Intimacy Style Test, How You
          Desire, and the Full Profile tests, include questions about physical
          intimacy, desire, and sexual preference. These questions are designed
          for adults and assume consensual adult relationships throughout.
        </p>
        <p>
          Love Compass is intended for users aged 18 and over. If you are
          under 18, please do not take the intimacy-related assessments.
        </p>

      </Section>

      {/* No guarantees */}
      <Section>
        <SectionHeading>No guarantees</SectionHeading>
        <p>
          We've built Love Compass carefully and with genuine intention, but
          we make no guarantees about the accuracy, completeness, or suitability
          of the results for any particular person or purpose. Self-report tools
          have inherent limits, and this one is no exception.
        </p>
        <p>
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
