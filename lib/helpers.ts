export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function isNonEmpty(str: string): boolean {
  return str.trim().length > 0;
}

export function getQuizTypeLabel(quizType: string): string {
  switch (quizType) {
    case "love":            return "Love Preference";
    case "intimacy":        return "Intimacy Style";
    case "love-giving":     return "Love Expression";
    case "intimacy-giving": return "Desire Expression";
    default:                return "Love Preference";
  }
}

export function isGivingMode(slug: string): boolean {
  return slug.endsWith("-giving");
}