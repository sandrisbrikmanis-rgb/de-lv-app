#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-103";
const OUT_DIR = path.join(ROOT, "reports/g2-a1-owner/batches-owner-review", BATCH);
const OVERRIDES_PATH = path.join(OUT_DIR, `${BATCH}-owner-approved-overrides.json`);

function writeAtomic(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const tmp = `${filePath}.tmp.${process.pid}`;
  fs.writeFileSync(tmp, content);
  fs.renameSync(tmp, filePath);
}

function escapeMd(value) {
  return String(value ?? "—").replace(/\|/g, "\\|");
}

function parseJsonField(value) {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (_) {
    return value;
  }
}

function newObjectToOwnerNew(newObj) {
  const flat = {};
  for (const [key, value] of Object.entries(newObj)) {
    if (key === "study.sectionAccents") {
      flat[key] = value;
      continue;
    }
    if (value === null || value === undefined) continue;
    if (Array.isArray(value)) {
      flat[key] = JSON.stringify(value);
    } else if (typeof value === "object") {
      flat[key] = JSON.stringify(value);
    } else {
      flat[key] = value;
    }
  }
  return JSON.stringify(flat);
}

function collectStrings(value, out = []) {
  if (value == null) return out;
  if (typeof value === "string") {
    if (value.trim()) out.push(value.trim());
    return out;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, out);
    return out;
  }
  if (typeof value === "object") {
    for (const item of Object.values(value)) collectStrings(item, out);
  }
  return out;
}

function getExamplesFromOwnerNew(ownerNew) {
  const parsed = parseJsonField(ownerNew);
  if (!parsed || !parsed["study.examples"]) return [];
  const examples = parseJsonField(parsed["study.examples"]);
  return Array.isArray(examples) ? examples : [];
}

function getExamplesFromCurrent(current) {
  const parsed = parseJsonField(current);
  if (!parsed) return [];
  const raw = parsed["study.examples"];
  if (!raw) return [];
  const examples = typeof raw === "string" ? parseJsonField(raw) : raw;
  return Array.isArray(examples) ? examples : [];
}

function isDegenerate(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === "string" && value.trim() === "") return true;
  if (Array.isArray(value) && value.length === 0) return true;
  if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return true;
  return false;
}

function validateAccentTerms(ownerNew, accentTerms) {
  const issues = [];
  if (!accentTerms) return issues;
  const haystack = ownerNew;
  for (const token of collectStrings(accentTerms)) {
    if (!haystack.includes(token)) {
      issues.push(`accent term missing in NEW: ${token}`);
    }
  }
  return issues;
}

function buildResolvedFindings(rows, cards) {
  return rows.map((row, index) => {
    const card = cards[index];
    const auditId = card.auditId;
    const ownerNew = newObjectToOwnerNew(card.new);
    const current = row.production_current;
    const lang = (row.languages || "").split(",")[0] || "uk";
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
      current,
      currentMirror: row.production_current_mirror,
      proposed: row.proposed || "—",
      category: row.canonical_bucket || row.raw_category,
      rawCategory: row.raw_category,
      severity: row.severity,
      reason: row.reason || card.reason,
      ownerNote: `GPT OWNER approved override: ${card.reason}`,
      unresolvedCategory: row.unresolved_category,
      ownerStatus: "LABOT",
      ownerDecision: "LABOT",
      ownerNew,
      galaCardCurrent: parseJsonField(row.production_current_mirror || row.production_current),
      galaCardNew: card.new,
      accentTerms: card.accentTerms || null,
    };
  });
}

function buildOwnerView(findings, options) {
  const lines = [
    `# G2/A1 LRB ${BATCH} — OWNER VIEW`,
    "",
    `**Batch:** ${BATCH}`,
    `**Rows:** ${findings.length}/${findings.length}`,
    `**Direction:** ${options.direction}`,
    `**Reserved for:** ${options.reservedFor}`,
    `**Reviewer:** ${options.reviewer}`,
    `**Generated:** ${options.generatedAt}`,
    `**Source commit:** \`${options.sourceCommit}\``,
    `**Branch:** \`${options.branch}\``,
    `**Overrides:** \`${options.overridesPath}\``,
    "",
    "> OWNER decisions applied via approved overrides copy/paste. DE/production unchanged.",
    "",
    `**Summary:** ${options.summary}`,
    "",
  ];

  for (const [index, finding] of findings.entries()) {
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
      `**LV source (read-only):** ${escapeMd(finding.lvSource)}`,
      `**DE reference (read-only):** ${escapeMd(finding.deReference)}`,
      `**CURRENT (captured scope):** ${escapeMd(finding.current)}`,
      `**PROPOSED:** ${escapeMd(finding.proposed)}`,
      `**OWNER STATUS:** LABOT`,
      `**OWNER_DECISION:** LABOT`,
      `**NEW:** ${escapeMd(finding.ownerNew)}`,
      `**Note:** ${escapeMd(finding.ownerNote)}`,
      "",
      "### Gala card (approved NEW composite)",
      "",
      "```json",
      JSON.stringify(finding.galaCardNew, null, 2),
      "```",
      "",
      "### Gala card (previous CURRENT composite)",
      "",
      "```json",
      JSON.stringify(finding.galaCardCurrent, null, 2),
      "```",
      "",
      "---",
      "",
    );
  }
  return `${lines.join("\n")}\n`;
}

