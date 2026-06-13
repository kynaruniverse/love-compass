import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "Privacy Policy"
});

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <p>
        Love Compass does not collect, store, or transmit personal data.
      </p>

      <p>
        All quiz responses are stored locally in your browser session
        and are deleted when you leave the page or close your browser tab.
      </p>

      <p>
        No analytics, tracking cookies, or third-party data collection
        systems are used.
      </p>
    </main>
  );
}