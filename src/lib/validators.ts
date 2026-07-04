/** فحوصات اتساق النموذج المالي — تعمل وقت التطوير لمنع انحراف الأرقام */

import type {
  FinancialConstants,
  ScenarioAssumptions,
  UseOfFundsItem,
} from "@/types/finance";

export interface ValidationIssue {
  field: string;
  message: string;
}

export function validateFinancialInputs(
  constants: FinancialConstants,
  scenarios: ScenarioAssumptions[],
  useOfFunds: UseOfFundsItem[]
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (constants.entryCapitalSAR !== 100_000_000) {
    issues.push({
      field: "entryCapitalSAR",
      message: "رأس مال الدخول المعتمد هو 100 مليون ريال (الخيار B).",
    });
  }
  if (constants.investorParticipationPercent !== 30) {
    issues.push({
      field: "investorParticipationPercent",
      message: "الحصة التفاوضية المعتمدة هي 30% من نافذة التشغيل المحلية.",
    });
  }
  if (constants.ecosystemReferencePostMoneySAR !== 517_000_000) {
    issues.push({
      field: "ecosystemReferencePostMoneySAR",
      message: "التقييم المرجعي Post-money للمنظومة الأوسع هو 517 مليون ريال.",
    });
  }
  if (constants.horizonYears !== 15) {
    issues.push({ field: "horizonYears", message: "أفق النموذج 15 سنة." });
  }

  const totalFunds = useOfFunds.reduce((s, i) => s + i.amountSAR, 0);
  if (totalFunds !== constants.entryCapitalSAR) {
    issues.push({
      field: "useOfFunds",
      message: `مجموع مراكز الإنفاق (${totalFunds}) لا يساوي رأس مال الدخول.`,
    });
  }

  for (const s of scenarios) {
    if (s.payoutRatio < 0 || s.payoutRatio > 1) {
      issues.push({
        field: `${s.id}.payoutRatio`,
        message: "نسبة التوزيع يجب أن تكون بين 0 و1.",
      });
    }
    if (s.variableCostRate < 0 || s.variableCostRate >= 1) {
      issues.push({
        field: `${s.id}.variableCostRate`,
        message: "نسبة التكلفة المتغيرة يجب أن تكون بين 0 و1.",
      });
    }
    if (s.distributionStartYear < 1) {
      issues.push({
        field: `${s.id}.distributionStartYear`,
        message: "سنة بدء التوزيعات يجب أن تكون ضمن أفق النموذج.",
      });
    }
  }

  return issues;
}
