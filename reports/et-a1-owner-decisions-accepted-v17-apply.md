# ET–DE A1 — OWNER DECISIONS — ACCEPTED v1.7 (apply source)

**Standard:** PROJECT_LANGUAGE_MASTER_STANDARD.md v1.7
**Audit PR:** #602
**DE:** STRICT READ-ONLY

## Apply table (11 LABOT)

| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |
|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|
| ET-A1-0001 | a1-also | study.examples[1].lv | sa oled haige, seepärast sa ei lähe tööle. | sa oled haige, seepärast ei lähe sa tööle. | MEDIUM | NATURALNESS | LABOT | sa oled haige, seepärast ei lähe sa tööle. | Vārdu kārtība pēc seepärast. |
| ET-A1-0004 | a1-der | study.examples[1].lv | buss tuleb. | Buss sõidab. | MEDIUM | SEMANTICS | LABOT | Buss sõidab. | tuleb ≠ brauc. |
| ET-A1-0005 | a1-fussball-study | study.examples[1].lv | Jalgpall on aias. | Jalgpall asub aias. | MEDIUM | SEMANTICS | LABOT | Jalgpall asub aias. | asub = atrodas. |
| ET-A1-0006 | a1-heißen | etMain | nimi olema • tähendama | nime kandma • tähendama | MEDIUM | NATURALNESS | LABOT | nime kandma • tähendama | etMain → lv |
| ET-A1-0013 | a1-lang | study.examples[5].lv | kogu päev (otsa). | kogu päeva (otsa). | MEDIUM | SEMANTICS | LABOT | kogu päeva (otsa). | Ilguma konstrukcija. |
| ET-A1-0024 | a1-sitzen | study.examples[2].lv | ta istub ukse juures. | ta seisab ukse juures. | HIGH | SEMANTICS | LABOT | ta seisab ukse juures. | LV MASTER stāv. |
| ET-A1-0025 | a1-sitzen | study.examples[3].lv | kass istub diivanil. | kass lamab diivanil. | HIGH | SEMANTICS | LABOT | kass lamab diivanil. | LV MASTER guļ. |
| ET-A1-0026 | a1-stehen | study.examples[2].lv | ta seisab laua ääres. | ta istub laua ääres. | HIGH | SEMANTICS | LABOT | ta istub laua ääres. | LV MASTER sēž. |
| ET-A1-0027 | a1-stehen | study.examples[3].lv | raamat on laual. | raamat seisab laual. | MEDIUM | SEMANTICS | LABOT | raamat seisab laual. | stehen semantika. |
| ET-A1-0028 | a1-um | study.examples[3].lv | ma õpin, et saksa keelt rääkida. | ma õpin saksa keelt rääkima. | MEDIUM | NATURALNESS | LABOT | ma õpin saksa keelt rääkima. | -ma infinitīvs. |
| ET-A1-0029 | a1-vor | study.examples[2].lv | on viie minuti pärast kaheksa. | Kell on viis minutit kaheksast puudu. | MEDIUM | SEMANTICS | LABOT | Kell on viis minutit kaheksast puudu. | LV MASTER bez piecām astoņi. |
