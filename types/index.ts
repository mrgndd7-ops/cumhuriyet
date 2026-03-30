export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  imageUrl?: string;
  imageAlt?: string;
  category: Category;
  tags: string[];
  sourceUrl: string;
  sourceName: string;
  readingTimeMinutes: number;
  commentCount?: number;
}

export type CategorySlug =
  | "gundem"
  | "siyaset"
  | "ekonomi"
  | "dunya"
  | "yasam"
  | "kultur-sanat"
  | "yazarlar"
  | "analiz";

export interface Category {
  slug: CategorySlug;
  label: string;
  feedUrls: string[];
}

export interface FeedConfig {
  slug: CategorySlug;
  label: string;
  feedUrls: string[];
}

export interface HeroArticle extends Article {
  isBreaking?: boolean;
  isFeatured?: boolean;
}

export interface RSSItem {
  title?: string;
  link?: string;
  pubDate?: string;
  creator?: string;
  contentSnippet?: string;
  content?: string;
  enclosure?: {
    url: string;
    type: string;
    length?: number;
  };
  categories?: string[];
  guid?: string;
  isoDate?: string;
  "media:content"?: {
    $: {
      url: string;
      medium?: string;
    };
  };
}

export interface ParsedFeed {
  title: string;
  description: string;
  link: string;
  items: RSSItem[];
}

export interface NavItem {
  label: string;
  href: string;
  categorySlug?: CategorySlug;
}

export interface BreakingNewsItem {
  id: string;
  title: string;
  href: string;
  publishedAt: string;
}
