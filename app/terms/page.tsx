import { generateMeta } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/Marquee";
import LegalNav from "@/components/ui/LegalNav";

export const metadata = generateMeta({
  title: "Terms of Use"
});

const TERMS_MARQUEE_ITEMS = [
  "A self-reflection tool, not a diagnosis.",
  "Plain language. No surprises.",
  "Your results are a starting point, not a verdict.",
  "Not therapy. Not advice. Honest reflection.",
  "Free to use. Yours to interpret.",
  "Built for clarity, not liability.",
];

const SECTIONS = [
  {
    number: "01",
    heading: "What Love Wired is",
    weight: "high",
    paragraphs: [
      "Love Wired is a self-reflection tool. It is designed to help you think more clearly about how you give and receive love, not to diagnose, treat, or assess any psychological or clinical condition.",
      "The assessments are built around structured frameworks informed by relationship research, but they are not scientifically validated instruments and do not constitute professional advice of any kind. Your results are a starting point for reflection, not a verdict.",
    ],
  },
  {
    number: "02",
    heading: "How you may use it",
    weight: "normal",
    paragraphs: [
      "Love Wired is free to use for personal, non-commercial self-reflection. You're welcome to share your results with a partner, therapist, or trusted person as a conversation starter.",
      "You may not reproduce, repackage, or redistribute the assessments, questions, archetypes, or written content from this site (in whole or in part) without explicit written permission.",
    ],
  },
  {
    number: "03",
    heading: "No clinical or medical use",
    weight: "normal",
    paragraphs: [
      "Nothing on Love Wired should be used as the basis for medical, psychological, or clinical decision-making. If you're navigating mental health challenges, relationship trauma, or anything that feels beyond self-reflection, please speak with a qualified professional.",
      "Results from Love Wired are not a substitute for therapy, counseling, or professional relationship advice.",
    ],
  },
  {
    number: "04",
    heading: "Liability",
    weight: "high",
    paragraphs: [
      "Love Wired is provided as-is, without warranty of any kind. We are not liable for any decisions, interpretations, or actions taken based on your results. How you choose to use what you learn here is entirely your responsibility.",
      "We make no guarantees about the accuracy, completeness, or fitness of the content for any particular purpose.",
    ],
  },
  {
    number: "05",
    heading: "Your data",
    weight: "normal",
    paragraphs: [
      "Love Wired does not collect, store, or transmit your answers. All assessment data lives in your browser session only and is deleted when you close the tab. We have no way of seeing your responses, and that's intentional.",
    ],
    footnote: {
      before: "For full details, see our ",
      href: "/privacy",
      linkText: "Privacy Policy",
      after: ".",
    },
  },
  {
    number: "06",
    heading: "Changes to these terms",
    weight: "normal",
    paragraphs: [
      "We may update these terms from time to time. Continued use of Love Wired after any changes constitutes acceptance of the revised terms. We'll always keep this page current.",
    ],
    date: "Last updated: June 2026.",
  },
];

export default function TermsPage() {
  return (
    <main id="main-content" className="lc-terms-page">

      <Link href="/" className="lc-page-back">← Home</Link>
      <LegalNav />

      {/* ── Header ── */}
      <header className="lc-terms-header">
        <p className="lc-terms-eyebrow">LEGAL</p>
        <h1 className="lc-terms-h1">Terms of Use</h1>
        <p className="lc-terms-sub">
          Plain language. No surprises. If you use Love Wired, here's what you're agreeing to.
        </p>
      </header>

      <Marquee items={TERMS_MARQUEE_ITEMS} />

      {/* ── Gold rule ── */}
      <div className="lc-priv-rule" aria-hidden="true" />

      {/* ── Sections ── */}
      <ol className="lc-terms-list" aria-label="Terms of use sections">
        {SECTIONS.map((s) => (
          <li
            key={s.number}
            className="lc-terms-item"
            data-weight={s.weight}
          >
            <div className="lc-terms-item-head">
              <span className="lc-priv-num" aria-hidden="true">{s.number}</span>
              <h2 className="lc-terms-heading">{s.heading}</h2>
            </div>

            <div className="lc-terms-body">
              {s.paragraphs.map((para, i) => (
                <p key={i} className="lc-terms-para">{para}</p>
              ))}

              {s.footnote && (
                <p className="lc-terms-footnote">
                  {s.footnote.before}
                  <Link
                    href={s.footnote.href}
                    className="lc-terms-link"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    {s.footnote.linkText}
                  </Link>
                  {s.footnote.after}
                </p>
              )}

              {s.date && (
                <p className="lc-priv-date">{s.date}</p>
              )}
            </div>

          </li>
        ))}
      </ol>

      {/* ── Botanical divider ── */}
      <div className="lc-priv-botanical" aria-hidden="true">
        <Image
          src="/botanical-divider.png"
          alt=""
          width={260}
          height={40}
          style={{ opacity: 0.3 }}
        />
      </div>

      {/* ── Disclaimer ── */}
      <p className="lc-priv-disclaimer">
        Using Love Wired means you understand what it is: a self-reflection tool,
        not a clinical instrument. Your results are yours to interpret.
      </p>
    </main>
  );
}