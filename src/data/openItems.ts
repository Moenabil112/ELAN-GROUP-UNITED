/**
 * سجل النواقص ومسار الاستكمال — بنود مفتوحة موحدة عبر الحزم الثماني.
 * كل بند يحيل إلى حزمة ووثيقة في سجل المرحلة الأولى (dataRoomIndex)،
 * والمالك والتاريخ المستهدف حقول مبدئية تُعتمد عند فتح الغرفة رسمياً.
 */

export type OpenItemCategory =
  | "missing-input"
  | "licensed-review"
  | "to-be-defined"
  | "needs-update"
  | "ready-for-review";

export const OPEN_ITEM_CATEGORIES: {
  id: OpenItemCategory;
  labelAr: string;
  labelEn: string;
  tone: "high" | "warn" | "neutral" | "gold" | "ok";
}[] = [
  { id: "missing-input", labelAr: "مدخل ناقص", labelEn: "Missing Input", tone: "high" },
  { id: "licensed-review", labelAr: "مراجعة مرخصة", labelEn: "Licensed Review", tone: "gold" },
  { id: "to-be-defined", labelAr: "يحتاج تحديد", labelEn: "To Be Defined", tone: "warn" },
  { id: "needs-update", labelAr: "يحتاج تحديث", labelEn: "Needs Update", tone: "warn" },
  { id: "ready-for-review", labelAr: "جاهز للمراجعة", labelEn: "Ready for Review", tone: "ok" },
];

export type OpenItemStatus = "مفتوح" | "قيد المعالجة" | "مغلق";
export type OpenItemPriority = "عالية" | "متوسطة" | "قياسية";

export interface OpenItem {
  id: string;
  category: OpenItemCategory;
  /** رقم الحزمة "01"…"08" */
  bundleNumber: string;
  /** معرف الوثيقة في السجل "01-05" */
  docId: string;
  /** وصف النقص أو المسألة */
  issueAr: string;
  /** الإجراء المطلوب للإغلاق */
  actionAr: string;
  /** المالك — حقل مبدئي حتى اعتماد مصفوفة الصلاحيات */
  ownerAr: string;
  priority: OpenItemPriority;
  /** التاريخ المستهدف — حقل مبدئي */
  targetDateAr: string;
  status: OpenItemStatus;
}

const T30 = "خلال 30 يوماً من فتح الغرفة — [يُعتمد لاحقاً]";
const T60 = "خلال 60 يوماً من فتح الغرفة — [يُعتمد لاحقاً]";
const TSIGN = "قبل أي توقيع ملزم — [يُعتمد لاحقاً]";

