/** بوابة غرفة البيانات — وثائق مقفلة تتطلب صلاحية وصول */

import type { DataRoomDocument } from "@/types/stakeholder";

export const ACCESS_REQUIRED_AR = "يتطلب صلاحية وصول";

export const DATA_ROOM_DOCUMENTS: DataRoomDocument[] = [
  {
    id: "financial-model",
    titleAr: "النموذج المالي",
    typeAr: "نموذج تشغيلي — 15 سنة",
    purposeAr: "السيناريوهات الثلاثة كاملة بافتراضاتها وحساسية استرداد رأس المال.",
    status: "جاهز للمراجعة",
  },
  {
    id: "use-of-funds-annex",
    titleAr: "ملحق استخدام رأس المال",
    typeAr: "ملحق مالي",
    purposeAr: "تفصيل مراكز الإنفاق الستة وربطها بمحطات الإنجاز والبوابات.",
    status: "جاهز للمراجعة",
  },
  {
    id: "revenue-assumptions",
    titleAr: "افتراضات قنوات الإيراد",
    typeAr: "وثيقة افتراضات",
    purposeAr: "منطق كل قناة ومسار التحقق منها عبر العقود والتنفيذ.",
    status: "قيد الإعداد",
  },
  {
    id: "risk-register",
    titleAr: "سجل المخاطر",
    typeAr: "سجل حوكمي",
    purposeAr: "المخاطر الثمانية بمحفزاتها واستجاباتها وإيقاع مراجعتها.",
    status: "جاهز للمراجعة",
  },
  {
    id: "governance-rights",
    titleAr: "ورقة حقوق الحوكمة",
    typeAr: "وثيقة حوكمة",
    purposeAr: "حقوق المشاركة والرقابة المقترحة تمهيداً لمذكرة الشروط.",
    status: "قيد الإعداد",
  },
  {
    id: "term-sheet-outline",
    titleAr: "مخطط مذكرة الشروط غير الملزمة",
    typeAr: "وثيقة تفاوضية",
    purposeAr: "الهيكل الأولي للمذكرة قبل الصياغة القانونية الملزمة.",
    status: "قيد الإعداد",
  },
  {
    id: "legal-pack",
    titleAr: "حزمة المراجعة القانونية",
    typeAr: "حزمة عناية قانونية",
    purposeAr: "وثائق التأسيس والهيكل النظامي محل المراجعة المستقلة.",
    status: "يتطلب تحديثاً",
  },
  {
    id: "ops-roadmap",
    titleAr: "خارطة الطريق التشغيلية",
    typeAr: "خطة تنفيذية",
    purposeAr: "محطات الإنجاز الميدانية والتشغيلية عبر مراحل النشر.",
    status: "جاهز للمراجعة",
  },
];
