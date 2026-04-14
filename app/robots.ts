import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://donat.alpiant.my.id/sitemap.xml",
    host: "https://donat.alpiant.my.id",
  };
}