export const OPEN_ITEMS: OpenItem[] = [
  /* ——— الحزمة 01: القرار الاستثماري ——— */
  {
    id: "oi-0101",
    category: "ready-for-review",
    bundleNumber: "01",
    docId: "01-01",
    issueAr: "الملخص التنفيذي مكتمل الصياغة كمسودة أولية ولم يُعرض بعد على الطرف المراجع.",
    actionAr: "جدولة قراءة أولى مع الشريك الاستثماري وتسجيل الملاحظات.",
    ownerAr: "غرفة الشريك الاستثماري — [يُسمى الممثل لاحقاً]",
    priority: "عالية",
    targetDateAr: T30,
    status: "مفتوح",
  },
  {
    id: "oi-0105",
    category: "to-be-defined",
    bundleNumber: "01",
    docId: "01-05",
    issueAr: "بنود حقوق الحوكمة وسياسة التوزيعات في مخطط مذكرة الشروط لم تُحدد بعد.",
    actionAr: "جلسة تفاوض أولى لتحديد حقوق الحوكمة وإطار التوزيعات قبل الصياغة الأوسع.",
    ownerAr: "غرفة الحوكمة + الشريك الاستثماري — [يُسمى لاحقاً]",
    priority: "عالية",
    targetDateAr: T60,
    status: "مفتوح",
  },
  /* ——— الحزمة 02: النموذج المالي ——— */
  {
    id: "oi-0202",
    category: "missing-input",
    bundleNumber: "02",
    docId: "02-02",
    issueAr: "أسعار السوق المرجعية للخدمات والبرامج لم تُدخل بعد — قيم كتاب الافتراضات نموذجية بالكامل.",
    actionAr: "جمع نطاقات أسعار مرجعية من السوق المحلي وتحديث الافتراضات المعنية.",
    ownerAr: "غرفة المالية — [يُسمى المحلل لاحقاً]",
    priority: "عالية",
    targetDateAr: T60,
    status: "مفتوح",
  },
  {
    id: "oi-0206",
    category: "ready-for-review",
    bundleNumber: "02",
    docId: "02-06",
    issueAr: "حزمة تحليل الحساسية جاهزة كمسودة وتنتظر جلسة تفسير الافتراضات.",
    actionAr: "عقد جلسة تفسير الافتراضات ومطابقة المحركات مع لوحة القرار المالي.",
    ownerAr: "غرفة المالية — [يُسمى لاحقاً]",
    priority: "متوسطة",
    targetDateAr: T30,
    status: "قيد المعالجة",
  },
  /* ——— الحزمة 03: توظيف رأس المال ——— */
  {
    id: "oi-0302",
    category: "to-be-defined",
    bundleNumber: "03",
    docId: "03-02",
    issueAr: "الهيكل الوظيفي التفصيلي للسنة الأولى (المسميات والرواتب النطاقية) يحتاج تحديداً.",
    actionAr: "اعتماد هيكل وظيفي تفصيلي للسنة الأولى ضمن سقف 34 مليون ريال.",
    ownerAr: "غرفة التشغيل — [يُسمى لاحقاً]",
    priority: "متوسطة",
    targetDateAr: T60,
    status: "مفتوح",
  },
  {
    id: "oi-0307",
    category: "needs-update",
    bundleNumber: "03",
    docId: "03-07",
    issueAr: "محطات خطة الصرف معرفة نسبياً (شهور من الإغلاق) وتحتاج ربطاً بتواريخ تقويمية.",
    actionAr: "تحديث الخطة بتواريخ فعلية فور اعتماد تاريخ الإغلاق المستهدف.",
    ownerAr: "غرفة الحوكمة — [يُسمى لاحقاً]",
    priority: "متوسطة",
    targetDateAr: TSIGN,
    status: "مفتوح",
  },
  /* ——— الحزمة 04: قنوات الإيراد ——— */
  {
    id: "oi-0402",
    category: "missing-input",
    bundleNumber: "04",
    docId: "04-02",
    issueAr: "سجل الفرص التجارية هيكل فارغ — لا فرص موثقة مدخلة بعد.",
    actionAr: "تعبئة السجل مع أول مفاوضات فعلية، دون إدراج أي فرصة غير موثقة.",
    ownerAr: "غرفة التشغيل — [يُسمى لاحقاً]",
    priority: "عالية",
    targetDateAr: T60,
    status: "مفتوح",
  },
  {
    id: "oi-0403",
    category: "to-be-defined",
    bundleNumber: "04",
    docId: "04-03",
    issueAr: "نطاقات التسعير النهائية لكل مسار إيراد لم تُحدد — المنطق موثق والأرقام استرشادية.",
    actionAr: "تحديد نطاقات تسعير معتمدة بعد جمع الأسعار المرجعية (مرتبط بالبند oi-0202).",
    ownerAr: "غرفة المالية — [يُسمى لاحقاً]",
    priority: "متوسطة",
    targetDateAr: T60,
    status: "مفتوح",
  },
  /* ——— الحزمة 05: الحوكمة والمخاطر ——— */
  {
    id: "oi-0501",
    category: "needs-update",
    bundleNumber: "05",
    docId: "05-01",
    issueAr: "سجل المخاطر يعكس التقدير الداخلي فقط ولم يُواءم مع مخرجات مراجعة مستقلة.",
    actionAr: "مواءمة السجل مع تقرير أول مراجعة مستقلة وتحديث درجات الخطورة.",
    ownerAr: "غرفة الحوكمة — [يُسمى لاحقاً]",
    priority: "متوسطة",
    targetDateAr: T60,
    status: "مفتوح",
  },
  {
    id: "oi-0507",
    category: "licensed-review",
    bundleNumber: "05",
    docId: "05-07",
    issueAr: "بروتوكول المراجعة المستقلة يتطلب تعيين مراجع مرخص قبل تفعيله.",
    actionAr: "ترشيح وتعيين جهة مراجعة مستقلة مرخصة وفق البروتوكول.",
    ownerAr: "غرفة الحوكمة — [تُسمى الجهة لاحقاً]",
    priority: "عالية",
    targetDateAr: TSIGN,
    status: "مفتوح",
  },
  /* ——— الحزمة 06: المنظومة والتشغيل ——— */
  {
    id: "oi-0604",
    category: "ready-for-review",
    bundleNumber: "06",
    docId: "06-04",
    issueAr: "خارطة التشغيل 0–36 شهراً مكتملة كمسودة وتنتظر مطابقة مع خطة الصرف.",
    actionAr: "مراجعة مشتركة بين غرفتي التشغيل والحوكمة لمطابقة المحطات.",
    ownerAr: "غرفة التشغيل — [يُسمى لاحقاً]",
    priority: "قياسية",
    targetDateAr: T60,
    status: "مفتوح",
  },
  /* ——— الحزمة 07: العناية القانونية ——— */
  {
    id: "oi-0701",
    category: "missing-input",
    bundleNumber: "07",
    docId: "07-01",
    issueAr: "نموذج اتفاقية السرية بحقول فارغة: بيانات الأطراف والتواريخ ومدة السريان.",
    actionAr: "تعبئة بيانات الأطراف والتوقيع — شرط فتح صلاحية الوصول الكاملة.",
    ownerAr: "الشريك الاستثماري + الإدارة — [يُسمى لاحقاً]",
    priority: "عالية",
    targetDateAr: T30,
    status: "مفتوح",
  },
  {
    id: "oi-0703",
    category: "licensed-review",
    bundleNumber: "07",
    docId: "07-03",
    issueAr: "خيارات الهيكلة القانونية تحتاج رأياً قانونياً من مستشار مرخص قبل اختيار الهيكل.",
    actionAr: "تكليف مكتب قانوني مرخص بمراجعة الخيارات وإصدار توصية موثقة.",
    ownerAr: "مستشار قانوني مرخص — [يُسمى لاحقاً]",
    priority: "عالية",
    targetDateAr: TSIGN,
    status: "مفتوح",
  },
  {
    id: "oi-0705",
    category: "licensed-review",
    bundleNumber: "07",
    docId: "07-05",
    issueAr: "قائمة الفحص القانوني والتنظيمي تحتاج تنفيذاً فعلياً من جهة مرخصة لا اكتفاءً بالقائمة.",
    actionAr: "تنفيذ الفحص بنداً بنداً ضمن العناية القانونية المستقلة.",
    ownerAr: "مستشار قانوني مرخص — [يُسمى لاحقاً]",
    priority: "عالية",
    targetDateAr: TSIGN,
    status: "مفتوح",
  },
  /* ——— الحزمة 08: غرفة البيانات وضبط المستندات ——— */
  {
    id: "oi-0805",
    category: "needs-update",
    bundleNumber: "08",
    docId: "08-05",
    issueAr: "سجل ضبط الإصدارات يحمل تواريخ مبدئية ([Insert Date]) لكل الوثائق.",
    actionAr: "تسجيل الإصدار v0.1 بتواريخ فعلية لكل وثيقة وتفعيل دورة الإصدارات.",
    ownerAr: "غرفة البيانات والمستندات — [يُسمى أمين السجل لاحقاً]",
    priority: "قياسية",
    targetDateAr: T30,
    status: "قيد المعالجة",
  },
  {
    id: "oi-0806",
    category: "to-be-defined",
    bundleNumber: "08",
    docId: "08-06",
    issueAr: "مصفوفة الوصول والصلاحيات بلا أسماء مخولين فعليين بعد.",
    actionAr: "تعبئة المصفوفة بالمخولين الفعليين فور توقيع اتفاقية السرية.",
    ownerAr: "غرفة البيانات والمستندات — [يُسمى لاحقاً]",
    priority: "متوسطة",
    targetDateAr: T30,
    status: "مفتوح",
  },
];

/** ملخص العدّ حسب الفئة */
export function countByCategory(): Record<OpenItemCategory, number> {
  const counts = Object.fromEntries(
    OPEN_ITEM_CATEGORIES.map((c) => [c.id, 0])
  ) as Record<OpenItemCategory, number>;
  for (const item of OPEN_ITEMS) counts[item.category]++;
  return counts;
}
