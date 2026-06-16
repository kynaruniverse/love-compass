"use client";

import { useRef, useState } from "react";
import { ScoreMap, QuizQuestion } from "@/types/quiz";
import { createEmptyScores } from "./scoring";

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
  // Guard against double-tap: lock until the next render has committed.
  const answering = useRef(false);

  function answerQuestion(value: string) {
    // Drop duplicate calls that arrive before the next render (e.g. rapid
    // double-tap on mobile) to prevent score double-counting.
    if (answering.current) return;
    answering.current = true;
    // Release the lock after React has re-rendered this component.
    Promise.resolve().then(() => { answering.current = false; });

    setAnswers(prev => [...prev, value]);

    const q = questions[index];
    const type = q.type ?? "forced-choice";
    const weight = q.weight ?? 1;

    setScores(prev => {
      const next = { ...prev };

      if (type === "forced-choice") {
        const key = value as keyof ScoreMap;
        if (key in next) next[key] += weight;
      } else if (type === "likert") {
        const rating = parseInt(value, 10);
        if (!isNaN(rating) && q.category && q.category in next) {
          next[q.category] += rating * weight;
        }
      } else if (type === "reverse") {
        const rating = parseInt(value, 10);
        if (!isNaN(rating) && q.category && q.category in next) {
          next[q.category] = Math.max(0, next[q.category] - (rating - 1) * weight);
        }
      }

      return next;
    });

    // Use functional updater to avoid stale closure on `index`.
    setIndex(prev => prev + 1);
  }

  function progress() {
    return Math.round((index / questions.length) * 100);
  }

  const isComplete = index >= questions.length;

  return {
    index,
    question: questions[index] ?? questions[questions.length - 1],
    answerQuestion,
    scores,
    answers,
    progress,
    total: questions.length,
    isComplete,
  };
}