"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import { QuizQuestion } from "@/types/quiz";
import { useQuiz, tallyAnswers, saveQuizSession } from "@/lib";
import { QuizCard } from "@/components/quiz";
import { ParticleCanvas } from "@/components/ui";

// ── Valid slugs ────────────────────────────────────────────────────────────
// Kept here so notFound() fires synchronously before the dynamic import
// starts, rather than after. Avoids a flash of the loading state for 404s.
const VALID_SLUGS = new Set(["love", "intimacy", "love-giving", "intimacy-giving"]);

/**
 * Dynamically import only the question bank for the current slug.
 * Each import() becomes a separate chunk — visitors who take the "love"
 * assessment never download "intimacy-giving" questions, etc.
 */
async function loadQuestions(slug: string): Promise<QuizQuestion[]> {
  switch (slug) {
    case "love": {
      const { LOVE_QUESTIONS } = await import("@/data/questions/love");
      return LOVE_QUESTIONS;
    }
    case "intimacy": {
      const { INTIMACY_QUESTIONS } = await import("@/data/questions/intimacy");
      return INTIMACY_QUESTIONS;
    }
    case "love-giving": {
      const { LOVE_GIVING_QUESTIONS } = await import("@/data/questions/love-giving");
      return LOVE_GIVING_QUESTIONS;
    }
    case "intimacy-giving": {
      const { INTIMACY_GIVING_QUESTIONS } = await import("@/data/questions/intimacy-giving");
      return INTIMACY_GIVING_QUESTIONS;
    }
    default:
      throw new Error(`Unknown slug: ${slug}`);
  }
}

// ── Loading skeleton ───────────────────────────────────────────────────────
function QuizLoading() {
  return (
    <main
      id="main-content"
      className="min-h-[60vh] flex items-center justify-center px-4"
      aria-live="polite"
      aria-label="Loading assessment"
    >
      <p
        className="font-serif italic text-center"
        style={{ color: "var(--primary)", fontSize: 18, opacity: 0.7 }}
      >
        Preparing your assessment…
      </p>
    </main>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────
export default function QuizPage() {
  const params = useParams();
  const router = useRouter();

  const slug = typeof params.slug === "string" ? params.slug : null;

  // Guard invalid slugs synchronously (before the data fetch).
  if (!slug || !VALID_SLUGS.has(slug)) {
    notFound();
  }

  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);

  // Dynamically load only the question bank for this slug.
  useEffect(() => {
    let cancelled = false;
    loadQuestions(slug).then((qs) => {
      if (!cancelled) setQuestions(qs);
    });
    return () => { cancelled = true; };
  }, [slug]);

  const quiz = useQuiz(questions ?? []);
  const navigated = useRef(false);

  useEffect(() => {
    if (!quiz.isComplete || !questions || navigated.current) return;
    navigated.current = true;
    const results = tallyAnswers(quiz.answers, questions);
    saveQuizSession(results, questions, slug);
    router.push("/results");
  }, [quiz.isComplete, quiz.answers, questions, slug, router]);

  // Show skeleton while the question chunk is downloading.
  if (!questions) {
    return <QuizLoading />;
  }

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
      className="px-4 pb-24 pt-0 relative lc-quiz-shell"
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