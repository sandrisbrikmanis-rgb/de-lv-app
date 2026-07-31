# LV-DE sectionAccents labojums

**Datums:** 2026-07-31  
**Mērķis:** Novērst LV-DE `sectionAccents` neatbilstības (vizuālais noformējums), lai LV bāze atbilstu LT/ET/UK kvalitātes līmenim.

## Rezultāts

| Valoda | Pirms | Pēc |
|---|---:|---:|
| LV-DE | 2335 | **0** |
| LT-DE | 0 | 0 |
| ET-DE | 0 | 0 |
| UK-DE | 967 | 967 (nemainīts) |

## Veiktās darbības

- Izveidots `scripts/fix-lv-section-accents.js` (balstīts uz ET/LT pieeju)
- Sinhronizēti `sectionAccents` termini ar faktiskajām teksta formām (DE locījumi/konjugācijas, LV locījumi)
- Pārveidota `tip.leftBlocks` akcentu struktūra, kur nepieciešams
- **Nav mainīts** paskaidrojumu, piemēru, salīdzinājumu saturs — tikai `sectionAccents`

## Statistika (2. palaišana)

- Pārbaudīti termini: 20 053
- Automātiski salaboti: 303 (kopā abās palaišanās)
- Noņemti (bez droša atbilstoša vārda): 1 519 (1. palaišanā)
- Tip struktūras pārveidotas: 268

## Verifikācija

```bash
node scripts/validate-study-design.js --lang=lv
# totals.sectionAccentIssues: 0, pass: true
```
