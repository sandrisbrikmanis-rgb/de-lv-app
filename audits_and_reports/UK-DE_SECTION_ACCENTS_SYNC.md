# UK-DE sectionAccents sinhronizācija ar LV-DE modeli

**Datums:** 2026-07-31  
**Skripts:** `scripts/fix-uk-section-accents.js` (identisks algoritms kā `fix-lv-section-accents.js`)

## Rezultāts

| Metrika | Vērtība |
|---|---|
| Neatbilstības **pirms** | **967** |
| Neatbilstības **pēc** | **0** |
| Kartītes ar `sectionAccents` izmaiņām | **575** |
| Termini automātiski salaboti | 217 |
| Termini noņemti (bez droša atbilstoša vārda) | 560 |
| Tip struktūras pārveidotas | 216 |

## Salīdzinājums ar citām valodām (pēc labojuma)

| Valoda | `sectionAccents` neatbilstības |
|---|---:|
| LV-DE | 0 |
| LT-DE | 0 |
| ET-DE | 0 |
| **UK-DE** | **0** |

## Kas tika mainīts

- **Tikai** `study.sectionAccents` lauki
- Highlight termini pielāgoti faktiskajām teksta formām (DE konjugācijas/locījumi, UK locījumi)
- `tip.leftBlocks` akcentu struktūra pārveidota, kur nepieciešams

## Kas netika mainīts

- `explanation`, `examples`, `comparison`, `tip`, `important`, `translation` saturs
- Kartīšu struktūra (`layout`, lauku hierarhija)
- Vācu saturs

## Piemēri

| Karte | Pirms | Pēc |
|---|---|---|
| `sprechen` | `sprechen` | `spreche` |
| `holen` | `holen` | `hole` |
| UK tulkojums | `говорити` (neatbilst `говоримо`) | `говоримо` |

## Verifikācija

```bash
node scripts/validate-study-design.js --lang=uk
# totals.sectionAccentIssues: 0, pass: true, rootWwwMismatches: 0
```
