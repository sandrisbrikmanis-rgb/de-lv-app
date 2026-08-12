# CS–DE A1 Full Review — Block 13 (Findings 601–650)

**Classification-only block — no production changes.**

## Review coverage

- canonical findings reviewed: **50**
- range: **FULL-A1-00601 … FULL-A1-00650**
- **50/50 canonical findings classified**

## Summary

| Classification | Count |
|----------------|-------|
| LABOT (production repair) | **0** |
| DEFERRED_STRUCTURAL_REVIEW | **30** |
| STALE_ALREADY_FIXED | **18** |
| DE_PARITY_DEFERRED | **2** |
| **Total** | **50** |

- production changes: **0**
- CS changes: **0**
- DE changes: **0**

## Integrity (verified, unchanged)

| Check | Result |
|-------|--------|
| cards | **702** |
| ID/order | **PASS** |
| syntax | **PASS** |
| mirror (`data/cs/a1.js` ↔ `www/data/cs/a1.js`) | **PASS** |
| Study created | **0** |
| Study deleted | **0** |

---

## 1. DEFERRED_STRUCTURAL_REVIEW — 30 findings

These findings indicate missing Study structure or Study sections. The canonical review package does **not** contain authorized full Czech Study content. **No changes in this block.**

### a1-Besuch-87

| Finding | Issue | Status |
|---------|-------|--------|
| FULL-A1-00601 | study missing | DEFERRED_STRUCTURAL_REVIEW |

Production: card exists (`de: Besuch`), **no `study` object**.

### a1-besuchen-89

| Finding | Issue | Status |
|---------|-------|--------|
| FULL-A1-00602 | structure missing | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00603 | study.layout missing | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00604 | study missing | DEFERRED_STRUCTURAL_REVIEW |

Production: card exists (`de: besuchen`), **no `study` object**.

### a1-bitte

| Finding | Issue | Status |
|---------|-------|--------|
| FULL-A1-00605 | missing `study.comparison`, `study.tip.text` | DEFERRED_STRUCTURAL_REVIEW |

Production: **Study exists** (`layout: standardStudy`). `study.comparison` absent; `study.tip` present (array form, no `tip.text`). Composer must not copy/translate LV comparison or tip.text.

### a1-bitte-study

| Finding | Issue | Status |
|---------|-------|--------|
| FULL-A1-00606 | missing `study.comparison`, `study.tip.text` | DEFERRED_STRUCTURAL_REVIEW |

Production: **Study exists** (`de: Bitte`). Same structural gaps as a1-bitte.

### a1-ein

| Finding | Issue | Status |
|---------|-------|--------|
| FULL-A1-00607 | missing `study.comparison` | DEFERRED_STRUCTURAL_REVIEW |

Production: **Study exists**. `study.comparison` absent.

### a1-es

| Finding | Issue | Status |
|---------|-------|--------|
| FULL-A1-00608 | missing `study.comparison` | DEFERRED_STRUCTURAL_REVIEW |

Production: **Study exists**. `study.comparison` absent.

### a1-Fußball-218

| Finding | Issue | Status |
|---------|-------|--------|
| FULL-A1-00629 | CS has no Study, LV reference has Study | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00630 | (structure cluster) | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00631 | (structure cluster) | DEFERRED_STRUCTURAL_REVIEW |

Production: card exists (`de: Fußball`), **no `study` object**.

### a1-ganz-219

| Finding | Status |
|---------|--------|
| FULL-A1-00632 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00633 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00634 | DEFERRED_STRUCTURAL_REVIEW |

Production: card exists (`de: ganz`), **no `study` object**.

### a1-gefallen-225

| Finding | Status |
|---------|--------|
| FULL-A1-00635 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00636 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00637 | DEFERRED_STRUCTURAL_REVIEW |

Production: card exists (`de: gefallen`), **no `study` object**.

### a1-Geschichte-233

| Finding | Status |
|---------|--------|
| FULL-A1-00638 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00639 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00640 | DEFERRED_STRUCTURAL_REVIEW |

Production: card exists (`de: Geschichte`), **no `study` object**.

### a1-Geschwister-234

| Finding | Status |
|---------|--------|
| FULL-A1-00641 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00642 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00643 | DEFERRED_STRUCTURAL_REVIEW |

Production: card exists (`de: Geschwister`), **no `study` object**.

### a1-Großeltern-251

| Finding | Status |
|---------|--------|
| FULL-A1-00644 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00645 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00646 | DEFERRED_STRUCTURAL_REVIEW |

Production: card exists (`de: Großeltern`), **no `study` object**.

### a1-Hand-267

