#!/usr/bin/env node
/**
 * CS-DE deterministic audit collector (read-only).
 * Usage: node scripts/audit-cs-collect.js --dataset=a1
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");
const {
  ROOT,
  BULLET,
  DATASET_CONFIG,
  LV_DIACRITICS,
  LV_WORDS,
  PL_CHARS,
  MOJIBAKE,
  ACCENT_COLORS,
  loadArray,
  loadWindow,
  entryId,
  hasContent,
  hasTechnicalArtifact,
  walkStrings,
  collectDeStrings,
  schemaKeys,
  accentTermMatches,
  getSectionText,
  collectSectionAccentTerms,
  detectForeignRemnant,
  tempDir,
  ensureDir,
  batchLabel,
  loadKursData,
} = require("./lib/cs-audit-helpers");

function parseDataset() {
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("--dataset=")) return arg.slice("--dataset=".length).trim().toLowerCase();
  }
  throw new Error("Usage: node scripts/audit-cs-collect.js --dataset=a1|a2|...|kurs");
}

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function collectVocab(dataset) {
  const cfg = DATASET_CONFIG[dataset];
  const lv = loadArray(cfg.lvFile, cfg.globalKey);
  const cs = loadArray(cfg.csFile, cfg.globalKey);
  const wwwPath = path.join(ROOT, "www", cfg.csFile);
  const csPath = path.join(ROOT, cfg.csFile);
  const lvPath = path.join(ROOT, cfg.lvFile);

  const data = {
    meta: {
      dataset,
      label: cfg.label,
      date: new Date().toISOString(),
      lvFile: cfg.lvFile,
      csFile: cfg.csFile,
      wwwFile: `www/${cfg.csFile}`,
      lvCount: lv.length,
      csCount: cs.length,
      batchSize: 50,
      batchCount: Math.ceil(cs.length / 50),
    },
    structural: { issues: [], pass: true },
    germanIntegrity: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    foreignRemnants: { issues: [], pass: true },
    titleFormat: { issues: [], pass: true },
    mainTranslations: { entries: [], summary: { OK: 0, WARNING: 0, ERROR: 0 } },
    studyCards: { issues: [], pass: true, standardStudy: 0, comparisonStudy: 0 },
    sectionAccents: { issues: [], pass: true },
    layerIdentity: { pass: true, identical: false },
    batches: [],
    findings: [],
  };

  data.layerIdentity.identical = fs.readFileSync(csPath).equals(fs.readFileSync(wwwPath));
  if (!data.layerIdentity.identical) {
    data.layerIdentity.pass = false;
    data.structural.issues.push({ severity: "CRITICAL", message: "data/ and www/ not identical" });
    data.structural.pass = false;
  }

  if (lv.length !== cs.length) {
    data.structural.pass = false;
    data.structural.issues.push({ severity: "CRITICAL", message: `Count mismatch LV=${lv.length} CS=${cs.length}` });
  }

  const lvStudy = lv.filter((e) => e.study).length;
  const csStudy = cs.filter((e) => e.study).length;
  data.meta.lvStudyCount = lvStudy;
  data.meta.csStudyCount = csStudy;
  if (lvStudy !== csStudy) {
    data.structural.pass = false;
    data.structural.issues.push({
      severity: "HIGH",
      message: `Study count mismatch LV=${lvStudy} CS=${csStudy}`,
    });
  }

  const seen = new Set();
  function addFinding(f) {
    const key = `${f.dataset}|${f.batch}|${f.cardId}|${f.field}|${f.currentCs}`;
    if (seen.has(key)) return;
    seen.add(key);
    data.findings.push(f);
  }

  for (let i = 0; i < Math.min(lv.length, cs.length); i++) {
    const lvE = lv[i];
    const csE = cs[i];
    const id = entryId(csE, i, dataset);
    const batch = batchLabel(dataset, Math.floor(i / 50) * 50 + 1, Math.min(Math.floor(i / 50) * 50 + 50, cs.length));

    if (lvE.de !== csE.de) {
      data.structural.pass = false;
      data.structural.issues.push({ severity: "CRITICAL", id, index: i, message: `Order mismatch: LV.de=${lvE.de} CS.de=${csE.de}` });
    }

    const lvKeys = new Set(schemaKeys(lvE).filter((k) => k !== "lv" && !k.includes(".lv")));
    const csKeys = new Set(schemaKeys(csE).filter((k) => k !== "lv" && !k.includes(".lv")));
    const missing = [...lvKeys].filter((k) => !csKeys.has(k));
    if (missing.length) {
      data.structural.pass = false;
      data.structural.issues.push({ severity: "HIGH", id, de: csE.de, message: `Missing fields vs LV: ${missing.join(", ")}` });
      addFinding({
        dataset, batch, cardId: id, index: i, field: "structure",
        severity: "HIGH", status: "FINDING",
        currentCs: "(missing fields)", de: csE.de, lvSource: lvE.lv,
        problem: `Missing fields vs LV: ${missing.join(", ")}`,
        proposedCs: "Restore parity with LV structure",
        rationale: "APP_QUALITY_STANDARD structural parity",
      });
    }

    const lvLayout = lvE.study?.layout || (lvE.study ? "standardStudy" : null);
    const csLayout = csE.study?.layout || (csE.study ? "standardStudy" : null);
    if (lvLayout !== csLayout) {
      data.structural.pass = false;
      data.structural.issues.push({ severity: "HIGH", id, de: csE.de, message: `Layout mismatch LV=${lvLayout} CS=${csLayout}` });
      addFinding({
        dataset, batch, cardId: id, index: i, field: "study.layout",
        severity: "HIGH", status: "FINDING",
        currentCs: csLayout || "(none)", de: csE.de, lvSource: lvLayout,
        problem: `Study layout mismatch: LV has ${lvLayout}, CS has ${csLayout || "none"}`,
        proposedCs: lvLayout,
        rationale: "Study card must mirror LV layout",
      });
    }

    if (lvE.study && !csE.study) {
      data.structural.pass = false;
      data.structural.issues.push({ severity: "HIGH", id, de: csE.de, message: "Missing study card vs LV" });
      addFinding({
        dataset, batch, cardId: id, index: i, field: "study",
        severity: "HIGH", status: "FINDING",
        currentCs: "(no study)", de: csE.de, lvSource: lvE.lv,
        problem: "LV has study card but CS entry lacks study object",
        proposedCs: "Add Czech study card matching LV structure",
        rationale: "STUDY_CARD_RULES — study parity required",
      });
    }

    if (csE.study?.layout === "comparisonStudy") data.studyCards.comparisonStudy++;
    else if (csE.study) data.studyCards.standardStudy++;

    for (const field of ["de", "de_article", "de_plural", "level"]) {
      if (lvE[field] !== csE[field]) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({ severity: "CRITICAL", id, field, lvValue: lvE[field], csValue: csE[field] });
      }
    }

    if (lvE.study && csE.study) {
      const lvDe = [];
      const csDe = [];
      collectDeStrings(lvE.study, lvDe);
      collectDeStrings(csE.study, csDe);
      if (JSON.stringify(lvDe) !== JSON.stringify(csDe)) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({ severity: "CRITICAL", id, de: csE.de, message: "Study DE content differs from LV" });
      }
    }

    const main = { id, de: csE.de, csMain: csE.lv, lvSource: lvE.lv, status: "OK", flags: [] };
    if (!csE.lv || !csE.lv.trim()) {
      main.status = "ERROR";
      main.flags.push("empty_main_translation");
      addFinding({
        dataset, batch, cardId: id, index: i, field: "lv",
        severity: "CRITICAL", status: "FINDING",
        currentCs: "", de: csE.de, lvSource: lvE.lv,
        problem: "Empty main Czech translation",
        proposedCs: "(needs Czech translation)",
        rationale: "APP_QUALITY_STANDARD — required field",
      });
    }
    if (csE.lv && csE.lv.includes(";")) {
      main.flags.push("semicolon_in_title");
      main.status = main.status === "ERROR" ? "ERROR" : "WARNING";
      addFinding({
        dataset, batch, cardId: id, index: i, field: "lv",
        severity: "MEDIUM", status: "FINDING",
        currentCs: csE.lv, de: csE.de, lvSource: lvE.lv,
        problem: "Semicolon used in title/translation; project requires • separator",
        proposedCs: csE.lv.replace(/;\s*/g, ` ${BULLET} `),
        rationale: "APP_QUALITY_STANDARD / STUDY_CARD_RULES title format",
      });
    }
    const foreign = detectForeignRemnant(csE.lv || "");
    if (foreign.length) {
      main.status = "ERROR";
      main.flags.push(...foreign);
      addFinding({
        dataset, batch, cardId: id, index: i, field: "lv",
        severity: foreign.includes("LV_DIACRITIC") || foreign.includes("LV_WORD") ? "CRITICAL" : "HIGH",
        status: "FINDING",
        currentCs: csE.lv, de: csE.de, lvSource: lvE.lv,
        problem: `Foreign language remnant in main translation: ${foreign.join(", ")}`,
        proposedCs: "(Czech replacement needed)",
        rationale: "Must be Czech only in CS fields",
      });
    }
    data.mainTranslations.entries.push(main);
    data.mainTranslations.summary[main.status]++;

    walkStrings(csE, (text, ctx) => {
      if (ctx.inDe || ["de", "de_article", "de_plural"].includes(ctx.parentKey)) return;
      if (!text.trim()) {
        if (["lv", "translation", "title", "lead"].includes(ctx.parentKey)) {
          data.technical.pass = false;
          data.technical.issues.push({ severity: "HIGH", id, path: ctx.path, message: "Empty required string" });
        }
        return;
      }
      if (MOJIBAKE.test(text)) {
        data.technical.pass = false;
        data.technical.issues.push({ severity: "CRITICAL", id, path: ctx.path, text: text.slice(0, 120) });
        addFinding({
          dataset, batch, cardId: id, field: ctx.path,
          severity: "CRITICAL", status: "FINDING",
          currentCs: text.slice(0, 200), de: csE.de, lvSource: lvE.lv,
          problem: "Mojibake/encoding artifact detected",
          proposedCs: "(fix encoding)",
          rationale: "APP_QUALITY_STANDARD technical control",
        });
      }
      if (hasTechnicalArtifact(text)) {
        data.technical.pass = false;
        data.technical.issues.push({ severity: "HIGH", id, path: ctx.path, text: text.slice(0, 120) });
      }
      const fr = detectForeignRemnant(text);
      if (fr.length) {
        data.foreignRemnants.pass = false;
        data.foreignRemnants.issues.push({ severity: "HIGH", id, path: ctx.path, types: fr, text: text.slice(0, 200) });
        addFinding({
          dataset, batch, cardId: id, field: ctx.path,
          severity: fr.includes("LV_DIACRITIC") ? "CRITICAL" : "HIGH",
          status: "FINDING",
          currentCs: text.slice(0, 200), de: csE.de, lvSource: lvE.lv,
          problem: `Foreign remnant (${fr.join(", ")}) in ${ctx.path}`,
          proposedCs: "(Czech text required)",
          rationale: "CS field must not contain LV/PL/SK contamination",
        });
      }
    }, { path: `entry[${i}]`, parentKey: "", inDe: false });

    if (csE.study) {
      const study = csE.study;
      const layout = study.layout || "standardStudy";
      if (layout === "standardStudy" && !hasContent(study.explanation)) {
        data.studyCards.issues.push({ severity: "HIGH", id, message: "Missing explanation" });
        data.studyCards.pass = false;
      }
      if (study.translation && study.translation.includes(";")) {
        addFinding({
          dataset, batch, cardId: id, field: "study.translation",
          severity: "MEDIUM", status: "FINDING",
          currentCs: study.translation, de: csE.de, lvSource: lvE.study?.translation,
          problem: "Semicolon in study.translation",
          proposedCs: study.translation.replace(/;\s*/g, ` ${BULLET} `),
          rationale: "STUDY_CARD_RULES title format",
        });
      }
      if (lvE.study?.sectionAccents && !study.sectionAccents) {
        data.sectionAccents.pass = false;
        data.sectionAccents.issues.push({ severity: "HIGH", id, message: "Missing sectionAccents" });
        addFinding({
          dataset, batch, cardId: id, field: "study.sectionAccents",
          severity: "HIGH", status: "FINDING",
          currentCs: "(missing)", de: csE.de, lvSource: "(LV has accents)",
          problem: "sectionAccents missing but LV etalon has them",
          proposedCs: "(add sectionAccents)",
          rationale: "STUDY_CARD_RULES — sectionAccents required",
        });
      }
      if (study.sectionAccents) {
        const terms = [];
        collectSectionAccentTerms(study.sectionAccents, terms, false);
        for (const term of terms) {
          if (LV_DIACRITICS.test(term) || LV_WORDS.test(term)) {
            data.sectionAccents.pass = false;
            addFinding({
              dataset, batch, cardId: id, field: "study.sectionAccents",
              severity: "HIGH", status: "FINDING",
              currentCs: term, de: csE.de, lvSource: lvE.lv,
              problem: `LV remnant "${term}" in sectionAccents`,
              proposedCs: "(Czech term from section text)",
              rationale: "STUDY_CARD_RULES — accents must match Czech text",
            });
          }
          if (PL_CHARS.test(term)) {
            data.sectionAccents.pass = false;
            addFinding({
              dataset, batch, cardId: id, field: "study.sectionAccents",
              severity: "MEDIUM", status: "FINDING",
              currentCs: term, de: csE.de, lvSource: lvE.lv,
              problem: `Polish character in sectionAccents term "${term}"`,
              proposedCs: "(Czech equivalent)",
              rationale: "Polish contamination from SK pipeline",
            });
          }
        }
        for (const section of ["explanation", "tip", "important"]) {
          const text = getSectionText(study, section);
          if (!text) continue;
          const secAcc = study.sectionAccents[section];
          if (!secAcc) continue;
          const secTerms = [];
          collectSectionAccentTerms(secAcc, secTerms, false);
          for (const term of secTerms) {
            if (!accentTermMatches(text, term) && !accentTermMatches(csE.lv || "", term)) {
              data.sectionAccents.pass = false;
              addFinding({
                dataset, batch, cardId: id, field: `study.sectionAccents.${section}`,
                severity: "MEDIUM", status: "FINDING",
                currentCs: term, de: csE.de, lvSource: lvE.lv,
                problem: `Accent term "${term}" not found in section text`,
                proposedCs: "(term matching Czech section text)",
                rationale: "STUDY_CARD_RULES — stale/wrong accent",
              });
            }
          }
        }
      }
    }
  }

  const batchMap = new Map();
  for (let i = 0; i < cs.length; i++) {
    const b = batchLabel(dataset, Math.floor(i / 50) * 50 + 1, Math.min(Math.floor(i / 50) * 50 + 50, cs.length));
    if (!batchMap.has(b)) batchMap.set(b, { batch: b, start: Math.floor(i / 50) * 50, end: Math.min(Math.floor(i / 50) * 50 + 50, cs.length), audited: 0, findings: 0 });
    batchMap.get(b).audited++;
  }
  for (const f of data.findings) {
    if (batchMap.has(f.batch)) batchMap.get(f.batch).findings++;
  }
  data.batches = [...batchMap.values()];
  data.meta.auditedObjects = cs.length;
  data.meta.coverage = cs.length === cs.length ? "100%" : `${cs.length}/${lv.length}`;
  data.meta.hashCs = md5(csPath);
  data.meta.hashWww = md5(wwwPath);

  try {
    execSync(`node --check ${cfg.csFile}`, { cwd: ROOT, stdio: "pipe" });
    data.meta.jsSyntax = "PASS";
  } catch {
    data.meta.jsSyntax = "FAIL";
    data.structural.pass = false;
  }

  return data;
}

