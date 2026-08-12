#!/usr/bin/env node
/**
 * Reconcile approved full-review repairs against current main production (read-only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, finalAuditOnMainPaths } = require("./lib/cs-audit-helpers");

const OWNER_KEEP = [
  { cardId: "a1-in", field: "study.sectionAccents", note: "Berlīnē OWNER keep" },
  { cardId: "a1-morgen", field: "study.explanation", note: "NEEDS_OWNER_REVIEW — not applied in consolidation" },
  { cardId: "a1-müssen", field: "study.translation", note: "NEEDS_OWNER_REVIEW — not applied in consolidation" },
];

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/cs/a1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.de) return `a1-${entry.de}-${index}`;
  return `a1-${index}`;
}

function resolveField(field) {
  if (field === "csMain" || field === "csText") return "lv";
  return field;
}

function getFieldValue(entry, fieldPath) {
  const field = resolveField(fieldPath);
  if (field === "lv") return entry.lv;
  if (!field.startsWith("study.")) return entry[field];
  const parts = [];
  field.replace(/^study\./, "").replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return "";
  });
  let cur = entry.study;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur;
}

function serialize(v) {
  if (v == null) return null;
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}

function valuesMatch(a, b) {
  return serialize(a) === serialize(b);
}

function loadAllRepairs() {
  const all = [];
  for (let i = 1; i <= 12; i++) {
    try {
      const mod = require(path.join(__dirname, `apply-cs-a1-full-review-repair-block${String(i).padStart(2, "0")}.js`));
      for (const r of mod.REPAIRS || []) {
        all.push({
          block: i,
          cardId: r.cardId,
          field: r.field || "csText",
          pirmd: r.pirmd,
          pec: r.pec,
        });
      }
    } catch { /* optional block */ }
  }
  return all;
}

function isOwnerKeep(cardId, field) {
  return OWNER_KEEP.some((o) => o.cardId === cardId && (o.field === field || field.startsWith(o.field)));
}

function main() {
  const paths = finalAuditOnMainPaths("a1");
  const cs = loadWords();
  const repairs = loadAllRepairs();
  const byCard = new Map();
  for (let i = 0; i < cs.length; i++) byCard.set(entryId(cs[i], i), i);

  let retained = 0;
  let ownerKeep = 0;
  let conflicting = 0;
  let cardNotFound = 0;
  let alreadyCorrect = 0;
  const details = [];

  for (const r of repairs) {
    const idx = byCard.get(r.cardId);
    if (idx === undefined) {
      cardNotFound += 1;
      details.push({ ...r, status: "card_not_found" });
      continue;
    }
    if (isOwnerKeep(r.cardId, r.field)) {
      ownerKeep += 1;
      details.push({ ...r, status: "owner_keep", actual: serialize(getFieldValue(cs[idx], r.field)) });
      continue;
    }
    const actual = getFieldValue(cs[idx], r.field);
    if (valuesMatch(actual, r.pec)) {
      retained += 1;
      details.push({ ...r, status: "retained", actual: serialize(actual) });
    } else if (valuesMatch(actual, r.pirmd)) {
      conflicting += 1;
      details.push({ ...r, status: "conflicting", actual: serialize(actual), issue: "still PIRMS" });
    } else {
      alreadyCorrect += 1;
      details.push({ ...r, status: "already_correct_or_variant", actual: serialize(actual) });
    }
  }

  const payload = {
    auditedAt: new Date().toISOString(),
    expected: repairs.length,
    retained,
    ownerKeep,
    conflicting,
    cardNotFound,
    alreadyCorrect,
    sum: retained + ownerKeep + conflicting + cardNotFound + alreadyCorrect,
    details,
  };

  fs.mkdirSync(path.dirname(paths.repairRetentionJson), { recursive: true });
  fs.writeFileSync(paths.repairRetentionJson, JSON.stringify(payload, null, 2));
  console.log(`Repair retention: expected=${payload.expected} retained=${retained} owner_keep=${ownerKeep} conflicting=${conflicting} card_not_found=${cardNotFound}`);
  console.log(`→ ${paths.repairRetentionJson}`);
}

main();
