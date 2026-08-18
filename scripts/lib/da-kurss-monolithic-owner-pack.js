"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");
const {
  normalizeOwnerPath,
  getLegacyHtml,
  normalizeCompare,
} = require("./da-kurss-owner-path");
const {
  parseDecisionFile,
  parseArrowReplacement,
} = require("./da-kurss-section-pack");

function stripBackticks(text) {
  return String(text || "")
    .trim()
    .replace(/^`+|`+$/g, "")
    .trim();
}

function parseOwnerArrow(text) {
  const raw = String(text || "").trim();
  const bt = raw.match(/`([^`]+)`\s*(?:→|->)\s*`([^`]+)`/);
  if (bt) {
    return { from: stripBackticks(bt[1]), to: stripBackticks(bt[2]) };
  }
  const dash = raw.match(/^(.+?)\s*[—–]\s*(.+)$/);
  if (dash) {
    return { from: stripBackticks(dash[1]), to: stripBackticks(dash[2]) };
  }
  const arrow = parseArrowReplacement(stripBackticks(raw));
  if (!arrow) return null;
  return { from: stripBackticks(arrow.from), to: stripBackticks(arrow.to) };
}

function normalizeAuditPath(pathStr) {
  return String(pathStr || "").replace(/COURSE_LESSEN_DATA/g, "COURSE_LESSON_DATA");
}

function lessonKeyFromPath(pathStr) {
  const m = String(pathStr || "").match(/COURSE_LESSON_DATA\.(\w+)/);
  if (m) return m[1];
  const m2 = String(pathStr || "").match(/COURSE_LESSON_HTML\.(\w+)/);
  return m2 ? m2[1] : null;
}

function htmlKeyFromPath(pathStr) {
  const m = String(pathStr || "").match(/COURSE_LESSON_HTML\.(\w+)/);
  return m ? m[1] : null;
}

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-full-audit.json");
const MONOLITHIC_DECISIONS = path.join(ROOT, "reports/da-kurss-owner-decisions.md");

const FINDING_56_REPLACEMENTS = [
  { from: "Langt i = dvs", to: "Langt i = ie" },
  { from: "Langt i på tysk skrives ofte som dvs.", to: "Langt i på tysk skrives ofte som ie." },
];

function loadMonolithicFindings() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  return (audit.findings || []).filter(
    (f) =>
      f.category !== "FALSE_POSITIVE" &&
      f.category !== "PASS" &&
      String(f.severity || "").toUpperCase() !== "PASS",
  );
}

function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    "$1,$2",
  );
}

function readProductionValue(finding, production, trainingDecks) {
  const auditPath = normalizeAuditPath(finding.path);
  const { html, data } = production;

  if (/^lesson\d+TrainingCardsDa\[\d+\]\./.test(auditPath) || /^lesson7ExerciseCardsDa\[\d+\]\./.test(auditPath)) {
    const m = auditPath.match(/^(\w+)\[(\d+)\]\.(\w+)$/);
    if (!m) return undefined;
    const deck = trainingDecks?.[m[1]] || [];
    return deck[parseInt(m[2], 10)]?.[m[3]];
  }

  if (auditPath.startsWith("COURSE_LESSON_HTML.")) {
    return html[auditPath.replace(/^COURSE_LESSON_HTML\./, "")];
  }

  if (auditPath.includes(".legacyHtml")) {
    const lessonKey = lessonKeyFromPath(auditPath);
    return lessonKey ? getLegacyHtml(data, html, lessonKey) : undefined;
  }

  if (auditPath.startsWith("COURSE_LESSON_DATA.")) {
    const rel = auditPath.replace(/^COURSE_LESSON_DATA\./, "");
    const parts = rel.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    let cur = data;
    for (const part of parts) {
      if (cur == null) return undefined;
      const key = /^\d+$/.test(part) ? parseInt(part, 10) : part;
      cur = cur[key];
    }
    return cur;
  }

  return undefined;
}

function loadProductionTraining() {
  const filePath = path.join(ROOT, "data/da/courseTrainingCards.js");
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const decks = {};
  for (let i = 1; i <= 6; i++) {
    decks[`lesson${i}TrainingCardsDa`] = ctx.window[`lesson${i}TrainingCardsDa`] || [];
  }
  decks.lesson7ExerciseCardsDa = ctx.window.lesson7ExerciseCardsDa || [];
  return decks;
}
function loadProductionCourse() {
  const filePath = path.join(ROOT, "data/da/courseLessons.js");
  let code = fs.readFileSync(filePath, "utf8");
  code = repairDaCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return {
    html: ctx.window.COURSE_LESSON_HTML || {},
    data: ctx.window.COURSE_LESSON_DATA || {},
  };
}

