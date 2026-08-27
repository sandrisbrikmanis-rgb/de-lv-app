# FR–DE A1 — POST-REPAIR OWNER GALA LĒMUMI, 6. CIKLS

**Pārklājums:** 6/6 · **LABOT:** 5 · **FALSE_POSITIVE:** 1 · **PENDING:** 0

**DE = STRICT READ-ONLY.** Production šajā OWNER posmā nav mainīts. Apply tikai ar CURRENT exact-match.

| # | Audit ID | Card ID | Field | CURRENT | OWNER STATUS | OWNER NEW | Pamatojums |
|---:|---|---|---|---|---|---|---|
| 1 | FR-A1-0272 | a1-können | study.sectionAccents (examples) | Pouvez | **LABOT** | REMOVE_STALE_ACCENT_TERM: Pouvez | OWNER precizēts pēc faktiskā DE piemēra un FR konteksta. |
| 2 | FR-A1-0337 | a1-also | study.examples[0].lv | Il pleut donc je reste à la maison. | **LABOT** | Il pleut, donc je reste à la maison. | Audita ieteikums pārbaudīts pret DE, LV etalonu un FR kontekstu; OWNER apstiprināts. |
| 3 | FR-A1-0338 | a1-also | study.examples[1].lv | Vous êtes malade alors n'allez pas travailler. | **LABOT** | Tu es malade, alors ne va pas travailler. | Audita ieteikums pārbaudīts pret DE, LV etalonu un FR kontekstu; OWNER apstiprināts. |
| 4 | FR-A1-0352 | a1-bleiben | study.examples[0].lv | Je reste à la maison | **LABOT** | Je reste à la maison. | Audita ieteikums pārbaudīts pret DE, LV etalonu un FR kontekstu; OWNER apstiprināts. |
| 5 | FR-A1-0354 | a1-dass | study.examples[2].lv | Je pense que c'est vrai. | **FALSE_POSITIVE** |  | DE « das stimmt » šajā teikumā dabiski atbilst FR « c’est vrai ». Audita « c’est correct » nav nepieciešams un skan mazāk dabiski. |
| 6 | FR-A1-0376 | a1-gut-study | study.examples[3].lv | Bonjour! | **LABOT** | Bonjour ! | OWNER precizēts pēc faktiskā DE piemēra un FR konteksta. |