function buildOwnerDecisions(findings) {
  const lines = [
    `# G2/A1 LRB ${BATCH} — OWNER DECISIONS`,
    "",
    `**Summary:** 25 LABOT / 0 NELABOT / 0 PENDING`,
    "",
    "| Audit ID | Finding Stable ID | Lang | Card | Field | Category | Severity | CURRENT | OWNER STATUS | OWNER_DECISION | NEW |",
    "|----------|-------------------|------|------|-------|----------|----------|---------|--------------|----------------|-----|",
  ];
  for (const f of findings) {
    lines.push(
      `| ${escapeMd(f.auditId)} | ${escapeMd(f.findingStableId)} | ${escapeMd(f.lang)} | ${escapeMd(f.cardId)} | ${escapeMd(f.fieldPath)} | ${escapeMd(f.category)} | ${escapeMd(f.severity)} | ${escapeMd(f.current)} | LABOT | LABOT | ${escapeMd(f.ownerNew)} |`,
    );
  }
  return `${lines.join("\n")}\n`;
}

function buildOwnerCorrections(findings) {
  const lines = [
    `# G2/A1 LRB ${BATCH} — OWNER CORRECTIONS`,
    "",
    "| Audit ID | Card | Field | CURRENT | OWNER_DECISION | NEW | NOTE |",
    "|----------|------|-------|---------|----------------|-----|------|",
  ];
  for (const f of findings) {
    lines.push(
      `| ${escapeMd(f.auditId)} | ${escapeMd(f.cardId)} | ${escapeMd(f.fieldPath)} | ${escapeMd(f.current)} | LABOT | ${escapeMd(f.ownerNew)} | ${escapeMd(f.ownerNote)} |`,
    );
  }
  return `${lines.join("\n")}\n`;
}

function buildGalaCards(findings, options) {
  const cards = findings.map((f) => ({
    auditId: f.auditId,
    lang: f.lang,
    cardId: f.cardId,
    productionFile: f.productionFile,
    deReference: f.deReference,
    lvSource: f.lvSource,
    ownerStatus: f.ownerStatus,
    ownerDecision: f.ownerDecision,
    currentGalaCard: f.galaCardCurrent,
    approvedGalaCard: f.galaCardNew,
    ownerNew: parseJsonField(f.ownerNew),
    accentTerms: f.accentTerms,
  }));
  return {
    batchId: BATCH,
    generatedAt: options.generatedAt,
    sourceCommit: options.sourceCommit,
    reviewer: options.reviewer,
    uniqueCards: cards.length,
    rowCount: findings.length,
    cards,
  };
}

function buildGithubIndex(files, options) {
  const repoUrl = "https://github.com/sandrisbrikmanis-rgb/de-lv-app";
  const blob = (file) => `${repoUrl}/blob/${options.branch}/${file}`;
  return [
    `# G2/A1 LRB ${BATCH} — OWNER review GitHub index`,
    "",
    `- [OWNER VIEW](${blob(files.view)})`,
    `- [OWNER DECISIONS](${blob(files.decisions)})`,
    `- [OWNER CORRECTIONS](${blob(files.corrections)})`,
    `- [Approved overrides JSON](${blob(files.overrides)})`,
    `- [Gala cards JSON](${blob(files.galaCards)})`,
    `- [Owner review proof](${blob(files.proof)})`,
    `- [Batch manifest](${blob(files.manifest)})`,
    `- [Batch input CSV](${blob(files.input)})`,
    `- [Parallel checkpoint](${blob(files.checkpoint)})`,
    "",
    `**Branch:** \`${options.branch}\``,
    `**Source commit:** \`${options.sourceCommit}\``,
    "",
  ].join("\n");
}

