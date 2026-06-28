# Study Card kvalitātes standarts

Šis fails ir galvenais kvalitātes standarts visām paplašinātajām Study kartītēm projektā. Tas attiecas uz abiem layout tipiem: `standardStudy` un `comparisonStudy`.

Standarts nemaina renderer darbību, dizainu, krāsu sistēmu vai esošo datu formātu. Tas nosaka, kā sagatavot datus, `sectionAccents` un pārbaudes, lai nākamās kartītes būtu vienotas un uzturamas.

## standardStudy struktūra

Katrai `standardStudy` kartītei jāizmanto esošā Study Card sistēma un jāatbalsta šādi datu lauki:

- `translation`
- `explanation`
- `examples`
- `comparison`
- `tip`
- `important`
- `sectionAccents`

Obligātās sadaļas:

- ℹ️ Skaidrojums
- ⏳ Piemēri
- ⚖️ Salīdzinājums
- 💡 Padoms
- ❗ Svarīgi

## comparisonStudy struktūra

`comparisonStudy` ir salīdzinājuma kartīšu variants, nevis atsevišķa sistēma. Tam jāizmanto tā pati highlight loģika, tās pašas krāsas, tā pati tumšā vizuālā valoda un kopīgie renderer komponenti, kur iespējams.

Katrai `comparisonStudy` kartītei jābūt stabilam `id` un šādiem pamata laukiem:

- `id`
- `layout: "comparisonStudy"`
- `title`
- `subtitle`
- `lead`
- `words`
- `examples`
- `comparisonTable`
- `tip`
- `important`
- `sectionAccents`

Ja kartītē ir papildu sadaļas, arī tām jāizmanto tā pati akcentu sistēma:

- `importantComparison`
- `mistakes`
- `remember`

## sectionAccents noteikumi

`sectionAccents` ir obligāts visām jaunām `standardStudy` un `comparisonStudy` kartītēm.

Akcenti jāliek tikai saturā, nevis galvenajā virsrakstā, DE apakšvirsrakstā vai sadaļu nosaukumos. Jāizceļ tikai galvenie semantiskie vārdi un frāzes.

Jāiekļauj:

- galvenie DE vārdi;
- galvenie LV tulkojumi;
- nozīmju atšķirības;
- salīdzinājuma vārdi;
- visi svarīgie piemēros izmantotie locījumi un formas;
- pilnas frāzes, ja tieši frāze ir mācāmā nozīme.

Nedrīkst izcelt:

- visu teikumu;
- nejaušus palīgvārdus;
- vārdus tikai tāpēc, ka tie bieži atkārtojas;
- tekstu ārpus attiecīgās sadaļas;
- vārda daļu cita vārda iekšpusē.

## LV locījumi un formas

Ja LV nozīme tekstā parādās vairākās formās, `sectionAccents` jāiekļauj visas reāli izmantotās formas.

Piemēri:

- `lente`, `lenti`, `lentē`, `lentes`
- `saikne`, `saikni`, `saiknes`
- `grupa`, `grupu`, `grupas`
- `doties ceļā`, `dodas ceļā`, `devās ceļā`
- `aizbraukt`, `aizbraucu`, `aizbraucam`, `aizbrauc`
- `atiet`, `atgājis`, `atietu`
- `nobraukt`, `nobraucam`, `nobrauc`

Ja kartītes tekstā ir forma `dodas ceļā`, nepietiek ar akcentu `doties ceļā`; jānorāda abas frāzes.

## Highlight krāsu noteikumi

Izmantot tikai projekta fiksētās krāsas:

- `blue`
- `green`
- `yellow`
- `red`
- `purple`
- `orange`

Krāsas jālieto konsekventi vienas kartītes ietvaros. Ja viena nozīme sākta kā `purple`, tā nedrīkst citā sadaļā pēkšņi kļūt par nejaušu citu krāsu bez iemesla.

## sectionAccents formāts

Nemainīt esošo `sectionAccents` datu formātu. Jaunām kartītēm izmantot esošo struktūru, piemēram:

```js
sectionAccents: {
  explanation: {
    de: { blue: [...] },
    lv: { purple: [...] }
  },
  examples: [
    {
      de: { blue: [...] },
      lv: { purple: [...] }
    }
  ],
  comparison: [
    {
      word: { blue: [...] },
      meaning: { purple: [...] },
      example: { green: [...] }
    }
  ],
  tip: {},
  important: {}
}
```

Esošās kartītes drīkst saglabāt funkcionējošu atpakaļsavietojamu formātu, ja renderer to jau atbalsta.

## Kvalitātes pārbaudes

Pirms kartīti uzskatīt par gatavu, pārbaudīt:

