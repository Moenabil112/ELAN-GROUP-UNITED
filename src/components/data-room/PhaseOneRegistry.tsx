/** سجل المرحلة الأولى — ثماني حزم و53 وثيقة مفهرسة من MASTER_INDEX */

import Link from "next/link";
import {
  DATA_ROOM_BUNDLES,
  DATA_ROOM_DOCUMENT_COUNT,
  DATA_ROOM_VERSION,
} from "@/data/dataRoomIndex";
import StatusBadge from "@/components/shared/StatusBadge";

const PRIORITY_TONE = {
  High: "high",
  Medium: "warn",
  Standard: "neutral",
} as const;

const PRIORITY_AR = {
  High: "أولوية عالية",
  Medium: "أولوية متوسطة",
  Standard: "أولوية قياسية",
} as const;

export default function PhaseOneRegistry() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "1.25rem",
        }}
      >
        <StatusBadge tone="gold" labelAr={`${DATA_ROOM_BUNDLES.length} حزم`} />
        <StatusBadge tone="gold" labelAr={`${DATA_ROOM_DOCUMENT_COUNT} وثيقة`} />
        <StatusBadge tone="warn" labelAr="الحالة: مسودة أولية" />
        <StatusBadge tone="neutral" labelAr="الوصول: مراجعة مقيدة" />
        <StatusBadge tone="neutral" labelAr={DATA_ROOM_VERSION} />
      </div>

      <div className="bundle-list">
        {DATA_ROOM_BUNDLES.map((bundle) => (
          <details key={bundle.bundleNumber} className="bundle">
            <summary>
              <span className="bundle__num num">{bundle.bundleNumber}</span>
              <span className="bundle__titles">
                <span className="bundle__title-ar">{bundle.bundleTitleAr}</span>
                <span className="bundle__title-en num">{bundle.bundleTitle}</span>
              </span>
              <span className="bundle__count">
                <span className="num">
                  {bundle.documents.filter((d) => d.docNumber !== "00").length}
                </span>{" "}
                وثائق
              </span>
              <span className="bundle__chevron" aria-hidden="true" />
            </summary>
            <div className="bundle__body">
              <p className="bundle__rel">
                <strong>العلاقة بمسار القرار:</strong> {bundle.relationshipAr}
              </p>
              <ul className="doc-list">
                {bundle.documents.map((doc) => (
                  <li key={doc.id}>
                    <Link href={`/data-room/doc/${doc.id}`} className="doc-link">
                      <span className="doc-link__num num">
                        {doc.docNumber === "00" ? "—" : doc.docNumber}
                      </span>
                      <span className="doc-link__titles">
                        <span className="doc-link__ar">{doc.titleAr}</span>
                        <span className="doc-link__en num">{doc.title}</span>
                      </span>
                      <span className="doc-link__meta">
                        {doc.priority ? (
                          <StatusBadge
                            tone={PRIORITY_TONE[doc.priority]}
                            labelAr={PRIORITY_AR[doc.priority]}
                          />
                        ) : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
