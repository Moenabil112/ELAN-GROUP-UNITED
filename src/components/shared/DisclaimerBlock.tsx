export const MAIN_DISCLAIMER_AR =
  "جميع الأرقام المعروضة في هذه النافذة توضيحية ومشتقة من نموذج عمل أولي، ولا تمثل ضمانًا أو عرضًا ملزمًا أو دعوة استثمار عامة. أي قرار استثماري يحتاج إلى مراجعة مالية وقانونية وتشغيلية وفنية مستقلة.";

export const COMPACT_DISCLAIMER_AR =
  "الأرقام توضيحية ومشروطة بالمراجعة المهنية.";

export default function DisclaimerBlock({
  compact = false,
  textAr,
}: {
  compact?: boolean;
  textAr?: string;
}) {
  const text = textAr ?? (compact ? COMPACT_DISCLAIMER_AR : MAIN_DISCLAIMER_AR);
  return (
    <p className={`disclaimer${compact ? " disclaimer--compact" : ""}`} role="note">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5M12 16.5v.5" />
      </svg>
      <span>{text}</span>
    </p>
  );
}
