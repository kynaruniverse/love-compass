"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ScoreMap, QuizQuestion } from "@/types/quiz";
import { createEmptyScores, applyAnswer, tallyAnswers } from "./scoring";
import { saveQuizProgress } from "./session";

export interface QuizState {
  index: number;
  /** Total number of questions */
  total: number;
  question: QuizQuestion;
  answers: string[];
  scores: ScoreMap;
  progress: () => number;
  isComplete: boolean;
  answerQuestion: (value: string) => void;
  /** Step back one question and clear that question's recorded answer. No-op on the first question. */
  goBack: () => void;
  canGoBack: boolean;
}

export function useQuiz(questions: QuizQuestion[], slug?: string, initialAnswers?: string[], initialIndex?: number): QuizState {
  const [index, setIndex] = useState(initialIndex ?? 0);
  const [answers, setAnswers] = useState<string[]>(initialAnswers ?? []);
  const [scores, setScores] = useState<ScoreMap>(() =>
    initialAnswers?.length ? tallyAnswers(initialAnswers, questions) : createEmptyScores()
  );
  // Guard against double-tap: lock until the answer state has been applied.
  const answering = useRef(false);

  const answerQuestion = useCallback((value: string) => {
    if (index >= questions.length) return;
    if (answering.current) return;
    answering.current = true;

    setAnswers(prev => [...prev, value]);
    const currentQuestion = questions[index];
    if (currentQuestion) {
      setScores(prev => applyAnswer(prev, currentQuestion, value));
      setIndex(prev => prev + 1);
    } else {
      // Handle the edge case where currentQuestion is undefined, e.g., log an error or reset quiz
      console.error("Attempted to answer a question that does not exist at index:", index);
    }
  }, [index, questions]);

  // Step back one question. Re-tallies from the truncated answer list rather
  // than inverting applyAnswer — safer for reverse-scored questions, which
  // clamp at 0 and would otherwise lose information needed to undo cleanly.
  const goBack = useCallback(() => {
    if (index <= 0) return;
    if (answering.current) return;

    setAnswers(prev => {
      const next = prev.slice(0, -1);
      setScores(tallyAnswers(next, questions));
      return next;
    });
    setIndex(prev => Math.max(0, prev - 1));
  }, [index, questions]);

  // Persist progress on every answer
  useEffect(() => {
    if (!slug || questions.length === 0 || answers.length === 0) return;
    saveQuizProgress(slug, index, answers);
  }, [slug, index, answers, questions.length]);

  // Release the double-tap lock after React has committed the updated index.
  // useEffect fires after commit, which is later than a microtask — ensuring
  // the lock actually holds for the full render cycle.
  useEffect(() => {
    answering.current = false;
  }, [index]);

  const progress = useCallback(() => {
    return Math.round((index / questions.length) * 100);
  }, [index, questions.length]);

  const isComplete = index >= questions.length;

  // Empty array is a legitimate transient state (questions still loading)
  // — not a bug. Only throw if questions exist but the index is somehow
  // out of bounds in a way that isn't the empty-array loading case.
  const currentQuestion =
    questions.length > 0
      ? questions[Math.min(index, questions.length - 1)]
      : undefined;

  if (questions.length > 0 && !currentQuestion) {
    throw new Error("useQuiz: no question available at current index — this should not happen with a non-empty array");
  }

  return {
    index,
    question: currentQuestion as QuizQuestion,
    answerQuestion,
    goBack,
    canGoBack: index > 0,
    scores,
    answers,
    progress,
    total: questions.length,
    isComplete,
  };
}