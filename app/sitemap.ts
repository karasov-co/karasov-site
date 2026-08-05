import type { MetadataRoute } from "next";

// Legacy routes (/lab, /work/*) are deliberately excluded: they carry the old
// personal-site positioning and are not linked from the current site.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://karasov.co/", priority: 1, changeFrequency: "weekly" },
    { url: "https://karasov.co/answers", priority: 0.8, changeFrequency: "monthly" },
  ];
}