function collectSentences() {
  const lv = loadArray("data/sentences.js", "SENTENCE_ENTRIES");
  const cs = loadArray("data/cs/sentences.js", "SENTENCE_ENTRIES");
  const data = {
    meta: {
      dataset: "vety",
      label: "Věty",
      date: new Date().toISOString(),
      lvFile: "data/sentences.js",
      csFile: "data/cs/sentences.js",
      lvCount: lv.length,
      csCount: cs.length,
      batchSize: 50,
      batchCount: Math.ceil(cs.length / 50),
      auditedObjects: cs.length,
      coverage: lv.length === cs.length ? "100%" : `${cs.length}/${lv.length}`,
    },
    structural: { issues: [], pass: lv.length === cs.length },
    germanIntegrity: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    foreignRemnants: { issues: [], pass: true },
    findings: [],
    batches: [],
  };

  for (let i = 0; i < Math.min(lv.length, cs.length); i++) {
    const batch = batchLabel("vety", Math.floor(i / 50) * 50 + 1, Math.min(Math.floor(i / 50) * 50 + 50, cs.length));
    const csText = cs[i].lv || "";
    if (lv[i].de !== cs[i].de) {
      data.germanIntegrity.pass = false;
      data.germanIntegrity.issues.push({ severity: "CRITICAL", index: i, lv: lv[i].de, cs: cs[i].de });
    }
    if (!csText.trim()) {
      data.findings.push({
        dataset: "vety", batch, cardId: `sentence-${i}`, index: i, field: "lv",
        severity: "CRITICAL", status: "FINDING",
        currentCs: "", de: lv[i].de, lvSource: lv[i].lv,
        problem: "Empty sentence translation",
        proposedCs: "(Czech translation needed)",
        rationale: "Věty audit — required translation",
      });
    }
    const fr = detectForeignRemnant(csText);
    if (fr.length) {
      data.foreignRemnants.pass = false;
      data.findings.push({
        dataset: "vety", batch, cardId: `sentence-${i}`, index: i, field: "lv",
        severity: "CRITICAL", status: "FINDING",
        currentCs: csText, de: lv[i].de, lvSource: lv[i].lv,
        problem: `Foreign remnant: ${fr.join(", ")}`,
        proposedCs: "(Czech sentence)",
        rationale: "Věty must be Czech",
      });
    }
  }
  data.meta.auditedObjects = cs.length;
  return data;
}

