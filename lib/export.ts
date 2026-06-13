import { isNonEmpty } from "./helpers";

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

  URL.revokeObjectURL(url);
}

export function exportText(filename: string, content: string) {
  downloadFile(filename, content, "text/plain");
}

export function exportMarkdown(filename: string, markdown: string) {
  downloadFile(filename, markdown, "text/markdown");
}