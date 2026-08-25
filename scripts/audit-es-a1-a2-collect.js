#!/usr/bin/env node
/**
 * ES-DE A1+A2 full audit collector (read-only).
 * Writes reports/temp/es-de-a1-a2-audit-data.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LEVELS = ["a1", "a2"];
const OUT = path.join(ROOT, "reports", "temp", "es-de-a1-a2-audit-data.json");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|\bjūs\b|\bjums\b|\bjūsu\b|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stātu|man jā|tev jā|mums jā|\brīsi\b|mācēt|\bprast\b|\blūdzu\b|\blūgums\b|Man ir|Es esmu|Es gribu|Es redzu|Es palīdzu|nāc iekšā|paliec|aiziet|mājās|skolā|darbā/i;
const IT_WORDS =
  /\b(per favore|grazie|buongiorno|buonasera|ciao|prego|scusi|scusa|dove|quando|perché|perche|anche|molto|poco|essere|avere|fare|dire|andare|venire|stare|dare|sapere|volere|dovere|potere|parlare|mangiare|bere|dormire|lavorare|studiare|italiano|italiana)\b/i;
const EN_REMNANT =
  /\b(the|and|with|from|this|that|please|thank you|hello|goodbye|because|before|after|always|never|something|nothing|everything)\b/i;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const PLACEHOLDER = /^(Translation|Tulkojums):|\bTODO\b|\bTBD\b|^\.{3}$/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function load(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : [];
}

function entryId(entry, index, level) {
  return entry.study?.id || `${level}-${entry.de}-${index}`;
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

function collectDeStrings(obj, out, keyPath = "") {
  if (typeof obj === "string") return;
  if (Array.isArray(obj)) return obj.forEach((v, i) => collectDeStrings(v, out, `${keyPath}[${i}]`));
  if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "de") out.push({ path: keyPath, value: v });
      else collectDeStrings(v, out, keyPath ? `${keyPath}.${k}` : k);
    }
  }
}

function hasSemicolonMeaning(text) {
  return typeof text === "string" && /;/.test(text) && !/https?:\/\//i.test(text);
}

function mirrorCheck(level) {
  const dataPath = path.join(ROOT, "data", "es", `${level}.js`);
  const wwwPath = path.join(ROOT, "www", "data", "es", `${level}.js`);
  return {
    level,
    identical: fs.readFileSync(dataPath).equals(fs.readFileSync(wwwPath)),
    dataBlob: require("crypto").createHash("sha1").update(fs.readFileSync(dataPath)).digest("hex"),
    wwwBlob: require("crypto").createHash("sha1").update(fs.readFileSync(wwwPath)).digest("hex"),
  };
}

function auditLevel(level) {
  const lv = load(`data/${level}.js`);
  const es = load(`data/es/${level}.js`);
  const result = {
    level,
    counts: {
      cards: lv.length,
      lvStudy: lv.filter((e) => e.study).length,
      esStudy: es.filter((e) => e.study).length,
    },
    structural: { issues: [], pass: true },
    germanIntegrity: { issues: [], pass: true },
    foreignRemnants: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    semicolons: { issues: [], pass: true },
    missingStudy: [],
    partialStudy: [],
    minimalStudyNoRenderable: [],
    mirror: mirrorCheck(level),
  };

  if (lv.length !== es.length) {
    result.structural.pass = false;
    result.structural.issues.push({
      severity: "CRITICAL",
      message: `Record count mismatch LV=${lv.length} ES=${es.length}`,
    });
  }

  if (result.counts.lvStudy !== result.counts.esStudy) {
    result.structural.pass = false;
    result.structural.issues.push({
      severity: "CRITICAL",
      message: `Study count mismatch LV=${result.counts.lvStudy} ES=${result.counts.esStudy}`,
    });
  }

  if (!result.mirror.identical) {
    result.structural.pass = false;
    result.structural.issues.push({
      severity: "CRITICAL",
      message: `Mirror mismatch data/es/${level}.js vs www/data/es/${level}.js`,
    });
  }

  for (let i = 0; i < Math.min(lv.length, es.length); i++) {
    const lvE = lv[i];
    const esE = es[i];
    const id = entryId(esE, i, level);

    if (lvE.de !== esE.de) {
      result.structural.pass = false;
      result.structural.issues.push({
        severity: "CRITICAL",
        id,
        message: `Order mismatch at index ${i}: LV.de=${lvE.de} ES.de=${esE.de}`,
      });
      continue;
    }

    for (const field of ["de", "de_article", "de_plural", "level"]) {
      if (lvE[field] !== esE[field]) {
        result.germanIntegrity.pass = false;
        result.germanIntegrity.issues.push({
          severity: "CRITICAL",
          id,
          de: esE.de,
          field,
          lvValue: lvE[field],
          esValue: esE[field],
        });
      }
    }

    if (lvE.study && !esE.study) {
      result.missingStudy.push({
        de: esE.de,
        id: lvE.study.id,
        layout: lvE.study.layout || "standardStudy",
      });
      result.structural.pass = false;
      continue;
    }

    if (lvE.study && esE.study) {
      const lvKeys = new Set(schemaKeys(lvE).filter((k) => k !== "lv" && !k.includes(".lv")));
      const esKeys = new Set(schemaKeys(esE).filter((k) => k !== "lv" && !k.includes(".lv")));
      const missing = [...lvKeys].filter((k) => !esKeys.has(k));
      if (missing.length) {
        result.partialStudy.push({ de: esE.de, id, missing });
        result.structural.pass = false;
        result.structural.issues.push({
          severity: missing.includes("study") ? "CRITICAL" : "HIGH",
          id,
          de: esE.de,
          message: `Missing fields vs LV: ${missing.join(", ")}`,
        });
      }

      const lvLayout = lvE.study.layout || "standardStudy";
      const esLayout = esE.study.layout || "standardStudy";
      if (lvLayout !== esLayout) {
        result.structural.pass = false;
        result.structural.issues.push({
          severity: "HIGH",
          id,
          de: esE.de,
          message: `Layout mismatch LV=${lvLayout} ES=${esLayout}`,
        });
      }

      if (esLayout === "minimalStudy") {
        const hasRenderable =
          (esE.study.explanation && String(esE.study.explanation).trim()) ||
          (Array.isArray(esE.study.examples) && esE.study.examples.length) ||
          (Array.isArray(esE.study.comparison) && esE.study.comparison.length) ||
          esE.study.tip ||
          esE.study.important;
        if (!hasRenderable) {
          result.minimalStudyNoRenderable.push({ de: esE.de, id, layout: esLayout });
        }
      }

      const lvDe = [];
      const esDe = [];
      collectDeStrings(lvE.study, lvDe);
      collectDeStrings(esE.study, esDe);
      if (JSON.stringify(lvDe) !== JSON.stringify(esDe)) {
        result.germanIntegrity.pass = false;
        result.germanIntegrity.issues.push({
          severity: "CRITICAL",
          id,
          de: esE.de,
          message: "Study German content differs from LV etalon",
        });
      }
    }

    if (!esE.lv || !String(esE.lv).trim()) {
      result.technical.pass = false;
      result.technical.issues.push({
        severity: "HIGH",
        id,
        de: esE.de,
        path: "lv",
        message: "Empty main translation (lv field)",
      });
    }

    if (hasSemicolonMeaning(esE.lv)) {
      result.semicolons.pass = false;
      result.semicolons.issues.push({ severity: "MEDIUM", id, de: esE.de, path: "lv", text: esE.lv });
    }
    if (hasSemicolonMeaning(esE.study?.translation)) {
      result.semicolons.pass = false;
      result.semicolons.issues.push({
        severity: "MEDIUM",
        id,
        de: esE.de,
        path: "study.translation",
        text: esE.study.translation,
      });
    }

    walkStrings(esE, (text, ctx) => {
      if (ctx.inDe || ["de", "de_article", "de_plural"].includes(ctx.parentKey)) return;
      if (!text.trim()) {
        if (["lv", "translation", "title", "lead", "text"].includes(ctx.parentKey)) {
          result.technical.pass = false;
          result.technical.issues.push({
            severity: "HIGH",
            id,
            de: esE.de,
            path: ctx.path,
            message: "Empty required string",
          });
        }
        return;
      }
      if (MOJIBAKE.test(text)) {
        result.technical.pass = false;
        result.technical.issues.push({
          severity: "CRITICAL",
          id,
          de: esE.de,
          path: ctx.path,
          text: text.slice(0, 120),
          message: "Mojibake detected",
        });
      }
      if (PLACEHOLDER.test(text)) {
        result.technical.pass = false;
        result.technical.issues.push({
          severity: "HIGH",
          id,
          de: esE.de,
          path: ctx.path,
          text: text.slice(0, 120),
          message: "Placeholder/artifact",
        });
      }
      if (LV_ONLY.test(text) || LV_WORDS.test(text)) {
        result.foreignRemnants.pass = false;
        result.foreignRemnants.issues.push({
          severity: "HIGH",
          id,
          de: esE.de,
          path: ctx.path,
          category: "LV_REMNANT",
          text: text.slice(0, 200),
        });
      }
      if (IT_WORDS.test(text) && !/\bespañol\b/i.test(text)) {
        result.foreignRemnants.pass = false;
        result.foreignRemnants.issues.push({
          severity: "MEDIUM",
          id,
          de: esE.de,
          path: ctx.path,
          category: "IT_REMNANT",
          text: text.slice(0, 200),
        });
      }
    }, { path: `entry[${i}]`, parentKey: "", inDe: false });
  }

  return result;
}

function main() {
  const levels = LEVELS.map(auditLevel);
  const payload = {
    meta: {
      date: new Date().toISOString().slice(0, 10),
      standard: "LANGUAGE_AUDIT_STANDARD.md",
      scope: "ES-DE A1+A2",
      originMainSha: require("child_process").execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
      readOnly: true,
    },
    levels,
    summary: {
      a1Cards: levels[0].counts.cards,
      a2Cards: levels[1].counts.cards,
      a1StudyGap: levels[0].counts.lvStudy - levels[0].counts.esStudy,
      a2StudyGap: levels[1].counts.lvStudy - levels[1].counts.esStudy,
      missingStudyTotal: levels.reduce((s, l) => s + l.missingStudy.length, 0),
      partialStudyTotal: levels.reduce((s, l) => s + l.partialStudy.length, 0),
      foreignRemnants: levels.reduce((s, l) => s + l.foreignRemnants.issues.length, 0),
      semicolons: levels.reduce((s, l) => s + l.semicolons.issues.length, 0),
      germanIntegrity: levels.reduce((s, l) => s + l.germanIntegrity.issues.length, 0),
      technical: levels.reduce((s, l) => s + l.technical.issues.length, 0),
      minimalStudyNoRenderable: levels.reduce((s, l) => s + l.minimalStudyNoRenderable.length, 0),
      mirrorPass: levels.every((l) => l.mirror.identical),
    },
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2));
  console.log(`Wrote ${OUT}`);
  console.log(JSON.stringify(payload.summary, null, 2));
}

main();
