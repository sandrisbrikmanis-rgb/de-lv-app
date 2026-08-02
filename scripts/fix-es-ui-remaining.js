#!/usr/bin/env node
/** Fix remaining LV strings in ES UI and sync study.translation audit items. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, translateAll, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".es-lv-translation-cache.json");

const LV_UI_STRINGS = new Set([
  "Kurss", "Teikumi", "Zinu pareizi", "Nezinu", "Atcelt", "Atgriezt", "Atgriezt visu",
  "Papildu opcijas", "Zināmi", "100% zinu", "Klausīties", "Viegls", "Daudzsk.",
  "vingrinājuma kartīte", "Problemātiskie vārdi", "automatiski ieslēgts", "automatiski izslēgts",
  "Rakst.", "Probl.", "Galvenā izvēlne", "Darbības vārdi", "Izvēlies grupu",
]);

const MANUAL_UI = {
  "Kurss": "Curso",
  "Teikumi": "Frases",
  "Zinu pareizi": "Lo sé",
  "Nezinu": "No lo sé",
  "Atcelt": "Cancelar",
  "Atgriezt": "Restaurar",
  "Atgriezt visu": "Restaurar todo",
  "Papildu opcijas": "Opciones adicionales",
  "Zināmi ({count})": "Conocidos ({count})",
  "100% zinu": "100% dominado",
  "Klausīties: {word}": "Escuchar: {word}",
  "Viegls": "Fácil",
  "Daudzsk.": "Pl.",
  "vingrinājuma kartīte": "tarjeta de ejercicio",
  "Problemātiskie vārdi ({count})": "Palabras problemáticas ({count})",
  "{label} (automātiski ieslēgts)": "{label} (activado automáticamente)",
  "{label} (automātiski izslēgts)": "{label} (desactivado automáticamente)",
  "Rakst.": "Ort.",
  "Probl.": "Probl.",
  "‹ Kurss": "‹ Curso",
  "{title} vingrinājuma kartīte": "{title} tarjeta de ejercicio",
};

const MANUAL_STUDY = {
  an: { lv: "Desde • Hasta • En", translation: "Desde • Hasta • En" },
  Leiter: { lv: "Jefe", translation: "Jefe • Escalera" },
  "sich bedienen": { lv: "Servirse", translation: "Servirse" },
  Nachdruck: { lv: "Énfasis", translation: "Énfasis • Reedición" },
};

function loadUi() {
  const code = fs.readFileSync(path.join(ROOT, "languages/es/ui.js"), "utf8");
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(code.replace("window.LANGUAGE_UI_STRINGS", "LANGUAGE_UI_STRINGS"), ctx);
  return ctx.LANGUAGE_UI_STRINGS;
}

function walkReplace(obj, map) {
  if (obj == null) return obj;
  if (typeof obj === "string") {
    if (map[obj]) return map[obj];
    return obj;
  }
  if (Array.isArray(obj)) return obj.map((v) => walkReplace(v, map));
  if (typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = walkReplace(v, map);
    return out;
  }
  return obj;
}

function collectAllStrings(obj, out) {
  if (obj == null) return;
  if (typeof obj === "string") { out.add(obj); return; }
  if (Array.isArray(obj)) return obj.forEach((v) => collectAllStrings(v, out));
  if (typeof obj === "object") Object.values(obj).forEach((v) => collectAllStrings(v, out));
}

async function main() {
  const lvCode = fs.readFileSync(path.join(ROOT, "languages/lv/ui.js"), "utf8")
    .replace("window.LANGUAGE_UI_STRINGS", "LANGUAGE_UI_STRINGS");
  const lvCtx = {};
  vm.createContext(lvCtx);
  vm.runInContext(lvCode, lvCtx);

  const esUi = loadUi();
  const toTranslate = new Set();
  collectAllStrings(lvCtx.LANGUAGE_UI_STRINGS, toTranslate);

  const cache = loadCache(CACHE_PATH);
  const map = { ...MANUAL_UI };
  const pending = [...toTranslate].filter((s) => !map[s] && !cache[cacheKey("lv", "es", s)]);
  if (pending.length) {
    const translated = await translateAll(pending, "lv", "es", {
      cachePath: CACHE_PATH,
      delayMs: 40,
      concurrency: 8,
    });
    Object.assign(map, translated);
  }
  for (const s of toTranslate) {
    if (!map[s]) map[s] = cache[cacheKey("lv", "es", s)] || s;
  }

  map["Kurss"] = "Curso";
  map["Teikumi"] = "Frases";
  map["Galvenā izvēlne"] = "Menú principal";
  map["Darbības vārdi"] = "Verbos";
  map["Izvēlies grupu"] = "Elige un grupo";

  const fixed = walkReplace(esUi, map);
  fixed.__langCode = "es";
  fixed.splash = { title: "Alemán", subtitle: "Aprender alemán" };
  fixed.languageSelect = { title: "Elegir idioma", footer: "Aprender alemán" };
  fixed.app = {
    title: "Alemán • ES-DE",
    subtitle: map[lvCtx.LANGUAGE_UI_STRINGS.app.subtitle] || fixed.app?.subtitle,
    shellLabel: map[lvCtx.LANGUAGE_UI_STRINGS.app.shellLabel] || fixed.app?.shellLabel,
  };
  if (fixed.study?.table) fixed.study.table.native = "ES";
  if (fixed.spelling) fixed.spelling.writeNative = "Escribe en español";

  const content = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(fixed, null, 2)};\n`;
  fs.writeFileSync(path.join(ROOT, "languages/es/ui.js"), content);
  fs.writeFileSync(path.join(ROOT, "www/languages/es/ui.js"), content);
  saveCache(CACHE_PATH, cache);

  // Fix study.translation mismatches
  const vm2 = require("vm");
  for (const lvl of ["a1", "a2", "b1", "b2"]) {
    const rel = `data/es/${lvl}.js`;
    const raw = fs.readFileSync(path.join(ROOT, rel), "utf8");
    const ctx = { window: {} };
    vm2.createContext(ctx);
    vm2.runInContext(raw, ctx);
    const key = Object.keys(ctx.window).find((k) => k.endsWith("_WORDS"));
    let changed = false;
    for (const w of ctx.window[key]) {
      const m = MANUAL_STUDY[w.de];
      if (m && w.study) {
        w.lv = m.lv;
        w.study.translation = m.translation;
        changed = true;
      }
    }
    if (changed) {
      const arrStart = raw.indexOf("[");
      const arrEnd = raw.lastIndexOf("]");
      fs.writeFileSync(path.join(ROOT, rel), raw.slice(0, arrStart) + JSON.stringify(ctx.window[key], null, 2) + raw.slice(arrEnd + 1));
      fs.copyFileSync(path.join(ROOT, rel), path.join(ROOT, rel.replace(/^data\//, "www/data/")));
    }
  }

  // Sync all data/es to www/data/es
  for (const f of fs.readdirSync(path.join(ROOT, "data/es"))) {
    fs.copyFileSync(path.join(ROOT, "data/es", f), path.join(ROOT, "www/data/es", f));
  }

  console.log("UI and remaining fixes applied.");
}

main().catch((e) => { console.error(e); process.exit(1); });
