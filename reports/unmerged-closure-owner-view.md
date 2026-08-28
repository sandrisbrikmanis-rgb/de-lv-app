# Unmerged closure — OWNER view (53/53)

**Generated:** 2026-08-28T19:05:32.733Z
**ORIGIN_MAIN_SHA:** `93c372824359b00bd73d37ae3193bdf587118e75`
**PR #693 HEAD:** `e8bcf52acde9d37ce6eb020c511a1fb71f1624e0`
**OWNER_AUTO_ACCEPTED:** 0/53 (all pending OWNER approval)
**OWNER_PENDING:** 53/53

## Summary

| Metric | Count |
|--------|------:|
| EVIDENCE_SUFFICIENT | 12 |
| EVIDENCE_INSUFFICIENT | 41 |
| recommended BLOCKED_OWNER_DECISION | 1 |
| recommended CLOSED_SUPERSEDED | 12 |
| recommended NEEDS_SOURCE_REVIEW | 40 |

---

## PR #528 — `cursor/cs-kurs-articles-full-audit-6850`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `506e9a75eb55cf8a31b38ee6d25a7fd964cec9ff` |
| B (tip) | `fd2178e22676bfedcc1b482ff7a1dd55323455be` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 234 |
| Field counts | RETAINED=42 REPLACED=31 NOT_PRESENT=0 CONFLICTING=161 UNRESOLVED=0 |
| Rationale | PR #528: 234 delta fields; CONFLICTING=161, RETAINED=42, REPLACED_WITH_EVIDENCE=31. 161 fields lack field-level OWNER/closure linkage to final main value — Kurss closure reports/commits alone insufficient. |

**Problem fields (sample):**

- `html.kurssArticlesLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssLesson6` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssLesson5` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssLesson4` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssLesson3` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson1.subtitle` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson3.subtitle` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson3.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson4.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson5.subtitle` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 151 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #343 — `cursor/en-b1-critical-repair-6850`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `ee99e64ea571b6d8ffff38bc6530ce7815ceeeb6` |
| B (tip) | `272319f03e6db693db5bd0fdffe8e959b43acc79` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 17 |
| Field counts | RETAINED=0 REPLACED=16 NOT_PRESENT=1 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | PR #343: 17 delta fields; NOT_PRESENT=1 (card.fressen.study.sectionAccents.explanation.purple[2] — branch added 3rd element "wolf down", main restored A-length array ["eat","tomorrow"]). Cannot recommend CLOSED_SUPERSEDED without OWNER source review on structural sectionAccents change. |

**Problem fields (sample):**

