import { GoldStampBadge } from "@/components/ui";
import { getQuizTypeLabel, isGivingMode } from "@/lib";

interface Props {
  isSharedView: boolean;
  quizType: string;
}

export default function ResultsHeader({ isSharedView, quizType }: Props) {
  return (
    <div className="space-y-3">
      <GoldStampBadge>{isSharedView ? "Shared Result" : "Your Result"}</GoldStampBadge>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)]">
        {isSharedView ? <>Here's who they are<br />in love.</> : <>Here's who you are<br />in love.</>}
      </h1>
      <p className="font-serif leading-relaxed max-w-xl" style={{ fontSize: 15, opacity: 0.7 }}>
        Based on {isSharedView ? "their" : "your"}{" "}
        {getQuizTypeLabel(quizType)}{" "}
        assessment. {isSharedView ? "" : "Sit with this — most people find it more accurate than they expected."}
      </p>

      {isGivingMode(quizType) && (
        <aside
          role="note"
          aria-label="About giving assessments"
          className="mt-3 p-4 rounded-2xl text-sm leading-relaxed"
          style={{
            border: "1.5px solid rgba(201,161,74,0.35)",
            background: "var(--accent-soft)",
            boxShadow: "0 1px 8px rgba(201,161,74,0.08)",
          }}
        >
          <p className="font-medium text-[var(--foreground)] mb-1">You're looking at how you give.</p>
          <p className="opacity-80">
            This is how you naturally express love and desire — the specific way you show up for
            a partner without even thinking about it. The interesting part is what happens when
            you compare this to how you need to receive.{" "}
            <a
              href="/assessments"
              className="underline text-[var(--primary)] transition-opacity active:opacity-60"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Take a receiving test →
            </a>
          </p>
        </aside>
      )}
    </div>
  );
}