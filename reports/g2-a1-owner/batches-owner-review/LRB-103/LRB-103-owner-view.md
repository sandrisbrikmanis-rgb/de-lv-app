# G2/A1 LRB LRB-103 — OWNER VIEW

**Batch:** LRB-103
**Rows:** 25/25
**Direction:** DESCENDING
**Reserved for:** PC2
**Generated:** 2026-09-12T17:17:46.237Z
**Source commit:** `94720e05f0f69818e138b5391e74ba648a595a09`
**Branch:** `cursor/lrb-103-owner-review-pc2`
**Input SHA256:** `cf60f0f9db467566463276d8c549d91b8d0fdc746eb21d42ee2f9791f3f38e8b`
**Manifest:** `reports/g2-a1-owner/manifests/LRB-103-start.json`

> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.
> PROPOSED values are audit suggestions — not OWNER-approved.

## Finding 1

**Audit ID:** `LRB103-0001`
**Finding Stable ID:** `g2/a1/uk|legen|idx:363|study.explanation; study.comparison; study.important|MISTRANSLATION|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `legen|idx:363`
**Field / path:** `study.explanation; study.comparison; study.important`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** MISTRANSLATION
**LV source (read-only):** nolikt
**DE reference (read-only):** legen
**CURRENT (captured scope):** {"study.explanation":"[\"Головна думка: legen означає покласти щось униз або горизонтально.\",\"legen використовується, якщо ви самостійно пересуваєте річ і кладете її на стіл, ліжко чи іншу поверхню.\",\"Він відрізняється від liegen, що означає, що щось уже є або лежить.\",\"На рівні A1 найважливіша відмінність: legen = опуститися, liegen = лежати.\"]","study.comparison":"[{\"word\":\"legen\",\"meaning\":\"покласти вниз\",\"example\":\"Ich lege das Buch auf den Tisch.\"},{\"word\":\"liegen\",\"meaning\":\"бути / спати\",\"example\":\"Das Buch liegt auf dem Tisch.\"},{\"word\":\"stellen\",\"meaning\":\"поставити вертикально\",\"example\":\"Ich stelle die Flasche auf den Tisch.\"},{\"word\":\"setzen\",\"meaning\":\"сісти / сісти\",\"example\":\"Ich setze mich.\"}]","study.important":"[\"legen і liegen не те саме.\",\"Ich lege das Buch = Я відклав книгу. Das Buch liegt = книга знаходиться.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte legen\|idx:363, bet study.explanation; study.comparison; study.important aptver study.explanation, study.comparison, study.important; LV “nolikt” un DE “legen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "study.explanation": "[\"Головна думка: legen означає покласти щось униз або горизонтально.\",\"legen використовується, якщо ви самостійно пересуваєте річ і кладете її на стіл, ліжко чи іншу поверхню.\",\"Він відрізняється від liegen, що означає, що щось уже є або лежить.\",\"На рівні A1 найважливіша відмінність: legen = опуститися, liegen = лежати.\"]",
  "study.comparison": "[{\"word\":\"legen\",\"meaning\":\"покласти вниз\",\"example\":\"Ich lege das Buch auf den Tisch.\"},{\"word\":\"liegen\",\"meaning\":\"бути / спати\",\"example\":\"Das Buch liegt auf dem Tisch.\"},{\"word\":\"stellen\",\"meaning\":\"поставити вертикально\",\"example\":\"Ich stelle die Flasche auf den Tisch.\"},{\"word\":\"setzen\",\"meaning\":\"сісти / сісти\",\"example\":\"Ich setze mich.\"}]",
  "study.important": "[\"legen і liegen не те саме.\",\"Ich lege das Buch = Я відклав книгу. Das Buch liegt = книга знаходиться.\"]"
}
```

---

## Finding 2

**Audit ID:** `LRB103-0002`
**Finding Stable ID:** `g2/a1/uk|leise|idx:368|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `leise|idx:368`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** kluss
**DE reference (read-only):** leise
**CURRENT (captured scope):** {"lv":"тихий","study.translation":"тихий","study.explanation":"[\"Головна думка: Тихо або низька гучність.\",\"leise в основному означає: низька гучність.\",\"Часто описує: звук/голос/музика.\",\"leise описує низьку гучність або тихий голос/звук.\"]","study.examples":"[{\"de\":\"Bitte sei leise.\",\"lv\":\"Будь ласка, мовчи\"},{\"de\":\"Bitte sei leise.\",\"lv\":\"будь ласка, мовчи\"},{\"de\":\"Die Musik ist leise.\",\"lv\":\"музика тиха.\"},{\"de\":\"Sprich bitte leise.\",\"lv\":\"будь ласка, говоріть тихо.\"}]","study.tip":"[\"leise = тихо\",\"Використовується в leise, коли контекст відповідає цьому значенню.\"]","study.important":"[\"leise = беззвучний.\",\"leise = обсяг.\",\"Тихий або низький рівень гучності.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte leise\|idx:368, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “kluss” un DE “leise” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "тихий",
  "study.translation": "тихий",
  "study.explanation": "[\"Головна думка: Тихо або низька гучність.\",\"leise в основному означає: низька гучність.\",\"Часто описує: звук/голос/музика.\",\"leise описує низьку гучність або тихий голос/звук.\"]",
  "study.examples": "[{\"de\":\"Bitte sei leise.\",\"lv\":\"Будь ласка, мовчи\"},{\"de\":\"Bitte sei leise.\",\"lv\":\"будь ласка, мовчи\"},{\"de\":\"Die Musik ist leise.\",\"lv\":\"музика тиха.\"},{\"de\":\"Sprich bitte leise.\",\"lv\":\"будь ласка, говоріть тихо.\"}]",
  "study.tip": "[\"leise = тихо\",\"Використовується в leise, коли контекст відповідає цьому значенню.\"]",
  "study.important": "[\"leise = беззвучний.\",\"leise = обсяг.\",\"Тихий або низький рівень гучності.\"]"
}
```

---

## Finding 3

