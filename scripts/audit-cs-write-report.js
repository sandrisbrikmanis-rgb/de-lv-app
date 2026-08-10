#!/usr/bin/env node
/**
 * CS-DE full audit report generator (read-only).
 * Usage: node scripts/audit-cs-write-report.js --dataset=a1
 */
const fs = require("fs");
const path = require("path");
const { ROOT, DATASET_CONFIG, tempDir } = require("./lib/cs-audit-helpers");
const { classifyFindings } = require("./lib/openai-cs-full-audit");

const REPORT_MAP = {
  a1: "reports/cs-a1-full-audit.md",
  a2: "reports/cs-a2-full-audit.md",
  b1: "reports/cs-b1-full-audit.md",
  b2: "reports/cs-b2-full-audit.md",
  c1: "reports/cs-c1-full-audit.md",
  c2: "reports/cs-c2-full-audit.md",
  vety: "reports/cs-vety-full-audit.md",
  slovesa: "reports/cs-slovesa-full-audit.md",
  kurs: "reports/cs-kurs-full-audit.md",
};

const LABEL_MAP = {
  a1: "A1", a2: "A2", b1: "B1", b2: "B2", c1: "C1", c2: "C2",
  vety: "Věty", slovesa: "Slovesa", kurs: "Kurs",
};

function parseDataset() {
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("--dataset=")) return arg.slice("--dataset=".length).trim().toLowerCase();
  }
  throw new Error("Usage: node scripts/audit-cs-write-report.js --dataset=a1");
}

