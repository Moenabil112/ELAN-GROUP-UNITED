"use client";

/** محوّل أوضاع غرفة القيادة: الفهم → التحقق → القرار */

export type ExperienceMode = "understanding" | "verification" | "decision";

export const MODES: {
  id: ExperienceMode;
  labelAr: string;
  descAr: string;
}[] = [
  {
    id: "understanding",
    labelAr: "وضع الفهم",
    descAr: "السرد المبسط والمؤشرات الرئيسية ونظرة على الحزم",
  },
  {
    id: "verification",
    labelAr: "وضع التحقق",
    descAr: "لوحة القرار المالي كاملة مع الأدلة والافتراضات",
  },
  {
    id: "decision",
    labelAr: "وضع القرار",
    descAr: "البنود المفتوحة ومسار المراجعة ومذكرة الشروط",
  },
];

export default function ModeSwitcher({
  mode,
  onChange,
}: {
  mode: ExperienceMode;
  onChange: (mode: ExperienceMode) => void;
}) {
  const active = MODES.find((m) => m.id === mode)!;
  return (
    <div className="mode-switch">
      <div className="mode-switch__tabs" role="tablist" aria-label="وضع العرض">
        {MODES.map((m, i) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={mode === m.id}
            className={`mode-switch__tab${mode === m.id ? " is-active" : ""}`}
            onClick={() => onChange(m.id)}
          >
            <span className="mode-switch__step num">{i + 1}</span>
            {m.labelAr}
          </button>
        ))}
      </div>
      <p className="mode-switch__desc">{active.descAr}</p>
    </div>
  );
}
