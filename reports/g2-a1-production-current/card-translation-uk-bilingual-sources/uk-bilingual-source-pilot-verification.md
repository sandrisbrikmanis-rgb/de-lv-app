# Ukraina (`uk`) — divvalodu avotu pilotpārbaude

Ģenerēts: 2026-09-28

Secība: **UDEW → Lingea dict.com → dict.cc**. Production / MASTER / OWNER nav mainīti.

## Vai UDEW var būt galvenais avots?

**Jā** — kartīšu tulkojuma auditā UDEW ir reģistrēts kā `publicPrimary` / `reversePrimary` (`german-target-dictionary-search-overrides-32.json`), kolektors izmanto institucionālo secību (`uk` ∈ `INSTITUTIONAL_BILINGUAL_AUDIT_LANGS`). Piekļuve implementēta ar **`curl --http1.1`** (Playwright uz UDEW bieži `ERR_HTTP2_PROTOCOL_ERROR`).

## Avotu kopsavilkums

| # | Avots | Meklēšana / šķirklis | Verdict |
| --- | --- | --- | --- |
| 1 | [UDEW](https://udew.uni-leipzig.de/udew/ukrainisch_deutsch_online.htm) | Jā — `?input=` + Belege | **Galvenais** |
| 2 | [dict.com німецько-український](https://dict.com/німецько-укraїнський) | Nē — Cloudflare bot wall | **Nav izmantojams** |
| 3 | [dict.cc DE→UK](https://deuk.dict.cc/) / [UK→DE](https://ukde.dict.cc/) | Jā | **Rezerve** |

Pilna JSON tabula: [uk-bilingual-source-pilot-verification.json](./uk-bilingual-source-pilot-verification.json)

## UDEW piloti (DE→UK)

| Lemma | Status | Ukrainas varianti (izlase) | URL |
| --- | --- | --- | --- |
| Haus | TRANSLATION_PAIR_FOUND | будинок; дім; хата; корпус | https://udew.uni-leipzig.de/udew/ukrainisch_deutsch_online.htm?input=Haus |
| arbeiten | TRANSLATION_PAIR_FOUND | працювати; трудитися | https://udew.uni-leipzig.de/udew/ukrainisch_deutsch_online.htm?input=arbeiten |
| Kleingeld | TRANSLATION_PAIR_FOUND | дрібні гроші; розмінна монета | https://udew.uni-leipzig.de/udew/ukrainisch_deutsch_online.htm?input=Kleingeld |
| bewirten | TRANSLATION_PAIR_FOUND | частувати; пригощати | https://udew.uni-leipzig.de/udew/ukrainisch_deutsch_online.htm?input=bewirten |
| Grenzkonflikt | NOT_FOUND | — | https://udew.uni-leipzig.de/udew/ukrainisch_deutsch_online.htm?input=Grenzkonflikt |
| Machtgier | NOT_FOUND | — | https://udew.uni-leipzig.de/udew/ukrainisch_deutsch_online.htm?input=Machtgier |

## dict.cc (rezerve)

| Virziens | Atrasti | Nav atrasti |
| --- | --- | --- |
| DE→UK | Haus→будинок; arbeiten→працювати | Kleingeld, bewirten, Grenzkonflikt, Machtgier |
| UK→DE | будинок→Haus/Gebäude; працювати→arbeiten | pārējie piloti |
