import { generateMeta } from "@/lib";
import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";

const METHODOLOGY_MARQUEE_ITEMS = [
  "Built on research, not guesswork.",
  "Frameworks informed by decades of relationship study.",
  "Every question earns its place.",
  "Pattern recognition, not personality typing.",
  "Designed for honesty, not comfort.",
  "Self-report has limits. We say so.",
  "The method is the message.",
];

export const metadata = generateMeta({
  title: "Methodology"
});

const STEPS = [
  {
    num: "01",
    heading: "How the questions are designed",
    body: [
      "Every question is written to surface genuine relational preference — not the answer that sounds healthiest or most mature. People are remarkably good at answering as the version of themselves they're working toward rather than the one who actually shows up in relationships.",
      "To counter this, the assessments use two formats: forced-choice questions reveal true relative preferences under constraint; scale questions measure the strength of feeling on a specific dimension. Some questions are reverse-scored to catch automatic or socially desirable answering patterns.",
    ],
    pull: "Answer as you actually are, not as you want to be. The questions only work if you take that seriously.",
  },
  {
    num: "02",
    heading: "How scoring works",
    body: [
      "Your answers accumulate weighted scores across eight relational dimensions. Each question maps to one or more dimensions, and the weight reflects how strongly that question distinguishes between them.",
      "Scores are normalised so your results show a genuine distribution — not just which dimension scored highest, but by how much, and what came close behind. Two people can share the same primary result and feel completely different to love, because their secondary dimensions diverge.",
    ],
    pull: "The percentage next to each category is signal strength, not a grade.",
  },
  {
    num: "03",
    heading: "Archetypes and flavors",
    body: [
      "Once your profile is scored, it's matched to an archetype — shorthand for how your top dimensions combine in practice. Archetypes aren't labels. They describe how your relational tendencies show up together, not in isolation.",
      "Your secondary dimension is called your flavor. It's where most of the nuance lives. Two people with the same primary archetype can feel very different to be in a relationship with, because their flavors pull in different directions.",
    ],
    pull: null,
  },
  {
    num: "04",
    heading: "What the results mean",
    body: [
      "A higher score reflects a stronger relative preference — not a fixed trait, not a personality type, and not a prediction about any specific relationship. People are complex, context-dependent, and capable of change. Your results today may look different in three years, and both can be completely accurate.",
    ],
    pull: "Use your profile as a map. A clearer picture of your actual patterns — not a conclusion about who you are or who you can be.",
  },
  {
    num: "05",
    heading: "Limitations",
    body: [
      "Love Compass is not clinically validated and should not be used for psychological diagnosis or any clinical purpose. It is a self-reflection tool, built carefully and grounded in relationship research, but it is not a substitute for therapy or professional support.",
      "Self-report tools have well-documented limits: social desirability bias is real, and emotional state at the time of answering affects responses. These aren't flaws unique to Love Compass — they're inherent to any tool of this kind. The assessments are designed with those limits in mind. The most useful thing you can bring to them is honesty.",
    ],
    pull: null,
  },
];

export default function MethodologyPage() {
  return (
    <main id="main-content" className="lc-method-page">

      <header className="lc-priv-header">
        <p className="lc-priv-eyebrow">METHODOLOGY</p>
        <h1 className="lc-priv-h1">How it works</h1>
        <p className="lc-priv-sub">
          Love Compass isn't a personality quiz. Here's exactly how the assessments
          are built, how your answers are scored, and what the results actually mean.
        </p>
      </header>

      {/* Gold rule — handoff from hero into steps, ties to Privacy/Terms */}
      <div className="lc-priv-rule" aria-hidden="true" />

      <div className="lc-method-steps">
        {STEPS.map(({ num, heading, body, pull }) => (
          <div key={num} className="lc-method-step">
            <div className="lc-method-step-num" aria-hidden="true">{num}</div>
            <div className="lc-method-step-content">
              <h2 className="lc-method-step-heading">{heading}</h2>
              {body.map((p, i) => (
                <p key={i} className="lc-method-body">{p}</p>
              ))}
              {pull && (
                <blockquote className="lc-method-pull">
                  <span className="lc-method-pull-mark" aria-hidden="true">”</span>
                  {pull}
                </blockquote>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Botanical divider */}
      <div className="lc-method-divider" aria-hidden="true">
        <Image
          src="/botanical-divider.png"
          alt=""
          width={260}
          height={40}
          style={{ opacity: 0.35 }}
        />
      </div>

      <p className="lc-method-disclaimer">
        Love Compass is a self-reflection tool, not a clinical or psychological
        assessment. Results reflect patterns and preferences, not fixed traits.
      </p>

      <Marquee items={METHODOLOGY_MARQUEE_ITEMS} />

    </main>
  );
}