#!/usr/bin/env node
/**
 * CS-DE Kurs — READ-ONLY OWNER review batch file generator.
 * Usage: node scripts/build-cs-kurs-owner-review-batch.js --batch=1
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { extractUnits, stripHtml } = require("./lib/cs-kurs-audit-extract");

const SOURCE_JSON = path.join(ROOT, "reports/temp/cs-kurs-owner-review-source.json");
const batchArg = process.argv.find((a) => a.startsWith("--batch="));
const BATCH_NUM = batchArg ? Number(batchArg.split("=")[1]) : 1;

function truncate(s, n = 400) {
  const t = String(s || "");
  return t.length <= n ? t : t.slice(0, n) + "…";
}

function extractFindingType(reason, problemKey) {
  const r = String(reason || "");
  const m = r.match(/\[Luna\s+([^\]]+)\]/);
  if (m) return m[1].trim();
  if (/Foreign\/script issue:\s*([A-Z_]+)/.test(r)) {
    return r.match(/Foreign\/script issue:\s*([A-Z_]+)/)[1];
  }
  if (/Latvian UI leftover/.test(r)) return "LV_UI_LEFTOVER";
  return problemKey || "GENERAL";
}

function extractDeFromItem(text) {
  const t = String(text || "");
  const beforeDash = t.split(/[—–-]/)[0]?.trim();
  if (beforeDash && /^[A-Za-zÄÖÜß]/.test(beforeDash)) return beforeDash;
  const m = t.match(/^([A-Za-zÄÖÜß][A-Za-zÄÖÜß\s,!.?\"'„"–-]*)/);
  return m ? m[1].trim() : "";
}

function lvMasterFragment(lvText, problemFragment) {
  if (!lvText) return "";
  const frag = String(problemFragment || "").slice(0, 40);
  if (!frag) return truncate(stripHtml(lvText), 500);
  const stripped = stripHtml(lvText);
  const idx = stripped.indexOf(frag.slice(0, 20));
  if (idx >= 0) {
    const start = Math.max(0, idx - 80);
    const end = Math.min(stripped.length, idx + frag.length + 120);
    return truncate(stripped.slice(start, end), 400);
  }
  return truncate(stripped, 500);
}

function legacyHtmlContext(finding, lvHtml) {
  const field = finding.field;
  const current = finding.current || "";
  const lv = lvHtml || "";

  if (field === "legacyHtml(stripped)") {
    const stripped = stripHtml(current);
    const lvStripped = stripHtml(lv);
    // Find LV leftover intro or first flagged substring
    const lvIntroMatch = stripped.match(/Skaitļi[^.]{0,80}/);
    const problemFragment = lvIntroMatch ? lvIntroMatch[0] : stripped.slice(0, 120);
    const ctxStart = stripped.indexOf(problemFragment.slice(0, 30));
    const before = ctxStart > 0 ? stripped.slice(Math.max(0, ctxStart - 60), ctxStart) : "";
    const after = stripped.slice(ctxStart, ctxStart + 180);
    return {
      problemFragment,
      contextBefore: before,
      contextAfter: after,
      fullCurrent: current,
      lvFragment: lvMasterFragment(lv, problemFragment),
    };
  }

  if (field === "COURSE_LESSON_HTML") {
    const intro = current.match(/<p class="kurss-lesson-intro">([^<]+)/);
    const frag = intro ? intro[1].trim() : stripHtml(current).slice(0, 100);
    const stripped = stripHtml(current);
    return {
      problemFragment: frag,
      contextBefore: stripped.slice(0, Math.min(80, stripped.length)),
      contextAfter: stripped.slice(80, 260),
      fullCurrent: current,
      lvFragment: lvMasterFragment(lv, frag),
    };
  }

  if (field === "legacyHtml") {
    const stripped = stripHtml(current);
    return {
      problemFragment: stripped.slice(0, 120),
      contextBefore: "",
      contextAfter: stripped.slice(0, 200),
      fullCurrent: current,
      lvFragment: lvMasterFragment(lv, stripped.slice(0, 40)),
    };
  }

  return {
    problemFragment: truncate(stripHtml(current), 120),
    contextBefore: "",
    contextAfter: truncate(stripHtml(current), 200),
    fullCurrent: current,
    lvFragment: lvMasterFragment(lv, ""),
  };
}

function falsePositiveNote(finding, current) {
  if (finding.ownerStatus !== "FALSE_POSITIVE_CANDIDATE") return "";
  const reason = finding.reason || "";
  const notes = [];
  notes.push("Detector flagged: Foreign/script issue LV_DIACRITIC");
  if (/Foreign\/script issue:\s*LV_DIACRITIC/.test(reason)) {
    const hasLv = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/.test(current);
    if (!hasLv) {
      notes.push("Possible false positive: production CURRENT contains no Latvian diacritics (ā ē ī ū ģ ķ ļ ņ); macron/pronunciation notation may have triggered detector.");
    }
    if (/\(ercēlen\)/.test(current)) {
      notes.push("Possible false positive: (ercēlen) is pronunciation notation with macron, not Latvian leftover text.");
    }
  }
  return notes.join(" ");
}

function getLvContext(unit, obj, lvData, lvHtml) {
  if (!unit) {
    if (obj.section.includes("legacyHtml")) {
      const key = obj.lesson;
      return { lvMaster: truncate(stripHtml(lvHtml[key] || ""), 500), deTarget: "(embedded DE in lesson HTML)" };
    }
    return { lvMaster: "", deTarget: "" };
  }

  let lvMaster = unit.lvReference || "";
  let deTarget = unit.deAnswer || unit.deContext || unit.lvDeAnswer || "";

  if (unit.type === "legacyHtml") {
    lvMaster = truncate(stripHtml(unit.lvReference || ""), 500);
    deTarget = "(embedded DE in lesson HTML)";
  } else if (unit.type === "sectionItem") {
    deTarget = extractDeFromItem(unit.currentCs || unit.lvReference) || deTarget;
    lvMaster = unit.lvReference || lvMaster;
  } else if (unit.type === "metadata") {
    lvMaster = unit.lvReference || lvMaster;
    deTarget = unit.deContext || obj.lesson.replace("kurssLesson", "Lektion ");
  }

  return { lvMaster: truncate(lvMaster, 500), deTarget: truncate(deTarget, 300) };
}

function needsLvContext(obj, finding) {
  if (obj.section.includes("legacyHtml")) return true;
  if (finding.source?.includes("LUNA")) return true;
  if (/LV_|Latvian|leftover/i.test(finding.reason || "")) return true;
  if (obj.section.includes("/item[")) return true;
  return ["title", "subtitle"].includes(finding.field);
}

function formatObject(obj, unitMap, lvHtml) {
  const lines = [];
  const num = String(obj.objectNum).padStart(3, "0");
  const unit = unitMap.get(obj.location) || unitMap.get(obj.section);

  lines.push(`## OBJECT ${num}`);
  lines.push("");
  lines.push("### Identifikācija");
  lines.push(`- OWNER object: ${num}`);
  lines.push(`- Object key: ${obj.objectKey}`);
  lines.push(`- Lesson: ${obj.lesson}`);
  lines.push(`- Section: ${obj.section}`);
  lines.push(`- File: ${obj.file}`);
  lines.push(`- Object ID / Location: ${obj.objectId}`);
  lines.push("");

  const isLegacy = obj.section.includes("legacyHtml");
  const lvCtx = getLvContext(unit, obj, null, lvHtml);

  if (isLegacy) {
    lines.push("### Faktiskais saturs (legacy HTML)");
    for (const f of obj.findings) {
      const ctx = legacyHtmlContext(f, lvHtml[obj.lesson] || unit?.lvReference || "");
      lines.push(`- Field: ${f.field}`);
      lines.push(`- Problem fragment: ${truncate(ctx.problemFragment, 200)}`);
      if (ctx.contextBefore) lines.push(`- Context before: ${truncate(ctx.contextBefore, 150)}`);
      lines.push(`- Context after: ${truncate(ctx.contextAfter, 250)}`);
      lines.push(`- CURRENT (${f.currentMatch}): see machine-readable full value in ` +
        "`reports/temp/cs-kurs-owner-review-source.json`");
      lines.push(`- Full CURRENT length: ${String(f.current || "").length} chars`);
      if (ctx.lvFragment) lines.push(`- LV MASTER fragment: ${ctx.lvFragment}`);
      lines.push("");
    }
  } else {
    lines.push("### Faktiskais saturs");
    for (const f of obj.findings) {
      lines.push(`- Field: ${f.field}`);
      lines.push(`- CURRENT (${f.currentMatch}): ${truncate(f.current, 500)}`);
      if (f.currentMatch === "CURRENT_MISMATCH") {
        lines.push(`- Audit CURRENT: ${truncate(f.auditCurrent, 500)}`);
      }
      lines.push("");
    }
  }

  if (needsLvContext(obj, obj.findings[0]) && !isLegacy) {
    lines.push("### Pedagoģisks konteksts");
    if (lvCtx.lvMaster) lines.push(`- LV MASTER: ${lvCtx.lvMaster}`);
    if (lvCtx.deTarget) lines.push(`- DE TARGET: ${lvCtx.deTarget}`);
    lines.push("");
  }

  lines.push("### Findings");
  lines.push("");
  obj.findings.forEach((f, i) => {
    lines.push(`#### Finding ${i + 1}`);
    lines.push(`- Severity: ${f.severity}`);
    lines.push(`- Source: ${f.source}`);
    lines.push(`- Type: ${extractFindingType(f.reason, f.problemKey)}`);
    if (f.ownerStatus === "FALSE_POSITIVE_CANDIDATE") {
      lines.push(`- Status candidate: FALSE_POSITIVE_CANDIDATE`);
      const note = falsePositiveNote(f, f.current);
      if (note) lines.push(`- False positive note: ${note}`);
    } else {
      lines.push(`- Status: ${f.ownerStatus}`);
    }
    lines.push(`- Field: ${f.field}`);
    lines.push(`- Reason: ${truncate(f.reason, 600)}`);
  const auditRec = f.auditRecommendation || f.lunaRecommendation || "";
    if (auditRec) lines.push(`- AUDIT_RECOMMENDATION: ${truncate(auditRec, 400)}`);
    if (f.lunaRecommendation && f.lunaRecommendation !== f.auditRecommendation) {
      lines.push(`- Luna recommendation: ${truncate(f.lunaRecommendation, 400)}`);
    }
    lines.push(`- Audit finding IDs: ${f.auditFindingIds.join(", ")}`);
    lines.push("");
  });

  const uniqueFields = [...new Set(obj.findings.map((f) => f.field))];
  if (uniqueFields.length === 1) {
    const f = obj.findings[0];
    lines.push("### OWNER DECISION");
    lines.push("Status: PENDING");
    lines.push(`Field: ${f.field}`);
    lines.push(`CURRENT: ${truncate(f.current, 300)}`);
    lines.push("NEW:");
    lines.push("OWNER NOTE:");
  } else {
    lines.push("### OWNER DECISION");
    lines.push("Status: PENDING");
    lines.push("");
    uniqueFields.forEach((field, i) => {
      const ff = obj.findings.find((x) => x.field === field);
      lines.push(`Change ${i + 1}`);
      lines.push(`Field: ${field}`);
      lines.push(`CURRENT: ${truncate(ff?.current || "", 300)}`);
      lines.push("NEW:");
      lines.push("");
    });
    lines.push("OWNER NOTE:");
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

function main() {
  const source = JSON.parse(fs.readFileSync(SOURCE_JSON, "utf8"));
  const batchMeta = source.meta.batches.find((b) => b.batchNum === BATCH_NUM);
  if (!batchMeta) {
    console.error(`Batch ${BATCH_NUM} not found`);
    process.exit(1);
  }

  const [startNum, endNum] = batchMeta.objectNums;
  const objects = source.objects.filter((o) => o.objectNum >= startNum && o.objectNum <= endNum);
  if (objects.length !== batchMeta.objectCount) {
    console.error(`Object count mismatch: expected ${batchMeta.objectCount}, got ${objects.length}`);
    process.exit(1);
  }

  const { units, lvHtml } = extractUnits();
  const unitMap = new Map(units.map((u) => [u.unitId, u]));

  let findingCount = 0;
  let currentMatch = 0;
  let currentMismatch = 0;
  let fpCandidate = 0;
  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };

  for (const o of objects) {
    for (const f of o.findings) {
      findingCount += 1;
      severity[f.severity] = (severity[f.severity] || 0) + 1;
      if (f.currentMatch === "CURRENT_MATCH") currentMatch += 1;
      else currentMismatch += 1;
      if (f.ownerStatus === "FALSE_POSITIVE_CANDIDATE") fpCandidate += 1;
    }
  }

  const lessons = objects.map((o) => o.lesson);
  const lessonScope = batchMeta.lessonRange || `${lessons[0]} … ${lessons[lessons.length - 1]}`;

  const md = [];
  md.push("CS–DE KURS OWNER REVIEW — BATCH " + String(BATCH_NUM).padStart(2, "0"));
  md.push("");
  md.push("READ-ONLY OWNER review packet. No production changes. Cursor does not assign NEW values.");
  md.push("");
  md.push(`Objects: ${objects.length}`);
  md.push(`Findings: ${findingCount}`);
  md.push(`Lessons: ${lessonScope}`);
  md.push(`CRITICAL: ${severity.CRITICAL || 0}`);
  md.push(`HIGH: ${severity.HIGH || 0}`);
  md.push(`MEDIUM: ${severity.MEDIUM || 0}`);
  md.push(`FALSE_POSITIVE_CANDIDATE: ${fpCandidate}`);
  md.push(`CURRENT_MATCH: ${currentMatch}`);
  md.push(`CURRENT_MISMATCH: ${currentMismatch}`);
  md.push(`OWNER decisions: 0`);
  md.push(`Production changes: 0`);
  md.push("");
  md.push("---");
  md.push("");

  for (const obj of objects) {
    md.push(formatObject(obj, unitMap, lvHtml));
  }

  md.push("## COVERAGE");
  md.push(`Batch ${BATCH_NUM} objects: ${objects.length}/${batchMeta.objectCount}`);
  md.push(`Batch ${BATCH_NUM} findings: ${findingCount}/${batchMeta.findingCount}`);
  md.push(`OWNER PENDING: ${objects.length}/${objects.length}`);

  const outPath = path.join(ROOT, "reports", `cs-kurs-owner-review-batch${String(BATCH_NUM).padStart(2, "0")}.md`);
  fs.writeFileSync(outPath, md.join("\n"));

  console.log(JSON.stringify({
    batch: BATCH_NUM,
    objects: objects.length,
    findings: findingCount,
    currentMatch,
    currentMismatch,
    fpCandidate,
    outPath,
  }, null, 2));
}

main();
