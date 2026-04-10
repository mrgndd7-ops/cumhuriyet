import type { Article } from "@/types";

/**
 * Ana sayfada hero olarak gösterilecek manuel haber.
 * Başlık, yazar, görsel ve içeriği buradan düzenleyin.
 * Haber sayfası: /ozel
 */
export const FEATURED_ARTICLE: Article = {
  id: "featured-001",
  slug: "ozel",
  title: "Başlığı buraya yazın",
  description:
    "Haberin kısa özetini veya giriş paragrafını buraya yazın. Bu metin hem ana sayfada hem de haber sayfasında görünür.",
  content: `<p>Haber içeriğini buraya yazın. HTML formatında olabilir.</p>
<p>İkinci paragraf örneği. Devam eden içerik buraya eklenebilir.</p>`,
  author: "Yazar Adı Soyad",
  publishedAt: new Date().toISOString(),
  imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
  imageAlt: "Öne çıkan haber görseli",
  category: { slug: "gundem", label: "Özel", feedUrls: [] },
  tags: [],
  sourceUrl: "/ozel",
  sourceName: "Cumhuriyet Sesi",
  readingTimeMinutes: 3,
};
