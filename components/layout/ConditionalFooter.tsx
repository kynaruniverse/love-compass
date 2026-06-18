"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  const isQuiz = pathname.startsWith("/assessments/") && pathname !== "/assessments";
  if (isQuiz) return null;
  return <Footer />;
}