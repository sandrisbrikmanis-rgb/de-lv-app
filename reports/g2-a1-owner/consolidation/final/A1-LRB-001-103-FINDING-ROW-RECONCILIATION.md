# A1 LRB finding row reconciliation

| Metric | Before | After |
|--------|-------:|------:|
| Expanded-generation finding rows (inventory) | 4968 | 4968 |
| Apply-eligible leaf keys | — | 34321 |
| Audit-only finding rows (field absent) | — | 7 |
| Finding rows not in apply mapping | — | 186 |

## Audit-only / absent field rows (7)

- **LRB-001** `g2/a1/bs|gut|idx:259|study.sectionAccents.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna` `study.sectionAccents.examples[1].lv` — RECONSTRUCTION_FAILED
- **LRB-002** `g2/a1/en|klein|idx:6|study.examples[1-2].lv|TRANSLATION_ERROR|gpt-5.6-luna` `study.examples[1-2].lv` — RECONSTRUCTION_FAILED
- **LRB-002** `g2/a1/en|nach|idx:426|study.sectionAccents.examples[3].lv|MEANING_ERROR|gpt-5.6-luna` `study.sectionAccents.examples[3].lv` — RECONSTRUCTION_FAILED
- **LRB-094** `` `study.examples, study.comparison` — RECONSTRUCTION_FAILED
- **LRB-097** `` `lv/study.examples` — RECONSTRUCTION_FAILED
- **LRB-097** `` `lv/study.examples` — RECONSTRUCTION_FAILED
- **LRB-101** `` `study.examples, study.comparison` — RECONSTRUCTION_FAILED

Finding rows and unique leaf keys are distinct metrics; leaf deduplication does not drop finding rows.
