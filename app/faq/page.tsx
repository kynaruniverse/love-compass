import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "FAQ"
});

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">FAQ</h1>

      <div className="space-y-4">

        <div>
          <h2 className="font-semibold font-serif text-[var(--primary)]">
            Is this scientifically validated?
          </h2>
          <p>
            No. It is a structured self-reflection tool designed
            for insight, not diagnosis.
          </p>
        </div>

        <div>
          <h2 className="font-semibold font-serif text-[var(--primary)]">
            Why do I see multiple top results?
          </h2>
          <p>
            Because human preferences are often balanced across
            multiple dimensions rather than singular categories.
          </p>
        </div>

        <div>
          <h2 className="font-semibold font-serif text-[var(--primary)]">
            Can my results change over time?
          </h2>
          <p>
            Yes. Preferences can shift based on life experience,
            relationships, and context.
          </p>
        </div>

      </div>
    </main>
  );
}