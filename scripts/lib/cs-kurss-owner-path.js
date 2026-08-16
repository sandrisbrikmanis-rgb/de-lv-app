"use strict";

function normalizeOwnerPath(rawPath) {
  let p = String(rawPath || "").trim();
  if (!p || p === "kurssArticlesLesson") return p;
  if (p.includes("/")) {
    const [lessonKey, ...rest] = p.split("/");
    p = [lessonKey, ...rest].join(".");
  }
  p = p
    .replace(/\.section\[(\d+)\]/g, ".sections[$1]")
    .replace(/\.item\[(\d+)\]/g, ".items[$1]")
    .replace(/section\[(\d+)\]/g, "sections[$1]")
    .replace(/item\[(\d+)\]/g, "items[$1]")
    .replace(/\.promptTask\[(\d+)\]/g, ".cards[$1]")
    .replace(/promptTask\[(\d+)\]/g, "cards[$1]");
  return p;
}

function parsePathParts(normalizedPath) {
  return normalizedPath
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
}

function getAt(root, normalizedPath) {
  const parts = parsePathParts(normalizedPath);
  let cur = root;
  for (const part of parts) {
    if (cur == null) return undefined;
    const key = /^\d+$/.test(part) ? parseInt(part, 10) : part;
    cur = cur[key];
  }
  return cur;
}

function setAt(root, normalizedPath, value) {
  const parts = parsePathParts(normalizedPath);
  if (!parts.length) return false;
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = /^\d+$/.test(parts[i]) ? parseInt(parts[i], 10) : parts[i];
    if (cur[key] == null) return false;
    cur = cur[key];
  }
  const last = parts[parts.length - 1];
  const lastKey = /^\d+$/.test(last) ? parseInt(last, 10) : last;
  cur[lastKey] = value;
  return true;
}

function fieldLabel(normalizedPath) {
  const parts = parsePathParts(normalizedPath);
  return parts.length > 1 ? parts.slice(1).join(".") : normalizedPath;
}

module.exports = {
  normalizeOwnerPath,
  parsePathParts,
  getAt,
  setAt,
  fieldLabel,
};
