
import type { MetadataRoute } from "next";

// AI WorksForce - https://aiworksforce.com/
// Public website crawling policy

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    // Sitemap directive
    sitemap: "https://aiworksforce.com/sitemap.xml",
  };
}
