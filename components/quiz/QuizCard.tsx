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
    <div className="flex flex-col min-h-[calc(100vh-160px)]">
      <div className="pt-6 pb-10">
        <DotProgress total={quiz.total} current={quiz.index} />
      </div>

      <div className="flex-1 flex items-center overflow-hidden">
        <div
          key={animKey}
          className="w-full"
          style={{
            animation: `quiz-slide-in-${direction} 0.35s ease-out`
          }}
        >
          <QuestionView
            question={quiz.question}
            onAnswer={quiz.answerQuestion}
          />
        </div>
      </div>

      <style>{`
        @keyframes quiz-slide-in-left {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes quiz-slide-in-right {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}