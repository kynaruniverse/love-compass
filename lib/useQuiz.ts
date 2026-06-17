"use client";

import { useEffect, useRef, useState } from "react";
import { ScoreMap, QuizQuestion } from "@/types/quiz";
import { createEmptyScores } from "./scoring";
import { applyAnswer } from "./scoring";

export interface QuizState {
  index: number;
  question: QuizQuestion;
  answerQuestion: (value: string) => void;
  scores: ScoreMap;
  answers: string[];
  progress: () => number;
  /** Total number of questions */
  total: number;
  isComplete: boolean;
}

export function useQuiz(questions: QuizQuestion[]): QuizState {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [scores, setScores] = useState<ScoreMap>(createEmptyScores());
  // Guard against double-tap: lock until the answer state has been applied.
  const answering = useRef(false);

  function answerQuestion(value: string) {
    // Reject calls when the quiz is already complete (stale callback after navigation).
    if (index >= questions.length) return;
    // Reject duplicate calls from rapid double-taps. The lock is released inside
    // a useEffect (see below) that fires only after React has committed the new
    // index, making it safe in React 18 concurrent mode. A microtask would
    // release the lock before React commits, defeating the guard.
    if (answering.current) return;
    answering.current = true;

    setAnswers(prev => [...prev, value]);
    setScores(prev => applyAnswer(prev, questions[index], value));
    // Use functional updater to avoid stale closure on `index`.
    setIndex(prev => prev + 1);
  }

  // Release the double-tap lock after React has committed the updated index.
  // useEffect fires after commit, which is later than a microtask — ensuring
  // the lock actually holds for the full render cycle.
  useEffect(() => {
    answering.current = false;
  }, [index]);

  function progress() {
    return Math.round((index / questions.length) * 100);
  }

  const isComplete = index >= questions.length;

  return {
    index,
    question: questions[Math.min(index, questions.length - 1)],
    answerQuestion,
    scores,
    answers,
    progress,
    total: questions.length,
    isComplete,
  };
}