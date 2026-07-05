# Data Governance Policy
## سياسة حوكمة البيانات

**Governance & Risk Bundle — حزمة الحوكمة والمخاطر · Document 06 of 07**
**ELAN Group United — مجموعة إيلان المتحدة**

---

### Document Purpose

This policy governs data (حوكمة البيانات) for the Local Operating Entry Window and the data room — ownership, classification, access rights (صلاحيات الوصول), data-room permissions, sensitive-document handling, control of model assumptions and financial and operational data, the audit trail (سجل التتبع), and version control. **Sovereign-sensitive data is held in-country and never leaves, regardless of any exit. All figures are illustrative and model-derived.**

---

### Executive Summary

Data is governed by classification and role. Five classes (public → confidential-financial/legal) map to role-based access (founder, board, investor, lender, legal), with sovereign geological data at the highest handling — **on-premise / air-gapped, in-country, egress-monitored**. Every deposit follows the naming convention and is access-tagged; every access and change is logged in an immutable audit trail; every new version is a new file (never overwrite). Model assumptions and financial data carry the tightest controls, and sensitive-data sharing is gated at OG-11.

---

### Governance Reference

Owned by DAL + AGL with TSA security; RBAC per sensitivity class; deposit convention ELAN-{DOMAIN}-{TYPE}-v{n} (domains GOV/FIN/LEG/TEC/SUS/KB); AI autonomy tiers T0–T3; claims discipline enforced by validators.

---

### Purpose of Data Governance

Data governance protects the ecosystem's most valuable and most sensitive asset — its data — by ensuring it is owned, classified, access-controlled, and auditable. It underpins data sovereignty, stakeholder trust, and the integrity of every figure the model and dashboard present.

### Data Ownership — ملكية البيانات

Data is owned within the ecosystem's entity structure; sovereign geological data is handled under national residency rules. The protected IP core (models, engines) remains founder-owned (license-not-sale + clawback) and is never transferred. Improvements accrue to the IP-Co core.

### Data Classification Table — تصنيف البيانات

| Class | العربية | Handling |
|---|---|---|
| Public | عام | Freely shareable; brand-safe. |
| Internal | داخلي | Internal use; role-tagged. |
| Internal-extended | داخلي موسّع | Wider internal; controlled. |
| Confidential | سرّي | Restricted; need-to-know. |
| Confidential-financial / legal | سرّي مالي / قانوني | Tightest; sovereign geodata air-gapped, never leaves country. |

### Access Level Table — مستويات الوصول (RBAC)

| Role | Access scope |
|---|---|
| Founder | All domains. |
| Board | Overview, architecture, cap, governance, log, KPI, docs. |
| Investor | Overview, architecture, cap, financial, memos, KPI, docs. |
| Lender | Overview, architecture, financial, memos, KPI, docs. |
| Legal | Overview, architecture, cap, governance, log, docs. |

### Data Room Permission Table — صلاحيات غرفة البيانات

| Rule | Detail |
|---|---|
| Access basis | Role-based (RBAC), least-privilege. |
| Entry condition | NDA + access tags before access. |
| Sensitive sharing | Gated at OG-11. |
| Watermarking | Session watermark = role + timestamp. |
| Logging | View/download events logged (append-only). |

### Sensitive Document Handling Table — معالجة الوثائق الحساسة

| Document type | Handling |
|---|---|
| Financial data (conf-financial) | Tightest access; investor/lender per RBAC; logged. |
| Legal data (conf-legal) | Legal role; counsel; logged. |
| Model assumptions | Controlled; changes only via model versions + decision log. |
| Sovereign geodata | Air-gapped, in-country; never leaves regardless of exit. |
| Partner terms | T0; restricted; never on public materials. |

### Model Assumptions, Financial, and Operational Data Control

- **Model assumptions control:** assumptions change only through new model versions logged in the decision log; no silent edits.
- **Financial data control:** confidential-financial class; RBAC-restricted; supports the cockpit which reads governed data, not hard-coded figures.
- **Operational data control:** classified on ingest; field data access-tagged; feeds governed reporting.

### Audit Trail — سجل التتبع

Every material data action is recorded: an immutable decision log, 15 audit record types, manifest-indexed deposits, and validator runs (spec, public/private separation, data-room, claims-lint). The audit trail is append-only; corrections are new entries, never overwrites.

### Version Control Table — ضبط الإصدارات

| Rule | Detail |
|---|---|
| New version | New file + manifest entry; never overwrite. |
| Naming | ELAN-{DOMAIN}-{TYPE}-v{MAJOR.MINOR}. |
| Registration | Every deposit updates the manifest + register + decision log. |
| Supersession | Prior versions retained, marked superseded. |

---

### Review Checklist — قائمة المراجعة

- [ ] Confirm the five classes and RBAC access levels.
- [ ] Confirm data-room permissions (NDA, tags, watermark, logging).
- [ ] Confirm sovereign-data residency (air-gap, never leaves).
- [ ] Confirm model-assumption and financial-data controls.
- [ ] Confirm audit trail and version-control rules.
- [ ] Confirm OG-11 gating for sensitive sharing.

---

### Review Points

- Access is **classification- and role-based**; least-privilege throughout.
- **Sovereign data never leaves the country**, regardless of exit.
- Every change is **logged and versioned**; assumptions change only via model versions.

---

### Closing Note

This policy keeps data owned, classified, access-controlled, and auditable — the foundation of data sovereignty and stakeholder trust. It governs the data room that supports every review in this and the other bundles. All handling remains subject to residency rules and professional review where legal.

---

*Governance & Risk Bundle — Data Governance Policy · v0.1 — Initial Draft · [Insert Date] · ELAN Group United (مجموعة إيلان المتحدة)*
