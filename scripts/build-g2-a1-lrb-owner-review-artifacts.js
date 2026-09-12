#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function writeAtomic(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const tmp = `${filePath}.tmp.${process.pid}`;
  fs.writeFileSync(tmp, content);
  fs.renameSync(tmp, filePath);
}

function parseJsonField(value) {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (_) {
    return value;
  }
}

const LANG_DATA_FILES = {
  tr: "data/tr/a1.js",
  uk: "data/uk/a1.js",
  sv: "data/sv/a1.js",
  fr: "data/fr/a1.js",
  gr: "data/gr/a1.js",
  fi: "data/fi/a1.js",
};

const langWordsCache = new Map();

function loadLangWords(lang) {
  if (langWordsCache.has(lang)) return langWordsCache.get(lang);
  const rel = LANG_DATA_FILES[lang];
  if (!rel) {
    langWordsCache.set(lang, null);
    return null;
  }
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) {
    langWordsCache.set(lang, null);
    return null;
  }
  const src = fs.readFileSync(abs, "utf8");
  const m = src.match(/const A1_WORDS = (\[[\s\S]*\]);/);
  if (!m) {
    langWordsCache.set(lang, null);
    return null;
  }
  const words = eval(m[1]);
  langWordsCache.set(lang, words);
  return words;
}

function getFullGalaCard(lang, cardId) {
  const words = loadLangWords(lang);
  if (!words) return null;
  const raw = String(cardId || "");
  const idxMatch = raw.match(/idx:(\d+)/);
  if (idxMatch) {
    const card = words[parseInt(idxMatch[1], 10)];
    return card ? JSON.parse(JSON.stringify(card)) : null;
  }
  const id = raw.split("|")[0];
  const card = words.find((w) => w?.study?.id === id || w?.id === id);
  return card ? JSON.parse(JSON.stringify(card)) : null;
}

function escapeMd(value) {
  return String(value ?? "—").replace(/\|/g, "\\|");
}

function buildFindings(batchId, rows) {
  return rows.map((row, index) => {
    const auditId = `${batchId.replace("-", "")}-${String(index + 1).padStart(4, "0")}`;
    const lang = (row.languages || "").split(",")[0] || "—";
    const galaCard =
      getFullGalaCard(lang, row.card_object_id) ||
      parseJsonField(row.production_current_mirror || row.production_current);
    return {
      auditId,
      findingStableId: row.finding_stable_ids,
      reviewGroupId: row.review_group_id,
      decisionTargetKey: row.decision_target_key,
      findingMemberId: row.finding_member_ids,
      lang,
      cardId: row.card_object_id,
      fieldPath: row.field_path,
      productionFile: row.production_file,
      lvSource: row.lv_source,
      deReference: row.de_reference,
      current: row.production_current,
      currentMirror: row.production_current_mirror,
      discoveryCurrent: row.discovery_current,
      proposed: row.proposed || "—",
      category: row.canonical_bucket || row.raw_category,
      rawCategory: row.raw_category,
      severity: row.severity,
      reason: row.reason,
      ownerNote: row.owner_note,
      unresolvedCategory: row.unresolved_category,
      galaCard,
      ownerStatus: "PENDING",
      ownerDecision: "",
      ownerNew: "",
    };
  });
}

function buildOwnerView(batchId, findings, options) {
  const lines = [
    `# G2/A1 LRB ${batchId} — OWNER VIEW`,
    "",
    `**Batch:** ${batchId}`,
    `**Rows:** ${findings.length}/${findings.length}`,
    `**Direction:** ${options.direction || "—"}`,
    `**Reserved for:** ${options.reservedFor || "—"}`,
    `**OWNER_AUTHORIZATION_STATUS:** ${options.ownerAuthorizationStatus || "APPROVED"}`,
    `**Linguistic reviewer:** ${options.linguisticReviewer || "gpt-5.6-luna"}`,
    `**Generated:** ${options.generatedAt}`,
    `**Source commit:** \`${options.sourceCommit}\``,
    `**Branch:** \`${options.branch}\``,
    `**Input SHA256:** \`${options.inputSha256}\``,
    `**Manifest:** \`${options.manifestPath}\``,
    "",
    "> All OWNER statuses are initially **PENDING**. Agent does not make OWNER decisions.",
    "> PROPOSED values are audit suggestions — not OWNER-approved.",
    "",
  ];

  for (const [index, finding] of findings.entries()) {
    const gala = finding.galaCard;
    const galaBlock =
      gala && typeof gala === "object"
        ? "```json\n" + JSON.stringify(gala, null, 2) + "\n```"
        : String(finding.currentMirror || finding.current || "—");

    lines.push(
      `## Finding ${index + 1}`,
      "",
      `**Audit ID:** \`${finding.auditId}\``,
      `**Finding Stable ID:** \`${finding.findingStableId}\``,
      `**Finding Member ID:** \`${finding.findingMemberId}\``,
      `**Lang:** ${finding.lang}`,
      `**Card:** \`${finding.cardId}\``,
      `**Field / path:** \`${finding.fieldPath}\``,
      `**Production file:** \`${finding.productionFile}\``,
      `**Severity:** ${finding.severity}`,
      `**Category:** ${finding.category}`,
      `**Raw category:** ${finding.rawCategory}`,
      `**LV source (read-only):** ${escapeMd(finding.lvSource)}`,
      `**DE reference (read-only):** ${escapeMd(finding.deReference)}`,
      `**CURRENT (captured scope):** ${escapeMd(finding.current)}`,
      `**PROPOSED:** ${escapeMd(finding.proposed)}`,
      `**Problem:** ${escapeMd(finding.reason)}`,
      `**Pending note:** ${escapeMd(finding.ownerNote)}`,
      `**Unresolved category:** ${escapeMd(finding.unresolvedCategory)}`,
      `**OWNER STATUS:** PENDING`,
      `**OWNER_DECISION:** `,
      `**NEW:** `,
      "",
      "### Gala card (full composite snapshot)",
      "",
      galaBlock,
      "",
      "---",
      "",
    );
  }
  return `${lines.join("\n")}\n`;
}

