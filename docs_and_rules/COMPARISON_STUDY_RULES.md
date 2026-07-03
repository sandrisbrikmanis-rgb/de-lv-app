# comparisonStudy rules

comparisonStudy is a second layout inside the same Study Card system as standardStudy. It is used for cards that compare similar words, for example freundlich / nett / hoeflich / angenehm, stehen / stellen, liegen / legen, kennen / wissen, bringen / holen.

## Required structure

Use:

```js
study: {
  layout: "comparisonStudy",
  title: "laipns • jauks • pieklajigs • patikams",
  subtitle: "freundlich / nett / hoeflich / angenehm",
  lead: "Kuru vardu lietot? Tie NAV sinonimi.",
  words: [],
  examples: [],
  comparisonTable: [],
  importantComparison: [],
  tip: {},
  important: [],
  mistakes: [],
  remember: [],
  sectionAccents: {}
}
```

## Mandatory sections

- Top purple badge: "⚖ SALIDZINAJUMA KARTITE".
- Big title.
- Short lead text under the title.
- Word cards with icon, LV label, DE word, short description, and one example.
- ⏳ Piemeri.
- ⚖ Salidzinajums.
- 💡 Padoms.
- ❗ Svarigi.
- 🎯 Tipiskas kludas.
- ⭐ Atceries.

## Comparison table

The comparison table must use these columns:

LV | DE | Galvena nozime | Raksturo | Piemers | Tulkojums

## Visual rules

comparisonStudy must reuse the standardStudy system:

- same highlight function;
- same color variables;
- same dark card background;
- same table visual logic where possible;
- same responsive behavior where possible.

Do not create a separate independent renderer if the existing Study Card helpers can be reused.

## Colors

Use only existing Study Card colors:

- blue: #24A8FF
- green: #35D46A
- yellow: #FFD21F
- red: #FF4D4D
- purple: #B565FF
- orange: #FFB020

## Highlights

Use `sectionAccents` like standardStudy. Highlight only key LV and DE words, not whole sentences. If highlight logic is expanded, it must keep working for both:

- layout: "standardStudy"
- layout: "comparisonStudy"

## Responsive behavior

- Desktop: word cards up to 4 columns.
- Tablet: 2 columns.
- Mobile: 1 column.
- No horizontal overflow on mobile.

## How to create a new comparisonStudy card

1. Choose the words that are commonly confused.
2. Fill `title`, `subtitle`, and `lead`.
3. Add `words` with one compact card per term.
4. Add natural examples in `examples`.
5. Add `comparisonTable` rows with all required columns.
6. Add `importantComparison`.
7. Add `tip`, `important`, `mistakes`, and `remember`.
8. Add `sectionAccents` for all sections.
9. Check `?study=...` and `?card=...`.
10. Check desktop, tablet, and mobile widths.


## Stable card id

Every comparisonStudy card must have a stable unique `id`.

Rules:

- The id is required for every new comparisonStudy card.
- It must be unique and must not change after links are shared.
- Use only lowercase letters, numbers, and hyphens.
- Do not use spaces.
- Convert German special letters before building the id:
  - ä -> ae
  - ö -> oe
  - ü -> ue
  - ß -> ss
- Separate words with "-".
- Prefix comparison cards with "compare-".

Examples:

- `compare-freundlich-nett-hoeflich-angenehm`
- `compare-kennen-wissen`
- `compare-stehen-stellen`
- `compare-liegen-legen`
- `compare-bringen-holen`

The test mode supports both existing DE-word links and stable comparison ids:

- `?card=freundlich`
- `?card=die%20Karte`
- `?card=compare-freundlich-nett-hoeflich-angenehm`

Use `?card=<id>` for comparisonStudy cards. Existing standardStudy cards can keep using `?card=<de>`.

Required comparisonStudy test link examples:

- `?card=compare-freundlich-nett-hoeflich-angenehm`
- `?card=compare-kennen-wissen`
- `?card=compare-stehen-stellen`
- `?card=compare-liegen-legen`
- `?card=compare-bringen-holen`
- `?card=compare-sehen-schauen-ansehen`
- `?card=compare-hoeren-zuhoeren`
- `?card=compare-sagen-sprechen-erzaehlen`
- `?card=compare-gross-hoch`
- `?card=compare-klein-niedrig`
- `?card=compare-ruhig-leise`
- `?card=compare-deshalb-deswegen-darum`
- `?card=compare-schon-noch-erst`
