"use client";

/** مؤشر استرداد رأس المال — شريط سنوات 1–15 */

import type { ScenarioSummary } from "@/types/finance";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";

export default function PaybackIndicator({
  summary,
  horizonYears,
}: {
  summary: ScenarioSummary;
  horizonYears: number;
}) {
  const payback = summary.paybackYear;
  return (
    <div className="chart-card">
      <div className="chart-card__head">
        <h3 className="chart-card__title">استرداد رأس المال</h3>
        <span className="chart-card__sub">
          عبر حصة الشريك من التوزيعات — نتيجة سيناريو لا تاريخ مضمون
        </span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "var(--ink-on-dark-soft)" }}>
        {payback ? (
          <>
            وفق «{summary.nameAr}»، يبلغ تراكمي حصة الشريك من التوزيعات رأس مال
            الدخول حول{" "}
            <strong style={{ color: "var(--ink-on-dark)" }}>السنة {payback}</strong>{" "}
            من أفق النموذج.
          </>
        ) : (
          <>
            وفق «{summary.nameAr}»، لا يكتمل استرداد رأس المال عبر التوزيعات
            داخل أفق النموذج البالغ {horizonYears} سنة — وتبقى قيمة الأصل
            التشغيلي محل تقييم مستقل.
          </>
        )}
      </p>
      <div
        className="payback-strip"
        role="img"
        aria-label={
          payback
            ? `استرداد رأس المال النموذجي: السنة ${payback} من ${horizonYears}`
            : `لا يكتمل استرداد رأس المال ضمن ${horizonYears} سنة`
        }
      >
        {Array.from({ length: horizonYears }, (_, i) => {
          const y = i + 1;
          let cls = "";
          if (payback) {
            if (y < payback) cls = "is-pre";
            else if (y === payback) cls = "is-payback";
            else cls = "is-post";
          }
          return <span key={y} className={cls} title={`السنة ${y}`} />;
        })}
      </div>
      <div className="payback-years num">
        <span>1</span>
        <span>5</span>
        <span>10</span>
        <span>15</span>
      </div>
      <div style={{ marginTop: "0.8rem" }}>
        <DisclaimerBlock compact />
      </div>
    </div>
  );
}
