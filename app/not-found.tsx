import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ParticleCanvas } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found | Love Wired",
  description: "This page doesn't exist, but your path does.",
};

export default function NotFound() {
  return (
    <>
      <ParticleCanvas />
      <main
        id="main-content"
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="relative text-center max-w-sm w-full">
          <Link href="/" aria-label="Love Wired home" className="lc-error-logo">
            <Image
              src="/logo.svg"
              alt="Love Wired"
              unoptimized
              width={84}
              height={84}
              priority
              sizes="84px"
              style={{ display: "block", margin: "0 auto" }}
            />
          </Link>

          <h1 className="lc-error-h1">You've wandered off the map</h1>

          <p className="lc-error-p">
            This page doesn't exist, but your journey does. Let's find your way back.
          </p>

          <div className="lc-error-actions">
            <Link href="/" className="lc-cta-primary">
              Back to Home
            </Link>
            <Link href="/assessments" className="lc-error-home-link">
              Browse Assessments
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}