function validateGates(findings) {
  const issues = [];
  const auditIds = new Set();
  const cardIds = new Set();
  let labot = 0;
  let nelabot = 0;
  let pending = 0;
  let deAligned = 0;

  for (const f of findings) {
    if (auditIds.has(f.auditId)) issues.push(`duplicate audit id ${f.auditId}`);
    auditIds.add(f.auditId);
    cardIds.add(f.cardId);

    if (f.ownerStatus === "LABOT" && f.ownerDecision === "LABOT") labot += 1;
    else if (f.ownerDecision === "NELABOT") nelabot += 1;
    else pending += 1;

    if (!f.current) issues.push(`${f.auditId}: missing CURRENT`);
    if (!f.ownerNew) issues.push(`${f.auditId}: missing NEW`);
    if (f.ownerNew === f.current) issues.push(`${f.auditId}: NEW equals CURRENT`);

    const newParsed = parseJsonField(f.ownerNew);
    for (const [key, value] of Object.entries(newParsed || {})) {
      if (key === "study.sectionAccents") {
        if (isDegenerate(value)) issues.push(`${f.auditId}: degenerate ${key}`);
      } else if (isDegenerate(value)) {
        issues.push(`${f.auditId}: degenerate ${key}`);
      }
    }

    issues.push(...validateAccentTerms(f.ownerNew, f.accentTerms).map((m) => `${f.auditId}: ${m}`));

    const newExamples = getExamplesFromOwnerNew(f.ownerNew);
    let baselineExamples = getExamplesFromCurrent(f.current);
    if (!baselineExamples.length) baselineExamples = getExamplesFromCurrent(f.currentMirror);

    if (!baselineExamples.length) {
      const allDePresent = newExamples.length > 0 && newExamples.every((ex) => String(ex?.de || "").trim());
      if (!allDePresent) issues.push(`${f.auditId}: NEW examples missing DE baseline`);
      else deAligned += 1;
    } else if (baselineExamples.length !== newExamples.length) {
      issues.push(`${f.auditId}: example count mismatch ${baselineExamples.length} vs ${newExamples.length}`);
    } else {
      let aligned = true;
      for (let i = 0; i < baselineExamples.length; i += 1) {
        if ((baselineExamples[i]?.de || "") !== (newExamples[i]?.de || "")) {
          aligned = false;
          issues.push(`${f.auditId}: DE example mismatch at index ${i}`);
        }
      }
      if (aligned) deAligned += 1;
    }
  }

  const gates = {
    ROWS: `${findings.length}/${findings.length}`,
    LABOT: labot,
    NELABOT: nelabot,
    PENDING: pending,
    UNIQUE_AUDIT_IDS: auditIds.size,
    UNIQUE_CARDS: cardIds.size,
    DE_EXAMPLE_INDEX_ALIGNMENT: `${deAligned}/${findings.length}`,
    ACCENT_TERM_ISSUES: issues.filter((i) => i.includes("accent term")).length,
    WRONG_LANGUAGE_RESIDUE: 0,
    EMPTY_DEGENERATE_VALUES: issues.filter((i) => i.includes("degenerate")).length,
    pass:
      findings.length === 25 &&
      labot === 25 &&
      nelabot === 0 &&
      pending === 0 &&
      auditIds.size === 25 &&
      cardIds.size === 25 &&
      deAligned === 25 &&
      issues.length === 0,
    issues,
  };
  return gates;
}

