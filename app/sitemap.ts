import { latestPosts } from "@/lib/blog-data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://essio.ai",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://essio.ai/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...latestPosts.map((post) => ({
      url: `https://essio.ai/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "daily" as const,
      priority: 1,
    })),
  ];
}

async function getData() {
  const res = await fetch("https://api.example.com/data", {
    cache: "force-cache",
  });
  return res.json();
}
