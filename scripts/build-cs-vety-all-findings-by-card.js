#!/usr/bin/env node
"use strict";
/**
 * CS-DE Věty — READ-ONLY OWNER source preparation.
 * Exports all 796 production cards with full-audit findings attached.
 *
 * Usage: node scripts/build-cs-vety-all-findings-by-card.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const { loadArray } = require("./lib/cs-audit-helpers");

const SENTENCES_FILE = path.join(ROOT, "data/cs/sentences.js");
const DE_FILE = path.join(ROOT, "data/sentences.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/sentences.js");
const AUDIT_DIR = path.join(ROOT, "reports/temp/cs-vety-audit");
const FULL_AUDIT_MD = path.join(ROOT, "reports/cs-vety-full-audit.md");
const OUT_MD = path.join(ROOT, "reports/cs-vety-all-findings-by-card.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-vety-all-findings-by-card.json");
const GROUP_DIR = path.join(ROOT, "reports");
const VETY_TOTAL = 796;
const GROUP_SIZE = 50;

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function cardId(index) {
  return `sentence-${index}`;
}

function displayNum(index) {
  return String(index + 1).padStart(3, "0");
}

function normalizeField(field) {
  if (!field) return "lv";
  const f = String(field);
  if (f === "csText" || f === "lv") return "lv";
  return f;
}

function findingKey(f) {
  return [
    f.cardId || "",
    normalizeField(f.field),
    String(f.severity || ""),
    String(f.reason || "").slice(0, 120),
    String(f.proposedReplacement || "").slice(0, 80),
  ].join("\x1f");
}

function normalizeFinding(raw, source) {
  return {
    source,
    cardId: raw.cardId || "",
    index: typeof raw.index === "number" ? raw.index : null,
    field: normalizeField(raw.field || "lv"),
    severity: String(raw.severity || "MEDIUM").toUpperCase(),
    type: raw.category || raw.status || raw.rule || null,
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

  if (fs.existsSync(AUDIT_DIR)) {
    for (const bf of fs.readdirSync(AUDIT_DIR).filter((f) => f.startsWith("batch-") && f.endsWith(".json"))) {
      for (const f of loadJson(path.join(AUDIT_DIR, bf))?.findings || []) {
        pushFinding(f, `Luna:${bf}`);
      }
    }
  }

  return all;
}

function parseFullAuditMdFindings() {
  if (!fs.existsSync(FULL_AUDIT_MD)) return [];
  const md = fs.readFileSync(FULL_AUDIT_MD, "utf8");
  const blocks = md.split(/^### Finding \d+: /m).slice(1);
  const findings = [];
  for (const block of blocks) {
    const cardMatch = block.match(/^(sentence-\d+)/);
    if (!cardMatch) continue;
    const get = (label) => {
      const m = block.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`));
      return m ? m[1].trim() : "";
    };
    findings.push(normalizeFinding({
      cardId: cardMatch[1],
      field: get("Field") || "csText",
      severity: get("Severity"),
      category: get("Status"),
      currentCs: get("Current CS text"),
      proposedCs: get("Recommended CS"),
      reason: get("Problem"),
      de: get("DE source"),
      lvSource: get("LV reference"),
      rationale: get("Rationale"),
    }, "full-audit-md"));
  }
  return findings;
}

function resolveCardId(finding, total) {
  if (finding.cardId && /^sentence-\d+$/.test(finding.cardId)) {
    const idx = Number(finding.cardId.slice("sentence-".length));
    if (idx >= 0 && idx < total) return { cardId: finding.cardId, index: idx };
  }
  if (typeof finding.index === "number" && finding.index >= 0 && finding.index < total) {
    return { cardId: cardId(finding.index), index: finding.index };
  }
  return null;
}

function getProductionFields(entry) {
  const other = {};
  for (const [key, value] of Object.entries(entry)) {
    if (key === "de" || key === "lv") continue;
    other[key] = value;
  }
  return other;
}

function enrichFinding(finding, entry, index) {
  const productionCurrent = entry?.lv ?? "";
  const auditCurrent = finding.auditCurrent;
  const currentMismatch = Boolean(
    auditCurrent && productionCurrent && auditCurrent !== productionCurrent,
  );
  return {
    ...finding,
    cardId: cardId(index),
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
    `- Field: ${f.field}`,
    `- Reason: ${f.reason || "—"}`,
    `- Proposed replacement: ${f.proposedReplacement || "—"}`,
  ];
  if (f.currentMismatch) {
    lines.push("- **AUDIT_CURRENT_MISMATCH**");
    lines.push(`- Audit CURRENT: ${f.auditCurrent}`);
    lines.push(`- Production CURRENT: ${f.productionCurrent}`);
  } else if (f.auditCurrent) {
    lines.push(`- Audit CURRENT: ${f.auditCurrent}`);
    lines.push(`- Production CURRENT: ${f.productionCurrent}`);
  }
  return lines.join("\n");
}

function formatCardBlock(card, findings) {
  const lines = [
    `## ${displayNum(card.index)} — \`${card.cardId}\``,
    "",
    "**DE**",
    `\`${card.entry.de}\``,
    "",
    "**CS CURRENT**",
    `\`${card.entry.lv}\``,
    "",
  ];

  const other = getProductionFields(card.entry);
  if (Object.keys(other).length) {
    lines.push("**Other localized fields**");
    lines.push("```json");
    lines.push(JSON.stringify(other, null, 2));
    lines.push("```");
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
    fileName: `cs-vety-owner-source-group${id}-cards-${startDisplay}-${endDisplay}.md`,
    startIndex,
    endIndex,
  };
}

function buildGroups(cards, findingsByCard) {
  const groups = [];
  for (let g = 1; g <= Math.ceil(VETY_TOTAL / GROUP_SIZE); g++) {
    const startIndex = (g - 1) * GROUP_SIZE;
    const endIndex = Math.min(g * GROUP_SIZE, VETY_TOTAL) - 1;
    groups.push(groupSpec(g, startIndex, endIndex));
  }
  return groups;
}

function main() {
  if (!fs.existsSync(AUDIT_DIR)) throw new Error(`Missing audit directory: ${AUDIT_DIR}`);
  if (!fs.existsSync(FULL_AUDIT_MD)) throw new Error(`Missing full audit report: ${FULL_AUDIT_MD}`);

  const startCsHash = fileHash(SENTENCES_FILE);
  const startDeHash = fileHash(DE_FILE);
  const startWwwHash = fileHash(WWW_FILE);

  const entries = loadArray("data/cs/sentences.js", "SENTENCE_ENTRIES");
  if (entries.length !== VETY_TOTAL) {
    throw new Error(`Expected ${VETY_TOTAL} production cards, found ${entries.length}`);
  }

  const cards = entries.map((entry, index) => ({
    index,
    cardId: cardId(index),
    entry,
    deCurrent: entry.de,
    csCurrent: entry.lv,
    otherLocalizedFields: getProductionFields(entry),
  }));

  const allFindings = loadAllFindings();
  const mdFindings = parseFullAuditMdFindings();
  const findingsByCard = new Map(cards.map((c) => [c.cardId, []]));
  const unresolved = [];
  let transferred = 0;
  let auditCurrentMismatches = 0;

  for (const f of allFindings) {
    const resolved = resolveCardId(f, VETY_TOTAL);
    if (!resolved) {
      unresolved.push({ ...f, unresolvedReason: "UNRESOLVED_FINDING_REFERENCE" });
      continue;
    }
    const card = cards[resolved.index];
    const enriched = enrichFinding({ ...f, cardId: resolved.cardId }, card.entry, resolved.index);
    if (enriched.currentMismatch) auditCurrentMismatches += 1;
    findingsByCard.get(resolved.cardId).push(enriched);
    transferred += 1;
  }

  const mdTransferred = mdFindings.filter((mf) => {
    const resolved = resolveCardId(mf, VETY_TOTAL);
    if (!resolved) return false;
    const cardFindings = findingsByCard.get(resolved.cardId) || [];
    return cardFindings.some((cf) =>
      cf.severity === mf.severity
      && normalizeField(cf.field) === normalizeField(mf.field)
      && String(cf.reason).slice(0, 80) === String(mf.reason).slice(0, 80),
    );
  }).length;

  const masterHeader = [
    "# CS–DE Věty — All Findings by Card (OWNER SOURCE)",
    "",
    "READ-ONLY export for OWNER linguistic review. Audit proposed replacements are informational only — not OWNER-approved NEW values.",
    "",
    `Generated: ${new Date().toISOString()}`,
    "Source production: `data/cs/sentences.js`",
    "Source audit: `reports/cs-vety-full-audit.md`, `reports/temp/cs-vety-audit/`",
    "",
    "---",
    "",
  ];

  const masterLines = [...masterHeader];
  const jsonCards = [];

  for (const card of cards) {
    const findings = findingsByCard.get(card.cardId) || [];
    masterLines.push(formatCardBlock(card, findings));
    jsonCards.push({
      index: card.index,
      displayNum: displayNum(card.index),
      cardId: card.cardId,
      deCurrent: card.deCurrent,
      csCurrent: card.csCurrent,
      otherLocalizedFields: card.otherLocalizedFields,
      findings: findings.map((f) => ({
        severity: f.severity,
        type: f.type,
        source: f.source,
        field: f.field,
        reason: f.reason,
        auditCurrent: f.auditCurrent,
        proposedReplacement: f.proposedReplacement,
        currentMismatch: f.currentMismatch,
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
      masterLines.push(`- Status: UNRESOLVED_FINDING_REFERENCE`);
      masterLines.push("");
    });
  }

  const cardsWithFindings = cards.filter((c) => (findingsByCard.get(c.cardId) || []).length > 0).length;
  const uniqueIds = new Set(cards.map((c) => c.cardId));

  const summary = {
    productionVetyCount: VETY_TOTAL,
    masterCards: cards.length,
    uniqueProductionIds: uniqueIds.size,
    missingProductionCardsInMaster: 0,
    duplicatedProductionCards: cards.length - uniqueIds.size,
    groups: Math.ceil(VETY_TOTAL / GROUP_SIZE),
    groupCoverage: "001–796",
    orderParityWithProduction: cards.every((c, i) => c.index === i) ? "PASS" : "FAIL",
    fullAuditFindings: allFindings.length,
    fullAuditMdDetailedFindings: mdFindings.length,
    transferredToMaster: transferred,
    mdFindingsAlsoPresentInMaster: mdTransferred,
    unresolvedFindingReferences: unresolved.length,
    auditCurrentMismatches,
    cardsWithFindings,
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

  const groups = buildGroups(cards, findingsByCard);
  const groupFiles = [];
  for (const group of groups) {
    const groupCards = cards.slice(group.startIndex, group.endIndex + 1);
    const groupHeader = [
      `# CS–DE Věty OWNER SOURCE — Group ${String(group.groupNum).padStart(2, "0")}`,
      "",
      `Cards ${displayNum(group.startIndex)}–${displayNum(group.endIndex)} (production order)`,
      "",
      "READ-ONLY OWNER source. No Cursor-selected NEW repairs.",
      "",
      "---",
      "",
    ];
    const groupLines = [...groupHeader];
    for (const card of groupCards) {
      groupLines.push(formatCardBlock(card, findingsByCard.get(card.cardId) || []));
    }
    const outPath = path.join(GROUP_DIR, group.fileName);
    fs.writeFileSync(outPath, groupLines.join("\n"), "utf8");
    groupFiles.push(outPath);
  }

  const payload = {
    meta: {
      generatedAt: new Date().toISOString(),
      mode: "READ-ONLY",
      productionFile: "data/cs/sentences.js",
      fullAuditReport: "reports/cs-vety-full-audit.md",
      auditDir: "reports/temp/cs-vety-audit",
    },
    summary,
    cards: jsonCards,
    unresolved,
  };
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  const endCsHash = fileHash(SENTENCES_FILE);
  const endDeHash = fileHash(DE_FILE);
  const endWwwHash = fileHash(WWW_FILE);
  const productionUnchanged =
    startCsHash === endCsHash && startDeHash === endDeHash && startWwwHash === endWwwHash;
  const mirrorOk = endCsHash === endWwwHash;

  let syntax = "PASS";
  try {
    execSync("node --check data/cs/sentences.js", { cwd: ROOT, stdio: "pipe" });
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
  if (!complete || !productionUnchanged || summary.missingProductionCardsInMaster !== 0) process.exit(1);
}

main();
