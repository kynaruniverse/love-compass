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
  const params = useParams();
  const router = useRouter();

  const slug = typeof params.slug === "string" ? params.slug : null;
  const questions = slug ? (QUESTION_BANK[slug] ?? null) : null;

  if (!questions || !slug) {
    notFound();
  }

  const quiz = useQuiz(questions);
  
  const navigated = useRef(false);

  useEffect(() => {
    if (!quiz.isComplete || navigated.current) return;
    navigated.current = true;

    const results = tallyAnswers(quiz.answers, questions);
    saveQuizSession(results, questions, slug);
    router.push("/results");
    // Intentionally omitting quiz.answers from deps — it changes on every answer
    // and we only need to act once when isComplete flips. The ref guards against
    // StrictMode double-invocation in development.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz.isComplete]);

  if (quiz.isComplete) {
    return (
      <main
        id="main-content"
        className="min-h-[60vh] flex items-center justify-center px-4"
        aria-live="polite"
        aria-label="Loading results"
      >
        <p
          className="font-serif italic text-center"
          style={{ color: "var(--primary)", fontSize: 18, opacity: 0.7 }}
        >
          Reflecting on your path…
        </p>
      </main>
    );
  }

  return (
    <main
      id="main-content"
      className="px-4 py-4 relative"
      aria-label="Assessment questions"
      style={{ animation: "quiz-bloom-in 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <ParticleCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <QuizCard quiz={quiz} />
      </div>
    </main>
  );
}