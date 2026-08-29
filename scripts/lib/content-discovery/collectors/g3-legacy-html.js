#!/usr/bin/env node
"use strict";

const { loadWindowGlobals } = require("../../audit-common");

const MOJIBAKE_PATTERN = /[\uFFFD\u00C2\u00C3\u00E2\u20AC]/;
const PLACEHOLDER_PATTERN = /\{\{[^}]+\}\}|TODO|TBD|FIXME/i;

function stripHtmlTags(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractLegacyHtmlNodes(html, lessonKey) {
  const nodes = [];
  const source = String(html || "");
  if (!source.trim()) return nodes;

  const tagRegex = /<([a-zA-Z][a-zA-Z0-9]*)[^>]*>([\s\S]*?)<\/\1>/g;
  let match;
  while ((match = tagRegex.exec(source)) !== null) {
    const tag = match[1];
    const inner = match[2];
    const nodePath = `${tag}`;
    const text = stripHtmlTags(inner);
    if (text) {
      nodes.push({
        lessonKey,
        nodePath,
        fieldPath: `legacyHtml.${lessonKey}.${nodePath}`,
        text,
      });
    }
    const nestedRegex = /<([a-zA-Z][a-zA-Z0-9]*)[^>]*>([^<]+)<\/\1>/g;
    let nested;
    while ((nested = nestedRegex.exec(inner)) !== null) {
      const nestedText = stripHtmlTags(nested[2]);
      if (!nestedText) continue;
      nodes.push({
        lessonKey,
        nodePath: `${tag}.${nested[1]}`,
        fieldPath: `legacyHtml.${lessonKey}.${tag}.${nested[1]}`,
        text: nestedText,
      });
    }
  }

  if (nodes.length === 0) {
    const fallback = stripHtmlTags(source);
    if (fallback) {
      nodes.push({
        lessonKey,
        nodePath: "root",
        fieldPath: `legacyHtml.${lessonKey}.root`,
        text: fallback,
      });
    }
  }

  return nodes;
}

function inspectLegacyHtmlNode({ lessonKey, nodePath, fieldPath, text, lang, productionFile, idPrefix, seqRef }) {
  const findings = [];
  const nextId = (cat) => `${idPrefix}-${String(++seqRef.value).padStart(4, "0")}-${cat}`;

  if (!text.trim()) {
    findings.push({
      auditId: nextId("EMPTY"),
      group: "g3",
      dataset: "courseLessons",
      lang,
      cardId: lessonKey,
      fieldPath,
      severity: "MEDIUM",
      category: "EMPTY_LEARNER_TEXT",
      productionFile,
      current: text,
      de: null,
      proposed: null,
      message: `Empty learner-facing legacyHtml node ${nodePath}`,
      source: "deterministic/g3-legacy-html",
    });
    return findings;
  }

  if (MOJIBAKE_PATTERN.test(text)) {
    findings.push({
      auditId: nextId("MOJI"),
      group: "g3",
      dataset: "courseLessons",
      lang,
      cardId: lessonKey,
      fieldPath,
      severity: "HIGH",
      category: "MOJIBAKE_DETECTED",
      productionFile,
      current: text.slice(0, 120),
      de: null,
      proposed: null,
      message: `Mojibake in legacyHtml node ${nodePath}`,
      source: "deterministic/g3-legacy-html",
    });
  }

  if (PLACEHOLDER_PATTERN.test(text)) {
    findings.push({
      auditId: nextId("PLACEHOLDER"),
      group: "g3",
      dataset: "courseLessons",
      lang,
      cardId: lessonKey,
      fieldPath,
      severity: "MEDIUM",
      category: "PLACEHOLDER_TEXT",
      productionFile,
      current: text.slice(0, 120),
      de: null,
      proposed: null,
      message: `Placeholder text in legacyHtml node ${nodePath}`,
      source: "deterministic/g3-legacy-html",
    });
  }

  return findings;
}

function collectG3LegacyHtml({ lang, idPrefix }) {
  const findings = [];
  const langPath = lang === "lv" ? "data/courseLessons.js" : `data/${lang}/courseLessons.js`;
  const globals = loadWindowGlobals(langPath);
  const courseLessonData = globals.COURSE_LESSON_DATA || {};
  const seqRef = { value: 0 };
  let nodesScanned = 0;

  for (const [lessonKey, lesson] of Object.entries(courseLessonData)) {
    const legacyHtml = lesson?.legacyHtml;
    if (!legacyHtml || typeof legacyHtml !== "string") continue;
    const nodes = extractLegacyHtmlNodes(legacyHtml, lessonKey);
    nodesScanned += nodes.length;
    for (const node of nodes) {
      findings.push(
        ...inspectLegacyHtmlNode({
          ...node,
          lang,
          productionFile: langPath,
          idPrefix,
          seqRef,
        }),
      );
    }
  }

  return {
    findings,
    stats: {
      legacyHtmlNodesScanned: nodesScanned,
      legacyHtmlFindings: findings.length,
    },
  };
}

module.exports = {
  extractLegacyHtmlNodes,
  collectG3LegacyHtml,
};