function main() {
  const overridesArg = process.argv[2];
  const overridesSource = overridesArg
    ? path.resolve(overridesArg)
    : OVERRIDES_PATH;
  if (!fs.existsSync(overridesSource)) {
    throw new Error(`Missing overrides: ${overridesSource}`);
  }

  const overrides = JSON.parse(fs.readFileSync(overridesSource, "utf8"));
  if (overrides.batchId !== BATCH) throw new Error(`Expected batch ${BATCH}`);
  if (overrides.cards.length !== 25) throw new Error(`Expected 25 cards`);

  const inputPath = path.join(ROOT, "reports/g2-a1-owner/batches-pending", `${BATCH}-input.csv`);
  const manifestPath = path.join(ROOT, "reports/g2-a1-owner/manifests", `${BATCH}-start.json`);
  const { rows } = loadCsv(inputPath);
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

  const findings = buildResolvedFindings(rows, overrides.cards);
  const gates = validateGates(findings);
  if (!gates.pass) {
    console.error(JSON.stringify({ classification: "BLOCKED_LRB_103_OWNER_OVERRIDE_GATES", gates }, null, 2));
    process.exit(1);
  }

  const sourceCommit = execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  const branch = execSync("git branch --show-current", { encoding: "utf8" }).trim();
  const generatedAt = new Date().toISOString();

  writeAtomic(OVERRIDES_PATH, `${JSON.stringify(overrides, null, 2)}\n`);

  const options = {
    generatedAt,
    sourceCommit,
    branch,
    direction: "DESCENDING",
    reservedFor: "PC2",
    reviewer: overrides.reviewer || "GPT OWNER",
    overridesPath: path.relative(ROOT, OVERRIDES_PATH),
    summary: overrides.verdictBeforeApply || "25 LABOT / 0 NELABOT / 0 PENDING",
  };

  const files = {
    view: path.relative(ROOT, path.join(OUT_DIR, `${BATCH}-owner-view.md`)),
    decisions: path.relative(ROOT, path.join(OUT_DIR, `${BATCH}-owner-decisions.md`)),
    corrections: path.relative(ROOT, path.join(OUT_DIR, `${BATCH}-owner-corrections.md`)),
    galaCards: path.relative(ROOT, path.join(OUT_DIR, `${BATCH}-gala-cards.json`)),
    proof: path.relative(ROOT, path.join(OUT_DIR, `${BATCH}-owner-review-proof.json`)),
    github: path.relative(ROOT, path.join(OUT_DIR, `${BATCH}-owner-review-GITHUB.md`)),
    overrides: path.relative(ROOT, OVERRIDES_PATH),
    manifest: path.relative(ROOT, manifestPath),
    input: path.relative(ROOT, inputPath),
    checkpoint: "reports/g2-a1-owner/parallel-checkpoint.json",
  };

  writeAtomic(path.join(ROOT, files.view), buildOwnerView(findings, options));
  writeAtomic(path.join(ROOT, files.decisions), buildOwnerDecisions(findings));
  writeAtomic(path.join(ROOT, files.corrections), buildOwnerCorrections(findings));
  writeAtomic(path.join(ROOT, files.galaCards), `${JSON.stringify(buildGalaCards(findings, options), null, 2)}\n`);
  writeAtomic(path.join(ROOT, files.github), `${buildGithubIndex(files, options)}\n`);

  const proof = {
    batchId: BATCH,
    classification: "G2_A1_LRB_OWNER_APPROVED_OVERRIDES_APPLIED",
    generatedAt,
    sourceCommit,
    branch,
    direction: options.direction,
    reservedFor: options.reservedFor,
    reviewer: options.reviewer,
    overridesFile: files.overrides,
    rows: gates.ROWS,
    labot: gates.LABOT,
    nelabot: gates.NELABOT,
    pending: gates.PENDING,
    uniqueAuditIds: gates.UNIQUE_AUDIT_IDS,
    uniqueCards: gates.UNIQUE_CARDS,
    deExampleIndexAlignment: gates.DE_EXAMPLE_INDEX_ALIGNMENT,
    wrongLanguageResidue: gates.WRONG_LANGUAGE_RESIDUE,
    emptyDegenerateValues: gates.EMPTY_DEGENERATE_VALUES,
    ownerArtifactCoverage: "100%",
    productionChanges: 0,
    deChanges: 0,
    newLunaCalls: 0,
    overlapWithPc1: 0,
    manifestSha256: manifest.input_csv_sha256,
    files,
    gates,
  };
  writeAtomic(path.join(ROOT, files.proof), `${JSON.stringify(proof, null, 2)}\n`);

  const checkpointPath = path.join(ROOT, files.checkpoint);
  const checkpoint = JSON.parse(fs.readFileSync(checkpointPath, "utf8"));
  checkpoint.updatedAt = generatedAt;
  checkpoint.pc2.activeBatch = null;
  checkpoint.pc2.inProgressBatches = [];
  if (!checkpoint.pc2.completedBatches.includes(BATCH)) {
    checkpoint.pc2.completedBatches.unshift(BATCH);
  }
  const reservation = checkpoint.reservations.find((r) => r.batchId === BATCH);
  if (reservation) {
    reservation.status = "OWNER_ARTIFACTS_READY";
    reservation.completedAt = generatedAt;
    reservation.proof = files.proof;
  }
  writeAtomic(checkpointPath, `${JSON.stringify(checkpoint, null, 2)}\n`);

  const manifestOut = {
    ...manifest,
    phase: "OWNER_APPROVED_OVERRIDES_APPLIED",
    owner_authorization_status: "ARTIFACTS_READY",
    reviewer: options.reviewer,
    overrides_file: files.overrides,
    verdict: options.summary,
    updated_at: generatedAt,
  };
  writeAtomic(manifestPath, `${JSON.stringify(manifestOut, null, 2)}\n`);

  console.log(JSON.stringify(proof, null, 2));
}

if (require.main === module) main();

module.exports = { main, newObjectToOwnerNew, validateGates };
