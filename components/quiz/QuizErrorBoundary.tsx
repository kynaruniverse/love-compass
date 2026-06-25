"use client";

import { Component, ReactNode } from "react";
import Link from "next/link";

interface QuizErrorBoundaryProps {
  children: ReactNode;
  slug: string;
}

interface QuizErrorBoundaryState {
  hasError: boolean;
}

/**
 * Catches render errors within the quiz question flow specifically, so a
 * malformed question doesn't fall through to the generic root error page.
 * Recovery links back to this assessment's own page (which can offer to
 * resume the saved progress) rather than a generic home link.
 */
export default class QuizErrorBoundary extends Component<QuizErrorBoundaryProps, QuizErrorBoundaryState> {
  constructor(props: QuizErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Quiz error boundary caught an error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          id="main-content"
          className="min-h-screen flex items-center justify-center px-6"
          role="alert"
          aria-live="assertive"
        >
          <div className="relative text-center max-w-sm w-full">
            <h1 className="lc-error-h1">Something went wrong with this question</h1>
            <p className="lc-error-p">
              It's not you. Return to the start of this assessment and your saved progress will be there.
            </p>
            <div className="lc-error-actions">
              <Link href={`/assessments/${this.props.slug}`} className="lc-cta-primary">
                Return to Assessment
              </Link>
              <Link href="/assessments" className="lc-error-home-link">
                Back to All Assessments
              </Link>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
