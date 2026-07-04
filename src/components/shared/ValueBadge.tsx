export default function ValueBadge({
  labelAr,
  value,
  unitAr,
}: {
  labelAr: string;
  value: string;
  unitAr?: string;
}) {
  return (
    <span className="value-badge">
      {labelAr}
      <span className="num">{value}</span>
      {unitAr ? <span>{unitAr}</span> : null}
    </span>
  );
}
