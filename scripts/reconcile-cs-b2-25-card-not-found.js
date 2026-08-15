#!/usr/bin/env node
"use strict";
/**
 * READ-ONLY reconciliation for 25 CARD_NOT_FOUND B2 mappings.
 * Usage: node scripts/reconcile-cs-b2-25-card-not-found.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const APPLY_JSON = path.join(ROOT, "reports/temp/cs-b2-copy-only-repair-apply.json");
const OUT_MD = path.join(ROOT, "reports/cs-b2-25-card-not-found-reconciliation.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-b2-25-card-not-found-reconciliation.json");
const B2_FILE = path.join(ROOT, "data/cs/b2.js");

function loadWords() {
  const code = fs.readFileSync(B2_FILE, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `b2-${entry.de}-${index}`;
  return `b2-${index}`;
}

function normalizeDe(de) {
  return String(de || "").normalize("NFC").trim();
}

function deFromCardId(cardId) {
  const m = String(cardId).match(/^b2-(.+)-(\d+)$/);
  return m ? m[1] : "";
}

function groupFromSource(sourceFile) {
  const card = sourceFile.match(/group(\d+)/);
  if (card) return `Group ${card[1]}`;
  const study = sourceFile.match(/study-group(\d+)/);
  if (study) return `Study Group ${study[1]}`;
  return "—";
}

function fieldToPath(field) {
  if (field === "csText") return ["lv"];
  if (field.startsWith("study.")) return field.split(".");
  return [field];
}

function getFieldValue(entry, field) {
  return getAt(entry, fieldToPath(field));
}

function getAt(obj, parts) {
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function fieldExists(entry, field) {
  try {
    getFieldValue(entry, field);
    return true;
  } catch {
    return false;
  }
}

function serializeValue(v) {
  if (v === null || v === undefined) return "";
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}

function slugifyDe(de) {
  return normalizeDe(de)
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");
}

function idSlug(cardId) {
  const de = deFromCardId(cardId);
  return slugifyDe(de);
}

function findExactCardId(words, cardId) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i) === cardId) return [{ index: i, cardId: entryId(words[i], i), de: words[i].de }];
  }
  return [];
}

function findExactDe(words, deLemma) {
  const target = normalizeDe(deLemma);
  const hits = [];
  words.forEach((e, i) => {
    if (normalizeDe(e.de) === target) hits.push({ index: i, cardId: entryId(e, i), de: e.de });
  });
  return hits;
}

function diagnosticCandidates(words, cardId, deLemma) {
  const candidates = new Map();
  const slug = idSlug(cardId);
  const deNorm = normalizeDe(deLemma).toLowerCase();

  words.forEach((e, i) => {
    const cid = entryId(e, i);
    const reasons = [];
    const cidSlug = slugifyDe(deFromCardId(cid) || e.de || "");
    if (slug && cidSlug === slug) reasons.push("id_slug_match");
    if (normalizeDe(e.de).toLowerCase() === deNorm && deNorm) reasons.push("case_insensitive_de");
    const cidLower = cid.toLowerCase();
    const cardLower = cardId.toLowerCase();
    if (cidLower.includes(slug) || cardLower.includes(slugifyDe(e.de))) reasons.push("partial_id");
    if (reasons.length) {
      candidates.set(cid, { index: i, cardId: cid, de: e.de, reasons });
    }
  });

  return [...candidates.values()];
}

function determineOwnerAction(item) {
  switch (item.matchStatus) {
    case "EXACT_ID_FOUND":
      return "INVESTIGATE";
    case "UNIQUE_DE_MATCH_CURRENT_MATCH":
      return "REMAP_SAFE";
    case "UNIQUE_DE_MATCH_CURRENT_MISMATCH":
      return "OWNER_REVIEW_CURRENT_MISMATCH";
    case "MULTIPLE_DE_MATCHES":
      return "OWNER_REVIEW_MULTIPLE_MATCHES";
    case "FIELD_NOT_FOUND":
      return "OWNER_REVIEW_FIELD_NOT_FOUND";
    case "CONFIRMED_ABSENT":
      return "REMOVE_FROM_SCOPE_CONFIRMED_ABSENT";
    default:
      return "INVESTIGATE";
  }
}

function reconcileOne(words, mapping) {
  const deLemma = deFromCardId(mapping.cardId);
  const group = groupFromSource(mapping.sourceFile);
  const item = {
    sourceFile: mapping.sourceFile,
    group,
    originalCardId: mapping.cardId,
    de: deLemma,
    field: mapping.field,
    current: mapping.current,
    new: mapping.newVal,
    matchStatus: "",
    productionCardId: "",
    actualCurrent: "",
    currentMatches: false,
    candidateIds: [],
    diagnosticCandidates: [],
    ownerAction: "",
  };

  const exactId = findExactCardId(words, mapping.cardId);
  if (exactId.length === 1) {
    const hit = exactId[0];
    item.matchStatus = "EXACT_ID_FOUND";
    item.productionCardId = hit.cardId;
    item.actualCurrent = serializeValue(getFieldValue(words[hit.index], mapping.field));
    item.currentMatches = item.actualCurrent === mapping.current;
    item.ownerAction = determineOwnerAction(item);
    return item;
  }

  const exactDe = findExactDe(words, deLemma);
  if (exactDe.length === 1) {
    const hit = exactDe[0];
    item.productionCardId = hit.cardId;
    if (!fieldExists(words[hit.index], mapping.field)) {
      item.matchStatus = "FIELD_NOT_FOUND";
      item.actualCurrent = "";
      item.currentMatches = false;
    } else {
      item.actualCurrent = serializeValue(getFieldValue(words[hit.index], mapping.field));
      item.currentMatches = item.actualCurrent === mapping.current;
      item.matchStatus = item.currentMatches
        ? "UNIQUE_DE_MATCH_CURRENT_MATCH"
        : "UNIQUE_DE_MATCH_CURRENT_MISMATCH";
    }
    item.ownerAction = determineOwnerAction(item);
    return item;
  }

  if (exactDe.length > 1) {
    item.matchStatus = "MULTIPLE_DE_MATCHES";
    item.candidateIds = exactDe.map((h) => h.cardId);
    item.ownerAction = determineOwnerAction(item);
    return item;
  }

  const diag = diagnosticCandidates(words, mapping.cardId, deLemma);
  item.diagnosticCandidates = diag;

  const normDeHits = words.filter((e) => normalizeDe(e.de).toLowerCase() === normalizeDe(deLemma).toLowerCase());
  if (normDeHits.length === 0 && exactDe.length === 0 && exactId.length === 0) {
    item.matchStatus = "CONFIRMED_ABSENT";
    item.candidateIds = diag.map((d) => d.cardId);
    item.ownerAction = determineOwnerAction(item);
    return item;
  }

  item.matchStatus = "NO_EXACT_DE_MATCH";
  item.candidateIds = diag.map((d) => d.cardId);
  item.ownerAction = "INVESTIGATE";
  return item;
}

function buildMarkdown(items, summary) {
  const lines = [];
  lines.push("# CS–DE B2 — 25 CARD_NOT_FOUND Reconciliation");
  lines.push("");
  lines.push("**MODE:** READ-ONLY");
  lines.push(`**Verdict:** ${summary.verdict}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  for (const [k, v] of Object.entries(summary.counts)) lines.push(`- ${k}: **${v}**`);
  lines.push(`- production changes: **${summary.productionChanges}**`);
  lines.push(`- DE changes: **${summary.deChanges}**`);
  lines.push(`- classified total: **${summary.classifiedTotal}/25**`);
  lines.push("");
  lines.push("## Reconciliation table");
  lines.push("");
  lines.push("| # | Source group | Original cardId | DE | Field | CURRENT | NEW | Production match status | Actual production cardId | Actual current | CURRENT match | OWNER action |");
  lines.push("|---:|---|---|---|---|---|---|---|---|---|---|---|");
  items.forEach((it, i) => {
    const cur = it.actualCurrent.replace(/\|/g, "\\|").replace(/\n/g, " ");
    const exp = it.current.replace(/\|/g, "\\|");
    const nw = it.new.replace(/\|/g, "\\|");
    lines.push(`| ${i + 1} | ${it.group} | \`${it.originalCardId}\` | ${it.de} | \`${it.field}\` | ${exp} | ${nw} | ${it.matchStatus} | \`${it.productionCardId || "—"}\` | ${cur || "—"} | ${it.currentMatches ? "YES" : "NO"} | ${it.ownerAction} |`);
  });
  lines.push("");
  const diagItems = items.filter((it) => it.diagnosticCandidates?.length);
  if (diagItems.length) {
    lines.push("## Diagnostic candidates (non-authoritative)");
    lines.push("");
    for (const it of diagItems) {
      lines.push(`### ${it.originalCardId}`);
      for (const c of it.diagnosticCandidates.slice(0, 5)) {
        lines.push(`- \`${c.cardId}\` (${c.de}) — ${c.reasons.join(", ")}`);
      }
      lines.push("");
    }
  }
  lines.push(`_Generated: ${new Date().toISOString()}_`);
  return lines.join("\n");
}

function main() {
  const apply = JSON.parse(fs.readFileSync(APPLY_JSON, "utf8"));
  const notFound = apply.notFound || apply.results?.filter((r) => r.status === "CARD_NOT_FOUND") || [];
  if (notFound.length !== 25) throw new Error(`Expected 25 CARD_NOT_FOUND, got ${notFound.length}`);

  const words = loadWords();
  const items = notFound.map((m) => reconcileOne(words, m));

  const counts = {
    "CARD_NOT_FOUND input": 25,
    UNIQUE_DE_MATCH_CURRENT_MATCH: items.filter((i) => i.matchStatus === "UNIQUE_DE_MATCH_CURRENT_MATCH").length,
    UNIQUE_DE_MATCH_CURRENT_MISMATCH: items.filter((i) => i.matchStatus === "UNIQUE_DE_MATCH_CURRENT_MISMATCH").length,
    MULTIPLE_DE_MATCHES: items.filter((i) => i.matchStatus === "MULTIPLE_DE_MATCHES").length,
    FIELD_NOT_FOUND: items.filter((i) => i.matchStatus === "FIELD_NOT_FOUND").length,
    CONFIRMED_ABSENT: items.filter((i) => i.matchStatus === "CONFIRMED_ABSENT").length,
    EXACT_ID_FOUND: items.filter((i) => i.matchStatus === "EXACT_ID_FOUND").length,
    NO_EXACT_DE_MATCH: items.filter((i) => i.matchStatus === "NO_EXACT_DE_MATCH").length,
    INVESTIGATE: items.filter((i) => i.ownerAction === "INVESTIGATE").length,
  };

  const summary = {
    verdict: items.length === 25 ? "CS–DE B2 CARD_NOT_FOUND RECONCILIATION = COMPLETE / READY FOR OWNER REMAP DECISIONS" : "INCOMPLETE",
    counts,
    classifiedTotal: items.length,
    productionChanges: 0,
    deChanges: 0,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_MD, buildMarkdown(items, summary));
  fs.writeFileSync(OUT_JSON, `${JSON.stringify({ summary, items }, null, 2)}\n`);

  const pass = items.length === 25 && new Set(items.map((i) => i.originalCardId)).size === 25;
  console.log(JSON.stringify({ pass, summary, items: items.map((i) => ({ originalCardId: i.originalCardId, matchStatus: i.matchStatus, productionCardId: i.productionCardId, ownerAction: i.ownerAction })) }, null, 2));
  if (!pass) process.exit(1);
}

if (require.main === module) main();
module.exports = { main, reconcileOne };