**Audit ID:** `LRB103-0003`
**Finding Stable ID:** `g2/a1/uk|liegen|idx:377|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0002`
**Lang:** uk
**Card:** `liegen|idx:377`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** atrasties • gulēt
**DE reference (read-only):** liegen
**CURRENT (captured scope):** {"lv":"бути • спати","study.translation":"бути • спати","study.explanation":"[\"Головна думка: liegen означає лежати або лежати горизонтально.\",\"Про людину liegen часто означає спати.\",\"Про річ liegen означає, що вона десь є.\",\"Воно відрізняється від legen, що означає записувати щось.\"]","study.examples":"[{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"книга лежить на столі.\"},{\"de\":\"Mein Handy liegt im Auto.\",\"lv\":\"мій телефон в машині.\"},{\"de\":\"Er liegt im Bett.\",\"lv\":\"він спить у ліжку.\"},{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"Я кладу книгу на стіл.\"}]","study.comparison":"[{\"word\":\"liegen\",\"meaning\":\"бути / спати\",\"example\":\"Das Buch liegt hier.\"},{\"word\":\"legen\",\"meaning\":\"покласти вниз\",\"example\":\"Ich lege das Buch hierhin.\"},{\"word\":\"stehen\",\"meaning\":\"стояти / стояти\",\"example\":\"Die Flasche steht auf dem Tisch.\"},{\"word\":\"sein\",\"meaning\":\"бути\",\"example\":\"Ich bin hier.\"}]","study.tip":"{\"text\":\"Пам'ятай: справа вже на місці → liegen; ви кладете його → legen.\"}","study.important":"[\"liegen вказує на стан або розташування.\",\"legen показує дію: хтось щось кладе.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte liegen\|idx:377, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “atrasties • gulēt” un DE “liegen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "бути • спати",
  "study.translation": "бути • спати",
  "study.explanation": "[\"Головна думка: liegen означає лежати або лежати горизонтально.\",\"Про людину liegen часто означає спати.\",\"Про річ liegen означає, що вона десь є.\",\"Воно відрізняється від legen, що означає записувати щось.\"]",
  "study.examples": "[{\"de\":\"Das Buch liegt auf dem Tisch.\",\"lv\":\"книга лежить на столі.\"},{\"de\":\"Mein Handy liegt im Auto.\",\"lv\":\"мій телефон в машині.\"},{\"de\":\"Er liegt im Bett.\",\"lv\":\"він спить у ліжку.\"},{\"de\":\"Ich lege das Buch auf den Tisch.\",\"lv\":\"Я кладу книгу на стіл.\"}]",
  "study.comparison": "[{\"word\":\"liegen\",\"meaning\":\"бути / спати\",\"example\":\"Das Buch liegt hier.\"},{\"word\":\"legen\",\"meaning\":\"покласти вниз\",\"example\":\"Ich lege das Buch hierhin.\"},{\"word\":\"stehen\",\"meaning\":\"стояти / стояти\",\"example\":\"Die Flasche steht auf dem Tisch.\"},{\"word\":\"sein\",\"meaning\":\"бути\",\"example\":\"Ich bin hier.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: справа вже на місці → liegen; ви кладете його → legen.\"}",
  "study.important": "[\"liegen вказує на стан або розташування.\",\"legen показує дію: хтось щось кладе.\"]"
}
```

---

## Finding 4

**Audit ID:** `LRB103-0004`
**Finding Stable ID:** `g2/a1/uk|machen|idx:386|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0004`
**Lang:** uk
**Card:** `machen|idx:386`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** darīt • taisīt
**DE reference (read-only):** machen
**CURRENT (captured scope):** {"lv":"зробити • зробити","study.translation":"зробити • зробити","study.explanation":"[\"Головна думка: machen є дуже поширеним словом, що означає робити або робити.\",\"Якщо йдеться про дію загалом, перекладіть як робити.\",\"Якщо щось виготовляється або готується, це перекладається як виготовлення або приготування.\",\"У багатьох фразах machen перекладається природно відповідно до латиської мови, а не буквально.\"]","study.examples":"[{\"de\":\"Was machst du?\",\"lv\":\"що ти робиш\"},{\"de\":\"Ich mache Hausaufgaben.\",\"lv\":\"Я роблю домашнє завдання.\"},{\"de\":\"Wir machen Pizza.\",\"lv\":\"готуємо піцу.\"},{\"de\":\"Das macht Spaß.\",\"lv\":\"це весело.\"}]","study.tip":"{\"text\":\"Пам'ятай: Was machst du? = Що ти робиш?\"}","study.important":"[\"machen є дуже широким словом, але латиська мова часто доводиться перекладати природно відповідно до ситуації.\",\"Das macht Spaß означає «це весело», а не буквально «це смішно».\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte machen\|idx:386, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “darīt • taisīt” un DE “machen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "зробити • зробити",
  "study.translation": "зробити • зробити",
  "study.explanation": "[\"Головна думка: machen є дуже поширеним словом, що означає робити або робити.\",\"Якщо йдеться про дію загалом, перекладіть як робити.\",\"Якщо щось виготовляється або готується, це перекладається як виготовлення або приготування.\",\"У багатьох фразах machen перекладається природно відповідно до латиської мови, а не буквально.\"]",
  "study.examples": "[{\"de\":\"Was machst du?\",\"lv\":\"що ти робиш\"},{\"de\":\"Ich mache Hausaufgaben.\",\"lv\":\"Я роблю домашнє завдання.\"},{\"de\":\"Wir machen Pizza.\",\"lv\":\"готуємо піцу.\"},{\"de\":\"Das macht Spaß.\",\"lv\":\"це весело.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: Was machst du? = Що ти робиш?\"}",
  "study.important": "[\"machen є дуже широким словом, але латиська мова часто доводиться перекладати природно відповідно до ситуації.\",\"Das macht Spaß означає «це весело», а не буквально «це смішно».\"]"
}
```

---

## Finding 5

**Audit ID:** `LRB103-0005`
**Finding Stable ID:** `g2/a1/uk|Mal|idx:390|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `Mal|idx:390`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** reize
**DE reference (read-only):** Mal
**CURRENT (captured scope):** {"lv":"час","study.translation":"час","study.explanation":"[\"Головна думка: das Mal означає один раз як подія або випадок.\",\"Часто використовується з числами: ein Mal, zwei Mal, drei Mal.\",\"З порядковим номером: das erste Mal, das zweite Mal.\",\"Не розмовляйте з розмовною часткою mal (Komm mal her!) - це інше значення.\"]","study.examples":"[{\"de\":\"Das erste Mal war schwer.\",\"lv\":\"перший час було важко.\"},{\"de\":\"Ich war schon zwei Mal in Berlin.\",\"lv\":\"Я вже був у Берліні двічі.\"},{\"de\":\"Ein Mal reicht.\",\"lv\":\"одного разу достатньо.\"},{\"de\":\"Noch ein Mal, bitte!\",\"lv\":\"ще раз будь ласка!\"}]","study.tip":"{\"text\":\"Пам'ятай: das Mal = раз (іменник); mal без артикля = розмовна частка.\"}","study.important":"[\"das Mal / die Male — іменник зі ст.\",\"ein Mal, zwei Mal - відлік разів.\",\"mal без артикля (Komm mal her!) не те саме, що das Mal.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte Mal\|idx:390, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “reize” un DE “Mal” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "час",
  "study.translation": "час",
  "study.explanation": "[\"Головна думка: das Mal означає один раз як подія або випадок.\",\"Часто використовується з числами: ein Mal, zwei Mal, drei Mal.\",\"З порядковим номером: das erste Mal, das zweite Mal.\",\"Не розмовляйте з розмовною часткою mal (Komm mal her!) - це інше значення.\"]",
  "study.examples": "[{\"de\":\"Das erste Mal war schwer.\",\"lv\":\"перший час було важко.\"},{\"de\":\"Ich war schon zwei Mal in Berlin.\",\"lv\":\"Я вже був у Берліні двічі.\"},{\"de\":\"Ein Mal reicht.\",\"lv\":\"одного разу достатньо.\"},{\"de\":\"Noch ein Mal, bitte!\",\"lv\":\"ще раз будь ласка!\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: das Mal = раз (іменник); mal без артикля = розмовна частка.\"}",
  "study.important": "[\"das Mal / die Male — іменник зі ст.\",\"ein Mal, zwei Mal - відлік разів.\",\"mal без артикля (Komm mal her!) не те саме, що das Mal.\"]"
}
```

---

## Finding 6

