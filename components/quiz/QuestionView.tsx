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
        <span
          className="inline-block mb-4 px-3 py-1 stamp-badge text-xs font-medium"
          style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
        >
          Rate how much this applies to you
        </span>
      )}

      <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-8 leading-snug text-center">
        {question.question}
      </h2>

      {isScale ? (
        <div className="space-y-3">
          {LIKERT_LABELS.map((label, i) => {
            const value = String(i + 1);
            return (
              <button
                key={value}
                onClick={() => onAnswer(value)}
                className="w-full text-left rounded-2xl transition-all duration-150 active:scale-[1.02] flex items-center gap-4"
                style={{
                  padding: "1rem",
                  minHeight: 56,
                  border: "1.5px solid var(--border-soft)",
                  background: "linear-gradient(135deg, var(--surface) 80%, var(--primary-soft) 100%)",
                  boxShadow: "0 1px 4px rgba(94,58,115,0.07), inset 0 1px 2px rgba(255,255,255,0.6)",
                  WebkitTapHighlightColor: "transparent",
                }}
                onPointerDown={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#c9a14a";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 4px 16px rgba(94,58,115,0.13), inset 0 1px 2px rgba(255,255,255,0.6)";
                }}
                onPointerUp={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-soft)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 1px 4px rgba(94,58,115,0.07), inset 0 1px 2px rgba(255,255,255,0.6)";
                }}
                onPointerLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-soft)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 1px 4px rgba(94,58,115,0.07), inset 0 1px 2px rgba(255,255,255,0.6)";
                }}
              >
                {/* Gold number badge */}
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-serif"
                  style={{
                    background: "linear-gradient(135deg, #f5e199 0%, #c9a14a 60%, #8a6520 100%)",
                    color: "#1a0a2e",
                    boxShadow: "0 1px 4px rgba(201,161,74,0.3)",
                  }}
                >
                  {value}
                </span>
                <span className="text-base font-serif" style={{ color: "var(--foreground)" }}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="space-y-3">
          {question.options.map(opt => (
            <button
              key={opt.letter}
              onClick={() => onAnswer(opt.letter)}
              className="w-full text-left rounded-2xl transition-all duration-150 active:scale-[1.02] flex items-center gap-4"
              style={{
                padding: "1rem",
                minHeight: 56,
                border: "1.5px solid var(--border-soft)",
                background: "linear-gradient(135deg, var(--surface) 80%, var(--primary-soft) 100%)",
                boxShadow: "0 1px 4px rgba(94,58,115,0.07), inset 0 1px 2px rgba(255,255,255,0.6)",
                WebkitTapHighlightColor: "transparent",
              }}
              onPointerDown={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#c9a14a";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 16px rgba(94,58,115,0.13), inset 0 1px 2px rgba(255,255,255,0.6)";
              }}
              onPointerUp={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-soft)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 1px 4px rgba(94,58,115,0.07), inset 0 1px 2px rgba(255,255,255,0.6)";
              }}
              onPointerLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-soft)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 1px 4px rgba(94,58,115,0.07), inset 0 1px 2px rgba(255,255,255,0.6)";
              }}
            >
              {/* Gold letter badge */}
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-serif"
                style={{
                  background: "linear-gradient(135deg, #f5e199 0%, #c9a14a 60%, #8a6520 100%)",
                  color: "#1a0a2e",
                  boxShadow: "0 1px 4px rgba(201,161,74,0.3)",
                }}
              >
                {opt.letter}
              </span>
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