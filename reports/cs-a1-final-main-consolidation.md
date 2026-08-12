# CS–DE A1 Final Main Consolidation

## GIT

| Field | Value |
|---|---|
| MAIN_BEFORE | `e52e9a472fcfbe98c285fb8864a0d5a0c7f0e47c` |
| integration branch | `cursor/cs-a1-final-main-consolidation-6850` |
| integration method | HIGH-micro base + mechanical full-review blocks 01–12 apply |
| MAIN_AFTER | `ef1fbffb62cee22d47987c3295cd539d30d6883d` (`origin/main`) |

## DISCOVERY

A1 repair commits found = **22** (batch15 + critical + high×6 + regression + micro + full-review×12)

| SHA | SOURCE | BRANCH | A1 CHANGES | IN_MAIN | ACTION |
|---|---|---|---|---|---|
| 48daeb9c | batch15 | cursor/cs-a1-batch15-final-6ea4 | 2 files, 12+/12- | NO | superseded by later cycles; included via HIGH lineage |
| fd0926c3 | critical-final-repair | cursor/cs-a1-critical-final-repair-6ea4 | 2 files, 78+/94- | NO | integrated via HIGH-micro base |
| 26138f92 | high-block01 | cursor/cs-a1-high-repair-block01-6ea4 | 2 files, 100+/100- | NO | integrated via HIGH-micro base |
| 8dc45cfc | high-block02 | cursor/cs-a1-high-repair-block02-6ea4 | 2 files, 100+/100- | NO | integrated via HIGH-micro base |
| a4fe739b | high-block03 | cursor/cs-a1-high-repair-block03-6ea4 | 2 files, 100+/100- | NO | integrated via HIGH-micro base |
| b320920c | high-block04 | cursor/cs-a1-high-repair-block04-6ea4 | 2 files, 100+/100- | NO | integrated via HIGH-micro base |
| 1c813d16 | high-block05 | cursor/cs-a1-high-repair-block05-6ea4 | 2 files, 102+/102- | NO | integrated via HIGH-micro base |
| 3d134c9c | high-block06 | cursor/cs-a1-high-repair-block06-6ea4 | 2 files, 84+/90- | NO | integrated via HIGH-micro base |
| c14e9211 | high-regression | cursor/cs-a1-high-regression-final-repair-6ea4 | 2 files, 44+/50- | NO | integrated via HIGH-micro base |
| 51b11f69 | high-micro02 | cursor/cs-a1-high-final-micro-repair-02-6ea4 | 2 files, 4+/4- | NO | **base state** |
| 08e9a862 | full-review-01 | cursor/cs-a1-full-review-repair-block01-6ea4 | 2 files, 40+/40- | NO | applied mechanically |
| c09c4a76 | full-review-02 | cursor/cs-a1-full-review-repair-block02-6ea4 | 2 files, 32+/32- | NO | applied mechanically |
| 5035ec4f | full-review-03 | cursor/cs-a1-full-review-repair-block03-6ea4 | 2 files, 62+/62- | NO | applied mechanically |
| 5245080a | full-review-04 | cursor/cs-a1-full-review-repair-block04-6ea4 | 2 files, 26+/26- | NO | applied mechanically |
| 665a5d15 | full-review-05 | cursor/cs-a1-full-review-repair-block05-6ea4 | 2 files, 40+/44- | NO | applied mechanically |
| a8448953 | full-review-06 | cursor/cs-a1-full-review-repair-block06-6ea4 | 2 files, 48+/48- | NO | applied mechanically |
| 3e5f4027 | full-review-07 | cursor/cs-a1-full-review-repair-block07-6ea4 | 2 files, 52+/52- | NO | applied mechanically |
| bddf5804 | full-review-08 | cursor/cs-a1-full-review-repair-block08-6ea4 | 2 files, 78+/86- | NO | applied mechanically (2 fields NEEDS_OWNER_REVIEW) |
| 2df1f0cf | full-review-09 | cursor/cs-a1-full-review-repair-block09-6ea4 | 2 files, 54+/54- | NO | applied mechanically |
| 1108ea91 | full-review-10 | cursor/cs-a1-full-review-repair-block10-6ea4 | 2 files, 66+/66- | NO | applied mechanically |
| 9b59589c | full-review-11 | cursor/cs-a1-full-review-repair-block11-6ea4 | 2 files, 58+/58- | NO | applied mechanically |
| c559de98 | full-review-12 | cursor/cs-a1-full-review-repair-block12-6ea4 | 2 files, 48+/48- | NO | applied mechanically |

**Summary**

| Metric | Count |
|---|---|
| A1 repair commits found | 22 |
| already in main (before) | 0 |
| missing from main (before) | 22 |
| integrated (mechanical) | 22 cycles → 1 consolidated production state |

