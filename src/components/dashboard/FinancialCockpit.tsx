"use client";

/**
 * غرفة القيادة المالية — الشاشة الأولى.
 * تبديل السيناريو يحدّث بطاقات المؤشرات والمخططات ومؤشر استرداد
 * رأس المال وشارات المخاطر.
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
import {
  REVENUE_CHANNELS,
  REVENUE_STATUS_AR,
} from "@/data/revenueChannels";
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
        titleAr="غرفة القيادة المالية لمنظومة إيلان"
        subtitleAr="نافذة خاصة لأصحاب القرار والمصلحة · ELAN Group United"
      />

      {/* إطار الدخول المعتمد — لا يتغير بالسيناريو */}
      <section className="cockpit-hero" aria-label="إطار الدخول">
        <div className="cockpit-hero__label">إطار الدخول المعتمد — الخيار B</div>
        <p
          style={{
            maxWidth: "68ch",
            fontSize: "0.9rem",
            color: "var(--ink-on-dark-soft)",
            marginBottom: "1.25rem",
          }}
        >
          تعرض هذه الغرفة كيف يتحول رأس مال قدره 100 مليون ريال إلى قدرة تشغيل
          تعدين ذكية، وحصة تفاوضية قدرها 30% في نافذة التشغيل المحلية، ضمن أفق
          مالي يمتد إلى 15 سنة.
        </p>
        <div className="metric-grid">
          <FinancialMetricCard
            labelAr="رأس مال دخول مرحلي"
            value="100"
            unitAr="مليون ريال"
            noteAr="يُنشر عبر بوابات حوكمة لا دفعة واحدة"
            accent
          />
          <FinancialMetricCard
            labelAr="حصة في نافذة التشغيل المحلية"
            value="30"
            unitAr="%"
            noteAr="حصة تفاوضية تخص النافذة المحلية حصراً"
          />
          <FinancialMetricCard
            labelAr="تقييم مرجعي بعد الاستثمار (Post-money) للمنظومة الأوسع"
            value="517"
            unitAr="مليون ريال"
            noteAr="مرجع حجمي فقط — لا يُعاد به احتساب الحصة"
          />
          <FinancialMetricCard
            labelAr="أفق النموذج المالي وبناء القيمة"
            value="15"
            unitAr="سنة"
            noteAr="أصل تشغيلي طويل الأجل"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <DisclaimerBlock />
        </div>
      </section>

      {/* مدخل القرار + تعريف إيلان */}
      <div className="chart-grid" style={{ marginTop: "1.25rem" }}>
        <div className="card">
          <span className="section-header__kicker">مدخل القرار الاستثماري</span>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginTop: "0.3rem" }}>
            لماذا هذه النافذة؟
          </h2>
          <p
            style={{
              marginTop: "0.6rem",
              fontSize: "0.88rem",
              color: "var(--ink-on-dark-soft)",
            }}
          >
            التعدين قطاع كثيف رأس المال، وقراراته المبكرة قد تستهلك الأموال قبل
            أن تتضح الصورة. صاحب القرار غير المتخصص لا ينقصه رأس المال، بل
            تنقصه رؤية قرار منظمة: أين تذهب الأموال، وما الذي يُبنى بها، ومتى
            يتوقف الصرف. هذه النافذة تمنحه تلك الرؤية قبل أي التزام — دخول
            استراتيجي محلي منضبط، لا فرصة عابرة.
          </p>
        </div>
        <div className="card">
          <span className="section-header__kicker">ما الذي تبنيه إيلان؟</span>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginTop: "0.3rem" }}>
            إيلان كمنظومة تشغيل تعدين ذكية
          </h2>
          <p
            style={{
              marginTop: "0.6rem",
              fontSize: "0.88rem",
              color: "var(--ink-on-dark-soft)",
            }}
          >
            لا تُعرض إيلان هنا كتطبيق أو واجهة تقنية منفصلة، بل كمنظومة تشغيل
            تعدين ذكية تربط قراءة الأرض، البيانات، الحوكمة، التشغيل الميداني،
            ومسارات الإيراد داخل غرفة قرار واحدة. الهدف هو مساعدة أصحاب القرار
            على فهم المخاطر، مراقبة رأس المال، وقياس التقدم قبل التوسع.
          </p>
        </div>
      </div>

      {/* محرك السيناريوهات — لاصق */}
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
            labelAr="حصة الشريك من التوزيعات (تراكمي)"
            value={toMillions(summary.cumulativeInvestorDistributionSAR)}
            unitAr="مليون ريال"
            noteAr="30% من توزيعات نافذة التشغيل المحلية"
          />
          <FinancialMetricCard
            labelAr="استرداد رأس المال — سنة نموذجية"
            value={summary.paybackYear ? String(summary.paybackYear) : "—"}
            unitAr={summary.paybackYear ? "من 15" : "خارج أفق النموذج"}
            noteAr="نتيجة سيناريو — ليست تاريخاً مضموناً"
          />
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.8rem" }}>
          <StatusBadge
            tone={validationIssues.length === 0 ? "ok" : "high"}
            labelAr={
              validationIssues.length === 0
                ? "اتساق النموذج: مُتحقق منه"
                : `اتساق النموذج: ${validationIssues.length} ملاحظات`
            }
          />
          <StatusBadge tone="warn" labelAr={`حالة التحقق: ${scenario.validationPaceAr}`} />
          <StatusBadge tone="neutral" labelAr="مسارات الإيراد مشروطة بالعقود والتنفيذ" />
        </div>
      </section>

      {/* لوحة القرار المالي */}
      <SectionHeader
        kickerAr="لوحة القرار المالي 15 سنة"
        titleAr="الإيرادات والتدفقات عبر أفق النموذج"
        descAr={`${scenario.nameAr}: ${scenario.descriptionAr}`}
      />
      <div className="chart-grid">
        <RevenueChart rows={summary.rows} />
        <InvestorDistributionChart rows={summary.rows} />
        <CashFlowChart rows={summary.rows} />
      </div>

      {/* استرداد رأس المال والحساسية */}
      <SectionHeader
        kickerAr="استرداد رأس المال"
        titleAr="مسار استرداد رأس المال ومقارنة السيناريوهات المالية"
        descAr="استرداد رأس المال لا يُعرض كتاريخ مضمون، بل كنتيجة سيناريو تعتمد على تحقق الإيرادات، انضباط التكاليف، سياسة التوزيعات، وسرعة التبني التشغيلي."
      />
      <div className="chart-grid">
        <PaybackIndicator summary={summary} horizonYears={C.horizonYears} />
        <SensitivityPanel />
      </div>

      {/* خريطة توظيف رأس المال */}
      <SectionHeader
        kickerAr="خريطة توظيف رأس المال"
        titleAr="كيف تتحول 100 مليون ريال إلى قدرة تشغيلية؟"
        descAr="لا يتم التعامل مع 100 مليون ريال كمبلغ مصروف على أدوات رقمية، بل كرأس مال مرحلي لبناء قدرة تشغيلية قابلة للقياس: فرق، حوكمة، بيانات، تكامل ميداني، استدامة، واحتياطي مخاطر."
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

      {/* مسارات الإيراد */}
      <SectionHeader
        kickerAr="مسارات الإيراد القابلة للتحقق"
        titleAr="كيف تتولد الإيرادات؟"
        descAr="تعرض هذه الطبقة مسارات الإيراد التي يمكن بناؤها عبر العقود والتنفيذ. لا تُعرض هذه المسارات كدخل مضمون، بل كقنوات قابلة للتحقق مع تقدم التشغيل واعتماد العملاء والبرامج."
      />
      <div className="fund-cards" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {REVENUE_CHANNELS.map((ch) => (
          <article key={ch.id} className="fund-item">
            <div className="fund-item__top">
              <span className="fund-item__title">{ch.titleAr}</span>
              <StatusBadge tone="neutral" labelAr={ch.natureAr} />
            </div>
            <p className="fund-item__desc">{ch.paysAr}</p>
            <div className="fund-item__meta">
              <StatusBadge tone="warn" labelAr={REVENUE_STATUS_AR} />
            </div>
          </article>
        ))}
      </div>

      {/* افتراضات النموذج */}
      <SectionHeader
        kickerAr="طبقة التعمق المالي"
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
