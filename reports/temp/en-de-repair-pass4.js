#!/usr/bin/env node
/** Pass 4: remaining 22 confirmed repairs + accent tokens */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ROOT = path.join(__dirname, "..", "..");

function loadArray(relPath, key) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function serializeWords(words, constName) {
  const lines = [`const ${constName} = [`];
  for (const w of words) lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  lines.push("];\n\nwindow.A1_WORDS = A1_WORDS;\n");
  return lines.join("\n");
}

function serializeA2(words) {
  const lines = ["const A2_WORDS = ["];
  for (const w of words) lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  lines.push("];\n\nwindow.A2_WORDS = A2_WORDS;\n");
  return lines.join("\n");
}

function findByStudyId(arr, id) {
  return arr.find((e) => e.study?.id === id);
}

function findByDe(arr, de) {
  return arr.find((e) => e.de === de);
}

function replaceAccentToken(obj, from, to, inDe = false) {
  if (typeof obj === "string") return inDe ? obj : obj === from ? to : obj;
  if (Array.isArray(obj)) return obj.map((t) => (inDe ? t : t === from ? to : t));
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      out[k] = k === "de" ? v : replaceAccentToken(v, from, to, inDe || k === "de");
    }
    return out;
  }
  return obj;
}

function walkReplaceAll(obj, from, to, inDe = false) {
  if (typeof obj === "string") {
    return inDe ? obj : obj === from ? to : obj;
  }
  if (Array.isArray(obj)) return obj.map((x) => walkReplaceAll(x, from, to, inDe));
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const childDe = inDe || k === "de" || k === "de_article" || k === "de_plural";
      out[k] = walkReplaceAll(v, from, to, childDe);
    }
    return out;
  }
  return obj;
}

const enA1 = loadArray("data/en/a1.js", "A1_WORDS");
const enA2 = loadArray("data/en/a2.js", "A2_WORDS");

// --- A1 was tip[0] semicolon + LV fix ---
const was = findByStudyId(enA1, "a1-was");
if (was?.study?.tip?.[0]) {
  was.study.tip[0] =
    "was itself does not change — in German it is always was. In English, choose what according to the part of the sentence.";
}
// FALSE POSITIVE tip[1] — restore exact owner-review current
if (was?.study?.tip?.[1]) {
  was.study.tip[1] =
    "Quick trick: if the question can be answered with 'It's ...', use who; if the answer comes after the verb as a complement, use ko.";
}

// --- A1 was sectionAccents ---
if (was?.study?.sectionAccents) {
  was.study.sectionAccents = replaceAccentToken(was.study.sectionAccents, "kas", "what");
  was.study.sectionAccents = replaceAccentToken(was.study.sectionAccents, "ko", "what");
}

// --- A1 einmal reiz -> once ---
const einmal = findByStudyId(enA1, "a1-einmal");
if (einmal?.study?.sectionAccents) {
  einmal.study.sectionAccents = replaceAccentToken(einmal.study.sectionAccents, "reiz", "once");
}

// --- A1 um lai -> so that ---
const um = findByStudyId(enA1, "a1-um");
if (um?.study?.sectionAccents) {
  um.study.sectionAccents = replaceAccentToken(um.study.sectionAccents, "lai", "so that");
}

// --- A1 ob important (LV leftover in same study) ---
const ob = findByStudyId(enA1, "a1-ob");
if (ob?.study?.important?.[1]) {
  ob.study.important[1] = "Coffee or tea? Use oder, not ob.";
}

// --- A2 dabei ---
const dabei = findByStudyId(enA2, "a2-dabei");
if (dabei?.study) {
  if (dabei.study.tip?.leftBlocks?.[0]) {
    dabei.study.tip.leftBlocks[0].text =
      "If you can say \"I'm with you\" in English, German is often useful.";
  }
  if (dabei.study.important) {
    dabei.study.important.text = "dabei is not the same as only “da”.";
  }
}

// --- A2 dafür ---
const dafuer = findByStudyId(enA2, "a2-dafür");
if (dafuer?.study) {
  if (dafuer.study.tip?.leftBlocks?.[0]) {
    dafuer.study.tip.leftBlocks[0].text =
      "If you can say \"for it\" in English, German is often good for it.";
  }
  if (dafuer.study.important) {
    dafuer.study.important.text = "dafür is not the same as damit.";
    dafuer.study.important.example =
      "dafür = for it / for that. damit = with it or so that. Ich bin dafür = I am for it.";
  }
}

// --- A2 damit ---
const damit = findByStudyId(enA2, "a2-damit");
if (damit?.study?.explanation?.[3]) {
  damit.study.explanation[3] =
    "Damit is not the same as mit dem, although both may look similar in English.";
}

// --- A2 darauf ---
const darauf = findByStudyId(enA2, "a2-darauf");
if (darauf?.study?.tip?.leftBlocks?.[1]) {
  darauf.study.tip.leftBlocks[1].text =
    "If English has \"to it\", German will often have darauf.";
}

