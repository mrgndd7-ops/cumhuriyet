import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types";
import { formatRelativeTime } from "@/lib/utils";

interface ArticleHeroProps {
  article: Article;
  href?: string;
}

export function ArticleHero({ article, href: hrefProp }: ArticleHeroProps) {
  const href = hrefProp ?? `/article/${article.slug}?category=${article.category.slug}`;

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl bg-primary min-h-[500px] flex items-end block"
    >
      {article.imageUrl && (
        <Image
          src={article.imageUrl}
          alt={article.imageAlt ?? article.title}
          fill
          className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      )}
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative p-8 lg:p-12 max-w-2xl">
        <span className="inline-block bg-secondary text-on-secondary px-3 py-1 text-label-sm font-bold tracking-[0.2em] uppercase rounded-md mb-4">
          {article.category.label} • Özel
        </span>
        <h2 className="text-headline-md lg:text-display-sm font-extrabold text-white font-headline leading-tight tracking-tight mb-3 text-balance">
          {article.title}
        </h2>
        <p className="text-white/70 text-body-sm font-medium mb-6">
          Yazar: {article.author}
        </p>
        <p className="text-white/80 text-body-lg leading-relaxed mb-6 line-clamp-2">
          {article.description}
        </p>
        <div className="flex items-center gap-4 text-white/60 text-body-sm">
          <span>{formatRelativeTime(article.publishedAt)}</span>
          <span>·</span>
          <span>{article.readingTimeMinutes} dk okuma</span>
        </div>
      </div>
    </Link>
  );
}
