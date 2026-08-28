# Crowdin UI — NEEDS_OWNER_REVIEW decisions verification (194 rindas)

**Generated:** 2026-08-28T15:19:00.907Z  
**Reviewer:** GPT-5.6-Luna (linguistic + technical READ-ONLY)  
**Authority JSON SHA:** `f875793fe9eb`  
**Authority CSV SHA:** `afa0c92fd013`  
**OWNER approval:** OWNER_ACCEPTED  
**Režīms:** READ-ONLY — nav production/Crowdin apply

## Rezultāts

**PASS**

## Tehniskā pārbaude

| Metrika | Vērtība |
|---|---:|
| REQUESTED | 194 |
| REVIEWED | 194 |
| LABOT | 78 |
| NELABOT | 116 |
| DUPLICATE_KEYS | 0 |
| CURRENT_MISMATCH | 0 |
| PLACEHOLDER_ERRORS | 0 |
| HTML_ERRORS | 0 |
| LV_SOURCE_CONFLICTS | 0 |
| JSON_CSV_MISMATCH | 0 |
| OWNER_CORRECTED_NEW | 8 |
| TECHNICAL_PASS | YES |

## Lingvistiskā pārbaude (GPT-5.6 Luna)

| Metrika | Vērtība |
|---|---:|
| FLAGGED_ROWS | 0 |
| LINGUISTIC_PASS | YES |

### Metodika

- Avota salīdzinājums ar `crowdin-ui-final-audit-proof.json` (194 NEEDS_OWNER_REVIEW)
- Placeholder multiset un HTML struktūra: LABOT `newValue` ≡ CURRENT
- Vienāds `lvSource` vienā valodā → vienāds `ownerStatus` (0 konflikti)
- LV diakritiku/latviešu leksēmu meklēšana LABOT `newValue` (lb menuDesc izņemot DE terminus)
- OWNER `ownerDecision`/`ownerApproved` lauku validācija (schema v2)
- Nav automātiska tulkojuma — tikai OWNER decisions audits

### Lingvistiskā pārbaude pa valodām

| Valoda | LABOT | NELABOT | Luna novērtējums |
| --- | --- | --- | --- |
| bs | 1 | 24 | 24 NELABOT kognāti + 1 LABOT (Dativs→Dativ menuDesc). |
| cs | 0 | 2 | 2 NELABOT — Statistika, Gramatika. |
| es | 0 | 2 | 2 NELABOT — Formas:, Probl. |
| et | 0 | 2 | 2 NELABOT — Statistika, Probl. |
| fi | 0 | 2 | 2 NELABOT — Statistika, Probl. |
| hr | 0 | 21 | 21 NELABOT — Lekcija N hr kognāts. |
| is | 0 | 2 | 2 NELABOT — Statistika, Probl. |
| it | 0 | 2 | 2 NELABOT — Statistika, Probl. |
| lb | 77 | 3 | 77 LABOT LB tulkojumi + 3 NELABOT pedagoģijas kognāti; 8 OWNER precizēti newValue. |
| lt | 0 | 4 | 4 NELABOT — Sesija, Statistika, Gramatika, Probl. |
| nb | 0 | 2 | 2 NELABOT — Statistika, Probl. |
| nl | 0 | 2 | 2 NELABOT — Statistika, Probl. |
| nn | 0 | 2 | 2 NELABOT — Statistika, Probl. |
| pl | 0 | 1 | 1 NELABOT — Probl. |
| sk | 0 | 1 | 1 NELABOT — Probl. |
| sl | 0 | 21 | 21 NELABOT — Lekcija N sl kognāts. |
| sr | 0 | 21 | 21 NELABOT — Lekcija N sr kognāts. |
| sv | 0 | 2 | 2 NELABOT — Statistika, Probl. |

### Kvalitatīvs novērtējums (Luna)

**NELABOT (116):** Kognāti un apzināti DE pedagoģijas saīsinājumi ir lingvistiski pareizi mērķvalodās — nav neiztulkots LV UI. Slāvu `Lekcija N` atbilst lekcijas numerācijas konvencijai; `Statistika`/`Gramatika`/`Sesija` ir standarta kognāti; `Probl.` ir DE mācību konteksta saīsinājums; es `Formas:` ir pareizs.

**LABOT lb (77):** LB tulkojumi atbilst repozitorija LB/DE/FR hibrīda stilam (`Zousätzlech`, `Lektioun`, `an` ne `un`, DE gramatikas termini menuDesc). **8 OWNER precizēti newValue** ir semantiski uzlaboti:

| key | newValue | Luna komentārs |
| --- | --- | --- |
| `buttons.restore` | Zeréckhuelen | LB idioms par “atgriezt/atjaunot”, ne DE `zurücksetzen` |
| `buttons.restoreAll` | Alles zeréckhuelen | Konsekventa ar restore |
| `kurss.lessonItems.11.menuDesc` | Besëtz | Besëtz (īpašums) > Besëtzen (darbība) |
| `kurss.lessonItems.13.menuDesc` | Kierperdeeler | LB/DE Körperteile, ne LV ķermeņa daļas |
| `kurss.lessonItems.15.menuDesc` | Uebst | LB/DE Obst > Fruucht |
| `kurss.lessonItems.7.menuDesc` | Uriedsform | LB uzrunas forma > Ussproochform |
| `spelling.writeAnswer` | Gëff d'Äntwert an | LB imperatīvs > antippen |
| `study.sections.remember` | Denk drun | LB “atceries” > Verhaalen |

**LABOT bs (1):** `kurss.lessonItems.16.menuDesc` — Dativs→Dativ: pareizs DE pedagoģijas termins.

## Nākamais solis

Tikai ja `result` ir PASS: COPY-ONLY apply LABOT rindām (78) uz atbilstošiem `crowdin/ui/*.json`, `languages/*/ui.js` un Crowdin.

