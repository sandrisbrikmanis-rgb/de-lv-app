# kurssSentenceStructureLesson — CS native translation source

> **Workflow:** Translate LV reference → Czech. Fill **APPROVED_CS** only.
> **DE LOCKED:** Do not change DE column / German fragments.
> **Apply:** `node scripts/apply-cs-kurss-native-extra.js --section=sentence-structure` (after approval)

## UI menu (kurss card)

| Field | LV reference | CURRENT_CS | APPROVED_CS |
|-------|--------------|------------|-------------|
| menuTitle | Teikumu uzbūve | Struktura vět | Struktura vět |
| menuDesc | Vienkārša vārdu secība vācu teikumos. | Jednoduchý slovosled v německých větách. | Jednoduchý slovosled v německých větách. |

## Page title

| ID | LV reference | CURRENT_CS | APPROVED_CS |
|----|--------------|------------|-------------|
| `page/title` | Teikumu uzbūve | Struktura vět | Struktura vět |

## Intro

| ID | LV reference | CURRENT_CS | APPROVED_CS |
|----|--------------|------------|-------------|
| `page/intro` | Jautājuma teikumā darbības vārds vācu valodā parasti stāv pirmajā vietā. | V tázací větě je sloveso v němčině obvykle na prvním místě. | V tázací větě stojí sloveso v němčině obvykle na prvním místě. |

## Section headings

| ID | LV reference | CURRENT_CS | APPROVED_CS |
|----|--------------|------------|-------------|
| `section[0]/heading` | Piemēri | Příklady | Příklady |
| `section[1]/heading` | Jautājumi ar “was” | Otázky s "byl" | Otázky s „was“ |
| `section[2]/heading` | Noliegums ar “nicht” | Negace s "nicht" | Zápor s „nicht“ |
| `section[3]/heading` | Teikumi no 2. lekcijas | Věty z 2. přednášky | Věty z 2. lekce |

## Section paragraphs

| ID | LV reference | CURRENT_CS | APPROVED_CS |
|----|--------------|------------|-------------|
| `section[1]/paragraph[0]` | Ja jautājums sākas ar jautājamo vārdu, darbības vārds vācu valodā parasti stāv tūlīt aiz jautājamā vārda. | Pokud otázka začíná tázacím slovem, sloveso v němčině obvykle následuje bezprostředně za tázacím slovem. | Pokud otázka začíná tázacím slovem, stojí sloveso v němčině obvykle hned za tázacím slovem. |
| `section[2]/paragraph[0]` | Ja noliegums “nicht” attiecas uz darbības vārdu, tas vācu valodā parasti stāv pēc darbības vārda. | Když se negace „nicht“ vztahuje ke slovesu, obvykle následuje za slovesem v němčině. | Pokud se zápor „nicht“ vztahuje ke slovesu, stojí v němčině obvykle za slovesem. |

## Examples — Czech suffix (DE locked)

