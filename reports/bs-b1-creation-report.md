# BS–DE B1 — ģenerēšanas atskaite (GPT-5.6 Luna + batching)

**Datums:** 2026-08-07
**Modelis:** gpt-5.6-luna

## 1. Kopsavilkums

BS–DE B1 izveidots no LV–DE etalona (`data/b1.js`) ar C1 pilotā apstiprināto batch arhitektūru.

## 2. Datu apjoms

| Metrika | Vērtība |
|---|---:|
| B1 kartītes | 3367 |
| Study kartītes | 324 |
| standardStudy | 323 |
| minimalStudy | 1 |

## 3. API statistika

| Metrika | Vērtība |
|---|---:|
| Modelis | gpt-5.6-luna |
| Unikālās virknes | 9019 |
| Translation cache hits | 8290 |
| Cross-level cache hits | 0 |
| Sākotnējie batch requesti | 71 |
| Retry requesti | 15 |
| Retry attiecība | 21.1% |
| Kopējie API requesti | 86 |
| Vidējais batch izmērs | 8.5 virknes |
| Input tokeni | 48132 |
| Cached input tokeni | 0 |
| Output tokeni | 31994 |
| Reasoning tokeni | 16453 |
| Kopā tokeni | 80126 |
| Aptuvenās izmaksas (USD) | $0.0760 |

### Retry iemesli

- missing_id_split: 2

## 4. sectionAccents sinhronizācija

| Metrika | Vērtība |
|---|---:|
| Termini pārbaudīti | 4792 |
| Kartēti | 1346 |
| Izņemti | 127 |
| Kartītes mainītas | 214 |

## 5. Salīdzinājums

| Pieeja | Requesti |
|---|---:|
| Vecā A2 (1 virkne = 1 request) | ~4 254 |
| C1 Luna pilots | 46 |
| B1 (batch + dedup + cache) | 86 |
| Requestu samazinājums vs 1:1 | 88.2% |

## 6. Validācija

- **JavaScript sintakse:** PASS
- **data ≡ www:** PASS (identiski)
- **Ierakstu skaits:** 3367
- **DE READ-ONLY:** PASS
- **Valodu paritāte:** PASS (3367/3367)
- **Mojibake:** PASS
- **sectionAccents TECHNICAL:** 0 issues
- **LV atlikumi:** 0

## 7. Secinājums

B1 ģenerēšanas posms pabeigts. Pilns neatkarīgais lingvistiskais audits tiks veikts atsevišķi.

**NEKAS CITS NETIKA MAINĪTS.**
