# G2/A1 LRB LRB-083 — OWNER VIEW

**Batch:** LRB-083
**Rows:** 50/50
**Languages:** RU 38, SK 0
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-13T16:28:14.917Z
**Source commit:** `aff88a14937f2297476e15ace4a3cd2d53455b6f`
**Branch:** `cursor/lrb-083-owner-authorization-ed35`
**Overrides SHA256:** `7d9196dcf026352e98798b1df1ba253936d41f0399c093c8313342771b5d0070`
**Classification:** `G2_A1_LRB_OWNER_APPROVED_OVERRIDES_APPLIED`

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB083-0001`
**Finding Stable ID:** `g2/a1/ro|verstehen|idx:621|lv, study.*|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** ro
**Card:** `verstehen|idx:621`
**Field / path:** `lv, study.*`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"A intelege","study.translation":"A intelege","study.explanation":"[\"Ideea principală: verstehen înseamnă a înțelege.\",\"Este folosit atunci când înțelegeți o limbă, o persoană, un text sau o situație.\",\"De obicei, nu trebuie să „știi” sau să „înveți” letonă aici • Sunt mai des können.\",\"O expresie foarte comună este Ich verstehe. = înțeleg.\"]","study.examples":"[{\"de\":\"Ich verstehe dich.\",\"lv\":\"Te înțeleg\"},{\"de\":\"Verstehst du Deutsch?\",\"lv\":\"Intelegi germana?\"},{\"de\":\"Ich verstehe das nicht.\",\"lv\":\"Nu înțeleg.\"},{\"de\":\"Ich kann Deutsch sprechen.\",\"lv\":\"Pot vorbi germana\"}]","study.comparison":"[{\"word\":\"verstehen\",\"meaning\":\"A intelege\",\"example\":\"Te înțeleg.\"},{\"word\":\"können\",\"meaning\":\"A putea/a cunoaste\",\"example\":\"Pot să înot.\"},{\"word\":\"wissen\",\"meaning\":\"Cunosc faptul\",\"example\":\"Știu asta.\"},{\"word\":\"kennen\",\"meaning\":\"A sti\",\"example\":\"Îl cunosc.\"}]","study.tip":"{\"text\":\"Amintiți-vă: înțelegeți textul/persoana → verstehen • A ști să faci ceva → können.\"}","study.important":"[\"Verstehen nu este cuvântul rădăcină pentru „a înțelege”.\",\"Ich verstehe Deutsch înseamnă „înțeleg germana”.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"A înțelege","study":{"id":"a1-verstehen","layout":"standardStudy","translation":"A înțelege","explanation":["Ideea principală: verstehen înseamnă «a înțelege».","Se folosește când înțelegi o limbă, o persoană, un text sau o situație.","Pentru capacitatea de a face ceva se folosește mai curând können.","O expresie foarte frecventă este Ich verstehe. = Înțeleg."],"examples":[{"de":"Ich verstehe dich.","lv":"Te înțeleg."},{"de":"Verstehst du Deutsch?","lv":"Înțelegi germana?"},{"de":"Ich verstehe das nicht.","lv":"Nu înțeleg asta."},{"de":"Ich kann Deutsch sprechen.","lv":"Știu să vorbesc germană."}],"comparison":[{"word":"verstehen","meaning":"A înțelege","example":"Ich verstehe dich. – Te înțeleg."},{"word":"können","meaning":"A putea • A ști să","example":"Ich kann schwimmen. – Știu să înot."},{"word":"wissen","meaning":"A ști un fapt","example":"Ich weiß das. – Știu asta."},{"word":"kennen","meaning":"A cunoaște","example":"Ich kenne ihn. – Îl cunosc."}],"tip":{"text":"Reține: a înțelege un text sau o persoană → verstehen; a ști să faci ceva → können."},"important":["verstehen nu înseamnă în primul rând «a ști să».","Ich verstehe Deutsch înseamnă «Înțeleg germana»."]}}
**Note:** Pilna RO kartīte «verstehen»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "verstehen",
  "lv": "A înțelege",
  "level": "A1",
  "study": {
    "id": "a1-verstehen",
    "layout": "standardStudy",
    "translation": "A înțelege",
    "explanation": [
      "Ideea principală: verstehen înseamnă «a înțelege».",
      "Se folosește când înțelegi o limbă, o persoană, un text sau o situație.",
      "Pentru capacitatea de a face ceva se folosește mai curând können.",
      "O expresie foarte frecventă este Ich verstehe. = Înțeleg."
    ],
    "examples": [
      {
        "de": "Ich verstehe dich.",
        "lv": "Te înțeleg."
      },
      {
        "de": "Verstehst du Deutsch?",
        "lv": "Înțelegi germana?"
      },
      {
        "de": "Ich verstehe das nicht.",
        "lv": "Nu înțeleg asta."
      },
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Știu să vorbesc germană."
      }
    ],
    "comparison": [
      {
        "word": "verstehen",
        "meaning": "A înțelege",
        "example": "Ich verstehe dich. – Te înțeleg."
      },
      {
        "word": "können",
        "meaning": "A putea • A ști să",
        "example": "Ich kann schwimmen. – Știu să înot."
      },
      {
        "word": "wissen",
        "meaning": "A ști un fapt",
        "example": "Ich weiß das. – Știu asta."
      },
      {
        "word": "kennen",
        "meaning": "A cunoaște",
        "example": "Ich kenne ihn. – Îl cunosc."
      }
    ],
    "tip": {
      "text": "Reține: a înțelege un text sau o persoană → verstehen; a ști să faci ceva → können."
    },
    "important": [
      "verstehen nu înseamnă în primul rând «a ști să».",
      "Ich verstehe Deutsch înseamnă «Înțeleg germana»."
    ]
  },
  "index": 621
}
```

---

## Finding 2

**Audit ID:** `LRB083-0002`
**Finding Stable ID:** `g2/a1/ro|vom|idx:634|lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `vom|idx:634`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Din","study.translation":"Din","study.explanation":"[\"Vom este prescurtare pentru prepoziția von și articolul dem.\",\"Forma completă: von dem (cui?).\",\"Folosit cu substantive masculine și neutre atunci când indică originea sau direcția de la ce.\",\"Răspunde la întrebări de la cine? sau de unde?\",\"În practică, vom este folosit aproape întotdeauna în loc de von dem complet.\"]","study.examples":"[{\"de\":\"Ich komme vom Bahnhof.\",\"lv\":\"Vin de la gară\"},{\"de\":\"Das Geschenk ist vom Vater.\",\"lv\":\"Cadoul este de la tată.\"},{\"de\":\"Er kommt vom Arzt.\",\"lv\":\"El vine de la doctor.\"},{\"de\":\"Sie fährt vom Flughafen.\",\"lv\":\"Ea conduce de la aeroport.\"},{\"de\":\"Das ist vom Markt.\",\"lv\":\"Este din piata.\"},{\"de\":\"Wir kommen vom Fest.\",\"lv\":\"Venim de la o sărbătoare.\"},{\"de\":\"Er holt Milch vom Bauern.\",\"lv\":\"Ia lapte de la fermier.\"},{\"de\":\"Die Nachricht ist vom Chef.\",\"lv\":\"Mesajul este de la sef.\"}]","study.comparison":"[{\"word\":\"vom\",\"meaning\":\"De la (un lucru anume, pentru cine?)\",\"example\":\"vom Bahnhof – Din gară\"},{\"word\":\"von\",\"meaning\":\"Din (general)\",\"example\":\"de la mine – no manis\"},{\"word\":\"aus\",\"meaning\":\"Din interior / origine\",\"example\":\"aus Deutschland – Din Germania\"},{\"word\":\"ab\",\"meaning\":\"Începând la (ora/locul)\",\"example\":\"ab Montag – De luni\"},{\"word\":\"zu\",\"meaning\":\"La / la (direcția opusă)\",\"example\":\"zum Arzt – La doctor\"}]","study.tip":"[\"Amintiți-vă: von + dem → vom (pentru cine?).\",\"În vorbirea colocvială, aproape niciodată nu spui von dem - folosește vom.\"]","study.important":"[\"Vom = von dem, numai cu un substantiv masculin sau neutru pentru cine? în inflexiune.\",\"Indică originea, sursa sau direcția de la ceva anume.\",\"Pentru genul feminin: von der Mutter, nu vom Mutter.\",\"A nu se confunda cu aus (țara de origine) sau ab (punctul de plecare).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"De la","study":{"id":"a1-vom","layout":"standardStudy","translation":"De la","explanation":["vom este contragerea prepoziției von cu articolul dem.","Forma completă este von dem, cu dativul.","Se folosește cu substantive masculine și neutre pentru a indica originea, sursa sau direcția dinspre ceva.","Răspunde la întrebările «de la cine?» sau «de unde?». ","În practică se folosește aproape întotdeauna vom, nu forma necontractată von dem."],"examples":[{"de":"Ich komme vom Bahnhof.","lv":"Vin de la gară."},{"de":"Das Geschenk ist vom Vater.","lv":"Cadoul este de la tată."},{"de":"Er kommt vom Arzt.","lv":"El vine de la medic."},{"de":"Sie fährt vom Flughafen.","lv":"Ea pleacă de la aeroport."},{"de":"Das ist vom Markt.","lv":"Asta este de la piață."},{"de":"Wir kommen vom Fest.","lv":"Venim de la petrecere."},{"de":"Er holt Milch vom Bauern.","lv":"El ia lapte de la fermier."},{"de":"Die Nachricht ist vom Chef.","lv":"Mesajul este de la șef."}],"comparison":[{"word":"vom","meaning":"De la • Dinspre (cu articolul dem)","example":"vom Bahnhof – de la gară"},{"word":"von","meaning":"De la • Din partea","example":"von mir – de la mine"},{"word":"aus","meaning":"Din interior • Dintr-o țară","example":"aus Deutschland – din Germania"},{"word":"ab","meaning":"Începând de la (timp sau loc)","example":"ab Montag – de luni"},{"word":"zu","meaning":"La • Către","example":"zum Arzt – la medic"}],"tip":["Reține: von + dem → vom.","În limba curentă se folosește contragerea vom."],"important":["vom = von dem și se folosește cu substantive masculine sau neutre la dativ.","Indică originea, sursa sau direcția dinspre ceva concret.","La feminin se spune von der Mutter, nu vom Mutter.","Nu confunda vom cu aus sau ab."]}}
**Note:** Pilna RO kartīte «vom»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vom",
  "lv": "De la",
  "level": "A1",
  "study": {
    "id": "a1-vom",
    "layout": "standardStudy",
    "translation": "De la",
    "explanation": [
      "vom este contragerea prepoziției von cu articolul dem.",
      "Forma completă este von dem, cu dativul.",
      "Se folosește cu substantive masculine și neutre pentru a indica originea, sursa sau direcția dinspre ceva.",
      "Răspunde la întrebările «de la cine?» sau «de unde?». ",
      "În practică se folosește aproape întotdeauna vom, nu forma necontractată von dem."
    ],
    "examples": [
      {
        "de": "Ich komme vom Bahnhof.",
        "lv": "Vin de la gară."
      },
      {
        "de": "Das Geschenk ist vom Vater.",
        "lv": "Cadoul este de la tată."
      },
      {
        "de": "Er kommt vom Arzt.",
        "lv": "El vine de la medic."
      },
      {
        "de": "Sie fährt vom Flughafen.",
        "lv": "Ea pleacă de la aeroport."
      },
      {
        "de": "Das ist vom Markt.",
        "lv": "Asta este de la piață."
      },
      {
        "de": "Wir kommen vom Fest.",
        "lv": "Venim de la petrecere."
      },
      {
        "de": "Er holt Milch vom Bauern.",
        "lv": "El ia lapte de la fermier."
      },
      {
        "de": "Die Nachricht ist vom Chef.",
        "lv": "Mesajul este de la șef."
      }
    ],
    "comparison": [
      {
        "word": "vom",
        "meaning": "De la • Dinspre (cu articolul dem)",
        "example": "vom Bahnhof – de la gară"
      },
      {
        "word": "von",
        "meaning": "De la • Din partea",
        "example": "von mir – de la mine"
      },
      {
        "word": "aus",
        "meaning": "Din interior • Dintr-o țară",
        "example": "aus Deutschland – din Germania"
      },
      {
        "word": "ab",
        "meaning": "Începând de la (timp sau loc)",
        "example": "ab Montag – de luni"
      },
      {
        "word": "zu",
        "meaning": "La • Către",
        "example": "zum Arzt – la medic"
      }
    ],
    "tip": [
      "Reține: von + dem → vom.",
      "În limba curentă se folosește contragerea vom."
    ],
    "important": [
      "vom = von dem și se folosește cu substantive masculine sau neutre la dativ.",
      "Indică originea, sursa sau direcția dinspre ceva concret.",
      "La feminin se spune von der Mutter, nu vom Mutter.",
      "Nu confunda vom cu aus sau ab."
    ]
  },
  "index": 634
}
```

---

## Finding 3

**Audit ID:** `LRB083-0003`
**Finding Stable ID:** `g2/a1/ro|vor|idx:636|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `vor|idx:636`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Înainte de • În faţa","study.translation":"Înainte de • În faţa","study.explanation":"[\"Ideea principală: vor înseamnă înainte în timp sau în fața locului.\",\"Când vine vorba de timp, vor înseamnă înainte.\",\"Când vine vorba de loc, vor înseamnă în fața sau la.\",\"În timpul ceasului, vor înseamnă „până”, de exemplu fünf vor acht.\"]","study.examples":"[{\"de\":\"Vor dem Essen wasche ich die Hände.\",\"lv\":\"Mă spăl pe mâini înainte de a mânca.\"},{\"de\":\"Das Auto steht vor dem Haus.\",\"lv\":\"Masina este parcata in fata casei.\"},{\"de\":\"Es ist fünf vor acht.\",\"lv\":\"Este cinci până la opt.\"},{\"de\":\"Nach dem Essen gehen wir spazieren.\",\"lv\":\"Dupa ce mancam mergem la plimbare.\"}]","study.comparison":"[{\"word\":\"vor\",\"meaning\":\"Inainte / in fata\",\"example\":\"Înainte de mâncare...\"},{\"word\":\"nach\",\"meaning\":\"După / la\",\"example\":\"După mâncare...\"},{\"word\":\"neben\",\"meaning\":\"Chiar lângă\",\"example\":\"Lângă casă.\"},{\"word\":\"hinter\",\"meaning\":\"Din spatele\",\"example\":\"În spatele casei.\"}]","study.important":"[\"Vor poate fi atât timp cât și loc.\",\"Vor dem Essen = înainte de a mânca • Vor dem Haus = in fata casei.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Înainte de • În fața","study":{"id":"a1-vor","layout":"standardStudy","translation":"Înainte de • În fața","explanation":["Ideea principală: vor înseamnă «înainte de» în timp sau «în fața» în spațiu.","Pentru timp, vor se traduce prin «înainte de».","Pentru loc, vor se traduce prin «în fața».","La indicarea orei, vor înseamnă «fără», de exemplu fünf vor acht."],"examples":[{"de":"Vor dem Essen wasche ich die Hände.","lv":"Înainte de masă mă spăl pe mâini."},{"de":"Das Auto steht vor dem Haus.","lv":"Mașina este în fața casei."},{"de":"Es ist fünf vor acht.","lv":"Este opt fără cinci."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"După masă mergem la plimbare."}],"comparison":[{"word":"vor","meaning":"Înainte de • În fața","example":"Vor dem Essen... – Înainte de masă..."},{"word":"nach","meaning":"După • Spre","example":"Nach dem Essen... – După masă..."},{"word":"neben","meaning":"Lângă","example":"Neben dem Haus. – Lângă casă."},{"word":"hinter","meaning":"În spatele","example":"Hinter dem Haus. – În spatele casei."}],"tip":{"text":"Reține: înainte în timp, în față în spațiu → vor."},"important":["vor poate exprima atât timpul, cât și locul.","vor dem Essen = înainte de masă; vor dem Haus = în fața casei."]}}
**Note:** Pilna RO kartīte «vor»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "vor",
  "lv": "Înainte de • În fața",
  "level": "A1",
  "study": {
    "id": "a1-vor",
    "layout": "standardStudy",
    "translation": "Înainte de • În fața",
    "explanation": [
      "Ideea principală: vor înseamnă «înainte de» în timp sau «în fața» în spațiu.",
      "Pentru timp, vor se traduce prin «înainte de».",
      "Pentru loc, vor se traduce prin «în fața».",
      "La indicarea orei, vor înseamnă «fără», de exemplu fünf vor acht."
    ],
    "examples": [
      {
        "de": "Vor dem Essen wasche ich die Hände.",
        "lv": "Înainte de masă mă spăl pe mâini."
      },
      {
        "de": "Das Auto steht vor dem Haus.",
        "lv": "Mașina este în fața casei."
      },
      {
        "de": "Es ist fünf vor acht.",
        "lv": "Este opt fără cinci."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "După masă mergem la plimbare."
      }
    ],
    "comparison": [
      {
        "word": "vor",
        "meaning": "Înainte de • În fața",
        "example": "Vor dem Essen... – Înainte de masă..."
      },
      {
        "word": "nach",
        "meaning": "După • Spre",
        "example": "Nach dem Essen... – După masă..."
      },
      {
        "word": "neben",
        "meaning": "Lângă",
        "example": "Neben dem Haus. – Lângă casă."
      },
      {
        "word": "hinter",
        "meaning": "În spatele",
        "example": "Hinter dem Haus. – În spatele casei."
      }
    ],
    "tip": {
      "text": "Reține: înainte în timp, în față în spațiu → vor."
    },
    "important": [
      "vor poate exprima atât timpul, cât și locul.",
      "vor dem Essen = înainte de masă; vor dem Haus = în fața casei."
    ]
  },
  "index": 636
}
```

---

## Finding 4

**Audit ID:** `LRB083-0004`
**Finding Stable ID:** `g2/a1/ro|was|idx:644|lv, study.translation, study.explanation, study.examples, study.tip, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `was|idx:644`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.tip, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Cine • Ce","study.translation":"Cine • Ce","study.explanation":"[\"Ideea principală: ce este un cuvânt de întrebare despre lucruri și evenimente - în letonă este ce sau ce, în funcție de partea din propoziție.\",\"A fost întreabă despre lucruri, evenimente și fapte, nu despre persoane.\",\"În germană, was nu se schimbă după inflexiune - arată întotdeauna ca a fost.\",\"Dacă was este subiectul propoziției, este tradus ca kas (Was ist das? = Ce este?) în letonă.\",\"Dacă was este complementul (obiectul) verbului, acesta este tradus ca ko (Was machst du? = Ce faci?) în letonă.\",\"Oamenii sunt întrebați cu wer (cine/cine), nu cu was.\"]","study.examples":"[{\"de\":\"Was ist das?\",\"lv\":\"Ce este?\"},{\"de\":\"Was ist passiert?\",\"lv\":\"Ce s-a întâmplat?\"},{\"de\":\"Was machst du gerade?\",\"lv\":\"Ce faci acum\"},{\"de\":\"Was möchtest du trinken?\",\"lv\":\"Ce vrei sa bei\"},{\"de\":\"Was bedeutet dieses Wort?\",\"lv\":\"Ce înseamnă acest cuvânt?\"},{\"de\":\"Was ist dein Lieblingsessen?\",\"lv\":\"Care este mâncarea ta preferată?\"},{\"de\":\"Was hast du gesagt?\",\"lv\":\"Ce ați spus\"}]","study.tip":"[\"A fost în sine nu se schimbă - în germană este întotdeauna a fost • În letonă, alege cine sau ce în funcție de partea de propoziție.\",\"Truc rapid: dacă la întrebare se poate răspunde cu „Este...”, folosește cine • Dacă răspunsul vine după verb ca complement, folosește ko.\"]","study.important":"[\"A fost întreabă despre lucruri, evenimente și fapte - niciodată despre persoane.\",\"Oamenii sunt întrebați cu wer (cine/cine), nu cu was.\",\"Was für (ein/eine) înseamnă cineva/ce despre și întreabă despre o calitate sau un tip (Was für ein Film ist das? = Ce fel de film este?).\",\"Incorect: Wer ist passiert? → Corect: a fost pasier?\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Ce","study":{"id":"a1-was","layout":"standardStudy","translation":"Ce","explanation":["Ideea principală: was este un cuvânt interogativ referitor la lucruri, evenimente și fapte.","was nu se folosește pentru persoane.","În germană, forma was nu se schimbă după caz.","Ca subiect sau complement, în română se traduce de regulă prin «ce».","În funcție de rolul din propoziție, răspunsul poate desemna subiectul sau obiectul acțiunii.","Pentru persoane se folosește wer, nu was."],"examples":[{"de":"Was ist das?","lv":"Ce este asta?"},{"de":"Was ist passiert?","lv":"Ce s-a întâmplat?"},{"de":"Was machst du gerade?","lv":"Ce faci acum?"},{"de":"Was möchtest du trinken?","lv":"Ce ai vrea să bei?"},{"de":"Was bedeutet dieses Wort?","lv":"Ce înseamnă acest cuvânt?"},{"de":"Was ist dein Lieblingsessen?","lv":"Care este mâncarea ta preferată?"},{"de":"Was hast du gesagt?","lv":"Ce ai spus?"}],"tip":["was rămâne neschimbat în germană și se traduce de obicei prin «ce».","Pentru persoane folosește wer."],"important":["was întreabă despre lucruri, evenimente și fapte, nu despre persoane.","Pentru persoane se folosește wer.","was für (ein/eine) înseamnă «ce fel de». ","Corect: Was ist passiert?; nu Wer ist passiert?"]}}
**Note:** Pilna RO kartīte «was»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "was",
  "lv": "Ce",
  "level": "A1",
  "study": {
    "id": "a1-was",
    "layout": "standardStudy",
    "translation": "Ce",
    "explanation": [
      "Ideea principală: was este un cuvânt interogativ referitor la lucruri, evenimente și fapte.",
      "was nu se folosește pentru persoane.",
      "În germană, forma was nu se schimbă după caz.",
      "Ca subiect sau complement, în română se traduce de regulă prin «ce».",
      "În funcție de rolul din propoziție, răspunsul poate desemna subiectul sau obiectul acțiunii.",
      "Pentru persoane se folosește wer, nu was."
    ],
    "examples": [
      {
        "de": "Was ist das?",
        "lv": "Ce este asta?"
      },
      {
        "de": "Was ist passiert?",
        "lv": "Ce s-a întâmplat?"
      },
      {
        "de": "Was machst du gerade?",
        "lv": "Ce faci acum?"
      },
      {
        "de": "Was möchtest du trinken?",
        "lv": "Ce ai vrea să bei?"
      },
      {
        "de": "Was bedeutet dieses Wort?",
        "lv": "Ce înseamnă acest cuvânt?"
      },
      {
        "de": "Was ist dein Lieblingsessen?",
        "lv": "Care este mâncarea ta preferată?"
      },
      {
        "de": "Was hast du gesagt?",
        "lv": "Ce ai spus?"
      }
    ],
    "tip": [
      "was rămâne neschimbat în germană și se traduce de obicei prin «ce».",
      "Pentru persoane folosește wer."
    ],
    "important": [
      "was întreabă despre lucruri, evenimente și fapte, nu despre persoane.",
      "Pentru persoane se folosește wer.",
      "was für (ein/eine) înseamnă «ce fel de». ",
      "Corect: Was ist passiert?; nu Wer ist passiert?"
    ]
  },
  "index": 644
}
```

---

## Finding 5

**Audit ID:** `LRB083-0005`
**Finding Stable ID:** `g2/a1/ro|wenn|idx:655|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `wenn|idx:655`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Dacă • Când","study.translation":"Dacă • Când","study.explanation":"[\"Ideea principală: wenn înseamnă dacă sau când, în funcție de situație.\",\"Dacă este o condiție, traduceți ca și cum.\",\"Dacă este vorba despre timp repetat sau general, traduceți ca când.\",\"După wenn, verbul se termină de obicei într-o propoziție germană.\"]","study.examples":"[{\"de\":\"Wenn du Zeit hast, komm vorbei.\",\"lv\":\"Dacă ai timp, treci pe aici.\"},{\"de\":\"Wenn es regnet, bleibe ich zu Hause.\",\"lv\":\"Dacă plouă, stau acasă.\"},{\"de\":\"Wenn ich müde bin, trinke ich Kaffee.\",\"lv\":\"Cand sunt obosit beau cafea.\"},{\"de\":\"Ich weiß nicht, ob er kommt.\",\"lv\":\"Nu stiu daca va veni.\"}]","study.comparison":"[{\"word\":\"wenn\",\"meaning\":\"Dacă / când\",\"example\":\"Dacă ai timp...\"},{\"word\":\"ob\",\"meaning\":\"Sau într-o întrebare indirectă\",\"example\":\"Nu știu dacă...\"},{\"word\":\"wann\",\"meaning\":\"Când este vorba\",\"example\":\"Când vii?\"},{\"word\":\"weil\",\"meaning\":\"Deoarece\",\"example\":\"Rămân pentru că sunt bolnav.\"}]","study.important":"[\"Wenn și wann nu sunt la fel.\",\"Când vii? există o întrebare. Wenn du kommst... este o condiție/tension.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Dacă • Când","study":{"id":"a1-wenn","layout":"standardStudy","translation":"Dacă • Când","explanation":["Ideea principală: wenn înseamnă «dacă» sau «când», în funcție de context.","Pentru o condiție, se traduce prin «dacă».","Pentru o situație repetată sau generală în timp, se traduce prin «când». ","În propoziția introdusă de wenn, verbul german stă de obicei la sfârșit."],"examples":[{"de":"Wenn du Zeit hast, komm vorbei.","lv":"Dacă ai timp, treci pe la mine."},{"de":"Wenn es regnet, bleibe ich zu Hause.","lv":"Dacă plouă, rămân acasă."},{"de":"Wenn ich müde bin, trinke ich Kaffee.","lv":"Când sunt obosit, beau cafea."},{"de":"Ich weiß nicht, ob er kommt.","lv":"Nu știu dacă vine."}],"comparison":[{"word":"wenn","meaning":"Dacă • Când","example":"Wenn du Zeit hast... – Dacă ai timp..."},{"word":"ob","meaning":"Dacă (întrebare indirectă)","example":"Ich weiß nicht, ob... – Nu știu dacă..."},{"word":"wann","meaning":"Când? (întrebare)","example":"Wann kommst du? – Când vii?"},{"word":"weil","meaning":"Pentru că","example":"Ich bleibe, weil ich krank bin. – Rămân pentru că sunt bolnav."}],"tip":{"text":"Reține: condiție sau situație repetată → wenn; întrebarea «când?» → wann."},"important":["wenn și wann nu sunt același lucru.","Wann kommst du? este o întrebare; Wenn du kommst... introduce o condiție sau un reper temporal."]}}
**Note:** Pilna RO kartīte «wenn»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wenn",
  "lv": "Dacă • Când",
  "level": "A1",
  "study": {
    "id": "a1-wenn",
    "layout": "standardStudy",
    "translation": "Dacă • Când",
    "explanation": [
      "Ideea principală: wenn înseamnă «dacă» sau «când», în funcție de context.",
      "Pentru o condiție, se traduce prin «dacă».",
      "Pentru o situație repetată sau generală în timp, se traduce prin «când». ",
      "În propoziția introdusă de wenn, verbul german stă de obicei la sfârșit."
    ],
    "examples": [
      {
        "de": "Wenn du Zeit hast, komm vorbei.",
        "lv": "Dacă ai timp, treci pe la mine."
      },
      {
        "de": "Wenn es regnet, bleibe ich zu Hause.",
        "lv": "Dacă plouă, rămân acasă."
      },
      {
        "de": "Wenn ich müde bin, trinke ich Kaffee.",
        "lv": "Când sunt obosit, beau cafea."
      },
      {
        "de": "Ich weiß nicht, ob er kommt.",
        "lv": "Nu știu dacă vine."
      }
    ],
    "comparison": [
      {
        "word": "wenn",
        "meaning": "Dacă • Când",
        "example": "Wenn du Zeit hast... – Dacă ai timp..."
      },
      {
        "word": "ob",
        "meaning": "Dacă (întrebare indirectă)",
        "example": "Ich weiß nicht, ob... – Nu știu dacă..."
      },
      {
        "word": "wann",
        "meaning": "Când? (întrebare)",
        "example": "Wann kommst du? – Când vii?"
      },
      {
        "word": "weil",
        "meaning": "Pentru că",
        "example": "Ich bleibe, weil ich krank bin. – Rămân pentru că sunt bolnav."
      }
    ],
    "tip": {
      "text": "Reține: condiție sau situație repetată → wenn; întrebarea «când?» → wann."
    },
    "important": [
      "wenn și wann nu sunt același lucru.",
      "Wann kommst du? este o întrebare; Wenn du kommst... introduce o condiție sau un reper temporal."
    ]
  },
  "index": 655
}
```

---

## Finding 6

**Audit ID:** `LRB083-0006`
**Finding Stable ID:** `g2/a1/ro|wer|idx:656|lv, study.translation, study.explanation, study.examples, study.tip, study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `wer|idx:656`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.tip, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Cine • Cine","study.translation":"Cine • Cine","study.explanation":"[\"Ideea principală: wer este un cuvânt de întrebare despre identitatea unei persoane - în letonă este cine sau cine.\",\"Întrebam despre oameni, nu despre lucruri sau evenimente.\",\"Lucrurile și evenimentele sunt întrebate cu was, nu cu wer.\",\"Wer în germană este de obicei subiectul unei propoziții (nominativ) — Wer ist das? = Ce este?\",\"Când întrebați exact care dintre mai multe persoane, wer este adesea folosit cu von (wer von euch = care dintre voi).\",\"Wer își schimbă forma în funcție de flexiune: wen (acuzativ), wem (dativ), wessen (genitiv) - este tocmai forma wer cea mai comună la nivelul A1.\"]","study.examples":"[{\"de\":\"Wer ist das?\",\"lv\":\"Ce este?\"},{\"de\":\"Wer bist du?\",\"lv\":\"Cine eşti tu\"},{\"de\":\"Wer kommt heute?\",\"lv\":\"Ce urmează azi?\"},{\"de\":\"Wer ist deine Lehrerin?\",\"lv\":\"Cine este profesorul tău\"},{\"de\":\"Wer von euch spricht Deutsch?\",\"lv\":\"Care dintre voi vorbeste germana?\"},{\"de\":\"Wer hat das gesagt?\",\"lv\":\"Cine a spus asta?\"},{\"de\":\"Wer möchte Kaffee?\",\"lv\":\"Cine vrea cafea?\"}]","study.tip":"[\"Wer întreabă despre persoane (cine/cine) - despre lucruri și evenimente, folosim was.\",\"Pentru a întreba despre o alegere între mai multe persoane, folosiți wer von... (care dintre...).\"]","study.important":"[\"Întrebam doar despre persoane, niciodată despre lucruri.\",\"Lucrurile și evenimentele sunt întrebate cu was, nu cu wer.\",\"Wer își schimbă forma prin inflexiune: wen, wem, wessen - dar forma de bază este wer.\",\"Incorect: Wer ist passiert? → Corect: a fost pasier?\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Cine","study":{"id":"a1-wer","layout":"standardStudy","translation":"Cine","explanation":["Ideea principală: wer întreabă despre identitatea unei persoane.","Se folosește pentru persoane, nu pentru lucruri sau evenimente.","Pentru lucruri și evenimente se folosește was.","wer este forma de nominativ: Wer ist das? = Cine este?","Pentru alegerea dintre mai multe persoane se poate spune wer von euch = care dintre voi.","Formele după caz sunt wen, wem și wessen."],"examples":[{"de":"Wer ist das?","lv":"Cine este?"},{"de":"Wer bist du?","lv":"Cine ești?"},{"de":"Wer kommt heute?","lv":"Cine vine astăzi?"},{"de":"Wer ist deine Lehrerin?","lv":"Cine este profesoara ta?"},{"de":"Wer von euch spricht Deutsch?","lv":"Care dintre voi vorbește germană?"},{"de":"Wer hat das gesagt?","lv":"Cine a spus asta?"},{"de":"Wer möchte Kaffee?","lv":"Cine dorește cafea?"}],"tip":["wer întreabă despre persoane; pentru lucruri și evenimente se folosește was.","Pentru o alegere între persoane: wer von... = care dintre..."],"important":["wer se referă numai la persoane.","Pentru lucruri și evenimente se folosește was.","Formele flexionate sunt wen, wem și wessen; forma de bază este wer.","Corect: Was ist passiert?; nu Wer ist passiert?"]}}
**Note:** Pilna RO kartīte «wer»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wer",
  "lv": "Cine",
  "level": "A1",
  "study": {
    "id": "a1-wer",
    "layout": "standardStudy",
    "translation": "Cine",
    "explanation": [
      "Ideea principală: wer întreabă despre identitatea unei persoane.",
      "Se folosește pentru persoane, nu pentru lucruri sau evenimente.",
      "Pentru lucruri și evenimente se folosește was.",
      "wer este forma de nominativ: Wer ist das? = Cine este?",
      "Pentru alegerea dintre mai multe persoane se poate spune wer von euch = care dintre voi.",
      "Formele după caz sunt wen, wem și wessen."
    ],
    "examples": [
      {
        "de": "Wer ist das?",
        "lv": "Cine este?"
      },
      {
        "de": "Wer bist du?",
        "lv": "Cine ești?"
      },
      {
        "de": "Wer kommt heute?",
        "lv": "Cine vine astăzi?"
      },
      {
        "de": "Wer ist deine Lehrerin?",
        "lv": "Cine este profesoara ta?"
      },
      {
        "de": "Wer von euch spricht Deutsch?",
        "lv": "Care dintre voi vorbește germană?"
      },
      {
        "de": "Wer hat das gesagt?",
        "lv": "Cine a spus asta?"
      },
      {
        "de": "Wer möchte Kaffee?",
        "lv": "Cine dorește cafea?"
      }
    ],
    "tip": [
      "wer întreabă despre persoane; pentru lucruri și evenimente se folosește was.",
      "Pentru o alegere între persoane: wer von... = care dintre..."
    ],
    "important": [
      "wer se referă numai la persoane.",
      "Pentru lucruri și evenimente se folosește was.",
      "Formele flexionate sunt wen, wem și wessen; forma de bază este wer.",
      "Corect: Was ist passiert?; nu Wer ist passiert?"
    ]
  },
  "index": 656
}
```

---

## Finding 7

**Audit ID:** `LRB083-0007`
**Finding Stable ID:** `g2/a1/ro|werden|idx:657|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `werden|idx:657`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"A deveni","study.translation":"A deveni","study.explanation":"[\"Ideea principală: werden la A1 înseamnă cel mai adesea a deveni.\",\"Este folosit când ceva se schimbă sau devine diferit.\",\"În germană ulterioară, werden este folosit și pentru viitor și pasiv.\",\"La nivelul A1, cea mai importantă frază este Ich werde müde. = Obosesc.\"]","study.examples":"[{\"de\":\"Ich werde müde.\",\"lv\":\"Ma obosesc.\"},{\"de\":\"Es wird kalt.\",\"lv\":\"Se face frig.\"},{\"de\":\"Sie wird Ärztin.\",\"lv\":\"Ea devine medic.\"},{\"de\":\"Ich bin müde.\",\"lv\":\"Sunt obosit\"}]","study.comparison":"[{\"word\":\"werden\",\"meaning\":\"A deveni\",\"example\":\"Mă obosesc.\"},{\"word\":\"sein\",\"meaning\":\"A fi\",\"example\":\"Sunt obosit.\"},{\"word\":\"bleiben\",\"meaning\":\"Şedere\",\"example\":\"Rămân aici.\"},{\"word\":\"machen\",\"meaning\":\"A face/a face\",\"example\":\"Fac asta.\"}]","study.tip":"{\"text\":\"Amintiți-vă: schimbarea/starea devine diferită → werden.\"}","study.important":"[\"Werden nu este la fel cu sein.\",\"Ich werde müde = mă obosesc • Ich bin müde = Sunt obosit.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"A deveni","study":{"id":"a1-werden","layout":"standardStudy","translation":"A deveni","explanation":["Ideea principală: la nivelul A1, werden înseamnă cel mai des «a deveni».","Se folosește când ceva se schimbă sau ajunge într-o altă stare.","În alte construcții, werden este folosit și pentru viitor și diateza pasivă.","O propoziție importantă este Ich werde müde. = Devin obosit."],"examples":[{"de":"Ich werde müde.","lv":"Devin obosit."},{"de":"Es wird kalt.","lv":"Se face frig."},{"de":"Sie wird Ärztin.","lv":"Ea devine medic."},{"de":"Ich bin müde.","lv":"Sunt obosit."}],"comparison":[{"word":"werden","meaning":"A deveni","example":"Ich werde müde. – Devin obosit."},{"word":"sein","meaning":"A fi","example":"Ich bin müde. – Sunt obosit."},{"word":"bleiben","meaning":"A rămâne","example":"Ich bleibe hier. – Rămân aici."},{"word":"machen","meaning":"A face","example":"Ich mache das. – Fac asta."}],"tip":{"text":"Reține: o schimbare de stare → werden."},"important":["werden nu este același lucru cu sein.","Ich werde müde = Devin obosit; Ich bin müde = Sunt obosit."]}}
**Note:** Pilna RO kartīte «werden»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "werden",
  "lv": "A deveni",
  "level": "A1",
  "study": {
    "id": "a1-werden",
    "layout": "standardStudy",
    "translation": "A deveni",
    "explanation": [
      "Ideea principală: la nivelul A1, werden înseamnă cel mai des «a deveni».",
      "Se folosește când ceva se schimbă sau ajunge într-o altă stare.",
      "În alte construcții, werden este folosit și pentru viitor și diateza pasivă.",
      "O propoziție importantă este Ich werde müde. = Devin obosit."
    ],
    "examples": [
      {
        "de": "Ich werde müde.",
        "lv": "Devin obosit."
      },
      {
        "de": "Es wird kalt.",
        "lv": "Se face frig."
      },
      {
        "de": "Sie wird Ärztin.",
        "lv": "Ea devine medic."
      },
      {
        "de": "Ich bin müde.",
        "lv": "Sunt obosit."
      }
    ],
    "comparison": [
      {
        "word": "werden",
        "meaning": "A deveni",
        "example": "Ich werde müde. – Devin obosit."
      },
      {
        "word": "sein",
        "meaning": "A fi",
        "example": "Ich bin müde. – Sunt obosit."
      },
      {
        "word": "bleiben",
        "meaning": "A rămâne",
        "example": "Ich bleibe hier. – Rămân aici."
      },
      {
        "word": "machen",
        "meaning": "A face",
        "example": "Ich mache das. – Fac asta."
      }
    ],
    "tip": {
      "text": "Reține: o schimbare de stare → werden."
    },
    "important": [
      "werden nu este același lucru cu sein.",
      "Ich werde müde = Devin obosit; Ich bin müde = Sunt obosit."
    ]
  },
  "index": 657
}
```

---

## Finding 8

**Audit ID:** `LRB083-0008`
**Finding Stable ID:** `g2/a1/ro|Wetter|idx:658|lv/study|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** ro
**Card:** `Wetter|idx:658`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Timp (vreme)","study.translation":"Timp (vreme)","study.explanation":"[\"Ideea principală: das Wetter înseamnă vreme - însorită, ploioasă, rece sau caldă.\",\"Cuvântul leton „laiks” poate însemna atât vremea, cât și ora de pe ceas - în germană este diferit.\",\"Vorbește despre vremea în natură cu das Wetter: Wie ist das Wetter heute?\",\"Das Wetter este adesea folosit într-o propoziție împreună cu cuvinte precum cald sau kalt.\",\"A nu se confunda cu die Zeit - este timpul ca moment sau oportunitate (Ich habe keine Zeit).\"]","study.examples":"[{\"de\":\"Wie ist das Wetter heute?\",\"lv\":\"Ce ora este azi?\"},{\"de\":\"Das Wetter ist schön.\",\"lv\":\"Vremea este frumoasa.\"},{\"de\":\"Das Wetter ist schlecht.\",\"lv\":\"Vremea este rea.\"},{\"de\":\"Im Winter ist das Wetter oft kalt.\",\"lv\":\"Vremea este adesea rece iarna.\"},{\"de\":\"Wir sprechen über das Wetter.\",\"lv\":\"Vorbim despre timp.\"},{\"de\":\"Morgen wird das Wetter besser.\",\"lv\":\"Maine vremea va fi mai buna.\"}]","study.comparison":"[{\"word\":\"Wetter\",\"meaning\":\"Conditiile meteo\",\"example\":\"Vremea este frumoasă.\"},{\"word\":\"Zeit\",\"meaning\":\"Timp (moment)\",\"example\":\"Nu am timp.\"},{\"word\":\"Regen\",\"meaning\":\"Ploaie\",\"example\":\"Plouă mult.\"},{\"word\":\"Sonne\",\"meaning\":\"Soarele\",\"example\":\"Soarele strălucește.\"}]","study.tip":"[\"Când vorbiți despre soare, ploaie sau temperatură de afară, utilizați das Wetter.\",\"Ține minte: Wie ist das Wetter? = Cât este ceasul? (nu un ceas).\"]","study.important":"[\"Das Wetter = vremea, nu ora ceasului.\",\"Die Zeit = timpul ca moment sau oportunitate - o altă carte A1.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Vreme","study":{"id":"a1-wetter","layout":"standardStudy","translation":"Vreme","explanation":["Ideea principală: das Wetter înseamnă vremea de afară.","În germană, Wetter este vremea, iar Zeit este timpul.","Pentru soare, ploaie, frig sau căldură se folosește das Wetter.","Întrebarea frecventă este Wie ist das Wetter heute?","Nu confunda das Wetter cu die Zeit."],"examples":[{"de":"Wie ist das Wetter heute?","lv":"Cum este vremea astăzi?"},{"de":"Das Wetter ist schön.","lv":"Vremea este frumoasă."},{"de":"Das Wetter ist schlecht.","lv":"Vremea este rea."},{"de":"Im Winter ist das Wetter oft kalt.","lv":"Iarna, vremea este adesea rece."},{"de":"Wir sprechen über das Wetter.","lv":"Vorbim despre vreme."},{"de":"Morgen wird das Wetter besser.","lv":"Mâine vremea va fi mai bună."}],"comparison":[{"word":"Wetter","meaning":"Vreme","example":"Das Wetter ist schön. – Vremea este frumoasă."},{"word":"Zeit","meaning":"Timp","example":"Ich habe keine Zeit. – Nu am timp."},{"word":"Regen","meaning":"Ploaie","example":"Es gibt viel Regen. – Plouă mult."},{"word":"Sonne","meaning":"Soare","example":"Die Sonne scheint. – Soarele strălucește."}],"tip":["Pentru soare, ploaie sau temperatura de afară folosește das Wetter.","Wie ist das Wetter? = Cum este vremea?"],"important":["das Wetter = vreme, nu timpul indicat de ceas.","die Zeit = timp; este un alt cuvânt."]}}
**Note:** Pilna RO kartīte «Wetter»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Wetter",
  "de_article": "das",
  "lv": "Vreme",
  "level": "A1",
  "study": {
    "id": "a1-wetter",
    "layout": "standardStudy",
    "translation": "Vreme",
    "explanation": [
      "Ideea principală: das Wetter înseamnă vremea de afară.",
      "În germană, Wetter este vremea, iar Zeit este timpul.",
      "Pentru soare, ploaie, frig sau căldură se folosește das Wetter.",
      "Întrebarea frecventă este Wie ist das Wetter heute?",
      "Nu confunda das Wetter cu die Zeit."
    ],
    "examples": [
      {
        "de": "Wie ist das Wetter heute?",
        "lv": "Cum este vremea astăzi?"
      },
      {
        "de": "Das Wetter ist schön.",
        "lv": "Vremea este frumoasă."
      },
      {
        "de": "Das Wetter ist schlecht.",
        "lv": "Vremea este rea."
      },
      {
        "de": "Im Winter ist das Wetter oft kalt.",
        "lv": "Iarna, vremea este adesea rece."
      },
      {
        "de": "Wir sprechen über das Wetter.",
        "lv": "Vorbim despre vreme."
      },
      {
        "de": "Morgen wird das Wetter besser.",
        "lv": "Mâine vremea va fi mai bună."
      }
    ],
    "comparison": [
      {
        "word": "Wetter",
        "meaning": "Vreme",
        "example": "Das Wetter ist schön. – Vremea este frumoasă."
      },
      {
        "word": "Zeit",
        "meaning": "Timp",
        "example": "Ich habe keine Zeit. – Nu am timp."
      },
      {
        "word": "Regen",
        "meaning": "Ploaie",
        "example": "Es gibt viel Regen. – Plouă mult."
      },
      {
        "word": "Sonne",
        "meaning": "Soare",
        "example": "Die Sonne scheint. – Soarele strălucește."
      }
    ],
    "tip": [
      "Pentru soare, ploaie sau temperatura de afară folosește das Wetter.",
      "Wie ist das Wetter? = Cum este vremea?"
    ],
    "important": [
      "das Wetter = vreme, nu timpul indicat de ceas.",
      "die Zeit = timp; este un alt cuvânt."
    ]
  },
  "index": 658
}
```

---

## Finding 9

**Audit ID:** `LRB083-0009`
**Finding Stable ID:** `g2/a1/ro|wie|idx:660|lv/study|CONTENT_ERROR|gpt-5.6-luna`
**Lang:** ro
**Card:** `wie|idx:660`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Cum • Cât","study.translation":"Cum • Cât","study.explanation":"[\"Ideea principală: se întreabă despre fel sau calitate (cum) și despre cantitate sau număr (cât), în funcție de context.\",\"Wie alone (Wie geht's?) întreabă despre cale - în letonă cum.\",\"Wie + adjectiv (wie viel, wie alt, wie lange) întreabă despre cantitatea, vârsta sau durata - cât în ​​letonă.\",\"Wie viel(e) înseamnă cât • Wie alt înseamnă câți ani • Wie lange înseamnă cât timp.\",\"În comparații, wie înseamnă ca (atât de groß wie = cât de mare).\"]","study.examples":"[{\"de\":\"Wie geht es dir?\",\"lv\":\"Ce mai faci\"},{\"de\":\"Wie heißt du?\",\"lv\":\"Care e numele tău\"},{\"de\":\"Wie viel kostet das?\",\"lv\":\"Cât costã\"},{\"de\":\"Wie alt bist du?\",\"lv\":\"Câți ani ai?\"},{\"de\":\"Wie lange dauert der Film?\",\"lv\":\"Cât de lung este filmul?\"},{\"de\":\"Er ist so groß wie sein Vater.\",\"lv\":\"Este la fel de înalt ca tatăl său.\"}]","study.tip":"[\"Wie de la sine = cum (cale) • Wie + adjectiv (viel/alt/lange) = cât (cantitate).\",\"În comparație, deci ... wie = ca ... ca.\"]","study.important":"[\"Wie viel(e) = cât • Wie alt = câți ani • Wie lange = cât timp.\",\"Wie alone (Wie...?) de obicei = cum, nu cât.\",\"Incorect: cati ani ai? → Corect: ce mai faci? (We Geht's?)\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Cum • Cât","study":{"id":"a1-wie","layout":"standardStudy","translation":"Cum • Cât","explanation":["Ideea principală: wie întreabă despre fel sau calitate («cum») și, în unele construcții, despre cantitate («cât»).","wie singur întreabă de obicei «cum». ","wie + adjectiv sau adverb, ca wie viel, wie alt și wie lange, înseamnă «cât». ","wie viel(e) înseamnă «cât» sau «câți»; wie alt întreabă vârsta; wie lange întreabă durata.","În comparații, so ... wie înseamnă «la fel de ... ca»."],"examples":[{"de":"Wie geht es dir?","lv":"Cum te simți?"},{"de":"Wie heißt du?","lv":"Cum te numești?"},{"de":"Wie viel kostet das?","lv":"Cât costă asta?"},{"de":"Wie alt bist du?","lv":"Câți ani ai?"},{"de":"Wie lange dauert der Film?","lv":"Cât durează filmul?"},{"de":"Er ist so groß wie sein Vater.","lv":"Este la fel de înalt ca tatăl său."}],"tip":["wie singur = cum; wie + viel/alt/lange = cât.","În comparații: so ... wie = la fel de ... ca."],"important":["wie viel(e) = cât; wie alt = câți ani; wie lange = cât timp.","wie singur înseamnă de obicei «cum».","Wie geht es dir? = Cum te simți?"]}}
**Note:** Pilna RO kartīte «wie»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wie",
  "lv": "Cum • Cât",
  "level": "A1",
  "study": {
    "id": "a1-wie",
    "layout": "standardStudy",
    "translation": "Cum • Cât",
    "explanation": [
      "Ideea principală: wie întreabă despre fel sau calitate («cum») și, în unele construcții, despre cantitate («cât»).",
      "wie singur întreabă de obicei «cum». ",
      "wie + adjectiv sau adverb, ca wie viel, wie alt și wie lange, înseamnă «cât». ",
      "wie viel(e) înseamnă «cât» sau «câți»; wie alt întreabă vârsta; wie lange întreabă durata.",
      "În comparații, so ... wie înseamnă «la fel de ... ca»."
    ],
    "examples": [
      {
        "de": "Wie geht es dir?",
        "lv": "Cum te simți?"
      },
      {
        "de": "Wie heißt du?",
        "lv": "Cum te numești?"
      },
      {
        "de": "Wie viel kostet das?",
        "lv": "Cât costă asta?"
      },
      {
        "de": "Wie alt bist du?",
        "lv": "Câți ani ai?"
      },
      {
        "de": "Wie lange dauert der Film?",
        "lv": "Cât durează filmul?"
      },
      {
        "de": "Er ist so groß wie sein Vater.",
        "lv": "Este la fel de înalt ca tatăl său."
      }
    ],
    "tip": [
      "wie singur = cum; wie + viel/alt/lange = cât.",
      "În comparații: so ... wie = la fel de ... ca."
    ],
    "important": [
      "wie viel(e) = cât; wie alt = câți ani; wie lange = cât timp.",
      "wie singur înseamnă de obicei «cum».",
      "Wie geht es dir? = Cum te simți?"
    ]
  },
  "index": 660
}
```

