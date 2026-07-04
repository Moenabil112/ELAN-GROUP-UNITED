export default function FinancialMetricCard({
  labelAr,
  value,
  unitAr,
  noteAr,
  accent = false,
}: {
  labelAr: string;
  value: string;
  unitAr?: string;
  noteAr?: string;
  accent?: boolean;
}) {
  return (
    <div className={`metric-card${accent ? " metric-card--accent" : ""}`}>
      <div className="metric-card__label">{labelAr}</div>
      <div className="metric-card__value">
        <span className="num">{value}</span>
        {unitAr ? <span className="metric-card__unit">{unitAr}</span> : null}
      </div>
      {noteAr ? <div className="metric-card__note">{noteAr}</div> : null}
    </div>
  );
}
