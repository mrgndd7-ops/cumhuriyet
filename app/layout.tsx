import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cumhuriyet Sesi — Aklın ve Gündemin Sesi",
    template: "%s | Cumhuriyet Sesi",
  },
  description:
    "Cumhuriyet Sesi — Türkiye'nin analitik ve editoryal haber platformu. Siyaset, ekonomi, dünya ve kültür haberleri.",
  keywords: ["haber", "siyaset", "ekonomi", "türkiye", "gündem", "analiz"],
  openGraph: {
    siteName: "Cumhuriyet Sesi",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-surface text-on-surface font-body antialiased">
        {children}
      </body>
    </html>
  );
}
