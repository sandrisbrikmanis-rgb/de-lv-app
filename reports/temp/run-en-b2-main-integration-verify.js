#!/usr/bin/env node
/**
 * EN–DE B2 main integration verification (post-merge).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const OWNER_BRANCH = "origin/cursor/en-b2-full-audit-6850";
const OWNER_HEAD = "1237273c";
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-b2-main-integration-verification.json");
const OUT_MD = path.join(ROOT, "reports", "en-b2-main-integration-verification.md");
const CONSOLIDATED = path.join(__dirname, "en-b2-consolidated-post-repair-audit.json");
const MR03 = path.join(__dirname, "en-b2-final-microrepair-03-repairs.json");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const KNOWN_PATTERNS = [/kam\?/i, /ko\?/i, /whom\?/i, /what\?/i, /\bförden\b/i, /bez sich/i, /Ko vieta/i, /Podnieka/i];

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function loadFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function loadWords(filePath) {
  return loadFromCode(fs.readFileSync(filePath, "utf8"));
}

function gitShow(ref, file) {
  return execSync(`git show ${ref}:${file}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 80 * 1024 * 1024 });
}

function normFp(fp) {
  let p = fp;
  if (p === "enMain" || p === "enText") return "lv";
  if (p.startsWith("study.")) {
    p = p.replace(/\.examples\[(\d+)\]\.en\b/g, ".examples[$1].lv");
    p = p.replace(/\[(\d+)\]/g, ".$1");
  }
  return p;
}

function getValue(entry, fieldPath) {
  const p = normFp(fieldPath);
  if (p === "lv") return entry.lv;
  if (p.startsWith("study.")) {
    const parts = p.slice("study.".length).split(".").filter(Boolean);
    let c = entry.study;
    for (const part of parts) c = c?.[/^\d+$/.test(part) ? parseInt(part, 10) : part];
    return c;
  }
}

function buildIndex(words) {
  const byId = new Map();
  words.forEach((e, i) => {
    const id = e.study?.id || `b2-${e.de}-${i}`;
    byId.set(id, e);
    if (e.study?.id) byId.set(e.study.id, e);
  });
  return byId;
}

function structuralCounts(words) {
  const studies = words.filter((e) => e.study);
  let mg = 0, gov = 0, rec = 0;
  for (const e of words) {
    const fl = e.study?.formsLabel;
    if (!fl) continue;
    if (fl.includes("Management:")) mg++;
    if (fl.includes("Government:")) gov++;
    if (fl.includes("Rection:")) rec++;
  }
  return {
    cards: words.length,
    studies: studies.length,
    standardStudy: studies.filter((e) => e.study.layout === "standardStudy" || !e.study.layout).length,
    minimalStudy: studies.filter((e) => e.study.layout === "minimalStudy").length,
    flashcards: words.filter((e) => !e.study).length,
    management: mg,
    government: gov,
    rection: rec,
  };
}

function scanForeign(words, index) {
  const findings = [];
  function walk(val, pathParts, inDe, cardId) {
    if (typeof val === "string") {
      if (inDe || pathParts.includes("sectionAccents")) return;
      if (LV_ONLY.test(val)) {
        findings.push({ cardId, path: pathParts.join("."), snippet: val.slice(0, 80) });
        return;
      }
      for (const pat of KNOWN_PATTERNS) {
        if (pat.test(val)) {
          findings.push({ cardId, path: pathParts.join("."), snippet: val.slice(0, 80) });
          break;
        }
      }
      return;
    }
    if (Array.isArray(val)) val.forEach((v, i) => walk(v, [...pathParts, String(i)], inDe, cardId));
    else if (val && typeof val === "object") {
      for (const [k, v] of Object.entries(val)) walk(v, [...pathParts, k], inDe || k === "de", cardId);
    }
  }
  words.forEach((e, i) => {
    const cardId = e.study?.id || `b2-${e.de}-${i}`;
    walk(e, ["entry"], false, cardId);
    if (e.study) walk(e.study, ["study"], false, cardId);
  });
  return findings;
}

function compareDeOrder(mainDe, ownerDe) {
  if (mainDe.length !== ownerDe.length) return { pass: false, reason: "length_mismatch" };
  for (let i = 0; i < mainDe.length; i++) {
    if (mainDe[i].de !== ownerDe[i].de) return { pass: false, reason: `de_mismatch_at_${i}` };
    if (JSON.stringify(mainDe[i]) !== JSON.stringify(ownerDe[i])) return { pass: false, reason: `entry_mismatch_at_${i}` };
  }
  return { pass: true };
}

function main() {
  const mainHead = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const mainBefore = process.env.MAIN_BEFORE_MERGE || execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();

  const enMain = loadWords(EN_FILE);
  const enWww = loadWords(WWW_FILE);
  const deMain = loadWords(DE_FILE);

  const ownerEnCode = gitShow(OWNER_HEAD, "data/en/b2.js");
  const ownerEn = loadFromCode(ownerEnCode);
  const ownerDe = loadFromCode(gitShow(OWNER_HEAD, "data/b2.js"));

  const enHashMain = md5(EN_FILE);
  const enHashOwner = crypto.createHash("md5").update(ownerEnCode).digest("hex");
  const deHashMain = md5(DE_FILE);
  const deHashBefore = crypto.createHash("md5").update(gitShow(mainBefore, "data/b2.js")).digest("hex");

  const structure = structuralCounts(enMain);
  const mirrorPass = enHashMain === md5(WWW_FILE);
  const contentMatch = enHashMain === enHashOwner && JSON.stringify(enMain) === JSON.stringify(ownerEn);
  const deUnchanged = deHashMain === deHashBefore;
  const deOrder = compareDeOrder(deMain, ownerDe);

  let syntaxPass = true;
  try {
    execSync("node --check data/en/b2.js", { cwd: ROOT });
    execSync("node --check www/data/en/b2.js", { cwd: ROOT });
  } catch {
    syntaxPass = false;
  }

  let parityPass = true;
  try {
    parityPass = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=en", { cwd: ROOT, encoding: "utf8" })).pass;
  } catch {
    parityPass = false;
  }

  let sectionAccentIssues = -1;
  try {
    const sd = JSON.parse(execSync("node scripts/validate-study-design.js --lang=en", { cwd: ROOT, encoding: "utf8" }));
    sectionAccentIssues = sd.perFile?.find((f) => f.file?.endsWith("/b2.js"))?.sectionAccentIssues ?? -1;
  } catch (e) {
    try {
      sectionAccentIssues = JSON.parse(e.stdout).perFile?.find((f) => f.file?.endsWith("/b2.js"))?.sectionAccentIssues;
    } catch {
      sectionAccentIssues = -1;
    }
  }

  const foreignRemnants = scanForeign(enMain, buildIndex(enMain));

  const keepChecks = [];
  if (fs.existsSync(CONSOLIDATED)) {
    const consolidated = JSON.parse(fs.readFileSync(CONSOLIDATED, "utf8"));
    const keeps = consolidated.keepPreservation || consolidated.repairVerification?.keeps || [];
    const keepList = consolidated.keepPreservationChecks || consolidated.keepChecks || [];
    const items = keepList.length ? keepList : (consolidated.repairVerification?.keepItems || []);
    if (Array.isArray(consolidated.keepPreservation)) {
      for (const k of consolidated.keepPreservation) {
        keepChecks.push(k);
      }
    }
    if (consolidated.repairVerification?.details) {
      for (const d of consolidated.repairVerification.details) {
        if (d.action === "KEEP" || d.status === "KEEP") keepChecks.push(d);
      }
    }
  }

  const explicitKeep = [
    ["b2-Bergwerk-194", "lv", "Mine • Shaft"],
    ["b2-haube", "study.translation", "Cap • Hood"],
    ["b2-haube", "enMain", "Cap • Hood"],
    ["b2-haube", "study.examples[2].en", "He opens the hood of the car."],
    ["b2-ehrenvoll-512", "lv", "Honorable"],
    ["b2-Eifer-521", "lv", "Zeal • Diligence • Passion • Ardor • Eagerness"],
    ["b2-aendern", "study.examples[4].en", "Change the part • Wechseln"],
    ["b2-fordern", "study.examples[4].en", "To demand • To promote"],
    ["b2-sich-herausbilden", "study.translation", "Develop • Emerge"],
  ];

  const index = buildIndex(enMain);
  const keepResults = [];
  for (const [cardId, fp, expected] of explicitKeep) {
    const e = index.get(cardId);
    const actual = e ? getValue(e, fp) : undefined;
    keepResults.push({ cardId, fieldPath: fp, expected, actual, pass: actual === expected });
  }

  const mr03Checks = [];
  if (fs.existsSync(MR03)) {
    const { decisions } = JSON.parse(fs.readFileSync(MR03, "utf8"));
    for (const d of decisions) {
      const e = index.get(d.cardId);
      const actual = e ? getValue(e, d.fieldPath) : undefined;
      mr03Checks.push({ seq: d.seq, cardId: d.cardId, fieldPath: d.fieldPath, expected: d.finalEn, actual, pass: actual === d.finalEn });
    }
  }

  const changedFiles = execSync(`git diff --name-only ${mainBefore}..${mainHead}`, { cwd: ROOT, encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean);
  const productionUnexpected = changedFiles.filter(
    (f) =>
      !f.startsWith("reports/") &&
      f !== "data/en/b2.js" &&
      f !== "www/data/en/b2.js"
  );

  const structurePass =
    structure.cards === 2118 &&
    structure.studies === 60 &&
    structure.standardStudy === 15 &&
    structure.minimalStudy === 45 &&
    structure.flashcards === 2058;

  const keepPass = keepResults.every((k) => k.pass);
  const mr03Pass = mr03Checks.length === 11 && mr03Checks.every((k) => k.pass);

  const allPass =
    contentMatch &&
    deUnchanged &&
    deOrder.pass &&
    mirrorPass &&
    syntaxPass &&
    parityPass &&
    sectionAccentIssues === 0 &&
    foreignRemnants.length === 0 &&
    structurePass &&
    structure.management === 0 &&
    structure.government === 0 &&
    structure.rection === 43 &&
    keepPass &&
    mr03Pass &&
    productionUnexpected.length === 0;

  const result = {
    generatedAt: new Date().toISOString(),
    git: {
      mainBeforeMerge: mainBefore,
      prHead: OWNER_HEAD,
      mainAfterMerge: mainHead,
      pr: "#376",
      mergeType: mainBefore === mainHead ? "not_merged_yet" : "fast_forward_or_merge",
      changedFileCount: changedFiles.length,
      productionUnexpected,
    },
    enDeB2: {
      cards: structure.cards,
      studies: structure.studies,
      flashcards: structure.flashcards,
      standardStudy: structure.standardStudy,
      minimalStudy: structure.minimalStudy,
    },
    verification: {
      ownerAcceptedContentMatch: contentMatch,
      enHashMain,
      enHashOwner,
      deReadOnly: deUnchanged,
      deChanges: deUnchanged ? 0 : 1,
      deOrderPass: deOrder.pass,
      structurePass,
      mirrorPass,
      syntaxPass,
      parityPass,
      sectionAccentIssuesB2: sectionAccentIssues,
      foreignRemnants: foreignRemnants.length,
      management: structure.management,
      government: structure.government,
      rection: structure.rection,
      keepNelabotPass: keepPass,
      microrepair03Pass: mr03Pass,
      unexpectedProductionChanges: productionUnexpected.length,
    },
    keepResults,
    microrepair03Checks: mr03Checks,
    foreignRemnantSamples: foreignRemnants.slice(0, 10),
    verdict: allPass ? "EN–DE B2 — MAIN INTEGRATION: PASS" : "EN–DE B2 — MAIN INTEGRATION: FAIL",
    closureVerdict: allPass ? "EN–DE B2 — OWNER ACCEPTED / CLOSED ON MAIN" : "EN–DE B2 — MAIN INTEGRATION: FAIL",
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(result, null, 2));

  const md = [
    "# EN–DE B2 — Main integrācijas verifikācija",
    "",
    "**Datums:** " + result.generatedAt.slice(0, 10),
    "",
    "## Git",
    "",
    "| Lauks | Vērtība |",
    "| --- | --- |",
    "| main pirms merge | `" + mainBefore + "` |",
    "| PR HEAD | `" + OWNER_HEAD + "` |",
    "| main pēc merge | `" + mainHead + "` |",
    "| PR | #376 |",
    "",
    "## EN–DE B2",
    "",
    "| Metrika | Skaits |",
    "| --- | ---: |",
    "| Cards | " + structure.cards + " |",
    "| Study | " + structure.studies + " |",
    "| Flashcards | " + structure.flashcards + " |",
    "",
    "## Integrācijas pārbaude",
    "",
    "| Pārbaude | Rezultāts |",
    "| --- | --- |",
    "| OWNER ACCEPTED content match | " + (contentMatch ? "PASS" : "FAIL") + " |",
    "| DE tikai lasāms | " + (deUnchanged ? "PASS" : "FAIL") + " |",
    "| DE izmaiņas | " + (deUnchanged ? 0 : 1) + " |",
    "| ID/order (DE) | " + (deOrder.pass ? "PASS" : "FAIL") + " |",
    "| structure | " + (structurePass ? "PASS" : "FAIL") + " |",
    "| mirror | " + (mirrorPass ? "PASS" : "FAIL") + " |",
    "| syntax | " + (syntaxPass ? "PASS" : "FAIL") + " |",
    "| language parity | " + (parityPass ? "PASS" : "FAIL") + " |",
    "| sectionAccents (B2) | " + sectionAccentIssues + " |",
    "| foreign-language remnants | " + foreignRemnants.length + " |",
    "| Management: | " + structure.management + " |",
    "| Government: | " + structure.government + " |",
    "| Rection: | " + structure.rection + " |",
    "| KEEP/NELABOT | " + (keepPass ? "PASS" : "FAIL") + " |",
    "| Mikrolabojums #3 (11/11) | " + (mr03Pass ? "PASS" : "FAIL") + " |",
    "| Neparadzētas production izmaiņas | " + productionUnexpected.length + " |",
    "",
    "## Gala statuss",
    "",
    "**" + result.verdict + "**",
    "",
    "**" + result.closureVerdict + "**",
  ].join("\n");

  fs.writeFileSync(OUT_MD, md);
  console.log(JSON.stringify({ verdict: result.verdict, allPass, mainHead, contentMatch }, null, 2));
  if (!allPass) process.exit(1);
}

main();
