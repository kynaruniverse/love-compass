import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { siteMeta } from "@/lib";
import ConditionalFooter from "@/components/layout/ConditionalFooter";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Love Compass",
    template: "%s | Love Compass"
  },
  description: siteMeta.description,
  keywords: ["love languages", "relationship assessment", "intimacy style", "self-reflection", "love quiz", "relationship quiz"],
  openGraph: {
    title: "Love Compass",
    description: siteMeta.description,
    type: "website",
    url: "https://lovecompass.app",
    siteName: "Love Compass",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Love Compass" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Love Compass",
    description: siteMeta.description,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://lovecompass.app",
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={lora.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:font-serif focus:text-sm focus:font-semibold focus:bg-[var(--surface)] focus:text-[var(--primary)] focus:border-2 focus:border-[var(--primary)] focus:outline-none focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}