#!/usr/bin/env node
/**
 * FR-DE A1 full audit collector (read-only). Writes reports/temp/fr-a1-audit-data.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LV_FILE = path.join(ROOT, "data", "a1.js");
const FR_FILE = path.join(ROOT, "data", "fr", "a1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "fr", "a1.js");
const OUT = path.join(ROOT, "reports", "temp", "fr-a1-audit-data.json");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS = /latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|\bjūs\b|\bjums\b|\bjūsu\b|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stāstu|man jā|tev jā|mums jā|\brīsi\b|mācēt|\bprast\b|\bbraukt\b|\bvest\b|\baizvest\b|\blūdzu\b|\blūgums\b|Man ir|Es esmu|Es gribu|Es redzu|Es stāstu|Es palīdzu|nāc iekšā|paliec|aiziet|mājās|skolā|darbā/i;
const NL_WORDS = /\b(het|een|alstublieft|alsjeblieft|goedemorgen|dank\s*u|zijn|hebben|kunnen|moeten|willen|zullen|mogen|vandaag|gisteren)\b/i;
const EN_REMNANTS = /\b(the|and|you|your|please|thank you|good morning|good evening|I am|we are|they are)\b/i;
const ET_CHARS = /[õäöüšžÕÄÖÜŠŽ]/;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
function hasTechnicalArtifact(text) {
  return text.includes("```")
    || /^(Translation|Tulkojums):/im.test(text)
    || /\bTODO\b|\bTBD\b/.test(text)
    || text.trim() === "...";
}
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `a1-${entry.de}-${index}`;
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

function main() {
  const lv = load(LV_FILE);
  const fr = load(FR_FILE);
  const data = {
    meta: {
      date: new Date().toISOString(),
      lvFile: "data/a1.js",
      frFile: "data/fr/a1.js",
      wwwFile: "www/data/fr/a1.js",
      lvCount: lv.length,
      frCount: fr.length,
    },
    structural: { issues: [], pass: true },
    germanIntegrity: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    lvRemnants: { issues: [], pass: true },
    mainTranslations: { entries: [], summary: { OK: 0, WARNING: 0, ERROR: 0 } },
    studyCards: { issues: [], pass: true },
    sectionAccents: { issues: [], pass: true },
    layerIdentity: { pass: true, identical: false },
    comparisonStudy: { issues: [], count: 0 },
    standardStudy: { count: 0 },
  };

  // Layer identity
  data.layerIdentity.identical = fs.readFileSync(FR_FILE).equals(fs.readFileSync(WWW_FILE));
  if (!data.layerIdentity.identical) {
    data.layerIdentity.pass = false;
    data.structural.issues.push({ severity: "critical", message: "data/fr/a1.js and www/data/fr/a1.js are not identical" });
  }

  // Structural
  if (lv.length !== fr.length) {
    data.structural.pass = false;
    data.structural.issues.push({ severity: "critical", message: `Record count mismatch LV=${lv.length} FR=${fr.length}` });
  }

  const lvStudy = lv.filter((e) => e.study).length;
  const frStudy = fr.filter((e) => e.study).length;
  data.meta.lvStudyCount = lvStudy;
  data.meta.frStudyCount = frStudy;
  if (lvStudy !== frStudy) {
    data.structural.pass = false;
    data.structural.issues.push({ severity: "critical", message: `Study count mismatch LV=${lvStudy} FR=${frStudy}` });
  }

  const ids = new Set();
  for (let i = 0; i < Math.min(lv.length, fr.length); i++) {
    const lvE = lv[i];
    const frE = fr[i];
    const id = entryId(frE, i);

    if (lvE.de !== frE.de) {
      data.structural.pass = false;
      data.structural.issues.push({ severity: "critical", id, message: `Order mismatch at index ${i}: LV.de=${lvE.de} ET.de=${frE.de}` });
    }

    if (frE.study?.id) {
      if (ids.has(frE.study.id)) {
        data.structural.issues.push({ severity: "high", id, message: `Duplicate study id: ${frE.study.id}` });
        data.structural.pass = false;
      }
      ids.add(frE.study.id);
    }

    const lvKeys = new Set(schemaKeys(lvE).filter((k) => k !== "lv" && !k.includes(".lv")));
    const frKeys = new Set(schemaKeys(frE).filter((k) => k !== "lv" && !k.includes(".lv")));
    const missing = [...lvKeys].filter((k) => !frKeys.has(k));
    const extra = [...frKeys].filter((k) => !lvKeys.has(k));
    if (missing.length) {
      data.structural.issues.push({ severity: "high", id, de: frE.de, message: `Missing fields vs LV: ${missing.join(", ")}` });
      data.structural.pass = false;
    }
    if (extra.length) {
      data.structural.issues.push({ severity: "medium", id, de: frE.de, message: `Extra fields vs LV: ${extra.join(", ")}` });
    }

    const lvLayout = lvE.study?.layout || (lvE.study ? "standardStudy" : null);
    const frLayout = frE.study?.layout || (frE.study ? "standardStudy" : null);
    if (lvLayout !== frLayout) {
      data.structural.issues.push({ severity: "high", id, de: frE.de, message: `Layout mismatch LV=${lvLayout} FR=${frLayout}` });
      data.structural.pass = false;
    }

    if (frE.study?.layout === "comparisonStudy") data.comparisonStudy.count++;
    else if (frE.study) data.standardStudy.count++;

    // German integrity
    for (const field of ["de", "de_article", "de_plural", "level"]) {
      if (lvE[field] !== frE[field]) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({
          severity: "critical",
          id,
          field,
          lvValue: lvE[field],
          frValue: frE[field],
        });
      }
    }

  if (lvE.study && frE.study) {
      walkStrings(lvE.study, (text, ctx) => {
        if (!ctx.inDe && ctx.parentKey === "de") return;
        if (ctx.inDe || ctx.parentKey === "de") {
          // find corresponding ET path - simplified: compare de fields in study
        }
      });
      // Compare all de strings in study
      const lvDeStrings = [];
      const frDeStrings = [];
      walkStrings(lvE.study, (text, ctx) => {
        if (ctx.parentKey === "de" || (ctx.path.endsWith(".de") && !ctx.path.includes(".lv"))) lvDeStrings.push(text);
      });
      walkStrings(frE.study, (text, ctx) => {
        if (ctx.parentKey === "de" || ctx.path.includes(".de") && !ctx.path.includes(".lv")) frDeStrings.push(text);
      });
      // Better: walk paired
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
      const lvDe = [];
      const frDe = [];
      collectDeStrings(lvE.study, lvDe);
      collectDeStrings(frE.study, frDe);
      if (JSON.stringify(lvDe) !== JSON.stringify(frDe)) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({
          severity: "critical",
          id,
          de: frE.de,
          message: "Study German content differs from LV etalon",
          lvDe,
          frDe,
        });
      }
    }

    // Main translation heuristics
    const main = {
      id,
      de: frE.de,
      de_article: frE.de_article,
      lvGloss: lvE.lv,
      frMain: frE.lv,
      studyTranslation: frE.study?.translation || null,
      status: "OK",
      flags: [],
    };
    if (!frE.lv || !frE.lv.trim()) {
      main.status = "ERROR";
      main.flags.push("empty_main_translation");
    }
    if (/^[A-ZÕÄÖÜŠŽ]/.test(frE.lv) && !frE.lv.includes("•")) {
      main.flags.push("unexpected_capitalization");
      main.status = main.status === "ERROR" ? "ERROR" : "WARNING";
    }
    if (LV_ONLY.test(frE.lv) || LV_WORDS.test(frE.lv) || NL_WORDS.test(frE.lv) || EN_REMNANTS.test(frE.lv) || ET_CHARS.test(frE.lv)) {
      main.status = "ERROR";
      main.flags.push("latvian_remnant_in_main");
    }
    if (hasTechnicalArtifact(frE.lv)) {
      main.status = "ERROR";
      main.flags.push("technical_artifact_in_main");
    }
    data.mainTranslations.entries.push(main);
    data.mainTranslations.summary[main.status]++;

    // Technical + LV on all ET strings
    walkStrings(frE, (text, ctx) => {
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
      if (LV_ONLY.test(text) || LV_WORDS.test(text) || NL_WORDS.test(text) || EN_REMNANTS.test(text) || ET_CHARS.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({ severity: "critical", id, path: ctx.path, text: text.slice(0, 200) });
      }
    }, { path: `entry[${i}]`, parentKey: "", inDe: false });

    // Study card checks
    if (frE.study) {
      const study = frE.study;
      const layout = study.layout || "standardStudy";

      if (layout === "standardStudy") {
        if (!hasContent(study.explanation)) {
          data.studyCards.issues.push({ severity: "high", id, message: "standardStudy missing explanation" });
        }
        if (!hasContent(study.examples)) {
          data.studyCards.issues.push({ severity: "high", id, message: "standardStudy missing examples" });
        }
      }

      if (layout === "comparisonStudy") {
        if (!hasContent(study.comparisonTable) && !hasContent(study.comparison) && !hasContent(study.words)) {
          data.comparisonStudy.issues.push({ severity: "high", id, message: "comparisonStudy missing comparison content" });
        }
      }

      // sectionAccents
      if (lvE.study?.sectionAccents && !study.sectionAccents) {
        data.sectionAccents.issues.push({ severity: "high", id, message: "Missing sectionAccents present in LV" });
        data.sectionAccents.pass = false;
      }

      if (study.sectionAccents) {
        const terms = [];
        collectSectionAccentTerms(study.sectionAccents, terms);
        for (const term of terms) {
          if (LV_ONLY.test(term) || LV_WORDS.test(term) || NL_WORDS.test(term) || EN_REMNANTS.test(term) || ET_CHARS.test(term)) {
            data.sectionAccents.issues.push({ severity: "high", id, term, message: "LV remnant in sectionAccents" });
            data.sectionAccents.pass = false;
          }
        }
        // accent match check for FR lv side
        function checkAccentsBlock(block, sectionName, index) {
          if (!block || typeof block !== "object") return;
          const text = getTextForAccentSection(study, sectionName, index);
          for (const color of ACCENT_COLORS) {
            const arr = block[color] || (block.lv && block.lv[color]) || (block.de && block.de[color] ? null : block[color]);
            let termsToCheck = [];
            if (block.lv && block.lv[color]) termsToCheck = block.lv[color];
            else if (block.de && block.de[color]) continue;
            else if (Array.isArray(block[color])) termsToCheck = block[color];
            if (!termsToCheck.length) continue;
            for (const term of termsToCheck) {
              if (block.de && block.de[color]?.includes(term)) continue;
              if (!accentTermMatches(text, term) && !accentTermMatches(frE.lv, term)) {
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
  console.log(`Wrote ${OUT}`);
  console.log(JSON.stringify({
    structural: data.structural.pass,
    german: data.germanIntegrity.pass,
    technical: data.technical.pass,
    lvRemnants: data.lvRemnants.pass,
    sectionAccents: data.sectionAccents.pass,
    layerIdentity: data.layerIdentity.identical,
    mainSummary: data.mainTranslations.summary,
    counts: { sectionAccentsIssues: data.sectionAccents.issues.length, studyIssues: data.studyCards.issues.length },
  }, null, 2));
}

function hasContent(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasContent);
  if (typeof value === "object") return Object.values(value).some(hasContent);
  return Boolean(value);
}

main();
