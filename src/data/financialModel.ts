/**
 * النموذج المالي — 15 سنة، الخيار B فقط.
 *
 * الثوابت المعتمدة:
 * - رأس مال الدخول: 100 مليون ريال.
 * - الحصة التفاوضية: 30% من نافذة التشغيل المحلية حصراً.
 * - 517 مليون ريال: تقييم Post-money مرجعي للمنظومة الأوسع فقط —
 *   لا يُستخدم لإعادة احتساب الحصة.
 *
 * جميع افتراضات السيناريوهات «افتراضات أولية قابلة للمراجعة»:
 * تقديرات مشتقة من النموذج، خاضعة للتحقق، ومرهونة بتحول قنوات الإيراد
 * إلى عقود فعلية. لا شيء منها عائد مضمون أو استرداد مضمون.
 */

import type {
  FinancialConstants,
  ScenarioAssumptions,
  ScenarioId,
  ScenarioSummary,
} from "@/types/finance";
import { calculateScenarioSummary } from "@/lib/finance";

export const FINANCIAL_CONSTANTS: FinancialConstants = {
  entryCapitalSAR: 100_000_000,
  investorParticipationPercent: 30,
  participationBasisAr: "نافذة التشغيل المحلية",
  ecosystemReferencePostMoneySAR: 517_000_000,
  horizonYears: 15,
  statusAr:
    "أرقام توضيحية مشتقة من نموذج عمل أولي وخاضعة للمراجعة المهنية المستقلة",
};

export const ASSUMPTIONS_LABEL_AR = "افتراضات أولية قابلة للمراجعة";

export const SCENARIOS: ScenarioAssumptions[] = [
  {
    id: "conservative",
    nameAr: "السيناريو المحافظ",
    descriptionAr:
      "تحقق بطيء لقنوات الإيراد مع انضباط كامل في الإنفاق. النافذة تحافظ على استمراريتها التشغيلية، والتوزيعات محدودة، والاسترداد خارج أفق النموذج.",
    initialRevenueSAR: 8_000_000,
    earlyGrowthRate: 0.2,
    matureGrowthRate: 0.08,
    fixedCostSAR: 9_000_000,
    variableCostRate: 0.45,
    distributionStartYear: 5,
    payoutRatio: 0.6,
    validationPaceAr: "تحقق بطيء — قناة إلى قناتين خلال 36 شهراً",
    riskLevel: "مرتفع",
    assumptionNotesAr: [
      "إيراد السنة الأولى 8 ملايين ريال من خدمات ميدانية وتقارير مبكرة.",
      "نمو 20% سنوياً في مرحلة الإثبات ثم 8% في مرحلة النضج.",
      "بدء دراسة التوزيعات من السنة الخامسة بنسبة 60% من التدفق الموجب.",
    ],
  },
  {
    id: "base",
    nameAr: "السيناريو الأساسي",
    descriptionAr:
      "تحول تدريجي للقنوات الخمس إلى عقود خلال 12–36 شهراً، مع نمو منضبط للبرامج والخدمات. مسار الاسترداد النموذجي يتضح في الثلث الأخير من الأفق.",
    initialRevenueSAR: 15_000_000,
    earlyGrowthRate: 0.32,
    matureGrowthRate: 0.15,
    fixedCostSAR: 10_000_000,
    variableCostRate: 0.42,
    distributionStartYear: 4,
    payoutRatio: 0.75,
    validationPaceAr: "تحقق تدريجي — ثلاث قنوات فأكثر خلال 36 شهراً",
    riskLevel: "متوسط",
    assumptionNotesAr: [
      "إيراد السنة الأولى 15 مليون ريال من رسوم التشغيل والخدمات الميدانية.",
      "نمو 32% سنوياً في مرحلة الإثبات ثم 15% في مرحلة النضج.",
      "بدء دراسة التوزيعات من السنة الرابعة بنسبة 75% من التدفق الموجب.",
    ],
  },
  {
    id: "expansion",
    nameAr: "سيناريو التوسع",
    descriptionAr:
      "تحقق مبكر للقنوات وتوسع في البرامج والعقود الميدانية والبيانية. يفترض جاهزية تشغيلية عالية وتبنياً أسرع من المتوقع — وهو الأعلى حساسية للمخاطر التنفيذية.",
    initialRevenueSAR: 20_000_000,
    earlyGrowthRate: 0.42,
    matureGrowthRate: 0.18,
    fixedCostSAR: 12_000_000,
    variableCostRate: 0.46,
    distributionStartYear: 3,
    payoutRatio: 0.8,
    validationPaceAr: "تحقق مبكر — أربع قنوات فأكثر خلال 24 شهراً",
    riskLevel: "متوسط",
    assumptionNotesAr: [
      "إيراد السنة الأولى 20 مليون ريال بافتراض برامج استكشاف مبكرة.",
      "نمو 42% سنوياً في مرحلة الإثبات ثم 18% في مرحلة النضج.",
      "بدء دراسة التوزيعات من السنة الثالثة بنسبة 80% من التدفق الموجب.",
    ],
  },
];

/** ملخصات السيناريوهات الثلاثة محسوبة عبر أفق النموذج كاملاً */
export const SCENARIO_SUMMARIES: Record<ScenarioId, ScenarioSummary> =
  Object.fromEntries(
    SCENARIOS.map((s) => [
      s.id,
      calculateScenarioSummary(
        s,
        FINANCIAL_CONSTANTS.horizonYears,
        FINANCIAL_CONSTANTS.entryCapitalSAR,
        FINANCIAL_CONSTANTS.investorParticipationPercent
      ),
    ])
  ) as Record<ScenarioId, ScenarioSummary>;

export function getScenario(id: ScenarioId): ScenarioAssumptions {
  const s = SCENARIOS.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown scenario: ${id}`);
  return s;
}
