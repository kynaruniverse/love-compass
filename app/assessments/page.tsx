import Link from "next/link";
import { assessments } from "@/data/assessments";
import { generateMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/ContentSection";

export const metadata = generateMeta({
  title: "Assessments"
});

export default function AssessmentsPage() {
  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <PageHero
        badge="Assessments"
        heading="Know yourself first."
        subheading="Four assessments. Two sides of the same question — how you need to be loved, and how you love in return. Start anywhere. Most people find the other side more surprising than the first."
      />

      {(
        [
          {
            mode: "receiving" as const,
            eyebrow: "How you need to be loved",
            eyebrowColor: "var(--primary)",
            border: "1.5px solid rgba(158,59,78,0.18)",
            bg: "var(--primary-soft)",
            shadow: "0 2px 16px rgba(158,59,78,0.08), inset 0 1px 2px rgba(255,255,255,0.7)",
            tagBg: "var(--primary-soft)",
            tagColor: "var(--primary)",
            tagBorder: "var(--primary)",
            tagLabel: "Receiving",
          },
          {
            mode: "giving" as const,
            eyebrow: "How you naturally love",
            eyebrowColor: "var(--accent)",
            border: "1.5px solid rgba(201,161,74,0.25)",
            bg: "var(--accent-soft)",
            shadow: "0 2px 16px rgba(201,161,74,0.08), inset 0 1px 2px rgba(255,255,255,0.7)",
            tagBg: "var(--accent-soft)",
            tagColor: "var(--accent)",
            tagBorder: "var(--accent)",
            tagLabel: "Giving",
          },
        ] as const
      ).map(group => (
        <div key={group.mode} className="space-y-3" style={{ marginTop: "3rem" }}>
          <p
            className="text-xs font-medium uppercase tracking-widest opacity-60"
            style={{ color: group.eyebrowColor }}
          >
            {group.eyebrow}
          </p>
          <div className="space-y-3">
            {assessments.filter(a => a.mode === group.mode).map(a => (
              <Link
                key={a.slug}
                href={`/assessments/${a.slug}`}
                className="relative block p-6 rounded-3xl overflow-hidden transition-all duration-150 active:scale-[0.98] lc-assess-card"
                aria-label={`${a.title} — ${group.tagLabel} assessment`}
                style={{
                  border: group.border,
                  background: group.bg,
                  boxShadow: group.shadow,
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <div className="absolute inset-0 paper-texture opacity-[0.35] pointer-events-none" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium border flex-shrink-0"
                        style={{
                          background: group.tagBg,
                          color: group.tagColor,
                          borderColor: group.tagBorder,
                          opacity: 0.8,
                        }}
                      >
                        {group.tagLabel}
                      </span>
                    </div>
                    <h2 className="font-serif font-semibold text-lg mb-1">{a.title}</h2>
                    <p className="font-serif text-sm opacity-60 leading-relaxed">{a.description}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0 mt-1" style={{ opacity: 0.3 }}>
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <p className="text-xs opacity-40 text-center leading-relaxed">
        Each assessment takes 5–10 minutes. Nothing you answer leaves your browser. No account. No record. Just you.
      </p>
    </main>
  );
}