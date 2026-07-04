"use client";

/** تبويبات الغرف الست */

import { useState } from "react";
import { STAKEHOLDER_ROOMS } from "@/data/stakeholderRooms";
import StakeholderRoomCard from "./StakeholderRoomCard";

export default function RoomTabs() {
  const [activeId, setActiveId] = useState(STAKEHOLDER_ROOMS[0].id);
  const active = STAKEHOLDER_ROOMS.find((r) => r.id === activeId)!;

  return (
    <div>
      <div className="room-tabs" role="tablist" aria-label="غرف أصحاب القرار والمصلحة">
        {STAKEHOLDER_ROOMS.map((room) => (
          <button
            key={room.id}
            role="tab"
            aria-selected={room.id === activeId}
            className={`room-tab${room.id === activeId ? " is-active" : ""}`}
            onClick={() => setActiveId(room.id)}
          >
            {room.titleAr}
          </button>
        ))}
      </div>
      <StakeholderRoomCard room={active} />
    </div>
  );
}
