"use client";

/** قسم حزمة داخل المستكشف — ترويسة الحزمة وشبكة بطاقات وثائقها */

import type { DataRoomBundle, DataRoomDocumentEntry } from "@/types/dataRoom";
import DocumentCard from "./DocumentCard";

export default function BundleSection({
  bundle,
  documents,
  onOpen,
}: {
  bundle: DataRoomBundle;
  /** الوثائق بعد التصفية — قد تكون أقل من وثائق الحزمة كاملة */
  documents: DataRoomDocumentEntry[];
  onOpen: (id: string) => void;
}) {
  return (
    <section className="dre-bundle" aria-label={bundle.bundleTitleAr}>
      <header className="dre-bundle__head">
        <span className="bundle__num num">{bundle.bundleNumber}</span>
        <div className="dre-bundle__titles">
          <h3>{bundle.bundleTitleAr}</h3>
          <span className="num">{bundle.bundleTitle}</span>
        </div>
        <span className="dre-bundle__count">
          <span className="num">{documents.length}</span> من{" "}
          <span className="num">{bundle.documents.length}</span> وثائق
        </span>
      </header>
      <p className="dre-bundle__rel">{bundle.relationshipAr}</p>
      <div className="dre-grid">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}
