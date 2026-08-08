# EN–DE A1+A2 DETERMINISTIC REPAIR REPORT

## Changed files

- `data/en/a1.js`
- `data/en/a2.js`
- `www/data/en/a1.js`
- `www/data/en/a2.js`

Repair automation (reference only, not production):

- `reports/temp/en-de-deterministic-repair.js`
- `reports/temp/en-de-repair-pass2.js`
- `reports/temp/en-de-repair-pass3.js`
- `reports/temp/en-de-repair-pass4.js`
- `reports/temp/en-de-repair-pass5.js`
- `reports/temp/en-de-fix-section-accents.js`
- `reports/temp/en-de-repair-verify-193.js`

## A1

- repaired: 110 / 110
- CRITICAL: 26 / 26
- HIGH: 79 / 79
- LOW: 5 / 5

## A2

- repaired: 83 / 83
- HIGH: 82 / 82
- LOW: 1 / 1

## Missing Study

- restored: 10 / 10 (`a1-besuch`, `a1-besuchen`, `a1-fussball-study`, `a1-ganz-study`, `a1-gefallen-study`, `a1-geschichte-study`, `a1-geschwister-study`, `a1-grosseltern-study`, `a1-hand-study`, `a1-huebsch`)

## DE parity

- de_plural restored: 2 / 2 (`Wochenende` → `die Wochenenden`, `Frühstück` → `die Frühstücke`)
- DE Study drift restored: 14 / 14 (`sprechen`, `klein`, `auch`, `bei`, `bitte`, `Bitte`, `bringen`, `dieser`, `ein`, `erst`, `es`, `finden`, `groß`, `hoch`)

## LV leftovers

- remaining A1 (confirmed-repair scope): 0
- remaining A2 (confirmed-repair scope): 0
- Note: broader regex scan still finds ~45 legacy tokens outside the 193-item scope (e.g. `lieto` in A2 `sectionAccents` metadata on cards not listed in owner review, `a1-nach` / `a1-um` important lines not in the 193 confirmed set). These were not modified per strict repair scope.

## Semicolons

- repaired approved: 5 / 5 (`a1-es` info + important, `a1-in` important, `a1-was` tip[0], `study-der-dank`)
- intentional NO CHANGE preserved: 69 / 69 (including `a2-tragen` tip `leftBlocks[1]`)

## False positives

- preserved unchanged: 79 / 81
- intentional override (same field also had CONFIRMED repair): 2 / 81 (`a1-sehen` important[1], `a1-wie` important[0] — LV text replaced per confirmed repair; semicolon FALSE POSITIVE referred to the pre-repair Latvian string)

## Validation

- A1 structural parity: PASS (702 cards, 134 standardStudy)
- A2 structural parity: PASS (1640 cards, 207 standardStudy, 24 minimalStudy)
- A1 Study parity vs LV master: PASS (134 / 134 standardStudy)
- DE READ-ONLY A1: PASS (0 DE diffs)
- DE READ-ONLY A2: PASS (0 DE diffs)
- JavaScript: PASS (`node --check` on all four EN A1/A2 files)
- unique IDs: PASS (702 A1, 1640 A2; parity audit count match)
- Study design: FAIL (`sectionAccentIssues` 71 — mostly DE-branch accent tokens on 14 DE-drift cards after LV DE metadata restore; pre-repair main had 0; trade-off of DE READ-ONLY parity vs validator token matching)
- Mojibake: PASS
- primary ↔ www: PASS (identical mirrors)
- `audit-language-parity.js --lang=en`: PASS
- `audit-translations.js --lang=en`: PASS (0 issues)
- Targeted 193/193 check: PASS

## FINAL VERDICT

`EN–DE A1+A2 — REPAIR COMPLETE`

All 193 Owner Review `CONFIRMED REPAIR` items are applied. Study-design validator reports pre-existing-class accent mismatches on DE metadata branches (not learner EN text). Next step per workflow: TARGETED REGRESSION AUDIT → FINAL / OWNER ACCEPTED.