---

## Finding 10

**Audit ID:** `LRB083-0010`
**Finding Stable ID:** `g2/a1/ro|zu|idx:668|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `zu|idx:668`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"La • La","study.translation":"La • La","study.explanation":"[\"Ideea principală: zu înseamnă de foarte multe ori to sau at, dar are și rol cu ​​infinitivul.\",\"Cu oameni și instituții, zu înseamnă adesea la sau la.\",\"Cu adjective, zu poate însemna și el.\",\"În construcția zu + nehotărât, ajută la formarea indefinitului: zu lernen, zu gehen.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"Ma duc la doctor.\"},{\"de\":\"Wir gehen zur Schule.\",\"lv\":\"Mergem la scoala.\"},{\"de\":\"Das ist zu teuer.\",\"lv\":\"Este prea scump.\"},{\"de\":\"Ich habe keine Zeit zu lernen.\",\"lv\":\"Nu am timp să studiez.\"}]","study.comparison":"[{\"word\":\"zu\",\"meaning\":\"La / la / prea / infinitiv\",\"example\":\"Merg la doctor.\"},{\"word\":\"nach\",\"meaning\":\"La cu orașe/țări\",\"example\":\"Merg la Berlin.\"},{\"word\":\"in\",\"meaning\":\"Într-un loc\",\"example\":\"Merg la școală.\"},{\"word\":\"bei\",\"meaning\":\"La cineva / la serviciu\",\"example\":\"Sunt la Anna.\"}]","study.tip":"{\"text\":\"Amintiți-vă: la medic → zum Arzt • Prea scump → zu teuer.\"}","study.important":"[\"Zu are multe utilizări, așa că uitați-vă întotdeauna la construcție.\",\"Zu teuer înseamnă „prea scump”, nu „prea scump”.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"La • Către","study":{"id":"a1-zu","layout":"standardStudy","translation":"La • Către","explanation":["Ideea principală: zu înseamnă adesea «la» sau «către», dar are și alte funcții.","Cu persoane și instituții, zu indică direcția către acestea.","Înaintea adjectivelor, zu poate însemna «prea».","În construcția zu + infinitiv, marchează infinitivul: zu lernen, zu gehen."],"examples":[{"de":"Ich gehe zum Arzt.","lv":"Merg la medic."},{"de":"Wir gehen zur Schule.","lv":"Mergem la școală."},{"de":"Das ist zu teuer.","lv":"Este prea scump."},{"de":"Ich habe keine Zeit zu lernen.","lv":"Nu am timp să învăț."}],"comparison":[{"word":"zu","meaning":"La • Către • Prea • Marcă a infinitivului","example":"Ich gehe zum Arzt. – Merg la medic."},{"word":"nach","meaning":"Spre (cu orașe și țări)","example":"Ich fahre nach Berlin. – Merg la Berlin."},{"word":"in","meaning":"În • Înăuntru","example":"Ich gehe in die Schule. – Intru în școală."},{"word":"bei","meaning":"La cineva • La locul de muncă","example":"Ich bin bei Anna. – Sunt la Anna."}],"tip":{"text":"Reține: la medic → zum Arzt; prea scump → zu teuer."},"important":["zu are mai multe utilizări; urmărește construcția.","zu teuer înseamnă «prea scump»."]}}
**Note:** Pilna RO kartīte «zu»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "zu",
  "lv": "La • Către",
  "level": "A1",
  "study": {
    "id": "a1-zu",
    "layout": "standardStudy",
    "translation": "La • Către",
    "explanation": [
      "Ideea principală: zu înseamnă adesea «la» sau «către», dar are și alte funcții.",
      "Cu persoane și instituții, zu indică direcția către acestea.",
      "Înaintea adjectivelor, zu poate însemna «prea».",
      "În construcția zu + infinitiv, marchează infinitivul: zu lernen, zu gehen."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Merg la medic."
      },
      {
        "de": "Wir gehen zur Schule.",
        "lv": "Mergem la școală."
      },
      {
        "de": "Das ist zu teuer.",
        "lv": "Este prea scump."
      },
      {
        "de": "Ich habe keine Zeit zu lernen.",
        "lv": "Nu am timp să învăț."
      }
    ],
    "comparison": [
      {
        "word": "zu",
        "meaning": "La • Către • Prea • Marcă a infinitivului",
        "example": "Ich gehe zum Arzt. – Merg la medic."
      },
      {
        "word": "nach",
        "meaning": "Spre (cu orașe și țări)",
        "example": "Ich fahre nach Berlin. – Merg la Berlin."
      },
      {
        "word": "in",
        "meaning": "În • Înăuntru",
        "example": "Ich gehe in die Schule. – Intru în școală."
      },
      {
        "word": "bei",
        "meaning": "La cineva • La locul de muncă",
        "example": "Ich bin bei Anna. – Sunt la Anna."
      }
    ],
    "tip": {
      "text": "Reține: la medic → zum Arzt; prea scump → zu teuer."
    },
    "important": [
      "zu are mai multe utilizări; urmărește construcția.",
      "zu teuer înseamnă «prea scump»."
    ]
  },
  "index": 668
}
```

