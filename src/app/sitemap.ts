import type { MetadataRoute } from "next";
import { siteMeta } from "@/data/site";
import { menuOrder } from "@/data/menuMeta";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/menu",
    ...menuOrder.map((s) => `/menu/${s}`),
    "/locations",
    "/our-story",
    "/mentions",
    "/opportunity",
    "/purveyors",
    "/sister-spots",
  ];

  return routes.map((path) => ({
    url: `${siteMeta.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/menu") ? 0.8 : 0.6,
  }));
}
