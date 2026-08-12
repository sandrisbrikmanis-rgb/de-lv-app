# CS–DE Věty FULL AUDIT

## KOPSAVILKUMS

- Dataset: Věty
- Audit mode: READ-ONLY
- Total objects: 796
- Audited objects: 796
- Coverage: 100%
- Batch size: 50
- Batch count: 16
- CRITICAL: 4
- HIGH: 146
- MEDIUM: 141
- LOW: 17
- SOURCE_DE_ISSUE: 0
- NEEDS_OWNER_REVIEW: 0
- FALSE_POSITIVE: 0
- Production changes: 0
- DE changes: 0
- Other-language changes: 0

## DETERMINISTISKĀ VALIDĀCIJA

| Pārbaude | Rezultāts |
|---|---|
| Strukturālā parity | PASS |
| DE READ-ONLY integritāte | PASS |
| Tehniskā kontrole | PASS |
| Ārvalodu atlikumi | PASS |
| sectionAccents | PASS |
| data/www sinhronizācija | PASS |
| JS sintakse | PASS |

**Deterministisko atradumu skaits:** 0

## LINGVISTISKĀ VALIDĀCIJA

| Metrika | Vērtība |
|---|---|
| Luna modelis | gpt-5.6-luna |
| Lingvistiski auditēti | 796/796 |
| Lingvistisko atradumu skaits | 308 |
| API pieprasījumi | 16 |
| Tokeni | 111718 |

## STUDY / COMPARISON STUDY VALIDĀCIJA

(Nav attiecināms šim datasetam)

## SECTIONACCENTS VALIDĀCIJA

(Nav attiecināms)

## FINDINGS

### CRITICAL (4)

### Finding 1: sentence-444

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-444
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** SEM
- **DE source:** Es zieht.
- **LV reference:** Velk.
- **Problem:** Český text je placeholder a neobsahuje překlad německé věty.
- **Recommended CS:** Táhne.
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 2: sentence-454

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-454
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Ano.
- **DE source:** Zu Pferde.
- **LV reference:** Jāšus.
- **Problem:** „Ano“ znamená německy „ja“ a vůbec nevyjadřuje jízdu na koni.
- **Recommended CS:** Na koni.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 3: sentence-569

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-569
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Je půl osmé.
- **DE source:** Es ist halb sieben.
- **LV reference:** Pulkstenis ir pus septiņi.
- **Problem:** V češtině „půl osmé“ znamená 7:30, zatímco německé „halb sieben“ znamená 6:30, tedy „půl sedmé“.
- **Recommended CS:** Je půl sedmé.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 4: sentence-599

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-599
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Vlak odjíždí v půl osmé.
- **DE source:** Der Zug fährt um halb sieben ab.
- **LV reference:** Vilciens atiet pus septiņos.
- **Problem:** „Halb sieben“ znamená 6:30, tedy česky „v půl sedmé“; „v půl osmé“ znamená 7:30.
- **Recommended CS:** Vlak odjíždí v půl sedmé.
- **Rationale:** Luna linguistic audit (1 confidence)


### HIGH (146)

