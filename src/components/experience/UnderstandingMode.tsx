"use client";

/** وضع الفهم — سرد مبسط، مؤشرات رئيسية، ونظرة على حزم غرفة البيانات */

import Link from "next/link";
import { SCENARIO_SUMMARIES } from "@/data/financialModel";
import { DATA_ROOM_BUNDLES } from "@/data/dataRoomIndex";
import { toMillions } from "@/lib/formatters";
import FinancialMetricCard from "@/components/dashboard/FinancialMetricCard";
import SectionHeader from "@/components/shared/SectionHeader";
import DisclaimerBlock from "@/components/shared/DisclaimerBlock";

export default function UnderstandingMode({
  onGoVerify,
}: {
  onGoVerify: () => void;
}) {
  const base = SCENARIO_SUMMARIES.base;

  return (
    <div>
      {/* إطار الدخول */}
      <section className="cockpit-hero" aria-label="إطار الدخول">
        <div className="cockpit-hero__label">إطار الدخول المعتمد — الخيار B</div>
        <div className="metric-grid">
          <FinancialMetricCard
            labelAr="رأس مال دخول مرحلي"
            value="100"
            unitAr="مليون ريال"
            noteAr="يُنشر عبر بوابات حوكمة لا دفعة واحدة"
            accent
          />
          <FinancialMetricCard
            labelAr="حصة في نافذة التشغيل المحلية"
            value="30"
            unitAr="%"
            noteAr="حصة تفاوضية تخص النافذة المحلية حصراً"
          />
          <FinancialMetricCard
            labelAr="تقييم مرجعي بعد الاستثمار (Post-money) للمنظومة الأوسع"
            value="517"
            unitAr="مليون ريال"
            noteAr="مرجع حجمي فقط — لا يُعاد به احتساب الحصة"
          />
          <FinancialMetricCard
            labelAr="أفق النموذج المالي وبناء القيمة"
            value="15"
            unitAr="سنة"
            noteAr="أصل تشغيلي طويل الأجل"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <DisclaimerBlock />
        </div>
      </section>

      {/* السرد المبسط */}
      <div className="chart-grid" style={{ marginTop: "1.25rem" }}>
        <div className="card">
          <span className="section-header__kicker">مدخل القرار الاستثماري</span>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginTop: "0.3rem" }}>
            لماذا هذه النافذة؟
          </h2>
          <p style={{ marginTop: "0.6rem", fontSize: "0.88rem", color: "var(--ink-on-dark-soft)" }}>
            التعدين قطاع كثيف رأس المال، وقراراته المبكرة قد تستهلك الأموال قبل
            أن تتضح الصورة. صاحب القرار غير المتخصص لا ينقصه رأس المال، بل
            تنقصه رؤية قرار منظمة: أين تذهب الأموال، وما الذي يُبنى بها، ومتى
            يتوقف الصرف. هذه النافذة تمنحه تلك الرؤية قبل أي التزام.
          </p>
        </div>
        <div className="card">
          <span className="section-header__kicker">ما الذي تبنيه إيلان؟</span>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginTop: "0.3rem" }}>
            إيلان كمنظومة تشغيل تعدين ذكية
          </h2>
          <p style={{ marginTop: "0.6rem", fontSize: "0.88rem", color: "var(--ink-on-dark-soft)" }}>
            لا تُعرض إيلان هنا كتطبيق أو واجهة تقنية منفصلة، بل كمنظومة تشغيل
            تعدين ذكية تربط قراءة الأرض، البيانات، الحوكمة، التشغيل الميداني،
            ومسارات الإيراد داخل غرفة قرار واحدة تساعد أصحاب القرار على فهم
            المخاطر ومراقبة رأس المال وقياس التقدم قبل التوسع.
          </p>
        </div>
      </div>

      {/* المؤشرات الرئيسية — السيناريو الأساسي */}
      <SectionHeader
        kickerAr="المؤشرات الرئيسية"
        titleAr="قراءة سريعة وفق السيناريو الأساسي"
        descAr="افتراضات أولية قابلة للمراجعة — التفصيل الكامل والمقارنة بين السيناريوهات في وضع التحقق."
      />
      <div className="metric-grid">
        <FinancialMetricCard
          labelAr="الإيراد التراكمي (15 سنة)"
          value={toMillions(base.cumulativeRevenueSAR)}
          unitAr="مليون ريال"
        />
        <FinancialMetricCard
          labelAr="التدفق النقدي التراكمي"
          value={toMillions(base.cumulativeCashFlowSAR)}
          unitAr="مليون ريال"
        />
        <FinancialMetricCard
          labelAr="حصة الشريك من التوزيعات (تراكمي)"
          value={toMillions(base.cumulativeInvestorDistributionSAR)}
          unitAr="مليون ريال"
        />
        <FinancialMetricCard
          labelAr="استرداد رأس المال — سنة نموذجية"
          value={base.paybackYear ? String(base.paybackYear) : "—"}
          unitAr={base.paybackYear ? "من 15" : "خارج أفق النموذج"}
          noteAr="نتيجة سيناريو — ليست تاريخاً مضموناً"
        />
      </div>

      {/* نظرة على الحزم */}
      <SectionHeader
        kickerAr="نظرة على الحزم"
        titleAr="ثماني حزم تسند كل رقم"
        descAr="كل موضوع مالي يقابله ملف مرجعي في غرفة البيانات والمستندات — 53 وثيقة بمستوى وصول «مراجعة مقيدة»."
      />
      <div className="pkg-grid">
        {DATA_ROOM_BUNDLES.map((b) => (
          <Link key={b.bundleNumber} href="/data-room" className="pkg-card">
            <span className="bundle__num num">{b.bundleNumber}</span>
            <span className="pkg-card__title">{b.bundleTitleAr}</span>
            <span className="pkg-card__count">
              <span className="num">
                {b.documents.filter((d) => d.docNumber !== "00").length}
              </span>{" "}
              وثائق
            </span>
          </Link>
        ))}
      </div>

      <div className="mode-next">
        <p>
          فهمت الإطار؟ الخطوة التالية هي التحقق: طابق كل رقم مع أدلته
          وافتراضاته في لوحة القرار المالي الكاملة.
        </p>
        <button type="button" className="cta-button cta-button--primary" onClick={onGoVerify}>
          الانتقال إلى وضع التحقق
        </button>
      </div>
    </div>
  );
}
