"use client";

import { useId } from "react";
import { QuizQuestion, LIKERT_LABELS } from "@/types/quiz";

// Emoji map — each love language category gets a symbol that
// communicates the feeling before the text lands.
const OPTION_EMOJI: Record<string, string> = {
  A: "🕊", B: "🤝", C: "🫂", D: "🍵",
  E: "✨", F: "🛡", G: "⭐", H: "📋",
};

// Likert spectrum — 5 points from cold to warm
const LIKERT_SPECTRUM = ["🌑", "🌒", "🌓", "🌔", "🌕"];

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
    <div className="lc-qv-wrap">
      <h2 id={headingId} className="lc-qv-heading">
        {question.question}
      </h2>

      {isScale ? (
        /* ── Likert: 5 large circular tap targets in a warm spectrum row ── */
        <div className="lc-likert-outer" role="radiogroup" aria-labelledby={headingId}>
          <div className="lc-likert-labels">
            <span>Not me</span>
            <span>Exactly me</span>
          </div>
          <div className="lc-likert-row">
            {LIKERT_LABELS.map((label, i) => {
              const value = String(i + 1);
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => onAnswer(value)}
                  aria-label={`${value} out of 5: ${label}`}
                  className="lc-likert-dot"
                  style={{ "--dot-index": i } as React.CSSProperties}
                >
                  <span className="lc-likert-num">{value}</span>
                  <span className="lc-likert-moon" aria-hidden="true">
                    {LIKERT_SPECTRUM[i]}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="lc-likert-track" aria-hidden="true" />
        </div>
      ) : (
        /* ── MCQ: full-width editorial rows, emoji + text, tap to advance ── */
        <div
          className="lc-mcq-list"
          role="radiogroup"
          aria-labelledby={headingId}
        >
          {question.options.map((opt, i) => (
            <button
              key={opt.letter}
              type="button"
              onClick={() => onAnswer(opt.letter)}
              className="lc-mcq-row"
              style={{ "--row-i": i } as React.CSSProperties}
            >
              <span className="lc-mcq-emoji" aria-hidden="true">
                {OPTION_EMOJI[opt.letter] ?? "◦"}
              </span>
              <span className="lc-mcq-body">
                <span className="lc-mcq-letter">{opt.letter}</span>
                <span className="lc-mcq-text">{opt.text}</span>
              </span>
              <span className="lc-mcq-chevron" aria-hidden="true">›</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}