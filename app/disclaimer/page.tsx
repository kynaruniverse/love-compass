import { generateMeta } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/Marquee";

export const metadata = generateMeta({
  title: "Disclaimer",
  description: "What Love Wired is, and what it isn't. An honest overview of what this self-reflection tool can and cannot tell you.",
});

const DISCLAIMER_MARQUEE_ITEMS = [
  "A starting point, not a conclusion.",
  "Patterns, not predictions.",
  "Not a substitute for therapy.",
  "Built for adults. Built for consent.",
  "Self-report has limits. We say so.",
  "What you do next is yours to decide.",
];

export default function DisclaimerPage() {
  return (
    <main id="main-content" className="lc-disclaimer-page">
      <Link href="/" className="lc-page-back">← Home</Link>

      {/* ── Hero ── */}
      <section className="lc-disclaimer-hero">
        <p className="lc-disclaimer-eyebrow">DISCLAIMER</p>
        <h1 className="lc-disclaimer-h1">What Love Wired is. And isn't.</h1>
        <p className="lc-disclaimer-sub">
          We'd rather be upfront about what this tool can and can't tell you.
        </p>
      </section>

      <Marquee items={DISCLAIMER_MARQUEE_ITEMS} />

      {/* ── Not a clinical tool ── */}
      <section className="lc-disclaimer-block">
        <h2 className="lc-disclaimer-h2">This is not a clinical assessment</h2>
        <p className="lc-disclaimer-p">
          Love Wired is a self-reflection tool. It is not a psychological instrument, a diagnostic tool, or a medical assessment of any kind. The results do not constitute a diagnosis, a clinical profile, or a professional opinion about your mental health or relationship fitness.
        </p>
        <p className="lc-disclaimer-p lc-disclaimer-p--emphasis">
          If you're dealing with mental health challenges, relationship trauma, attachment difficulties, or anything that feels beyond self-reflection, please seek support from a qualified professional. Love Wired is not a substitute for therapy or counseling.
        </p>
      </section>

      {/* ── Patterns, not predictions ── */}
      <section className="lc-disclaimer-block">
        <h2 className="lc-disclaimer-h2">Your results are patterns, not predictions</h2>
        <p className="lc-disclaimer-p">
          Your results reflect patterns in how you answered a structured set of questions at a specific point in time. They describe tendencies and preferences, not fixed traits, not permanent identity, and not a prediction of how any relationship will unfold.
        </p>
        <p className="lc-disclaimer-p">
          Love Wired doesn't tell you who to be with, or whether your current relationship will work. It gives you a clearer picture of your relational patterns as they stand today. What you do with that is entirely up to you.
        </p>
        <p className="lc-disclaimer-p lc-disclaimer-p--emphasis">
          Results can change over time. A profile taken years apart can look different, and both can be completely accurate for who you were at that moment.
        </p>
      </section>

      {/* ── Adult content ── */}
      <section className="lc-disclaimer-block">
        <h2 className="lc-disclaimer-h2">Adult content and consensual relationships</h2>
        <p className="lc-disclaimer-p">
          Some assessments, particularly Intimacy Style and How You Desire, include questions about physical intimacy, desire, and sexual preference. These questions are designed for adults and assume consensual adult relationships throughout.
        </p>
        <p className="lc-disclaimer-p lc-disclaimer-p--emphasis">
          Love Wired is intended for users aged 18 and over. If you are under 18, please do not take the intimacy-related assessments.
        </p>
      </section>

      {/* ── No guarantees ── */}
      <section className="lc-disclaimer-block lc-disclaimer-block--last">
        <h2 className="lc-disclaimer-h2">No guarantees</h2>
        <p className="lc-disclaimer-p">
          We've built Love Wired carefully and with genuine intention, but we make no guarantees about the accuracy, completeness, or suitability of the results for any particular person or purpose. Self-report tools have inherent limits, and this one is no exception.
        </p>
        <p className="lc-disclaimer-p lc-disclaimer-p--emphasis">
          The creators of Love Wired are not liable for any decisions, interpretations, or actions taken based on your results. Use them as a starting point for reflection. Not a conclusion.
        </p>
      </section>

      {/* ── Closing note ── */}
      <section className="lc-disclaimer-note">
        <p>These results are a starting point. What you do next is yours to decide.</p>
      </section>

      {/* ── Botanical divider ── */}
      <div className="lc-priv-botanical" aria-hidden="true">
        <Image
          src="/botanical-divider.png"
          alt=""
          width={260}
          height={40}
          style={{ opacity: 0.3 }}
        />
      </div>

      {/* ── Disclaimer ── */}
      <p className="lc-priv-disclaimer">
        Love Wired is not a clinical tool. Nothing here constitutes a diagnosis,
        a professional opinion, or a substitute for qualified support.
      </p>
    </main>
  );
}
