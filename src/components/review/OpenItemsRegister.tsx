"use client";

/**
 * سجل النواقص ومسار الاستكمال — بنود مفتوحة موحدة عبر الحزم الثماني
 * مع عدّادات لكل فئة وتصفية بالفئة والحزمة.
 */

import { useMemo, useState } from "react";
import {
  OPEN_ITEMS,
  OPEN_ITEM_CATEGORIES,
  countByCategory,
  type OpenItemCategory,
} from "@/data/openItems";
import { DATA_ROOM_BUNDLES } from "@/data/dataRoomIndex";
import OpenItemCard from "./OpenItemCard";

export default function OpenItemsRegister({
  compact = false,
}: {
  /** عرض مضغوط (لوضع القرار): بلا مرشح الحزمة */
  compact?: boolean;
}) {
  const [category, setCategory] = useState<OpenItemCategory | "all">("all");
  const [bundle, setBundle] = useState<string>("all");

  const counts = useMemo(countByCategory, []);

  const items = OPEN_ITEMS.filter(
    (i) =>
      (category === "all" || i.category === category) &&
      (bundle === "all" || i.bundleNumber === bundle)
  );

  const coveredBundles = new Set(OPEN_ITEMS.map((i) => i.bundleNumber)).size;

  return (
    <div>
      {/* عدّادات الفئات — تعمل كمرشحات */}
      <div className="oi-summary">
        <button
          type="button"
          className={`oi-tile${category === "all" ? " is-active" : ""}`}
          onClick={() => setCategory("all")}
        >
          <span className="oi-tile__count num">{OPEN_ITEMS.length}</span>
          <span className="oi-tile__label">كل البنود</span>
          <span className="oi-tile__sub num">
            {coveredBundles}/8 حزم مغطاة
          </span>
        </button>
        {OPEN_ITEM_CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`oi-tile oi-tile--${c.tone}${category === c.id ? " is-active" : ""}`}
            onClick={() => setCategory(category === c.id ? "all" : c.id)}
          >
            <span className="oi-tile__count num">{counts[c.id]}</span>
            <span className="oi-tile__label">{c.labelAr}</span>
            <span className="oi-tile__sub num">{c.labelEn}</span>
          </button>
        ))}
      </div>

      {!compact ? (
        <div className="oi-bundle-filter">
          <label>
            <span>تصفية بالحزمة</span>
            <select value={bundle} onChange={(e) => setBundle(e.target.value)}>
              <option value="all">كل الحزم</option>
              {DATA_ROOM_BUNDLES.map((b) => (
                <option key={b.bundleNumber} value={b.bundleNumber}>
                  {b.bundleNumber} — {b.bundleTitleAr}
                </option>
              ))}
            </select>
          </label>
          <span className="oi-bundle-filter__count">
            <span className="num">{items.length}</span> بنود معروضة
          </span>
        </div>
      ) : null}

      {items.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "2rem" }}>
          لا بنود مطابقة لهذه التصفية.
        </div>
      ) : (
        <div className="oi-grid">
          {items.map((item) => (
            <OpenItemCard key={item.id} item={item} />
          ))}
        </div>
      )}

      <p className="oi-note">
        المالك والتاريخ المستهدف حقلان مبدئيان — يُعتمدان رسمياً مع مصفوفة
        الصلاحيات بعد توقيع اتفاقية السرية. إغلاق البنود شرط تقدم مسار
        المراجعة والقرار، ولا يُعد أي بند «جاهز للمراجعة» إقراراً بصحة محتواه
        قبل العناية المستقلة.
      </p>
    </div>
  );
}
