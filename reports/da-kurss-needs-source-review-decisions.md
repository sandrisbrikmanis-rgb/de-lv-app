# DA–DE Kurss — NEEDS_SOURCE_REVIEW OWNER decisions

Avots: `da-kurss-needs-source-review.md`

**DE = STRICT READ-ONLY.**

## Kopsavilkums

- **LABOT:** 1
- **NELABOT:** 2
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 17
- **PENDING:** 0

> Šis fails apzināti neatrisina pilnos `legacyHtml` ar minējumiem. Ja pilns LV MASTER/DA avots nav dots, statuss paliek `NEEDS_SOURCE_REVIEW`.

## Decisions

| Finding | Statuss | OWNER_DECISION |
|---:|---|---|
| 1 | NEEDS_SOURCE_REVIEW | Nepieciešams pilns LV MASTER `kurssLesson1.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt. |
| 2 | NEEDS_SOURCE_REVIEW | Nepieciešams pilns LV MASTER `kurssLesson2.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt. |
| 3 | NEEDS_SOURCE_REVIEW | Nepieciešams pilns LV MASTER `kurssLesson3.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt. |
| 4 | NEEDS_SOURCE_REVIEW | Nepieciešams pilns LV MASTER `kurssLesson4.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt. |
| 5 | NEEDS_SOURCE_REVIEW | Nepieciešams pilns LV MASTER `kurssLesson5.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt. |
| 6 | NEEDS_SOURCE_REVIEW | Nepieciešams pilns LV MASTER `kurssLesson6.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt. |
| 7 | NEEDS_SOURCE_REVIEW | Nepieciešams pilns LV MASTER `kurssLesson7.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt. |
| 8 | NEEDS_SOURCE_REVIEW | Pilnais pronunciation panelis ir jāatjauno kā viens autoritatīvs DA HTML pret LV MASTER; pievienotajā failā LV MASTER pilnais HTML nav dots. |
| 9 | NEEDS_SOURCE_REVIEW | Pilnais consonants panelis ir jāatjauno kā viens autoritatīvs DA HTML pret LV MASTER; pievienotajā failā LV MASTER pilnais HTML nav dots. |
| 10 | NEEDS_SOURCE_REVIEW | Šis finding dublē Lesson 1 pilnā `legacyHtml` problēmu. Luna PROPOSED_DA ir latvisks; nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement. |
| 11 | NEEDS_SOURCE_REVIEW | Šis finding dublē Lesson 2 pilnā `legacyHtml` problēmu un apraksta vairākas kļūdas. Nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement. |
| 13 | NEEDS_SOURCE_REVIEW | Šis finding dublē Lesson 3 pilnā `legacyHtml` problēmu un apraksta vairākas kļūdas. Nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement. |
| 14 | NEEDS_SOURCE_REVIEW | Šis finding dublē Lesson 4 pilnā `legacyHtml` problēmu un apraksta vairākas kļūdas. Nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement. |
| 15 | NEEDS_SOURCE_REVIEW | Šis finding dublē Lesson 5 pilnā `legacyHtml` problēmu. Luna PROPOSED_DA ir latvisks; nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement. |
| 16 | NELABOT | Atstāt `Tal, flertal, omlyd og flertalsformer af substantiver`. Pievienotajā production snapshot Lesson 6 saturs tieši māca skaitļus, daudzskaitli, omlyd un lietvārdu daudzskaitļa formas, tāpēc subtitle semantiski atbilst faktiskajai lekcijai. |
| 17 | NEEDS_SOURCE_REVIEW | Šis finding dublē Lesson 6 pilnā `legacyHtml` problēmu un norāda uz plašu piesārņojumu. Nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement. |
| 46 | NEEDS_SOURCE_REVIEW | Articles paneļa atsevišķi fragmenti jau tika laboti, bet šis umbrella-finding prasa pilnu autoritatīvu paneli. Pievienotajā failā pilnais LV MASTER/DA replacement nav pieejams. |
| 61 | NEEDS_SOURCE_REVIEW | Verb Basics paneļa pilnā struktūra un saturs jāparāda pret LV MASTER. Ar `...` snapshot nevar droši apstiprināt pilna HTML lauka COPY-ONLY replacement. |
| 62 | LABOT | Mērķēti aizvietot tikai šos trīs bojātos fragmentus: `Sie singen nicht. — Spiller du?` → `Sie singen nicht. — De synger ikke.`; `Wen arbejder?` → `Hvem arbejder?`; `Vi zählt og tegner.` → `Vi regner og tegner.`. Citu paneļa saturu šī finding ietvaros nemainīt. |
| 63 | NELABOT | Atstāt `Hun går ud og arbejder.` DA pusē. Dāņu teikums ir korekts un atbilst kontekstam par meiteni; iespējamā problēma ir DE/source `Es`. DE = STRICT READ-ONLY, tāpēc DA netiek mainīts. |

## Copy/paste — agentam

```text
1	NEEDS_SOURCE_REVIEW	Nepieciešams pilns LV MASTER `kurssLesson1.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt.
2	NEEDS_SOURCE_REVIEW	Nepieciešams pilns LV MASTER `kurssLesson2.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt.
3	NEEDS_SOURCE_REVIEW	Nepieciešams pilns LV MASTER `kurssLesson3.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt.
4	NEEDS_SOURCE_REVIEW	Nepieciešams pilns LV MASTER `kurssLesson4.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt.
5	NEEDS_SOURCE_REVIEW	Nepieciešams pilns LV MASTER `kurssLesson5.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt.
6	NEEDS_SOURCE_REVIEW	Nepieciešams pilns LV MASTER `kurssLesson6.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt.
7	NEEDS_SOURCE_REVIEW	Nepieciešams pilns LV MASTER `kurssLesson7.legacyHtml` un pilns DA lauks vienā skatā; no saīsināta/daļēja snapshot pilnu COPY-ONLY HTML nevar droši apstiprināt.
8	NEEDS_SOURCE_REVIEW	Pilnais pronunciation panelis ir jāatjauno kā viens autoritatīvs DA HTML pret LV MASTER; pievienotajā failā LV MASTER pilnais HTML nav dots.
9	NEEDS_SOURCE_REVIEW	Pilnais consonants panelis ir jāatjauno kā viens autoritatīvs DA HTML pret LV MASTER; pievienotajā failā LV MASTER pilnais HTML nav dots.
10	NEEDS_SOURCE_REVIEW	Šis finding dublē Lesson 1 pilnā `legacyHtml` problēmu. Luna PROPOSED_DA ir latvisks; nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement.
11	NEEDS_SOURCE_REVIEW	Šis finding dublē Lesson 2 pilnā `legacyHtml` problēmu un apraksta vairākas kļūdas. Nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement.
13	NEEDS_SOURCE_REVIEW	Šis finding dublē Lesson 3 pilnā `legacyHtml` problēmu un apraksta vairākas kļūdas. Nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement.
14	NEEDS_SOURCE_REVIEW	Šis finding dublē Lesson 4 pilnā `legacyHtml` problēmu un apraksta vairākas kļūdas. Nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement.
15	NEEDS_SOURCE_REVIEW	Šis finding dublē Lesson 5 pilnā `legacyHtml` problēmu. Luna PROPOSED_DA ir latvisks; nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement.
16	NELABOT	Atstāt `Tal, flertal, omlyd og flertalsformer af substantiver`. Pievienotajā production snapshot Lesson 6 saturs tieši māca skaitļus, daudzskaitli, omlyd un lietvārdu daudzskaitļa formas, tāpēc subtitle semantiski atbilst faktiskajai lekcijai.
17	NEEDS_SOURCE_REVIEW	Šis finding dublē Lesson 6 pilnā `legacyHtml` problēmu un norāda uz plašu piesārņojumu. Nepieciešams pilns LV MASTER + DA HTML pirms pilna replacement.
46	NEEDS_SOURCE_REVIEW	Articles paneļa atsevišķi fragmenti jau tika laboti, bet šis umbrella-finding prasa pilnu autoritatīvu paneli. Pievienotajā failā pilnais LV MASTER/DA replacement nav pieejams.
61	NEEDS_SOURCE_REVIEW	Verb Basics paneļa pilnā struktūra un saturs jāparāda pret LV MASTER. Ar `...` snapshot nevar droši apstiprināt pilna HTML lauka COPY-ONLY replacement.
62	LABOT	Mērķēti aizvietot tikai šos trīs bojātos fragmentus: `Sie singen nicht. — Spiller du?` → `Sie singen nicht. — De synger ikke.`; `Wen arbejder?` → `Hvem arbejder?`; `Vi zählt og tegner.` → `Vi regner og tegner.`. Citu paneļa saturu šī finding ietvaros nemainīt.
63	NELABOT	Atstāt `Hun går ud og arbejder.` DA pusē. Dāņu teikums ir korekts un atbilst kontekstam par meiteni; iespējamā problēma ir DE/source `Es`. DE = STRICT READ-ONLY, tāpēc DA netiek mainīts.
```

## Apply robeža

- Apply tikai **Finding 62** un tikai trīs precīzos CURRENT→NEW fragmentus.
- **Finding 16** un **63** = NELABOT; production nemainīt.
- Pārējos **17 NEEDS_SOURCE_REVIEW** neaiztikt, līdz ir pilns LV MASTER un pilns DA lauks.
- DE lauki: **0 izmaiņas**.