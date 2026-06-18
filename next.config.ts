import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // ── Core ──────────────────────────────────────────────────────────────
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // ── Images ────────────────────────────────────────────────────────────
  // Allow next/image to serve modern formats (avif, webp) automatically.
  // The logo.svg is an SVG — SVG is not processed by next/image by default,
  // but enabling dangerouslyAllowSVG lets the Image component inline-serve it
  // without an external loader while retaining optimisation for raster assets.
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ── Experimental ──────────────────────────────────────────────────────
  experimental: {
    // Tree-shake named imports from these packages so only the symbols
    // actually used end up in the client bundle.
    optimizePackageImports: ["clsx"],

    // Partial Prerendering: static shell renders at build time, dynamic
    // content streams in. Results page (which reads searchParams) benefits.
    // Safe to enable — falls back gracefully when the Suspense boundary
    // is absent. Remove if you observe hydration mismatches during testing.
    ppr: true,

    // Emit granular timing info to the terminal so you can see which
    // routes are slow to compile in development.
    serverComponentsExternalPackages: [],
  },

  // ── Turbopack (dev) ───────────────────────────────────────────────────
  // Already invoked via `next dev --turbopack`. No extra config needed here.
  // Leaving a comment so this is explicit.
};

export default withBundleAnalyzer(nextConfig);