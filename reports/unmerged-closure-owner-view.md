# Unmerged closure — OWNER view (53/53 FINAL)

**Generated:** 2026-08-28T19:19:56.450Z
**ORIGIN_MAIN_SHA:** `93c372824359b00bd73d37ae3193bdf587118e75`
**PR #693 HEAD:** `a8b884df288293c118047d6c82788798c36ef048`
**OWNER_REVIEWED:** 53/53
**OWNER_PENDING:** 0/53
**VERDICT:** OWNER_DECISIONS_COMPLETE

## Summary

| Metric | Count |
|--------|------:|
| resolved CLOSED_SUPERSEDED | 43 |
| resolved FALSE_POSITIVE | 1 |
| resolved NEEDS_REPAIR | 9 |

---

## PR #528 — `cursor/cs-kurs-articles-full-audit-6850`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 234/234 |
| repairs | 0 |
| Rationale | All 234/234 fields reviewed. 42 RETAINED (B=C), 31 REPLACED (closure baseline), 161 CONFLICTING: main CS Kurss carries authoritative Czech closure content; A/B snapshots contained LV contamination or intermediate audit HTML. No repair — main is linguistically correct. |

---

## PR #343 — `cursor/en-b1-critical-repair-6850`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **NEEDS_REPAIR** |
| **ownerDecision** | **LABOT** |
| reviewedFields | 17/17 |
| repairs | 16 |
| Rationale | All 17/17 fields reviewed. Main retains EN B1 copy errors on fressen (lv/translation "Tomorrow", wrong sectionAccents), Baumstumpf ("Strain"), Tau (dew/race confusion), verfolgen (verförchen/verschreibung/persehen typos). Branch B had correct fixes; 16 fields require COPY-ONLY repair. purple[2] "wolf down" optional — not repaired. |

**Repair sample:**

- `card.Baumstumpf.lv`: Strain → Tree stump
- `card.fressen.lv`: Tomorrow → Eat (of animals)
- `card.fressen.study.translation`: Tomorrow → Eat (of animals)
- `card.fressen.study.explanation`: Main idea: fressen is used when an an... → fressen is the usual verb for animals...
- `card.fressen.study.comparison[0].meaning`: Eat the animal / tomorrow → Eat (of animals) / gobble
- … and 11 more in repair mapping

---

## PR #123 — `cursor/audit-kurss-content-5a8d`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 65/65 |
| repairs | 0 |
| Rationale | All 65/65 fields reviewed. 47 RETAINED on main (B=C); 14 intentionally replaced by closure (C=A or later OWNER mapping). 4 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/audit-kurss-content-5a8d no longer needed. |

---

## PR #423 — `cursor/cs-a1-critical-final-repair-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 45/45 |
| repairs | 0 |
| Rationale | All 45/45 fields reviewed. 37 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 8 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-critical-final-repair-6ea4 no longer needed. |

---

## PR #456 — `cursor/cs-a1-final-main-repair-batch04-final10-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 116/116 |
| repairs | 0 |
| Rationale | All 116/116 fields reviewed. 112 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 3 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-final-main-repair-batch04-final10-6ea4 no longer needed. |

---

## PR #455 — `cursor/cs-a1-final-main-repair-batch101-150-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 106/106 |
| repairs | 0 |
| Rationale | All 106/106 fields reviewed. 105 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 0 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-final-main-repair-batch101-150-6ea4 no longer needed. |

---

## PR #454 — `cursor/cs-a1-final-main-repair-batch51-100-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 56/56 |
| repairs | 0 |
| Rationale | All 56/56 fields reviewed. 55 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 0 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-final-main-repair-batch51-100-6ea4 no longer needed. |

---

## PR #458 — `cursor/cs-a1-final-missing-study-parity-repair-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 589/589 |
| repairs | 0 |
| Rationale | All 589/589 fields reviewed. 573 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 15 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-final-missing-study-parity-repair-6ea4 no longer needed. |

---

## PR #452 — `cursor/cs-a1-final-post-repair-audit-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 301/301 |
| repairs | 0 |
| Rationale | All 301/301 fields reviewed. 281 RETAINED on main (B=C); 7 intentionally replaced by closure (C=A or later OWNER mapping). 13 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-final-post-repair-audit-6ea4 no longer needed. |

---

## PR #459 — `cursor/cs-a1-final-study-parity-sectionaccents-micro-repair-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 596/596 |
| repairs | 0 |
| Rationale | All 596/596 fields reviewed. 580 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 15 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-final-study-parity-sectionaccents-micro-repair-6ea4 no longer needed. |

