"use client";

import { useEffect, useRef, useState } from "react";
import DotProgress from "./DotProgress";
import QuestionView from "./QuestionView";
import { QuizState } from "@/lib/useQuiz";

export default function QuizCard({ quiz }: { quiz: QuizState }) {
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [animKey, setAnimKey] = useState(0);
  const prevIndex = useRef(quiz.index);

  useEffect(() => {
    if (quiz.index !== prevIndex.current) {
      setDirection(quiz.index > prevIndex.current ? "left" : "right");
      prevIndex.current = quiz.index;
      setAnimKey(k => k + 1);
    }
  }, [quiz.index]);

  return (
    <div
      className="flex flex-col"
      style={{
        minHeight: "calc(100dvh - 160px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        background: "radial-gradient(ellipse at 50% 30%, rgba(94,58,115,0.04) 0%, transparent 70%)",
      }}
    >
      <div className="pt-4 pb-3">
        <DotProgress total={quiz.total} current={quiz.index} />
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