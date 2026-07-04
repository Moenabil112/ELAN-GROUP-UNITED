import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import SectionHeader from "@/components/shared/SectionHeader";
import EcosystemLayerMap from "@/components/ecosystem/EcosystemLayerMap";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";

export const metadata: Metadata = { title: "الإيكوسيستم — ELAN Group United" };

export default function EcosystemPage() {
  return (
    <>
      <Topbar
        titleAr="خريطة طبقات المنظومة"
        subtitleAr="ثماني طبقات تشغيلية مترابطة — كل طبقة موصولة بمؤشر مالي وخطر تقلله"
      />
      <SectionHeader
        kickerAr="بنية المنظومة"
        titleAr="من عقل الاستكشاف إلى قنوات الإيراد"
        descAr="اختر أي طبقة لعرض دورها وبياناتها ومؤشرها المالي وعلاقتها بنموذج الخمس عشرة سنة. نافذة التشغيل المحلية جزء من منظومة أوسع تقييمها المرجعي Post-money يبلغ 517 مليون ريال — مرجع حجمي فقط."
      />
      <EcosystemLayerMap />
      <div style={{ marginTop: "1.5rem" }}>
        <DisclaimerBlock />
      </div>
    </>
  );
}
