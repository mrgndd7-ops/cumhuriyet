import type { FeedConfig, CategorySlug } from "@/types";

export const FEED_CONFIGS: Record<CategorySlug, FeedConfig> = {
  gundem: {
    slug: "gundem",
    label: "Gündem",
    feedUrls: [
      "https://www.gazeteduvar.com.tr/rss/gundem",
      "https://www.sozcu.com.tr/feeds-rss-category-gundem",
    ],
  },
  siyaset: {
    slug: "siyaset",
    label: "Siyaset",
    feedUrls: [
      "https://www.gazeteduvar.com.tr/rss/politika",
      "https://www.birgun.net/rss/kategori/siyaset-8",
    ],
  },
  ekonomi: {
    slug: "ekonomi",
    label: "Ekonomi",
    feedUrls: [
      "https://www.birgun.net/rss/kategori/ekonomi-9",
      "https://www.sozcu.com.tr/feeds-rss-category-ekonomi",
    ],
  },
  dunya: {
    slug: "dunya",
    label: "Dünya",
    feedUrls: ["https://www.sozcu.com.tr/feeds-rss-category-dunya"],
  },
  yasam: {
    slug: "yasam",
    label: "Yaşam",
    feedUrls: ["https://www.sozcu.com.tr/feeds-rss-category-yasam"],
  },
  "kultur-sanat": {
    slug: "kultur-sanat",
    label: "Kültür & Sanat",
    feedUrls: ["https://www.gazeteduvar.com.tr/export/rss"],
  },
  yazarlar: {
    slug: "yazarlar",
    label: "Yazarlar",
    feedUrls: ["https://www.gazeteduvar.com.tr/export/rss"],
  },
  analiz: {
    slug: "analiz",
    label: "Analiz",
    feedUrls: ["https://www.gazeteduvar.com.tr/export/rss"],
  },
};

export const CATEGORY_ORDER: CategorySlug[] = [
  "gundem",
  "siyaset",
  "ekonomi",
  "dunya",
  "yasam",
  "kultur-sanat",
  "yazarlar",
  "analiz",
];
