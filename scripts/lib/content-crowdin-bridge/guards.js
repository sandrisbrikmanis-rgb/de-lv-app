#!/usr/bin/env node
"use strict";

const PLACEHOLDER_RE = /\{(\w+)\}/g;
const HTML_TAG_RE = /<\/?([a-zA-Z][\w-]*)\b[^>]*>/g;

function extractPlaceholderMultiset(str) {
  const counts = {};
  if (typeof str !== "string") return counts;
  for (const match of str.matchAll(PLACEHOLDER_RE)) {
    const name = match[1];
    counts[name] = (counts[name] || 0) + 1;
  }
  return counts;
}

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
}

function extractHtmlTagStructure(str) {
  if (typeof str !== "string" || !str.includes("<")) return "";
  const tokens = [];
  for (const match of str.matchAll(HTML_TAG_RE)) {
    const full = match[0];
    const name = match[1].toLowerCase();
    tokens.push(full.startsWith("</") ? `/${name}` : name);
  }
  return tokens.join("|");
}

function validateCrowdinKeySet(crowdinFlat, lvSourceKeys) {
  const errors = [];
  for (const key of Object.keys(crowdinFlat).sort()) {
    if (!lvSourceKeys.has(key)) {
      errors.push(`Unknown Crowdin key not in LV source set: ${key}`);
    }
  }
  return errors;
}

function validateImportGuards(existingFlat, crowdinFlat) {
  const errors = [];
  for (const key of Object.keys(crowdinFlat).sort()) {
    if (!(key in existingFlat)) continue;
    const before = existingFlat[key];
    const after = crowdinFlat[key];
    if (typeof before !== "string" || typeof after !== "string") continue;

    const phBefore = extractPlaceholderMultiset(before);
    const phAfter = extractPlaceholderMultiset(after);
    if (!multisetEqual(phBefore, phAfter)) {
      errors.push(`${key}: placeholder multiset mismatch`);
    }

    const htmlBefore = extractHtmlTagStructure(before);
    const htmlAfter = extractHtmlTagStructure(after);
    if (htmlBefore !== htmlAfter) {
      errors.push(`${key}: HTML tag structure mismatch`);
    }
  }
  return errors;
}

function sortFlatKeys(flat) {
  const sorted = {};
  for (const key of Object.keys(flat).sort()) {
    sorted[key] = flat[key];
  }
  return sorted;
}

function exportFlatToJson(flat) {
  return `${JSON.stringify(sortFlatKeys(flat), null, 2)}\n`;
}

function parseCrowdinJson(text) {
  const obj = JSON.parse(text);
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("Crowdin JSON must be a flat object");
  }
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v !== "string") {
      throw new Error(`Crowdin value at ${k} must be string, got ${typeof v}`);
    }
  }
  return obj;
}

module.exports = {
  validateCrowdinKeySet,
  validateImportGuards,
  sortFlatKeys,
  exportFlatToJson,
  parseCrowdinJson,
  extractPlaceholderMultiset,
  extractHtmlTagStructure,
};