// --- A2 decke ---
const decke = findByStudyId(enA2, "a2-decke");
if (decke?.study) {
  if (decke.study.tip?.[1]) {
    decke.study.tip[1] =
      "If talking about a lamp or a room, die Decke usually means the ceiling.";
  }
  if (decke.study.important?.[0]) {
    decke.study.important[0] = "die Decke is not the same as das Dach.";
  }
  if (decke.study.sectionAccents) {
    decke.study.sectionAccents = replaceAccentToken(decke.study.sectionAccents, "griesti", "ceiling");
  }
}

// --- A2 band ---
const band = findByStudyId(enA2, "a2-band");
if (band?.study?.tip?.leftBlocks?.[0]) {
  band.study.tip.leftBlocks[0].text =
    "If the article is das, Band usually means tape, strap or strip.";
}

// --- A2 gerade ---
const gerade = findByStudyId(enA2, "a2-gerade");
if (gerade?.study?.important?.[0]) {
  gerade.study.important[0] =
    "gerade = straight, when talking about shape or direction.";
}

// --- A2 führen vest/braukt accents ---
const fuehren = findByStudyId(enA2, "a2-führen");
if (fuehren?.study) {
  const replaceVest = (obj) => {
    if (typeof obj === "string") return obj === "vest" ? "lead" : obj;
    if (Array.isArray(obj)) return obj.map(replaceVest);
    if (obj && typeof obj === "object") {
      const out = {};
      for (const [k, v] of Object.entries(obj)) {
        out[k] = k === "de" ? v : replaceVest(v);
      }
      return out;
    }
    return obj;
  };
  if (fuehren.study.sectionAccents) {
    fuehren.study.sectionAccents = replaceAccentToken(fuehren.study.sectionAccents, "braukt", "drive");
    fuehren.study.sectionAccents = replaceAccentToken(fuehren.study.sectionAccents, "vest", "lead");
    fuehren.study.sectionAccents = replaceVest(fuehren.study.sectionAccents);
  }
  if (fuehren.study.accents) {
    fuehren.study.accents = replaceAccentToken(fuehren.study.accents, "braukt", "drive");
    fuehren.study.accents = replaceAccentToken(fuehren.study.accents, "vest", "lead");
    fuehren.study.accents = replaceVest(fuehren.study.accents);
  }
}

// --- A2 truncated explanations: apply In Latvian -> In English if still present ---
const truncatedCards = ["a2-absagen", "a2-auswählen", "a2-beinahe", "a2-schuld"];
for (const id of truncatedCards) {
  const entry = findByStudyId(enA2, id);
  if (!entry?.study?.explanation) continue;
  if (typeof entry.study.explanation === "string") {
    entry.study.explanation = entry.study.explanation
      .replace(/In Latvian/g, "In English")
      .replace(/Latvian/g, "English");
  } else if (Array.isArray(entry.study.explanation)) {
    entry.study.explanation = entry.study.explanation.map((s) =>
      String(s).replace(/In Latvian/g, "In English").replace(/Latvian/g, "English")
    );
  }
}

// --- A2 Weste lv field ---
const weste = findByDe(enA2, "Weste");
if (weste) weste.lv = "Vest";

// --- Re-run deterministic repair text fixes from owner JSON ---
const ownerReview = JSON.parse(
  fs.readFileSync(path.join(ROOT, "reports/temp/en-a1-a2-owner-review.json"), "utf8")
);
for (const f of ownerReview.findings) {
  if (f["Final Status"] !== "CONFIRMED REPAIR") continue;
  const cur = f.Current;
  const rec = f["Verified Recommendation"];
  if (!cur || !rec || rec === "No change" || rec.startsWith("Restore") || rec.startsWith("Add ")) continue;
  if (rec.startsWith("Replace with")) continue;
  if (rec.length < 15) continue;
  // Skip truncated identical-prefix recommendations
  if (rec.length < 120 && cur.startsWith(rec.slice(0, 50))) continue;
  // Skip still-LV recommendations (handled above with proper EN)
  if (/Ja runa|Ja artikuls|gerade = taisns|par to \/ tam/.test(rec)) continue;

  let entry = findByStudyId(enA1, f["Card ID"]) || findByStudyId(enA2, f["Card ID"]);
  if (!entry && f.DE) entry = findByDe(enA1, f.DE) || findByDe(enA2, f.DE);
  if (!entry) continue;

  if (entry.study) {
    entry.study = walkReplaceAll(entry.study, cur, rec);
  } else {
    const before = JSON.stringify(entry);
    entry = walkReplaceAll(entry, cur, rec);
    if (JSON.stringify(entry) !== before) {
      // entry is const reference - already mutated
    }
  }
}

fs.writeFileSync(path.join(ROOT, "data/en/a1.js"), serializeWords(enA1, "A1_WORDS"));
fs.writeFileSync(path.join(ROOT, "data/en/a2.js"), serializeA2(enA2));
fs.writeFileSync(path.join(ROOT, "www/data/en/a1.js"), serializeWords(enA1, "A1_WORDS"));
fs.writeFileSync(path.join(ROOT, "www/data/en/a2.js"), serializeA2(enA2));
console.log("pass4 complete");
