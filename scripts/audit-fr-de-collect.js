#!/usr/bin/env node
"use strict";
/**
 * FR-DE module collector (READ-ONLY).
 * Usage: node scripts/audit-fr-de-collect.js --module=b2|c1|c2|sentences|verbs
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { parseModuleArg } = require("./lib/fr-de-audit-config");
const {
  loadArray,
  vocabEntryId,
  sentenceId,
  verbId,
  chunk,
  ensureDir,
} = require("./lib/fr-de-audit-helpers");

const cfg = parseModuleArg();

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const ES_WORDS = /\b(por favor|gracias|buenos días|hola|adiós|español|española|también|mucho|poco|ser|estar|tener|hacer|decir|ir|venir|dar|saber|querer|deber|poder|hablar|comer|beber|dormir|trabajar|estudiar)\b/i;
const EN_REMNANT =
  /\b(the|and|with|from|this|that|please|thank you|hello|goodbye|because|before|after|always|never|something|nothing|everything)\b/i;
const LV_WORDS =
  /latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|\bjūs\b|\bjums\b|\bjūsu\b|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stāstu|man jā|tev jā|mums jā|\brīsi\b|mācēt|\bprast\b|\blūdzu\b|\blūgums\b|Man ir|Es esmu|Es gribu|Es redzu|Es palīdzu|nāc iekšā|paliec|aiziet|mājās|skolā|darbā/i;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function hasTechnicalArtifact(text) {
  return (
    text.includes("```") ||
    /^(Translation|Tulkojums):/im.test(text) ||
    /\bTODO\b|\bTBD\b/.test(text) ||
    text.trim() === "..."
  );
}

function schemaKeys(obj, prefix = "", exclude = new Set(["sectionAccents", "accents"])) {
  const keys = [];
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return keys;
  for (const k of Object.keys(obj)) {
    if (exclude.has(k)) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    keys.push(p);
    const v = obj[k];
    if (v && typeof v === "object" && !Array.isArray(v)) keys.push(...schemaKeys(v, p, exclude));
  }
  return keys;
}

function walkStrings(value, visitor, ctx = { path: "", parentKey: "", inDe: false }) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    visitor(value, ctx);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkStrings(item, visitor, { ...ctx, path: `${ctx.path}[${i}]` }));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const inDe = ctx.inDe || key === "de" || key === "de_article" || key === "de_plural";
      walkStrings(child, visitor, {
        path: ctx.path ? `${ctx.path}.${key}` : key,
        parentKey: key,
        inDe,
      });
    }
  }
}

function collectSectionAccentTerms(sectionAccents, out, inDe = false) {
  if (!sectionAccents) return;
  if (typeof sectionAccents === "string") {
    if (!inDe) out.push(sectionAccents);
    return;
  }
  if (Array.isArray(sectionAccents)) {
    sectionAccents.forEach((item) => collectSectionAccentTerms(item, out, inDe));
    return;
  }
  if (typeof sectionAccents === "object") {
    for (const [key, val] of Object.entries(sectionAccents)) {
      collectSectionAccentTerms(val, out, inDe || key === "de");
    }
  }
}

function accentTermMatches(text, term) {
  if (!text || !term) return false;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "iu").test(text);
  } catch {
    return text.includes(term);
  }
}

function getTextForAccentSection(study, section, index) {
  if (section === "explanation" && study.explanation) {
    return Array.isArray(study.explanation) ? study.explanation.join(" ") : String(study.explanation);
  }
  if (section === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.join(" ");
    if (tip && typeof tip === "object") return [tip.text, tip.example].filter(Boolean).join(" ");
    return String(tip || "");
  }
  if (section === "important") {
    const imp = study.important;
    if (Array.isArray(imp)) return imp.join(" ");
    if (imp && typeof imp === "object") return [imp.text, imp.example].filter(Boolean).join(" ");
    return String(imp || "");
  }
  if (section === "examples" && Array.isArray(study.examples)) {
    const ex = study.examples[index];
    if (!ex) return "";
    return [ex.de, ex.lv].filter(Boolean).join(" ");
  }
  if (section === "comparison" && Array.isArray(study.comparison)) {
    const c = study.comparison[index];
    if (!c) return "";
    return [c.word, c.meaning, c.example].filter(Boolean).join(" ");
  }
  return "";
}

function hasContent(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasContent);
  if (typeof value === "object") return Object.values(value).some(hasContent);
  return Boolean(value);
}

function classifyForeign(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const reasons = [];
  if (LV_ONLY.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV");
  if (ES_WORDS.test(text)) reasons.push("ES");
  if (EN_REMNANT.test(text)) reasons.push("EN");
  if (MOJIBAKE.test(text)) reasons.push("MOJIBAKE");
  if (hasTechnicalArtifact(text)) reasons.push("PLACEHOLDER");
  return reasons;
}

function collectVocab() {
  const lv = loadArray(cfg.deReferenceAbs, cfg.globalKey);
  const es = loadArray(cfg.productionAbs, cfg.globalKey);
  const data = {
    meta: {
      module: cfg.moduleKey,
      date: new Date().toISOString(),
      deFile: cfg.deReferencePath,
      esFile: cfg.productionPath,
      wwwFile: cfg.wwwPath,
      lvCount: lv.length,
      esCount: es.length,
    },
    structural: { issues: [], pass: true },
    germanIntegrity: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    lvRemnants: { issues: [], pass: true },
    sectionAccents: { issues: [], pass: true },
    layerIdentity: { pass: true, identical: false },
    standardStudy: { count: 0 },
    comparisonStudy: { count: 0, issues: [] },
    studyCards: { issues: [], pass: true },
  };

  data.layerIdentity.identical = fs.readFileSync(cfg.productionAbs).equals(fs.readFileSync(cfg.wwwAbs));
  if (!data.layerIdentity.identical) {
    data.layerIdentity.pass = false;
    data.structural.issues.push({ severity: "critical", message: "production and www mirror differ" });
    data.structural.pass = false;
  }

  if (lv.length !== es.length) {
    data.structural.pass = false;
    data.structural.issues.push({ severity: "critical", message: `Record count mismatch DE=${lv.length} ES=${es.length}` });
  }

  const lvStudy = lv.filter((e) => e.study).length;
  const frStudy = es.filter((e) => e.study).length;
  data.meta.lvStudyCount = lvStudy;
  data.meta.frStudyCount = frStudy;
  if (lvStudy !== frStudy) {
    data.structural.pass = false;
    data.structural.issues.push({ severity: "critical", message: `Study count mismatch DE=${lvStudy} ES=${frStudy}` });
  }

  const ids = new Set();
  for (let i = 0; i < Math.min(lv.length, es.length); i++) {
    const lvE = lv[i];
    const esE = es[i];
    const id = vocabEntryId(esE, i, cfg.idPrefix);

    if (lvE.de !== esE.de) {
      data.structural.pass = false;
      data.structural.issues.push({ severity: "critical", id, message: `Order mismatch at index ${i}` });
    }

    if (esE.study?.id) {
      if (ids.has(esE.study.id)) {
        data.structural.issues.push({ severity: "high", id, message: `Duplicate study id: ${esE.study.id}` });
        data.structural.pass = false;
      }
      ids.add(esE.study.id);
    }

    for (const field of ["de", "de_article", "de_plural", "level"]) {
      if (lvE[field] !== esE[field]) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({ severity: "critical", id, field, message: `DE field mismatch: ${field}` });
      }
    }

    walkStrings(esE, (text, ctx) => {
      if (ctx.inDe || ctx.parentKey === "de" || ctx.parentKey === "de_article" || ctx.parentKey === "de_plural") return;
      if (!text.trim()) return;
      if (MOJIBAKE.test(text) || hasTechnicalArtifact(text)) {
        data.technical.pass = false;
        data.technical.issues.push({ severity: "high", id, path: ctx.path, text: text.slice(0, 120), message: "Technical artifact" });
      }
      if (LV_ONLY.test(text) || LV_WORDS.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({ severity: "critical", id, path: ctx.path, text: text.slice(0, 200), kind: "LV" });
      }
      if (ES_WORDS.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({ severity: "high", id, path: ctx.path, text: text.slice(0, 200), kind: "IT" });
      }
      if (EN_REMNANT.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({ severity: "high", id, path: ctx.path, text: text.slice(0, 200), kind: "EN" });
      }
    });

    if (esE.study) {
      const layout = esE.study.layout || "standardStudy";
      if (layout === "comparisonStudy") data.comparisonStudy.count++;
      else data.standardStudy.count++;

      if (esE.study.sectionAccents) {
        const sa = esE.study.sectionAccents;
        function checkAccentsBlock(block, sectionName, index) {
          if (!block || typeof block !== "object") return;
          const text = getTextForAccentSection(esE.study, sectionName, index);
          for (const color of ACCENT_COLORS) {
            let termsToCheck = [];
            if (block.lv && block.lv[color]) termsToCheck = block.lv[color];
            else if (block.de && block.de[color]) continue;
            else if (Array.isArray(block[color])) termsToCheck = block[color];
            if (!termsToCheck.length) continue;
            for (const term of termsToCheck) {
              if (block.de && block.de[color]?.includes(term)) continue;
              if (!accentTermMatches(text, term) && !accentTermMatches(esE.lv, term)) {
                data.sectionAccents.issues.push({
                  severity: "medium",
                  id,
                  section: sectionName,
                  term,
                  de: esE.de,
                  path: `study.sectionAccents.${sectionName}`,
                  message: "Accent term not found in section text",
                });
                data.sectionAccents.pass = false;
              }
            }
          }
        }
        if (sa.explanation) checkAccentsBlock(sa.explanation, "explanation", 0);
        if (Array.isArray(sa.examples)) sa.examples.forEach((ex, idx) => checkAccentsBlock(ex, "examples", idx));
        if (Array.isArray(sa.comparison)) sa.comparison.forEach((c, idx) => checkAccentsBlock(c, "comparison", idx));
      }
    }
  }

  return data;
}

function collectSentences() {
  const deRef = loadArray(cfg.deReferenceAbs, cfg.globalKey);
  const es = loadArray(cfg.productionAbs, cfg.globalKey);
  const data = {
    meta: {
      module: cfg.moduleKey,
      date: new Date().toISOString(),
      deFile: cfg.deReferencePath,
      esFile: cfg.productionPath,
      wwwFile: cfg.wwwPath,
      sentencesTotal: cfg.totalCards,
    },
    structural: { issues: [], pass: true, syntaxPass: false, mirrorPass: false, countPass: false, deIntegrityPass: true },
    lvRemnants: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    layerIdentity: { pass: true, identical: false },
    batches: [],
    sentences: [],
  };

  try {
    execSync(`node --check ${cfg.productionPath}`, { cwd: ROOT, stdio: "pipe" });
    execSync(`node --check ${cfg.wwwPath}`, { cwd: ROOT, stdio: "pipe" });
    data.structural.syntaxPass = true;
  } catch {
    data.structural.issues.push({ severity: "critical", message: "JS syntax check failed" });
    data.structural.pass = false;
  }

  data.layerIdentity.identical = fs.readFileSync(cfg.productionAbs).equals(fs.readFileSync(cfg.wwwAbs));
  data.structural.mirrorPass = data.layerIdentity.identical;
  if (!data.layerIdentity.identical) {
    data.structural.issues.push({ severity: "critical", message: "production ≠ www mirror" });
    data.structural.pass = false;
  }

  if (deRef.length !== es.length || es.length !== cfg.totalCards) {
    data.structural.issues.push({
      severity: "critical",
      message: `Count mismatch DE=${deRef.length} ES=${es.length} expected=${cfg.totalCards}`,
    });
    data.structural.pass = false;
  } else {
    data.structural.countPass = true;
  }

  const batchDir = path.join(ROOT, "reports/temp", `${cfg.dataset}-audit-batches`);
  ensureDir(batchDir);
  const batches = chunk(es.map((_, i) => i), cfg.batchSize);

  for (let i = 0; i < es.length; i++) {
    const entry = es[i];
    const deEntry = deRef[i];
    const id = sentenceId(i);
    if (entry.de !== deEntry.de) {
      data.structural.deIntegrityPass = false;
      data.structural.issues.push({ severity: "critical", id, message: "DE mismatch vs reference" });
      data.structural.pass = false;
    }
    const foreign = classifyForeign(entry.lv);
    for (const kind of foreign) {
      data.lvRemnants.pass = false;
      data.lvRemnants.issues.push({ severity: "high", id, path: "lv", text: entry.lv.slice(0, 200), kind });
    }
    if (!entry.lv?.trim()) {
      data.technical.pass = false;
      data.technical.issues.push({ severity: "high", id, path: "lv", message: "Empty Spanish translation" });
    }
    data.sentences.push({
      cardId: id,
      index: i,
      de: entry.de,
      frText: entry.lv,
      level: entry.level || "Sätze",
    });
  }

  batches.forEach((indices, bi) => {
    const start = indices[0] + 1;
    const end = indices[indices.length - 1] + 1;
    const batchLabel = `batch-${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
    const batchFile = path.join(batchDir, `${batchLabel}.json`);
    const batchSentences = indices.map((idx) => data.sentences[idx]);
    fs.writeFileSync(batchFile, JSON.stringify({ batch: batchLabel, sentences: batchSentences }, null, 2));
    data.batches.push({ batch: batchLabel, file: batchFile, count: batchSentences.length });
  });

  return data;
}

function collectVerbs() {
  const deRef = loadArray(cfg.deReferenceAbs, cfg.globalKey);
  const es = loadArray(cfg.productionAbs, cfg.globalKey);
  const formKeys = cfg.formKeys;
  const data = {
    meta: {
      module: cfg.moduleKey,
      date: new Date().toISOString(),
      deFile: cfg.deReferencePath,
      esFile: cfg.productionPath,
      wwwFile: cfg.wwwPath,
      verbsTotal: cfg.totalCards,
      verbFormsTotal: cfg.totalForms,
    },
    structural: { issues: [], pass: true, syntaxPass: false, mirrorPass: false, countPass: false, deIntegrityPass: true },
    lvRemnants: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    layerIdentity: { pass: true, identical: false },
    batches: [],
    verbs: [],
  };

  try {
    execSync(`node --check ${cfg.productionPath}`, { cwd: ROOT, stdio: "pipe" });
    execSync(`node --check ${cfg.wwwPath}`, { cwd: ROOT, stdio: "pipe" });
    data.structural.syntaxPass = true;
  } catch {
    data.structural.issues.push({ severity: "critical", message: "JS syntax check failed" });
    data.structural.pass = false;
  }

  data.layerIdentity.identical = fs.readFileSync(cfg.productionAbs).equals(fs.readFileSync(cfg.wwwAbs));
  data.structural.mirrorPass = data.layerIdentity.identical;
  if (!data.layerIdentity.identical) {
    data.structural.issues.push({ severity: "critical", message: "production ≠ www mirror" });
    data.structural.pass = false;
  }

  if (deRef.length !== es.length || es.length !== cfg.totalCards) {
    data.structural.issues.push({
      severity: "critical",
      message: `Count mismatch DE=${deRef.length} ES=${es.length} expected=${cfg.totalCards}`,
    });
    data.structural.pass = false;
  } else {
    data.structural.countPass = true;
  }

  const batchDir = path.join(ROOT, "reports/temp", `${cfg.dataset}-audit-batches`);
  ensureDir(batchDir);
  const batches = chunk(es.map((_, i) => i), cfg.batchSize);

  for (let i = 0; i < es.length; i++) {
    const entry = es[i];
    const deEntry = deRef[i];
    const id = verbId(i);
    for (const formKey of formKeys) {
      const deForm = deEntry?.[formKey]?.de;
      const esForm = entry?.[formKey];
      if (!esForm || typeof esForm !== "object") {
        data.structural.issues.push({ severity: "critical", id, field: formKey, message: "Missing form object" });
        data.structural.pass = false;
        continue;
      }
      if (esForm.de !== deForm) {
        data.structural.deIntegrityPass = false;
        data.structural.issues.push({ severity: "critical", id, field: `${formKey}.de`, message: "DE form mismatch" });
        data.structural.pass = false;
      }
      const foreign = classifyForeign(esForm.lv);
      for (const kind of foreign) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({
          severity: "high",
          id,
          path: `${formKey}.lv`,
          text: (esForm.lv || "").slice(0, 200),
          kind,
        });
      }
    }
    const verbPayload = {
      cardId: id,
      index: i,
      infinitivDe: entry.infinitiv?.de || "",
      infinitivFr: entry.infinitiv?.lv || "",
      forms: formKeys.map((formKey) => ({
        field: formKey,
        de: entry[formKey]?.de || "",
        currentFr: entry[formKey]?.lv || "",
      })),
    };
    data.verbs.push(verbPayload);
  }

  batches.forEach((indices) => {
    const start = indices[0] + 1;
    const end = indices[indices.length - 1] + 1;
    const batchLabel = `batch-${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
    const batchFile = path.join(batchDir, `${batchLabel}.json`);
    const batchVerbs = indices.map((idx) => data.verbs[idx]);
    fs.writeFileSync(batchFile, JSON.stringify({ batch: batchLabel, verbs: batchVerbs }, null, 2));
    data.batches.push({ batch: batchLabel, file: batchFile, count: batchVerbs.length });
  });

  return data;
}

function main() {
  let data;
  if (cfg.type === "vocab") data = collectVocab();
  else if (cfg.type === "sentences") data = collectSentences();
  else if (cfg.type === "verbs") data = collectVerbs();
  else throw new Error(`Unknown type: ${cfg.type}`);

  ensureDir(path.dirname(cfg.collectJson));
  fs.writeFileSync(cfg.collectJson, JSON.stringify(data, null, 2));
  console.log(`Wrote ${cfg.collectJson}`);
  console.log(
    JSON.stringify(
      {
        module: cfg.moduleKey,
        structural: data.structural?.pass,
        mirror: data.layerIdentity?.identical,
        lvRemnants: data.lvRemnants?.issues?.length || 0,
        sectionAccents: data.sectionAccents?.issues?.length || 0,
        batches: data.batches?.length || 0,
      },
      null,
      2,
    ),
  );
}

main();
