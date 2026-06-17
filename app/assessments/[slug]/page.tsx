"use client";

import { useEffect, useRef } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import { QUESTION_BANK } from "@/data/assessments";
import { useQuiz } from "@/lib/useQuiz";
import QuizCard from "@/components/quiz/QuizCard";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { tallyAnswers } from "@/lib/scoring";
import { QuizQuestion } from "@/types/quiz";
import { saveQuizSession } from "@/lib/session";

export default function QuizPage() {
  const { slug } = useParams();
  const router = useRouter();

  const questions = QUESTION_BANK[slug as string] ?? null;

  if (!questions) {
    notFound();
  }

  const quiz = useQuiz(questions);

  const navigated = useRef(false);

  useEffect(() => {
    if (!quiz.isComplete || navigated.current) return;
    navigated.current = true;

    const results = tallyAnswers(quiz.answers, questions);
    saveQuizSession(results, questions, slug as string);
    router.push("/results");
    // Intentionally omitting quiz.answers from deps — it changes on every answer
    // and we only need to act once when isComplete flips. The ref guards against
    // StrictMode double-invocation in development.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz.isComplete]);

  if (quiz.isComplete) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ background: "var(--background)" }}
      >
        <p
          className="font-serif italic text-center"
          style={{ color: "var(--primary)", fontSize: 18, opacity: 0.7 }}
        >
          Reflecting on your path…
        </p>
      </div>
    );
  }

  return (
    <main
      className="px-4 py-4 relative"
      style={{ animation: "quiz-bloom-in 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <ParticleCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <QuizCard quiz={quiz} />
      </div>
    </main>
  );
}