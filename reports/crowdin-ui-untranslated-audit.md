# Crowdin UI — netulkoto / identisko rindu audits

**Datums:** 2026-08-28  
**Režīms:** READ-ONLY  
**LV avots:** `crowdin/ui/lv.json` — **305** atslēgas  
**Mērķis:** visas **31** mērķvaloda pret LV avotu  
**Greek kartējums:** Crowdin `el` → repo `gr`  
**Production izmaiņas:** **0** (nav mainīti `crowdin/ui/*.json`, `languages/**`, `data/**`, `www/**`)

---

## Gala kopsavilkums

| Metrika | Vērtība |
|---|---|
| Pārbaudīto valodu skaits | **31** |
| Atslēgas uz valodu | **305** |
| Kopā pārbaudīto atslēgu salīdzinājumu | **9455** (31 × 305) |
| Valodu ar 305/305 atslēgām | **31/31** |
| Kopējais `target === LV source` rindu skaits | **566** |
| INTENTIONAL_SAME | **170** |
| REAL_UNTRANSLATED | **202** |
| NEEDS_OWNER_REVIEW | **194** |
| Placeholder kļūdas | **55** |
| HTML struktūras kļūdas | **0** |
| Trūkstošas atslēgas | **0** |
| Liekas atslēgas | **0** |
| Tukšas vērtības | **0** |
| Production izmaiņas | **0** |

### Valodu kopsavilkuma tabula

| Valoda | Atslēgas | target===source | LV vārdu skaits | INTENTIONAL_SAME | REAL_UNTRANSLATED | NEEDS_OWNER_REVIEW | Placeholder | HTML | Trūkst | Liekas | Tukšas |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| lt | 305/305 | 14 | 40 | 10 | 0 | 4 | 0 | 0 | 0 | 0 | 0 |
| ru | 305/305 | 10 | 36 | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 305/305 | 11 | 37 | 10 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| uk | 305/305 | 10 | 36 | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 305/305 | 12 | 38 | 10 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| en | 305/305 | 5 | 17 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 305/305 | 5 | 24 | 5 | 0 | 0 | 6 | 0 | 0 | 0 | 0 |
| bg | 305/305 | 1 | 7 | 1 | 0 | 0 | 5 | 0 | 0 | 0 | 0 |
| tr | 305/305 | 5 | 26 | 5 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| gr (Crowdin: `el`) | 305/305 | 2 | 8 | 2 | 0 | 0 | 5 | 0 | 0 | 0 | 0 |
| sq | 305/305 | 4 | 14 | 4 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| mk | 305/305 | 1 | 7 | 1 | 0 | 0 | 5 | 0 | 0 | 0 | 0 |
| sl | 305/305 | 22 | 49 | 1 | 0 | 21 | 5 | 0 | 0 | 0 | 0 |
| bs | 305/305 | 32 | 79 | 7 | 0 | 25 | 0 | 0 | 0 | 0 | 0 |
| sr | 305/305 | 22 | 49 | 1 | 0 | 21 | 5 | 0 | 0 | 0 | 0 |
| hr | 305/305 | 22 | 49 | 1 | 0 | 21 | 5 | 0 | 0 | 0 | 0 |
| sk | 305/305 | 8 | 31 | 7 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| cs | 305/305 | 8 | 20 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| fi | 305/305 | 9 | 32 | 7 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| sv | 305/305 | 9 | 32 | 7 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| nb | 305/305 | 9 | 32 | 7 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| nn | 305/305 | 9 | 32 | 7 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| da | 305/305 | 6 | 23 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 305/305 | 9 | 32 | 7 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| lb | 305/305 | 291 | 1055 | 9 | 202 | 80 | 0 | 0 | 0 | 0 | 0 |
| fr | 305/305 | 2 | 4 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 305/305 | 9 | 32 | 7 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| es | 305/305 | 7 | 19 | 5 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| pt | 305/305 | 1 | 12 | 1 | 0 | 0 | 12 | 0 | 0 | 0 | 0 |
| hu | 305/305 | 2 | 8 | 2 | 0 | 0 | 5 | 0 | 0 | 0 | 0 |
| is | 305/305 | 9 | 32 | 7 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |

---

## lt

- **Atslēgas:** 305/305
- **target === source rindas:** 14
- **Šo rindu LV avota vārdu skaits:** 40
- **INTENTIONAL_SAME:** 10
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 4
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| lt | `card.sessionLabel` | Sesija | Sesija | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lt | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| lt | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| lt | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lt | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| lt | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| lt | `kurss.sections.grammar` | Gramatika | Gramatika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lt | `languageSelect.footer` | Deutsch lernen | Deutsch lernen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| lt | `languageSelect.title` | Sprache wählen | Sprache wählen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| lt | `splash.subtitle` | Deutsch lernen | Deutsch lernen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| lt | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| lt | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lt | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| lt | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## ru

- **Atslēgas:** 305/305
- **target === source rindas:** 10
- **Šo rindu LV avota vārdu skaits:** 36
- **INTENTIONAL_SAME:** 10
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| ru | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| ru | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| ru | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| ru | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| ru | `languageSelect.footer` | Deutsch lernen | Deutsch lernen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| ru | `languageSelect.title` | Sprache wählen | Sprache wählen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| ru | `splash.subtitle` | Deutsch lernen | Deutsch lernen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| ru | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| ru | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| ru | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## pl

- **Atslēgas:** 305/305
- **target === source rindas:** 11
- **Šo rindu LV avota vārdu skaits:** 37
- **INTENTIONAL_SAME:** 10
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 1
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| pl | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| pl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| pl | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| pl | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| pl | `languageSelect.footer` | Deutsch lernen | Deutsch lernen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| pl | `languageSelect.title` | Sprache wählen | Sprache wählen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| pl | `splash.subtitle` | Deutsch lernen | Deutsch lernen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| pl | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| pl | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| pl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| pl | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## uk

- **Atslēgas:** 305/305
- **target === source rindas:** 10
- **Šo rindu LV avota vārdu skaits:** 36
- **INTENTIONAL_SAME:** 10
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| uk | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| uk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| uk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| uk | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| uk | `languageSelect.footer` | Deutsch lernen | Deutsch lernen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| uk | `languageSelect.title` | Sprache wählen | Sprache wählen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| uk | `splash.subtitle` | Deutsch lernen | Deutsch lernen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| uk | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| uk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| uk | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## et

- **Atslēgas:** 305/305
- **target === source rindas:** 12
- **Šo rindu LV avota vārdu skaits:** 38
- **INTENTIONAL_SAME:** 10
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 2
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| et | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| et | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| et | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| et | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| et | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| et | `languageSelect.footer` | Deutsch lernen | Deutsch lernen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| et | `languageSelect.title` | Sprache wählen | Sprache wählen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| et | `splash.subtitle` | Deutsch lernen | Deutsch lernen | INTENTIONAL_SAME | Vācu zīmola / palaišanas virkne |
| et | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| et | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| et | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| et | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## en

