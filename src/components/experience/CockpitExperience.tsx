"use client";

/** غلاف تجربة غرفة القيادة — يحمل حالة الوضع الثلاثي فقط */

import { useState } from "react";
import Topbar from "@/components/layout/Topbar";
import ModeSwitcher, { type ExperienceMode } from "./ModeSwitcher";
import UnderstandingMode from "./UnderstandingMode";
import VerificationMode from "./VerificationMode";
import DecisionMode from "./DecisionMode";

export default function CockpitExperience() {
  const [mode, setMode] = useState<ExperienceMode>("understanding");

  return (
    <>
      <Topbar
        titleAr="غرفة القيادة المالية لمنظومة إيلان"
        subtitleAr="نافذة خاصة لأصحاب القرار والمصلحة · ELAN Group United"
      />
      <ModeSwitcher mode={mode} onChange={setMode} />
      {mode === "understanding" ? (
        <UnderstandingMode onGoVerify={() => setMode("verification")} />
      ) : mode === "verification" ? (
        <VerificationMode />
      ) : (
        <DecisionMode />
      )}
    </>
  );
}
