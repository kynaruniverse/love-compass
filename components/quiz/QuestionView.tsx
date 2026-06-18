"use client";

import { useId } from "react";
import { QuizQuestion, LIKERT_LABELS } from "@/types/quiz";

function GoldBadge({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
      style={{
        background: "var(--accent-soft)",
        color: "var(--accent)",
        border: "1px solid rgba(201,161,74,0.35)",
      }}
    >
      {label}
    </span>
  );
}

const answerButtonPointerHandlers = {
  onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => {
    e.currentTarget.style.borderColor = "#c9a14a";
    e.currentTarget.style.boxShadow =
      "0 4px 16px rgba(158,59,78,0.13), inset 0 1px 2px rgba(255,255,255,0.6)";
  },
  onPointerUp: (e: React.PointerEvent<HTMLButtonElement>) => {
    e.currentTarget.style.borderColor = "var(--border-soft)";
    e.currentTarget.style.boxShadow =
      "0 1px 4px rgba(158,59,78,0.07), inset 0 1px 2px rgba(255,255,255,0.6)";
  },
  onPointerLeave: (e: React.PointerEvent<HTMLButtonElement>) => {
    e.currentTarget.style.borderColor = "var(--border-soft)";
    e.currentTarget.style.boxShadow =
      "0 1px 4px rgba(158,59,78,0.07), inset 0 1px 2px rgba(255,255,255,0.6)";
  },
};

export default function QuestionView({
  question,
  onAnswer
}: {
  question: QuizQuestion;
  onAnswer: (value: string) => void;
}) {
  const type = question.type ?? "forced-choice";
  const isScale = type === "likert" || type === "reverse";
  const headingId = useId();

  return (
    <div className="max-w-xl mx-auto w-full px-4">
      {isScale && (
        <span
          className="inline-block mb-4 px-3 py-1 stamp-badge text-xs font-medium"
          style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
        >
          Rate how much this applies to you
        </span>
      )}

      <h2
        id={headingId}
        className="text-xl sm:text-2xl font-serif font-semibold mb-6 leading-snug text-left"
      >
        {question.question}
      </h2>

      <div className="space-y-3" role="radiogroup" aria-labelledby={headingId}>
        {isScale
          ? LIKERT_LABELS.map((label, i) => {
              const value = String(i + 1);
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => onAnswer(value)}
                  aria-label={`${value} out of 5 — ${label}`}
                  className="lc-answer-btn lc-paper-btn w-full text-left rounded-2xl transition-all duration-150 active:scale-[1.02] active:bg-[var(--primary-soft)] flex items-center gap-4"
                  {...answerButtonPointerHandlers}
                >
                  <GoldBadge label={value} />
                  <span className="text-base font-serif" style={{ color: "var(--foreground)" }}>{label}</span>
                </button>
              );
            })
          : question.options.map(opt => (
              <button
                key={opt.letter}
                type="button"
                onClick={() => onAnswer(opt.letter)}
                className="lc-answer-btn lc-paper-btn w-full text-left rounded-2xl transition-all duration-150 active:scale-[1.02] active:bg-[var(--primary-soft)] flex items-center gap-4"
                {...answerButtonPointerHandlers}
              >
                <GoldBadge label={opt.letter} />
                <span className="text-base font-serif" style={{ color: "var(--foreground)" }}>{opt.text}</span>
              </button>
            ))
        }
      </div>
    </div>
  );
}
