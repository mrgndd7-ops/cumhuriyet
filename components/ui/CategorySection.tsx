import Link from "next/link";
import type { Article } from "@/types";
import { ArticleCard } from "@/components/article/ArticleCard";

interface CategorySectionProps {
  title: string;
  href: string;
  articles: Article[];
  variant?: "default" | "analytical";
}

export function CategorySection({
  title,
  href,
  articles,
  variant = "default",
}: CategorySectionProps) {
  if (articles.length === 0) return null;

  const [featuredArticle, ...restArticles] = articles;

  if (variant === "analytical") {
    return (
      <section className="bg-surface-container-low p-8 rounded-2xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-headline-sm font-extrabold font-headline tracking-tight">
            {title}
          </h2>
          <span className="bg-primary text-on-primary text-label-sm px-2 py-1 rounded-md font-bold uppercase tracking-widest">
            VERİ ODAKLI
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.slice(0, 4).map((article) => (
            <ArticleCard key={article.id} article={article} variant="default" />
          ))}
        </div>
        <div className="mt-6 text-right">
          <Link
            href={href}
            className="text-label-sm font-bold text-secondary uppercase tracking-widest inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            Tümünü Gör →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between border-b-2 border-primary pb-2">
        <h2 className="text-headline-sm font-extrabold font-headline tracking-tight">
          {title.toUpperCase()}
        </h2>
        <Link
          href={href}
          className="text-label-sm font-bold text-secondary uppercase tracking-widest inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          Tümünü Gör →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredArticle && (
          <ArticleCard
            article={featuredArticle}
            variant="featured"
          />
        )}
        <div className="space-y-6">
          {restArticles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