**Audit ID:** `LRB103-0006`
**Finding Stable ID:** `g2/a1/uk|noch mal|idx:701|lv and study target-language fields|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0004`
**Lang:** uk
**Card:** `noch mal|idx:701`
**Field / path:** `lv and study target-language fields`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** vēlreiz
**DE reference (read-only):** noch mal
**CURRENT (captured scope):** {"lv":"знову","study target-language fields":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: uk kartītei noch mal\|idx:701 ceļš lv and study target-language fields production datos neeksistē; LV “vēlreiz” ir jāizvērtē kopā ar shēmas OWNER, pirms var izveidot jaunu lauku vai noraidīt finding.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "знову",
  "study target-language fields": null
}
```

---

## Finding 7

**Audit ID:** `LRB103-0007`
**Finding Stable ID:** `g2/a1/uk|probieren|idx:482|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `probieren|idx:482`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** izmēģināt • nogaršot
**DE reference (read-only):** probieren
**CURRENT (captured scope):** {"lv":"пробувати • смакувати","study.translation":"пробувати • смакувати","study.explanation":"[\"Головна думка: probieren означає спробувати або скуштувати.\",\"Говорячи про їжу чи напої, probieren часто означає смак.\",\"Коли мова йде про дію, метод або предмет, probieren означає спробувати.\",\"Це не те саме, що prüfen, що означає перевірку більш ретельно.\"]","study.examples":"[{\"de\":\"Probier mal die Suppe!\",\"lv\":\"скуштуйте суп!\"},{\"de\":\"Ich möchte den Kuchen probieren.\",\"lv\":\"Я хочу скуштувати торт.\"},{\"de\":\"Wir probieren eine neue Methode.\",\"lv\":\"ми пробуємо новий метод.\"},{\"de\":\"Kann ich die Jacke anprobieren?\",\"lv\":\"можна приміряти куртку\"}]","study.comparison":"[{\"word\":\"probieren\",\"meaning\":\"спробувати / скуштувати\",\"example\":\"Probier mal die Suppe!\"},{\"word\":\"versuchen\",\"meaning\":\"спробувати\",\"example\":\"Ich versuche es.\"},{\"word\":\"prüfen\",\"meaning\":\"перевірити\",\"example\":\"Ich prüfe die Rechnung.\"},{\"word\":\"anprobieren\",\"meaning\":\"приміряти\",\"example\":\"Ich probiere die Jacke an.\"}]","study.tip":"{\"text\":\"Пам'ятай: їжа → probieren = за смаком.\"}","study.important":"[\"probieren не є ключовим словом для офіційного тестування.\",\"Зазвичай prüfen перевіряє документ або рахунок-фактуру.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte probieren\|idx:482, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “izmēģināt • nogaršot” un DE “probieren” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "пробувати • смакувати",
  "study.translation": "пробувати • смакувати",
  "study.explanation": "[\"Головна думка: probieren означає спробувати або скуштувати.\",\"Говорячи про їжу чи напої, probieren часто означає смак.\",\"Коли мова йде про дію, метод або предмет, probieren означає спробувати.\",\"Це не те саме, що prüfen, що означає перевірку більш ретельно.\"]",
  "study.examples": "[{\"de\":\"Probier mal die Suppe!\",\"lv\":\"скуштуйте суп!\"},{\"de\":\"Ich möchte den Kuchen probieren.\",\"lv\":\"Я хочу скуштувати торт.\"},{\"de\":\"Wir probieren eine neue Methode.\",\"lv\":\"ми пробуємо новий метод.\"},{\"de\":\"Kann ich die Jacke anprobieren?\",\"lv\":\"можна приміряти куртку\"}]",
  "study.comparison": "[{\"word\":\"probieren\",\"meaning\":\"спробувати / скуштувати\",\"example\":\"Probier mal die Suppe!\"},{\"word\":\"versuchen\",\"meaning\":\"спробувати\",\"example\":\"Ich versuche es.\"},{\"word\":\"prüfen\",\"meaning\":\"перевірити\",\"example\":\"Ich prüfe die Rechnung.\"},{\"word\":\"anprobieren\",\"meaning\":\"приміряти\",\"example\":\"Ich probiere die Jacke an.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: їжа → probieren = за смаком.\"}",
  "study.important": "[\"probieren не є ключовим словом для офіційного тестування.\",\"Зазвичай prüfen перевіряє документ або рахунок-фактуру.\"]"
}
```

---

## Finding 8

**Audit ID:** `LRB103-0008`
**Finding Stable ID:** `g2/a1/uk|Reis|idx:496|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0002`
**Lang:** uk
**Card:** `Reis|idx:496`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** rīsi
**DE reference (read-only):** Reis
**CURRENT (captured scope):** {"lv":"рис","study.translation":"рис","study.explanation":"У німецькій мові слово \"der Reis\" використовується тільки в в однині, тому дієслово має бути в однині в реченні (наприклад, \"ist\", а не \"sind\"). Проте латиші часто кажуть «рис».","study.examples":"[{\"de\":\"Der Reis ist fertig.\",\"lv\":\"рис готовий.\"},{\"de\":\"Ich esse Reis.\",\"lv\":\"я їм рис\"},{\"de\":\"Kochst du Reis?\",\"lv\":\"ти вариш рис?\"},{\"de\":\"Der Reis schmeckt gut.\",\"lv\":\"рис смачний.\"}]","study.tip":"{\"text\":\"Пам'ятай: der Reis - це однина німецькою мовою, але зазвичай рис латиською.\"}","study.important":"[\"der Reis - лише німецькою мовою однина (Der Reis ist..., nicht *sind).\",\"У латиському перекладі часто вживається множина: рис готовий.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte Reis\|idx:496, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “rīsi” un DE “Reis” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "рис",
  "study.translation": "рис",
  "study.explanation": "У німецькій мові слово \"der Reis\" використовується тільки в в однині, тому дієслово має бути в однині в реченні (наприклад, \"ist\", а не \"sind\"). Проте латиші часто кажуть «рис».",
  "study.examples": "[{\"de\":\"Der Reis ist fertig.\",\"lv\":\"рис готовий.\"},{\"de\":\"Ich esse Reis.\",\"lv\":\"я їм рис\"},{\"de\":\"Kochst du Reis?\",\"lv\":\"ти вариш рис?\"},{\"de\":\"Der Reis schmeckt gut.\",\"lv\":\"рис смачний.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: der Reis - це однина німецькою мовою, але зазвичай рис латиською.\"}",
  "study.important": "[\"der Reis - лише німецькою мовою однина (Der Reis ist..., nicht *sind).\",\"У латиському перекладі часто вживається множина: рис готовий.\"]"
}
```

---

## Finding 9

**Audit ID:** `LRB103-0009`
**Finding Stable ID:** `g2/a1/uk|sagen|idx:505|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0003`
**Lang:** uk
**Card:** `sagen|idx:505`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** teikt
**DE reference (read-only):** sagen
**CURRENT (captured scope):** {"lv":"сказати","study.translation":"сказати","study.explanation":"[\"Головна думка: передати конкретну думку, слово чи речення.\",\"sagen в основному означає: висловити певну думку.\",\"Часто описує: слова/речення.\",\"sagen використовується для певного вимовленого тексту.\"]","study.examples":"[{\"de\":\"Was hast du gesagt?\",\"lv\":\"що ти сказав\"}]","study.comparison":"[{\"word\":\"sagen\",\"meaning\":\"розповісти (конкретний текст)\",\"example\":\"Was hast du gesagt? – що ти сказав\"},{\"word\":\"sprechen\",\"meaning\":\"говорити (мова, говорити)\",\"example\":\"Ich spreche Deutsch. – Я розмовляю німецькою.\"}]","study.tip":"[\"sagen = сказати\",\"Використовується в sagen, коли контекст відповідає цьому значенню.\"]","study.important":"[\"sagen = розповідати.\",\"Для передачі певної думки, слова чи речення.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte sagen\|idx:505, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “teikt” un DE “sagen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "сказати",
  "study.translation": "сказати",
  "study.explanation": "[\"Головна думка: передати конкретну думку, слово чи речення.\",\"sagen в основному означає: висловити певну думку.\",\"Часто описує: слова/речення.\",\"sagen використовується для певного вимовленого тексту.\"]",
  "study.examples": "[{\"de\":\"Was hast du gesagt?\",\"lv\":\"що ти сказав\"}]",
  "study.comparison": "[{\"word\":\"sagen\",\"meaning\":\"розповісти (конкретний текст)\",\"example\":\"Was hast du gesagt? – що ти сказав\"},{\"word\":\"sprechen\",\"meaning\":\"говорити (мова, говорити)\",\"example\":\"Ich spreche Deutsch. – Я розмовляю німецькою.\"}]",
  "study.tip": "[\"sagen = сказати\",\"Використовується в sagen, коли контекст відповідає цьому значенню.\"]",
  "study.important": "[\"sagen = розповідати.\",\"Для передачі певної думки, слова чи речення.\"]"
}
```

---

## Finding 10

**Audit ID:** `LRB103-0010`
**Finding Stable ID:** `g2/a1/uk|schauen|idx:510|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0004`
**Lang:** uk
**Card:** `schauen|idx:510`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** skatīties
**DE reference (read-only):** schauen
**CURRENT (captured scope):** {"lv":"дивитися","study.translation":"дивитися","study.explanation":"[\"Головна думка: активно дивитися або підглядати.\",\"schauen в основному означає: активно спостерігати.\",\"Часто описує: дію.\",\"schauen означає активно спостерігати.\"]","study.examples":"[{\"de\":\"Ich schaue fern.\",\"lv\":\"Я дивлюсь телевізор.\"},{\"de\":\"Wir schauen aus dem Fenster.\",\"lv\":\"ми дивимося у вікно.\"},{\"de\":\"Ich schaue fern.\",\"lv\":\"я дивлюся телевізор\"}]","study.comparison":"[{\"word\":\"schauen\",\"meaning\":\"дивитися (активно)\",\"example\":\"Ich schaue aus dem Fenster. – Я дивлюся у вікно.\"},{\"word\":\"sehen\",\"meaning\":\"бачити (без наміру)\",\"example\":\"Ich sehe dich. – я бачу тебе\"}]","study.tip":"[\"schauen = дивитися\",\"Використовується в schauen, коли контекст відповідає цьому значенню.\"]","study.important":"[\"schauen = дивитися.\",\"Активно дивіться або дивіться.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte schauen\|idx:510, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “skatīties” un DE “schauen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "дивитися",
  "study.translation": "дивитися",
  "study.explanation": "[\"Головна думка: активно дивитися або підглядати.\",\"schauen в основному означає: активно спостерігати.\",\"Часто описує: дію.\",\"schauen означає активно спостерігати.\"]",
  "study.examples": "[{\"de\":\"Ich schaue fern.\",\"lv\":\"Я дивлюсь телевізор.\"},{\"de\":\"Wir schauen aus dem Fenster.\",\"lv\":\"ми дивимося у вікно.\"},{\"de\":\"Ich schaue fern.\",\"lv\":\"я дивлюся телевізор\"}]",
  "study.comparison": "[{\"word\":\"schauen\",\"meaning\":\"дивитися (активно)\",\"example\":\"Ich schaue aus dem Fenster. – Я дивлюся у вікно.\"},{\"word\":\"sehen\",\"meaning\":\"бачити (без наміру)\",\"example\":\"Ich sehe dich. – я бачу тебе\"}]",
  "study.tip": "[\"schauen = дивитися\",\"Використовується в schauen, коли контекст відповідає цьому значенню.\"]",
  "study.important": "[\"schauen = дивитися.\",\"Активно дивіться або дивіться.\"]"
}
```

