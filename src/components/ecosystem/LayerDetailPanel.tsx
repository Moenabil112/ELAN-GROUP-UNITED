"use client";

import type { EcosystemLayer } from "@/types/ecosystem";

const FIELDS: { key: keyof EcosystemLayer; labelAr: string }[] = [
  { key: "whatAr", labelAr: "ماذا تفعل" },
  { key: "dataAr", labelAr: "البيانات التي تستخدمها" },
  { key: "financialMetricAr", labelAr: "المؤشر المالي المتأثر" },
  { key: "riskReducedAr", labelAr: "الخطر الذي تقلله" },
  { key: "stakeholderAr", labelAr: "صاحب المصلحة المعني" },
  { key: "documentsAr", labelAr: "الوثائق والأدلة المطلوبة" },
];

export default function LayerDetailPanel({ layer }: { layer: EcosystemLayer }) {
  return (
    <div className="layer-detail" role="tabpanel">
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
        <span className="num" style={{ color: "var(--gold)", fontSize: "0.8rem" }}>
          {layer.num}
        </span>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{layer.titleAr}</h3>
      </div>
      <dl className="layer-detail__grid">
        {FIELDS.map((f) => (
          <div key={f.key} className="layer-detail__cell">
            <dt>{f.labelAr}</dt>
            <dd>{layer[f.key]}</dd>
          </div>
        ))}
      </dl>
      <div
        style={{
          marginTop: "1.1rem",
          paddingTop: "1rem",
          borderTop: "1px dashed var(--green-line)",
          fontSize: "0.82rem",
          color: "var(--ink-on-dark-soft)",
        }}
      >
        <strong style={{ color: "var(--gold)", fontSize: "0.72rem" }}>
          العلاقة بنموذج الخمس عشرة سنة:
        </strong>{" "}
        {layer.modelLinkAr}
      </div>
    </div>
  );
}
