"use client";

/** لوحة الحساسية — مقارنة السيناريوهات الثلاثة على تراكمي توزيعات المستثمر */

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { SCENARIO_SUMMARIES, FINANCIAL_CONSTANTS } from "@/data/financialModel";
import { toMillions } from "@/lib/formatters";
import { CHART, AXIS_PROPS, axisMillions, ChartTooltip, ChartLegend } from "./chartTheme";

const SCENARIO_COLORS = {
  conservative: CHART.rust,
  base: CHART.gold,
  expansion: CHART.green,
} as const;

export default function SensitivityPanel() {
  const { conservative, base, expansion } = SCENARIO_SUMMARIES;
  const data = base.rows.map((r, i) => ({
    year: r.year,
    conservative: conservative.rows[i].cumulativeInvestorDistributionSAR,
    base: r.cumulativeInvestorDistributionSAR,
    expansion: expansion.rows[i].cumulativeInvestorDistributionSAR,
  }));
  const summaries = [conservative, base, expansion];

  return (
    <div className="chart-card">
      <div className="chart-card__head">
        <h3 className="chart-card__title">حساسية الاسترداد بين السيناريوهات</h3>
        <span className="chart-card__sub">
          تراكمي توزيعات المستثمر مقابل رأس مال الدخول (100 مليون ريال)
        </span>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke={CHART.grid} vertical={false} />
          <XAxis dataKey="year" {...AXIS_PROPS} />
          <YAxis {...AXIS_PROPS} tickFormatter={axisMillions} width={48} />
          <ReferenceLine
            y={FINANCIAL_CONSTANTS.entryCapitalSAR}
            stroke={CHART.axis}
            strokeDasharray="5 4"
          />
          <Tooltip content={<ChartTooltip />} />
          <Line type="monotone" dataKey="conservative" name="المحافظ" stroke={SCENARIO_COLORS.conservative} strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="base" name="الأساسي" stroke={SCENARIO_COLORS.base} strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="expansion" name="التوسع" stroke={SCENARIO_COLORS.expansion} strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      <ChartLegend
        items={[
          { labelAr: "السيناريو المحافظ", color: SCENARIO_COLORS.conservative },
          { labelAr: "السيناريو الأساسي", color: SCENARIO_COLORS.base },
          { labelAr: "سيناريو التوسع", color: SCENARIO_COLORS.expansion },
        ]}
      />
      <div className="table-scroll" style={{ marginTop: "1rem" }}>
        <table className="sens-table">
          <thead>
            <tr>
              <th>السيناريو</th>
              <th>الإيراد التراكمي</th>
              <th>التدفق التراكمي</th>
              <th>توزيعات المستثمر التراكمية</th>
              <th>سنة الاسترداد النموذجية</th>
            </tr>
          </thead>
          <tbody>
            {summaries.map((s) => (
              <tr key={s.id}>
                <td>{s.nameAr}</td>
                <td>
                  <span className="num">{toMillions(s.cumulativeRevenueSAR)}</span> مليون
                </td>
                <td>
                  <span className="num">{toMillions(s.cumulativeCashFlowSAR)}</span> مليون
                </td>
                <td>
                  <span className="num">{toMillions(s.cumulativeInvestorDistributionSAR)}</span> مليون
                </td>
                <td>{s.paybackYear ? `السنة ${s.paybackYear}` : "خارج أفق النموذج"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
