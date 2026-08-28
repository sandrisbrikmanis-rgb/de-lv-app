# Crowdin UI — netulkoto / identisko rindu audits

**Datums:** 2026-08-28  
**Režīms:** READ-ONLY (ģenerēts no `crowdin/ui/*.json`)  
**GitHub atvēršana:** [crowdin-ui-untranslated-audit-GITHUB.md](./crowdin-ui-untranslated-audit-GITHUB.md)  
**LV avots:** `crowdin/ui/lv.json` — **305** atslēgas  
**Mērķis:** visas **31** mērķvaloda pret LV avotu  
**Greek kartējums:** Crowdin `el` → repo `gr`  
**Placeholder remonts:** [crowdin-ui-placeholder-repair-owner.md](./crowdin-ui-placeholder-repair-owner.md) (55/55)  
**Šis audits:** salīdzina pašreizējo stāvokli; placeholder kļūdas pēc remonta = **0**.

---

## Gala kopsavilkums

| Metrika | Vērtība |
|---|---|
| Pārbaudīto valodu skaits | **31** |
| Atslēgas uz valodu | **305** |
| Kopā pārbaudīto atslēgu salīdzinājumu | **9455** (31 × 305) |
| Valodu ar 305/305 atslēgām | **31/31** |
| Kopējais `target === LV source` rindu skaits | **359** |
| INTENTIONAL_SAME | **165** |
| REAL_UNTRANSLATED | **0** |
| NEEDS_OWNER_REVIEW | **194** |
| Placeholder kļūdas | **0** |
| HTML struktūras kļūdas | **0** |
| Trūkstošas atslēgas | **0** |
| Liekas atslēgas | **0** |
| Tukšas vērtības | **0** |

### Valodu kopsavilkuma tabula

| Valoda | Atslēgas | target===source | LV vārdu skaits | INTENTIONAL_SAME | REAL_UNTRANSLATED | NEEDS_OWNER_REVIEW | Placeholder | HTML | Trūkst | Liekas | Tukšas |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| lt | 305/305 | 10 | 33 | 6 | 0 | 4 | 0 | 0 | 0 | 0 | 0 |
| ru | 305/305 | 6 | 29 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| pl | 305/305 | 7 | 30 | 6 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| uk | 305/305 | 6 | 29 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| et | 305/305 | 8 | 31 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| en | 305/305 | 5 | 17 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ro | 305/305 | 7 | 30 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bg | 305/305 | 3 | 13 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| tr | 305/305 | 5 | 26 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| gr (Crowdin: `el`) | 305/305 | 5 | 17 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sq | 305/305 | 5 | 17 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mk | 305/305 | 3 | 13 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| sl | 305/305 | 24 | 55 | 3 | 0 | 21 | 0 | 0 | 0 | 0 | 0 |
| bs | 305/305 | 32 | 79 | 7 | 0 | 25 | 0 | 0 | 0 | 0 | 0 |
| sr | 305/305 | 24 | 55 | 3 | 0 | 21 | 0 | 0 | 0 | 0 | 0 |
| hr | 305/305 | 24 | 55 | 3 | 0 | 21 | 0 | 0 | 0 | 0 | 0 |
| sk | 305/305 | 7 | 30 | 6 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| cs | 305/305 | 8 | 20 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| fi | 305/305 | 8 | 31 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| sv | 305/305 | 9 | 32 | 7 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| nb | 305/305 | 9 | 32 | 7 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| nn | 305/305 | 9 | 32 | 7 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| da | 305/305 | 6 | 23 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nl | 305/305 | 8 | 31 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| lb | 305/305 | 87 | 242 | 7 | 0 | 80 | 0 | 0 | 0 | 0 | 0 |
| fr | 305/305 | 2 | 4 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| it | 305/305 | 8 | 31 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| es | 305/305 | 7 | 19 | 5 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |
| pt | 305/305 | 4 | 21 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hu | 305/305 | 5 | 17 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| is | 305/305 | 8 | 31 | 6 | 0 | 2 | 0 | 0 | 0 | 0 | 0 |

## Satura rādītājs (GitHub)

