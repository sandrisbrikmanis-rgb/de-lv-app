"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");
const { normalizeOwnerPath } = require("./da-kurss-owner-path");
const {
  parseDecisionFile,
  parseArrowReplacement,
  parseQuotedHtmlReplace,
  normalizeDashVariants,
} = require("./da-kurss-section-pack");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-full-audit.json");

const GROUP_SLUGS = [
  "01-structure-lesson7",
  "02-static-html",
  "03-lessons-01-07",
  "04-lessons-08-21-misc",
];

const GROUP_META = {
  "01-structure-lesson7": { title: "Lektion 7 — exercise card struktūra" },
  "02-static-html": { title: "Statiskie HTML paneļi (6)" },
  "03-lessons-01-07": { title: "Lekcijas 1–7 (legacyHtml + saturs)" },
  "04-lessons-08-21-misc": { title: "Lekcijas 8–21, training, UI" },
};

const SENTENCE_STRUCTURE_NEGATION_REPLACEMENTS = [
  { from: "Ich spiele nicht. – Jeg spiller ikke.", to: "Ich spiele nicht. — Jeg spiller ikke." },
  { from: "Ich spiele nicht. — Paul spørger ikke.", to: "Paul fragt nicht. — Paul spørger ikke." },
  { from: "Paul fragt nicht. — Han kommer ikke.", to: "Er kommt nicht. — Han kommer ikke." },
  { from: "Er kommt nicht. — De/de synger ikke.", to: "Sie singen nicht. — De synger ikke." },
];

function groupForFinding(f) {
  if (f.category === "STRUCTURE" || /^lesson7ExerciseCardsDa/.test(f.path || "")) {
    return "01-structure-lesson7";
  }
  if (/^kurss/.test(f.lessonId || "") || (f.path || "").includes("COURSE_LESSON_HTML")) {
    return "02-static-html";
  }
  if (/^lesson[1-7]$/.test(f.lessonId || "") || /^lesson[1-7]Training/.test(f.path || "")) {
    return "03-lessons-01-07";
  }
  return "04-lessons-08-21-misc";
}

function loadGroupedFindings() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = (audit.findings || []).filter(
    (f) =>
      f.severity !== "PASS" &&
      f.category !== "PASS" &&
      f.category !== "FALSE_POSITIVE" &&
      String(f.severity || "").toUpperCase() !== "PASS",
  );
  const grouped = {};
  for (const f of findings) {
    const slug = groupForFinding(f);
    if (!grouped[slug]) grouped[slug] = [];
    grouped[slug].push(f);
  }
  return grouped;
}

function lunaDecisionPath(slug, decisionsDir) {
  return path.join(
    decisionsDir || path.join(ROOT, "reports"),
    `da-kurss-full-luna-owner-decisions-${slug}.md`,
  );
}