### Finding 1: sentence-2

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-2
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Já to vím!
- **DE source:** Das kann ich mir denken!
- **LV reference:** To es gan zinu!
- **Problem:** Německá věta znamená „To si umím představit“ nebo „To jsem si mohl myslet“, ne „Já to vím“.
- **Recommended CS:** To si umím představit!
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 2: sentence-4

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-4
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Co potom?
- **DE source:** Was denn?
- **LV reference:** Ko tad?
- **Problem:** „Co potom?“ znamená „co pak/následně“, zatímco „Was denn?“ zde znamená „Co je?“ nebo „Copak?“.
- **Recommended CS:** Co je?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 3: sentence-7

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-7
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Vše ukazuje na případ.
- **DE source:** Alles deutet auf Regen.
- **LV reference:** Viss liecina par lietu.
- **Problem:** Německé „Regen“ znamená „déšť“, nikoli „případ“.
- **Recommended CS:** Vše ukazuje na déšť.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 4: sentence-8

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-8
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Nedává mi to smysl.
- **DE source:** Damit ist mir wenig gedient.
- **LV reference:** No tā man ir maza jēga.
- **Problem:** Věta znamená, že je to pro mluvčího málo užitečné, ne že to nedává smysl.
- **Recommended CS:** Málo mi to pomůže.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 5: sentence-16

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-16
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Prošli jste knihu pečlivě?
- **DE source:** Hast du das Buch durchgearbeitet?
- **LV reference:** Vai tu esi rūpīgi izgājis cauri grāmatai?
- **Problem:** Německé „du“ je jednotné číslo; české „jste“ je množné číslo nebo vykání.
- **Recommended CS:** Prošel jsi knihu pečlivě?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 6: sentence-18

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-18
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Můžu se tě zeptat?
- **DE source:** Darf ich Sie bitten?
- **LV reference:** Vai es drīkstu jūs lūgt?
- **Problem:** „Sie“ vyžaduje vykání a „bitten“ znamená poprosit, ne zeptat se.
- **Recommended CS:** Mohu vás poprosit?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 7: sentence-22

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-22
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Co vlastně chceš?
- **DE source:** Was wollen Sie eigentlich?
- **LV reference:** Ko jūs īsti gribat?
- **Problem:** Německé „Sie“ je formální druhá osoba množného čísla; české „chceš“ je tykání.
- **Recommended CS:** Co vlastně chcete?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 8: sentence-26

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-26
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Představte si, že jste nemocní.
- **DE source:** Du bildest dir nur ein, krank zu sein.
- **LV reference:** Tu tikai iedomājies, ka esi slims.
- **Problem:** Originál je oznamovací věta v tykání; současný text je vykací rozkaz a mění význam.
- **Recommended CS:** Jen si namlouváš, že jsi nemocný.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 9: sentence-27

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-27
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Co tě napadne?
- **DE source:** Was fällt dir ein?
- **LV reference:** Kas tev nāk prātā?
- **Problem:** Ustálené „Was fällt dir ein?“ vyjadřuje pohoršení, nikoli otázku, co člověka napadne.
- **Recommended CS:** Jak se opovažuješ?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 10: sentence-28

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-28
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Jednou tam bylo.
- **DE source:** Es war einmal.
- **LV reference:** Reiz bija.
- **Problem:** Pohádková formule „Es war einmal“ se česky překládá „Bylo nebylo“ nebo „Byl jednou jeden“.
- **Recommended CS:** Bylo nebylo.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 11: sentence-29

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-29
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Vstupte prosím!
- **DE source:** Steigen Sie bitte ein!
- **LV reference:** Lūdzu, iekāpiet!
- **Problem:** „Einsteigen“ znamená nastoupit do dopravního prostředku; „vstupte“ znamená vejít.
- **Recommended CS:** Nastupte prosím!
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 12: sentence-39

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-39
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Jak se jmenuješ
- **DE source:** Wie heißen Sie?
- **LV reference:** Kā jūs sauc?
- **Problem:** Je nutné vykání podle německého „Sie“ a chybí koncové české otazníkové znaménko.
- **Recommended CS:** Jak se jmenujete?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 13: sentence-42

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-42
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Mluvit! • Příběhy!
- **DE source:** Heraus mit der Sprache!
- **LV reference:** Runā! • Stāsti!
- **Problem:** Ustálené zvolání znamená „Ven s tím!“ nebo „Mluvte!“; „Příběhy“ je chybný význam.
- **Recommended CS:** Ven s tím! • Mluvte!
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 14: sentence-47

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-47
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Včera v noci
- **DE source:** heute Nacht
- **LV reference:** šonakt
- **Problem:** „Heute Nacht“ znamená „dnes v noci“ nebo „dnešní noc“, nikoli „včera v noci“.
- **Recommended CS:** Dnes v noci
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 15: sentence-65

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-65
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Na to byste měli dávat pozor.
- **DE source:** Darauf musst du achten.
- **LV reference:** Tam tev jāpievērš uzmanība.
- **Problem:** Český text mění neformální „ty“ na formální/množné „vy“ a „musíš“ na méně závazné „měl bys“.
- **Recommended CS:** Na to si musíš dát pozor.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 16: sentence-69

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-69
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Skončil jsem trénink. • Ukončila jsem vzdělání.
- **DE source:** Ich habe die Ausbildung absolviert.
- **LV reference:** Es pabeidzu apmācību. • Es pabeidzu izglītību.
- **Problem:** „Ausbildung“ znamená odborné vzdělání či přípravu, nikoli sportovní trénink ani obecné vzdělání.
- **Recommended CS:** Absolvoval jsem odborné vzdělání. • Absolvovala jsem odborné vzdělání.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 17: sentence-80

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-80
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Žádný nápad!
- **DE source:** Keine Ahnung!
- **LV reference:** Nav ne jausmas!
- **Problem:** „Keine Ahnung“ je české idiomatické „Nemám ponětí“, ne doslovné „Žádný nápad“.
- **Recommended CS:** Nemám ponětí!
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 18: sentence-98

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-98
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Najděte ozvěnu. • Najděte schopnost reagovat
- **DE source:** Anklang finden.
- **LV reference:** Rast atbalsi. • Atrast atsaucību
- **Problem:** Fráze znamená „najít ohlas/kladné přijetí“; český text má chybný imperativ a doslovné, nesmyslné významy.
- **Recommended CS:** Najít ohlas. • Setkat se s kladným přijetím.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 19: sentence-100

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-100
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Kvůli této době. • V tomto ohledu
- **DE source:** Aus diesem Anlass.
- **LV reference:** Šīs reizes dēļ. • Šajā sakarā
- **Problem:** Obě české varianty mají jiný význam: první odkazuje na dobu, druhá na hledisko.
- **Recommended CS:** Při této příležitosti.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 20: sentence-102

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-102
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Co jsi tam dělal
- **DE source:** Was hast du da angerichtet?
- **LV reference:** Ko tu tur esi izdarījis?
- **Problem:** Angerichtet znamená „provedl/způsobil“, ne neutrální „dělal“; chybí také otazník.
- **Recommended CS:** Co jsi tam provedl?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 21: sentence-106

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-106
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Nepředstírejte!
- **DE source:** Stell dich nicht so an!
- **LV reference:** Neizliecies!
- **Problem:** Německé rčení znamená nedělat scény nebo potíže, ne „nepředstírat“; navíc je zde vykání místo tykání.
- **Recommended CS:** Nedělej takové cavyky!
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 22: sentence-109

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-109
- **Field:** csText
- **Severity:** HIGH
- **Status:** NATURALNESS
- **Current CS text:** Chuť k jídlu!
- **DE source:** Guten Appetit!
- **LV reference:** Labu apetīti!
- **Problem:** „Chuť k jídlu“ označuje apetit, není to běžné české přání před jídlem.
- **Recommended CS:** Dobrou chuť!
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 23: sentence-116

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-116
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Teď se zastavím.
- **DE source:** Ich höre jetzt auf.
- **LV reference:** Es tagad beigšu.
- **Problem:** „Se zastavím“ znamená zastavit svůj pohyb; aufhören zde znamená přestat nebo skončit s činností.
- **Recommended CS:** Teď přestanu.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 24: sentence-122

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-122
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Pokryjte škody.
- **DE source:** Für den Schaden aufkommen.
- **LV reference:** Segt nodarītos zaudējumus.
- **Problem:** Německý infinitiv znamená nést náklady či uhradit škodu; české znění je vykací rozkaz a mění číslo.
- **Recommended CS:** Uhradit škodu.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 25: sentence-124

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-124
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Posaďte se rovně.
- **DE source:** Aufrecht sitzen.
- **LV reference:** Sēdēt taisni.
- **Problem:** „Posaďte se“ znamená sednout si, zatímco německé spojení znamená sedět ve vzpřímené poloze.
- **Recommended CS:** Sedět vzpřímeně.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 26: sentence-128

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-128
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Už se na mě nedívej!
- **DE source:** Geh mir aus den Augen!
- **LV reference:** Nerādies man vairs acīs!
- **Problem:** Německé rčení znamená odejít nebo zmizet z dohledu, ne přestat se na někoho dívat.
- **Recommended CS:** Zmiz mi z očí!
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 27: sentence-129

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-129
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Ve dvou. • Tiše
- **DE source:** Unter vier Augen.
- **LV reference:** Divatā. • Klusi
- **Problem:** Ustálené rčení znamená soukromě mezi dvěma lidmi; „tiše“ má jiný význam a „ve dvou“ význam nevyjadřuje přesně.
- **Recommended CS:** Mezi čtyřma očima.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 28: sentence-143

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-143
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Jezte venku.
- **DE source:** Auswärts essen.
- **LV reference:** Ēst ārpus mājas.
- **Problem:** Auswärts essen znamená jíst mimo domov, typicky v restauraci; „jezte venku“ znamená jíst venku či pod širým nebem.
- **Recommended CS:** Jíst mimo domov.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 29: sentence-148

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-148
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Odkládat. • Přetáhněte na délku • Odložte na neurčito
- **DE source:** Auf die lange Bank schieben.
- **LV reference:** Novilcināt. • Vilkt garumā • Atlikt uz nenoteiktu laiku
- **Problem:** „Přetáhněte na délku“ je nepřirozené a imperativní; druhý význam je protahovat či vléct.
- **Recommended CS:** Odkládat. • Protahovat. • Odkládat na neurčito.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 30: sentence-150

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-150
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Získejte rudu.
- **DE source:** Erz bauen.
- **LV reference:** Iegūt rūdu.
- **Problem:** Německé „Erz bauen“ znamená těžit rudu, nikoli získat ji v imperativu.
- **Recommended CS:** Těžit rudu.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 31: sentence-151

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-151
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Střílet. • Udělejte ze sebe blázna
- **DE source:** Mist bauen.
- **LV reference:** Sastrēlēt. • Izdarīt blēni
- **Problem:** Idiom znamená dělat hlouposti nebo chyby; „Střílet“ je významově nesprávné a druhá varianta je nepřesná.
- **Recommended CS:** Vyvádět hlouposti. • Dělat chyby
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 32: sentence-152

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-152
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Byla mi přidělena práce.
- **DE source:** Ich bin beauftragt.
- **LV reference:** Man ir uzdots darbs.
- **Problem:** Německé „beauftragt“ znamená „pověřen“, ne „přidělena práce“; současně je uveden ženský rod.
- **Recommended CS:** Jsem pověřen(a).
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 33: sentence-164

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-164
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Spuštění
- **DE source:** Bei Beginn.
- **LV reference:** Sākot.
- **Problem:** Německé spojení znamená „na začátku“; „spuštění“ označuje zahájení procesu nebo zařízení.
- **Recommended CS:** Na začátku.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 34: sentence-180

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-180
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Investujte svůj podíl.
- **DE source:** Beitrag leisten.
- **LV reference:** Ieguldīt savu daļu.
- **Problem:** „Beitrag leisten“ znamená přispět nebo podílet se, ne investovat svůj podíl.
- **Recommended CS:** Přispět svým dílem.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 35: sentence-183

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-183
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Sendviče s polevou.
- **DE source:** Belegte Brötchen.
- **LV reference:** Sviestmaizes ar uzlikumiem.
- **Problem:** „Belegt“ u housek znamená obložené nebo plněné; „poleva“ je icing/glazura.
- **Recommended CS:** Obložené housky.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 36: sentence-188

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-188
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Buďte připraveni. • Buďte v klidu
- **DE source:** Bereit sein.
- **LV reference:** Būt gatavam. • Būt ar mieru
- **Problem:** Druhá česká varianta znamená „být klidný“, nikoli „být připraven“, a přidává nesouvisející význam.
- **Recommended CS:** Být připraven.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 37: sentence-190

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-190
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zpráva. • Poskytněte zprávu • Poskytněte přehled
- **DE source:** Bericht erstatten.
- **LV reference:** Ziņot. • Sniegt ziņojumu • Sniegt pārskatu
- **Problem:** Výraz znamená podat nebo předložit zprávu; „Zpráva“ je jen podstatné jméno a „přehled“ mění význam.
- **Recommended CS:** Podat zprávu.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 38: sentence-197

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-197
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Cokoli chcete.
- **DE source:** Beim besten Willen.
- **LV reference:** Lai kā arī gribētu.
- **Problem:** Německý výraz znamená „při nejlepší vůli“ nebo „i kdybych sebevíc chtěl“, ne „cokoli chcete“.
- **Recommended CS:** Při nejlepší vůli.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 39: sentence-202

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-202
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Rozhodně. • Zcela bezpečné
- **DE source:** Ganz bestimmt.
- **LV reference:** Noteikti. • Pavisam droši
- **Problem:** „Zcela bezpečné“ znamená úplně bezpečné, nikoli rozhodně nebo určitě.
- **Recommended CS:** Rozhodně.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 40: sentence-203

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-203
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Přijďte navštívit.
- **DE source:** Zu Besuch kommen.
- **LV reference:** Nākt ciemos.
- **Problem:** Zdroj je infinitiv a znamená přijít na návštěvu; současný text je formální rozkaz s jinou vazbou.
- **Recommended CS:** Přijít na návštěvu.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 41: sentence-204

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-204
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Na návštěvu. • Navštívit
- **DE source:** Zu Besuch sein.
- **LV reference:** Būt ciemos. • Ciemoties
- **Problem:** Obě současné možnosti vyjadřují směr nebo děj navštívení, ne stav být na návštěvě.
- **Recommended CS:** Být na návštěvě.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 42: sentence-211

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-211
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Zaplať všechno.
- **DE source:** Alles bezahlen.
- **LV reference:** Samaksāt visu.
- **Problem:** Německý výraz je infinitiv, ale český překlad je rozkaz ve 2. osobě jednotného čísla.
- **Recommended CS:** Zaplatit všechno.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 43: sentence-217

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-217
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Trubte na trubku.
- **DE source:** Trompete blasen.
- **LV reference:** Pūst trompeti.
- **Problem:** Současný text je rozkaz; německý výraz je infinitiv. Přirozené české sloveso je „troubit“.
- **Recommended CS:** Troubit na trubku.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 44: sentence-218

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-218
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Roztřiďte knihu.
- **DE source:** In einem Buch blättern.
- **LV reference:** Šķirstīt grāmatu.
- **Problem:** „Roztřídit knihu“ znamená knihu kategorizovat; blättern znamená listovat.
- **Recommended CS:** Listovat v knize.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 45: sentence-219

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-219
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Bosé nohy.
- **DE source:** Mit bloßen Füßen.
- **LV reference:** Kailām kājām.
- **Problem:** Předložka „mit“ vyžaduje instrumentál; správně je „bosýma nohama“.
- **Recommended CS:** Bosýma nohama.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 46: sentence-223

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-223
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Kontrola. • Zkontrolujte
- **DE source:** Bitte checken.
- **LV reference:** Pārbaudīt. • Izkontrolēt
- **Problem:** Německá fráze je zdvořilá žádost; „Kontrola“ není slovesný překlad a druhá varianta mění formát i význam.
- **Recommended CS:** Prosím, zkontrolujte.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 47: sentence-225

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-225
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Všechno mluví dobře.
- **DE source:** Alles spricht dafür.
- **LV reference:** Viss runā par labu.
- **Problem:** Výraz znamená, že všechny okolnosti hovoří ve prospěch něčeho nebo tomu nasvědčují.
- **Recommended CS:** Všechno tomu nasvědčuje.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 48: sentence-226

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-226
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Nemůžu tam nic dělat.
- **DE source:** Ich kann nichts dafür.
- **LV reference:** Es tur neko nevaru darīt.
- **Problem:** Německá věta znamená „není to moje vina“ nebo „nemohu za to“, nikoli nemožnost něco dělat tam.
- **Recommended CS:** Nemůžu za to.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 49: sentence-236

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-236
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Aby...
- **DE source:** So dass...
- **LV reference:** Tā ka...
- **Problem:** „So dass“ vyjadřuje důsledek, zatímco „aby“ vyjadřuje účel.
- **Recommended CS:** Takže...
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 50: sentence-237

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-237
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Co si myslíš, že jsem?
- **DE source:** Für wen halten Sie mich?
- **LV reference:** Par ko jūs mani uzskatāt?
- **Problem:** Současný text používá neformální „ty“ a významově se ptá, co jsem, nikoli za koho mě považujete.
- **Recommended CS:** Za koho mě považujete?
- **Rationale:** Luna linguistic audit (0.99 confidence)


