import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FEATURED_ARTICLE } from "@/lib/featured";
import { formatDate } from "@/lib/utils";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: FEATURED_ARTICLE.title,
    description: FEATURED_ARTICLE.description,
    openGraph: {
      title: FEATURED_ARTICLE.title,
      description: FEATURED_ARTICLE.description,
      type: "article",
      publishedTime: FEATURED_ARTICLE.publishedAt,
      authors: [FEATURED_ARTICLE.author],
      images: FEATURED_ARTICLE.imageUrl ? [{ url: FEATURED_ARTICLE.imageUrl }] : [],
    },
  };
}

export default function OzelPage() {
  const article = FEATURED_ARTICLE;

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Makale gövdesi — 8 kolon */}
          <article className="lg:col-span-8">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-label-sm text-outline mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Anasayfa
              </Link>
              <span>/</span>
              <span className="text-on-surface">Özel Haber</span>
            </nav>

            {/* Kategori etiketi */}
            <span className="inline-block bg-secondary text-on-secondary px-3 py-1 text-label-sm font-bold tracking-[0.05em] uppercase rounded-md mb-4">
              Özel
            </span>

            {/* Başlık */}
            <h1 className="text-display-sm font-extrabold font-headline tracking-tight text-primary leading-tight mb-6 text-balance">
              {article.title}
            </h1>

            {/* Özet / giriş */}
            <p className="text-title-md text-on-surface-variant leading-relaxed mb-8 border-l-4 border-primary-fixed-dim pl-5">
              {article.description}
            </p>

            {/* Meta bilgiler */}
            <div className="flex flex-wrap items-center gap-4 text-body-sm text-outline mb-8 pb-6 border-b border-outline-variant/20">
              <span className="font-medium text-on-surface">{article.author}</span>
              <span>·</span>
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
              <span>·</span>
              <span>{article.readingTimeMinutes} dk okuma</span>
            </div>

            {/* Hero görsel */}
            {article.imageUrl && (
              <div className="aspect-video overflow-hidden rounded-xl mb-8">
                <Image
                  src={article.imageUrl}
                  alt={article.imageAlt ?? article.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}

            {/* İçerik */}
            <div
              className="prose prose-lg max-w-none text-on-surface leading-relaxed
                         prose-headings:font-headline prose-headings:text-primary prose-headings:font-extrabold
                         prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                         prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          {/* Sidebar — 4 kolon */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-surface-container-low p-6 rounded-xl">
                <p className="text-label-sm font-bold text-outline uppercase tracking-widest mb-2">
                  Yazar
                </p>
                <p className="text-title-sm font-bold text-primary">{article.author}</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
