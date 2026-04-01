import Link from "next/link";
import type { NavItem } from "@/types";
import { MarketTicker } from "@/components/ui/MarketTicker";

const NAV_ITEMS: NavItem[] = [
  { label: "Anasayfa", href: "/" },
  { label: "Gündem", href: "/gundem", categorySlug: "gundem" },
  { label: "Siyaset", href: "/siyaset", categorySlug: "siyaset" },
  { label: "Ekonomi", href: "/ekonomi", categorySlug: "ekonomi" },
  { label: "Dünya", href: "/dunya", categorySlug: "dunya" },
  { label: "Yaşam", href: "/yasam", categorySlug: "yasam" },
  { label: "Kültür & Sanat", href: "/kultur-sanat", categorySlug: "kultur-sanat" },
  { label: "Analiz", href: "/analiz", categorySlug: "analiz" },
];

interface NavbarProps {
  activeCategory?: string;
}

export function Navbar({ activeCategory }: NavbarProps) {

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-primary text-on-primary text-[11px] font-medium py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="opacity-70">
              {new Date().toLocaleDateString("tr-TR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <MarketTicker />
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/rss"
              className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
            >
              RSS
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 glass border-b-0">
        <div className="flex flex-col w-full max-w-7xl mx-auto px-4 md:px-6 py-4">
          {/* Brand + actions */}
          <div className="flex justify-between items-center mb-4">
            <Link href="/">
              <h1 className="text-2xl font-extrabold tracking-tighter text-secondary font-headline">
                Cumhuriyet Sesi
              </h1>
              <p className="text-[10px] text-on-surface-variant font-label tracking-widest uppercase hidden md:block">
                Aklın ve Gündemin Sesi
              </p>
            </Link>

            <div className="flex items-center gap-2">
              <button
                aria-label="Ara"
                className="p-2 text-on-surface-variant hover:bg-surface-container rounded-md transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="11" cy="11" r="8" />
                  <path strokeLinecap="round" d="m21 21-4.35-4.35" />
                </svg>
              </button>

              <div className="hidden md:flex items-center gap-2 ml-2">
                <div className="h-5 w-px bg-outline-variant/40" />
                <button className="px-4 py-1.5 text-sm font-medium text-on-surface hover:bg-surface-container rounded-md transition-colors">
                  Giriş
                </button>
                <button className="px-4 py-1.5 text-sm font-bold bg-secondary text-on-secondary rounded-md hover:opacity-90 transition-opacity">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className="hidden md:flex items-center gap-6 border-t border-outline-variant/20 pt-3 overflow-x-auto scrollbar-hide"
            aria-label="Ana navigasyon"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.categorySlug === activeCategory ||
                (item.href === "/" && !activeCategory);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors pb-1 ${
                    isActive
                      ? "text-secondary border-b-2 border-secondary font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
