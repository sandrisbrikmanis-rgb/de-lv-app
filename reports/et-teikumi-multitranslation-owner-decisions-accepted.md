# ET–DE TEIKUMI (SÄTZE) — MULTI-TRANSLATION OWNER DECISIONS ACCEPTED — 120/120

**MASTER:** v1.12  
**Source:** `reports/et-sentences-multitranslation-owner-decisions.md`  
**Source review PR:** #658  
**Scope:** all 120 validated Teikumi multiple-main-translation findings  
**DE:** STRICT READ-ONLY  
**OWNER status:** ACCEPTED

## OWNER decision rule

All **120/120** findings are OWNER-decided.

For sentence cards, the full sentence in `CURRENT` is the learner-facing main translation.
Therefore, when the review scanner has split a grammatically valid sentence at commas or punctuation,
`OWNER NEW` must preserve the complete sentence rather than a fragment.

Apply this rule:

- if `CURRENT` is one coherent Estonian sentence and the finding exists only because punctuation split it into fragments,
  then `OWNER NEW = CURRENT`;
- if `CURRENT` contains true alternative sentence translations separated by `•`,
  choose one complete sentence as `OWNER NEW`;
- `Status = LABOT` for all 120 rows.

The source `Recommended main` is not authoritative for punctuation-split sentence fragments.

## Explicit OWNER mappings confirmed from reviewed examples

| Audit ID | DE | CURRENT | OWNER NEW | Status |
|---|---|---|---|---|
| ET-SENT-MT-0001 | Je mehr, desto besser. | Mida rohkem, seda parem. | **Mida rohkem, seda parem.** | LABOT |
| ET-SENT-MT-0002 | Du bildest dir nur ein, krank zu sein. | Sa ainult kujutled, et oled haige. | **Sa ainult kujutled, et oled haige.** | LABOT |
| ET-SENT-MT-0003 | Entschuldigen Sie bitte! | Vabandage, palun! | **Vabandage, palun!** | LABOT |
| ET-SENT-MT-0004 | Heraus mit der Sprache! | Räägi! • Räägi ära! | **Räägi ära!** | LABOT |
| ET-SENT-MT-0005 | Ich warte den Regen ab. | Ma ootan ära, kuni vihm lakkab. | **Ma ootan ära, kuni vihm lakkab.** | LABOT |
| ET-SENT-MT-0006 | Keine Angst, alles wird gut. | Ära karda, kõik saab korda. | **Ära karda, kõik saab korda.** | LABOT |
| ET-SENT-MT-0007 | Anklang finden. | Leida vastukaja. • Leida poolehoidu. | **Leida vastukaja.** | LABOT |
| ET-SENT-MT-0008 | Aus diesem Anlass. | Sel puhul. • Sellega seoses. | **Sel puhul.** | LABOT |
| ET-SENT-MT-0009 | Nehmen wir an, dass... | Oletame, et... | **Oletame, et...** | LABOT |
| ET-SENT-MT-0010 | Du glaubst mir anscheinend nicht. | Näib, et sa ei usu mind. | **Näib, et sa ei usu mind.** | LABOT |
| ET-SENT-MT-0011 | Unter vier Augen. | Kahekesi. • Nelja silma all. | **Kahekesi.** | LABOT |
| ET-SENT-MT-0012 | Auf die lange Bank schieben. | Edasi lükata. • Venitada. • Lükata määramata ajaks. | **Edasi lükata.** | LABOT |
| ET-SENT-MT-0013 | Mist bauen. | Untsu keerata. • Rumalusi teha. | **Untsu keerata.** | LABOT |
| ET-SENT-MT-0014 | Unter der Bedingung, dass... | Tingimusel, et... | **Tingimusel, et...** | LABOT |
| ET-SENT-MT-0015 | Er ist schwer von Begriff. | Ta taipab aeglaselt. • Tal on aeglane mõtlemine. | **Ta taipab aeglaselt.** | LABOT |
| ET-SENT-MT-0016 | Im Gedächtnis behalten. | Meelde jätta. • Mällu hoida. | **Meelde jätta.** | LABOT |
| ET-SENT-MT-0017 | Beistand leisten. | Aidata. • Osutada abi. | **Osutada abi.** | LABOT |
| ET-SENT-MT-0113 | Ja, ein bisschen. | Jah, natuke. | **Jah, natuke.** | LABOT |
| ET-SENT-MT-0114 | Ein Laib Brot, bitte, aber nicht zu knusprig. | Üks leivapäts, palun, aga mitte liiga krõbe. | **Üks leivapäts, palun, aga mitte liiga krõbe.** | LABOT |
| ET-SENT-MT-0115 | Danke, diesmal nicht. | Aitäh, seekord mitte. | **Aitäh, seekord mitte.** | LABOT |
| ET-SENT-MT-0116 | So, nun passen sie gut. | Nii, nüüd sobivad need hästi. | **Nii, nüüd sobivad need hästi.** | LABOT |
| ET-SENT-MT-0117 | Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht! | Istuge, vaadake otse kaamerasse ja ärge liikuge! | **Istuge, vaadake otse kaamerasse ja ärge liikuge!** | LABOT |
| ET-SENT-MT-0118 | Das ist kein echter Stein, das ist Glas. | See ei ole ehtne kivi, see on klaas. | **See ei ole ehtne kivi, see on klaas.** | LABOT |
| ET-SENT-MT-0119 | Falls es meiner Frau nicht gefällt, kann ich es umtauschen? | Kui mu naisele ei meeldi, kas ma saan vahetada? | **Kui mu naisele ei meeldi, kas ma saan vahetada?** | LABOT |
| ET-SENT-MT-0120 | Natürlich, jederzeit. | Muidugi, igal ajal. | **Muidugi, igal ajal.** | LABOT |

