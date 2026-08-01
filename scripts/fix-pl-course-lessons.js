#!/usr/bin/env node
const fs = require("fs");
const vm = require("vm");
const { translate } = require("google-translate-api-x");

const LV = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const path = "data/pl/courseLessons.js";

async function fixStr(s) {
  if (!s || !LV.test(s)) return s;
  const r = await translate(s, { from: "lv", to: "pl" });
  await new Promise((x) => setTimeout(x, 80));
  return r.text;
}

async function fixHtml(h) {
  let r = h;
  const parts = [...h.matchAll(/>([^<]{3,200})</g)];
  const seen = new Set();
  for (const m of parts) {
    const t = m[1].trim();
    if (!t || seen.has(t) || !LV.test(t)) continue;
    seen.add(t);
    if (t.includes("—")) {
      const bits = t.split("—");
      const tr = [bits[0]];
      for (let i = 1; i < bits.length; i++) tr.push(await fixStr(bits[i].trim()));
      const pl = tr.join("—");
      r = r.split(`>${t}<`).join(`>${pl}<`);
    } else {
      const pl = await fixStr(t);
      r = r.split(`>${t}<`).join(`>${pl}<`);
    }
  }
  return r;
}

async function main() {
  const code = fs.readFileSync(path, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const html = ctx.window.COURSE_LESSON_HTML;
  const data = ctx.window.COURSE_LESSON_DATA;

  for (const k of Object.keys(html)) {
    console.log("html", k);
    html[k] = await fixHtml(html[k]);
  }
  for (const [k, lesson] of Object.entries(data)) {
    if (lesson.legacyHtml) {
      console.log("legacy", k);
      lesson.legacyHtml = await fixHtml(lesson.legacyHtml);
    }
  }

  const bulk = [
    ["teikumi", "zdania"],
    ["Lekcija", "Lekcja"],
    ["Pārtulko", "Przetłumacz"],
    ["Vārdi", "Słowa"],
    ["Izruna", "Wymowa"],
    ["Gramatika", "Gramatyka"],
    ["Dialogi / teikumi", "Dialogi / zdania"],
    ["darbības vārdi tagadnē", "czasowniki w czasie teraźniejszym"],
    ["Darbības vārdi tagadnē", "Czasowniki w czasie teraźniejszym"],
  ];

  let out = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(data, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  for (const [a, b] of bulk) out = out.split(a).join(b);
  fs.writeFileSync(path, out);
  console.log("done");
}

main().catch(console.error);
