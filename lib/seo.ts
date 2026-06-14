export const siteMeta = {
  title: "Love Compass",
  description:
    "Discover how you give and receive love. Love Compass is a free self-reflection tool built around six structured assessments — no sign-up required.",
  url: "https://lovecompass.app",
  siteName: "Love Compass",
  
};

export function generateMeta({
  title,
  description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}) {
  const desc = description ?? siteMeta.description;
  const url = `${siteMeta.url}${path}`;

  return {
    title: `${title} | ${siteMeta.title}`,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteMeta.title}`,
      description: desc,
      type: "website" as const,
      url,
      siteName: siteMeta.siteName,
    },
    twitter: {
      card: "summary" as const,
      title: `${title} | ${siteMeta.title}`,
      description: desc,
    },
  };
}
