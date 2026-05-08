import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL ?? "https://cegielnia.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/polityka-prywatnosci`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/polityka-cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