_... un vēl 96 HIGH atradumi (skat. reports/temp/cs-vety-audit/)._


### MEDIUM (141)

### Finding 1: sentence-3

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-3
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Je pak nemocný?
- **DE source:** Ist er denn krank?
- **LV reference:** Vai tad viņš ir slims?
- **Problem:** České „pak“ znamená spíše „potom“; částice „denn“ zde vyjadřuje podivení nebo zájem.
- **Recommended CS:** Je snad nemocný?
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 2: sentence-5

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-5
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Čím více.
- **DE source:** Desto mehr.
- **LV reference:** Jo vairāk.
- **Problem:** Samostatné „desto mehr“ znamená „o to více“; „čím více“ obvykle vyžaduje druhou část konstrukce.
- **Recommended CS:** O to více.
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 3: sentence-12

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-12
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Dvakrát větší.
- **DE source:** Doppelt so groß.
- **LV reference:** Divtik liels.
- **Problem:** „Dvakrát větší“ může v češtině znamenat o dvojnásobek větší; přesněji jde o dvojnásobnou velikost.
- **Recommended CS:** Dvakrát tak velký.
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 4: sentence-14

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-14
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Čas běží.
- **DE source:** Die Zeit drängt.
- **LV reference:** Laiks steidz.
- **Problem:** Německé rčení vyjadřuje naléhavost a nedostatek času, ne pouze jeho plynutí.
- **Recommended CS:** Čas tlačí.
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 5: sentence-17

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-17
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Neprocházejte! • Výjezd uzavřen!
- **DE source:** Kein Durchgang!
- **LV reference:** Cauri neiet! • Izeja aizvērta!
- **Problem:** „Durchgang“ znamená průchod, nikoli výjezd; druhá česká varianta mění význam.
- **Recommended CS:** Neprocházejte! • Průchod uzavřen!
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 6: sentence-50

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-50
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Můžete to prosím zopakovat?
- **DE source:** Kannst du das bitte wiederholen?
- **LV reference:** Vai vari, lūdzu, to atkārtot?
- **Problem:** Německé „kannst du“ i zdrojové LV používají neformální oslovení, zatímco český text je formální.
- **Recommended CS:** Můžeš to prosím zopakovat?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 7: sentence-62

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-62
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Zavolej mi.
- **DE source:** Rufen Sie mich an.
- **LV reference:** Piezvaniet man.
- **Problem:** Německé „Sie“ i LV používají formální nebo množné oslovení, český překlad je neformální jednotné číslo.
- **Recommended CS:** Zavolejte mi.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 8: sentence-64

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-64
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Věnujte prosím pozornost provozu.
- **DE source:** Achte bitte auf den Verkehr.
- **LV reference:** Lūdzu, pievērs uzmanību satiksmei.
- **Problem:** „Achte“ je neformální jednotné oslovení, zatímco český text používá formální množné číslo.
- **Recommended CS:** Dávej prosím pozor na provoz.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 9: sentence-79

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-79
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Předtím jsme měli podobné problémy.
- **DE source:** Ähnliche Probleme hatten wir schon früher.
- **LV reference:** Līdzīgas problēmas mums jau bija agrāk.
- **Problem:** „Předtím“ obvykle odkazuje k určitému předchozímu okamžiku; zde má význam „už dříve“.
- **Recommended CS:** Podobné problémy jsme měli už dříve.
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 10: sentence-82

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-82
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Tyto šaty jsou stylově konzervativní.
- **DE source:** Dieses Kleid ist akademisch gekleidet.
- **LV reference:** Šī kleita ir stilīgi konservatīva.
- **Problem:** Český text překládá „akademisch“ jako „konzervativní“, což není stejný význam; německá formulace je navíc neobvyklá.
- **Recommended CS:** Tyto šaty jsou v akademickém stylu.
- **Rationale:** Luna linguistic audit (0.85 confidence)

