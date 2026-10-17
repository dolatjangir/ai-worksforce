
import type { MetadataRoute } from "next";

// AI WorksForce - https://www.aiworksforce.com/
// Public website crawling policy

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    // Sitemap directive
    sitemap: "https://www.aiworksforce.com/sitemap.xml",
  };
}
