"use client";

/** بطاقة وثيقة في مستكشف غرفة البيانات */

import type { DataRoomDocumentEntry } from "@/types/dataRoom";
import StatusBadge from "@/components/shared/StatusBadge";
import DocumentStatusBadge from "./DocumentStatusBadge";
import AccessLevelBadge from "./AccessLevelBadge";

export const PRIORITY_AR: Record<string, string> = {
  High: "أولوية عالية",
  Medium: "أولوية متوسطة",
  Standard: "أولوية قياسية",
};

const PRIORITY_TONE = {
  High: "high",
  Medium: "warn",
  Standard: "neutral",
} as const;

export default function DocumentCard({
  doc,
  onOpen,
}: {
  doc: DataRoomDocumentEntry;
  onOpen: (id: string) => void;
}) {
  return (
    <article className="dre-card">
      <div className="dre-card__num-row">
        <span className="dre-card__num num">
          {doc.bundleNumber}·{doc.docNumber}
        </span>
        {doc.priority ? (
          <StatusBadge
            tone={PRIORITY_TONE[doc.priority]}
            labelAr={PRIORITY_AR[doc.priority]}
          />
        ) : (
          <StatusBadge tone="neutral" labelAr="دليل الحزمة" />
        )}
      </div>
      <h4 className="dre-card__title-ar">{doc.titleAr}</h4>
      <p className="dre-card__title-en num">{doc.title}</p>
      <p className="dre-card__purpose">{doc.purpose}</p>
      <div className="dre-card__badges">
        <DocumentStatusBadge status={doc.status} />
        <AccessLevelBadge level={doc.accessLevel} />
      </div>
      <button
        type="button"
        className="dre-card__open"
        onClick={() => onOpen(doc.id)}
      >
        فتح الوثيقة
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 5l-7 7 7 7" />
        </svg>
      </button>
    </article>
  );
}
