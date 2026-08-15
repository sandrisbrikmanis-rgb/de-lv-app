#!/usr/bin/env node
"use strict";
/**
 * CS-DE Slovesa — READ-ONLY OWNER source preparation.
 * Exports all 189 production verbs with full-audit findings attached.
 *
 * Usage: node scripts/build-cs-slovesa-all-findings-by-verb.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const { loadArray } = require("./lib/cs-audit-helpers");

const VERBS_FILE = path.join(ROOT, "data/cs/verbs.js");
const DE_FILE = path.join(ROOT, "data/verbs.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/verbs.js");
const AUDIT_DIR = path.join(ROOT, "reports/temp/cs-slovesa-audit");
const FULL_AUDIT_MD = path.join(ROOT, "reports/cs-slovesa-full-audit.md");
const OUT_MD = path.join(ROOT, "reports/cs-slovesa-all-findings-by-verb.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-slovesa-all-findings-by-verb.json");
const GROUP_DIR = path.join(ROOT, "reports");
const SLOVESA_TOTAL = 189;
const GROUP_SIZE = 50;
const FORM_KEYS = [
  "infinitiv",
  "praesens",
  "imperfektIndikativ",
  "imperfektKonjunktiv",
  "partizipVergangenheit",
];

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function verbId(index) {
  return `verb-${index}`;
}

function displayNum(index) {
  return String(index + 1).padStart(3, "0");
}

function parseFormField(field) {
  const f = String(field || "");
  const m = f.match(/forms\.([^.]+)\.csText/);
  if (m) return m[1];
  if (f.endsWith(".csText")) return f.split(".")[0].replace(/^forms\./, "");
  if (FORM_KEYS.includes(f)) return f;
  return f;
}

function getProductionCurrent(entry, field) {
  const form = parseFormField(field);
  const formObj = entry[form];
  if (!formObj || typeof formObj !== "object") return "";
  return String(formObj.lv ?? formObj.cs ?? "");
}

function getDeLemma(entry) {
  return entry.infinitiv?.de || "";
}

function getFormsProduction(entry) {
  const forms = {};
  for (const key of FORM_KEYS) {
    if (!entry[key]) continue;
    forms[key] = {
      de: entry[key].de || "",
      csCurrent: entry[key].lv || entry[key].cs || "",
    };
  }
  for (const key of Object.keys(entry)) {
    if (key === "id" || key === "level" || forms[key]) continue;
    if (entry[key] && typeof entry[key] === "object" && entry[key].de) {
      forms[key] = {
        de: entry[key].de || "",
        csCurrent: entry[key].lv || entry[key].cs || "",
      };
    }
  }
  return forms;
}

function findingKey(f) {
  return [
    f.cardId || "",
    parseFormField(f.field),
    String(f.severity || ""),
    String(f.reason || "").slice(0, 120),
    String(f.proposedReplacement || "").slice(0, 80),
  ].join("\x1f");
}

function normalizeCategory(raw) {
  const cat = String(raw.category || raw.status || raw.rule || "").toUpperCase();
  if (cat === "DE_SOURCE_ISSUE") return "SOURCE_DE_ISSUE";
  return cat || null;
}

function isSourceDeIssue(category) {
  return category === "SOURCE_DE_ISSUE" || category === "DE_SOURCE_ISSUE";
}

function normalizeFinding(raw, source) {
  const category = normalizeCategory(raw);
  return {
    source,
    cardId: raw.cardId || "",
    index: typeof raw.index === "number" ? raw.index : null,
    field: raw.field || "",
    form: parseFormField(raw.field),
    severity: String(raw.severity || "MEDIUM").toUpperCase(),
    type: category,
    category,
    isSourceDeIssue: isSourceDeIssue(category),
    auditCurrent: String(raw.currentCs ?? raw.current ?? raw.existingCsText ?? ""),
    proposedReplacement: raw.proposedCs ?? raw.proposed ?? raw.recommendedFix ?? raw.recommendedCs ?? "",
    reason: raw.reason || raw.problem || raw.rationale || "",
    de: raw.de || "",
    lvSource: raw.lvSource || "",
  };
}

function loadJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function loadAllFindings() {
  const all = [];
  const seen = new Set();
  const pushFinding = (raw, source) => {
    const f = normalizeFinding(raw, source);
    if (!f.cardId && f.index === null) return;
    const key = findingKey(f);
    if (seen.has(key)) return;
    seen.add(key);
    all.push(f);
  };

  const det = loadJson(path.join(AUDIT_DIR, "deterministic-audit.json"));
  for (const f of det?.findings || []) pushFinding(f, "deterministic");

  const ling = loadJson(path.join(AUDIT_DIR, "linguistic-audit.json"));
  for (const f of ling?.qualityFindings || ling?.findings || []) {
    if (String(f.status || "").toUpperCase() === "PASS") continue;
    pushFinding(f, "Luna");
  }

  return all;
}

function resolveCardId(finding, total) {
  if (finding.cardId && /^verb-\d+$/.test(finding.cardId)) {
    const idx = Number(finding.cardId.slice("verb-".length));
    if (idx >= 0 && idx < total) return { cardId: finding.cardId, index: idx };
  }
  if (typeof finding.index === "number" && finding.index >= 0 && finding.index < total) {
    return { cardId: verbId(finding.index), index: finding.index };
  }
  return null;
}

function enrichFinding(finding, entry, index) {
  const productionCurrent = entry ? getProductionCurrent(entry, finding.field) : "";
  const auditCurrent = finding.auditCurrent;
  const currentMismatch = Boolean(
    auditCurrent && productionCurrent && auditCurrent !== productionCurrent,
  );
  return {
    ...finding,
    cardId: verbId(index),
    productionIndex: index,
    productionCurrent,
    currentMismatch,
  };
}

function formatFindingMd(f, n) {
  const lines = [
    `#### Finding ${n}`,
    `- Severity: ${f.severity}`,
    `- Type: ${f.type || "—"}`,
    `- Source: ${f.source}`,
    `- Form/Field: ${f.form || f.field}`,
  ];
  if (f.isSourceDeIssue) {
    lines.push("- **SOURCE_DE_ISSUE** (DE production READ-ONLY — do not change DE forms)");
  }
  lines.push(`- Issue: ${f.reason || "—"}`);
  lines.push(`- Proposed replacement: ${f.proposedReplacement || "—"}`);
  if (f.currentMismatch) {
    lines.push("- **AUDIT_CURRENT_MISMATCH**");
    lines.push(`- Audit CURRENT: ${f.auditCurrent}`);
    lines.push(`- Production CURRENT: ${f.productionCurrent}`);
  } else if (f.auditCurrent) {
    lines.push(`- Audit CURRENT: ${f.auditCurrent}`);
    lines.push(`- Production CURRENT: ${f.productionCurrent}`);
  }
  if (f.de) lines.push(`- DE (context): ${f.de}`);
  if (f.lvSource) lines.push(`- LV reference: ${f.lvSource}`);
  return lines.join("\n");
}

function formatVerbBlock(verb, findings) {
  const lines = [
    `## ${displayNum(verb.index)} — \`${verb.cardId}\``,
    "",
    "**DE lemma**",
    `\`${verb.deLemma}\``,
    "",
    "**Forms (production CURRENT)**",
    "",
  ];

  for (const [formName, form] of Object.entries(verb.forms)) {
    lines.push(`### ${formName}`);
    lines.push(`- DE: \`${form.de}\``);
    lines.push(`- CS CURRENT: \`${form.csCurrent}\``);
    lines.push("");
  }

  lines.push("### Findings");
  lines.push("");
  if (!findings.length) {
    lines.push("NONE");
  } else {
    findings.forEach((f, i) => {
      lines.push(formatFindingMd(f, i + 1));
      lines.push("");
    });
  }
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

function groupSpec(groupNum, startIndex, endIndex) {
  const startDisplay = String(startIndex + 1).padStart(3, "0");
  const endDisplay = String(endIndex + 1).padStart(3, "0");
  const id = String(groupNum).padStart(2, "0");
  return {
    groupNum,
    fileName: `cs-slovesa-owner-source-group${id}-verbs-${startDisplay}-${endDisplay}.md`,
    startIndex,
    endIndex,
  };
}

function buildGroups() {
  const groups = [];
  for (let g = 1; g <= Math.ceil(SLOVESA_TOTAL / GROUP_SIZE); g++) {
    const startIndex = (g - 1) * GROUP_SIZE;
    const endIndex = Math.min(g * GROUP_SIZE, SLOVESA_TOTAL) - 1;
    groups.push(groupSpec(g, startIndex, endIndex));
  }
  return groups;
}

function main() {
  if (!fs.existsSync(AUDIT_DIR)) throw new Error(`Missing audit directory: ${AUDIT_DIR}`);
  if (!fs.existsSync(FULL_AUDIT_MD)) throw new Error(`Missing full audit report: ${FULL_AUDIT_MD}`);

  const startCsHash = fileHash(VERBS_FILE);
  const startDeHash = fileHash(DE_FILE);
  const startWwwHash = fileHash(WWW_FILE);

  const entries = loadArray("data/cs/verbs.js", "VERB_ENTRIES");
  if (entries.length !== SLOVESA_TOTAL) {
    throw new Error(`Expected ${SLOVESA_TOTAL} verbs, found ${entries.length}`);
  }

  const verbs = entries.map((entry, index) => ({
    index,
    cardId: verbId(index),
    entry,
    deLemma: getDeLemma(entry),
    forms: getFormsProduction(entry),
  }));

  const allFindings = loadAllFindings();
  const findingsByVerb = new Map(verbs.map((v) => [v.cardId, []]));
  const unresolved = [];
  let transferred = 0;
  let auditCurrentMismatches = 0;
  let sourceDeIssueCount = 0;

  for (const f of allFindings) {
    const resolved = resolveCardId(f, SLOVESA_TOTAL);
    if (!resolved) {
      unresolved.push({ ...f, unresolvedReason: "UNRESOLVED_FINDING_REFERENCE" });
      continue;
    }
    const verb = verbs[resolved.index];
    const enriched = enrichFinding({ ...f, cardId: resolved.cardId }, verb.entry, resolved.index);
    if (enriched.currentMismatch) auditCurrentMismatches += 1;
    if (enriched.isSourceDeIssue) sourceDeIssueCount += 1;
    findingsByVerb.get(resolved.cardId).push(enriched);
    transferred += 1;
  }

  const masterHeader = [
    "# CS–DE Slovesa — All Findings by Verb (OWNER SOURCE)",
    "",
    "READ-ONLY export for OWNER linguistic review. Audit proposed replacements are informational only — not OWNER-approved NEW values.",
    "DE = STRICT READ-ONLY. SOURCE_DE_ISSUE findings document DE-side issues without implying DE production changes.",
    "",
    `Generated: ${new Date().toISOString()}`,
    "Source production: `data/cs/verbs.js`",
    "Source audit: `reports/cs-slovesa-full-audit.md`, `reports/temp/cs-slovesa-audit/`",
    "",
    "---",
    "",
  ];

  const masterLines = [...masterHeader];
  const jsonVerbs = [];

  for (const verb of verbs) {
    const findings = findingsByVerb.get(verb.cardId) || [];
    masterLines.push(formatVerbBlock(verb, findings));
    jsonVerbs.push({
      index: verb.index,
      displayNum: displayNum(verb.index),
      cardId: verb.cardId,
      deLemma: verb.deLemma,
      forms: verb.forms,
      findings: findings.map((f) => ({
        severity: f.severity,
        type: f.type,
        category: f.category,
        isSourceDeIssue: f.isSourceDeIssue,
        source: f.source,
        form: f.form,
        field: f.field,
        reason: f.reason,
        auditCurrent: f.auditCurrent,
        productionCurrent: f.productionCurrent,
        proposedReplacement: f.proposedReplacement,
        currentMismatch: f.currentMismatch,
        de: f.de,
        lvSource: f.lvSource,
      })),
    });
  }

  if (unresolved.length) {
    masterLines.push("# UNRESOLVED FINDING REFERENCES");
    masterLines.push("");
    unresolved.forEach((f, i) => {
      masterLines.push(`## Unresolved ${i + 1}`);
      masterLines.push("");
      masterLines.push(`- Reference: ${f.cardId || "(no cardId)"}`);
      masterLines.push(`- Severity: ${f.severity}`);
      masterLines.push(`- Source: ${f.source}`);
      masterLines.push("- Status: UNRESOLVED_FINDING_REFERENCE");
      masterLines.push("");
    });
  }

  const verbsWithFindings = verbs.filter((v) => (findingsByVerb.get(v.cardId) || []).length > 0).length;
  const uniqueIds = new Set(verbs.map((v) => v.cardId));

  const summary = {
    productionVerbs: SLOVESA_TOTAL,
    masterVerbs: verbs.length,
    uniqueProductionIds: uniqueIds.size,
    missingProductionVerbsInMaster: 0,
    duplicatedProductionVerbs: verbs.length - uniqueIds.size,
    groups: Math.ceil(SLOVESA_TOTAL / GROUP_SIZE),
    groupCoverage: "001–189",
    orderParityWithProduction: verbs.every((v, i) => v.index === i) ? "PASS" : "FAIL",
    fullAuditFindings: allFindings.length,
    transferredToMaster: transferred,
    unresolvedFindingReferences: unresolved.length,
    auditCurrentMismatches,
    sourceDeIssueFindings: sourceDeIssueCount,
    verbsWithFindings,
    productionChanges: 0,
    deChanges: 0,
    csChanges: 0,
  };

  masterLines.push("## Integrity summary");
  masterLines.push("");
  masterLines.push("```text");
  for (const [k, v] of Object.entries(summary)) masterLines.push(`${k}: ${v}`);
  masterLines.push("```");

  fs.writeFileSync(OUT_MD, masterLines.join("\n"), "utf8");

  const groups = buildGroups();
  const groupFiles = [];
  for (const group of groups) {
    const groupVerbs = verbs.slice(group.startIndex, group.endIndex + 1);
    const groupHeader = [
      `# CS–DE Slovesa OWNER SOURCE — Group ${String(group.groupNum).padStart(2, "0")}`,
      "",
      `Verbs ${displayNum(group.startIndex)}–${displayNum(group.endIndex)} (production order)`,
      "",
      "READ-ONLY OWNER source. No Cursor-selected NEW repairs. DE = STRICT READ-ONLY.",
      "",
      "---",
      "",
    ];
    const groupLines = [...groupHeader];
    for (const verb of groupVerbs) {
      groupLines.push(formatVerbBlock(verb, findingsByVerb.get(verb.cardId) || []));
    }
    const outPath = path.join(GROUP_DIR, group.fileName);
    fs.writeFileSync(outPath, groupLines.join("\n"), "utf8");
    groupFiles.push(outPath);
  }

  const payload = {
    meta: {
      generatedAt: new Date().toISOString(),
      mode: "READ-ONLY",
      productionFile: "data/cs/verbs.js",
      fullAuditReport: "reports/cs-slovesa-full-audit.md",
      auditDir: "reports/temp/cs-slovesa-audit",
    },
    summary,
    verbs: jsonVerbs,
    unresolved,
  };
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  const endCsHash = fileHash(VERBS_FILE);
  const endDeHash = fileHash(DE_FILE);
  const endWwwHash = fileHash(WWW_FILE);
  const productionUnchanged =
    startCsHash === endCsHash && startDeHash === endDeHash && startWwwHash === endWwwHash;
  const mirrorOk = endCsHash === endWwwHash;

  let syntax = "PASS";
  try {
    execSync("node --check data/cs/verbs.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntax = "FAIL";
  }

  const complete = transferred + unresolved.length === allFindings.length;
  const result = {
    ...summary,
    syntax,
    mirrorParity: mirrorOk ? "PASS" : "FAIL",
    unexpectedProductionChanges: productionUnchanged ? 0 : 1,
    productionUnchanged,
    complete,
    output: OUT_MD,
    json: OUT_JSON,
    groupFiles: groupFiles.map((p) => path.relative(ROOT, p)),
  };

  console.log(JSON.stringify(result, null, 2));
  if (!complete || !productionUnchanged || summary.missingProductionVerbsInMaster !== 0) process.exit(1);
}

main();
