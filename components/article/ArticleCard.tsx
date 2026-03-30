import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types";
import { formatRelativeTime } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "compact" | "featured";
}

export function ArticleCard({
  article,
  variant = "default",
}: ArticleCardProps) {
  const href = `/article/${article.slug}?category=${article.category.slug}`;

  if (variant === "compact") {
    return (
      <Link href={href} className="flex gap-4 group">
        {article.imageUrl && (
          <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt ?? article.title}
              width={96}
              height={96}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="min-w-0">
          <h4 className="font-bold text-primary leading-tight mb-1 line-clamp-2 group-hover:text-secondary transition-colors text-sm">
            {article.title}
          </h4>
          <span className="text-label-sm font-medium text-outline uppercase tracking-wider">
            {article.category.label} • {formatRelativeTime(article.publishedAt)}
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={href} className="block group cursor-pointer">
        {article.imageUrl && (
          <div className="aspect-video overflow-hidden rounded-lg mb-4">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt ?? article.title}
              width={600}
              height={338}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <span className="text-secondary font-bold text-label-sm tracking-widest uppercase mb-2 block">
          {article.category.label}
        </span>
        <h3 className="text-title-lg font-bold font-headline leading-tight group-hover:text-secondary transition-colors mb-2">
          {article.title}
        </h3>
        <p className="text-body-md text-on-surface-variant line-clamp-2">
          {article.description}
        </p>
        <div className="flex items-center gap-3 mt-3 text-body-sm text-outline">
          <span>{formatRelativeTime(article.publishedAt)}</span>
          <span>·</span>
          <span>{article.readingTimeMinutes} dk okuma</span>
        </div>
      </Link>
    );
  }

  // default variant
  return (
    <Link
      href={href}
      className="bg-surface-container-lowest p-6 rounded-xl hover:bg-surface-container transition-colors block group"
    >
      <span className="text-secondary font-bold text-label-sm tracking-widest uppercase mb-2 block">
        {article.category.label}
      </span>
      <h3 className="text-title-md font-bold font-headline text-primary mb-3 leading-snug line-clamp-2 group-hover:text-secondary transition-colors">
        {article.title}
      </h3>
      <p className="text-body-sm text-on-surface-variant line-clamp-2 mb-3">
        {article.description}
      </p>
      <span className="text-label-sm text-outline">
        {formatRelativeTime(article.publishedAt)}
      </span>
    </Link>
  );
}
