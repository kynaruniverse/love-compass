import { siteMeta } from "@/lib/seo";

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
    "/assessments/hybrid"
  ];

  return [...staticRoutes, ...assessmentRoutes].map(route => ({
    url: `${siteMeta.url}${route}`,
    lastModified: new Date()
  }));
}