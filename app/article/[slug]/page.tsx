import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticleCard } from "@/components/article/ArticleCard";
import { getArticleBySlug, getArticlesByCategory } from "@/lib/rss";
import { isValidCategorySlug, formatDate } from "@/lib/utils";

export const revalidate = 3600;

interface ArticlePageProps {
  params: { slug: string };
  searchParams: { category?: string };
}

export async function generateMetadata({
  params,
  searchParams,
}: ArticlePageProps): Promise<Metadata> {
  const categorySlug = searchParams.category;
  if (!categorySlug || !isValidCategorySlug(categorySlug)) return {};

  const article = await getArticleBySlug(params.slug, categorySlug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: article.imageUrl ? [{ url: article.imageUrl }] : [],
    },
  };
}

export default async function ArticlePage({
  params,
  searchParams,
}: ArticlePageProps) {
  const categorySlug = searchParams.category;

  if (!categorySlug || !isValidCategorySlug(categorySlug)) notFound();

  const [article, relatedArticles] = await Promise.all([
    getArticleBySlug(params.slug, categorySlug),
    getArticlesByCategory(categorySlug, 4),
  ]);

  if (!article) notFound();

  const otherRelated = relatedArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      <Navbar activeCategory={categorySlug} />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article body — 8 columns */}
          <article className="lg:col-span-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-label-sm text-outline mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors">Anasayfa</Link>
              <span>/</span>
              <Link
                href={`/${article.category.slug}`}
                className="hover:text-primary transition-colors"
              >
                {article.category.label}
              </Link>
            </nav>

            {/* Category tag */}
            <span className="inline-block bg-surface-container-highest text-primary px-3 py-1 text-label-sm font-bold tracking-[0.05em] uppercase rounded-md mb-4">
              {article.category.label}
            </span>

            {/* Headline */}
            <h1 className="text-display-sm font-extrabold font-headline tracking-tight text-primary leading-tight mb-6 text-balance">
              {article.title}
            </h1>

            {/* Description/lead */}
            <p className="text-title-md text-on-surface-variant leading-relaxed mb-8 border-l-4 border-primary-fixed-dim pl-5">
              {article.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-body-sm text-outline mb-8 pb-6 border-b border-outline-variant/20">
              <span className="font-medium text-on-surface">{article.author}</span>
              <span>·</span>
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
              <span>·</span>
              <span>{article.readingTimeMinutes} dk okuma</span>
            </div>

            {/* Hero image */}
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

            {/* Content */}
            <div
              className="prose prose-lg max-w-none text-on-surface leading-relaxed
                         prose-headings:font-headline prose-headings:text-primary prose-headings:font-extrabold
                         prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                         prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Source link */}
            <div className="mt-10 pt-6 border-t border-outline-variant/20">
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Orijinal kaynağa git →
              </a>
            </div>
          </article>

          {/* Sidebar — 4 columns */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {otherRelated.length > 0 && (
                <div>
                  <div className="border-b-2 border-primary pb-2 mb-6">
                    <h2 className="text-title-sm font-extrabold font-headline tracking-tight">
                      İLGİLİ HABERLER
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {otherRelated.map((related) => (
                      <ArticleCard
                        key={related.id}
                        article={related}
                        variant="compact"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