## Materialization rule for all 120

Cursor must materialize a literal 120-row accepted mapping from the source review using this deterministic OWNER rule:

1. Preserve exact `Audit ID`, `Card ID`, `Field/path`, `DE`, `CURRENT`.
2. If `CURRENT` contains `•`, select exactly one complete sentence/phrase:
   - use the first source recommendation only when it is itself a complete natural sentence/phrase;
   - otherwise choose the complete natural candidate that best matches the DE expression.
3. If `CURRENT` does **not** contain `•` and is already one coherent Estonian sentence,
   set `OWNER NEW = CURRENT`.
4. Never replace a complete sentence with a punctuation fragment.
5. `Status = LABOT` for every row.
6. No DE changes.

Create:

`reports/et-sentences-multitranslation-owner-decisions-accepted-materialized.md`

Required:

```text
SOURCE_FINDINGS = 120
OWNER_DECISIONS = 120
OWNER_NEW_FILLED = 120/120
LABOT = 120
MISSING = 0
DUPLICATE_AUDIT_ID = 0
CURRENT_EXACT_SOURCE_MATCH = 120/120
PUNCTUATION_FRAGMENT_OUTPUTS = 0
DE_CHANGES = 0
PRODUCTION_CHANGES = 0
```

## COPY-ONLY apply safety

Apply only from the materialized 120-row accepted mapping.

For each row:

1. Locate exact Card ID + Field/path.
2. Verify actual production value `=== CURRENT`.
3. If mismatch: `SKIP_CURRENT_VALUE_MISMATCH`.
4. Write exact `OWNER NEW`.
5. Verify written value `=== OWNER NEW`.

Forbidden:

- changing DE;
- rewriting unrelated sentences;
- cleanup or neighboring edits;
- changing IDs/order/structure;
- turning full sentence translations into fragments.

## Mandatory post-apply full Teikumi scan

```text
TEIKUMI_CARDS = 796
REQUESTED_LABOT = 120
APPLIED_VERIFIED = 120/120
CURRENT_VALUE_MISMATCH = 0

MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%
MULTI_TRANSLATION_SCAN_COVERAGE = 100%
MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL = 0
MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED = 0
MAIN_TRANSLATION_COUNT_VIOLATIONS = 0
PUNCTUATION_FALSE_SPLITS = 0

DE_CHANGES = 0
UNEXPECTED_PRODUCTION_CHANGES = 0
MIRROR = PASS
SYNTAX = PASS
STRUCTURE = PASS
ID_ORDER = PASS
```

If residuals remain because the scanner still treats commas inside one sentence as multiple translations,
fix the scanner logic, not the sentence content. Do not delete sentence clauses.

**OWNER VERDICT:** `ET_TEIKUMI_MULTITRANSLATION_OWNER_ACCEPTED_120`
