"use client";

import { useId } from "react";
import { QuizQuestion, LIKERT_LABELS } from "@/types/quiz";

function GoldBadge({ label, small }: { label: string; small?: boolean }) {
  const size = small ? "w-7 h-7 text-xs" : "w-8 h-8 text-sm";
  return (
    <span
      aria-hidden="true"
      className={`flex-shrink-0 ${size} rounded-full flex items-center justify-center font-semibold`}
      style={{
        background: "linear-gradient(135deg, var(--accent-soft) 0%, #eedfa0 100%)",
        color: "var(--accent)",
        border: "1.5px solid rgba(201,161,74,0.45)",
        boxShadow: "0 1px 4px rgba(201,161,74,0.18), inset 0 1px 1px rgba(255,255,255,0.8)",
      }}
    >
      {label}
    </span>
  );
}

export default function QuestionView({
  question,
  onAnswer,
}: {
  question: QuizQuestion;
  onAnswer: (value: string) => void;
}) {
  const type = question.type ?? "forced-choice";
  const isScale = type === "likert" || type === "reverse";
  const headingId = useId();

  return (
    <div className="lc-question-wrap">
      <h2 id={headingId} className="lc-question-heading">
        {question.question}
      </h2>

      {isScale ? (
        <div
          className="lc-likert-stack"
          role="radiogroup"
          aria-labelledby={headingId}
        >
          {LIKERT_LABELS.map((label, i) => {
            const value = String(i + 1);
            return (
              <button
                key={value}
                type="button"
                onClick={() => onAnswer(value)}
                aria-label={`${value} out of 5 — ${label}`}
                className="lc-likert-btn"
              >
                <GoldBadge label={value} />
                <span className="lc-likert-label">{label}</span>
                <span className="lc-likert-arrow" aria-hidden="true">→</span>
              </button>
            );
          })}
        </div>
      ) : (
        <div
          className="lc-mcq-grid"
          role="radiogroup"
          aria-labelledby={headingId}
        >
          {question.options.map((opt) => (
            <button
              key={opt.letter}
              type="button"
              onClick={() => onAnswer(opt.letter)}
              className="lc-mcq-btn"
            >
              <GoldBadge label={opt.letter} small />
              <span className="lc-mcq-text">{opt.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}