"use client";

/**
 * وضع القرار — البنود المفتوحة، خطوات المراجعة، مسار مذكرة الشروط,
 * جاهزية غرفة البيانات، والإجراءات التالية.
 */

import Link from "next/link";
import { OPEN_ITEMS_AR, TERM_SHEET_PATH_DOC_IDS } from "@/data/decisionMap";
import { REVIEW_PATH } from "@/data/reviewPath";
import {
  DATA_ROOM_BUNDLES,
  DATA_ROOM_DOCUMENT_COUNT,
} from "@/data/dataRoomIndex";
import SectionHeader from "@/components/shared/SectionHeader";
import StatusBadge from "@/components/shared/StatusBadge";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";
import FinancialMetricCard from "@/components/dashboard/FinancialMetricCard";
import DocChips from "./DocChips";

export default function DecisionMode() {
  return (
    <div>
      {/* البنود المفتوحة */}
      <SectionHeader
        kickerAr="البنود المفتوحة"
        titleAr="ما الذي يقف بين الاطلاع والقرار؟"
        descAr="خمسة بنود مفتوحة — لكل بند جهة مسؤولة. لا قرار نهائي قبل إغلاقها عبر مسار المراجعة."
      />
      <div className="card">
        <ul className="open-items">
          {OPEN_ITEMS_AR.map((item, i) => (
            <li key={item.itemAr}>
              <span className="open-items__num num">{i + 1}</span>
              <span className="open-items__text">{item.itemAr}</span>
              <StatusBadge tone="gold" labelAr={item.ownerAr} />
            </li>
          ))}
        </ul>
      </div>

      {/* خطوات المراجعة المطلوبة */}
      <SectionHeader
        kickerAr="مسار المراجعة والقرار"
        titleAr="ثماني خطوات من الاطلاع إلى القرار"
      />
      <ol className="decision-steps">
        {REVIEW_PATH.map((s) => (
          <li key={s.step} className="decision-step">
            <span className="review-step__num num">{s.step}</span>
            <div>
              <div className="decision-step__title">{s.titleAr}</div>
              <div className="decision-step__desc">{s.descAr}</div>
            </div>
          </li>
        ))}
      </ol>

      {/* مسار مذكرة الشروط */}
      <SectionHeader
        kickerAr="مسار مذكرة الشروط"
        titleAr="من مخطط أولي إلى مذكرة غير ملزمة"
        descAr="ثلاث وثائق تحكم مسار مذكرة الشروط — كلها مسودات غير ملزمة حتى اكتمال العناية المستقلة."
      />
      <div className="card">
        <DocChips docIds={TERM_SHEET_PATH_DOC_IDS} />
        <p style={{ marginTop: "0.9rem", fontSize: "0.8rem", color: "var(--ink-on-dark-faint)" }}>
          أي صياغة ملزمة تأتي بعد الخطوة السابعة من مسار المراجعة (العناية
          المالية والقانونية والتشغيلية) لا قبلها.
        </p>
      </div>

      {/* جاهزية غرفة البيانات */}
      <SectionHeader
        kickerAr="جاهزية غرفة البيانات"
        titleAr="هل الأدلة جاهزة للمراجعة؟"
      />
      <div className="metric-grid">
        <FinancialMetricCard
          labelAr="الحزم المفهرسة"
          value={String(DATA_ROOM_BUNDLES.length)}
          unitAr="من 8"
          noteAr="كل الحزم مكتملة الفهرسة"
          accent
        />
        <FinancialMetricCard
          labelAr="الوثائق المفهرسة"
          value={String(DATA_ROOM_DOCUMENT_COUNT)}
          unitAr="وثيقة"
          noteAr="وفق الفهرس الرئيسي MASTER INDEX"
        />
        <FinancialMetricCard
          labelAr="حالة الوثائق"
          value="100"
          unitAr="% مسودة أولية"
          noteAr="تنتظر المراجعة المهنية المستقلة"
        />
        <FinancialMetricCard
          labelAr="مستوى الوصول"
          value="مقيد"
          unitAr=""
          noteAr="الفتح مشروط باتفاقية السرية"
        />
      </div>

      {/* الإجراءات التالية */}
      <SectionHeader kickerAr="الإجراء التالي" titleAr="ابدأ من هنا" />
      <div className="decision-actions">
        <Link href="/data-room" className="cta-button cta-button--primary">
          فتح غرفة البيانات والمستندات
        </Link>
        <Link href="/governance" className="cta-button">
          مراجعة حوكمة القرار والمخاطر
        </Link>
        <Link href="/data-room/doc/01-05" className="cta-button">
          مخطط مذكرة الشروط غير الملزمة
        </Link>
        <Link href="/data-room/doc/07-01" className="cta-button">
          نموذج اتفاقية السرية
        </Link>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <DisclaimerBlock />
      </div>
    </div>
  );
}
