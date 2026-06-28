"use client";

import { useId, useState, type CSSProperties } from "react";
import { QuizQuestion, LIKERT_LABELS, LIKERT_LABELS_SHORT } from "@/types/quiz";

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
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  function handleScale(value: string) {
    if (selectedValue) return; // block double-tap
    setSelectedValue(value);
    setTimeout(() => onAnswer(value), 180);
  }

  return (
    <div className="lc-qcard-wrap">
      {/* -- The question itself: tilted card on two ghost layers,
           same visual language as the results hero, so the quiz and
           results feel like one continuous object rather than two
           different apps. Ghost layers are sized relative to the
           wrap (not fixed insets), so they track the card's real
           rendered height as question text length varies. -- */}
      <div className="lc-qcard-stack">
        <div className="lc-qcard-ghosts" aria-hidden="true">
          <div className="lc-qcard-ghost lc-qcard-ghost--back" />
          <div className="lc-qcard-ghost lc-qcard-ghost--mid" />
        </div>
        <div className="lc-qcard-card">
          <h2 id={headingId} className="lc-qcard-question">
            {question.question}
          </h2>
        </div>
      </div>

      {isScale ? (
        /* -- Likert: 5 large square tap targets, generous thumb size -- */
        <div className="lc-qscale" role="radiogroup" aria-labelledby={headingId}>
          <div className="lc-qscale-row">
            {LIKERT_LABELS.map((label, i) => {
              const value = String(i + 1);
              return (
                <div key={value} className="lc-qscale-col">
                  <button
                    type="button"
                    onClick={() => handleScale(value)}
                    aria-label={`${value} out of 5: ${label}`}
                    className={`lc-qscale-btn${selectedValue === value ? " lc-qscale-btn--selected" : ""}`}
                    style={{ "--btn-index": i } as CSSProperties}
                    disabled={selectedValue !== null}
                    aria-pressed={selectedValue === value}
                  >
                    {value}
                  </button>
                  <span className="lc-qscale-sublabel">{LIKERT_LABELS_SHORT[i]}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* -- Forced-choice: 8 full-width rows below the card -- */
        <div className="lc-qoptions" role="radiogroup" aria-labelledby={headingId}>
          {question.options.map((opt, i) => (
            <button
              key={opt.letter}
              type="button"
              onClick={() => onAnswer(opt.letter)}
              className="lc-qoption-row"
              style={{ "--row-i": i } as CSSProperties}
            >
              <span className="lc-qoption-dot" aria-hidden="true" />
              <span className="lc-qoption-text">{opt.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
