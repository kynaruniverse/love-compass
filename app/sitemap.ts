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
    "/assessments/hybrid",
    "/assessments/love-giving",
    "/assessments/intimacy-giving",
    "/assessments/hybrid-giving"
  ];

  return [...staticRoutes, ...assessmentRoutes].map(route => ({
    url: `${siteMeta.url}${route}`,
    lastModified: new Date()
  }));
}