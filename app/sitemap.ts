import type { MetadataRoute } from "next";

const siteUrl = "https://aaa-fe.com";

const publicRoutes = [
  "/",
  "/explore",
  "/career",
  "/contact",
  "/gallery",
  "/blog",
  "/it-strategy",
  "/scope-of-works",
  "/core-services",
  "/hr-strategy",
  "/hr-services",
  "/it-services",
  "/career-counselling",
  "/health-tourism",
  "/job/1",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((pathname) => ({
    url: new URL(pathname, siteUrl).toString(),
  }));
}