---

## Finding 11

**Audit ID:** `LRB103-0011`
**Finding Stable ID:** `g2/a1/uk|schon|idx:521|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `schon|idx:521`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** jau
**DE reference (read-only):** schon
**CURRENT (captured scope):** {"lv":"вже","study.translation":"вже","study.explanation":"[\"Головна думка: щось уже відбулося або вже діє.\",\"schon в основному означає: щось уже сталося або діє.\",\"Часто описує: факт, що стався, або існуючий стан.\",\"schon означає вже: щось уже сталося або вже діє.\"]","study.examples":"[{\"de\":\"Ich bin schon zu Hause.\",\"lv\":\"я вже вдома\"}]","study.tip":"[\"Щось уже сталося або вже діє.\",\"Використовується в schon, коли контекст відповідає цьому значенню.\"]","study.important":"[\"schon = вже.\",\"Щось уже сталося або вже діє.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte schon\|idx:521, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “jau” un DE “schon” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "вже",
  "study.translation": "вже",
  "study.explanation": "[\"Головна думка: щось уже відбулося або вже діє.\",\"schon в основному означає: щось уже сталося або діє.\",\"Часто описує: факт, що стався, або існуючий стан.\",\"schon означає вже: щось уже сталося або вже діє.\"]",
  "study.examples": "[{\"de\":\"Ich bin schon zu Hause.\",\"lv\":\"я вже вдома\"}]",
  "study.tip": "[\"Щось уже сталося або вже діє.\",\"Використовується в schon, коли контекст відповідає цьому значенню.\"]",
  "study.important": "[\"schon = вже.\",\"Щось уже сталося або вже діє.\"]"
}
```

---

## Finding 12

**Audit ID:** `LRB103-0012`
**Finding Stable ID:** `g2/a1/uk|sprechen|idx:5|lv, study.translation, study.explanation, study.examples|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `sprechen|idx:5`
**Field / path:** `lv, study.translation, study.explanation, study.examples`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** runāt
**DE reference (read-only):** sprechen
**CURRENT (captured scope):** {"lv":"говорити","study.translation":"говорити","study.explanation":"[\"Головна думка: говорити, розмовляти або використовувати мову.\",\"sprechen в основному означає: говорити або розмовляти.\",\"Часто характеризується: мова/розмова.\",\"sprechen описує розмову або використання мови.\"]","study.examples":"[{\"de\":\"Ich spreche Deutsch.\",\"lv\":\"Я розмовляю німецькою.\"},{\"de\":\"Wir sprechen über die Arbeit.\",\"lv\":\"ми говоримо про роботу.\"},{\"de\":\"Sie spricht mit ihrer Lehrerin.\",\"lv\":\"я розмовляю німецькою\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte sprechen\|idx:5, bet lv, study.translation, study.explanation, study.examples aptver lv, study.translation, study.explanation, study.examples; LV “runāt” un DE “sprechen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "говорити",
  "study.translation": "говорити",
  "study.explanation": "[\"Головна думка: говорити, розмовляти або використовувати мову.\",\"sprechen в основному означає: говорити або розмовляти.\",\"Часто характеризується: мова/розмова.\",\"sprechen описує розмову або використання мови.\"]",
  "study.examples": "[{\"de\":\"Ich spreche Deutsch.\",\"lv\":\"Я розмовляю німецькою.\"},{\"de\":\"Wir sprechen über die Arbeit.\",\"lv\":\"ми говоримо про роботу.\"},{\"de\":\"Sie spricht mit ihrer Lehrerin.\",\"lv\":\"я розмовляю німецькою\"}]"
}
```

---

## Finding 13

**Audit ID:** `LRB103-0013`
**Finding Stable ID:** `g2/a1/uk|Uhr|idx:698|lv and study target-language fields|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `Uhr|idx:698`
**Field / path:** `lv and study target-language fields`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** pulkstenis
**DE reference (read-only):** Uhr
**CURRENT (captured scope):** {"lv":"годинник","study target-language fields":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: uk kartītei Uhr\|idx:698 ceļš lv and study target-language fields production datos neeksistē; LV “pulkstenis” ir jāizvērtē kopā ar shēmas OWNER, pirms var izveidot jaunu lauku vai noraidīt finding.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "годинник",
  "study target-language fields": null
}
```

---

## Finding 14

**Audit ID:** `LRB103-0014`
**Finding Stable ID:** `g2/a1/uk|vom|idx:634|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `vom|idx:634`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** no
**DE reference (read-only):** vom
**CURRENT (captured scope):** {"lv":"від","study.translation":"від","study.explanation":"[\"vom є абревіатурою прийменника von і артикля dem.\",\"Повна форма: von dem (кому?).\",\"Вживається разом із іменники чоловічого та іншого роду, коли вказується походження чи напрямок від кого.\",\"Відповідає на питання від кого? чи звідки?\",\"На практиці vom майже завжди використовується замість повного von dem.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"приходжу з вокзалу\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"подарунок від батька.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"він приходить від лікаря.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"вона їде з аеропорту.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"це з ринку.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"ми прийшли зі святкування.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"він бере молоко у фермера.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"повідомлення від боса.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"від (конкретна річ, кому?)\",\"example\":\"vom Bahnhof – від ст\"},{\"word\":\"von\",\"meaning\":\"від (загальний)\",\"example\":\"von mir – від мене\"},{\"word\":\"aus\",\"meaning\":\"зсередини / походження\",\"example\":\"aus Deutschland – з Німеччини\"},{\"word\":\"ab\",\"meaning\":\"починаючи з (час/місце)\",\"example\":\"ab Montag – з понеділка\"},{\"word\":\"zu\",\"meaning\":\"до / на (протилежний напрямок)\",\"example\":\"zum Arzt – до лікаря\"}]","study.tip":"[\"Пам'ятай: von + dem → vom (кому?).\",\"У розмовній мові von dem майже не вимовляється - використовується vom.\"]","study.important":"[\"vom = von dem, тільки з іменником чоловічого або середнього роду в кому? відміні.\",\"Вказує на походження, джерело або напрямок чогось конкретного.\",\"Для жіночої статі: von der Mutter замість vom Mutter.\",\"Не плутати з aus (країна походження) або ab (пункт походження).\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte vom\|idx:634, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “no” un DE “vom” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "від",
  "study.translation": "від",
  "study.explanation": "[\"vom є абревіатурою прийменника von і артикля dem.\",\"Повна форма: von dem (кому?).\",\"Вживається разом із іменники чоловічого та іншого роду, коли вказується походження чи напрямок від кого.\",\"Відповідає на питання від кого? чи звідки?\",\"На практиці vom майже завжди використовується замість повного von dem.\"]",
  "study.examples": "[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"приходжу з вокзалу\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"подарунок від батька.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"він приходить від лікаря.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"вона їде з аеропорту.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"це з ринку.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"ми прийшли зі святкування.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"він бере молоко у фермера.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"повідомлення від боса.\"}]",
  "study.comparison": "[{\"word\":\"vom\",\"meaning\":\"від (конкретна річ, кому?)\",\"example\":\"vom Bahnhof – від ст\"},{\"word\":\"von\",\"meaning\":\"від (загальний)\",\"example\":\"von mir – від мене\"},{\"word\":\"aus\",\"meaning\":\"зсередини / походження\",\"example\":\"aus Deutschland – з Німеччини\"},{\"word\":\"ab\",\"meaning\":\"починаючи з (час/місце)\",\"example\":\"ab Montag – з понеділка\"},{\"word\":\"zu\",\"meaning\":\"до / на (протилежний напрямок)\",\"example\":\"zum Arzt – до лікаря\"}]",
  "study.tip": "[\"Пам'ятай: von + dem → vom (кому?).\",\"У розмовній мові von dem майже не вимовляється - використовується vom.\"]",
  "study.important": "[\"vom = von dem, тільки з іменником чоловічого або середнього роду в кому? відміні.\",\"Вказує на походження, джерело або напрямок чогось конкретного.\",\"Для жіночої статі: von der Mutter замість vom Mutter.\",\"Не плутати з aus (країна походження) або ab (пункт походження).\"]"
}
```

