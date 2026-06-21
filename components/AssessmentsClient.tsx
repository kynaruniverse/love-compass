"use client";

import { useState } from "react";
import { assessments } from "@/data/assessments";
import { AssessmentModal } from "@/components/AssessmentModal";

type TabMode = "receiving" | "giving";

export function AssessmentsClient() {
  const [activeTab, setActiveTab] = useState<TabMode>("receiving");
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  const filteredAssessments = assessments.filter((a) => a.mode === activeTab);
  const selectedAssessment = selectedBadge
    ? assessments.find((a) => a.slug === selectedBadge)
    : null;

  const eyebrow = activeTab === "receiving" ? "HOW LOVE FINDS YOU" : "HOW YOU SHOW LOVE";
  const eyebrowColor = activeTab === "receiving" ? "var(--primary)" : "var(--accent)";

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
          Explore the assessments. Two sides of the same question — discover
          how you receive love, and how you naturally give it in return.
        </p>
      </section>

      {/* Interactive Tabs */}
      <section className="px-6 py-8 border-b border-border-soft">
        <div className="max-w-2xl mx-auto flex gap-4 justify-center">
          <button
            onClick={() => setActiveTab("receiving")}
            className={`px-6 py-3 font-semibold text-sm rounded-lg transition-all duration-200 ${
              activeTab === "receiving"
                ? "bg-primary text-white"
                : "bg-primary-soft text-primary border border-primary opacity-60 hover:opacity-100"
            }`}
            style={
              activeTab === "receiving"
                ? {
                    backgroundColor: "var(--primary)",
                    color: "white",
                  }
                : {
                    backgroundColor: "var(--primary-soft)",
                    color: "var(--primary)",
                    borderColor: "var(--primary)",
                  }
            }
          >
            Receiving
          </button>
          <button
            onClick={() => setActiveTab("giving")}
            className={`px-6 py-3 font-semibold text-sm rounded-lg transition-all duration-200 ${
              activeTab === "giving"
                ? "bg-accent text-white"
                : "bg-accent-soft text-accent border border-accent opacity-60 hover:opacity-100"
            }`}
            style={
              activeTab === "giving"
                ? {
                    backgroundColor: "var(--accent)",
                    color: "#1C0A0E",
                  }
                : {
                    backgroundColor: "var(--accent-soft)",
                    color: "var(--accent)",
                    borderColor: "var(--accent)",
                  }
            }
          >
            Giving
          </button>
        </div>
      </section>

      {/* Assessment Cards Grid */}
      <section className="px-6 py-8 flex-1">
        <div className="max-w-2xl mx-auto">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-6"
            style={{ color: eyebrowColor }}
          >
            {eyebrow}
          </p>

          <div className="space-y-4">
            {filteredAssessments.map((assessment) => (
              <button
                key={assessment.slug}
                onClick={() => setSelectedBadge(assessment.slug)}
                className="w-full text-left p-6 rounded-xl border transition-all duration-200 hover:shadow-lg active:scale-95"
                style={{
                  borderColor:
                    activeTab === "receiving"
                      ? "rgba(158,59,78,0.2)"
                      : "rgba(201,161,74,0.2)",
                  backgroundColor:
                    activeTab === "receiving"
                      ? "var(--primary-soft)"
                      : "var(--accent-soft)",
                }}
              >
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {assessment.title}
                </h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  {assessment.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedAssessment && (
        <AssessmentModal
          assessment={selectedAssessment}
          onClose={() => setSelectedBadge(null)}
        />
      )}

      {/* Footer */}
      <section className="px-6 py-8 border-t border-border-soft text-center">
        <p className="text-xs opacity-50">
          Each assessment takes 5–10 minutes. Nothing you answer leaves your
          browser. No account. No record. Just you.
        </p>
      </section>
    </main>
  );
}