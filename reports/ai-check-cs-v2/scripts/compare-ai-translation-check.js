#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const VENDORS = [
  { name: "Anthropic", dir: "ai-anthropic", index: 0 },
  { name: "Gemini", dir: "ai-gemini", index: 1 },
  { name: "ChatGPT", dir: "ai-chatgpt", index: 2 },
];

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const source = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (char === '"') {
        if (source[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          quoted = false;
        }
      } else {
        field += char;
      }
      continue;
    }
    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((item) => item.some((cell) => cell !== ""));
}

function rowsToObjects(text) {
  const rows = parseCsv(text);
  if (!rows.length) return [];
  const header = rows[0].map((cell) => cell.trim());
  return rows.slice(1).map((row) => {
    const object = {};
    header.forEach((key, index) => {
      object[key] = row[index] === undefined ? "" : row[index];
    });
    return object;
  });
}

function readCsv(file) {
  return rowsToObjects(fs.readFileSync(file, "utf8"));
}

function versionFor(batchNumber, vendorIndex) {
  return ["A", "B", "C"][(vendorIndex + batchNumber - 1) % 3];
}

function loadPermutation(file) {
  const map = new Map();
  readCsv(file).forEach((row) => {
    if (!map.has(row.id)) map.set(row.id, new Map());
    map.get(row.id).set(String(row.displayed).trim(), String(row.canonical).trim());
  });
  return map;
}

function toCanonical(meaning, permutation) {
  const value = (meaning || "").trim();
  if (value === "NONE" || value === "UNSURE") return { vote: value, invalid: false };
  if (!/^[1-9][0-9]*$/.test(value)) return { vote: null, invalid: true };
  if (!permutation) return { vote: value, invalid: false };
  const canonical = permutation.get(value);
  if (!canonical) return { vote: null, invalid: true };
  return { vote: canonical, invalid: false };
}

function consensus(votes) {
  const present = votes.filter((item) => item !== undefined && item !== null);
  if (present.length < 2) return { status: "AI_UNSURE", meaning: "" };
  const ballots = present.filter((item) => item !== "UNSURE");
  const counts = new Map();
  ballots.forEach((item) => counts.set(item, (counts.get(item) || 0) + 1));
  for (const [meaning, count] of counts) {
    if (meaning !== "NONE" && count >= 2) return { status: "AI_CONSENSUS_OK", meaning };
  }
  const none = counts.get("NONE") || 0;
  if (none >= 2 && none * 2 > ballots.length) return { status: "AI_CONSENSUS_WRONG", meaning: "NONE" };
  return { status: "AI_DISAGREE", meaning: "" };
}

function batchIds(file) {
  return fs
    .readFileSync(file, "utf8")
    .split(/\r?\n/)
    .filter((line) => line.startsWith("| cs-"))
    .map((line) => line.split("|")[1].trim());
}

function indexVendor(objects) {
  const byId = new Map();
  objects.forEach((object) => {
    const id = (object.id || "").trim();
    if (!id) return;
    if (!byId.has(id)) byId.set(id, []);
    byId.get(id).push(object);
  });
  return byId;
}

function selfTest() {
  const three = consensus(["1", "1", "1"]);
  if (three.status !== "AI_CONSENSUS_OK" || three.meaning !== "1") throw new Error("3/3");
  const two = consensus(["2", "2", "3"]);
  if (two.status !== "AI_CONSENSUS_OK" || two.meaning !== "2") throw new Error("2/3");
  const twoNone = consensus(["2", "2", "NONE"]);
  if (twoNone.status !== "AI_CONSENSUS_OK" || twoNone.meaning !== "2") throw new Error("2/3 NONE");
  const majorityNone = consensus(["NONE", "NONE", "1"]);
  if (majorityNone.status !== "AI_CONSENSUS_WRONG") throw new Error("majority NONE");
  const split = consensus(["1", "2", "3"]);
  if (split.status !== "AI_DISAGREE") throw new Error("no majority");
  const one = consensus(["1", null, null]);
  if (one.status !== "AI_UNSURE") throw new Error("one answer");
  const pair = consensus(["4", "4"]);
  if (pair.status !== "AI_CONSENSUS_OK" || pair.meaning !== "4") throw new Error("two only");
  const perm = new Map([
    ["1", "3"],
    ["2", "1"],
    ["3", "2"],
  ]);
  const mapped = ["1", "1", "2"].map((item) => toCanonical(item, perm).vote);
  const mappedStatus = consensus(mapped);
  if (mapped.join(",") !== "3,3,1" || mappedStatus.status !== "AI_CONSENSUS_OK" || mappedStatus.meaning !== "3") {
    throw new Error(`permutation ${mapped}`);
  }
  if (toCanonical("NONE", perm).vote !== "NONE" || toCanonical("UNSURE", perm).vote !== "UNSURE") {
    throw new Error("none unsure");
  }
  const roundTrip = ["1", "2", "3"].every((displayed) => {
    const canonical = perm.get(displayed);
    const back = [...perm.entries()].find((entry) => entry[1] === canonical);
    return back[0] === displayed;
  });
  if (!roundTrip) throw new Error("round trip");
  console.log("SELF_TEST_PASS");
}

