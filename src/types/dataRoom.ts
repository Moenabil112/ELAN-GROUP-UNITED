/**
 * أنواع سجل غرفة البيانات والمستندات — المرحلة الأولى.
 * مشتق من MASTER_INDEX.md دون إعادة كتابة للوثائق.
 */

/** حالة الوثيقة كما في الفهرس الرئيسي */
export type DocumentStatus = "Initial Draft — مسودة أولية";

/** مستوى الوصول كما في الفهرس الرئيسي */
export type AccessLevel = "Controlled Review — مراجعة مقيدة";

/** أولوية المراجعة */
export type ReviewPriority = "High" | "Medium" | "Standard";

export interface DataRoomBundle {
  /** رقم الحزمة "01" … "08" */
  bundleNumber: string;
  /** اسم الحزمة بالإنجليزية */
  bundleTitle: string;
  /** اسم الحزمة بالعربية */
  bundleTitleAr: string;
  /** مجلد الحزمة داخل content/data-room/phase-1 */
  folder: string;
  /** علاقة الحزمة بمسار القرار (أي الحزم تسبقها أو تكملها) */
  relationshipAr: string;
  documents: DataRoomDocumentEntry[];
}

export interface DataRoomDocumentEntry {
  /** معرف فريد: bundle-doc مثل "01-01" */
  id: string;
  /** رقم الحزمة */
  bundleNumber: string;
  /** رقم الوثيقة داخل الحزمة ("00" للـ README) */
  docNumber: string;
  /** العنوان بالإنجليزية */
  title: string;
  /** العنوان بالعربية */
  titleAr: string;
  /** الغرض */
  purpose: string;
  /** المسار النسبي داخل content/data-room/phase-1 */
  filePath: string;
  status: DocumentStatus;
  accessLevel: AccessLevel;
  /** null للـ README (بلا أولوية في الفهرس) */
  priority: ReviewPriority | null;
}