| Valoda | target===source | REAL_UNTRANSLATED | Sadaļa |
|---|---:|---:|---|
| lt | 10 | 0 | [lt](#lang-lt) |
| ru | 6 | 0 | [ru](#lang-ru) |
| pl | 7 | 0 | [pl](#lang-pl) |
| uk | 6 | 0 | [uk](#lang-uk) |
| et | 8 | 0 | [et](#lang-et) |
| en | 5 | 0 | [en](#lang-en) |
| ro | 7 | 0 | [ro](#lang-ro) |
| bg | 3 | 0 | [bg](#lang-bg) |
| tr | 5 | 0 | [tr](#lang-tr) |
| gr (Crowdin: `el`) | 5 | 0 | [gr](#lang-gr-crowdin-el) |
| sq | 5 | 0 | [sq](#lang-sq) |
| mk | 3 | 0 | [mk](#lang-mk) |
| sl | 24 | 0 | [sl](#lang-sl) |
| bs | 32 | 0 | [bs](#lang-bs) |
| sr | 24 | 0 | [sr](#lang-sr) |
| hr | 24 | 0 | [hr](#lang-hr) |
| sk | 7 | 0 | [sk](#lang-sk) |
| cs | 8 | 0 | [cs](#lang-cs) |
| fi | 8 | 0 | [fi](#lang-fi) |
| sv | 9 | 0 | [sv](#lang-sv) |
| nb | 9 | 0 | [nb](#lang-nb) |
| nn | 9 | 0 | [nn](#lang-nn) |
| da | 6 | 0 | [da](#lang-da) |
| nl | 8 | 0 | [nl](#lang-nl) |
| lb | 87 | 0 | [lb](#lang-lb) |
| fr | 2 | 0 | [fr](#lang-fr) |
| it | 8 | 0 | [it](#lang-it) |
| es | 7 | 0 | [es](#lang-es) |
| pt | 4 | 0 | [pt](#lang-pt) |
| hu | 5 | 0 | [hu](#lang-hu) |
| is | 8 | 0 | [is](#lang-is) |

---

<a id="lang-lt"></a>

## lt

- **Atslēgas:** 305/305
- **target === source rindas:** 10
- **Šo rindu LV avota vārdu skaits:** 33
- **INTENTIONAL_SAME:** 6
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
| lt | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| lt | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lt | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-ru"></a>

## ru

- **Atslēgas:** 305/305
- **target === source rindas:** 6
- **Šo rindu LV avota vārdu skaits:** 29
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
| ru | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| ru | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| ru | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| ru | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| ru | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| ru | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-pl"></a>

## pl

- **Atslēgas:** 305/305
- **target === source rindas:** 7
- **Šo rindu LV avota vārdu skaits:** 30
- **INTENTIONAL_SAME:** 6
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
| pl | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| pl | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| pl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-uk"></a>

## uk

- **Atslēgas:** 305/305
- **target === source rindas:** 6
- **Šo rindu LV avota vārdu skaits:** 29
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
| uk | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| uk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| uk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| uk | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| uk | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| uk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-et"></a>

## et

- **Atslēgas:** 305/305
- **target === source rindas:** 8
- **Šo rindu LV avota vārdu skaits:** 31
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
| et | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| et | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| et | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| et | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| et | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| et | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| et | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| et | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-en"></a>

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

<a id="lang-ro"></a>

## ro

- **Atslēgas:** 305/305
- **target === source rindas:** 7
- **Šo rindu LV avota vārdu skaits:** 30
- **INTENTIONAL_SAME:** 7
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
| ro | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| ro | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| ro | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| ro | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| ro | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| ro | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| ro | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |

---

<a id="lang-bg"></a>

## bg

- **Atslēgas:** 305/305
- **target === source rindas:** 3
- **Šo rindu LV avota vārdu skaits:** 13
- **INTENTIONAL_SAME:** 3
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
| bg | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| bg | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| bg | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-tr"></a>

## tr

- **Atslēgas:** 305/305
- **target === source rindas:** 5
- **Šo rindu LV avota vārdu skaits:** 26
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
| tr | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| tr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| tr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| tr | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| tr | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |

---

<a id="lang-gr-crowdin-el"></a>

## gr (Crowdin: `el`)

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
| gr | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| gr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| gr | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| gr | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| gr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-sq"></a>

## sq

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
| sq | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| sq | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| sq | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| sq | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| sq | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-mk"></a>

## mk

- **Atslēgas:** 305/305
- **target === source rindas:** 3
- **Šo rindu LV avota vārdu skaits:** 13
- **INTENTIONAL_SAME:** 3
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
| mk | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| mk | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| mk | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-sl"></a>

## sl

- **Atslēgas:** 305/305
- **target === source rindas:** 24
- **Šo rindu LV avota vārdu skaits:** 55
- **INTENTIONAL_SAME:** 3
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 21
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

<details>
<summary><strong>target === source tabula</strong> (24 rindas — noklikšķini, lai izvērstu)</summary>

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| sl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
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
| sl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

</details>

---

<a id="lang-bs"></a>

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

<details>
<summary><strong>target === source tabula</strong> (32 rindas — noklikšķini, lai izvērstu)</summary>

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

</details>

---

<a id="lang-sr"></a>

## sr

- **Atslēgas:** 305/305
- **target === source rindas:** 24
- **Šo rindu LV avota vārdu skaits:** 55
- **INTENTIONAL_SAME:** 3
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 21
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

<details>
<summary><strong>target === source tabula</strong> (24 rindas — noklikšķini, lai izvērstu)</summary>

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| sr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
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
| sr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

</details>

---

<a id="lang-hr"></a>

## hr

- **Atslēgas:** 305/305
- **target === source rindas:** 24
- **Šo rindu LV avota vārdu skaits:** 55
- **INTENTIONAL_SAME:** 3
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 21
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

<details>
<summary><strong>target === source tabula</strong> (24 rindas — noklikšķini, lai izvērstu)</summary>

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| hr | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
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
| hr | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

</details>

---

<a id="lang-sk"></a>

## sk

- **Atslēgas:** 305/305
- **target === source rindas:** 7
- **Šo rindu LV avota vārdu skaits:** 30
- **INTENTIONAL_SAME:** 6
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

---

<a id="lang-cs"></a>

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

<a id="lang-fi"></a>

## fi

- **Atslēgas:** 305/305
- **target === source rindas:** 8
- **Šo rindu LV avota vārdu skaits:** 31
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
| fi | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| fi | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| fi | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| fi | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| fi | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| fi | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| fi | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| fi | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-sv"></a>

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

<a id="lang-nb"></a>

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

<a id="lang-nn"></a>

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

<a id="lang-da"></a>

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

<a id="lang-nl"></a>

## nl

- **Atslēgas:** 305/305
- **target === source rindas:** 8
- **Šo rindu LV avota vārdu skaits:** 31
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
| nl | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| nl | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| nl | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| nl | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| nl | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| nl | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| nl | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| nl | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-lb"></a>

## lb

- **Atslēgas:** 305/305
- **target === source rindas:** 87
- **Šo rindu LV avota vārdu skaits:** 242
- **INTENTIONAL_SAME:** 7
- **REAL_UNTRANSLATED:** 0
- **NEEDS_OWNER_REVIEW:** 80
- **Placeholder kļūdas:** 0
- **HTML struktūras kļūdas:** 0
- **Trūkstošas atslēgas:** 0
- **Liekas atslēgas:** 0
- **Tukšas vērtības:** 0

### target === source tabula

<details>
<summary><strong>target === source tabula</strong> (87 rindas — noklikšķini, lai izvērstu)</summary>

| language | key | LV source | current target | status | pamatojums |
|---|---|---|---|---|---|
| lb | `buttons.extraOptions` | Papildu opcijas | Papildu opcijas | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `buttons.extraOptionsClose` | Papildu opcijas ▲ | Papildu opcijas ▲ | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `buttons.extraOptionsOpen` | Papildu opcijas ▼ | Papildu opcijas ▼ | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `buttons.restore` | Atgriezt | Atgriezt | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `buttons.restoreAll` | Atgriezt visu | Atgriezt visu | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `card.answerPrefix` | Atbilde: | Atbilde: | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `card.pluralLabel` | Daudzsk. | Daudzsk. | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `card.sessionComplete` | Sesija pabeigta! | Sesija pabeigta! | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `card.sessionLabel` | Sesija | Sesija | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| lb | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| lb | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `info.answersTitle` | Atbildes | Atbildes | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `info.directionTitle` | Tulkojuma virziens | Tulkojuma virziens | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `info.extraTitle` | Papildu opcijas | Papildu opcijas | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.articles` | Artikuli | Artikuli | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.back` | ‹ Kurss | ‹ Kurss | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.exerciseMeta.formDu` | Forma 1/3: Tu (vienskaitlis) | Forma 1/3: Tu (vienskaitlis) | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.exerciseMeta.translate` | Übung II — tulko | Übung II — tulko | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
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
| lb | `kurss.lessonItems.17.title` | Lekcija 17 | Lekcija 17 | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
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
| lb | `kurss.lessons` | Lekcijas | Lekcijas | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.panelLabel` | Kurss | Kurss | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.pronunciation` | Izruna | Izruna | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.sections.grammar` | Gramatika | Gramatika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `kurss.tipTitle` | Padoms | Padoms | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `kurss.title` | Kurss | Kurss | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `menu.course` | Kurss | Kurss | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `modes.easy` | Viegls | Viegls | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `progress.courseHeading` | Kurss | Kurss | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `settings.appLanguage` | Lietotnes valoda | Lietotnes valoda | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `spelling.writeAnswer` | Ieraksti atbildi | Ieraksti atbildi | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.minimal.formsLabel` | Formas: | Formas: | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `study.minimal.pluralLabel` | DAUDZSK. | DAUDZSK. | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.minimal.tipLabel` | Padoms: | Padoms: | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.sections.explanation` | Skaidrojums | Skaidrojums | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.sections.remember` | Atceries | Atceries | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.sections.tip` | Padoms | Padoms | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.table.describes` | Raksturo | Raksturo | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| lb | `study.table.translation` | Tulkojums | Tulkojums | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| lb | `tools.spellingShort` | Rakst. | Rakst. | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `verb.guessImperfect` | Uzmini imperfektu | Uzmini imperfektu | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |
| lb | `verb.infinitiv` | Infinitiv | Infinitiv | INTENTIONAL_SAME | Latīņu gramatikas termins |
| lb | `verb.present` | Tagadne | Tagadne | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `verb.translationPrefix` | Tulkojums: | Tulkojums: | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |
| lb | `verb.writeImperfect` | Uzraksti imperfektu | Uzraksti imperfektu | NEEDS_OWNER_REVIEW | Nav droši klasificējams automātiski |

</details>

---

<a id="lang-fr"></a>

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

<a id="lang-it"></a>

## it

- **Atslēgas:** 305/305
- **target === source rindas:** 8
- **Šo rindu LV avota vārdu skaits:** 31
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
| it | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| it | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| it | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| it | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| it | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| it | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| it | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| it | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-es"></a>

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

<a id="lang-pt"></a>

## pt

- **Atslēgas:** 305/305
- **target === source rindas:** 4
- **Šo rindu LV avota vārdu skaits:** 21
- **INTENTIONAL_SAME:** 4
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
| pt | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| pt | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| pt | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| pt | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-hu"></a>

## hu

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
| hu | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| hu | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| hu | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| hu | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| hu | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

<a id="lang-is"></a>

## is

- **Atslēgas:** 305/305
- **target === source rindas:** 8
- **Šo rindu LV avota vārdu skaits:** 31
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
| is | `direction.deToNative` | 🔄 DE ➔ {code} | 🔄 DE ➔ {code} | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| is | `direction.nativeToDe` | 🔄 {code} ➔ DE | 🔄 {code} ➔ DE | INTENTIONAL_SAME | Virziena indikators ar DE kodu un placeholder {code} |
| is | `extra.statistics` | Statistika | Statistika | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| is | `kurss.lessonItems.19.menuDesc` | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| is | `kurss.lessonItems.21.menuDesc` | woher / wohin / wo, von / aus / mit + Dativ. | woher / wohin / wo, von / aus / mit + Dativ. | INTENTIONAL_SAME | Apzināti saglabāts vācu mācību apraksts |
| is | `study.table.german` | DE | DE | INTENTIONAL_SAME | DE kolonnas kods |
| is | `tools.problemShort` | Probl. | Probl. | NEEDS_OWNER_REVIEW | Kognāts vai saīsinājums — iespējams pareizs mērķvalodā, bet identisks LV avotam |
| is | `verb.hintSessionProgress` | {label}: {current} / {total}. {tap} | {label}: {current} / {total}. {tap} | INTENTIONAL_SAME | Placeholder struktūra identiska avotam |

---

