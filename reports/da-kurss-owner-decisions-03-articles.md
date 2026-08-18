# DA–DE Kurss — OWNER decisions — Artikler (statiskais panels)

Avots: `reports/da-kurss-owner-review-03-articles.md`  
Findings: **1–1** (1 ieraksts)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER pārbaude

Finding 1 ir **reāla DA kļūda**. `CURRENT_DA` satur:

> `Den tyske artikel falder ikke altid sammen med det engelske kønssystem.`

Atsauce uz **angļu** dzimtes sistēmu (`det engelske kønssystem`) DA–DE kursā ir nepareiza un neatbilst LV etalona nozīmei.

Pareizais dāņu formulējums:

> `Det grammatiske køn på tysk svarer ikke altid til det grammatiske køn på dansk. Derfor er det bedst at lære substantiver sammen med deres artikel.`

Pārējais `COURSE_LESSON_HTML.kurssArticlesLesson` HTML šī finding ietvaros **nav jāpārfrāzē vai jāmaina**.

## OWNER kopsavilkums

- **LABOT:** 1
- **NELABOT:** 0
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 0
- **PENDING:** 0

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	LABOT	COURSE_LESSON_HTML.kurssArticlesLesson laukā aizstāt tikai: "Den tyske artikel falder ikke altid sammen med det engelske kønssystem. Derfor læres navneord bedst sammen med artiklen." → "Det grammatiske køn på tysk svarer ikke altid til det grammatiske køn på dansk. Derfor er det bedst at lære substantiver sammen med deres artikel." Pārējo HTML nemainīt.
```