- **Atslēgas:** 305/305
- **target === source rindas:** 5
- **Šo rindu LV avota vārdu skaits:** 17
- **INTENTIONAL_SAME:** 5
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| en | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| en | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| en | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| en | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| en | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

## ro

- **Atslēgas:** 305/305
- **target === source rindas:** 5
- **Šo rindu LV avota vārdu skaits:** 24
- **INTENTIONAL_SAME:** 5
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 6
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 6

- `direction.nativeToDe` — sagaidīts {"code":1}, faktiski {"cod":1}
- `hints.trainingCard` — sagaidīts {"title":1}, faktiski {"titlu":1}
- `kurss.exerciseProgress` — sagaidīts {"lesson":1}, faktiski {}
- `kurss.hints.exerciseCardAria` — sagaidīts {"title":1}, faktiski {"titlu":1}
- `kurss.lessonProgress` — sagaidīts {"lesson":1,"current":1,"total":1}, faktiski {"current":1,"total":1}
- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"label":1,"current":1,"total":1,"robinet":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| ro | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| ro | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| ro | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| ro | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| ro | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## bg

- **Atslēgas:** 305/305
- **target === source rindas:** 1
- **Šo rindu LV avota vārdu skaits:** 7
- **INTENTIONAL_SAME:** 1
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 5
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 5

- `direction.deToNative` — sagaidīts {"code":1}, faktiski {}
- `direction.nativeToDe` — sagaidīts {"code":1}, faktiski {}
- `kurss.exerciseProgress` — sagaidīts {"lesson":1}, faktiski {}
- `kurss.lessonProgress` — sagaidīts {"lesson":1,"current":1,"total":1}, faktiski {}
- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"label":1,"current":1,"total":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| bg | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |

---

## tr

- **Atslēgas:** 305/305
- **target === source rindas:** 5
- **Šo rindu LV avota vārdu skaits:** 26
- **INTENTIONAL_SAME:** 5
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 1
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 1

- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"label":1,"tap":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| tr | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| tr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| tr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| tr | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| tr | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |

---

## gr (Crowdin: `el`)

- **Atslēgas:** 305/305
- **target === source rindas:** 2
- **Šo rindu LV avota vārdu skaits:** 8
- **INTENTIONAL_SAME:** 2
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 5
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 5

- `direction.deToNative` — sagaidīts {"code":1}, faktiski {}
- `direction.nativeToDe` — sagaidīts {"code":1}, faktiski {}
- `kurss.exerciseProgress` — sagaidīts {"lesson":1}, faktiski {}
- `kurss.lessonProgress` — sagaidīts {"lesson":1,"current":1,"total":1}, faktiski {"current":1,"total":1}
- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"label":1,"current":1,"total":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| gr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| gr | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |

---

## sq

- **Atslēgas:** 305/305
- **target === source rindas:** 4
- **Šo rindu LV avota vārdu skaits:** 14
- **INTENTIONAL_SAME:** 4
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 1
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 1

- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"label":1,"current":1,"total":1,"faucet":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| sq | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| sq | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| sq | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| sq | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |

---

## mk

- **Atslēgas:** 305/305
- **target === source rindas:** 1
- **Šo rindu LV avota vārdu skaits:** 7
- **INTENTIONAL_SAME:** 1
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 5
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 5

- `direction.deToNative` — sagaidīts {"code":1}, faktiski {}
- `direction.nativeToDe` — sagaidīts {"code":1}, faktiski {}
- `kurss.exerciseProgress` — sagaidīts {"lesson":1}, faktiski {}
- `kurss.lessonProgress` — sagaidīts {"lesson":1,"current":1,"total":1}, faktiski {}
- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"label":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| mk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |

---

## sl

- **Atslēgas:** 305/305
- **target === source rindas:** 22
- **Šo rindu LV avota vārdu skaits:** 49
- **INTENTIONAL_SAME:** 1
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 21
- **Placeholder kļūdas:** 5
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 5

- `direction.deToNative` — sagaidīts {"code":1}, faktiski {"koda":1}
- `direction.nativeToDe` — sagaidīts {"code":1}, faktiski {"koda":1}
- `kurss.exerciseProgress` — sagaidīts {"lesson":1}, faktiski {"lekcija":1}
- `kurss.lessonProgress` — sagaidīts {"lesson":1,"current":1,"total":1}, faktiski {"lekcija":1,"trenutno":1}
- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"label":1,"trenutno":1,"skupaj":1,"tap":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| sl | `kurss.lessonItems.1.title` | Lekcija 1 | Lekcija 1 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.10.title` | Lekcija 10 | Lekcija 10 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.11.title` | Lekcija 11 | Lekcija 11 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.12.title` | Lekcija 12 | Lekcija 12 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.13.title` | Lekcija 13 | Lekcija 13 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.14.title` | Lekcija 14 | Lekcija 14 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.15.title` | Lekcija 15 | Lekcija 15 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.16.title` | Lekcija 16 | Lekcija 16 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.17.title` | Lekcija 17 | Lekcija 17 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.18.title` | Lekcija 18 | Lekcija 18 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| sl | `kurss.lessonItems.19.title` | Lekcija 19 | Lekcija 19 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.2.title` | Lekcija 2 | Lekcija 2 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.20.title` | Lekcija 20 | Lekcija 20 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.21.title` | Lekcija 21 | Lekcija 21 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.3.title` | Lekcija 3 | Lekcija 3 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.4.title` | Lekcija 4 | Lekcija 4 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.5.title` | Lekcija 5 | Lekcija 5 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.6.title` | Lekcija 6 | Lekcija 6 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.7.title` | Lekcija 7 | Lekcija 7 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.8.title` | Lekcija 8 | Lekcija 8 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sl | `kurss.lessonItems.9.title` | Lekcija 9 | Lekcija 9 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |

---

## bs

