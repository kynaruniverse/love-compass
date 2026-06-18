import { isNonEmpty } from "./helpers";
import { Archetype, CategoryResult } from "@/types/quiz";

function downloadFile(filename: string, content: string, mimeType: string) {
  if (!isNonEmpty(content)) return;

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = filename;

  // Appending ensures click registers across all browsers/webviews
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Defer revocation — Safari/iOS starts the download asynchronously and
  // revoking the URL synchronously can produce a zero-byte file.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function exportText(filename: string, content: string) {
  downloadFile(filename, content, "text/plain");
}

export function exportMarkdown(filename: string, markdown: string) {
  downloadFile(filename, markdown, "text/markdown");
}

type Section = { heading: string; items: string[] };

function buildSections(primary: Archetype, profile: CategoryResult[]): Section[] {
  const bullets = (items: string[]) => items.map(s => `- ${s}`);
  return [
    { heading: "Strengths",      items: bullets(primary.strengths) },
    { heading: "Watch For",      items: bullets(primary.watchOuts) },
    { heading: "From a Partner", items: bullets(primary.partnerNeeds) },
    { heading: "Try This",       items: bullets(primary.tryThis) },
    { heading: "Best With",      items: [primary.pairings.bestWith] },
    { heading: "Friction With",  items: [primary.pairings.frictionWith] },
    { heading: "Full Profile",   items: profile.map(c => `- ${c.title}: ${c.percentage}%`) },
  ];
}

export function buildResultTXT(primary: Archetype, profile: CategoryResult[]): string {
  const lines: string[] = [primary.name, primary.tagline, "", ...primary.narrative];
  for (const { heading, items } of buildSections(primary, profile)) {
    lines.push("", `${heading}:`, ...items);
  }
  return lines.join("\n");
}

export function buildResultMD(primary: Archetype, profile: CategoryResult[]): string {
  const lines: string[] = [`# ${primary.name}`, ``, `_${primary.tagline}_`, ``, ...primary.narrative.map(p => `${p}\n`)];
  for (const { heading, items } of buildSections(primary, profile)) {
    lines.push(``, `## ${heading}`, ...items);
  }
  return lines.join("\n");
}