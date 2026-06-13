import { generateMeta } from "@/lib/seo";

export const metadata = generateMeta({
  title: "FAQ"
});

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">FAQ</h1>

      <div className="space-y-6">

        <div>
          <h2 className="font-semibold font-serif text-[var(--primary)]">
            Is this scientifically validated?
          </h2>
          <p>
            No — and we're upfront about that. Love Compass is a structured
            self-reflection tool, not a clinical assessment. The value is in
            the clarity it gives you about your own patterns, not in a diagnostic label.
          </p>
        </div>

        <div>
          <h2 className="font-semibold font-serif text-[var(--primary)]">
            What's the difference between receiving and giving tests?
          </h2>
          <p>
            The receiving tests reveal how you feel most loved and desired — what
            a partner needs to do for you to feel truly seen. The giving tests
            reveal how you naturally express love and desire — what kind of partner
            you are. Taking both gives you the fullest picture.
          </p>
        </div>

        <div>
          <h2 className="font-semibold font-serif text-[var(--primary)]">
            Why do I see multiple top results?
          </h2>
          <p>
            Because most people aren't one thing. Relational preferences are
            usually a blend — a dominant style with secondary dimensions close
            behind. Your profile mix is often more accurate than any single label.
          </p>
        </div>

        <div>
          <h2 className="font-semibold font-serif text-[var(--primary)]">
            Can my results change over time?
          </h2>
          <p>
            Yes. Preferences shift with life experience, relationships, and
            personal growth. It's worth retaking the tests periodically —
            especially after significant relationship changes.
          </p>
        </div>

        <div>
          <h2 className="font-semibold font-serif text-[var(--primary)]">
            Is my data stored anywhere?
          </h2>
          <p>
            No. Your answers live only in your browser session and are deleted
            when you close the tab. Nothing is sent to a server.
          </p>
        </div>

      </div>
    </main>
  );
}