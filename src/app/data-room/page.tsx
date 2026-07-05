import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import SectionHeader from "@/components/shared/SectionHeader";
import DataRoomGateway from "@/components/data-room/DataRoomGateway";
import PhaseOneRegistry from "@/components/data-room/PhaseOneRegistry";
import ReviewPath from "@/components/data-room/ReviewPath";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";

export const metadata: Metadata = {
  title: "غرفة البيانات والمستندات — ELAN Group United",
};

export default function DataRoomPage() {
  return (
    <>
      <Topbar
        titleAr="غرفة البيانات والمستندات"
        subtitleAr="طبقة مراجعة خاصة — الفتح يتطلب اتفاقية سرية وصلاحية معتمدة"
      />
      <SectionHeader
        kickerAr="طبقة التعمق المالي"
        titleAr="التحقق قبل الالتزام"
        descAr="غرفة البيانات والمستندات هي طبقة مراجعة خاصة لا تعرض الملفات للعامة. يتم من خلالها تنظيم النموذج المالي، الافتراضات، سجل المخاطر، ملحق استخدام رأس المال، ومذكرة الشروط غير الملزمة."
      />
      <DataRoomGateway />
      <SectionHeader
        kickerAr="سجل المرحلة الأولى"
        titleAr="فهرس الحزم والوثائق"
        descAr="ثماني حزم و53 وثيقة مفهرسة من الفهرس الرئيسي (MASTER INDEX). جميع الوثائق بحالة «مسودة أولية» وبمستوى وصول «مراجعة مقيدة» — تُفتح للاطلاع من داخل هذه النافذة الخاصة."
      />
      <PhaseOneRegistry />
      <SectionHeader
        kickerAr="مسار المراجعة والقرار"
        titleAr="من الاطلاع إلى القرار"
      />
      <ReviewPath />
      <div style={{ marginTop: "1.5rem" }}>
        <DisclaimerBlock />
      </div>
    </>
  );
}