---

## PR #438 — `cursor/cs-a1-full-review-repair-block01-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 20/20 |
| repairs | 0 |
| Rationale | All 20/20 fields reviewed. 20 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 0 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block01-6ea4 no longer needed. |

---

## PR #439 — `cursor/cs-a1-full-review-repair-block02-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 36/36 |
| repairs | 0 |
| Rationale | All 36/36 fields reviewed. 35 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 0 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block02-6ea4 no longer needed. |

---

## PR #440 — `cursor/cs-a1-full-review-repair-block03-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 67/67 |
| repairs | 0 |
| Rationale | All 67/67 fields reviewed. 65 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 1 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block03-6ea4 no longer needed. |

---

## PR #441 — `cursor/cs-a1-full-review-repair-block04-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 80/80 |
| repairs | 0 |
| Rationale | All 80/80 fields reviewed. 77 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 2 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block04-6ea4 no longer needed. |

---

## PR #442 — `cursor/cs-a1-full-review-repair-block05-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 99/99 |
| repairs | 0 |
| Rationale | All 99/99 fields reviewed. 94 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 4 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block05-6ea4 no longer needed. |

---

## PR #443 — `cursor/cs-a1-full-review-repair-block06-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 123/123 |
| repairs | 0 |
| Rationale | All 123/123 fields reviewed. 118 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 4 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block06-6ea4 no longer needed. |

---

## PR #444 — `cursor/cs-a1-full-review-repair-block07-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 149/149 |
| repairs | 0 |
| Rationale | All 149/149 fields reviewed. 144 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 4 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block07-6ea4 no longer needed. |

---

## PR #445 — `cursor/cs-a1-full-review-repair-block08-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 188/188 |
| repairs | 0 |
| Rationale | All 188/188 fields reviewed. 176 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 11 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block08-6ea4 no longer needed. |

---

## PR #446 — `cursor/cs-a1-full-review-repair-block09-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 215/215 |
| repairs | 0 |
| Rationale | All 215/215 fields reviewed. 203 RETAINED on main (B=C); 1 intentionally replaced by closure (C=A or later OWNER mapping). 11 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block09-6ea4 no longer needed. |

---

## PR #447 — `cursor/cs-a1-full-review-repair-block10-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 248/248 |
| repairs | 0 |
| Rationale | All 248/248 fields reviewed. 231 RETAINED on main (B=C); 5 intentionally replaced by closure (C=A or later OWNER mapping). 12 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block10-6ea4 no longer needed. |

---

## PR #448 — `cursor/cs-a1-full-review-repair-block11-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 277/277 |
| repairs | 0 |
| Rationale | All 277/277 fields reviewed. 259 RETAINED on main (B=C); 6 intentionally replaced by closure (C=A or later OWNER mapping). 12 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block11-6ea4 no longer needed. |

---

## PR #449 — `cursor/cs-a1-full-review-repair-block12-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 301/301 |
| repairs | 0 |
| Rationale | All 301/301 fields reviewed. 281 RETAINED on main (B=C); 7 intentionally replaced by closure (C=A or later OWNER mapping). 13 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-full-review-repair-block12-6ea4 no longer needed. |

---

## PR #436 — `cursor/cs-a1-high-final-closure-check-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 356/356 |
| repairs | 0 |
| Rationale | All 356/356 fields reviewed. 326 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 30 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-high-final-closure-check-6ea4 no longer needed. |

---

## PR #435 — `cursor/cs-a1-high-final-micro-repair-02-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 356/356 |
| repairs | 0 |
| Rationale | All 356/356 fields reviewed. 326 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 30 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-high-final-micro-repair-02-6ea4 no longer needed. |

---

## PR #432 — `cursor/cs-a1-high-post-repair-audit-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 338/338 |
| repairs | 0 |
| Rationale | All 338/338 fields reviewed. 307 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 31 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-high-post-repair-audit-6ea4 no longer needed. |

---

## PR #433 — `cursor/cs-a1-high-regression-final-repair-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 354/354 |
| repairs | 0 |
| Rationale | All 354/354 fields reviewed. 324 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 30 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-high-regression-final-repair-6ea4 no longer needed. |

---

## PR #426 — `cursor/cs-a1-high-repair-block01-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 95/95 |
| repairs | 0 |
| Rationale | All 95/95 fields reviewed. 86 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 9 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-high-repair-block01-6ea4 no longer needed. |

---

