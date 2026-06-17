import { isNonEmpty } from "./helpers";
import { Archetype, CategoryResult } from "@/types/quiz";

function downloadFile(filename: string, content: string, mimeType: string) {
  if (!isNonEmpty(content)) {
    console.warn("exportFile: content is empty, skipping download.");
    return;
  }

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

export function buildResultTXT(primary: Archetype, profile: CategoryResult[]): string {
  return [
    primary.name,
    primary.tagline,
    "",
    ...primary.narrative,
    "",
    "Strengths:",
    ...primary.strengths.map(s => `- ${s}`),
    "",
    "Watch For:",
    ...primary.watchOuts.map(s => `- ${s}`),
    "",
    "From a Partner:",
    ...primary.partnerNeeds.map(s => `- ${s}`),
    "",
    "Try This:",
    ...primary.tryThis.map(s => `- ${s}`),
    "",
    "Best With:",
    primary.pairings.bestWith,
    "",
    "Friction With:",
    primary.pairings.frictionWith,
  ].join("\n");
}

export function buildResultMD(primary: Archetype, profile: CategoryResult[]): string {
  return [
    `# ${primary.name}`,
    ``,
    `_${primary.tagline}_`,
    ``,
    ...primary.narrative.map(p => `${p}\n`),
    `## Strengths`,
    ...primary.strengths.map(s => `- ${s}`),
    ``,
    `## Watch For`,
    ...primary.watchOuts.map(s => `- ${s}`),
    ``,
    `## From a Partner`,
    ...primary.partnerNeeds.map(s => `- ${s}`),
    ``,
    `## Try This`,
    ...primary.tryThis.map(s => `- ${s}`),
    ``,
    `## Best With`,
    primary.pairings.bestWith,
    ``,
    `## Friction With`,
    primary.pairings.frictionWith,
    ``,
    `## Full Profile`,
    ...profile.map(c => `- ${c.title}: ${c.percentage}%`),
  ].join("\n");
}