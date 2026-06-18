import { siteMeta } from "@/lib";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${siteMeta.url}/sitemap.xml`
  };
}