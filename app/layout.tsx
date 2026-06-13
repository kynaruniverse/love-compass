import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
  },
  twitter: {
    card: "summary",
    title: "Love Compass",
    description: "Discover how you give and receive love. Free assessments, no sign-up required.",
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
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body>
        <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}