---

## Finding 11

**Audit ID:** `LRB083-0011`
**Finding Stable ID:** `g2/a1/ro|Zug|idx:671|lv/study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Zug|idx:671`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Trenul","study.translation":"Trenul","study.explanation":"[\"Ideea principală: der Zug la nivelul A1 înseamnă cel mai adesea tren.\",\"Este folosit în situații de zi cu zi despre conducere, sosire și plecare.\",\"În alte sensuri, Zug poate fi un marș, o schiță sau o caracteristică, dar acestea nu sunt semnificațiile principale ale lui A1.\",\"Expresiile foarte comune sunt mit dem Zug fahren și Der Zug kommt.\"]","study.examples":"[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"Trenul ajunge la ora opt.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"Călătoresc cu trenul\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"Trenul este plin.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"Autobuzul vine mai târziu.\"}]","study.comparison":"[{\"word\":\"der Zug\",\"meaning\":\"Trenul\",\"example\":\"Trenul vine.\"},{\"word\":\"die Bahn\",\"meaning\":\"Cale ferată / călătorie cu trenul\",\"example\":\"Călătoresc cu trenul.\"},{\"word\":\"der Bus\",\"meaning\":\"Autobuz\",\"example\":\"Autobuzul vine.\"},{\"word\":\"die Straßenbahn\",\"meaning\":\"Tramvai\",\"example\":\"Tramvaiul este aici.\"}]","study.tip":"{\"text\":\"Amintiți-vă: tren specific → der Zug.\"}","study.important":"[\"Der Zug din titlu ar trebui citit ca „tren”.\",\"Semnificațiile mai rare nu sunt necesare în titlul principal A1.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Tren","study":{"id":"a1-zug","layout":"standardStudy","translation":"Tren","explanation":["Ideea principală: la nivelul A1, der Zug înseamnă cel mai des «tren». ","Se folosește în situații cotidiene despre călătorie, sosire și plecare.","Zug are și alte sensuri, dar acestea nu sunt sensurile principale la A1.","Expresii frecvente sunt mit dem Zug fahren și Der Zug kommt."],"examples":[{"de":"Der Zug kommt um acht Uhr.","lv":"Trenul sosește la ora opt."},{"de":"Ich fahre mit dem Zug.","lv":"Călătoresc cu trenul."},{"de":"Der Zug ist voll.","lv":"Trenul este plin."},{"de":"Der Bus kommt später.","lv":"Autobuzul sosește mai târziu."}],"comparison":[{"word":"der Zug","meaning":"Tren","example":"Der Zug kommt. – Trenul sosește."},{"word":"die Bahn","meaning":"Cale ferată • Transport feroviar","example":"Ich fahre mit der Bahn. – Călătoresc cu trenul."},{"word":"der Bus","meaning":"Autobuz","example":"Der Bus kommt. – Autobuzul sosește."},{"word":"die Straßenbahn","meaning":"Tramvai","example":"Die Straßenbahn ist hier. – Tramvaiul este aici."}],"tip":{"text":"Reține: un tren concret → der Zug."},"important":["În această fișă, der Zug înseamnă «tren».","Sensurile mai rare nu sunt necesare în titlul A1."]}}
**Note:** Pilna RO kartīte «Zug»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Zug",
  "de_article": "der",
  "de_plural": "die Züge",
  "lv": "Tren",
  "level": "A1",
  "study": {
    "id": "a1-zug",
    "layout": "standardStudy",
    "translation": "Tren",
    "explanation": [
      "Ideea principală: la nivelul A1, der Zug înseamnă cel mai des «tren». ",
      "Se folosește în situații cotidiene despre călătorie, sosire și plecare.",
      "Zug are și alte sensuri, dar acestea nu sunt sensurile principale la A1.",
      "Expresii frecvente sunt mit dem Zug fahren și Der Zug kommt."
    ],
    "examples": [
      {
        "de": "Der Zug kommt um acht Uhr.",
        "lv": "Trenul sosește la ora opt."
      },
      {
        "de": "Ich fahre mit dem Zug.",
        "lv": "Călătoresc cu trenul."
      },
      {
        "de": "Der Zug ist voll.",
        "lv": "Trenul este plin."
      },
      {
        "de": "Der Bus kommt später.",
        "lv": "Autobuzul sosește mai târziu."
      }
    ],
    "comparison": [
      {
        "word": "der Zug",
        "meaning": "Tren",
        "example": "Der Zug kommt. – Trenul sosește."
      },
      {
        "word": "die Bahn",
        "meaning": "Cale ferată • Transport feroviar",
        "example": "Ich fahre mit der Bahn. – Călătoresc cu trenul."
      },
      {
        "word": "der Bus",
        "meaning": "Autobuz",
        "example": "Der Bus kommt. – Autobuzul sosește."
      },
      {
        "word": "die Straßenbahn",
        "meaning": "Tramvai",
        "example": "Die Straßenbahn ist hier. – Tramvaiul este aici."
      }
    ],
    "tip": {
      "text": "Reține: un tren concret → der Zug."
    },
    "important": [
      "În această fișă, der Zug înseamnă «tren».",
      "Sensurile mai rare nu sunt necesare în titlul A1."
    ]
  },
  "index": 671
}
```

---

## Finding 12

**Audit ID:** `LRB083-0012`
**Finding Stable ID:** `g2/a1/ro|zum|idx:672|lv / study.translation / study.*.lv|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `zum|idx:672`
**Field / path:** `lv / study.translation / study.*.lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"La • La","study.translation":"La • La","study.*.lv":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"La • Către","study":{"id":"a1-zum","layout":"standardStudy","translation":"La • Către","explanation":["zum este contragerea prepoziției zu cu articolul dem.","Forma completă este zu dem, cu dativul.","Se folosește cu substantive masculine și neutre pentru direcție sau scop.","În română se traduce adesea prin «la» sau «către». ","În practică se folosește aproape întotdeauna zum, nu zu dem."],"examples":[{"de":"Ich gehe zum Arzt.","lv":"Merg la medic."},{"de":"Wir fahren zum Bahnhof.","lv":"Mergem la gară."},{"de":"Sie geht zum Supermarkt.","lv":"Ea merge la supermarket."},{"de":"Komm zum Essen!","lv":"Vino la masă!"},{"de":"Er fährt zum Flughafen.","lv":"El merge la aeroport."},{"de":"Wir gehen zum Konzert.","lv":"Mergem la concert."},{"de":"Das Geschenk ist zum Geburtstag.","lv":"Cadoul este pentru ziua de naștere."},{"de":"Ich gehe zum Friseur.","lv":"Merg la coafor."}],"comparison":[{"word":"zum","meaning":"La • Către (zu + dem)","example":"zum Arzt – la medic"},{"word":"zur","meaning":"La • Către (zu + der)","example":"zur Schule – la școală"},{"word":"zu","meaning":"La • Către • Prea","example":"zu Hause – acasă"},{"word":"nach","meaning":"Spre (orașe și țări)","example":"nach Berlin – spre Berlin"},{"word":"bei","meaning":"La (poziție)","example":"beim Arzt – la medic"}],"tip":["Reține: zu + dem → zum.","Cu substantive feminine: zu + der → zur."],"important":["zum = zu dem și se folosește cu substantive masculine sau neutre la dativ.","Indică direcția sau scopul.","La feminin se folosește zur: zur Bank, zur Post.","Nu confunda zum cu bei sau nach."]}}
**Note:** Pilna RO kartīte «zum»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "zum",
  "lv": "La • Către",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "La • Către",
    "explanation": [
      "zum este contragerea prepoziției zu cu articolul dem.",
      "Forma completă este zu dem, cu dativul.",
      "Se folosește cu substantive masculine și neutre pentru direcție sau scop.",
      "În română se traduce adesea prin «la» sau «către». ",
      "În practică se folosește aproape întotdeauna zum, nu zu dem."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Merg la medic."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "Mergem la gară."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "Ea merge la supermarket."
      },
      {
        "de": "Komm zum Essen!",
        "lv": "Vino la masă!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "El merge la aeroport."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "Mergem la concert."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "Cadoul este pentru ziua de naștere."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "Merg la coafor."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "La • Către (zu + dem)",
        "example": "zum Arzt – la medic"
      },
      {
        "word": "zur",
        "meaning": "La • Către (zu + der)",
        "example": "zur Schule – la școală"
      },
      {
        "word": "zu",
        "meaning": "La • Către • Prea",
        "example": "zu Hause – acasă"
      },
      {
        "word": "nach",
        "meaning": "Spre (orașe și țări)",
        "example": "nach Berlin – spre Berlin"
      },
      {
        "word": "bei",
        "meaning": "La (poziție)",
        "example": "beim Arzt – la medic"
      }
    ],
    "tip": [
      "Reține: zu + dem → zum.",
      "Cu substantive feminine: zu + der → zur."
    ],
    "important": [
      "zum = zu dem și se folosește cu substantive masculine sau neutre la dativ.",
      "Indică direcția sau scopul.",
      "La feminin se folosește zur: zur Bank, zur Post.",
      "Nu confunda zum cu bei sau nach."
    ]
  },
  "index": 672
}
```

---

## Finding 13

