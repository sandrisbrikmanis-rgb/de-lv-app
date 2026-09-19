#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/owner-review");
const MAX_PART_BYTES = 4_000_000;
const VIEW_BASE = "A1-LRB-CONSOLIDATION-OWNER-REVIEW-VIEW";

function sha256(buf) {
  return crypto
    .createHash("sha256")
    .update(typeof buf === "string" ? buf : buf)
    .digest("hex");
}

function cardKey(lang, cardId) {
  return `${String(lang).trim()}|${String(cardId).split("|")[0].trim()}`;
}

function listViewPartPaths() {
  const dir = OUT_DIR;
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith(`${VIEW_BASE}.part-`) && f.endsWith(".json"))
    .sort()
    .map((f) => path.join(dir, f));
}

function loadOwnerReviewViewPayload() {
  const parts = listViewPartPaths();
  if (!parts.length) {
    const mono = path.join(OUT_DIR, `${VIEW_BASE}.json`);
    if (fs.existsSync(mono)) {
      return JSON.parse(fs.readFileSync(mono, "utf8"));
    }
    throw new Error("owner_review_view_missing");
  }
  let staticPayload = null;
  const cards = [];
  for (const abs of parts) {
    const doc = JSON.parse(fs.readFileSync(abs, "utf8"));
    if (!staticPayload) {
      staticPayload = { ...doc };
      delete staticPayload.cards;
      delete staticPayload.part;
      delete staticPayload.part_row_count;
    }
    cards.push(...(doc.cards || []));
  }
  return { ...staticPayload, cards };
}

function writeJsonWithParts(baseName, payload, arrayKey) {
  const rows = payload[arrayKey] || [];
  const staticPayload = { ...payload };
  delete staticPayload[arrayKey];
  const parts = [];
  const CHUNK_ROWS = 40;
  if (rows.length <= CHUNK_ROWS) {
    const raw = JSON.stringify(payload, null, 2) + "\n";
    if (Buffer.byteLength(raw) <= MAX_PART_BYTES) {
      const rel = path.join("reports/g2-a1-owner/consolidation/owner-review", `${baseName}.json`);
      const abs = path.join(ROOT, rel);
      if (fs.existsSync(abs)) fs.unlinkSync(abs);
      for (const f of fs.readdirSync(OUT_DIR)) {
        if (f.startsWith(`${baseName}.part-`)) fs.unlinkSync(path.join(OUT_DIR, f));
      }
      fs.writeFileSync(abs, raw);
      return {
        multipart: false,
        parts: [{ path: rel, sha256: sha256(raw), byte_length: Buffer.byteLength(raw) }],
      };
    }
  }
  const mono = path.join(OUT_DIR, `${baseName}.json`);
  if (fs.existsSync(mono)) fs.unlinkSync(mono);
  for (const f of fs.readdirSync(OUT_DIR)) {
    if (f.startsWith(`${baseName}.part-`)) fs.unlinkSync(path.join(OUT_DIR, f));
  }
  for (let i = 0; i < rows.length; ) {
    let chunk = rows.slice(i, i + CHUNK_ROWS);
    const partIndex = parts.length + 1;
    const partName = `${baseName}.part-${String(partIndex).padStart(3, "0")}.json`;
    const rel = path.join("reports/g2-a1-owner/consolidation/owner-review", partName);
    const partPayload = { ...staticPayload, [arrayKey]: chunk, part: partIndex, part_row_count: chunk.length };
    let partRaw = JSON.stringify(partPayload, null, 2) + "\n";
    while (Buffer.byteLength(partRaw) > MAX_PART_BYTES && chunk.length > 1) {
      chunk = chunk.slice(0, -1);
      partPayload[arrayKey] = chunk;
      partPayload.part_row_count = chunk.length;
      partRaw = JSON.stringify(partPayload, null, 2) + "\n";
    }
    fs.writeFileSync(path.join(ROOT, rel), partRaw);
    parts.push({
      path: rel,
      sha256: sha256(partRaw),
      byte_length: Buffer.byteLength(partRaw),
      row_count: chunk.length,
    });
    i += chunk.length;
  }
  return { multipart: true, parts };
}

const productionCache = new Map();

function loadProductionA1Words(lang) {
  if (productionCache.has(lang)) return productionCache.get(lang);
  const filePath = path.join(ROOT, `data/${lang}/a1.js`);
  if (!fs.existsSync(filePath)) {
    productionCache.set(lang, null);
    return null;
  }
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const words = ctx.window.A1_WORDS || null;
  productionCache.set(lang, words);
  return words;
}

function findProductionEntry(lang, canonicalCardObjectId) {
  const words = loadProductionA1Words(lang);
  if (!words) return null;
  const id = String(canonicalCardObjectId).trim();
  return (
    words.find((w) => String(w.de).trim() === id) ||
    words.find((w) => String(w.de).trim().toLowerCase() === id.toLowerCase()) ||
    null
  );
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

module.exports = {
  OUT_DIR,
  VIEW_BASE,
  sha256,
  cardKey,
  loadOwnerReviewViewPayload,
  writeJsonWithParts,
  loadProductionA1Words,
  findProductionEntry,
  deepEqual,
};
