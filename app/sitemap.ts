import { pagesData } from "./data.js";

export default function sitemap() {
  const baseUrl = "https://matter.vision";

  const researchPages = Object.keys(pagesData).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...researchPages
  ];
}