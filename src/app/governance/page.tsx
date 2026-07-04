import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import SectionHeader from "@/components/shared/SectionHeader";
import RiskMatrix from "@/components/risk/RiskMatrix";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";

export const metadata: Metadata = {
  title: "حوكمة القرار والمخاطر — ELAN Group United",
};

export default function GovernancePage() {
  return (
    <>
      <Topbar
        titleAr="حوكمة القرار والمخاطر"
        subtitleAr="ثماني فئات مخاطر — لكل خطر محفّز واستجابة حوكمية وإيقاع مراجعة"
      />
      <SectionHeader
        kickerAr="ضوابط رأس المال والمخاطر"
        titleAr="المخاطر وضوابطها — بالتصميم لا بالتمني"
        descAr="لا تهدف هذه الطبقة إلى تخويف صاحب القرار، بل إلى توضيح أين قد تظهر المخاطر، وما الضوابط التي تقلل أثرها على رأس المال والقرار. كل خطر موصول بالغرفة المسؤولة عنه والمؤشر المالي الذي يتأثر به."
      />
      <RiskMatrix />
      <div style={{ marginTop: "1.5rem" }}>
        <DisclaimerBlock />
      </div>
    </>
  );
}
