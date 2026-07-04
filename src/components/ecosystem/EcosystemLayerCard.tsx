"use client";

import type { EcosystemLayer } from "@/types/ecosystem";

export default function EcosystemLayerCard({
  layer,
  active,
  onSelect,
}: {
  layer: EcosystemLayer;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      className={`layer-chip${active ? " is-active" : ""}`}
      onClick={onSelect}
    >
      <span className="layer-chip__num num">{layer.num}</span>
      <span className="layer-chip__title">{layer.titleAr}</span>
    </button>
  );
}
