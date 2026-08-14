# CS–DE A2 Repair Group 01

COPY-ONLY repair from `scripts/cs-a2-repair-group01-spec.json`.

## Summary

| Metric | Value |
|---|---|
| requested | 50 |
| processed | 50/50 |
| APPLIED | 50 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| INDEX_MISMATCH | 0 |
| DE_MISMATCH_BLOCKED | 0 |

## Changed cards

a2-ab-und-zu, a2-Abenteuer-1, a2-abfahren, a2-Abfahrt-3, a2-abgeben, a2-abgemacht-6, a2-abholen, a2-holen, a2-bringen, a2-abreisen-10, a2-absagen, a2-abschließen, a2-Abstand-14, a2-absteigen-15, a2-abstellen, a2-abwesend-20, a2-Achse-21, a2-aktiv-28, a2-aktuell-30, a2-allgemein-33, a2-ändern-35, a2-Änderung-36, a2-angesehen-38, a2-angespannt-39, a2-angewandt, a2-angreifen, a2-anhänger, a2-anheizen, a2-ankleiden-49, a2-Anlass-53, a2-anlässlich-54, a2-anlegen, a2-Anleitung-56, a2-anmelden, a2-Anmeldung-58, a2-anordnen-60, a2-Anordnung-61, a2-anstecken, a2-ansteckend-64, a2-anstellen, a2-anstreichen-66, a2-anstrengend, a2-anwenden-69, a2-anwesend-71, a2-Anzahl-73, a2-Apotheke-76, a2-Äquator-78, a2-ärgerlich-83, a2-art, a2-artikel

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 6 (OWNER spec retained; see below) |
| LV remnants (repaired cards) | 0 |
| regression findings documented | 0 (deterministic PASS) |

## sectionAccents validation (OWNER spec)

Stale accent targets present in OWNER `targetObject` (not modified by Composer):

| cardId | stale targets |
|---|---|
| a2-ab-und-zu | Každou |
| a2-abholen | Vezmu (×2) |
| a2-holen | Přinesl |
| a2-bringen | Přinesl, Přinést |

## Regression

Deterministic post-repair check on 50 cards: foreign remnants = 0, no new production changes beyond spec scope.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 1 | a2-ab-und-zu | 0 | APPLIED |
| 2 | a2-Abenteuer-1 | 1 | APPLIED |
| 3 | a2-abfahren | 2 | APPLIED |
| 4 | a2-Abfahrt-3 | 3 | APPLIED |
| 5 | a2-abgeben | 5 | APPLIED |
| 6 | a2-abgemacht-6 | 6 | APPLIED |
| 7 | a2-abholen | 7 | APPLIED |
| 8 | a2-holen | 8 | APPLIED |
| 9 | a2-bringen | 9 | APPLIED |
| 10 | a2-abreisen-10 | 10 | APPLIED |
| 11 | a2-absagen | 11 | APPLIED |
| 12 | a2-abschließen | 13 | APPLIED |
| 13 | a2-Abstand-14 | 14 | APPLIED |
| 14 | a2-absteigen-15 | 15 | APPLIED |
| 15 | a2-abstellen | 16 | APPLIED |
| 16 | a2-abwesend-20 | 20 | APPLIED |
| 17 | a2-Achse-21 | 21 | APPLIED |
| 18 | a2-aktiv-28 | 28 | APPLIED |
| 19 | a2-aktuell-30 | 30 | APPLIED |
| 20 | a2-allgemein-33 | 33 | APPLIED |
| 21 | a2-ändern-35 | 35 | APPLIED |
| 22 | a2-Änderung-36 | 36 | APPLIED |
| 23 | a2-angesehen-38 | 38 | APPLIED |
| 24 | a2-angespannt-39 | 39 | APPLIED |
| 25 | a2-angewandt | 41 | APPLIED |
| 26 | a2-angreifen | 42 | APPLIED |
| 27 | a2-anhänger | 44 | APPLIED |
| 28 | a2-anheizen | 45 | APPLIED |
| 29 | a2-ankleiden-49 | 49 | APPLIED |
| 30 | a2-Anlass-53 | 53 | APPLIED |
| 31 | a2-anlässlich-54 | 54 | APPLIED |
| 32 | a2-anlegen | 55 | APPLIED |
| 33 | a2-Anleitung-56 | 56 | APPLIED |
| 34 | a2-anmelden | 57 | APPLIED |
| 35 | a2-Anmeldung-58 | 58 | APPLIED |
| 36 | a2-anordnen-60 | 60 | APPLIED |
| 37 | a2-Anordnung-61 | 61 | APPLIED |
| 38 | a2-anstecken | 63 | APPLIED |
| 39 | a2-ansteckend-64 | 64 | APPLIED |
| 40 | a2-anstellen | 65 | APPLIED |
| 41 | a2-anstreichen-66 | 66 | APPLIED |
| 42 | a2-anstrengend | 67 | APPLIED |
| 43 | a2-anwenden-69 | 69 | APPLIED |
| 44 | a2-anwesend-71 | 71 | APPLIED |
| 45 | a2-Anzahl-73 | 73 | APPLIED |
| 46 | a2-Apotheke-76 | 76 | APPLIED |
| 47 | a2-Äquator-78 | 78 | APPLIED |
| 48 | a2-ärgerlich-83 | 83 | APPLIED |
| 49 | a2-art | 88 | APPLIED |
| 50 | a2-artikel | 90 | APPLIED |

## Branch

`cursor/cs-a2-repair-group01-6ea4`

_Generated: 2026-08-13T18:04:22.463Z_