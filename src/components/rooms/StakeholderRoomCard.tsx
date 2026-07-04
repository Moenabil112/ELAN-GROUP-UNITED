"use client";

/** لوحة غرفة صاحب مصلحة واحدة */

import type { StakeholderRoom } from "@/types/stakeholder";
import FinancialMetricCard from "@/components/dashboard/FinancialMetricCard";

export default function StakeholderRoomCard({ room }: { room: StakeholderRoom }) {
  return (
    <div className="room-panel" role="tabpanel">
      <div className="card">
        <span
          style={{
            fontSize: "0.72rem",
            fontWeight: 600,
            color: "var(--gold)",
          }}
        >
          {room.focusAr}
        </span>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--ink-on-dark-soft)" }}>
          {room.summaryAr}
        </p>
      </div>

      <div className="room-kpis">
        {room.kpis.map((k) => (
          <FinancialMetricCard
            key={k.labelAr}
            labelAr={k.labelAr}
            value={k.value}
            unitAr={k.unitAr}
            noteAr={k.noteAr}
          />
        ))}
      </div>

      <div className="card">
        <div className="room-lists">
          <div className="room-list">
            <h4>وحدات اللوحة المرتبطة</h4>
            <ul>
              {room.linkedModulesAr.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="room-list">
            <h4>المخاطر ذات الصلة</h4>
            <ul>
              {room.risksAr.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="room-list">
            <h4>الوثائق المطلوبة</h4>
            <ul>
              {room.documentsAr.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="room-next">
        <div>
          <span className="room-next__label">الإجراء التالي</span>
          <div className="room-next__action">{room.nextActionAr}</div>
        </div>
      </div>
    </div>
  );
}
