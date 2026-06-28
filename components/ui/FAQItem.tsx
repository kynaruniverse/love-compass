"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export function FAQItem({ q, a }: { q: string; a: string | React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = q.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 40);
  const answerId = `faq-answer-${id}`;

  return (
    <li className="lc-faq-item">
      <button
        onClick={() => setOpen(o => !o)}
        className="lc-faq-question"
        aria-expanded={open}
        aria-controls={answerId}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <span className="lc-faq-question-text">{q}</span>
        <Plus
          size={18}
          strokeWidth={2}
          aria-hidden="true"
          className="lc-faq-icon"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        id={answerId}
        className="lc-faq-answer-wrap"
        data-open={open ? "true" : "false"}
      >
        <div className="lc-faq-answer">{a}</div>
      </div>
    </li>
  );
}