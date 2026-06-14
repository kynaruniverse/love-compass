"use client";

import { QuizQuestion, LIKERT_LABELS } from "@/types/quiz";

export default function QuestionView({
  question,
  onAnswer
}: {
  question: QuizQuestion;
  onAnswer: (value: string) => void;
}) {
  const type = question.type ?? "forced-choice";
  const isScale = type === "likert" || type === "reverse";

  return (
    <div className="max-w-xl mx-auto w-full px-4">
      {isScale && (
        <span className="inline-block mb-4 px-3 py-1 stamp-badge text-xs font-medium text-[var(--accent)]">
          Rate how much this applies to you
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-10 leading-snug text-center">
        {question.question}
      </h2>

      {isScale ? (
        // ── Likert / Reverse scale layout ──────────────────────────────────
        <div className="space-y-3">
          {LIKERT_LABELS.map((label, i) => {
            const value = String(i + 1);
            return (
              <button
                key={value}
                onClick={() => onAnswer(value)}
                className="w-full text-left p-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[var(--border-soft)] group-hover:border-[var(--primary)] flex items-center justify-center text-sm font-bold opacity-60 group-hover:text-[var(--primary)] group-hover:opacity-100 transition-colors">
                  {value}
                </span>
                <span className="text-base">{label}</span>
              </button>
            );
          })}
        </div>
      ) : (
        // ── Forced-choice layout ────────────────────────────────────────────
        <div className="space-y-3">
          {question.options.map(opt => (
            <button
              key={opt.letter}
              onClick={() => onAnswer(opt.letter)}
              className="w-full text-left p-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[var(--border-soft)] group-hover:border-[var(--primary)] flex items-center justify-center text-sm font-bold opacity-60 group-hover:text-[var(--primary)] group-hover:opacity-100 transition-colors">
                {opt.letter}
              </span>
              <span className="text-base">{opt.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}