**Audit ID:** `LRB083-0013`
**Finding Stable ID:** `g2/a1/ru|a1-ab|a1.card.a1-ab.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-ab`
**Field / path:** `a1.card.a1-ab.study.comparison[1].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** От кого-то/чего-то • Происхождение
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"С • Начиная с","study":{"id":"a1-ab","layout":"standardStudy","translation":"С • Начиная с","explanation":"Употребляется, когда что-либо начинается с определённого времени, места или пункта. Часто означает «начиная с».","examples":[{"de":"ab heute","lv":"С сегодняшнего дня","level":"A1"},{"de":"ab Montag","lv":"С понедельника"},{"de":"ab 8 Uhr","lv":"С восьми часов"},{"de":"ab Bahnhof","lv":"От вокзала"}],"comparison":[{"word":"ab","meaning":"Начиная с момента или пункта","example":"ab Montag – с понедельника"},{"word":"von","meaning":"От кого-либо или чего-либо • Источник","example":"von mir – от меня"},{"word":"aus","meaning":"Изнутри • Из","example":"aus dem Haus – из дома"}],"tip":{"text":"Запомните: начальный момент или пункт → ab."},"important":["ab указывает начальный момент или пункт во времени либо пространстве.","Для происхождения или движения изнутри чаще употребляются von или aus."]}}
**Note:** Pilna RU kartīte «ab»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ab",
  "lv": "С • Начиная с",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "С • Начиная с",
    "explanation": "Употребляется, когда что-либо начинается с определённого времени, места или пункта. Часто означает «начиная с».",
    "examples": [
      {
        "de": "ab heute",
        "lv": "С сегодняшнего дня",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "С понедельника"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "С восьми часов"
      },
      {
        "de": "ab Bahnhof",
        "lv": "От вокзала"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "Начиная с момента или пункта",
        "example": "ab Montag – с понедельника"
      },
      {
        "word": "von",
        "meaning": "От кого-либо или чего-либо • Источник",
        "example": "von mir – от меня"
      },
      {
        "word": "aus",
        "meaning": "Изнутри • Из",
        "example": "aus dem Haus – из дома"
      }
    ],
    "tip": {
      "text": "Запомните: начальный момент или пункт → ab."
    },
    "important": [
      "ab указывает начальный момент или пункт во времени либо пространстве.",
      "Для происхождения или движения изнутри чаще употребляются von или aus."
    ]
  },
  "index": 17
}
```

---

## Finding 14

**Audit ID:** `LRB083-0014`
**Finding Stable ID:** `g2/a1/ru|a1-aber|a1.card.a1-aber.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-aber`
**Field / path:** `a1.card.a1-aber.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Противоположное • Возражение • Однако
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Но • Однако","study":{"id":"a1-aber","layout":"standardStudy","translation":"Но • Однако","explanation":"Употребляется для противопоставления или возражения. Часто означает «но», «однако» или «всё же».","examples":[{"de":"Ich möchte mitkommen, aber ich habe keine Zeit.","lv":"Я хочу пойти с вами, но у меня нет времени."},{"de":"Das Essen war lecker, aber zu teuer.","lv":"Еда была вкусной, но слишком дорогой."},{"de":"Er hat recht, aber ich sehe das anders.","lv":"Он прав, однако я смотрю на это иначе."}],"comparison":[{"word":"aber","meaning":"Но • Однако • Возражение","example":"Ich komme, aber später. – Я приду, но позже."},{"word":"sondern","meaning":"Не..., а...","example":"Ich wollte keinen Tee, sondern Kaffee. – Я хотел не чай, а кофе."},{"word":"jedoch","meaning":"Однако","example":"Es ist kalt, jedoch sonnig. – Холодно, однако солнечно."}],"tip":{"text":"Запомните: противопоставление или возражение → aber."},"important":["aber выражает противопоставление или возражение.","В конструкции «не..., а...» обычно употребляется sondern."]}}
**Note:** Pilna RU kartīte «aber»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aber",
  "lv": "Но • Однако",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "Но • Однако",
    "explanation": "Употребляется для противопоставления или возражения. Часто означает «но», «однако» или «всё же».",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Я хочу пойти с вами, но у меня нет времени."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "Еда была вкусной, но слишком дорогой."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Он прав, однако я смотрю на это иначе."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "Но • Однако • Возражение",
        "example": "Ich komme, aber später. – Я приду, но позже."
      },
      {
        "word": "sondern",
        "meaning": "Не..., а...",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Я хотел не чай, а кофе."
      },
      {
        "word": "jedoch",
        "meaning": "Однако",
        "example": "Es ist kalt, jedoch sonnig. – Холодно, однако солнечно."
      }
    ],
    "tip": {
      "text": "Запомните: противопоставление или возражение → aber."
    },
    "important": [
      "aber выражает противопоставление или возражение.",
      "В конструкции «не..., а...» обычно употребляется sondern."
    ]
  },
  "index": 21
}
```

---

## Finding 15

**Audit ID:** `LRB083-0015`
**Finding Stable ID:** `g2/a1/ru|a1-also|a1.card.a1-also.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-also`
**Field / path:** `a1.card.a1-also.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Итак • Поэтому
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Итак • Поэтому","study":{"id":"a1-also","layout":"standardStudy","translation":"Итак • Поэтому","explanation":"Употребляется, чтобы сделать вывод или показать результат. Означает «итак», «следовательно» или «поэтому».","examples":[{"de":"Es regnet, also bleibe ich zu Hause.","lv":"Идёт дождь, поэтому я остаюсь дома."},{"de":"Du bist krank, also gehst du nicht zur Arbeit.","lv":"Ты болен, поэтому не идёшь на работу."},{"de":"Ich habe viel gelernt, also verstehe ich es jetzt.","lv":"Я много учился, поэтому теперь это понимаю."}],"comparison":[{"word":"also","meaning":"Итак • Поэтому","example":"Es regnet, also bleibe ich zu Hause. – Идёт дождь, поэтому я остаюсь дома."},{"word":"auch","meaning":"Тоже • Также","example":"Ich komme auch. – Я тоже приду."},{"word":"deshalb","meaning":"Поэтому","example":"Es regnet, deshalb bleibe ich zu Hause. – Идёт дождь, поэтому я остаюсь дома."}],"tip":{"text":"Запомните: вывод или следствие → also."},"important":["also показывает вывод: следующая мысль следует из сказанного ранее.","Русскому «поэтому» часто соответствует также deshalb."]}}
**Note:** Pilna RU kartīte «also»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "also",
  "lv": "Итак • Поэтому",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "Итак • Поэтому",
    "explanation": "Употребляется, чтобы сделать вывод или показать результат. Означает «итак», «следовательно» или «поэтому».",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Идёт дождь, поэтому я остаюсь дома."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Ты болен, поэтому не идёшь на работу."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Я много учился, поэтому теперь это понимаю."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "Итак • Поэтому",
        "example": "Es regnet, also bleibe ich zu Hause. – Идёт дождь, поэтому я остаюсь дома."
      },
      {
        "word": "auch",
        "meaning": "Тоже • Также",
        "example": "Ich komme auch. – Я тоже приду."
      },
      {
        "word": "deshalb",
        "meaning": "Поэтому",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Идёт дождь, поэтому я остаюсь дома."
      }
    ],
    "tip": {
      "text": "Запомните: вывод или следствие → also."
    },
    "important": [
      "also показывает вывод: следующая мысль следует из сказанного ранее.",
      "Русскому «поэтому» часто соответствует также deshalb."
    ]
  },
  "index": 26
}
```

---

## Finding 16

**Audit ID:** `LRB083-0016`
**Finding Stable ID:** `g2/a1/ru|a1-an|a1.card.a1-an.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-an`
**Field / path:** `a1.card.a1-an.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** В • По • Настоящее время
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"У • На • К","study":{"id":"a1-an","layout":"standardStudy","translation":"У • На • К","explanation":"Употребляется, когда что-либо находится у стены, окна, двери, реки, берега моря или другой границы либо поверхности.","examples":[{"de":"an der Wand","lv":"На стене • У стены"},{"de":"am Fenster","lv":"У окна"},{"de":"am Meer","lv":"У моря"}],"comparison":[{"word":"an","meaning":"У поверхности или границы • На поверхности","example":"an der Wand – на стене"},{"word":"auf","meaning":"На горизонтальной поверхности","example":"auf dem Tisch – на столе"},{"word":"bei","meaning":"У человека • В определённом месте","example":"beim Arzt – у врача"}],"tip":{"text":"Запомните: у стены, окна или края → an."},"important":["an часто означает положение у поверхности, стены, окна или края.","Для положения на горизонтальной поверхности обычно употребляется auf."]}}
**Note:** Pilna RU kartīte «an»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "an",
  "lv": "У • На • К",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "У • На • К",
    "explanation": "Употребляется, когда что-либо находится у стены, окна, двери, реки, берега моря или другой границы либо поверхности.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "На стене • У стены"
      },
      {
        "de": "am Fenster",
        "lv": "У окна"
      },
      {
        "de": "am Meer",
        "lv": "У моря"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "У поверхности или границы • На поверхности",
        "example": "an der Wand – на стене"
      },
      {
        "word": "auf",
        "meaning": "На горизонтальной поверхности",
        "example": "auf dem Tisch – на столе"
      },
      {
        "word": "bei",
        "meaning": "У человека • В определённом месте",
        "example": "beim Arzt – у врача"
      }
    ],
    "tip": {
      "text": "Запомните: у стены, окна или края → an."
    },
    "important": [
      "an часто означает положение у поверхности, стены, окна или края.",
      "Для положения на горизонтальной поверхности обычно употребляется auf."
    ]
  },
  "index": 12
}
```

---

## Finding 17

**Audit ID:** `LRB083-0017`
**Finding Stable ID:** `g2/a1/ru|a1-an|a1.card.a1-an.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-an`
**Field / path:** `a1.card.a1-an.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** На • На поверхности • На краю
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"У • На • К","study":{"id":"a1-an","layout":"standardStudy","translation":"У • На • К","explanation":"Употребляется, когда что-либо находится у стены, окна, двери, реки, берега моря или другой границы либо поверхности.","examples":[{"de":"an der Wand","lv":"На стене • У стены"},{"de":"am Fenster","lv":"У окна"},{"de":"am Meer","lv":"У моря"}],"comparison":[{"word":"an","meaning":"У поверхности или границы • На поверхности","example":"an der Wand – на стене"},{"word":"auf","meaning":"На горизонтальной поверхности","example":"auf dem Tisch – на столе"},{"word":"bei","meaning":"У человека • В определённом месте","example":"beim Arzt – у врача"}],"tip":{"text":"Запомните: у стены, окна или края → an."},"important":["an часто означает положение у поверхности, стены, окна или края.","Для положения на горизонтальной поверхности обычно употребляется auf."]}}
**Note:** Pilna RU kartīte «an»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "an",
  "lv": "У • На • К",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "У • На • К",
    "explanation": "Употребляется, когда что-либо находится у стены, окна, двери, реки, берега моря или другой границы либо поверхности.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "На стене • У стены"
      },
      {
        "de": "am Fenster",
        "lv": "У окна"
      },
      {
        "de": "am Meer",
        "lv": "У моря"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "У поверхности или границы • На поверхности",
        "example": "an der Wand – на стене"
      },
      {
        "word": "auf",
        "meaning": "На горизонтальной поверхности",
        "example": "auf dem Tisch – на столе"
      },
      {
        "word": "bei",
        "meaning": "У человека • В определённом месте",
        "example": "beim Arzt – у врача"
      }
    ],
    "tip": {
      "text": "Запомните: у стены, окна или края → an."
    },
    "important": [
      "an часто означает положение у поверхности, стены, окна или края.",
      "Для положения на горизонтальной поверхности обычно употребляется auf."
    ]
  },
  "index": 12
}
```

---

## Finding 18

**Audit ID:** `LRB083-0018`
**Finding Stable ID:** `g2/a1/ru|a1-auf|a1.card.a1-auf.study.important[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-auf`
**Field / path:** `a1.card.a1-auf.study.important[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Если что-то находится рядом с вертикальной поверхностью, вам часто понадобится • Если внутри, то тебе нужно войти.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"На","study":{"id":"a1-auf","layout":"standardStudy","translation":"На","explanation":"Употребляется для указания направления на поверхность или положения на ней.","examples":[{"de":"Ich stelle das Buch auf den Tisch.","lv":"Я ставлю книгу на стол."},{"de":"Wir fahren auf den Berg.","lv":"Мы едем на гору."},{"de":"Die Katze springt auf das Sofa.","lv":"Кошка прыгает на диван."}],"comparison":[{"word":"auf","meaning":"На поверхность • Наверх","example":"Ich stelle das Glas auf den Tisch. – Я ставлю стакан на стол."},{"word":"an","meaning":"К вертикальной поверхности • На неё","example":"Ich hänge das Bild an die Wand. – Я вешаю картину на стену."},{"word":"in","meaning":"Внутрь","example":"Ich lege das Buch in die Tasche. – Я кладу книгу в сумку."}],"tip":{"text":"Запомните: на поверхность или наверх → auf."},"important":["auf часто обозначает движение на поверхность или положение на ней.","У вертикальной поверхности часто употребляется an, а внутри чего-либо — in."]}}
**Note:** Pilna RU kartīte «auf»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "auf",
  "lv": "На",
  "level": "A1",
  "study": {
    "id": "a1-auf",
    "layout": "standardStudy",
    "translation": "На",
    "explanation": "Употребляется для указания направления на поверхность или положения на ней.",
    "examples": [
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "lv": "Я ставлю книгу на стол."
      },
      {
        "de": "Wir fahren auf den Berg.",
        "lv": "Мы едем на гору."
      },
      {
        "de": "Die Katze springt auf das Sofa.",
        "lv": "Кошка прыгает на диван."
      }
    ],
    "comparison": [
      {
        "word": "auf",
        "meaning": "На поверхность • Наверх",
        "example": "Ich stelle das Glas auf den Tisch. – Я ставлю стакан на стол."
      },
      {
        "word": "an",
        "meaning": "К вертикальной поверхности • На неё",
        "example": "Ich hänge das Bild an die Wand. – Я вешаю картину на стену."
      },
      {
        "word": "in",
        "meaning": "Внутрь",
        "example": "Ich lege das Buch in die Tasche. – Я кладу книгу в сумку."
      }
    ],
    "tip": {
      "text": "Запомните: на поверхность или наверх → auf."
    },
    "important": [
      "auf часто обозначает движение на поверхность или положение на ней.",
      "У вертикальной поверхности часто употребляется an, а внутри чего-либо — in."
    ]
  },
  "index": 49
}
```

---

## Finding 19

**Audit ID:** `LRB083-0019`
**Finding Stable ID:** `g2/a1/ru|a1-aus|a1.card.a1-aus.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-aus`
**Field / path:** `a1.card.a1-aus.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Из • Из
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Из • Изнутри","study":{"id":"a1-aus","layout":"standardStudy","translation":"Из • Изнутри","explanation":"Употребляется, когда что-либо выходит изнутри или когда указывается происхождение.","examples":[{"de":"Ich komme aus Deutschland.","lv":"Я из Германии."},{"de":"Er geht aus dem Haus.","lv":"Он выходит из дома."},{"de":"Ich nehme das Buch aus der Tasche.","lv":"Я достаю книгу из сумки."}],"comparison":[{"word":"aus","meaning":"Изнутри • Из","example":"aus dem Haus – из дома"},{"word":"von","meaning":"От человека, места или поверхности","example":"von meinem Freund – от моего друга"},{"word":"ab","meaning":"Начиная с момента или пункта","example":"ab Montag – с понедельника"}],"tip":{"text":"Запомните: движение изнутри наружу → aus."},"important":["aus обычно указывает движение изнутри или происхождение.","Для начального момента либо пункта чаще употребляется ab."]}}
**Note:** Pilna RU kartīte «aus»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aus",
  "lv": "Из • Изнутри",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "Из • Изнутри",
    "explanation": "Употребляется, когда что-либо выходит изнутри или когда указывается происхождение.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Я из Германии."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "Он выходит из дома."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Я достаю книгу из сумки."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "Изнутри • Из",
        "example": "aus dem Haus – из дома"
      },
      {
        "word": "von",
        "meaning": "От человека, места или поверхности",
        "example": "von meinem Freund – от моего друга"
      },
      {
        "word": "ab",
        "meaning": "Начиная с момента или пункта",
        "example": "ab Montag – с понедельника"
      }
    ],
    "tip": {
      "text": "Запомните: движение изнутри наружу → aus."
    },
    "important": [
      "aus обычно указывает движение изнутри или происхождение.",
      "Для начального момента либо пункта чаще употребляется ab."
    ]
  },
  "index": 57
}
```

---

## Finding 20

**Audit ID:** `LRB083-0020`
**Finding Stable ID:** `g2/a1/ru|a1-aus|a1.card.a1-aus.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-aus`
**Field / path:** `a1.card.a1-aus.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Из • Из
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Из • Изнутри","study":{"id":"a1-aus","layout":"standardStudy","translation":"Из • Изнутри","explanation":"Употребляется, когда что-либо выходит изнутри или когда указывается происхождение.","examples":[{"de":"Ich komme aus Deutschland.","lv":"Я из Германии."},{"de":"Er geht aus dem Haus.","lv":"Он выходит из дома."},{"de":"Ich nehme das Buch aus der Tasche.","lv":"Я достаю книгу из сумки."}],"comparison":[{"word":"aus","meaning":"Изнутри • Из","example":"aus dem Haus – из дома"},{"word":"von","meaning":"От человека, места или поверхности","example":"von meinem Freund – от моего друга"},{"word":"ab","meaning":"Начиная с момента или пункта","example":"ab Montag – с понедельника"}],"tip":{"text":"Запомните: движение изнутри наружу → aus."},"important":["aus обычно указывает движение изнутри или происхождение.","Для начального момента либо пункта чаще употребляется ab."]}}
**Note:** Pilna RU kartīte «aus»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aus",
  "lv": "Из • Изнутри",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "Из • Изнутри",
    "explanation": "Употребляется, когда что-либо выходит изнутри или когда указывается происхождение.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Я из Германии."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "Он выходит из дома."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Я достаю книгу из сумки."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "Изнутри • Из",
        "example": "aus dem Haus – из дома"
      },
      {
        "word": "von",
        "meaning": "От человека, места или поверхности",
        "example": "von meinem Freund – от моего друга"
      },
      {
        "word": "ab",
        "meaning": "Начиная с момента или пункта",
        "example": "ab Montag – с понедельника"
      }
    ],
    "tip": {
      "text": "Запомните: движение изнутри наружу → aus."
    },
    "important": [
      "aus обычно указывает движение изнутри или происхождение.",
      "Для начального момента либо пункта чаще употребляется ab."
    ]
  },
  "index": 57
}
```

---

## Finding 21

**Audit ID:** `LRB083-0021`
**Finding Stable ID:** `g2/a1/ru|a1-besuch|a1.card.a1-besuch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-besuch`
**Field / path:** `a1.card.a1-besuch.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** посещение • визит • гость
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Посещение • Визит","study":{"id":"a1-besuch","layout":"standardStudy","translation":"Посещение • Визит","explanation":["Основная идея: der Besuch означает посещение, визит или приход в гости.","Если речь идёт о месте или мероприятии, подходит слово «посещение».","Если речь идёт о человеке, подходит «визит» или «приход в гости».","Множественное число: die Besuche."],"examples":[{"de":"Der Besuch im Museum war interessant.","lv":"Посещение музея было интересным."},{"de":"Danke für deinen Besuch.","lv":"Спасибо за твой визит."},{"de":"Der Arzt macht einen Besuch.","lv":"Врач идёт на визит."}],"comparison":[{"word":"der Besuch","meaning":"Посещение • Визит • Приход в гости","example":"Danke für deinen Besuch. – Спасибо за твой визит."},{"word":"der Besucher","meaning":"Посетитель","example":"Der Besucher wartet draußen. – Посетитель ждёт снаружи."},{"word":"besuchen","meaning":"Посещать • Навещать","example":"Ich besuche meine Großeltern. – Я навещаю бабушку и дедушку."}],"tip":{"text":"Запомните: Besuch — посещение или визит, а Besucher — человек."},"important":["der Besuch может означать посещение, визит или приход в гости.","Множественное число: die Besuche."]}}
**Note:** Pilna RU kartīte «Besuch»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Besuch",
  "de_article": "der",
  "de_plural": "die Besuche",
  "lv": "Посещение • Визит",
  "level": "A1",
  "study": {
    "id": "a1-besuch",
    "layout": "standardStudy",
    "translation": "Посещение • Визит",
    "explanation": [
      "Основная идея: der Besuch означает посещение, визит или приход в гости.",
      "Если речь идёт о месте или мероприятии, подходит слово «посещение».",
      "Если речь идёт о человеке, подходит «визит» или «приход в гости».",
      "Множественное число: die Besuche."
    ],
    "examples": [
      {
        "de": "Der Besuch im Museum war interessant.",
        "lv": "Посещение музея было интересным."
      },
      {
        "de": "Danke für deinen Besuch.",
        "lv": "Спасибо за твой визит."
      },
      {
        "de": "Der Arzt macht einen Besuch.",
        "lv": "Врач идёт на визит."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "Посещение • Визит • Приход в гости",
        "example": "Danke für deinen Besuch. – Спасибо за твой визит."
      },
      {
        "word": "der Besucher",
        "meaning": "Посетитель",
        "example": "Der Besucher wartet draußen. – Посетитель ждёт снаружи."
      },
      {
        "word": "besuchen",
        "meaning": "Посещать • Навещать",
        "example": "Ich besuche meine Großeltern. – Я навещаю бабушку и дедушку."
      }
    ],
    "tip": {
      "text": "Запомните: Besuch — посещение или визит, а Besucher — человек."
    },
    "important": [
      "der Besuch может означать посещение, визит или приход в гости.",
      "Множественное число: die Besuche."
    ]
  },
  "index": 87
}
```

