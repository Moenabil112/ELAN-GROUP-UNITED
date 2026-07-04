export default function SectionHeader({
  kickerAr,
  titleAr,
  descAr,
}: {
  kickerAr: string;
  titleAr: string;
  descAr?: string;
}) {
  return (
    <div className="section-header">
      <span className="section-header__kicker">{kickerAr}</span>
      <h2>{titleAr}</h2>
      {descAr ? <p>{descAr}</p> : null}
    </div>
  );
}