---

## Finding 15

**Audit ID:** `LRB103-0015`
**Finding Stable ID:** `g2/a1/uk|vor|idx:636|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0002`
**Lang:** uk
**Card:** `vor|idx:636`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** pirms • priekšā
**DE reference (read-only):** vor
**CURRENT (captured scope):** {"lv":"перед • попереду","study.translation":"перед • попереду","study.explanation":"[\"Головна думка: vor означає перед у часі або перед місцем.\",\"Коли йдеться про час, vor означає раніше.\",\"Говорячи про місце, vor означає перед або біля.\",\"На годиннику vor означає «до», як fünf vor acht.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Я мию руки перед їжею.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"auto стоїть перед будинком.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"це п'ять до восьмої.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"після їжі йдемо гуляти.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"перед / попереду\",\"example\":\"Перед їжею...\"},{\"word\":\"nach\",\"meaning\":\"після / до\",\"example\":\"Після їжі...\"},{\"word\":\"neben\",\"meaning\":\"поруч\",\"example\":\"Поруч з будинком.\"},{\"word\":\"hinter\",\"meaning\":\"ззаду\",\"example\":\"За будинком.\"}]","study.tip":"{\"text\":\"Пам'ятай: раніше за часом, раніше за місцем → vor.\"}","study.important":"[\"vor може бути як часом, так і місцем.\",\"vor dem Essen = до їжі; vor dem Haus = перед будинком.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte vor\|idx:636, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “pirms • priekšā” un DE “vor” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "перед • попереду",
  "study.translation": "перед • попереду",
  "study.explanation": "[\"Головна думка: vor означає перед у часі або перед місцем.\",\"Коли йдеться про час, vor означає раніше.\",\"Говорячи про місце, vor означає перед або біля.\",\"На годиннику vor означає «до», як fünf vor acht.\"]",
  "study.examples": "[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Я мию руки перед їжею.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"auto стоїть перед будинком.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"це п'ять до восьмої.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"після їжі йдемо гуляти.\"}]",
  "study.comparison": "[{\"word\":\"vor\",\"meaning\":\"перед / попереду\",\"example\":\"Перед їжею...\"},{\"word\":\"nach\",\"meaning\":\"після / до\",\"example\":\"Після їжі...\"},{\"word\":\"neben\",\"meaning\":\"поруч\",\"example\":\"Поруч з будинком.\"},{\"word\":\"hinter\",\"meaning\":\"ззаду\",\"example\":\"За будинком.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: раніше за часом, раніше за місцем → vor.\"}",
  "study.important": "[\"vor може бути як часом, так і місцем.\",\"vor dem Essen = до їжі; vor dem Haus = перед будинком.\"]"
}
```

---

## Finding 16

**Audit ID:** `LRB103-0016`
**Finding Stable ID:** `g2/a1/uk|was|idx:644|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0003`
**Lang:** uk
**Card:** `was|idx:644`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** kas • ko
**DE reference (read-only):** was
**CURRENT (captured scope):** {"lv":"хто • що","study.translation":"хто • що","study.explanation":"[\"Головна думка: was є питальним словом про речі та події - латиською мовою це що або що, залежно від частини речення.\",\"was запитує про речі, події та факти, а не про осіб.\",\"У німецькій мові was не змінюється при флексії - він завжди виглядає як was.\",\"Якщо was є підметом речення, він перекладається як що (Was ist das? = Що це?).\",\"Якщо was є доповненням (об’єктом) дієслова, воно перекладається як що (Was machst du? = Що ти робиш?).\",\"Особи запитуються за допомогою wer (хто/хто), а не was.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Що це?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"що сталося\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"що ти зараз робиш\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"що ти хочеш випити\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Що означає це слово?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Яка твоя улюблена їжа?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"що ти сказав\"}]","study.tip":"[\"Сам was не змінюється - у німецькій мові це завжди was; у латиській мові вибрати кого або що відповідно до частини речення.\",\"Швидка хитрість: якщо на запитання можна відповісти \\\"Це ...\\\", використовуйте who; якщо відповідь стоїть після дієслова як доповнення, використовуйте ko.\"]","study.important":"[\"was запитує про речі, події та факти — ніколи не про людей.\",\"Особи запитуються за допомогою wer (хто/хто), а не was.\",\"was für (ein/eine) означає когось/про що та запитує про якість або тип (Was für ein Film ist das? = Який це фільм?).\",\"Неправильно: Wer ist passiert? → Правильно: Was ist passiert?\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte was\|idx:644, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “kas • ko” un DE “was” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "хто • що",
  "study.translation": "хто • що",
  "study.explanation": "[\"Головна думка: was є питальним словом про речі та події - латиською мовою це що або що, залежно від частини речення.\",\"was запитує про речі, події та факти, а не про осіб.\",\"У німецькій мові was не змінюється при флексії - він завжди виглядає як was.\",\"Якщо was є підметом речення, він перекладається як що (Was ist das? = Що це?).\",\"Якщо was є доповненням (об’єктом) дієслова, воно перекладається як що (Was machst du? = Що ти робиш?).\",\"Особи запитуються за допомогою wer (хто/хто), а не was.\"]",
  "study.examples": "[{\"de\":\"Was ist das?\",\"lv\":\"Що це?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"що сталося\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"що ти зараз робиш\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"що ти хочеш випити\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Що означає це слово?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Яка твоя улюблена їжа?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"що ти сказав\"}]",
  "study.tip": "[\"Сам was не змінюється - у німецькій мові це завжди was; у латиській мові вибрати кого або що відповідно до частини речення.\",\"Швидка хитрість: якщо на запитання можна відповісти \\\"Це ...\\\", використовуйте who; якщо відповідь стоїть після дієслова як доповнення, використовуйте ko.\"]",
  "study.important": "[\"was запитує про речі, події та факти — ніколи не про людей.\",\"Особи запитуються за допомогою wer (хто/хто), а не was.\",\"was für (ein/eine) означає когось/про що та запитує про якість або тип (Was für ein Film ist das? = Який це фільм?).\",\"Неправильно: Wer ist passiert? → Правильно: Was ist passiert?\"]"
}
```

---

## Finding 17