---

## Finding 22

**Audit ID:** `LRB083-0022`
**Finding Stable ID:** `g2/a1/ru|a1-besuchen|a1.card.a1-besuchen.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-besuchen`
**Field / path:** `a1.card.a1-besuchen.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** посещать место или событие • навещать человека
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Посещать • Навещать","study":{"id":"a1-besuchen","layout":"standardStudy","translation":"Посещать • Навещать","explanation":["Основная идея: besuchen употребляется при посещении места, мероприятия или человека.","Место, мероприятие или курс обычно посещают.","Человека обычно навещают.","В немецком besuchen употребляется без предлога и требует винительного падежа."],"examples":[{"de":"Ich besuche das Museum.","lv":"Я посещаю музей."},{"de":"Wir besuchen einen Deutschkurs.","lv":"Мы посещаем курс немецкого языка."},{"de":"Ich besuche meine Großeltern.","lv":"Я навещаю бабушку и дедушку."}],"comparison":[{"word":"besuchen","meaning":"Посещать место или мероприятие • Навещать человека","example":"Ich besuche meine Großeltern. – Я навещаю бабушку и дедушку."},{"word":"treffen","meaning":"Встречать • Встречаться","example":"Ich treffe meinen Freund. – Я встречаюсь с другом."},{"word":"zu jemandem gehen","meaning":"Идти к кому-либо","example":"Ich gehe zu meinem Freund. – Я иду к другу."}],"tip":{"text":"Запомните: место посещают, а человека навещают."},"important":["besuchen употребляется без предлога: Ich besuche meine Freundin.","Русский перевод зависит от объекта: посещать место, навещать человека."]}}
**Note:** Pilna RU kartīte «besuchen»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "besuchen",
  "lv": "Посещать • Навещать",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "Посещать • Навещать",
    "explanation": [
      "Основная идея: besuchen употребляется при посещении места, мероприятия или человека.",
      "Место, мероприятие или курс обычно посещают.",
      "Человека обычно навещают.",
      "В немецком besuchen употребляется без предлога и требует винительного падежа."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Я посещаю музей."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Мы посещаем курс немецкого языка."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Я навещаю бабушку и дедушку."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "Посещать место или мероприятие • Навещать человека",
        "example": "Ich besuche meine Großeltern. – Я навещаю бабушку и дедушку."
      },
      {
        "word": "treffen",
        "meaning": "Встречать • Встречаться",
        "example": "Ich treffe meinen Freund. – Я встречаюсь с другом."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "Идти к кому-либо",
        "example": "Ich gehe zu meinem Freund. – Я иду к другу."
      }
    ],
    "tip": {
      "text": "Запомните: место посещают, а человека навещают."
    },
    "important": [
      "besuchen употребляется без предлога: Ich besuche meine Freundin.",
      "Русский перевод зависит от объекта: посещать место, навещать человека."
    ]
  },
  "index": 89
}
```

---

## Finding 23

**Audit ID:** `LRB083-0023`
**Finding Stable ID:** `g2/a1/ru|a1-bis|a1.card.a1-bis.study.important[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-bis`
**Field / path:** `a1.card.a1-bis.study.important[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Bis jetzt = до сих пор • Bis dass = до тех пор, пока.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"До • Пока не","study":{"id":"a1-bis","layout":"standardStudy","translation":"До • Пока не","explanation":"Указывает границу, момент времени или условие.","examples":[{"de":"Ich warte bis zu deiner Ankunft.","lv":"Я жду до твоего приезда."},{"de":"Bleib hier, bis ich zurückkomme.","lv":"Оставайся здесь, пока я не вернусь."},{"de":"Ich lerne Deutsch bis zum Abend.","lv":"Я учу немецкий до вечера."},{"de":"Bis jetzt habe ich nichts verstanden.","lv":"До сих пор я ничего не понял."}],"comparison":[{"word":"bis","meaning":"До момента или границы • Пока не","example":"Ich bleibe bis morgen. – Я остаюсь до завтра."},{"word":"bis zu","meaning":"До конкретной границы","example":"bis zum Bahnhof – до вокзала"},{"word":"bis jetzt","meaning":"До сих пор","example":"Bis jetzt habe ich nichts verstanden. – До сих пор я ничего не понял."}],"tip":{"text":"Запомните: граница во времени или условии → bis."},"important":["bis указывает границу или момент времени.","bis zu употребляется перед конкретной границей: bis zum Bahnhof.","bis jetzt означает «до сих пор»."]}}
**Note:** Pilna RU kartīte «bis»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bis",
  "lv": "До • Пока не",
  "level": "A1",
  "study": {
    "id": "a1-bis",
    "layout": "standardStudy",
    "translation": "До • Пока не",
    "explanation": "Указывает границу, момент времени или условие.",
    "examples": [
      {
        "de": "Ich warte bis zu deiner Ankunft.",
        "lv": "Я жду до твоего приезда."
      },
      {
        "de": "Bleib hier, bis ich zurückkomme.",
        "lv": "Оставайся здесь, пока я не вернусь."
      },
      {
        "de": "Ich lerne Deutsch bis zum Abend.",
        "lv": "Я учу немецкий до вечера."
      },
      {
        "de": "Bis jetzt habe ich nichts verstanden.",
        "lv": "До сих пор я ничего не понял."
      }
    ],
    "comparison": [
      {
        "word": "bis",
        "meaning": "До момента или границы • Пока не",
        "example": "Ich bleibe bis morgen. – Я остаюсь до завтра."
      },
      {
        "word": "bis zu",
        "meaning": "До конкретной границы",
        "example": "bis zum Bahnhof – до вокзала"
      },
      {
        "word": "bis jetzt",
        "meaning": "До сих пор",
        "example": "Bis jetzt habe ich nichts verstanden. – До сих пор я ничего не понял."
      }
    ],
    "tip": {
      "text": "Запомните: граница во времени или условии → bis."
    },
    "important": [
      "bis указывает границу или момент времени.",
      "bis zu употребляется перед конкретной границей: bis zum Bahnhof.",
      "bis jetzt означает «до сих пор»."
    ]
  },
  "index": 91
}
```

---

## Finding 24

**Audit ID:** `LRB083-0024`
**Finding Stable ID:** `g2/a1/ru|a1-bleiben|a1.card.a1-bleiben.study.important[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-bleiben`
**Field / path:** `a1.card.a1-bleiben.study.important[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Ich bleibe hier = Я остаюсь здесь • Ich warte hier = Я жду здесь.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Оставаться","study":{"id":"a1-bleiben","layout":"standardStudy","translation":"Оставаться","explanation":["Основная идея: bleiben означает «оставаться».","bleiben употребляется, если человек или предмет не уходит и остаётся в том же месте либо состоянии.","При уходе противопоставляются глаголы gehen и fahren.","Очень частая фраза: Ich bleibe zu Hause."],"examples":[{"de":"Ich bleibe zu Hause.","lv":"Я остаюсь дома."},{"de":"Bleib hier!","lv":"Оставайся здесь!"},{"de":"Wir bleiben noch eine Stunde.","lv":"Мы останемся ещё на час."},{"de":"Ich gehe nach Hause.","lv":"Я иду домой."}],"comparison":[{"word":"bleiben","meaning":"Оставаться","example":"Ich bleibe hier. – Я остаюсь здесь."},{"word":"gehen","meaning":"Идти • Уходить пешком","example":"Ich gehe nach Hause. – Я иду домой."},{"word":"fahren","meaning":"Ехать на транспорте","example":"Ich fahre nach Hause. – Я еду домой."},{"word":"warten","meaning":"Ждать","example":"Ich warte hier. – Я жду здесь."}],"tip":{"text":"Запомните: не уходить → bleiben; уходить пешком → gehen."},"important":["bleiben означает «оставаться», а не «ждать».","Ich bleibe hier = Я остаюсь здесь; Ich warte hier = Я жду здесь."]}}
**Note:** Pilna RU kartīte «bleiben»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bleiben",
  "lv": "Оставаться",
  "level": "A1",
  "study": {
    "id": "a1-bleiben",
    "layout": "standardStudy",
    "translation": "Оставаться",
    "explanation": [
      "Основная идея: bleiben означает «оставаться».",
      "bleiben употребляется, если человек или предмет не уходит и остаётся в том же месте либо состоянии.",
      "При уходе противопоставляются глаголы gehen и fahren.",
      "Очень частая фраза: Ich bleibe zu Hause."
    ],
    "examples": [
      {
        "de": "Ich bleibe zu Hause.",
        "lv": "Я остаюсь дома."
      },
      {
        "de": "Bleib hier!",
        "lv": "Оставайся здесь!"
      },
      {
        "de": "Wir bleiben noch eine Stunde.",
        "lv": "Мы останемся ещё на час."
      },
      {
        "de": "Ich gehe nach Hause.",
        "lv": "Я иду домой."
      }
    ],
    "comparison": [
      {
        "word": "bleiben",
        "meaning": "Оставаться",
        "example": "Ich bleibe hier. – Я остаюсь здесь."
      },
      {
        "word": "gehen",
        "meaning": "Идти • Уходить пешком",
        "example": "Ich gehe nach Hause. – Я иду домой."
      },
      {
        "word": "fahren",
        "meaning": "Ехать на транспорте",
        "example": "Ich fahre nach Hause. – Я еду домой."
      },
      {
        "word": "warten",
        "meaning": "Ждать",
        "example": "Ich warte hier. – Я жду здесь."
      }
    ],
    "tip": {
      "text": "Запомните: не уходить → bleiben; уходить пешком → gehen."
    },
    "important": [
      "bleiben означает «оставаться», а не «ждать».",
      "Ich bleibe hier = Я остаюсь здесь; Ich warte hier = Я жду здесь."
    ]
  },
  "index": 101
}
```

---

## Finding 25

**Audit ID:** `LRB083-0025`
**Finding Stable ID:** `g2/a1/ru|a1-bringen|a1.card.a1-bringen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-bringen`
**Field / path:** `a1.card.a1-bringen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Принести • Забрать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Приносить • Относить • Отвозить","study":{"id":"a1-bringen","layout":"standardStudy","translation":"Приносить • Относить • Отвозить","explanation":["Основная идея: bringen означает доставлять что-либо человеку или в определённое место.","По-русски bringen переводится по-разному.","Часто: приносить.","В зависимости от ситуации: относить, отвозить или доставлять.","Перевод определяется контекстом."],"examples":[{"de":"Ich bringe dir ein Buch.","lv":"Я принесу тебе книгу."},{"de":"Ich bringe das Paket zur Post.","lv":"Я отнесу посылку на почту."},{"de":"Ich bringe die Kinder zur Schule.","lv":"Я отвезу детей в школу."}],"comparison":[{"word":"bringen","meaning":"Приносить","example":"Ich bringe dir ein Buch. – Я принесу тебе книгу."},{"word":"bringen","meaning":"Относить","example":"Ich bringe das Paket zur Post. – Я отнесу посылку на почту."},{"word":"bringen","meaning":"Отвозить","example":"Ich bringe die Kinder zur Schule. – Я отвезу детей в школу."},{"word":"bringen","meaning":"Доставлять","example":"Ich bringe dir ein Buch. – Я доставлю тебе книгу."},{"word":"nehmen","meaning":"Брать","example":"Ich nehme das Buch. – Я беру книгу."}],"tip":{"text":"Если предмет попадает к другому человеку или в другое место, часто употребляется bringen."},"important":["nehmen означает «брать».","bringen означает «доставлять».","Русский перевод зависит от контекста."]}}
**Note:** Pilna RU kartīte «bringen»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bringen",
  "lv": "Приносить • Относить • Отвозить",
  "level": "A1",
  "study": {
    "id": "a1-bringen",
    "layout": "standardStudy",
    "translation": "Приносить • Относить • Отвозить",
    "explanation": [
      "Основная идея: bringen означает доставлять что-либо человеку или в определённое место.",
      "По-русски bringen переводится по-разному.",
      "Часто: приносить.",
      "В зависимости от ситуации: относить, отвозить или доставлять.",
      "Перевод определяется контекстом."
    ],
    "examples": [
      {
        "de": "Ich bringe dir ein Buch.",
        "lv": "Я принесу тебе книгу."
      },
      {
        "de": "Ich bringe das Paket zur Post.",
        "lv": "Я отнесу посылку на почту."
      },
      {
        "de": "Ich bringe die Kinder zur Schule.",
        "lv": "Я отвезу детей в школу."
      }
    ],
    "comparison": [
      {
        "word": "bringen",
        "meaning": "Приносить",
        "example": "Ich bringe dir ein Buch. – Я принесу тебе книгу."
      },
      {
        "word": "bringen",
        "meaning": "Относить",
        "example": "Ich bringe das Paket zur Post. – Я отнесу посылку на почту."
      },
      {
        "word": "bringen",
        "meaning": "Отвозить",
        "example": "Ich bringe die Kinder zur Schule. – Я отвезу детей в школу."
      },
      {
        "word": "bringen",
        "meaning": "Доставлять",
        "example": "Ich bringe dir ein Buch. – Я доставлю тебе книгу."
      },
      {
        "word": "nehmen",
        "meaning": "Брать",
        "example": "Ich nehme das Buch. – Я беру книгу."
      }
    ],
    "tip": {
      "text": "Если предмет попадает к другому человеку или в другое место, часто употребляется bringen."
    },
    "important": [
      "nehmen означает «брать».",
      "bringen означает «доставлять».",
      "Русский перевод зависит от контекста."
    ]
  },
  "index": 111
}
```

---

## Finding 26

**Audit ID:** `LRB083-0026`
**Finding Stable ID:** `g2/a1/ru|a1-bringen|a1.card.a1-bringen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-bringen`
**Field / path:** `a1.card.a1-bringen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Принести • Забрать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Приносить • Относить • Отвозить","study":{"id":"a1-bringen","layout":"standardStudy","translation":"Приносить • Относить • Отвозить","explanation":["Основная идея: bringen означает доставлять что-либо человеку или в определённое место.","По-русски bringen переводится по-разному.","Часто: приносить.","В зависимости от ситуации: относить, отвозить или доставлять.","Перевод определяется контекстом."],"examples":[{"de":"Ich bringe dir ein Buch.","lv":"Я принесу тебе книгу."},{"de":"Ich bringe das Paket zur Post.","lv":"Я отнесу посылку на почту."},{"de":"Ich bringe die Kinder zur Schule.","lv":"Я отвезу детей в школу."}],"comparison":[{"word":"bringen","meaning":"Приносить","example":"Ich bringe dir ein Buch. – Я принесу тебе книгу."},{"word":"bringen","meaning":"Относить","example":"Ich bringe das Paket zur Post. – Я отнесу посылку на почту."},{"word":"bringen","meaning":"Отвозить","example":"Ich bringe die Kinder zur Schule. – Я отвезу детей в школу."},{"word":"bringen","meaning":"Доставлять","example":"Ich bringe dir ein Buch. – Я доставлю тебе книгу."},{"word":"nehmen","meaning":"Брать","example":"Ich nehme das Buch. – Я беру книгу."}],"tip":{"text":"Если предмет попадает к другому человеку или в другое место, часто употребляется bringen."},"important":["nehmen означает «брать».","bringen означает «доставлять».","Русский перевод зависит от контекста."]}}
**Note:** Pilna RU kartīte «bringen»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bringen",
  "lv": "Приносить • Относить • Отвозить",
  "level": "A1",
  "study": {
    "id": "a1-bringen",
    "layout": "standardStudy",
    "translation": "Приносить • Относить • Отвозить",
    "explanation": [
      "Основная идея: bringen означает доставлять что-либо человеку или в определённое место.",
      "По-русски bringen переводится по-разному.",
      "Часто: приносить.",
      "В зависимости от ситуации: относить, отвозить или доставлять.",
      "Перевод определяется контекстом."
    ],
    "examples": [
      {
        "de": "Ich bringe dir ein Buch.",
        "lv": "Я принесу тебе книгу."
      },
      {
        "de": "Ich bringe das Paket zur Post.",
        "lv": "Я отнесу посылку на почту."
      },
      {
        "de": "Ich bringe die Kinder zur Schule.",
        "lv": "Я отвезу детей в школу."
      }
    ],
    "comparison": [
      {
        "word": "bringen",
        "meaning": "Приносить",
        "example": "Ich bringe dir ein Buch. – Я принесу тебе книгу."
      },
      {
        "word": "bringen",
        "meaning": "Относить",
        "example": "Ich bringe das Paket zur Post. – Я отнесу посылку на почту."
      },
      {
        "word": "bringen",
        "meaning": "Отвозить",
        "example": "Ich bringe die Kinder zur Schule. – Я отвезу детей в школу."
      },
      {
        "word": "bringen",
        "meaning": "Доставлять",
        "example": "Ich bringe dir ein Buch. – Я доставлю тебе книгу."
      },
      {
        "word": "nehmen",
        "meaning": "Брать",
        "example": "Ich nehme das Buch. – Я беру книгу."
      }
    ],
    "tip": {
      "text": "Если предмет попадает к другому человеку или в другое место, часто употребляется bringen."
    },
    "important": [
      "nehmen означает «брать».",
      "bringen означает «доставлять».",
      "Русский перевод зависит от контекста."
    ]
  },
  "index": 111
}
```

---

## Finding 27

**Audit ID:** `LRB083-0027`
**Finding Stable ID:** `g2/a1/ru|a1-da|a1.card.a1-da.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-da`
**Field / path:** `a1.card.a1-da.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Там • Здесь • Здесь (общий)
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Там • Здесь","study":{"id":"a1-da","layout":"standardStudy","translation":"Там • Здесь","explanation":["Основная идея: на уровне A1 da чаще всего означает «там».","da указывает место или отсылает к уже упомянутому.","В зависимости от ситуации переводится также как «здесь» или «вот». ","На уровне A1 da изучается как общее указание места."],"examples":[{"de":"Da ist mein Auto.","lv":"Вот моя машина."},{"de":"Ich war da.","lv":"Я был там."},{"de":"Da kommt er.","lv":"Вот он идёт."},{"de":"Komm mal da her!","lv":"Иди сюда!"}],"comparison":[{"word":"da","meaning":"Там • Здесь • Вот","example":"Da ist mein Auto. – Вот моя машина."},{"word":"hier","meaning":"Здесь (в конкретном месте)","example":"Hier ist mein Auto. – Здесь моя машина."},{"word":"dort","meaning":"Там (дальше)","example":"Dort ist mein Auto. – Там моя машина."},{"word":"dann","meaning":"Тогда • Затем","example":"Dann gehen wir nach Hause. – Тогда мы идём домой."}],"tip":{"text":"Запомните: общее указание «там/здесь» → da."},"important":["da — общее указание места.","hier означает конкретное «здесь», а dort — более далёкое «там»."]}}
**Note:** Pilna RU kartīte «da»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "da",
  "lv": "Там • Здесь",
  "level": "A1",
  "study": {
    "id": "a1-da",
    "layout": "standardStudy",
    "translation": "Там • Здесь",
    "explanation": [
      "Основная идея: на уровне A1 da чаще всего означает «там».",
      "da указывает место или отсылает к уже упомянутому.",
      "В зависимости от ситуации переводится также как «здесь» или «вот». ",
      "На уровне A1 da изучается как общее указание места."
    ],
    "examples": [
      {
        "de": "Da ist mein Auto.",
        "lv": "Вот моя машина."
      },
      {
        "de": "Ich war da.",
        "lv": "Я был там."
      },
      {
        "de": "Da kommt er.",
        "lv": "Вот он идёт."
      },
      {
        "de": "Komm mal da her!",
        "lv": "Иди сюда!"
      }
    ],
    "comparison": [
      {
        "word": "da",
        "meaning": "Там • Здесь • Вот",
        "example": "Da ist mein Auto. – Вот моя машина."
      },
      {
        "word": "hier",
        "meaning": "Здесь (в конкретном месте)",
        "example": "Hier ist mein Auto. – Здесь моя машина."
      },
      {
        "word": "dort",
        "meaning": "Там (дальше)",
        "example": "Dort ist mein Auto. – Там моя машина."
      },
      {
        "word": "dann",
        "meaning": "Тогда • Затем",
        "example": "Dann gehen wir nach Hause. – Тогда мы идём домой."
      }
    ],
    "tip": {
      "text": "Запомните: общее указание «там/здесь» → da."
    },
    "important": [
      "da — общее указание места.",
      "hier означает конкретное «здесь», а dort — более далёкое «там»."
    ]
  },
  "index": 126
}
```

---

## Finding 28

