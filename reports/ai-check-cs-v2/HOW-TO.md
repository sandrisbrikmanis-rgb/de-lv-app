# Kā palaist čehu pāru pārbaudi (v2)

Cursor AI neizsauc. Partiju failus ielīmē īpašnieks trīs dažādu ražotāju AI: Anthropic, Gemini un ChatGPT. Katru partiju katram AI dod jaunā, tukšā sesijā. Otram AI nerāda pirmā atbildi.

Katram AI ir sava nozīmju secība. Versija rotē:

- partija 1: Anthropic = A, Gemini = B, ChatGPT = C
- partija 2: Anthropic = B, Gemini = C, ChatGPT = A
- partija 3: Anthropic = C, Gemini = A, ChatGPT = B
- tālāk tā pati nobīde

1. Atver `batches/batch-001-A.md`, `batch-001-B.md` vai `batch-001-C.md` atbilstoši ražotājam. Nokopē visu failu, ieskaitot instrukciju un tabulu.
2. Saglabā atbildi kā CSV ar kolonnām `id,meaning,confidence`.
   - `reports/ai-check-cs-v2/ai-anthropic/batch-001.csv`
   - `reports/ai-check-cs-v2/ai-gemini/batch-001.csv`
   - `reports/ai-check-cs-v2/ai-chatgpt/batch-001.csv`
3. `meaning` ir parādītais nozīmes numurs, `NONE` vai `UNSURE`. `confidence` ir `high`, `medium` vai `low`. Bez paskaidrojumiem.
4. Atkārto ar pārējām partijām. Numurs faila vārdā sakrīt. `keys/` AI nesaņem.

Ja jātaupa izsaukumi, vispirms palaiž divus AI. Trešajam dod tikai rindas, kurās abi nesakrīt vai kāds saka `NONE` vai `UNSURE`. Salīdzināšanas skripts šīs rindas saliek `third-pass/batch-001.md` un tālāk, pa 100 rindām.

Pēc atbildēm:

`node reports/ai-check-cs-v2/scripts/compare-ai-translation-check.js`

Skripts pārvērš parādīto numuru atpakaļ kanoniskajā numurā, slieksni neizvēlas un `data/` neraksta. Vienprātība ir tad, ja vismaz divi AI dod vienu kanonisko numuru. `AI_CONSENSUS_OK` nav vārdnīcas apstiprinājums.
