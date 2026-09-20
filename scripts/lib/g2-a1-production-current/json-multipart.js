#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { CSV_MAX_BYTES } = require("./constants");

function sha256Text(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function splitJsonRowsMultipart(rows, options = {}) {
  const maxBytes = options.maxBytes || CSV_MAX_BYTES;
  const parts = [];
  let i = 0;
  while (i < rows.length) {
    const partIndex = parts.length + 1;
    const chunk = [];
    let byteLength = 3;
    while (i < rows.length) {
      const line = JSON.stringify(rows[i]);
      const add = (chunk.length ? 2 : 0) + line.length;
      if (byteLength + add + 2 > maxBytes && chunk.length > 0) break;
      chunk.push(rows[i]);
      byteLength += add;
      i += 1;
    }
    const content = `[\n${chunk.map((r) => JSON.stringify(r)).join(",\n")}\n]\n`;
    const rowStart = i - chunk.length + 1;
    const rowEnd = i;
    parts.push({
      partIndex,
      rowStart,
      rowEnd,
      rowCount: chunk.length,
      byteLength: Buffer.byteLength(content, "utf8"),
      sha256: sha256Text(content),
      content,
    });
  }
  const manifest = {
    multipart: parts.length > 1 || (parts[0] && parts[0].byteLength > maxBytes),
    totalRows: rows.length,
    maxBytes,
    parts: parts.map(({ content, ...meta }) => meta),
    combinedSha256: sha256Text(parts.map((p) => p.content).join("")),
  };
  return { parts, manifest };
}

function mergeJsonParts(parts) {
  const rows = [];
  for (const p of parts) {
    const parsed = JSON.parse(p.content);
    if (!Array.isArray(parsed)) throw new Error("not_array");
    rows.push(...parsed);
  }
  return rows;
}

function verifyJsonMultipartManifest(manifest, partsContent) {
  const sorted = [...manifest.parts].sort((a, b) => a.partIndex - b.partIndex);
  let expectedStart = 1;
  let total = 0;
  for (let idx = 0; idx < sorted.length; idx++) {
    const p = sorted[idx];
    if (p.rowStart !== expectedStart) return { pass: false, code: "ROW_GAP", part: p.partIndex };
    expectedStart = p.rowEnd + 1;
    total += p.rowCount;
    const content = partsContent[idx];
    if (sha256Text(content) !== p.sha256) return { pass: false, code: "SHA_MISMATCH", part: p.partIndex };
  }
  if (total !== manifest.totalRows) return { pass: false, code: "ROW_COUNT", total, expected: manifest.totalRows };
  return { pass: true, totalRows: total };
}

function writeJsonMultipartToDir(rows, dirRel, baseName, options = {}) {
  const root = options.root || path.join(require("../audit-common").ROOT, "reports/g2-a1-production-current");
  const dir = path.join(root, dirRel || "");
  fs.mkdirSync(dir, { recursive: true });
  const { parts, manifest } = splitJsonRowsMultipart(rows, options);
  const written = [];
  for (const p of parts) {
    const name = `${baseName}-part-${String(p.partIndex).padStart(3, "0")}.json`;
    const abs = path.join(dir, name);
    fs.writeFileSync(abs, p.content, "utf8");
    written.push({ file: path.relative(root, abs), ...p, content: undefined });
  }
  const manifestPath = path.join(dir, `${baseName}-multipart-manifest.json`);
  fs.writeFileSync(manifestPath, `${JSON.stringify({ ...manifest, files: written.map((w) => w.file) }, null, 2)}\n`);
  const verify = verifyJsonMultipartManifest(
    { ...manifest, parts: manifest.parts },
    parts.map((p) => p.content),
  );
  return { manifest, manifestPath: path.relative(root, manifestPath), parts: written, dir: path.relative(root, dir), verifyMultipart: verify };
}

module.exports = {
  splitJsonRowsMultipart,
  mergeJsonParts,
  verifyJsonMultipartManifest,
  writeJsonMultipartToDir,
  sha256Text,
};
