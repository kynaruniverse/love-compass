"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  const showFooter = pathname === "/" || pathname === "/assessments" || pathname === "/results";
  if (!showFooter) return null;
  return <Footer />;
}