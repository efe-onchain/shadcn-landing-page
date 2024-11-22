import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://essio.ai",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Add more URLs as needed
  ];
}

async function getData() {
  const res = await fetch("https://api.example.com/data", {
    cache: "force-cache",
  });
  return res.json();
}
