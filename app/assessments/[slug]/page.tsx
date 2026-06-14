"use client";

import { useEffect } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import { generalLoveQuestions } from "@/data/general-love";
import { intimacyQuestions } from "@/data/intimacy";
import { generalLoveGivingQuestions } from "@/data/general-love-giving";
import { intimacyGivingQuestions } from "@/data/intimacy-giving";
import { useQuiz } from "@/lib/useQuiz";
import QuizCard from "@/components/quiz/QuizCard";
import { tallyAnswers } from "@/lib/scoring";
import { QuizQuestion } from "@/types/quiz";

function getQuestions(slug: string): QuizQuestion[] | null {
  switch (slug) {
    case "love":
      return generalLoveQuestions;
    case "intimacy":
      return intimacyQuestions;
    case "love-giving":
      return generalLoveGivingQuestions;
    case "intimacy-giving":
      return intimacyGivingQuestions;
    default:
      return null;
  }
}

export default function QuizPage() {
  const { slug } = useParams();
  const router = useRouter();

  const questions = getQuestions(slug as string);

  if (!questions) {
    notFound();
  }

  const quiz = useQuiz(questions);

  useEffect(() => {
    if (!quiz.isComplete) return;

    const results = tallyAnswers(quiz.answers, questions);
    sessionStorage.setItem("results", JSON.stringify(results));
    sessionStorage.setItem("questions", JSON.stringify(questions));
    sessionStorage.setItem("type", slug as string);
    router.push("/results");
  }, [quiz.isComplete, quiz.answers, questions, slug, router]);

  if (quiz.isComplete) {
    return null;
  }

  return (
    <main className="px-4 py-4">
      <QuizCard quiz={quiz} />
    </main>
  );
}