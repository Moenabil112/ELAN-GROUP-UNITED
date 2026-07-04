"use client";

/**
 * سمات المخططات المشتركة — لوحة مُتحقق منها على السطح الداكن #16211B
 * (فحوصات نطاق الإضاءة وأرضية التشبع وفصل CVD والتباين — كلها ناجحة).
 */

import type { TooltipProps } from "recharts";

export const CHART = {
  gold: "#C98500",
  green: "#199E70",
  rust: "#C4573A",
  teal: "#1793AC",
  olive: "#9A8A1F",
  maroon: "#B0574F",
  grid: "rgba(240, 235, 221, 0.08)",
  axis: "rgba(240, 235, 221, 0.45)",
  surface: "#16211B",
};

export const AXIS_PROPS = {
  stroke: CHART.axis,
  tickLine: false as const,
  axisLine: false as const,
  fontSize: 10.5,
  fontFamily: "Inter, IBM Plex Sans, sans-serif",
};

/** تنسيق قيمة المحور بالمليون */
export function axisMillions(v: number): string {
  return `${Math.round(v / 1_000_000)}M`;
}

/** تلميح موحد — القيم بالمليون ريال، بترتيب عربي */
export function ChartTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  return (
    <div
      dir="rtl"
      style={{
        background: "#0F1512",
        border: "1px solid rgba(240,235,221,0.18)",
        borderRadius: 8,
        padding: "0.6rem 0.8rem",
        fontSize: "0.72rem",
        color: "rgba(240,235,221,0.85)",
        fontFamily: "inherit",
        boxShadow: "0 8px 22px -10px rgba(0,0,0,0.7)",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 4 }}>السنة {label}</div>
      {payload.map((p) => (
        <div
          key={String(p.dataKey)}
          style={{ display: "flex", alignItems: "center", gap: 6 }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 2,
              background: p.color,
              flexShrink: 0,
            }}
          />
          <span>{p.name}:</span>
          <span
            className="num"
            style={{ fontWeight: 600, color: "#F0EBDD" }}
          >
            {((p.value ?? 0) / 1_000_000).toFixed(1)}
          </span>
          <span>مليون ريال</span>
        </div>
      ))}
    </div>
  );
}

/** وسيلة إيضاح عربية خارج منطقة الرسم */
export function ChartLegend({
  items,
}: {
  items: { labelAr: string; color: string }[];
}) {
  return (
    <div className="chart-legend">
      {items.map((it) => (
        <span key={it.labelAr} className="chart-legend__item">
          <span
            className="chart-legend__swatch"
            style={{ background: it.color }}
          />
          {it.labelAr}
        </span>
      ))}
    </div>
  );
}
