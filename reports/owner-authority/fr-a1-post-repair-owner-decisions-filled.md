# FR–DE A1 — POST-REPAIR OWNER GALA LĒMUMI

**Avots:** PR #683 · `reports/fr-a1-post-repair-owner-decisions.md`

**Pārklājums:** 159/159 · **LABOT:** 138 · **FALSE_POSITIVE:** 14 · **NEEDS_SOURCE_REVIEW:** 7

**DE = STRICT READ-ONLY.** Production šajā posmā nav mainīts. Apply atļauts tikai rindām ar `LABOT`, precīzu CURRENT un OWNER NEW.

| # | Audit ID | Card ID | Field | CURRENT | OWNER STATUS | OWNER NEW / darbība | OWNER pamatojums |
|---:|---|---|---|---|---|---|---|
| 1 | FR-A1-0008 | a1-besuch | entry[87].study.comparison[0].example | Danke für deinen Besuch. – Merci pour ta visite. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 2 | FR-A1-0057 | a1-fussball-study | entry[218].study.explanation[2] | die Fußbälle désigne des ballons de football. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 3 | FR-A1-0058 | a1-fussball-study | entry[218].study.important[0] | die Fußbälle = ballons de football. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 4 | FR-A1-0059 | a1-gefallen-study | entry[225].study.comparison[0].example | Das gefällt mir. – Cela me plaît. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 5 | FR-A1-0060 | a1-gefallen-study | entry[225].study.comparison[1].word | mögen | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 6 | FR-A1-0061 | a1-gefallen-study | entry[225].study.tip[0] | À retenir : Das gefällt mir. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 7 | FR-A1-0082 | a1-huebsch | entry[288].study.explanation[0] | Idée principale : hübsch signifie joli ou agréable à regarder. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 8 | FR-A1-0083 | a1-huebsch | entry[288].study.explanation[1] | hübsch décrit souvent l'apparence. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 9 | FR-A1-0084 | a1-huebsch | entry[288].study.comparison[0].word | hübsch | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 10 | FR-A1-0085 | a1-huebsch | entry[288].study.comparison[0].example | Das ist ein hübsches Kleid. – C'est une jolie robe. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 11 | FR-A1-0086 | a1-huebsch | entry[288].study.comparison[1].word | schön | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 12 | FR-A1-0087 | a1-huebsch | entry[288].study.comparison[1].example | Der Garten ist schön. – Le jardin est beau. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 13 | FR-A1-0088 | a1-huebsch | entry[288].study.tip.text | hübsch décrit surtout une jolie apparence ; nett décrit une personne aimable. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 14 | FR-A1-0089 | a1-huebsch | entry[288].study.important[0] | hübsch n'est pas une traduction universelle de gentil. | **FALSE_POSITIVE** |  | Vācu mērķvārds vai DE–FR piemērs Study saturā ir apzināts un nepieciešams mācību kontekstam. |
| 15 | FR-A1-0230 | a1-klein-study | study.sectionAccents (examples) | pièce | **LABOT** | REMOVE_STALE_ACCENT_TERM: pièce | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 16 | FR-A1-0231 | a1-klein-study | study.sectionAccents (examples) | L'enfant | **LABOT** | REMOVE_STALE_ACCENT_TERM: L'enfant | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 17 | FR-A1-0232 | a1-auch-study | study.sectionAccents (examples) | viens | **LABOT** | REMOVE_STALE_ACCENT_TERM: viens | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 18 | FR-A1-0233 | a1-auch-study | study.sectionAccents (examples) | Elle | **LABOT** | REMOVE_STALE_ACCENT_TERM: Elle | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 19 | FR-A1-0234 | a1-aufs | study.sectionAccents (examples) | Venez | **LABOT** | REMOVE_STALE_ACCENT_TERM: Venez | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 20 | FR-A1-0235 | a1-baden | study.sectionAccents (examples) | vais | **LABOT** | REMOVE_STALE_ACCENT_TERM: vais | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 21 | FR-A1-0236 | a1-besuch | study.sectionAccents (?) | Missing sectionAccents present in LV | **NEEDS_SOURCE_REVIEW** |  | FR kartītē trūkst lokalizētas sectionAccents struktūras; nav droša viena lauka COPY-ONLY labojuma. |
| 22 | FR-A1-0237 | a1-besuchen | study.sectionAccents (?) | Missing sectionAccents present in LV | **NEEDS_SOURCE_REVIEW** |  | FR kartītē trūkst lokalizētas sectionAccents struktūras; nav droša viena lauka COPY-ONLY labojuma. |
| 23 | FR-A1-0238 | a1-bringen | study.sectionAccents (examples) | Apportez | **LABOT** | REMOVE_STALE_ACCENT_TERM: Apportez | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 24 | FR-A1-0239 | a1-bringen | study.sectionAccents (examples) | ramènerai | **LABOT** | REMOVE_STALE_ACCENT_TERM: ramènerai | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 25 | FR-A1-0240 | a1-da | study.sectionAccents (examples) | Venez | **LABOT** | REMOVE_STALE_ACCENT_TERM: Venez | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 26 | FR-A1-0241 | a1-dieser | study.sectionAccents (examples) | J'aime | **LABOT** | REMOVE_STALE_ACCENT_TERM: J'aime | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 27 | FR-A1-0248 | a1-fahren | study.sectionAccents (examples) | ramènerai | **LABOT** | REMOVE_STALE_ACCENT_TERM: ramènerai | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 28 | FR-A1-0249 | a1-finden | study.sectionAccents (examples) | Avez | **LABOT** | REMOVE_STALE_ACCENT_TERM: Avez | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 29 | FR-A1-0250 | a1-finden | study.sectionAccents (examples) | Cela | **LABOT** | REMOVE_STALE_ACCENT_TERM: Cela | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 30 | FR-A1-0255 | a1-gross-study | study.sectionAccents (examples) | maison | **LABOT** | REMOVE_STALE_ACCENT_TERM: maison | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 31 | FR-A1-0259 | a1-hoch-study | study.sectionAccents (examples) | montagne | **LABOT** | REMOVE_STALE_ACCENT_TERM: montagne | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 32 | FR-A1-0261 | a1-huebsch | study.sectionAccents (?) | Missing sectionAccents present in LV | **NEEDS_SOURCE_REVIEW** |  | FR kartītē trūkst lokalizētas sectionAccents struktūras; nav droša viena lauka COPY-ONLY labojuma. |
| 33 | FR-A1-0262 | a1-ihr | study.sectionAccents (examples) | Viens | **LABOT** | REMOVE_STALE_ACCENT_TERM: Viens | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 34 | FR-A1-0263 | a1-ihr | study.sectionAccents (examples) | habites | **LABOT** | REMOVE_STALE_ACCENT_TERM: habites | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 35 | FR-A1-0264 | a1-im | study.sectionAccents (examples) | suis | **LABOT** | REMOVE_STALE_ACCENT_TERM: suis | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 36 | FR-A1-0278 | a1-mögen | study.sectionAccents (examples) | Aimez | **LABOT** | REMOVE_STALE_ACCENT_TERM: Aimez | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 37 | FR-A1-0283 | a1-müssen | study.sectionAccents (examples) | Vous | **LABOT** | REMOVE_STALE_ACCENT_TERM: Vous | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 38 | FR-A1-0289 | a1-ob | study.sectionAccents (examples) | Vous | **LABOT** | REMOVE_STALE_ACCENT_TERM: Vous | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 39 | FR-A1-0290 | a1-oder | study.sectionAccents (examples) | Vous | **LABOT** | REMOVE_STALE_ACCENT_TERM: Vous | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 40 | FR-A1-0296 | a1-sich | study.sectionAccents (examples) | prend | **LABOT** | REMOVE_STALE_ACCENT_TERM: prend | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 41 | FR-A1-0297 | a1-sie-study | study.sectionAccents (examples) | cuisines | **LABOT** | REMOVE_STALE_ACCENT_TERM: cuisines | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 42 | FR-A1-0298 | a1-sie-study-2 | study.sectionAccents (examples) | cuisines | **LABOT** | REMOVE_STALE_ACCENT_TERM: cuisines | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 43 | FR-A1-0305 | a1-um | study.sectionAccents (examples) | fait | **LABOT** | REMOVE_STALE_ACCENT_TERM: fait | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 44 | FR-A1-0309 | a1-verstehen | study.sectionAccents (examples) | peux | **LABOT** | REMOVE_STALE_ACCENT_TERM: peux | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 45 | FR-A1-0311 | a1-wer | study.sectionAccents (examples) | Qu'est | **LABOT** | REMOVE_STALE_ACCENT_TERM: Qu'est | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 46 | FR-A1-0312 | a1-wer | study.sectionAccents (examples) | Lequel | **LABOT** | REMOVE_STALE_ACCENT_TERM: Lequel | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 47 | FR-A1-0313 | a1-werden | study.sectionAccents (examples) | fait | **LABOT** | REMOVE_STALE_ACCENT_TERM: fait | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 48 | FR-A1-0314 | a1-werden | study.sectionAccents (examples) | suis | **LABOT** | REMOVE_STALE_ACCENT_TERM: suis | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 49 | FR-A1-0315 | a1-wetter | study.sectionAccents (examples) | Quelle | **LABOT** | REMOVE_STALE_ACCENT_TERM: Quelle | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 50 | FR-A1-0316 | a1-wie | study.sectionAccents (examples) | Quel | **LABOT** | REMOVE_STALE_ACCENT_TERM: Quel | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 51 | FR-A1-0319 | a1-urlaub | study.sectionAccents (examples) | J'ai | **LABOT** | REMOVE_STALE_ACCENT_TERM: J'ai | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 52 | FR-A1-0320 | a1-uhr | study.sectionAccents (examples) | Appareil/heure | **LABOT** | REMOVE_STALE_ACCENT_TERM: Appareil/heure | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 53 | FR-A1-0321 | a1-einmal | study.sectionAccents (examples) | J'étais | **LABOT** | REMOVE_STALE_ACCENT_TERM: J'étais | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 54 | FR-A1-0322 | a1-klein | study.sectionAccents.examples.lv | pièce | **LABOT** | REMOVE_STALE_ACCENT_TERM: pièce | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 55 | FR-A1-0323 | a1-klein | study.sectionAccents.examples.lv | L'enfant | **LABOT** | REMOVE_STALE_ACCENT_TERM: L'enfant | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 56 | FR-A1-0324 | a1-an | study.sectionAccents.tip.left | sienas | **LABOT** | REMOVE_STALE_ACCENT_TERM: sienas | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 57 | FR-A1-0325 | a1-an | study.sectionAccents.tip.left | loga | **LABOT** | REMOVE_STALE_ACCENT_TERM: loga | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 58 | FR-A1-0326 | a1-an | study.sectionAccents.tip.left | malas | **LABOT** | REMOVE_STALE_ACCENT_TERM: malas | Noņemt tikai norādīto novecojušo akcenta terminu; FR/DE redzamo tekstu nemainīt. |
| 59 | FR-A1-0327 | a1-du-149 | frText | Toi | **LABOT** | Tu | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 60 | FR-A1-0328 | a1-Filzstift-186 | frText | Stylo feutre | **LABOT** | Stylo-feutre | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 61 | FR-A1-0329 | a1-an | frMain | À • À • Présent | **LABOT** | À | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 62 | FR-A1-0332 | a1-ab | study.comparison[1].meaning | De quelqu'un/quelque chose • Origine | **LABOT** | De quelqu'un ou de quelque chose (origine) | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 63 | FR-A1-0336 | a1-aus | frMain | De • Sortie | **LABOT** | De | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 64 | FR-A1-0338 | a1-aufs | frMain | Vers • Sur • Où ? | **LABOT** | Vers | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 65 | FR-A1-0340 | a1-aufs | study.examples[4].lv | Il monte à cheval. | **LABOT** | Il monte sur le cheval. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 66 | FR-A1-0341 | a1-baden | frMain | Nager | **LABOT** | Se baigner | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 67 | FR-A1-0342 | a1-baden | study.comparison[3].meaning | Allez nager | **LABOT** | Aller nager | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 68 | FR-A1-0343 | a1-bei | frMain | À | **LABOT** | Chez | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 69 | FR-A1-0344 | a1-bitte | study.examples[2].lv | Une tasse de café, s'il vous plaît. | **LABOT** | S'il vous plaît ! | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 70 | FR-A1-0346 | a1-bleiben | study.examples[3].lv | Je rentre à la maison | **LABOT** | Je reste à la maison. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 71 | FR-A1-0348 | a1-da | study.examples[1].lv | J'étais là | **LABOT** | J'étais là. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 72 | FR-A1-0351 | a1-dass | study.comparison[1].meaning | Parce que • Parce que | **LABOT** | Parce que | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 73 | FR-A1-0352 | a1-ein | frMain | Article indéfini • Un • Quelqu'un | **LABOT** | Article indéfini | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 74 | FR-A1-0356 | a1-eis | study.comparison[0].meaning | Glace / glace | **LABOT** | Glace | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 75 | FR-A1-0357 | a1-eis | study.comparison[1].meaning | Il va neiger | **LABOT** | Neige | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 76 | FR-A1-0360 | a1-erst | study.comparison[0].meaning | Premier • Seulement | **LABOT** | D'abord • Seulement | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 77 | FR-A1-0361 | a1-erst | study.comparison[1].meaning | Premièrement • Au début | **LABOT** | D'abord • Au début | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 78 | FR-A1-0362 | a1-es | frMain | Il • Il • Forme impersonnelle | **LABOT** | Il • Forme impersonnelle | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 79 | FR-A1-0366 | a1-etwas | study.examples[1].lv | As-tu du temps | **LABOT** | As-tu un peu de temps ? | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 80 | FR-A1-0367 | a1-etwas | study.tip.text | Rappelez-vous : chose → quelque chose • Degré → légèrement. | **LABOT** | Rappelez-vous : chose → quelque chose • Degré → un peu. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 81 | FR-A1-0368 | a1-etwas | study.comparison[0].meaning | Quelque chose / un peu | **LABOT** | Quelque chose | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 82 | FR-A1-0372 | a1-fahren | frMain | Conduire • Diriger • Emporter | **LABOT** | Conduire | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 83 | FR-A1-0374 | a1-fahren | study.comparison[0].meaning | Prendre le transport | **LABOT** | Voyager en véhicule | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 84 | FR-A1-0375 | a1-fahren | study.comparison[1].meaning | Allez à pied | **LABOT** | Aller à pied | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 85 | FR-A1-0376 | a1-fahren | study.comparison[2].meaning | Courir / partir | **LABOT** | Courir / marcher | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 86 | FR-A1-0377 | a1-fahren | study.comparison[3].meaning | Apporter/livrer | **LABOT** | Emmener | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 87 | FR-A1-0378 | a1-finden | frMain | Trouver • Considérer | **LABOT** | Trouver | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 88 | FR-A1-0380 | a1-finden | study.comparison[0].meaning | Trouver / considérer | **LABOT** | Trouver / penser | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 89 | FR-A1-0384 | a1-fuer | study.examples[3].lv | Combien payez-vous pour une voiture ? | **LABOT** | Combien paies-tu pour une voiture ? | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 90 | FR-A1-0387 | a1-geben | study.comparison[2].meaning | Recevoir/obtenir | **LABOT** | Recevoir ou obtenir | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 91 | FR-A1-0388 | a1-geben | study.comparison[3].meaning | Apporter/livrer | **LABOT** | Apporter ou livrer | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 92 | FR-A1-0393 | a1-hand-study | study.examples[2].lv | J'ai mal au bras. | **LABOT** | J'ai mal à la main. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 93 | FR-A1-0400 | a1-ins | study.examples[3].lv | Viens à la maison ! | **LABOT** | Entre dans la maison ! | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 94 | FR-A1-0402 | a1-kennen-study | frMain | Savoir | **LABOT** | Connaître | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 95 | FR-A1-0403 | a1-kennen-study | study.examples[2].lv | Où vous êtes-vous rencontré ? | **LABOT** | Où vous êtes-vous rencontrés ? | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 96 | FR-A1-0405 | a1-wissen-study | study.examples[1].lv | Comment tu sais ça ? | **LABOT** | Comment le savez-vous ? | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 97 | FR-A1-0406 | a1-können | frMain | Être capable de • Savoir | **LABOT** | Pouvoir | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 98 | FR-A1-0408 | a1-können | study.comparison[0].meaning | Pouvoir/savoir | **LABOT** | Pouvoir | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 99 | FR-A1-0409 | a1-kosten | frMain | Payer | **LABOT** | Coûter | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 100 | FR-A1-0417 | a1-laden-study | frMain | Boutique | **LABOT** | Magasin | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 101 | FR-A1-0418 | a1-land | frMain | Pays • Terrain | **LABOT** | Pays | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 102 | FR-A1-0421 | a1-land | study.comparison[3].meaning | Terre / planète | **LABOT** | Terre | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 103 | FR-A1-0422 | a1-lang | frMain | Longue • Longue | **LABOT** | Long | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 104 | FR-A1-0424 | a1-lassen | frMain | Partir • Laisser | **LABOT** | Laisser | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 105 | FR-A1-0427 | a1-laufen | frMain | Exécuter • Utiliser | **LABOT** | Courir | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 106 | FR-A1-0430 | a1-laut-study | study.examples[1].lv | La musique est forte. | **NEEDS_SOURCE_REVIEW** |  | LV etalona piemērs semantiski neatbilst vācu kartītes mērķvārdam; FR lauku vienu pašu automātiski nemainīt. |
| 107 | FR-A1-0432 | a1-laut-study | study.examples[3].lv | C'est très bruyant. | **NEEDS_SOURCE_REVIEW** |  | LV etalona piemērs semantiski neatbilst vācu kartītes mērķvārdam; FR lauku vienu pašu automātiski nemainīt. |
| 108 | FR-A1-0433 | a1-legen | study.examples[3].lv | Le livre est sur la table. | **NEEDS_SOURCE_REVIEW** |  | LV etalona piemērs semantiski neatbilst vācu kartītes mērķvārdam; FR lauku vienu pašu automātiski nemainīt. |
| 109 | FR-A1-0434 | a1-leise-study | study.examples[0].lv | S'il vous plaît, restez silencieux. | **LABOT** | S'il te plaît, reste silencieux. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 110 | FR-A1-0435 | a1-liegen | frMain | Être • Dormir | **LABOT** | Être allongé | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 111 | FR-A1-0437 | a1-liegen | study.examples[3].lv | J'ai posé le livre sur la table. | **NEEDS_SOURCE_REVIEW** |  | LV etalona piemērs semantiski neatbilst vācu kartītes mērķvārdam; FR lauku vienu pašu automātiski nemainīt. |
| 112 | FR-A1-0439 | a1-machen | frMain | Faire • Faire | **LABOT** | Faire | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 113 | FR-A1-0441 | a1-mal | frMain | Temps | **LABOT** | Fois | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 114 | FR-A1-0443 | a1-morgen | study.examples[1].lv | A demain ! | **LABOT** | À demain ! | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 115 | FR-A1-0444 | a1-müssen | frMain | Avoir besoin | **LABOT** | Devoir | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 116 | FR-A1-0445 | a1-nach | frMain | À • Après | **LABOT** | À | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 117 | FR-A1-0447 | a1-natuerlich | frMain | Bien sûr • Naturel | **LABOT** | Bien sûr | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 118 | FR-A1-0449 | a1-natuerlich | study.examples[5].lv | C'est tout à fait naturel/normal. | **LABOT** | C'est tout à fait naturel. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 119 | FR-A1-0450 | a1-nehmen | frMain | Prendre • Prendre | **LABOT** | Prendre | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 120 | FR-A1-0452 | a1-noch-study | study.examples[1].lv | Je suis toujours à la maison | **LABOT** | Je suis toujours à la maison. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 121 | FR-A1-0453 | a1-noch-study | study.examples[2].lv | Es-tu toujours là | **LABOT** | Es-tu toujours là ? | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 122 | FR-A1-0455 | a1-ob | frMain | Ou | **LABOT** | Si | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 123 | FR-A1-0456 | a1-ob | study.comparison[2].meaning | Si/quand | **LABOT** | Si | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 124 | FR-A1-0458 | a1-oder | study.comparison[0].meaning | Ou choisissez | **LABOT** | Ou dans un choix | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 125 | FR-A1-0459 | a1-passen | frMain | Ajustement • Ajustement | **LABOT** | Convenir | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 126 | FR-A1-0464 | a1-probieren | study.examples[3].lv | Puis-je essayer la veste | **LABOT** | Puis-je essayer la veste ? | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 127 | FR-A1-0465 | a1-probieren | study.comparison[0].meaning | Essayer / goûter | **LABOT** | Goûter | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 128 | FR-A1-0466 | a1-schau​en-study | frMain | Montre | **LABOT** | Regarder | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 129 | FR-A1-0467 | a1-schauen-study | study.examples[2].lv | Je regarde la télé | **LABOT** | Je regarde la télé. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 130 | FR-A1-0468 | a1-schon-study | study.examples[0].lv | Je suis déjà à la maison | **LABOT** | Je suis déjà à la maison. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 131 | FR-A1-0469 | a1-schwimmen | study.examples[0].lv | J'aime nager | **LABOT** | J'aime nager. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 132 | FR-A1-0470 | a1-schwimmen | study.examples[3].lv | Je vais nager | **LABOT** | Je vais nager. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 133 | FR-A1-0471 | a1-schwimmen | study.comparison[0].meaning | Nager comme mouvement ou sport | **LABOT** | Nager | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 134 | FR-A1-0474 | a1-sein | frMain | Ils/elle | **LABOT** | Ils / elles | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 135 | FR-A1-0475 | a1-sein | study.translation | Ils/elle | **LABOT** | Ils / elles | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 136 | FR-A1-0476 | a1-seite | frMain | Page • Côté | **LABOT** | Page | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 137 | FR-A1-0478 | a1-sich | frMain | Vous-même • Pour vous-même | **LABOT** | Soi-même | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 138 | FR-A1-0480 | a1-sich | study.examples[2].lv | Elle est heureuse. | **LABOT** | Elle se réjouit. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 139 | FR-A1-0481 | a1-sicher | frMain | Sûr • Certainement | **LABOT** | Sûr | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 140 | FR-A1-0483 | a1-sie-study | frMain | Ils/elle | **LABOT** | Elle | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 141 | FR-A1-0486 | a1-sie-study-2 | frMain | Toi | **LABOT** | Vous | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 142 | FR-A1-0487 | a1-sie-study-2 | study.examples[0].lv | Cuisinez, s'il vous plaît. | **LABOT** | Vous cuisinez, s'il vous plaît. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 143 | FR-A1-0488 | a1-sie-study-2 | study.examples[1].lv | Elle cuisine. | **LABOT** | Vous cuisinez. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 144 | FR-A1-0489 | a1-sie-study-2 | study.examples[2].lv | Elle mange | **LABOT** | Vous mangez. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 145 | FR-A1-0490 | a1-sie-study-2 | study.examples[3].lv | Ils cuisinent. | **LABOT** | Vous cuisinez. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 146 | FR-A1-0491 | a1-sie-study-2 | study.examples[4].lv | Ils jouent au football. | **LABOT** | Vous jouez au football. | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 147 | FR-A1-0493 | a1-sollen | frMain | Devrait | **LABOT** | Devoir | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 148 | FR-A1-0496 | a1-über | frMain | Fini • Pour | **LABOT** | Au-dessus | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 149 | FR-A1-0498 | a1-um | frMain | Vers • Heures | **LABOT** | Autour | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 150 | FR-A1-0500 | a1-um | study.comparison[2].meaning | Autour du temps / contre | **LABOT** | Vers cette heure / contre | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 151 | FR-A1-0501 | a1-um | study.comparison[3].meaning | De/à propos d'une source | **LABOT** | En faveur de | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 152 | FR-A1-0502 | a1-verstehen | frMain | Pour comprendre | **LABOT** | Comprendre | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 153 | FR-A1-0503 | a1-verstehen | study.comparison[0].meaning | Pour comprendre | **LABOT** | Comprendre | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 154 | FR-A1-0504 | a1-vom | frMain | Depuis | **LABOT** | Du | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 155 | FR-A1-0505 | a1-vom | study.comparison[0].meaning | De (une chose précise, pour qui ?) | **LABOT** | De (une chose précise, de qui ?) | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 156 | FR-A1-0506 | a1-vor | frMain | Avant • Devant | **LABOT** | Devant | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 157 | FR-A1-0508 | a1-was | frMain | Qui • Quoi | **LABOT** | Quoi | Auditā ieteiktais variants lingvistiski apstiprināts. |
| 158 | FR-A1-0510 | a1-wenn | frMain | Si • Quand | **LABOT** | Si | OWNER precizēts variants atbilstoši vienas galvenās nozīmes noteikumam un DE jēgai. |
| 159 | FR-A1-0516 | a1-fernsehen | study.comparison[1].meaning | Télévision (médias) | **LABOT** | Télévision (média) | Auditā ieteiktais variants lingvistiski apstiprināts. |

