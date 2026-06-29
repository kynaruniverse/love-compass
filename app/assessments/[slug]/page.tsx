"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import { QuizQuestion } from "@/types/quiz";
import { useQuiz, tallyAnswers, saveQuizSession, loadQuizProgress, clearQuizProgress, encodeShareData } from "@/lib";
import { QuizCard, QuizErrorBoundary } from "@/components/quiz";
import { ParticleCanvas } from "@/components/ui";
import { assessments } from "@/data/assessments";

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
// Shows contextual title + description immediately (both live in the main
// bundle, not the dynamic chunk) so the user gets meaningful feedback the
// instant they tap, before the question bank finishes downloading.
function QuizLoading({ slug }: { slug: string }) {
  const meta = assessments.find((a) => a.slug === slug);
  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center px-6"
      aria-live="polite"
      aria-label="Loading assessment"
    >
      <div className="text-center max-w-sm w-full" style={{ animation: "quiz-bloom-in 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}>
        <p
          className="font-serif italic mb-4"
          style={{ color: "var(--primary)", fontSize: 13, opacity: 0.6, letterSpacing: "0.08em" }}
        >
          ASSESSMENT
        </p>
        {meta && (
          <>
            <h1
              className="font-serif font-bold mb-3"
              style={{ color: "var(--primary)", fontSize: 26 }}
            >
              {meta.title}
            </h1>
            <p
              className="font-serif leading-relaxed mb-8"
              style={{ fontSize: 15, opacity: 0.65 }}
            >
              {meta.description}
            </p>
          </>
        )}
        <div className="flex items-center justify-center" aria-hidden="true">
          <svg
            width="36"
            height="36"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: "lc-breathe 2.2s ease-in-out infinite" }}
          >
            <defs>
              <radialGradient id="lc-quiz-loading-grad" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#a06ebe" stopOpacity="1" />
                <stop offset="55%" stopColor="#9E3B4E" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#32144a" stopOpacity="0.7" />
              </radialGradient>
            </defs>
            <path
              d="M24 40.5C24 40.5 5 29 5 16.5C5 10.5 9.5 6 15.5 6C18.9 6 21.8 7.7 24 10.2C26.2 7.7 29.1 6 32.5 6C38.5 6 43 10.5 43 16.5C43 29 24 40.5 24 40.5Z"
              fill="url(#lc-quiz-loading-grad)"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}

