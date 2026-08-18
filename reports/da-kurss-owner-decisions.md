# DA–DE Kurss — OWNER decisions — pilns Luna re-audits

Avots: `reports/da-kurss-owner-review.md`  
Findings: **69/69**  
DE = **STRICT READ-ONLY**

## OWNER kopsavilkums

| Statuss | Skaits |
|---|---:|
| LABOT | 41 |
| NELABOT | 6 |
| FALSE_POSITIVE | 2 |
| NEEDS_SOURCE_REVIEW | 20 |
| **Kopā** | **69** |

> Vārdu lokalizācijas princips: izdomāti personvārdi DA saturā drīkst būt dāniski lokalizēti. Tāpēc `Johann → Jan` un `Franz → Frans` nav automātiski kļūdas; nekonsekventās `Franc` / `Francis` formas tiek izlīdzinātas uz `Frans`.
>
> `NEEDS_SOURCE_REVIEW` izmantots tikai tur, kur audits dod saīsinātu/daļēju `legacyHtml`, latvisku PROPOSED_DA vai norāda uz iespējamu source/DE problēmu. Šos laukus nedrīkst minēt vai pārrakstīt mehāniski.

## Decisions

| Finding | Statuss | OWNER_DECISION |
|---:|---|---|
| 1 | **NEEDS_SOURCE_REVIEW** | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 2 | **NEEDS_SOURCE_REVIEW** | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 3 | **NEEDS_SOURCE_REVIEW** | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 4 | **NEEDS_SOURCE_REVIEW** | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 5 | **NEEDS_SOURCE_REVIEW** | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 6 | **NEEDS_SOURCE_REVIEW** | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 7 | **NEEDS_SOURCE_REVIEW** | Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam. |
| 8 | **NEEDS_SOURCE_REVIEW** | Izrunas paneļa pilnais HTML jāpārskata kā viens veselums; atsevišķu LV transkripciju mehāniska nomaiņa nav droša. |
| 9 | **NEEDS_SOURCE_REVIEW** | Līdzskaņu paneļa pilnais HTML jāpārskata kā viens veselums; atsevišķu transkripciju mehāniska nomaiņa nav droša. |
| 10 | **NEEDS_SOURCE_REVIEW** | Audita PROPOSED_DA ir latviski, nevis dāniski. Nepieciešams pilns avota fragments un dāņu lokalizācija. |
| 11 | **NEEDS_SOURCE_REVIEW** | Audita PROPOSED_DA ir latviski, nevis dāniski, un aprakstītas vairākas semantiskas kļūdas vienā HTML laukā. Nepieciešams pilns avota fragments. |
| 12 | **LABOT** | Artikler, pronominer og oversættelse |
| 13 | **NEEDS_SOURCE_REVIEW** | Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks satur vairākas dažādas kļūdas. Nepieciešams pilns avota fragments. |
| 14 | **NEEDS_SOURCE_REVIEW** | Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks satur vairākas dažādas kļūdas. Nepieciešams pilns avota fragments. |
| 15 | **NEEDS_SOURCE_REVIEW** | Audita PROPOSED_DA ir latviski, nevis dāniski. Pilnais grammar/legacyHtml saturs jāpārskata pret avotu. |
| 16 | **NEEDS_SOURCE_REVIEW** | Pašreizējais dāņu subtitle ir valodiski korekts, bet audits norāda uz iespējamu neatbilstību LV MASTER tēmai. Pirms maiņas jāpārbauda faktiskā Lesson 6 struktūra. |
| 17 | **NEEDS_SOURCE_REVIEW** | Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks ir plaši piesārņots. Nepieciešams pilns avota fragments. |
| 18 | **LABOT** | singen — at synge |
| 19 | **FALSE_POSITIVE** | Audit finding ir tukšs: nav Lesson/ID, Path, CURRENT_DA, PROPOSED_DA, Problem vai Reason. Nav identificējama production labojuma. |
| 20 | **NELABOT** | Eleven læser højt og tydeligt. |
| 21 | **LABOT** | Har du åbnet vinduet? |
| 22 | **LABOT** | Nej, jeg har ikke åbnet vinduet. |
| 23 | **LABOT** | Frans har ingen pen og ingen blyant. |
| 24 | **LABOT** | Skriver Frans også? |
| 25 | **LABOT** | Nej, Frans skriver ikke, han tegner. |
| 26 | **LABOT** | das Gummi — gummi |
| 27 | **NELABOT** | Han hedder Jan. |
| 28 | **NELABOT** | Frans er den største. |
| 29 | **LABOT** | Hvad hedder de? |
| 30 | **NELABOT** | Nej, Robert og Jan laver ikke gymnastik. |
| 31 | **NELABOT** | Robert og Jan, lav gymnastik! |
| 32 | **LABOT** | Wollen udtrykker et bevidst ønske om at gøre noget. |
| 33 | **LABOT** | Hvis projektet bruger moderne stavemåde, kan du skrive: du isst, er/sie/es isst, ihr esst. |
| 34 | **LABOT** | Mor, må jeg spise blommerne? |
| 35 | **LABOT** | I dativ flertal får artiklen formen den, og navneordet får ofte endelsen -n. |
| 36 | **LABOT** | Ord, der ofte bruges uden artikel: die Milch, das Brot. |
| 37 | **LABOT** | Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning. |
| 38 | **LABOT** | Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning. |
| 39 | **LABOT** | Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning. |
| 40 | **LABOT** | Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning. |
| 41 | **LABOT** | Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning. |
| 42 | **LABOT** | Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning. |
| 43 | **LABOT** | Nej, hun taler med vennerne. |
| 44 | **LABOT** | Alle hæfter er i mappen. |
| 45 | **LABOT** | Jeg tager hæfterne ud af mappen. |
| 46 | **NEEDS_SOURCE_REVIEW** | Hele artikelpanelet indeholder flere uafhængige fejl. Der kræves et komplet, autoritativt dansk HTML-felt før COPY-ONLY apply. |
| 47 | **LABOT** | <p class="artikuli-explain">For nogle ord kan artiklen ikke bestemmes pålideligt ud fra endelsen eller det danske køn. De læres bedst sammen med artiklen.</p> |
| 48 | **LABOT** | <div class="kurss-example">-er → ofte DER, for eksempel: der Computer, der Lehrer <span class="artikuli-note">Men ikke altid</span></div> |
| 49 | **LABOT** | <h4 class="artikuli-header"><span>♀</span>Ofte DIE</h4> |
| 50 | **LABOT** | <div class="kurss-example">Ihn - ham (m.)</div><div class="kurss-example">Sie - hende (f.)</div><div class="kurss-example">Es - det</div><div class="kurss-example">Uns - os</div> |
| 51 | **LABOT** | <div class="kurss-example">Wir mögen <span class="case-red">Euch</span>. – Vi kan lide jer.</div><div class="kurss-example">Wir danken <span class="case-green">Euch</span>. – Vi takker jer.</div> |
| 52 | **LABOT** | <li><span class="case-blue">Nominativ</span> - sætningens subjekt (hvem gør noget?)</li><li><span class="case-red">Akkusativ</span> - direkte objekt (hvad?)</li><li><span class="case-green">Dativ</span> - indirekte objekt (til hvem?)</li> |
| 53 | **LABOT** | <div>Nominativ er altid sætningens subjekt, mens Akkusativ og Dativ er objekterne. Se på verbet, og spørg: <span class="case-red">Hvad?</span> eller <span class="case-green">Hvem?</span></div> |
| 54 | **LABOT** | <div class="kurss-example">warm (varm) - varm</div><div class="kurss-example">Hut (hūt) - hat</div><div class="kurss-example">Schlaf (šlāf) - søvn</div> |
| 55 | **LABOT** | <div class="kurss-example">scharf (šarf) - skarp</div><div class="kurss-example">Häuser (hoizer) - huse</div><div class="kurss-example">ihm (īm) - ham</div> |
| 56 | **LABOT** | <h4>Langt i = ie</h4> ... <p>Langt i på tysk skrives ofte som ie.</p> |
| 57 | **LABOT** | <div class="kurss-example">Zeichnen (caihnen) - tegne</div><div class="kurss-example">Zahl (cāl) - tal</div> |
| 58 | **LABOT** | <p>"s" i begyndelsen af et ord lyder ofte som "z".</p> |
| 59 | **LABOT** | <div class="kurss-example">Vater (fāter) - far</div><div class="kurss-example">Vier (fīr) - fire</div> |
| 60 | **LABOT** | <div class="kurss-example">ß → s</li> |
| 61 | **NEEDS_SOURCE_REVIEW** | Verb-panelet skal sammenlignes komplet med LV MASTER for struktur og indhold. Auditteksten indeholder ikke et fuldt autoritativt replacement. |
| 62 | **NEEDS_SOURCE_REVIEW** | Panelet har flere fejljusterede eksempler. De viste delrettelser er korrekte, men hele HTML-feltet skal gennemgås samlet før COPY-ONLY apply. |
| 63 | **NEEDS_SOURCE_REVIEW** | DA-sætningen er korrekt som dansk, men audit peger på en mulig DE/source-fejl (`Es`). DE er STRICT READ-ONLY, så DA må ikke ændres uden source-afklaring. |
| 64 | **NELABOT** | Nej, eleven svarer ikke dårligt, hun svarer godt. |
| 65 | **LABOT** | Hvordan er penneholderen? |
| 66 | **LABOT** | Penneholderen er sort. |
| 67 | **FALSE_POSITIVE** | at spørge |
| 68 | **LABOT** | at tælle |
| 69 | **LABOT** | at åbne |

