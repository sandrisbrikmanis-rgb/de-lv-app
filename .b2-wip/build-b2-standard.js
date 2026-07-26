const fs = require("fs");

function buildStudy(origStudy, trans) {
  if (origStudy.layout === "minimalStudy") {
    const out = { id: origStudy.id, layout: origStudy.layout, translation: trans.lv };
    if (origStudy.accent !== undefined) out.accent = origStudy.accent;
    if (origStudy.variants !== undefined) out.variants = origStudy.variants;
    for (const key of Object.keys(origStudy)) {
      if (!(key in out)) out[key] = origStudy[key];
    }
    return out;
  }

  const out = { id: origStudy.id, layout: origStudy.layout, translation: trans.lv };

  if (typeof origStudy.explanation === "string") {
    if (typeof trans.explanation !== "string") throw new Error(origStudy.id + ": explanation should be string");
    out.explanation = trans.explanation;
  } else if (Array.isArray(origStudy.explanation)) {
    if (!Array.isArray(trans.explanation) || trans.explanation.length !== origStudy.explanation.length) {
      throw new Error(origStudy.id + ": explanation array length mismatch");
    }
    out.explanation = trans.explanation;
  } else {
    throw new Error(origStudy.id + ": unexpected explanation type");
  }

  if (!Array.isArray(trans.examples) || trans.examples.length !== origStudy.examples.length) {
    throw new Error(origStudy.id + ": examples length mismatch");
  }
  out.examples = origStudy.examples.map((ex, i) => ({ de: ex.de, lv: trans.examples[i].lv }));

  if (origStudy.comparison) {
    if (!Array.isArray(trans.comparison) || trans.comparison.length !== origStudy.comparison.length) {
      throw new Error(origStudy.id + ": comparison length mismatch");
    }
    out.comparison = origStudy.comparison.map((c, i) => {
      const tc = trans.comparison[i];
      const result = { word: c.word, meaning: tc.meaning };
      if (c.example !== undefined) {
        if (tc.exampleLv === undefined) throw new Error(origStudy.id + ": missing exampleLv at comparison[" + i + "]");
        const idx = c.example.lastIndexOf(" = ");
        if (idx < 0) throw new Error(origStudy.id + ": comparison example has no ' = ' separator: " + c.example);
        result.example = c.example.slice(0, idx + 3) + tc.exampleLv;
      }
      return result;
    });
  }

  if (origStudy.tip) {
    if (origStudy.tip.leftBlocks) {
      const texts = Array.isArray(trans.tip) ? trans.tip : [trans.tip];
      if (texts.length !== origStudy.tip.leftBlocks.length) throw new Error(origStudy.id + ": tip.leftBlocks length mismatch");
      out.tip = { leftBlocks: origStudy.tip.leftBlocks.map((b, i) => ({ text: texts[i] })) };
    } else if (Array.isArray(origStudy.tip)) {
      if (!Array.isArray(trans.tip) || trans.tip.length !== origStudy.tip.length) throw new Error(origStudy.id + ": tip array length mismatch");
      out.tip = trans.tip;
    } else if (typeof origStudy.tip.text === "string") {
      out.tip = { text: trans.tip };
    } else if (typeof origStudy.tip === "string") {
      out.tip = trans.tip;
    } else {
      throw new Error(origStudy.id + ": unexpected tip shape");
    }
  }

  if (origStudy.important) {
    if (Array.isArray(origStudy.important)) {
      if (!Array.isArray(trans.important) || trans.important.length !== origStudy.important.length) throw new Error(origStudy.id + ": important array length mismatch");
      out.important = trans.important;
    } else if (typeof origStudy.important.text === "string" && origStudy.important.example !== undefined) {
      if (typeof trans.important !== "object" || trans.important === null) throw new Error(origStudy.id + ": expected important {text, example} object");
      out.important = { text: trans.important.text, example: trans.important.example };
    } else if (typeof origStudy.important.text === "string") {
      out.important = { text: trans.important };
    } else if (typeof origStudy.important === "string") {
      out.important = trans.important;
    } else {
      throw new Error(origStudy.id + ": unexpected important shape");
    }
  }

  if (origStudy.sectionAccents) {
    const sa = JSON.parse(JSON.stringify(origStudy.sectionAccents));
    if (trans.accentsOverride && trans.accentsOverride.examples) {
      sa.examples = trans.accentsOverride.examples;
    } else if (Array.isArray(sa.examples)) {
      sa.examples.forEach((exAcc, i) => {
        if (exAcc.lv) {
          const tex = trans.examples[i];
          if (!tex) throw new Error(origStudy.id + ": missing examples[" + i + "] translation");
          const colorKeys = Object.keys(exAcc.lv);
          if (tex.colors) {
            colorKeys.forEach((ck) => {
              if (!tex.colors[ck]) throw new Error(origStudy.id + ": missing examples[" + i + "].colors." + ck);
              exAcc.lv[ck] = tex.colors[ck];
            });
          } else {
            if (colorKeys.length !== 1) throw new Error(origStudy.id + ": examples[" + i + "] has multiple lv colors but no .colors map provided");
            const ck = colorKeys[0];
            const val = tex[ck] !== undefined ? tex[ck] : tex.purple;
            if (val === undefined) throw new Error(origStudy.id + ": missing examples[" + i + "]." + ck + " translation");
            exAcc.lv[ck] = val;
          }
        }
      });
    }
    if (trans.accentsOverride && trans.accentsOverride.comparison) {
      sa.comparison = trans.accentsOverride.comparison;
    } else if (Array.isArray(sa.comparison)) {
      sa.comparison.forEach((cAcc, i) => {
        if (cAcc.meaning) {
          const colorKey = Object.keys(cAcc.meaning)[0];
          const tc = trans.comparison[i];
          if (!tc) throw new Error(origStudy.id + ": missing comparison[" + i + "] translation for accents");
          const orig = cAcc.meaning[colorKey];
          if (Array.isArray(orig)) {
            if (!Array.isArray(tc.meaningAccent) || tc.meaningAccent.length !== orig.length) {
              throw new Error(origStudy.id + ": comparison[" + i + "] meaningAccent array length mismatch");
            }
            cAcc.meaning[colorKey] = tc.meaningAccent;
          } else {
            cAcc.meaning[colorKey] = Array.isArray(tc.meaningAccent) ? tc.meaningAccent[0] : (tc.meaningAccent || tc.meaning);
          }
        }
      });
    }
    if (trans.accentsOverride) {
      for (const key of ["explanation", "tip", "important"]) {
        if (trans.accentsOverride[key]) sa[key] = trans.accentsOverride[key];
      }
    }
    out.sectionAccents = sa;
  }

  if (origStudy.accents) {
    if (!trans.topAccents) throw new Error(origStudy.id + ": missing topAccents override for top-level accents field");
    out.accents = trans.topAccents;
  }

  return out;
}

function buildBatch(cardsFile, transFile, outFile) {
  const cards = JSON.parse(fs.readFileSync(cardsFile, "utf8"));
  const transMap = require("./" + transFile);
  const result = cards.map((card) => {
    const trans = transMap[card.study.id];
    if (!trans) throw new Error("Missing translation for " + card.study.id);
    const cardLv = trans.cardLv !== undefined ? trans.cardLv : trans.lv;
    return { ...card, lv: cardLv, study: buildStudy(card.study, trans) };
  });
  fs.writeFileSync(outFile, JSON.stringify(result, null, 1));
  console.log("Built", result.length, "cards ->", outFile);
  return result;
}

module.exports = { buildStudy, buildBatch };

if (require.main === module) {
  const [, , cardsFile, transFile, outFile] = process.argv;
  buildBatch(cardsFile, transFile, outFile);
}
