import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "Methodology"
});

export default function MethodologyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Methodology</h1>

      <p>
        Each assessment presents a series of questions designed to surface
        your genuine relational preferences — not who you think you should be,
        but how you actually tend to feel and act in relationships.
      </p>

      <h2 className="text-xl font-semibold font-serif">Question Types</h2>

      <p>
        Questions are a mix of forced-choice (pick the option that fits you best)
        and rated scale (how much does this apply to you). Forced-choice questions
        reveal relative preferences when you can't have everything. Scale questions
        measure strength of feeling on a specific dimension. Some questions are
        reverse-scored to catch automatic or socially desirable answering.
      </p>

      <h2 className="text-xl font-semibold font-serif">Scoring</h2>

      <p>
        Answers accumulate a weighted score across eight relational categories.
        Scores are normalised so you can see your profile as a genuine distribution —
        not just which category "won", but by how much, and what came close behind.
        That full picture is more meaningful than a single top result.
      </p>

      <h2 className="text-xl font-semibold font-serif">Interpretation</h2>

      <p>
        A higher score reflects a stronger relative preference in that dimension —
        not a fixed trait, not a personality type, and not a prediction about how
        any specific relationship will go. People are complex and context-dependent.
        Use your results as a map, not a verdict.
      </p>

      <h2 className="text-xl font-semibold font-serif">Limitations</h2>

      <p>
        Love Compass is not clinically validated and should not be used for
        psychological diagnosis, relationship advice, or any professional purpose.
        Self-report tools have well-known limits — people don't always know
        themselves as well as they think, and preferences change. Treat the
        results as a starting point for reflection, not a conclusion.
      </p>
    </main>
  );
}