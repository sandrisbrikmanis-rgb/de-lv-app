# FR–DE A1 — POST-REPAIR OWNER GALA LĒMUMI, 3. CIKLS

**Avots:** PR #683 aktuālais cycle 3 OWNER fails pēc audita #3.

**Pārklājums:** 40/40 · **LABOT:** 36 · **FALSE_POSITIVE:** 4 · **PENDING:** 0

**DE = STRICT READ-ONLY.** Production šajā OWNER posmā nav mainīts. Apply tikai ar CURRENT exact-match.

| # | Audit ID | Audit Card ID | OWNER mērķa Card ID | Field | CURRENT | OWNER STATUS | OWNER NEW / darbība | Pamatojums |
|---:|---|---|---|---|---|---|---|---|
| 1 | FR-A1-0297 | a1-sehen | a1-sehen | study.sectionAccents (examples) | Voyez | **LABOT** | REMOVE_STALE_ACCENT_TERM: Voyez | OWNER precizēts pēc faktiskā DE/FR konteksta un projekta vienas galvenās nozīmes noteikuma. |
| 2 | FR-A1-0313 | a1-vor | a1-vor | study.sectionAccents (examples) | Après | **LABOT** | REMOVE_STALE_ACCENT_TERM: Après | OWNER precizēts pēc faktiskā DE/FR konteksta un projekta vienas galvenās nozīmes noteikuma. |
| 3 | FR-A1-0315 | a1-wenn | a1-wenn | study.sectionAccents (examples) | vous | **LABOT** | REMOVE_STALE_ACCENT_TERM: vous | OWNER precizēts pēc faktiskā DE/FR konteksta un projekta vienas galvenās nozīmes noteikuma. |
| 4 | FR-A1-0330 | a1-also | a1-also | study.sectionAccents.tip.left | Rappelez | **LABOT** | REMOVE_STALE_ACCENT_TERM: Rappelez | OWNER precizēts pēc faktiskā DE/FR konteksta un projekta vienas galvenās nozīmes noteikuma. |
| 5 | FR-A1-0331 | a1-auch | a1-auch | study.sectionAccents.examples.lv | viens | **LABOT** | REMOVE_STALE_ACCENT_TERM: viens | OWNER precizēts pēc faktiskā DE/FR konteksta un projekta vienas galvenās nozīmes noteikuma. |
| 6 | FR-A1-0332 | a1-telefonieren-594 | a1-telefonieren-594 | frText | Appeler au téléphone | **LABOT** | Téléphoner | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 7 | FR-A1-0345 | a1-bleiben | a1-bleiben | study.comparison[1].meaning | Aller/partir à pied | **LABOT** | Aller ou partir à pied | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 8 | FR-A1-0346 | a1-bleiben | a1-bleiben | study.comparison[2].meaning | Conduire / partir en transport | **LABOT** | Conduire ou partir en transport | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 9 | FR-A1-0360 | a1-fahren | a1-fahren | study.comparison[4].meaning | Emportez avec vous | **LABOT** | Emporter avec soi | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 10 | FR-A1-0364 | a1-ganz-study | a1-ganz-study | study.examples[3].lv | Le repas est assez bon. | **FALSE_POSITIVE** |  | DE « ganz gut » un LV « diezgan labs » kontekstā CURRENT « assez bon » ir pareizs; « tout à fait bon » mainītu nozīmes intensitāti. |
| 11 | FR-A1-0365 | a1-geben | a1-geben | study.examples[0].lv | Donne-moi le livre s'il te plaît | **LABOT** | Donne-moi le livre, s'il te plaît. | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 12 | FR-A1-0366 | a1-geben | a1-geben | study.examples[1].lv | Je te donne mon numéro | **LABOT** | Je te donne mon numéro. | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 13 | FR-A1-0369 | a1-geben | a1-geben | study.tip.text | Rappelez-vous : donner → geben • Prends pour toi → nehmen. | **LABOT** | Rappelez-vous : donner → geben ; prendre pour soi → nehmen. | OWNER precizēts pēc faktiskā DE/FR konteksta un projekta vienas galvenās nozīmes noteikuma. |
| 14 | FR-A1-0370 | a1-geschwister-study | a1-geschwister-study | study.examples[0].lv | J'ai deux frères et sœurs. | **FALSE_POSITIVE** |  | « Geschwister » idiomātiski ir « frères et sœurs »; audita NEW nozīmētu tieši divus brāļus vai tieši divas māsas. |
| 15 | FR-A1-0379 | a1-huebsch | a1-huebsch | study.tip.text | hübsch décrit surtout une jolie apparence ; nett décrit une personne aimable. | **FALSE_POSITIVE** |  | « hübsch » un « nett » ir apzināti salīdzinātie vācu mērķvārdi; « nett » aizstāšana ar « gentil » sabojātu Study salīdzinājumu. |
| 16 | FR-A1-0382 | a1-im | a1-im | study.comparison[2].meaning | Dans / vers (pas d'article) | **LABOT** | Dans ou vers, sans article | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 17 | FR-A1-0383 | a1-im | a1-im | study.comparison[3].meaning | A, où ? (à qui ?) | **LABOT** | À, où ? (à qui ?) | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 18 | FR-A1-0386 | a1-ins | a1-ins | study.comparison[2].meaning | In / to (avec article indépendant) | **LABOT** | Dans ou vers, avec article indépendant | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 19 | FR-A1-0387 | a1-ins | a1-ins | study.comparison[4].meaning | À/chez (qui ?) | **LABOT** | À ou chez (qui ?) | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 20 | FR-A1-0389 | a1-kennen-study | a1-kennen-study | study.examples[4].lv | Connaître ; savoir | **LABOT** | Connaître | Audits norādīja nepareizu field; faktiskā unikālā CURRENT vērtība atrodas study.examples[4].lv. « kennen » gala tulkojums ir « Connaître ». |
| 21 | FR-A1-0399 | a1-lassen | a1-lassen | study.examples[3].lv | Laisse-moi tranquille! | **LABOT** | Laisse-moi tranquille ! | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 22 | FR-A1-0402 | a1-laufen | a1-laufen | study.comparison[2].meaning | Prendre le transport | **LABOT** | Prendre les transports | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 23 | FR-A1-0413 | a1-müssen | a1-müssen | study.comparison[2].meaning | Je veux | **LABOT** | Vouloir | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 24 | FR-A1-0417 | a1-nehmen | a1-nehmen | study.examples[2].lv | Je t'ai apporté un livre | **LABOT** | Je t'ai apporté un livre. | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 25 | FR-A1-0418 | a1-nehmen | a1-nehmen | study.examples[3].lv | Je t'emmènerai | **LABOT** | Je t'emmènerai. | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 26 | FR-A1-0419 | a1-nehmen | a1-nehmen | study.comparison[3].meaning | Emportez avec vous | **LABOT** | Emporter avec soi | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 27 | FR-A1-0420 | a1-neu | a1-reis | study.tip.text | Souvenez-vous : der Reis est au singulier en allemand, mais on dit généralement rīsi en letton. | **LABOT** | Souvenez-vous : der Reis est au singulier en allemand, mais on dit généralement « riz » en français. | Audits norādīja nepareizu Card ID a1-neu; faktiskā unikālā CURRENT vērtība ir a1-reis.study.tip.text. LV atlikums jāaizstāj ar FR tekstu. |
| 28 | FR-A1-0434 | a1-sich | a1-sich | study.comparison[3].meaning | Lui | **FALSE_POSITIVE** |  | Comparison rinda attiecas uz vācu « ihn», tāpēc CURRENT « Lui » ir pareizs; « Lui-même » nozīmētu refleksīvu formu. |
| 29 | FR-A1-0441 | a1-sollen | a1-sollen | study.comparison[3].meaning | Je veux | **LABOT** | Vouloir | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 30 | FR-A1-0448 | a1-verstehen | a1-verstehen | study.comparison[1].meaning | Pouvoir/savoir | **LABOT** | Pouvoir ou savoir | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 31 | FR-A1-0451 | a1-vom | a1-vom | study.comparison[1].meaning | De (général) | **LABOT** | De (en général) | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 32 | FR-A1-0454 | a1-vor | a1-vor | study.comparison[0].meaning | Avant / devant | **LABOT** | Avant ou devant | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 33 | FR-A1-0455 | a1-vor | a1-vor | study.comparison[1].meaning | Après / à | **LABOT** | Après ou à | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 34 | FR-A1-0459 | a1-wenn | a1-wenn | study.comparison[0].meaning | Si/quand | **LABOT** | Si ou quand | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 35 | FR-A1-0460 | a1-wer | a1-wer | frMain | Qui • Qui | **LABOT** | Qui | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 36 | FR-A1-0462 | a1-wer | a1-wer | study.examples[1].lv | Qui es-tu | **LABOT** | Qui es-tu ? | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 37 | FR-A1-0463 | a1-wer | a1-wer | study.examples[3].lv | Qui est ton professeur | **LABOT** | Qui est ton professeur ? | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 38 | FR-A1-0464 | a1-werden | a1-werden | study.comparison[3].meaning | Faire/faire | **LABOT** | Faire / fabriquer | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |
| 39 | FR-A1-0465 | a1-wie | a1-wie | frMain | Comment • Combien | **LABOT** | Comment | OWNER precizēts pēc faktiskā DE/FR konteksta un projekta vienas galvenās nozīmes noteikuma. |
| 40 | FR-A1-0472 | a1-zum | a1-zum | study.examples[3].lv | Venez manger ! | **LABOT** | Viens manger ! | Auditā piedāvātais labojums pārbaudīts pret DE un FR kontekstu; OWNER apstiprināts. |

## Obligātie tehniskie nosacījumi

- `FR-A1-0389`: izmantot precizēto field `study.examples[4].lv`.
- `FR-A1-0420`: izmantot precizēto Card ID `a1-reis`, nevis audita kļūdaino `a1-neu`.
- Jebkura CURRENT neatbilstība → SKIP un ziņot; neizmantot meklēšanu/aizstāšanu ārpus precīzā OWNER mērķa.
