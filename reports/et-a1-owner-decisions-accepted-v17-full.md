# ET–DE A1 — OWNER DECISIONS — ACCEPTED v1.7

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.7  
**MAIN_BASE_SHA:** `6f74ddf4e721eed5e264132dc5f96d445f45586e`  
**WORK_BRANCH:** `cursor/et-de-a1-v17-owner-repair-ba9e`  
**Audit PR:** `#602`  
**Findings reviewed:** **14/14**  
**DE:** **STRICT READ-ONLY**

## OWNER kopsavilkums

| Statuss | Skaits |
|---|---:|
| **LABOT** | **11** |
| **NELABOT** | **2** |
| **NEEDS_SOURCE_REVIEW** | **1** |
| **FALSE_POSITIVE** | **0** |
| **Kopā** | **14** |

> `PROPOSED_ET` nav automātiski pieņemts. Zemāk `NEW` ir autoritatīvs tikai rindām ar `Statuss: LABOT`.
> Apply drīkst veikt tikai COPY-ONLY un tikai tad, ja production faktiskā vērtība precīzi sakrīt ar `CURRENT`.

---

## ET-A1-0001

- **Card ID:** `a1-also`
- **Field/path:** `study.examples[1].lv`
- **CURRENT:** `sa oled haige, seepärast sa ei lähe tööle.`
- **NEW:** `sa oled haige, seepärast ei lähe sa tööle.`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. Dabiskā un gramatiski pareizā vārdu kārtība pēc `seepärast`.

## ET-A1-0002

- **Card ID:** `a1-also`
- **Field/path:** `study.comparison[1].meaning`
- **CURRENT:** `ka`
- **NEW:** —
- **Statuss:** **NEEDS_SOURCE_REVIEW**
- **OWNER_DECISION:** Audita pamatojums konfliktē ar norādīto LV MASTER reference `arī`. Nav droši aizvietot ar audita metatekstu `mitte „ka“; „ka“ on saksa keeles „auch“`, kamēr nav pārbaudīts pilns `comparison[1]` objekts un tā DE/LV semantiskā loma. DE nemainīt.

## ET-A1-0003

- **Card ID:** `a1-baden`
- **Field/path:** `study.examples[2].lv`
- **CURRENT:** `ta ujub väga hästi.`
- **NEW:** —
- **Statuss:** **NELABOT**
- **OWNER_DECISION:** CURRENT precīzi atbilst dotajam LV MASTER `viņš ļoti labi peld.` Audita variants `ta supleb väga hästi.` maina avota nozīmi un nav pieņemams tikai headword `baden` dēļ.

## ET-A1-0004

- **Card ID:** `a1-der`
- **Field/path:** `study.examples[1].lv`
- **CURRENT:** `buss tuleb.`
- **NEW:** `Buss sõidab.`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. `tuleb` = nāk/ierodas, bet LV MASTER ir `autobuss brauc`.

## ET-A1-0005

- **Card ID:** `a1-fussball-study`
- **Field/path:** `study.examples[1].lv`
- **CURRENT:** `Jalgpall on aias.`
- **NEW:** `Jalgpall asub aias.`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. `asub` precīzāk izsaka LV MASTER `atrodas` un novērš nevajadzīgo vispārīgo `on`.

## ET-A1-0006

- **Card ID:** `a1-heißen`
- **Field/path:** `etMain`
- **CURRENT:** `nimi olema • tähendama`
- **NEW:** `nime kandma • tähendama`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. `nime kandma` ir dabisks igauņu ekvivalents vācu `heißen` nozīmei “saukties”.

## ET-A1-0007

- **Card ID:** `a1-ihr`
- **Field/path:** `study.translation`
- **CURRENT:** `teie • temale`
- **NEW:** —
- **Statuss:** **NELABOT**
- **OWNER_DECISION:** Dotais LV MASTER reference ir `jūs • viņai`; CURRENT tam atbilst. Audita piedāvājums pievienot trešo nozīmi `tema (omastav)` paplašina MASTER saturu, tāpēc bez avota/paritātes pamatojuma to nepievienot.

## ET-A1-0013

- **Card ID:** `a1-lang`
- **Field/path:** `study.examples[5].lv`
- **CURRENT:** `kogu päev (otsa).`
- **NEW:** `kogu päeva (otsa).`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. Ilguma konstrukcijā nepieciešams `päeva`.

## ET-A1-0024

- **Card ID:** `a1-sitzen`
- **Field/path:** `study.examples[2].lv`
- **CURRENT:** `ta istub ukse juures.`
- **NEW:** `ta seisab ukse juures.`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. Atbilst LV MASTER `viņš stāv pie durvīm`.

## ET-A1-0025

- **Card ID:** `a1-sitzen`
- **Field/path:** `study.examples[3].lv`
- **CURRENT:** `kass istub diivanil.`
- **NEW:** `kass lamab diivanil.`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. Atbilst LV MASTER `kaķis guļ uz dīvāna`.

## ET-A1-0026

- **Card ID:** `a1-stehen`
- **Field/path:** `study.examples[2].lv`
- **CURRENT:** `ta seisab laua ääres.`
- **NEW:** `ta istub laua ääres.`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. Atbilst LV MASTER `viņš sēž pie galda`.

## ET-A1-0027

- **Card ID:** `a1-stehen`
- **Field/path:** `study.examples[3].lv`
- **CURRENT:** `raamat on laual.`
- **NEW:** `raamat seisab laual.`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. Igauņu `raamat seisab laual` ir dabiska konstrukcija un saglabā mācāmā `stehen` semantiku, vienlaikus atbilstot LV MASTER nozīmei.

## ET-A1-0028

- **Card ID:** `a1-um`
- **Field/path:** `study.examples[3].lv`
- **CURRENT:** `ma õpin, et saksa keelt rääkida.`
- **NEW:** `ma õpin saksa keelt rääkima.`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. `õppima` šeit dabiski saistās ar `-ma` infinitīvu; CURRENT konstrukcija ir nedabiska.

## ET-A1-0029

- **Card ID:** `a1-vor`
- **Field/path:** `study.examples[2].lv`
- **CURRENT:** `on viie minuti pärast kaheksa.`
- **NEW:** `Kell on viis minutit kaheksast puudu.`
- **Statuss:** **LABOT**
- **OWNER_DECISION:** Pieņemts. CURRENT nozīmē “piecas minūtes pēc astoņiem”, bet LV MASTER ir “bez piecām astoņi”.

---

# COPY-ONLY APPLY CONTRACT

Apply tikai **11 `LABOT`** rindas.

Obligāti:

1. `Card ID` exact match.
2. `Field/path` exact match.
3. Faktiskā production vērtība pirms rakstīšanas `=== CURRENT`.
4. Ja neatbilst — konkrēto rindu **SKIP / CURRENT_VALUE_MISMATCH**; neimprovizēt.
5. Ierakstīt precīzi `NEW`; nepārfrāzēt.
6. `NELABOT` un `NEEDS_SOURCE_REVIEW` production laukus neaiztikt.
7. **DE = STRICT READ-ONLY.**
8. Sinhronizēt tikai atbilstošo ET production mirror (`data/et/a1.js` ↔ `www/data/et/a1.js`).
9. Pēc rakstīšanas pierādīt **11/11 APPLIED_VERIFIED** vai skaidri uzrādīt katru mismatch.
10. Palaist syntax, mirror un targeted regression pārbaudes.
11. OWNER vēsturi saglabāt nākamajiem auditiem saskaņā ar MASTER v1.7.
