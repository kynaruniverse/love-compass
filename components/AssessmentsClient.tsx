"use client";

import { useState } from "react";
import { assessments } from "@/data/assessments";
import { DeconstructedHeart } from "@/components/3d/DeconstructedHeart";
import { AssessmentModal } from "@/components/AssessmentModal";

export function AssessmentsClient() {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  const selectedAssessment = selectedBadge
    ? assessments.find((a) => a.slug === selectedBadge)
    : null;

  return (
    <main id="main-content" className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="px-6 py-12 text-center max-w-2xl mx-auto">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-4"
          style={{ color: "var(--accent)" }}
        >
          Assessments
        </p>
        <h1 className="text-3xl font-serif font-semibold mb-4">
          Stop guessing. Start knowing.
        </h1>
        <p className="text-sm opacity-70 leading-relaxed">
          Explore the scene. Four assessments await—each one uncovers a different
          side of how you love and how you're loved in return.
        </p>
      </section>

      {/* 3D Heart Scene */}
      <div className="flex-1 relative">
        <DeconstructedHeart
          onBadgeClick={setSelectedBadge}
          selectedBadge={selectedBadge}
        />
      </div>

      {/* Modal */}
      {selectedAssessment && (
        <AssessmentModal
          assessment={selectedAssessment}
          onClose={() => setSelectedBadge(null)}
        />
      )}

      {/* Minimal Footer */}
      <section className="px-6 py-8 border-t border-border-soft text-center">
        <p className="text-xs opacity-50 mb-4">
          Each assessment takes 5–10 minutes. Nothing you answer leaves your
          browser. No account. No record. Just you.
        </p>
      </section>
    </main>
  );
}