- ir visas obligātās sadaļas;
- `examples` nav tukšs;
- `comparison` vai `comparisonTable` nav tukšs;
- `tip` nav tukšs;
- `important` nav tukšs;
- `sectionAccents` eksistē;
- visi galvenie LV tulkojumi ir akcentos;
- piemēru locījumi un formas ir akcentos;
- salīdzinājuma nozīmes ir akcentos;
- frāzes ir pievienotas pilnā formā;
- nav iekrāsoti veseli teikumi;
- nav nejaušu daļēju sakritību cita vārda iekšpusē;
- JavaScript sintakse iziet visiem mainītajiem JS failiem.

## Nākotnes kartīšu prasības

Visām nākamajām Study kartītēm:

- izmantot tikai esošo Study Card renderer sistēmu;
- nepievienot jaunu dizainu bez atsevišķa uzdevuma;
- nepārtaisīt krāsu sistēmu;
- nepārtaisīt `sectionAccents` formātu;
- uzturēt vienotu highlight principu starp `standardStudy` un `comparisonStudy`;
- galveno kartītes virsrakstu turēt īsu un precīzu;
- papildu nozīmes skaidrot Study sadaļās, nevis pārslogot galveno kartīti.

## CARD TITLE STANDARD (GLOBAL)

Šis noteikums attiecas UZ VISĀM kartītēm:
- parastajām kartītēm
- standardStudy
- comparisonStudy
- visām nākotnes kartītēm.

Priekšējās kartītes virsraksts ir paredzēts ātrai uztverei, nevis vārdnīcas ieraksta kopēšanai.

Tāpēc:

✓ izmantot tikai galvenās nozīmes
✓ atdalīt tās ar " • "
✓ saglabāt īsu un viegli salasāmu virsrakstu

NEDRĪKST izmantot:

- numerāciju (1., 2., 3....)
- semikolu virknes
- vārdnīcas stila uzskaitījumus
- garus paskaidrojumus
- liekas iekavas
- tehniskus paskaidrojumus virsrakstā

Detalizēti skaidrojumi pieder tikai paplašinātajai Study kartītei.

Mērķis:
Visām kartītēm jāizskatās vienādi un profesionāli.

# STUDY CARD TITLE STANDARD

Visām standardStudy un comparisonStudy kartītēm obligāti jāievēro viens virsrakstu standarts.

## 1. Vienots formāts

Ja vārdam ir vairākas galvenās nozīmes, tās jārāda vienā rindā šādā formātā:

Nozīme • Nozīme • Nozīme

Piemēri:

Vilciens • Gājiens • Procesija • Caurvējš

Koksne • Malka • Koks

Vieta • Darba vieta • Teksta vieta

Par velti • Veltīgi

Ķemme • Kore • Sekste

## 2. Nav atļauts

❌ numerācija

1.
2.
3.

❌ semikoli

vilciens; gājiens; ...

❌ gari paskaidrojumi virsrakstā

❌ teikuma formas

❌ nevajadzīgi sinonīmu uzskaitījumi

## 3. Atļauts

✔ nozīmes atdala tikai ar " • "

✔ katra nozīme sākas ar lielo burtu

✔ izmantot tikai galvenās praktiskās nozīmes

✔ retās vai specifiskās nozīmes paskaidrot kartītes saturā, nevis virsrakstā

✔ ja nozīme ir salikteņa sastāvdaļa (piemēram Gesichtszug), to neiekļaut pamata virsrakstā, ja vārds viens pats šo nozīmi ikdienā neizsaka.

## 4. Galvenais princips

Virsraksts ir ātrai uztverei.

Lietotājam 1–2 sekundēs jāsaprot, ko šis vācu vārds ikdienā visbiežāk nozīmē.

Virsraksts nav paredzēts pilnai vārdnīcas definīcijai.

Visas pārējās nozīmes jāizskaidro sadaļās:
• Skaidrojums
• Piemēri
• Salīdzinājums
• Padoms
• Svarīgi

## VIZUĀLĀ KRĀSU FILOZOFIJA

Krāsu izcelšana jeb highlight nav tikai dekorācija vai svarīgāko vārdu atzīmēšana.

Highlight ir daļa no mācību metodikas un palīdz:

- ātrāk uztvert informāciju;
- atšķirt vācu un latviešu atslēgvārdus;
- vieglāk iegaumēt nozīmes;
- vizuāli sadalīt tekstu;
- samazināt vienmuļa teksta efektu.

Tāpēc kartītēm jāizskatās vizuāli bagātīgām un dzīvām.

Highlight jāveido bagātīgs, bet tam vienmēr jākalpo mācībām. Krāsot tikai tos vārdus, frāzes un jēdzienus, kas palīdz iegaumēt nozīmi, lietojumu, kontekstu vai salīdzinājumu. Highlight nav dekorācija — tam jāvada lietotāja uzmanība uz svarīgāko. Izvairīties no nejaušas vai mehāniskas krāsošanas, kur tiek iekrāsots katrs otrais vai trešais vārds bez mācību ieguvuma.

### Obligātie noteikumi