**Consolidation strategy**

1. Base = `cursor/cs-a1-high-final-micro-repair-02-6ea4` (CRITICAL + HIGH + regression + micro + batch15)
2. Overlay = full-review repair scripts blocks 01–12 (`scripts/apply-cs-a1-full-review-repair-block*.js`)
3. Conflict rule: newer full-review PĒC when PIRMS matches; HIGH base preserved when full-review was applied on stale main (e.g. `a1-können` retains `Umět • Moci`)

## REPAIR RETENTION

| Metric | Value |
|---|---|
| expected approved repair fields (full-review scripts) | 297 |
| applied on consolidation | 292 |
| already correct | 1 |
| NEEDS_OWNER_REVIEW (not changed) | 2 |
| missing on main (after integration) | 0 |
| conflicting (unresolved) | 2 |

**NEEDS_OWNER_REVIEW (not applied per conflict rule §8)**

| cardId | field | current | proposed (block08) |
|---|---|---|---|
| a1-morgen | study.explanation | 8-string HIGH/critical array | 4-string full-review PĒC |
| a1-müssen | study.translation | `Muset` (HIGH state) | `Musit` (full-review PĒC) |

## PRODUCTION

| Check | Result |
|---|---|
| cards | 702 |
| DE changes | 0 |
| unexpected production changes | 0 (only `data/cs/a1.js` + `www/data/cs/a1.js`) |
| mirror | PASS |
| syntax | PASS |
| ID/order | PASS |

## LV REMNANT RECONCILIATION

| Fragment | Status on consolidated main |
|---|---|
| braukt / vest / aizvest / Transportlīdzekli / Velosipēdu | **removed** (HIGH/critical repairs retained) |
| sēdēt / sēž (a1-sitzen accents) | still present — **never approved repair** (block14 NEEDS_OWNER_REVIEW) |
| tēma (a1-über accents) | not found in current accents |
| ēst (a1-essen accents) | not found in current accents |
| Berlīnē (a1-in) | **retained** — OWNER_OVERRIDE_FALSE_POSITIVE |

## PROBLEM CARDS

### a1-es
- **MAIN_BEFORE:** lv `To • To • Neosobní podoba`, study `To • To • Neosobní podoba`
- **MAIN_AFTER:** lv `To • To • Neosobní podoba`, study `To • Ono • Neosobní podoba`
- **Source:** full-review block

### a1-fahren
- **MAIN_BEFORE:** lv `Řídit • Vést • Odvézt`, study `Řídit • Vést • Odvézt`
- **MAIN_AFTER:** lv `Řídit • Vést • Odvézt`, study `Jet • Jezdit • Vézt / odvézt`
- **Source:** HIGH repair block + accents cleaned

### a1-land
- **MAIN_BEFORE:** lv `Země • Země`, study `Země • Země`
- **MAIN_AFTER:** lv `Země • Země`, study `Země • Venkov`
- **Source:** critical/HIGH repair retained

### a1-laufen
- **MAIN_BEFORE:** lv `Běžet • Provozovat`, study `Běžet • Provozovat`
- **MAIN_AFTER:** lv `Běžet • Fungovat`, study `Běžet • Fungovat`
- **Source:** HIGH regression + micro-repair #2

### a1-können
- **MAIN_BEFORE:** lv `Umět • Vědět`, study `Umět • Vědět`
- **MAIN_AFTER:** lv `Umět • Moci`, study `Umět • Moci`
- **Source:** HIGH regression (preserved over stale full-review-on-main)

### a1-sitzen / a1-stehen / a1-essen
- **MAIN_BEFORE/AFTER:** main translation unchanged; accent LV remnants (`sedět`) remain — deferred NEEDS_OWNER_REVIEW, not auto-fixed

### a1-über
- **MAIN_BEFORE:** study `Přes • Pro`
- **MAIN_AFTER:** study `Nad • O • Přes`
- **Source:** critical/HIGH repair

### a1-auch-study / a1-sprechen-study
- **MAIN_BEFORE/AFTER:** study translation unchanged on consolidation; example-level fixes from HIGH retained where applicable

### a1-in
- **Berlīnē** in sectionAccents: **PASS** (OWNER keep, not regressed)

## FINAL STATUS

**CS–DE A1 MAIN CONSOLIDATION = PASS**

All mechanically applicable approved repairs integrated onto `main`. Two fields (`a1-morgen`, `a1-müssen`) remain **NEEDS_OWNER_REVIEW** and were intentionally not changed.

---

_Artefakti: `reports/temp/cs-a1-consolidation-apply-results.json`, `scripts/consolidate-cs-a1-main-repairs.js`_
