import type { MetadataRoute } from "next";

const baseUrl = "https://shs.com.pk";
const routes = ["", "/about", "/academics", "/admissions", "/gallery", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
