import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticleHero } from "@/components/article/ArticleHero";
import { ArticleCard } from "@/components/article/ArticleCard";
import { CategorySection } from "@/components/ui/CategorySection";
import { BreakingNewsBand } from "@/components/ui/BreakingNewsBand";
import { getHomepageArticles, getLatestArticles } from "@/lib/rss";

export const revalidate = 3600;

export default async function HomePage() {
  const [homepageArticles, latestArticles] = await Promise.all([
    getHomepageArticles(),
    getLatestArticles(1),
  ]);

  const breakingArticle = latestArticles[0];
  const heroArticle = homepageArticles.gundem?.[0];
  const heroSideArticles = [
    homepageArticles.ekonomi?.[0],
    homepageArticles.dunya?.[0],
    homepageArticles["kultur-sanat"]?.[0],
  ].filter(Boolean);

  return (
    <>
      <Navbar />

      {breakingArticle && <BreakingNewsBand article={breakingArticle} />}

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-8 space-y-16 pb-16">
        {/* Hero: Asymmetric 8/4 editorial grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {heroArticle && <ArticleHero article={heroArticle} />}
          </div>

          <div className="lg:col-span-4 space-y-4">
            {heroSideArticles.map((article) =>
              article ? (
                <ArticleCard key={article.id} article={article} variant="default" />
              ) : null
            )}
          </div>
        </section>

        {/* Quick agenda strip */}
        {homepageArticles.gundem && homepageArticles.gundem.length > 1 && (
          <section className="bg-surface-container-low p-2 rounded-xl">
            <div className="flex flex-nowrap overflow-x-auto gap-4 scrollbar-hide py-2 px-2">
              {homepageArticles.gundem.slice(1, 6).map((article, index) => (
                <div
                  key={article.id}
                  className={`flex-none w-64 bg-surface-container-lowest p-4 rounded-lg shadow-ambient-sm border-l-4 ${
                    index % 2 === 0 ? "border-primary" : "border-secondary"
                  }`}
                >
                  <span className="text-label-sm text-outline font-bold mb-1 block">
                    {new Date(article.publishedAt).toLocaleTimeString("tr-TR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <h4 className="text-body-sm font-semibold text-primary line-clamp-2">
                    {article.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main content grid: 2/3 editorial + 1/3 sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Main categories */}
          <div className="lg:col-span-2 space-y-16">
            {homepageArticles.siyaset && homepageArticles.siyaset.length > 0 && (
              <CategorySection
                title="Siyaset"
                href="/siyaset"
                articles={homepageArticles.siyaset}
              />
            )}

            {homepageArticles.ekonomi && homepageArticles.ekonomi.length > 0 && (
              <CategorySection
                title="Ekonomi Analiz"
                href="/ekonomi"
                articles={homepageArticles.ekonomi}
                variant="analytical"
              />
            )}

            {homepageArticles.dunya && homepageArticles.dunya.length > 0 && (
              <CategorySection
                title="Dünya"
                href="/dunya"
                articles={homepageArticles.dunya}
              />
            )}
          </div>

          {/* Right: Sidebar — Gündem stream */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="flex items-center justify-between border-b-2 border-primary pb-2 mb-6">
                  <h2 className="text-headline-sm font-extrabold font-headline tracking-tight">
                    GÜNDEM
                  </h2>
                </div>
                <div className="space-y-6">
                  {homepageArticles.gundem?.slice(0, 6).map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      variant="compact"
                    />
                  ))}
                </div>
              </div>

              {/* Kültür & Sanat sidebar block */}
              {homepageArticles["kultur-sanat"] &&
                homepageArticles["kultur-sanat"].length > 0 && (
                  <div className="bg-surface-container-low p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-title-sm font-extrabold font-headline tracking-tight">
                        KÜLTÜR & SANAT
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {homepageArticles["kultur-sanat"]
                        .slice(0, 3)
                        .map((article) => (
                          <ArticleCard
                            key={article.id}
                            article={article}
                            variant="compact"
                          />
                        ))}
                    </div>
                  </div>
                )}
            </div>
          </aside>
        </div>

        {/* Yaşam section — full width */}
        {homepageArticles.yasam && homepageArticles.yasam.length > 0 && (
          <CategorySection
            title="Yaşam"
            href="/yasam"
            articles={homepageArticles.yasam}
          />
        )}

        {/* Analiz section — full width */}
        {homepageArticles.analiz && homepageArticles.analiz.length > 0 && (
          <CategorySection
            title="Analiz"
            href="/analiz"
            articles={homepageArticles.analiz}
            variant="analytical"
          />
        )}
      </main>

      <Footer />
    </>
  );
}