- `card.fressen.study.sectionAccents.explanation.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #123 — `cursor/audit-kurss-content-5a8d`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `c5bc3c85b3ab79e3a0840700dff0f2489ac9ad47` |
| B (tip) | `bac9ca1ae442de030c959d6c571eaee9ca6b0eee` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 65 |
| Field counts | RETAINED=47 REPLACED=14 NOT_PRESENT=0 CONFLICTING=4 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=4, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `html.kurssLesson2` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson2.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson14.sections[3].items[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson14.sections[3].items[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #423 — `cursor/cs-a1-critical-final-repair-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `fb84f93b62cee22d47987c3295cd539d30d6883d` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 45 |
| Field counts | RETAINED=37 REPLACED=0 NOT_PRESENT=2 CONFLICTING=6 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=2, CONFLICTING=6, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.es.study.explanation` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.es.study.info[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #456 — `cursor/cs-a1-final-main-repair-batch04-final10-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `72f376484bd1804f57803f53c4a3cdb182358709` |
| B (tip) | `cb5d5de485bbff7be410695bf12bd19631b9beb8` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 116 |
| Field counts | RETAINED=112 REPLACED=1 NOT_PRESENT=0 CONFLICTING=3 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=3, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.Urlaub.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Urlaub.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Urlaub.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #455 — `cursor/cs-a1-final-main-repair-batch101-150-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `72f376484bd1804f57803f53c4a3cdb182358709` |
| B (tip) | `5cefdabe19428e5cb4e23c773e81f5319a87f74e` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 106 |
| Field counts | RETAINED=105 REPLACED=1 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (106 delta fields): RETAINED=105, REPLACED_WITH_EVIDENCE=1; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #454 — `cursor/cs-a1-final-main-repair-batch51-100-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `72f376484bd1804f57803f53c4a3cdb182358709` |
| B (tip) | `41e6db4c08a24432ed613315afb85ae939191fb8` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 56 |
| Field counts | RETAINED=55 REPLACED=1 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (56 delta fields): RETAINED=55, REPLACED_WITH_EVIDENCE=1; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #458 — `cursor/cs-a1-final-missing-study-parity-repair-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `72f376484bd1804f57803f53c4a3cdb182358709` |
| B (tip) | `39fed3ce220e3f1a05f0401058f6f4ba85aa3d3e` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 589 |
| Field counts | RETAINED=573 REPLACED=1 NOT_PRESENT=6 CONFLICTING=9 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=6, CONFLICTING=9, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.besuchen.study.sectionAccents.tip.left.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.besuchen.study.sectionAccents.tip.left.purple[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.sectionAccents.important[0].green[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.sectionAccents.important[1].purple[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.sectionAccents.important[1].purple[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.ein.study.sectionAccents.important[0].red[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.ein.study.sectionAccents.important[1].blue[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.sectionAccents.important[1].blue[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.ein.study.sectionAccents.important[1].green[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.sectionAccents.important[1].green[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 5 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #452 — `cursor/cs-a1-final-post-repair-audit-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `d672651215eba6fb1b05c8046d38092a0591b7bf` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 301 |
| Field counts | RETAINED=281 REPLACED=7 NOT_PRESENT=0 CONFLICTING=13 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=13, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bringen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.euch.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.müssen.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 3 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #459 — `cursor/cs-a1-final-study-parity-sectionaccents-micro-repair-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `72f376484bd1804f57803f53c4a3cdb182358709` |
| B (tip) | `698277bf7fe1ebc369155e2c419b5555173f91da` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 596 |
| Field counts | RETAINED=580 REPLACED=1 NOT_PRESENT=10 CONFLICTING=5 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=10, CONFLICTING=5, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.Bitte.study.sectionAccents.important[2].green[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.sectionAccents.important[2].purple[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.sectionAccents.important[2].purple[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.ein.study.sectionAccents.important[2].blue[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.ein.study.sectionAccents.important[2].green[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.ein.study.sectionAccents.important[3].blue[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.ein.study.sectionAccents.important[3].green[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.ein.study.sectionAccents.important[3].green[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.es.study.sectionAccents.important[2].red[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.es.study.sectionAccents.important[2].purple[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- … and 5 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #438 — `cursor/cs-a1-full-review-repair-block01-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `08e9a8626b70832c81cb1fa6df36c73eb98ca284` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 20 |
| Field counts | RETAINED=20 REPLACED=0 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (20 delta fields): RETAINED=20, REPLACED_WITH_EVIDENCE=0; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #439 — `cursor/cs-a1-full-review-repair-block02-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `c09c4a763b07e37848908ae8d893e649ecc257ac` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 36 |
| Field counts | RETAINED=35 REPLACED=1 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (36 delta fields): RETAINED=35, REPLACED_WITH_EVIDENCE=1; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #440 — `cursor/cs-a1-full-review-repair-block03-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `5035ec4f992cd6788c153bfaf59a104b92b8268c` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 67 |
| Field counts | RETAINED=65 REPLACED=1 NOT_PRESENT=0 CONFLICTING=1 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=1, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #441 — `cursor/cs-a1-full-review-repair-block04-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `5245080aa16ce6a65674b84b1ce726a7aa9ca940` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 80 |
| Field counts | RETAINED=77 REPLACED=1 NOT_PRESENT=0 CONFLICTING=2 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=2, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bringen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #442 — `cursor/cs-a1-full-review-repair-block05-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `665a5d15f280e9dd592137092157926d5c94caf7` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 99 |
| Field counts | RETAINED=94 REPLACED=1 NOT_PRESENT=0 CONFLICTING=4 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=4, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bringen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.euch.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #443 — `cursor/cs-a1-full-review-repair-block06-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `a84489535295850d300c047826ee593c7aaf51a0` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 123 |
| Field counts | RETAINED=118 REPLACED=1 NOT_PRESENT=0 CONFLICTING=4 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=4, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bringen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.euch.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #444 — `cursor/cs-a1-full-review-repair-block07-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `3e5f40273fe74caed18b2355955fec4fdcc06e16` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 149 |
| Field counts | RETAINED=144 REPLACED=1 NOT_PRESENT=0 CONFLICTING=4 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=4, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bringen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.euch.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #445 — `cursor/cs-a1-full-review-repair-block08-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `bddf580440055e033568ccc4695ab52f6af8f75b` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 188 |
| Field counts | RETAINED=176 REPLACED=1 NOT_PRESENT=0 CONFLICTING=11 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=11, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bringen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.euch.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.müssen.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 1 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #446 — `cursor/cs-a1-full-review-repair-block09-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `2df1f0cf2c317b5916e4d75aba5b5f40202cd17e` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 215 |
| Field counts | RETAINED=203 REPLACED=1 NOT_PRESENT=0 CONFLICTING=11 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=11, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bringen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.euch.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.müssen.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 1 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #447 — `cursor/cs-a1-full-review-repair-block10-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `1108ea918a656631a01e7293ed8c8c810747f544` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 248 |
| Field counts | RETAINED=231 REPLACED=5 NOT_PRESENT=0 CONFLICTING=12 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=12, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bringen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.euch.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.müssen.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 2 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #448 — `cursor/cs-a1-full-review-repair-block11-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `9b59589c394d96a69c59abfb0b6eb33f310c3743` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 277 |
| Field counts | RETAINED=259 REPLACED=6 NOT_PRESENT=0 CONFLICTING=12 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=12, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bringen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.euch.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.müssen.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 2 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #449 — `cursor/cs-a1-full-review-repair-block12-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `c559de98fb43547408813969da4e67374bc11109` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 301 |
| Field counts | RETAINED=281 REPLACED=7 NOT_PRESENT=0 CONFLICTING=13 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=13, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.baden.study.comparison[0].meaning` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bringen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ein.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.euch.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Mal.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.morgen.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.müssen.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 3 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #436 — `cursor/cs-a1-high-final-closure-check-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `9b3ebe3fd1c7d5a3268e02ba37376e85304016cb` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 356 |
| Field counts | RETAINED=326 REPLACED=0 NOT_PRESENT=8 CONFLICTING=22 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=8, CONFLICTING=22, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.sprechen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.auch.study.examples[1].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.aus.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 20 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #435 — `cursor/cs-a1-high-final-micro-repair-02-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `51b11f6951bc6270764100297984d747ad4af9b6` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 356 |
| Field counts | RETAINED=326 REPLACED=0 NOT_PRESENT=8 CONFLICTING=22 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=8, CONFLICTING=22, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.sprechen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.auch.study.examples[1].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.aus.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 20 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #432 — `cursor/cs-a1-high-post-repair-audit-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `9c2947c86ae7d37454d46ebd8657aee16ffaa3d7` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 338 |
| Field counts | RETAINED=307 REPLACED=0 NOT_PRESENT=8 CONFLICTING=23 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=8, CONFLICTING=23, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.auch.study.examples[1].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.aus.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 21 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #433 — `cursor/cs-a1-high-regression-final-repair-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `c14e9211244564860c08888a3c8ea37cbcc1ecfc` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 354 |
| Field counts | RETAINED=324 REPLACED=0 NOT_PRESENT=8 CONFLICTING=22 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=8, CONFLICTING=22, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.sprechen.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.auch.study.examples[1].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.aus.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 20 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #426 — `cursor/cs-a1-high-repair-block01-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `26138f92f0379cffaa93844aa258b83a418bed45` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 95 |
| Field counts | RETAINED=86 REPLACED=0 NOT_PRESENT=2 CONFLICTING=7 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=2, CONFLICTING=7, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.blond.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.es.study.explanation` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.es.study.info[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #427 — `cursor/cs-a1-high-repair-block02-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `8dc45cfc8eca72f6e33307d5f8076039ac9b33fc` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 145 |
| Field counts | RETAINED=133 REPLACED=0 NOT_PRESENT=2 CONFLICTING=10 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=2, CONFLICTING=10, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.blond.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.das.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.es.study.explanation` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.es.study.info[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 2 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #428 — `cursor/cs-a1-high-repair-block03-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `a4fe739b08f270ef53ff50192a90e7729eacd43e` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 195 |
| Field counts | RETAINED=176 REPLACED=0 NOT_PRESENT=3 CONFLICTING=16 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=3, CONFLICTING=16, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.blond.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.das.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.es.study.explanation` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.es.study.info[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 9 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #429 — `cursor/cs-a1-high-repair-block04-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `b320920c298758f1b727e4905b3cf3450453b427` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 245 |
| Field counts | RETAINED=225 REPLACED=0 NOT_PRESENT=3 CONFLICTING=17 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=3, CONFLICTING=17, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.blond.lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.das.study.tip.text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.es.study.explanation` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.es.study.info[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 10 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #430 — `cursor/cs-a1-high-repair-block05-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `1c813d16320e79bc39e4fe320740a137aece0ec5` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 296 |
| Field counts | RETAINED=268 REPLACED=0 NOT_PRESENT=8 CONFLICTING=20 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=8, CONFLICTING=20, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.auch.study.examples[1].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.tip[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- … and 18 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #431 — `cursor/cs-a1-high-repair-block06-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `3d134c9cb25625dfd3eb73800996630cff2aa826` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 338 |
| Field counts | RETAINED=307 REPLACED=0 NOT_PRESENT=8 CONFLICTING=23 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=8, CONFLICTING=23, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.auch.study.examples[1].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.aus.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[2]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bitte.study.explanation[3]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[0]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.bitte.study.tip[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.Bitte.study.explanation[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Bitte.study.explanation[3]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 21 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #421 — `cursor/cs-a1-post-repair-audit-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| B (tip) | `563b193f79d170bfc8039578d50597a9b55de3c2` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 6 |
| Field counts | RETAINED=6 REPLACED=0 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (6 delta fields): RETAINED=6, REPLACED_WITH_EVIDENCE=0; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #502 — `cursor/cs-b1-final-2card-micro-repair-apply-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `f4e8430a35ad7bb19dba28918941d63865b4f029` |
| B (tip) | `566c275c4d4c28d107eda97c70007b6cdbd0bf1c` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 63 |
| Field counts | RETAINED=62 REPLACED=0 NOT_PRESENT=0 CONFLICTING=1 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=1, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.Inhalt.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #503 — `cursor/cs-b1-final-micro-regression-closure-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `f4e8430a35ad7bb19dba28918941d63865b4f029` |
| B (tip) | `f45f531eee7956310a2de262249592c23eab63e6` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 63 |
| Field counts | RETAINED=62 REPLACED=0 NOT_PRESENT=0 CONFLICTING=1 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=1, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.Inhalt.study.comparison[1].example` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #508 — `cursor/cs-b2-final-closure-audit-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `8400573aa829dff8ce953cb6e84526b6e550dcf6` |
| B (tip) | `6f798efc6781a0d7b76907fda52b8c76d0fb00a7` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 947 |
| Field counts | RETAINED=0 REPLACED=947 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (947 delta fields): RETAINED=0, REPLACED_WITH_EVIDENCE=947; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #506 — `cursor/cs-b2-owner-copy-only-repair-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `8400573aa829dff8ce953cb6e84526b6e550dcf6` |
| B (tip) | `35e1301425f3800fdaceca7810c6c8af5b9d98f1` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 947 |
| Field counts | RETAINED=0 REPLACED=947 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (947 delta fields): RETAINED=0, REPLACED_WITH_EVIDENCE=947; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #507 — `cursor/cs-b2-targeted-regression-audit-6ea4`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `8400573aa829dff8ce953cb6e84526b6e550dcf6` |
| B (tip) | `e276650a10b556812483568c47a755657ccfae87` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 947 |
| Field counts | RETAINED=0 REPLACED=947 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (947 delta fields): RETAINED=0, REPLACED_WITH_EVIDENCE=947; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #579 — `cursor/da-kurss-full-luna-audit-fffe`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `bd02b6f7c2b93fa3b02c63c267e04bf592d7ba89` |
| B (tip) | `be850b4fef08b4bbb07c5238223dc73a2a71eeef` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 18 |
| Field counts | RETAINED=0 REPLACED=7 NOT_PRESENT=0 CONFLICTING=11 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=11, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `html.kurssArticlesLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssPronunciationLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssConsonantsLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssSentenceStructureLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson1.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson2.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson3.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson4.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson5.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson6.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 1 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #581 — `cursor/da-kurss-post-luna-owner-repair-fffe`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `bd02b6f7c2b93fa3b02c63c267e04bf592d7ba89` |
| B (tip) | `222daa5f9849614ed366d3650ce55d9b3aa27007` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 28 |
| Field counts | RETAINED=1 REPLACED=21 NOT_PRESENT=0 CONFLICTING=6 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=6, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `html.kurssArticlesLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssPronounsLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssPronunciationLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssConsonantsLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssSentenceStructureLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson21.sections[5].cards[1].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #580 — `cursor/da-kurss-post-luna-reaudit-fffe`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `bd02b6f7c2b93fa3b02c63c267e04bf592d7ba89` |
| B (tip) | `38bb8af57f7cb5b50328001ef1d752bfdac890b0` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 18 |
| Field counts | RETAINED=0 REPLACED=7 NOT_PRESENT=0 CONFLICTING=11 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=11, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `html.kurssArticlesLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssPronunciationLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssConsonantsLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssSentenceStructureLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson1.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson2.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson3.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson4.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson5.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson6.legacyHtml` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 1 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #582 — `cursor/da-kurss-post-repair-full-luna-audit-fffe`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `bd02b6f7c2b93fa3b02c63c267e04bf592d7ba89` |
| B (tip) | `6b43a6f87b2683f14fa5db41cf13a8412fdf33f3` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 28 |
| Field counts | RETAINED=1 REPLACED=21 NOT_PRESENT=0 CONFLICTING=6 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=6, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `html.kurssArticlesLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssPronounsLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssPronunciationLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssConsonantsLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `html.kurssSentenceStructureLesson` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `data.kurssLesson21.sections[5].cards[1].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #564 — `cursor/da-verbs-final-post-repair-owner-repair-fffe`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **BLOCKED_OWNER_DECISION** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `e656f8f9a51aa03e3c3f2d47866ff7d3612b034b` |
| B (tip) | `c7e6e8a1fbcf87ca99a1e64b56843e8332756765` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 0 |
| Field counts | RETAINED=0 REPLACED=0 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Insufficient field-level evidence for automatic recommendation ({"RETAINED":0,"REPLACED_WITH_EVIDENCE":0,"REPLACED_WITHOUT_EVIDENCE":0,"NOT_PRESENT":0,"CONFLICTING":0,"UNRESOLVED":0}). |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #345 — `cursor/en-b1-high-repair-01-6850`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `ee99e64ea571b6d8ffff38bc6530ce7815ceeeb6` |
| B (tip) | `48fbfa8ce6ffbc6414c9f877f3787f8342523976` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 159 |
| Field counts | RETAINED=76 REPLACED=42 NOT_PRESENT=9 CONFLICTING=32 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=9, CONFLICTING=32, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.berichten.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Blase.study.explanation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Blase.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bloß.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.tip.leftBlocks[0].text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.fressen.study.sectionAccents.explanation.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.handeln.study.sectionAccents.tip.leftBlocks[0].text.purple[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 31 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #347 — `cursor/en-b1-high-repair-02-6850`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `ee99e64ea571b6d8ffff38bc6530ce7815ceeeb6` |
| B (tip) | `51a9d9af34fa9c197358ce08dcb1b9e4cf36453d` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 230 |
| Field counts | RETAINED=104 REPLACED=70 NOT_PRESENT=23 CONFLICTING=33 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=23, CONFLICTING=33, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.berichten.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Blase.study.explanation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Blase.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bloß.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.tip.leftBlocks[0].text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.fressen.study.sectionAccents.explanation.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.handeln.study.sectionAccents.tip.leftBlocks[0].text.purple[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 46 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #349 — `cursor/en-b1-high-repair-03-6850`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `ee99e64ea571b6d8ffff38bc6530ce7815ceeeb6` |
| B (tip) | `45f51dac4e189424fd633683c7ef983538c20a50` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 255 |
| Field counts | RETAINED=129 REPLACED=70 NOT_PRESENT=23 CONFLICTING=33 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=23, CONFLICTING=33, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.berichten.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Blase.study.explanation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Blase.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bloß.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.tip.leftBlocks[0].text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.fressen.study.sectionAccents.explanation.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.handeln.study.sectionAccents.tip.leftBlocks[0].text.purple[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 46 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #351 — `cursor/en-b1-high-repair-04-6850`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `ee99e64ea571b6d8ffff38bc6530ce7815ceeeb6` |
| B (tip) | `adaf8c60b2c6ed6497d61c9e28601e1c0d303c7e` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 280 |
| Field counts | RETAINED=153 REPLACED=71 NOT_PRESENT=23 CONFLICTING=33 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=23, CONFLICTING=33, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.berichten.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Blase.study.explanation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Blase.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bloß.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.tip.leftBlocks[0].text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.fressen.study.sectionAccents.explanation.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.handeln.study.sectionAccents.tip.leftBlocks[0].text.purple[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 46 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #353 — `cursor/en-b1-high-repair-05-6850`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `ee99e64ea571b6d8ffff38bc6530ce7815ceeeb6` |
| B (tip) | `45f5464bdb548df6cb3acf0e5f083653a091e810` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 304 |
| Field counts | RETAINED=176 REPLACED=72 NOT_PRESENT=23 CONFLICTING=33 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=23, CONFLICTING=33, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.berichten.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Blase.study.explanation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Blase.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.bloß.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.tip.leftBlocks[0].text` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[1]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.entlassen.study.sectionAccents.tip.leftBlocks[0].text.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.fressen.study.sectionAccents.explanation.purple[2]` — NOT_PRESENT: Path/value from branch delta absent on current main — requires OWNER source review.
- `card.handeln.study.sectionAccents.tip.leftBlocks[0].text.purple[1]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 46 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #669 — `cursor/es-kurss-articles-visual-repair-3141`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `860cca7fa508251ed40792bcf7325ab0b8d1c6d9` |
| B (tip) | `6388b04780fb239db216ab12754bcd08a6066096` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 1 |
| Field counts | RETAINED=1 REPLACED=0 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (1 delta fields): RETAINED=1, REPLACED_WITH_EVIDENCE=0; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #670 — `cursor/es-kurss-pronouns-visual-repair-3141`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `860cca7fa508251ed40792bcf7325ab0b8d1c6d9` |
| B (tip) | `a984da86998a916138874ac37de13900bd2f7296` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 1 |
| Field counts | RETAINED=1 REPLACED=0 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (1 delta fields): RETAINED=1, REPLACED_WITH_EVIDENCE=0; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #672 — `cursor/es-kurss-sentence-structure-visual-repair-3141`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `860cca7fa508251ed40792bcf7325ab0b8d1c6d9` |
| B (tip) | `d8486d170d0ff6eda635a6d50ac01e030f10e80c` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 1 |
| Field counts | RETAINED=1 REPLACED=0 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (1 delta fields): RETAINED=1, REPLACED_WITH_EVIDENCE=0; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #671 — `cursor/es-kurss-verb-basics-visual-repair-3141`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_SUFFICIENT |
| Recommended category | **CLOSED_SUPERSEDED** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `860cca7fa508251ed40792bcf7325ab0b8d1c6d9` |
| B (tip) | `4c0dd5cecff198d60860f40de30fa1683ee1cb63` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 1 |
| Field counts | RETAINED=1 REPLACED=0 NOT_PRESENT=0 CONFLICTING=0 UNRESOLVED=0 |
| Rationale | Field inventory complete (1 delta fields): RETAINED=1, REPLACED_WITH_EVIDENCE=0; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only. |

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

## PR #586 — `cursor/et-de-a1-full-audit-ba9e`

| Item | Value |
|------|-------|
| Validation | EVIDENCE_INSUFFICIENT |
| Recommended category | **NEEDS_SOURCE_REVIEW** |
| resolvedCategory | _null (OWNER pending)_ |
| A (base) | `8c82df0454dad44636830145e26e5b8e52aa4184` |
| B (tip) | `ef3e74c46f4cf1570f0c79f235dc2431796ef670` |
| C (main) | `93c372824359b00bd73d37ae3193bdf587118e75` |
| Delta fields | 609 |
| Field counts | RETAINED=596 REPLACED=0 NOT_PRESENT=0 CONFLICTING=13 UNRESOLVED=0 |
| Rationale | Field-level gaps: NOT_PRESENT=0, CONFLICTING=13, UNRESOLVED=0. Draft/historical branch requires per-field OWNER review. |

**Problem fields (sample):**

- `card.Besuch.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Besuch.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Besuch.study.sectionAccents.examples[2].lv.purple[0]` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.besuchen.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Fußball.study.examples[1].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.ganz.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Geschichte.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Hand.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.Hand.study.examples[2].lv` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- `card.hübsch.study.translation` — CONFLICTING: A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.
- … and 3 more (see field-level MD/JSON)

**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.

---

