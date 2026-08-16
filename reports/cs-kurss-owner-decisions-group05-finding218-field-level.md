# CS–DE Kurss — Finding #218 field-level OWNER mapping (`kurssArticlesLesson`)

Avots: `reports/cs-kurss-owner-decisions-group05.md` (finding 218)  
DE = STRICT READ-ONLY. Mainīt tikai CS native fragmentus; vācu daļas saglabāt no LV reference.

| # | ID / path | Status | CURRENT | NEW |
|---:|---|---|---|---|
| 218.01 | `kurssArticlesLesson/example[0]` | **LABOT** | `Der Tisch - stol` | `Der Tisch — stůl` |
| 218.02 | `kurssArticlesLesson/example[4]` | **LABOT** | `-er → bieži DER, piemēram: der Computer, der Lehrer <span class="artikuli-note">Ale ne vždy</span>` | `-er → často DER, např.: der Computer, der Lehrer <span class="artikuli-note">ale ne vždy</span>` |
| 218.03 | `kurssArticlesLesson/example[9]` | **LABOT** | `Značky aut → pasuje na BMW, pasuje na Mercedes` | `Značky aut → der BMW, der Mercedes` |
| 218.04 | `kurssArticlesLesson/example[16]` | **LABOT** | `Srpen — srpen` | `der August — srpen` |
| 218.05 | `kurssArticlesLesson/example[25]` | **LABOT** | `-ion→ zemřít národ` | `-ion → die Nation` |
| 218.06 | `kurssArticlesLesson/example[29]` | **LABOT** | `Motocyklové značky → Harley-Davidson, Yamaha` | `Motocyklové značky → die Harley-Davidson, die Yamaha` |
| 218.07 | `kurssArticlesLesson/h4[2]` | **LABOT** | `<span>♀</span>Často UMŘI` | `<span>♀</span>Často DIE` |
| 218.08 | `kurssArticlesLesson/explain[3]` | **LABOT** | `U některých slov nelze článek spolehlivě určit podle koncovky nebo českýé rodiny. Nejlépe se studují společně s článkem.` | `U některých slov nelze článek spolehlivě určit podle koncovky nebo české rodiny. Nejlépe se studují společně s článkem.` |

## NELABOT (pareizs CS saturs)

- `kurssArticlesLesson/h3` — `Články`
- `kurssArticlesLesson/info[0]` — intro info (jau pilnībā čehu)
- `kurssArticlesLesson/h4[0,1,3,4]`, `h5[*]`, `explain[0–2]` — pareizs čehu saturs
- Visi pārējie `example[N]`, kur CS tulkojums ir pareizs un nav LV atliegumu

## FALSE_POSITIVE (tikai stils, nav kļūda)

- `example[1–3, 13–15, 17–24, 26–28, 30–67]` ar ` - ` vietā ` — ` — CS vārds ir pareizs, stilistiska atšķirība

## Kopsavilkums

- LABOT: **8**
- NELABOT: pārējais pareizais saturs
- FALSE_POSITIVE: defises stils (`-` vs `—`) bez nozīmes kļūdas
- DE changes: **0** (tikai DE fragmentu sinhronizācija no LV reference, ja trūka)
