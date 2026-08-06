# BS–DE A1 sectionAccents labojumu atskaite

**Datums:** 2026-08-06  
**Avots:** `reports/bs-a1-full-audit.md`  
**Labošanas skripts:** `scripts/fix-bs-a1-section-accents.js`

---

## 1. Kopsavilkums

| Metrika | Vērtība |
|---|---|
| Izlaboto kartīšu skaits | **120** |
| Pārbaudīto akcentu elementu skaits | **3595** |
| Veiksmīgi izlaboti (LV mapēšana) | **951** |
| Veiksmīgi izlaboti (fuzzy) | **8** |
| Jau derīgi (nav mainīti) | **2566** |
| Izņemti nederīgi elementi | **70** |
| Neatrisināti (izņemti) | **70** |

### validate-study-design.js (A1 sectionAccentIssues)

| | Pirms | Pēc |
|---|---:|---:|
| `data/bs/a1.js` | **1031** | **0** |

---

## 2. Labošanas metode

- Katrs `sectionAccents` elements salīdzināts ar attiecīgo bosniešu Study sadaļas tekstu (tāda pati loģika kā `validate-study-design.js`).
- Nederīgiem terminiem (LV/EN atlikumi, neatbilstoši akcenti) veikta **LV paralēlā kartēšana**: LV etalona termins → tā pati pozīcija/token BS tekstā.
- Speciāli apstrādāti: `tip.left` slīpsvītru saraksti, `important` saraksti, `comparison` piemēru daļa aiz domuzīmes, jautājuma vārdi (`kurp?` → `gdje?`).
- Noņemti **orphan** `sectionAccents` rindas, kas pārsniedz faktisko `examples` / `comparison` / `important` masīvu garumu.
- DE akcenti laboti **tikai**, ja termins neeksistē attiecīgajā vācu tekstā (auditā konstatēta tehniska kļūda).
- **Nav veikta** globāla aizvietošana (`pie→kod`, `At→na` u.tml.).

---

## 3. Galvenie labojumu piemēri

| ID | sectionAccents ceļš | Iepriekš | Pēc labošanas | Atbilstošais BS teksts |
|---|---|---|---|---|
| a1-klein-study | explanation.purple[0] | mazs | mali | „klein znači **mali** po veličini…” |
| a1-klein-study | examples[0].lv.purple[0] | Mala | mala | „Soba je **mala**.” |
| a1-an | examples[0].lv.purple[0] | At | na | „**Na** zidu / na zidu” |
| a1-an | examples[0].lv.purple[1] | To | na | „Na zidu / **na** zidu” |
| a1-an | tip.left.green[0] | sienas | zidu | „Zapamtite: na **zidu**/prozoru/ivici → an.” |
| a1-sagen-study | explanation.purple[0] | teikt | reći | „…**reći** ili izraziti…” |
| a1-laufen | explanation.purple[2] | iet | trčati | „…**trčati** brže…” |
| a1-zeit | explanation.purple[0] | laiks | vrijeme | „…**vrijeme** ili termin…” |
| a1-einmal | explanation.purple[0] | reiz | jednom | „…**jednom** ili jedanput…” |
| a1-auf | examples[0].lv.purple[0] | To | na | „Stavio sam knjigu **na** sto.” |
| a1-bei | examples[0].lv.purple[0] | At | kod | „Ja sam **kod** prijatelja.” |
| a1-aber | important[1].purple[1] | bet gan | nego | „…„ne..., **nego**…”…” |
| a1-bringen | explanation.purple[0] | atnest | donijeti | „Najčešće: **donijeti**.” |

Pilns izmaiņu žurnāls: `reports/temp/bs-a1-section-accents-fix-log.json` (nav Git).

---

## 4. WARNING un izņemtie elementi

| Kategorija | Skaits |
|---|---:|
| Izņemti nederīgi akcenti (nevarēja droši kartēt) | **70** |
| Kapitalizācijas WARNING (kosmētika) | **0** (nav laboti — validatoram nav ERROR) |

Izņemtie elementi galvenokārt ir:
- akcenti, kuru LV ekvivalents vairs neeksistē BS tekstā (semantiski novecojuši);
- orphan salīdzinājumu rindas pēc `comparison` masīva apgriešanas;
- DE/BS akcenti, kuriem nav atbilstoša vārda konkrētajā sadaļā (drošāk izņemt, nekā minēt).

---

## 5. Atlikušo terminu skaits pēc labošanas

