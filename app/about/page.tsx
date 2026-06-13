import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "About"
});

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">About Love Compass</h1>

      <p>
        Love Compass is a structured self-reflection tool designed
        to help you understand how you experience love, intimacy,
        and emotional connection.
      </p>

      <p>
        It is not a personality test and does not assign labels.
        Instead, it maps preference patterns across multiple
        dimensions of relationship experience.
      </p>

      <p>
        The goal is clarity — not classification.
      </p>
    </main>
  );
}