**Audit ID:** `LRB103-0017`
**Finding Stable ID:** `g2/a1/uk|wenn|idx:655|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0004`
**Lang:** uk
**Card:** `wenn|idx:655`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** ja • kad
**DE reference (read-only):** wenn
**CURRENT (captured scope):** {"lv":"якщо • коли","study.translation":"якщо • коли","study.explanation":"[\"Головна думка: wenn означає якщо або коли залежно від ситуації.\",\"Якщо це умова, перекладіть як якщо.\",\"Якщо це повторний або загальний час, перекладіть як коли.\",\"Після wenn дієслово у німецькому реченні зазвичай стоїть у кінці.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"якщо маєте час, зайдіть.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"якщо йде дощ, я залишаюся вдома.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"коли я втомився, я п'ю каву.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"я не знаю чи він прийде.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"якщо / коли\",\"example\":\"Якщо у тебе є час...\"},{\"word\":\"ob\",\"meaning\":\"або в непрямому питанні\",\"example\":\"Я не знаю, чи...\"},{\"word\":\"wann\",\"meaning\":\"коли під питанням\",\"example\":\"Коли ти приходиш?\"},{\"word\":\"weil\",\"meaning\":\"тому що\",\"example\":\"Я залишаюся, тому що я хворий.\"}]","study.tip":"{\"text\":\"Пам'ятай: умова → wenn; питання \\\"коли?\\\" → wann.\"}","study.important":"[\"wenn і wann не те саме.\",\"Wann kommst du? є питання. Wenn du kommst... є умовою/часом.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte wenn\|idx:655, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “ja • kad” un DE “wenn” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "якщо • коли",
  "study.translation": "якщо • коли",
  "study.explanation": "[\"Головна думка: wenn означає якщо або коли залежно від ситуації.\",\"Якщо це умова, перекладіть як якщо.\",\"Якщо це повторний або загальний час, перекладіть як коли.\",\"Після wenn дієслово у німецькому реченні зазвичай стоїть у кінці.\"]",
  "study.examples": "[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"якщо маєте час, зайдіть.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"якщо йде дощ, я залишаюся вдома.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"коли я втомився, я п'ю каву.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"я не знаю чи він прийде.\"}]",
  "study.comparison": "[{\"word\":\"wenn\",\"meaning\":\"якщо / коли\",\"example\":\"Якщо у тебе є час...\"},{\"word\":\"ob\",\"meaning\":\"або в непрямому питанні\",\"example\":\"Я не знаю, чи...\"},{\"word\":\"wann\",\"meaning\":\"коли під питанням\",\"example\":\"Коли ти приходиш?\"},{\"word\":\"weil\",\"meaning\":\"тому що\",\"example\":\"Я залишаюся, тому що я хворий.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: умова → wenn; питання \\\"коли?\\\" → wann.\"}",
  "study.important": "[\"wenn і wann не те саме.\",\"Wann kommst du? є питання. Wenn du kommst... є умовою/часом.\"]"
}
```

---

## Finding 18

**Audit ID:** `LRB103-0018`
**Finding Stable ID:** `g2/a1/uk|wer|idx:656|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `wer|idx:656`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** kas • kurš
**DE reference (read-only):** wer
**CURRENT (captured scope):** {"lv":"хто • хто","study.translation":"хто • хто","study.explanation":"[\"Головна думка: wer є питальним словом щодо ідентичності людини - латиською мовою це хто або хто.\",\"wer запитує про людей, а не про речі чи події.\",\"Речі та події запитуються за допомогою was, а не wer.\",\"wer у німецькій мові зазвичай є підметом речення (називному відмінку) — Wer ist das? = Що це?\",\"Коли запитують, хто саме з кількох людей, wer часто використовується разом із von (wer von euch = хто з вас).\",\"wer змінює форму шляхом флексії: wen (знахідний відмінок), wem (давальний відмінок), wessen (родовий відмінок) — wer є найпоширенішою формою на рівні A1.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Що це?\"},{\"de\":\"Wer bist du?\",\"lv\":\"хто ти\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Що буде сьогодні?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"хто твій вчитель\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Хто з вас говорить німецькою?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Хто це сказав?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Хто хоче кави?\"}]","study.tip":"[\"wer запитує про осіб (хто/хто) - was використовується для речей і подій.\",\"Щоб запитати про вибір між кількома людьми, використовуйте wer von... (який з...).\"]","study.important":"[\"wer запитує лише про осіб, ніколи про речі.\",\"Речі та події запитуються за допомогою was замість wer.\",\"wer змінює форму після флексії: wen, wem, wessen — але основною формою є wer.\",\"Неправильно: Wer ist passiert? → Правильно: Was ist passiert?\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte wer\|idx:656, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “kas • kurš” un DE “wer” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "хто • хто",
  "study.translation": "хто • хто",
  "study.explanation": "[\"Головна думка: wer є питальним словом щодо ідентичності людини - латиською мовою це хто або хто.\",\"wer запитує про людей, а не про речі чи події.\",\"Речі та події запитуються за допомогою was, а не wer.\",\"wer у німецькій мові зазвичай є підметом речення (називному відмінку) — Wer ist das? = Що це?\",\"Коли запитують, хто саме з кількох людей, wer часто використовується разом із von (wer von euch = хто з вас).\",\"wer змінює форму шляхом флексії: wen (знахідний відмінок), wem (давальний відмінок), wessen (родовий відмінок) — wer є найпоширенішою формою на рівні A1.\"]",
  "study.examples": "[{\"de\":\"Wer ist das?\",\"lv\":\"Що це?\"},{\"de\":\"Wer bist du?\",\"lv\":\"хто ти\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Що буде сьогодні?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"хто твій вчитель\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Хто з вас говорить німецькою?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Хто це сказав?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Хто хоче кави?\"}]",
  "study.tip": "[\"wer запитує про осіб (хто/хто) - was використовується для речей і подій.\",\"Щоб запитати про вибір між кількома людьми, використовуйте wer von... (який з...).\"]",
  "study.important": "[\"wer запитує лише про осіб, ніколи про речі.\",\"Речі та події запитуються за допомогою was замість wer.\",\"wer змінює форму після флексії: wen, wem, wessen — але основною формою є wer.\",\"Неправильно: Wer ist passiert? → Правильно: Was ist passiert?\"]"
}
```

---

## Finding 19

**Audit ID:** `LRB103-0019`
**Finding Stable ID:** `g2/a1/uk|werden|idx:657|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0001`
**Lang:** uk
**Card:** `werden|idx:657`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** kļūt
**DE reference (read-only):** werden
**CURRENT (captured scope):** {"lv":"стати","study.translation":"стати","study.explanation":"[\"Головна думка: werden на рівні A1 найчастіше означає стати.\",\"Він використовується, коли щось змінюється або стає іншим.\",\"Пізніше в німецькій мові werden також використовується для майбутній часi та пасивного стану.\",\"На рівні A1 найважливішою фразою є Ich werde müde. = Я втомлююся.\"]","study.examples":"[{\"de\":\"Ich werde müde.\",\"lv\":\"я втомлююсь.\"},{\"de\":\"Es wird kalt.\",\"lv\":\"стає холодно.\"},{\"de\":\"Sie wird Ärztin.\",\"lv\":\"вона стає лікарем.\"},{\"de\":\"Ich bin müde.\",\"lv\":\"я втомився\"}]","study.comparison":"[{\"word\":\"werden\",\"meaning\":\"стати\",\"example\":\"Я стаю втомленим.\"},{\"word\":\"sein\",\"meaning\":\"бути\",\"example\":\"Я втомлений.\"},{\"word\":\"bleiben\",\"meaning\":\"залишитися\",\"example\":\"Я залишаюся тут.\"},{\"word\":\"machen\",\"meaning\":\"робити / робити\",\"example\":\"Я це роблю.\"}]","study.tip":"{\"text\":\"Пам'ятай: зміна/стан стає іншим → werden.\"}","study.important":"[\"werden не те саме, що sein.\",\"Ich werde müde = я втомлююся; Ich bin müde = Я втомився.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte werden\|idx:657, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “kļūt” un DE “werden” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "стати",
  "study.translation": "стати",
  "study.explanation": "[\"Головна думка: werden на рівні A1 найчастіше означає стати.\",\"Він використовується, коли щось змінюється або стає іншим.\",\"Пізніше в німецькій мові werden також використовується для майбутній часi та пасивного стану.\",\"На рівні A1 найважливішою фразою є Ich werde müde. = Я втомлююся.\"]",
  "study.examples": "[{\"de\":\"Ich werde müde.\",\"lv\":\"я втомлююсь.\"},{\"de\":\"Es wird kalt.\",\"lv\":\"стає холодно.\"},{\"de\":\"Sie wird Ärztin.\",\"lv\":\"вона стає лікарем.\"},{\"de\":\"Ich bin müde.\",\"lv\":\"я втомився\"}]",
  "study.comparison": "[{\"word\":\"werden\",\"meaning\":\"стати\",\"example\":\"Я стаю втомленим.\"},{\"word\":\"sein\",\"meaning\":\"бути\",\"example\":\"Я втомлений.\"},{\"word\":\"bleiben\",\"meaning\":\"залишитися\",\"example\":\"Я залишаюся тут.\"},{\"word\":\"machen\",\"meaning\":\"робити / робити\",\"example\":\"Я це роблю.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: зміна/стан стає іншим → werden.\"}",
  "study.important": "[\"werden не те саме, що sein.\",\"Ich werde müde = я втомлююся; Ich bin müde = Я втомився.\"]"
}
```

---

## Finding 20

