"use client";

/** بطاقة بند مفتوح في سجل النواقص */

import Link from "next/link";
import type { OpenItem } from "@/data/openItems";
import { OPEN_ITEM_CATEGORIES } from "@/data/openItems";
import { DATA_ROOM_ALL_DOCUMENTS, DATA_ROOM_BUNDLES } from "@/data/dataRoomIndex";
import StatusBadge from "@/components/shared/StatusBadge";

const PRIORITY_TONE = {
  عالية: "high",
  متوسطة: "warn",
  قياسية: "neutral",
} as const;

const STATUS_TONE = {
  مفتوح: "high",
  "قيد المعالجة": "warn",
  مغلق: "ok",
} as const;

export default function OpenItemCard({ item }: { item: OpenItem }) {
  const category = OPEN_ITEM_CATEGORIES.find((c) => c.id === item.category)!;
  const bundle = DATA_ROOM_BUNDLES.find(
    (b) => b.bundleNumber === item.bundleNumber
  );
  const doc = DATA_ROOM_ALL_DOCUMENTS.find((d) => d.id === item.docId);

  return (
    <article className="oi-card">
      <div className="oi-card__head">
        <StatusBadge tone={category.tone} labelAr={category.labelAr} />
        <span className="oi-card__id num">{item.id}</span>
      </div>

      <div className="oi-card__ref">
        <span className="oi-card__bundle">
          الحزمة {item.bundleNumber} — {bundle?.bundleTitleAr}
        </span>
        {doc ? (
          <Link href={`/data-room/doc/${doc.id}`} className="doc-chip">
            <span className="doc-chip__num num">{doc.id}</span>
            {doc.titleAr}
          </Link>
        ) : null}
      </div>

      <div className="oi-card__row">
        <strong>المسألة</strong>
        <span>{item.issueAr}</span>
      </div>
      <div className="oi-card__row">
        <strong>الإجراء المطلوب</strong>
        <span>{item.actionAr}</span>
      </div>
      <div className="oi-card__row">
        <strong>المالك</strong>
        <span>{item.ownerAr}</span>
      </div>
      <div className="oi-card__row">
        <strong>التاريخ المستهدف</strong>
        <span>{item.targetDateAr}</span>
      </div>

      <div className="oi-card__foot">
        <StatusBadge
          tone={PRIORITY_TONE[item.priority]}
          labelAr={`الأولوية: ${item.priority}`}
        />
        <StatusBadge tone={STATUS_TONE[item.status]} labelAr={item.status} />
      </div>
    </article>
  );
}
