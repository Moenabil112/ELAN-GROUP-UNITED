import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import SectionHeader from "@/components/shared/SectionHeader";
import DataRoomGateway from "@/components/data-room/DataRoomGateway";
import ReviewPath from "@/components/data-room/ReviewPath";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";

export const metadata: Metadata = {
  title: "غرفة البيانات — ELAN Group United",
};

export default function DataRoomPage() {
  return (
    <>
      <Topbar
        titleAr="غرفة البيانات"
        subtitleAr="ثماني وثائق مرجعية خلف صلاحية وصول — الفتح يتطلب اتفاقية سرية"
      />
      <SectionHeader
        kickerAr="بوابة الوثائق"
        titleAr="التحقق قبل الالتزام"
        descAr="كل رقم في النموذج يقابله ملف مرجعي في هذه الغرفة. الوصول مضبوط وموثق، ولا يُفتح إلا ضمن مسار المراجعة الرسمي."
      />
      <DataRoomGateway />
      <SectionHeader
        kickerAr="العملية"
        titleAr="من الاطلاع إلى القرار"
      />
      <ReviewPath />
      <div style={{ marginTop: "1.5rem" }}>
        <DisclaimerBlock />
      </div>
    </>
  );
}
