import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

// Inter removed — serif everywhere

export const metadata: Metadata = {
  title: {
    default: "Love Compass",
    template: "%s | Love Compass"
  },
  description: "Discover how you give and receive love. Love Compass is a free self-reflection tool built around six structured assessments — no sign-up required.",
  keywords: ["love languages", "relationship assessment", "intimacy style", "self-reflection", "love quiz", "relationship quiz"],
  openGraph: {
    title: "Love Compass",
    description: "Discover how you give and receive love. Free assessments, no sign-up required.",
    type: "website",
    url: "https://lovecompass.app",
    siteName: "Love Compass",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Love Compass" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Love Compass",
    description: "Discover how you give and receive love. Free assessments, no sign-up required.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://lovecompass.app",
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}