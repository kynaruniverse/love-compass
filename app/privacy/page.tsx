import { generateMeta } from "@/lib";
import { ContentSection, ContentSectionHeading, PageHero } from "@/components/ui";

export const metadata = generateMeta({
  title: "Privacy Policy"
});

const Section = ContentSection;
const SectionHeading = ContentSectionHeading;

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16 space-y-8">

      <PageHero
        badge="Privacy"
        heading="Your answers are yours."
        subheading="Love Compass was built on a simple principle: what you share here stays here. This page explains exactly what that means in practice."
      />

      {/* No data collection */}
      <Section>
        <SectionHeading>We don't collect your data</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Love Compass does not collect, store, or transmit personal data of
          any kind. There are no accounts, no sign-ups, and no forms that send
          information anywhere. Your name, email address, and identity are
          never asked for. We have no use for them.
        </p>
        <p className="opacity-80 leading-relaxed">
          This isn't just policy. It's how the tool is built. There is no
          server receiving your answers. There is no database storing your
          results. We genuinely cannot see what you choose. That's
          by design, not by accident.
        </p>
      </Section>

      {/* How session storage works */}
      <Section>
        <SectionHeading>How your answers are stored</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          When you complete an assessment, your answers and results are held
          temporarily in your browser's session storage, a private, local
          space that exists only for the duration of your current tab. The
          moment you close the tab or navigate away, that data is gone.
        </p>
        <p className="opacity-80 leading-relaxed">
          Nothing is written to a cookie. Nothing is sent to a third party.
          Nothing persists between sessions. If you take the same assessment
          twice, the second run has no memory of the first.
        </p>
      </Section>

      {/* No tracking */}
      <Section>
        <SectionHeading>No tracking or analytics</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Love Compass does not use analytics platforms, advertising trackers,
          or third-party scripts that monitor your behaviour. There are no
          tracking cookies. There is no pixel. We don't know how many people
          took a particular assessment, how long they spent on it, or what
          their results were.
        </p>
        <p className="opacity-80 leading-relaxed">
          We built it this way deliberately. A tool designed to help people
          reflect honestly on their most personal patterns shouldn't be
          watching them while they do it.
        </p>
      </Section>

      {/* Third parties */}
      <Section>
        <SectionHeading>Third-party services</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Love Compass is hosted on Vercel. As with any web host, Vercel may
          log standard server-level data such as IP addresses and request
          timestamps as part of normal infrastructure operation. This is
          separate from application-level data and is governed by{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[var(--primary)] transition-opacity active:opacity-60"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            Vercel's privacy policy
          </a>
          .
        </p>
        <p className="opacity-80 leading-relaxed">
          No other third-party services are integrated into Love Compass.
        </p>
      </Section>

      {/* Your rights */}
      <Section>
        <SectionHeading>Your rights</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Because we hold no personal data about you, there is nothing for us
          to delete, export, or correct on your behalf. You have full and
          immediate control over everything associated with your use of Love
          Compass. It lives in your browser and disappears when you're done.
        </p>
        <p className="opacity-80 leading-relaxed">
          If you have questions about this policy, you can reach us at{" "}
          <a
            href="mailto:charlesblackwoodofficial@gmail.com"
            className="underline text-[var(--primary)] transition-opacity active:opacity-60"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            charlesblackwoodofficial@gmail.com
          </a>
          .
        </p>
      </Section>

      {/* Changes */}
      <Section>
        <SectionHeading>Changes to this policy</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          If anything here changes, we'll update this page and revise the date
          below. We don't anticipate significant changes. The core principle
          of not collecting your data isn't going anywhere.
        </p>
        <p className="opacity-80 leading-relaxed">
          Last updated: June 2026.
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
