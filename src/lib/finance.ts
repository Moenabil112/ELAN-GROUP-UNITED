/**
 * دوال النموذج المالي — 15 سنة، الخيار B فقط.
 * جميع المخرجات نتائج نمذجة توضيحية («سيناريو توضيحي» / «تقدير مشتق من النموذج»)
 * وليست عائداً مضموناً ولا استرداداً مضموناً.
 */

import type {
  ScenarioAssumptions,
  ScenarioSummary,
  YearRow,
} from "@/types/finance";

/** إيراد سنة معينة وفق منحنى نمو مرحلي (إثبات ثم نضج) */
export function calculateAnnualRevenue(
  a: ScenarioAssumptions,
  year: number
): number {
  let revenue = a.initialRevenueSAR;
  for (let y = 2; y <= year; y++) {
    const rate = y <= 5 ? a.earlyGrowthRate : a.matureGrowthRate;
    revenue *= 1 + rate;
  }
  return Math.round(revenue);
}

/** تكاليف سنة معينة: ثابتة + متغيرة كنسبة من الإيراد */
export function calculateAnnualCosts(
  a: ScenarioAssumptions,
  revenueSAR: number
): number {
  return Math.round(a.fixedCostSAR + revenueSAR * a.variableCostRate);
}

export function calculateCashFlow(
  revenueSAR: number,
  costsSAR: number
): number {
  return revenueSAR - costsSAR;
}

export function calculateCumulativeCashFlow(rows: YearRow[]): number {
  return rows.length ? rows[rows.length - 1].cumulativeCashFlowSAR : 0;
}

/**
 * توزيعات سنة معينة: نسبة من التدفق النقدي الموجب بعد سنة بدء التوزيعات.
 * حصة المستثمر = 30% من التوزيعات (نافذة التشغيل المحلية حصراً).
 */
export function calculateInvestorDistributions(
  a: ScenarioAssumptions,
  year: number,
  cashFlowSAR: number,
  investorParticipationPercent: number
): { distributionSAR: number; investorDistributionSAR: number } {
  if (year < a.distributionStartYear || cashFlowSAR <= 0) {
    return { distributionSAR: 0, investorDistributionSAR: 0 };
  }
  const distributionSAR = Math.round(cashFlowSAR * a.payoutRatio);
  const investorDistributionSAR = Math.round(
    (distributionSAR * investorParticipationPercent) / 100
  );
  return { distributionSAR, investorDistributionSAR };
}

/**
 * سنة الاسترداد النموذجية: أول سنة يبلغ فيها تراكمي توزيعات المستثمر
 * رأس مال الدخول. نتيجة سيناريو لا وعد — قد تكون null (خارج أفق النموذج).
 */
export function calculatePaybackYear(
  rows: YearRow[],
  entryCapitalSAR: number
): number | null {
  const hit = rows.find(
    (r) => r.cumulativeInvestorDistributionSAR >= entryCapitalSAR
  );
  return hit ? hit.year : null;
}

/** بناء ملخص سيناريو كامل عبر أفق النموذج */
export function calculateScenarioSummary(
  a: ScenarioAssumptions,
  horizonYears: number,
  entryCapitalSAR: number,
  investorParticipationPercent: number
): ScenarioSummary {
  const rows: YearRow[] = [];
  let cumulativeCashFlow = 0;
  let cumulativeInvestorDistribution = 0;
  let cumulativeRevenue = 0;

  for (let year = 1; year <= horizonYears; year++) {
    const revenueSAR = calculateAnnualRevenue(a, year);
    const costsSAR = calculateAnnualCosts(a, revenueSAR);
    const cashFlowSAR = calculateCashFlow(revenueSAR, costsSAR);
    cumulativeCashFlow += cashFlowSAR;
    cumulativeRevenue += revenueSAR;

    const { distributionSAR, investorDistributionSAR } =
      calculateInvestorDistributions(
        a,
        year,
        cashFlowSAR,
        investorParticipationPercent
      );
    cumulativeInvestorDistribution += investorDistributionSAR;

    rows.push({
      year,
      revenueSAR,
      costsSAR,
      cashFlowSAR,
      cumulativeCashFlowSAR: cumulativeCashFlow,
      distributionSAR,
      investorDistributionSAR,
      cumulativeInvestorDistributionSAR: cumulativeInvestorDistribution,
    });
  }

  return {
    id: a.id,
    nameAr: a.nameAr,
    rows,
    cumulativeRevenueSAR: cumulativeRevenue,
    cumulativeCashFlowSAR: cumulativeCashFlow,
    cumulativeInvestorDistributionSAR: cumulativeInvestorDistribution,
    paybackYear: calculatePaybackYear(rows, entryCapitalSAR),
    riskLevel: a.riskLevel,
    validationPaceAr: a.validationPaceAr,
  };
}
