import { Archetype, CategoryResult } from "@/types/quiz";
import { Button } from "@/components/ui";
import { exportText, exportMarkdown, buildResultTXT, buildResultMD } from "@/lib";

interface Props {
  primary: Archetype;
  profile: CategoryResult[];
}

export default function SaveResults({ primary, profile }: Props) {
  function handleExportTXT() {
    exportText("love-compass-results.txt", buildResultTXT(primary, profile));
  }

  function handleExportMD() {
    exportMarkdown("love-compass-results.md", buildResultMD(primary, profile));
  }

  return (
    <details className="group">
      <summary
        className="cursor-pointer text-sm opacity-50 active:opacity-70 transition-opacity list-none flex items-center gap-2 select-none"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <span
          className="inline-block transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        >
          ↓
        </span>
        Save your results
      </summary>
      <div className="mt-3 flex flex-wrap gap-3">
        <Button onClick={handleExportTXT} variant="secondary">
          Export TXT
        </Button>
        <Button onClick={handleExportMD} variant="secondary">
          Export Markdown
        </Button>
      </div>
    </details>
  );
}