# DA–DE Kurss — final integration reconciliation

Generated: 2026-08-18  
Mode: **CONSOLIDATION ONLY** (no new Luna audit, no new translations)

## Final verdict

**BLOCKED**

Integration branch consolidates production repairs from both parallel lines, but **4 OWNER overlap conflicts** remain on the same production targets with **different approved `ownerNew` values**. Per integration rules: no automatic tie-break, no new linguistic decisions.

---

## Git

| Item | Value |
|------|-------|
| Integration branch | `cursor/da-kurss-final-integration-fffe` |
| HEAD SHA | `90a6870a` |
| Common base | `bd02b6f7` — Apply DA Kurss OWNER decisions for lessons 12–21 |
| Base also includes | `8d9c1558` — section-pack OWNER decisions (sections 01–11) on ancestry to `bd02b6f7` |

### Production commits integrated (authoritative)

| SHA | PR / line | Production scope |
|-----|-----------|------------------|
| `bd02b6f7` | main | Lessons 12–21 OWNER COPY-ONLY |
| `8d9c1558` | main ancestry | Section-pack 01–11 OWNER COPY-ONLY |
| `be850b4f` | #579 / A line | **47 Luna/OWNER LABOT** (+ lesson7 16/16 `.lv`) |
| *(integration apply)* | #581 targets | **41 monolithic LABOT** re-applied on top of `be850b4f` |
| *(integration apply)* | #581 NSR | **Finding 62** (3 HTML fragments, `kurssSentenceStructureLesson`) |

### Report-only commits (NOT treated as production repair)

| SHA | PR | Note |
|-----|-----|------|
| `d259e3ab` | #579 | Initial Luna audit reports |
| `bee2c467` | #579 | OWNER review pack |
| `38bb8af5` | #580 | Post-repair re-audit reports (69 findings) |
| `ea40ec29` | #581 | Monolithic apply + report artifacts (production re-applied via integration apply) |
| `6b43a6f8` | #582 | Full Luna audit reports — **not used as repair source** |

### Branch divergence resolved

```
bd02b6f7
 ├─ A: be850b4f (47 LABOT) ──► integrated as branch start
 └─ B: ea40ec29 (41 LABOT) ──► re-applied onto A via apply map (not blind merge)
```

**Conflicts during cherry-pick:** `courseLessons.js`, `courseTrainingCards.js` — resolved by **apply-map reconciliation** (not `ours`/`theirs`).

---

## OWNER repairs — 47-set (Luna / A line)

Source: `reports/temp/da-kurss-full-luna-owner-apply-map.json` @ `be850b4f`

| Metric | Count |
|--------|------:|
| Requested | 47 |
| Present (verified) | **47/47** |
| Missing | 0 |
| Value mismatch | 0 |

Note: entry `DA-KURSS-0008` uses `applyMode: htmlZeroWidthStrip` (no `ownerNew`); verified by **absence of ZERO_WIDTH** in `kurssArticlesLesson` HTML.

---

## OWNER repairs — 41-set (monolithic / #581)

Source: `reports/temp/da-kurss-owner-apply-map-integration-41.json` @ `ea40ec29`

| Metric | Count |
|--------|------:|
| Requested | 41 |
| Present (verified) | **38/41** |
| Missing | 0 |
| Value mismatch | **3** |

### 41-set VALUE_MISMATCH

| # | Path | 41-set expected | Integration actual | Reason |
|---|------|-----------------|-------------------|--------|
| 12 | `kurssLesson3.subtitle` | `Artikler, pronominer og oversættelse` | `Dialoger, ord, udtale, grammatik og oversættelse` | **47-set LABOT already applied** on same field |
| 68 | `lesson7ExerciseCardsDa[4].lv` | `at tælle` | `tælle` | **47-set LABOT** used different approved gloss |
| 69 | `lesson7ExerciseCardsDa[12].lv` | `at åbne` | `åbne` | **47-set LABOT** used different approved gloss |

Apply log: 38 applied, 3 `CURRENT_VALUE_MISMATCH` (expected — not forced overwrite).

---

## Overlaps (47 ∩ 41)

| Metric | Count |
|--------|------:|
| 47-set entries | 47 |
| 41-set entries | 41 |
| Same target key (path + applyMode) | 4 |
| Same target, **same** ownerNew | 0 |
| Same target, **conflicting** ownerNew | **4** |