**Audit ID:** `LRB103-0020`
**Finding Stable ID:** `g2/a1/uk|Wetter|idx:658|lv, study.translation, study.examples|TRANSLATION_ERROR|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0002`
**Lang:** uk
**Card:** `Wetter|idx:658`
**Field / path:** `lv, study.translation, study.examples`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**Raw category:** TRANSLATION_ERROR
**LV source (read-only):** laiks (laikapstākļi)
**DE reference (read-only):** Wetter
**CURRENT (captured scope):** {"lv":"час (погода)","study.translation":"час (погода)","study.examples":"[{\"de\":\"Wie ist das Wetter heute?\",\"lv\":\"котра сьогодні година?\"},{\"de\":\"Das Wetter ist schön.\",\"lv\":\"погода гарна.\"},{\"de\":\"Das Wetter ist schlecht.\",\"lv\":\"погода погана.\"},{\"de\":\"Im Winter ist das Wetter oft kalt.\",\"lv\":\"взимку часто холодна погода.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"ми говоримо про час.\"},{\"de\":\"Morgen wird das Wetter besser.\",\"lv\":\"завтра погода буде краща.\"}]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte Wetter\|idx:658, bet lv, study.translation, study.examples aptver lv, study.translation, study.examples; LV “laiks (laikapstākļi)” un DE “Wetter” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "час (погода)",
  "study.translation": "час (погода)",
  "study.examples": "[{\"de\":\"Wie ist das Wetter heute?\",\"lv\":\"котра сьогодні година?\"},{\"de\":\"Das Wetter ist schön.\",\"lv\":\"погода гарна.\"},{\"de\":\"Das Wetter ist schlecht.\",\"lv\":\"погода погана.\"},{\"de\":\"Im Winter ist das Wetter oft kalt.\",\"lv\":\"взимку часто холодна погода.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"ми говоримо про час.\"},{\"de\":\"Morgen wird das Wetter besser.\",\"lv\":\"завтра погода буде краща.\"}]"
}
```

---

## Finding 21

**Audit ID:** `LRB103-0021`
**Finding Stable ID:** `g2/a1/uk|wie|idx:660|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0003`
**Lang:** uk
**Card:** `wie|idx:660`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** kā • cik
**DE reference (read-only):** wie
**CURRENT (captured scope):** {"lv":"як • скільки","study.translation":"як • скільки","study.explanation":"[\"Головна думка: wie запитує про вид або якість (як) і про кількість або кількість (скільки), залежно від контексту.\",\"Тільки wie (Wie geht's?) запитує про шлях - як латиською мовою.\",\"wie + прикметник (wie viel, wie alt, wie lange) запитують про кількість, вік або тривалість - скільки латиською мовою.\",\"wie viel(e) означає скільки; wie alt означає, скільки років; wie lange означає, скільки часу.\",\"У порівняннях wie означає те саме, що (so groß wie = розміром із).\"]","study.examples":"[{\"de\":\"Wie geht es dir?\",\"lv\":\"як справи\"},{\"de\":\"Wie heißt du?\",\"lv\":\"як тебе звуть\"},{\"de\":\"Wie viel kostet das?\",\"lv\":\"скільки це коштує\"},{\"de\":\"Wie alt bist du?\",\"lv\":\"скільки тобі років\"},{\"de\":\"Wie lange dauert der Film?\",\"lv\":\"скільки триває фільм?\"},{\"de\":\"Er ist so groß wie sein Vater.\",\"lv\":\"він такий же високий, як і його батько.\"}]","study.tip":"[\"wie сам по собі = як (вид); wie + прикметник (viel/alt/lange) = скільки (обсяг).\",\"Для порівняння so ... wie = як ... як.\"]","study.important":"[\"wie viel(e) = скільки; wie alt = скільки років; wie lange = скільки часу.\",\"wie окремо (Wie...?) зазвичай = як, а не скільки.\",\"Неправильно: скільки тобі років? → Правильно: Як справи? (Wie geht's?)\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte wie\|idx:660, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.tip, study.important; LV “kā • cik” un DE “wie” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "як • скільки",
  "study.translation": "як • скільки",
  "study.explanation": "[\"Головна думка: wie запитує про вид або якість (як) і про кількість або кількість (скільки), залежно від контексту.\",\"Тільки wie (Wie geht's?) запитує про шлях - як латиською мовою.\",\"wie + прикметник (wie viel, wie alt, wie lange) запитують про кількість, вік або тривалість - скільки латиською мовою.\",\"wie viel(e) означає скільки; wie alt означає, скільки років; wie lange означає, скільки часу.\",\"У порівняннях wie означає те саме, що (so groß wie = розміром із).\"]",
  "study.examples": "[{\"de\":\"Wie geht es dir?\",\"lv\":\"як справи\"},{\"de\":\"Wie heißt du?\",\"lv\":\"як тебе звуть\"},{\"de\":\"Wie viel kostet das?\",\"lv\":\"скільки це коштує\"},{\"de\":\"Wie alt bist du?\",\"lv\":\"скільки тобі років\"},{\"de\":\"Wie lange dauert der Film?\",\"lv\":\"скільки триває фільм?\"},{\"de\":\"Er ist so groß wie sein Vater.\",\"lv\":\"він такий же високий, як і його батько.\"}]",
  "study.tip": "[\"wie сам по собі = як (вид); wie + прикметник (viel/alt/lange) = скільки (обсяг).\",\"Для порівняння so ... wie = як ... як.\"]",
  "study.important": "[\"wie viel(e) = скільки; wie alt = скільки років; wie lange = скільки часу.\",\"wie окремо (Wie...?) зазвичай = як, а не скільки.\",\"Неправильно: скільки тобі років? → Правильно: Як справи? (Wie geht's?)\"]"
}
```

---

## Finding 22

**Audit ID:** `LRB103-0022`
**Finding Stable ID:** `g2/a1/uk|wissen|idx:311|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `wissen|idx:311`
**Field / path:** `lv, study.*`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** TARGET_LANGUAGE_MISMATCH
**LV source (read-only):** zināt
**DE reference (read-only):** wissen
**CURRENT (captured scope):** {"lv":"знати","study.translation":"знати","study.explanation":"[\"Головна думка: знати факт, відповідь або інформацію.\",\"wissen в основному означає: інформація/факт.\",\"Часто характеризується: відповідями, даними.\",\"wissen використовується, коли ви знаєте факт, відповідь або інформацію.\"]","study.examples":"[{\"de\":\"Ich weiß, wo er wohnt.\",\"lv\":\"Я знаю, де він живе.\"},{\"de\":\"Woher wissen Sie das?\",\"lv\":\"звідки ти це знаєш?\"},{\"de\":\"Ich weiß die Antwort.\",\"lv\":\"я знаю відповідь.\"}]","study.comparison":"[{\"word\":\"wissen\",\"meaning\":\"знати (факт, інформація)\",\"example\":\"Ich weiß, wo er wohnt. – Я знаю, де він живе.\"},{\"word\":\"kennen\",\"meaning\":\"знати (особу, місце, річ)\",\"example\":\"Ich kenne die Stadt. – Я знаю місто.\"}]","study.tip":"[\"wissen = знати\",\"Використовується в wissen, коли контекст відповідає цьому значенню.\"]","study.important":"[\"wissen = знати факт.\",\"wissen = знати.\",\"Знати факт, відповідь або інформацію.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte wissen\|idx:311, bet lv, study.* aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “zināt” un DE “wissen” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "знати",
  "study.translation": "знати",
  "study.explanation": "[\"Головна думка: знати факт, відповідь або інформацію.\",\"wissen в основному означає: інформація/факт.\",\"Часто характеризується: відповідями, даними.\",\"wissen використовується, коли ви знаєте факт, відповідь або інформацію.\"]",
  "study.examples": "[{\"de\":\"Ich weiß, wo er wohnt.\",\"lv\":\"Я знаю, де він живе.\"},{\"de\":\"Woher wissen Sie das?\",\"lv\":\"звідки ти це знаєш?\"},{\"de\":\"Ich weiß die Antwort.\",\"lv\":\"я знаю відповідь.\"}]",
  "study.comparison": "[{\"word\":\"wissen\",\"meaning\":\"знати (факт, інформація)\",\"example\":\"Ich weiß, wo er wohnt. – Я знаю, де він живе.\"},{\"word\":\"kennen\",\"meaning\":\"знати (особу, місце, річ)\",\"example\":\"Ich kenne die Stadt. – Я знаю місто.\"}]",
  "study.tip": "[\"wissen = знати\",\"Використовується в wissen, коли контекст відповідає цьому значенню.\"]",
  "study.important": "[\"wissen = знати факт.\",\"wissen = знати.\",\"Знати факт, відповідь або інформацію.\"]"
}
```

