"use client";

import ProgressBar from "@/components/ui/ProgressBar";
import QuestionView from "./QuestionView";
import { QuizState } from "@/lib/useQuiz";

export default function QuizCard({ quiz }: { quiz: QuizState }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between text-sm opacity-60">
        <span>
          Question {Math.min(quiz.index + 1, quiz.total)} of {quiz.total}
        </span>
        <span>{quiz.progress()}% complete</span>
      </div>

      <ProgressBar value={quiz.progress()} />

      <QuestionView
        question={quiz.question}
        onAnswer={quiz.answerQuestion}
      />
    </div>
  );
}