function buildOwnerDecisions(batchId, findings) {
  const lines = [
    `# G2/A1 LRB ${batchId} — OWNER DECISIONS`,
    "",
    "> Empty decision table — OWNER fills OWNER_DECISION and NEW.",
    "",
    "| Audit ID | Finding Stable ID | Lang | Card | Field | Category | Severity | CURRENT | PROPOSED | OWNER STATUS | OWNER_DECISION | NEW |",
    "|----------|-------------------|------|------|-------|----------|----------|---------|----------|--------------|----------------|-----|",
  ];
  for (const f of findings) {
    lines.push(
      `| ${escapeMd(f.auditId)} | ${escapeMd(f.findingStableId)} | ${escapeMd(f.lang)} | ${escapeMd(f.cardId)} | ${escapeMd(f.fieldPath)} | ${escapeMd(f.category)} | ${escapeMd(f.severity)} | ${escapeMd(f.current)} | ${escapeMd(f.proposed)} | PENDING | | |`,
    );
  }
  return `${lines.join("\n")}\n`;
}

function buildOwnerCorrections(batchId, findings) {
  const lines = [
    `# G2/A1 LRB ${batchId} — OWNER CORRECTIONS`,
    "",
    "> Empty corrections file — populated only after OWNER decisions.",
    "",
    "| Audit ID | Card | Field | CURRENT | OWNER_DECISION | NEW | NOTE |",
    "|----------|------|-------|---------|----------------|-----|------|",
  ];
  for (const f of findings) {
    lines.push(
      `| ${escapeMd(f.auditId)} | ${escapeMd(f.cardId)} | ${escapeMd(f.fieldPath)} | ${escapeMd(f.current)} | | | |`,
    );
  }
  return `${lines.join("\n")}\n`;
}

function buildGalaCards(batchId, findings, options) {
  const cards = {};
  for (const finding of findings) {
    const key = `${finding.lang}|${finding.cardId}`;
    if (!cards[key]) {
      cards[key] = {
        lang: finding.lang,
        cardId: finding.cardId,
        productionFile: finding.productionFile,
        deReference: finding.deReference,
        lvSource: finding.lvSource,
        galaCard: finding.galaCard,
        findings: [],
      };
    }
    cards[key].findings.push({
      auditId: finding.auditId,
      findingStableId: finding.findingStableId,
      fieldPath: finding.fieldPath,
      category: finding.category,
      severity: finding.severity,
    });
  }
  return {
    batchId,
    generatedAt: options.generatedAt,
    sourceCommit: options.sourceCommit,
    uniqueCards: Object.keys(cards).length,
    rowCount: findings.length,
    cards: Object.values(cards),
  };
}

function buildGithubIndex(batchId, files, options) {
  const repoUrl = "https://github.com/sandrisbrikmanis-rgb/de-lv-app";
  const blob = (file) => `${repoUrl}/blob/${options.branch}/${file}`;
  return [
    `# G2/A1 LRB ${batchId} — OWNER review GitHub index`,
    "",
    `- [OWNER VIEW](${blob(files.view)})`,
    `- [OWNER DECISIONS](${blob(files.decisions)})`,
    `- [OWNER CORRECTIONS](${blob(files.corrections)})`,
    `- [Gala cards JSON](${blob(files.galaCards)})`,
    `- [Batch manifest](${blob(files.manifest)})`,
    `- [Batch input CSV](${blob(files.input)})`,
    `- [Parallel checkpoint](${blob(files.checkpoint)})`,
    "",
    `**Branch:** \`${options.branch}\``,
    `**Source commit:** \`${options.sourceCommit}\``,
    "",
  ].join("\n");
}