function collectVerbs() {
  const lv = loadArray("data/verbs.js", "VERB_ENTRIES");
  const cs = loadArray("data/cs/verbs.js", "VERB_ENTRIES");
  const data = {
    meta: { dataset: "slovesa", label: "Slovesa", lvCount: lv.length, csCount: cs.length, batchSize: 50, batchCount: Math.ceil(cs.length / 50), auditedObjects: cs.length, coverage: "100%" },
    structural: { issues: [], pass: true },
    germanIntegrity: { issues: [], pass: true },
    findings: [],
    batches: [],
  };

  for (let i = 0; i < Math.min(lv.length, cs.length); i++) {
    const batch = batchLabel("slovesa", Math.floor(i / 50) * 50 + 1, Math.min(Math.floor(i / 50) * 50 + 50, cs.length));
    const lvE = lv[i];
    const csE = cs[i];
    const id = csE.id || `verb-${i}`;
    for (const key of Object.keys(lvE)) {
      if (key === "id" || key === "level") continue;
      const lvForm = lvE[key];
      const csForm = csE[key];
      if (lvForm?.de && csForm?.de && lvForm.de !== csForm.de) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({ severity: "CRITICAL", id, form: key, lv: lvForm.de, cs: csForm.de });
      }
      const csText = csForm?.lv || "";
      const fr = detectForeignRemnant(csText);
      if (fr.length) {
        data.findings.push({
          dataset: "slovesa", batch, cardId: id, index: i, field: key,
          severity: "HIGH", status: "FINDING",
          currentCs: csText, de: lvForm?.de, lvSource: lvForm?.lv,
          problem: `Foreign remnant in verb form ${key}: ${fr.join(", ")}`,
          proposedCs: "(Czech form)",
          rationale: "Slovesa audit",
        });
      }
    }
  }
  return data;
}