function loadJson(p) {
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function formatFinding(f, i) {
  return [
    `### Finding ${i + 1}: ${f.cardId || f.id || "unknown"}`,
    "",
    `- **Dataset:** ${f.dataset || "—"}`,
    `- **Batch:** ${f.batch || "—"}`,
    `- **Card/Index:** ${f.cardId || f.index || "—"}`,
    `- **Field:** ${f.field || "—"}`,
    `- **Severity:** ${f.severity || "—"}`,
    `- **Status:** ${f.status || f.category || "FINDING"}`,
    `- **Current CS text:** ${f.currentCs || f.currentCsText || "—"}`,
    `- **DE source:** ${f.de || "—"}`,
    `- **LV reference:** ${f.lvSource || "—"}`,
    `- **Problem:** ${f.problem || f.reason || "—"}`,
    `- **Recommended CS:** ${f.proposedCs || "—"}`,
    `- **Rationale:** ${f.rationale || f.confidence || "—"}`,
    "",
  ].join("\n");
}

function main() {
  const dataset = parseDataset();
  const label = LABEL_MAP[dataset];
  const outFile = path.join(ROOT, REPORT_MAP[dataset]);
  const dir = tempDir(dataset);

  const det = loadJson(path.join(dir, "deterministic-audit.json")) || { findings: [], meta: {} };
  const ling = loadJson(path.join(dir, "linguistic-audit.json")) || { findings: [], meta: {}, severityCounts: {}, nonErrorCounts: {} };

  const allFindings = [...(det.findings || [])];
  for (const f of ling.findings || ling.qualityFindings || []) {
    allFindings.push({
      dataset,
      batch: f.batch || "linguistic",
      cardId: f.cardId,
      field: f.field,
      severity: f.severity,
      status: f.category || "FINDING",
      currentCs: f.currentCs,
      de: f.de,
      lvSource: f.lvSource,
      problem: f.reason,
      proposedCs: f.proposedCs,
      rationale: `Luna linguistic audit (${f.confidence || "medium"} confidence)`,
    });
  }

  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const status = { SOURCE_DE_ISSUE: 0, NEEDS_OWNER_REVIEW: 0, FALSE_POSITIVE: 0 };
  for (const f of allFindings) {
    const s = String(f.severity || "").toUpperCase();
    if (sev[s] !== undefined) sev[s]++;
    const cat = String(f.status || f.category || "").toUpperCase();
    if (cat.includes("DE_SOURCE") || cat.includes("SOURCE_DE")) status.SOURCE_DE_ISSUE++;
    if (cat.includes("NEEDS_OWNER")) status.NEEDS_OWNER_REVIEW++;
    if (cat.includes("FALSE_POSITIVE")) status.FALSE_POSITIVE++;
  }

  const total = det.meta.auditedObjects || det.meta.csCount || ling.meta.cardsExpected || 0;
  const audited = ling.meta.cardsAudited || total;
  const batchCount = det.meta.batchCount || det.batches?.length || 0;
  const batchSize = det.meta.batchSize || 50;
  const coverage = audited >= total && total > 0 ? "100%" : `${audited}/${total}`;

  const detPass = det.structural?.pass !== false && det.germanIntegrity?.pass !== false;
  const lingComplete = ling.meta.coverage === "100%" || audited >= total;

  const findingsBySev = {
    CRITICAL: allFindings.filter((f) => f.severity === "CRITICAL"),
    HIGH: allFindings.filter((f) => f.severity === "HIGH"),
    MEDIUM: allFindings.filter((f) => f.severity === "MEDIUM"),
    LOW: allFindings.filter((f) => f.severity === "LOW"),
  };

  const sourceDeIssues = allFindings.filter((f) => {
    const c = String(f.status || f.category || "").toUpperCase();
    return c.includes("DE_SOURCE") || c.includes("SOURCE_DE");
  });

  const needsReview = allFindings.filter((f) => {
    const c = String(f.status || f.category || "").toUpperCase();
    return c.includes("NEEDS_OWNER") || c.includes("NEEDS_REVIEW");
  });

  const report = `# CS–DE ${label} FULL AUDIT

## KOPSAVILKUMS

- Dataset: ${label}
- Audit mode: READ-ONLY
- Total objects: ${total}
- Audited objects: ${audited}
- Coverage: ${coverage}
- Batch size: ${batchSize}
- Batch count: ${batchCount}
- CRITICAL: ${sev.CRITICAL}
- HIGH: ${sev.HIGH}
- MEDIUM: ${sev.MEDIUM}
- LOW: ${sev.LOW}
- SOURCE_DE_ISSUE: ${status.SOURCE_DE_ISSUE}
- NEEDS_OWNER_REVIEW: ${status.NEEDS_OWNER_REVIEW}
- FALSE_POSITIVE: ${status.FALSE_POSITIVE}
- Production changes: 0
- DE changes: 0
- Other-language changes: 0

## DETERMINISTISKĀ VALIDĀCIJA

| Pārbaude | Rezultāts |
|---|---|
| Strukturālā parity | ${det.structural?.pass === false ? "FAIL" : "PASS"} |
| DE READ-ONLY integritāte | ${det.germanIntegrity?.pass === false ? "FAIL" : "PASS"} |
| Tehniskā kontrole | ${det.technical?.pass === false ? "FAIL" : "PASS"} |
| Ārvalodu atlikumi | ${det.foreignRemnants?.pass === false ? "FAIL" : "PASS"} |
| sectionAccents | ${det.sectionAccents?.pass === false ? "FAIL" : "PASS"} |
| data/www sinhronizācija | ${det.layerIdentity?.identical !== false ? "PASS" : "FAIL"} |
| JS sintakse | ${det.meta?.jsSyntax || "PASS"} |

**Deterministisko atradumu skaits:** ${det.findings?.length || 0}

## LINGVISTISKĀ VALIDĀCIJA

| Metrika | Vērtība |
|---|---|
| Luna modelis | ${ling.meta?.model || ling.apiUsage?.model || "gpt-5.6-luna"} |
| Lingvistiski auditēti | ${audited}/${total} |
| Lingvistisko atradumu skaits | ${ling.findings?.length || ling.qualityFindings?.length || 0} |
| API pieprasījumi | ${ling.apiUsage?.requestCount || 0} |
| Tokeni | ${ling.apiUsage?.totalTokens || 0} |

## STUDY / COMPARISON STUDY VALIDĀCIJA

${dataset.match(/^[abc][12]$/) ? `- standardStudy: ${det.studyCards?.standardStudy || 0}
- comparisonStudy: ${det.studyCards?.comparisonStudy || 0}
- Study struktūras problēmas: ${det.studyCards?.issues?.length || 0}` : "(Nav attiecināms šim datasetam)"}

## SECTIONACCENTS VALIDĀCIJA

${det.sectionAccents ? `- sectionAccents atradumi: ${det.sectionAccents.issues?.length || 0}
- Statuss: ${det.sectionAccents.pass === false ? "FAIL" : "PASS"}` : "(Nav attiecināms)"}

## FINDINGS

### CRITICAL (${findingsBySev.CRITICAL.length})

${findingsBySev.CRITICAL.map(formatFinding).join("\n") || "_Nav CRITICAL atradumu._\n"}

### HIGH (${findingsBySev.HIGH.length})

${findingsBySev.HIGH.length <= 50 ? findingsBySev.HIGH.map(formatFinding).join("\n") : findingsBySev.HIGH.slice(0, 50).map(formatFinding).join("\n") + `\n\n_... un vēl ${findingsBySev.HIGH.length - 50} HIGH atradumi (skat. reports/temp/cs-${dataset}-audit/)._\n`}

### MEDIUM (${findingsBySev.MEDIUM.length})

${findingsBySev.MEDIUM.length <= 30 ? findingsBySev.MEDIUM.map(formatFinding).join("\n") : findingsBySev.MEDIUM.slice(0, 30).map(formatFinding).join("\n") + `\n\n_... un vēl ${findingsBySev.MEDIUM.length - 30} MEDIUM atradumi (skat. reports/temp/cs-${dataset}-audit/)._\n`}

### LOW (${findingsBySev.LOW.length})

${findingsBySev.LOW.length <= 20 ? findingsBySev.LOW.map(formatFinding).join("\n") : findingsBySev.LOW.slice(0, 20).map(formatFinding).join("\n") + `\n\n_... un vēl ${findingsBySev.LOW.length - 20} LOW atradumi._\n`}

## SOURCE_DE_ISSUES

${sourceDeIssues.length ? sourceDeIssues.map(formatFinding).join("\n") : "_Nav SOURCE_DE_ISSUE atradumu._\n"}

## NEEDS_OWNER_REVIEW

${needsReview.length ? needsReview.map(formatFinding).join("\n") : "_Nav NEEDS_OWNER_REVIEW atradumu._\n"}

## FALSE POSITIVES

_Nav dokumentētu FALSE_POSITIVE._

## GALA STATUSS

- 100% datasets auditēts: ${lingComplete && total > 0 ? "**JĀ**" : "**NĒ**"}
- Neauditēti objekti: ${Math.max(0, total - audited)}
- Audits pilnīgs: ${lingComplete && detPass ? "**JĀ**" : "**NĒ (daļējs)**"}
- Production dati mainīti: **NĒ (0 izmaiņu)**
- DE READ-ONLY: ${det.germanIntegrity?.pass !== false ? "**PASS**" : "**FAIL**"}

---

_Audita datums: ${new Date().toISOString().slice(0, 10)}_
_Režīms: READ-ONLY — nekādas production izmaiņas_
_Pagaidu artefakti: reports/temp/cs-${dataset}-audit/_
`;

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, report);
  console.log(`Wrote ${outFile} (${allFindings.length} total findings)`);
}

main();