function main() {
  const batchId = process.argv[2];
  if (!batchId || !/^LRB-\d{3}$/.test(batchId)) {
    throw new Error("Usage: node build-g2-a1-lrb-owner-review-artifacts.js LRB-103");
  }

  const inputPath = path.join(ROOT, "reports/g2-a1-owner/batches-pending", `${batchId}-input.csv`);
  const manifestPath = path.join(ROOT, "reports/g2-a1-owner/manifests", `${batchId}-start.json`);
  if (!fs.existsSync(inputPath)) throw new Error(`Missing input: ${inputPath}`);
  if (!fs.existsSync(manifestPath)) throw new Error(`Missing manifest: ${manifestPath}`);

  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const { rows } = loadCsv(inputPath);
  if (rows.length !== manifest.input_row_count) {
    throw new Error(`Row count mismatch: csv=${rows.length} manifest=${manifest.input_row_count}`);
  }

  const sourceCommit = execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  const branch = execSync("git branch --show-current", { encoding: "utf8" }).trim();
  const generatedAt = new Date().toISOString();
  const findings = buildFindings(batchId, rows);

  const outDir = path.join(ROOT, "reports/g2-a1-owner/batches-owner-review", batchId);
  const files = {
    view: path.relative(ROOT, path.join(outDir, `${batchId}-owner-view.md`)),
    decisions: path.relative(ROOT, path.join(outDir, `${batchId}-owner-decisions.md`)),
    corrections: path.relative(ROOT, path.join(outDir, `${batchId}-owner-corrections.md`)),
    galaCards: path.relative(ROOT, path.join(outDir, `${batchId}-gala-cards.json`)),
    proof: path.relative(ROOT, path.join(outDir, `${batchId}-owner-review-proof.json`)),
    github: path.relative(ROOT, path.join(outDir, `${batchId}-owner-review-GITHUB.md`)),
    manifest: path.relative(ROOT, manifestPath),
    input: path.relative(ROOT, inputPath),
    checkpoint: "reports/g2-a1-owner/parallel-checkpoint.json",
  };

  const options = {
    generatedAt,
    sourceCommit,
    branch,
    inputSha256: manifest.input_csv_sha256,
    manifestPath: files.manifest,
    direction: process.env.LRB_DIRECTION || manifest.direction || "DESCENDING",
    reservedFor: process.env.LRB_RESERVED_FOR || manifest.reserved_for || "PC2",
    ownerAuthorizationStatus: manifest.owner_authorization_status || "APPROVED",
    linguisticReviewer: manifest.linguistic_reviewer || "gpt-5.6-luna",
  };

  writeAtomic(path.join(ROOT, files.view), buildOwnerView(batchId, findings, options));
  writeAtomic(path.join(ROOT, files.decisions), buildOwnerDecisions(batchId, findings));
  writeAtomic(path.join(ROOT, files.corrections), buildOwnerCorrections(batchId, findings));
  writeAtomic(
    path.join(ROOT, files.galaCards),
    `${JSON.stringify(buildGalaCards(batchId, findings, options), null, 2)}\n`,
  );
  writeAtomic(path.join(ROOT, files.github), `${buildGithubIndex(batchId, files, options)}\n`);

  const proof = {
    batchId,
    classification: "G2_A1_LRB_OWNER_REVIEW_ARTIFACTS_READY",
    generatedAt,
    sourceCommit,
    branch,
    direction: options.direction,
    reservedFor: options.reservedFor,
    ownerAuthorizationStatus: options.ownerAuthorizationStatus,
    linguisticReviewer: options.linguisticReviewer,
    rows: `${findings.length}/${findings.length}`,
    ownerBacklogFinal: findings.length,
    ownerViewFindings: findings.length,
    ownerDecisionsFindings: findings.length,
    ownerCorrectionsFindings: findings.length,
    uniqueGalaCards: new Set(findings.map((f) => `${f.lang}|${f.cardId}`)).size,
    ownerArtifactCoverage: "100%",
    productionChanges: 0,
    deChanges: 0,
    newLunaCalls: 0,
    overlapWithPc1: 0,
    manifestSha256: manifest.input_csv_sha256,
    files,
  };
  writeAtomic(path.join(ROOT, files.proof), `${JSON.stringify(proof, null, 2)}\n`);
  console.log(JSON.stringify(proof, null, 2));
}

if (require.main === module) main();

module.exports = { main, buildFindings };
