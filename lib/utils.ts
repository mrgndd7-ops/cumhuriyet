import type { CategorySlug } from "@/types";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return "Az önce";
  if (diffMins < 60) return `${diffMins} Dakika Önce`;
  if (diffHours < 24) return `${diffHours} Saat Önce`;
  if (diffDays < 7) return `${diffDays} Gün Önce`;

  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function extractImageFromContent(content: string): string | undefined {
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}

export function buildArticleSlug(title: string, guid: string): string {
  const titleSlug = slugify(title).slice(0, 60);
  const idSuffix = guid.replace(/[^a-z0-9]/gi, "").slice(-8).toLowerCase();
  return `${titleSlug}-${idSuffix}`;
}

export function isValidCategorySlug(slug: string): slug is CategorySlug {
  const validSlugs: CategorySlug[] = [
    "gundem",
    "siyaset",
    "ekonomi",
    "dunya",
    "yasam",
    "kultur-sanat",
    "yazarlar",
    "analiz",
  ];
  return validSlugs.includes(slug as CategorySlug);
}
