"use client";

import { useId } from "react";
import { QuizQuestion, LIKERT_LABELS } from "@/types/quiz";

function GoldBadge({ label }: { label: string }) {
  return (
    <span
      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-serif"
      style={{
        background: "linear-gradient(135deg, #f5e199 0%, #c9a14a 60%, #8a6520 100%)",
        color: "#1C0A0E",
        boxShadow: "0 1px 4px rgba(201,161,74,0.3)",
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

// Keyboard users never trigger pointer events, so focus state is handled
// entirely by the .lc-answer-btn:focus-visible rule in globals.css. These
// inline handlers stay pointer-only and are layered on top of that class.

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
        className="text-2xl sm:text-3xl font-serif font-semibold mb-8 leading-snug text-center"
      >
        {question.question}
      </h2>

      {isScale ? (
        <div className="space-y-3" role="radiogroup" aria-labelledby={headingId}>
          {LIKERT_LABELS.map((label, i) => {
            const value = String(i + 1);
            return (
              <button
                key={value}
                onClick={() => onAnswer(value)}
                aria-label={`${value} out of 5 — ${label}`}
                className="lc-answer-btn w-full text-left rounded-2xl transition-all duration-150 active:scale-[1.02] flex items-center gap-4"
                style={{
                  padding: "1rem",
                  minHeight: 56,
                  border: "1.5px solid var(--border-soft)",
                  background: "linear-gradient(135deg, var(--surface) 80%, var(--primary-soft) 100%)",
                  boxShadow: "0 1px 4px rgba(158,59,78,0.07), inset 0 1px 2px rgba(255,255,255,0.6)",
                  WebkitTapHighlightColor: "transparent",
                }}
                {...answerButtonPointerHandlers}
              >
                <GoldBadge label={value} />
                <span className="text-base font-serif" style={{ color: "var(--foreground)" }}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="space-y-3" role="radiogroup" aria-labelledby={headingId}>
          {question.options.map(opt => (
            <button
              key={opt.letter}
              onClick={() => onAnswer(opt.letter)}
              className="lc-answer-btn w-full text-left rounded-2xl transition-all duration-150 active:scale-[1.02] flex items-center gap-4"
              style={{
                padding: "1rem",
                minHeight: 56,
                border: "1.5px solid var(--border-soft)",
                background: "linear-gradient(135deg, var(--surface) 80%, var(--primary-soft) 100%)",
                boxShadow: "0 1px 4px rgba(158,59,78,0.07), inset 0 1px 2px rgba(255,255,255,0.6)",
                WebkitTapHighlightColor: "transparent",
              }}
              {...answerButtonPointerHandlers}
            >
              <GoldBadge label={opt.letter} />
              <span className="text-base font-serif" style={{ color: "var(--foreground)" }}>
                {opt.text}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}