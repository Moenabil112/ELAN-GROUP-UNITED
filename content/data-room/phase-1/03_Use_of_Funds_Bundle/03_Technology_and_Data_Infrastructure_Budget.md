# Technology & Data Infrastructure Budget
## ميزانية البيانات والحوسبة المحلية

**Use of Funds Bundle — حزمة توظيف رأس المال · Document 03 of 07**
**ELAN Group United — مجموعة إيلان المتحدة**

---

### Document Purpose

This budget details the **SAR 16 million** allocation to Local Data and Computing (البيانات والحوسبة المحلية) — the in-country data, compute, analytics, and security base of the window. It sets out the infrastructure components, the governance requirements, and the implementation phases. **All figures are illustrative and model-derived; sub-allocations are working assumptions (WA) that sum to the center total.**

---

### Executive Summary

Local Data and Computing builds the window's **in-country data memory and compute capability** at **SAR 16 million (16%)**. The defining constraint is **data sovereignty**: sovereign-sensitive data and compute are designed for **on-premise / air-gapped** deployment, with residency absolute and egress monitored. The allocation funds storage, compute/hosting, an analytics environment, dashboards and the financial cockpit, data-governance tooling, cybersecurity and access control (RBAC across five data classes), and the document/data-room infrastructure.

---

### Capital Allocation Reference

| Center | SAR m | This document |
|---|---|---|
| Operations and Talent | 34 | Doc 02 |
| Establishment and Governance | 18 | Doc 05 |
| **Local Data and Computing (البيانات والحوسبة المحلية)** | **16** | **● detailed here** |
| Field Integration | 14 | Doc 04 |
| Sustainability and Impact | 8 | Annex |
| Risk Reserve | 10 | Doc 06 |
| **Total** | **100** | — |

---

### Purpose of Local Data and Computing

The center builds the data and compute foundation on which every analytical and reporting output depends. It is where the ecosystem's data memory is held in-country, where analysis runs, and where the dashboards and financial cockpit are served — under sovereign residency and governed access.

### Budget Category Table — فئات الميزانية (illustrative WA, SAR m)

| Category | Amount | Note |
|---|---|---|
| Compute & hosting (on-prem / air-gapped) | 5 | Sovereign-sensitive compute in-country |
| Data infrastructure & storage | 3 | Data memory, pipelines |
| Cybersecurity & access control | 2.5 | RBAC, monitoring, egress control |
| Analytics environment | 2 | Analysis and modeling tooling |
| Dashboards & financial cockpit | 1.5 | Reporting and the financial cockpit |
| Data governance tools | 1 | Classification, lineage, claims discipline |
| Document & data-room infrastructure | 1 | Governed deposit + manifest |
| **Total** | **16** | Sums to center allocation |

### Infrastructure Component Table — مكونات البنية

| Component | Requirement |
|---|---|
| Data infrastructure | In-country storage, pipelines, data memory. |
| Computing & hosting | On-prem / air-gapped for sovereign data; no external cloud for national data. |
| Analytics environment | Governed analysis over the knowledge base (RAG on governed KB only). |
| Dashboard & reporting | Dashboards + financial cockpit reading from governed data. |
| Data governance tools | Classification (5 classes), lineage, claims-lint enforcement. |
| Cybersecurity & access control | RBAC per sensitivity class; identity & security owned by TSA. |
| Document & data-room infrastructure | Deposit convention + manifest; access-tagged. |
| Field-data integration | Ingest of field telemetry (L3) into governed data. |

### Governance Requirement Table — متطلبات الحوكمة

| Requirement | Mechanism |
|---|---|
| Data residency | In-country absolute; egress monitored; breach = critical alert. |
| Access control | RBAC across five data classes; least-privilege. |
| Sensitive-data sharing | Gated at OG-11. |
| Deployment security | Go-live gated at G9. |
| Claims discipline | claims-lint validator; unsupported claim blocks release. |

### Implementation Phase Table — مراحل التنفيذ

| Phase | Window | Focus |
|---|---|---|
| Technology stand-up | Y1 | Compute, hosting, storage, security base (TSA). |
| Data build | Y1–Y2 | Data memory, pipelines, governance tooling (DAL). |
| Analytics & cockpit | Y1–Y2 | Analytics environment, dashboards, financial cockpit. |

### Integration with Field Data

Field telemetry (drones, sensors, IoT — L3) feeds into this center's governed data environment; parameters are **[Missing Input]** pending field-integration design (Doc 04). Field data is classified and access-tagged on ingest.

### Relationship to the Financial Cockpit

The dashboards and financial cockpit funded here are what render the 15-year model's outputs (revenue, cost, cash, scenarios) for review. The cockpit reads from governed data, not hard-coded figures, so that updates to the model or data flow through to reporting.

---

### Review Checklist — قائمة المراجعة

- [ ] Confirm on-prem / air-gapped design for sovereign data.
- [ ] Confirm RBAC across five data classes and OG-11 gating.
- [ ] Confirm budget-category split sums to SAR 16m.
- [ ] Confirm G9 deployment-security gate.
- [ ] Confirm field-telemetry integration parameters **[Missing Input]**.
- [ ] Confirm cockpit reads from governed data.

---

### Review Points

- **Data sovereignty** is the defining design constraint.
- Sensitive-data sharing (OG-11) and go-live (G9) are hard gates.
- Sub-allocations are WA pending a confirmed technical plan.

---

### Closing Note

This budget builds the sovereign data and compute base — the layer that holds the ecosystem's data in-country and serves the cockpit that reports the model. All sub-allocations remain illustrative pending a confirmed technical plan.

---

*Use of Funds Bundle — Technology & Data Infrastructure Budget · v0.1 — Initial Draft · [Insert Date] · ELAN Group United (مجموعة إيلان المتحدة)*
