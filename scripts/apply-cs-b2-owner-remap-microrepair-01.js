#!/usr/bin/env node
"use strict";
/**
 * CS-DE B2 OWNER remap micro-repair #1 — close 25 CARD_NOT_FOUND reconciliation.
 * Usage: node scripts/apply-cs-b2-owner-remap-microrepair-01.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [path.join(ROOT, "data/cs/b2.js"), path.join(ROOT, "www/data/cs/b2.js")];
const RECON_JSON = path.join(ROOT, "reports/temp/cs-b2-25-card-not-found-reconciliation.json");
const REPORT_MD = path.join(ROOT, "reports/cs-b2-owner-remap-microrepair-01.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-b2-owner-remap-microrepair-01.json");
const B2_TOTAL = 2118;
const DE_FIELDS = ["de", "de_article", "de_plural"];
const DRY_RUN = process.argv.includes("--dry-run");

const LABOT_MAPPINGS = [
  {
    originalCardId: "b2-Geständnis-955",
    cardId: "b2-Geständnis-962",
    field: "csText",
    current: "Zpověď",
    newVal: "Přiznání",
    ownerDecision: "REMAP_SAFE",
  },
  {
    originalCardId: "b2-Hypothek-1152",
    cardId: "b2-Hypothek-1154",
    field: "csText",
    current: "Hypotéka",
    newVal: "Hypotéka • Zástavní právo",
    ownerDecision: "OWNER_REVIEW_CURRENT_MISMATCH_APPROVED",
  },
  {
    originalCardId: "b2-Gespött-952",
    cardId: "b2-Gespött-959",
    field: "csText",
    current: "Prořezávání zoubků",
    newVal: "Posměch • Terč posměchu",
    ownerDecision: "OWNER_REVIEW_CURRENT_MISMATCH_APPROVED",
  },
];

const POST_CHECKS = [
  { cardId: "b2-Geständnis-962", field: "csText", expected: "Přiznání" },
  { cardId: "b2-Hypothek-1154", field: "csText", expected: "Hypotéka • Zástavní právo" },
  { cardId: "b2-Gespött-959", field: "csText", expected: "Posměch • Terč posměchu" },
];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const B2_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.B2_WORDS = B2_WORDS;\n`,
    "utf8",
  );
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `b2-${entry.de}-${index}`;
  return `b2-${index}`;
}

function fieldToPath(field) {
  if (field === "csText") return ["lv"];
  if (field.startsWith("study.")) return field.split(".");
  return [field];
}

function getAt(obj, parts) {
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function setAt(obj, parts, value) {
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (cur[p] == null || typeof cur[p] !== "object") cur[p] = {};
    cur = cur[p];
  }
  cur[parts[parts.length - 1]] = value;
}

function normalizeCompare(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function findCardIndex(words, cardId) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i) === cardId) return i;
  }
  return -1;
}

function deSnapshotHash(words) {
  const snap = words.map((e) => {
    const o = {};
    for (const f of DE_FIELDS) if (e[f] !== undefined) o[f] = e[f];
    return o;
  });
  return JSON.stringify(snap);
}

function loadScopeExclusions() {
  const recon = JSON.parse(fs.readFileSync(RECON_JSON, "utf8"));
  return recon.items
    .filter((x) => x.ownerAction === "REMOVE_FROM_SCOPE_CONFIRMED_ABSENT")
    .map((x) => ({
      ...x,
      closureStatus: "OWNER_CONFIRMED_REMOVE_FROM_SCOPE",
    }));
}

function applyMappings(words, mappings) {
  const results = [];
  for (const m of mappings) {
    const idx = findCardIndex(words, m.cardId);
    if (idx < 0) {
      results.push({ ...m, status: "CARD_NOT_FOUND", actualCurrent: "" });
      continue;
    }
    const parts = fieldToPath(m.field);
    const actual = normalizeCompare(getAt(words[idx], parts));
    if (actual !== normalizeCompare(m.current)) {
      results.push({ ...m, status: "CURRENT_VALUE_MISMATCH", actualCurrent: actual });
      continue;
    }
    setAt(words[idx], parts, m.newVal);
    results.push({ ...m, status: "APPLIED", actualCurrent: actual });
  }
  return results;
}

function verifyScope(before, after, allowedCardIds) {
  const unexpected = [];
  for (let i = 0; i < after.length; i++) {
    if (JSON.stringify(before[i]) === JSON.stringify(after[i])) continue;
    const id = entryId(after[i], i);
    if (!allowedCardIds.has(id)) unexpected.push({ cardId: id, index: i });
  }
  return unexpected;
}

function runPostChecks(words) {
  const failures = [];
  for (const check of POST_CHECKS) {
    const idx = findCardIndex(words, check.cardId);
    const actual = normalizeCompare(getAt(words[idx], fieldToPath(check.field)));
    if (actual !== normalizeCompare(check.expected)) {
      failures.push({ ...check, actual });
    }
  }
  return failures;
}

function buildReport(data) {
  const lines = [];
  lines.push("# CS–DE B2 OWNER Remap Micro-Repair #1");
  lines.push("");
  lines.push(`**MODE:** ${DRY_RUN ? "DRY-RUN" : "APPLY"}`);
  lines.push(`**Verdict:** ${data.verdict}`);
  lines.push("");
  lines.push("## Input");
  lines.push("- reconciliation: **25/25**");
  lines.push("- REMAP_SAFE: **1**");
  lines.push("- OWNER_REVIEW_CURRENT_MISMATCH: **2**");
  lines.push("- CONFIRMED_ABSENT: **22**");
  lines.push("");
  lines.push("## Apply");
  lines.push(`- requested: **${data.apply.requested}**`);
  lines.push(`- processed: **${data.apply.processed}/3**`);
  lines.push(`- APPLIED: **${data.apply.applied}**`);
  lines.push(`- CURRENT_VALUE_MISMATCH: **${data.apply.mismatch}**`);
  lines.push(`- CARD_NOT_FOUND: **${data.apply.notFound}**`);
  lines.push("");
  lines.push("## Scope exclusions");
  lines.push(`- confirmed absent removed from scope: **${data.scopeExclusions.length}/22**`);
  lines.push("- closure status: `OWNER_CONFIRMED_REMOVE_FROM_SCOPE`");
  lines.push("");
  for (const x of data.scopeExclusions) {
    lines.push(`- \`${x.originalCardId}\` (${x.de})`);
  }
  lines.push("");
  lines.push("## Applied remaps");
  for (const r of data.applyResults.filter((x) => x.status === "APPLIED")) {
    lines.push(`- \`${r.originalCardId}\` → \`${r.cardId}\` / \`${r.field}\`: \`${r.current}\` → \`${r.newVal}\` (${r.ownerDecision})`);
  }
  lines.push("");
  lines.push("## Post-checks");
  for (const c of data.postChecks) {
    lines.push(`- \`${c.cardId}.${c.field}\` === \`${c.expected}\`: **${c.pass ? "PASS" : "FAIL"}**`);
  }
  lines.push("");
  lines.push("## Integrity");
  for (const [k, v] of Object.entries(data.integrity)) lines.push(`- ${k}: **${v}**`);
  lines.push(`- unexpected production changes: **${data.unexpected.length}**`);
  lines.push("");
  lines.push(`_Generated: ${new Date().toISOString()}_`);
  return lines.join("\n");
}

function main() {
  const scopeExclusions = loadScopeExclusions();
  if (scopeExclusions.length !== 22) {
    throw new Error(`Expected 22 scope exclusions, found ${scopeExclusions.length}`);
  }

  const before = loadWords(FILES[0]);
  const beforeDe = deSnapshotHash(before);
  const words = JSON.parse(JSON.stringify(before));

  const applyResults = applyMappings(words, LABOT_MAPPINGS);
  const allowedCardIds = new Set(LABOT_MAPPINGS.map((m) => m.cardId));

  if (!DRY_RUN) {
    writeWords(FILES[0], words);
    writeWords(FILES[1], words);
  }

  const after = DRY_RUN ? words : loadWords(FILES[0]);
  const unexpected = verifyScope(before, after, allowedCardIds);
  const postCheckFailures = runPostChecks(after);
  const deChanges = beforeDe === deSnapshotHash(after) ? 0 : 1;

  let syntax = "PASS";
  try {
    execSync("node --check data/cs/b2.js", { cwd: ROOT, stdio: "pipe" });
    if (after.length !== B2_TOTAL) syntax = "FAIL";
  } catch {
    syntax = "FAIL";
  }

  let idOrder = "PASS";
  for (let i = 0; i < after.length; i++) {
    if (after[i].de !== before[i].de) { idOrder = "FAIL"; break; }
  }

  const mirror = DRY_RUN ? "PASS" : (fs.readFileSync(FILES[0]).equals(fs.readFileSync(FILES[1])) ? "PASS" : "FAIL");

  const applied = applyResults.filter((r) => r.status === "APPLIED");
  const mismatch = applyResults.filter((r) => r.status === "CURRENT_VALUE_MISMATCH");
  const notFound = applyResults.filter((r) => r.status === "CARD_NOT_FOUND");

  const integrity = {
    "DE READ-ONLY": deChanges === 0 ? "PASS" : "FAIL",
    syntax,
    "ID/order": idOrder,
    "card count": after.length === B2_TOTAL ? `${after.length}/${B2_TOTAL}` : "FAIL",
    "mirror parity": mirror,
  };

  const postChecks = POST_CHECKS.map((c) => {
    const idx = findCardIndex(after, c.cardId);
    const actual = normalizeCompare(getAt(after[idx], fieldToPath(c.field)));
    return { ...c, pass: actual === normalizeCompare(c.expected), actual };
  });

  const pass = applied.length === 3
    && mismatch.length === 0
    && notFound.length === 0
    && scopeExclusions.length === 22
    && unexpected.length === 0
    && deChanges === 0
    && postCheckFailures.length === 0
    && syntax === "PASS"
    && idOrder === "PASS"
    && mirror === "PASS";

  const verdict = pass
    ? "CS–DE B2 CARD_NOT_FOUND CLOSURE = PASS / 25/25 RESOLVED / READY FOR TARGETED REGRESSION"
    : "CS–DE B2 CARD_NOT_FOUND CLOSURE = FAIL";

  const payload = {
    summary: {
      verdict,
      input: {
        reconciliationTotal: 25,
        remapSafe: 1,
        ownerReviewCurrentMismatch: 2,
        confirmedAbsent: 22,
      },
      apply: {
        requested: 3,
        processed: applyResults.length,
        applied: applied.length,
        mismatch: mismatch.length,
        notFound: notFound.length,
      },
      scopeExclusions: {
        total: scopeExclusions.length,
        closureStatus: "OWNER_CONFIRMED_REMOVE_FROM_SCOPE",
      },
      integrity: {
        ...integrity,
        deChanges,
        unexpectedChanges: unexpected.length,
      },
      postChecks,
      pass,
    },
    applyResults,
    scopeExclusions,
    unexpected,
  };

  if (!DRY_RUN) {
    fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
    fs.writeFileSync(REPORT_JSON, JSON.stringify(payload, null, 2) + "\n", "utf8");
    fs.writeFileSync(REPORT_MD, buildReport({
      verdict,
      apply: payload.summary.apply,
      applyResults,
      scopeExclusions,
      postChecks,
      integrity,
      unexpected,
    }), "utf8");
  }

  console.log(JSON.stringify({ verdict, pass, applied: applied.length, mismatch: mismatch.length, notFound: notFound.length, scopeExclusions: scopeExclusions.length, unexpected: unexpected.length }, null, 2));
  if (!pass) process.exit(1);
}

main();