| Pārbaude | Skaits |
|---|---:|
| LV termini sectionAccents (validate ERROR) | **0** |
| EN termini sectionAccents (validate ERROR) | **0** |
| „Term not found” ERROR (validate-study-design A1) | **0** |
| Augstas smaguma atradumi (audit collector) | **0** |
| Vidējas smaguma apstiprinātie ERROR | **0** |

---

## 6. Validācijas rezultāti

| Pārbaude | Rezultāts |
|---|---|
| `node --check data/bs/a1.js` | **PASS** |
| `node scripts/audit-language-parity.js --lang=bs` | **PASS** (702/702, 134 study) |
| `node scripts/audit-mojibake.js --lang=bs` | **PASS** (0 hits) |
| `node scripts/validate-study-design.js --lang=bs` | **PASS** (A1 sectionAccentIssues: **0**) |
| `data/bs/a1.js` ≡ `www/data/bs/a1.js` | **Identiski** |

---

## 7. Regresijas pārbaude (pret `main`)

| Lauks | Izmaiņas |
|---|---|
| Galvenie BS tulkojumi (`lv`) | **0** |
| Study teksti (bez sectionAccents) | **0** |
| Vācu saturs (`de`, study DE) | **0** |
| `study.sectionAccents` | **120 kartītes** |

---

## 8. Apliecinājumi

1. **Galvenie BS tulkojumi netika mainīti.**
2. **Study teksti netika mainīti** (explanation, examples, tip, important u.c.).
3. **Vācu saturs netika mainīts** (izņemot bojātus DE akcentu ierakstus, kas neatbilda vācu tekstam).
4. **`data/a1.js` (LV–DE etalons) netika mainīts.**
5. **`ui.js`, `style.css` un citi faili netika mainīti.**

---

## 9. Mainītie un izveidotie faili

| Fails | Darbība |
|---|---|
| `data/bs/a1.js` | **Labots** — tikai `study.sectionAccents` |
| `www/data/bs/a1.js` | **Sinhronizēts** (bit-identisks) |
| `scripts/fix-bs-a1-section-accents.js` | **Izveidots** |
| `reports/bs-a1-section-accents-fix.md` | **Izveidots** (šis dokuments) |
| `reports/temp/bs-a1-section-accents-fix-log.json` | Pagaidu žurnāls (nav Git) |

---

## 10. Izlaboto kartīšu ID (120)

a1-ab, a1-aber, a1-also, a1-an, a1-appetit, a1-auch-study, a1-auf, a1-aufs, a1-aus, a1-baden, a1-bei, a1-besuch, a1-besuchen, a1-bis, a1-bitte, a1-bitte-study, a1-bleiben, a1-bringen, a1-da, a1-das, a1-dass, a1-der, a1-die, a1-dieser, a1-ein, a1-einmal, a1-eis, a1-erst, a1-es, a1-etwas, a1-fahren, a1-ferien, a1-fernsehen-study, a1-finden, a1-frau, a1-fuer, a1-geben, a1-gemuese, a1-gleich, a1-gross-study, a1-gut-study, a1-haben, a1-halten, a1-heißen, a1-hoch-study, a1-hoeren-study, a1-huebsch, a1-ihr, a1-im, a1-in, a1-ins, a1-jung, a1-kein, a1-kennen-study, a1-klein-study, a1-kosten, a1-können, a1-laden-study, a1-land, a1-lang, a1-lassen, a1-laufen, a1-laut, a1-laut-study, a1-legen, a1-leise-study, a1-liegen, a1-machen, a1-mal, a1-mann, a1-mit, a1-morgen, a1-mögen, a1-müssen, a1-nach, a1-natuerlich, a1-nehmen, a1-neu, a1-noch-mal, a1-noch-study, a1-nur-study, a1-ob, a1-obst, a1-oder, a1-passen, a1-probieren, a1-reis, a1-sagen-study, a1-schon-study, a1-schwimmen, a1-sehen, a1-sein, a1-seite, a1-sich, a1-sicher, a1-sie-study, a1-sie-study-2, a1-sitzen, a1-sollen, a1-sprechen-study, a1-stehen, a1-uhr, a1-um, a1-unter, a1-urlaub, a1-verstehen, a1-vom, a1-vor, a1-was, a1-wenn, a1-wer, a1-werden, a1-wetter, a1-wie, a1-wissen-study, a1-zeit, a1-zu, a1-zug, a1-zum, a1-über

---

*Atskaite ģenerēta pēc `node scripts/fix-bs-a1-section-accents.js` izpildes.*
