"use client";

/**
 * التدفقات النقدية — لوحان بمحور مستقل لكل منهما
 * (السنوي والتراكمي بمقياسين مختلفين؛ لا محور مزدوج أبداً).
 */

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ReferenceLine,
} from "recharts";
import type { YearRow } from "@/types/finance";
import { CHART, AXIS_PROPS, axisMillions, ChartTooltip, ChartLegend } from "./chartTheme";

export default function CashFlowChart({ rows }: { rows: YearRow[] }) {
  const data = rows.map((r) => ({
    year: r.year,
    cashFlow: r.cashFlowSAR,
    cumulative: r.cumulativeCashFlowSAR,
  }));
  return (
    <>
      <div className="chart-card">
        <div className="chart-card__head">
          <h3 className="chart-card__title">التدفقات النقدية السنوية</h3>
          <span className="chart-card__sub">مليون ريال · موجب/سالب</span>
        </div>
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={data} barCategoryGap="30%">
            <CartesianGrid stroke={CHART.grid} vertical={false} />
            <XAxis dataKey="year" {...AXIS_PROPS} />
            <YAxis {...AXIS_PROPS} tickFormatter={axisMillions} width={44} />
            <ReferenceLine y={0} stroke={CHART.axis} strokeWidth={1} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(240,235,221,0.05)" }} />
            <Bar dataKey="cashFlow" name="التدفق النقدي" radius={[4, 4, 0, 0]} maxBarSize={16}>
              {data.map((d) => (
                <Cell
                  key={d.year}
                  fill={d.cashFlow >= 0 ? CHART.green : CHART.rust}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <ChartLegend
          items={[
            { labelAr: "تدفق موجب", color: CHART.green },
            { labelAr: "تدفق سالب", color: CHART.rust },
          ]}
        />
      </div>
      <div className="chart-card">
        <div className="chart-card__head">
          <h3 className="chart-card__title">التدفقات النقدية التراكمية</h3>
          <span className="chart-card__sub">مليون ريال · تراكمي عبر الأفق</span>
        </div>
        <ResponsiveContainer width="100%" height={230}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="cumFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART.teal} stopOpacity={0.32} />
                <stop offset="100%" stopColor={CHART.teal} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={CHART.grid} vertical={false} />
            <XAxis dataKey="year" {...AXIS_PROPS} />
            <YAxis {...AXIS_PROPS} tickFormatter={axisMillions} width={48} />
            <ReferenceLine y={0} stroke={CHART.axis} strokeWidth={1} />
            <Tooltip content={<ChartTooltip />} />
            <Area
              type="monotone"
              dataKey="cumulative"
              name="التدفق التراكمي"
              stroke={CHART.teal}
              strokeWidth={2}
              fill="url(#cumFill)"
              dot={false}
              activeDot={{ r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
