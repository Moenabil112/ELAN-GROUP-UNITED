"use client";

/** خريطة الطبقات الثماني — اختيار طبقة يعرض لوحة التفاصيل */

import { useState } from "react";
import { ECOSYSTEM_LAYERS } from "@/data/ecosystemLayers";
import EcosystemLayerCard from "./EcosystemLayerCard";
import LayerDetailPanel from "./LayerDetailPanel";

export default function EcosystemLayerMap() {
  const [activeId, setActiveId] = useState(ECOSYSTEM_LAYERS[0].id);
  const active = ECOSYSTEM_LAYERS.find((l) => l.id === activeId)!;

  return (
    <div>
      <div className="layer-grid" role="tablist" aria-label="طبقات المنظومة">
        {ECOSYSTEM_LAYERS.map((layer) => (
          <EcosystemLayerCard
            key={layer.id}
            layer={layer}
            active={layer.id === activeId}
            onSelect={() => setActiveId(layer.id)}
          />
        ))}
      </div>
      <LayerDetailPanel layer={active} />
    </div>
  );
}
