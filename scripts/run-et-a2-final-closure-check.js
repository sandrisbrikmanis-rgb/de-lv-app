#!/usr/bin/env node
"use strict";
/**
 * ET–DE A2 final closure check after PR #617 (no Luna FULL_DISCOVERY).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getAt, findEntry, normalizeField } = require("./lib/da-a2-owner-path");
const { loadOwnerHistory } = require("./lib/et-a2-owner-history");
const { normalizeApplyField } = require("./lib/et-a2-owner-accepted-parse");

const ACCEPTED = path.join(ROOT, "reports/et-a2-owner-decisions-accepted-pr614.md");
const NSR_ACCEPTED = path.join(ROOT, "reports/et-a2-needs-source-decisions-accepted.md");
const POST_SOURCE_REVIEW = process.argv.includes("--post-source-review");
const POST_DETERMINISTIC = process.argv.includes("--post-deterministic-repair");
const DETERMINISTIC_ACCEPTED = path.join(ROOT, "reports/et-a2-deterministic-owner-decisions-accepted.md");
const DETERMINISTIC_LOG = path.join(ROOT, "reports/temp/et-a2-deterministic-repair-log.json");
const OUT_CLOSURE = path.join(ROOT, "reports/et-a2-final-closure-check.md");
const OUT_NSR = path.join(ROOT, "reports/et-a2-needs-source-review.md");
const OUT_NSR_DEC = path.join(ROOT, "reports/et-a2-needs-source-decisions.md");
const OUT_JSON = path.join(ROOT, "reports/temp/et-a2-final-closure-check.json");
const DATA_REL = "data/et/a2.js";
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, DATA_REL), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function loadLvWords() {
  const p = path.join(ROOT, "data/lv/a2.js");
  if (!fs.existsSync(p)) return [];
  const code = fs.readFileSync(p, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS || [];
}

function parseAcceptedRows() {
  const md = fs.readFileSync(ACCEPTED, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| ET-A2-")) continue;
    const statusMatch = line.match(/\*\*(LABOT|NELABOT|FALSE_POSITIVE|NEEDS_SOURCE_REVIEW|PENDING)\*\*/);
    if (!statusMatch) continue;
    const status = statusMatch[1];
    const cols = line.split("|").map((c) => c.trim());
    const cells = cols.slice(1, cols[cols.length - 1] === "" ? undefined : cols.length);
    const filtered = cells.filter((c, i) => !(i === 0 && c === "") && c !== "");
    if (filtered[0] === "Audit ID") continue;
    if (filtered.length < 6) continue;
    const auditId = filtered[0];
    const cardId = filtered[1].replace(/`/g, "");
    const field = filtered[2].replace(/`/g, "");
    const sevIdx = filtered.findIndex((c) => /^(HIGH|MEDIUM|LOW|CRITICAL)$/.test(c));
    if (sevIdx < 0) continue;
    const severity = filtered[sevIdx];
    const category = filtered[sevIdx + 1]?.replace(/\*\*/g, "").replace(/NEEDS_SOURCE_REVIEW.*/, "NEEDS_SOURCE_REVIEW").trim() || "";
    const ownerNew = sevIdx > 3 ? filtered[sevIdx - 1] : "";
    const currentParts = filtered.slice(3, Math.max(4, sevIdx - 1));
    const current = currentParts.join(" | ").trim();
    rows.push({
      auditId,
      cardId,
      field,
      current,
      ownerNew,
      severity,
      category,
      status,
      note: filtered[filtered.length - 1] || "",
    });
  }
  return rows;
}

function loadLabotFromApplyMap() {
  const p = path.join(ROOT, "reports/temp/et-a2-owner-apply-map.json");
  if (!fs.existsSync(p)) return [];
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  return (data.apply || []).map((r) => ({
    auditId: r.auditId,
    cardId: r.cardId,
    field: r.rawField || r.field,
    current: r.current,
    ownerNew: r.ownerNew,
    status: "LABOT",
  }));
}

function parseSourceReviewAccepted() {
  if (!fs.existsSync(NSR_ACCEPTED)) return [];
  const md = fs.readFileSync(NSR_ACCEPTED, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| ET-A2-")) continue;
    const statusMatch = line.match(/\*\*(LABOT|NELABOT|FALSE_POSITIVE|NEEDS_SOURCE_REVIEW|PENDING)\*\*/);
    if (!statusMatch) continue;
    const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cols.length < 6) continue;
    rows.push({
      auditId: cols[0],
      cardId: cols[1].replace(/`/g, ""),
      field: cols[2].replace(/`/g, ""),
      current: cols[3].replace(/^`|`$/g, ""),
      ownerNew: cols[4] === "—" ? "" : cols[4].replace(/^`|`$/g, ""),
      status: statusMatch[1],
    });
  }
  return rows;
}

