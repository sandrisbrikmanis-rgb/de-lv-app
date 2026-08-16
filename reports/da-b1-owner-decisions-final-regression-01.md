# DA–DE B1 — OWNER decisions — final-regression-01

Avots: `reports/da-b1-final-repair-regression-audit.md` / final residual OWNER review
Findings: **11**

**DE = STRICT READ-ONLY.**

| # | Card ID | Field | CURRENT | Statuss | OWNER_DECISION |
|--:|---|---|---|---|---|
| 1 | `b1-absetzen` | `study.sectionAccents.examples[2].lv.purple.[0]` | `minister` | **LABOT** | FJERN «minister» |
| 2 | `b1-bestehen` | `study.sectionAccents.examples[0].lv.purple.[0]` | `problem` | **LABOT** | FJERN «problem» |
| 3 | `b1-dienen` | `study.sectionAccents.important.purple.[0]` | `dienen` | **LABOT** | FJERN «dienen» |
| 4 | `b1-einführen` | `study.sectionAccents.comparison[1].meaning.purple.[0]` | `import` | **LABOT** | FJERN «import» |
| 5 | `b1-einhalten` | `study.sectionAccents.comparison[2].meaning.purple.[0]` | `Hold` | **LABOT** | FJERN «Hold» |
| 6 | `b1-festhalten` | `study.sectionAccents.comparison[1].meaning.purple.[0]` | `Hold` | **LABOT** | FJERN «Hold» |
| 7 | `b1-hupe` | `study.sectionAccents.explanation.purple.[0]` | `horn` | **LABOT** | FJERN «horn» |
| 8 | `b1-hupe` | `study.sectionAccents.examples[1].lv.purple.[0]` | `horn` | **LABOT** | FJERN «horn» |
| 9 | `b1-kante` | `study.sectionAccents.explanation.purple.[0]` | `facet` | **LABOT** | FJERN «facet» |
| 10 | `b1-senden` | `study.sectionAccents.examples[0].lv.purple.[0]` | `send` | **LABOT** | FJERN «send» |
| 11 | `b1-übergeben` | `study.sectionAccents.examples[0].lv.purple.[0]` | `give` | **LABOT** | FJERN «give» |

## Kopsavilkums

- Pārskatīti: **11/11**
- LABOT: **11**
- FALSE_POSITIVE: **0**
- NELABOT: **0**
- NEEDS_SOURCE_REVIEW: **0**
- DE izmaiņas: **0**

## OWNER norāde

Veikt tikai precīzu `FJERN` darbību norādītajā `sectionAccents` laukā. Study saturu un DE laukus nemainīt.
