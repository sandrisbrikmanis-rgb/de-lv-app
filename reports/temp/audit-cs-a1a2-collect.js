#!/usr/bin/env node
/**
 * CS-DE A1+A2 full audit collector (read-only).
 * Writes reports/temp/cs-a1-audit-data.json and cs-a2-audit-data.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("../../scripts/lib/audit-common");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(latviešu|lotyš|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|jūs|jums|jūsu|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stāstu|man jā|tev jā|mums jā|rīsi|mācēt|prast|braukt|vest|aizvest)\b/i;
const PL_CHARS = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/;
const SK_WORDS = /\b(slovensk\w*|poľsk\w*|poľštin\w*|lotyšsk\w*|Główna|Podzielne|Niepoprawnie)\b/i;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function hasTechnicalArtifact(text) {
  return (
    text.includes("```")
    || /^(Translation|Tulkojums):/im.test(text)
    || /\bTODO\b|\bTBD\b/.test(text)
    || text.trim() === "..."
  );
}

function load(filePath, globalKey) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
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

function collectLevel(level) {
  const globalKey = `${level.toUpperCase()}_WORDS`;
  const lvFile = path.join(ROOT, "data", `${level}.js`);
  const csFile = path.join(ROOT, "data", "cs", `${level}.js`);
  const wwwFile = path.join(ROOT, "www", "data", "cs", `${level}.js`);
  const OUT = path.join(ROOT, "reports", "temp", `cs-${level}-audit-data.json`);

  const lv = load(lvFile, globalKey);
  const cs = load(csFile, globalKey);

  const data = {
    meta: {
      date: new Date().toISOString(),
      level,
      lvFile: `data/${level}.js`,
      csFile: `data/cs/${level}.js`,
      wwwFile: `www/data/cs/${level}.js`,
      lvCount: lv.length,
      csCount: cs.length,
    },
    structural: { issues: [], pass: true },
    germanIntegrity: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    lvRemnants: { issues: [], pass: true },
    foreignRemnants: { issues: [], pass: true },
    semicolons: { issues: [], pass: true },
    mainTranslations: { entries: [], summary: { OK: 0, WARNING: 0, ERROR: 0 } },
    studyCards: { issues: [], pass: true },
    sectionAccents: { issues: [], pass: true },
    layerIdentity: { pass: true, identical: false },
    comparisonStudy: { issues: [], count: 0 },
    standardStudy: { count: 0 },
    minimalStudy: { count: 0 },
  };

  data.layerIdentity.identical = fs.readFileSync(csFile).equals(fs.readFileSync(wwwFile));
  if (!data.layerIdentity.identical) {
    data.layerIdentity.pass = false;
    data.structural.issues.push({
      severity: "critical",
      message: `data/cs/${level}.js and www/data/cs/${level}.js are not identical`,
    });
  }

  if (lv.length !== cs.length) {
    data.structural.pass = false;
    data.structural.issues.push({
      severity: "critical",
      message: `Record count mismatch LV=${lv.length} CS=${cs.length}`,
    });
  }

  const lvStudy = lv.filter((e) => e.study).length;
  const csStudy = cs.filter((e) => e.study).length;
  data.meta.lvStudyCount = lvStudy;
  data.meta.csStudyCount = csStudy;
  if (lvStudy !== csStudy) {
    data.structural.pass = false;
    data.structural.issues.push({
      severity: "critical",
      message: `Study count mismatch LV=${lvStudy} CS=${csStudy}`,
    });
  }

  const ids = new Set();
  for (let i = 0; i < Math.min(lv.length, cs.length); i++) {
    const lvE = lv[i];
    const csE = cs[i];
    const id = entryId(csE, i, level);

    if (lvE.de !== csE.de) {
      data.structural.pass = false;
      data.structural.issues.push({
        severity: "critical",
        id,
        message: `Order mismatch at index ${i}: LV.de=${lvE.de} CS.de=${csE.de}`,
      });
    }

    if (csE.study?.id) {
      if (ids.has(csE.study.id)) {
        data.structural.issues.push({ severity: "high", id, message: `Duplicate study id: ${csE.study.id}` });
        data.structural.pass = false;
      }
      ids.add(csE.study.id);
    }

    const lvKeys = new Set(schemaKeys(lvE).filter((k) => k !== "lv" && !k.includes(".lv")));
    const csKeys = new Set(schemaKeys(csE).filter((k) => k !== "lv" && !k.includes(".lv")));
    const missing = [...lvKeys].filter((k) => !csKeys.has(k));
    const extra = [...csKeys].filter((k) => !lvKeys.has(k));
    if (missing.length) {
      data.structural.issues.push({
        severity: "high",
        id,
        de: csE.de,
        message: `Missing fields vs LV: ${missing.join(", ")}`,
      });
      data.structural.pass = false;
    }
    if (extra.length) {
      data.structural.issues.push({
        severity: "medium",
        id,
        de: csE.de,
        message: `Extra fields vs LV: ${extra.join(", ")}`,
      });
    }

    const lvLayout = lvE.study?.layout || (lvE.study ? "standardStudy" : null);
    const csLayout = csE.study?.layout || (csE.study ? "standardStudy" : null);
    if (lvLayout !== csLayout) {
      data.structural.issues.push({
        severity: "high",
        id,
        de: csE.de,
        message: `Layout mismatch LV=${lvLayout} CS=${csLayout}`,
      });
      data.structural.pass = false;
    }

    if (csE.study?.layout === "comparisonStudy") data.comparisonStudy.count++;
    else if (csE.study?.layout === "minimalStudy") data.minimalStudy.count++;
    else if (csE.study) data.standardStudy.count++;

    for (const field of ["de", "de_article", "de_plural", "level"]) {
      if (lvE[field] !== csE[field]) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({
          severity: "critical",
          id,
          field,
          lvValue: lvE[field],
          csValue: csE[field],
        });
      }
    }

    if (lvE.study && csE.study) {
      const lvDe = [];
      const csDe = [];
      collectDeStrings(lvE.study, lvDe);
      collectDeStrings(csE.study, csDe);
      if (JSON.stringify(lvDe) !== JSON.stringify(csDe)) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({
          severity: "critical",
          id,
          de: csE.de,
          message: "Study German content differs from LV etalon",
          mismatchCount: lvDe.filter((x, idx) => !csDe[idx] || csDe[idx].value !== x.value).length,
        });
      }
    }

    const main = {
      id,
      de: csE.de,
      de_article: csE.de_article,
      lvGloss: lvE.lv,
      csMain: csE.lv,
      studyTranslation: csE.study?.translation || null,
      status: "OK",
      flags: [],
    };
    if (!csE.lv || !csE.lv.trim()) {
      main.status = "ERROR";
      main.flags.push("empty_main_translation");
    }
    if (LV_ONLY.test(csE.lv) || LV_WORDS.test(csE.lv)) {
      main.status = "ERROR";
      main.flags.push("latvian_remnant_in_main");
    }
    if (PL_CHARS.test(csE.lv) || SK_WORDS.test(csE.lv)) {
      main.status = "ERROR";
      main.flags.push("foreign_remnant_in_main");
    }
    if (hasTechnicalArtifact(csE.lv)) {
      main.status = "ERROR";
      main.flags.push("technical_artifact_in_main");
    }
    if (/;/.test(csE.lv)) {
      main.flags.push("semicolon_in_main");
      main.status = main.status === "ERROR" ? "ERROR" : "WARNING";
      data.semicolons.issues.push({ severity: "medium", id, path: "lv", text: csE.lv });
      data.semicolons.pass = false;
    }
    data.mainTranslations.entries.push(main);
    data.mainTranslations.summary[main.status]++;

    walkStrings(csE, (text, ctx) => {
      if (ctx.inDe || ctx.parentKey === "de" || ctx.parentKey === "de_article" || ctx.parentKey === "de_plural") return;
      if (!text.trim()) {
        if (["lv", "translation", "title", "lead"].includes(ctx.parentKey)) {
          data.technical.issues.push({ severity: "high", id, path: ctx.path, message: "Empty required string" });
          data.technical.pass = false;
        }
        return;
      }
      if (MOJIBAKE.test(text)) {
        data.technical.issues.push({ severity: "critical", id, path: ctx.path, text: text.slice(0, 120), message: "Mojibake detected" });
        data.technical.pass = false;
      }
      if (hasTechnicalArtifact(text)) {
        data.technical.issues.push({ severity: "high", id, path: ctx.path, text: text.slice(0, 120), message: "Technical artifact" });
        data.technical.pass = false;
      }
      if (LV_ONLY.test(text) || LV_WORDS.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({ severity: "critical", id, path: ctx.path, text: text.slice(0, 200) });
      }
      if (PL_CHARS.test(text) || SK_WORDS.test(text)) {
        data.foreignRemnants.pass = false;
        data.foreignRemnants.issues.push({ severity: "high", id, path: ctx.path, text: text.slice(0, 200) });
      }
      if (/;/.test(text) && !ctx.inDe) {
        data.semicolons.issues.push({ severity: "medium", id, path: ctx.path, text: text.slice(0, 120) });
        data.semicolons.pass = false;
      }
    }, { path: `entry[${i}]`, parentKey: "", inDe: false });

    if (csE.study) {
      const study = csE.study;
      const layout = study.layout || "standardStudy";

      if (layout === "standardStudy") {
        if (!hasContent(study.explanation)) {
          data.studyCards.issues.push({ severity: "high", id, message: "standardStudy missing explanation" });
          data.studyCards.pass = false;
        }
        if (!hasContent(study.examples)) {
          data.studyCards.issues.push({ severity: "high", id, message: "standardStudy missing examples" });
          data.studyCards.pass = false;
        }
      }

      if (lvE.study?.sectionAccents && !study.sectionAccents) {
        data.sectionAccents.issues.push({ severity: "high", id, message: "Missing sectionAccents present in LV" });
        data.sectionAccents.pass = false;
      }

      if (study.sectionAccents) {
        const terms = [];
        collectSectionAccentTerms(study.sectionAccents, terms);
        for (const term of terms) {
          if (LV_ONLY.test(term) || LV_WORDS.test(term)) {
            data.sectionAccents.issues.push({ severity: "high", id, term, message: "LV remnant in sectionAccents" });
            data.sectionAccents.pass = false;
          }
        }

        function checkAccentsBlock(block, sectionName, index) {
          if (!block || typeof block !== "object") return;
          const text = getTextForAccentSection(study, sectionName, index);
          for (const color of ACCENT_COLORS) {
            let termsToCheck = [];
            if (block.lv && block.lv[color]) termsToCheck = block.lv[color];
            else if (block.de && block.de[color]) continue;
            else if (Array.isArray(block[color])) termsToCheck = block[color];
            if (!termsToCheck.length) continue;
            for (const term of termsToCheck) {
              if (block.de && block.de[color]?.includes(term)) continue;
              if (!accentTermMatches(text, term) && !accentTermMatches(csE.lv, term)) {
                data.sectionAccents.issues.push({
                  severity: "medium",
                  id,
                  section: sectionName,
                  term,
                  message: "Accent term not found in section text",
                });
              }
            }
          }
        }
        const sa = study.sectionAccents;
        if (sa.explanation) checkAccentsBlock(sa.explanation, "explanation", 0);
        if (Array.isArray(sa.examples)) sa.examples.forEach((ex, idx) => checkAccentsBlock(ex, "examples", idx));
        if (Array.isArray(sa.comparison)) sa.comparison.forEach((c, idx) => checkAccentsBlock(c, "comparison", idx));
      }
    }
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
  return { level, out: OUT, summary: {
    structural: data.structural.pass,
    german: data.germanIntegrity.pass,
    technical: data.technical.pass,
    lvRemnants: data.lvRemnants.pass,
    foreignRemnants: data.foreignRemnants.pass,
    semicolons: data.semicolons.pass,
    sectionAccents: data.sectionAccents.pass,
    layerIdentity: data.layerIdentity.identical,
    mainSummary: data.mainTranslations.summary,
    counts: {
      structuralIssues: data.structural.issues.length,
      germanIssues: data.germanIntegrity.issues.length,
      lvRemnants: data.lvRemnants.issues.length,
      foreignRemnants: data.foreignRemnants.issues.length,
      semicolons: data.semicolons.issues.length,
      sectionAccentsIssues: data.sectionAccents.issues.length,
      studyIssues: data.studyCards.issues.length,
    },
  }};
}

function main() {
  const results = ["a1", "a2"].map(collectLevel);
  console.log(JSON.stringify(results, null, 2));
}

main();
