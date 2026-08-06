import type { MetadataRoute } from "next";

// /lab and /work/* are the earlier portfolio pages. They are indexed and carry
// accumulated link equity, so they stay listed — at a lower priority than the
// current service and case-study pages.
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
    { url: "https://karasov.co/lab", priority: 0.6, changeFrequency: "yearly" },
    { url: "https://karasov.co/work/lead-bot", priority: 0.6, changeFrequency: "yearly" },
    { url: "https://karasov.co/work/photo-tool", priority: 0.6, changeFrequency: "yearly" },
    { url: "https://karasov.co/work/research-engine", priority: 0.6, changeFrequency: "yearly" },
    { url: "https://karasov.co/work/freelancer-toolkit", priority: 0.6, changeFrequency: "yearly" },
  ];
}
