# Crowdin UI placeholder repair — OWNER mapping

**Datums:** 2026-08-28  
**Avots:** `reports/crowdin-ui-untranslated-audit.md`  
**LV etalons:** `crowdin/ui/lv.json`  
**Greek kartējums:** Crowdin `el` → repo `gr`

## Kopsavilkums

| Statuss | Skaits |
|---|---:|
| REQUESTED | 55 |
| LABOT | 55 |
| CURRENT_VALUE_MISMATCH | 0 |
| NEEDS_OWNER_REVIEW | 0 |
| APPLIED_VERIFIED | 55 |
| FAILED | 0 |

### Pēc valodas (REQUESTED)

| Valoda | REQUESTED | Pirms | Pēc |
|---|---:|---:|---:|
| bg | 5 | 5 | 0 |
| gr (Crowdin: `el`) | 5 | 5 | 0 |
| hr | 5 | 5 | 0 |
| hu | 5 | 5 | 0 |
| mk | 5 | 5 | 0 |
| pt | 12 | 12 | 0 |
| ro | 6 | 6 | 0 |
| sl | 5 | 5 | 0 |
| sq | 1 | 1 | 0 |
| sr | 5 | 5 | 0 |
| tr | 1 | 1 | 0 |

## Apply rezultāts

- **Applied verified:** 55
- **Failed:** 0
- **Placeholder kļūdas:** 55 → 0
- **Changed files:** 22
  - `crowdin/ui/bg.json`
  - `crowdin/ui/gr.json`
  - `crowdin/ui/hr.json`
  - `crowdin/ui/hu.json`
  - `crowdin/ui/mk.json`
  - `crowdin/ui/pt.json`
  - `crowdin/ui/ro.json`
  - `crowdin/ui/sl.json`
  - `crowdin/ui/sq.json`
  - `crowdin/ui/sr.json`
  - `crowdin/ui/tr.json`
  - `languages/bg/ui.js`
  - `languages/gr/ui.js`
  - `languages/hr/ui.js`
  - `languages/hu/ui.js`
  - `languages/mk/ui.js`
  - `languages/pt/ui.js`
  - `languages/ro/ui.js`
  - `languages/sl/ui.js`
  - `languages/sq/ui.js`
  - `languages/sr/ui.js`
  - `languages/tr/ui.js`

## Mapping

### ro — `direction.nativeToDe`

- **Status:** LABOT
- **LV source:** `🔄 {code} ➔ DE`
- **CURRENT:** `🔄 {cod} ➔ DE`
- **NEW:** `🔄 {code} ➔ DE`
- **CURRENT placeholders:** {"cod":1}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### ro — `hints.trainingCard`

