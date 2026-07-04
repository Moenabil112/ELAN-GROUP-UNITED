import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import SectionHeader from "@/components/shared/SectionHeader";
import RiskMatrix from "@/components/risk/RiskMatrix";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";

export const metadata: Metadata = {
  title: "المخاطر والحوكمة — ELAN Group United",
};

export default function GovernancePage() {
  return (
    <>
      <Topbar
        titleAr="المخاطر والحوكمة"
        subtitleAr="ثماني فئات مخاطر — لكل خطر محفّز واستجابة حوكمية وإيقاع مراجعة"
      />
      <SectionHeader
        kickerAr="الانضباط"
        titleAr="المخاطر تُدار بالتصميم لا بالتمني"
        descAr="كل خطر موصول بصاحب المصلحة المسؤول عنه والمؤشر المالي الذي يتأثر به. لا صرف خارج البوابات، ولا توسع دون إثبات موثق."
      />
      <RiskMatrix />
      <div style={{ marginTop: "1.5rem" }}>
        <DisclaimerBlock />
      </div>
    </>
  );
}
