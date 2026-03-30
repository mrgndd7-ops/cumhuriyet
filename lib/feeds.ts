import type { FeedConfig, CategorySlug } from "@/types";

export const FEED_CONFIGS: Record<CategorySlug, FeedConfig> = {
  gundem: {
    slug: "gundem",
    label: "Gündem",
    feedUrl: "https://www.cumhuriyet.com.tr/rss/son_dakika.xml",
  },
  siyaset: {
    slug: "siyaset",
    label: "Siyaset",
    feedUrl: "https://www.cumhuriyet.com.tr/rss/siyaset.xml",
  },
  ekonomi: {
    slug: "ekonomi",
    label: "Ekonomi",
    feedUrl: "https://www.cumhuriyet.com.tr/rss/ekonomi.xml",
  },
  dunya: {
    slug: "dunya",
    label: "Dünya",
    feedUrl: "https://www.cumhuriyet.com.tr/rss/dunya.xml",
  },
  yasam: {
    slug: "yasam",
    label: "Yaşam",
    feedUrl: "https://www.cumhuriyet.com.tr/rss/yasam.xml",
  },
  "kultur-sanat": {
    slug: "kultur-sanat",
    label: "Kültür & Sanat",
    feedUrl: "https://www.cumhuriyet.com.tr/rss/kultur-sanat.xml",
  },
  yazarlar: {
    slug: "yazarlar",
    label: "Yazarlar",
    feedUrl: "https://www.cumhuriyet.com.tr/rss/yazarlar.xml",
  },
  analiz: {
    slug: "analiz",
    label: "Analiz",
    feedUrl: "https://www.cumhuriyet.com.tr/rss/dunya.xml",
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
