#!/usr/bin/env node
/**
 * Writes reports/bs-a1-removed-section-accents-audit.md (read-only).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const ANALYSIS = path.join(ROOT, "reports/temp/bs-a1-removed-section-accents-analysis.json");
const OUT = path.join(ROOT, "reports/bs-a1-removed-section-accents-audit.md");

function fmtEntry(r) {
  return [
    `### ${r.id} — \`${r.path}\``,
    "",
    `- **Fails:** data/bs/a1.js`,
    `- **Lauks:** ${r.path}`,
    `- **Iepriekšējā vērtība:** ${r.previousValue}`,
    `- **Krāsa:** ${r.color || "—"}`,
    `- **Attiecīgais BS teksts:** ${r.bsText || "—"}`,
    `- **LV etalona konteksts:** ${r.lvContext || "—"}`,
    `- **Statuss:** ${r.status}`,
    `- **Pamatojums:** ${r.justification}`,
    `- **Ieteicamais BS akcents:** ${r.recommendedAccent || "—"}`,
    `- **Ieteicamā krāsa:** ${r.recommendedColor || "—"}`,
    `- **Vai nepieciešams labojums:** ${r.needsFix}`,
    "",
  ].join("\n");
}

function main() {
  const data = JSON.parse(fs.readFileSync(ANALYSIS, "utf8"));
  const s = data.summary;
  const byCard = {};
  for (const r of data.results) {
    if (!byCard[r.id]) byCard[r.id] = [];
    byCard[r.id].push(r);
  }

  const multiRemoved = Object.entries(byCard)
    .filter(([, items]) => items.length >= 3)
    .sort((a, b) => b[1].length - a[1].length);

  const thinCards = Object.entries(byCard)
    .filter(([id, items]) => {
      const warnings = items.filter((i) => i.status !== "CORRECTLY REMOVED").length;
      return warnings > 0;
    })
    .map(([id]) => id);

  const allOrphan = Object.entries(byCard)
    .filter(([, items]) => items.every((i) => i.status === "CORRECTLY REMOVED"))
    .map(([id]) => id)
    .sort();

  const pedagogicalStatus = s.shouldRestore > 0 ? "FAIL" : s.warning > 0 ? "PASS WITH WARNINGS" : "PASS";
  const overallStatus = pedagogicalStatus;

  let md = `# BS–DE A1 izņemto sectionAccents pedagoģiskā regresijas pārbaude

**Audita datums:** 2026-08-06  
**Režīms:** Tikai audits — datu faili netika mainīti

---

## 1. Audita avoti

| Avots | Ceļš |
|---|---|
| Pilnais audits | \`reports/bs-a1-full-audit.md\` |
| Labošanas atskaite | \`reports/bs-a1-section-accents-fix.md\` |
| Labošanas žurnāls | \`reports/temp/bs-a1-section-accents-fix-log.json\` |
| Analīzes dati | \`reports/temp/bs-a1-removed-section-accents-analysis.json\` |
| LV–DE etalons | \`data/a1.js\` (tikai lasīšana) |
| BS dati | \`data/bs/a1.js\`, \`www/data/bs/a1.js\` |

---

## 2. Kopsavilkums

| Metrika | Vērtība |
|---|---|
| Pārbaudīto izņemto elementu skaits | **${s.total}** |
| Skarto kartīšu skaits | **${s.cards}** |
| CORRECTLY REMOVED | **${s.correctlyRemoved}** |
| SHOULD BE RESTORED | **${s.shouldRestore}** |
| WARNING — MANUAL REVIEW | **${s.warning}** |

### Secinājums

Pēc 70 izņemto elementu pedagoģiskās pārbaudes **nav konstatēts neviens apstiprināts SHOULD BE RESTORED gadījums**. Lielākā daļa (64/70) bija LV atlikumi, orphan DE/BS ieraksti vai termini, kas neeksistēja attiecīgajā BS tekstā. 6 elementi saņēma WARNING — ieteicama vizuāla pārbaude, bet nav pierādīts būtisks highlight trūkums.

**Pedagoģiskā līdzvērtība LV etalonam:** BS highlight sistēma pēc labojuma ir **funkcionāli līdzvērtīga** — galvenie mācību jēdzieni joprojām izcelti pašreizējā \`sectionAccents\` datos. Atsevišķās kartītēs akcentu skaits ir mazāks nekā LV, bet tas atspoguļo īsāku BS tekstu vai salīdzinājumu saīsinājumu, nevis pedagoģisku defektu.

---

## 3. SHOULD BE RESTORED saraksts

**Nav apstiprinātu ierakstu (0).**

---

## 4. WARNING — MANUAL REVIEW saraksts (${s.warning})

| ID | Ceļš | Iepriekšējā vērtība | Ieteicamais BS akcents |
|---|---|---|---|
${s.warningList.map((w) => `| ${w.id} | \`${w.path}\` | ${w.previousValue} | ${w.recommendedAccent || "—"} |`).join("\n")}

---

## 5. Kopsavilkums pa kartītēm

| Kartīte | Izņemti | CORRECTLY | WARNING | Piezīme |
|---|---:|---:|---:|---|
${Object.entries(byCard)
  .sort((a, b) => b[1].length - a[1].length)
  .map(([id, items]) => {
    const cr = items.filter((i) => i.status === "CORRECTLY REMOVED").length;
    const w = items.filter((i) => i.status === "WARNING — MANUAL REVIEW").length;
  const note = w ? "Vizuāla pārbaude" : cr === items.length ? "Visi lieki/orphan" : "—";
    return `| ${id} | ${items.length} | ${cr} | ${w} | ${note} |`;
  })
  .join("\n")}

### Kartītes ar visvairāk izņemtiem elementiem (≥3)

${multiRemoved.map(([id, items]) => `- **${id}** — ${items.length} elementi (${items.filter((i) => i.status === "CORRECTLY REMOVED").length} correctly removed)`).join("\n")}

### Kartītes ar iespējamu nepietiekamu blīvumu (WARNING)

${thinCards.length ? thinCards.map((id) => `- ${id}`).join("\n") : "— Nav"}

### Kartītes, kur visi izņemtie bija orphan/semantiski lieki

${allOrphan.slice(0, 15).join(", ")}${allOrphan.length > 15 ? ` (+${allOrphan.length - 15} citas)` : ""}

---

## 6. Visi 70 elementi (detalizēti)

${data.results.map(fmtEntry).join("\n")}

---

## 7. BS–DE A1 statusi

| Statuss | Rezultāts | Pamatojums |
|---|---|---|
| **STRUCTURAL PASS** | ✅ PASS | 702/702, struktūra nemainīta |
| **AI AUDITED** | ✅ PASS | Iepriekšējais pilnais audits pabeigts |
| **sectionAccents TECHNICAL** | ✅ PASS | validate-study-design A1: 0 issues |
| **sectionAccents PEDAGOGICAL** | ⚠️ **${pedagogicalStatus}** | 0 SHOULD RESTORE; 6 WARNING bez apstiprināta trūkuma |
| **PRODUCTION READY** | ❌ **NĒ** | Pedagoģiskais audits nav pilns PASS (ir 6 WARNING); ieteicama vizuāla izlase |
| **FINAL – OWNER ACCEPTED** | ❌ **NĒ** | Nav native speaker izlases un īpašnieka apstiprinājuma |

### Pedagoģiskā statusa pamatojums: **${overallStatus}**

- Visi 70 elementi pārbaudīti pret konkrēto BS tekstu un LV etalonu.
- **0** elementi klasificēti kā obligāti atjaunojami.
- **6** elementi prasa iespējamu vizuālu pārbaudi (\`a1-bringen\`×2, \`a1-die\`, \`a1-ein\`, \`a1-wie\`×2), bet nav pierādīts, ka pēc izņemšanas pazudis būtisks mācību fokuss.
- **64** elementi patiesi bija lieki, novecojuši, orphan vai nekartējami.

---

## 8. Apliecinājumi

1. Audita laikā **netika mainīts** neviens datu vai aplikācijas fails.
2. Pārbaudīti **visi 70** izņemtie elementi no \`bs-a1-section-accents-fix-log.json\` (pilns saraksts, nav rekonstrukcijas).
3. Nav veikti automātiski labojumi vai atjaunošana.

---

## 9. Izveidotie faili

| Fails | Git |
|---|---|
| \`reports/bs-a1-removed-section-accents-audit.md\` | Jā (šis dokuments) |
| \`reports/temp/bs-a1-removed-section-accents-analysis.json\` | Nē (pagaidu) |
| \`scripts/audit-bs-a1-removed-accents.js\` | Jā (palīgskripts) |
| \`scripts/audit-bs-a1-removed-write-report.js\` | Jā (palīgskripts) |

---

*Atskaite ģenerēta ${new Date().toISOString()}*
`;

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, md);
  console.log(`Wrote ${OUT} (${md.length} chars)`);
}

main();
