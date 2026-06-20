import Image from "next/image";

type Slug = "love" | "intimacy" | "love-giving" | "intimacy-giving";

const ICON_MAP: Record<Slug, string> = {
  love: "/icons/preference-badge.png",
  intimacy: "/icons/intimacy-badge.png",
  "love-giving": "/icons/love-badge.png",
  "intimacy-giving": "/icons/desire-badge.png",
};

export function AssessmentIcon({ slug }: { slug: string }) {
  const src = ICON_MAP[slug as Slug];
  if (!src) return null;

  return (
    <Image
      src={src}
      alt=""
      width={52}
      height={52}
      aria-hidden="true"
      style={{ objectFit: "contain" }}
    />
  );
}