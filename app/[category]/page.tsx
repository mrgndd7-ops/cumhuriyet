import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticleCard } from "@/components/article/ArticleCard";
import { getArticlesByCategory } from "@/lib/rss";
import { isValidCategorySlug } from "@/lib/utils";
import { FEED_CONFIGS } from "@/lib/feeds";

export const revalidate = 3600;

interface CategoryPageProps {
  params: { category: string };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  if (!isValidCategorySlug(params.category)) return {};
  const config = FEED_CONFIGS[params.category];
  return {
    title: config.label,
    description: `${config.label} haberleri — Cumhuriyet Sesi`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  if (!isValidCategorySlug(params.category)) notFound();

  const config = FEED_CONFIGS[params.category];
  const articles = await getArticlesByCategory(params.category, 24);

  return (
    <>
      <Navbar activeCategory={params.category} />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-16">
        {/* Category header */}
        <div className="mb-10 border-b-2 border-primary pb-4">
          <h1 className="text-display-sm font-extrabold font-headline tracking-tight text-primary">
            {config.label.toUpperCase()}
          </h1>
          <p className="text-body-md text-on-surface-variant mt-2">
            {config.label} alanındaki son haberler ve analizler
          </p>
        </div>

        {articles.length === 0 ? (
          <p className="text-on-surface-variant text-body-lg py-16 text-center">
            Şu an içerik yüklenemiyor. Lütfen daha sonra tekrar deneyin.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="featured" />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
