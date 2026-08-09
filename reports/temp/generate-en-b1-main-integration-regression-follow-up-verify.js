#!/usr/bin/env node
/**
 * Post-apply verification for integration regression follow-up repairs (current production).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const lib = require("./en-b1-field-apply-lib");

const META_PEDAGOGY = /\b(in Latvian|Latvian usually|Latvian language|Latvian learners?|for Latvian|Latvian equivalent|Latvian word|Latvian phrase)\b/i;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) v.forEach(push);
    else if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) => push(v[k]));
    }
  };
  if (sectionKey === "examples") {
    const rows = index !== null ? [study.examples?.[index]] : study.examples || [];
    rows.forEach((ex) => {
      if (!field || field === "lv") push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === "tip") {
    if (field === "leftBlocks") {
      (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
      return texts;
    }
    push(study.tip?.left || study.tip?.text);
    push(study.tip?.right || study.tip?.example);
    (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
    return texts;
  }
  return texts;
}

function accentTermMatchesStrict(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join("\n");
  if (!blob || !term) return false;
  try {
    const esc = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(?<![\\p{L}\\p{N}_])${esc}(?![\\p{L}\\p{N}_])`, "iu").test(blob);
  } catch {
    return blob.toLowerCase().includes(String(term).toLowerCase());
  }
}

function runCmd(cmd) {
  try {
    const out = execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 20 * 1024 * 1024 });
    return { ok: true, out };
  } catch (e) {
    return { ok: false, out: (e.stdout || "") + (e.stderr || ""), code: e.status };
  }
}

function verifyPreservation(words) {
  const targeted = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-integration-targeted-regression.json"), "utf8"),
  );
  const overlap = targeted.preservation?.regressionOverlap || [];
  let overlapPass = 0;
  for (const row of overlap) {
    const entry = lib.findEntry(words, row.cardId, null, row.cardId);
    if (!entry) continue;
    const actual = lib.formatVal(lib.getFieldValue(entry, row.field));
    if (actual === row.expected || lib.valuesMatch(actual, row.expected)) overlapPass++;
  }

  const preservation = targeted.preservation || {};
  return {
    regressionPass: preservation.regressionPass,
    regressionTotal: preservation.regressionTotal,
    regressionOverlapChecked: overlap.length,
    regressionOverlapPass: overlapPass,
    microPass: preservation.microPass,
    microTotal: preservation.microTotal,
    sectionPass: preservation.sectionPass,
    sectionTotal: preservation.sectionTotal,
    truncated: preservation.truncated?.length ?? 0,
  };
}

function main() {
  const repairDoc = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-integration-regression-follow-up-repair.json"), "utf8"),
  );
  const words = lib.loadB1("data/en/b1.js");
  const repairs = repairDoc.repairs.filter((r) => !r.pairedWithFindingId);
  const results = [];
  let appliedOk = 0;

  for (const repair of repairs) {
    const entry = lib.findEntry(words, repair.productionIdentity, repair.productionIndex, repair.cardId);
    let ok = false;
    let detail = "";

    if (!entry) {
      results.push({ findingId: repair.findingId, ok: false, reason: "ENTRY_NOT_FOUND" });
      continue;
    }

    if (repair.category === "META-PEDAGOGY") {
      const actual = lib.getFieldValue(entry, repair.fieldPath);
      ok = actual === repair.ownerFinal && !META_PEDAGOGY.test(actual);
      detail = actual;
    } else if (repair.action === "REMOVE" && repair.fieldPath === "study.sectionAccents.tip.purple") {
      ok = entry.study?.sectionAccents?.tip?.purple === undefined;
      detail = entry.study?.sectionAccents?.tip;
    } else if (repair.fieldPath.includes("sectionAccents.examples[1].lv.purple")) {
      const token = entry.study?.sectionAccents?.examples?.[1]?.lv?.purple?.[0];
      ok = token === repair.ownerFinal && accentTermMatchesStrict(entry.study, "examples", 1, "lv", token);
      detail = token;
    } else {
      ok = false;
      detail = "unhandled";
    }

    if (ok) appliedOk++;
    results.push({ findingId: repair.findingId, cardId: repair.cardId, ok, detail });
  }

  const preservation = verifyPreservation(words);
  const validate = runCmd("node scripts/validate-study-design.js --lang=en");
  let globalOutOfScope = 0;
  if (validate.ok) {
    try {
      const j = JSON.parse(validate.out);
      const b1 = j.perFile?.find((f) => f.file === "data/en/b1.js");
      globalOutOfScope = b1?.sectionAccentIssues ?? 0;
    } catch {
      globalOutOfScope = -1;
    }
  } else {
    try {
      const m = validate.out.match(/\{[\s\S]*\}/);
      if (m) {
        const j = JSON.parse(m[0]);
        const b1 = j.perFile?.find((f) => f.file === "data/en/b1.js");
        globalOutOfScope = b1?.sectionAccentIssues ?? 0;
      }
    } catch {
      globalOutOfScope = -1;
    }
  }

  const dataEn = fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8");
  const wwwEn = fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8");
  const deDiff = runCmd("git diff HEAD -- data/b1.js");

  const out = {
    generatedAt: new Date().toISOString(),
    ownerReview: repairDoc.ownerReview,
    repairsChecked: repairs.length,
    appliedCorrectly: appliedOk,
    mismatches: repairs.length - appliedOk,
    results,
    metaPedagogy: {
      b1Entlassen: results.find((r) => r.cardId === "b1-entlassen")?.ok ?? false,
      b1Zeugnis: results.find((r) => r.cardId === "b1-zeugnis")?.ok ?? false,
    },
    sectionAccents: {
      inScopeTechnical: 6,
      repaired: results.filter((r) => r.cardId !== "b1-entlassen" && r.cardId !== "b1-zeugnis" && r.ok).length,
      invalidInScopeRemaining: results.filter((r) => r.cardId !== "b1-entlassen" && r.cardId !== "b1-zeugnis" && !r.ok).length,
    },
    preservation,
    validation: {
      javascript: runCmd("node --check data/en/b1.js && node --check www/data/en/b1.js").ok,
      mirrorParity: dataEn === wwwEn,
      deReadOnly: !deDiff.out.trim(),
      validateStudyDesignGlobalOutOfScope: globalOutOfScope,
    },
    pass:
      appliedOk === repairs.length &&
      preservation.regressionOverlapPass === preservation.regressionOverlapChecked &&
      preservation.regressionPass === preservation.regressionTotal,
  };

  const manifest = {
    generatedAt: out.generatedAt,
    scope: "EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION — 8 REPAIRS ONLY",
    status: "NOT STARTED",
    repairFindings: 8,
    uniqueRepairedCards: [...new Set(repairs.map((r) => r.cardId))],
    fields: repairs.map((r) => ({
      findingId: r.findingId,
      cardId: r.cardId,
      fieldPath: r.fieldPath,
      ownerFinal: r.ownerFinal,
      action: r.action,
    })),
    verification: out,
  };

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-b1-main-integration-regression-follow-up-micro-regression-manifest.json"),
    JSON.stringify(manifest, null, 2),
  );

  console.log(JSON.stringify(out, null, 2));
  process.exit(out.pass ? 0 : 1);
}

main();
