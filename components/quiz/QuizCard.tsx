"use client";

import { useEffect, useRef, useState } from "react";
import QuestionView from "./QuestionView";
import { QuizState } from "@/lib";

function DotProgress({
  total,
  current,
  canGoBack,
  onBack,
  onExit,
}: {
  total: number;
  current: number;
  canGoBack: boolean;
  onBack: () => void;
  onExit: () => void;
}) {
  const questionNum = Math.min(current + 1, total);
  const pct = Math.round((current / total) * 100);
  const remaining = total - current;

  return (
    <div className="lc-progress-shell">
      {/* Gold gradient bar */}
      <div
        className="lc-progress-track"
        role="progressbar"
        aria-valuenow={questionNum}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuetext={`Question ${questionNum} of ${total}`}
      >
        <div className="lc-progress-fill" style={{ width: `${pct}%` }} />
      </div>

      {/* Meta row */}
      <div className="lc-progress-meta">
        {canGoBack ? (
          <button
            type="button"
            onClick={onBack}
            className="lc-progress-back"
            aria-label="Go back to the previous question"
          >
            ← Back
          </button>
        ) : (
          <span aria-hidden="true" />
        )}

        <div className="lc-progress-info">
          <span className="lc-progress-count">
            {questionNum} <span style={{ opacity: 0.4 }}>of</span> {total}
          </span>
          {remaining > 0 && (
            <span className="lc-progress-time">· {remaining} left</span>
          )}
          <button
            type="button"
            onClick={onExit}
            className="lc-progress-exit"
            aria-label="Exit assessment and save progress"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default function QuizCard({ quiz }: { quiz: QuizState }) {
  const [animKey, setAnimKey] = useState(0);
  const prevIndex = useRef(quiz.index);

  useEffect(() => {
    if (quiz.index !== prevIndex.current) {
      prevIndex.current = quiz.index;
      setAnimKey(k => k + 1);
      // Each question can render a different number of options, so the page
      // height changes between questions. Without this, advancing from a
      // question answered near the bottom of a long list leaves the next
      // question scrolled out of view instead of starting at its heading.
      window.scrollTo({ top: 0, behavior: "smooth" });
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
          onExit={quiz.onExit}
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