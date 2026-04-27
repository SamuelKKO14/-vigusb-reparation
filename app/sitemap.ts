import { MetadataRoute } from "next";
import { villes } from "@/data/villes";

const BASE_URL = "https://vigusb-reparation.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const villePages = villes.map((v) => ({
    url: `${BASE_URL}/reparation/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...villePages,
  ];
}
