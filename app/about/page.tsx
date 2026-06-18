import Link from "next/link";
import { ContentSection, ContentSectionHeading, PageHero } from "@/components/ui";

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main id="main-content" className="max-w-3xl mx-auto px-5 py-16 space-y-8">

        <PageHero
          badge="About"
          heading="Understanding how you love"
          subheading="Self-knowledge is the most underrated relationship skill. Love Compass exists to give you more of it — specific to you, built from your real answers, not the ones that sound well-adjusted."
        />

        {/* What it is */}
        <ContentSection>
          <ContentSectionHeading>What is Love Compass?</ContentSectionHeading>
          <p className="opacity-80 leading-relaxed">
            Love Compass does two things most relationship tools don't bother to
            separate: it tells you how you need to receive love, and how you actually
            give it. That distinction sounds small. It isn't.
          </p>
          <p className="opacity-80 leading-relaxed">
            Most tools stay at the surface. Shared interests, compatible temperaments, timing. As if relationships fail because two people chose the wrong restaurant. Love Compass goes somewhere more honest. It maps your relational patterns across eight dimensions and returns a profile built from your real tendencies. Not the ones you aspire to, not the ones that sound well-adjusted.
          </p>
          <p className="opacity-80 leading-relaxed">
            The result isn't a label to put in a bio. It's a map. And like any good map, it's most useful when the territory turns out to be different from what you assumed.
          </p>
        </ContentSection>

        {/* What you can do */}
        <ContentSection>
          <ContentSectionHeading>What can you do here?</ContentSectionHeading>
          <p className="opacity-80 leading-relaxed">
            Four assessments. Two sides of the same question — how you need to be loved, and how you love in return.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              {
                icon: "♡",
                label: "Love Preference Test",
                tag: "Receiving",
                desc: "How love needs to arrive for you to actually feel it.",
              },
              {
                icon: "✦",
                label: "How You Love",
                tag: "Giving",
                desc: "How you express love without thinking about it.",
              },
              {
                icon: "◎",
                label: "Intimacy Style Test",
                tag: "Receiving",
                desc: "What makes you feel genuinely desired.",
              },
              {
                icon: "⟡",
                label: "How You Desire",
                tag: "Giving",
                desc: "How you communicate want and reach for connection.",
              },
            ].map(item => (
              <div
                key={item.label}
                className="relative rounded-2xl p-4 space-y-3 overflow-hidden"
                style={{
                  border: "1.5px solid rgba(201,161,74,0.2)",
                  background: "var(--surface)",
                  boxShadow: "0 1px 8px rgba(158,59,78,0.06), inset 0 1px 2px rgba(255,255,255,0.6)",
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-2xl leading-none text-[var(--primary)] opacity-60">
                    {item.icon}
                  </span>
                  <span
                    className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium mt-0.5 ${
                      item.tag === "Giving"
                        ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "bg-[var(--primary-soft)] text-[var(--primary)]"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-serif font-semibold text-sm text-[var(--primary)] leading-snug">
                    {item.label}
                  </p>
                  <p className="text-xs opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm opacity-60 leading-relaxed pt-1">
            Each assessment takes 5–10 minutes. Your answers never leave your browser.
            Nothing is stored, nothing is transmitted.
          </p>
          <div className="pt-1">
            <Link
              href="/assessments"
              className="lc-cta-primary inline-flex items-center justify-center"
            >
              Browse Assessments →
            </Link>
          </div>
        </ContentSection>

        {/* Love & intimacy — the editorial section */}
        <ContentSection>
          <ContentSectionHeading>On love, intimacy, and why they matter</ContentSectionHeading>
          <p className="opacity-85 leading-relaxed">
            Love and intimacy are two of the most overused words in the English language
            and two of the least examined. We treat them as feelings, things that arrive
            and either stick or don't. That framing is responsible for more unnecessary
            pain than most people realise.
          </p>
          <p className="opacity-85 leading-relaxed">
            Love is a practice. A discipline, even. It's the repeated, deliberate act of
            making someone feel like they matter, in the specific way they receive it,
            not the way you prefer to deliver it. The mismatch is almost universal:
            people love others the way they want to be loved themselves. Which sounds
            generous, and often isn't felt that way at all.
          </p>
          <p className="opacity-85 leading-relaxed">
            Intimacy is the other half. It's being completely known and not flinched at.
            Physical intimacy is just that same impulse expressed without words. The
            problem is that emotional and physical closeness develop on different
            timelines, and most couples have never had an honest conversation about
            either one.
          </p>
          <p className="opacity-85 leading-relaxed">
            Understanding your own patterns isn't navel-gazing. It's table stakes for
            being a decent partner. Love Compass won't fix your relationship. But it
            will remove the excuse of not knowing yourself.
          </p>
        </ContentSection>

        {/* Philosophy */}
        <ContentSection>
          <ContentSectionHeading>Our philosophy</ContentSectionHeading>
          <p className="opacity-80 leading-relaxed">
            Self-knowledge is the most underrated relationship skill. Not communication
            frameworks, not compatibility algorithms. Actual, honest clarity about what
            you need, what you bring, and where those two things don't yet meet.
          </p>
          <p className="opacity-80 leading-relaxed">
            Love Compass doesn't tell you who to be with. It doesn't score you. It gives
            you a profile, specific to you, built from your answers, and trusts you
            to use it.
          </p>
          <p className="opacity-80 leading-relaxed">
            Clarity first. Everything else follows.
          </p>
        </ContentSection>

        {/* Disclaimer note */}
        <p className="text-xs opacity-40 text-center leading-relaxed pb-4">
          Love Compass is a self-reflection tool, not a clinical or psychological assessment. Results map patterns and preferences, not fixed traits. People change. Check back.
        </p>

      </main>
  );
}
