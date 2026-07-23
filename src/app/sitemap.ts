import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/uslugi",
    "/naprawa-hydrauliki-silowej",
    "/silowniki-hydrauliczne",
    "/o-firmie",
    "/poradnik",
    "/kontakt",
    "/zgloszenie",
  ];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-07-23"),
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
