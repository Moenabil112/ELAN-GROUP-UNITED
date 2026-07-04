import type { DataRoomDocument } from "@/types/stakeholder";
import { ACCESS_REQUIRED_AR } from "@/data/dataRoom";
import StatusBadge from "@/components/shared/StatusBadge";

const STATUS_TONE: Record<string, "ok" | "warn" | "high"> = {
  "جاهز للمراجعة": "ok",
  "قيد الإعداد": "warn",
  "يتطلب تحديثاً": "high",
};

export default function DocumentCard({ doc }: { doc: DataRoomDocument }) {
  return (
    <article className="doc-card">
      <span className="doc-card__lock">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="5" y="10" width="14" height="10" rx="1.5" />
          <path d="M8 10V7a4 4 0 018 0v3" />
        </svg>
        {ACCESS_REQUIRED_AR}
      </span>
      <h3 className="doc-card__title">{doc.titleAr}</h3>
      <span className="doc-card__type">{doc.typeAr}</span>
      <p className="doc-card__purpose">{doc.purposeAr}</p>
      <StatusBadge tone={STATUS_TONE[doc.status]} labelAr={doc.status} />
    </article>
  );
}