function collectKurs() {
  const { lvWin, csWin } = loadKursData();
  const lvData = lvWin.COURSE_LESSON_DATA || {};
  const csData = csWin.COURSE_LESSON_DATA || {};
  const lvHtml = lvWin.COURSE_LESSON_HTML || {};
  const csHtml = csWin.COURSE_LESSON_HTML || {};

  const data = {
    meta: { dataset: "kurs", label: "Kurs", lessonCount: Object.keys(csData).length, batchSize: 1, batchCount: Object.keys(csData).length, auditedObjects: Object.keys(csData).length, coverage: "100%" },
    structural: { issues: [], pass: true },
    germanIntegrity: { issues: [], pass: true },
    findings: [],
    batches: [],
  };

  for (const [key, lvLesson] of Object.entries(lvData)) {
    const csLesson = csData[key];
    if (!csLesson) {
      data.structural.pass = false;
      data.findings.push({
        dataset: "kurs", batch: key, cardId: key, field: "lesson",
        severity: "CRITICAL", status: "FINDING",
        currentCs: "(missing)", de: "(lesson)", lvSource: key,
        problem: `Missing Czech lesson ${key}`,
        proposedCs: "(add lesson)",
        rationale: "Kurs structural parity",
      });
      continue;
    }
    walkStrings(csLesson, (text, ctx) => {
      if (ctx.inDe) return;
      const fr = detectForeignRemnant(text);
      if (fr.length) {
        data.findings.push({
          dataset: "kurs", batch: key, cardId: key, field: ctx.path,
          severity: "HIGH", status: "FINDING",
          currentCs: text.slice(0, 200), de: "(lesson)", lvSource: key,
          problem: `Foreign remnant in lesson: ${fr.join(", ")}`,
          proposedCs: "(Czech text)",
          rationale: "Kurs audit",
        });
      }
    }, { path: key, parentKey: "", inDe: false });
  }

  return data;
}

function main() {
  const dataset = parseDataset();
  let data;
  if (dataset === "vety") data = collectSentences();
  else if (dataset === "slovesa") data = collectVerbs();
  else if (dataset === "kurs") data = collectKurs();
  else if (DATASET_CONFIG[dataset]) data = collectVocab(dataset);
  else throw new Error(`Unknown dataset: ${dataset}`);

  const outDir = tempDir(dataset);
  ensureDir(outDir);
  const outFile = path.join(outDir, "deterministic-audit.json");
  fs.writeFileSync(outFile, JSON.stringify(data, null, 2));

  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of data.findings) {
    if (f.severity && sev[f.severity] !== undefined) sev[f.severity]++;
  }

  console.log(JSON.stringify({
    dataset,
    total: data.meta.auditedObjects || data.meta.csCount,
    findings: data.findings.length,
    severity: sev,
    structural: data.structural.pass,
    germanIntegrity: data.germanIntegrity.pass,
    outFile,
  }, null, 2));
}

main();