function percent(part, whole) {
  if (!whole) return "0.00";
  return ((100 * part) / whole).toFixed(2);
}

function writeThirdPass(root, batchNumbers, vendorFiles) {
  const pending = [];
  batchNumbers.forEach((number) => {
    const present = VENDORS.filter((vendor) => vendorFiles[vendor.dir] && vendorFiles[vendor.dir].has(`batch-${number}.csv`));
    if (present.length !== 2) return;
    const missing = VENDORS.find((vendor) => !present.includes(vendor));
    const version = versionFor(number, missing.index);
    const ids = batchIds(path.join(root, "batches", `batch-${String(number).padStart(3, "0")}-${version}.md`));
    const lines = fs.readFileSync(path.join(root, "batches", `batch-${String(number).padStart(3, "0")}-${version}.md`), "utf8").split(/\r?\n/);
    const byId = new Map();
    lines.filter((line) => line.startsWith("| cs-")).forEach((line) => {
      byId.set(line.split("|")[1].trim(), line);
    });
    const usable = present.map((vendor) => ({
      vendor,
      permutation: loadPermutation(path.join(root, "keys", `permutation-${String(number).padStart(3, "0")}-${versionFor(number, vendor.index)}.csv`)),
      indexed: indexVendor(vendorFiles[vendor.dir].get(`batch-${number}.csv`)),
    }));
    ids.forEach((id) => {
      const votes = usable.map((item) => {
        const found = item.indexed.get(id) || [];
        if (found.length !== 1) return null;
        return toCanonical(found[0].meaning, item.permutation.get(id)).vote;
      });
      const needs = votes.some((vote) => vote === "NONE" || vote === "UNSURE" || vote === null) || new Set(votes.filter((vote) => vote && vote !== "UNSURE")).size > 1;
      if (needs) pending.push({ number, version, vendor: missing, id, line: byId.get(id) });
    });
  });
  if (!pending.length) {
    console.log("THIRD_PASS 0");
    return;
  }
  const dir = path.join(root, "third-pass");
  fs.mkdirSync(dir, { recursive: true });
  const chunks = [];
  for (let index = 0; index < pending.length; index += 100) chunks.push(pending.slice(index, index + 100));
  chunks.forEach((chunk, index) => {
    const name = `batch-${String(index + 1).padStart(3, "0")}.md`;
    const body = [
      "Trešais AI. Tikai rindas, kurās divi AI nesakrīt vai kāds saka NONE vai UNSURE.",
      "Atbildi tikai kā CSV ar kolonnām id,meaning,confidence. Ja piemēra teikums neizšķir nozīmi, atbildi UNSURE.",
      "",
      "| id | vācu vārds (ar artikulu) | čehu vārds | LV nozīmes (1) … (2) … | vācu piemērs | LV piemērs |",
      "|---|---|---|---|---|---|",
      ...chunk.map((item) => item.line),
      "",
    ];
    fs.writeFileSync(path.join(dir, name), body.join("\n"), "utf8");
  });
  console.log(`THIRD_PASS ${pending.length} FILES ${chunks.length}`);
}

