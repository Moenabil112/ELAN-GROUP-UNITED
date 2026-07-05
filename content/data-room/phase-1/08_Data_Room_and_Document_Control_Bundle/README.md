# Data Room & Document Control Bundle — حزمة غرفة البيانات وضبط المستندات
## ELAN Group United — مجموعة إيلان المتحدة

**Version:** v0.1 — Initial Draft · **Date:** [Insert Date]

---

### Purpose of the Package

This bundle **organizes how documents are classified, uploaded, reviewed, updated, accessed, and controlled** during the investment review process. It is the control layer over the entire ELAN data room — the index, classification, upload, review, version, access, and operating-procedure documents that govern every other bundle. It is prepared for readability by the Data Room Administrator and reviewers and for conversion into Word or PDF. **All figures are illustrative and model-derived; nothing is binding.**

---

### Documents

| # | Document | الوثيقة | File |
|---|---|---|---|
| 01 | Data Room Index | فهرس غرفة البيانات والمستندات | `01_Data_Room_Index.md` |
| 02 | Document Classification Matrix | مصفوفة تصنيف المستندات | `02_Document_Classification_Matrix.md` |
| 03 | Document Upload Checklist | قائمة رفع المستندات | `03_Document_Upload_Checklist.md` |
| 04 | Document Review Tracker | سجل مراجعة المستندات | `04_Document_Review_Tracker.md` |
| 05 | Version Control Register | سجل ضبط الإصدارات | `05_Version_Control_Register.md` |
| 06 | Access & Permission Matrix | مصفوفة الوصول والصلاحيات | `06_Access_and_Permission_Matrix.md` |
| 07 | Data Room Operating Procedure | إجراءات تشغيل غرفة البيانات | `07_Data_Room_Operating_Procedure.md` |

---

### Suggested Reading Order

1. **01 — Data Room Index:** the map of the whole data room.
2. **02 — Document Classification Matrix:** how documents are classified.
3. **06 — Access & Permission Matrix:** who can do what.
4. **03 — Document Upload Checklist:** how documents enter.
5. **04 — Document Review Tracker:** how documents are reviewed.
6. **05 — Version Control Register:** how versions are controlled.
7. **07 — Data Room Operating Procedure:** the runbook that binds it all.

---

### Relationship to All Other Bundles

This bundle controls the other seven. The **Index** (Doc 01) catalogues all **eight bundles and 53 documents**; the **Classification Matrix** and **Access Matrix** govern their visibility; the **Upload Checklist**, **Review Tracker**, and **Version Register** govern their lifecycle; and the **Operating Procedure** runs the whole. It aligns directly with the Governance & Risk Bundle's Data Governance Policy (B5-06) and the Legal Bundle's Data Room Access Policy (B7-06).

| B# | Bundle | Docs |
|---|---|---|
| B1 | Investment Decision (حزمة القرار الاستثماري) | 5 |
| B2 | Financial Model (حزمة النموذج المالي) | 7 |
| B3 | Use of Funds (حزمة توظيف رأس المال) | 7 |
| B4 | Revenue Channels (حزمة قنوات الإيراد) | 6 |
| B5 | Governance & Risk (حزمة الحوكمة والمخاطر) | 7 |
| B6 | Ecosystem & Operations (حزمة المنظومة والتشغيل) | 7 |
| B7 | Legal & Regulatory Review (حزمة العناية القانونية والتنظيمية) | 7 |
| B8 | Data Room & Document Control (حزمة غرفة البيانات وضبط المستندات) | 7 |
| — | **Total** | **53** |

---

### Document Control Rules

- Every document has a stable ID (**DR-B#-##**) and a classification (Doc 02).
- Nothing enters the data room **unclassified, unversioned, or unreviewed** (Doc 03).
- Every document is **reviewed** before review-approval (Doc 04).
- **Accountable humans approve**; AI never approves.
- Every step is **logged (append-only)**.

### Versioning Rules

- Sequence: **v0.1 → v0.2 → v0.3 → v1.0 → v1.1** (Doc 05).
- **Every version is a new record**; nothing is overwritten.
- Prior versions are **archived, never deleted**; the current approved version is always identifiable.
- Mirrors the deposit convention **ELAN-{DOMAIN}-{TYPE}-v{n}**.

### Access Control Rules

- Access is **NDA-gated and least-privilege** (Doc 06; B7-06).
- Download limited by **classification**; sensitive/restricted classes are view-only.
- Only the **administrator uploads**; access is **time-boxed** and removable.
- **Sovereign data never leaves the country**; sensitive sharing gated at OG-11.

---

### Standard Terminology — المصطلحات المعتمدة

| English | العربية |
|---|---|
| Data Room & Document Control Bundle | حزمة غرفة البيانات وضبط المستندات |
| Data Room | غرفة البيانات والمستندات |
| Document Index | فهرس المستندات |
| Document Classification | تصنيف المستندات |
| Upload Checklist | قائمة الرفع |
| Review Tracker | سجل المراجعة |
| Version Control | ضبط الإصدارات |
| Access Matrix | مصفوفة الوصول |
| Permission | صلاحية |
| Document Owner | مالك المستند |
| Reviewer | المراجع |
| Approval Status | حالة الاعتماد |
| Access Level | مستوى الوصول |
| Restricted Review | مراجعة محدودة |
| Archive | الأرشفة |

---

### Notes for Future Updates

- All documents are **v0.1 — Initial Draft**; advance via Review Tracker and Version Register.
- **SLAs / review deadlines** are **[Missing Input]** (OD-05); counsel review gated by **LD-14**.
- Keep the **Index** synced as documents are added or updated.
- Populate **[Insert Date]**, reviewers, and access grants when the data room activates.
- Update **[Insert Date]** on issue and increment the version on material revision.

---

### Position in Phase 1 — الموقع ضمن المرحلة الأولى

This bundle is part of the **ELAN Group United — Stakeholder Data Room (Phase 1)**, one coherent set of eight bundles sharing a single financial framing, terminology, and figure set. See the root `README.md` and `MASTER_INDEX.md` for the complete map.

| # | Bundle | Role |
|---|---|---|
| 01 | Investment Decision (حزمة القرار الاستثماري) | the decision and terms |
| 02 | Financial Model (حزمة النموذج المالي) | the 15-year dashboard and supporting logic |
| 03 | Use of Funds (حزمة توظيف رأس المال) | capital → operating capability |
| 04 | Revenue Channels (حزمة قنوات الإيراد) | capability → verifiable revenue |
| 05 | Governance & Risk (حزمة الحوكمة والمخاطر) | how decisions, capital, and risk are governed |
| 06 | Ecosystem & Operations (حزمة المنظومة والتشغيل) | how the ecosystem runs |
| 07 | Legal & Regulatory Review (حزمة العناية القانونية والتنظيمية) | the legal review path before commitment |
| 08 | Data Room & Document Control (حزمة غرفة البيانات وضبط المستندات) | how documents are controlled ← **this bundle** |

---

### Version Reference

**v0.1 — Initial Draft.** Prepared to control the data room, not to conclude any review. Every document remains conditional on review, adoption, and replacement of working assumptions with real data.

---

*Data Room & Document Control Bundle — README · v0.1 — Initial Draft · [Insert Date] · ELAN Group United (مجموعة إيلان المتحدة)*
