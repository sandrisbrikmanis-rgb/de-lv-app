# DA–DE Kurss — pilns Luna audits — README

## Ko pārbauda

- Visas **21 lekcijas** + 6 statiskie paneļi + UI + training kartītes
- **1264** DA lokalizācijas lauki (arī tie, kas iepriekš nebija findings)
- legacyHtml, virsraksti, subtitri, intro, vārdnīca, gramatika, piemēri, izruna, exercise prompt/task, tulkojumu kartītes
- LV/CS/BS u.c. atlikumi, LV izrunas transkripcijas, personvārdu lokalizācija
- Struktūra pret LV MASTER; validate-kurss.js; data↔www mirror
- **GPT-5.6 Luna** semantika, gramatika, dabiskums pret DE (DE nemainīt)

## Faili

| Fails | Loma |
|-------|------|
| `scripts/audit-da-kurss-full.js` | Deterministika + merge + atskaite |
| `scripts/audit-da-kurss-full-luna-api.js` | Luna API pa batch |
| `reports/da-kurss-full-audit.md` | Cilvēkam lasāma atskaite |
| `reports/temp/da-kurss-full-audit.json` | Mašīnlasāms pilns rezultāts |
| `reports/temp/da-kurss-full-audit-luna/batch-*` | Luna batch + findings |

## OWNER workflow

1. Izlasīt `da-kurss-full-audit.md` vai JSON.
2. Apstiprināt/koriģēt **PROPOSED_DA**.
3. Atgriezt lēmumus — es veicu COPY-ONLY labojumus (kā section-pack workflow).

Statusi: `LABOT | NELABOT | FALSE_POSITIVE | NEEDS_SOURCE_REVIEW`
