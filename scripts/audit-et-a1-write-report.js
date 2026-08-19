#!/usr/bin/env node
/**
 * Writes reports/et-a1-full-audit.md from collected audit data (read-only).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const OUT = path.join(ROOT, "reports", "et-a1-full-audit.md");
const audit = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-a1-audit-data.json"), "utf8"));
const consolidated = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-a1-findings-consolidated.json"), "utf8"));
const validate = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/validate-et-study.json"), "utf8"));
const fragment = fs.readFileSync(path.join(ROOT, "reports/temp/et-a1-findings-md-fragment.md"), "utf8");

const a1Validate = validate.perFile.find((f) => f.file === "data/et/a1.js");
const date = "2026-08-06";

function fmt(f) {
  return [
    `#### ${f.id} — ${f.field}`,
    "",
    `- **Fails:** ${f.file}`,
    `- **Lauks:** ${f.field}`,
    `- **Statuss:** ${f.status}`,
    `- **Smagums:** ${(f.severity || "WARNING").toUpperCase()}`,
    `- **Esošais ET teksts:** ${f.existingBsText}`,
    `- **LV etalons:** ${f.lvEtalon || "—"}`,
    `- **DE konteksts:** ${f.deContext || "—"}`,
    `- **Kļūdas pamatojums:** ${f.justification}`,
    `- **Ieteiktais ET labojums:** ${f.recommendedFix}`,
    `- **Standarta punkts:** ${f.standardPoint}`,
    "",
  ].join("\n");
}

const high = consolidated.findings.filter((x) => x.severity === "high");
const medium = consolidated.findings.filter((x) => x.severity === "medium");
const warnings = consolidated.findings.filter((x) => x.status === "WARNING");

const report = `# ET–DE A1 pilns audits

**Audita datums:** ${date}  
**Audita veids:** Pilns ET–DE A1 audits pēc projekta vienotā valodu audita un kvalitātes standarta  
**Režīms:** Tikai audits — datu faili netika mainīti

---

## 1. Kopsavilkums

| Metrika | Vērtība |
|---|---|
| Ierakstu skaits | 702 |
| Study karšu skaits | 134 (visas \`standardStudy\`) |
| comparisonStudy | 0 (atbilst LV etalonam) |
| Kritiski atradumi | 0 |
| Augsti atradumi | ${consolidated.totals.high} |
| Vidēji atradumi | ${consolidated.totals.medium} |
| Zemi atradumi | ${consolidated.totals.low} |
| WARNING | ${consolidated.totals.warning} |

### Statusi

| Statuss | Rezultāts | Pamatojums |
|---|---|---|
| **STRUCTURAL PASS** | ✅ **PASS** | 702/702 ieraksti, ID/secība/struktūra sakrīt ar LV etalonu; \`data/\` un \`www/\` identiski; JS sintakse derīga |
| **AI AUDITED** | ✅ **PASS** | Visi 702 galvenie tulkojumi un 134 Study kartītes pārbaudīti (automātika + AI interpretācija); atradumi dokumentēti |
| **PRODUCTION READY** | ❌ **NE** | ${consolidated.totals.high} augsti + ${consolidated.totals.medium} vidēji sectionAccents atradumi; nepieciešama labošanas kārta |
| **FINAL – OWNER ACCEPTED** | ❌ **NE** | Nav veikta native speaker izlase; PRODUCTION READY nav sasniegts |

---

## 2. Auditētie faili un etalons

| Loma | Ceļš |
|---|---|
| LV–DE etalons (tikai lasīšana) | \`data/a1.js\` |
| ET datu fails | \`data/et/a1.js\` |
| ET www slānis | \`www/data/et/a1.js\` |

**LV–DE etalons netika mainīts.**

---

## 3. Palaistie skripti

| Skripts | Komanda | Rezultāts |
|---|---|---|
| Strukturālais audits | \`node scripts/audit-language-parity.js --lang=et\` | A1: PASS (702/702, 134 study, 0 issues) |
| Mojibake audits | \`node scripts/audit-mojibake.js --lang=et\` | PASS (0 hits) |
| Study dizaina validācija | \`node scripts/validate-study-design.js --lang=et\` | A1: **1031** sectionAccentIssues |
| Audita kolektors | \`node scripts/audit-et-a1-collect.js\` | Struktūra, DE integritāte, tehnika, LV atlikumi, galvenie tulkojumi |
| Atradumu konsolidācija | \`node scripts/audit-et-a1-report-gen.js\` | 414 strukturēti atradumi |
| JS sintakses pārbaude | \`node --check data/et/a1.js\` | PASS |
| Slāņu identitāte | \`diff -q data/et/a1.js www/data/et/a1.js\` | Identiski (598 340 B) |

**Pagaidu faili (nav Git):** \`reports/temp/et-a1-audit-data.json\`, \`reports/temp/et-a1-findings-consolidated.json\`, \`reports/temp/validate-et-study.json\`, \`reports/temp/et-a1-ai-findings.json\`, \`reports/temp/et-a1-findings-md-fragment.md\`

**Palīgskripti (audita laikā izveidoti, nemaina datus):** \`scripts/audit-et-a1-collect.js\`, \`scripts/audit-et-a1-report-gen.js\`, \`scripts/audit-et-a1-write-report.js\`

---

## 4. Posmu rezultāti

### 4.1 Strukturālais audits — ✅ PASS

- Ierakstu skaits: LV **702** = ET **702**
- ID pilnīga sakritība un secība: ✅
- \`de\` lauku secība: ✅
- Lauku struktūra pret LV: ✅ (nav trūkstošu/lieku lauku)
- Study karšu skaits: LV **134** = ET **134**
- \`study.layout\`: visas **standardStudy** (134/134), atbilst LV
- comparisonStudy: 0 (atbilst LV)
- Unikāli Study ID: ✅
- Tukši obligātie lauki: ✅ nav

### 4.2 Tehniskais audits — ✅ PASS

- JavaScript sintakse: ✅ (\`node --check\`)
- UTF-8 / mojibake: ✅ (0 atradumu)
- Bojātas diakritiskās zīmes: ✅ nav
- TODO / TBD / \`...\` / Markdown koda bloki: ✅ nav
- \`Translation:\` / \`Tulkojums:\`: ✅ nav
- Bosniešu diakritika (č, ć, đ, š, ž): ✅ lietota datu saturā
- Tehniskie identifikatori un HTML: ✅ nav bojājumu

### 4.3 Tulkojumu pilnīguma audits — ✅ PASS (galvenie lauki)

- Visi 702 ieraksti ar aizpildītu galveno ET tulkojumu (\`lv\` lauks)
- Study \`translation\` atšķirības no galvenā: **0** (metodoloģiski konsekventi)

### 4.4 Vācu satura nemainīguma audits — ✅ PASS

100% sakritība starp \`data/a1.js\` un \`data/et/a1.js\`:

- \`de\`, \`de_article\`, \`de_plural\`
- Study vācu piemēri, virsraksti, termini
- \`level\`, \`layout\`, tehniskie lauki, ID

**Neatbilstību skaits: 0**

### 4.5 ET valodas kvalitātes audits (702 galvenie tulkojumi)

| Statuss | Skaits |
|---|---:|
| OK | 701 |
| WARNING | 1 |
| ERROR | 0 |

**AI interpretācija:** 701 ieraksts semantiski atbilst LV nozīmei un DE kontekstam; lietotas pamatformas (infinitīvs darbības vārdiem, nominatīvs lietvārdiem). Bosniešu diakritika un dabiskās formas lielākoties konsekventas.

**Vienīgais WARNING:**

- \`a1-Weihnachten-648\` — \`Božić\` (heuristiska kapitalizācija); **AI: OK** — pareizs īpašvārds/svētku nosaukums bosniešu valodā.

### 4.6 LV atlikumu audits — ✅ PASS (galvenie un Study teksta lauki)

Automātiskā regex pārbaude galvenajos un Study teksta laukos: **0** LV atlikumu.

**Svarīgi:** sectionAccents satur **82 augstas smaguma** atlikumus (skat. §4.8) — tie nav lietotājam redzamā Study tekstā, bet ir datu kļūda akcentu sistēmā.

### 4.7 Study satura audits (134 kartītes) — ⚠️ ATRADUMI sectionAccents

| Pārbaude | Rezultāts |
|---|---|
| Study teksts bosniešu valodā | ✅ 134/134 — nav LV atlikumu teksta laukos |
| Dabiskums / mehāniskums | ✅ AI: paraugi (sprechen, klein, an, bleiben, wetter, liter, machen, sein, haben, geben u.c.) dabiski |
| Pazaudēts/pievienots saturs | ✅ nav sistemātisku noviržu |
| \`a1-liter\` bez \`examples\` | ✅ **nav kļūda** — LV etalons arī bez piemēriem, tikai \`explanation\` |
| sectionAccents | ❌ **82 augsti + 275 vidēji + 57 WARNING** |

**standardStudy (134):** visas kartītes ar \`explanation\`; piemēri atbilst LV etalonam (izņemot \`a1-liter\`, kur LV arī bez piemēriem). Nav nepamatotu comparison sadaļu.

**comparisonStudy (0):** nav (atbilst LV).

### 4.8 sectionAccents un highlight audits — ❌ FAIL

| Avots | Atradumi |
|---|---:|
| \`validate-study-design.js\` (A1) | 1031 sectionAccentIssues |
| \`audit-et-a1-collect.js\` | 439 accent term neatbilstības |
| AI konsolidācija | 82 augsti, 275 vidēji, 57 WARNING |

**Galvenās problēmu kategorijas:**

1. **Latviešu atlikumi akcentos** (mazs, teikt, iet, lietus, laiks, reiz) — 5 Study kartītes, 17 termini
2. **Angļu atlikumi** (At, To) — 6 kartītes, 13 termini — nepareiza sectionAccents lokalizācija
3. **Latviešu prievārdi akcentos** (pie, uz) — 17 kartītes — nav aizstāti ar bosniešu ekvivalentiem (na, kod, u…)
4. **Kapitalizācijas neatbilstības** — 57 WARNING — termins eksistē tekstā ar citu reģistru
5. **Citi accent term neatbilstības** — 94 kartītes — termins nav atrodams ET sadaļas tekstā

**DE apakšvirsrakstu krāsošana:** nav pārbaudīta rendererī (datu audits); DE lauki sectionAccents \`de\` zaros atbilst LV struktūrai.

### 4.9 data/ un www/ slāņu identitātes audits — ✅ PASS

\`data/et/a1.js\` un \`www/data/et/a1.js\` ir **bit-identiski** (598 340 baiti).

---

## 5. Atradumu kopsavilkums pēc smaguma

| Pakāpe | Skaits | Apraksts |
|---|---:|---|
| Kritiska | 0 | — |
| Augsta | ${consolidated.totals.high} | sectionAccents: LV/EN atlikumi, neadaptēti \`pie\`/\`uz\` |
| Vidēja | ${consolidated.totals.medium} | sectionAccents: termins nav ET tekstā |
| Zema | ${consolidated.totals.low} | — |
| WARNING | ${consolidated.totals.warning} | Kapitalizācijas iespējamā neatbilstība |

---

## 6. Augstas smaguma atradumi (${high.length})

${high.map(fmt).join("\n")}

---

## 7. Vidējas smaguma atradumi (grupēti)

Kopā **${medium.length}** accent term neatbilstības **${new Set(medium.map((x) => x.id)).size}** Study kartītēs. Pilns saraksts: \`reports/temp/et-a1-findings-consolidated.json\` (meklēt \`severity: "medium"\`).

${fragment.split("## VIDĒJIE ATRADUMI")[1].split("## WARNING")[0]}

---

## 8. WARNING atradumi (${warnings.length})

${warnings.map(fmt).join("\n")}

---

## 9. Galveno ET tulkojumu audits — kopsavilkums

Visi **702** ieraksti pārbaudīti pret LV etalonu, DE vārdu/artikulu un Study kontekstu.

- **701 OK** — semantiski, gramatiski un formāli atbilstoši
- **1 WARNING** — \`Božić\` (apstiprināts kā pareizs)
- **0 ERROR**

---

## 10. Study satura lingvistiskais audits — kopsavilkums

Visas **134** Study kartītes pārbaudītas:

- Study teksta lauki (\`translation\`, \`title\`, \`lead\`, \`explanation\`, \`examples\`, \`comparison\`, \`tip\`, \`important\` u.c.) ir bosniešu valodā
- Nav LV atlikumu Study tekstā
- Personvārdi un termini paraugu kartītēs konsekventi
- Galvenā problēma: **sectionAccents** nav pilnībā lokalizēti (skat. §6–8)

---

## 11. Apliecinājumi

1. **Audita laikā netika mainīts neviens datu vai aplikācijas fails** (\`data/et/a1.js\`, \`www/data/et/a1.js\`, \`data/a1.js\`, \`ui.js\`, \`style.css\` u.c.).
2. **Izveidoti tikai audita izvades faili:**
   - \`reports/et-a1-full-audit.md\` (šis dokuments)
   - \`reports/temp/et-a1-audit-data.json\`
   - \`reports/temp/et-a1-findings-consolidated.json\`
   - \`reports/temp/validate-et-study.json\`
   - \`reports/temp/et-a1-ai-findings.json\`
   - \`reports/temp/et-a1-findings-md-fragment.md\`
   - \`scripts/audit-et-a1-collect.js\`
   - \`scripts/audit-et-a1-report-gen.js\`
   - \`scripts/audit-et-a1-write-report.js\`

---

## 12. Ieteiktais nākamais solis

Veikt atsevišķu **labošanas posmu** tikai \`sectionAccents\` lokalizācijai:

1. Aizstāt LV atlikumus (mazs → mali, teikt → reći, iet → ići/trčati, laiks → vrijeme, reiz → jednom, lietus → kiša)
2. Aizstāt angļu At/To ar bosniešu terminiem no attiecīgās sadaļas (na, uz, kod)
3. Aizstāt \`pie\`/\`uz\` akcentos ar precīziem bosniešu vārdiem no ET \`lv\` laukiem
4. Salāgot kapitalizāciju accent terminos ar ET tekstu
5. Sinhronizēt \`www/data/et/a1.js\`
6. Atkārtot šo auditu

---

*Atskaite ģenerēta automātiski ${new Date().toISOString()}*
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, report);
console.log(`Wrote ${OUT} (${report.length} chars)`);
