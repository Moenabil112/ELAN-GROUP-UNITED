import type { RiskItem } from "@/types/stakeholder";
import StatusBadge, { riskTone } from "@/components/shared/StatusBadge";

export default function RiskGovernanceCard({ risk }: { risk: RiskItem }) {
  return (
    <article className="risk-item">
      <div className="risk-item__head">
        <h3 className="risk-item__title">{risk.titleAr}</h3>
        <StatusBadge tone={riskTone(risk.level)} labelAr={`المستوى: ${risk.level}`} />
      </div>
      <div className="risk-item__row">
        <strong>المحفّز</strong>
        <span>{risk.triggerAr}</span>
      </div>
      <div className="risk-item__row">
        <strong>الاستجابة الحوكمية</strong>
        <span>{risk.responseAr}</span>
      </div>
      <div className="risk-item__row">
        <strong>المؤشر المالي المتأثر</strong>
        <span>{risk.financialMetricAr}</span>
      </div>
      <div className="risk-item__foot">
        <StatusBadge tone="gold" labelAr={risk.stakeholderAr} />
        <StatusBadge tone="neutral" labelAr={risk.cadenceAr} />
      </div>
    </article>
  );
}
