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
    contentDispositionType: "attachment",
  },

  // ── Experimental ──────────────────────────────────────────────────────
  experimental: {
    optimizePackageImports: ["clsx"],
  },

  // ── Turbopack (dev) ───────────────────────────────────────────────────
  // Already invoked via `next dev --turbopack`. No extra config needed here.
  // Leaving a comment so this is explicit.
};

export default withBundleAnalyzer(nextConfig);