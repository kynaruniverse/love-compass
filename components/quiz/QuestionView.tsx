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
        <span className="inline-block mb-3 px-2 py-0.5 rounded-full text-xs font-medium bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">
          {type === "reverse" ? "Reverse question" : "Rate how much this applies to you"}
        </span>
      )}

      <h2 className="text-xl font-semibold mb-6 leading-snug">
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
                className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[var(--primary)] hover:bg-violet-50 dark:hover:bg-slate-800 transition-all flex items-center gap-3 group"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-[var(--primary)] flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-[var(--primary)] transition-colors">
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
              className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[var(--primary)] hover:bg-violet-50 dark:hover:bg-slate-800 transition-all flex items-center gap-3 group"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-[var(--primary)] flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-[var(--primary)] transition-colors">
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