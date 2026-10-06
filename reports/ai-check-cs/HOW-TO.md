# Kā palaist čehu pāru pārbaudi

Cursor AI neizsauc. Partiju failus ielīmē OWNER divos dažādu ražotāju AI. Katru partiju katram AI dod jaunā, tukšā sesijā. Otram AI nerāda pirmā atbildi.

1. Atver `batches/batch-001.md`. Nokopē visu failu, ieskaitot instrukciju un tabulu.
2. Ielīmē to pirmajā AI. Saglabā atbildi kā `reports/ai-check-cs/ai1/batch-001.csv`.
3. Atver jaunu sesiju otrā ražotāja AI. Ielīmē to pašu partiju. Saglabā atbildi kā `reports/ai-check-cs/ai2/batch-001.csv`.
4. Atkārto ar `batch-002.md`, `batch-003.md` un pārējām. Numurs faila vārdā sakrīt.
5. CSV kolonnas ir tieši `id,meaning,confidence`. `meaning` ir nozīmes numurs, `NONE` vai `UNSURE`. `confidence` ir `high`, `medium` vai `low`. Bez paskaidrojumu rindām.
6. `control-key.csv` partijās neliek un AI neielīmē.

Pēc abu atbilžu saglabāšanas salīdzinājumu palaiž lokāli:

`node scripts/compare-ai-translation-check.js`

Skripts pats neizvēlas slieksni un nemaina datus.
