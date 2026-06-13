"use client";

import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-4 max-w-md">
        <h2 className="text-2xl font-bold font-serif">Something went wrong</h2>
        <p className="text-sm opacity-60">
          {error.message || "An unexpected error occurred."}
        </p>
        <Button onClick={reset} variant="primary">
          Try Again
        </Button>
      </div>
    </main>
  );
}