## Copy/paste — agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
2	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
3	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
4	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
5	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
6	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
7	NEEDS_SOURCE_REVIEW	Pilns `legacyHtml` lauks jāpārskata pret LV MASTER un korekti jālokalizē dāniski; ar auditā saīsināto lauku nepietiek drošam COPY-ONLY aizvietojumam.
8	NEEDS_SOURCE_REVIEW	Izrunas paneļa pilnais HTML jāpārskata kā viens veselums; atsevišķu LV transkripciju mehāniska nomaiņa nav droša.
9	NEEDS_SOURCE_REVIEW	Līdzskaņu paneļa pilnais HTML jāpārskata kā viens veselums; atsevišķu transkripciju mehāniska nomaiņa nav droša.
10	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski. Nepieciešams pilns avota fragments un dāņu lokalizācija.
11	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski, un aprakstītas vairākas semantiskas kļūdas vienā HTML laukā. Nepieciešams pilns avota fragments.
12	LABOT	Artikler, pronominer og oversættelse
13	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks satur vairākas dažādas kļūdas. Nepieciešams pilns avota fragments.
14	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks satur vairākas dažādas kļūdas. Nepieciešams pilns avota fragments.
15	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski. Pilnais grammar/legacyHtml saturs jāpārskata pret avotu.
16	NEEDS_SOURCE_REVIEW	Pašreizējais dāņu subtitle ir valodiski korekts, bet audits norāda uz iespējamu neatbilstību LV MASTER tēmai. Pirms maiņas jāpārbauda faktiskā Lesson 6 struktūra.
17	NEEDS_SOURCE_REVIEW	Audita PROPOSED_DA ir latviski, nevis dāniski, un lauks ir plaši piesārņots. Nepieciešams pilns avota fragments.
18	LABOT	singen — at synge
19	FALSE_POSITIVE	Audit finding ir tukšs: nav Lesson/ID, Path, CURRENT_DA, PROPOSED_DA, Problem vai Reason. Nav identificējama production labojuma.
20	NELABOT	Eleven læser højt og tydeligt.
21	LABOT	Har du åbnet vinduet?
22	LABOT	Nej, jeg har ikke åbnet vinduet.
23	LABOT	Frans har ingen pen og ingen blyant.
24	LABOT	Skriver Frans også?
25	LABOT	Nej, Frans skriver ikke, han tegner.
26	LABOT	das Gummi — gummi
27	NELABOT	Han hedder Jan.
28	NELABOT	Frans er den største.
29	LABOT	Hvad hedder de?
30	NELABOT	Nej, Robert og Jan laver ikke gymnastik.
31	NELABOT	Robert og Jan, lav gymnastik!
32	LABOT	Wollen udtrykker et bevidst ønske om at gøre noget.
33	LABOT	Hvis projektet bruger moderne stavemåde, kan du skrive: du isst, er/sie/es isst, ihr esst.
34	LABOT	Mor, må jeg spise blommerne?
35	LABOT	I dativ flertal får artiklen formen den, og navneordet får ofte endelsen -n.
36	LABOT	Ord, der ofte bruges uden artikel: die Milch, das Brot.
37	LABOT	Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
38	LABOT	Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
39	LABOT	Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
40	LABOT	Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
41	LABOT	Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
42	LABOT	Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
43	LABOT	Nej, hun taler med vennerne.
44	LABOT	Alle hæfter er i mappen.
45	LABOT	Jeg tager hæfterne ud af mappen.
46	NEEDS_SOURCE_REVIEW	Hele artikelpanelet indeholder flere uafhængige fejl. Der kræves et komplet, autoritativt dansk HTML-felt før COPY-ONLY apply.
47	LABOT	<p class="artikuli-explain">For nogle ord kan artiklen ikke bestemmes pålideligt ud fra endelsen eller det danske køn. De læres bedst sammen med artiklen.</p>
48	LABOT	<div class="kurss-example">-er → ofte DER, for eksempel: der Computer, der Lehrer <span class="artikuli-note">Men ikke altid</span></div>
49	LABOT	<h4 class="artikuli-header"><span>♀</span>Ofte DIE</h4>
50	LABOT	<div class="kurss-example">Ihn - ham (m.)</div><div class="kurss-example">Sie - hende (f.)</div><div class="kurss-example">Es - det</div><div class="kurss-example">Uns - os</div>
51	LABOT	<div class="kurss-example">Wir mögen <span class="case-red">Euch</span>. – Vi kan lide jer.</div><div class="kurss-example">Wir danken <span class="case-green">Euch</span>. – Vi takker jer.</div>
52	LABOT	<li><span class="case-blue">Nominativ</span> - sætningens subjekt (hvem gør noget?)</li><li><span class="case-red">Akkusativ</span> - direkte objekt (hvad?)</li><li><span class="case-green">Dativ</span> - indirekte objekt (til hvem?)</li>
53	LABOT	<div>Nominativ er altid sætningens subjekt, mens Akkusativ og Dativ er objekterne. Se på verbet, og spørg: <span class="case-red">Hvad?</span> eller <span class="case-green">Hvem?</span></div>
54	LABOT	<div class="kurss-example">warm (varm) - varm</div><div class="kurss-example">Hut (hūt) - hat</div><div class="kurss-example">Schlaf (šlāf) - søvn</div>
55	LABOT	<div class="kurss-example">scharf (šarf) - skarp</div><div class="kurss-example">Häuser (hoizer) - huse</div><div class="kurss-example">ihm (īm) - ham</div>
56	LABOT	<h4>Langt i = ie</h4> ... <p>Langt i på tysk skrives ofte som ie.</p>
57	LABOT	<div class="kurss-example">Zeichnen (caihnen) - tegne</div><div class="kurss-example">Zahl (cāl) - tal</div>
58	LABOT	<p>"s" i begyndelsen af et ord lyder ofte som "z".</p>
59	LABOT	<div class="kurss-example">Vater (fāter) - far</div><div class="kurss-example">Vier (fīr) - fire</div>
60	LABOT	<div class="kurss-example">ß → s</li>
61	NEEDS_SOURCE_REVIEW	Verb-panelet skal sammenlignes komplet med LV MASTER for struktur og indhold. Auditteksten indeholder ikke et fuldt autoritativt replacement.
62	NEEDS_SOURCE_REVIEW	Panelet har flere fejljusterede eksempler. De viste delrettelser er korrekte, men hele HTML-feltet skal gennemgås samlet før COPY-ONLY apply.
63	NEEDS_SOURCE_REVIEW	DA-sætningen er korrekt som dansk, men audit peger på en mulig DE/source-fejl (`Es`). DE er STRICT READ-ONLY, så DA må ikke ændres uden source-afklaring.
64	NELABOT	Nej, eleven svarer ikke dårligt, hun svarer godt.
65	LABOT	Hvordan er penneholderen?
66	LABOT	Penneholderen er sort.
67	FALSE_POSITIVE	at spørge
68	LABOT	at tælle
69	LABOT	at åbne
```
