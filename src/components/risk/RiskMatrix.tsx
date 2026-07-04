import { RISKS } from "@/data/risks";
import RiskGovernanceCard from "./RiskGovernanceCard";

export default function RiskMatrix() {
  return (
    <div className="risk-grid">
      {RISKS.map((r) => (
        <RiskGovernanceCard key={r.id} risk={r} />
      ))}
    </div>
  );
}
