/** شارة مستوى الوصول — تعرض الوجه العربي من قيمة الفهرس */

import type { AccessLevel } from "@/types/dataRoom";
import StatusBadge from "@/components/shared/StatusBadge";

/** "Controlled Review — مراجعة مقيدة" → "مراجعة مقيدة" */
export function accessAr(level: AccessLevel): string {
  const parts = level.split("—");
  return (parts[1] ?? parts[0]).trim();
}

export default function AccessLevelBadge({ level }: { level: AccessLevel }) {
  return <StatusBadge tone="neutral" labelAr={accessAr(level)} />;
}
