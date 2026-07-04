/** خريطة توزيع رأس المال — المجموع 100 مليون ريال (يُتحقق منه في validators) */

import type { UseOfFundsItem } from "@/types/finance";

export const USE_OF_FUNDS: UseOfFundsItem[] = [
  {
    id: "operations",
    titleAr: "العمليات والمواهب",
    descAr: "تكوين الفريق الذي يحول المنظومة إلى نشاط يومي.",
    outputAr: "فريق تشغيل وقيادة ميدانية وتحليلية مكتمل خلال 12 شهراً.",
    governanceGateAr: "اعتماد الهيكل الوظيفي وخطة التوظيف قبل الإطلاق.",
    amountSAR: 34_000_000,
    color: "#C98500",
  },
  {
    id: "setup",
    titleAr: "التأسيس والحوكمة",
    descAr: "بناء القاعدة النظامية والتشغيلية للنافذة.",
    outputAr: "كيان مؤسس وسياسات حوكمة وبوابات قرار موثقة.",
    governanceGateAr: "مراجعة قانونية مستقلة لوثائق التأسيس.",
    amountSAR: 18_000_000,
    color: "#199E70",
  },
  {
    id: "data",
    titleAr: "البيانات والحوسبة المحلية",
    descAr: "بناء ذاكرة التعدين والتحليل داخل البلد.",
    outputAr: "بنية بيانات محلية مضبوطة الوصول وجاهزة للتحليل.",
    governanceGateAr: "اعتماد معايير توطين البيانات وضبط الوصول.",
    amountSAR: 16_000_000,
    color: "#1793AC",
  },
  {
    id: "field",
    titleAr: "التكامل الميداني",
    descAr: "ربط الأرض بالنافذة عبر فرق ودرون وأجهزة قياس.",
    outputAr: "قدرة مسح وقياس ميدانية عاملة في المواقع المستهدفة.",
    governanceGateAr: "بوابة جاهزية ميدانية قبل كل مرحلة نشر.",
    amountSAR: 14_000_000,
    color: "#C4573A",
  },
  {
    id: "impact",
    titleAr: "الاستدامة والأثر",
    descAr: "قياس الأثر وربط المشروع بالتنمية والتمويل المسؤول.",
    outputAr: "إطار قياس أثر بيئي واجتماعي قابل للتقرير الدوري.",
    governanceGateAr: "اعتماد مؤشرات الأثر ضمن تقارير الحوكمة.",
    amountSAR: 8_000_000,
    color: "#9A8A1F",
  },
  {
    id: "reserve",
    titleAr: "احتياطي المخاطر",
    descAr: "حماية التنفيذ من التأخير والمفاجآت.",
    outputAr: "هامش أمان تنفيذي لا يُمس إلا بقرار حوكمي.",
    governanceGateAr: "صرف مشروط بموافقة بوابة مخاطر موثقة.",
    amountSAR: 10_000_000,
    color: "#B0574F",
  },
];

export const USE_OF_FUNDS_TOTAL_SAR = USE_OF_FUNDS.reduce(
  (s, i) => s + i.amountSAR,
  0
);
