import Link from "next/link";
import type { Article } from "@/types";

interface BreakingNewsBandProps {
  article: Article;
}

export function BreakingNewsBand({ article }: BreakingNewsBandProps) {
  const href = `/article/${article.slug}?category=${article.category.slug}`;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-4">
      <div className="bg-surface-container-lowest flex items-center overflow-hidden rounded-xl border-t-2 border-secondary shadow-ambient-sm">
        <div className="bg-secondary text-on-secondary px-5 py-3 font-bold text-label-sm tracking-widest whitespace-nowrap flex-shrink-0">
          SON GELİŞME
        </div>
        <Link
          href={href}
          className="px-6 py-3 text-primary font-semibold truncate hover:text-secondary transition-colors text-body-md flex-1 min-w-0"
        >
          {article.title}
        </Link>
        <div className="ml-auto px-4 hidden lg:flex items-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="text-outline-variant"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
