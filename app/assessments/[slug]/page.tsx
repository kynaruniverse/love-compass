"use client";

import { useParams, useRouter } from "next/navigation";
import { generalLoveQuestions } from "@/data/general-love";
import { intimacyQuestions } from "@/data/intimacy";
import { hybridQuestions } from "@/data/hybrid";
import { useQuiz } from "@/lib/useQuiz";
import QuizCard from "@/components/quiz/QuizCard";
import { tallyAnswers } from "@/lib/scoring";
import { QuizQuestion } from "@/types/quiz";

function getQuestions(slug: string): QuizQuestion[] {
  switch (slug) {
    case "love":
      return generalLoveQuestions;
    case "intimacy":
      return intimacyQuestions;
    case "hybrid":
      return hybridQuestions;
    default:
      return generalLoveQuestions;
  }
}

export default function QuizPage() {
  const { slug } = useParams();
  const router = useRouter();

  const questions = getQuestions(slug as string);
  const quiz = useQuiz(questions);

  if (quiz.isComplete) {
    const results = tallyAnswers(quiz.answers, questions);

    if (typeof window !== "undefined") {
      sessionStorage.setItem("results", JSON.stringify(results));
      sessionStorage.setItem("questions", JSON.stringify(questions));
      sessionStorage.setItem("type", slug as string);
    }

    router.push("/results");
    return null;
  }

  return (
    <main className="px-4 py-4">
      <QuizCard quiz={quiz} />
    </main>
  );
}