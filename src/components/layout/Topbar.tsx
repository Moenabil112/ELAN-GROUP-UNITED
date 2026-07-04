import StatusBadge from "@/components/shared/StatusBadge";

export default function Topbar({
  titleAr,
  subtitleAr,
}: {
  titleAr: string;
  subtitleAr?: string;
}) {
  return (
    <header className="topbar">
      <div className="topbar__title">
        <h1>{titleAr}</h1>
        {subtitleAr ? <p>{subtitleAr}</p> : null}
      </div>
      <div className="topbar__badges">
        <StatusBadge tone="gold" labelAr="نافذة خاصة بأصحاب القرار والمصلحة" />
        <StatusBadge tone="neutral" labelAr="أرقام توضيحية — الخيار B" />
      </div>
    </header>
  );
}
