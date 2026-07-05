import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import SectionHeader from "@/components/shared/SectionHeader";
import DataRoomExplorer from "@/components/data-room/DataRoomExplorer";
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
        titleAr="مستكشف الحزم والوثائق"
        descAr="غرفة البيانات والمستندات هي طبقة مراجعة خاصة لا تعرض الملفات للعامة. ثماني حزم و53 وثيقة بحالة «مسودة أولية» ومستوى وصول «مراجعة مقيدة» — ابحث، صفِّ، وافتح أي وثيقة داخل الواجهة."
      />
      <DataRoomExplorer />
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