| Finding | Status |
|---------|--------|
| FULL-A1-00647 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00648 | DEFERRED_STRUCTURAL_REVIEW |
| FULL-A1-00649 | DEFERRED_STRUCTURAL_REVIEW |

Production: card exists (`de: Hand`), **no `study` object**.

### a1-hübsch-288

| Finding | Issue | Status |
|---------|-------|--------|
| FULL-A1-00650 | starts new missing-Study structure cluster | DEFERRED_STRUCTURAL_REVIEW |

Production: card exists (`de: hübsch`), **no `study` object**.

---

## 2. STALE_ALREADY_FIXED — 18 findings

All on **a1-fahren** and **a1-es**. Raw audit referenced Latvian remnants or outdated accent targets. Per owner review, production has already been corrected or findings are superseded by current Czech content. **No changes in this block.**

| Finding | Card | Field | Raw audit (superseded) | Owner current (already fixed) |
|---------|------|-------|------------------------|-------------------------------|
| FULL-A1-00609 | a1-es | study.info[0] | Český “es” = vācu “ich” | České „já“ = německé „ich“ |
| FULL-A1-00610 | a1-es | study.info[1] | Vācu “es” = tas • Tā • Bezpersoniska forma | Německé „es“ = to • ono • bezosobní tvar |
| FULL-A1-00611 | a1-fahren | study.important.example | fully Latvian | V němčině může stejné sloveso podle kontextu znamenat: jezdit • vézt • odvézt. |
| FULL-A1-00612 | a1-fahren | study.accents.purple[0] | Braukt | Jezdit |
| FULL-A1-00613 | a1-fahren | study.accents.purple[2] | Vest | Vézt |
| FULL-A1-00614 | a1-fahren | study.accents.purple[4] | Aizvest | Odvézt |
| FULL-A1-00615 | a1-fahren | study.accents.green[1] | Transportlīdzekli | dopravním prostředkem |
| FULL-A1-00616 | a1-fahren | study.accents.green[5] | Velosipēdu | jízdní kolo |
| FULL-A1-00617 | a1-fahren | study.sectionAccents.explanation.purple[1] | vest | vézt |
| FULL-A1-00618 | a1-fahren | study.sectionAccents.important[0].text.purple[0] | braukt | jet |
| FULL-A1-00619 | a1-fahren | study.sectionAccents.important[0].example.purple[0] | braukt | jet |
| FULL-A1-00620 | a1-fahren | study.sectionAccents.important[0].example.purple[1] | vest | vézt |
| FULL-A1-00621 | a1-fahren | study.sectionAccents.important[0].example.purple[2] | aizvest | odvézt |
| FULL-A1-00622 | a1-fahren | study.sectionAccents | detector: vest | no longer present in current accents |
| FULL-A1-00623 | a1-fahren | study.sectionAccents | detector: vest | duplicate/superseded vs current Czech accents |
| FULL-A1-00624 | a1-fahren | study.sectionAccents | detector: braukt | `braukt` not in current sectionAccents |
| FULL-A1-00625 | a1-fahren | study.sectionAccents.explanation | detector: aizvest | LV remnant not in current sectionAccents |
| FULL-A1-00626 | a1-fahren | study.sectionAccents.explanation | stale `vest` / `auto` | current snapshot differs from raw audit state |

---

## 3. DE_PARITY_DEFERRED — 2 findings

German-field parity findings. **DE side must not be touched** in this CS repair cycle.

| Finding | Card | Issue | LV reference | CS production |
|---------|------|-------|--------------|---------------|
| FULL-A1-00627 | a1-Wochenende-181 | missing `de_plural` vs LV | `die Wochenenden` | `de_plural` absent |
| FULL-A1-00628 | a1-Frühstück-207 | missing `de_plural` vs LV | `die Frühstücke` | `de_plural` absent |

Status: **DE_PARITY_DEFERRED** — production changes = 0.

---

## Key conclusion

This block contains **no authorized PIRMS → PĒC production repairs**.

Composer must **not**:

- create missing Study cards
- copy LV Study content to CS
- translate Study content independently
- add comparison/tip fields without authorized Czech content
- modify German `de_plural` fields
- re-rewrite already-fixed a1-fahren fields

---

## Next step (out of scope for this block)

Do **not** create missing Study cards yet. Complete full 689 canonical findings review first. Then produce a separate inventory:

**CS–DE A1 MISSING STUDY PARITY**

Owner/ChatGPT will prepare precise Czech Study content per card; Composer will only copy pre-approved content in a dedicated parity task.

---

_Classified: 2026-08-12 — production changes: 0_