function calibration(repo) {
  const root = path.join(repo, "reports", "ai-check-cs-v2", "calibration-v1");
  const folders = ["ai-anthropic", "ai-gemini", "ai-chatgpt"];
  if (!folders.every((folder) => fs.existsSync(path.join(root, folder, "batch-001.csv")))) {
    console.log("CALIBRATION NOT_RUN");
    return;
  }
  const oldKey = path.join(repo, "reports", "ai-check-cs", "control-key.csv");
  const controls = new Map();
  if (fs.existsSync(oldKey)) {
    readCsv(oldKey).forEach((row) => controls.set(row.id, row));
  }
  const ids = batchIds(path.join(repo, "reports", "ai-check-cs", "batches", "batch-001.md"));
  const answers = folders.map((folder) => indexVendor(readCsv(path.join(root, folder, "batch-001.csv"))));
  let agreed = 0;
  let controlAccepted = 0;
  let controlRows = 0;
  ids.forEach((id) => {
    const votes = answers.map((indexed) => {
      const found = indexed.get(id) || [];
      if (found.length !== 1) return null;
      return toCanonical(found[0].meaning, null).vote;
    });
    const result = consensus(votes);
    if (result.status === "AI_CONSENSUS_OK" || result.status === "AI_CONSENSUS_WRONG") agreed += 1;
    const control = controls.get(id);
    if (!control) return;
    controlRows += 1;
    const okPositive = control.control_type === "POSITIVE" && result.status === "AI_CONSENSUS_OK";
    const okNegative = control.control_type === "NEGATIVE" && result.status === "AI_CONSENSUS_WRONG";
    if (okPositive || okNegative) controlAccepted += 1;
  });
  console.log(`CALIBRATION AGREEMENT ${agreed}/${ids.length}`);
  console.log(`CALIBRATION CONTROLS_ACCEPTED ${controlAccepted}/${controlRows}`);
}

