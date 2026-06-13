import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "Disclaimer"
});

export default function DisclaimerPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Disclaimer</h1>

      <p>
        Love Compass is a self-reflection tool, not a psychological
        or medical assessment.
      </p>

      <p>
        It does not diagnose conditions, predict relationship outcomes,
        or define personal identity.
      </p>

      <p>
        All intimacy-related questions assume consensual adult relationships.
      </p>
    </main>
  );
}