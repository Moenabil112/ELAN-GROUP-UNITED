"use client";

/**
 * الكوكبت المالي — الشاشة الأولى.
 * تبديل السيناريو يحدّث بطاقات المؤشرات والمخططات ومؤشر الاسترداد وشارة المخاطر.
 */

import { useState } from "react";
import type { ScenarioId } from "@/types/finance";
import {
  FINANCIAL_CONSTANTS,
  SCENARIOS,
  SCENARIO_SUMMARIES,
  ASSUMPTIONS_LABEL_AR,
  getScenario,
} from "@/data/financialModel";
import { USE_OF_FUNDS } from "@/data/useOfFunds";
import { validateFinancialInputs } from "@/lib/validators";
import { toMillions } from "@/lib/formatters";

import Topbar from "@/components/layout/Topbar";
import SectionHeader from "@/components/shared/SectionHeader";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";
import StatusBadge from "@/components/shared/StatusBadge";
import FinancialMetricCard from "./FinancialMetricCard";
import ScenarioSelector from "./ScenarioSelector";
import RevenueChart from "./RevenueChart";
import CashFlowChart from "./CashFlowChart";
import InvestorDistributionChart from "./InvestorDistributionChart";
import PaybackIndicator from "./PaybackIndicator";
import SensitivityPanel from "./SensitivityPanel";
import UseOfFundsChart from "./UseOfFundsChart";

const C = FINANCIAL_CONSTANTS;

