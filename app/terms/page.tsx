import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "Terms of Use"
});

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold"><span className="squiggle-underline">Terms of Use</span></h1>

      <p>
        This website is provided for informational and self-reflection purposes only.
      </p>

      <p>
        You agree not to use this tool for medical, psychological,
        or clinical decision-making.
      </p>

      <p>
        The creators are not responsible for interpretations or decisions
        made based on results.
      </p>
    </main>
  );
}