- **Atslēgas:** 305/305
- **target === source rindas:** 32
- **Šo rindu LV avota vārdu skaits:** 79
- **INTENTIONAL_SAME:** 7
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 25
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| bs | `card.sessionLabel` | Sesija | Sesija | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| bs | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| bs | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.1.title` | Lekcija 1 | Lekcija 1 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.10.title` | Lekcija 10 | Lekcija 10 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.11.title` | Lekcija 11 | Lekcija 11 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.12.title` | Lekcija 12 | Lekcija 12 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.13.title` | Lekcija 13 | Lekcija 13 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.14.title` | Lekcija 14 | Lekcija 14 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.15.title` | Lekcija 15 | Lekcija 15 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.16.menuDesc` | Dativs, geben, sich nähern. | Dativs, geben, sich nähern. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| bs | `kurss.lessonItems.16.title` | Lekcija 16 | Lekcija 16 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.17.title` | Lekcija 17 | Lekcija 17 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.18.title` | Lekcija 18 | Lekcija 18 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| bs | `kurss.lessonItems.19.title` | Lekcija 19 | Lekcija 19 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.2.title` | Lekcija 2 | Lekcija 2 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.20.title` | Lekcija 20 | Lekcija 20 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| bs | `kurss.lessonItems.21.title` | Lekcija 21 | Lekcija 21 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.3.title` | Lekcija 3 | Lekcija 3 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.4.title` | Lekcija 4 | Lekcija 4 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.5.title` | Lekcija 5 | Lekcija 5 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.6.title` | Lekcija 6 | Lekcija 6 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.7.title` | Lekcija 7 | Lekcija 7 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.8.title` | Lekcija 8 | Lekcija 8 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.lessonItems.9.title` | Lekcija 9 | Lekcija 9 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `kurss.sections.grammar` | Gramatika | Gramatika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| bs | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| bs | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| bs | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## sr

- **Atslēgas:** 305/305
- **target === source rindas:** 22
- **Šo rindu LV avota vārdu skaits:** 49
- **INTENTIONAL_SAME:** 1
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 21
- **Placeholder kļūdas:** 5
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 5

- `direction.deToNative` — sagaidīts {"code":1}, faktiski {"koda":1}
- `direction.nativeToDe` — sagaidīts {"code":1}, faktiski {"koda":1}
- `kurss.exerciseProgress` — sagaidīts {"lesson":1}, faktiski {"lekcija":1}
- `kurss.lessonProgress` — sagaidīts {"lesson":1,"current":1,"total":1}, faktiski {"lekcija":1,"trenutno":1}
- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"label":1,"trenutno":1,"skupaj":1,"tap":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| sr | `kurss.lessonItems.1.title` | Lekcija 1 | Lekcija 1 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.10.title` | Lekcija 10 | Lekcija 10 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.11.title` | Lekcija 11 | Lekcija 11 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.12.title` | Lekcija 12 | Lekcija 12 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.13.title` | Lekcija 13 | Lekcija 13 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.14.title` | Lekcija 14 | Lekcija 14 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.15.title` | Lekcija 15 | Lekcija 15 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.16.title` | Lekcija 16 | Lekcija 16 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.17.title` | Lekcija 17 | Lekcija 17 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.18.title` | Lekcija 18 | Lekcija 18 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| sr | `kurss.lessonItems.19.title` | Lekcija 19 | Lekcija 19 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.2.title` | Lekcija 2 | Lekcija 2 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.20.title` | Lekcija 20 | Lekcija 20 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.21.title` | Lekcija 21 | Lekcija 21 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.3.title` | Lekcija 3 | Lekcija 3 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.4.title` | Lekcija 4 | Lekcija 4 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.5.title` | Lekcija 5 | Lekcija 5 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.6.title` | Lekcija 6 | Lekcija 6 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.7.title` | Lekcija 7 | Lekcija 7 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.8.title` | Lekcija 8 | Lekcija 8 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sr | `kurss.lessonItems.9.title` | Lekcija 9 | Lekcija 9 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |

---

## hr

- **Atslēgas:** 305/305
- **target === source rindas:** 22
- **Šo rindu LV avota vārdu skaits:** 49
- **INTENTIONAL_SAME:** 1
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 21
- **Placeholder kļūdas:** 5
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 5

- `direction.deToNative` — sagaidīts {"code":1}, faktiski {"koda":1}
- `direction.nativeToDe` — sagaidīts {"code":1}, faktiski {"koda":1}
- `kurss.exerciseProgress` — sagaidīts {"lesson":1}, faktiski {"lekcija":1}
- `kurss.lessonProgress` — sagaidīts {"lesson":1,"current":1,"total":1}, faktiski {"lekcija":1,"trenutno":1}
- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"label":1,"trenutno":1,"skupaj":1,"tap":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| hr | `kurss.lessonItems.1.title` | Lekcija 1 | Lekcija 1 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.10.title` | Lekcija 10 | Lekcija 10 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.11.title` | Lekcija 11 | Lekcija 11 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.12.title` | Lekcija 12 | Lekcija 12 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.13.title` | Lekcija 13 | Lekcija 13 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.14.title` | Lekcija 14 | Lekcija 14 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.15.title` | Lekcija 15 | Lekcija 15 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.16.title` | Lekcija 16 | Lekcija 16 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.17.title` | Lekcija 17 | Lekcija 17 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.18.title` | Lekcija 18 | Lekcija 18 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| hr | `kurss.lessonItems.19.title` | Lekcija 19 | Lekcija 19 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.2.title` | Lekcija 2 | Lekcija 2 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.20.title` | Lekcija 20 | Lekcija 20 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.21.title` | Lekcija 21 | Lekcija 21 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.3.title` | Lekcija 3 | Lekcija 3 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.4.title` | Lekcija 4 | Lekcija 4 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.5.title` | Lekcija 5 | Lekcija 5 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.6.title` | Lekcija 6 | Lekcija 6 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.7.title` | Lekcija 7 | Lekcija 7 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.8.title` | Lekcija 8 | Lekcija 8 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| hr | `kurss.lessonItems.9.title` | Lekcija 9 | Lekcija 9 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |

---

## sk

- **Atslēgas:** 305/305
- **target === source rindas:** 8
- **Šo rindu LV avota vārdu skaits:** 31
- **INTENTIONAL_SAME:** 7
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 1
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| sk | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| sk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| sk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| sk | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| sk | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| sk | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| sk | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## cs

- **Atslēgas:** 305/305
- **target === source rindas:** 8
- **Šo rindu LV avota vārdu skaits:** 20
- **INTENTIONAL_SAME:** 6
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 2
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| cs | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| cs | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| cs | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| cs | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| cs | `kurss.sections.grammar` | Gramatika | Gramatika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| cs | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| cs | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| cs | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## fi

- **Atslēgas:** 305/305
- **target === source rindas:** 9
- **Šo rindu LV avota vārdu skaits:** 32
- **INTENTIONAL_SAME:** 7
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 2
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| fi | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| fi | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| fi | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| fi | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| fi | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| fi | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| fi | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| fi | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| fi | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## sv

- **Atslēgas:** 305/305
- **target === source rindas:** 9
- **Šo rindu LV avota vārdu skaits:** 32
- **INTENTIONAL_SAME:** 7
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 2
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| sv | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| sv | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| sv | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sv | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| sv | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| sv | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| sv | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| sv | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| sv | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## nb

- **Atslēgas:** 305/305
- **target === source rindas:** 9
- **Šo rindu LV avota vārdu skaits:** 32
- **INTENTIONAL_SAME:** 7
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 2
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| nb | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| nb | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| nb | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| nb | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| nb | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| nb | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| nb | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| nb | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| nb | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## nn

- **Atslēgas:** 305/305
- **target === source rindas:** 9
- **Šo rindu LV avota vārdu skaits:** 32
- **INTENTIONAL_SAME:** 7
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 2
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| nn | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| nn | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| nn | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| nn | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| nn | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| nn | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| nn | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| nn | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| nn | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## da

- **Atslēgas:** 305/305
- **target === source rindas:** 6
- **Šo rindu LV avota vārdu skaits:** 23
- **INTENTIONAL_SAME:** 6
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| da | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| da | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| da | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| da | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| da | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| da | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## nl

- **Atslēgas:** 305/305
- **target === source rindas:** 9
- **Šo rindu LV avota vārdu skaits:** 32
- **INTENTIONAL_SAME:** 7
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 2
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| nl | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| nl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| nl | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| nl | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| nl | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| nl | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| nl | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| nl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| nl | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## lb

- **Atslēgas:** 305/305
- **target === source rindas:** 291
- **Šo rindu LV avota vārdu skaits:** 1055
- **INTENTIONAL_SAME:** 9
- **REAL_UNTRANSLATED:** 202
- **NEEDS_OWNER_REVIEW:** 80
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| lb | `buttons.autoplayAriaOff` | {label} (automātiski izslēgts) | {label} (automātiski izslēgts) | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.autoplayAriaOn` | {label} (automātiski ieslēgts) | {label} (automātiski ieslēgts) | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.autoplayLabel` | Automātiska izruna | Automātiska izruna | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.autoplayOff` | Automātiska izruna izslēgta | Automātiska izruna izslēgta | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.autoplayOn` | Automātiska izruna ieslēgta | Automātiska izruna ieslēgta | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.cancel` | Atcelt | Atcelt | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.check` | Pārbaudīt | Pārbaudīt | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.chooseAnotherGroup` | Izvēlēties citu grupu | Izvēlēties citu grupu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.close` | Aizvērt | Aizvērt | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.continue` | Turpināt | Turpināt | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.delete` | Dzēst | Dzēst | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.disableAutoplay` | Izslēgt automātisko izrunu | Izslēgt automātisko izrunu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.enableAutoplay` | Ieslēgt automātisko izrunu | Ieslēgt automātisko izrunu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.extraOptions` | Papildu opcijas | Papildu opcijas | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `buttons.extraOptionsClose` | Papildu opcijas ▲ | Papildu opcijas ▲ | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `buttons.extraOptionsOpen` | Papildu opcijas ▼ | Papildu opcijas ▼ | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `buttons.known` | Zinu pareizi | Zinu pareizi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.knownWithCount` | Zināmi ({count}) | Zināmi ({count}) | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.knownWords` | Zināmi | Zināmi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.listen` | Klausīties | Klausīties | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.listenPlural` | Klausīties daudzskaitli | Klausīties daudzskaitli | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.listenWithWord` | Klausīties: {word} | Klausīties: {word} | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.markMastered` | 100% zinu | 100% zinu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.markSessionLearned` | 🏅 Atzīmēt sesiju kā iemācītu | 🏅 Atzīmēt sesiju kā iemācītu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.markUnwanted` | Atzīmēt kā nevajadzīgu | Atzīmēt kā nevajadzīgu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.masteredWords` | 100% zināmi | 100% zināmi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.monthlyReview` | Mēneša pārskats | Mēneša pārskats | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.restartSession` | 🔄 Pārskatīt sesiju no jauna | 🔄 Pārskatīt sesiju no jauna | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.restore` | Atgriezt | Atgriezt | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `buttons.restoreAll` | Atgriezt visu | Atgriezt visu | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `buttons.shuffleVerbs` | Jaukt darbības vārdus | Jaukt darbības vārdus | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.unknown` | Nezinu | Nezinu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.unwantedWords` | Nevajadzīgie vārdi | Nevajadzīgie vārdi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `buttons.weeklyReview` | Nedēļas pārskats | Nedēļas pārskats | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `card.answerPrefix` | Atbilde: | Atbilde: | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `card.cardNotFound` | Kartīte netika atrasta | Kartīte netika atrasta | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `card.lastSessionLabel` | Pēdējā sesija | Pēdējā sesija | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `card.levelCompleteDesc` | Tu esi apguvis visus šīs grupas vārdus. Laiks spert nākamo soli! | Tu esi apguvis visus šīs grupas vārdus. Laiks spert nākamo soli! | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `card.levelCompleteTitle` | Izcili! {label} līmenis ir pabeigts! 🎉 | Izcili! {label} līmenis ir pabeigts! 🎉 | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `card.noActiveWords` | Šajā grupā nav aktīvu vārdu. | Šajā grupā nav aktīvu vārdu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `card.noCardsInSession` | Šajā sesijā nav kartīšu. | Šajā sesijā nav kartīšu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `card.pluralLabel` | Daudzsk. | Daudzsk. | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `card.problemLabel` | Problemātiskie | Problemātiskie | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `card.sessionComplete` | Sesija pabeigta! | Sesija pabeigta! | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `card.sessionLabel` | Sesija | Sesija | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `card.spelling` | Pareizrakstība | Pareizrakstība | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `card.spellingVerbs` | Pareizrakstība · Darbības vārdi | Pareizrakstība · Darbības vārdi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `card.verbsShuffleTraining` | Darbības vārdi · Jaukts treniņš | Darbības vārdi · Jaukts treniņš | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| lb | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| lb | `extra.settings` | Iestatījumi | Iestatījumi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `extra.wordManagement` | Vārdu pārvaldība | Vārdu pārvaldība | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `groups.sentences` | Teikumi | Teikumi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `hints.chooseModeOrReturn` | Izvēlies citu režīmu vai atgriezies vēlāk pārskatīšanai. | Izvēlies citu režīmu vai atgriezies vēlāk pārskatīšanai. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `hints.chooseNextStep` | Izvēlies, ko darīt tālāk. | Izvēlies, ko darīt tālāk. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `hints.tapToReveal` | Klikšķini uz kartītes, lai redzētu tulkojumu. | Klikšķini uz kartītes, lai redzētu tulkojumu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `hints.trainingCard` | {title} vingrinājuma kartīte | {title} vingrinājuma kartīte | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.answersBody` | <strong>Zinu pareizi</strong> — zini atbildi. <strong>Nezinu</strong> — palīdz atcerēties un pievieno problemātiskajiem. <strong>Nākamais vārds</strong> — izlaiž bez vērtējuma. | <strong>Zinu pareizi</strong> — zini atbildi. <strong>Nezinu</strong> — palīdz atcerēties un pievieno problemātiskajiem. <strong>Nākamais vārds</strong> — izlaiž bez vērtējuma. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.answersTitle` | Atbildes | Atbildes | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `info.directionBody` | Nospied, lai pārslēgtu starp <strong>DE→{code}</strong> un <strong>{code}→DE</strong>. | Nospied, lai pārslēgtu starp <strong>DE→{code}</strong> un <strong>{code}→DE</strong>. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.directionTitle` | Tulkojuma virziens | Tulkojuma virziens | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `info.extraBody` | Atver <strong>Papildu opcijas</strong>, lai skatītu nedēļas un mēneša pārskatu, Zināmos vārdus un atgrieztu paslēptos. | Atver <strong>Papildu opcijas</strong>, lai skatītu nedēļas un mēneša pārskatu, Zināmos vārdus un atgrieztu paslēptos. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.extraTitle` | Papildu opcijas | Papildu opcijas | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `info.intensityBody` | Izvēlies, cik vārdu mācīties vienā sesijā: <strong>Viegls · 10</strong>, <strong>Normāls · 20</strong> vai <strong>Intensīvs · 30</strong>. | Izvēlies, cik vārdu mācīties vienā sesijā: <strong>Viegls · 10</strong>, <strong>Normāls · 20</strong> vai <strong>Intensīvs · 30</strong>. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.intensityTitle` | Sesijas intensitāte | Sesijas intensitāte | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.listeningBody` | Nospied skaļruņa ikonu kartītē, lai noklausītos izrunu. | Nospied skaļruņa ikonu kartītē, lai noklausītos izrunu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.listeningTitle` | Klausīšanās | Klausīšanās | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.problemBody` | Nospied <strong>Probl.</strong>, lai mācītos vārdus, ar kuriem esi kļūdījies. Parastajā plūsmā «Nezinu» pievieno vārdu šeit; šeit «Zinu pareizi» samazina kļūdu pakāpi. | Nospied <strong>Probl.</strong>, lai mācītos vārdus, ar kuriem esi kļūdījies. Parastajā plūsmā «Nezinu» pievieno vārdu šeit; šeit «Zinu pareizi» samazina kļūdu pakāpi. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.problemTitle` | Problemātiskie vārdi | Problemātiskie vārdi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.spellingBody` | Nospied <strong>Rakst.</strong>, lai pirms atbildes jāieraksta vārds ar roku. | Nospied <strong>Rakst.</strong>, lai pirms atbildes jāieraksta vārds ar roku. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.spellingTitle` | Pareizrakstība | Pareizrakstība | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.title` | Kā tas strādā? | Kā tas strādā? | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.unwantedBody` | Nospied pārsvītroto aci kartītes stūrī — vārds pazudīs no plūsmas. Atgriezt vari sadaļā Papildu opcijas. | Nospied pārsvītroto aci kartītes stūrī — vārds pazudīs no plūsmas. Atgriezt vari sadaļā Papildu opcijas. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `info.unwantedTitle` | Nevajadzīgie vārdi | Nevajadzīgie vārdi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.articles` | Artikuli | Artikuli | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.articlesDesc` | Der, die, das un lietojuma pamati. | Der, die, das un lietojuma pamati. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.articlesSubtitle` | Der, die, das un lietojuma pamati. | Der, die, das un lietojuma pamati. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.back` | ‹ Kurss | ‹ Kurss | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.backToMain` | Atgriezties uz galveno ekrānu | Atgriezties uz galveno ekrānu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.closeCourse` | Aizvērt kursu | Aizvērt kursu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.consonantsDesc` | Svarīgākās līdzskaņu skaņas iesācējam. | Svarīgākās līdzskaņu skaņas iesācējam. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.consonantsSubtitle` | Līdzskaņi un burtu savienojumi | Līdzskaņi un burtu savienojumi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.consonantsTitle` | Līdzskaņi un burtu savienojumi | Līdzskaņi un burtu savienojumi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.cta.tapContinue` | Pieskaries turpināt | Pieskaries turpināt | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.cta.tapNextCard` | Pieskaries nākamajai kartītei | Pieskaries nākamajai kartītei | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.cta.tapToRevealAnswer` | Pieskaries, lai redzētu atbildi | Pieskaries, lai redzētu atbildi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.cta.transformFirstPlural` | Pārveido teikumu 1. personā daudzskaitlī. | Pārveido teikumu 1. personā daudzskaitlī. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.cta.transformSentence` | Pārveido teikumu. | Pārveido teikumu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.cta.transformThirdSingular` | Pārveido teikumu 3. personā vienskaitlī. | Pārveido teikumu 3. personā vienskaitlī. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.exerciseMeta.answerPlural` | Tagad atbildi daudzskaitlī. | Tagad atbildi daudzskaitlī. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.exerciseMeta.chooseCasePlural` | Liec pareizo locījumu un darini daudzskaitli! | Liec pareizo locījumu un darini daudzskaitli! | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.exerciseMeta.fillCase` | Übung I — lieto pareizo locījumu | Übung I — lieto pareizo locījumu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.exerciseMeta.formDu` | Forma 1/3: Tu (vienskaitlis) | Forma 1/3: Tu (vienskaitlis) | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.exerciseMeta.formIhr` | Forma 2/3: Jūs (daudzskaitlis) | Forma 2/3: Jūs (daudzskaitlis) | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.exerciseMeta.formSie` | Forma 3/3: Sie (pieklājīgā forma) | Forma 3/3: Sie (pieklājīgā forma) | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.exerciseMeta.translate` | Übung II — tulko | Übung II — tulko | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.exerciseProgress` | Lekcija {lesson} · Vingrinājums | Lekcija {lesson} · Vingrinājums | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.hints.exerciseCardAria` | {title} vingrinājuma kartīte | {title} vingrinājuma kartīte | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.hints.tapNextStep` | Pieskaries kartītei, lai pārietu uz nākamo soli. | Pieskaries kartītei, lai pārietu uz nākamo soli. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.hints.tapToContinue` | Pieskaries kartītei, lai turpinātu. | Pieskaries kartītei, lai turpinātu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.hints.tapToRevealAnswer` | Pieskaries kartītei, lai redzētu atbildi. | Pieskaries kartītei, lai redzētu atbildi. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.hints.tapToRevealGerman` | Pieskaries kartītei, lai redzētu vācu tulkojumu. | Pieskaries kartītei, lai redzētu vācu tulkojumu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.lessonItems.1.menuDesc` | Darbības vārdi tagadnē, vārdiņi, gramatika un treniņš. | Darbības vārdi tagadnē, vārdiņi, gramatika un treniņš. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.1.title` | Lekcija 1 | Lekcija 1 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.10.menuDesc` | Sein, können, veselība, vecums un profesijas. | Sein, können, veselība, vecums un profesijas. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.10.title` | Lekcija 10 | Lekcija 10 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.11.menuDesc` | Haben, kein/keine/keinen, piederība un saliktie lietvārdi. | Haben, kein/keine/keinen, piederība un saliktie lietvārdi. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.11.title` | Lekcija 11 | Lekcija 11 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.12.menuDesc` | Salīdzināmās pakāpes, als/wie, vecums un krāsas. | Salīdzināmās pakāpes, als/wie, vecums un krāsas. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.12.title` | Lekcija 12 | Lekcija 12 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.13.menuDesc` | Der Körper, ķermeņa daļas, turnen un jeder. | Der Körper, ķermeņa daļas, turnen un jeder. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.13.title` | Lekcija 13 | Lekcija 13 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.14.menuDesc` | müssen, wollen, mögen un modālie darbības vārdi. | müssen, wollen, mögen un modālie darbības vārdi. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.14.title` | Lekcija 14 | Lekcija 14 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.15.menuDesc` | sollen, dürfen, essen un augļi. | sollen, dürfen, essen un augļi. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.15.title` | Lekcija 15 | Lekcija 15 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.16.menuDesc` | Dativs, geben, sich nähern. | Dativs, geben, sich nähern. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.16.title` | Lekcija 16 | Lekcija 16 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.17.menuDesc` | mit + Dativ, womit / mit wem un Umlaut. | mit + Dativ, womit / mit wem un Umlaut. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| lb | `kurss.lessonItems.17.title` | Lekcija 17 | Lekcija 17 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.18.menuDesc` | wohin / wo, Akkusativ vai Dativ ar an / in / auf. | wohin / wo, Akkusativ vai Dativ ar an / in / auf. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| lb | `kurss.lessonItems.18.title` | Lekcija 18 | Lekcija 18 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| lb | `kurss.lessonItems.19.title` | Lekcija 19 | Lekcija 19 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.2.menuDesc` | Dialogi, vārdi, izruna, gramatika un pārtulkošana. | Dialogi, vārdi, izruna, gramatika un pārtulkošana. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.2.title` | Lekcija 2 | Lekcija 2 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.20.menuDesc` | Haus, Stockwerk, Dativ/Akkusativ un saliktie lietvārdi. | Haus, Stockwerk, Dativ/Akkusativ un saliktie lietvārdi. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.20.title` | Lekcija 20 | Lekcija 20 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| lb | `kurss.lessonItems.21.title` | Lekcija 21 | Lekcija 21 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.3.menuDesc` | Dialogi, vārdi, izruna, gramatika un pārtulkošana. | Dialogi, vārdi, izruna, gramatika un pārtulkošana. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.3.title` | Lekcija 3 | Lekcija 3 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.4.menuDesc` | Akuzatīvs, nehmen, hinlegen, hinausgehen un īpašības vārdi. | Akuzatīvs, nehmen, hinlegen, hinausgehen un īpašības vārdi. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.4.title` | Lekcija 4 | Lekcija 4 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.5.menuDesc` | Wen?, akuzatīvs, sitzen, fragen un -in galotne. | Wen?, akuzatīvs, sitzen, fragen un -in galotne. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.5.title` | Lekcija 5 | Lekcija 5 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.6.menuDesc` | Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. | Skaitļi, daudzskaitlis, umlauti un lietvārdu daudzskaitļa formas. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.6.title` | Lekcija 6 | Lekcija 6 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.7.menuDesc` | Pavēles izteiksme, uzrunas forma un daudzskaitlis. | Pavēles izteiksme, uzrunas forma un daudzskaitlis. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.7.title` | Lekcija 7 | Lekcija 7 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.8.menuDesc` | Refleksīvie darbības vārdi, e → i/ie maiņa un akuzatīvs. | Refleksīvie darbības vārdi, e → i/ie maiņa un akuzatīvs. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.8.title` | Lekcija 8 | Lekcija 8 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonItems.9.menuDesc` | Vairāki priekšmeti, dieser/jener, vienskaitlis un daudzskaitlis. | Vairāki priekšmeti, dieser/jener, vienskaitlis un daudzskaitlis. | NEEDS_OWNER_REVIEW | Jaukts LV + DE mācību apraksts — nepieciešams OWNER vērtējums |
| lb | `kurss.lessonItems.9.title` | Lekcija 9 | Lekcija 9 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.lessonProgress` | Lekcija {lesson} · Pārtulko: {current} / {total} | Lekcija {lesson} · Pārtulko: {current} / {total} | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.lessons` | Lekcijas | Lekcijas | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.lessonsDesc` | Mācību lekcijas secīgā kārtībā no 1 līdz 21. | Mācību lekcijas secīgā kārtībā no 1 līdz 21. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.lessonsSubtitle` | Mācību lekcijas secīgā kārtībā no 1 līdz 21. | Mācību lekcijas secīgā kārtībā no 1 līdz 21. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.panelLabel` | Kurss | Kurss | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.pronouns` | Vietniekvārdi | Vietniekvārdi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.pronounsDesc` | Nominativ, Akkusativ un Dativ formas. | Nominativ, Akkusativ un Dativ formas. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.pronounsSubtitle` | Nominativ, Akkusativ un Dativ — vietniekvārdu formas. | Nominativ, Akkusativ un Dativ — vietniekvārdu formas. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.pronunciation` | Izruna | Izruna | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.pronunciationDesc` | Vācu valodas skaņas un izrunas pamati. | Vācu valodas skaņas un izrunas pamati. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.pronunciationSubtitle` | Vācu valodas skaņas un izrunas pamati | Vācu valodas skaņas un izrunas pamati | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.sections.exercise` | Vingrinājums | Vingrinājums | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.sections.exerciseCombined` | Übung / Vingrinājums | Übung / Vingrinājums | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.sections.grammar` | Gramatika | Gramatika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.sections.translate` | Pārtulko | Pārtulko | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.sentenceStructure` | Teikumu uzbūve | Teikumu uzbūve | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.sentenceStructureDesc` | Vienkārša vārdu secība vācu teikumos. | Vienkārša vārdu secība vācu teikumos. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.subtitle` | Vācu valodas pamati soli pa solim | Vācu valodas pamati soli pa solim | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.tipBody` | Klausies, atkārto un salīdzini. Tava auss ir labākais skolotājs! | Klausies, atkārto un salīdzini. Tava auss ir labākais skolotājs! | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.tipTitle` | Padoms | Padoms | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.title` | Kurss | Kurss | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.verbBasics` | Darbības vārdu pamati | Darbības vārdu pamati | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.verbBasicsDesc` | Personas, formas un biežākie darbības vārdi. | Personas, formas un biežākie darbības vārdi. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.vowelsDesc` | Garie un īsie patskaņi ar piemēriem. | Garie un īsie patskaņi ar piemēriem. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.vowelsSubtitle` | Patskaņi — garš un īss | Patskaņi — garš un īss | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `kurss.vowelsTitle` | Patskaņi — garš un īss | Patskaņi — garš un īss | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `lists.noLearned` | Nav iemācīto vārdu. | Nav iemācīto vārdu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `lists.noMastered` | Nav 100% zināmo vārdu. | Nav 100% zināmo vārdu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `lists.noUnwanted` | Nav nevajadzīgo vārdu. | Nav nevajadzīgo vārdu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `menu.chooseGroup` | Izvēlies grupu | Izvēlies grupu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `menu.course` | Kurss | Kurss | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `menu.mainNav` | Galvenā izvēlne | Galvenā izvēlne | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `menu.sentences` | Teikumi | Teikumi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `menu.verbs` | Darbības vārdi | Darbības vārdi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `modes.easy` | Viegls | Viegls | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `modes.intense` | Intensīvs | Intensīvs | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `modes.normal` | Normāls | Normāls | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `nav.backHome` | Atgriezties galvenajā izvēlnē | Atgriezties galvenajā izvēlnē | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `nav.changeLanguage` | Mainīt dzimto valodu | Mainīt dzimto valodu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `nav.howItWorks` | Kā tas strādā? | Kā tas strādā? | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `nav.quickTools` | Ātrie rīki | Ātrie rīki | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.addedMastered` | Vārds pievienots 100% zināmajiem. | Vārds pievienots 100% zināmajiem. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.alreadyMastered` | Vārds jau ir 100% zināmo sarakstā. | Vārds jau ir 100% zināmo sarakstā. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.answerRevealed` | Atbilde atklāta. Vārds paliek sesijā. | Atbilde atklāta. Vārds paliek sesijā. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.chooseNextGroup` | Izvēlies nākamo grupu galvenajā izvēlnē. | Izvēlies nākamo grupu galvenajā izvēlnē. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.continueKnownReview` | Turpinām zināmo vārdu pārskatīšanu. | Turpinām zināmo vārdu pārskatīšanu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.continueLastSession` | Turpinām pēdējās sesijas pārskatīšanu. | Turpinām pēdējās sesijas pārskatīšanu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.continueTimeReview` | Turpinām: {label}. | Turpinām: {label}. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.enterAnswerFirst` | Vispirms ievadi pareizu atbildi un nospied Pārbaudīt. | Vispirms ievadi pareizu atbildi un nospied Pārbaudīt. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.errorLevelReduced` | Kļūdu pakāpe samazināta. | Kļūdu pakāpe samazināta. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.knownReviewDone` | Zināmo vārdu pārskatīšana pabeigta. | Zināmo vārdu pārskatīšana pabeigta. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.lastSessionDone` | Pēdējās sesijas pārskatīšana pabeigta. | Pēdējās sesijas pārskatīšana pabeigta. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.leftForReview` | Atstāts pārskatīšanai. | Atstāts pārskatīšanai. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.leftInProblems` | Atstāts problemātiskajā grupā. | Atstāts problemātiskajā grupā. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.loadFailed` | Neizdevās ielādēt kartītes. Pārlādē lapu vai pārbaudi, vai visi datu faili ir pieejami. | Neizdevās ielādēt kartītes. Pārlādē lapu vai pārbaudi, vai visi datu faili ir pieejami. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.markedKnown` | Atzīmēts kā zināms. | Atzīmēts kā zināms. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.markedUnwanted` | Vārds atzīmēts kā nevajadzīgs. | Vārds atzīmēts kā nevajadzīgs. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.movedToKnown` | Vārds pārvietots uz Zināmi! | Vārds pārvietots uz Zināmi! | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.noCard` | Nav kartītes, ko atzīmēt. | Nav kartītes, ko atzīmēt. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.noCardForMastered` | Nav kartītes, ko pievienot 100% zināmajiem. | Nav kartītes, ko pievienot 100% zināmajiem. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.noCardForUnwanted` | Nav kartītes, ko atzīmēt kā nevajadzīgu. | Nav kartītes, ko atzīmēt kā nevajadzīgu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.noCardToMark` | Nav kartīšu, ko atzīmēt. | Nav kartīšu, ko atzīmēt. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.noCompletedSession` | Nav pabeigtas sesijas, ko pārskatīt. | Nav pabeigtas sesijas, ko pārskatīt. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.noProblems` | Nav problemātisko vārdu. | Nav problemātisko vārdu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.noVerbToMark` | Nav darbības vārdu, ko atzīmēt. | Nav darbības vārdu, ko atzīmēt. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.problemModeOff` | Problemātisko vārdu režīms izslēgts. | Problemātisko vārdu režīms izslēgts. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.problemsFinishedMoved` | Problemātiskie vārdi izmācīti. Vārds pārvietots uz Zināmi! | Problemātiskie vārdi izmācīti. Vārds pārvietots uz Zināmi! | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.returnedToStudy` | Atgriezts mācīšanās režīmā. | Atgriezts mācīšanās režīmā. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.sessionArchived` | Pēdējā sesija atzīmēta kā iemācīta. | Pēdējā sesija atzīmēta kā iemācīta. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.sessionArchivedNext` | Pēdējā sesija atzīmēta kā iemācīta. Ielādēta nākamā sesija. | Pēdējā sesija atzīmēta kā iemācīta. Ielādēta nākamā sesija. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.sessionMovedToKnown` | Sesijas vārdi pārvietoti uz zināmajiem. | Sesijas vārdi pārvietoti uz zināmajiem. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.sessionReloaded` | Sesija ielādēta no jauna ar jauktu secību. | Sesija ielādēta no jauna ar jauktu secību. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.showingKnown` | Rādām zināmās kartītes. | Rādām zināmās kartītes. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.showingLastSession` | Rādām pēdējo pabeigto sesiju. | Rādām pēdējo pabeigto sesiju. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.showingProblems` | Rādām problemātiskos vārdus. | Rādām problemātiskos vārdus. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.showingTimeReview` | Rādām: {label}. | Rādām: {label}. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.spellingOff` | Pareizrakstības režīms izslēgts. | Pareizrakstības režīms izslēgts. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.spellingOn` | Pareizrakstības režīms ieslēgts. | Pareizrakstības režīms ieslēgts. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.verbMarkedKnown` | Darbības vārds atzīmēts kā zināms. | Darbības vārds atzīmēts kā zināms. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.verbShuffleOff` | Darbības vārdu jaukšana izslēgta. | Darbības vārdu jaukšana izslēgta. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `notices.verbShuffleOn` | Darbības vārdu jaukšana ieslēgta. | Darbības vārdu jaukšana ieslēgta. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `plural.wordOne` | vārds | vārds | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `plural.wordsFew` | vārdi | vārdi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `plural.wordsMany` | vārdi | vārdi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `progress.courseHeading` | Kurss | Kurss | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `progress.verbsHeading` | Darbības vārdi | Darbības vārdi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `restore.ariaLabel` | Apstiprināt visu progressa dzēšanu | Apstiprināt visu progressa dzēšanu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `restore.warning` | Uzmanību! Viss iemācītais progress un vārdu vēsture tiks pilnībā nodzēsta pa nullēm. | Uzmanību! Viss iemācītais progress un vārdu vēsture tiks pilnībā nodzēsta pa nullēm. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `review.knownReviewDone` | Zināmo vārdu pārskatīšana pabeigta. | Zināmo vārdu pārskatīšana pabeigta. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `review.monthCount` | Šomēnes iemācīti: {count} {words} | Šomēnes iemācīti: {count} {words} | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `review.monthDone` | Mēneša pārskats pabeigts. | Mēneša pārskats pabeigts. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `review.monthEmpty` | Nav iemācītu vārdu mēneša pārskatam. | Nav iemācītu vārdu mēneša pārskatam. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `review.monthLabel` | Mēneša pārskats | Mēneša pārskats | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `review.weekCount` | Šonedēļ iemācīti: {count} {words} | Šonedēļ iemācīti: {count} {words} | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `review.weekDone` | Nedēļas pārskats pabeigts. | Nedēļas pārskats pabeigts. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `review.weekEmpty` | Nav iemācītu vārdu nedēļas pārskatam. | Nav iemācītu vārdu nedēļas pārskatam. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `review.weekLabel` | Nedēļas pārskats | Nedēļas pārskats | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `settings.appLanguage` | Lietotnes valoda | Lietotnes valoda | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `spelling.missingChar` | trūkst: {char} | trūkst: {char} | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `spelling.noVerbTask` | Šim darbības vārdam nav pareizrakstības uzdevuma. | Šim darbības vārdam nav pareizrakstības uzdevuma. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `spelling.writeAnswer` | Ieraksti atbildi | Ieraksti atbildi | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.hints.tapToOpenExplanation` | Klikšķini uz kartītes, lai atvērtu skaidrojumu. | Klikšķini uz kartītes, lai atvērtu skaidrojumu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.hints.tapToRevealGerman` | Klikšķini uz kartītes, lai redzētu vācu vārdu. | Klikšķini uz kartītes, lai redzētu vācu vārdu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.minimal.formsLabel` | Formas: | Formas: | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `study.minimal.noteLabel` | Norāde: | Norāde: | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.minimal.pluralLabel` | DAUDZSK. | DAUDZSK. | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.minimal.tipLabel` | Padoms: | Padoms: | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.sections.comparison` | Salīdzinājums | Salīdzinājums | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.sections.comparisonBadge` | SALĪDZINĀJUMA KARTĪTE | SALĪDZINĀJUMA KARTĪTE | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.sections.comparisonFocus` | Svarīgs salīdzinājums | Svarīgs salīdzinājums | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.sections.examples` | Piemēri | Piemēri | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.sections.explanation` | Skaidrojums | Skaidrojums | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.sections.important` | Svarīgi | Svarīgi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.sections.mainIdea` | Galvenā doma | Galvenā doma | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.sections.mistakes` | Tipiskās kļūdas | Tipiskās kļūdas | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.sections.remember` | Atceries | Atceries | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.sections.tip` | Padoms | Padoms | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.table.describes` | Raksturo | Raksturo | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.table.example` | Piemērs | Piemērs | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| lb | `study.table.mainMeaning` | Galvenā nozīme | Galvenā nozīme | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.table.meaning` | Nozīme | Nozīme | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `study.table.translation` | Tulkojums | Tulkojums | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.table.word` | Vārds | Vārds | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `tools.problemFull` | Problemātiskie vārdi | Problemātiskie vārdi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `tools.problemWithCount` | Problemātiskie vārdi ({count}) | Problemātiskie vārdi ({count}) | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `tools.spellingFull` | Pareizrakstība | Pareizrakstība | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `tools.spellingShort` | Rakst. | Rakst. | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `verb.guessImperfect` | Uzmini imperfektu | Uzmini imperfektu | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `verb.guessInfinitive` | Uzmini infinitīvu | Uzmini infinitīvu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `verb.guessPastParticiple` | Uzmini pagātnes divdabi | Uzmini pagātnes divdabi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| lb | `verb.hintTapAnswer` | Klikšķini uz kartītes, lai redzētu atbildi. | Klikšķini uz kartītes, lai redzētu atbildi. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `verb.hintTapSwitch` | Klikšķini uz kartītes, lai pārslēgtu formu. | Klikšķini uz kartītes, lai pārslēgtu formu. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `verb.imperfectIndicative` | Imperfekts - Indikatīvs | Imperfekts - Indikatīvs | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `verb.imperfectSubjunctive` | Imperfekts - Konjunktīvs | Imperfekts - Konjunktīvs | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |
| lb | `verb.infinitive` | Infinitīvs | Infinitīvs | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `verb.noShuffleForms` | Šim darbības vārdam nav pietiekami daudz formu jaukšanai. | Šim darbības vārdam nav pietiekami daudz formu jaukšanai. | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `verb.pastParticiple` | Pagātnes divdabis | Pagātnes divdabis | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `verb.present` | Tagadne | Tagadne | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `verb.translationPrefix` | Tulkojums: | Tulkojums: | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `verb.writeImperfect` | Uzraksti imperfektu | Uzraksti imperfektu | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `verb.writeInfinitive` | Uzraksti infinitīvu | Uzraksti infinitīvu | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |
| lb | `verb.writePastParticiple` | Uzraksti pagātnes divdabi | Uzraksti pagātnes divdabi | REAL_UNTRANSLATED | LV avota teksts nav iztulkots mērķvalodā |

---

## fr

- **Atslēgas:** 305/305
- **target === source rindas:** 2
- **Šo rindu LV avota vārdu skaits:** 4
- **INTENTIONAL_SAME:** 2
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| fr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| fr | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |

---

## it

- **Atslēgas:** 305/305
- **target === source rindas:** 9
- **Šo rindu LV avota vārdu skaits:** 32
- **INTENTIONAL_SAME:** 7
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 2
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| it | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| it | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| it | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| it | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| it | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| it | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| it | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| it | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| it | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

## es

- **Atslēgas:** 305/305
- **target === source rindas:** 7
- **Šo rindu LV avota vārdu skaits:** 19
- **INTENTIONAL_SAME:** 5
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 2
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| es | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| es | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| es | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| es | `study.minimal.formsLabel` | Formas: | Formas: | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| es | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| es | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| es | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

## pt

- **Atslēgas:** 305/305
- **target === source rindas:** 1
- **Šo rindu LV avota vārdu skaits:** 12
- **INTENTIONAL_SAME:** 1
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 12
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 12

- `buttons.autoplayAriaOff` — sagaidīts {"label":1}, faktiski {"tag":1}
- `buttons.listenWithWord` — sagaidīts {"word":1}, faktiski {"palavra":1}
- `direction.deToNative` — sagaidīts {"code":1}, faktiski {}
- `direction.nativeToDe` — sagaidīts {"code":1}, faktiski {}
- `hints.trainingCard` — sagaidīts {"title":1}, faktiski {}
- `kurss.exerciseProgress` — sagaidīts {"lesson":1}, faktiski {}
- `kurss.lessonProgress` — sagaidīts {"lesson":1,"current":1,"total":1}, faktiski {"atual":1,"total":1}
- `notices.continueTimeReview` — sagaidīts {"label":1}, faktiski {"tag":1}
- `notices.showingTimeReview` — sagaidīts {"label":1}, faktiski {"tag":1}
- `review.monthCount` — sagaidīts {"count":1,"words":1}, faktiski {"contar":1,"palavras":1}
- `review.weekCount` — sagaidīts {"count":1,"words":1}, faktiski {"contar":1,"palavras":1}
- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"tag":1,"atual":1,"total":1,"tocar":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| pt | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |

---

## hu

- **Atslēgas:** 305/305
- **target === source rindas:** 2
- **Šo rindu LV avota vārdu skaits:** 8
- **INTENTIONAL_SAME:** 2
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 0
- **Placeholder kļūdas:** 5
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

**Placeholder kļūdas:** 5

- `direction.deToNative` — sagaidīts {"code":1}, faktiski {}
- `direction.nativeToDe` — sagaidīts {"code":1}, faktiski {}
- `kurss.exerciseProgress` — sagaidīts {"lesson":1}, faktiski {"lecke":1}
- `kurss.lessonProgress` — sagaidīts {"lesson":1,"current":1,"total":1}, faktiski {"lecke":1,"current":1,"total":1}
- `verb.hintSessionProgress` — sagaidīts {"label":1,"current":1,"total":1,"tap":1}, faktiski {"label":1,"current":1,"total":1}

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| hu | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| hu | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |

---

## is

- **Atslēgas:** 305/305
- **target === source rindas:** 9
- **Šo rindu LV avota vārdu skaits:** 32
- **INTENTIONAL_SAME:** 7
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 2
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| is | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| is | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| is | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| is | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| is | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| is | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| is | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| is | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| is | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