export default function FinancialCockpit() {
  const [scenarioId, setScenarioId] = useState<ScenarioId>("base");
  const scenario = getScenario(scenarioId);
  const summary = SCENARIO_SUMMARIES[scenarioId];
  const validationIssues = validateFinancialInputs(C, SCENARIOS, USE_OF_FUNDS);

  return (
    <>
      <Topbar
        titleAr="النموذج المالي 15 سنة — نافذة التشغيل المحلية"
        subtitleAr="كوكبت الذكاء المالي لأصحاب المصلحة · ELAN Group United"
      />

      {/* بطاقات الدخول الثابتة — لا تتغير بالسيناريو */}
      <section className="cockpit-hero" aria-label="ملخص الدخول">
        <div className="cockpit-hero__label">إطار الدخول المعتمد — الخيار B</div>
        <div className="metric-grid">
          <FinancialMetricCard
            labelAr="رأس مال الدخول"
            value="100"
            unitAr="مليون ريال"
            noteAr="ينشر مرحلياً عبر بوابات حوكمة"
            accent
          />
          <FinancialMetricCard
            labelAr="حصة في نافذة التشغيل المحلية"
            value="30"
            unitAr="%"
            noteAr="حصة تفاوضية تخص النافذة المحلية حصراً"
          />
          <FinancialMetricCard
            labelAr="تقييم مرجعي Post-money للإيكوسيستم الأوسع"
            value="517"
            unitAr="مليون ريال"
            noteAr="مرجع حجمي فقط — لا يعاد به احتساب الحصة"
          />
          <FinancialMetricCard
            labelAr="أفق النموذج المالي"
            value="15"
            unitAr="سنة"
            noteAr="أصل تشغيلي طويل الأجل"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <DisclaimerBlock />
        </div>
      </section>

      {/* محدد السيناريو — لاصق */}
      <ScenarioSelector
        active={scenarioId}
        onChange={setScenarioId}
        validationPaceAr={scenario.validationPaceAr}
        riskLevel={scenario.riskLevel}
      />

      {/* مؤشرات السيناريو المختار */}
      <section aria-label="مؤشرات السيناريو">
        <div className="metric-grid">
          <FinancialMetricCard
            labelAr="الإيراد التراكمي (15 سنة)"
            value={toMillions(summary.cumulativeRevenueSAR)}
            unitAr="مليون ريال"
            noteAr={ASSUMPTIONS_LABEL_AR}
          />
          <FinancialMetricCard
            labelAr="التدفق النقدي التراكمي"
            value={toMillions(summary.cumulativeCashFlowSAR)}
            unitAr="مليون ريال"
            noteAr={ASSUMPTIONS_LABEL_AR}
          />
          <FinancialMetricCard
            labelAr="توزيعات المستثمر التراكمية"
            value={toMillions(summary.cumulativeInvestorDistributionSAR)}
            unitAr="مليون ريال"
            noteAr="30% من توزيعات النافذة المحلية"
          />
          <FinancialMetricCard
            labelAr="سنة الاسترداد النموذجية"
            value={summary.paybackYear ? String(summary.paybackYear) : "—"}
            unitAr={summary.paybackYear ? "من 15" : "خارج أفق النموذج"}
            noteAr="نتيجة سيناريو — ليست وعداً ولا تاريخاً ملزماً"
          />
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.8rem" }}>
          <StatusBadge
            tone={validationIssues.length === 0 ? "ok" : "high"}
            labelAr={
              validationIssues.length === 0
                ? "فحوصات اتساق النموذج: ناجحة"
                : `فحوصات اتساق النموذج: ${validationIssues.length} ملاحظات`
            }
          />
          <StatusBadge tone="warn" labelAr="قنوات الإيراد: قابلة للتحقق عبر العقود والتنفيذ" />
          <StatusBadge tone="neutral" labelAr={scenario.descriptionAr.slice(0, 60) + "…"} />
        </div>
      </section>

      {/* المخططات الرئيسية */}
      <SectionHeader
        kickerAr="لوحات النموذج"
        titleAr="الإيرادات والتدفقات عبر أفق النموذج"
        descAr={`${scenario.nameAr}: ${scenario.descriptionAr}`}
      />
      <div className="chart-grid">
        <RevenueChart rows={summary.rows} />
        <InvestorDistributionChart rows={summary.rows} />
        <CashFlowChart rows={summary.rows} />
      </div>

      {/* الاسترداد والحساسية */}
      <SectionHeader
        kickerAr="الاسترداد"
        titleAr="مسار الاسترداد وحساسية السيناريوهات"
        descAr="الاسترداد نتيجة نمذجة تعتمد على تحول القنوات إلى عقود وسياسة التوزيعات وقرارات الحوكمة — لا يُعرض كوعد."
      />
      <div className="chart-grid">
        <PaybackIndicator summary={summary} horizonYears={C.horizonYears} />
        <SensitivityPanel />
      </div>

      {/* استخدام رأس المال */}
      <SectionHeader
        kickerAr="خريطة رأس المال"
        titleAr="أين تذهب المئة مليون؟"
        descAr="كل مركز إنفاق يقابله ناتج تشغيلي ونقطة تحقق حوكمية — لا يُصرف رأس المال دفعة واحدة."
      />
      <div className="fund-row">
        <UseOfFundsChart />
        <div className="fund-cards">
          {USE_OF_FUNDS.map((f) => (
            <article key={f.id} className="fund-item">
              <div className="fund-item__top">
                <span className="fund-item__dot" style={{ background: f.color }} />
                <span className="fund-item__title">{f.titleAr}</span>
                <span className="fund-item__amount">
                  <span className="num">{toMillions(f.amountSAR)}</span> مليون
                </span>
              </div>
              <p className="fund-item__desc">{f.descAr}</p>
              <div className="fund-item__meta">
                <div>
                  <strong>الناتج التشغيلي:</strong> {f.outputAr}
                </div>
                <div>
                  <strong>بوابة الحوكمة:</strong> {f.governanceGateAr}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* افتراضات النموذج */}
      <SectionHeader
        kickerAr="افتراضات النموذج"
        titleAr={`افتراضات «${scenario.nameAr}»`}
        descAr={ASSUMPTIONS_LABEL_AR}
      />
      <div className="card">
        <ul className="assumptions">
          {scenario.assumptionNotesAr.map((n) => (
            <li key={n}>{n}</li>
          ))}
          <li>
            التوزيعات ونسبها وسنوات بدئها افتراضات نمذجة تخضع لقرارات الحوكمة
            وسياسة توزيعات تُعتمد لاحقاً.
          </li>
        </ul>
        <div style={{ marginTop: "1rem" }}>
          <DisclaimerBlock />
        </div>
      </div>
    </>
  );
}
