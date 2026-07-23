import type { MetadataRoute } from "next";
import { siteBasePath, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: `${siteBasePath}/`,
        disallow: [`${siteBasePath}/zgloszenie`],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