**Audit ID:** `LRB083-0028`
**Finding Stable ID:** `g2/a1/ru|a1-das|a1.card.a1-das.study.comparison[2].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-das`
**Field / path:** `a1.card.a1-das.study.comparison[2].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Кто • Который • Кого
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Определённый артикль среднего рода • Это","study":{"id":"a1-das","layout":"standardStudy","translation":"Определённый артикль среднего рода • Это","explanation":"Употребляется с существительными среднего рода. В некоторых предложениях das также выступает как указательное или относительное местоимение.","examples":[{"de":"Das ist mein Auto.","lv":"Это моя машина."},{"de":"Das ist gut.","lv":"Это хорошо."},{"de":"Das Buch, das ich lese, ist interessant.","lv":"Книга, которую я читаю, интересная."}],"comparison":[{"word":"das","meaning":"Артикль среднего рода • Это","example":"Das ist mein Auto. – Это моя машина."},{"word":"dies","meaning":"Это • Этот","example":"Dies ist mein Auto. – Это моя машина."},{"word":"welches","meaning":"Который • Которая • Которое","example":"Das ist das Buch, welches ich lese. – Это книга, которую я читаю."}],"tip":{"text":"Запомните: средний род → das; союз «что» → dass."},"important":["На уровне A1 das прежде всего изучается как артикль среднего рода.","das и dass — разные слова: das может быть артиклем или местоимением, а dass означает союз «что»."]}}
**Note:** Pilna RU kartīte «das»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "das",
  "lv": "Определённый артикль среднего рода • Это",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "Определённый артикль среднего рода • Это",
    "explanation": "Употребляется с существительными среднего рода. В некоторых предложениях das также выступает как указательное или относительное местоимение.",
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "Это моя машина."
      },
      {
        "de": "Das ist gut.",
        "lv": "Это хорошо."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Книга, которую я читаю, интересная."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "Артикль среднего рода • Это",
        "example": "Das ist mein Auto. – Это моя машина."
      },
      {
        "word": "dies",
        "meaning": "Это • Этот",
        "example": "Dies ist mein Auto. – Это моя машина."
      },
      {
        "word": "welches",
        "meaning": "Который • Которая • Которое",
        "example": "Das ist das Buch, welches ich lese. – Это книга, которую я читаю."
      }
    ],
    "tip": {
      "text": "Запомните: средний род → das; союз «что» → dass."
    },
    "important": [
      "На уровне A1 das прежде всего изучается как артикль среднего рода.",
      "das и dass — разные слова: das может быть артиклем или местоимением, а dass означает союз «что»."
    ]
  },
  "index": 129
}
```

---

## Finding 29

**Audit ID:** `LRB083-0029`
**Finding Stable ID:** `g2/a1/ru|a1-dass|a1.card.a1-dass.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-dass`
**Field / path:** `a1.card.a1-dass.study.comparison[1].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Потому что • Потому что
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Что","study":{"id":"a1-dass","layout":"standardStudy","translation":"Что","explanation":"Вводит придаточное предложение, выражающее факт, мысль или высказывание.","examples":[{"de":"Ich weiß, dass du müde bist.","lv":"Я знаю, что ты устал."},{"de":"Er sagt, dass er kommt.","lv":"Он говорит, что придёт."},{"de":"Ich glaube, dass das stimmt.","lv":"Я думаю, что это верно."}],"comparison":[{"word":"dass","meaning":"Что","example":"Ich weiß, dass er kommt. – Я знаю, что он придёт."},{"word":"weil","meaning":"Потому что","example":"Ich bleibe zu Hause, weil es regnet. – Я остаюсь дома, потому что идёт дождь."},{"word":"damit","meaning":"Чтобы","example":"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Я учу немецкий, чтобы работать в Германии."},{"word":"ob","meaning":"Ли • Будет ли","example":"Ich weiß nicht, ob er kommt. – Я не знаю, придёт ли он."}],"tip":{"text":"Запомните: союз «что» → dass."},"important":["dass означает союз «что» и вводит придаточное предложение.","Не путайте dass с das, которое может быть артиклем или местоимением."]}}
**Note:** Pilna RU kartīte «dass»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dass",
  "lv": "Что",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "Что",
    "explanation": "Вводит придаточное предложение, выражающее факт, мысль или высказывание.",
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Я знаю, что ты устал."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "Он говорит, что придёт."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Я думаю, что это верно."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "Что",
        "example": "Ich weiß, dass er kommt. – Я знаю, что он придёт."
      },
      {
        "word": "weil",
        "meaning": "Потому что",
        "example": "Ich bleibe zu Hause, weil es regnet. – Я остаюсь дома, потому что идёт дождь."
      },
      {
        "word": "damit",
        "meaning": "Чтобы",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Я учу немецкий, чтобы работать в Германии."
      },
      {
        "word": "ob",
        "meaning": "Ли • Будет ли",
        "example": "Ich weiß nicht, ob er kommt. – Я не знаю, придёт ли он."
      }
    ],
    "tip": {
      "text": "Запомните: союз «что» → dass."
    },
    "important": [
      "dass означает союз «что» и вводит придаточное предложение.",
      "Не путайте dass с das, которое может быть артиклем или местоимением."
    ]
  },
  "index": 130
}
```

---

## Finding 30

**Audit ID:** `LRB083-0030`
**Finding Stable ID:** `g2/a1/ru|a1-ein|a1.card.a1-ein.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-ein`
**Field / path:** `a1.card.a1-ein.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Неопределенный артикль • Один • Кто-то
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Неопределённый артикль • Один","study":{"id":"a1-ein","layout":"standardStudy","translation":"Неопределённый артикль • Один","explanation":["Основная идея: ein — неопределённый артикль.","ein употребляется с существительными мужского и среднего рода в именительном падеже.","Мужской род: ein Mann.","Средний род: ein Buch.","Женский род: eine.","Винительный падеж мужского рода: einen."],"examples":[{"de":"Ein Mann wartet draußen.","lv":"Какой-то мужчина ждёт снаружи."},{"de":"Ich habe ein Buch.","lv":"У меня есть книга."},{"de":"Er sucht einen Stift.","lv":"Он ищет ручку."},{"de":"Ein Kind spielt.","lv":"Ребёнок играет."}],"comparison":[{"word":"ein Mann","meaning":"Мужской род","example":"Ein Mann wartet draußen. – Мужчина ждёт снаружи."},{"word":"eine Frau","meaning":"Женский род","example":"eine Frau – женщина"},{"word":"ein Buch","meaning":"Средний род","example":"Ich habe ein Buch. – У меня есть книга."},{"word":"einen Mann","meaning":"Винительный падеж","example":"einen Mann – мужчину"}],"tip":{"text":"Запомните: ein — не только «один», но часто просто неопределённый артикль."},"important":["ein — мужской род.","ein — средний род.","eine — женский род.","einen — винительный падеж мужского рода."]}}
**Note:** Pilna RU kartīte «ein»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ein",
  "lv": "Неопределённый артикль • Один",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "Неопределённый артикль • Один",
    "explanation": [
      "Основная идея: ein — неопределённый артикль.",
      "ein употребляется с существительными мужского и среднего рода в именительном падеже.",
      "Мужской род: ein Mann.",
      "Средний род: ein Buch.",
      "Женский род: eine.",
      "Винительный падеж мужского рода: einen."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Какой-то мужчина ждёт снаружи."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "У меня есть книга."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Он ищет ручку."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Ребёнок играет."
      }
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "Мужской род",
        "example": "Ein Mann wartet draußen. – Мужчина ждёт снаружи."
      },
      {
        "word": "eine Frau",
        "meaning": "Женский род",
        "example": "eine Frau – женщина"
      },
      {
        "word": "ein Buch",
        "meaning": "Средний род",
        "example": "Ich habe ein Buch. – У меня есть книга."
      },
      {
        "word": "einen Mann",
        "meaning": "Винительный падеж",
        "example": "einen Mann – мужчину"
      }
    ],
    "tip": {
      "text": "Запомните: ein — не только «один», но часто просто неопределённый артикль."
    },
    "important": [
      "ein — мужской род.",
      "ein — средний род.",
      "eine — женский род.",
      "einen — винительный падеж мужского рода."
    ]
  },
  "index": 154
}
```

---

## Finding 31

**Audit ID:** `LRB083-0031`
**Finding Stable ID:** `g2/a1/ru|a1-ein|a1.card.a1-ein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-ein`
**Field / path:** `a1.card.a1-ein.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Неопределенный артикль • Один • Кто-то
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Неопределённый артикль • Один","study":{"id":"a1-ein","layout":"standardStudy","translation":"Неопределённый артикль • Один","explanation":["Основная идея: ein — неопределённый артикль.","ein употребляется с существительными мужского и среднего рода в именительном падеже.","Мужской род: ein Mann.","Средний род: ein Buch.","Женский род: eine.","Винительный падеж мужского рода: einen."],"examples":[{"de":"Ein Mann wartet draußen.","lv":"Какой-то мужчина ждёт снаружи."},{"de":"Ich habe ein Buch.","lv":"У меня есть книга."},{"de":"Er sucht einen Stift.","lv":"Он ищет ручку."},{"de":"Ein Kind spielt.","lv":"Ребёнок играет."}],"comparison":[{"word":"ein Mann","meaning":"Мужской род","example":"Ein Mann wartet draußen. – Мужчина ждёт снаружи."},{"word":"eine Frau","meaning":"Женский род","example":"eine Frau – женщина"},{"word":"ein Buch","meaning":"Средний род","example":"Ich habe ein Buch. – У меня есть книга."},{"word":"einen Mann","meaning":"Винительный падеж","example":"einen Mann – мужчину"}],"tip":{"text":"Запомните: ein — не только «один», но часто просто неопределённый артикль."},"important":["ein — мужской род.","ein — средний род.","eine — женский род.","einen — винительный падеж мужского рода."]}}
**Note:** Pilna RU kartīte «ein»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ein",
  "lv": "Неопределённый артикль • Один",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "Неопределённый артикль • Один",
    "explanation": [
      "Основная идея: ein — неопределённый артикль.",
      "ein употребляется с существительными мужского и среднего рода в именительном падеже.",
      "Мужской род: ein Mann.",
      "Средний род: ein Buch.",
      "Женский род: eine.",
      "Винительный падеж мужского рода: einen."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Какой-то мужчина ждёт снаружи."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "У меня есть книга."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "Он ищет ручку."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Ребёнок играет."
      }
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "Мужской род",
        "example": "Ein Mann wartet draußen. – Мужчина ждёт снаружи."
      },
      {
        "word": "eine Frau",
        "meaning": "Женский род",
        "example": "eine Frau – женщина"
      },
      {
        "word": "ein Buch",
        "meaning": "Средний род",
        "example": "Ich habe ein Buch. – У меня есть книга."
      },
      {
        "word": "einen Mann",
        "meaning": "Винительный падеж",
        "example": "einen Mann – мужчину"
      }
    ],
    "tip": {
      "text": "Запомните: ein — не только «один», но часто просто неопределённый артикль."
    },
    "important": [
      "ein — мужской род.",
      "ein — средний род.",
      "eine — женский род.",
      "einen — винительный падеж мужского рода."
    ]
  },
  "index": 154
}
```

---

## Finding 32

**Audit ID:** `LRB083-0032`
**Finding Stable ID:** `g2/a1/ru|a1-einmal|a1.card.a1-einmal.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-einmal`
**Field / path:** `a1.card.a1-einmal.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Один раз • Один раз
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Однажды • Один раз","study":{"id":"a1-einmal","layout":"standardStudy","translation":"Однажды • Один раз","explanation":["Основная идея: einmal указывает на один случай или на неопределённый момент в прошлом.","einmal может означать «один раз».","В рассказе о прошлом einmal часто переводится как «однажды».","Точное значение определяется контекстом."],"examples":[{"de":"Ich war einmal in Berlin.","lv":"Я однажды был в Берлине."},{"de":"Ich war einmal in Berlin.","lv":"Я один раз был в Берлине."}],"tip":["einmal = однажды • один раз","Употребляйте einmal, когда речь идёт об одном случае или неопределённом моменте."],"important":["einmal означает «однажды» или «один раз».","Значение определяется контекстом."]}}
**Note:** Pilna RU kartīte «einmal»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "einmal",
  "lv": "Однажды • Один раз",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "Однажды • Один раз",
    "explanation": [
      "Основная идея: einmal указывает на один случай или на неопределённый момент в прошлом.",
      "einmal может означать «один раз».",
      "В рассказе о прошлом einmal часто переводится как «однажды».",
      "Точное значение определяется контекстом."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Я однажды был в Берлине."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Я один раз был в Берлине."
      }
    ],
    "tip": [
      "einmal = однажды • один раз",
      "Употребляйте einmal, когда речь идёт об одном случае или неопределённом моменте."
    ],
    "important": [
      "einmal означает «однажды» или «один раз».",
      "Значение определяется контекстом."
    ]
  },
  "index": 700
}
```

---

## Finding 33

**Audit ID:** `LRB083-0033`
**Finding Stable ID:** `g2/a1/ru|a1-einmal|a1.card.a1-einmal.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-einmal`
**Field / path:** `a1.card.a1-einmal.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Один раз • Один раз
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Однажды • Один раз","study":{"id":"a1-einmal","layout":"standardStudy","translation":"Однажды • Один раз","explanation":["Основная идея: einmal указывает на один случай или на неопределённый момент в прошлом.","einmal может означать «один раз».","В рассказе о прошлом einmal часто переводится как «однажды».","Точное значение определяется контекстом."],"examples":[{"de":"Ich war einmal in Berlin.","lv":"Я однажды был в Берлине."},{"de":"Ich war einmal in Berlin.","lv":"Я один раз был в Берлине."}],"tip":["einmal = однажды • один раз","Употребляйте einmal, когда речь идёт об одном случае или неопределённом моменте."],"important":["einmal означает «однажды» или «один раз».","Значение определяется контекстом."]}}
**Note:** Pilna RU kartīte «einmal»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "einmal",
  "lv": "Однажды • Один раз",
  "level": "A1",
  "study": {
    "id": "a1-einmal",
    "layout": "standardStudy",
    "translation": "Однажды • Один раз",
    "explanation": [
      "Основная идея: einmal указывает на один случай или на неопределённый момент в прошлом.",
      "einmal может означать «один раз».",
      "В рассказе о прошлом einmal часто переводится как «однажды».",
      "Точное значение определяется контекстом."
    ],
    "examples": [
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Я однажды был в Берлине."
      },
      {
        "de": "Ich war einmal in Berlin.",
        "lv": "Я один раз был в Берлине."
      }
    ],
    "tip": [
      "einmal = однажды • один раз",
      "Употребляйте einmal, когда речь идёт об одном случае или неопределённом моменте."
    ],
    "important": [
      "einmal означает «однажды» или «один раз».",
      "Значение определяется контекстом."
    ]
  },
  "index": 700
}
```

---

## Finding 34

**Audit ID:** `LRB083-0034`
**Finding Stable ID:** `g2/a1/ru|a1-eis|a1.card.a1-eis.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-eis`
**Field / path:** `a1.card.a1-eis.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Лед • Мороженое
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Лёд • Мороженое","study":{"id":"a1-eis","layout":"standardStudy","translation":"Лёд • Мороженое","explanation":["Основная идея: das Eis может означать и лёд, и мороженое.","Замёрзшая вода — лёд.","Еда или десерт — мороженое.","Контекст обычно ясно показывает нужное значение.","Важные фразы уровня A1: ein Eis essen и Eis im Glas."],"examples":[{"de":"Ich esse ein Eis.","lv":"Я ем мороженое."},{"de":"Möchtest du ein Eis?","lv":"Ты хочешь мороженое?"},{"de":"Im Winter liegt Eis auf dem See.","lv":"Зимой на озере лежит лёд."},{"de":"Das Eis ist kalt.","lv":"Лёд холодный."},{"de":"Ich nehme ein Eis mit Schokolade.","lv":"Я возьму шоколадное мороженое."}],"comparison":[{"word":"das Eis","meaning":"Лёд • Мороженое","example":"Ich esse ein Eis. – Я ем мороженое."},{"word":"der Schnee","meaning":"Снег","example":"Der Schnee ist weiß. – Снег белый."},{"word":"kalt","meaning":"Холодный","example":"Das Wasser ist kalt. – Вода холодная."},{"word":"das Dessert","meaning":"Десерт","example":"Eis ist ein Dessert. – Мороженое — это десерт."}],"tip":{"text":"Запомните: еда → мороженое; зима или вода → лёд."},"important":["В русском «лёд» и «мороженое» — разные слова, а в немецком для обоих часто употребляется das Eis.","Контекст определяет значение: десерт — мороженое, замёрзшая вода — лёд."]}}
**Note:** Pilna RU kartīte «Eis»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "Лёд • Мороженое",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "Лёд • Мороженое",
    "explanation": [
      "Основная идея: das Eis может означать и лёд, и мороженое.",
      "Замёрзшая вода — лёд.",
      "Еда или десерт — мороженое.",
      "Контекст обычно ясно показывает нужное значение.",
      "Важные фразы уровня A1: ein Eis essen и Eis im Glas."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Я ем мороженое."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Ты хочешь мороженое?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Зимой на озере лежит лёд."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Лёд холодный."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Я возьму шоколадное мороженое."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "Лёд • Мороженое",
        "example": "Ich esse ein Eis. – Я ем мороженое."
      },
      {
        "word": "der Schnee",
        "meaning": "Снег",
        "example": "Der Schnee ist weiß. – Снег белый."
      },
      {
        "word": "kalt",
        "meaning": "Холодный",
        "example": "Das Wasser ist kalt. – Вода холодная."
      },
      {
        "word": "das Dessert",
        "meaning": "Десерт",
        "example": "Eis ist ein Dessert. – Мороженое — это десерт."
      }
    ],
    "tip": {
      "text": "Запомните: еда → мороженое; зима или вода → лёд."
    },
    "important": [
      "В русском «лёд» и «мороженое» — разные слова, а в немецком для обоих часто употребляется das Eis.",
      "Контекст определяет значение: десерт — мороженое, замёрзшая вода — лёд."
    ]
  },
  "index": 157
}
```

---

## Finding 35

**Audit ID:** `LRB083-0035`
**Finding Stable ID:** `g2/a1/ru|a1-eis|a1.card.a1-eis.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-eis`
**Field / path:** `a1.card.a1-eis.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Лед • Мороженое
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Лёд • Мороженое","study":{"id":"a1-eis","layout":"standardStudy","translation":"Лёд • Мороженое","explanation":["Основная идея: das Eis может означать и лёд, и мороженое.","Замёрзшая вода — лёд.","Еда или десерт — мороженое.","Контекст обычно ясно показывает нужное значение.","Важные фразы уровня A1: ein Eis essen и Eis im Glas."],"examples":[{"de":"Ich esse ein Eis.","lv":"Я ем мороженое."},{"de":"Möchtest du ein Eis?","lv":"Ты хочешь мороженое?"},{"de":"Im Winter liegt Eis auf dem See.","lv":"Зимой на озере лежит лёд."},{"de":"Das Eis ist kalt.","lv":"Лёд холодный."},{"de":"Ich nehme ein Eis mit Schokolade.","lv":"Я возьму шоколадное мороженое."}],"comparison":[{"word":"das Eis","meaning":"Лёд • Мороженое","example":"Ich esse ein Eis. – Я ем мороженое."},{"word":"der Schnee","meaning":"Снег","example":"Der Schnee ist weiß. – Снег белый."},{"word":"kalt","meaning":"Холодный","example":"Das Wasser ist kalt. – Вода холодная."},{"word":"das Dessert","meaning":"Десерт","example":"Eis ist ein Dessert. – Мороженое — это десерт."}],"tip":{"text":"Запомните: еда → мороженое; зима или вода → лёд."},"important":["В русском «лёд» и «мороженое» — разные слова, а в немецком для обоих часто употребляется das Eis.","Контекст определяет значение: десерт — мороженое, замёрзшая вода — лёд."]}}
**Note:** Pilna RU kartīte «Eis»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "Лёд • Мороженое",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "Лёд • Мороженое",
    "explanation": [
      "Основная идея: das Eis может означать и лёд, и мороженое.",
      "Замёрзшая вода — лёд.",
      "Еда или десерт — мороженое.",
      "Контекст обычно ясно показывает нужное значение.",
      "Важные фразы уровня A1: ein Eis essen и Eis im Glas."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Я ем мороженое."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Ты хочешь мороженое?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Зимой на озере лежит лёд."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Лёд холодный."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Я возьму шоколадное мороженое."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "Лёд • Мороженое",
        "example": "Ich esse ein Eis. – Я ем мороженое."
      },
      {
        "word": "der Schnee",
        "meaning": "Снег",
        "example": "Der Schnee ist weiß. – Снег белый."
      },
      {
        "word": "kalt",
        "meaning": "Холодный",
        "example": "Das Wasser ist kalt. – Вода холодная."
      },
      {
        "word": "das Dessert",
        "meaning": "Десерт",
        "example": "Eis ist ein Dessert. – Мороженое — это десерт."
      }
    ],
    "tip": {
      "text": "Запомните: еда → мороженое; зима или вода → лёд."
    },
    "important": [
      "В русском «лёд» и «мороженое» — разные слова, а в немецком для обоих часто употребляется das Eis.",
      "Контекст определяет значение: десерт — мороженое, замёрзшая вода — лёд."
    ]
  },
  "index": 157
}
```

---

## Finding 36

