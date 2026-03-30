import Parser from "rss-parser";
import type { Article, Category, CategorySlug, ParsedFeed, RSSItem } from "@/types";
import { FEED_CONFIGS } from "@/lib/feeds";
import {
  buildArticleSlug,
  estimateReadingTime,
  extractImageFromContent,
  stripHtml,
} from "@/lib/utils";

const parser = new Parser<ParsedFeed, RSSItem>({
  customFields: {
    item: [
      ["media:content", "media:content"],
      ["media:thumbnail", "media:thumbnail"],
    ],
  },
});

const REVALIDATE_SECONDS = 3600;

async function fetchFeed(feedUrl: string): Promise<RSSItem[]> {
  try {
    const feed = await parser.parseURL(feedUrl);
    return feed.items ?? [];
  } catch (error) {
    console.error(`[rss] Failed to fetch feed: ${feedUrl}`, error);
    return [];
  }
}

function mapRSSItemToArticle(
  item: RSSItem,
  category: Category
): Article | null {
  const title = item.title?.trim();
  const link = item.link?.trim();
  const guid = item.guid ?? item.link ?? "";

  if (!title || !link || !guid) return null;

  const rawContent = item.content ?? item.contentSnippet ?? "";
  const description = item.contentSnippet
    ? stripHtml(item.contentSnippet).slice(0, 280)
    : stripHtml(rawContent).slice(0, 280);

  const imageUrl =
    (item["media:content"] as { $?: { url?: string } } | undefined)?.$?.url ??
    extractImageFromContent(rawContent);

  const publishedAt = item.isoDate ?? item.pubDate ?? new Date().toISOString();

  return {
    id: guid,
    slug: buildArticleSlug(title, guid),
    title,
    description,
    content: rawContent,
    author: item.creator ?? category.label,
    publishedAt,
    imageUrl,
    imageAlt: title,
    category,
    tags: item.categories ?? [],
    sourceUrl: link,
    sourceName: "Cumhuriyet Sesi",
    readingTimeMinutes: estimateReadingTime(rawContent),
  };
}

export async function getArticlesByCategory(
  categorySlug: CategorySlug,
  limit?: number
): Promise<Article[]> {
  const config = FEED_CONFIGS[categorySlug];
  if (!config) return [];

  const category: Category = {
    slug: config.slug,
    label: config.label,
    feedUrl: config.feedUrl,
  };

  const items = await fetchFeed(config.feedUrl);
  const articles = items
    .map((item) => mapRSSItemToArticle(item, category))
    .filter((article): article is Article => article !== null);

  return limit ? articles.slice(0, limit) : articles;
}

export async function getHomepageArticles(): Promise<
  Record<CategorySlug, Article[]>
> {
  const categoryEntries = await Promise.all(
    (
      [
        "gundem",
        "siyaset",
        "ekonomi",
        "dunya",
        "yasam",
        "kultur-sanat",
      ] as CategorySlug[]
    ).map(async (slug) => {
      const articles = await getArticlesByCategory(slug, 6);
      return [slug, articles] as const;
    })
  );

  return Object.fromEntries(categoryEntries) as Record<CategorySlug, Article[]>;
}

export async function getLatestArticles(limit = 10): Promise<Article[]> {
  const gundemArticles = await getArticlesByCategory("gundem", limit);
  return gundemArticles;
}

export async function getArticleBySlug(
  slug: string,
  categorySlug: CategorySlug
): Promise<Article | null> {
  const articles = await getArticlesByCategory(categorySlug);
  return articles.find((a) => a.slug === slug) ?? null;
}

export { REVALIDATE_SECONDS };
