import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import SectionHeader from "@/components/shared/SectionHeader";
import RoomTabs from "@/components/rooms/RoomTabs";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";

export const metadata: Metadata = {
  title: "غرف أصحاب المصلحة — ELAN Group United",
};

export default function RoomsPage() {
  return (
    <>
      <Topbar
        titleAr="غرف أصحاب المصلحة"
        subtitleAr="ست غرف مخصصة — لكل طرف مؤشراته ووثائقه وإجراؤه التالي"
      />
      <SectionHeader
        kickerAr="الأدوار"
        titleAr="كل طرف يرى ما يخصه"
        descAr="المستثمر، المالية، الحوكمة، التشغيل، البيانات، والإيكوسيستم — كل غرفة تربط ملخصها التنفيذي بوحدات اللوحة والمخاطر والوثائق ذات الصلة."
      />
      <RoomTabs />
      <div style={{ marginTop: "1.5rem" }}>
        <DisclaimerBlock />
      </div>
    </>
  );
}