- **Status:** LABOT
- **LV source:** `{title} vingrinājuma kartīte`
- **CURRENT:** `Fișă de exerciții {titlu}`
- **NEW:** `Fișă de exerciții {title}`
- **CURRENT placeholders:** {"titlu":1}
- **LV expected placeholders:** {"title":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### ro — `kurss.exerciseProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Vingrinājums`
- **CURRENT:** `Lecția {lecția} · Exercițiu`
- **NEW:** `Lecția {lesson} · Exercițiu`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"lesson":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### ro — `kurss.hints.exerciseCardAria`

- **Status:** LABOT
- **LV source:** `{title} vingrinājuma kartīte`
- **CURRENT:** `Fișă de exerciții {titlu}`
- **NEW:** `Fișă de exerciții {title}`
- **CURRENT placeholders:** {"titlu":1}
- **LV expected placeholders:** {"title":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### ro — `kurss.lessonProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Pārtulko: {current} / {total}`
- **CURRENT:** `Lecția {lecție} · Traducător: {current} / {total}`
- **NEW:** `Lecția {lesson} · Traducător: {current} / {total}`
- **CURRENT placeholders:** {"current":1,"total":1}
- **LV expected placeholders:** {"current":1,"lesson":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### ro — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{label}: {current} / {total}. {robinet}`
- **NEW:** `{label}: {current} / {total}. {tap}`
- **CURRENT placeholders:** {"current":1,"label":1,"robinet":1,"total":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### bg — `direction.deToNative`

- **Status:** LABOT
- **LV source:** `🔄 DE ➔ {code}`
- **CURRENT:** `🔄 ОТ ➔ {код}`
- **NEW:** `🔄 ОТ ➔ {code}`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### bg — `direction.nativeToDe`

- **Status:** LABOT
- **LV source:** `🔄 {code} ➔ DE`
- **CURRENT:** `🔄 {код} ➔ DE`
- **NEW:** `🔄 {code} ➔ DE`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### bg — `kurss.exerciseProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Vingrinājums`
- **CURRENT:** `Урок {урок} · Упражнение`
- **NEW:** `Урок {lesson} · Упражнение`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"lesson":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### bg — `kurss.lessonProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Pārtulko: {current} / {total}`
- **CURRENT:** `Урок {урок} · Преводач: {текущо} / {общо}`
- **NEW:** `Урок {lesson} · Преводач: {current} / {total}`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"current":1,"lesson":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### bg — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{label}: {current} / {total}. {докоснете}`
- **NEW:** `{label}: {current} / {total}. {tap}`
- **CURRENT placeholders:** {"current":1,"label":1,"total":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### tr — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{label}: {current }/{ total}. {tap}`
- **NEW:** `{label}: {current}/{total}. {tap}`
- **CURRENT placeholders:** {"label":1,"tap":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### gr (Crowdin: `el`) — `direction.deToNative`

- **Status:** LABOT
- **LV source:** `🔄 DE ➔ {code}`
- **CURRENT:** `🔄 DE ➔ GR`
- **NEW:** `🔄 DE ➔ {code}`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Direction: native literals → {code}

### gr (Crowdin: `el`) — `direction.nativeToDe`

- **Status:** LABOT
- **LV source:** `🔄 {code} ➔ DE`
- **CURRENT:** `🔄 GR ➔ DE`
- **NEW:** `🔄 {code} ➔ DE`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Direction: native literals → {code}

### gr (Crowdin: `el`) — `kurss.exerciseProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Vingrinājums`
- **CURRENT:** `Διάλεξη {μάθημα} · Άσκηση`
- **NEW:** `Διάλεξη {lesson} · Άσκηση`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"lesson":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### gr (Crowdin: `el`) — `kurss.lessonProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Pārtulko: {current} / {total}`
- **CURRENT:** `Διάλεξη {μάθημα} · Μετάφραση: {current} / {total}`
- **NEW:** `Διάλεξη {lesson} · Μετάφραση: {current} / {total}`
- **CURRENT placeholders:** {"current":1,"total":1}
- **LV expected placeholders:** {"current":1,"lesson":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### gr (Crowdin: `el`) — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{label}: {current} / {total}. {γίνομαι}`
- **NEW:** `{label}: {current} / {total}. {tap}`
- **CURRENT placeholders:** {"current":1,"label":1,"total":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sq — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{label}: {current} / {total}. {faucet}`
- **NEW:** `{label}: {current} / {total}. {tap}`
- **CURRENT placeholders:** {"current":1,"faucet":1,"label":1,"total":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### mk — `direction.deToNative`

- **Status:** LABOT
- **LV source:** `🔄 DE ➔ {code}`
- **CURRENT:** `🔄 ОД ➔ {шифра}`
- **NEW:** `🔄 ОД ➔ {code}`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### mk — `direction.nativeToDe`

- **Status:** LABOT
- **LV source:** `🔄 {code} ➔ DE`
- **CURRENT:** `🔄 {шифра} ➔ DE`
- **NEW:** `🔄 {code} ➔ DE`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### mk — `kurss.exerciseProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Vingrinājums`
- **CURRENT:** `Лекција {лекција} · Вежба`
- **NEW:** `Лекција {lesson} · Вежба`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"lesson":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### mk — `kurss.lessonProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Pārtulko: {current} / {total}`
- **CURRENT:** `Лекција {лекција} · Преведувач: {тековен} / {општо}`
- **NEW:** `Лекција {lesson} · Преведувач: {current} / {total}`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"current":1,"lesson":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### mk — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{label}: {тековно} / {вкупно}. {допрете}`
- **NEW:** `{label}: {current} / {total}. {tap}`
- **CURRENT placeholders:** {"label":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sl — `direction.deToNative`

- **Status:** LABOT
- **LV source:** `🔄 DE ➔ {code}`
- **CURRENT:** `🔄 OD ➔ {koda}`
- **NEW:** `🔄 OD ➔ {code}`
- **CURRENT placeholders:** {"koda":1}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sl — `direction.nativeToDe`

- **Status:** LABOT
- **LV source:** `🔄 {code} ➔ DE`
- **CURRENT:** `🔄 {koda} ➔ DE`
- **NEW:** `🔄 {code} ➔ DE`
- **CURRENT placeholders:** {"koda":1}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sl — `kurss.exerciseProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Vingrinājums`
- **CURRENT:** `Lekcija {lekcija} · Vaja`
- **NEW:** `Lekcija {lesson} · Vaja`
- **CURRENT placeholders:** {"lekcija":1}
- **LV expected placeholders:** {"lesson":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sl — `kurss.lessonProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Pārtulko: {current} / {total}`
- **CURRENT:** `Lekcija {lekcija} · Prevajalec: {trenutno} / {splošno}`
- **NEW:** `Lekcija {lesson} · Prevajalec: {current} / {total}`
- **CURRENT placeholders:** {"lekcija":1,"trenutno":1}
- **LV expected placeholders:** {"current":1,"lesson":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sl — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{label}: {trenutno} / {skupaj}. {tap}`
- **NEW:** `{label}: {current} / {total}. {tap}`
- **CURRENT placeholders:** {"label":1,"skupaj":1,"tap":1,"trenutno":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sr — `direction.deToNative`

- **Status:** LABOT
- **LV source:** `🔄 DE ➔ {code}`
- **CURRENT:** `🔄 OD ➔ {koda}`
- **NEW:** `🔄 OD ➔ {code}`
- **CURRENT placeholders:** {"koda":1}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sr — `direction.nativeToDe`

- **Status:** LABOT
- **LV source:** `🔄 {code} ➔ DE`
- **CURRENT:** `🔄 {koda} ➔ DE`
- **NEW:** `🔄 {code} ➔ DE`
- **CURRENT placeholders:** {"koda":1}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sr — `kurss.exerciseProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Vingrinājums`
- **CURRENT:** `Lekcija {lekcija} · Vaja`
- **NEW:** `Lekcija {lesson} · Vaja`
- **CURRENT placeholders:** {"lekcija":1}
- **LV expected placeholders:** {"lesson":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sr — `kurss.lessonProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Pārtulko: {current} / {total}`
- **CURRENT:** `Lekcija {lekcija} · Prevajalec: {trenutno} / {splošno}`
- **NEW:** `Lekcija {lesson} · Prevajalec: {current} / {total}`
- **CURRENT placeholders:** {"lekcija":1,"trenutno":1}
- **LV expected placeholders:** {"current":1,"lesson":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### sr — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{label}: {trenutno} / {skupaj}. {tap}`
- **NEW:** `{label}: {current} / {total}. {tap}`
- **CURRENT placeholders:** {"label":1,"skupaj":1,"tap":1,"trenutno":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### hr — `direction.deToNative`

- **Status:** LABOT
- **LV source:** `🔄 DE ➔ {code}`
- **CURRENT:** `🔄 OD ➔ {koda}`
- **NEW:** `🔄 OD ➔ {code}`
- **CURRENT placeholders:** {"koda":1}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### hr — `direction.nativeToDe`

- **Status:** LABOT
- **LV source:** `🔄 {code} ➔ DE`
- **CURRENT:** `🔄 {koda} ➔ DE`
- **NEW:** `🔄 {code} ➔ DE`
- **CURRENT placeholders:** {"koda":1}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### hr — `kurss.exerciseProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Vingrinājums`
- **CURRENT:** `Lekcija {lekcija} · Vaja`
- **NEW:** `Lekcija {lesson} · Vaja`
- **CURRENT placeholders:** {"lekcija":1}
- **LV expected placeholders:** {"lesson":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### hr — `kurss.lessonProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Pārtulko: {current} / {total}`
- **CURRENT:** `Lekcija {lekcija} · Prevajalec: {trenutno} / {splošno}`
- **NEW:** `Lekcija {lesson} · Prevajalec: {current} / {total}`
- **CURRENT placeholders:** {"lekcija":1,"trenutno":1}
- **LV expected placeholders:** {"current":1,"lesson":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### hr — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{label}: {trenutno} / {skupaj}. {tap}`
- **NEW:** `{label}: {current} / {total}. {tap}`
- **CURRENT placeholders:** {"label":1,"skupaj":1,"tap":1,"trenutno":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `buttons.autoplayAriaOff`

- **Status:** LABOT
- **LV source:** `{label} (automātiski izslēgts)`
- **CURRENT:** `{tag} (valores automáticos)`
- **NEW:** `{label} (valores automáticos)`
- **CURRENT placeholders:** {"tag":1}
- **LV expected placeholders:** {"label":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `buttons.listenWithWord`

- **Status:** LABOT
- **LV source:** `Klausīties: {word}`
- **CURRENT:** `Kuula: {palavra}`
- **NEW:** `Kuula: {word}`
- **CURRENT placeholders:** {"palavra":1}
- **LV expected placeholders:** {"word":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `direction.deToNative`

- **Status:** LABOT
- **LV source:** `🔄 DE ➔ {code}`
- **CURRENT:** `As filas:`
- **NEW:** `🔄 DE ➔ {code}`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Direction canonical deToNative

### pt — `direction.nativeToDe`

- **Status:** LABOT
- **LV source:** `🔄 {code} ➔ DE`
- **CURRENT:** `🔄 {código} ➔ DE`
- **NEW:** `🔄 {code} ➔ DE`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `hints.trainingCard`

- **Status:** LABOT
- **LV source:** `{title} vingrinājuma kartīte`
- **CURRENT:** `Harjutuse kaart {título}`
- **NEW:** `Harjutuse kaart {title}`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"title":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `kurss.exerciseProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Vingrinājums`
- **CURRENT:** `Õppetund {lição} · Harjutus`
- **NEW:** `Õppetund {lesson} · Harjutus`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"lesson":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `kurss.lessonProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Pārtulko: {current} / {total}`
- **CURRENT:** `Õppetund {lição} · Tõlgi: {atual} / {total}`
- **NEW:** `Õppetund {lesson} · Tõlgi: {current} / {total}`
- **CURRENT placeholders:** {"atual":1,"total":1}
- **LV expected placeholders:** {"current":1,"lesson":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `notices.continueTimeReview`

- **Status:** LABOT
- **LV source:** `Turpinām: {label}.`
- **CURRENT:** `Jatkame: {tag}.`
- **NEW:** `Jatkame: {label}.`
- **CURRENT placeholders:** {"tag":1}
- **LV expected placeholders:** {"label":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `notices.showingTimeReview`

- **Status:** LABOT
- **LV source:** `Rādām: {label}.`
- **CURRENT:** `Naitame: {tag}.`
- **NEW:** `Naitame: {label}.`
- **CURRENT placeholders:** {"tag":1}
- **LV expected placeholders:** {"label":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `review.monthCount`

- **Status:** LABOT
- **LV source:** `Šomēnes iemācīti: {count} {words}`
- **CURRENT:** `Sel kuul õptitud : {contar} {palavras}`
- **NEW:** `Sel kuul õptitud : {count} {words}`
- **CURRENT placeholders:** {"contar":1,"palavras":1}
- **LV expected placeholders:** {"count":1,"words":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `review.weekCount`

- **Status:** LABOT
- **LV source:** `Šonedēļ iemācīti: {count} {words}`
- **CURRENT:** `Sel nädalal õpitude: {contar} {palavras}`
- **NEW:** `Sel nädalal õpitude: {count} {words}`
- **CURRENT placeholders:** {"contar":1,"palavras":1}
- **LV expected placeholders:** {"count":1,"words":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### pt — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{tag}: {atual} / {total}. {tocar}`
- **NEW:** `{label}: {current} / {total}. {tap}`
- **CURRENT placeholders:** {"atual":1,"tag":1,"tocar":1,"total":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### hu — `direction.deToNative`

- **Status:** LABOT
- **LV source:** `🔄 DE ➔ {code}`
- **CURRENT:** `🔄 DE ➔ {kód}`
- **NEW:** `🔄 DE ➔ {code}`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### hu — `direction.nativeToDe`

- **Status:** LABOT
- **LV source:** `🔄 {code} ➔ DE`
- **CURRENT:** `🔄 {kód} ➔ DE`
- **NEW:** `🔄 {code} ➔ DE`
- **CURRENT placeholders:** {}
- **LV expected placeholders:** {"code":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### hu — `kurss.exerciseProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Vingrinājums`
- **CURRENT:** `Előadás {lecke} · Gyakorlat`
- **NEW:** `Előadás {lesson} · Gyakorlat`
- **CURRENT placeholders:** {"lecke":1}
- **LV expected placeholders:** {"lesson":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### hu — `kurss.lessonProgress`

- **Status:** LABOT
- **LV source:** `Lekcija {lesson} · Pārtulko: {current} / {total}`
- **CURRENT:** `{lecke} előadás · Fordította: {current} / {total}`
- **NEW:** `{lesson} előadás · Fordította: {current} / {total}`
- **CURRENT placeholders:** {"current":1,"lecke":1,"total":1}
- **LV expected placeholders:** {"current":1,"lesson":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

### hu — `verb.hintSessionProgress`

- **Status:** LABOT
- **LV source:** `{label}: {current} / {total}. {tap}`
- **CURRENT:** `{label}: {current} / {total}. {válik}`
- **NEW:** `{label}: {current} / {total}. {tap}`
- **CURRENT placeholders:** {"current":1,"label":1,"total":1}
- **LV expected placeholders:** {"current":1,"label":1,"tap":1,"total":1}
- **Pamatojums:** Deterministiska LV placeholderu tokena atjaunošana