## PR #427 — `cursor/cs-a1-high-repair-block02-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 145/145 |
| repairs | 0 |
| Rationale | All 145/145 fields reviewed. 133 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 12 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-high-repair-block02-6ea4 no longer needed. |

---

## PR #428 — `cursor/cs-a1-high-repair-block03-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 195/195 |
| repairs | 0 |
| Rationale | All 195/195 fields reviewed. 176 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 19 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-high-repair-block03-6ea4 no longer needed. |

---

## PR #429 — `cursor/cs-a1-high-repair-block04-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 245/245 |
| repairs | 0 |
| Rationale | All 245/245 fields reviewed. 225 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 20 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-high-repair-block04-6ea4 no longer needed. |

---

## PR #430 — `cursor/cs-a1-high-repair-block05-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 296/296 |
| repairs | 0 |
| Rationale | All 296/296 fields reviewed. 268 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 28 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-high-repair-block05-6ea4 no longer needed. |

---

## PR #431 — `cursor/cs-a1-high-repair-block06-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 338/338 |
| repairs | 0 |
| Rationale | All 338/338 fields reviewed. 307 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 31 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-high-repair-block06-6ea4 no longer needed. |

---

## PR #421 — `cursor/cs-a1-post-repair-audit-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 6/6 |
| repairs | 0 |
| Rationale | All 6/6 fields reviewed. 6 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 0 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-a1-post-repair-audit-6ea4 no longer needed. |

---

## PR #502 — `cursor/cs-b1-final-2card-micro-repair-apply-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 63/63 |
| repairs | 0 |
| Rationale | All 63/63 fields reviewed. 62 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 1 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-b1-final-2card-micro-repair-apply-6ea4 no longer needed. |

---

## PR #503 — `cursor/cs-b1-final-micro-regression-closure-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 63/63 |
| repairs | 0 |
| Rationale | All 63/63 fields reviewed. 62 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 1 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/cs-b1-final-micro-regression-closure-6ea4 no longer needed. |

---

## PR #508 — `cursor/cs-b2-final-closure-audit-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **NEEDS_REPAIR** |
| **ownerDecision** | **LABOT** |
| reviewedFields | 947/947 |
| repairs | 947 |
| Rationale | All 947/947 fields reviewed. CS B2 main retains wrong top-level lv translations (e.g. widersprechen→"Objekt", Akt→"Jednat • Dokument"); branch proposed correct Czech for all 947 delta fields. 947 COPY-ONLY repairs required. |

**Repair sample:**

- `card.widersprechen.lv`: Objekt → Odporovat
- `card.Akt.lv`: Jednat • Dokument → Akt • Dokument
- `card.anbelangen.lv`: Odkazovat → Týkat se
- `card.Anbau.lv`: Rozšíření • Kultivace → Přístavba • Pěstování
- `card.anfertigen.lv`: Dělat → Vyrobit
- … and 942 more in repair mapping

---

## PR #506 — `cursor/cs-b2-owner-copy-only-repair-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **NEEDS_REPAIR** |
| **ownerDecision** | **LABOT** |
| reviewedFields | 947/947 |
| repairs | 947 |
| Rationale | All 947/947 fields reviewed. CS B2 main retains wrong top-level lv translations (e.g. widersprechen→"Objekt", Akt→"Jednat • Dokument"); branch proposed correct Czech for all 947 delta fields. 947 COPY-ONLY repairs required. |

**Repair sample:**

- `card.widersprechen.lv`: Objekt → Odporovat
- `card.Akt.lv`: Jednat • Dokument → Akt • Dokument
- `card.anbelangen.lv`: Odkazovat → Týkat se
- `card.Anbau.lv`: Rozšíření • Kultivace → Přístavba • Pěstování
- `card.anfertigen.lv`: Dělat → Vyrobit
- … and 942 more in repair mapping

---

## PR #507 — `cursor/cs-b2-targeted-regression-audit-6ea4`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **NEEDS_REPAIR** |
| **ownerDecision** | **LABOT** |
| reviewedFields | 947/947 |
| repairs | 947 |
| Rationale | All 947/947 fields reviewed. CS B2 main retains wrong top-level lv translations (e.g. widersprechen→"Objekt", Akt→"Jednat • Dokument"); branch proposed correct Czech for all 947 delta fields. 947 COPY-ONLY repairs required. |

**Repair sample:**

- `card.widersprechen.lv`: Objekt → Odporovat
- `card.Akt.lv`: Jednat • Dokument → Akt • Dokument
- `card.anbelangen.lv`: Odkazovat → Týkat se
- `card.Anbau.lv`: Rozšíření • Kultivace → Přístavba • Pěstování
- `card.anfertigen.lv`: Dělat → Vyrobit
- … and 942 more in repair mapping