### Finding 11: sentence-84

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-84
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Můžete kliknout na zařízení?
- **DE source:** Kannst du das Gerät anklicken?
- **LV reference:** Vai vari uzklikšķināt uz ierīces?
- **Problem:** Německé „kannst du“ i LV používají neformální oslovení, český překlad je formální.
- **Recommended CS:** Můžeš kliknout na zařízení?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 12: sentence-85

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-85
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Otevřete soubor a klikněte na něj.
- **DE source:** Bitte öffne die Datei und klicke darauf.
- **LV reference:** Lūdzu, atver failu un uzklikšķini uz tā.
- **Problem:** Německé i LV znění používá neformální jednotné oslovení, české znění formální množné číslo.
- **Recommended CS:** Otevři soubor a klikni na něj.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 13: sentence-94

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-94
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Vaši nabídku přijímám.
- **DE source:** Ich nehme dein Angebot an.
- **LV reference:** Es pieņemu tavu piedāvājumu.
- **Problem:** Německé „dein“ i LV používají neformální přivlastnění, české „Vaši“ je formální.
- **Recommended CS:** Tvoji nabídku přijímám.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 14: sentence-99

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-99
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Na tom záleží.
- **DE source:** Es kommt darauf an.
- **LV reference:** Tas ir atkarīgs no tā.
- **Problem:** „Es kommt darauf an“ znamená „záleží na tom“ ve smyslu závislosti; aktuální slovosled přirozeněji vyjadřuje jiný význam.
- **Recommended CS:** Záleží na tom.
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 15: sentence-113

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-113
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Prosím, otevřete dveře!
- **DE source:** Bitte mach die Tür auf!
- **LV reference:** Atver, lūdzu, durvis!
- **Problem:** Mach je tykání; české vykání mění adresáta a registr.
- **Recommended CS:** Prosím, otevři dveře!
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 16: sentence-119

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-119
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Rozčilovala mě.
- **DE source:** Sie hat mich aufgeregt.
- **LV reference:** Viņa mani aizkaitināja.
- **Problem:** Perfektivní německý děj vyjadřuje jednorázové rozčilení; české imperfektivum naznačuje průběh či opakování.
- **Recommended CS:** Rozčílila mě.
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 17: sentence-126

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-126
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Věnujte všechny své síly.
- **DE source:** Alle Kräfte aufwenden.
- **LV reference:** Veltīt visus spēkus.
- **Problem:** Původní české znění je rozkaz a znamená věnovat síly; německé spojení je infinitiv „vynaložit síly“.
- **Recommended CS:** Vynaložit veškeré síly.
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 18: sentence-127

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-127
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Velmi se snažte.
- **DE source:** Viel Mühe aufwenden.
- **LV reference:** Ļoti pūlēties.
- **Problem:** Německé spojení označuje vynaložení značného úsilí, ne pobídku „velmi se snažte“.
- **Recommended CS:** Vynaložit velké úsilí.
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 19: sentence-133

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-133
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Dejte důraz na vzhled.
- **DE source:** Auf Äußerlichkeiten Wert legen.
- **LV reference:** Piešķirt nozīmi ārienei.
- **Problem:** České znění je rozkaz; německý infinitiv označuje obecně dbát na vnější stránku.
- **Recommended CS:** Dbát na vnější vzhled.
- **Rationale:** Luna linguistic audit (0.92 confidence)

