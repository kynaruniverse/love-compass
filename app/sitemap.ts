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

  const lastModifiedDates: Record<string, string> = {
    "/":                       "2026-06-28",
    "/about":                  "2026-06-28",
    "/faq":                    "2026-06-28",
    "/assessments":            "2026-06-28",
    "/assessments/love":       "2026-06-28",
    "/assessments/intimacy":   "2026-06-28",
    "/assessments/love-giving":     "2026-06-28",
    "/assessments/intimacy-giving": "2026-06-28",
    "/methodology":  "2026-06-28",
    "/privacy":      "2026-06-28",
    "/terms":        "2026-06-28",
    "/disclaimer":   "2026-06-28",
  };

  return [...staticRoutes, ...assessmentRoutes].map(route => ({
    url: `${siteMeta.url}${route}`,
    lastModified: new Date(lastModifiedDates[route] ?? "2026-06-28"),
    changeFrequency: staticPriorities[route]?.changeFrequency ?? "monthly",
    priority: staticPriorities[route]?.priority ?? 0.7,
  }));
}