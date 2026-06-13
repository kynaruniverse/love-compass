"use client";

import { useState } from "react";
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

  function answerQuestion(value: string) {
    const updated = [...answers, value];
    setAnswers(updated);

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

    // FIX: always advance index — was previously stuck on last question
    setIndex(index + 1);
  }

  function progress() {
    return Math.round(((index + 1) / questions.length) * 100);
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