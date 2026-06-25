"use client";

import Link from "next/link";
import Image from "next/image";
import { ParticleCanvas } from "@/components/ui";

export default function Error({
  error: _error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <ParticleCanvas />
      <main
        id="main-content"
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div
          role="alert"
          aria-live="assertive"
          className="relative text-center max-w-sm w-full"
        >
          <Link href="/" aria-label="Love Wired home" className="lc-error-logo">
            <Image
              src="/logo.svg"
              alt="Love Wired"
              width={84}
              height={84}
              priority
              sizes="84px"
              style={{ display: "block", margin: "0 auto" }}
            />
          </Link>

          <h1 className="lc-error-h1">You've lost your way</h1>

          <p className="lc-error-p">
            Something didn't load correctly. It's not you, let's try that again together.
          </p>

          <div className="lc-error-actions">
            <button onClick={reset} className="lc-cta-primary">
              Try Again
            </button>
            <Link href="/" className="lc-error-home-link">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
