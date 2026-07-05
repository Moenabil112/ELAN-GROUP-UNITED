"use client";

/**
 * وضع التحقق — خريطة القرار (موضوع مالي ← أدلة ← افتراضات ← حالة مراجعة)
 * ثم لوحة القرار المالي الكاملة بمخططاتها.
 */

import { DECISION_TOPICS } from "@/data/decisionMap";
import SectionHeader from "@/components/shared/SectionHeader";
import StatusBadge from "@/components/shared/StatusBadge";
import FinancialCockpit from "@/components/dashboard/FinancialCockpit";
import DocChips from "./DocChips";

export default function VerificationMode() {
  return (
    <div>
      <SectionHeader
        kickerAr="خريطة القرار"
        titleAr="كل موضوع مالي وأدلته"
        descAr="ثمانية موضوعات تغطي القرار كاملاً — لكل موضوع افتراضاته الجوهرية ووثائقه الداعمة في غرفة البيانات وحالة مراجعته وإجراؤه التالي."
      />
      <div className="dmap-grid">
        {DECISION_TOPICS.map((topic) => (
          <article key={topic.id} className="dmap-card">
            <h3 className="dmap-card__title">{topic.titleAr}</h3>
            <p className="dmap-card__summary">{topic.summaryAr}</p>
            <div className="dmap-card__block">
              <span className="dmap-card__label">الافتراضات محل التحقق</span>
              <ul>
                {topic.assumptionsAr.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="dmap-card__block">
              <span className="dmap-card__label">الوثائق الداعمة</span>
              <DocChips docIds={topic.docIds} />
            </div>
            <div className="dmap-card__foot">
              <StatusBadge tone="warn" labelAr={topic.reviewStatusAr} />
              <span className="dmap-card__action">
                <strong>الإجراء التالي:</strong> {topic.reviewActionAr}
              </span>
            </div>
          </article>
        ))}
      </div>

      <SectionHeader
        kickerAr="لوحة القرار المالي 15 سنة"
        titleAr="اللوحة الكاملة — بدّل السيناريو وطابق الأرقام"
        descAr="كل مخرج في اللوحة أدناه يقابله ملف مرجعي في خريطة القرار أعلاه."
      />
      <FinancialCockpit />
    </div>
  );
}
