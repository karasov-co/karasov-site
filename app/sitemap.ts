import type { MetadataRoute } from "next";

// The legacy /lab and /work/* routes were deleted; next.config.ts redirects
// them permanently to their current equivalents.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://karasov.co/", priority: 1, changeFrequency: "weekly" },
    { url: "https://karasov.co/answers", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://karasov.co/about", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://karasov.co/verified", priority: 0.9, changeFrequency: "monthly" },
    { url: "https://karasov.co/services/ai-automation-for-contractors", priority: 0.9, changeFrequency: "monthly" },
    { url: "https://karasov.co/services/lead-response-automation", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://karasov.co/services/field-reporting-automation", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://karasov.co/services/project-knowledge-retrieval", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://karasov.co/case-studies/ataman-studio", priority: 0.8, changeFrequency: "monthly" },
  ];
}
