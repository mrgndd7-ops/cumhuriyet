import type { Article } from "@/types";

/**
 * Ana sayfada hero olarak gösterilecek manuel haber.
 * Başlık, yazar, görsel ve içeriği buradan düzenleyin.
 * Haber sayfası: /ozel
 */
export const FEATURED_ARTICLE: Article = {
  id: "featured-001",
  slug: "ozel",
  title: "Bu Adaletsizliğe Dur Diyen Kimse Olmayacak Mı?",
  description:
    "Haberin kısa özetini veya giriş paragrafını buraya yazın. Bu metin hem ana sayfada hem de haber sayfasında görünür.",
  content: `<p>Haber içeriğini buraya yazın. HTML formatında olabilir.</p>
<p>İkinci paragraf örneği. Devam eden içerik buraya eklenebilir.</p>`,
  author: "Defne Akar",
  publishedAt: new Date().toISOString(),
  imageUrl: "/images/featured.jpg",
  imageAlt: "Şatır & Tonbul Avukatlık Bürosu Google yorumları",
  category: { slug: "gundem", label: "Özel", feedUrls: [] },
  tags: [],
  sourceUrl: "/ozel",
  sourceName: "Cumhuriyet Sesi",
  readingTimeMinutes: 3,
};
