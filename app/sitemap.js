import { getAllResources } from "@/app/utils/fetch";

export default async function sitemap() {
  const BASE_URL = "https://www.anrazzi.fr";
  let sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changefreq: "montly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/store`,
      lastModified: new Date(),
      changefreq: "montly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/terms/impressum`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms/checkout`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms/privacy`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.3,
    },
  ];
  const data = await getAllResources();
  const product = data.map((item) => ({
    url: `${BASE_URL}/store/${item.id}`,
    lastModified: item.updated_at || item.created_at,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...sitemap, ...product];
}
