"use client";

interface MarqueeProps {
  items: string[];
  /** Optional separator glyph between items. Defaults to the same ✧ used on homepage. */
  separator?: string;
}

/**
 * Reusable scrolling marquee for page-specific content.
 * Homepage keeps its own inline QuoteMarquee (untouched) — this is for
 * every other page (About, Disclaimer, Methodology, etc) to drop in
 * with their own short phrases.
 *
 * Usage:
 *   <Marquee items={ABOUT_MARQUEE_ITEMS} />
 */
export function Marquee({ items, separator = "✧" }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="lc-quote-marquee" aria-hidden="true">
      <div className="lc-quote-track">
        {track.map((item, i) => (
          <span className="lc-quote-item" key={i}>
            {item}
            <span className="lc-quote-sep">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
