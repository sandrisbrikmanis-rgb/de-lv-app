# Uzdevums — ES Kurss Pronombres visual COPY-ONLY repair

Vienīgais OWNER avots:

`reports/es-kurss-pronouns-visual-owner-decisions.md`

## Darbs

1. Izveido jaunu branch no aktuālā `main` pēc PR #668 merge.
2. Atrodi `Curso → Pronombres` lesson HTML lauku `data/es/courseLessons.js` un atbilstošo `www/` mirror.
3. Atrodi arī sadaļas subtitle UI atslēgu `languages/es/ui.js` un tās `www/` mirror, ja `ES-KURSS-PRONOUNS-0001` atrodas UI, nevis lesson HTML.
4. Piemēro tikai OWNER mappingu:
   - `LABOT`: 35 targeti;
   - `NELABOT`: 1 targets, saglabāt nemainītu.
5. Pirms katra apply faktiskajai vērtībai precīzi jāsakrīt ar `CURRENT`.
6. Pēc ieraksta pārlādē failus no diska un verificē precīzu `NEW`.

## Aizliegts

- mainīt citus DE production failus vai vācu saturu ārpus `ES-KURSS-PRONOUNS-0033`;
- tulkot, pārfrāzēt vai veikt blakus cleanup;
- mainīt Pronunciation vai Artículos sadaļas;
- veikt Luna auditu apply posmā;
- piemērot `NELABOT` targetu.

## Obligātie vārti

- OWNER coverage: 36/36;
- `APPLIED_VERIFIED`: 35/35;
- `NELABOT_UNCHANGED`: 1/1;
- `CURRENT_VALUE_MISMATCH`: 0;
- `NEW_VALUE_MISMATCH`: 0;
- `FAILED`: 0;
- bojātās formas `atan`, `yo - eso`, `él - nosotros`: 0;
- EN atlikumi Pronombres sadaļā: 0;
- nelokalizēti `Nominativ`, `Akkusativ`, `Dativ` spāņu skaidrojumos: 0;
- `sie`/`Sie` lielo burtu lietojums: PASS;
- data/www un languages/www mirror: PASS;
- JavaScript syntax: PASS;
- HTML struktūra: PASS;
- neparedzētas izmaiņas: 0;
- DE production izmaiņas ārpus konkrētā ES HTML piemēra: 0;
- desktop un mobile browser smoke: PASS;
- console errors: 0.

## Deliverables

- `scripts/apply-es-kurss-pronouns-visual-owner-copy-only.js`
- `reports/es-kurss-pronouns-visual-owner-apply.md`
- `reports/es-kurss-pronouns-visual-repair-verification.md`

Push uz jaunu draft PR. PR nemergot.

Gala verdikts, ja visi vārti iziet:

`PASS — ES KURSS PRONOUNS VISUAL REPAIR APPLIED AND VERIFIED`
