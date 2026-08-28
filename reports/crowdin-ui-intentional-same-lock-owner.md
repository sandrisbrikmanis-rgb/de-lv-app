# Crowdin UI — INTENTIONAL_SAME bloķēšanas saraksts (OWNER)

**Datums:** 2026-08-28  
**Avots:** `reports/crowdin-ui-intentional-same-owner-decisions.json` (OWNER apply)  
**Mērķis:** OWNER apstiprinātas NELABOT rindas (Crowdin aizsardzība vēl PENDING)  
**Apply:** **JĀ** — 27 LABOT ierakstīti production; 165 NELABOT apstiprināti  
**Greek kartējums:** Crowdin `el` → repo `gr`

## Kopsavilkums

| Metrika | Vērtība |
|---|---:|
| BASELINE INTENTIONAL_SAME (`3812d92b`) | **170** |
| OWNER reviewed | **192** |
| OWNER NELABOT (lock) | **165** |
| OWNER LABOT (applied) | **27** |
| OWNER_REVIEW_REQUIRED | **0** |
| crowdin_lock (OWNER nodoms) | **165/165** |
| lock_enforced | **NO** (165/165) |
| crowdin_protection | **PENDING** (165/165) |
| JSON ↔ ui.js neatbilstības | **0** |

### Pēc reason kategorijas

| reason_category | Skaits |
|---|---:|
| DE_CODE | 81 |
| GERMAN_PEDAGOGY | 47 |
| PLACEHOLDER | 29 |
| LATIN_GRAMMAR | 8 |

### Pēc valodas

| Valoda | Skaits |
|---|---:|
| ro | 7 |
| bs | 7 |
| sv | 7 |
| nb | 7 |
| nn | 7 |
| lb | 7 |
| lt | 6 |
| ru | 6 |
| pl | 6 |
| uk | 6 |
| et | 6 |
| sk | 6 |
| cs | 6 |
| fi | 6 |
| da | 6 |
| nl | 6 |
| it | 6 |
| is | 6 |
| en | 5 |
| tr | 5 |
| gr (Crowdin: `el`) | 5 |
| sq | 5 |
| es | 5 |
| hu | 5 |
| pt | 4 |
| bg | 3 |
| mk | 3 |
| sl | 3 |
| sr | 3 |
| hr | 3 |
| fr | 2 |

## Lēmumu noteikumi

- `OWNER_STATUS = NELABOT` — OWNER apstiprināts; vērtību **nedrīkst** mainīt.
- `crowdin_lock = YES` — OWNER nodoms aizsargāt rindu (vēl nav Crowdin enforcement).
- `lock_enforced = NO` — faktiskā Crowdin bloķēšana nav aktivizēta.
- `crowdin_protection = PENDING` — gaida Crowdin apply.
- 27 `LABOT` rindas **izņemtas** no lock saraksta pēc production apply.

## Pilna tabula

| language | key | LV source | CURRENT | OWNER_STATUS | OWNER_REVIEW_REQUIRED | crowdin_lock | lock_enforced | crowdin_protection | reason_category | reason |
|---|---|---|---|---|---|---|---|---|---|---|
| lt | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| lt | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| lt | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| lt | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| lt | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| lt | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| ru | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| ru | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| ru | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| ru | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| ru | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| ru | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| pl | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| pl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| pl | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| pl | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| pl | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| pl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| uk | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| uk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| uk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| uk | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| uk | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| uk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| et | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| et | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| et | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| et | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| et | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| et | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| en | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| en | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| en | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| en | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| en | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| ro | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| ro | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| ro | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| ro | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| ro | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| ro | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| ro | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT | NO | YES | NO | PENDING | LATIN_GRAMMAR | Rakstība “Infinitiv” ir pareizs mērķvalodas termins vai apzināti saglabāts vācu gramatikas apzīmējums. |
| bg | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| bg | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| bg | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| tr | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| tr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| tr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| tr | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| tr | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| gr | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| gr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| gr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| gr | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| gr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| sq | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| sq | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| sq | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| sq | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| sq | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| mk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| mk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| mk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| sl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| sl | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| sl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| bs | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| bs | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| bs | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| bs | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| bs | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| bs | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| bs | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT | NO | YES | NO | PENDING | LATIN_GRAMMAR | Rakstība “Infinitiv” ir pareizs mērķvalodas termins vai apzināti saglabāts vācu gramatikas apzīmējums. |
| sr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| sr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| sr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| hr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| hr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| hr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| sk | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| sk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| sk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| sk | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| sk | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| sk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| cs | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| cs | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| cs | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| cs | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| cs | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| cs | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT | NO | YES | NO | PENDING | LATIN_GRAMMAR | Rakstība “Infinitiv” ir pareizs mērķvalodas termins vai apzināti saglabāts vācu gramatikas apzīmējums. |
| fi | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| fi | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| fi | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| fi | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| fi | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| fi | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| sv | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| sv | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| sv | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| sv | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| sv | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| sv | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| sv | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT | NO | YES | NO | PENDING | LATIN_GRAMMAR | Rakstība “Infinitiv” ir pareizs mērķvalodas termins vai apzināti saglabāts vācu gramatikas apzīmējums. |
| nb | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| nb | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| nb | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| nb | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| nb | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| nb | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| nb | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT | NO | YES | NO | PENDING | LATIN_GRAMMAR | Rakstība “Infinitiv” ir pareizs mērķvalodas termins vai apzināti saglabāts vācu gramatikas apzīmējums. |
| nn | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| nn | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| nn | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| nn | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| nn | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| nn | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| nn | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT | NO | YES | NO | PENDING | LATIN_GRAMMAR | Rakstība “Infinitiv” ir pareizs mērķvalodas termins vai apzināti saglabāts vācu gramatikas apzīmējums. |
| da | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| da | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| da | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| da | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| da | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| da | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT | NO | YES | NO | PENDING | LATIN_GRAMMAR | Rakstība “Infinitiv” ir pareizs mērķvalodas termins vai apzināti saglabāts vācu gramatikas apzīmējums. |
| nl | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| nl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| nl | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| nl | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| nl | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| nl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| lb | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| lb | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| lb | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| lb | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| lb | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| lb | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| lb | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT | NO | YES | NO | PENDING | LATIN_GRAMMAR | Rakstība “Infinitiv” ir pareizs mērķvalodas termins vai apzināti saglabāts vācu gramatikas apzīmējums. |
| fr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| fr | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| it | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| it | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| it | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| it | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| it | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| it | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| es | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| es | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| es | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| es | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| es | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| pt | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| pt | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| pt | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| pt | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| hu | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| hu | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| hu | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| hu | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| hu | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |
| is | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| is | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | Tehnisks virziena indikators; DE kods un {code} placeholder ir apzināti vienādi. |
| is | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| is | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Virkne satur vācu valodas mācību terminus/piemērus; nav palicis tulkojams LV teksts. |
| is | `study.table.german` | DE | DE | NELABOT | NO | YES | NO | PENDING | DE_CODE | DE ir vācu valodas kolonnas kods. |
| is | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT | NO | YES | NO | PENDING | PLACEHOLDER | Virkne sastāv tikai no placeholderiem un pieturzīmēm; lokalizētais teksts tiek ievietots caur placeholderiem. |

