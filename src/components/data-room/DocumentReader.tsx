"use client";

/**
 * قارئ الوثائق — لوح جانبي يفتح الوثيقة داخل الواجهة.
 * يجلب المحتوى من مسار ثابت مُولّد وقت البناء (/api/data-room/[id]).
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import type { DataRoomDocumentEntry } from "@/types/dataRoom";
import { DATA_ROOM_BUNDLES } from "@/data/dataRoomIndex";
import DocumentStatusBadge from "./DocumentStatusBadge";
import AccessLevelBadge from "./AccessLevelBadge";
import StatusBadge from "@/components/shared/StatusBadge";
import { PRIORITY_AR } from "./DocumentCard";

export default function DocumentReader({
  doc,
  onClose,
}: {
  doc: DataRoomDocumentEntry;
  onClose: () => void;
}) {
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const bundle = DATA_ROOM_BUNDLES.find(
    (b) => b.bundleNumber === doc.bundleNumber
  );

  useEffect(() => {
    let cancelled = false;
    setHtml(null);
    setError(false);
    fetch(`/api/data-room/${doc.id}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: { html: string }) => {
        if (!cancelled) setHtml(data.html);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [doc.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="reader" role="dialog" aria-modal="true" aria-label={doc.titleAr}>
      <div className="reader__backdrop" onClick={onClose} />
      <div className="reader__panel">
        <header className="reader__head">
          <div className="reader__titles">
            <span className="reader__bundle">
              الحزمة {doc.bundleNumber} — {bundle?.bundleTitleAr}
            </span>
            <h2>{doc.titleAr}</h2>
            <span className="reader__en num">{doc.title}</span>
          </div>
          <button
            type="button"
            className="reader__close"
            onClick={onClose}
            aria-label="إغلاق القارئ"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        <div className="reader__badges">
          <DocumentStatusBadge status={doc.status} />
          <AccessLevelBadge level={doc.accessLevel} />
          {doc.priority ? (
            <StatusBadge
              tone={doc.priority === "High" ? "high" : "neutral"}
              labelAr={PRIORITY_AR[doc.priority]}
            />
          ) : null}
          <Link href={`/data-room/doc/${doc.id}`} className="reader__standalone">
            فتح في صفحة مستقلة
          </Link>
        </div>

        <div className="reader__body">
          {error ? (
            <p className="reader__state">
              تعذر تحميل الوثيقة. حاول مرة أخرى أو افتحها في صفحة مستقلة.
            </p>
          ) : html === null ? (
            <p className="reader__state">جارٍ تحميل الوثيقة…</p>
          ) : (
            <article
              className="doc-content"
              dir="ltr"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>

        <footer className="reader__foot">
          الأرقام توضيحية ومشروطة بالمراجعة المهنية — مسودة أولية ضمن مراجعة مقيدة.
        </footer>
      </div>
    </div>
  );
}
