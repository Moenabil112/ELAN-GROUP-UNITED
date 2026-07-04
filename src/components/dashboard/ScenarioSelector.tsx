"use client";

import type { ScenarioId } from "@/types/finance";
import { SCENARIOS } from "@/data/financialModel";
import StatusBadge, { riskTone } from "@/components/shared/StatusBadge";

export default function ScenarioSelector({
  active,
  onChange,
  validationPaceAr,
  riskLevel,
}: {
  active: ScenarioId;
  onChange: (id: ScenarioId) => void;
  validationPaceAr: string;
  riskLevel: string;
}) {
  return (
    <div className="scenario-bar">
      <span className="scenario-bar__label">السيناريو المالي</span>
      <div className="scenario-tabs" role="tablist" aria-label="اختيار السيناريو">
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={active === s.id}
            className={`scenario-tab${active === s.id ? " is-active" : ""}`}
            onClick={() => onChange(s.id)}
          >
            {s.nameAr}
          </button>
        ))}
      </div>
      <div className="scenario-bar__meta">
        <StatusBadge tone={riskTone(riskLevel)} labelAr={`مستوى المخاطر: ${riskLevel}`} />
        <StatusBadge tone="neutral" labelAr={validationPaceAr} />
      </div>
    </div>
  );
}
