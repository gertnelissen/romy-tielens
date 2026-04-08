import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://romytielens.be"; // Update when domain is set

  const topics = [
    "angst", "burn-out", "depressie", "hoogsensitiviteit", "middelengebruik",
    "perfectionisme", "postpartum", "relatieconflicten", "rouw", "trauma",
    "vruchtbaarheid", "zelfverwonding",
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/over-mij`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/aanbod`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...topics.map((t) => ({
      url: `${baseUrl}/aanbod/${t}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${baseUrl}/voor-bedrijven`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/praktisch`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/doorverwijzers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
