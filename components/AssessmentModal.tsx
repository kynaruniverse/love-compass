"use client";

import Link from "next/link";
import Image from "next/image";
import { Assessment } from "@/data/assessments";

const BADGE_MAP: Record<string, string> = {
  love: "/icons/preference-badge.png",
  intimacy: "/icons/intimacy-badge.png",
  "love-giving": "/icons/love-badge.png",
  "intimacy-giving": "/icons/desire-badge.png",
};

interface AssessmentModalProps {
  assessment: Assessment;
  onClose: () => void;
}

export function AssessmentModal({ assessment, onClose }: AssessmentModalProps) {
  const badgeImage = BADGE_MAP[assessment.slug];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 z-50 max-w-sm mx-auto shadow-lg"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground opacity-50 hover:opacity-75 transition-opacity"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Badge */}
        {badgeImage && (
          <div className="flex justify-center mb-6">
            <Image
              src={badgeImage}
              alt=""
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl font-serif font-semibold text-center mb-3">
          {assessment.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-foreground opacity-70 text-center mb-6 leading-relaxed">
          {assessment.description}
        </p>

        {/* Footer note */}
        <p className="text-xs text-foreground opacity-50 text-center mb-6">
          Takes 5–10 minutes. Nothing leaves your browser.
        </p>

        {/* CTA */}
        <Link
          href={`/assessments/${assessment.slug}`}
          className="block w-full bg-accent text-center py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg active:scale-95"
          style={{
            color: "#1C0A0E",
            backgroundColor: "var(--accent)",
          }}
          onClick={onClose}
        >
          Choose your assessment →
        </Link>
      </div>
    </>
  );
}