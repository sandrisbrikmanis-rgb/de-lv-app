# FR–DE A1 — POST-REPAIR OWNER GALA LĒMUMI, 7. CIKLS

**Pārklājums:** 10/10 · **LABOT:** 7 · **FALSE_POSITIVE:** 3 · **PENDING:** 0

**DE = STRICT READ-ONLY.** Production šajā OWNER posmā nav mainīts. Apply tikai ar CURRENT exact-match.

| # | Audit ID | Card ID | Field | CURRENT | OWNER STATUS | OWNER NEW | Pamatojums |
|---:|---|---|---|---|---|---|---|
| 1 | FR-A1-0231 | a1-also | study.sectionAccents (examples) | Vous | **FALSE_POSITIVE** |  | Dublikāts FR-A1-0332 tam pašam a1-also sectionAccents terminam « Vous ». Lai neradītu dubultu apply mērķi, šo rindu nepiemērot. |
| 2 | FR-A1-0332 | a1-also | study.sectionAccents.examples.lv | Vous | **LABOT** | REMOVE_STALE_ACCENT_TERM: Vous | OWNER precizēts pēc faktiskā mērķa un pilna DE/FR konteksta. |
| 3 | FR-A1-0334 | a1-Butterbrot-112 | frText | Un sandwich | **LABOT** | Une tartine beurrée | Audita ieteikums pārbaudīts pret DE, LV etalonu un FR kontekstu; OWNER apstiprināts. |
| 4 | FR-A1-0361 | a1-eis | study.examples[0].lv | Je mange de la glace | **LABOT** | Je mange de la glace. | Audita ieteikums pārbaudīts pret DE, LV etalonu un FR kontekstu; OWNER apstiprināts. |
| 5 | FR-A1-0362 | a1-eis | study.examples[1].lv | Veux-tu de la glace | **LABOT** | Veux-tu de la glace ? | Audita ieteikums pārbaudīts pret DE, LV etalonu un FR kontekstu; OWNER apstiprināts. |
| 6 | FR-A1-0367 | a1-erst | study.comparison[2].meaning | Seulement | **FALSE_POSITIVE** |  | CURRENT un audita PROPOSED abi ir « Seulement »; production izmaiņa neeksistē. |
| 7 | FR-A1-0370 | a1-etwas | study.examples[2].lv | Je suis un peu fatigué | **LABOT** | Je suis un peu fatigué. | Audita ieteikums pārbaudīts pret DE, LV etalonu un FR kontekstu; OWNER apstiprināts. |
| 8 | FR-A1-0371 | a1-etwas | study.examples[3].lv | J'ai quelque chose pour toi | **LABOT** | J'ai quelque chose pour toi. | Audita ieteikums pārbaudīts pret DE, LV etalonu un FR kontekstu; OWNER apstiprināts. |
| 9 | FR-A1-0417 | a1-passen | study.examples[1].lv | La robe va bien. | **FALSE_POSITIVE** |  | DE « Das Kleid passt gut. » nenorāda saņēmēju « mir ». CURRENT « La robe va bien. » ir precīzs; « me va bien » pievienotu DE neesošu informāciju. |
| 10 | FR-A1-0433 | a1-verstehen | study.tip.text | N'oubliez pas : comprendre le texte/la personne → verstehen • Savoir comment faire quelque chose → können. | **LABOT** | N'oubliez pas : comprendre un texte ou une personne → verstehen ; savoir faire quelque chose → können. | OWNER precizēts pēc faktiskā mērķa un pilna DE/FR konteksta. |

