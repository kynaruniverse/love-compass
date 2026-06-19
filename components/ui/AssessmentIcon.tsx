type Slug = "love" | "intimacy" | "love-giving" | "intimacy-giving";

const ICONS: Record<Slug, React.ReactNode> = {
  love: (
    <>
      <path d="M12 3c-2 1.5-2 4 0 5.5C14 7 14 4.5 12 3Z" />
      <path d="M8.5 5.5c-1.8 1-2.3 3.2-1 4.8 1.6-1 2-3.3 1-4.8Z" />
      <path d="M15.5 5.5c1.8 1 2.3 3.2 1 4.8-1.6-1-2-3.3-1-4.8Z" />
      <circle cx="12" cy="9" r="3.2" />
      <path d="M12 12v8" />
      <path d="M12 16c-1.5-.5-2.5-2-2-3.5" />
      <path d="M12 18c1.5-.5 2.5-2 2-3.5" />
    </>
  ),
  intimacy: (
    <>
      <circle cx="9" cy="6.8" r="2" />
      <circle cx="15" cy="6.1" r="2.3" />
      <path d="M5.5 19c.3-3 1.8-5 3.5-5s2.7 1.2 3 2.6" />
      <path d="M11 17c.4-3.6 2.2-6 4-6 2.2 0 4 2.8 4 7.3" />
      <path d="M10.6 13.6c-.2.7.5 1.3 1.4 1.9.9-.6 1.6-1.2 1.4-1.9-.2-.7-1.1-.8-1.4-.3-.3-.5-1.2-.4-1.4.3Z" />
    </>
  ),
  "love-giving": (
    <path d="M12 20s-7-4.4-9.3-8.8C1.2 8 2.6 5 5.8 4.6c1.9-.2 3.5.8 4.2 2.3.7-1.5 2.3-2.5 4.2-2.3 3.2.4 4.6 3.4 3.1 6.6C19 15.6 12 20 12 20Z" />
  ),
  "intimacy-giving": (
    <>
      <path d="M15.5 4.5a7 7 0 1 0 0 13.6 8 8 0 0 1 0-13.6Z" />
      <path d="M3.5 18c1 .8 2 .8 3 0s2-.8 3 0 2 .8 3 0" />
      <path d="M3.5 20.5c1 .8 2 .8 3 0s2-.8 3 0 2 .8 3 0" />
    </>
  ),
};

export function AssessmentIcon({ slug }: { slug: string }) {
  const icon = ICONS[slug as Slug];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="26"
      height="26"
      aria-hidden="true"
    >
      {icon}
    </svg>
  );
}