function getFullHtmlByPath(pathStr, html, data) {
  const p = String(pathStr || "");
  if (p.startsWith("COURSE_LESSON_HTML.")) {
    return html[p.replace(/^COURSE_LESSON_HTML\./, "")];
  }
  const lessonKey = lessonKeyFromPath(p);
  if (lessonKey && p.includes("legacyHtml")) {
    return getLegacyHtml(data, html, lessonKey);
  }
  return undefined;
}

function extractElementFromPrefix(fullHtml, prefix) {
  const idx = fullHtml.indexOf(prefix);
  if (idx < 0) return null;
  const slice = fullHtml.slice(idx);
  const tagMatch = prefix.match(/^<([a-zA-Z0-9]+)/);
  if (!tagMatch) return null;
  const tag = tagMatch[1];
  const close = `</${tag}>`;
  const endIdx = slice.indexOf(close);
  if (endIdx < 0) return null;
  return slice.slice(0, endIdx + close.length);
}

function escapeRegExp(s) {
  return String(s || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractHtmlChunks(htmlStr) {
  const chunks = [];
  const re = /<(div|p|li|h4)[^>]*>[\s\S]*?<\/\1>/g;
  let m;
  while ((m = re.exec(String(htmlStr || "")))) {
    chunks.push(m[0]);
  }
  return chunks;
}

function chunkAnchors(chunk) {
  const anchors = [];
  const inner = chunk.match(/>([\s\S]*)<\//);
  const text = inner ? inner[1].replace(/<[^>]+>/g, " ") : chunk;
  const paren = text.match(/\(([^)]+)\)/);
  if (paren) anchors.push(paren[1].trim());
  const words = text.match(/\b[A-Za-zÄÖÜäöüß]{3,}\b/g) || [];
  for (const word of words.slice(0, 3)) anchors.push(word);
  if (chunk.includes("Wir mögen")) anchors.push("Wir mögen");
  if (chunk.includes("Wir danken")) anchors.push("Wir danken");
  if (chunk.includes("begyndelsen")) anchors.push("begyndelsen");
  if (chunk.includes("SS →")) anchors.push("SS →");
  if (chunk.includes("ß →")) anchors.push("ß →");
  return [...new Set(anchors.filter(Boolean))];
}

function findProductionChunk(fullHtml, anchors, ownerChunk) {
  const chunk = String(ownerChunk || "");
  const html = String(fullHtml || "");

  if (chunk.includes('class="kurss-example"') || /kurss-example/.test(chunk)) {
    for (const anchor of anchors) {
      if (!anchor || anchor.length < 2) continue;
      const re = new RegExp(`<div class="kurss-example">[^<]*${escapeRegExp(anchor)}[^<]*</div>`, "i");
      const m = html.match(re);
      if (m) return m[0];
    }
  }

  if (chunk.startsWith("<p")) {
    for (const anchor of anchors) {
      if (!anchor || anchor.length < 2) continue;
      const re = new RegExp(`<p[^>]*>[\\s\\S]*?${escapeRegExp(anchor)}[\\s\\S]*?</p>`);
      const m = html.match(re);
      if (m) return m[0];
    }
  }

  if (chunk.startsWith("<li")) {
    for (const anchor of anchors) {
      if (!anchor || anchor.length < 2) continue;
      const re = new RegExp(`<li[^>]*>[\\s\\S]*?${escapeRegExp(anchor)}[\\s\\S]*?</li>`);
      const m = html.match(re);
      if (m) return m[0];
    }
  }

  for (const anchor of anchors) {
    if (!anchor || anchor.length < 2) continue;
    const re = new RegExp(`<(div|p|li|h4)[^>]*>[\\s\\S]*?${escapeRegExp(anchor)}[\\s\\S]*?<\\/\\1>`);
    const m = html.match(re);
    if (m) return m[0];
  }
  return null;
}

function buildHtmlApplyPlan(finding, ownerTrim, html, data) {
  const htmlKey = htmlKeyFromPath(normalizeAuditPath(finding.path));
  const lessonKey = lessonKeyFromPath(normalizeAuditPath(finding.path));
  const isLessonLegacyHtml =
    String(finding.path || "").startsWith("COURSE_LESSON_DATA.") &&
    String(finding.path || "").includes("legacyHtml");
  const fullHtml = getFullHtmlByPath(finding.path, html, data);
  const fragmentFrom = resolveHtmlFragmentFrom(finding, html, data);
  const baseHtml = {
    htmlKey: isLessonLegacyHtml ? null : htmlKey,
    lessonKey: isLessonLegacyHtml ? lessonKey : null,
  };

  if (typeof fullHtml !== "string") {
    return {
      ...baseHtml,
      applyMode: "htmlSubstring",
      fragmentFrom,
      fragmentTo: ownerTrim,
      ownerNew: ownerTrim,
    };
  }

  if (fragmentFrom && fullHtml.includes(fragmentFrom)) {
    return {
      ...baseHtml,
      applyMode: "htmlSubstring",
      fragmentFrom,
      fragmentTo: ownerTrim,
      ownerNew: ownerTrim,
    };
  }

  const ownerChunks = extractHtmlChunks(ownerTrim);
  if (ownerChunks.length > 1) {
    const replacements = [];
    for (const toChunk of ownerChunks) {
      const fromChunk = findProductionChunk(fullHtml, chunkAnchors(toChunk), toChunk);
      if (fromChunk && fromChunk !== toChunk) replacements.push({ from: fromChunk, to: toChunk });
    }
    if (replacements.length) {
      return {
        ...baseHtml,
        applyMode: "htmlMultiSubstring",
        replacements,
        ownerNew: ownerTrim,
      };
    }
  }

  const singleFrom = findProductionChunk(fullHtml, chunkAnchors(ownerTrim), ownerTrim);
  if (singleFrom && singleFrom !== ownerTrim) {
    return {
      ...baseHtml,
      applyMode: "htmlSubstring",
      fragmentFrom: singleFrom,
      fragmentTo: ownerTrim,
      ownerNew: ownerTrim,
    };
  }

  if (ownerTrim.includes("ß →") && fullHtml.includes("SS → s")) {
    return {
      ...baseHtml,
      applyMode: "htmlSubstring",
      fragmentFrom: "<li>SS → s</li>",
      fragmentTo: "<li>ß → s</li>",
      ownerNew: "<li>ß → s</li>",
    };
  }

  return {
    ...baseHtml,
    applyMode: "htmlSubstring",
    fragmentFrom,
    fragmentTo: ownerTrim,
    ownerNew: ownerTrim,
  };
}

function resolveHtmlFragmentFrom(finding, html, data) {
  const daCurrent = String(finding.daCurrent || "");
  const fullHtml = getFullHtmlByPath(finding.path, html, data);

  if (!/\.\.\./.test(daCurrent)) {
    if (typeof fullHtml === "string" && fullHtml.includes(daCurrent)) return daCurrent;
    return daCurrent;
  }

  const [prefixRaw, suffixRaw = ""] = daCurrent.split("...");
  const prefix = prefixRaw.trim();
  const suffix = suffixRaw.trim();

  if (typeof fullHtml === "string" && prefix) {
    const idx = fullHtml.indexOf(prefix);
    if (idx >= 0) {
      if (suffix) {
        const suffixIdx = fullHtml.indexOf(suffix, idx + prefix.length);
        if (suffixIdx >= 0) return fullHtml.slice(idx, suffixIdx + suffix.length);
      }
      const extracted = extractElementFromPrefix(fullHtml.slice(idx), prefix);
      if (extracted) return extracted;
      return fullHtml.slice(idx, idx + prefix.length + 200);
    }
  }

  return daCurrent.replace(/\s\.\.\./g, "").trim();
}

function resolveDashPhraseFromText(text, ownerNew) {
  const arrow = parseOwnerArrow(ownerNew) || parseArrowReplacement(ownerNew);
  if (!arrow) return null;
  const left = String(arrow.from || "").trim();
  if (!left) return null;
  const re = new RegExp(`${left.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*[—–]\\s*[^<"'\n]+`);
  const match = String(text || "").match(re);
  return match ? match[0].trim() : null;
}

function buildMonolithicApplyEntry(finding, row, production, trainingDecks) {
  const { html, data } = production;
  const auditPath = normalizeAuditPath(finding.path);
  const base = {
    findingNum: row.findingNum,
    findingId: finding.id,
    path: auditPath,
    normalizedPath: normalizeOwnerPath(auditPath),
    daCurrent: finding.daCurrent ?? "",
    ownerDecision: row.ownerNew,
    deCurrent: finding.deCurrent || "",
    sourceFile: "da-kurss-owner-decisions.md",
    fieldType: finding.fieldType,
    lessonId: finding.lessonId,
  };

  if (row.findingNum === 56 && /\.\.\./.test(row.ownerNew)) {
    return {
      ...base,
      applyMode: "htmlMultiSubstring",
      htmlKey: "kurssPronunciationLesson",
      replacements: FINDING_56_REPLACEMENTS,
      ownerNew: row.ownerNew,
    };
  }

  const lvMatch = String(finding.path || "").match(/^lesson7ExerciseCardsDa\[(\d+)\]\.lv$/);
  if (lvMatch && /^at\s+/i.test(row.ownerNew.trim())) {
    return {
      ...base,
      applyMode: "addTrainingField",
      ownerNew: row.ownerNew.trim(),
      daCurrent: "missing",
      trainingDeck: "lesson7ExerciseCardsDa",
      cardIndex: parseInt(lvMatch[1], 10),
      fieldName: "lv",
    };
  }

  const ownerTrim = row.ownerNew.trim();

  if (row.findingNum === 51) {
    const full = html.kurssPronounsLesson;
    if (typeof full === "string") {
      const replacements = [
        {
          from:
            '<div class="kurss-example">Wir mögen <span class="case-red">Euk</span>. – Vi kan lide dig.</div>',
          to: '<div class="kurss-example">Wir mögen <span class="case-red">Euch</span>. – Vi kan lide jer.</div>',
        },
        {
          from:
            '<div class="kurss-example">Wir danken <span class="case-green">Euk</span>. – Vi takker.</div>',
          to: '<div class="kurss-example">Wir danken <span class="case-green">Euch</span>. – Vi takker jer.</div>',
        },
      ].filter((pair) => full.includes(pair.from));
      if (replacements.length) {
        return {
          ...base,
          applyMode: "htmlMultiSubstring",
          htmlKey: "kurssPronounsLesson",
          replacements,
          ownerNew: ownerTrim,
        };
      }
    }
  }

  if (row.findingNum === 58) {
    const full = html.kurssConsonantsLesson;
    if (typeof full === "string") {
      const from =
        full.match(/<p>''et' i begyndelsen[\s\S]*?<\/p>/)?.[0] ||
        full.match(/<p>[^<]*begyndelsen af[\s\S]*?<\/p>/)?.[0];
      if (from) {
        return {
          ...base,
          applyMode: "htmlSubstring",
          htmlKey: "kurssConsonantsLesson",
          fragmentFrom: from,
          fragmentTo: ownerTrim,
          ownerNew: ownerTrim,
        };
      }
    }
  }

  if (/^</.test(ownerTrim)) {
    const plan = buildHtmlApplyPlan(finding, ownerTrim, html, data);
    return { ...base, ...plan };
  }

  const dashPhrase = resolveDashPhraseFromText(
    getFullHtmlByPath(auditPath, html, data) || finding.daCurrent,
    ownerTrim,
  );
  if (dashPhrase && dashPhrase !== ownerTrim) {
    const htmlKey = htmlKeyFromPath(auditPath);
    const lessonKey = lessonKeyFromPath(auditPath);
    const isLessonLegacyHtml =
      String(auditPath || "").startsWith("COURSE_LESSON_DATA.") &&
      String(auditPath || "").includes("legacyHtml");
    if (htmlKey && !isLessonLegacyHtml) {
      return {
        ...base,
        applyMode: "htmlSubstring",
        htmlKey,
        fragmentFrom: dashPhrase,
        fragmentTo: ownerTrim,
        ownerNew: ownerTrim,
      };
    }
    if (lessonKey && isLessonLegacyHtml) {
      return {
        ...base,
        applyMode: "htmlSubstring",
        lessonKey,
        fragmentFrom: dashPhrase,
        fragmentTo: ownerTrim,
        ownerNew: ownerTrim,
      };
    }
    return {
      ...base,
      applyMode: "field",
      ownerNew: ownerTrim,
      daCurrent: dashPhrase,
    };
  }

  const arrow = parseOwnerArrow(ownerTrim);
  if (arrow && arrow.from !== arrow.to && /[—–]/.test(ownerTrim)) {
    const from = resolveHtmlFragmentFrom({ ...finding, daCurrent: arrow.from }, html, data);
    return {
      ...base,
      applyMode: "field",
      ownerNew: arrow.to,
      daCurrent: from,
    };
  }

  const productionValue = readProductionValue(finding, production, trainingDecks);
  return {
    ...base,
    applyMode: "field",
    ownerNew: ownerTrim,
    daCurrent:
      typeof productionValue === "string"
        ? productionValue
        : typeof finding.daCurrent === "string"
          ? finding.daCurrent
          : "",
  };
}

function monolithicDecisionsAvailable() {
  if (!fs.existsSync(MONOLITHIC_DECISIONS)) return false;
  const md = fs.readFileSync(MONOLITHIC_DECISIONS, "utf8");
  return /\|\s*Finding\s*\|\s*Statuss\s*\|/i.test(md) || /^\d+\tLABOT\t/m.test(md);
}

module.exports = {
  AUDIT_JSON,
  MONOLITHIC_DECISIONS,
  loadMonolithicFindings,
  loadProductionCourse,
  loadProductionTraining,
  buildMonolithicApplyEntry,
  monolithicDecisionsAvailable,
  parseDecisionFile,
  resolveHtmlFragmentFrom,
  normalizeCompare,
};
