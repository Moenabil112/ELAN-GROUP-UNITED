"use client";

/** الإيرادات السنوية مقابل التكاليف التشغيلية — أعمدة رفيعة بمحور واحد */

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import type { YearRow } from "@/types/finance";
import { CHART, AXIS_PROPS, axisMillions, ChartTooltip, ChartLegend } from "./chartTheme";

export default function RevenueChart({ rows }: { rows: YearRow[] }) {
  const data = rows.map((r) => ({
    year: r.year,
    revenue: r.revenueSAR,
    costs: r.costsSAR,
  }));
  return (
    <div className="chart-card">
      <div className="chart-card__head">
        <h3 className="chart-card__title">الإيرادات السنوية والتكاليف التشغيلية</h3>
        <span className="chart-card__sub">مليون ريال · سنوات النموذج 1–15</span>
      </div>
      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={data} barGap={2} barCategoryGap="28%">
          <CartesianGrid stroke={CHART.grid} vertical={false} />
          <XAxis dataKey="year" {...AXIS_PROPS} />
          <YAxis {...AXIS_PROPS} tickFormatter={axisMillions} width={44} />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(240,235,221,0.05)" }} />
          <Bar dataKey="revenue" name="الإيراد" fill={CHART.gold} radius={[4, 4, 0, 0]} maxBarSize={14} />
          <Bar dataKey="costs" name="التكاليف" fill={CHART.rust} radius={[4, 4, 0, 0]} maxBarSize={14} />
        </BarChart>
      </ResponsiveContainer>
      <ChartLegend
        items={[
          { labelAr: "الإيراد السنوي", color: CHART.gold },
          { labelAr: "التكاليف التشغيلية", color: CHART.rust },
        ]}
      />
    </div>
  );
}
