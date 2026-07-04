/** أنواع طبقات الإيكوسيستم */

export interface EcosystemLayer {
  id: string;
  num: string;
  titleAr: string;
  /** ماذا تفعل الطبقة */
  whatAr: string;
  /** البيانات التي تستخدمها */
  dataAr: string;
  /** المؤشر المالي الذي تؤثر فيه */
  financialMetricAr: string;
  /** الخطر الذي تقلله */
  riskReducedAr: string;
  /** صاحب المصلحة المعني */
  stakeholderAr: string;
  /** الوثائق أو الأدلة المطلوبة */
  documentsAr: string;
  /** علاقتها بنموذج الخمس عشرة سنة */
  modelLinkAr: string;
}