1. Nedrīkst samazināt highlight daudzumu tikai tāpēc, ka teksts ir saprotams.
2. Ja tekstā iespējams izcelt mācībām nozīmīgu vārdu vai frāzi, tas ir jāizceļ.
3. Saglabāt aptuveni tādu pašu krāsu blīvumu kā pirmajām `standardStudy` kartītēm. Par vizuālo etalonu uzskatīt pirmās izveidotās kartītes, piemēram, `abfahren`, `das Band`, `kleiden`, `Holz` un `dabei`.
4. Kartītei jāizskatās bagātīgai, nevis pelēkai vai vienmuļai.
5. Krāsas ir daļa no UI dizaina un mācību procesa. Tās nedrīkst vienkāršot bez pamatota iemesla.
6. Ja iespējams izcelt vācu atslēgvārdu, latviešu galveno tulkojumu, salīdzināmo vārdu, svarīgu frāzi vai nozīmīgu jēdzienu, tad tas jādara.
7. Krāsu sistēmai jābūt konsekventai visās kartītēs.
8. Ja rodas šaubas, vai konkrēts vārds, frāze vai jēdziens būtu jāizceļ, jāizvēlas variants ar vairāk kvalitatīviem highlight, nevis mazāk. Priekšroka vienmēr dodama bagātīgākai, bet joprojām pārskatāmai kartītei.

### Kad drīkst samazināt highlight

Highlight samazināt drīkst tikai tad, ja:

- tiek traucēta lasāmība;
- tiek zaudēta krāsu loģika;
- rodas vizuāls haoss.

Nedrīkst samazināt highlight daudzumu:

- minimālisma dēļ;
- personīga dizaina stila dēļ;
- tikai tāpēc, ka teksts ir saprotams arī bez krāsām.

### Aizliegts

Codex nedrīkst:

- samazināt highlight daudzumu;
- aizstāt iekrāsotus vārdus ar baltiem tikai minimālisma dēļ;
- padarīt kartīti vizuāli nabadzīgāku;
- samazināt krāsu daudzumu bez konkrēta iemesla.

### Princips

Šīs aplikācijas mērķis nav minimālistisks dizains.

Mērķis ir maksimāli efektīvs mācību materiāls, kur krāsas kalpo kā atmiņas enkuri un palīdz lietotājam ātrāk uztvert un iegaumēt informāciju.

## DE-LV APP MASTER DESIGN SPECIFICATION v1.0

Šī specifikācija ir obligāts vizuālais standarts visām `standardStudy` kartītēm. Par etalonu tiek uzskatīta `abholen` kartīte.

### Vienots dizains

Visām `standardStudy` kartītēm ir identisks dizains. Mainās tikai saturs. Dizains, krāsas, fonti, tabulas, atstarpes un sadaļu secība nedrīkst mainīties katrai kartītei atsevišķi.

### Sadaļu secība

1. LV virsraksts
2. DE virsraksts
3. ℹ️ Skaidrojums
4. ⏳ Piemēri
5. ⚖️ Salīdzinājums, ja nepieciešams
6. 💡 Padoms, ja nepieciešams
7. ❗ Svarīgi, ja nepieciešams

Optional sadaļas bez datiem nedrīkst renderēt.

### Virsraksti

LV virsraksts ir liels, balts, trekns un centrēts.

DE virsraksts ir mazāks, pelēks, trekns un centrēts. DE virsrakstu nekad nedrīkst krāsot ar keyword krāsām.

### Fiksētās krāsas

- Galvenais fons: `#0B1116`
- Kartītes/bloku fons: `#101820`
- Skaidrojums: `#3FA7FF`
- Piemēri: `#3FA7FF`
- Salīdzinājums: `#B565FF`
- Padoms: `#FFD34D`
- Svarīgi: `#FF5B5B`

### Keyword krāsošana

Krāsot tikai atslēgvārdus, nevis veselus teikumus.

- zils: galvenais vācu vārds
- violets: galvenā LV nozīme/darbība
- zaļš: cilvēki, vietas, svarīgi elementi
- dzeltens: priekšmeti/objekti
- sarkans: salīdzināmais vai viegli sajaucamais vārds

### Tabulas

Piemēru tabula vienmēr izmanto secību:

`DE | = | LV`

Salīdzinājuma tabula vienmēr izmanto secību:

`Vārds | Nozīme | Piemērs`

### Vienādi bloki

Visiem blokiem un tabulām jāizmanto vienāds platums, padding, border-radius, robežas, atstarpes, fonta izmēri un responsive uzvedība.

### Aizliegts

Nedrīkst:

- mainīt sadaļu secību;
- mainīt krāsas;
- mainīt fontus;
- mainīt ikonas;
- mainīt tabulu dizainu;
- krāsot DE virsrakstu;
- vienai kartītei taisīt individuālu dizainu;
- vienai kartītei individuāli mainīt padding vai spacing.

Ja dizainu vajag mainīt nākotnē, vispirms jāatjaunina šī specifikācija, tikai pēc tam drīkst mainīt renderer/CSS.