**Audit ID:** `LRB083-0036`
**Finding Stable ID:** `g2/a1/ru|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Сначала • Только
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Сначала • Только","study":{"id":"a1-erst","layout":"standardStudy","translation":"Сначала • Только","explanation":["Основная идея: erst часто означает «только», а в контексте последовательности — «сначала».","erst нередко указывает, что что-либо происходит позже ожидаемого.","Ich bin erst 18. — Мне только 18 лет.","Es ist erst Montag. — Ещё только понедельник.","Erst lernen, dann spielen. — Сначала учиться, потом играть."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Сначала учись, потом играй."},{"de":"Ich komme erst morgen.","lv":"Я приеду только завтра."},{"de":"Er ist erst 18 Jahre alt.","lv":"Ему всего 18 лет."},{"de":"Wir essen erst um acht Uhr.","lv":"Мы едим только в восемь часов."}],"comparison":[{"word":"erst","meaning":"Сначала • Только","example":"Erst lernen, dann spielen. – Сначала учись, потом играй."},{"word":"zuerst","meaning":"Сначала • Вначале","example":"Zuerst frühstücken wir. – Сначала мы завтракаем."},{"word":"nur","meaning":"Только","example":"Ich habe nur 5 Euro. – У меня только пять евро."},{"word":"dann","meaning":"Затем • Тогда","example":"Dann gehen wir nach Hause. – Затем мы идём домой."}],"tip":{"text":"Запомните: время или достигнутый момент → erst; ограничение количества → nur."},"important":["erst и zuerst — не полные синонимы.","erst часто означает «только».","zuerst чаще означает «сначала»."]}}
**Note:** Pilna RU kartīte «erst»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "Сначала • Только",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "Сначала • Только",
    "explanation": [
      "Основная идея: erst часто означает «только», а в контексте последовательности — «сначала».",
      "erst нередко указывает, что что-либо происходит позже ожидаемого.",
      "Ich bin erst 18. — Мне только 18 лет.",
      "Es ist erst Montag. — Ещё только понедельник.",
      "Erst lernen, dann spielen. — Сначала учиться, потом играть."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Сначала учись, потом играй."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Я приеду только завтра."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Ему всего 18 лет."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Мы едим только в восемь часов."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "Сначала • Только",
        "example": "Erst lernen, dann spielen. – Сначала учись, потом играй."
      },
      {
        "word": "zuerst",
        "meaning": "Сначала • Вначале",
        "example": "Zuerst frühstücken wir. – Сначала мы завтракаем."
      },
      {
        "word": "nur",
        "meaning": "Только",
        "example": "Ich habe nur 5 Euro. – У меня только пять евро."
      },
      {
        "word": "dann",
        "meaning": "Затем • Тогда",
        "example": "Dann gehen wir nach Hause. – Затем мы идём домой."
      }
    ],
    "tip": {
      "text": "Запомните: время или достигнутый момент → erst; ограничение количества → nur."
    },
    "important": [
      "erst и zuerst — не полные синонимы.",
      "erst часто означает «только».",
      "zuerst чаще означает «сначала»."
    ]
  },
  "index": 165
}
```

---

## Finding 37

**Audit ID:** `LRB083-0037`
**Finding Stable ID:** `g2/a1/ru|a1-erst|a1.card.a1-erst.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Сначала • Только
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Сначала • Только","study":{"id":"a1-erst","layout":"standardStudy","translation":"Сначала • Только","explanation":["Основная идея: erst часто означает «только», а в контексте последовательности — «сначала».","erst нередко указывает, что что-либо происходит позже ожидаемого.","Ich bin erst 18. — Мне только 18 лет.","Es ist erst Montag. — Ещё только понедельник.","Erst lernen, dann spielen. — Сначала учиться, потом играть."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Сначала учись, потом играй."},{"de":"Ich komme erst morgen.","lv":"Я приеду только завтра."},{"de":"Er ist erst 18 Jahre alt.","lv":"Ему всего 18 лет."},{"de":"Wir essen erst um acht Uhr.","lv":"Мы едим только в восемь часов."}],"comparison":[{"word":"erst","meaning":"Сначала • Только","example":"Erst lernen, dann spielen. – Сначала учись, потом играй."},{"word":"zuerst","meaning":"Сначала • Вначале","example":"Zuerst frühstücken wir. – Сначала мы завтракаем."},{"word":"nur","meaning":"Только","example":"Ich habe nur 5 Euro. – У меня только пять евро."},{"word":"dann","meaning":"Затем • Тогда","example":"Dann gehen wir nach Hause. – Затем мы идём домой."}],"tip":{"text":"Запомните: время или достигнутый момент → erst; ограничение количества → nur."},"important":["erst и zuerst — не полные синонимы.","erst часто означает «только».","zuerst чаще означает «сначала»."]}}
**Note:** Pilna RU kartīte «erst»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "Сначала • Только",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "Сначала • Только",
    "explanation": [
      "Основная идея: erst часто означает «только», а в контексте последовательности — «сначала».",
      "erst нередко указывает, что что-либо происходит позже ожидаемого.",
      "Ich bin erst 18. — Мне только 18 лет.",
      "Es ist erst Montag. — Ещё только понедельник.",
      "Erst lernen, dann spielen. — Сначала учиться, потом играть."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Сначала учись, потом играй."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Я приеду только завтра."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Ему всего 18 лет."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Мы едим только в восемь часов."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "Сначала • Только",
        "example": "Erst lernen, dann spielen. – Сначала учись, потом играй."
      },
      {
        "word": "zuerst",
        "meaning": "Сначала • Вначале",
        "example": "Zuerst frühstücken wir. – Сначала мы завтракаем."
      },
      {
        "word": "nur",
        "meaning": "Только",
        "example": "Ich habe nur 5 Euro. – У меня только пять евро."
      },
      {
        "word": "dann",
        "meaning": "Затем • Тогда",
        "example": "Dann gehen wir nach Hause. – Затем мы идём домой."
      }
    ],
    "tip": {
      "text": "Запомните: время или достигнутый момент → erst; ограничение количества → nur."
    },
    "important": [
      "erst и zuerst — не полные синонимы.",
      "erst часто означает «только».",
      "zuerst чаще означает «сначала»."
    ]
  },
  "index": 165
}
```

---

## Finding 38

**Audit ID:** `LRB083-0038`
**Finding Stable ID:** `g2/a1/ru|a1-erst|a1.card.a1-erst.study.important[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.study.important[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Первый часто говорит о времени, последовательности или о том, что еще предстоит достичь какой-то точки • Nur ограничивает количество.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Сначала • Только","study":{"id":"a1-erst","layout":"standardStudy","translation":"Сначала • Только","explanation":["Основная идея: erst часто означает «только», а в контексте последовательности — «сначала».","erst нередко указывает, что что-либо происходит позже ожидаемого.","Ich bin erst 18. — Мне только 18 лет.","Es ist erst Montag. — Ещё только понедельник.","Erst lernen, dann spielen. — Сначала учиться, потом играть."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Сначала учись, потом играй."},{"de":"Ich komme erst morgen.","lv":"Я приеду только завтра."},{"de":"Er ist erst 18 Jahre alt.","lv":"Ему всего 18 лет."},{"de":"Wir essen erst um acht Uhr.","lv":"Мы едим только в восемь часов."}],"comparison":[{"word":"erst","meaning":"Сначала • Только","example":"Erst lernen, dann spielen. – Сначала учись, потом играй."},{"word":"zuerst","meaning":"Сначала • Вначале","example":"Zuerst frühstücken wir. – Сначала мы завтракаем."},{"word":"nur","meaning":"Только","example":"Ich habe nur 5 Euro. – У меня только пять евро."},{"word":"dann","meaning":"Затем • Тогда","example":"Dann gehen wir nach Hause. – Затем мы идём домой."}],"tip":{"text":"Запомните: время или достигнутый момент → erst; ограничение количества → nur."},"important":["erst и zuerst — не полные синонимы.","erst часто означает «только».","zuerst чаще означает «сначала»."]}}
**Note:** Pilna RU kartīte «erst»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "Сначала • Только",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "Сначала • Только",
    "explanation": [
      "Основная идея: erst часто означает «только», а в контексте последовательности — «сначала».",
      "erst нередко указывает, что что-либо происходит позже ожидаемого.",
      "Ich bin erst 18. — Мне только 18 лет.",
      "Es ist erst Montag. — Ещё только понедельник.",
      "Erst lernen, dann spielen. — Сначала учиться, потом играть."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Сначала учись, потом играй."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Я приеду только завтра."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Ему всего 18 лет."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Мы едим только в восемь часов."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "Сначала • Только",
        "example": "Erst lernen, dann spielen. – Сначала учись, потом играй."
      },
      {
        "word": "zuerst",
        "meaning": "Сначала • Вначале",
        "example": "Zuerst frühstücken wir. – Сначала мы завтракаем."
      },
      {
        "word": "nur",
        "meaning": "Только",
        "example": "Ich habe nur 5 Euro. – У меня только пять евро."
      },
      {
        "word": "dann",
        "meaning": "Затем • Тогда",
        "example": "Dann gehen wir nach Hause. – Затем мы идём домой."
      }
    ],
    "tip": {
      "text": "Запомните: время или достигнутый момент → erst; ограничение количества → nur."
    },
    "important": [
      "erst и zuerst — не полные синонимы.",
      "erst часто означает «только».",
      "zuerst чаще означает «сначала»."
    ]
  },
  "index": 165
}
```

---

## Finding 39

**Audit ID:** `LRB083-0039`
**Finding Stable ID:** `g2/a1/ru|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-erst`
**Field / path:** `a1.card.a1-erst.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Сначала • Только
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Сначала • Только","study":{"id":"a1-erst","layout":"standardStudy","translation":"Сначала • Только","explanation":["Основная идея: erst часто означает «только», а в контексте последовательности — «сначала».","erst нередко указывает, что что-либо происходит позже ожидаемого.","Ich bin erst 18. — Мне только 18 лет.","Es ist erst Montag. — Ещё только понедельник.","Erst lernen, dann spielen. — Сначала учиться, потом играть."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Сначала учись, потом играй."},{"de":"Ich komme erst morgen.","lv":"Я приеду только завтра."},{"de":"Er ist erst 18 Jahre alt.","lv":"Ему всего 18 лет."},{"de":"Wir essen erst um acht Uhr.","lv":"Мы едим только в восемь часов."}],"comparison":[{"word":"erst","meaning":"Сначала • Только","example":"Erst lernen, dann spielen. – Сначала учись, потом играй."},{"word":"zuerst","meaning":"Сначала • Вначале","example":"Zuerst frühstücken wir. – Сначала мы завтракаем."},{"word":"nur","meaning":"Только","example":"Ich habe nur 5 Euro. – У меня только пять евро."},{"word":"dann","meaning":"Затем • Тогда","example":"Dann gehen wir nach Hause. – Затем мы идём домой."}],"tip":{"text":"Запомните: время или достигнутый момент → erst; ограничение количества → nur."},"important":["erst и zuerst — не полные синонимы.","erst часто означает «только».","zuerst чаще означает «сначала»."]}}
**Note:** Pilna RU kartīte «erst»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "Сначала • Только",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "Сначала • Только",
    "explanation": [
      "Основная идея: erst часто означает «только», а в контексте последовательности — «сначала».",
      "erst нередко указывает, что что-либо происходит позже ожидаемого.",
      "Ich bin erst 18. — Мне только 18 лет.",
      "Es ist erst Montag. — Ещё только понедельник.",
      "Erst lernen, dann spielen. — Сначала учиться, потом играть."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Сначала учись, потом играй."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Я приеду только завтра."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Ему всего 18 лет."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Мы едим только в восемь часов."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "Сначала • Только",
        "example": "Erst lernen, dann spielen. – Сначала учись, потом играй."
      },
      {
        "word": "zuerst",
        "meaning": "Сначала • Вначале",
        "example": "Zuerst frühstücken wir. – Сначала мы завтракаем."
      },
      {
        "word": "nur",
        "meaning": "Только",
        "example": "Ich habe nur 5 Euro. – У меня только пять евро."
      },
      {
        "word": "dann",
        "meaning": "Затем • Тогда",
        "example": "Dann gehen wir nach Hause. – Затем мы идём домой."
      }
    ],
    "tip": {
      "text": "Запомните: время или достигнутый момент → erst; ограничение количества → nur."
    },
    "important": [
      "erst и zuerst — не полные синонимы.",
      "erst часто означает «только».",
      "zuerst чаще означает «сначала»."
    ]
  },
  "index": 165
}
```

---

## Finding 40

**Audit ID:** `LRB083-0040`
**Finding Stable ID:** `g2/a1/ru|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Это • Оно • Безличная форма
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Оно • Это • Безличное местоимение","study":{"id":"a1-es","layout":"standardStudy","translation":"Оно • Это • Безличное местоимение","explanation":["Основная идея: es — местоимение.","Оно означает «оно/это» или служит формальным подлежащим в безличных конструкциях."],"examples":[{"de":"Es regnet.","lv":"Идёт дождь."},{"de":"Es ist kalt.","lv":"Холодно."},{"de":"Das Kind schläft.","lv":"Ребёнок спит."},{"de":"Es ist müde.","lv":"Оно устало."}],"comparison":[{"word":"es","meaning":"Оно • Это • Безличное местоимение","example":"Es regnet. – Идёт дождь."},{"word":"ich","meaning":"Я (говорящий)","example":"Ich lerne Deutsch. – Я учу немецкий язык."}],"info":["Латышское es = немецкое ich","Немецкое es = оно • это • безличное местоимение"],"tip":{"text":"Запомните: латышское es («я») по-немецки ich, а не es."},"important":["ich и es — разные местоимения.","Немецкое es — не латышское «я».","Латышское es по-немецки ich; немецкое es часто означает «оно/это» или не переводится."]}}
**Note:** Pilna RU kartīte «es»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "Оно • Это • Безличное местоимение",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "Оно • Это • Безличное местоимение",
    "explanation": [
      "Основная идея: es — местоимение.",
      "Оно означает «оно/это» или служит формальным подлежащим в безличных конструкциях."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Идёт дождь."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Холодно."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Ребёнок спит."
      },
      {
        "de": "Es ist müde.",
        "lv": "Оно устало."
      }
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "Оно • Это • Безличное местоимение",
        "example": "Es regnet. – Идёт дождь."
      },
      {
        "word": "ich",
        "meaning": "Я (говорящий)",
        "example": "Ich lerne Deutsch. – Я учу немецкий язык."
      }
    ],
    "info": [
      "Латышское es = немецкое ich",
      "Немецкое es = оно • это • безличное местоимение"
    ],
    "tip": {
      "text": "Запомните: латышское es («я») по-немецки ich, а не es."
    },
    "important": [
      "ich и es — разные местоимения.",
      "Немецкое es — не латышское «я».",
      "Латышское es по-немецки ich; немецкое es часто означает «оно/это» или не переводится."
    ]
  },
  "index": 167
}
```

---

## Finding 41

**Audit ID:** `LRB083-0041`
**Finding Stable ID:** `g2/a1/ru|a1-es|a1.card.a1-es.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** оно • безличная форма
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Оно • Это • Безличное местоимение","study":{"id":"a1-es","layout":"standardStudy","translation":"Оно • Это • Безличное местоимение","explanation":["Основная идея: es — местоимение.","Оно означает «оно/это» или служит формальным подлежащим в безличных конструкциях."],"examples":[{"de":"Es regnet.","lv":"Идёт дождь."},{"de":"Es ist kalt.","lv":"Холодно."},{"de":"Das Kind schläft.","lv":"Ребёнок спит."},{"de":"Es ist müde.","lv":"Оно устало."}],"comparison":[{"word":"es","meaning":"Оно • Это • Безличное местоимение","example":"Es regnet. – Идёт дождь."},{"word":"ich","meaning":"Я (говорящий)","example":"Ich lerne Deutsch. – Я учу немецкий язык."}],"info":["Латышское es = немецкое ich","Немецкое es = оно • это • безличное местоимение"],"tip":{"text":"Запомните: латышское es («я») по-немецки ich, а не es."},"important":["ich и es — разные местоимения.","Немецкое es — не латышское «я».","Латышское es по-немецки ich; немецкое es часто означает «оно/это» или не переводится."]}}
**Note:** Pilna RU kartīte «es»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "Оно • Это • Безличное местоимение",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "Оно • Это • Безличное местоимение",
    "explanation": [
      "Основная идея: es — местоимение.",
      "Оно означает «оно/это» или служит формальным подлежащим в безличных конструкциях."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Идёт дождь."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Холодно."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Ребёнок спит."
      },
      {
        "de": "Es ist müde.",
        "lv": "Оно устало."
      }
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "Оно • Это • Безличное местоимение",
        "example": "Es regnet. – Идёт дождь."
      },
      {
        "word": "ich",
        "meaning": "Я (говорящий)",
        "example": "Ich lerne Deutsch. – Я учу немецкий язык."
      }
    ],
    "info": [
      "Латышское es = немецкое ich",
      "Немецкое es = оно • это • безличное местоимение"
    ],
    "tip": {
      "text": "Запомните: латышское es («я») по-немецки ich, а не es."
    },
    "important": [
      "ich и es — разные местоимения.",
      "Немецкое es — не латышское «я».",
      "Латышское es по-немецки ich; немецкое es часто означает «оно/это» или не переводится."
    ]
  },
  "index": 167
}
```

---

## Finding 42

**Audit ID:** `LRB083-0042`
**Finding Stable ID:** `g2/a1/ru|a1-es|a1.card.a1-es.study.important[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.study.important[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Латышское «Я» есть в немецком • Немецкий es часто означает это/оно или не переводится.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Оно • Это • Безличное местоимение","study":{"id":"a1-es","layout":"standardStudy","translation":"Оно • Это • Безличное местоимение","explanation":["Основная идея: es — местоимение.","Оно означает «оно/это» или служит формальным подлежащим в безличных конструкциях."],"examples":[{"de":"Es regnet.","lv":"Идёт дождь."},{"de":"Es ist kalt.","lv":"Холодно."},{"de":"Das Kind schläft.","lv":"Ребёнок спит."},{"de":"Es ist müde.","lv":"Оно устало."}],"comparison":[{"word":"es","meaning":"Оно • Это • Безличное местоимение","example":"Es regnet. – Идёт дождь."},{"word":"ich","meaning":"Я (говорящий)","example":"Ich lerne Deutsch. – Я учу немецкий язык."}],"info":["Латышское es = немецкое ich","Немецкое es = оно • это • безличное местоимение"],"tip":{"text":"Запомните: латышское es («я») по-немецки ich, а не es."},"important":["ich и es — разные местоимения.","Немецкое es — не латышское «я».","Латышское es по-немецки ich; немецкое es часто означает «оно/это» или не переводится."]}}
**Note:** Pilna RU kartīte «es»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "Оно • Это • Безличное местоимение",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "Оно • Это • Безличное местоимение",
    "explanation": [
      "Основная идея: es — местоимение.",
      "Оно означает «оно/это» или служит формальным подлежащим в безличных конструкциях."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Идёт дождь."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Холодно."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Ребёнок спит."
      },
      {
        "de": "Es ist müde.",
        "lv": "Оно устало."
      }
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "Оно • Это • Безличное местоимение",
        "example": "Es regnet. – Идёт дождь."
      },
      {
        "word": "ich",
        "meaning": "Я (говорящий)",
        "example": "Ich lerne Deutsch. – Я учу немецкий язык."
      }
    ],
    "info": [
      "Латышское es = немецкое ich",
      "Немецкое es = оно • это • безличное местоимение"
    ],
    "tip": {
      "text": "Запомните: латышское es («я») по-немецки ich, а не es."
    },
    "important": [
      "ich и es — разные местоимения.",
      "Немецкое es — не латышское «я».",
      "Латышское es по-немецки ich; немецкое es часто означает «оно/это» или не переводится."
    ]
  },
  "index": 167
}
```

---

## Finding 43

**Audit ID:** `LRB083-0043`
**Finding Stable ID:** `g2/a1/ru|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-es`
**Field / path:** `a1.card.a1-es.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Это • Оно • Безличная форма
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Оно • Это • Безличное местоимение","study":{"id":"a1-es","layout":"standardStudy","translation":"Оно • Это • Безличное местоимение","explanation":["Основная идея: es — местоимение.","Оно означает «оно/это» или служит формальным подлежащим в безличных конструкциях."],"examples":[{"de":"Es regnet.","lv":"Идёт дождь."},{"de":"Es ist kalt.","lv":"Холодно."},{"de":"Das Kind schläft.","lv":"Ребёнок спит."},{"de":"Es ist müde.","lv":"Оно устало."}],"comparison":[{"word":"es","meaning":"Оно • Это • Безличное местоимение","example":"Es regnet. – Идёт дождь."},{"word":"ich","meaning":"Я (говорящий)","example":"Ich lerne Deutsch. – Я учу немецкий язык."}],"info":["Латышское es = немецкое ich","Немецкое es = оно • это • безличное местоимение"],"tip":{"text":"Запомните: латышское es («я») по-немецки ich, а не es."},"important":["ich и es — разные местоимения.","Немецкое es — не латышское «я».","Латышское es по-немецки ich; немецкое es часто означает «оно/это» или не переводится."]}}
**Note:** Pilna RU kartīte «es»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "es",
  "lv": "Оно • Это • Безличное местоимение",
  "level": "A1",
  "study": {
    "id": "a1-es",
    "layout": "standardStudy",
    "translation": "Оно • Это • Безличное местоимение",
    "explanation": [
      "Основная идея: es — местоимение.",
      "Оно означает «оно/это» или служит формальным подлежащим в безличных конструкциях."
    ],
    "examples": [
      {
        "de": "Es regnet.",
        "lv": "Идёт дождь."
      },
      {
        "de": "Es ist kalt.",
        "lv": "Холодно."
      },
      {
        "de": "Das Kind schläft.",
        "lv": "Ребёнок спит."
      },
      {
        "de": "Es ist müde.",
        "lv": "Оно устало."
      }
    ],
    "comparison": [
      {
        "word": "es",
        "meaning": "Оно • Это • Безличное местоимение",
        "example": "Es regnet. – Идёт дождь."
      },
      {
        "word": "ich",
        "meaning": "Я (говорящий)",
        "example": "Ich lerne Deutsch. – Я учу немецкий язык."
      }
    ],
    "info": [
      "Латышское es = немецкое ich",
      "Немецкое es = оно • это • безличное местоимение"
    ],
    "tip": {
      "text": "Запомните: латышское es («я») по-немецки ich, а не es."
    },
    "important": [
      "ich и es — разные местоимения.",
      "Немецкое es — не латышское «я».",
      "Латышское es по-немецки ich; немецкое es часто означает «оно/это» или не переводится."
    ]
  },
  "index": 167
}
```

---

## Finding 44

