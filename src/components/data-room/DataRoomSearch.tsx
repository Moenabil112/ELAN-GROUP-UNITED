"use client";

/** شريط البحث والتصفية — الحزمة، الحالة، مستوى الوصول، أولوية المراجعة */

import { DATA_ROOM_BUNDLES } from "@/data/dataRoomIndex";
import { PRIORITY_AR } from "./DocumentCard";

export interface DataRoomFilters {
  query: string;
  bundle: string; // "all" أو رقم الحزمة
  status: string; // "all" أو قيمة الحالة
  access: string; // "all" أو مستوى الوصول
  priority: string; // "all" | High | Medium | Standard
}

export const EMPTY_FILTERS: DataRoomFilters = {
  query: "",
  bundle: "all",
  status: "all",
  access: "all",
  priority: "all",
};

export default function DataRoomSearch({
  filters,
  onChange,
  statusOptions,
  accessOptions,
  resultCount,
}: {
  filters: DataRoomFilters;
  onChange: (next: DataRoomFilters) => void;
  statusOptions: string[];
  accessOptions: string[];
  resultCount: number;
}) {
  const set = (patch: Partial<DataRoomFilters>) =>
    onChange({ ...filters, ...patch });

  return (
    <div className="dre-toolbar" role="search">
      <div className="dre-toolbar__search">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4-4" />
        </svg>
        <input
          type="search"
          placeholder="ابحث في العناوين والأغراض…"
          value={filters.query}
          onChange={(e) => set({ query: e.target.value })}
          aria-label="بحث في وثائق غرفة البيانات"
        />
      </div>

      <label className="dre-toolbar__filter">
        <span>الحزمة</span>
        <select
          value={filters.bundle}
          onChange={(e) => set({ bundle: e.target.value })}
        >
          <option value="all">كل الحزم</option>
          {DATA_ROOM_BUNDLES.map((b) => (
            <option key={b.bundleNumber} value={b.bundleNumber}>
              {b.bundleNumber} — {b.bundleTitleAr}
            </option>
          ))}
        </select>
      </label>

      <label className="dre-toolbar__filter">
        <span>الحالة</span>
        <select
          value={filters.status}
          onChange={(e) => set({ status: e.target.value })}
        >
          <option value="all">كل الحالات</option>
          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {s.split("—")[1]?.trim() ?? s}
            </option>
          ))}
        </select>
      </label>

      <label className="dre-toolbar__filter">
        <span>مستوى الوصول</span>
        <select
          value={filters.access}
          onChange={(e) => set({ access: e.target.value })}
        >
          <option value="all">كل المستويات</option>
          {accessOptions.map((a) => (
            <option key={a} value={a}>
              {a.split("—")[1]?.trim() ?? a}
            </option>
          ))}
        </select>
      </label>

      <label className="dre-toolbar__filter">
        <span>أولوية المراجعة</span>
        <select
          value={filters.priority}
          onChange={(e) => set({ priority: e.target.value })}
        >
          <option value="all">كل الأولويات</option>
          {(["High", "Medium", "Standard"] as const).map((p) => (
            <option key={p} value={p}>
              {PRIORITY_AR[p]}
            </option>
          ))}
        </select>
      </label>

      <span className="dre-toolbar__count">
        <span className="num">{resultCount}</span> وثيقة
      </span>
    </div>
  );
}
