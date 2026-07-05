/** شارة حالة الوثيقة — تعرض الوجه العربي من قيمة الفهرس */

import type { DocumentStatus } from "@/types/dataRoom";
import StatusBadge from "@/components/shared/StatusBadge";

/** "Initial Draft — مسودة أولية" → "مسودة أولية" */
export function statusAr(status: DocumentStatus): string {
  const parts = status.split("—");
  return (parts[1] ?? parts[0]).trim();
}

export default function DocumentStatusBadge({
  status,
}: {
  status: DocumentStatus;
}) {
  return <StatusBadge tone="warn" labelAr={statusAr(status)} />;
}
