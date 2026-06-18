"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ScoreMap, QuizQuestion } from "@/types/quiz";
import { createEmptyScores, applyAnswer } from "./scoring";

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

  const answerQuestion = useCallback((value: string) => {
    if (index >= questions.length) return;
    if (answering.current) return;
    answering.current = true;

    setAnswers(prev => [...prev, value]);
    setScores(prev => applyAnswer(prev, questions[index], value));
    setIndex(prev => prev + 1);
  }, [index, questions]);

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