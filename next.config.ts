import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The legacy /lab and /work/* routes were removed: they carried the old
  // positioning and a retracted placement claim. Permanent redirects keep any
  // accumulated link equity pointed at the current equivalents.
  async redirects() {
    return [
      { source: "/lab", destination: "/services/ai-automation-for-contractors", permanent: true },
      { source: "/work/:slug*", destination: "/case-studies/ataman-studio", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
