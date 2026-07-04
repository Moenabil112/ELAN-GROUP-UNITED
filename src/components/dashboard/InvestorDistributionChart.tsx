"use client";

/** توزيعات المستثمر السنوية (30% من نافذة التشغيل المحلية) */

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

export default function InvestorDistributionChart({ rows }: { rows: YearRow[] }) {
  const data = rows.map((r) => ({
    year: r.year,
    investor: r.investorDistributionSAR,
  }));
  return (
    <div className="chart-card">
      <div className="chart-card__head">
        <h3 className="chart-card__title">حصة المستثمر من التوزيعات السنوية</h3>
        <span className="chart-card__sub">
          30% من توزيعات نافذة التشغيل المحلية · مليون ريال
        </span>
      </div>
      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={data} barCategoryGap="30%">
          <CartesianGrid stroke={CHART.grid} vertical={false} />
          <XAxis dataKey="year" {...AXIS_PROPS} />
          <YAxis {...AXIS_PROPS} tickFormatter={axisMillions} width={44} />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(240,235,221,0.05)" }} />
          <Bar
            dataKey="investor"
            name="حصة المستثمر"
            fill={CHART.gold}
            radius={[4, 4, 0, 0]}
            maxBarSize={16}
          />
        </BarChart>
      </ResponsiveContainer>
      <ChartLegend items={[{ labelAr: "توزيعات المستثمر السنوية", color: CHART.gold }]} />
    </div>
  );
}