function stripBackticks(text) {
  return String(text || "")
    .trim()
    .replace(/^`+|`+$/g, "")
    .replace(/`\.$/, ".")
    .trim();
}

function parseOwnerArrow(text) {
  const raw = String(text || "").trim();
  const bt = raw.match(/`([^`]+)`\s*(?:→|->)\s*`([^`]+)`/);
  if (bt) {
    return { from: stripBackticks(bt[1]), to: stripBackticks(bt[2]) };
  }
  const arrow = parseArrowReplacement(stripBackticks(raw));
  if (!arrow) return null;
  return { from: stripBackticks(arrow.from), to: stripBackticks(arrow.to) };
}

function fragmentFromForFinding(finding, arrowFrom) {
  const current = String(finding.daCurrent || "");
  if (current && !/…|\.\.\./.test(current) && current.length < 500) {
    return current;
  }
  return stripBackticks(arrowFrom);
}

function normalizeAuditPath(pathStr) {
  return String(pathStr || "").replace(/COURSE_LESSEN_DATA/g, "COURSE_LESSON_DATA");
}

function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    "$1,$2",
  );
}

function loadDaCourseTexts() {
  const filePath = path.join(ROOT, "data/da/courseLessons.js");
  let code = fs.readFileSync(filePath, "utf8");
  code = repairDaCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const texts = [];
  function walk(o) {
    if (typeof o === "string") texts.push(o);
    else if (Array.isArray(o)) o.forEach(walk);
    else if (o && typeof o === "object") Object.values(o).forEach(walk);
  }
  walk(ctx.window.COURSE_LESSON_DATA || {});
  Object.values(ctx.window.COURSE_LESSON_HTML || {}).forEach(walk);
  return texts;
}

function deriveLesson7LvValue(infinitive, courseTexts) {
  const esc = String(infinitive || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const atRe = new RegExp(`(?:^|[>\\s])${esc}(?:\\s*\\([^)]*\\))?\\s*[—–-]\\s*(at\\s+[^<\\n"]+)`, "i");
  const bareRe = new RegExp(`(?:^|[>\\s])${esc}\\s*[—–-]\\s*([a-zæøåA-ZÆØÅ][^<\\n"]{0,40})`, "i");
  for (const re of [atRe, bareRe]) {
    for (const text of courseTexts) {
      const m = text.match(re);
      if (m) {
        return m[1].trim().split(/[.,;(]/)[0].trim();
      }
    }
  }
  return null;
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

function buildApplyEntry(slug, finding, row, courseTexts) {
  const auditPath = normalizeAuditPath(finding.path);
  const base = {
    groupSlug: slug,
    findingNum: row.findingNum,
    auditId: finding.id,
    path: auditPath,
    normalizedPath: normalizeOwnerPath(auditPath),
    daCurrent: finding.daCurrent ?? "",
    ownerDecision: row.ownerNew,
    deCurrent: finding.deCurrent || "",
    sourceFile: `da-kurss-full-luna-owner-decisions-${slug}.md`,
    fieldType: finding.fieldType,
    lessonId: finding.lessonId,
  };

  if (slug === "01-structure-lesson7") {
    const m = String(finding.path || "").match(/^lesson7ExerciseCardsDa\[(\d+)\]\.lv$/);
    if (!m) return { skip: true, reason: "UNEXPECTED_STRUCTURE_PATH", ...base };
    const cardIndex = parseInt(m[1], 10);
    const trainingPath = path.join(ROOT, "data/da/courseTrainingCards.js");
    const tcode = fs.readFileSync(trainingPath, "utf8");
    const tctx = { window: {} };
    vm.createContext(tctx);
    vm.runInContext(tcode, tctx);
    const card = (tctx.window.lesson7ExerciseCardsDa || [])[cardIndex];
    const infinitive = card?.infinitive || "";
    const ownerNew = deriveLesson7LvValue(infinitive, courseTexts);
    if (!ownerNew) {
      return { skip: true, reason: "SOURCE_REQUIRED", infinitive, ...base };
    }
    return {
      ...base,
      applyMode: "addTrainingField",
      ownerNew,
      daCurrent: "missing",
      trainingDeck: "lesson7ExerciseCardsDa",
      cardIndex,
      fieldName: "lv",
    };
  }

  if (slug === "02-static-html" && row.findingNum === 1) {
    return {
      ...base,
      applyMode: "htmlZeroWidthStrip",
      htmlKey: "kurssArticlesLesson",
    };
  }

  if (slug === "02-static-html" && row.findingNum === 9) {
    return {
      ...base,
      applyMode: "htmlMultiSubstring",
      htmlKey: "kurssSentenceStructureLesson",
      replacements: SENTENCE_STRUCTURE_NEGATION_REPLACEMENTS,
    };
  }

  if (slug === "02-static-html" && row.findingNum === 6) {
    return {
      ...base,
      applyMode: "htmlSubstring",
      htmlKey: "kurssPronunciationLesson",
      fragmentFrom: "Tarm (få) - godt",
      fragmentTo: "gut — god",
      ownerNew: "gut — god",
    };
  }

  if (slug === "02-static-html" && row.findingNum === 7) {
    return {
      ...base,
      applyMode: "htmlSubstring",
      htmlKey: "kurssConsonantsLesson",
      fragmentFrom: "Dårlig (bāt) - dårlig",
      fragmentTo: "Bad — bad",
      ownerNew: "Bad — bad",
    };
  }

  if (slug === "03-lessons-01-07" && row.findingNum === 24) {
    return {
      ...base,
      applyMode: "htmlSubstring",
      lessonKey: "kurssLesson5",
      fragmentFrom: "Daudz sieviešu kārtas vārdu atvasina ar galotni -Dø Lehrerin",
      fragmentTo: "Mange feminine personbetegnelser dannes med endelsen -in: die Lehrerin.",
      ownerNew: "Mange feminine personbetegnelser dannes med endelsen -in: die Lehrerin.",
    };
  }

  const quoted = parseQuotedHtmlReplace(row.ownerNew);
  if (quoted) {
    const htmlKey = htmlKeyFromPath(auditPath) || lessonKeyFromPath(auditPath);
    const isLegacy =
      String(auditPath || "").includes("legacyHtml") ||
      String(finding.fieldType || "") === "legacyHtml";
    if (htmlKey && isLegacy) {
      const from = stripBackticks(quoted.from);
      const to = stripBackticks(quoted.to);
      return {
        ...base,
        applyMode: "htmlSubstring",
        htmlKey: isLegacy && htmlKey.startsWith("kurssLesson") ? null : htmlKey,
        lessonKey: isLegacy && htmlKey.startsWith("kurssLesson") ? htmlKey : null,
        fragmentFrom: fragmentFromForFinding(finding, from),
        fragmentTo: to,
        ownerNew: to,
      };
    }
  }

  const arrow = parseOwnerArrow(row.ownerNew);
  if (arrow) {
    const from = fragmentFromForFinding(finding, arrow.from);
    const to = stripBackticks(arrow.to);
    const htmlKey = htmlKeyFromPath(auditPath);
    const lessonKey = lessonKeyFromPath(auditPath);
    const isLegacy =
      String(auditPath || "").includes("legacyHtml") ||
      String(finding.fieldType || "") === "legacyHtml";

    if (htmlKey && !isLegacy) {
      return {
        ...base,
        applyMode: "htmlSubstring",
        htmlKey,
        fragmentFrom: from,
        fragmentTo: to,
        ownerNew: to,
      };
    }

    if (lessonKey && isLegacy) {
      return {
        ...base,
        applyMode: "htmlSubstring",
        lessonKey,
        fragmentFrom: from,
        fragmentTo: to,
        ownerNew: to,
      };
    }

    return {
      ...base,
      applyMode: "field",
      ownerNew: to,
      daCurrent: from,
    };
  }

  if (/^No `COURSE_LESSON_HTML/.test(row.ownerNew)) {
    return { skip: true, reason: "META_ZERO_WIDTH_ONLY", ...base };
  }

  return { skip: true, reason: "UNPARSEABLE_OWNER_DECISION", ...base };
}

module.exports = {
  GROUP_SLUGS,
  GROUP_META,
  AUDIT_JSON,
  SENTENCE_STRUCTURE_NEGATION_REPLACEMENTS,
  groupForFinding,
  loadGroupedFindings,
  lunaDecisionPath,
  stripBackticks,
  parseOwnerArrow,
  normalizeAuditPath,
  fragmentFromForFinding,
  deriveLesson7LvValue,
  loadDaCourseTexts,
  buildApplyEntry,
  lessonKeyFromPath,
  htmlKeyFromPath,
  parseDecisionFile,
};