---

## PR #579 — `cursor/da-kurss-full-luna-audit-fffe`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 18/18 |
| repairs | 0 |
| Rationale | All 18/18 fields reviewed. 0 RETAINED on main (B=C); 7 intentionally replaced by closure (C=A or later OWNER mapping). 11 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/da-kurss-full-luna-audit-fffe no longer needed. |

---

## PR #581 — `cursor/da-kurss-post-luna-owner-repair-fffe`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 28/28 |
| repairs | 0 |
| Rationale | All 28/28 fields reviewed. 1 RETAINED on main (B=C); 21 intentionally replaced by closure (C=A or later OWNER mapping). 6 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/da-kurss-post-luna-owner-repair-fffe no longer needed. |

---

## PR #580 — `cursor/da-kurss-post-luna-reaudit-fffe`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 18/18 |
| repairs | 0 |
| Rationale | All 18/18 fields reviewed. 0 RETAINED on main (B=C); 7 intentionally replaced by closure (C=A or later OWNER mapping). 11 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/da-kurss-post-luna-reaudit-fffe no longer needed. |

---

## PR #582 — `cursor/da-kurss-post-repair-full-luna-audit-fffe`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 28/28 |
| repairs | 0 |
| Rationale | All 28/28 fields reviewed. 1 RETAINED on main (B=C); 21 intentionally replaced by closure (C=A or later OWNER mapping). 6 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/da-kurss-post-repair-full-luna-audit-fffe no longer needed. |

---

## PR #564 — `cursor/da-verbs-final-post-repair-owner-repair-fffe`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **FALSE_POSITIVE** |
| **ownerDecision** | **NELABOT** |
| reviewedFields | 0/0 |
| repairs | 0 |
| Rationale | PR #564 branch tip has 0 field-level production delta vs merge-base A; DA verbs final post-repair was applied on main via commits cb1456f576d6 (verb-119 Han skrev) and 64d6749a1c9b (63 COPY-ONLY repairs). Candidate is a classification artifact — no unmerged content remains. |

---

## PR #345 — `cursor/en-b1-high-repair-01-6850`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **NEEDS_REPAIR** |
| **ownerDecision** | **LABOT** |
| reviewedFields | 159/159 |
| repairs | 16 |
| Rationale | All 159/159 fields reviewed. 76 RETAINED on main; 16 fields still carry EN B1 corruption (fressen/Baumstumpf/verfolgen/Tau pattern) where branch B had correct copy — COPY-ONLY repair required. 32 CONFLICTING fields: main closure C accepted. |

**Repair sample:**

- `card.Baumstumpf.lv`: Strain → Tree stump
- `card.fressen.lv`: Tomorrow → Eat (of animals)
- `card.fressen.study.translation`: Tomorrow → Eat (of animals)
- `card.fressen.study.explanation`: Main idea: fressen is used when an an... → fressen is the usual verb for animals...
- `card.fressen.study.comparison[0].meaning`: Eat the animal / tomorrow → Eat (of animals) / gobble
- … and 11 more in repair mapping

---

## PR #347 — `cursor/en-b1-high-repair-02-6850`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **NEEDS_REPAIR** |
| **ownerDecision** | **LABOT** |
| reviewedFields | 230/230 |
| repairs | 16 |
| Rationale | All 230/230 fields reviewed. 104 RETAINED on main; 16 fields still carry EN B1 corruption (fressen/Baumstumpf/verfolgen/Tau pattern) where branch B had correct copy — COPY-ONLY repair required. 33 CONFLICTING fields: main closure C accepted. |

**Repair sample:**

- `card.Baumstumpf.lv`: Strain → Tree stump
- `card.fressen.lv`: Tomorrow → Eat (of animals)
- `card.fressen.study.translation`: Tomorrow → Eat (of animals)
- `card.fressen.study.explanation`: Main idea: fressen is used when an an... → fressen is the usual verb for animals...
- `card.fressen.study.comparison[0].meaning`: Eat the animal / tomorrow → Eat (of animals) / gobble
- … and 11 more in repair mapping

---

## PR #349 — `cursor/en-b1-high-repair-03-6850`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **NEEDS_REPAIR** |
| **ownerDecision** | **LABOT** |
| reviewedFields | 255/255 |
| repairs | 16 |
| Rationale | All 255/255 fields reviewed. 129 RETAINED on main; 16 fields still carry EN B1 corruption (fressen/Baumstumpf/verfolgen/Tau pattern) where branch B had correct copy — COPY-ONLY repair required. 33 CONFLICTING fields: main closure C accepted. |

