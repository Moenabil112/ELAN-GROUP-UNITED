"use client";

/** روابط الوثائق الداعمة — شرائح تحيل إلى صفحات الوثائق */

import Link from "next/link";
import { DATA_ROOM_ALL_DOCUMENTS } from "@/data/dataRoomIndex";

export default function DocChips({ docIds }: { docIds: string[] }) {
  const docs = docIds
    .map((id) => DATA_ROOM_ALL_DOCUMENTS.find((d) => d.id === id))
    .filter((d) => d !== undefined);
  return (
    <div className="doc-chips">
      {docs.map((doc) => (
        <Link key={doc.id} href={`/data-room/doc/${doc.id}`} className="doc-chip">
          <span className="doc-chip__num num">{doc.id}</span>
          {doc.titleAr}
        </Link>
      ))}
    </div>
  );
}
