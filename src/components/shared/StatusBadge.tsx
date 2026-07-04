const TONE_CLASS: Record<string, string> = {
  ok: "badge badge--ok",
  warn: "badge badge--warn",
  high: "badge badge--high",
  gold: "badge badge--gold",
  neutral: "badge",
};

export default function StatusBadge({
  labelAr,
  tone = "neutral",
}: {
  labelAr: string;
  tone?: "ok" | "warn" | "high" | "gold" | "neutral";
}) {
  return <span className={TONE_CLASS[tone]}>{labelAr}</span>;
}

/** تحويل مستوى الخطر العربي إلى لون حالة */
export function riskTone(level: string): "ok" | "warn" | "high" {
  if (level === "منخفض") return "ok";
  if (level === "متوسط") return "warn";
  return "high";
}
