/** مسارات الإيراد القابلة للتحقق — قنوات مشروطة لا دخلاً مضموناً */

export interface RevenueChannel {
  id: string;
  titleAr: string;
  /** ما الذي يدفع مقابله العميل */
  paysAr: string;
  /** طبيعة الإيراد */
  natureAr: "متكرر" | "قائم على المشاريع" | "هجين";
}

export const REVENUE_STATUS_AR = "قابل للتحقق عبر العقود والتنفيذ";

export const REVENUE_CHANNELS: RevenueChannel[] = [
  {
    id: "ops-fees",
    titleAr: "رسوم تشغيل وحوكمة",
    paysAr: "تشغيل برامج ذكاء التعدين والحوكمة وإدارتها المستمرة.",
    natureAr: "متكرر",
  },
  {
    id: "exploration",
    titleAr: "برامج استكشاف وتحليل",
    paysAr: "برامج استكشاف منظمة ودعم أعمال الحفر والتحليل الميداني.",
    natureAr: "قائم على المشاريع",
  },
  {
    id: "data-sensing",
    titleAr: "بيانات واستشعار عن بعد",
    paysAr: "تفسير البيانات الجيولوجية والخرائط ومخرجات التحليل.",
    natureAr: "هجين",
  },
  {
    id: "field-tech",
    titleAr: "تكامل أجهزة وحوسبة ميدانية",
    paysAr: "تجهيز المواقع بأجهزة القياس والحوسبة الميدانية وتهيئة التشغيل.",
    natureAr: "قائم على المشاريع",
  },
  {
    id: "field-services",
    titleAr: "خدمات ميدانية وتقارير",
    paysAr: "المسوحات الجوية والزيارات الميدانية وتنسيق العينات والتقارير الدورية.",
    natureAr: "هجين",
  },
];
