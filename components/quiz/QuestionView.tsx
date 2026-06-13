"use client";

import Card from "@/components/ui/Card";
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
    <Card className="max-w-2xl mx-auto">
      {isScale && (
        <span className="inline-block mb-3 px-3 py-1 stamp-badge text-xs font-medium text-[var(--accent)]">
          {type === "reverse" ? "Reverse question" : "Rate how much this applies to you"}
        </span>
      )}

      <h2 className="text-xl font-serif font-semibold mb-6 leading-snug">
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
                className="w-full text-left p-3 rounded-2xl border border-[var(--border-soft)] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] transition-all flex items-center gap-3 group"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[var(--border-soft)] group-hover:border-[var(--primary)] flex items-center justify-center text-xs font-bold opacity-60 group-hover:text-[var(--primary)] group-hover:opacity-100 transition-colors">
                  {value}
                </span>
                <span className="text-sm">{label}</span>
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
              className="w-full text-left p-3 rounded-2xl border border-[var(--border-soft)] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] transition-all flex items-center gap-3 group"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[var(--border-soft)] group-hover:border-[var(--primary)] flex items-center justify-center text-xs font-bold opacity-60 group-hover:text-[var(--primary)] group-hover:opacity-100 transition-colors">
                {opt.letter}
              </span>
              <span className="text-sm">{opt.text}</span>
            </button>
          ))}
        </div>
      )}
    </Card>
  );
}