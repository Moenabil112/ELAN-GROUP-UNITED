"use client";

/** مؤشر سنة الاسترداد النموذجية — شريط سنوات 1–15 */

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
        <h3 className="chart-card__title">سنة الاسترداد النموذجية</h3>
        <span className="chart-card__sub">
          استرداد رأس المال عبر التوزيعات — نتيجة سيناريو لا وعد
        </span>
      </div>
      <p style={{ fontSize: "0.85rem", color: "var(--ink-on-dark-soft)" }}>
        {payback ? (
          <>
            وفق «{summary.nameAr}»، يبلغ تراكمي توزيعات المستثمر رأس مال الدخول
            حول <strong style={{ color: "var(--ink-on-dark)" }}>السنة {payback}</strong>{" "}
            من أفق النموذج.
          </>
        ) : (
          <>
            وفق «{summary.nameAr}»، لا يكتمل الاسترداد عبر التوزيعات داخل أفق
            النموذج البالغ {horizonYears} سنة — وتبقى القيمة في الأصل التشغيلي
            محل تقييم مستقل.
          </>
        )}
      </p>
      <div
        className="payback-strip"
        role="img"
        aria-label={
          payback
            ? `سنة الاسترداد النموذجية: السنة ${payback} من ${horizonYears}`
            : `لا استرداد نموذجي ضمن ${horizonYears} سنة`
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
