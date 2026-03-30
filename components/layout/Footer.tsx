import Link from "next/link";

const FOOTER_LINKS = {
  Haberler: [
    { label: "Gündem", href: "/gundem" },
    { label: "Siyaset", href: "/siyaset" },
    { label: "Ekonomi", href: "/ekonomi" },
    { label: "Dünya", href: "/dunya" },
    { label: "Yaşam", href: "/yasam" },
  ],
  "Kültür & Analiz": [
    { label: "Kültür & Sanat", href: "/kultur-sanat" },
    { label: "Yazarlar", href: "/yazarlar" },
    { label: "Analiz", href: "/analiz" },
  ],
  Kurumsal: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "RSS", href: "/rss" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-on-primary mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <span className="text-xl font-extrabold tracking-tighter text-secondary font-headline">
                Cumhuriyet Sesi
              </span>
            </Link>
            <p className="mt-3 text-sm text-on-primary/60 leading-relaxed">
              Analitik gazetecilik. Editoryal bağımsızlık. Aklın ve gündemin
              sesi.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-primary/40 mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-primary/70 hover:text-on-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-on-primary/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-primary/40">
            © {new Date().getFullYear()} Cumhuriyet Sesi. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-on-primary/40">
            RSS kaynaklı içerik — Gerçek zamanlı haber akışı
          </p>
        </div>
      </div>
    </footer>
  );
}
