import type { MetadataRoute } from "next";
import { siteMeta } from "@/data/site";
import { menuOrder } from "@/data/menuMeta";

export const dynamic = "force-static";

type RouteConfig = {
  path: string;
  images?: string[];
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

const routes: RouteConfig[] = [
  { path: "", images: ["/images/home.jpg"], priority: 1.0, changeFrequency: "weekly" },
  { path: "/menu", images: ["/images/brunch.jpg", "/images/lunch.jpg", "/images/dinner.jpg"], priority: 0.9, changeFrequency: "monthly" },
  ...menuOrder.map((s) => ({
    path: `/menu/${s}`,
    images: [`/images/${s}.jpg`],
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/locations", images: ["/images/lux/room.jpg"], priority: 0.8, changeFrequency: "monthly" },
  { path: "/our-story", images: ["/images/lux/story-space.jpg", "/images/lux/story-plates.jpg"], priority: 0.7, changeFrequency: "monthly" },
  { path: "/mentions", priority: 0.6, changeFrequency: "monthly" },
  { path: "/opportunity", images: ["/images/lux/staff-portrait.jpg"], priority: 0.6, changeFrequency: "monthly" },
  { path: "/purveyors", images: ["/images/lux/purveyor-grain.jpg", "/images/lux/purveyor-bread.jpg"], priority: 0.7, changeFrequency: "monthly" },
  { path: "/sister-spots", images: ["/images/lux/hai-noon.jpg", "/images/lux/hidden-gem.jpg"], priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${siteMeta.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    images: r.images?.map((p) => `${siteMeta.url}${p}`),
  }));
}
