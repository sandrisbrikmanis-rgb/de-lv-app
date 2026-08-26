# ES–DE A1+A2 — FINAL MICRO-REGRESSION OWNER CORRECTIONS

## STATUS

`OWNER ACCEPTED — READY FOR FINAL MICRO COPY-ONLY APPLY`

Šis fails atrisina divus bloķētos OWNER lēmumus gala micro-regresijas mappingā un autorizē COPY-ONLY apply visiem 237 jau validētajiem `LABOT` targetiem.

## AUTORITATĪVIE AVOTI

1. `reports/es-de-a1-a2-final-micro-regression-owner-decisions.json`
2. Šis korekciju fails

Ja starp failiem ir pretruna par `ES-A1A2-MICRO-0226` vai `ES-A1A2-MICRO-0227`, precedence ir šim korekciju failam.

Production un DE šajā OWNER lēmumu posmā netiek mainīti.

---

## ES-A1A2-MICRO-0226

- Level: `A1`
- Card ID: `a1-morgen`
- DE: `morgen`
- Field/path: `study.examples[4].lv`
- Paired DE: `Guten Morgen!`
- CURRENT: `¡Buen día!`
- NEW: `¡Buen día!`
- Action: `KEEP`
- Status: `NELABOT`
- Classification: `FALSE_POSITIVE`
- Pamatojums: `Guten Morgen!` ir rīta sveiciens. `¡Buen día!` ir derīgs spāņu sveiciens. Iepriekš piedāvātais `¡Hasta mañana!` nozīmētu `Bis morgen!` un mainītu vācu avota nozīmi.

---

## ES-A1A2-MICRO-0227

- Level: `A1`
- Card ID: `a1-morgen-study`
- DE: `Morgen`
- Field/path: `study.examples[4].lv`
- Paired DE: `Guten Morgen!`
- CURRENT: `¡Buen día!`
- NEW: `¡Buen día!`
- Action: `KEEP`
- Status: `NELABOT`
- Classification: `FALSE_POSITIVE`
- Pamatojums: `Guten Morgen!` ir sveiciens. `Es por la mañana.` nebūtu sveiciena tulkojums un neatbilstu vācu avotam.

---

## ES-A1A2-MICRO-0240

Saglabāt jau pieņemto lēmumu:

- Card ID: `a2-wert`
- Field/path: `study.examples[4].lv`
- Paired DE: `Das Auto ist teuer.`
- CURRENT: `El auto es caro.`
- NEW: `El auto es caro.`
- Action: `KEEP`
- Status: `NELABOT`
- Classification: `FALSE_POSITIVE`

---

## GALA SKAITĻI

| Metrika | Gala rezultāts |
|---|---:|
| Review coverage | 240/240 |
| LABOT findings | 237 |
| NELABOT findings | 3 |
| BLOCKED | 0 |
| Unique LABOT apply targets | 237 |
| OWNER conflicts | 0 |

## COPY-ONLY APPLY AUTORIZĀCIJA

Atļauts piemērot visus 237 objektus no:

`reports/es-de-a1-a2-final-micro-regression-owner-decisions.json`

kuros ir:

`Status: LABOT`

Nedrīkst piemērot:

- `ES-A1A2-MICRO-0226`;
- `ES-A1A2-MICRO-0227`;
- `ES-A1A2-MICRO-0240`.

Šiem trim objektiem jāpaliek production datos identiskiem CURRENT.

## OBLIGĀTĀ APPLY DROŠĪBA

Katram no 237 `LABOT` targetiem:

1. `actual current value === OWNER CURRENT`;
2. mismatch gadījumā SKIP tikai konkrēto targetu;
3. ierakstīt precīzu OWNER NEW;
4. atkārtoti nolasīt production failu;
5. tikai tad, ja `actual final value === OWNER NEW`, piešķirt `APPLIED_VERIFIED`.

Aizliegts:

- tulkot vai pārfrāzēt;
- mainīt citu field/path;
- veikt globālu replace;
- labot blakus kartītes;
- mainīt DE;
- mainīt citas valodas;
- mainīt trīs `NELABOT` objektus.

## SAGAIDĀMAIS APPLY REZULTĀTS

| Metrika | Sagaidāmais rezultāts |
|---|---:|
| OWNER LABOT targets | 237 |
| APPLIED_VERIFIED | 237/237 |
| NELABOT_UNCHANGED | 3/3 |
| CURRENT_VALUE_MISMATCH | 0 |
| NEW_VALUE_MISMATCH | 0 |
| FAILED | 0 |
| DE changes | 0 |
| Unexpected production changes | 0 |
| Mirror | PASS |
| Syntax | PASS |
| ID/order | PASS |

## NĀKAMAIS SOLIS

Pēc 237 targetu COPY-ONLY apply veikt tikai mērķētu gala pārbaudi:

- 237/237 NEW exact-match;
- 3/3 NELABOT unchanged;
- mainīto unikālo kartīšu svaiga Luna micro-regresija;
- ja validētie REAL = 0, final closure un PR #664 merge-readiness.
