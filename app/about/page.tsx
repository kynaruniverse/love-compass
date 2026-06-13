import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "About"
});

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">About Love Compass</h1>

      <p>
        Love Compass is a self-reflection tool for people who want to understand
        themselves in relationships — not just who they're attracted to, but how
        they love, how they need to be loved, and how those two things interact.
      </p>

      <p>
        Each assessment maps your preferences across eight relational dimensions,
        giving you a profile that's genuinely yours — not a generic type, not a
        fixed label. The receiving tests show how you feel most loved and desired.
        The giving tests show how you naturally express love and desire to a partner.
      </p>

      <p>
        The goal is clarity — about yourself, and about what you actually need
        from a relationship.
      </p>
    </main>
  );
}