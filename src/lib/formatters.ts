/** تنسيق الأرقام للعرض العربي — أرقام لاتينية بخط الأرقام مع تسميات ريال ثابتة */

/** تنسيق مبلغ بالريال: 100000000 → "100 مليون ريال" / 1500000 → "1.5 مليون ريال" */
export function formatSAR(amount: number): string {
  const abs = Math.abs(amount);
  const sign = amount < 0 ? "−" : "";
  if (abs >= 1_000_000_000) {
    return `${sign}${trimNum(abs / 1_000_000_000)} مليار ريال`;
  }
  if (abs >= 1_000_000) {
    return `${sign}${trimNum(abs / 1_000_000)} مليون ريال`;
  }
  if (abs >= 1_000) {
    return `${sign}${trimNum(abs / 1_000)} ألف ريال`;
  }
  return `${sign}${abs} ريال`;
}

/** الجزء الرقمي فقط (بالمليون) لعرضه كبيراً في البطاقات */
export function toMillions(amount: number): string {
  return trimNum(amount / 1_000_000);
}

export function formatPercent(value: number, digits = 0): string {
  return `${trimNum(value, digits)}%`;
}

function trimNum(n: number, digits = 1): string {
  const fixed = n.toFixed(digits);
  return fixed.replace(/\.0+$/, "");
}