**Audit ID:** `LRB083-0044`
**Finding Stable ID:** `g2/a1/ru|a1-essen-study|a1.card.a1-essen-study.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-essen-study`
**Field / path:** `a1.card.a1-essen-study.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Еда • Еда
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Еда • Приём пищи","study":{"id":"a1-essen-study","layout":"standardStudy","translation":"Еда • Приём пищи","explanation":["Основная идея: существительное das Essen означает еду или приём пищи.","Глагол essen означает «есть». ","das Essen с артиклем является существительным.","das Essen может обозначать пищу или трапезу.","Контекст различает действие essen и существительное das Essen.","essen — глагол «есть».","das Essen — еда или приём пищи."],"examples":[{"de":"Das Essen schmeckt gut.","lv":"Еда вкусная."},{"de":"Was wollt ihr essen?","lv":"Что вы хотите есть?"},{"de":"Wir essen um 12 Uhr.","lv":"Мы едим в двенадцать часов."},{"de":"Das Essen ist fertig.","lv":"Еда готова."},{"de":"Das Essen schmeckt sehr gut.","lv":"Еда очень вкусная."},{"de":"Das Essen schmeckt gut.","lv":"Еда вкусная."}],"tip":["das Essen = еда • приём пищи","essen без артикля = есть"],"important":["essen — глагол без артикля.","das Essen — существительное.","Действие: essen.","Еда или приём пищи: das Essen."]}}
**Note:** Pilna RU kartīte «Essen»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "Еда • Приём пищи",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "Еда • Приём пищи",
    "explanation": [
      "Основная идея: существительное das Essen означает еду или приём пищи.",
      "Глагол essen означает «есть». ",
      "das Essen с артиклем является существительным.",
      "das Essen может обозначать пищу или трапезу.",
      "Контекст различает действие essen и существительное das Essen.",
      "essen — глагол «есть».",
      "das Essen — еда или приём пищи."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Еда вкусная."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Что вы хотите есть?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Мы едим в двенадцать часов."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Еда готова."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Еда очень вкусная."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Еда вкусная."
      }
    ],
    "tip": [
      "das Essen = еда • приём пищи",
      "essen без артикля = есть"
    ],
    "important": [
      "essen — глагол без артикля.",
      "das Essen — существительное.",
      "Действие: essen.",
      "Еда или приём пищи: das Essen."
    ]
  },
  "index": 691
}
```

---

## Finding 45

**Audit ID:** `LRB083-0045`
**Finding Stable ID:** `g2/a1/ru|a1-essen-study|a1.card.a1-essen-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-essen-study`
**Field / path:** `a1.card.a1-essen-study.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Еда • Еда
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Еда • Приём пищи","study":{"id":"a1-essen-study","layout":"standardStudy","translation":"Еда • Приём пищи","explanation":["Основная идея: существительное das Essen означает еду или приём пищи.","Глагол essen означает «есть». ","das Essen с артиклем является существительным.","das Essen может обозначать пищу или трапезу.","Контекст различает действие essen и существительное das Essen.","essen — глагол «есть».","das Essen — еда или приём пищи."],"examples":[{"de":"Das Essen schmeckt gut.","lv":"Еда вкусная."},{"de":"Was wollt ihr essen?","lv":"Что вы хотите есть?"},{"de":"Wir essen um 12 Uhr.","lv":"Мы едим в двенадцать часов."},{"de":"Das Essen ist fertig.","lv":"Еда готова."},{"de":"Das Essen schmeckt sehr gut.","lv":"Еда очень вкусная."},{"de":"Das Essen schmeckt gut.","lv":"Еда вкусная."}],"tip":["das Essen = еда • приём пищи","essen без артикля = есть"],"important":["essen — глагол без артикля.","das Essen — существительное.","Действие: essen.","Еда или приём пищи: das Essen."]}}
**Note:** Pilna RU kartīte «Essen»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "Еда • Приём пищи",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "Еда • Приём пищи",
    "explanation": [
      "Основная идея: существительное das Essen означает еду или приём пищи.",
      "Глагол essen означает «есть». ",
      "das Essen с артиклем является существительным.",
      "das Essen может обозначать пищу или трапезу.",
      "Контекст различает действие essen и существительное das Essen.",
      "essen — глагол «есть».",
      "das Essen — еда или приём пищи."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Еда вкусная."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Что вы хотите есть?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Мы едим в двенадцать часов."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Еда готова."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Еда очень вкусная."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Еда вкусная."
      }
    ],
    "tip": [
      "das Essen = еда • приём пищи",
      "essen без артикля = есть"
    ],
    "important": [
      "essen — глагол без артикля.",
      "das Essen — существительное.",
      "Действие: essen.",
      "Еда или приём пищи: das Essen."
    ]
  },
  "index": 691
}
```

---

## Finding 46

**Audit ID:** `LRB083-0046`
**Finding Stable ID:** `g2/a1/ru|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-etwas`
**Field / path:** `a1.card.a1-etwas.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Что-то • Немного
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Что-то • Немного","study":{"id":"a1-etwas","layout":"standardStudy","translation":"Что-то • Немного","explanation":["Основная идея: etwas означает «что-то» или «немного» в зависимости от контекста.","Как неопределённое местоимение etwas означает «что-то». ","Перед прилагательным или при указании количества etwas часто означает «немного»."],"examples":[{"de":"Ich möchte etwas trinken.","lv":"Я хотел бы что-нибудь выпить."},{"de":"Hast du etwas Zeit?","lv":"У тебя есть немного времени?"},{"de":"Ich bin etwas müde.","lv":"Я немного устал."},{"de":"Ich habe etwas für dich.","lv":"У меня есть кое-что для тебя."},{"de":"Das ist etwas teuer.","lv":"Это немного дороговато."}],"comparison":[{"word":"etwas","meaning":"Что-то • Немного","example":"Ich brauche etwas. – Мне кое-что нужно."},{"word":"was","meaning":"Что-то (разговорное)","example":"Willst du was trinken? – Хочешь что-нибудь выпить?"},{"word":"ein bisschen","meaning":"Немного","example":"Ich bin ein bisschen müde. – Я немного устал."},{"word":"nichts","meaning":"Ничего","example":"Ich brauche nichts. – Мне ничего не нужно."}],"tip":{"text":"Запомните: предмет или неопределённая вещь → что-то; степень → немного."},"important":["Перед прилагательным etwas часто означает «немного».","etwas и nichts противоположны: etwas — что-то, nichts — ничего.","Форма русского перевода зависит от предложения: etwas trinken = что-нибудь выпить."]}}
**Note:** Pilna RU kartīte «etwas»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "etwas",
  "lv": "Что-то • Немного",
  "level": "A1",
  "study": {
    "id": "a1-etwas",
    "layout": "standardStudy",
    "translation": "Что-то • Немного",
    "explanation": [
      "Основная идея: etwas означает «что-то» или «немного» в зависимости от контекста.",
      "Как неопределённое местоимение etwas означает «что-то». ",
      "Перед прилагательным или при указании количества etwas часто означает «немного»."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Я хотел бы что-нибудь выпить."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "У тебя есть немного времени?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Я немного устал."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "У меня есть кое-что для тебя."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "Это немного дороговато."
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "Что-то • Немного",
        "example": "Ich brauche etwas. – Мне кое-что нужно."
      },
      {
        "word": "was",
        "meaning": "Что-то (разговорное)",
        "example": "Willst du was trinken? – Хочешь что-нибудь выпить?"
      },
      {
        "word": "ein bisschen",
        "meaning": "Немного",
        "example": "Ich bin ein bisschen müde. – Я немного устал."
      },
      {
        "word": "nichts",
        "meaning": "Ничего",
        "example": "Ich brauche nichts. – Мне ничего не нужно."
      }
    ],
    "tip": {
      "text": "Запомните: предмет или неопределённая вещь → что-то; степень → немного."
    },
    "important": [
      "Перед прилагательным etwas часто означает «немного».",
      "etwas и nichts противоположны: etwas — что-то, nichts — ничего.",
      "Форма русского перевода зависит от предложения: etwas trinken = что-нибудь выпить."
    ]
  },
  "index": 169
}
```

---

## Finding 47

**Audit ID:** `LRB083-0047`
**Finding Stable ID:** `g2/a1/ru|a1-etwas|a1.card.a1-etwas.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-etwas`
**Field / path:** `a1.card.a1-etwas.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Что-то • Немного
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Что-то • Немного","study":{"id":"a1-etwas","layout":"standardStudy","translation":"Что-то • Немного","explanation":["Основная идея: etwas означает «что-то» или «немного» в зависимости от контекста.","Как неопределённое местоимение etwas означает «что-то». ","Перед прилагательным или при указании количества etwas часто означает «немного»."],"examples":[{"de":"Ich möchte etwas trinken.","lv":"Я хотел бы что-нибудь выпить."},{"de":"Hast du etwas Zeit?","lv":"У тебя есть немного времени?"},{"de":"Ich bin etwas müde.","lv":"Я немного устал."},{"de":"Ich habe etwas für dich.","lv":"У меня есть кое-что для тебя."},{"de":"Das ist etwas teuer.","lv":"Это немного дороговато."}],"comparison":[{"word":"etwas","meaning":"Что-то • Немного","example":"Ich brauche etwas. – Мне кое-что нужно."},{"word":"was","meaning":"Что-то (разговорное)","example":"Willst du was trinken? – Хочешь что-нибудь выпить?"},{"word":"ein bisschen","meaning":"Немного","example":"Ich bin ein bisschen müde. – Я немного устал."},{"word":"nichts","meaning":"Ничего","example":"Ich brauche nichts. – Мне ничего не нужно."}],"tip":{"text":"Запомните: предмет или неопределённая вещь → что-то; степень → немного."},"important":["Перед прилагательным etwas часто означает «немного».","etwas и nichts противоположны: etwas — что-то, nichts — ничего.","Форма русского перевода зависит от предложения: etwas trinken = что-нибудь выпить."]}}
**Note:** Pilna RU kartīte «etwas»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "etwas",
  "lv": "Что-то • Немного",
  "level": "A1",
  "study": {
    "id": "a1-etwas",
    "layout": "standardStudy",
    "translation": "Что-то • Немного",
    "explanation": [
      "Основная идея: etwas означает «что-то» или «немного» в зависимости от контекста.",
      "Как неопределённое местоимение etwas означает «что-то». ",
      "Перед прилагательным или при указании количества etwas часто означает «немного»."
    ],
    "examples": [
      {
        "de": "Ich möchte etwas trinken.",
        "lv": "Я хотел бы что-нибудь выпить."
      },
      {
        "de": "Hast du etwas Zeit?",
        "lv": "У тебя есть немного времени?"
      },
      {
        "de": "Ich bin etwas müde.",
        "lv": "Я немного устал."
      },
      {
        "de": "Ich habe etwas für dich.",
        "lv": "У меня есть кое-что для тебя."
      },
      {
        "de": "Das ist etwas teuer.",
        "lv": "Это немного дороговато."
      }
    ],
    "comparison": [
      {
        "word": "etwas",
        "meaning": "Что-то • Немного",
        "example": "Ich brauche etwas. – Мне кое-что нужно."
      },
      {
        "word": "was",
        "meaning": "Что-то (разговорное)",
        "example": "Willst du was trinken? – Хочешь что-нибудь выпить?"
      },
      {
        "word": "ein bisschen",
        "meaning": "Немного",
        "example": "Ich bin ein bisschen müde. – Я немного устал."
      },
      {
        "word": "nichts",
        "meaning": "Ничего",
        "example": "Ich brauche nichts. – Мне ничего не нужно."
      }
    ],
    "tip": {
      "text": "Запомните: предмет или неопределённая вещь → что-то; степень → немного."
    },
    "important": [
      "Перед прилагательным etwas часто означает «немного».",
      "etwas и nichts противоположны: etwas — что-то, nichts — ничего.",
      "Форма русского перевода зависит от предложения: etwas trinken = что-нибудь выпить."
    ]
  },
  "index": 169
}
```

---

## Finding 48

**Audit ID:** `LRB083-0048`
**Finding Stable ID:** `g2/a1/ru|a1-euch|a1.card.a1-euch.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-euch`
**Field / path:** `a1.card.a1-euch.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Ты • Ты
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Вас • Вам","study":{"id":"a1-euch","layout":"standardStudy","translation":"Вас • Вам","explanation":"euch — местоимение второго лица множественного числа. Это форма винительного падежа «вас» и дательного падежа «вам».","examples":[{"de":"Ich sehe euch.","lv":"Я вижу вас."},{"de":"Ich helfe euch.","lv":"Я помогаю вам."},{"de":"Ich gebe euch das Buch.","lv":"Я даю вам книгу."},{"de":"Ich danke euch.","lv":"Я благодарю вас."},{"de":"Ihr erinnert euch.","lv":"Вы вспоминаете."}],"comparison":[{"word":"ihr","meaning":"Вы","example":"Ihr seid freundlich. – Вы дружелюбны."},{"word":"euch","meaning":"Вас • Вам","example":"Ich helfe euch. – Я помогаю вам."},{"word":"euer","meaning":"Ваш","example":"Das ist euer Haus. – Это ваш дом."}],"info":["ihr = вы (форма подлежащего)","euch = вас (винительный падеж) • вам (дательный падеж)","euer = ваш (притяжательная форма)"],"tip":{"text":"euch отвечает на вопросы «кого?» или «кому?» при обращении к нескольким людям.","example":"Ich helfe euch. = Я помогаю вам. Ich sehe euch. = Я вижу вас. Ich erzähle euch. = Я рассказываю вам."}}}
**Note:** Pilna RU kartīte «euch»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "euch",
  "lv": "Вас • Вам",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "Вас • Вам",
    "explanation": "euch — местоимение второго лица множественного числа. Это форма винительного падежа «вас» и дательного падежа «вам».",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Я вижу вас."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Я помогаю вам."
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Я даю вам книгу."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Я благодарю вас."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Вы вспоминаете."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "Вы",
        "example": "Ihr seid freundlich. – Вы дружелюбны."
      },
      {
        "word": "euch",
        "meaning": "Вас • Вам",
        "example": "Ich helfe euch. – Я помогаю вам."
      },
      {
        "word": "euer",
        "meaning": "Ваш",
        "example": "Das ist euer Haus. – Это ваш дом."
      }
    ],
    "info": [
      "ihr = вы (форма подлежащего)",
      "euch = вас (винительный падеж) • вам (дательный падеж)",
      "euer = ваш (притяжательная форма)"
    ],
    "tip": {
      "text": "euch отвечает на вопросы «кого?» или «кому?» при обращении к нескольким людям.",
      "example": "Ich helfe euch. = Я помогаю вам. Ich sehe euch. = Я вижу вас. Ich erzähle euch. = Я рассказываю вам."
    }
  },
  "index": 170
}
```

---

## Finding 49

**Audit ID:** `LRB083-0049`
**Finding Stable ID:** `g2/a1/ru|a1-euch|a1.card.a1-euch.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-euch`
**Field / path:** `a1.card.a1-euch.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Ты • Ты
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Вас • Вам","study":{"id":"a1-euch","layout":"standardStudy","translation":"Вас • Вам","explanation":"euch — местоимение второго лица множественного числа. Это форма винительного падежа «вас» и дательного падежа «вам».","examples":[{"de":"Ich sehe euch.","lv":"Я вижу вас."},{"de":"Ich helfe euch.","lv":"Я помогаю вам."},{"de":"Ich gebe euch das Buch.","lv":"Я даю вам книгу."},{"de":"Ich danke euch.","lv":"Я благодарю вас."},{"de":"Ihr erinnert euch.","lv":"Вы вспоминаете."}],"comparison":[{"word":"ihr","meaning":"Вы","example":"Ihr seid freundlich. – Вы дружелюбны."},{"word":"euch","meaning":"Вас • Вам","example":"Ich helfe euch. – Я помогаю вам."},{"word":"euer","meaning":"Ваш","example":"Das ist euer Haus. – Это ваш дом."}],"info":["ihr = вы (форма подлежащего)","euch = вас (винительный падеж) • вам (дательный падеж)","euer = ваш (притяжательная форма)"],"tip":{"text":"euch отвечает на вопросы «кого?» или «кому?» при обращении к нескольким людям.","example":"Ich helfe euch. = Я помогаю вам. Ich sehe euch. = Я вижу вас. Ich erzähle euch. = Я рассказываю вам."}}}
**Note:** Pilna RU kartīte «euch»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "euch",
  "lv": "Вас • Вам",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "Вас • Вам",
    "explanation": "euch — местоимение второго лица множественного числа. Это форма винительного падежа «вас» и дательного падежа «вам».",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Я вижу вас."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Я помогаю вам."
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Я даю вам книгу."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Я благодарю вас."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Вы вспоминаете."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "Вы",
        "example": "Ihr seid freundlich. – Вы дружелюбны."
      },
      {
        "word": "euch",
        "meaning": "Вас • Вам",
        "example": "Ich helfe euch. – Я помогаю вам."
      },
      {
        "word": "euer",
        "meaning": "Ваш",
        "example": "Das ist euer Haus. – Это ваш дом."
      }
    ],
    "info": [
      "ihr = вы (форма подлежащего)",
      "euch = вас (винительный падеж) • вам (дательный падеж)",
      "euer = ваш (притяжательная форма)"
    ],
    "tip": {
      "text": "euch отвечает на вопросы «кого?» или «кому?» при обращении к нескольким людям.",
      "example": "Ich helfe euch. = Я помогаю вам. Ich sehe euch. = Я вижу вас. Ich erzähle euch. = Я рассказываю вам."
    }
  },
  "index": 170
}
```

---

## Finding 50

**Audit ID:** `LRB083-0050`
**Finding Stable ID:** `g2/a1/ru|a1-fahren|a1.card.a1-fahren.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-fahren`
**Field / path:** `a1.card.a1-fahren.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Водить • Вести • Забирать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Ехать • Ездить • Везти","study":{"id":"a1-fahren","layout":"standardStudy","translation":"Ехать • Ездить • Везти","explanation":["Основная идея: fahren означает ехать или ездить на транспорте, а в некоторых предложениях — везти или отвозить кого-либо.","fahren употребляют при передвижении на автомобиле, автобусе, поезде, велосипеде или другом транспортном средстве.","Если в предложении есть человек как объект, fahren может означать «везти» или «отвозить».","Если передвижение происходит пешком, обычно употребляют gehen или laufen."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Я еду в Берлин."},{"de":"Ich fahre mit dem Auto.","lv":"Я еду на машине."},{"de":"Ich fahre meine Tochter zur Schule.","lv":"Я отвожу свою дочь в школу."},{"de":"Ich fahre dich nach Hause.","lv":"Я отвожу тебя домой."},{"de":"Wir fahren morgen nach München.","lv":"Завтра мы едем в Мюнхен."}],"comparison":[{"word":"fahren","meaning":"Ехать • Ездить на транспорте","example":"Ich fahre mit dem Bus. – Я еду на автобусе."},{"word":"gehen","meaning":"Идти пешком","example":"Ich gehe nach Hause. – Я иду домой."},{"word":"laufen","meaning":"Бежать • Идти","example":"Er läuft schnell. – Он быстро бежит."},{"word":"bringen","meaning":"Приносить • Доставлять","example":"Ich bringe das Buch. – Я приношу книгу."},{"word":"mitnehmen","meaning":"Брать с собой","example":"Ich nehme dich mit. – Я беру тебя с собой."}],"tip":{"text":"Запомните: транспортное средство → fahren; пешком → gehen."},"important":{"text":"fahren означает не только «ехать»","example":"В зависимости от контекста fahren может означать «ехать», «ездить», «везти» или «отвозить»."}}}
**Note:** Pilna RU kartīte «fahren»: individuāli pārbaudīta un pilnībā atjaunota; saglabāti DE piemēri, metadati un avota kompozīta struktūra.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "fahren",
  "lv": "Ехать • Ездить • Везти",
  "level": "A1",
  "study": {
    "id": "a1-fahren",
    "layout": "standardStudy",
    "translation": "Ехать • Ездить • Везти",
    "explanation": [
      "Основная идея: fahren означает ехать или ездить на транспорте, а в некоторых предложениях — везти или отвозить кого-либо.",
      "fahren употребляют при передвижении на автомобиле, автобусе, поезде, велосипеде или другом транспортном средстве.",
      "Если в предложении есть человек как объект, fahren может означать «везти» или «отвозить».",
      "Если передвижение происходит пешком, обычно употребляют gehen или laufen."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Я еду в Берлин."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Я еду на машине."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Я отвожу свою дочь в школу."
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Я отвожу тебя домой."
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Завтра мы едем в Мюнхен."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "Ехать • Ездить на транспорте",
        "example": "Ich fahre mit dem Bus. – Я еду на автобусе."
      },
      {
        "word": "gehen",
        "meaning": "Идти пешком",
        "example": "Ich gehe nach Hause. – Я иду домой."
      },
      {
        "word": "laufen",
        "meaning": "Бежать • Идти",
        "example": "Er läuft schnell. – Он быстро бежит."
      },
      {
        "word": "bringen",
        "meaning": "Приносить • Доставлять",
        "example": "Ich bringe das Buch. – Я приношу книгу."
      },
      {
        "word": "mitnehmen",
        "meaning": "Брать с собой",
        "example": "Ich nehme dich mit. – Я беру тебя с собой."
      }
    ],
    "tip": {
      "text": "Запомните: транспортное средство → fahren; пешком → gehen."
    },
    "important": {
      "text": "fahren означает не только «ехать»",
      "example": "В зависимости от контекста fahren может означать «ехать», «ездить», «везти» или «отвозить»."
    }
  },
  "index": 172
}
```

---

