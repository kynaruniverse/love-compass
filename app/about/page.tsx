"use client";

import Link from "next/link";
import { Marquee } from "@/components/ui/Marquee";

const ABOUT_MARQUEE_ITEMS = [
  "Self-knowledge is the most underrated relationship skill.",
  "Clarity first. Everything else follows.",
  "Not a label. A map.",
  "Built from your real answers, not the ones that sound well-adjusted.",
  "Love is a practice, not just a feeling.",
  "Four assessments. Eight dimensions. No account.",
];

export default function AboutPage() {
  return (
    <main id="main-content" className="lc-about-page">
      {/* ── Hero ── */}
      <section className="lc-about-hero">
        <p className="lc-about-eyebrow">ABOUT</p>
        <h1 className="lc-about-h1">Understanding how you love</h1>
        <p className="lc-about-sub">
          Self-knowledge is the most underrated relationship skill. Love Wired exists to give you more of it.
        </p>
      </section>

      <Marquee items={ABOUT_MARQUEE_ITEMS} />

      {/* ── What is Love Wired ── */}
      <section className="lc-about-block">
        <h2 className="lc-about-h2">What is Love Wired?</h2>
        <p className="lc-about-p">
          Most relationship tools blur two different things together: how you need to receive love, and how you actually give it. Love Wired keeps them separate, because they rarely match.
        </p>
        <p className="lc-about-p">
          It maps your relational patterns across eight dimensions and returns a profile built from your real tendencies, not the ones that sound best in a bio.
        </p>
        <p className="lc-about-p lc-about-p--emphasis">
          The result isn't a label to put in a bio. It's a map. And like any good map, it's most useful when the territory turns out to be different from what you assumed.
        </p>
      </section>

      {/* ── What can you do here ── */}
      <section className="lc-about-block">
        <h2 className="lc-about-h2">What can you do here?</h2>
        <p className="lc-about-p">
          Four assessments. Two sides of the same question: how love finds you, and how you love in return. Five to ten minutes each. Nothing stored, nothing transmitted.
        </p>

        <Link href="/assessments" className="lc-about-cta">
          Browse Assessments →
        </Link>
      </section>

      {/* ── On love and intimacy ── */}
      <section className="lc-about-block">
        <h2 className="lc-about-h2">On love, intimacy, and why they matter</h2>
        <p className="lc-about-p">
          Love and intimacy are two of the most overused words in the English language, and two of the least examined. We treat them as feelings, things that arrive or don't. That framing costs people more than they realise.
        </p>
        <p className="lc-about-p lc-about-p--emphasis">
          Love is a practice, not a feeling. It's the repeated, deliberate act of making someone feel they matter, in the specific way they receive it, not the way you prefer to deliver it.
        </p>
        <p className="lc-about-p">
          Intimacy is the other half. It's being fully known and not flinched at. Most couples never actually talk about either one.
        </p>
        <p className="lc-about-p">
          Understanding your own patterns isn't navel-gazing. It's table stakes for being a decent partner.
        </p>
      </section>

      {/* ── Philosophy ── */}
      <section className="lc-about-block lc-about-block--last">
        <h2 className="lc-about-h2">Our philosophy</h2>
        <p className="lc-about-p">
          Not communication frameworks. Not compatibility algorithms. Actual, honest clarity about what you need, what you bring, and where those two things don't meet.
        </p>
        <p className="lc-about-p">
          Love Wired doesn't tell you who to be with. It doesn't score you. It gives you a profile, specific to your answers, and trusts you to use it.
        </p>
        <p className="lc-about-p lc-about-p--emphasis">
          Clarity first. Everything else follows.
        </p>
      </section>

      {/* ── Disclaimer note ── */}
      <section className="lc-about-disclaimer">
        <p>
          Not a clinical tool — see our <Link href="/disclaimer">Disclaimer</Link>.
        </p>
      </section>
    </main>
  );
}
