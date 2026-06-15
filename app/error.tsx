"use client";

import Button from "@/components/ui/Button";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <ParticleCanvas />
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div
          className="relative text-center space-y-5 max-w-md w-full rounded-3xl overflow-hidden p-8 sm:p-10"
          style={{
            border: "1.5px solid rgba(201,161,74,0.25)",
            background: "var(--surface)",
            boxShadow: "0 4px 32px rgba(94,58,115,0.10), inset 0 1px 2px rgba(255,255,255,0.7)",
          }}
        >
          <div className="absolute inset-0 paper-texture opacity-[0.3] pointer-events-none" />
          <div
            className="absolute top-0 left-8 right-8 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, #c9a14a66, transparent)" }}
          />
          <div className="relative space-y-4">
            <span
              className="inline-block px-3 py-1 stamp-badge text-xs font-medium"
              style={{
                background: "linear-gradient(135deg, #f5e199 0%, #c9a14a 60%, #8a6520 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                borderColor: "#c9a14a",
              }}
            >
              A moment of stillness
            </span>

            <h2
              className="font-serif font-bold text-[var(--primary)]"
              style={{ fontSize: 26 }}
            >
              The compass lost its way
            </h2>

            <p
              className="font-serif leading-relaxed opacity-70 max-w-xs mx-auto"
              style={{ fontSize: 16 }}
            >
              Something didn't load correctly. It's not you — let's try that again together.
            </p>

            <div className="pt-2">
              <Button onClick={reset} variant="primary">
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}