"use client";

import { useEffect, useState } from "react";

interface Rate {
  value: string;
  change: number;
  trend: "up" | "down" | "flat";
}

interface MarketData {
  usd: Rate;
  eur: Rate;
  altin: Rate;
}

function fmt(val: number): string {
  return val.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function trend(change: number): "up" | "down" | "flat" {
  if (change > 0) return "up";
  if (change < 0) return "down";
  return "flat";
}

export function MarketTicker() {
  const [data, setData] = useState<MarketData | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://finans.truncgil.com/v4/today.json");
        if (!res.ok) return;
        const raw = await res.json();
        setData({
          usd: {
            value: fmt(raw["USD"]?.Selling ?? 0),
            change: raw["USD"]?.Change ?? 0,
            trend: trend(raw["USD"]?.Change ?? 0),
          },
          eur: {
            value: fmt(raw["EUR"]?.Selling ?? 0),
            change: raw["EUR"]?.Change ?? 0,
            trend: trend(raw["EUR"]?.Change ?? 0),
          },
          altin: {
            value: fmt(raw["GRA"]?.Selling ?? 0),
            change: raw["GRA"]?.Change ?? 0,
            trend: trend(raw["GRA"]?.Change ?? 0),
          },
        });
      } catch {
        // sessizce geç
      }
    }
    load();
  }, []);

  if (!data) return null;

  const items = [
    { label: "USD", ...data.usd },
    { label: "EUR", ...data.eur },
    { label: "Altın", ...data.altin },
  ] as const;

  return (
    <div className="flex items-center gap-4">
      <div className="w-px h-3 bg-on-primary/20" />
      {items.map(({ label, value, change, trend }) => (
        <span key={label} className="flex items-center gap-1">
          <span className="opacity-50 font-bold tracking-wider">{label}</span>
          <span className="font-semibold">{value}</span>
          <span
            className={
              trend === "up"
                ? "text-green-300"
                : trend === "down"
                  ? "text-red-300"
                  : "opacity-50"
            }
          >
            {trend === "up" ? "▲" : trend === "down" ? "▼" : "–"}
            {Math.abs(change).toFixed(2)}%
          </span>
        </span>
      ))}
    </div>
  );
}