---

## Finding 23

**Audit ID:** `LRB103-0023`
**Finding Stable ID:** `g2/a1/uk|Zeit|idx:699|lv and study target-language fields|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0002`
**Lang:** uk
**Card:** `Zeit|idx:699`
**Field / path:** `lv and study target-language fields`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** laiks (brīdis / laika posms)
**DE reference (read-only):** Zeit
**CURRENT (captured scope):** {"lv":"час (момент/проміжок часу)","study target-language fields":null}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: uk kartītei Zeit\|idx:699 ceļš lv and study target-language fields production datos neeksistē; LV “laiks (brīdis / laika posms)” ir jāizvērtē kopā ar shēmas OWNER, pirms var izveidot jaunu lauku vai noraidīt finding.
**Unresolved category:** CONFIRMED_FIELD_ABSENT_NO_PRODUCTION_TARGET
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "час (момент/проміжок часу)",
  "study target-language fields": null
}
```

---

## Finding 24

**Audit ID:** `LRB103-0024`
**Finding Stable ID:** `g2/a1/uk|zu|idx:668|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0004`
**Lang:** uk
**Card:** `zu|idx:668`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** uz • pie
**DE reference (read-only):** zu
**CURRENT (captured scope):** {"lv":"до • при","study.translation":"до • при","study.explanation":"[\"Головна думка: zu дуже часто означає to або at, але також відіграє роль з інфінітивом.\",\"З людьми та установами zu часто означає на або до.\",\"З прикметникиem zu також може означати.\",\"У конструкції zu + nenoteiksme це допомагає утворити неправильність: zu lernen, zu gehen.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Я йду до лікаря.\"},{\"de\":\"Wir gehen zur Schule.\",\"lv\":\"ми ходимо до школи.\"},{\"de\":\"Das ist zu teuer.\",\"lv\":\"це занадто дорого.\"},{\"de\":\"Ich habe keine Zeit zu lernen.\",\"lv\":\"Я не маю часу вчитися.\"}]","study.comparison":"[{\"word\":\"zu\",\"meaning\":\"до / на / теж / інфінітив\",\"example\":\"Я йду до лікаря.\"},{\"word\":\"nach\",\"meaning\":\"з містами/країнами\",\"example\":\"Я їду в Берлін.\"},{\"word\":\"in\",\"meaning\":\"в / до місця\",\"example\":\"Я йду до школи.\"},{\"word\":\"bei\",\"meaning\":\"у когось / на роботі\",\"example\":\"Я у Ганни.\"}]","study.tip":"{\"text\":\"Пам'ятай: у лікаря → zum Arzt; занадто дорого → zu teuer.\"}","study.important":"[\"zu має багато застосувань, тому завжди дивіться на конструкцію.\",\"zu teuer означає «надто дорого», а не «надто дорого».\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte zu\|idx:668, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “uz • pie” un DE “zu” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "до • при",
  "study.translation": "до • при",
  "study.explanation": "[\"Головна думка: zu дуже часто означає to або at, але також відіграє роль з інфінітивом.\",\"З людьми та установами zu часто означає на або до.\",\"З прикметникиem zu також може означати.\",\"У конструкції zu + nenoteiksme це допомагає утворити неправильність: zu lernen, zu gehen.\"]",
  "study.examples": "[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Я йду до лікаря.\"},{\"de\":\"Wir gehen zur Schule.\",\"lv\":\"ми ходимо до школи.\"},{\"de\":\"Das ist zu teuer.\",\"lv\":\"це занадто дорого.\"},{\"de\":\"Ich habe keine Zeit zu lernen.\",\"lv\":\"Я не маю часу вчитися.\"}]",
  "study.comparison": "[{\"word\":\"zu\",\"meaning\":\"до / на / теж / інфінітив\",\"example\":\"Я йду до лікаря.\"},{\"word\":\"nach\",\"meaning\":\"з містами/країнами\",\"example\":\"Я їду в Берлін.\"},{\"word\":\"in\",\"meaning\":\"в / до місця\",\"example\":\"Я йду до школи.\"},{\"word\":\"bei\",\"meaning\":\"у когось / на роботі\",\"example\":\"Я у Ганни.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: у лікаря → zum Arzt; занадто дорого → zu teuer.\"}",
  "study.important": "[\"zu має багато застосувань, тому завжди дивіться на конструкцію.\",\"zu teuer означає «надто дорого», а не «надто дорого».\"]"
}
```

---

## Finding 25

**Audit ID:** `LRB103-0025`
**Finding Stable ID:** `g2/a1/uk|Zug|idx:671|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Finding Member ID:** `DISC-G2-A1-UK-L0005`
**Lang:** uk
**Card:** `Zug|idx:671`
**Field / path:** `lv, study`
**Production file:** `crowdin-staging/g2/uk-a1.json`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**Raw category:** LANGUAGE_MISMATCH
**LV source (read-only):** vilciens
**DE reference (read-only):** Zug
**CURRENT (captured scope):** {"lv":"поїзд","study.translation":"поїзд","study.explanation":"[\"Головна думка: der Zug A1 рівень найчастіше означає потяг.\",\"Він використовується в повсякденних ситуаціях під час водіння, прибуття та виїзду.\",\"У деяких інших значеннях Zug може бути маршем, чернеткою або особливістю, але це не основні значення A1.\",\"Дуже поширеними є фрази mit dem Zug fahren і Der Zug kommt.\"]","study.examples":"[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"поїзд прибуває о восьмій.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"я подорожую поїздом\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"потяг повний.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"автобус приходить пізніше.\"}]","study.comparison":"[{\"word\":\"der Zug\",\"meaning\":\"поїзд\",\"example\":\"Поїзд приходить.\"},{\"word\":\"die Bahn\",\"meaning\":\"залізниця / подорож потягом\",\"example\":\"Я їду залізницею.\"},{\"word\":\"der Bus\",\"meaning\":\"автобус\",\"example\":\"Автобус приходить.\"},{\"word\":\"die Straßenbahn\",\"meaning\":\"трамвай\",\"example\":\"Трамвай тут.\"}]","study.tip":"{\"text\":\"Пам'ятай: конкретний поїзд → der Zug.\"}","study.important":"[\"der Zug слід читати як «поїзд» у назві.\",\"Більш рідкісні значення не потрібні в основному заголовку A1.\"]"}
**PROPOSED:** —
**Problem:** 
**Pending note:** PENDING: individuāli pārbaudīta uk kartīte Zug\|idx:671, bet lv, study aptver lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important; LV “vilciens” un DE “Zug” nevar droši pārvērst vienā owner_new bez konkrētas apakšlauka adreses.
**Unresolved category:** COMPOSITE_SCOPE_REQUIRES_FIELD_LEVEL_OWNER
**OWNER STATUS:** PENDING
**OWNER_DECISION:** 
**NEW:** 

### Gala card (full composite snapshot)

```json
{
  "lv": "поїзд",
  "study.translation": "поїзд",
  "study.explanation": "[\"Головна думка: der Zug A1 рівень найчастіше означає потяг.\",\"Він використовується в повсякденних ситуаціях під час водіння, прибуття та виїзду.\",\"У деяких інших значеннях Zug може бути маршем, чернеткою або особливістю, але це не основні значення A1.\",\"Дуже поширеними є фрази mit dem Zug fahren і Der Zug kommt.\"]",
  "study.examples": "[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"поїзд прибуває о восьмій.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"я подорожую поїздом\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"потяг повний.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"автобус приходить пізніше.\"}]",
  "study.comparison": "[{\"word\":\"der Zug\",\"meaning\":\"поїзд\",\"example\":\"Поїзд приходить.\"},{\"word\":\"die Bahn\",\"meaning\":\"залізниця / подорож потягом\",\"example\":\"Я їду залізницею.\"},{\"word\":\"der Bus\",\"meaning\":\"автобус\",\"example\":\"Автобус приходить.\"},{\"word\":\"die Straßenbahn\",\"meaning\":\"трамвай\",\"example\":\"Трамвай тут.\"}]",
  "study.tip": "{\"text\":\"Пам'ятай: конкретний поїзд → der Zug.\"}",
  "study.important": "[\"der Zug слід читати як «поїзд» у назві.\",\"Більш рідкісні значення не потрібні в основному заголовку A1.\"]"
}
```

---

