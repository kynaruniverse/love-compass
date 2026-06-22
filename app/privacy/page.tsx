import { generateMeta } from "@/lib";
import { ContentSection, ContentSectionHeading, PageHero } from "@/components/ui";
import Image from "next/image";

export const metadata = generateMeta({
  title: "Privacy Policy"
});

const PRINCIPLES = [
  { icon: "🔒", label: "Nothing collected" },
  { icon: "🚫", label: "No tracking" },
  { icon: "👁️", label: "We can't see it" },
];

export default function PrivacyPage() {
  return (
    <main id="main-content" className="lc-privacy-page">

      {/* ── Trust strip ── */}
      <div className="lc-privacy-trust" aria-hidden="true">
        {PRINCIPLES.map(({ icon, label }) => (
          <span key={label} className="lc-privacy-trust-item">
            <span className="lc-privacy-trust-icon">{icon}</span>
            <span className="lc-privacy-trust-label">{label}</span>
          </span>
        ))}
      </div>

      <PageHero
        badge="Privacy"
        heading="Your answers are yours."
        subheading="Love Compass was built on a simple principle: what you share here stays here. This page explains exactly what that means in practice."
      />

      <div className="lc-privacy-sections">

        <ContentSection>
          <ContentSectionHeading>We don't collect your data</ContentSectionHeading>
          <p className="lc-privacy-lead">
            Love Compass does not collect, store, or transmit personal data of
            any kind. There are no accounts, no sign-ups, and no forms that send
            information anywhere. Your name, email address, and identity are
            never asked for. We have no use for them.
          </p>
          <p className="lc-privacy-body">
            This isn't just policy. It's how the tool is built. There is no
            server receiving your answers. There is no database storing your
            results. We genuinely cannot see what you choose. That's
            by design, not by accident.
          </p>
        </ContentSection>

        <ContentSection>
          <ContentSectionHeading>How your answers are stored</ContentSectionHeading>
          <p className="lc-privacy-body">
            When you complete an assessment, your answers and results are held
            temporarily in your browser's session storage — a private, local
            space that exists only for the duration of your current tab. The
            moment you close the tab or navigate away, that data is gone.
          </p>
          <p className="lc-privacy-body">
            Nothing is written to a cookie. Nothing is sent to a third party.
            Nothing persists between sessions. If you take the same assessment
            twice, the second run has no memory of the first.
          </p>
        </ContentSection>

        <ContentSection>
          <ContentSectionHeading>No tracking or analytics</ContentSectionHeading>
          <p className="lc-privacy-body">
            Love Compass does not use analytics platforms, advertising trackers,
            or third-party scripts that monitor your behaviour. There are no
            tracking cookies. There is no pixel. We don't know how many people
            took a particular assessment, how long they spent on it, or what
            their results were.
          </p>
          <p className="lc-privacy-pull">
            A tool designed to help people reflect honestly on their most
            personal patterns shouldn't be watching them while they do it.
          </p>
        </ContentSection>

        <ContentSection>
          <ContentSectionHeading>Third-party services</ContentSectionHeading>
          <p className="lc-privacy-body">
            Love Compass is hosted on Vercel. As with any web host, Vercel may
            log standard server-level data such as IP addresses and request
            timestamps as part of normal infrastructure operation. This is
            separate from application-level data and is governed by{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="lc-privacy-link"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Vercel's privacy policy
            </a>
            .
          </p>
          <p className="lc-privacy-body">
            No other third-party services are integrated into Love Compass.
          </p>
        </ContentSection>

        <ContentSection>
          <ContentSectionHeading>Your rights</ContentSectionHeading>
          <p className="lc-privacy-body">
            Because we hold no personal data about you, there is nothing for us
            to delete, export, or correct on your behalf. You have full and
            immediate control over everything associated with your use of Love
            Compass. It lives in your browser and disappears when you're done.
          </p>
          <p className="lc-privacy-body">
            If you have questions about this policy, you can reach us at{" "}
            <a
              href="mailto:charlesblackwoodofficial@gmail.com"
              className="lc-privacy-link"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              charlesblackwoodofficial@gmail.com
            </a>
            .
          </p>
        </ContentSection>

        <ContentSection>
          <ContentSectionHeading>Changes to this policy</ContentSectionHeading>
          <p className="lc-privacy-body">
            If anything here changes, we'll update this page and revise the date
            below. We don't anticipate significant changes. The core principle
            of not collecting your data isn't going anywhere.
          </p>
          <p className="lc-privacy-date">Last updated: June 2026.</p>
        </ContentSection>

      </div>

      {/* ── Botanical divider ── */}
      <div className="lc-privacy-divider" aria-hidden="true">
        <Image
          src="/botanical-divider.png"
          alt=""
          width={260}
          height={40}
          style={{ opacity: 0.35 }}
        />
      </div>

      <p className="lc-privacy-disclaimer">
        Love Compass is a self-reflection tool, not a clinical or psychological
        assessment. Results reflect patterns and preferences, not fixed traits.
      </p>

    </main>
  );
}