### Finding 20: sentence-140

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-140
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Kdy bylo mistrovství?
- **DE source:** Wann wurden die Meisterschaftskämpfe ausgetragen?
- **LV reference:** Kad notika čempionāts?
- **Problem:** České znění zobecňuje množné číslo „mistrovské zápasy“ na celou soutěž nebo mistrovství.
- **Recommended CS:** Kdy se konaly mistrovské zápasy?
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 21: sentence-156

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-156
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Pokud...
- **DE source:** Unter der Bedingung, dass...
- **LV reference:** Ar noteikumu, ka...
- **Problem:** „Pokud“ vyjadřuje obecnou podmínku, ale vypouští význam výslovně uvedené podmínky.
- **Recommended CS:** Za podmínky, že...
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 22: sentence-157

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-157
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** NATURALNESS
- **Current CS text:** Vypadá depresivně.
- **DE source:** Sie sieht bedrückt aus.
- **LV reference:** Viņa izskatās nomākta.
- **Problem:** „Bedrückt“ zde znamená skleslý nebo zaražený; „depresivně“ zní nepřirozeně a klinicky.
- **Recommended CS:** Vypadá sklesle.
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 23: sentence-166

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-166
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** S doprovodem.
- **DE source:** Mit seiner Begleitung.
- **LV reference:** Ar pavadību.
- **Problem:** Česká verze vypouští přivlastnění „jeho“, které je v německém originálu výslovně uvedeno.
- **Recommended CS:** S jeho doprovodem.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 24: sentence-167

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-167
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** NATURALNESS
- **Current CS text:** Je pomalý na vnímání. • Má pomalé myšlení
- **DE source:** Er ist schwer von Begriff.
- **LV reference:** Viņš lēni uztver. • Viņam ir gausa domāšana
- **Problem:** „Pomalý na vnímání“ není přirozené české spojení; idiom označuje pomalé chápání.
- **Recommended CS:** Pomalu chápe. • Má pomalé myšlení
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 25: sentence-170

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-170
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Abych byl při smyslech.
- **DE source:** Bei Sinnen sein.
- **LV reference:** Būt pie pilna prāta.
- **Problem:** Německý infinitiv je přeložen vedlejší větou v 1. osobě, což mění gramatickou strukturu i význam.
- **Recommended CS:** Být při smyslech.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 26: sentence-172

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-172
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Vůbec ne.
- **DE source:** Bei weitem nicht so.
- **LV reference:** Nepavisam ne.
- **Problem:** „Bei weitem nicht so“ znamená „zdaleka ne tolik/tak“, nikoli obecné „vůbec ne“.
- **Recommended CS:** Zdaleka ne tolik.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 27: sentence-179

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-179
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Na pomoc. • Poskytněte pomoc
- **DE source:** Beistand leisten.
- **LV reference:** Palīdzēt. • Sniegt palīdzību
- **Problem:** „Na pomoc“ není významově ani gramaticky ekvivalentní infinitivu; druhá varianta je zbytečně v imperativu.
- **Recommended CS:** Poskytnout pomoc.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 28: sentence-189

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-189
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Záchrana obětí v případě nehody.
- **DE source:** Unfallopfer bergen.
- **LV reference:** Glābt nelaimes gadījumā cietušos.
- **Problem:** Německý infinitiv označuje činnost; česká verze je pouze podstatné jméno a navíc zní jako obecný popis.
- **Recommended CS:** Zachraňovat oběti nehody.
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 29: sentence-198

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-198
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Nejlepší.
- **DE source:** Am besten.
- **LV reference:** Vislabāk.
- **Problem:** „Am besten“ je příslovce „nejlépe“; „nejlepší“ je přídavné jméno.
- **Recommended CS:** Nejlépe.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 30: sentence-201

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-201
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Pozdravit.
- **DE source:** Grüße bestellen.
- **LV reference:** Pasveicināt.
- **Problem:** Výraz znamená vyřídit někomu pozdravy, nikoli obecně někoho pozdravit.
- **Recommended CS:** Vyřídit pozdravy.
- **Rationale:** Luna linguistic audit (0.98 confidence)


