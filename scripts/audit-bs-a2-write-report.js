#!/usr/bin/env node
/**
 * Writes reports/bs-a2-full-audit.md from collected audit data (read-only).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const OUT = path.join(ROOT, "reports/bs-a2-full-audit.md");
const audit = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/bs-a2-audit-data.json"), "utf8"));
const consolidated = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/bs-a2-findings-consolidated.json"), "utf8"));
const validate = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/validate-bs-study.json"), "utf8"));
const fragment = fs.readFileSync(path.join(ROOT, "reports/temp/bs-a2-findings-md-fragment.md"), "utf8");

const a2Validate = validate.perFile.find((f) => f.file === "data/bs/a2.js");
const bsSize = fs.statSync(path.join(ROOT, "data/bs/a2.js")).size;
const date = "2026-08-07";

function fmt(f) {
  return [
    `#### ${f.id} — \`${f.field}\``,
    "",
    `- **Fails:** ${f.file}`,
    `- **Lauks:** ${f.field}`,
    `- **Statuss:** ${f.status}`,
    `- **Smagums:** ${(f.severity || "WARNING").toUpperCase()}`,
    `- **Esošais BS teksts:** ${f.existingBsText}`,
    `- **LV etalona konteksts:** ${f.lvEtalon || "—"}`,
    `- **DE konteksts:** ${f.deContext || "—"}`,
    `- **Kļūdas pamatojums:** ${f.justification}`,
    `- **Ieteiktais BS labojums:** ${f.recommendedFix}`,
    `- **Standarta punkts:** ${f.standardPoint}`,
    "",
  ].join("\n");
}

const high = consolidated.findings.filter((x) => x.severity === "high");
const medium = consolidated.findings.filter((x) => x.severity === "medium");
const warnings = consolidated.findings.filter((x) => x.severity === "low" || x.status === "WARNING");

const report = `# BS–DE A2 pilns audits

**Audita datums:** ${date}  
**Audita veids:** Pilns BS–DE A2 audits pēc projekta vienotā valodu audita un kvalitātes standarta  
**Režīms:** Tikai audits — datu faili netika mainīti

---

## 1. Kopsavilkums

| Metrika | Vērtība |
|---|---|
| Ierakstu skaits | 1 640 |
| Study karšu skaits | 231 (207 \`standardStudy\`, 24 \`minimalStudy\`) |
| comparisonStudy | 0 (atbilst LV etalonam) |
| Kritiski atradumi | 1 (vācu DE akcentu neatbilstība) |
| Augsti atradumi | ${consolidated.totals.high} |
| Vidēji atradumi | ${consolidated.totals.medium} |
| WARNING | ${consolidated.totals.warning} |

### Statusi

| Statuss | Rezultāts | Pamatojums |
|---|---|---|
| **STRUCTURAL PASS** | ✅ **PASS** | 1 640/1 640 ieraksti, ID/secība/struktūra sakrīt ar LV etalonu; \`data/\` un \`www/\` identiski; JS sintakse derīga |
| **AI AUDITED** | ✅ **PASS** | Visi 1 640 galvenie tulkojumi un 231 Study kartītes pārbaudīti (automātika + AI interpretācija); atradumi dokumentēti |
| **sectionAccents TECHNICAL** | ✅ **PASS** | \`validate-study-design.js\` A2: **0** sectionAccentIssues |
| **sectionAccents PEDAGOGICAL** | ⚠️ **PASS WITH WARNINGS** | 15 augsti LV/EN atlikumi akcentos; 4 vidēji; 53 kapitalizācijas WARNING |
| **DE READ-ONLY** | ❌ **FAIL** | 1 kartīte (\`a2-holen\`) — DE \`sectionAccents\` atšķiras no LV etalona |
| **PRODUCTION READY** | ❌ **NĒ** | DE integritātes neatbilstība + sectionAccents semantiskie atradumi |
| **FINAL – OWNER ACCEPTED** | ❌ **NĒ** | Nav native speaker izlases; PRODUCTION READY nav sasniegts |

---

## 2. Auditētie faili un etalons

| Loma | Ceļš |
|---|---|
| LV–DE etalons (tikai lasīšana) | \`data/a2.js\` |
| BS datu fails | \`data/bs/a2.js\` |
| BS www slānis | \`www/data/bs/a2.js\` |

**LV–DE etalons netika mainīts.**

---

## 3. Palaistie skripti

| Skripts | Komanda | A2 rezultāts |
|---|---|---|
| Strukturālais audits | \`node scripts/audit-language-parity.js --lang=bs\` | PASS (1 640/1 640, 231 study, 0 issues) |
| Mojibake audits | \`node scripts/audit-mojibake.js --lang=bs\` | PASS (0 hits) |
| Study dizaina validācija | \`node scripts/validate-study-design.js --lang=bs\` | A2: **0** sectionAccentIssues |
| DE atbilstība | \`node scripts/verify-bs-de-compliance.js\` | PASS (0 mismatches galvenajos laukos) |
| Tulkošanu audits | \`node scripts/audit-translations.js --lang=bs\` | 2 lv/translation neatbilstības |
| Study kartīšu audits | \`node scripts/audit-study-cards.js --lang=bs\` | 47/231 pass (LV etalons arī 47/231) |
| Audita kolektors | \`node scripts/audit-bs-a2-collect.js\` | Struktūra, DE, tehnika, LV atlikumi, galvenie tulkojumi |
| Atradumu konsolidācija | \`node scripts/audit-bs-a2-report-gen.js\` | ${consolidated.totals.findings} strukturēti atradumi |
| JS sintakses pārbaude | \`node --check data/bs/a2.js\` | PASS |
| Slāņu identitāte | \`diff -q data/bs/a2.js www/data/bs/a2.js\` | Identiski (${bsSize.toLocaleString()} B) |

**Pagaidu faili (nav Git):** \`reports/temp/bs-a2-audit-data.json\`, \`reports/temp/bs-a2-findings-consolidated.json\`, \`reports/temp/validate-bs-study.json\`, \`reports/temp/bs-a2-findings-md-fragment.md\`

**Palīgskripti (audita laikā izveidoti, nemaina datus):** \`scripts/audit-bs-a2-collect.js\`, \`scripts/audit-bs-a2-report-gen.js\`, \`scripts/audit-bs-a2-write-report.js\`

---

## 4. Posmu rezultāti

### 4.1 Strukturālais audits — ✅ PASS

- Ierakstu skaits: LV **1 640** = BS **1 640**
- ID pilnīga sakritība un secība: ✅
- \`de\` lauku secība: ✅
- Lauku struktūra pret LV: ✅
- Study karšu skaits: LV **231** = BS **231**
- \`study.layout\`: 207 \`standardStudy\` + 24 \`minimalStudy\` (atbilst LV)
- comparisonStudy: 0 (atbilst LV)
- Unikāli Study ID: ✅
- Tukši obligātie lauki: ✅ nav

### 4.2 Tehniskais audits — ✅ PASS

- JavaScript sintakse: ✅
- UTF-8 / mojibake: ✅ (0 atradumu)
- TODO / TBD / \`...\`: ✅ nav
- Bosniešu diakritika: ✅ lietota
- \`studyObjectNoRenderable\`: 18 (identisks LV — \`minimalStudy\` kartītes)

### 4.3 Tulkojumu pilnīguma audits — ✅ PASS (galvenie lauki)

- Visi 1 640 ieraksti ar aizpildītu galveno BS tulkojumu
- Study \`translation\` atšķirības: 2 nelielas (\`Bank\`, \`Leiter\` — papildu nozīmes study.translation)

### 4.4 Vācu satura nemainīguma audits — ⚠️ 1 ATRADUMS

Galvenie lauki (\`de\`, \`de_article\`, \`de_plural\`, Study DE piemēri): **100% sakritība** (verify-bs-de-compliance: 0 mismatches).

**Kritiska neatbilstība:**

- **\`a2-holen\`** — BS \`sectionAccents.examples[1].green\` satur \`abholen\`, bet LV etalons satur \`holen\`. Vācu DE lauks \`sectionAccents\` ir mainīts pret LV etalonu (READ-ONLY pārkāpums).

### 4.5 BS valodas kvalitātes audits (1 640 galvenie tulkojumi)

| Statuss | Skaits |
|---|---:|
| OK | 1 639 |
| WARNING | 1 |
| ERROR | 0 |

**Vienīgais WARNING:** \`a2-aschenputtel\` — \`Pepeljuga\` (heuristiska kapitalizācija); **AI: OK** — pareizs īpašvārds.

### 4.6 LV atlikumu audits — ⚠️ ATRADUMI akcentu datos

Galvenie un Study **teksta** lauki: **0** LV atlikumu.

**Legacy/akcentu laukos:** 10 atradumi (\`accents\`, \`sectionAccents\` — \`braukt\`, \`vest\`, \`braukt ar vilcienu\` u.c.).

### 4.7 Study satura audits (231 kartīte)

| Pārbaude | Rezultāts |
|---|---|
| Study teksts bosniešu valodā | ✅ 231/231 — nav LV atlikumu teksta laukos |
| Study kartīšu noteikumi (audit-study-cards) | 47/231 pass — **identisks LV etalonam** (47/231) |
| \`minimalStudy\` | 24 kartītes — atbilst LV |
| \`standardStudy\` | 207 kartītes — atbilst LV |

### 4.8 sectionAccents audits

| Avots | Atradumi |
|---|---:|
| \`validate-study-design.js\` (tehniskais) | **0** sectionAccentIssues |
| \`audit-bs-a2-collect.js\` | 65 accent term neatbilstības |
| AI konsolidācija | 15 augsti, 4 vidēji, 53 WARNING |

**Galvenās problēmu kategorijas:**

1. **Angļu atlikumi** (\`On\`, \`In\`, \`To\`) — 9 termini, 6 kartītes
2. **Latviešu atlikumi** (\`uz\`, \`Uz\`, \`viss\`) — 6 termini, 4 kartītes
3. **Legacy \`accents\` lauki** ar LV vārdiem — 4 kartītes
4. **Kapitalizācijas WARNING** — 53 termini
5. **DE akcentu maiņa** — \`a2-holen\` (\`holen\` → \`abholen\`)

### 4.9 data/ un www/ slāņu identitātes audits — ✅ PASS

\`data/bs/a2.js\` un \`www/data/bs/a2.js\` ir **bit-identiski**.

---

## 5. Atradumu kopsavilkums pēc smaguma

| Pakāpe | Skaits | Apraksts |
|---|---:|---|
| Kritiska | 1 | DE \`sectionAccents\` maiņa (\`a2-holen\`) |
| Augsta | ${consolidated.totals.high} | LV/EN atlikumi sectionAccents datos |
| Vidēja | ${consolidated.totals.medium} | Accent term nav BS tekstā |
| WARNING | ${consolidated.totals.warning} | Kapitalizācijas iespējamā neatbilstība |

---

## 6. Augstas smaguma atradumi (${high.length})

${high.map(fmt).join("\n")}

---

## 7. Vidējas smaguma atradumi (${medium.length})

${medium.map(fmt).join("\n")}

---

## 8. WARNING atradumi (izlase — pirmie 30 no ${warnings.length})

${warnings.slice(0, 30).map(fmt).join("\n")}

*Pilns WARNING saraksts: \`reports/temp/bs-a2-findings-consolidated.json\` (severity: \`low\`)*

---

## 9. Galveno BS tulkojumu audits — kopsavilkums

Visi **1 640** ieraksti pārbaudīti pret LV etalonu un DE kontekstu.

- **1 639 OK** — semantiski un formāli atbilstoši
- **1 WARNING** — \`Pepeljuga\` (apstiprināts kā pareizs īpašvārds)
- **0 ERROR**

---

## 10. Study satura lingvistiskais audits — kopsavilkums

Visas **231** Study kartītes pārbaudītas:

- Study teksta lauki ir bosniešu valodā
- Nav LV atlikumu Study tekstā
- Study kartīšu noteikumu atbilstība LV etalonam: **47/231** (identiska LV)
- Galvenā problēma: **sectionAccents** semantiskie atradumi (skat. §6–8) un 1 DE akcentu neatbilstība

---

## 11. Salīdzinājums ar BS A1 stāvokli

| Metrika | BS A1 (pēc labojuma) | BS A2 (šis audits) |
|---|---|---|
| Ieraksti | 702 | 1 640 |
| Study kartītes | 134 | 231 |
| sectionAccentIssues (validate) | 0 | 0 |
| LV atlikumi tekstā | 0 | 0 |
| DE integritāte | PASS | **FAIL** (1 kartīte) |
| sectionAccents semantika | PASS (pēc audita) | PASS WITH WARNINGS |
| Owner accepted | JĀ | NĒ |

---

## 12. Apliecinājumi

1. **Audita laikā netika mainīts neviens datu vai aplikācijas fails.**
2. Izveidoti tikai audita izvades faili un palīgskripti (skat. §3).
3. OpenAI API netika izsaukts audita laikā.

---

## 13. Ieteiktais nākamais solis

1. Labot \`a2-holen\` DE \`sectionAccents\` — atjaunot \`holen\` vai dokumentēt apzinātu izņēmumu
2. Aizstāt LV/EN atlikumus sectionAccents datos (15 augsti atradumi)
3. Notīrīt legacy \`accents\` laukus ar LV vārdiem
4. Salāgot kapitalizāciju (53 WARNING)
5. Atkārtot šo auditu

---

*Atskaite ģenerēta ${new Date().toISOString()}*
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, report);
console.log(`Wrote ${OUT} (${report.length} chars)`);
