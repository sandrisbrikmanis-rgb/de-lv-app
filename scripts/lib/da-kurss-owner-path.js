"use strict";

function normalizeOwnerPath(rawPath) {
  let p = String(rawPath || "").trim();
  if (!p) return p;
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

function parseLegacyHtmlFragmentPath(path) {
  const m = String(path || "").match(/^COURSE_LESSON_DATA\.(\w+)\.legacyHtml#(.+)$/);
  if (!m) return null;
  return { lessonKey: m[1], fragmentId: m[2] };
}

function getLegacyHtml(data, html, lessonKey) {
  const lesson = data?.[lessonKey];
  if (!lesson) return undefined;
  const ref = lesson.legacyHtml;
  if (typeof ref === "string" && ref.startsWith("COURSE_LESSON_HTML.")) {
    const key = ref.replace(/^COURSE_LESSON_HTML\./, "");
    return html?.[key];
  }
  return typeof ref === "string" ? ref : undefined;
}

function setLegacyHtml(data, html, lessonKey, value) {
  const lesson = data?.[lessonKey];
  if (!lesson) return false;
  const ref = lesson.legacyHtml;
  if (typeof ref === "string" && ref.startsWith("COURSE_LESSON_HTML.")) {
    const key = ref.replace(/^COURSE_LESSON_HTML\./, "");
    html[key] = value;
    return true;
  }
  lesson.legacyHtml = value;
  return true;
}

function normalizeCompare(val) {
  return String(val ?? "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function legacyHtmlContainsFragment(fullHtml, fragment) {
  const full = String(fullHtml ?? "");
  const needle = String(fragment ?? "");
  if (!full || !needle) return false;
  if (full.includes(needle)) return true;
  return normalizeCompare(full).includes(normalizeCompare(needle));
}

function replaceLegacyHtmlFragment(fullHtml, fragmentCurrent, fragmentNew) {
  const full = String(fullHtml ?? "");
  if (full.includes(fragmentCurrent)) {
    return full.replace(fragmentCurrent, fragmentNew);
  }
  const normFull = normalizeCompare(full);
  const normCurrent = normalizeCompare(fragmentCurrent);
  const idx = normFull.indexOf(normCurrent);
  if (idx < 0) return null;
  const re = new RegExp(
    fragmentCurrent
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\s+/g, "\\s+"),
  );
  const match = full.match(re);
  if (match) {
    return full.slice(0, match.index) + fragmentNew + full.slice(match.index + match[0].length);
  }
  return null;
}

function readLegacyHtmlFragment(path, data, html, expectedCurrent) {
  const parsed = parseLegacyHtmlFragmentPath(path);
  if (!parsed) return undefined;
  const full = getLegacyHtml(data, html, parsed.lessonKey);
  if (typeof full !== "string") return undefined;
  return legacyHtmlContainsFragment(full, expectedCurrent) ? expectedCurrent : undefined;
}

function applyLegacyHtmlFragment(path, data, html, fragmentCurrent, fragmentNew) {
  const parsed = parseLegacyHtmlFragmentPath(path);
  if (!parsed) return false;
  const full = getLegacyHtml(data, html, parsed.lessonKey);
  if (typeof full !== "string") return false;
  const updated = replaceLegacyHtmlFragment(full, fragmentCurrent, fragmentNew);
  if (updated == null) return false;
  return setLegacyHtml(data, html, parsed.lessonKey, updated);
}

function classifyTarget(path) {
  const p = String(path || "");
  if (p.startsWith("LANGUAGE_UI_STRINGS.")) return "ui";
  if (/^lesson\d+TrainingCardsDa\[\d+\]\./.test(p) || /^lesson7ExerciseCardsDa\[\d+\]\./.test(p)) {
    return "training";
  }
  if (p.startsWith("COURSE_LESSON_DATA.") || p.startsWith("COURSE_LESSON_HTML.")) return "lessons";
  return "unknown";
}

function uiRelativePath(path) {
  return String(path || "").replace(/^LANGUAGE_UI_STRINGS\./, "");
}

function lessonsRelativePath(path) {
  const p = String(path || "");
  if (p.startsWith("COURSE_LESSON_DATA.")) return p.replace(/^COURSE_LESSON_DATA\./, "");
  if (p.startsWith("COURSE_LESSON_HTML.")) return p.replace(/^COURSE_LESSON_HTML\./, "");
  return p;
}

function resolveLessonsRoot(path, data, html) {
  const rel = lessonsRelativePath(path);
  if (String(path || "").startsWith("COURSE_LESSON_HTML.")) return { root: html, relPath: rel };
  return { root: data, relPath: rel };
}

module.exports = {
  normalizeOwnerPath,
  parsePathParts,
  getAt,
  setAt,
  fieldLabel,
  classifyTarget,
  uiRelativePath,
  lessonsRelativePath,
  resolveLessonsRoot,
  parseLegacyHtmlFragmentPath,
  getLegacyHtml,
  setLegacyHtml,
  legacyHtmlContainsFragment,
  replaceLegacyHtmlFragment,
  readLegacyHtmlFragment,
  applyLegacyHtmlFragment,
  normalizeCompare,
};