_... un vēl 111 MEDIUM atradumi (skat. reports/temp/cs-vety-audit/)._


### LOW (17)

### Finding 1: sentence-63

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-63
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Prosím vypněte rádio.
- **DE source:** Bitte stellen Sie das Radio ab.
- **LV reference:** Lūdzu, izslēdziet radio.
- **Problem:** Po úvodním „Prosím“ se v češtině píše čárka.
- **Recommended CS:** Prosím, vypněte rádio.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 2: sentence-92

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-92
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Můžeš mi zavolat později
- **DE source:** Kannst du mich später anrufen?
- **LV reference:** Vai vari man piezvanīt vēlāk?
- **Problem:** České tázací souvětí postrádá koncové otazníkové znaménko.
- **Recommended CS:** Můžeš mi zavolat později?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 3: sentence-266

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-266
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Pamatuješ si mě • Myslel jsi na mě?
- **DE source:** Gedenkst du meiner?
- **LV reference:** Vai tu mani atceries? • Vai tu par mani iedomājies?
- **Problem:** První česká otázková varianta postrádá otazník.
- **Recommended CS:** Pamatuješ si mě? • Myslel jsi na mě?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 4: sentence-271

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-271
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Až do teď
- **DE source:** bis jetzt
- **LV reference:** līdz šim brīdim
- **Problem:** „Až do teď“ je méně přirozené; běžný krátký ekvivalent je „doteď“ nebo „dosud“.
- **Recommended CS:** Doteď
- **Rationale:** Luna linguistic audit (0.92 confidence)

