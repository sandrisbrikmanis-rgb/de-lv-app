/**
 * Shared foreign-remnant checks for ES-DE A1+A2 OWNER proposals validation.
 * Excludes valid Spanish words that overlap with Italian/Latvian heuristics.
 */

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|\bjūs\b|\bjums\b|\bjūsu\b|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stātu|man jā|tev jā|mums jā|\brīsi\b|mācēt|\bprast\b|\blūdzu\b|\blūgums\b|Man ir|Es esmu|Es gribu|Es redzu|Es palīdzu|nāc iekšā|paliec|aiziet|mājās|skolā|darbā/gi;

// Italian-only cues (exclude Spanish homographs like poco, dove in Spanish context is rare in A1/A2)
const IT_WORDS =
  /\b(per favore|grazie|buongiorno|buonasera|ciao|prego|scusi|scusa|quando|perché|perche|anche|molto|essere|avere|fare|dire|andare|venire|stare|dare|sapere|volere|dovere|potere|parlare|mangiare|bere|dormire|lavorare|studiare|italiano|italiana)\b/gi;

// Spanish homographs that must not be flagged as Italian remnants in NEW values
const SPANISH_WHITELIST =
  /\b(poco|poca|pocos|pocas|dove|dove|anche)\b/gi;

function stripSpanishWhitelist(text) {
  return String(text).replace(SPANISH_WHITELIST, " ");
}

function hasForeignRemnant(text) {
  if (!text || typeof text !== "string") return false;
  const t = stripSpanishWhitelist(text).trim();
  if (!t) return false;
  LV_WORDS.lastIndex = 0;
  IT_WORDS.lastIndex = 0;
  if (LV_ONLY.test(t) || LV_WORDS.test(t)) return true;
  if (IT_WORDS.test(t) && !/\bespañol\b/i.test(t)) return true;
  return false;
}

function splitComparisonExample(text) {
  const m = String(text).match(/^([\s\S]*?)\s+[–—-]\s+([\s\S]*)$/);
  if (!m) return null;
  return { de: m[1], es: m[2] };
}

function germanPartPreserved(current, proposed) {
  const c = splitComparisonExample(current);
  const p = splitComparisonExample(proposed);
  if (!c || !p) return true;
  return c.de === p.de;
}

/** Manual fixes for IT false positives and Luna edge cases after batch proposals. */
const POST_FIXES = {
  "ES-A1A2-FOREIGN-0027": {
    new: "poco",
    reason: "Falso positivo IT; «poco» es subcadena válida en «un poco».",
    status: "PĀRSKATĪT",
  },
  "ES-A1A2-FOREIGN-0348": {
    new: "un poco antes",
    reason: "«poco» es español válido; variante natural para kurz vor.",
    status: "PĀRSKATĪT",
  },
  "ES-A1A2-FOREIGN-0350": {
    new: "un poco después",
    reason: "«poco» es español válido; variante natural para kurz nach.",
    status: "PĀRSKATĪT",
  },
  "ES-A1A2-FOREIGN-0355": {
    new: "En las construcciones kurz vor y kurz nach, significa poco antes o poco después.",
    reason: "Reformulación mínima; «poco» es español válido en este contexto.",
    status: "PĀRSKATĪT",
  },
  "ES-A1A2-FOREIGN-0357": {
    new: "antes",
    reason: "Fragmento de acento válido dentro de «poco antes» (falso positivo IT).",
    status: "PĀRSKATĪT",
  },
  "ES-A1A2-FOREIGN-0359": {
    new: "después",
    reason: "Fragmento de acento válido dentro de «poco después» (falso positivo IT).",
    status: "PĀRSKATĪT",
  },
  "ES-A1A2-FOREIGN-0502": {
    new: "poco profundo / llano",
    reason: "Traducción natural de flach (poco profundo) frente a tief.",
    status: "PĀRSKATĪT",
  },
};

function applyPostFixes(items) {
  return items.map((item) => {
    const fix = POST_FIXES[item.id];
    if (!fix) return item;
    return {
      ...item,
      new: fix.new,
      reason: fix.reason,
      status: fix.status || item.status,
      action: fix.action || item.action,
    };
  });
}

function validateProposals(source, payload) {
  const errors = [];
  const sourceById = new Map(source.items.map((i) => [i.id, i]));
  const seen = new Set();
  let prevNum = 0;
  let germanPreserved = 0;
  let germanChecked = 0;
  let foreignInNew = 0;

  if (source.items.length !== 573) errors.push(`source count ${source.items.length} !== 573`);
  if (payload.items.length !== 573) errors.push(`proposal count ${payload.items.length} !== 573`);

  for (const item of payload.items) {
    const num = parseInt(item.id.replace("ES-A1A2-FOREIGN-", ""), 10);
    if (num !== prevNum + 1) errors.push(`ID gap: expected ${prevNum + 1}, got ${num} (${item.id})`);
    prevNum = num;

    const src = sourceById.get(item.id);
    if (!src) {
      errors.push(`${item.id}: missing in source`);
      continue;
    }

    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate ${key}`);
    seen.add(key);

    if (item.current !== src.current) errors.push(`${item.id}: current mismatch vs source`);
    if (item.field !== src.field) errors.push(`${item.id}: field mismatch vs source`);
    if (item.new === null || item.new === undefined) errors.push(`${item.id}: new is null`);
    if (typeof item.new === "string" && item.new.trim() === "") {
      if (item.action !== "REMOVE") errors.push(`${item.id}: empty new without REMOVE`);
    }
    if (item.current === item.new && item.action !== "REMOVE") errors.push(`${item.id}: current === new`);

    if (hasForeignRemnant(String(item.new))) {
      foreignInNew += 1;
      errors.push(`${item.id}: foreign remnant in new`);
    }

    if (item.field.includes("comparison") && item.field.endsWith(".example")) {
      germanChecked += 1;
      if (germanPartPreserved(item.current, item.new)) germanPreserved += 1;
      else errors.push(`${item.id}: German part not preserved in comparison example`);
    }
  }

  for (const id of sourceById.keys()) {
    if (!payload.items.find((i) => i.id === id)) errors.push(`missing proposal for ${id}`);
  }

  return {
    errors,
    foreignInNew,
    germanPreserved,
    germanChecked,
    germanPreservedPct: germanChecked ? (germanPreserved / germanChecked) * 100 : 100,
  };
}

module.exports = {
  hasForeignRemnant,
  splitComparisonExample,
  germanPartPreserved,
  applyPostFixes,
  validateProposals,
  POST_FIXES,
};