**Repair sample:**

- `card.Baumstumpf.lv`: Strain → Tree stump
- `card.fressen.lv`: Tomorrow → Eat (of animals)
- `card.fressen.study.translation`: Tomorrow → Eat (of animals)
- `card.fressen.study.explanation`: Main idea: fressen is used when an an... → fressen is the usual verb for animals...
- `card.fressen.study.comparison[0].meaning`: Eat the animal / tomorrow → Eat (of animals) / gobble
- … and 11 more in repair mapping

---

## PR #351 — `cursor/en-b1-high-repair-04-6850`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **NEEDS_REPAIR** |
| **ownerDecision** | **LABOT** |
| reviewedFields | 280/280 |
| repairs | 16 |
| Rationale | All 280/280 fields reviewed. 153 RETAINED on main; 16 fields still carry EN B1 corruption (fressen/Baumstumpf/verfolgen/Tau pattern) where branch B had correct copy — COPY-ONLY repair required. 33 CONFLICTING fields: main closure C accepted. |

**Repair sample:**

- `card.Baumstumpf.lv`: Strain → Tree stump
- `card.fressen.lv`: Tomorrow → Eat (of animals)
- `card.fressen.study.translation`: Tomorrow → Eat (of animals)
- `card.fressen.study.explanation`: Main idea: fressen is used when an an... → fressen is the usual verb for animals...
- `card.fressen.study.comparison[0].meaning`: Eat the animal / tomorrow → Eat (of animals) / gobble
- … and 11 more in repair mapping

---

## PR #353 — `cursor/en-b1-high-repair-05-6850`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **NEEDS_REPAIR** |
| **ownerDecision** | **LABOT** |
| reviewedFields | 304/304 |
| repairs | 16 |
| Rationale | All 304/304 fields reviewed. 176 RETAINED on main; 16 fields still carry EN B1 corruption (fressen/Baumstumpf/verfolgen/Tau pattern) where branch B had correct copy — COPY-ONLY repair required. 33 CONFLICTING fields: main closure C accepted. |

**Repair sample:**

- `card.Baumstumpf.lv`: Strain → Tree stump
- `card.fressen.lv`: Tomorrow → Eat (of animals)
- `card.fressen.study.translation`: Tomorrow → Eat (of animals)
- `card.fressen.study.explanation`: Main idea: fressen is used when an an... → fressen is the usual verb for animals...
- `card.fressen.study.comparison[0].meaning`: Eat the animal / tomorrow → Eat (of animals) / gobble
- … and 11 more in repair mapping

---

## PR #669 — `cursor/es-kurss-articles-visual-repair-3141`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 1/1 |
| repairs | 0 |
| Rationale | All 1/1 fields reviewed. 1 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 0 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/es-kurss-articles-visual-repair-3141 no longer needed. |

---

## PR #670 — `cursor/es-kurss-pronouns-visual-repair-3141`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 1/1 |
| repairs | 0 |
| Rationale | All 1/1 fields reviewed. 1 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 0 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/es-kurss-pronouns-visual-repair-3141 no longer needed. |

---

## PR #672 — `cursor/es-kurss-sentence-structure-visual-repair-3141`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 1/1 |
| repairs | 0 |
| Rationale | All 1/1 fields reviewed. 1 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 0 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/es-kurss-sentence-structure-visual-repair-3141 no longer needed. |

---

## PR #671 — `cursor/es-kurss-verb-basics-visual-repair-3141`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_SUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 1/1 |
| repairs | 0 |
| Rationale | All 1/1 fields reviewed. 1 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 0 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/es-kurss-verb-basics-visual-repair-3141 no longer needed. |

---

## PR #586 — `cursor/et-de-a1-full-audit-ba9e`

| Item | Value |
|------|-------|
| evidenceVerdict | EVIDENCE_INSUFFICIENT |
| **resolvedCategory** | **CLOSED_SUPERSEDED** |
| **ownerDecision** | **APSTIPRINĀT** |
| reviewedFields | 609/609 |
| repairs | 0 |
| Rationale | All 609/609 fields reviewed. 596 RETAINED on main (B=C); 0 intentionally replaced by closure (C=A or later OWNER mapping). 13 former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch cursor/et-de-a1-full-audit-ba9e no longer needed. |

---