### Finding 5: sentence-297

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-297
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Co to děláš
- **DE source:** Was machst du?
- **LV reference:** Ko tu dari?
- **Problem:** Česká otázka postrádá otazník.
- **Recommended CS:** Co to děláš?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 6: sentence-336

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-336
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Kolik je hodin
- **DE source:** Wie spät ist es?
- **LV reference:** Cik ir pulkstenis?
- **Problem:** The Czech question is missing the required question mark.
- **Recommended CS:** Kolik je hodin?
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 7: sentence-340

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-340
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Jak se máte
- **DE source:** Wie steht’s?
- **LV reference:** Kā klājas?
- **Problem:** The Czech question is missing the required question mark.
- **Recommended CS:** Jak se máte?
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 8: sentence-357

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-357
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** A to
- **DE source:** und zwar
- **LV reference:** proti
- **Problem:** „A to“ je možné, ale jako ustálený ekvivalent „und zwar“ je přirozenější „a sice“.
- **Recommended CS:** A sice
- **Rationale:** Luna linguistic audit (0.88 confidence)

### Finding 9: sentence-379

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-379
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Především. • Především
- **DE source:** Vor allem.
- **LV reference:** Pirmkārt. • Vispirms
- **Problem:** Český text obsahuje dvakrát stejný překlad místo jediné smysluplné položky.
- **Recommended CS:** Především.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 10: sentence-438

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-438
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Jak dlouho
- **DE source:** Wie lange?
- **LV reference:** Cik ilgi?
- **Problem:** Chybí otazník na konci otázky.
- **Recommended CS:** Jak dlouho?
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 11: sentence-506

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-506
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Kde je ručník
- **DE source:** Wo ist das Handtuch?
- **LV reference:** Kur ir dvielis?
- **Problem:** Chybí otazník na konci otázky.
- **Recommended CS:** Kde je ručník?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 12: sentence-515

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-515
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Jaký je tady nepořádek!
- **DE source:** Was für ein Chaos hier!
- **LV reference:** Cik šeit ir nekārtība!
- **Problem:** Význam je srozumitelný, ale česká exklamativní konstrukce „To je ale…“ lépe odpovídá německému zvolání.
- **Recommended CS:** To je ale nepořádek!
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 13: sentence-538

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-538
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Máš dnes večer volno
- **DE source:** Bist du heute Abend frei?
- **LV reference:** Vai tev šovakar ir brīvs?
- **Problem:** Chybí otazník na konci otázky.
- **Recommended CS:** Máš dnes večer volno?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 14: sentence-544

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-544
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Kdy jdeš spát
- **DE source:** Wann gehst du ins Bett?
- **LV reference:** Kad tu ej gulēt?
- **Problem:** Chybí otazník na konci otázky.
- **Recommended CS:** Kdy jdeš spát?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 15: sentence-640

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-640
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Půjdu do kavárny vypít kávu.
- **DE source:** Ich gehe ins Café einen Kaffee trinken.
- **LV reference:** Iešu kafejnīcā izdzert kafiju.
- **Problem:** „Vypít kávu“ je doslovné a méně přirozené; běžná česká kolokace je „jít do kavárny na kávu“.
- **Recommended CS:** Půjdu do kavárny na kávu.
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 16: sentence-688

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-688
- **Field:** csText
- **Severity:** LOW
- **Status:** SEMANTICS
- **Current CS text:** Je vždy milý a hodný.
- **DE source:** Er ist immer nett und freundlich.
- **LV reference:** Viņš vienmēr ir jauks un laipns.
- **Problem:** „Hodný“ může znamenat poslušný nebo dobře vychovaný; „freundlich“ zde přesněji odpovídá „přátelský“.
- **Recommended CS:** Je vždy milý a přátelský.
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 17: sentence-707

- **Dataset:** vety
- **Batch:** linguistic
- **Card/Index:** sentence-707
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Mluvíš německy
- **DE source:** Sprichst du Deutsch?
- **LV reference:** Vai tu runā vācu?
- **Problem:** Chybí otazník na konci otázky.
- **Recommended CS:** Mluvíš německy?
- **Rationale:** Luna linguistic audit (1 confidence)


## SOURCE_DE_ISSUES

_Nav SOURCE_DE_ISSUE atradumu._


## NEEDS_OWNER_REVIEW

_Nav NEEDS_OWNER_REVIEW atradumu._


## FALSE POSITIVES

_Nav dokumentētu FALSE_POSITIVE._

## GALA STATUSS

- 100% datasets auditēts: **JĀ**
- Neauditēti objekti: 0
- Audits pilnīgs: **JĀ**
- Production dati mainīti: **NĒ (0 izmaiņu)**
- DE READ-ONLY: **PASS**

---

_Audita datums: 2026-08-10_
_Režīms: READ-ONLY — nekādas production izmaiņas_
_Pagaidu artefakti: reports/temp/cs-vety-audit/_
