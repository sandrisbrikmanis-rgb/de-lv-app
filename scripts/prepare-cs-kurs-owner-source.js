#!/usr/bin/env node
/**
 * CS-DE Kurs — READ-ONLY OWNER source preparation.
 * Builds deterministic OWNER review artifacts from merged audit findings.
 *
 * Usage: node scripts/prepare-cs-kurs-owner-source.js
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { extractUnits, stripHtml } = require("./lib/cs-kurs-audit-extract");

const MERGED_JSON = path.join(ROOT, "reports/temp/cs-kurs-audit/merged-audit.json");
const DET_JSON = path.join(ROOT, "reports/temp/cs-kurs-audit/full-audit.json");
const LUNA_JSON = path.join(ROOT, "reports/temp/cs-kurs-audit/linguistic-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-kurs-owner-review-all-findings-by-object.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-kurs-owner-review-source.json");
const BATCH_SIZE = 40;

const SPECIAL_LESSONS = [
  "kurssArticlesLesson",
  "kurssPronounsLesson",
  "kurssPronunciationLesson",
  "kurssConsonantsLesson",
];

function truncate(s, n = 300) {
  const t = String(s || "");
  return t.length <= n ? t : t.slice(0, n) + "…";
}

function normalizeWhitespace(s) {
  return String(s || "").replace(/\s+/g, " ").trim();
}

function fieldAlias(field) {
  const f = String(field || "");
  if (f === "back" || f === "answer") return "de";
  if (f === "front" || f === "cs") return "lv";
  return f;
}

function extractProblemKey(reason) {
  const r = String(reason || "");
  const m = r.match(/Foreign\/script issue:\s*([A-Z_]+)/);
  if (m) return m[1];
  const lm = r.match(/\[Luna\s+([^\]]+)\]/);
  if (lm) return `LUNA_${lm[1].trim().replace(/\s+/g, "_")}`;
  if (/LV leftover|LV_LEFTOVER|LV_UI/i.test(r)) return "LV_LEFTOVER";
  if (/DE pole|DE_PARITY|MASTER DE/i.test(r)) return "DE_PARITY";
  if (/mojibake|unicode/i.test(r)) return "MOJIBAKE";
  return normalizeWhitespace(r).slice(0, 80) || "GENERAL";
}

function resolveUnitId(finding) {
  const { lessonSection, location, field } = finding;
  if (!location) return `${lessonSection}/${field}`;

  if (location.includes("/")) {
    // Already unit-style: kurssLesson1/title, kurssLesson10/section[4]/card[11]
    if (field === "legacyHtml(stripped)" || field === "COURSE_LESSON_HTML") {
      return `${lessonSection}/legacyHtml`;
    }
    return location;
  }

  // sections[4].cards[11].back style
  const sec = location.match(/sections\[(\d+)\]/);
  if (!sec) return `${lessonSection}/${location}`;

  const si = sec[1];
  const card = location.match(/cards\[(\d+)\]/);
  const fill = location.match(/fill\[(\d+)\]/);
  const multi = location.match(/multi\[(\d+)\]/);
  const promptTask = location.match(/promptTask\[(\d+)\]/);
  const conj = location.match(/conj\[(\d+)\]/);

  if (card) return `${lessonSection}/section[${si}]/card[${card[1]}]`;
  if (fill) {
    if (field.includes("task")) return `${lessonSection}/section[${si}]/fill[${fill[1]}]/task`;
    return `${lessonSection}/section[${si}]/fill[${fill[1]}]`;
  }
  if (multi) {
    const form = location.match(/forms\[(\d+)\]/);
    if (form) {
      if (field.includes("text")) return `${lessonSection}/section[${si}]/multi[${multi[1]}]/forms[${form[1]}]/text`;
      return `${lessonSection}/section[${si}]/multi[${multi[1]}]/forms[${form[1]}]/task`;
    }
    return `${lessonSection}/section[${si}]/multi[${multi[1]}]/base`;
  }
  if (promptTask) {
    if (field.includes("task")) return `${lessonSection}/section[${si}]/promptTask[${promptTask[1]}]/task`;
    return `${lessonSection}/section[${si}]/promptTask[${promptTask[1]}]/prompt`;
  }
  if (conj) {
    const person = field.match(/\b(ich|er|wir)\b/)?.[1];
    if (person) return `${lessonSection}/section[${si}]/conj[${conj[1]}].${person}`;
    return `${lessonSection}/section[${si}]/conj[${conj[1]}]`;
  }

  const item = location.match(/items\[(\d+)\]/);
  if (item) return `${lessonSection}/section[${si}]/item[${item[1]}]`;

  return `${lessonSection}/section[${si}]`;
}

function resolveObjectKey(finding) {
  const unitId = resolveUnitId(finding);
  const file = finding.file || "data/cs/courseLessons.js";
  const lesson = finding.lessonSection || "";
  return `${file}|${lesson}|${unitId}`;
}

function resolveObjectLocation(finding) {
  return resolveUnitId(finding);
}

function buildProductionAccessor(extracted) {
  const { csData, csTraining, csHtml, lvData } = extracted;
  const lvHtml = extracted.lvHtml || {};

  function getCard(lessonKey, si, ci) {
    return csData[lessonKey]?.sections?.[si]?.cards?.[ci];
  }

  function getLvCard(lessonKey, si, ci) {
    return lvData[lessonKey]?.sections?.[si]?.cards?.[ci];
  }

  function getProductionValue(finding) {
    const { file, lessonSection, location, field } = finding;
    const f = String(field || "");
    const unitId = resolveUnitId(finding);

    if (file.includes("courseTrainingCards")) {
      const lessonMatch = unitId.match(/training\/lesson(\d+)/);
      if (!lessonMatch) return "";
      const n = lessonMatch[1];
      const cardMatch = unitId.match(/card\[(\d+)\]/);
      const exMatch = unitId.match(/exercise\[(\d+)\]/);
      if (n === "7" && exMatch) {
        const csC = csTraining.lesson7ExerciseCardsCs?.[exMatch[1]];
        if (!csC) return "";
        const person = unitId.match(/\/(du|ihr|sie|lv)$/)?.[1];
        if (person) return csC[person] || "";
        if (f.includes("lv")) return csC.lv || "";
        return csC.front || csC.cs || "";
      }
      if (cardMatch) {
        const csC = csTraining[`lesson${n}TrainingCardsCs`]?.[cardMatch[1]];
        if (!csC) return "";
        const alias = fieldAlias(f);
        if (alias === "de") return csC.back || "";
        if (alias === "lv") return csC.front || "";
        return csC[f] || csC.front || "";
      }
    }

    if (f === "COURSE_LESSON_HTML") {
      const key = lessonSection;
      return csHtml[key] || "";
    }

    if (f === "legacyHtml(stripped)") {
      const html = csData[lessonSection]?.legacyHtml || csHtml[lessonSection] || "";
      return stripHtml(html);
    }

    if (f === "legacyHtml") {
      return csData[lessonSection]?.legacyHtml || "";
    }

    if (f === "title") return csData[lessonSection]?.title || "";
    if (f === "subtitle") return csData[lessonSection]?.subtitle || "";

    const secTitle = unitId.match(/section\[(\d+)\]\/title$/);
    if (secTitle) {
      return csData[lessonSection]?.sections?.[Number(secTitle[1])]?.title || "";
    }

    const sec = unitId.match(/section\[(\d+)\]/);
    if (!sec) return "";

    const si = Number(sec[1]);
    const lessonKey = lessonSection;

    const item = unitId.match(/item\[(\d+)\]/);
    if (item) {
      return csData[lessonKey]?.sections?.[si]?.items?.[Number(item[1])] || "";
    }

    const card = unitId.match(/card\[(\d+)\]/);
    if (card) {
      const c = getCard(lessonKey, si, Number(card[1]));
      if (!c) return "";
      const alias = fieldAlias(f);
      if (alias === "de") return c.de || c.answer || c.back || "";
      if (alias === "lv") return c.lv || c.front || c.cs || "";
      if (f.includes("task")) return c.task || "";
      return c.lv || c.front || "";
    }

    const fill = unitId.match(/fill\[(\d+)\]/);
    if (fill) {
      const c = getCard(lessonKey, si, Number(fill[1]));
      if (!c) return "";
      if (f.includes("task")) return c.task || "";
      if (fieldAlias(f) === "de") return c.answer || "";
      return c.prompt || "";
    }

    const promptTask = unitId.match(/promptTask\[(\d+)\]/);
    if (promptTask) {
      const c = getCard(lessonKey, si, Number(promptTask[1]));
      if (!c) return "";
      if (f.includes("task")) return c.task || "";
      if (fieldAlias(f) === "de") return c.answer || "";
      return c.prompt || "";
    }

    const multi = unitId.match(/multi\[(\d+)\]/);
    if (multi) {
      const c = getCard(lessonKey, si, Number(multi[1]));
      if (!c) return "";
      if (unitId.includes("/base")) return c.base || "";
      const form = unitId.match(/forms\[(\d+)\]/);
      if (form) {
        const fo = c.forms?.[Number(form[1])];
        if (!fo) return "";
        if (f.includes("text")) return fo.text || "";
        return fo.task || "";
      }
    }

    const conj = unitId.match(/conj\[(\d+)\]/);
    if (conj) {
      const c = getCard(lessonKey, si, Number(conj[1]));
      if (!c) return "";
      const person = unitId.match(/\.(ich|er|wir)$/)?.[1] || f.match(/\b(ich|er|wir)\b/)?.[1];
      if (person) return c[person] || "";
      return c.ich || "";
    }

    // Fallback: sections[N].cards[M].field path
    const pathCard = location?.match(/cards\[(\d+)\]/);
    if (pathCard) {
      const c = getCard(lessonKey, si, Number(pathCard[1]));
      if (!c) return "";
      const alias = fieldAlias(f);
      if (alias === "de") return c.de || c.answer || c.back || "";
      if (alias === "lv") return c.lv || c.front || "";
      return c[f] || "";
    }

    return "";
  }

  function getMasterDe(finding) {
    const { lessonSection, field } = finding;
    const unitId = resolveUnitId(finding);
    const sec = unitId.match(/section\[(\d+)\]/);
    if (!sec) return "";
    const si = Number(sec[1]);
    const card = unitId.match(/card\[(\d+)\]/);
    if (!card) return "";
    const lvC = lvData[lessonSection]?.sections?.[si]?.cards?.[Number(card[1])];
    if (!lvC) return "";
    const alias = fieldAlias(field);
    if (alias === "de") return lvC.de || lvC.answer || lvC.back || "";
    return "";
  }

  return { getProductionValue, getMasterDe };
}

function valuesMatch(auditCurrent, productionCurrent, field) {
  const a = String(auditCurrent || "");
  const p = String(productionCurrent || "");
  if (a === p) return true;
  if (!a || !p) return a === p;

  const na = normalizeWhitespace(a);
  const np = normalizeWhitespace(p);
  if (na === np) return true;

  // Truncated audit snippets (legacy HTML)
  if (field.includes("legacyHtml") || field === "COURSE_LESSON_HTML") {
    if (np.startsWith(na.replace(/…$/, "")) || na.startsWith(np.slice(0, 80))) return true;
    const sa = stripHtml(a);
    const sp = stripHtml(p);
    if (normalizeWhitespace(sa) === normalizeWhitespace(sp)) return true;
    if (sp.startsWith(sa.slice(0, 120)) || sa.startsWith(sp.slice(0, 120))) return true;
  }

  return false;
}

function isFalsePositiveCandidate(finding, productionCurrent) {
  const reason = String(finding.reason || "");
  const status = String(finding.status || "");
  const pc = String(productionCurrent || "");
  if (status === "FALSE_POSITIVE") return true;

  if (/Foreign\/script issue:\s*LV_DIACRITIC/.test(reason)) {
    const hasLatvianDiacritic = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/.test(pc);
    if (!hasLatvianDiacritic) return true;
    // Pronunciation macron notation (e.g. flūr, hōf) — not Latvian leftover.
    if (
      /\([a-zA-Zāēīūōăĕĭŏŭ]*[īūāēō][a-zA-Zāēīūōăĕĭŏŭ]*\)/.test(pc)
      && !/[ģķļņ]/.test(pc)
    ) {
      return true;
    }
  }

  if (pc === "(DE conjugation drill — no Czech prompt)") return true;

  if (fieldAlias(finding.field) === "de" && /^[A-Za-zÄÖÜß\s,!.?\"'„"–-]+$/.test(pc)) {
    if (/Foreign\/script issue/.test(reason)) return true;
  }

  return false;
}

function normalizeSource(src) {
  const s = String(src || "").toLowerCase();
  if (s === "deterministic") return "DETERMINISTIC";
  if (s === "luna") return "LUNA";
  if (s.includes("deterministic") && s.includes("luna")) return "DETERMINISTIC + LUNA";
  return "DETERMINISTIC";
}

function mergeSources(a, b) {
  const set = new Set();
  for (const x of [a, b]) {
    if (!x) continue;
    if (x.includes("DETERMINISTIC")) set.add("DETERMINISTIC");
    if (x.includes("LUNA")) set.add("LUNA");
  }
  if (set.size === 2) return "DETERMINISTIC + LUNA";
  if (set.has("LUNA")) return "LUNA";
  return "DETERMINISTIC";
}

function lessonSortKey(obj) {
  const lesson = obj.lesson || "";
  const m = lesson.match(/kurssLesson(\d+)/);
  if (m) return { group: 1, num: Number(m[1]), sub: 0, lesson };
  if (SPECIAL_LESSONS.includes(lesson)) {
    return { group: 2, num: SPECIAL_LESSONS.indexOf(lesson), sub: 0, lesson };
  }
  const tr = lesson.match(/lesson(\d+)/);
  if (tr) return { group: 3, num: Number(tr[1]), sub: 0, lesson };
  if (obj.file?.includes("ui")) return { group: 5, num: 0, sub: 0, lesson: "ui" };
  return { group: 4, num: 0, sub: 0, lesson };
}

function compareObjects(a, b) {
  const ka = lessonSortKey(a);
  const kb = lessonSortKey(b);
  if (ka.group !== kb.group) return ka.group - kb.group;
  if (ka.num !== kb.num) return ka.num - kb.num;
  return a.objectKey.localeCompare(b.objectKey);
}

function buildOverlapMap(detFindings, lunaFindings) {
  const detTargets = new Map();
  const lunaTargets = new Map();

  function toSyntheticFinding(raw, source) {
    return {
      file: raw.file || "data/cs/courseLessons.js",
      lessonSection: raw.lessonSection || raw.lessonKey || "",
      location: raw.location || raw.cardId || "",
      field: raw.field || "lv",
      current: raw.current || raw.currentCs || "",
      reason: raw.reason || "",
      source,
    };
  }

  function addTarget(map, raw, source) {
    const finding = toSyntheticFinding(raw, source);
    const objKey = resolveObjectKey(finding);
    const field = fieldAlias(finding.field);
    const problem = extractProblemKey(finding.reason);
    const targetKey = `${objKey}|${field}|${problem}`;
    if (!map.has(targetKey)) map.set(targetKey, []);
    map.get(targetKey).push({ ...finding, raw });
  }

  for (const f of detFindings) addTarget(detTargets, f, "DETERMINISTIC");
  for (const f of lunaFindings) {
    addTarget(lunaTargets, {
      cardId: f.cardId,
      field: f.field,
      currentCs: f.currentCs,
      reason: `[Luna ${f.category || "LINGUISTIC"}] ${f.reason}`,
      proposedCs: f.proposedCs,
    }, "LUNA");
  }

  const overlap = new Set();
  for (const k of detTargets.keys()) {
    if (lunaTargets.has(k)) overlap.add(k);
  }
  return { overlap, detTargets, lunaTargets };
}

function extractEmbeddedUiHints() {
  const raw = fs.readFileSync(path.join(ROOT, "data/cs/courseLessons.js"), "utf8");
  const matches = raw.match(/Klikšķini|kartītes|Lekcija \d|pārtulkošanas|vingrinājuma/gi) || [];
  return matches.slice(0, 5).join("; ");
}

function enrichLunaRecommendation(lunaFinding) {
  if (!lunaFinding) return "";
  return lunaFinding.proposedCs || lunaFinding.proposed || "";
}

function main() {
  const merged = JSON.parse(fs.readFileSync(MERGED_JSON, "utf8"));
  const det = JSON.parse(fs.readFileSync(DET_JSON, "utf8"));
  const luna = fs.existsSync(LUNA_JSON) ? JSON.parse(fs.readFileSync(LUNA_JSON, "utf8")) : { findings: [] };

  const extracted = extractUnits();
  const unitMap = new Map(extracted.units.map((u) => [u.unitId, u]));
  const { getProductionValue, getMasterDe } = buildProductionAccessor(extracted);
  const { overlap: overlapTargets, lunaTargets } = buildOverlapMap(det.findings, luna.findings || []);

  function mergedOverlapSource(finding) {
    const objKey = resolveObjectKey(finding);
    const field = fieldAlias(finding.field);
    const problem = extractProblemKey(finding.reason);
    const exactKey = `${objKey}|${field}|${problem}`;
    if (overlapTargets.has(exactKey)) return "DETERMINISTIC + LUNA";

    // Merge-time dedup used current prefix — recover Luna overlap on same object+field.
    const fieldPrefix = `${objKey}|${field}|`;
    for (const k of lunaTargets.keys()) {
      if (k.startsWith(fieldPrefix)) return "DETERMINISTIC + LUNA";
    }
    return normalizeSource(finding.source);
  }

  function resolveProductionCurrent(finding) {
    if (
      finding.lessonSection === "(embedded UI hints)"
      && finding.location === "legacyHtml/training hints"
    ) {
      return extractEmbeddedUiHints();
    }
    return getProductionValue(finding);
  }

  const rawFindings = merged.findings;
  const objectsMap = new Map();
  const mismatches = [];
  const accounted = new Set();

  // OWNER target dedup within objects: targetKey -> finding aggregate
  for (const f of rawFindings) {
    accounted.add(f.num);
    const objectKey = resolveObjectKey(f);
    const objectLocation = resolveObjectLocation(f);
    const normalizedField = fieldAlias(f.field);
    const problemKey = extractProblemKey(f.reason);
    const targetKey = `${objectKey}|${normalizedField}|${problemKey}`;

    const productionCurrent = resolveProductionCurrent(f);
    const auditCurrent = f.current || "";
    const currentMatch = valuesMatch(auditCurrent, productionCurrent, f.field);
    if (!currentMatch) {
      mismatches.push({
        objectKey,
        objectNum: null,
        lesson: f.lessonSection,
        section: objectLocation,
        file: f.file,
        field: f.field,
        auditCurrent: truncate(auditCurrent, 500),
        actualCurrent: truncate(productionCurrent, 500),
        auditFindingId: f.num,
        reason: f.reason,
      });
    }

    let source = mergedOverlapSource(f);

    const ownerStatus = f.status === "DE_PARITY_ISSUE"
      ? "DE_PARITY_ISSUE"
      : f.status === "SOURCE_DE_ISSUE"
        ? "SOURCE_DE_ISSUE"
        : isFalsePositiveCandidate(f, productionCurrent)
          ? "FALSE_POSITIVE_CANDIDATE"
          : "OWNER_REVIEW";

    if (!objectsMap.has(objectKey)) {
      objectsMap.set(objectKey, {
        objectKey,
        lesson: f.lessonSection || "",
        section: objectLocation,
        file: f.file || "data/cs/courseLessons.js",
        objectId: objectLocation,
        location: objectLocation,
        targetFindings: new Map(),
        ownerDecision: { status: "PENDING", changes: [] },
      });
    }

    const obj = objectsMap.get(objectKey);
    if (!obj.targetFindings.has(targetKey)) {
      obj.targetFindings.set(targetKey, {
        severity: f.severity,
        sources: new Set(),
        field: f.field,
        normalizedField,
        current: productionCurrent,
        auditCurrent,
        currentMatch,
        auditRecommendation: f.proposed || "",
        reasons: [],
        auditFindingIds: [],
        ownerStatus,
        problemKey,
        lunaRecommendation: "",
        masterDe: ownerStatus === "DE_PARITY_ISSUE" ? getMasterDe(f) : "",
        proposedAction: ownerStatus === "DE_PARITY_ISSUE" ? "RESTORE_MASTER_PARITY" : "",
      });
    }

    const tf = obj.targetFindings.get(targetKey);
    tf.sources.add(source);
    tf.auditFindingIds.push(f.num);
    tf.reasons.push(f.reason || "");
    if (f.severity === "CRITICAL" || (tf.severity !== "CRITICAL" && f.severity === "HIGH")) {
      tf.severity = f.severity;
    }
    if (f.proposed && !tf.auditRecommendation) tf.auditRecommendation = f.proposed;
    if (source.includes("LUNA") && f.source === "luna") {
      tf.lunaRecommendation = f.proposed || tf.lunaRecommendation;
    }
    if (ownerStatus === "DE_PARITY_ISSUE") {
      tf.ownerStatus = "DE_PARITY_ISSUE";
      tf.masterDe = getMasterDe(f);
      tf.proposedAction = "RESTORE_MASTER_PARITY";
    }
    if (ownerStatus === "FALSE_POSITIVE_CANDIDATE") tf.ownerStatus = "FALSE_POSITIVE_CANDIDATE";
  }

  const objects = Array.from(objectsMap.values()).sort(compareObjects);
  objects.forEach((o, i) => {
    o.objectNum = i + 1;
    o.findings = Array.from(o.targetFindings.values()).map((tf) => ({
      severity: tf.severity,
      source: Array.from(tf.sources).join(" + ").replace("DETERMINISTIC + LUNA + DETERMINISTIC + LUNA", "DETERMINISTIC + LUNA"),
      field: tf.field,
      normalizedField: tf.normalizedField,
      current: tf.current,
      auditCurrent: tf.auditCurrent,
      currentMatch: tf.currentMatch ? "CURRENT_MATCH" : "CURRENT_MISMATCH",
      auditRecommendation: tf.auditRecommendation,
      lunaRecommendation: tf.lunaRecommendation || "",
      reason: tf.reasons.join(" | "),
      auditFindingIds: tf.auditFindingIds,
      ownerStatus: tf.ownerStatus,
      problemKey: tf.problemKey,
      masterDe: tf.masterDe || "",
      proposedAction: tf.proposedAction || "",
    }));
    delete o.targetFindings;
  });

  mismatches.forEach((m) => {
    const obj = objects.find((o) => o.objectKey === m.objectKey);
    if (obj) m.objectNum = obj.objectNum;
  });

  // Stats
  const stats = {
    rawAuditFindings: rawFindings.length,
    accountedFindings: accounted.size,
    deduplicatedOwnerTargets: 0,
    uniqueObjects: objects.length,
    uniqueFields: new Set(),
    deterministicOnly: 0,
    lunaOnly: 0,
    deterministicPlusLuna: 0,
    currentMatch: 0,
    currentMismatch: 0,
    deParityIssue: 0,
    sourceDeIssue: 0,
    falsePositiveCandidate: 0,
    ownerPending: 0,
    severity: { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 },
  };

  for (const obj of objects) {
    for (const f of obj.findings) {
      stats.deduplicatedOwnerTargets += 1;
      stats.uniqueFields.add(`${obj.objectKey}|${f.normalizedField}`);
      const src = f.source;
      if (src === "DETERMINISTIC") stats.deterministicOnly += 1;
      else if (src === "LUNA") stats.lunaOnly += 1;
      else stats.deterministicPlusLuna += 1;
      if (f.currentMatch === "CURRENT_MATCH") stats.currentMatch += 1;
      else stats.currentMismatch += 1;
      if (f.ownerStatus === "DE_PARITY_ISSUE") stats.deParityIssue += 1;
      if (f.ownerStatus === "SOURCE_DE_ISSUE") stats.sourceDeIssue += 1;
      if (f.ownerStatus === "FALSE_POSITIVE_CANDIDATE") stats.falsePositiveCandidate += 1;
      stats.severity[f.severity] = (stats.severity[f.severity] || 0) + 1;
    }
  }
  stats.uniqueFields = stats.uniqueFields.size;
  stats.ownerPending = objects.length;

  // Batches
  const batches = [];
  let batchObjects = [];
  let batchFindings = 0;
  let batchNum = 1;

  function flushBatch() {
    if (!batchObjects.length) return;
    const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
    for (const o of batchObjects) {
      for (const f of o.findings) sev[f.severity] = (sev[f.severity] || 0) + 1;
    }
    const lessons = batchObjects.map((o) => o.lesson).filter(Boolean);
    batches.push({
      batchNum,
      objectCount: batchObjects.length,
      findingCount: batchFindings,
      lessonRange: `${lessons[0] || "—"} … ${lessons[lessons.length - 1] || "—"}`,
      severity: sev,
      objectNums: [batchObjects[0].objectNum, batchObjects[batchObjects.length - 1].objectNum],
    });
    batchNum += 1;
    batchObjects = [];
    batchFindings = 0;
  }

  for (const obj of objects) {
    const objFindingCount = obj.findings.length;
    if (batchObjects.length >= BATCH_SIZE && batchObjects.length > 0) {
      flushBatch();
    }
    batchObjects.push(obj);
    batchFindings += objFindingCount;
  }
  flushBatch();
  stats.ownerBatches = batches.length;

  // Markdown
  const md = [];
  md.push("# CS–DE KURS — OWNER REVIEW (ALL FINDINGS BY OBJECT)");
  md.push("");
  md.push("READ-ONLY OWNER source. No production repairs. No OWNER `NEW` values assigned.");
  md.push("");
  md.push("## CS–DE KURS OWNER SOURCE PREPARATION — SUMMARY");
  md.push("");
  md.push("| Metrika | Vērtība |");
  md.push("|---|---|");
  md.push(`| Raw audit findings | ${stats.rawAuditFindings} |`);
  md.push(`| Accounted findings | ${stats.accountedFindings}/${stats.rawAuditFindings} |`);
  md.push(`| Deduplicated OWNER targets | ${stats.deduplicatedOwnerTargets} |`);
  md.push(`| Unique affected objects | ${stats.uniqueObjects} |`);
  md.push(`| Unique affected fields | ${stats.uniqueFields} |`);
  md.push(`| OWNER batches | ${stats.ownerBatches} |`);
  md.push(`| CURRENT_MATCH | ${stats.currentMatch} |`);
  md.push(`| CURRENT_MISMATCH | ${stats.currentMismatch} |`);
  md.push(`| DE_PARITY_ISSUE | ${stats.deParityIssue} |`);
  md.push(`| SOURCE_DE_ISSUE | ${stats.sourceDeIssue} |`);
  md.push(`| FALSE_POSITIVE_CANDIDATE | ${stats.falsePositiveCandidate} |`);
  md.push(`| OWNER PENDING | ${stats.ownerPending} |`);
  md.push(`| Production changes | **0** |`);
  md.push(`| DE changes | **0** |`);
  md.push(`| LV MASTER changes | **0** |`);
  md.push("");
  md.push("### Severity (deduplicated targets)");
  md.push(`CRITICAL: ${stats.severity.CRITICAL}, HIGH: ${stats.severity.HIGH}, MEDIUM: ${stats.severity.MEDIUM}, LOW: ${stats.severity.LOW}`);
  md.push("");
  md.push("### OWNER batches");
  md.push("");
  md.push("| Batch | Objects | Findings | Lesson range | CRIT/HIGH/MED |");
  md.push("| ----- | ------- | -------- | ------------ | ------------- |");
  for (const b of batches) {
    md.push(`| ${b.batchNum} | ${b.objectCount} | ${b.findingCount} | ${b.lessonRange} | ${b.severity.CRITICAL}/${b.severity.HIGH}/${b.severity.MEDIUM} |`);
  }
  md.push("");
  md.push("---");
  md.push("");
  md.push("## CURRENT MISMATCHES");
  md.push("");
  md.push(`Total mismatches: **${mismatches.length}**`);
  md.push("");
  if (mismatches.length) {
    md.push("| Object | Field | Audit CURRENT | Actual CURRENT | Finding # |");
    md.push("| ------ | ----- | ------------- | -------------- | --------- |");
    for (const m of mismatches.slice(0, 100)) {
      const ac = truncate(m.auditCurrent, 80).replace(/\|/g, "\\|");
      const pc = truncate(m.actualCurrent, 80).replace(/\|/g, "\\|");
      md.push(`| OBJECT ${m.objectNum || "—"} ${m.lesson} | ${m.field} | ${ac} | ${pc} | #${m.auditFindingId} |`);
    }
    if (mismatches.length > 100) md.push(`| … | … | … | … | (+${mismatches.length - 100} more in JSON) |`);
  }
  md.push("");
  md.push("---");
  md.push("");

  let currentBatch = 1;
  for (const obj of objects) {
    const batch = batches.find((b) => obj.objectNum >= b.objectNums[0] && obj.objectNum <= b.objectNums[1]);
    if (batch && batch.batchNum !== currentBatch) {
      currentBatch = batch.batchNum;
      md.push(`## OWNER BATCH ${currentBatch}`);
      md.push("");
    }

    md.push(`## OBJECT ${String(obj.objectNum).padStart(3, "0")}`);
    md.push("");
    md.push(`Lesson: ${obj.lesson}`);
    md.push(`Section: ${obj.section}`);
    md.push(`File: ${obj.file}`);
    md.push(`Object ID / Location: ${obj.objectId}`);
    md.push("");

    obj.findings.forEach((f, fi) => {
      md.push(`### Finding ${fi + 1}`);
      md.push(`Severity: ${f.severity}`);
      md.push(`Source: ${f.source}`);
      md.push(`Status: ${f.ownerStatus}`);
      md.push(`Field: ${f.field}`);
      md.push(`CURRENT (${f.currentMatch}): ${truncate(f.current, 400)}`);
      if (f.currentMatch === "CURRENT_MISMATCH") {
        md.push(`Audit CURRENT: ${truncate(f.auditCurrent, 400)}`);
      }
      if (f.ownerStatus === "DE_PARITY_ISSUE") {
        md.push(`MASTER (DE): ${f.masterDe}`);
        md.push(`PROPOSED_ACTION: ${f.proposedAction}`);
      }
      md.push(`Audit recommendation: ${truncate(f.auditRecommendation, 300)}`);
      if (f.lunaRecommendation) md.push(`Luna recommendation: ${truncate(f.lunaRecommendation, 300)}`);
      md.push(`Reason: ${truncate(f.reason, 500)}`);
      md.push(`Audit finding IDs: ${f.auditFindingIds.join(", ")}`);
      md.push("");
    });

    md.push("### OWNER DECISION");
    md.push("Status: PENDING");
    md.push("NEW:");
    md.push("OWNER note:");
    md.push("");
    md.push("---");
    md.push("");
  }

  const verdict =
    stats.accountedFindings === stats.rawAuditFindings
      ? "CS–DE KURS — OWNER SOURCE READY"
      : "CS–DE KURS — OWNER SOURCE NEEDS RESOLUTION";

  md.push(`## FINAL VERDICT: **${verdict}**`);

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_MD, md.join("\n"));

  const jsonOut = {
    meta: {
      generatedAt: new Date().toISOString(),
      mode: "READ-ONLY_OWNER_SOURCE",
      productionFiles: merged.meta.productionFiles,
      lvMasterFiles: merged.meta.lvMasterFiles,
      verdict,
      stats,
      batches,
      mismatches,
      initialAuditChecksum: {
        mergedFindings: 629,
        CRITICAL: 1,
        HIGH: 624,
        MEDIUM: 4,
        LOW: 0,
      },
    },
    objects,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(jsonOut, null, 2));

  console.log(JSON.stringify({ verdict, stats, batches: batches.length, mismatches: mismatches.length }, null, 2));
}

main();
