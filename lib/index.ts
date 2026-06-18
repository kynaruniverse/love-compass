export { createEmptyScores, maxPossibleScores, tallyAnswers, applyAnswer, normalizeScores } from "./scoring";
export { useQuiz } from "./useQuiz";
export type { QuizState } from "./useQuiz";
export { getAssessmentAssets, buildProfile, dominantCategories, pickArchetype, getIntensity, getBlend } from "./resultBuilder";
export { saveQuizSession, loadQuizSession } from "./session";
export type { QuizSession } from "./session";
export { encodeShareData, decodeShareData, buildShareUrl } from "./shareLink";
export { clamp, isNonEmpty, getQuizTypeLabel, isGivingMode, siteMeta, generateMeta } from "./utils";
export { exportText, exportMarkdown, buildResultTXT, buildResultMD } from "./export";