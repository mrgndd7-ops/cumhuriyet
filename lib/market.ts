export interface MarketRate {
  value: string;
  change: number;
  trend: "up" | "down" | "flat";
}

export interface MarketData {
  usd: MarketRate;
  eur: MarketRate;
  altin: MarketRate;
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

export async function getMarketData(): Promise<MarketData | null> {
  try {
    const res = await fetch("https://finans.truncgil.com/v4/today.json", {
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    return {
      usd: {
        value: fmt(data["USD"]?.Selling ?? 0),
        change: data["USD"]?.Change ?? 0,
        trend: trend(data["USD"]?.Change ?? 0),
      },
      eur: {
        value: fmt(data["EUR"]?.Selling ?? 0),
        change: data["EUR"]?.Change ?? 0,
        trend: trend(data["EUR"]?.Change ?? 0),
      },
      altin: {
        value: fmt(data["GRA"]?.Selling ?? 0),
        change: data["GRA"]?.Change ?? 0,
        trend: trend(data["GRA"]?.Change ?? 0),
      },
    };
  } catch {
    return null;
  }
}