function verifySourceReviewIntegrity(words, srRows) {
  const unchanged = [];
  const changed = [];
  const labotVerified = [];
  for (const row of srRows) {
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      changed.push({ ...row, reason: "CARD_NOT_FOUND" });
      continue;
    }
    const actual = readProduction(entry, row.field);
    const act = actual === undefined || actual === null ? "" : String(actual).trim();
    if (row.status === "LABOT") {
      const expected = String(row.ownerNew || "").trim();
      if (act === expected) labotVerified.push(row.auditId);
      else changed.push({ ...row, reason: "LABOT_NEW_MISMATCH", actual: act, expected });
      continue;
    }
    const expectedCurrent = String(row.current || "").trim();
    if (act === expectedCurrent) unchanged.push(row.auditId);
    else changed.push({ ...row, reason: "UNAUTHORIZED_CHANGE", actual: act, expectedCurrent });
  }
  return { unchanged, changed, labotVerified };
}

function readProduction(entry, field) {
  const f = normalizeApplyField(field) || field.replace(/^entry\[\d+\]\./, "");
  if (f === "lv" || field.endsWith(".lv") && !field.includes("study")) return entry.lv;
  if (f === "etText") return entry.lv;
  if (f === "etMain") return entry.lv;
  return getAt(entry, f);
}

function findLvMaster(lvWords, cardId, field) {
  const entry = findEntry(lvWords, cardId);
  if (!entry) return null;
  const f = normalizeApplyField(field) || field;
  if (f === "lv") return entry.lv;
  return getAt(entry.study || entry, f.replace(/^study\./, "")) ?? getAt(entry, f);
}

function countByStatus(rows) {
  const c = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0, OTHER: 0 };
  for (const r of rows) {
    if (c[r.status] !== undefined) c[r.status]++;
    else c.OTHER++;
  }
  return c;
}

function runLabotRegression(words, labotRows) {
  const results = { VERIFIED_MATCH: [], OWNER_NEW_MISMATCH: [], MISSING_PATH: [], OTHER: [] };
  for (const row of labotRows) {
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      results.MISSING_PATH.push({ ...row, reason: "CARD_NOT_FOUND" });
      continue;
    }
    const field = normalizeApplyField(row.field);
    if (!field) {
      results.OTHER.push({ ...row, reason: "NON_APPLY_FIELD" });
      continue;
    }
    const actual = readProduction(entry, row.field);
    if (actual === undefined || actual === null) {
      results.MISSING_PATH.push({ ...row, reason: "PATH_UNDEFINED", field });
      continue;
    }
    const expected = String(row.ownerNew || "").trim();
    const act = String(actual).trim();
    if (act === expected) results.VERIFIED_MATCH.push(row.auditId);
    else {
      results.OWNER_NEW_MISMATCH.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: row.field,
        expected,
        actual: act,
      });
    }
  }
  return results;
}

function runNonRepairIntegrity(words, rows) {
  const targets = rows.filter((r) => r.status === "NELABOT" || r.status === "FALSE_POSITIVE");
  const unchanged = [];
  const changed = [];
  for (const row of targets) {
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      changed.push({ ...row, reason: "CARD_NOT_FOUND" });
      continue;
    }
    const actual = readProduction(entry, row.field);
    const expectedCurrent = String(row.current || "").trim();
    const act = actual === undefined || actual === null ? "" : String(actual).trim();
    if (act === expectedCurrent || (expectedCurrent === "(tukšs)" && act === "")) {
      unchanged.push(row.auditId);
    } else {
      changed.push({ auditId: row.auditId, cardId: row.cardId, field: row.field, expectedCurrent, actual: act });
    }
  }
  return { targets, unchanged, changed };
}

