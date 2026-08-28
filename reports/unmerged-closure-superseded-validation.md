# Unmerged closure — superseded evidence validation (53/53 READ-ONLY)

**Generated:** 2026-08-28T18:54:50.662Z
**MASTER:** 1.12
**ORIGIN_MAIN_SHA:** `93c372824359b00bd73d37ae3193bdf587118e75`
**PR #693 HEAD:** `12663a4cbe84f5d2dd59029b24a49c4302764fc3`
**Scope:** 53/53

## Validation summary

| Metric | Count |
|--------|------:|
| EVIDENCE_SUFFICIENT | 12 |
| EVIDENCE_INSUFFICIENT | 41 |
| BLOCKED_COMPARISON_ERROR | 0 |
| validated CLOSED_SUPERSEDED | 12 |
| validated NEEDS_OWNER_REVIEW | 41 |
| NOT_PRESENT_ON_MAIN (field total) | 178 |
| CONFLICTING_WITH_MAIN (field total) | 670 |
| UNRESOLVED (field total) | 0 |

## Priority PR #528 — A→B→C

- **evidenceVerdict:** EVIDENCE_INSUFFICIENT
- **validatedProposedCategory:** NEEDS_OWNER_REVIEW
- **baseSha (A):** `506e9a75eb55cf8a31b38ee6d25a7fd964cec9ff`
- **tipSha (B):** `fd2178e22676bfedcc1b482ff7a1dd55323455be`
- **originMainSha (C):** `93c372824359b00bd73d37ae3193bdf587118e75`
- **field counts:** delta=234, retained=42, replaced=31, notPresent=0, conflicting=161, unresolved=0
- **laterClosureEvidence:**
  - commit `9ef1ad1b99c4` 2026-08-16 09:20:21 +0000 — Luna micro-repair #3 (2/2) — CS-DE Kurss CLOSED
  - commit `34d29becf7f7` 2026-08-16 09:18:19 +0000 — Luna micro-repair #2 (4/4) — closure still NOT CLOSED (2 MEDIUM findings)
  - commit `fe53262b0e2d` 2026-08-16 09:15:18 +0000 — Apply Luna micro-repair (7/7) — closure still NOT CLOSED (4 new Luna findings)
  - commit `876618bd26ff` 2026-08-16 09:03:17 +0000 — Finding #218 field-level apply and final closure report (Luna pending)
  - commit `90a19154b951` 2026-08-16 08:58:20 +0000 — Apply CS-DE Kurss OWNER repairs and targeted regression audit
  - commit `123d4da3c02f` 2026-08-15 21:45:49 +0000 — Apply approved CS native translations for verb basics and sentence structure

| field | status |
|-------|--------|
| `html.kurssArticlesLesson` | CONFLICTING_WITH_MAIN |
| `html.kurssLesson6` | CONFLICTING_WITH_MAIN |
| `html.kurssLesson5` | CONFLICTING_WITH_MAIN |
| `html.kurssLesson4` | CONFLICTING_WITH_MAIN |
| `html.kurssLesson3` | CONFLICTING_WITH_MAIN |
| `data.kurssLesson1.subtitle` | CONFLICTING_WITH_MAIN |
| `data.kurssLesson3.subtitle` | CONFLICTING_WITH_MAIN |
| `data.kurssLesson3.legacyHtml` | CONFLICTING_WITH_MAIN |
| `data.kurssLesson4.legacyHtml` | CONFLICTING_WITH_MAIN |
| `data.kurssLesson5.subtitle` | CONFLICTING_WITH_MAIN |
| `data.kurssLesson5.legacyHtml` | CONFLICTING_WITH_MAIN |
| `data.kurssLesson6.legacyHtml` | CONFLICTING_WITH_MAIN |
| `data.kurssLesson9.sections[1].items[11]` | CONFLICTING_WITH_MAIN |
| `data.kurssLesson9.sections[1].items[12]` | CONFLICTING_WITH_MAIN |
| `data.kurssLesson9.sections[2].items[0].heading` | RETAINED_ON_MAIN |

## Priority PR #343 — A→B→C

- **evidenceVerdict:** EVIDENCE_INSUFFICIENT
- **validatedProposedCategory:** NEEDS_OWNER_REVIEW
- **baseSha (A):** `ee99e64ea571b6d8ffff38bc6530ce7815ceeeb6`
- **tipSha (B):** `272319f03e6db693db5bd0fdffe8e959b43acc79`
- **originMainSha (C):** `93c372824359b00bd73d37ae3193bdf587118e75`
- **field counts:** delta=17, retained=0, replaced=16, notPresent=1, conflicting=0, unresolved=0
- **laterClosureEvidence:**
  - commit `3cd029c457a5` 2026-08-16 07:23:57 +0000 — Apply approved EN A1/B1 and CS A1 native translations after DE sync
  - commit `43adc669268d` 2026-08-16 06:48:47 +0000 — Sync sectionAccents DE branches from LV-DE master
  - commit `018ca5c9f0dc` 2026-08-15 22:05:19 +0000 — Sync all {LANG}-DE German content from LV-DE master
  - commit `6be14ab0b288` 2026-08-09 15:03:33 +0000 — fix(en-de-b1): final sectionAccent cleanup for 4 global findings
  - commit `97f3f106ab84` 2026-08-09 14:48:56 +0000 — fix(en-de-b1): repair b1-entlassen tip sectionAccent context
  - commit `4e462fab33cc` 2026-08-09 14:33:10 +0000 — fix(en-de-b1): apply 8 integration regression follow-up repairs

| field | status |
|-------|--------|
| `card.Baumstumpf.lv` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.fressen.lv` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.fressen.study.translation` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.fressen.study.explanation` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.fressen.study.comparison[0].meaning` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.fressen.study.comparison[1].meaning` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.fressen.study.sectionAccents.explanation.purple[0]` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.fressen.study.sectionAccents.explanation.purple[1]` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.fressen.study.sectionAccents.explanation.purple[2]` | NOT_PRESENT_ON_MAIN |
| `card.fressen.study.sectionAccents.tip.leftBlocks[0].text.purple[0]` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.Tau.study.explanation` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.Tau.study.examples[1].lv` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.Tau.study.tip.leftBlocks[0].text` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.verfolgen.study.explanation` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |
| `card.verfolgen.study.tip.leftBlocks[0].text` | INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE |

## Rule

- `EVIDENCE_SUFFICIENT` only when 100% A→B delta fields are `RETAINED_ON_MAIN` or `INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE` with zero `NOT_PRESENT_ON_MAIN`, `CONFLICTING_WITH_MAIN`, `UNRESOLVED`.
- OWNER `resolvedCategory` remains null.

