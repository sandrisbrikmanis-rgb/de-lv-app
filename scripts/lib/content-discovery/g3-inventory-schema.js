#!/usr/bin/env node
"use strict";

const { flattenG3CourseLessons } = require("../content-crowdin-bridge/flatten-g3-lessons");

const READ_ONLY_KEYS = new Set([
  "de",
  "answer",
  "text",
  "prompt",
  "legacyHtml",
  "id",
  "type",
  "exerciseType",
  "exerciseDeckId",
  "word",
]);

const G3_NATIVE_SCALAR_KEYS = new Set([
  "title",
  "subtitle",
  "description",
  "label",
  "task",
  "hint",
  "progressLabel",
]);

const ALLOWED_G3_NATIVE_SUFFIXES = [
  ".title",
  ".subtitle",
  ".description",
  ".label",
  ".task",
  ".hint",
  ".progressLabel",
  ".native",
  ".lv",
];

function isAllowedG3NativePath(pathKey) {
  if (!pathKey || pathKey.startsWith("legacyHtml.")) return false;
  if (pathKey.endsWith(".lv")) {
    const terminal = pathKey.slice(0, -3).split(".").pop().replace(/\[\d+\]$/, "");
    return G3_NATIVE_SCALAR_KEYS.has(terminal);
  }
  return ALLOWED_G3_NATIVE_SUFFIXES.some((suffix) => pathKey.endsWith(suffix));
}

function isMappedG3Path(fieldPath, allowedPaths) {
  if (allowedPaths.has(fieldPath)) return true;
  if (fieldPath.endsWith(".lv")) {
    const parent = fieldPath.slice(0, -3);
    if (allowedPaths.has(parent) || allowedPaths.has(`${parent}.native`)) return true;
    const terminal = parent.split(".").pop().replace(/\[\d+\]$/, "");
    if (terminal === "cards" || terminal === "items") return true;
    if (G3_NATIVE_SCALAR_KEYS.has(terminal)) return true;
  }
  const leaf = fieldPath.split(".").pop();
  if (G3_NATIVE_SCALAR_KEYS.has(leaf)) return true;
  return isAllowedG3NativePath(fieldPath);
}

function discoverG3NativeStringFields(value, basePath, hits = []) {
  if (value === null || value === undefined) return hits;
  if (typeof value === "string") return hits;
  if (Array.isArray(value)) {
    value.forEach((item, i) => discoverG3NativeStringFields(item, `${basePath}[${i}]`, hits));
    return hits;
  }
  if (typeof value !== "object") return hits;

  for (const [key, child] of Object.entries(value)) {
    if (READ_ONLY_KEYS.has(key)) continue;
    const childPath = basePath ? `${basePath}.${key}` : key;
    if (key === "lv" && typeof child === "string") {
      hits.push({ fieldPath: childPath, current: child });
      continue;
    }
    if (G3_NATIVE_SCALAR_KEYS.has(key) && typeof child === "string") {
      hits.push({ fieldPath: childPath, current: child });
      continue;
    }
    discoverG3NativeStringFields(child, childPath, hits);
  }
  return hits;
}

function scanG3StructuredInventory(courseLessonData = {}, productionFile = null) {
  const flat = flattenG3CourseLessons(courseLessonData);
  const allowedPaths = new Set(Object.keys(flat));
  const discovered = [];
  const unmappedDetails = [];

  for (const [lessonKey, lesson] of Object.entries(courseLessonData || {})) {
    const nativeHits = discoverG3NativeStringFields(lesson, lessonKey, []);
    for (const hit of nativeHits) {
      discovered.push(hit);
      const allowed = isMappedG3Path(hit.fieldPath, allowedPaths);
      if (!allowed) {
        unmappedDetails.push({
          scopeId: null,
          cardId: lessonKey,
          fieldPath: hit.fieldPath,
          current: hit.current,
          productionFile,
          reason: "unknown_g3_native_path",
        });
      }
    }
  }

  const mapped = discovered.length - unmappedDetails.length;
  const { finalizeInventoryMetrics } = require("./inventory-metrics");
  return finalizeInventoryMetrics({
    inventoryObjectsExpected: discovered.length,
    inventoryFieldsDiscovered: discovered.length,
    inventoryFieldsMapped: mapped,
    inventoryFieldsUnmapped: unmappedDetails.length,
    unmappedDetails,
    productionFile,
  });
}

module.exports = {
  ALLOWED_G3_NATIVE_SUFFIXES,
  G3_NATIVE_SCALAR_KEYS,
  isAllowedG3NativePath,
  isMappedG3Path,
  discoverG3NativeStringFields,
  scanG3StructuredInventory,
};
