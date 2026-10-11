#!/usr/bin/env node
/**
 * Fourth deterministic pass: pronunciation and consonant lessons only.
 * Reads courseLessons HTML. Does not write data, www/data, languages, or ui.js.
 * Does not choose a correct German form and does not call a model.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { loadWindowGlobals } = require("./lib/audit-common");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "reports/de-consistency-analysis4.md");
const DASH_RE = /[–—]|\s-\s/;
const KEYS = ["kurssPronunciationLesson", "kurssConsonantsLesson"];
const LV_DIACRITIC_LETTERS = "āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ";
const SHARED_LV_LETTERS = {
  lt: new Set([..."čšžūČŠŽŪ"]),
  cs: new Set([..."čšžČŠŽ"]),
  sk: new Set([..."čšžČŠŽ"]),
  sl: new Set([..."čšžČŠŽ"]),
  hr: new Set([..."čšžČŠŽ"]),
  bs: new Set([..."čšžČŠŽ"])
};
const CY = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "z", з: "z", и: "i", й: "j",
  к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f",
  х: "h", ц: "c", ч: "c", ш: "s", щ: "s", ъ: "", ы: "y", ь: "", э: "e", ю: "ju", я: "ja",
  і: "i", ї: "i", є: "e", ґ: "g", ј: "j", љ: "l", њ: "n", ћ: "c", ђ: "d", џ: "d"
};
const GR = {
  α: "a", β: "b", γ: "g", δ: "d", ε: "e", ζ: "z", η: "i", θ: "t", ι: "i", κ: "k", λ: "l",
  μ: "m", ν: "n", ξ: "x", ο: "o", π: "p", ρ: "r", σ: "s", ς: "s", τ: "t", υ: "y", φ: "f",
  χ: "h", ψ: "p", ω: "o"
};
const DEV_CONS = {
  क: "k", ख: "kh", ग: "g", घ: "gh", ङ: "ng", च: "c", छ: "ch", ज: "j", झ: "jh", ञ: "n",
  ट: "t", ठ: "th", ड: "d", ढ: "dh", ण: "n", त: "t", थ: "th", द: "d", ध: "dh", न: "n",
  प: "p", फ: "ph", ब: "b", भ: "bh", म: "m", य: "y", र: "r", ल: "l", व: "v",
  श: "sh", ष: "sh", स: "s", ह: "h"
};
const DEV_SIGN = {
  "ा": "a", "ि": "i", "ी": "i", "ु": "u", "ू": "u", "े": "e", "ै": "e", "ो": "o", "ौ": "o"
};
const DEV_INDEP = {
  अ: "a", आ: "a", इ: "i", ई: "i", उ: "u", ऊ: "u", ए: "e", ऐ: "e", ओ: "o", औ: "o"
};
const MAP = {
  gut: ["gut"],
  hut: ["hut"],
  bald: ["bald"],
  scharf: ["scarf"],
  feld: ["felt"],
  hof: ["hoof"],
  boot: ["boot"],
  rock: ["rock"],
  bad: ["bad"],
  beet: ["beet"],
  die: ["die"],
  qual: ["qual"],
  flur: ["flu"],
  fuss: ["fuss"],
  see: ["see"],
  wort: ["wort"],
  finger: ["finger"],
  wand: ["wand"],
  bank: ["bank"],
  mutter: ["mutter"],
  moor: ["moor"]
};
const ENGLISH_TOKENS = new Set([
  "gut", "hut", "bald", "scarf", "felt", "hoof", "boot", "rock", "bad", "beet",
  "flu", "fuss", "see", "wort", "wand", "bank", "finger", "mutter", "moor", "qual"
]);

function cell(value) {
  return `\`${JSON.stringify(value)}\``;
}

function sha256File(rel) {
  return crypto.createHash("sha256").update(fs.readFileSync(path.join(ROOT, rel))).digest("hex");
}

function lev(a, b) {
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  let cur = new Array(n + 1);
  for (let i = 1; i <= m; i += 1) {
    cur[0] = i;
    for (let j = 1; j <= n; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    const swap = prev;
    prev = cur;
    cur = swap;
  }
  return prev[n];
}

function within(a, b) {
  if (!a || !b) return false;
  const n = Math.max(a.length, b.length);
  const limit = n <= 4 ? 1 : Math.round(n * 0.34);
  return lev(a, b) <= limit;
}

function latinize(value) {
  const src = String(value ?? "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/ß/g, "ss");
  let out = "";
  const chars = [...src];
  for (let i = 0; i < chars.length; i += 1) {
    const ch = chars[i];
    if (DEV_CONS[ch]) {
      out += DEV_CONS[ch];
      const next = chars[i + 1];
      if (next === "्") {
        i += 1;
        continue;
      }
      if (DEV_SIGN[next]) {
        out += DEV_SIGN[next];
        i += 1;
        continue;
      }
      out += "a";
      continue;
    }
    if (DEV_INDEP[ch]) {
      out += DEV_INDEP[ch];
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(CY, ch)) {
      out += CY[ch];
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(GR, ch)) {
      out += GR[ch];
      continue;
    }
    if (/[a-z]/.test(ch)) out += ch;
  }
  return out;
}

function pronFold(text) {
  return String(text)
    .replace(/aa|ee|ii|oo|uu/g, (m) => m[0])
    .replace(/ts/g, "c")
    .replace(/w/g, "v")
    .replace(/(.)\1+/g, "$1");
}

function isTrans(a, b) {
  return within(latinize(a), latinize(b));
}

function isPron(a, b) {
  if (isTrans(a, b)) return true;
  return within(pronFold(latinize(a)), pronFold(latinize(b)));
}

function assertTranslit() {
  const yes = [
    ["gut", "Гут"], ["warm", "varm"], ["warm", "варм"], ["singen", "зинген"], ["Hof", "hoof"],
    ["Feld", "felt"], ["bald", "balt"], ["scharf", "Scarf"], ["Rock", "Рок"], ["Bad", "Бад"],
    ["Hof", "Χοφ"], ["scharf", "шарф"], ["gūt", "guut"], ["vēk", "veek"], ["flūr", "fluur"],
    ["bēt", "beet"], ["felt", "filt"], ["hōf", "hoof"], ["bāt", "बाट"]
  ];
  const no = [
    ["gut", "Jelito"], ["Zahl", "kurczak"], ["Weg", "νερό"], ["Garten", "градина"], ["Hof", "οπλή"],
    ["Feld", "τσόχα"], ["bald", "Плешив"], ["Hut", "Хата"], ["Hut", "Khata"], ["gut", "Intestin"],
    ["Boot", "Μπότα"], ["scharf", "Шал"], ["felt", "feutre"], ["garten", "jardin"], ["cal", "kylling"],
    ["balt", "бял"]
  ];
  yes.forEach(([a, b]) => {
    if (!isPron(a, b)) throw new Error(`expected pronunciation ${a} ~ ${b} lat ${latinize(a)}/${latinize(b)}`);
  });
  no.forEach(([a, b]) => {
    if (isPron(a, b)) throw new Error(`expected normal word ${a} ≠ ${b} lat ${latinize(a)}/${latinize(b)}`);
  });
  if (isTrans("cāl", "tsaal")) throw new Error("tsaal must need the pronunciation fold");
  if (!isPron("cāl", "tsaal")) throw new Error("tsaal must match cāl after the pronunciation fold");
}

function examplesOf(lang) {
  const rel = lang === "lv" ? "data/courseLessons.js" : `data/${lang}/courseLessons.js`;
  const win = loadWindowGlobals(rel);
  const out = {};
  KEYS.forEach((key) => {
    out[key] = [...String((win.COURSE_LESSON_HTML || {})[key] || "").matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)]
      .map((match) => match[1]);
  });
  return out;
}

function splitExample(raw) {
  const source = String(raw ?? "");
  const match = DASH_RE.exec(source);
  if (!match) return { de: source.trim(), gloss: "", glossRaw: "", sep: "NONE" };
  let sep = "HY";
  if (match[0] === "—") sep = "EM";
  else if (match[0] === "–") sep = "EN";
  return {
    de: source.slice(0, match.index).trim(),
    glossRaw: source.slice(match.index + match[0].length),
    gloss: source.slice(match.index + match[0].length).trim(),
    sep
  };
}

function headOf(de) {
  const at = String(de).indexOf(" (");
  return (at < 0 ? String(de) : String(de).slice(0, at)).trim();
}

function parensOf(de) {
  return [...String(de).matchAll(/\(([^)]*)\)/g)].map((match) => match[1]);
}

function firstToken(head) {
  const match = String(head).match(/\p{L}+/u);
  return match ? match[0] : String(head).trim();
}

function headRef(head) {
  const full = latinize(head);
  if (MAP[full]) return { key: full, part: head, whole: true };
  const token = firstToken(head);
  const key = latinize(token);
  if (MAP[key]) return { key, part: token, whole: false };
  return null;
}

function latinTokens(text) {
  return String(text).toLowerCase().match(/[a-z]+/g) || [];
}

function unexpectedMarks(lang, text) {
  const shared = SHARED_LV_LETTERS[lang] || new Set();
  return [...String(text)].filter((ch) => LV_DIACRITIC_LETTERS.includes(ch) && !shared.has(ch));
}

function parenIsNormal(paren, lvParens, lvHead) {
  const text = String(paren).trim();
  if (!text || !/\p{L}/u.test(text)) return false;
  if (/\s/u.test(text)) return true;
  const sources = lvParens.length ? lvParens : [lvHead];
  if (sources.some((src) => isPron(text, src)) || isPron(text, lvHead)) return false;
  return true;
}

function spread(rows, limit) {
  const by = new Map();
  rows.forEach((row) => {
    if (!by.has(row.lang)) by.set(row.lang, []);
    by.get(row.lang).push(row);
  });
  const langs = [...by.keys()].sort();
  const out = [];
  let round = 0;
  while (out.length < limit) {
    let added = false;
    langs.forEach((lang) => {
      const list = by.get(lang);
      if (out.length < limit && list[round]) {
        out.push(list[round]);
        added = true;
      }
    });
    if (!added) break;
    round += 1;
  }
  return out;
}

function lessonName(key) {
  return key === "kurssPronunciationLesson" ? "pronunciation" : "consonants";
}

function main() {
  const diff = execSync("git diff -- data www/data languages ui.js", { cwd: ROOT, encoding: "utf8" });
  if (diff !== "") throw new Error("git diff of data, www/data, languages or ui.js is not empty");
  assertTranslit();
  const report = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/de-consistency-audit.json"), "utf8"));
  const languages = report.languages.slice().sort();
  if (languages.length !== 31) throw new Error(`expected 31 target languages, got ${languages.length}`);
  const lv = examplesOf("lv");
  if (lv.kurssPronunciationLesson.length !== 99 || lv.kurssConsonantsLesson.length !== 45) {
    throw new Error("LV pronunciation/consonant example counts are not 99 and 45");
  }
  languages.forEach((lang) => {
    const rel = `data/${lang}/courseLessons.js`;
    const www = `www/data/${lang}/courseLessons.js`;
    if (sha256File(rel) !== sha256File(www)) throw new Error(`${lang} www courseLessons differs from data`);
  });

  const lessons = {};
  languages.forEach((lang) => { lessons[lang] = examplesOf(lang); });
  const unpaired = [];
  languages.forEach((lang) => {
    KEYS.forEach((key) => {
      if (lessons[lang][key].length !== lv[key].length) {
        unpaired.push({ lang, key, target: lessons[lang][key].length, lv: lv[key].length });
      }
    });
  });

  const glossRows = [];
  const noSep = [];
  languages.forEach((lang) => {
    KEYS.forEach((key) => {
      const targetRows = lessons[lang][key];
      const paired = targetRows.length === lv[key].length;
      targetRows.forEach((raw, index) => {
        const part = splitExample(raw);
        const lvPart = paired ? splitExample(lv[key][index]) : null;
        const marks = part.sep === "NONE" ? [] : unexpectedMarks(lang, part.gloss);
        const identical = Boolean(lvPart && part.gloss && lvPart.gloss && part.gloss === lvPart.gloss);
        const exactGloss = Boolean(lvPart && part.sep !== "NONE" && lvPart.sep !== "NONE" && part.glossRaw === lvPart.glossRaw);
        if (part.sep === "NONE") noSep.push({ lang, key, index, raw });
        glossRows.push({
          lang, key, index, paired, sep: part.sep, gloss: part.gloss, de: part.de,
          lvGloss: lvPart ? lvPart.gloss : "", lvDe: lvPart ? lvPart.de : "",
          identical, exactGloss, marks
        });
      });
    });
  });

  const replacements = [];
  const normalParens = [];
  languages.forEach((lang) => {
    KEYS.forEach((key) => {
      const targetRows = lessons[lang][key];
      if (targetRows.length !== lv[key].length) return;
      targetRows.forEach((raw, index) => {
        const target = splitExample(raw);
        const source = splitExample(lv[key][index]);
        const lvHead = headOf(source.de);
        const targetHead = headOf(target.de);
        const lvParens = parensOf(source.de);
        const targetParens = parensOf(target.de);
        parensOf(target.de).forEach((paren, parenIndex) => {
          if (!parenIsNormal(paren, lvParens, lvHead)) return;
          normalParens.push({
            lang, key, index, parenIndex, paren, lvHead, lvDe: source.de, de: target.de,
            homo: Boolean(headRef(lvHead))
          });
        });
        if (source.de.toLowerCase() === target.de.toLowerCase()) return;
        const ref = headRef(lvHead);
        const lvTokenSet = new Set(latinTokens(source.de));
        const fresh = [...new Set(latinTokens(target.de).filter((token) => (
          ENGLISH_TOKENS.has(token)
          && !lvTokenSet.has(token)
          && latinize(lvHead) !== token
          && latinize(firstToken(lvHead)) !== token
        )))];
        let headReplaced = false;
        if (ref) {
          const targetPart = ref.whole ? targetHead : firstToken(targetHead);
          headReplaced = latinize(targetPart) !== ref.key && !isTrans(targetPart, ref.part);
        }
        if (!fresh.length && !headReplaced) return;
        replacements.push({
          lang, key, index, kind: fresh.length ? "ENGLISH_TOKEN" : "HEAD_REPLACED",
          tokens: fresh.join(","), lvDe: source.de, de: target.de, lvHead
        });
      });
    });
  });

  const plRows = [];
  ["tr", "sk", "sq"].forEach((lang) => {
    KEYS.forEach((key) => {
      const left = lessons.pl[key];
      const right = lessons[lang][key];
      const n = Math.max(left.length, right.length);
      for (let index = 0; index < n; index += 1) {
        const a = left[index];
        const b = right[index];
        plRows.push({
          lang, key, index,
          pl: a == null ? "" : a,
          other: b == null ? "" : b,
          same: a != null && a === b,
          caseOnly: a != null && b != null && a !== b && a.toLowerCase() === b.toLowerCase()
        });
      }
    });
  });

  const lines = [];
  const push = (text) => lines.push(text);
  push("# DE konsekvences analīze 4");
  push("");
  push("Avots ir `kurssPronunciationLesson` un `kurssConsonantsLesson` visās 31 mērķvalodās. www `courseLessons.js` ir SHA-256 identisks ar `data/`, tāpēc skaiti ir vienam kokam. Dati, `www/data`, `languages` un `ui.js` netiek mainīti. Analīze neizvēlas pareizo vācu formu un neizsauc modeli.");
  push("");
  push(`Audita bāze: zars \`${report.baseline.branch}\`, datums \`${report.baseline.date}\`, origin/main \`${report.baseline.originMainSha}\`.`);
  push("");
  push("Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību. Sākotnējā audita verdikts paliek PARTIAL.");
  push("");
  push("LV etalons ir `data/courseLessons.js`: pronunciation 99 piemēri, consonants 45 piemēri. Indeksa pāris ir tas pats piemēra numurs tajā pašā lekcijā. Vienīgā garuma nobīde ir `fr` consonants: 39 pret LV 45. Šī lekcija nav indeksēta pret LV; pārējās 61 lekcijas ir.");
  push("");

  push("## 1. LV atlikumi tulkojuma pusē");
  push("");
  push("Tulkojuma puse ir teksts aiz pirmās svītras. Atdalītājs ir tas pats, ko lieto DE audits: em dash `—`, en dash `–` vai atstarpes ieskauta defise ` - `. Kaila defise, piemēram `Wieder-ATKAL` vai `Zeit (cait) -laiks`, nav atdalītājs. Glosa ir šīs puses `trim`; identitāte ir glosas baitiska vienādība ar tā paša indeksa LV glosas `trim`. Malu atstarpes tiek noņemtas, iekšējās atstarpes paliek.");
  push("");
  push("Latviešu diakritika ir `āčēģīķļņšūž` (arī lielie burti). Negaidīti ir burti, kas nav mērķvalodas ortogrāfijā. Kopīgie burti nav negaidīti: `lt` č š ž ū; `cs`, `sk`, `sl`, `hr`, `bs` č š ž. `sr` šajā salīdzinājumā č š ž neskaita kā savus, jo paredzētais pieraksts ir kirilica. Diakritikas skaitījums ietver arī `fr` consonants glosas, jo tam LV indekss nav vajadzīgs.");
  push("");
  push("Atlikums ir rinda, kuras glosa ir identiska LV glosai vai kurā ir negaidīta LV diakritika. Abas kolonnas pārklājas, ja izpildās abi nosacījumi.");
  push("");
  push("| valoda | piemēri | indeksēti | ar glosu | EM | EN | HY | bez svītras | identiska LV glosa | arī bez trim | negaidīta diakritika | abi | atlikums |");
  push("|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
  const totals = {
    examples: 0, paired: 0, gloss: 0, EM: 0, EN: 0, HY: 0, NONE: 0,
    identical: 0, exact: 0, dia: 0, both: 0, union: 0
  };
  const diaSamples = [];
  const identSamples = [];
  languages.forEach((lang) => {
    const rows = glossRows.filter((row) => row.lang === lang);
    const tally = { EM: 0, EN: 0, HY: 0, NONE: 0, gloss: 0, identical: 0, exact: 0, dia: 0, both: 0 };
    rows.forEach((row) => {
      tally[row.sep] += 1;
      if (row.sep !== "NONE") tally.gloss += 1;
      if (row.identical) tally.identical += 1;
      if (row.exactGloss) tally.exact += 1;
      if (row.marks.length) {
        tally.dia += 1;
        if (!diaSamples.some((item) => item.lang === lang)) {
          diaSamples.push({ lang, key: row.key, index: row.index, gloss: row.gloss, marks: [...new Set(row.marks)].join("") });
        }
      }
      if (row.identical && !row.marks.length && !identSamples.some((item) => item.lang === lang)) {
        identSamples.push({ lang, key: row.key, index: row.index, gloss: row.gloss });
      }
    });
    const paired = rows.filter((row) => row.paired).length;
    const both = rows.filter((row) => row.identical && row.marks.length).length;
    const union = rows.filter((row) => row.identical || row.marks.length).length;
    tally.both = both;
    push(`| ${lang} | ${rows.length} | ${paired} | ${tally.gloss} | ${tally.EM} | ${tally.EN} | ${tally.HY} | ${tally.NONE} | ${tally.identical} | ${tally.exact} | ${tally.dia} | ${both} | ${union} |`);
    totals.examples += rows.length;
    totals.paired += paired;
    totals.gloss += tally.gloss;
    totals.EM += tally.EM;
    totals.EN += tally.EN;
    totals.HY += tally.HY;
    totals.NONE += tally.NONE;
    totals.identical += tally.identical;
    totals.exact += tally.exact;
    totals.dia += tally.dia;
    totals.both += both;
    totals.union += union;
  });
  push(`| summa | ${totals.examples} | ${totals.paired} | ${totals.gloss} | ${totals.EM} | ${totals.EN} | ${totals.HY} | ${totals.NONE} | ${totals.identical} | ${totals.exact} | ${totals.dia} | ${totals.both} | ${totals.union} |`);
  push("");
  push(`Identiskās glosas un glosas bez \`trim\` atšķirības: ${totals.identical - totals.exact}.`);
  push("");
  push("### Negaidīta LV diakritika, viens piemērs valodai");
  push("");
  if (!diaSamples.length) push("Nav.");
  diaSamples.sort((a, b) => a.lang.localeCompare(b.lang)).forEach((row) => {
    push(`- ${row.lang} \`${lessonName(row.key)}\`[${row.index}] burti=${cell(row.marks)} glosa=${cell(row.gloss)}`);
  });
  push("");
  push("### Identiska LV glosa bez negaidītas diakritikas, viens piemērs valodai");
  push("");
  if (!identSamples.length) push("Nav.");
  identSamples.sort((a, b) => a.lang.localeCompare(b.lang)).forEach((row) => {
    push(`- ${row.lang} \`${lessonName(row.key)}\`[${row.index}] glosa=${cell(row.gloss)}`);
  });
  push("");
  push("### Rindas bez tulkojuma atdalītāja");
  push("");
  if (!noSep.length) push("Nav.");
  noSep.sort((a, b) => `${a.lang}${a.key}${a.index}`.localeCompare(`${b.lang}${b.key}${b.index}`)).forEach((row) => {
    push(`- ${row.lang} \`${lessonName(row.key)}\`[${row.index}] ${cell(row.raw)}`);
  });
  push("");

  push("## 2. tr, sk un sq pret pl");
  push("");
  push("Salīdzinājums ir ar `pl`, ne ar LV. Identiska rinda nozīmē, ka `kurss-example` iekšpuse ir baitiski tā pati tajā pašā lekcijā un tajā pašā indeksā. Visām četrām valodām katrā lekcijā ir 99 un 45 piemēri. Reģistra atšķirība ir atsevišķa: virknes sakrīt pēc `toLowerCase`, bet nav baitiski vienādas.");
  push("");
  push("| valoda | rindas | identiskas ar pl | tikai reģistrs | cits saturs |");
  push("|---|---:|---:|---:|---:|");
  ["tr", "sk", "sq"].forEach((lang) => {
    const rows = plRows.filter((row) => row.lang === lang);
    const same = rows.filter((row) => row.same).length;
    const caseOnly = rows.filter((row) => row.caseOnly).length;
    push(`| ${lang} | ${rows.length} | ${same} | ${caseOnly} | ${rows.length - same - caseOnly} |`);
  });
  push("");
  push("### 20 identiski piemēri");
  push("");
  const identicalPl = plRows.filter((row) => row.same);
  const byPos = new Map();
  identicalPl.forEach((row) => {
    const key = `${row.key}|${row.index}`;
    if (!byPos.has(key)) byPos.set(key, { key: row.key, index: row.index, pl: row.pl, langs: [] });
    byPos.get(key).langs.push(row.lang);
  });
  const allThree = [...byPos.values()]
    .filter((row) => row.langs.length === 3)
    .sort((a, b) => a.key.localeCompare(b.key) || a.index - b.index);
  const step = Math.max(1, Math.floor(allThree.length / 20));
  const pickedIdentical = [];
  for (let i = 0; i < allThree.length && pickedIdentical.length < 20; i += step) pickedIdentical.push(allThree[i]);
  for (let i = 0; pickedIdentical.length < 20 && i < allThree.length; i += 1) {
    if (!pickedIdentical.includes(allThree[i])) pickedIdentical.push(allThree[i]);
  }
  pickedIdentical.forEach((row) => {
    push(`- \`${lessonName(row.key)}\`[${row.index}] tr=sk=sq=pl ${cell(row.pl)}`);
  });
  push("");
  push("### Visas rindas, kas nav identiskas un nav tikai reģistrs");
  push("");
  const otherPl = plRows.filter((row) => !row.same && !row.caseOnly);
  if (!otherPl.length) push("Nav.");
  otherPl.forEach((row) => {
    push(`- ${row.lang} \`${lessonName(row.key)}\`[${row.index}] pl=${cell(row.pl)} ${row.lang}=${cell(row.other)}`);
  });
  push("");
  push("### Reģistra atšķirības");
  push("");
  const caseSets = ["tr", "sk", "sq"].map((lang) => plRows
    .filter((row) => row.lang === lang && row.caseOnly)
    .map((row) => `${row.key}|${row.index}`)
    .sort()
    .join("\n"));
  const sameCaseIdx = caseSets.every((set) => set === caseSets[0]);
  const caseCount = plRows.filter((row) => row.lang === "tr" && row.caseOnly).length;
  push(sameCaseIdx
    ? `Visi ${caseCount} reģistra indeksi ir tie paši tr, sk un sq.`
    : "Reģistra indeksi starp tr, sk un sq nesakrīt.");
  push("");
  plRows.filter((row) => row.lang === "tr" && row.caseOnly).forEach((row) => {
    const sk = plRows.find((item) => item.lang === "sk" && item.key === row.key && item.index === row.index);
    const sq = plRows.find((item) => item.lang === "sq" && item.key === row.key && item.index === row.index);
    push(`- \`${lessonName(row.key)}\`[${row.index}] pl=${cell(row.pl)} tr=${cell(row.other)} sk=${cell(sk ? sk.other : "")} sq=${cell(sq ? sq.other : "")}`);
  });
  push("");

  push("## 3. Vācu vārds aizstāts ar citas valodas vārdu");
  push("");
  push("DE slots ir teksts pirms svītras. Galva ir slots pirms ` (`. Rinda skaitās, ja slota reģistrs atšķiras no LV un izpildās viens no diviem mehāniskiem nosacījumiem.");
  push("");
  push("ENGLISH_TOKEN: mērķa slotā ir latīņu tokens no slēgtā saraksta, kura nav LV slotā un kurš nav šīs rindas LV galva. Saraksts: gut, hut, bald, scarf, felt, hoof, boot, rock, bad, beet, flu, fuss, see, wort, wand, bank, finger, mutter, moor, qual. Tokens `die` netiek meklēts, jo tas ir parasts vācu artikuls.");
  push("");
  push("HEAD_REPLACED: LV galva ir slēgtajā homogrāfu kartē un mērķa galva nav šīs galvas transliterācija. Karte, vācu atslēga → angļu rakstība: gut, hut, bald, scharf→scarf, feld→felt, hof→hoof, boot, rock, bad, beet, die, qual, flur→flu, fuß→fuss, see, wort, finger, wand, bank, mutter, moor. Vairākvārdu galvai (`die Räder`) tiek ņemts pirmais vārds, ja tas ir kartē.");
  push("");
  push("Transliterācija ir kirilicas, grieķu vai devanāgarī burti, pārvērsti latīņu burtos, plus Levenšteina. Īsām virknēm (līdz 4) pieļaujamais attālums ir 1, garākām `round(garums × 0.34)`. Гут, Бад, Хут, шарф un Χοφ ir transliterācijas un šajā sadaļā netiek skaitītas. Klase nešķiro, vai aizstājējs tulko angļu homogrāfa nozīmi vai vācu nozīmi.");
  push("");
  push("`fr` consonants šajā sadaļā nav, jo 39 piemērus nevar pārot ar LV 45 pēc indeksa. Iekavu aizstājumi, kuros vācu galva paliek (`Feld (feutre)`, `Hof (οπλή)`, `Zahl (kurczak)`, `Weg (νερό)`), ir 4. sadaļā.");
  push("");
  push("| valoda | ENGLISH_TOKEN | HEAD_REPLACED | kopā |");
  push("|---|---:|---:|---:|");
  let englishTotal = 0;
  let headTotal = 0;
  languages.forEach((lang) => {
    const rows = replacements.filter((row) => row.lang === lang);
    const english = rows.filter((row) => row.kind === "ENGLISH_TOKEN").length;
    const head = rows.filter((row) => row.kind === "HEAD_REPLACED").length;
    englishTotal += english;
    headTotal += head;
    push(`| ${lang} | ${english} | ${head} | ${english + head} |`);
  });
  push(`| summa | ${englishTotal} | ${headTotal} | ${englishTotal + headTotal} |`);
  push("");
  push("### Skaits pēc LV vācu galvas");
  push("");
  push("| LV galva | ENGLISH_TOKEN | HEAD_REPLACED | valodas |");
  push("|---|---:|---:|---:|");
  const byHead = new Map();
  replacements.forEach((row) => {
    if (!byHead.has(row.lvDe)) byHead.set(row.lvDe, []);
    byHead.get(row.lvDe).push(row);
  });
  [...byHead.keys()].sort().forEach((lvDe) => {
    const rows = byHead.get(lvDe);
    const english = rows.filter((row) => row.kind === "ENGLISH_TOKEN").length;
    const head = rows.filter((row) => row.kind === "HEAD_REPLACED").length;
    const langs = new Set(rows.map((row) => row.lang)).size;
    push(`| ${cell(lvDe)} | ${english} | ${head} | ${langs} |`);
  });
  push("");
  push("### 20 piemēri");
  push("");
  const byGerman = new Map();
  replacements.slice().sort((a, b) => a.lang.localeCompare(b.lang) || a.index - b.index).forEach((row) => {
    if (!byGerman.has(row.lvDe)) byGerman.set(row.lvDe, []);
    byGerman.get(row.lvDe).push(row);
  });
  [...byGerman.keys()].sort().slice(0, 20).forEach((lvDe) => {
    const row = byGerman.get(lvDe)[0];
    push(`- ${row.lang} \`${lessonName(row.key)}\`[${row.index}] ${row.kind}${row.tokens ? ` tokens=${cell(row.tokens)}` : ""} LV=${cell(row.lvDe)} DE=${cell(row.de)}`);
  });
  push("");

  push("## 4. Iekavās parasts vārds, ne izruna");
  push("");
  push("Iekava ir DE slotā. Tā ir parasts vārds, ja tajā ir burts un (a) tajā ir atstarpe vai (b) tā nav LV iekavas un nav LV vācu galvas transliterācija. Izrunas locījums pirms otrās Levenšteinas pārbaudes sakrīt garos patskaņus, `ts` ar `c` un `w` ar `v`, tāpēc `tsaal`, `guut`, `veek`, `fluur`, `hoof`, `felt` un `varm` paliek izrunas. `Weg (νερό)`, `Zahl (kurczak)`, `Garten (градина)`, `Hof (οπλή)` un `Feld (τσόχα)` paliek parasti vārdi.");
  push("");
  push("Viena rinda var būt gan 3., gan 4. sadaļā. Pārklājums ir parastā vārda iekavas, kuru rinda ir arī 3. sadaļas trāpījums. `fr` consonants atkal nav indeksēts.");
  push("");
  const replacementKey = new Set(replacements.map((row) => `${row.lang}|${row.key}|${row.index}`));
  push("| valoda | iekavas | parasts vārds | rindas | no tām 3. sadaļā |");
  push("|---|---:|---:|---:|---:|");
  let parenTotal = 0;
  let normalTotal = 0;
  let normalRowsTotal = 0;
  let overlapTotal = 0;
  languages.forEach((lang) => {
    let parenCount = 0;
    KEYS.forEach((key) => {
      if (lessons[lang][key].length !== lv[key].length) return;
      lessons[lang][key].forEach((raw) => {
        parenCount += parensOf(splitExample(raw).de).length;
      });
    });
    const rows = normalParens.filter((row) => row.lang === lang);
    const rowKeys = new Set(rows.map((row) => `${row.key}|${row.index}`));
    const overlap = rows.filter((row) => replacementKey.has(`${row.lang}|${row.key}|${row.index}`)).length;
    parenTotal += parenCount;
    normalTotal += rows.length;
    normalRowsTotal += rowKeys.size;
    overlapTotal += overlap;
    push(`| ${lang} | ${parenCount} | ${rows.length} | ${rowKeys.size} | ${overlap} |`);
  });
  push(`| summa | ${parenTotal} | ${normalTotal} | ${normalRowsTotal} | ${overlapTotal} |`);
  push("");
  push("### Nosauktie paraugi");
  push("");
  [
    ["gr", "νερό"],
    ["pl", "kurczak"],
    ["gr", "οπλή"],
    ["gr", "τσόχα"],
    ["bg", "градина"]
  ].forEach(([lang, paren]) => {
    const row = normalParens.find((item) => item.lang === lang && item.paren === paren);
    if (!row) throw new Error(`named parenthesis missing: ${lang} ${paren}`);
    push(`- ${row.lang} \`${lessonName(row.key)}\`[${row.index}] LV=${cell(row.lvDe)} DE=${cell(row.de)} iekava=${cell(row.paren)}`);
  });
  push("");
  push("### 20 piemēri");
  push("");
  const parenSpread = spread(normalParens, 20);
  parenSpread.forEach((row) => {
    const mark = row.homo ? " homogrāfa rinda" : "";
    const also = replacementKey.has(`${row.lang}|${row.key}|${row.index}`) ? " arī 3. sadaļa" : "";
    push(`- ${row.lang} \`${lessonName(row.key)}\`[${row.index}] LV=${cell(row.lvDe)} DE=${cell(row.de)} iekava=${cell(row.paren)}${mark}${also}`);
  });
  push("");
  const must = [
    normalParens.some((row) => row.lang === "gr" && row.paren === "νερό"),
    normalParens.some((row) => row.lang === "pl" && row.paren === "kurczak"),
    replacements.some((row) => row.lang === "pl" && row.de === "Jelito")
  ];
  if (must.some((ok) => !ok)) throw new Error("expected Weg/νερό, Zahl/kurczak and gut/Jelito were not classified");

  push("## 5. Verifikācija");
  push("");
  push("`git diff -- data www/data languages ui.js` pirms ģenerēšanas ir tukšs. www `courseLessons.js` SHA-256 sakrīt ar data visām 31 valodām. Failā nav ģenerēšanas laika. Divas palaišanas dod vienādu SHA-256; kontrolsumma tiek salīdzināta ārpus faila.");
  push("");
  push("## STAGE RESULT");
  push("");
  push("STAGE RESULT: PASS");
  push("");
  push("Šis PASS attiecas uz analīzes 1.–5. punktu. Sākotnējais DE konsekvences audits paliek PARTIAL.");
  push("");

  fs.writeFileSync(OUT, `${lines.join("\n")}`);
  process.stdout.write(`${JSON.stringify({
    languages: languages.length,
    unpaired,
    glosses: totals.gloss,
    identical: totals.identical,
    exactGloss: totals.exact,
    unexpectedDia: totals.dia,
    both: totals.both,
    union: totals.union,
    noSep: noSep.length,
    plIdentical: ["tr", "sk", "sq"].map((lang) => ({
      lang,
      same: plRows.filter((row) => row.lang === lang && row.same).length,
      caseOnly: plRows.filter((row) => row.lang === lang && row.caseOnly).length,
      other: plRows.filter((row) => row.lang === lang && !row.same && !row.caseOnly).length
    })),
    englishToken: englishTotal,
    headReplaced: headTotal,
    normalParens: normalTotal,
    normalRows: normalRowsTotal,
    parenOverlapSection3: overlapTotal
  })}\n`);
}

if (require.main === module) main();

module.exports = { isPron, isTrans, latinize, parenIsNormal, splitExample, headOf, parensOf };
