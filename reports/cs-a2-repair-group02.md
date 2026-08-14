# CS–DE A2 Repair Group 02

COPY-ONLY repair from `scripts/cs-a2-repair-group02-spec.json`.

## Summary

| Metric | Value |
|---|---|
| requested | 50 |
| processed | 50/50 |
| APPLIED | 49 |
| ALREADY_CORRECT | 1 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| INDEX_MISMATCH | 0 |
| DE_MISMATCH_BLOCKED | 0 |

## Changed cards

a2-auf einmal-103, a2-Aufbau-106, a2-aufbrechen-107, a2-aufdrängen-108, a2-auffordern-113, a2-aufhalten-117, a2-aufheben, a2-aufhören-121, a2-aufklären-122, a2-aufkochen-124, a2-aufkommen-125, a2-aufladen-126, a2-auflage, a2-aufmuntern-131, a2-aufnahme, a2-aufnehmen, a2-Aufprall-134, a2-aufräumen-135, a2-aufregen-136, a2-aufrichtig, a2-aufrufen, a2-aufspringen-142, a2-aufstellen-143, a2-Aufstrich-144, a2-auftragen, a2-auftreten, a2-aufwärmen-148, a2-aufwenden, a2-aufzeichnen, a2-aufziehen-151, a2-ausarbeiten-154, a2-aussteigen, a2-ausstrahlen-160, a2-austrinken-162, a2-Ausverkauf-163, a2-auswählen, a2-Ausweis-167, a2-ausziehen, a2-Bach-178, a2-Backe-179, a2-backen-180, a2-Badehose-184, a2-Badetuch-185, a2-bahn, a2-Bahngleis-188, a2-Bahnsteig-190, a2-band, a2-bank, a2-barfuß-199

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 75 |
| LV remnants (repaired cards) | 1 |
| regression findings documented | 76 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-aufheben | Můžete, Ušetřil, Zvýšit, atcelt, pacelt |
| a2-auflage | izdevums |
| a2-aufnahme | ieraksts, nemocnici |
| a2-aufnehmen | Zaznamenat |
| a2-aufrichtig | Upřímný, Objeveno |
| a2-aufrufen | objektem, Auspendování, izsaukt |
| a2-auftragen | Požádat, pasniegt, uzdot, uzdevumu |
| a2-auftreten | Bolí, Zpěvák, objeví se |
| a2-aufwenden | laika, naudu |
| a2-aussteigen | Změnit, autobusa |
| a2-auswählen | Můžete, Prozkoumat, Auschällen, balsot, izlemt |
| a2-ausziehen | Odtáhnout, Nasadit, Pohybovat, vietu, převléknout se, citu |
| a2-bahn | Vlakové, tramvajs |
| a2-band | saite, lente, grupa |

## LV remnants (documented, not auto-fixed)

- a2-Ballon-192 `lv`: PL_CHAR

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 51 | a2-auf einmal-103 | 103 | APPLIED |
| 52 | a2-Aufbau-106 | 106 | APPLIED |
| 53 | a2-aufbrechen-107 | 107 | APPLIED |
| 54 | a2-aufdrängen-108 | 108 | APPLIED |
| 55 | a2-auffordern-113 | 113 | APPLIED |
| 56 | a2-aufhalten-117 | 117 | APPLIED |
| 57 | a2-aufheben | 118 | APPLIED |
| 58 | a2-aufhören-121 | 121 | APPLIED |
| 59 | a2-aufklären-122 | 122 | APPLIED |
| 60 | a2-aufkochen-124 | 124 | APPLIED |
| 61 | a2-aufkommen-125 | 125 | APPLIED |
| 62 | a2-aufladen-126 | 126 | APPLIED |
| 63 | a2-auflage | 127 | APPLIED |
| 64 | a2-aufmuntern-131 | 131 | APPLIED |
| 65 | a2-aufnahme | 132 | APPLIED |
| 66 | a2-aufnehmen | 133 | APPLIED |
| 67 | a2-Aufprall-134 | 134 | APPLIED |
| 68 | a2-aufräumen-135 | 135 | APPLIED |
| 69 | a2-aufregen-136 | 136 | APPLIED |
| 70 | a2-aufrichtig | 138 | APPLIED |
| 71 | a2-aufrufen | 139 | APPLIED |
| 72 | a2-aufspringen-142 | 142 | APPLIED |
| 73 | a2-aufstellen-143 | 143 | APPLIED |
| 74 | a2-Aufstrich-144 | 144 | APPLIED |
| 75 | a2-auftragen | 146 | APPLIED |
| 76 | a2-auftreten | 147 | APPLIED |
| 77 | a2-aufwärmen-148 | 148 | APPLIED |
| 78 | a2-aufwenden | 149 | APPLIED |
| 79 | a2-aufzeichnen | 150 | APPLIED |
| 80 | a2-aufziehen-151 | 151 | APPLIED |
| 81 | a2-ausarbeiten-154 | 154 | APPLIED |
| 82 | a2-aussteigen | 159 | APPLIED |
| 83 | a2-ausstrahlen-160 | 160 | APPLIED |
| 84 | a2-austrinken-162 | 162 | APPLIED |
| 85 | a2-Ausverkauf-163 | 163 | APPLIED |
| 86 | a2-auswählen | 165 | APPLIED |
| 87 | a2-Ausweis-167 | 167 | APPLIED |
| 88 | a2-ausziehen | 169 | APPLIED |
| 89 | a2-Bach-178 | 178 | APPLIED |
| 90 | a2-Backe-179 | 179 | APPLIED |
| 91 | a2-backen-180 | 180 | APPLIED |
| 92 | a2-Badehose-184 | 184 | APPLIED |
| 93 | a2-Badetuch-185 | 185 | APPLIED |
| 94 | a2-bahn | 187 | APPLIED |
| 95 | a2-Bahngleis-188 | 188 | APPLIED |
| 96 | a2-Bahnsteig-190 | 190 | APPLIED |
| 97 | a2-Ballon-192 | 192 | ALREADY_CORRECT |
| 98 | a2-band | 193 | APPLIED |
| 99 | a2-bank | 194 | APPLIED |
| 100 | a2-barfuß-199 | 199 | APPLIED |

## Branch

`cursor/cs-a2-repair-group02-6ea4`

_Generated: 2026-08-13T18:07:16.755Z_