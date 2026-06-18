import { siteMeta } from "@/lib";

export default function sitemap() {
  const staticRoutes = [
    "/",
    "/about",
    "/faq",
    "/methodology",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/assessments"
  ];

  const assessmentRoutes = [
    "/assessments/love",
    "/assessments/intimacy",
    "/assessments/love-giving",
    "/assessments/intimacy-giving"
  ];

  const staticPriorities: Record<string, { changeFrequency: string; priority: number }> = {
    "/": { changeFrequency: "weekly", priority: 1.0 },
    "/about": { changeFrequency: "monthly", priority: 0.8 },
    "/faq": { changeFrequency: "monthly", priority: 0.7 },
    "/assessments": { changeFrequency: "monthly", priority: 0.9 },
    "/methodology": { changeFrequency: "yearly", priority: 0.5 },
    "/privacy": { changeFrequency: "yearly", priority: 0.3 },
    "/terms": { changeFrequency: "yearly", priority: 0.3 },
    "/disclaimer": { changeFrequency: "yearly", priority: 0.3 },
  };

  return [...staticRoutes, ...assessmentRoutes].map(route => ({
    url: `${siteMeta.url}${route}`,
    lastModified: new Date(),
    changeFrequency: staticPriorities[route]?.changeFrequency ?? "monthly",
    priority: staticPriorities[route]?.priority ?? 0.7,
  }));
}