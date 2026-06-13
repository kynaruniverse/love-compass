import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "Methodology"
});

export default function MethodologyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Methodology</h1>

      <p>
        The assessment uses forced-choice preference ranking
        across eight relational dimensions.
      </p>

      <h2 className="text-xl font-semibold font-serif">Scoring System</h2>

      <p>
        Each answer corresponds to one of eight categories.
        Scores are aggregated across all responses and ranked
        to identify dominant preference patterns.
      </p>

      <h2 className="text-xl font-semibold font-serif">Interpretation</h2>

      <p>
        Results are interpreted comparatively, not absolutely.
        A higher score indicates relative preference, not intensity
        or psychological trait strength.
      </p>

      <h2 className="text-xl font-semibold font-serif">Limitations</h2>

      <p>
        This tool is not clinically validated and should not be
        used for psychological diagnosis or relationship prediction.
      </p>
    </main>
  );
}