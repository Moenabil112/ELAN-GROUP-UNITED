/** أنواع النموذج المالي — الخيار B فقط */

export type ScenarioId = "conservative" | "base" | "expansion";

export type RiskLevel = "منخفض" | "متوسط" | "مرتفع";

/** افتراضات سيناريو واحد — كلها «افتراضات أولية قابلة للمراجعة» */
export interface ScenarioAssumptions {
  id: ScenarioId;
  nameAr: string;
  descriptionAr: string;
  /** إيراد السنة الأولى (ريال) */
  initialRevenueSAR: number;
  /** معدل نمو الإيراد في مرحلة الإثبات (سنوات 2–5) */
  earlyGrowthRate: number;
  /** معدل نمو الإيراد في مرحلة النضج (سنة 6 فصاعداً) */
  matureGrowthRate: number;
  /** تكلفة تشغيل ثابتة سنوية (ريال) */
  fixedCostSAR: number;
  /** نسبة التكلفة المتغيرة من الإيراد */
  variableCostRate: number;
  /** سنة بدء دراسة التوزيعات (لا توزيعات قبلها) */
  distributionStartYear: number;
  /** نسبة التوزيع من التدفق النقدي الموجب بعد بدء التوزيعات */
  payoutRatio: number;
  /** سرعة التحقق من القنوات */
  validationPaceAr: string;
  /** مستوى المخاطر الإجمالي للسيناريو */
  riskLevel: RiskLevel;
  /** ملاحظات الافتراضات */
  assumptionNotesAr: string[];
}

/** ناتج سنة واحدة من النموذج */
export interface YearRow {
  year: number;
  revenueSAR: number;
  costsSAR: number;
  cashFlowSAR: number;
  cumulativeCashFlowSAR: number;
  distributionSAR: number;
  investorDistributionSAR: number;
  cumulativeInvestorDistributionSAR: number;
}

/** ملخص سيناريو كامل */
export interface ScenarioSummary {
  id: ScenarioId;
  nameAr: string;
  rows: YearRow[];
  cumulativeRevenueSAR: number;
  cumulativeCashFlowSAR: number;
  cumulativeInvestorDistributionSAR: number;
  /** سنة الاسترداد النموذجية (استرداد كامل رأس المال عبر التوزيعات) أو null إذا خارج الأفق */
  paybackYear: number | null;
  riskLevel: RiskLevel;
  validationPaceAr: string;
}

export interface UseOfFundsItem {
  id: string;
  titleAr: string;
  descAr: string;
  /** الناتج التشغيلي المتوقع */
  outputAr: string;
  /** نقطة تحقق حوكمية قبل الإطلاق */
  governanceGateAr: string;
  amountSAR: number;
  color: string;
}

export interface FinancialConstants {
  entryCapitalSAR: number;
  investorParticipationPercent: number;
  participationBasisAr: string;
  ecosystemReferencePostMoneySAR: number;
  horizonYears: number;
  statusAr: string;
}