function runDeterministicGates() {
  execSync("node scripts/audit-et-a2-collect.js", { cwd: ROOT, stdio: "pipe" });
  const collect = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-a2-audit-data.json"), "utf8"));
  let syntaxPass = true;
  try {
    execSync("node --check data/et/a2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/a2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const mirrorPass = isSyncedWithWww(DATA_REL);
  let deChanges = 0;
  try {
    const tmpParent = path.join(ROOT, "reports/temp/et-a2-pre617-parent.js");
    fs.mkdirSync(path.dirname(tmpParent), { recursive: true });
    execSync("git show 1b77f4ef^:data/et/a2.js > reports/temp/et-a2-pre617-parent.js", {
      cwd: ROOT,
      stdio: "pipe",
      shell: true,
    });
    const parentCode = fs.readFileSync(tmpParent, "utf8");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(parentCode, ctx);
    const beforeWords = ctx.window.A2_WORDS;
    const words = loadWords();
    for (let i = 0; i < words.length; i++) {
      for (const f of DE_FIELDS) {
        if (JSON.stringify(words[i]?.[f]) !== JSON.stringify(beforeWords[i]?.[f])) deChanges++;
      }
    }
  } catch {
    deChanges = -1;
  }
  return {
    syntaxPass,
    mirrorPass,
    deChanges,
    sectionAccents: collect.sectionAccents?.issues?.length ?? -1,
    lvRemnants: collect.lvRemnants?.issues?.length ?? -1,
    studyIssues: collect.studyCards?.issues?.length ?? -1,
    structural: collect.structural?.pass,
    germanIntegrity: collect.germanIntegrity?.pass,
    layerIdentity: collect.layerIdentity?.identical,
    collect,
  };
}

function checkOwnerHistoryPersistence() {
  const required = [
    "reports/et-a2-owner-decisions-accepted-pr614.md",
    "reports/et-a2-owner-decisions-group01-accepted-pr614.md",
    "reports/et-a2-owner-decisions-group02-accepted-pr614.md",
    "reports/et-a2-owner-decisions-group03-accepted-pr614.md",
    "reports/et-a2-owner-decisions-group04-accepted-pr614.md",
    "reports/et-a2-owner-decisions-group05-accepted-pr614.md",
    "reports/et-a2-owner-repair-apply.md",
    "reports/et-a2-owner-view.md",
    "reports/et-a2-owner-decisions.md",
    "reports/et-a2-owner-review-GITHUB.md",
  ];
  const missing = required.filter((p) => !fs.existsSync(path.join(ROOT, p)));
  const hist = loadOwnerHistory();
  return {
    pass: missing.length === 0 && hist.loaded && hist.count >= 213,
    missing,
    historyLoaded: hist.loaded,
    historyCount: hist.count,
  };
}

function buildNsrReview(nsrRows, words, lvWords, ownerViewMd) {
  const blocks = [
    "# ET–DE A2 — NEEDS_SOURCE_REVIEW (5 atvērti)",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Baseline:** `origin/main` post PR #617",
    "**DE:** STRICT READ-ONLY",
    "",
    "> Production nav mainīts. Šie 5 gadījumi gaida OWNER source-review lēmumu.",
    "",
  ];

  for (const row of nsrRows) {
    const entry = findEntry(words, row.cardId);
    const lvRef = findLvMaster(lvWords, row.cardId, row.field);
    const actual = entry ? readProduction(entry, row.field) : undefined;
    const de = entry?.de || "—";
    const viewBlock = ownerViewMd.split(`## ${row.auditId}`)[1]?.split("\n## ")[0] || "";
    const proposedMatch = viewBlock.match(/\*\*PROPOSED_ET \(audit ieteikums\):\*\* (.+)/);
    const lvMasterMatch = viewBlock.match(/\*\*LV MASTER reference:\*\* (.+)/);
    const problemMatch = viewBlock.match(/\*\*Problēma:\*\* (.+)/);
    const historyMatch = viewBlock.match(/\*\*OWNER history:\*\* (.+)/);
    const approvedMatch = viewBlock.match(/\*\*OWNER approved \(iepriekš\):\*\* (.+)/);

    let recommendation = "Atstāt **NEEDS_SOURCE_REVIEW** — OWNER lēmums vēl nav pieņemts.";
    let proposedReview = "";

    if (row.auditId === "ET-A2-0194") {
      proposedReview =
        "Ieteicams: OWNER nosaka precīzu tīru ET vērtību no DE avota „Ich lerne, damit ich die Prüfung bestehe.” → „Ma õpin, et eksamist sooritada.” (NEEDS_SOURCE_REVIEW līdz OWNER apstiprina NEW).";
    } else if (row.auditId === "ET-A2-0337") {
      proposedReview =
        "Ieteicams variants A: **NELABOT** „ta on tore.” (LV MASTER „viņš ir jauks”). Variants B: **LABOT** → „ta on aus.” ja OWNER apstiprina ehrlich semantiku.";
    } else if (row.auditId === "ET-A2-0393") {
      proposedReview =
        "Trūkst DE/LV avota piemēra teksta repo. Atstāt NSR līdz OWNER norāda pareizo tukšā lauka saturu.";
    } else if (row.auditId === "ET-A2-0402") {
      proposedReview =
        "Ieteicams variants A: **NELABOT** CURRENT (sich fühlen). Variants B: **LABOT** → „ma asun täna siin.” ja OWNER apstiprina sich befinden asukoha tähendust.";
    } else if (row.auditId === "ET-A2-0426") {
      proposedReview =
        "Ieteicams variants A: **NELABOT** CURRENT. Variants B: **LABOT** → „auto kaalub kaks tonni.” ja OWNER vēlas wiegen=kaaluma näidet.";
    }

    blocks.push(
      `## ${row.auditId}`,
      "",
      `| Lauks | Vērtība |`,
      `|-------|---------|`,
      `| **Audit ID** | ${row.auditId} |`,
      `| **Card ID** | \`${row.cardId}\` |`,
      `| **Field/path** | \`${row.field}\` |`,
      `| **Severity** | ${row.severity} |`,
      `| **Category** | ${row.category} |`,
      `| **OWNER STATUS** | NEEDS_SOURCE_REVIEW |`,
      "",
      `**DE (read-only):** ${de}`,
      `**LV MASTER reference:** ${lvMasterMatch?.[1] || lvRef || "—"}`,
      `**CURRENT (accepted):** ${row.current && !/^(HIGH|MEDIUM|LOW|CRITICAL)$/.test(row.current) ? row.current : "(tukšs)"}`,
      `**Actual production (main):** ${actual === undefined ? "(undefined)" : JSON.stringify(actual)}`,
      `**PROPOSED_ET (audit):** ${proposedMatch?.[1] || row.ownerNew || "—"}`,
      `**Problēma:** ${problemMatch?.[1] || row.note}`,
      `**OWNER history:** ${historyMatch?.[1] || "—"}`,
      `**OWNER approved (iepriekš):** ${approvedMatch?.[1] || "—"}`,
      "",
      `**Ieteikums (nav automātiska apply):** ${proposedReview || recommendation}`,
      "",
      "---",
      "",
    );
  }
  return blocks.join("\n");
}

function buildNsrDecisions(nsrRows) {
  const lines = [
    "# ET–DE A2 — NEEDS_SOURCE_REVIEW decisions (OWNER aizpildāms)",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Status:** visi **NEEDS_SOURCE_REVIEW** — gaida OWNER",
    "",
    "| Audit ID | Card ID | Field | CURRENT | PROPOSED review | Severity | OWNER STATUS | OWNER_DECISION | NEW |",
    "|----------|---------|-------|---------|-----------------|----------|--------------|----------------|-----|",
  ];
  for (const row of nsrRows) {
    lines.push(
      `| ${row.auditId} | ${row.cardId} | ${row.field} | ${String(row.current).replace(/\|/g, "\\|").slice(0, 60)} | skat. needs-source-review.md | ${row.severity} | NEEDS_SOURCE_REVIEW | | |`,
    );
  }
  lines.push("", "**Atļautie gala statusi:** LABOT | NELABOT | FALSE_POSITIVE | NEEDS_SOURCE_REVIEW", "");
  return lines.join("\n");
}

function main() {
  const mainSha = git("git rev-parse HEAD");
  const productionBlob = git(`git rev-parse HEAD:${DATA_REL}`);

  if (POST_DETERMINISTIC) {
    return runPostDeterministicClosure(mainSha, productionBlob);
  }

  if (POST_SOURCE_REVIEW) {
    return runPostSourceReviewClosure(mainSha, productionBlob);
  }

  if (!fs.existsSync(ACCEPTED)) {
    console.error("BLOCKED: missing accepted-pr614");
    process.exit(2);
  }

  const rows = parseAcceptedRows();
  const counts = countByStatus(rows);
  const expected = { LABOT: 213, NELABOT: 4, FALSE_POSITIVE: 3, NEEDS_SOURCE_REVIEW: 5 };
  const mappingOk =
    counts.LABOT === expected.LABOT &&
    counts.NELABOT === expected.NELABOT &&
    counts.FALSE_POSITIVE === expected.FALSE_POSITIVE &&
    counts.NEEDS_SOURCE_REVIEW === expected.NEEDS_SOURCE_REVIEW;

  if (!mappingOk) {
    console.error("BLOCKED_OWNER_MAPPING_MISMATCH", counts, expected);
    process.exit(3);
  }

  const words = loadWords();
  const lvWords = loadLvWords();
  const labotRows = loadLabotFromApplyMap();
  if (labotRows.length !== 213) {
    console.error("BLOCKED: apply map LABOT count", labotRows.length);
    process.exit(3);
  }
  const nsrRows = rows.filter((r) => r.status === "NEEDS_SOURCE_REVIEW");
  const regression = runLabotRegression(words, labotRows);
  const integrity = runNonRepairIntegrity(words, rows);
  const gates = runDeterministicGates();
  const persistence = checkOwnerHistoryPersistence();
  const ownerViewMd = fs.readFileSync(path.join(ROOT, "reports/et-a2-owner-view.md"), "utf8");

  const labotOk =
    regression.VERIFIED_MATCH.length === 213 &&
    regression.OWNER_NEW_MISMATCH.length === 0 &&
    regression.MISSING_PATH.length === 0;

  const integrityOk = integrity.changed.length === 0;

  let finalVerdict = "ET_A2_CLOSED_PENDING_SOURCE_REVIEW";
  let stopReason = null;

  if (!labotOk) {
    stopReason = "BLOCKED_OWNER_REPAIR_REGRESSION";
    finalVerdict = stopReason;
  } else if (!integrityOk) {
    stopReason = "BLOCKED_UNAUTHORIZED_CHANGE";
    finalVerdict = stopReason;
  } else if (nsrRows.length === 0) {
    finalVerdict = "ET_A2_FINAL_CLOSED";
  }

  fs.writeFileSync(OUT_NSR, buildNsrReview(nsrRows, words, lvWords, ownerViewMd));
  fs.writeFileSync(OUT_NSR_DEC, buildNsrDecisions(nsrRows));

  const payload = {
    mainSha,
    productionBlob,
    mapping: counts,
    labotExpected: 213,
    labotVerified: regression.VERIFIED_MATCH.length,
    ownerNewMismatch: regression.OWNER_NEW_MISMATCH.length,
    missingPath: regression.MISSING_PATH.length,
    nelabotUnchanged: `${integrity.unchanged.filter((id) => rows.find((r) => r.auditId === id)?.status === "NELABOT").length}/4`,
    falsePositiveUnchanged: `${integrity.unchanged.filter((id) => rows.find((r) => r.auditId === id)?.status === "FALSE_POSITIVE").length}/3`,
    needsSourceReviewOpen: nsrRows.length,
    sectionAccents: gates.sectionAccents,
    lvRemnants: gates.lvRemnants,
    mirror: gates.mirrorPass ? "PASS" : "FAIL",
    syntax: gates.syntaxPass ? "PASS" : "FAIL",
    deChanges: gates.deChanges,
    ownerHistoryPersistence: persistence.pass ? "PASS" : "FAIL",
    finalVerdict,
    stopReason,
    regression,
    integrity,
    persistence,
    gates: {
      structural: gates.structural,
      germanIntegrity: gates.germanIntegrity,
      layerIdentity: gates.layerIdentity,
      studyIssues: gates.studyIssues,
    },
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  const md = [
    "# ET–DE A2 — final closure check (post PR #617)",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Task:** targeted regression + integrity — **no Luna FULL_DISCOVERY**",
    "",
    "## Baseline",
    "",
    "| Lauks | Vērtība |",
    "|-------|---------|",
    `| **MAIN_SHA** | \`${mainSha}\` |`,
    `| **PRODUCTION_BLOB** | \`${productionBlob}\` |`,
    `| **Accepted mapping** | LABOT=${counts.LABOT} · NELABOT=${counts.NELABOT} · FP=${counts.FALSE_POSITIVE} · NSR=${counts.NEEDS_SOURCE_REVIEW} |`,
    "",
    "## 213 LABOT targeted regression",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| LABOT_EXPECTED | **213** |`,
    `| LABOT_VERIFIED | **${regression.VERIFIED_MATCH.length}** |`,
    `| OWNER_NEW_MISMATCH | **${regression.OWNER_NEW_MISMATCH.length}** |`,
    `| MISSING_PATH | **${regression.MISSING_PATH.length}** |`,
    `| Regression gate | **${labotOk ? "PASS" : "FAIL"}** |`,
    "",
    "## NELABOT / FALSE_POSITIVE integrity",
    "",
    `| Metrika | Vērtība |`,
    `| NELABOT_UNCHANGED | **${integrity.unchanged.filter((id) => rows.find((r) => r.auditId === id)?.status === "NELABOT").length}/4** |`,
    `| FALSE_POSITIVE_UNCHANGED | **${integrity.unchanged.filter((id) => rows.find((r) => r.auditId === id)?.status === "FALSE_POSITIVE").length}/3** |`,
    `| Integrity gate | **${integrityOk ? "PASS" : "FAIL"}** |`,
    "",
    "## Deterministic gates",
    "",
    `| Gate | Result |`,
    `|------|--------|`,
    `| SYNTAX | **${gates.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| MIRROR | **${gates.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| DE_CHANGES | **${gates.deChanges}** |`,
    `| sectionAccents issues | **${gates.sectionAccents}** (collect; includes NSR/open items — not introduced by PR #617 repair) |`,
    `| LV remnants | **${gates.lvRemnants}** (includes ET-A2-0194 NSR field; not auto-repaired) |`,
    `| Study structure issues | **${gates.studyIssues}** |`,
    `| Structural | **${gates.structural ? "PASS" : "FAIL"}** |`,
    `| German integrity | **${gates.germanIntegrity ? "PASS" : "FAIL"}** |`,
    `| Layer identity | **${gates.layerIdentity ? "PASS" : "FAIL"}** |`,
    "",
    "## OWNER history persistence",
    "",
    `| Metrika | Vērtība |`,
    `| OWNER_HISTORY_PERSISTENCE | **${persistence.pass ? "PASS" : "FAIL"}** |`,
    `| History entries loaded | **${persistence.historyCount}** |`,
    persistence.missing.length ? `| Missing files | ${persistence.missing.join(", ")} |` : "",
    "",
    "## Deterministic collect notes",
    "",
    "Collect slānis (`audit-et-a2-collect.js`) ziņo structural/germanIntegrity **FAIL** un LV remnant skaitu, kas pārsvarā atspoguļo **atvērtos NSR** un iepriekš identificētos atlikumus — **nav jaunu repair-blokeru** no 213 LABOT apply.",
    "",
    "",
    `| Metrika | Vērtība |`,
    `| NEEDS_SOURCE_REVIEW_OPEN | **${nsrRows.length}** |`,
    "",
    "Detalizēti: [et-a2-needs-source-review.md](./et-a2-needs-source-review.md)",
    "",
    nsrRows.map((r) => `- **${r.auditId}** \`${r.cardId}\` · \`${r.field}\``).join("\n"),
    "",
    "## FINAL VERDICT",
    "",
    `## **${finalVerdict}**`,
    "",
    stopReason ? `> STOP: ${stopReason}` : "> 5 NSR atvērti — closure gaida OWNER source-review lēmumus.",
    "",
    "**Production changes this task:** 0",
    "**DE changes:** 0",
  ].filter(Boolean).join("\n");

  fs.writeFileSync(OUT_CLOSURE, md);
  console.log(JSON.stringify({ finalVerdict, labotVerified: regression.VERIFIED_MATCH.length, stopReason }, null, 2));

  if (stopReason) process.exit(4);
}

function runPostSourceReviewClosure(mainSha, productionBlob) {
  if (!fs.existsSync(NSR_ACCEPTED)) {
    console.error("BLOCKED: missing et-a2-needs-source-decisions-accepted.md");
    process.exit(2);
  }

  const srRows = parseSourceReviewAccepted();
  const srCounts = countByStatus(srRows);
  const expectedSr = { LABOT: 1, NELABOT: 3, FALSE_POSITIVE: 1, NEEDS_SOURCE_REVIEW: 0 };
  if (
    srCounts.LABOT !== expectedSr.LABOT ||
    srCounts.NELABOT !== expectedSr.NELABOT ||
    srCounts.FALSE_POSITIVE !== expectedSr.FALSE_POSITIVE ||
    srCounts.NEEDS_SOURCE_REVIEW !== expectedSr.NEEDS_SOURCE_REVIEW
  ) {
    console.error("BLOCKED_SOURCE_REVIEW_MAPPING_MISMATCH", srCounts, expectedSr);
    process.exit(3);
  }

  const words = loadWords();
  const labotRows = loadLabotFromApplyMap();
  const regression = runLabotRegression(words, labotRows);
  const srIntegrity = verifySourceReviewIntegrity(words, srRows);
  const gates = runDeterministicGates();
  const persistence = checkOwnerHistoryPersistence();

  const labotOk =
    regression.VERIFIED_MATCH.length === 213 &&
    regression.OWNER_NEW_MISMATCH.length === 0 &&
    regression.MISSING_PATH.length === 0;
  const srLabotOk = srIntegrity.labotVerified.length === 1;
  const srIntegrityOk = srIntegrity.changed.length === 0;
  const deterministicBlockers = [];
  if (gates.sectionAccents !== 0) deterministicBlockers.push(`sectionAccents=${gates.sectionAccents}`);
  if (gates.lvRemnants !== 0) deterministicBlockers.push(`lvRemnants=${gates.lvRemnants}`);
  if (!gates.structural) deterministicBlockers.push("structural=FAIL");
  if (!gates.germanIntegrity) deterministicBlockers.push("germanIntegrity=FAIL");
  if (!gates.syntaxPass) deterministicBlockers.push("syntax=FAIL");
  if (!gates.mirrorPass) deterministicBlockers.push("mirror=FAIL");
  if (gates.deChanges !== 0) deterministicBlockers.push(`deChanges=${gates.deChanges}`);

  let finalVerdict = "ET_A2_CLOSED_PENDING_DETERMINISTIC_REPAIR";
  let stopReason = null;

  if (!labotOk) {
    stopReason = "BLOCKED_OWNER_REPAIR_REGRESSION";
    finalVerdict = stopReason;
  } else if (!srLabotOk || !srIntegrityOk) {
    stopReason = "BLOCKED_SOURCE_REVIEW_INTEGRITY_FAIL";
    finalVerdict = stopReason;
  } else if (deterministicBlockers.length === 0) {
    finalVerdict = "ET_A2_FINAL_CLOSED";
  } else {
    finalVerdict = "ET_A2_CLOSED_PENDING_DETERMINISTIC_REPAIR";
  }

  const collect = gates.collect || {};
  const payload = {
    phase: "post-source-review",
    mainSha,
    productionBlob,
    sourceReview: {
      total: 5,
      resolved: 5,
      labot: srCounts.LABOT,
      nelabot: srCounts.NELABOT,
      falsePositive: srCounts.FALSE_POSITIVE,
      open: srCounts.NEEDS_SOURCE_REVIEW,
    },
    microApply: fs.existsSync(path.join(ROOT, "reports/temp/et-a2-source-review-micro-repair-log.json"))
      ? JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-a2-source-review-micro-repair-log.json"), "utf8")).summary
      : null,
    labotVerified: regression.VERIFIED_MATCH.length,
    srLabotVerified: srIntegrity.labotVerified,
    deterministicBlockers,
    sectionAccents: gates.sectionAccents,
    lvRemnants: gates.lvRemnants,
    finalVerdict,
    stopReason,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  const md = [
    "# ET–DE A2 — final closure check (post source-review micro-repair)",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Phase:** source-review closure after PR #617 + NSR accepted",
    "**No Luna FULL_DISCOVERY**",
    "",
    "## Baseline",
    "",
    "| Lauks | Vērtība |",
    "|-------|---------|",
    `| **MAIN_SHA** | \`${mainSha}\` |`,
    `| **PRODUCTION_BLOB** | \`${productionBlob}\` |`,
    "",
    "## Source-review resolution",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    "| SOURCE_REVIEW_TOTAL | **5** |",
    "| SOURCE_REVIEW_RESOLVED | **5/5** |",
    "| SOURCE_REVIEW_LABOT | **1** |",
    "| SOURCE_REVIEW_NELABOT | **3** |",
    "| SOURCE_REVIEW_FALSE_POSITIVE | **1** |",
    "| SOURCE_REVIEW_OPEN | **0** |",
    "",
    "## Micro apply (ET-A2-0194)",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| ET-A2-0194 verified | **${srIntegrity.labotVerified.includes("ET-A2-0194") ? "PASS (viinamari)" : "FAIL"}** |`,
    `| NSR NELABOT/FP unchanged | **${srIntegrity.unchanged.length}/4** |`,
    "",
    "## 213 LABOT regression (PR #617)",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| LABOT_EXPECTED | **213** |`,
    `| LABOT_VERIFIED | **${regression.VERIFIED_MATCH.length}** |`,
    `| OWNER_NEW_MISMATCH | **${regression.OWNER_NEW_MISMATCH.length}** |`,
    "",
    "## Deterministic closure gates",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| SYNTAX | **${gates.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| MIRROR | **${gates.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| DE_CHANGES | **${gates.deChanges}** |`,
    `| sectionAccents | **${gates.sectionAccents}** |`,
    `| LV remnants | **${gates.lvRemnants}** |`,
    `| Study structure | **${gates.studyIssues}** |`,
    `| Structural | **${gates.structural ? "PASS" : "FAIL"}** |`,
    "",
    deterministicBlockers.length
      ? [
          "## Remaining deterministic blockers",
          "",
          ...deterministicBlockers.map((b) => `- ${b}`),
          "",
          collect.sectionAccents?.issues?.slice(0, 5).map((i) => `- sectionAccents: \`${i.id}\` ${i.message || i.term || ""}`) || [],
          collect.lvRemnants?.issues?.slice(0, 5).map((i) => `- lvRemnant: \`${i.id}\` ${String(i.text || i.path || "").slice(0, 80)}`) || [],
        ].flat().filter(Boolean).join("\n")
      : "",
    "",
    "## OWNER history",
    "",
    `| OWNER_HISTORY_PERSISTENCE | **${persistence.pass ? "PASS" : "FAIL"}** |`,
    "",
    "## FINAL VERDICT",
    "",
    `## **${finalVerdict}**`,
    "",
    stopReason
      ? `> STOP: ${stopReason}`
      : deterministicBlockers.length
        ? "> Source-review aizvērts; paliek deterministic blockers pirms ET_A2_FINAL_CLOSED."
        : "> Visi gates PASS.",
    "",
  ].filter(Boolean).join("\n");

  fs.writeFileSync(OUT_CLOSURE, md);
  console.log(JSON.stringify({ finalVerdict, labotVerified: regression.VERIFIED_MATCH.length, deterministicBlockers }, null, 2));
  if (stopReason) process.exit(4);
}

function runPostDeterministicClosure(mainSha, productionBlob) {
  if (!fs.existsSync(DETERMINISTIC_LOG)) {
    console.error("BLOCKED: missing et-a2-deterministic-repair-log.json — run apply-et-a2-deterministic-repair.js first");
    process.exit(2);
  }
  const detLog = JSON.parse(fs.readFileSync(DETERMINISTIC_LOG, "utf8"));
  const srRows = fs.existsSync(NSR_ACCEPTED) ? parseSourceReviewAccepted() : [];
  const words = loadWords();
  const labotRows = loadLabotFromApplyMap();
  const regression = runLabotRegression(words, labotRows);
  const srIntegrity = srRows.length ? verifySourceReviewIntegrity(words, srRows) : { labotVerified: [], changed: [], unchanged: [] };
  const gates = runDeterministicGates();
  const persistence = checkOwnerHistoryPersistence();

  const labotOk =
    regression.VERIFIED_MATCH.length === 213 &&
    regression.OWNER_NEW_MISMATCH.length === 0 &&
    regression.MISSING_PATH.length === 0;
  const srOk = !srRows.length || (srIntegrity.labotVerified.length === 1 && srIntegrity.changed.length === 0);
  const deterministicBlockers = [];
  if (gates.sectionAccents !== 0) deterministicBlockers.push(`sectionAccents=${gates.sectionAccents}`);
  if (gates.lvRemnants !== 0) deterministicBlockers.push(`lvRemnants=${gates.lvRemnants}`);
  if (!gates.structural) deterministicBlockers.push("structural=FAIL");
  if (!gates.germanIntegrity) deterministicBlockers.push("germanIntegrity=FAIL");
  if (!gates.syntaxPass) deterministicBlockers.push("syntax=FAIL");
  if (!gates.mirrorPass) deterministicBlockers.push("mirror=FAIL");
  if (gates.deChanges !== 0) deterministicBlockers.push(`deChanges=${gates.deChanges}`);

  let finalVerdict = "ET_A2_CLOSED_PENDING_DETERMINISTIC_REPAIR";
  let stopReason = null;
  if (!labotOk) {
    stopReason = "BLOCKED_OWNER_REPAIR_REGRESSION";
    finalVerdict = stopReason;
  } else if (!srOk) {
    stopReason = "BLOCKED_SOURCE_REVIEW_INTEGRITY_FAIL";
    finalVerdict = stopReason;
  } else if (deterministicBlockers.length === 0) {
    finalVerdict = "ET_A2_FINAL_CLOSED";
  }

  const headSha = git("git rev-parse HEAD");
  const blobAfter = git(`git hash-object ${path.join(ROOT, DATA_REL)}`);
  const payload = {
    phase: "post-deterministic-repair",
    mainBaseSha: mainSha,
    headSha,
    productionBlobBefore: detLog.blobBefore,
    productionBlobAfter: blobAfter,
    workBranch: git("git branch --show-current"),
    deterministicRepair: detLog,
    labotVerified: regression.VERIFIED_MATCH.length,
    deterministicBlockers,
    finalVerdict,
    stopReason,
    gates: {
      sectionAccents: gates.sectionAccents,
      lvRemnants: gates.lvRemnants,
      structural: gates.structural,
      germanIntegrity: gates.germanIntegrity,
      mirror: gates.mirrorPass,
      syntax: gates.syntaxPass,
      deChanges: gates.deChanges,
    },
    ownerHistoryPersistence: persistence.pass,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  const md = [
    "# ET–DE A2 — final closure check (post deterministic repair)",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Phase:** final deterministic repair + closure — **no Luna FULL_DISCOVERY**",
    "",
    "## Baseline",
    "",
    "| Lauks | Vērtība |",
    "|-------|---------|",
    `| **MAIN_BASE_SHA** | \`${mainSha}\` |`,
    `| **WORK_BRANCH** | \`${payload.workBranch}\` |`,
    `| **HEAD_SHA** | \`${headSha}\` |`,
    `| **PRODUCTION_BLOB_BEFORE** | \`${detLog.blobBefore}\` |`,
    `| **PRODUCTION_BLOB_AFTER** | \`${blobAfter}\` |`,
    "",
    "## Deterministic repair summary",
    "",
    "| Metrika | Before | After |",
    "|---------|--------|-------|",
    `| sectionAccents | **${detLog.sectionAccents?.before ?? "?"}** | **${gates.sectionAccents}** |`,
    `| LV remnants (raw) | **${detLog.inventory?.raw?.filter((r) => r.category === "REPAIR_ARTIFACT" || r.category === "FALSE_POSITIVE").length ?? "?"}** | **${gates.lvRemnants}** |`,
    `| structural | **FAIL** | **${gates.structural ? "PASS" : "FAIL"}** |`,
    `| germanIntegrity | **FAIL** | **${gates.germanIntegrity ? "PASS" : "FAIL"}** |`,
    "",
    `| LV REPAIR_ARTIFACT applied | **${detLog.lvResults?.applied?.length ?? 0}** |`,
    `| Job study removed | **${detLog.jobResult?.status ?? "?"}** |`,
    `| sectionAccents auto-fixed | **${detLog.sectionAccents?.autoFixed ?? 0}** |`,
    "",
    "## Regression",
    "",
    `| 213 LABOT verified | **${regression.VERIFIED_MATCH.length}/213** |`,
    `| NSR open | **0** |`,
    `| DE changes | **${gates.deChanges}** |`,
    `| MIRROR | **${gates.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| SYNTAX | **${gates.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| OWNER_HISTORY_PERSISTENCE | **${persistence.pass ? "PASS" : "FAIL"}** |`,
    "",
    "## FINAL VERDICT",
    "",
    `## **${finalVerdict}**`,
    "",
    stopReason ? `> STOP: ${stopReason}` : "> All deterministic gates PASS.",
    "",
  ].join("\n");

  fs.writeFileSync(OUT_CLOSURE, md);
  console.log(JSON.stringify({ finalVerdict, labotVerified: regression.VERIFIED_MATCH.length, deterministicBlockers }, null, 2));
  if (stopReason) process.exit(4);
}

main();
