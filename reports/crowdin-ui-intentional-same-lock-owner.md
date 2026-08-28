# Crowdin UI — INTENTIONAL_SAME bloķēšanas saraksts (OWNER)

**Datums:** 2026-08-28  
**Avots:** `reports/crowdin-ui-untranslated-audit.md` + delta `reports/crowdin-ui-intentional-same-lock-delta.md`  
**Mērķis:** OWNER nodoms bloķēt apzināti identiskas rindas (Crowdin aizsardzība vēl PENDING)  
**Apply:** **NĒ** — tikai OWNER mapping  
**Greek kartējums:** Crowdin `el` → repo `gr`

## Kopsavilkums

| Metrika | Vērtība |
|---|---:|
| BASELINE INTENTIONAL_SAME (`3812d92b`) | **170** |
| CANDIDATES (pašreiz) | **192** |
| DELTA (jauni kandidāti) | **22** |
| NELABOT_CANDIDATE (baseline) | **170** |
| OWNER_REVIEW_REQUIRED (delta) | **22** |
| crowdin_lock (OWNER nodoms) | **192/192** |
| lock_enforced | **NO** (192/192) |
| crowdin_protection | **PENDING** (192/192) |
| JSON ↔ ui.js neatbilstības | **0** |

### Pēc reason kategorijas

| reason_category | Skaits |
|---|---:|
| DE_CODE | 81 |
| GERMAN_PEDAGOGY | 49 |
| PLACEHOLDER | 29 |
| LATIN_GRAMMAR | 18 |
| GERMAN_BRAND | 15 |

### Pēc valodas

| Valoda | Skaits |
|---|---:|
| lt | 10 |
| ru | 10 |
| pl | 10 |
| uk | 10 |
| et | 10 |
| lb | 9 |
| ro | 7 |
| bs | 7 |
| sk | 7 |
| fi | 7 |
| sv | 7 |
| nb | 7 |
| nn | 7 |
| nl | 7 |
| it | 7 |
| is | 7 |
| cs | 6 |
| da | 6 |
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

- `crowdin_lock = YES` — **OWNER nodoms** aizsargāt rindu (vēl nav Crowdin enforcement).
- `lock_enforced = NO` — faktiskā Crowdin bloķēšana nav aktivizēta.
- `crowdin_protection = PENDING` — gaida OWNER apstiprinājumu un Crowdin apply.
- `OWNER_STATUS = NELABOT_CANDIDATE` — baseline 170 rindas (pirms delta).
- `OWNER_STATUS = OWNER_REVIEW_REQUIRED` — delta 22 rindas; **nedrīkst** automātiski apstiprināt kā `NELABOT`.
- `CURRENT` = faktiskā vērtība `crowdin/ui/{lang}.json` (un `languages/{lang}/ui.js`).
- Apply šajā posmā **netiek veikts**.

## Pilna tabula

| language | key | LV source | CURRENT | OWNER_STATUS | OWNER_REVIEW_REQUIRED | crowdin_lock | lock_enforced | crowdin_protection | reason_category | reason |
|---|---|---|---|---|---|---|---|---|---|---|
| lt | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| lt | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| lt | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| lt | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| lt | `languageSelect.footer` | Deutsch lernen | Deutsch lernen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| lt | `languageSelect.title` | Sprache wählen | Sprache wählen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| lt | `splash.subtitle` | Deutsch lernen | Deutsch lernen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| lt | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| lt | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| lt | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| ru | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| ru | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| ru | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| ru | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| ru | `languageSelect.footer` | Deutsch lernen | Deutsch lernen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| ru | `languageSelect.title` | Sprache wählen | Sprache wählen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| ru | `splash.subtitle` | Deutsch lernen | Deutsch lernen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| ru | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| ru | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| ru | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| pl | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| pl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| pl | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| pl | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| pl | `languageSelect.footer` | Deutsch lernen | Deutsch lernen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| pl | `languageSelect.title` | Sprache wählen | Sprache wählen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| pl | `splash.subtitle` | Deutsch lernen | Deutsch lernen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| pl | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| pl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| pl | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| uk | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| uk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| uk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| uk | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| uk | `languageSelect.footer` | Deutsch lernen | Deutsch lernen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| uk | `languageSelect.title` | Sprache wählen | Sprache wählen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| uk | `splash.subtitle` | Deutsch lernen | Deutsch lernen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| uk | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| uk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| uk | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| et | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| et | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| et | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| et | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| et | `languageSelect.footer` | Deutsch lernen | Deutsch lernen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| et | `languageSelect.title` | Sprache wählen | Sprache wählen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| et | `splash.subtitle` | Deutsch lernen | Deutsch lernen | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_BRAND | Vācu zīmola / palaišanas virkne |
| et | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| et | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| et | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| en | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| en | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| en | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| en | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| en | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| ro | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| ro | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| ro | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| ro | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| ro | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| ro | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| ro | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| bg | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| bg | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| bg | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| tr | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| tr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| tr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| tr | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| tr | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| gr | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| gr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| gr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| gr | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| gr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| sq | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| sq | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| sq | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| sq | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| sq | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| mk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| mk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| mk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| sl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| sl | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| sl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| bs | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| bs | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| bs | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| bs | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| bs | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| bs | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| bs | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| sr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| sr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| sr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| hr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| hr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| hr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| sk | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| sk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| sk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| sk | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| sk | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| sk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| sk | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| cs | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| cs | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| cs | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| cs | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| cs | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| cs | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| fi | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| fi | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| fi | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| fi | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| fi | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| fi | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| fi | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| sv | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| sv | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| sv | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| sv | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| sv | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| sv | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| sv | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| nb | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| nb | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| nb | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| nb | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| nb | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| nb | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| nb | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| nn | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| nn | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| nn | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| nn | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| nn | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| nn | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| nn | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| da | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| da | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| da | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| da | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| da | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| da | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| nl | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| nl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| nl | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| nl | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| nl | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| nl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| nl | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| lb | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| lb | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| lb | `kurss.lessonItems.17.menuDesc` | mit + Dativ, womit / mit wem un Umlaut. | mit + Dativ, womit / mit wem un Umlaut. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| lb | `kurss.lessonItems.18.menuDesc` | wohin / wo, Akkusativ vai Dativ ar an / in / auf. | wohin / wo, Akkusativ vai Dativ ar an / in / auf. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| lb | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| lb | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| lb | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| lb | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| lb | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| fr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| fr | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| it | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| it | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| it | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| it | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| it | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| it | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| it | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |
| es | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| es | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| es | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| es | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| es | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| pt | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| pt | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| pt | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| pt | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| hu | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| hu | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| hu | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| hu | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| hu | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | OWNER_REVIEW_REQUIRED | YES | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| is | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| is | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | Virziena indikators ar DE kodu un placeholder {code} |
| is | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| is | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | NELABOT_CANDIDATE | NO | YES | NO | PENDING | GERMAN_PEDAGOGY | Apzināti saglabāts vācu mācību apraksts |
| is | `study.table.german` | DE | DE | NELABOT_CANDIDATE | NO | YES | NO | PENDING | DE_CODE | DE kolonnas kods |
| is | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | NELABOT_CANDIDATE | NO | YES | NO | PENDING | PLACEHOLDER | Placeholder struktūra identiska avotam |
| is | `verb.infinitiv` | Infinitiv | Infinitiv | NELABOT_CANDIDATE | NO | YES | NO | PENDING | LATIN_GRAMMAR | Latīņu gramatikas termins |

