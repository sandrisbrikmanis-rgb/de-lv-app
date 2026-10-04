# Vārdnīcu avotu inventārs

STAGE RESULT: NEEDS OWNER REVIEW

Koks ir origin/main. Meklēti pdf, djvu, epub, txt, xml, tei, dsl, mdx, sqlite un csv, kuru nosaukumā vai saturā ir vārdnīcas vārds. Tādu failu skaits ir 0. `git log --all` paplašinājumiem pdf, djvu, epub, dsl, mdx, sqlite un tei lokālajos ref ir tukšs. Crowdin glosārija fails nav. crowdin/ui ir 31 UI JSON, crowdin/content/g2/lv-a1.json ir saturs.

Institūta reģistra rindas mērķvalodām: 31. Tips A (DE↔X reģistrs, fails nav): nn, pt, ro. Tips B (tikai institūta vienvaloda): 28. NONE: 0.

| lang | DE_X_file_in_repo | registry_entry | bilingual_source_type | authority_institute |
|---|---|---|---|---|
| bg | nē | jā, 29 | B | Институт за български език, БАН — Официален правописен речник |
| bs | nē | jā, 1 | B | Institut za jezik Univerziteta u Sarajevu |
| cs | nē | jā, 3 | B | Ústav pro jazyk český AV ČR — Internetová jazyková příručka |
| da | nē | jā, 4 | B | Dansk Sprognævn — Retskrivningsordbogen |
| en | nē | jā, 2 | B | Oxford English Dictionary / Oxford Learner's Dictionaries |
| es | nē | jā, 6 | B | Real Academia Española — DLE / Ortografía |
| et | nē | jā, 5 | B | Eesti Keele Instituut — ÕS / Sõnaveeb |
| fi | nē | jā, 25 | B | Kotimaisten kielten keskus — Kielitoimiston sanakirja |
| fr | nē | jā, 7 | B | Académie française — Dictionnaire de l’Académie française |
| gr | nē | jā, 28 | B | Κέντρο Ελληνικής Γλώσσας |
| hr | nē | jā, 8 | B | Institut za hrvatski jezik — Hrvatski pravopis |
| hu | nē | jā, 14 | B | HUN-REN Nyelvtudományi Kutatóközpont |
| is | nē | jā, 9 | B | Stofnun Árna Magnússonar — BÍN / Málið.is |
| it | nē | jā, 10 | B | Accademia della Crusca |
| lb | nē | jā, 12 | B | Zenter fir d'Lëtzebuerger Sprooch — LOD |
| lt | nē | jā, 13 | B | Lietuvių kalbos institutas + VLKK |
| mk | nē | jā, 30 | B | Институт за македонски јазик „Крсте Мисирков“ |
| nb | nē | jā, 16 | B | Språkrådet / Bokmålsordboka |
| nl | nē | jā, 15 | B | Nederlandse Taalunie — Woordenlijst Nederlandse Taal |
| nn | nē | jā, 17 | A | Språkrådet / Nynorskordboka |
| pl | nē | jā, 18 | B | Rada Języka Polskiego + WSJP PAN |
| pt | nē | jā, 19 | A | Academia das Ciências de Lisboa |
| ro | nē | jā, 20 | A | Academia Română / Institutul de Lingvistică — DOOM |
| ru | nē | jā, 31 | B | Институт русского языка им. В. В. Виноградова РАН |
| sk | nē | jā, 22 | B | Jazykovedný ústav Ľudovíta Štúra SAV |
| sl | nē | jā, 23 | B | ZRC SAZU — FRAN |
| sq | nē | jā, 21 | B | Akademia e Shkencave e Shqipërisë |
| sr | nē | jā, 24 | B | Institut za srpski jezik SANU + Matica srpska |
| sv | nē | jā, 26 | B | Svenska Akademien — SAOL / SO / SAOB |
| tr | nē | jā, 27 | B | Türk Dil Kurumu — Güncel Türkçe Sözlük / Yazım Kılavuzu |
| uk | nē | jā, 32 | B | Інститут української мови НАН України + Український правопис |

## G2 reģistrs šajā kokā

Fails `scripts/lib/data/g2-a1-card-translation-bilingual-audit-nn-pt-ro.json`. Valodas nn, pt, ro. Zemāk ir id, virziens un atrašanās vieta. Šķirkļu teksts netiek kopēts.

- nn `ia-bsb-helms-dano-nor-de-11752747` de↔no-historical  https://www.digitale-sammlungen.de/de/view/bsb11752747?page=1
- nn `snorre-sbr-24` de↔nn-terminology 2013 https://www.nb.no/sbfil/leksikalske_databaser/snorre.tar.gz
- nn `mdz-kaper-dano-nor-de-1889` de↔no-historical  https://www.digitale-sammlungen.de/de/view/bsb11642917?page=1
- nn `ia-hanson-tysk-norsk-1840` de→nn-historical  https://archive.org/details/bub_gb_cl5HAAAAYAAJ
- nn `dinordbok-tysk-nynorsk-web` de↔nn  https://www.dinordbok.se/tysk-nynorsk/
- pt `ia-torchtrop-de-pt-1943` de→pt 1943 https://archive.org/download/DICIONARIOALEMAOPORTUGUESLEONARDOTORCHTROP/DICIONARIO%20ALEMAO-PORTUGUES%20LEONARDO%20TORCHTROP.pdf
- pt `ia-wagener-de-pt-1812-v1` de→pt  https://archive.org/details/bub_gb_ZfhDAAAAcAAJ
- pt `ia-wagener-de-pt-1812-v2` de→pt  https://archive.org/details/bub_gb_SplLAAAAcAAJ
- pt `ia-dicionario-moderno-de-pt-pt-de` de↔pt  https://archive.org/details/DicionrioAlemoPortugus
- ro `ia-barcianu-de-ro-bidir-1886` de↔ro 1886 https://archive.org/details/wrterbuchderrom00barcgoog
- ro `tdrg3-solirom-ro-de` ro→de 2000–2005 https://tdrg.solirom.ro/
- ro `ia-tiktin-ro-de-historical` ro→de  https://archive.org/details/bub_gb_mCoTAAAAYAAJ
- ro `ia-alexi-ro-de-1906` ro→de  https://archive.org/details/rumnischdeutsch00alexgoog

Noraidītās rindas ir sources.csv ar rejected=true. Tās nav tipa A pamats.

OWNER veidne ir owner-fill-template.csv. Aizpildīti tikai nn, pt un ro reģistra lauki, kas ir šajā kokā. Lappuses, teksta slānis, licence un izruna ir tukši.

Citos lokālajos ref, kas nav origin/main, ir 393 ceļu rindas ar vārdiem dictionary, bilingual vai glossary. PDF paplašinājuma starp tām nav. To saturs šajā atskaitē netiek kopēts. Saraksts ir other-refs.csv.

