"use client";

/**
 * مستكشف غرفة البيانات والمستندات — الحزم الثماني كأقسام تفاعلية،
 * مع بحث وتصفية وفتح الوثائق داخل الواجهة عبر القارئ الجانبي.
 */

import { useMemo, useState } from "react";
import {
  DATA_ROOM_BUNDLES,
  DATA_ROOM_ALL_DOCUMENTS,
  DATA_ROOM_VERSION,
} from "@/data/dataRoomIndex";
import type { DataRoomDocumentEntry } from "@/types/dataRoom";
import StatusBadge from "@/components/shared/StatusBadge";
import DataRoomSearch, { EMPTY_FILTERS, type DataRoomFilters } from "./DataRoomSearch";
import BundleSection from "./BundleSection";
import DocumentReader from "./DocumentReader";

function matches(doc: DataRoomDocumentEntry, f: DataRoomFilters): boolean {
  if (f.bundle !== "all" && doc.bundleNumber !== f.bundle) return false;
  if (f.status !== "all" && doc.status !== f.status) return false;
  if (f.access !== "all" && doc.accessLevel !== f.access) return false;
  if (f.priority !== "all" && doc.priority !== f.priority) return false;
  if (f.query.trim()) {
    const q = f.query.trim().toLowerCase();
    const haystack =
      `${doc.titleAr} ${doc.title} ${doc.purpose}`.toLowerCase();
    if (!haystack.includes(q)) return false;
  }
  return true;
}

export default function DataRoomExplorer() {
  const [filters, setFilters] = useState<DataRoomFilters>(EMPTY_FILTERS);
  const [openId, setOpenId] = useState<string | null>(null);

  const statusOptions = useMemo(
    () => [...new Set(DATA_ROOM_ALL_DOCUMENTS.map((d) => d.status))],
    []
  );
  const accessOptions = useMemo(
    () => [...new Set(DATA_ROOM_ALL_DOCUMENTS.map((d) => d.accessLevel))],
    []
  );

  const filteredByBundle = useMemo(
    () =>
      DATA_ROOM_BUNDLES.map((bundle) => ({
        bundle,
        documents: bundle.documents.filter((d) => matches(d, filters)),
      })),
    [filters]
  );

  const resultCount = filteredByBundle.reduce(
    (s, b) => s + b.documents.length,
    0
  );

  const openDoc = openId
    ? DATA_ROOM_ALL_DOCUMENTS.find((d) => d.id === openId) ?? null
    : null;

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <StatusBadge tone="gold" labelAr={`${DATA_ROOM_BUNDLES.length} حزم`} />
        <StatusBadge
          tone="gold"
          labelAr={`${DATA_ROOM_ALL_DOCUMENTS.filter((d) => d.docNumber !== "00").length} وثيقة`}
        />
        <StatusBadge tone="neutral" labelAr={DATA_ROOM_VERSION} />
      </div>

      <DataRoomSearch
        filters={filters}
        onChange={setFilters}
        statusOptions={statusOptions}
        accessOptions={accessOptions}
        resultCount={resultCount}
      />

      {resultCount === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "2.5rem" }}>
          لا نتائج مطابقة — عدّل البحث أو المرشحات.
        </div>
      ) : (
        filteredByBundle
          .filter((b) => b.documents.length > 0)
          .map(({ bundle, documents }) => (
            <BundleSection
              key={bundle.bundleNumber}
              bundle={bundle}
              documents={documents}
              onOpen={setOpenId}
            />
          ))
      )}

      {openDoc ? (
        <DocumentReader doc={openDoc} onClose={() => setOpenId(null)} />
      ) : null}
    </div>
  );
}