### OWNER overlap conflicts (STOP — needs tie-break)

| Target | 47-set ownerNew | 41-set ownerNew |
|--------|-----------------|-----------------|
| `kurssLesson3.subtitle` | `Dialoger, ord, udtale, grammatik og oversættelse` | `Artikler, pronominer og oversættelse` |
| `COURSE_LESSON_HTML.kurssConsonantsLesson` | `Bad — bad` (htmlSubstring) | `<li>ß → s</li>` (htmlSubstring) |
| `lesson7ExerciseCardsDa[4].lv` | `tælle` | `at tælle` |
| `lesson7ExerciseCardsDa[12].lv` | `åbne` | `at åbne` |

**Consonants note:** both HTML fragments **are present** in production (non-exclusive edits). Conflict is **documentation/verification** on overlapping apply targets, not missing content.

### Unique targets (estimate)

| Set | Unique to set |
|-----|--------------:|
| 47-only | 43 |
| 41-only | 37 |
| Shared target keys | 4 |
| **Estimated unique production targets** | **~80** (not 88 = 47+41) |

---

## Lesson 7 — `lesson7ExerciseCardsDa`

| Check | Result |
|-------|--------|
| Expected `.lv` coverage | 16/16 |
| Actual `.lv` coverage | **16/16 PASS** |
| Structure vs LV MASTER | **PASS** (0 missing native fields) |

| Index | infinitive | `.lv` (actual) | 47-set | 41-set |
|------:|------------|----------------|--------|--------|
| 0 | fragen | at spørge | ✓ | — |
| 1 | antworten | at svare | ✓ | — |
| 2 | loben | at rose | ✓ | — |
| 3 | lieben | at elske | ✓ | — |
| 4 | zählen | **tælle** | ✓ | expects `at tælle` ⚠ |
| 5 | zeigen | at vise | ✓ | — |
| 6 | zeichnen | at tegne | ✓ | — |
| 7 | rechnen | at regne | ✓ | — |
| 8 | arbeiten | at arbejde | ✓ | — |
| 9 | kommen | at komme | ✓ | — |
| 10 | gehen | at gå | ✓ | — |
| 11 | stehen | at stå | ✓ | — |
| 12 | öffnen | **åbne** | ✓ | expects `at åbne` ⚠ |
| 13 | singen | at synge | ✓ | — |
| 14 | tun | at gøre | ✓ | — |
| 15 | nehmen | at tage | ✓ | — |

---

## NSR Finding 62

| Check | Result |
|-------|--------|
| Applied on integration | **YES** |
| 3 HTML replacements in `kurssSentenceStructureLesson` | **PASS** |

---

## Safety

| Gate | Result |
|------|--------|
| DE changes vs `bd02b6f7` | **0 PASS** |
| LV MASTER changes | **0 PASS** |
| data ↔ www mirror | **PASS** |
| Unexpected production files | Only expected DA Kurss paths changed vs base |

---

## Technical gates

| Gate | Result |
|------|--------|
| JavaScript syntax | **PASS** |
| `validate-kurss.js --lang=da` | **PASS** |
| Structure vs LV MASTER | **PASS** (0 issues) |
| ID/order | **PASS** (via validate-kurss) |
| Mirror | **PASS** |

---

## What BLOCKED means

Integration **did consolidate** the parallel-branch problem:

- ✅ Single branch with 47-set + most of 41-set + NSR-62
- ✅ Lesson7 **16/16** `.lv` (A-line state restored)
- ✅ Structure gate **PASS**
- ✅ DE/LV/mirror **PASS**

**BLOCKED** because STOP rules require:

- 47/47 PRESENT ✅
- 41/41 PRESENT ❌ (38/41 — 3 OWNER conflicts)
- No unresolved OWNER overlap conflicts ❌ (4 conflicts)

**Next step (OWNER, not agent):** for each of the 4 conflict targets, pick **one** approved `ownerNew` (47-set or 41-set). After tie-break COPY-ONLY apply → re-run `node scripts/verify-da-kurss-final-integration.js` → expect `READY_FOR_FINAL_AUDIT`.

**Do NOT run Luna audit until verdict is READY_FOR_FINAL_AUDIT.**

---

## Verification command

```bash
node scripts/verify-da-kurss-final-integration.js
```

JSON output: `reports/temp/da-kurss-final-integration-verify.json`
