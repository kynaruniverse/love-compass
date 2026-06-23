"use client";

import { useEffect, useRef, useState } from "react";
import QuestionView from "./QuestionView";
import { QuizState } from "@/lib";

function DotProgress({
  total,
  current,
  canGoBack,
  onBack,
}: {
  total: number;
  current: number;
  canGoBack: boolean;
  onBack: () => void;
}) {
  const pct = Math.round((current / total) * 100);
  return (
    <>
      <div
        className="w-full overflow-hidden"
        style={{ height: 3, background: "var(--surface-muted)" }}
        role="progressbar"
        aria-valuenow={Math.min(current + 1, total)}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label="Assessment progress"
        aria-valuetext={`Question ${Math.min(current + 1, total)} of ${total}`}
      >
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #c9a14a 0%, #e8c97a 50%, #c9a14a 100%)",
          }}
        />
      </div>
      <div className="w-full flex items-center justify-between px-4 pt-2 pb-1 max-w-xl mx-auto">
        {canGoBack ? (
          <button
            type="button"
            onClick={onBack}
            className="font-serif text-xs text-[var(--primary)] opacity-60 active:opacity-100 transition-opacity"
            style={{ padding: "0.25rem 0.5rem", marginLeft: "-0.5rem", minHeight: "32px" }}
            aria-label="Go back to the previous question"
          >
            ← Back
          </button>
        ) : (
          <span aria-hidden="true" />
        )}
        <span className="font-serif text-xs text-[var(--primary)] opacity-60 tabular-nums">
          {Math.min(current + 1, total)} / {total}
        </span>
      </div>
    </>
  );
}

export default function QuizCard({ quiz }: { quiz: QuizState }) {
  const [animKey, setAnimKey] = useState(0);
  const prevIndex = useRef(quiz.index);

  useEffect(() => {
    if (quiz.index !== prevIndex.current) {
      prevIndex.current = quiz.index;
      setAnimKey(k => k + 1);
    }
  }, [quiz.index]);

  return (
    <div
      className="flex flex-col"
      style={{
        minHeight: "min(calc(100dvh - 120px), 680px)",
        paddingBottom: "max(env(safe-area-inset-bottom, 0px), 1rem)",
        background: "radial-gradient(ellipse at 50% 30%, rgba(158,59,78,0.04) 0%, transparent 70%)",
      }}
    >
      <div>
        <DotProgress
          total={quiz.total}
          current={quiz.index}
          canGoBack={quiz.canGoBack}
          onBack={quiz.goBack}
        />
      </div>

      <div className="flex-1 flex items-center overflow-hidden">
        <div
          key={animKey}
          className="w-full"
          style={{
            animation: `quiz-bloom-in 0.38s cubic-bezier(0.22, 1, 0.36, 1)`
          }}
        >
          <QuestionView
            question={quiz.question}
            onAnswer={quiz.answerQuestion}
          />
        </div>
      </div>
    </div>
  );
}