| ID | DE (locked) | LV reference (suffix) | CURRENT_CS (suffix) | APPROVED_CS (suffix) |
|----|-------------|------------------------|---------------------|----------------------|
| `section[0]/example[0]/native` | Du kommst. | Tu nāc. | Pojďte. | Přicházíš. |
| `section[0]/example[1]/native` | Kommst du? | Vai tu nāc? | Odkud pocházíš? "Jdeš?" | Přicházíš? |
| `section[0]/example[2]/native` | Er singt. | Viņš dzied. | Zpívá. | Zpívá. |
| `section[0]/example[3]/native` | Singt er? | Vai viņš dzied? | On zpívá? | Zpívá? |
| `section[0]/example[4]/native` | Stehst du? | Vai tu stāvi? | Spěcháš? "Stojíš?" | Stojíš? |
| `section[0]/example[5]/native` | Ja, ich stehe. | Jā, es stāvu. | Ano, stojím. | Ano, stojím. |
| `section[0]/example[6]/native` | Geht ihr? | Vai jūs ejat? | Get a? "Jdeš?" | Jdete? |
| `section[0]/example[7]/native` | Ja, wir gehen. | Jā, mēs ejam. | Ano, jdeme. | Ano, jdeme. |
| `section[1]/example[0]/native` | Was tust du? | Ko tu dari? | Co to děláš? "Co to děláš?" | Co děláš? |
| `section[1]/example[1]/native` | Was tut er? | Ko viņš dara? | Co to dělá? | Co dělá? |
| `section[1]/example[2]/native` | Was tut sie? | Ko viņa dara? | Byl tut sie? "Co dělá?" | Co dělá? |
| `section[1]/example[3]/native` | Was tun sie? | Ko viņi / viņas dara? | Co dělají? | Co dělají? |
| `section[2]/example[0]/native` | Ich spiele nicht. | Es nespēlēju. | Nehraju. | Nehraji. |
| `section[2]/example[1]/native` | Paul fragt nicht. | Pauls nejautā. | Pavel se neptá. | Pavel se neptá. |
| `section[2]/example[2]/native` | Er kommt nicht. | Viņš nenāk. | Nepřijde. | Nepřichází. |
| `section[2]/example[3]/native` | Sie singen nicht. | Viņi / viņas nedzied. | Oni / oni nezpívají. | Nezpívají. |
| `section[3]/example[0]/native` | Spielst du? | Vai tu spēlē? | Hraješ? "Hraješ?" | Hraješ? |
| `section[3]/example[1]/native` | Nein, ich spiele nicht, ich arbeite. | Nē, es nespēlēju, es strādāju. | Ne, nehraju, pracuji. | Ne, nehraji, pracuji. |
| `section[3]/example[2]/native` | Paul fragt nicht, er arbeitet. | Pauls nejautā, viņš strādā. | Pavel se neptá, on pracuje. | Pavel se neptá, pracuje. |
| `section[3]/example[3]/native` | Arbeitest du? | Vai tu strādā? | Vy pracujete? | Pracuješ? |
| `section[3]/example[4]/native` | Nein, ich arbeite nicht, ich singe. | Nē, es nestrādāju, es dziedu. | Ne, nepracuji, zpívám. | Ne, nepracuji, zpívám. |
| `section[3]/example[5]/native` | Was tut Paul? | Ko dara Pauls? | Co dělá Paul? | Co dělá Pavel? |
| `section[3]/example[6]/native` | Er spielt. | Viņš spēlē. | Hraje. | Hraje. |
| `section[3]/example[7]/native` | Was tut Marie? | Ko dara Marija? | Co dělá Maria? | Co dělá Marie? |
| `section[3]/example[8]/native` | Sie singt. | Viņa dzied. | Zpívá. | Zpívá. |
| `section[3]/example[9]/native` | Paul spielt, aber Marie singt. | Pauls spēlē, bet Marija dzied. | Pavel hraje, ale Maria zpívá. | Pavel hraje, ale Marie zpívá. |
| `section[3]/example[10]/native` | Singt ihr? | Vai jūs dziedat? | Zpíváš? | Zpíváte? |
| `section[3]/example[11]/native` | Nein, wir singen nicht, wir arbeiten. | Nē, mēs nedziedam, mēs strādājam. | Ne, nezpíváme, pracujeme. | Ne, nezpíváme, pracujeme. |
| `section[3]/example[12]/native` | Was tun Paul und Marie? | Ko dara Pauls un Marija? | Co dělají Paul a Maria? | Co dělají Pavel a Marie? |
| `section[3]/example[13]/native` | Sie fragen. | Viņi jautā. | Ptají se. | Ptají se. |
| `section[3]/example[14]/native` | Sie antworten nicht. | Viņi neatbild. | Neodpovídají. | Neodpovídají. |
| `section[3]/example[15]/native` | Wer arbeitet? | Kas strādā? | Kdo pracuje? | Kdo pracuje? |
| `section[3]/example[16]/native` | Wir arbeiten. | Mēs strādājam. | Pracujeme. | Pracujeme. |
| `section[3]/example[17]/native` | Wir rechnen und zeichnen. | Mēs rēķinām un zīmējam. | Počítáme a kreslíme. | Počítáme a kreslíme. |
| `section[3]/example[18]/native` | Sie kommen, sie fragen, sie antworten, sie arbeiten, sie spielen, sie singen, sie gehen. | Viņi / viņas nāk, jautā, atbild, strādā, spēlē, dzied un iet. | Přicházejí, ptají se, odpovídají, pracují, hrají, zpívají a odcházejí. | Přicházejí, ptají se, odpovídají, pracují, hrají, zpívají a jdou. |

---
Total units: **43**