function main() {
  selfTest();
  const root = path.resolve(__dirname, "..");
  const repo = path.resolve(root, "..", "..");
  calibration(repo);
  const batchNumbers = fs
    .readdirSync(path.join(root, "batches"))
    .filter((name) => /^batch-\d+-A\.md$/.test(name))
    .map((name) => Number(name.slice(6, 9)))
    .sort((left, right) => left - right);
  const controls = new Map(readCsv(path.join(root, "keys", "control-key.csv")).map((row) => [row.id, row]));
  const vendorFiles = {};
  let missing = 0;
  VENDORS.forEach((vendor) => {
    const dir = path.join(root, vendor.dir);
    if (!fs.existsSync(dir)) {
      missing += batchNumbers.length;
      return;
    }
    const files = new Map();
    batchNumbers.forEach((number) => {
      const file = path.join(dir, `batch-${String(number).padStart(3, "0")}.csv`);
      if (!fs.existsSync(file)) missing += 1;
      else files.set(`batch-${number}.csv`, readCsv(file));
    });
    vendorFiles[vendor.dir] = files;
  });
  const totals = { AI_CONSENSUS_OK: 0, AI_CONSENSUS_WRONG: 0, AI_DISAGREE: 0, AI_UNSURE: 0 };
  const perVendor = VENDORS.map(() => ({ first: 0, canonical1: 0, numeric: 0, negNearFalse: 0, negEasyFalse: 0, posReject: 0, negNear: 0, negEasy: 0, pos: 0 }));
  const disagree = [];
  const pairAgree = { "Anthropic-Gemini": 0, "Anthropic-ChatGPT": 0, "Gemini-ChatGPT": 0, rows: 0 };
  let scored = 0;
  batchNumbers.forEach((number) => {
    const presentCount = VENDORS.filter((vendor) => vendorFiles[vendor.dir] && vendorFiles[vendor.dir].has(`batch-${number}.csv`)).length;
    if (presentCount < 2) return;
    scored += 1;
    const ids = batchIds(path.join(root, "batches", `batch-${String(number).padStart(3, "0")}-A.md`));
    const mapped = VENDORS.map((vendor) => {
      const version = versionFor(number, vendor.index);
      const permutation = loadPermutation(path.join(root, "keys", `permutation-${String(number).padStart(3, "0")}-${version}.csv`));
      const csv = vendorFiles[vendor.dir] && vendorFiles[vendor.dir].get(`batch-${number}.csv`);
      const indexed = csv ? indexVendor(csv) : new Map();
      const byId = new Map();
      ids.forEach((id) => {
        const found = indexed.get(id) || [];
        if (found.length !== 1) {
          byId.set(id, null);
          return;
        }
        const converted = toCanonical(found[0].meaning, permutation.get(id));
        byId.set(id, converted.invalid ? null : converted.vote);
        if (converted.vote && /^[1-9][0-9]*$/.test(converted.vote)) {
          perVendor[vendor.index].numeric += 1;
          if ((found[0].meaning || "").trim() === "1") perVendor[vendor.index].first += 1;
          if (converted.vote === "1") perVendor[vendor.index].canonical1 += 1;
        }
      });
      return byId;
    });
    const batchCounts = { AI_CONSENSUS_OK: 0, AI_CONSENSUS_WRONG: 0, AI_DISAGREE: 0, AI_UNSURE: 0 };
    ids.forEach((id) => {
      const votes = mapped.map((item) => item.get(id));
      const result = consensus(votes);
      batchCounts[result.status] += 1;
      totals[result.status] += 1;
      pairAgree.rows += 1;
      if (votes[0] && votes[1] && votes[0] === votes[1]) pairAgree["Anthropic-Gemini"] += 1;
      if (votes[0] && votes[2] && votes[0] === votes[2]) pairAgree["Anthropic-ChatGPT"] += 1;
      if (votes[1] && votes[2] && votes[1] === votes[2]) pairAgree["Gemini-ChatGPT"] += 1;
      if (result.status === "AI_DISAGREE") disagree.push(`batch-${String(number).padStart(3, "0")} ${id}`);
      const control = controls.get(id);
      if (!control) return;
      VENDORS.forEach((vendor, index) => {
        const vote = votes[index];
        if (control.control_type === "POS") {
          perVendor[index].pos += 1;
          if (vote === "NONE" || (vote && vote !== "UNSURE" && vote !== "1")) perVendor[index].posReject += 1;
        } else if (control.control_type === "NEG_NEAR") {
          perVendor[index].negNear += 1;
          if (vote && /^[1-9][0-9]*$/.test(vote)) perVendor[index].negNearFalse += 1;
        } else if (control.control_type === "NEG_EASY") {
          perVendor[index].negEasy += 1;
          if (vote && /^[1-9][0-9]*$/.test(vote)) perVendor[index].negEasyFalse += 1;
        }
      });
    });
    const consensusRows = batchCounts.AI_CONSENSUS_OK + batchCounts.AI_CONSENSUS_WRONG;
    console.log(`BATCH ${String(number).padStart(3, "0")} CONSENSUS ${consensusRows}/${ids.length} ${percent(consensusRows, ids.length)}% OK ${batchCounts.AI_CONSENSUS_OK} WRONG ${batchCounts.AI_CONSENSUS_WRONG} DISAGREE ${batchCounts.AI_DISAGREE} UNSURE ${batchCounts.AI_UNSURE}`);
  });
  if (!scored) {
    console.log(`MISSING_AI ${missing}`);
    return;
  }
  const all = scored * 100;
  const consensusAll = totals.AI_CONSENSUS_OK + totals.AI_CONSENSUS_WRONG;
  console.log(`TOTAL CONSENSUS ${consensusAll}/${all} ${percent(consensusAll, all)}%`);
  console.log(`TOTAL OK ${totals.AI_CONSENSUS_OK} WRONG ${totals.AI_CONSENSUS_WRONG} DISAGREE ${totals.AI_DISAGREE} UNSURE ${totals.AI_UNSURE}`);
  VENDORS.forEach((vendor, index) => {
    const item = perVendor[index];
    console.log(`AI ${vendor.name} FIRST_DISPLAYED ${item.first}/${item.numeric} CANONICAL_1 ${item.canonical1}/${item.numeric} NEG_NEAR_FALSE ${item.negNearFalse}/${item.negNear} NEG_EASY_FALSE ${item.negEasyFalse}/${item.negEasy} POS_REJECT ${item.posReject}/${item.pos}`);
  });
  console.log(`PAIRS Anthropic-Gemini ${pairAgree["Anthropic-Gemini"]}/${pairAgree.rows} Anthropic-ChatGPT ${pairAgree["Anthropic-ChatGPT"]}/${pairAgree.rows} Gemini-ChatGPT ${pairAgree["Gemini-ChatGPT"]}/${pairAgree.rows}`);
  console.log(`AI_DISAGREE ${disagree.length}`);
  disagree.forEach((line) => console.log(line));
  writeThirdPass(root, batchNumbers, vendorFiles);
}

main();