// ── Intro screen ──────────────────────────────────────────────────────────
function QuizIntro({ title, description, onBegin }: { title: string; description: string; onBegin: () => void }) {
  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center px-6"
      aria-label="Assessment introduction"
    >
      <ParticleCanvas />
      <div
        className="relative z-10 text-center max-w-sm w-full"
        style={{ animation: "quiz-bloom-in 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <p
          className="font-serif italic mb-3"
          style={{ color: "var(--primary)", fontSize: 13, opacity: 0.6, letterSpacing: "0.08em" }}
        >
          ASSESSMENT
        </p>
        <h1
          className="font-serif font-bold mb-4"
          style={{ color: "var(--primary)", fontSize: 26 }}
        >
          {title}
        </h1>
        <p
          className="font-serif leading-relaxed mb-4"
          style={{ fontSize: 15, opacity: 0.7 }}
        >
          {description}
        </p>
        <p
          className="font-serif italic mb-6"
          style={{ fontSize: 13, opacity: 0.5 }}
        >
          Answer honestly. There are no right answers, only yours.
        </p>
        <button onClick={onBegin} className="lc-cta-primary">
          Begin →
        </button>
        <p
          className="font-serif italic mt-5"
          style={{ fontSize: 13, opacity: 0.4 }}
        >
          You can pause and return — your progress saves automatically.
        </p>
      </div>
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

  const meta = assessments.find((a) => a.slug === slug);

  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
  const [started, setStarted] = useState(false);
  const [resumeData, setResumeData] = useState<{ index: number; answers: string[] } | null>(null);
  const [showResume, setShowResume] = useState(false);

  // Dynamically load only the question bank for this slug.
  useEffect(() => {
    let cancelled = false;
    loadQuestions(slug).then((qs) => {
      if (!cancelled) {
        setQuestions(qs);
        const saved = loadQuizProgress(slug);
        if (saved && saved.index > 0 && saved.index < qs.length) {
          setResumeData({ index: saved.index, answers: saved.answers });
          setShowResume(true);
        }
      }
    });
    return () => { cancelled = true; };
  }, [slug]);

  const quiz = useQuiz(
    questions ?? [],
    slug,
    resumeData && !showResume ? resumeData.answers : undefined,
    resumeData && !showResume ? resumeData.index : undefined,
  );
  const navigated = useRef(false);

  useEffect(() => {
    if (!quiz.isComplete || !questions || navigated.current) return;
    navigated.current = true;
    const results = tallyAnswers(quiz.answers, questions);
    const saved = saveQuizSession(results, questions, slug);
    clearQuizProgress();
    if (saved) {
      router.push("/results");
    } else {
      router.push(`/results?d=${encodeShareData(results, slug)}&own=true`);
    }
  }, [quiz.isComplete, quiz.answers, questions, slug, router]);

  // Show skeleton while the question chunk is downloading.
  if (!questions) {
    return <QuizLoading slug={slug} />;
  }

  // Offer to resume saved progress.
  if (showResume && resumeData) {
    return (
      <main
        id="main-content"
        className="min-h-screen flex items-center justify-center px-6"
        aria-label="Resume assessment"
      >
        <ParticleCanvas />
        <div
          className="relative z-10 text-center max-w-sm w-full"
          style={{ animation: "quiz-bloom-in 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <p
            className="font-serif italic mb-3"
            style={{ color: "var(--primary)", fontSize: 13, opacity: 0.6, letterSpacing: "0.08em" }}
          >
            WELCOME BACK
          </p>
          <h1
            className="font-serif font-bold mb-4"
            style={{ color: "var(--primary)", fontSize: 24 }}
          >
            Continue your {meta?.title ?? "assessment"}?
          </h1>
          <p
            className="font-serif leading-relaxed mb-8"
            style={{ fontSize: 15, opacity: 0.7 }}
          >
            You were on question {resumeData.index + 1} of {questions.length}.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <button
              className="lc-cta-primary"
              onClick={() => { setShowResume(false); setStarted(true); }}
            >
              Continue →
            </button>
            <button
              className="lc-error-home-link"
              onClick={() => { setResumeData(null); setShowResume(false); clearQuizProgress(); }}
            >
              Start over
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Show intro screen before questions begin.
  if (!started) {
    return (
      <QuizIntro
        title={meta?.title ?? "Assessment"}
        description={meta?.description ?? ""}
        onBegin={() => setStarted(true)}
      />
    );
  }

  if (quiz.isComplete) {
    return (
      <main
        id="main-content"
        className="min-h-screen flex items-center justify-center px-6"
        aria-live="polite"
        aria-label="Loading results"
      >
        <div className="text-center max-w-sm w-full" style={{ animation: "quiz-bloom-in 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}>
          <div className="flex items-center justify-center mb-4" aria-hidden="true">
            <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ animation: "lc-breathe 2.2s ease-in-out infinite" }}
            >
              <defs>
                <radialGradient id="lc-results-loading-grad" cx="40%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#a06ebe" stopOpacity="1" />
                  <stop offset="55%" stopColor="#9E3B4E" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#32144a" stopOpacity="0.7" />
                </radialGradient>
              </defs>
              <path
                d="M24 40.5C24 40.5 5 29 5 16.5C5 10.5 9.5 6 15.5 6C18.9 6 21.8 7.7 24 10.2C26.2 7.7 29.1 6 32.5 6C38.5 6 43 10.5 43 16.5C43 29 24 40.5 24 40.5Z"
                fill="url(#lc-results-loading-grad)"
              />
            </svg>
          </div>
          <p
            className="font-serif italic text-center"
            style={{ color: "var(--primary)", fontSize: 16, opacity: 0.65 }}
          >
            Reflecting on your path…
          </p>
        </div>
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
        <QuizErrorBoundary slug={slug}>
          <QuizCard quiz={quiz} />
        </QuizErrorBoundary>
      </div>
    </main>
  );
}