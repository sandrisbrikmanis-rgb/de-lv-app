#!/usr/bin/env node
/**
 * Post-apply verification for integration follow-up repair #2 (b1-entlassen accent).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const lib = require("./en-b1-field-apply-lib");

const META_PEDAGOGY = /\b(in Latvian|Latvian usually|Latvian language|Latvian learners?|for Latvian|Latvian equivalent|Latvian word|Latvian phrase)\b/i;

function runCmd(cmd) {
  try {
    const out = execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
    return { ok: true, out };
  } catch (e) {
    return { ok: false, out: (e.stdout || "") + (e.stderr || "") };
  }
}

function accentInTipText(study, term) {
  const texts = [];
  (study.tip?.leftBlocks || []).forEach((b) => {
    if (typeof b.text === "string") texts.push(b.text);
  });
  const blob = texts.join("\n");
  if (!blob || !term) return false;
  try {
    const esc = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(?<![\\p{L}\\p{N}_])${esc}(?![\\p{L}\\p{N}_])`, "iu").test(blob);
  } catch {
    return blob.toLowerCase().includes(String(term).toLowerCase());
  }
}

function authoritativeMatch(actual, expected, fieldPath) {
  if (expected === "__REMOVE_ACCENT__" || expected === "REMOVED") {
    return actual === undefined || actual === "" || (Array.isArray(actual) && actual.length === 0);
  }
  if (lib.valuesMatch(actual, expected) || lib.formatVal(actual) === String(expected)) return true;
  if (typeof expected === "string" && typeof actual === "string") {
    const e = expected.replace(/\s+/g, " ").trim();
    const a = actual.replace(/\s+/g, " ").trim();
    if (a === e || a.includes(e) || e.includes(a)) return true;
  }
  if (Array.isArray(actual) && typeof expected === "string") {
    try {
      const parsed = JSON.parse(expected);
      if (Array.isArray(parsed) && JSON.stringify(actual) === JSON.stringify(parsed)) return true;
    } catch {
      const tokens = expected.split(/[,;]/).map((s) => s.trim()).filter(Boolean);
      if (tokens.length && tokens.every((t) => actual.some((x) => String(x).toLowerCase() === t.toLowerCase()))) {
        return true;
      }
    }
  }
  if (fieldPath?.includes("explanation") && typeof actual === "string" && typeof expected === "string") {
    if (actual.includes(expected.slice(0, 40)) || expected.includes(actual.slice(0, 40))) return true;
  }
  return false;
}

function verifyPreservation(words) {
  const regressionLog = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-repair-log.json"), "utf8"),
  );
  const microLog = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-micro-regression-repair-log.json"), "utf8"),
  );
  const sectionLog = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-repair-log.json"), "utf8"),
  );
  const followUp1 = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-integration-regression-follow-up-repair.json"), "utf8"),
  );

  let regressionPass = 0;
  for (const r of regressionLog.repairs || []) {
    if (r.ownerVerdict !== "LABOT") continue;
    const cardId = r.productionId || r.cardId;
    let field = r.repairField || r.field;
    if (!field.startsWith("study.")) field = `study.${field}`;
    const entry = lib.findEntry(words, cardId, r.productionIndex, cardId);
    if (!entry) continue;
    const actual = lib.getFieldValue(entry, lib.normalizeRepairField(field, entry));
    if (authoritativeMatch(actual, r.finalEn, field)) regressionPass++;
  }

  let microPass = 0;
  for (const r of microLog.repairs || []) {
    if (r.ownerVerdict && r.ownerVerdict !== "LABOT") continue;
    const cardId = r.productionId || r.cardId;
    let field = r.repairField || r.field;
    if (!field.startsWith("study.")) field = `study.${field}`;
    const entry = lib.findEntry(words, cardId, r.productionIndex, cardId);
    if (!entry) continue;
    const actual = lib.getFieldValue(entry, lib.normalizeRepairField(field, entry));
    if (authoritativeMatch(actual, r.ownerFinalEn, field)) microPass++;
  }

  let sectionPass = 0;
  for (const r of sectionLog.repairs || sectionLog.changes || []) {
    const entry = lib.findEntry(words, r.productionId || r.cardId, r.productionIndex, r.cardId);
    if (!entry) continue;
    const actual = lib.getFieldValue(entry, r.repairField);
    const expected = r.ownerFinalEn || r.finalEn;
    if (authoritativeMatch(actual, expected, r.repairField)) sectionPass++;
  }

  let followUp1Pass = 0;
  for (const r of followUp1.repairs || []) {
    if (r.pairedWithFindingId) continue;
    const entry = lib.findEntry(words, r.productionIdentity, r.productionIndex, r.cardId);
    if (!entry) continue;
    let expected = r.ownerFinal;
    if (r.action === "REMOVE" && r.fieldPath === "study.sectionAccents.tip.purple") {
      expected = "__REMOVE_ACCENT__";
    }
    const actual = lib.getFieldValue(entry, r.fieldPath);
    if (authoritativeMatch(actual, expected, r.fieldPath)) followUp1Pass++;
  }

  const microList = microLog.repairs || [];
  const fullStringRepairs = microList.filter((r) => r.action === "REPLACE_EXPLANATION");
  let fullStringPass = 0;
  for (const r of fullStringRepairs) {
    const entry = lib.findEntry(words, r.productionId || r.cardId, r.productionIndex, r.cardId);
    if (!entry) continue;
    const actual = entry.study?.explanation;
    if (typeof actual === "string" && authoritativeMatch(actual, r.ownerFinalEn, r.repairField)) fullStringPass++;
  }

  return {
    regressionPass,
    regressionTotal: (regressionLog.repairs || []).filter((r) => r.ownerVerdict === "LABOT").length,
    microPass,
    microTotal: microList.length,
    fullStringPass,
    fullStringTotal: fullStringRepairs.length,
    sectionPass,
    sectionTotal: (sectionLog.repairs || sectionLog.changes || []).length,
    followUp1Pass,
    followUp1Total: (followUp1.repairs || []).filter((r) => !r.pairedWithFindingId).length,
  };
}

function main() {
  const repairDoc = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-integration-follow-up-repair-2.json"), "utf8"),
  );
  const repair = repairDoc.repairs[0];
  const words = lib.loadB1("data/en/b1.js");
  const entry = lib.findEntry(words, repair.productionIdentity, repair.productionIndex, repair.cardId);

  const accent = lib.getFieldValue(entry, repair.fieldPath);
  const tipText = entry.study?.tip?.leftBlocks?.[0]?.text;
  const fieldOk =
    accent === repair.ownerFinal &&
    tipText === repair.expectedTipText &&
    accentInTipText(entry.study, repair.ownerFinal) &&
    !accentInTipText(entry.study, repair.expectedCurrent);

  const preservation = verifyPreservation(words);
  const recon = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-reconciliation-audit.json"), "utf8"),
  );

  const dataEn = fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8");
  const wwwEn = fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8");
  const mirrorOk = dataEn === wwwEn;
  const deDiff = runCmd("git diff HEAD -- data/b1.js");
  const jsOk = runCmd("node --check data/en/b1.js && node --check www/data/en/b1.js");
  const parity = runCmd("node scripts/audit-language-parity.js --lang=en");
  const mojibake = runCmd("node scripts/audit-mojibake.js --lang=en");

  let parityOk = false;
  try {
    const m = parity.out.match(/\{[\s\S]*\}/);
    if (m) {
      const p = JSON.parse(m[0]);
      const b1 = p.levels?.b1;
      parityOk =
        b1?.countMatch &&
        b1.lvCount === 3367 &&
        b1.orderMismatches === 0 &&
        (b1.missingFields?.length || 0) === 0;
    }
  } catch {
    /* ignore */
  }

  let mojibakeOk = false;
  try {
    const m = mojibake.out.match(/\{[\s\S]*\}/);
    if (m) mojibakeOk = JSON.parse(m[0]).pass === true;
  } catch {
    /* ignore */
  }

  const report = {
    generatedAt: new Date().toISOString(),
    fieldRepair: {
      pass: fieldOk,
      accent,
      tipText,
      targetExists: accentInTipText(entry.study, repair.ownerFinal),
      staleRemaining: accentInTipText(entry.study, repair.expectedCurrent),
    },
    preservation,
    reconciliation: {
      finalMappingCount: recon.finalMappingCount,
      presentInMain: recon.presentInMain,
      missingFromMain: recon.missingFromMain,
      unresolved: recon.fieldNotFound + recon.identityNotFound,
    },
    validation: {
      javascript: jsOk.ok,
      mirrorParity: mirrorOk,
      deReadOnly: !deDiff.out.trim(),
      structuralParity: parityOk,
      mojibake: mojibakeOk,
      cardCount: words.length,
      studyObjects: words.filter((w) => w.study).length,
    },
    globalOutOfScope: ["Absatz", "bedeutend", "belegen", "einerlei"],
    repairedInThisTask: 0,
  };

  const outPath = path.join(ROOT, "reports/temp/en-b1-main-integration-follow-up-repair-2-verify.json");
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

  console.log(JSON.stringify(report, null, 2));
  process.exit(fieldOk ? 0 : 1);
}

main();
