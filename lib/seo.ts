export const siteMeta = {
  title: "Love Compass",
  description: "A deeper look at love, intimacy, and connection.",
  url: "https://lovecompass.app"
};

export function generateMeta({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  const desc = description ?? siteMeta.description;

  return {
    title: `${title} | Love Compass`,
    description: desc,
    openGraph: {
      title,
      description: desc,
      type: "website",
      url: siteMeta.url
    }
  };
}