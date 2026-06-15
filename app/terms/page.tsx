import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "Terms of Use"
});

function Section({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden p-7 sm:p-9"
      style={{
        border: "1.5px solid rgba(201,161,74,0.25)",
        background: "var(--surface)",
        boxShadow: "0 2px 16px rgba(94,58,115,0.07), inset 0 1px 2px rgba(255,255,255,0.7)",
      }}
    >
      <div className="absolute inset-0 paper-texture opacity-[0.3] pointer-events-none" />
      <div className="relative space-y-4 font-serif" style={{ fontSize: 16, lineHeight: 1.75 }}>{children}</div>
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

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16 space-y-8">

      {/* Hero */}
      <div className="space-y-3 pb-2">
        <span
          className="inline-block px-3 py-1 stamp-badge text-xs font-medium"
          style={{
            background: "linear-gradient(135deg, #f5e199 0%, #c9a14a 60%, #8a6520 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            borderColor: "#c9a14a",
          }}
        >
          Legal
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)]">
          Terms of Use
        </h1>
        <p className="text-lg opacity-70 leading-relaxed max-w-xl">
          Plain language. No surprises. If you use Love Compass, here's what
          you're agreeing to and what we want you to understand.
        </p>
      </div>

      {/* What this tool is */}
      <Section>
        <SectionHeading>What Love Compass is</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Love Compass is a self-reflection tool. It is designed to help you
          think more clearly about how you give and receive love, not to
          diagnose, treat, or assess any psychological or clinical condition.
        </p>
        <p className="opacity-80 leading-relaxed">
          The assessments are built around structured frameworks informed by
          relationship research, but they are not scientifically validated
          instruments and do not constitute professional advice of any kind.
          Your results are a starting point for reflection, not a verdict.
        </p>
      </Section>

      {/* How you may use it */}
      <Section>
        <SectionHeading>How you may use it</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Love Compass is free to use for personal, non-commercial
          self-reflection. You're welcome to share your results with a partner,
          therapist, or trusted person as a conversation starter.
        </p>
        <p className="opacity-80 leading-relaxed">
          You may not reproduce, repackage, or redistribute the assessments,
          questions, archetypes, or written content from this site, in whole
          or in part, without explicit written permission.
        </p>
      </Section>

      {/* No clinical use */}
      <Section>
        <SectionHeading>No clinical or medical use</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Nothing on Love Compass should be used as the basis for medical,
          psychological, or clinical decision-making. If you're navigating
          mental health challenges, relationship trauma, or anything that feels
          beyond self-reflection, please speak with a qualified professional.
        </p>
        <p className="opacity-80 leading-relaxed">
          Results from Love Compass are not a substitute for therapy,
          counseling, or professional relationship advice.
        </p>
      </Section>

      {/* Liability */}
      <Section>
        <SectionHeading>Liability</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Love Compass is provided as-is, without warranty of any kind. We are
          not liable for any decisions, interpretations, or actions taken based
          on your results. How you choose to use what you learn here is
          entirely your responsibility.
        </p>
        <p className="opacity-80 leading-relaxed">
          We make no guarantees about the accuracy, completeness, or fitness
          of the content for any particular purpose.
        </p>
      </Section>

      {/* Privacy */}
      <Section>
        <SectionHeading>Your data</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          Love Compass does not collect, store, or transmit your answers. All
          assessment data lives in your browser session only and is deleted
          when you close the tab. We have no way of seeing your responses,
          and that's intentional.
        </p>
        <p className="opacity-80 leading-relaxed">
          For more detail on how the site handles data, see our{" "}
          <a
            href="/privacy"
            className="underline text-[var(--primary)] transition-opacity active:opacity-60"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            Privacy Policy
          </a>
          .
        </p>
      </Section>

      {/* Changes */}
      <Section>
        <SectionHeading>Changes to these terms</SectionHeading>
        <p className="opacity-80 leading-relaxed">
          We may update these terms from time to time. Continued use of Love
          Compass after any changes constitutes acceptance of the revised terms.
          We'll always keep this page current.
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
