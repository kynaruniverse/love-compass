"use client";

import { useRouter } from "next/navigation";
import { Button, PaperCard } from "@/components/ui";

export default function NoResults() {
  const router = useRouter();

  return (
    <main
      id="main-content"
      aria-label="No results found"
      className="max-w-3xl mx-auto px-4 py-16 flex items-center justify-center"
    >
      <PaperCard
        className="text-center space-y-5 max-w-md w-full rounded-3xl p-8"
        borderColor="rgba(201,161,74,0.25)"
        shadow="0 4px 32px rgba(158,59,78,0.10), inset 0 1px 2px rgba(255,255,255,0.7)"
        accent
      >
        <div className="space-y-4">
          <p className="font-serif font-semibold" style={{ fontSize: 17, color: "var(--primary)" }}>
            No results found
          </p>
          <p className="font-serif opacity-60 leading-relaxed" style={{ fontSize: 15 }}>
            Results aren't saved anywhere — they only exist for the
            browser tab that completed the assessment, or in a shared
            link. If you refreshed, closed the tab, or this link is
            incomplete, you'll need to take the assessment again.
          </p>
          <Button onClick={() => router.push("/assessments")} variant="primary">
            Take an Assessment
          </Button>
        </div>
      </PaperCard>
    </main>
  );
}