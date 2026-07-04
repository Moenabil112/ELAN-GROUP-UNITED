"use client";

/** استخدام رأس المال — حلقة بفواصل 2px ووسيلة إيضاح مباشرة */

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import type { TooltipProps } from "recharts";
import { USE_OF_FUNDS } from "@/data/useOfFunds";
import { CHART } from "./chartTheme";

function FundsTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  const p = payload[0];
  return (
    <div
      dir="rtl"
      style={{
        background: "#0F1512",
        border: "1px solid rgba(240,235,221,0.18)",
        borderRadius: 8,
        padding: "0.55rem 0.8rem",
        fontSize: "0.72rem",
        color: "rgba(240,235,221,0.85)",
      }}
    >
      <div style={{ fontWeight: 600 }}>{p.name}</div>
      <div>
        <span className="num" style={{ fontWeight: 600, color: "#F0EBDD" }}>
          {((p.value ?? 0) / 1_000_000).toFixed(0)}
        </span>{" "}
        مليون ريال ·{" "}
        <span className="num">{(((p.value ?? 0) / 100_000_000) * 100).toFixed(0)}%</span>
      </div>
    </div>
  );
}

export default function UseOfFundsChart() {
  const data = USE_OF_FUNDS.map((f) => ({
    name: f.titleAr,
    value: f.amountSAR,
    color: f.color,
  }));
  return (
    <div className="chart-card" style={{ display: "flex", flexDirection: "column" }}>
      <div className="chart-card__head">
        <h3 className="chart-card__title">توظيف رأس المال</h3>
        <span className="chart-card__sub">100 مليون ريال · ستة مراكز</span>
      </div>
      <div style={{ position: "relative", flex: 1, minHeight: 230 }}>
        <ResponsiveContainer width="100%" height={230}>
          <PieChart>
            <Tooltip content={<FundsTooltip />} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="62%"
              outerRadius="92%"
              paddingAngle={2}
              stroke={CHART.surface}
              strokeWidth={2}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            textAlign: "center",
          }}
        >
          <span className="num" style={{ fontSize: "1.9rem", fontWeight: 700 }}>
            100
          </span>
          <span style={{ fontSize: "0.68rem", color: "var(--gold)" }}>مليون ريال</span>
        </div>
      </div>
      <div className="chart-legend" style={{ marginTop: "0.6rem" }}>
        {data.map((d) => (
          <span key={d.name} className="chart-legend__item">
            <span className="chart-legend__swatch" style={{ background: d.color }} />
            {d.name}{" "}
            <span className="num" style={{ fontWeight: 600 }}>
              {(d.value / 1_000_000).toFixed(0)}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
