# G2/A1 LRB LRB-081 — OWNER VIEW

**Batch:** LRB-081
**Rows:** 50/50
**Languages:** PT 4, RO 46
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-13T18:34:48.881Z
**Source commit:** `48eb78ed06146dd34026ba158eb068d4a76ddd80`
**Branch:** `cursor/lrb-081-owner-authorization-ed35`
**Overrides SHA256:** `7ef3f38f5dda5b455ae91bf17a0ebf3972434aad76b10ca82c261f007f58077a`
**Classification:** `G2_A1_LRB_OWNER_APPROVED_OVERRIDES_APPLIED`
**Correction round:** 3

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB081-0001`
**Finding Stable ID:** `g2/a1/pt|wissen|idx:311|lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important|TRANSLATION_ERROR|gpt-5.6-luna`
**Lang:** pt
**Card:** `wissen|idx:311`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Zinat","study.translation":"Zinat","study.explanation":"[\"Galvenā doma: Zināt facttu, atbildi vai informāciju.\",\"Excluir galvenokārt nozīmē: informacija/fakts.\",\"Frequentemente descreve: respostas, dados.\",\"Excluir tarde, sim zini feito, atbildi vai informāciju.\"]","study.examples":"[{\"de\":\"Ich weiß, wo er wohnt.\",\"lv\":\"É verdade, kur viņš dzīvo.\"},{\"de\":\"Woher wissen Sie das?\",\"lv\":\"Nada kurienes jūs a zinat?\"},{\"de\":\"Ich weiß die Antwort.\",\"lv\":\"É zinu atbildi.\"}]","study.comparison":"[{\"word\":\"wissen\",\"meaning\":\"Zināt (fato, informação)\",\"example\":\"Ich weiß, wo er wohnt. – É verdade, kur viņš dzīvo.\"},{\"word\":\"kennen\",\"meaning\":\"Pazīt (cilvēku, vietu, Laatu)\",\"example\":\"Ich kenne die Stadt. – É pazīstu pilsētu.\"}]","study.tip":"[\"wissen = saber\",\"Use wissen quando o contexto corresponder a este significado.\"]","study.important":"[\"wissen = saber um fato.\",\"wissen = saber.\",\"Saber um fato, resposta ou informação.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"wissen","lv":"saber","level":"A1","id":"a1-wissen","study":{"id":"a1-wissen-study","layout":"standardStudy","translation":"saber","explanation":["Ideia principal: wissen significa saber um fato, uma resposta ou uma informação.","Refere-se principalmente a informações, fatos e respostas.","É usado frequentemente com respostas, dados e informações conhecidas.","Use wissen quando alguém sabe algo, como um fato, uma resposta ou uma informação."],"examples":[{"de":"Ich weiß, wo er wohnt.","lv":"Eu sei onde ele mora."},{"de":"Woher wissen Sie das?","lv":"Como sabe disso?"},{"de":"Ich weiß die Antwort.","lv":"Eu sei a resposta."}],"comparison":[{"word":"wissen","meaning":"saber um fato ou uma informação","example":"Ich weiß, wo er wohnt. – Eu sei onde ele mora."},{"word":"kennen","meaning":"conhecer uma pessoa, um lugar ou algo familiar","example":"Ich kenne die Stadt. – Eu conheço a cidade."}],"tip":["wissen = saber","Use wissen quando o contexto se referir a um fato ou a uma informação conhecida."],"important":["wissen = saber um fato.","wissen = saber.","Significa saber um fato, uma resposta ou uma informação."]}}
**Note:** O DE wissen significa “saber”, não uma forma contaminada; corrigi a tradução, as explicações e todos os exemplos para português natural.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "wissen",
  "lv": "saber",
  "level": "A1",
  "id": "a1-wissen",
  "study": {
    "id": "a1-wissen-study",
    "layout": "standardStudy",
    "translation": "saber",
    "explanation": [
      "Ideia principal: wissen significa saber um fato, uma resposta ou uma informação.",
      "Refere-se principalmente a informações, fatos e respostas.",
      "É usado frequentemente com respostas, dados e informações conhecidas.",
      "Use wissen quando alguém sabe algo, como um fato, uma resposta ou uma informação."
    ],
    "examples": [
      {
        "de": "Ich weiß, wo er wohnt.",
        "lv": "Eu sei onde ele mora."
      },
      {
        "de": "Woher wissen Sie das?",
        "lv": "Como sabe disso?"
      },
      {
        "de": "Ich weiß die Antwort.",
        "lv": "Eu sei a resposta."
      }
    ],
    "comparison": [
      {
        "word": "wissen",
        "meaning": "saber um fato ou uma informação",
        "example": "Ich weiß, wo er wohnt. – Eu sei onde ele mora."
      },
      {
        "word": "kennen",
        "meaning": "conhecer uma pessoa, um lugar ou algo familiar",
        "example": "Ich kenne die Stadt. – Eu conheço a cidade."
      }
    ],
    "tip": [
      "wissen = saber",
      "Use wissen quando o contexto se referir a um fato ou a uma informação conhecida."
    ],
    "important": [
      "wissen = saber um fato.",
      "wissen = saber.",
      "Significa saber um fato, uma resposta ou uma informação."
    ]
  },
  "index": 311
}
```

---

## Finding 2

**Audit ID:** `LRB081-0002`
**Finding Stable ID:** `g2/a1/pt|zu|idx:668|lv, study.explanation, study.examples, study.comparison, study.important|LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** pt
**Card:** `zu|idx:668`
**Field / path:** `lv, study.explanation, study.examples, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Uz • Bolo","study.explanation":"[\"Galvenā tama: zu ųoti bieži nozīmē uz vai pie, bet tam ir arī loma ar infinitīvu.\",\"Ar cilvēkiem un estādēm zu bieži nozīmē pie vai uz.\",\"Ar īpašības vārdiem à var nozīmēt pārāk.\",\"Konstrukcijā to + nenoteiksme tas palīdz veidot nenoteiksmi: aprenda a sair.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"É sua primeira vez.\"},{\"de\":\"Wir gehen zur Schule.\",\"lv\":\"Mes ejam uz skolu.\"},{\"de\":\"Das ist zu teuer.\",\"lv\":\"Pile ir pārāk dārgi.\"},{\"de\":\"Ich habe keine Zeit zu lernen.\",\"lv\":\"Man nav laika macīties.\"}]","study.comparison":"[{\"word\":\"zu\",\"meaning\":\"Uz / torta / pārāk / infinitivos\",\"example\":\"Ich gehe zum Arzt.\"},{\"word\":\"nach\",\"meaning\":\"Uz ar pilsētām/valstīm\",\"example\":\"Ich fahre nach Berlin.\"},{\"word\":\"in\",\"meaning\":\"Iekšā / uz vietú\",\"example\":\"Ich gehe in die Schule.\"},{\"word\":\"bei\",\"meaning\":\"Bolo Kada / Bolo Darba\",\"example\":\"Ich bin bei Anna.\"}]","study.important":"[\"zu tem muitos usos, portanto sempre olhe para a construção.\",\"zu teuer significa \\\"muito caro\\\", não \\\"para caro\\\".\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"zu","lv":"a • para","level":"A1","study":{"id":"a1-zu","layout":"standardStudy","translation":"a • para","explanation":["Ideia principal: zu indica frequentemente direção para uma pessoa ou instituição, mas também aparece com adjetivos e infinitivos.","Com pessoas e instituições, zu costuma corresponder a «a» ou «para».","Com adjetivos, zu pode significar «demasiado» ou «excessivamente».","Na construção zu + infinitivo, zu introduz o infinitivo, como em zu lernen (aprender)."],"examples":[{"de":"Ich gehe zum Arzt.","lv":"Vou ao médico."},{"de":"Wir gehen zur Schule.","lv":"Nós vamos à escola."},{"de":"Das ist zu teuer.","lv":"Isso é caro demais."},{"de":"Ich habe keine Zeit zu lernen.","lv":"Não tenho tempo para estudar."}],"comparison":[{"word":"zu","meaning":"a • para • demasiado • antes do infinitivo","example":"Ich gehe zum Arzt. – Vou ao médico."},{"word":"nach","meaning":"para cidades e países, geralmente sem artigo","example":"Ich fahre nach Berlin. – Vou para Berlim."},{"word":"in","meaning":"para dentro de • em um lugar","example":"Ich gehe in die Schule. – Entro na escola."},{"word":"bei","meaning":"junto de • na casa ou no local de alguém","example":"Ich bin bei Anna. – Estou na casa de Anna."}],"tip":{"text":"Lembre-se: ao médico → zum Arzt; caro demais → zu teuer."},"important":["zu tem muitos usos; observe sempre a construção.","zu teuer significa “caro demais”, não “para caro”."]}}
**Note:** O DE zu tem os sentidos “para/junto de”, “demasiado” e marcador de infinitivo; substituí os trechos mistos por explicações e exemplos integralmente em português.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "zu",
  "lv": "a • para",
  "level": "A1",
  "study": {
    "id": "a1-zu",
    "layout": "standardStudy",
    "translation": "a • para",
    "explanation": [
      "Ideia principal: zu indica frequentemente direção para uma pessoa ou instituição, mas também aparece com adjetivos e infinitivos.",
      "Com pessoas e instituições, zu costuma corresponder a «a» ou «para».",
      "Com adjetivos, zu pode significar «demasiado» ou «excessivamente».",
      "Na construção zu + infinitivo, zu introduz o infinitivo, como em zu lernen (aprender)."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Vou ao médico."
      },
      {
        "de": "Wir gehen zur Schule.",
        "lv": "Nós vamos à escola."
      },
      {
        "de": "Das ist zu teuer.",
        "lv": "Isso é caro demais."
      },
      {
        "de": "Ich habe keine Zeit zu lernen.",
        "lv": "Não tenho tempo para estudar."
      }
    ],
    "comparison": [
      {
        "word": "zu",
        "meaning": "a • para • demasiado • antes do infinitivo",
        "example": "Ich gehe zum Arzt. – Vou ao médico."
      },
      {
        "word": "nach",
        "meaning": "para cidades e países, geralmente sem artigo",
        "example": "Ich fahre nach Berlin. – Vou para Berlim."
      },
      {
        "word": "in",
        "meaning": "para dentro de • em um lugar",
        "example": "Ich gehe in die Schule. – Entro na escola."
      },
      {
        "word": "bei",
        "meaning": "junto de • na casa ou no local de alguém",
        "example": "Ich bin bei Anna. – Estou na casa de Anna."
      }
    ],
    "tip": {
      "text": "Lembre-se: ao médico → zum Arzt; caro demais → zu teuer."
    },
    "important": [
      "zu tem muitos usos; observe sempre a construção.",
      "zu teuer significa “caro demais”, não “para caro”."
    ]
  },
  "index": 668
}
```

---

## Finding 3

**Audit ID:** `LRB081-0003`
**Finding Stable ID:** `g2/a1/pt|Zug|idx:671|study.explanation, study.examples, study.important|MEANING_ERROR|gpt-5.6-luna`
**Lang:** pt
**Card:** `Zug|idx:671`
**Field / path:** `study.explanation, study.examples, study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.explanation":"[\"Galvenā doma: o trem A1 līmenī visbiežāk nozīmē vilciens.\",\"Deixe as situações serem situadas por braukšanu, pienākšanu un atiešanu.\",\"Aqui estão alguns nozīmēs Zug var mais gājiens, caurvējš vai vaibsts, bet tās nav galvenās A1 nozīmes.\",\"Você sempre será bem-vindo com seu Zug e Der Zug kommt.\"]","study.examples":"[{\"de\":\"Der Zug kommt um acht Uhr.\",\"lv\":\"Vilciens pienāk pulsa astoņos.\"},{\"de\":\"Ich fahre mit dem Zug.\",\"lv\":\"É braucu ar vilcienu.\"},{\"de\":\"Der Zug ist voll.\",\"lv\":\"Vilciens vão para postes.\"},{\"de\":\"Der Bus kommt später.\",\"lv\":\"Ônibus pienāk vēlāk.\"}]","study.important":"[\"der Zug no contexto deve ser entendido como \\\"trem\\\".\",\"Os significados mais raros não são necessários no contexto principal de A1.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Zug","de_article":"der","de_plural":"die Züge","lv":"trem","level":"A1","study":{"id":"a1-zug","layout":"standardStudy","translation":"trem","explanation":["Ideia principal: der Zug, no nível A1, geralmente significa trem.","É usado em situações cotidianas relacionadas a viajar, chegar e partir de trem.","Em outros contextos, Zug também pode significar movimento, corrente de ar ou traço, mas esses não são os sentidos principais no nível A1.","Expressões muito comuns são mit dem Zug fahren e Der Zug kommt."],"examples":[{"de":"Der Zug kommt um acht Uhr.","lv":"O trem chega às oito horas."},{"de":"Ich fahre mit dem Zug.","lv":"Eu viajo de trem."},{"de":"Der Zug ist voll.","lv":"O trem está lotado."},{"de":"Der Bus kommt später.","lv":"O ônibus chega mais tarde."}],"comparison":[{"word":"der Zug","meaning":"trem","example":"Der Zug kommt. – O trem chega."},{"word":"die Bahn","meaning":"ferrovia • transporte ferroviário","example":"Ich fahre mit der Bahn. – Eu viajo de trem."},{"word":"der Bus","meaning":"ônibus","example":"Der Bus kommt. – O ônibus chega."},{"word":"die Straßenbahn","meaning":"bonde","example":"Die Straßenbahn ist hier. – O bonde está aqui."}],"tip":{"text":"Lembre-se: um trem específico → der Zug."},"important":["No contexto principal, der Zug deve ser entendido como “trem”.","Os significados menos comuns não são necessários no contexto principal do nível A1."]}}
**Note:** O DE Zug significa principalmente “trem” neste cartão; corrigi as explicações e os exemplos, que continham letão, português corrompido e uma associação sem sentido.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Zug",
  "de_article": "der",
  "de_plural": "die Züge",
  "lv": "trem",
  "level": "A1",
  "study": {
    "id": "a1-zug",
    "layout": "standardStudy",
    "translation": "trem",
    "explanation": [
      "Ideia principal: der Zug, no nível A1, geralmente significa trem.",
      "É usado em situações cotidianas relacionadas a viajar, chegar e partir de trem.",
      "Em outros contextos, Zug também pode significar movimento, corrente de ar ou traço, mas esses não são os sentidos principais no nível A1.",
      "Expressões muito comuns são mit dem Zug fahren e Der Zug kommt."
    ],
    "examples": [
      {
        "de": "Der Zug kommt um acht Uhr.",
        "lv": "O trem chega às oito horas."
      },
      {
        "de": "Ich fahre mit dem Zug.",
        "lv": "Eu viajo de trem."
      },
      {
        "de": "Der Zug ist voll.",
        "lv": "O trem está lotado."
      },
      {
        "de": "Der Bus kommt später.",
        "lv": "O ônibus chega mais tarde."
      }
    ],
    "comparison": [
      {
        "word": "der Zug",
        "meaning": "trem",
        "example": "Der Zug kommt. – O trem chega."
      },
      {
        "word": "die Bahn",
        "meaning": "ferrovia • transporte ferroviário",
        "example": "Ich fahre mit der Bahn. – Eu viajo de trem."
      },
      {
        "word": "der Bus",
        "meaning": "ônibus",
        "example": "Der Bus kommt. – O ônibus chega."
      },
      {
        "word": "die Straßenbahn",
        "meaning": "bonde",
        "example": "Die Straßenbahn ist hier. – O bonde está aqui."
      }
    ],
    "tip": {
      "text": "Lembre-se: um trem específico → der Zug."
    },
    "important": [
      "No contexto principal, der Zug deve ser entendido como “trem”.",
      "Os significados menos comuns não são necessários no contexto principal do nível A1."
    ]
  },
  "index": 671
}
```

---

## Finding 4

**Audit ID:** `LRB081-0004`
**Finding Stable ID:** `g2/a1/pt|zum|idx:672|lv/study|LANGUAGE_CONTAMINATION|gpt-5.6-luna`
**Lang:** pt
**Card:** `zum|idx:672`
**Field / path:** `lv/study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Uz • Bolo","study.translation":"Uz • Bolo","study.explanation":"[\"Zum ir prievārda zu an article dem saisinājums.\",\"Forma Pilnā: zu dem (pente?).\",\"Feliz em vīriešu a nekatras dzimtes lietvārdiem, kad norāda virzienu vai mērⅡi.\",\"Mesmo se você precisar de um bolo kā — pie ārsta, uz staciju, pie drauga.\",\"Praksē gandriz vienmēr aqui para um, Nevis pilno zu dem.\"]","study.examples":"[{\"de\":\"Ich gehe zum Arzt.\",\"lv\":\"É sua primeira vez.\"},{\"de\":\"Wir fahren zum Bahnhof.\",\"lv\":\"Mais braucam uz staciju.\"},{\"de\":\"Sie geht zum Supermarkt.\",\"lv\":\"Eu quero que você seja veikalu.\"},{\"de\":\"Komm zum Essen!\",\"lv\":\"Nacest!\"},{\"de\":\"Er fährt zum Flughafen.\",\"lv\":\"Viņš brauc uz lidostu.\"},{\"de\":\"Wir gehen zum Konzert.\",\"lv\":\"Estou ouvindo o show.\"},{\"de\":\"Das Geschenk ist zum Geburtstag.\",\"lv\":\"Dāvana ir dzimšanas dienai.\"},{\"de\":\"Ich gehe zum Friseur.\",\"lv\":\"É um bolo de tortilla.\"}]","study.comparison":"[{\"word\":\"zum\",\"meaning\":\"Uz/torta (pente?)\",\"example\":\"zum Arzt – Bolo All'arsta\"},{\"word\":\"zur\",\"meaning\":\"Para/com (a família da mulher)\",\"example\":\"zur Schule – Sua escola\"},{\"word\":\"zu\",\"meaning\":\"Uz / torta / parak\",\"example\":\"zu Hause – Lindo!\"},{\"word\":\"nach\",\"meaning\":\"Uz (pilsetas/valstis)\",\"example\":\"nach Berlin – Uz Berlini\"},{\"word\":\"bei\",\"meaning\":\"Bolo (atrašanas)\",\"example\":\"beim Arzt – Bolo All'arsta\"}]","study.tip":"[\"Lembre-se: zu + dem → zum (dativo?).\",\"Para palavras do gênero feminino: zu + der → zur.\"]","study.important":"[\"zum = zu dem, apenas com substantivos masculinos ou neutros no caso dativo.\",\"Indica direção ou objetivo: ao médico, à estação, ao amigo.\",\"Para gênero feminino use zur: zur Bank, zur Post.\",\"Não confunda com bei (presença em) ou nach (para cidades sem artigo).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"zum","lv":"ao • para o","level":"A1","study":{"id":"a1-zum","layout":"standardStudy","translation":"ao • para o","explanation":["Ideia principal: zum é a contração de zu + dem.","A forma completa é zu dem.","É usada com substantivos masculinos e neutros no dativo, geralmente para indicar direção, destino ou finalidade.","Na prática, zum aparece em expressões como ao médico, à estação e para o amigo.","Quase sempre se usa a forma contraída zum, e não a forma completa zu dem."],"examples":[{"de":"Ich gehe zum Arzt.","lv":"Vou ao médico."},{"de":"Wir fahren zum Bahnhof.","lv":"Vamos até a estação."},{"de":"Sie geht zum Supermarkt.","lv":"Ela vai ao supermercado."},{"de":"Komm zum Essen!","lv":"Venha comer!"},{"de":"Er fährt zum Flughafen.","lv":"Ele vai para o aeroporto."},{"de":"Wir gehen zum Konzert.","lv":"Nós vamos ao concerto."},{"de":"Das Geschenk ist zum Geburtstag.","lv":"O presente é para o aniversário."},{"de":"Ich gehe zum Friseur.","lv":"Vou ao cabeleireiro."}],"comparison":[{"word":"zum","meaning":"ao • para o","example":"zum Arzt – ao médico"},{"word":"zur","meaning":"à • para a","example":"zur Schule – à escola"},{"word":"zu","meaning":"para • junto de","example":"zu Hause – em casa"},{"word":"nach","meaning":"para cidades e países, geralmente sem artigo","example":"nach Berlin – para Berlim"},{"word":"bei","meaning":"junto de • no local de","example":"beim Arzt – no consultório médico"}],"tip":["Lembre-se: zu + dem → zum.","Com substantivos femininos, use zu + der → zur."],"important":["Zum = zu dem e é usado com substantivos masculinos ou neutros no dativo.","Pode indicar direção, destino ou finalidade: ao médico, à estação ou ao amigo.","Para substantivos femininos, use zur: zur Bank, zur Post.","Não confunda zum com bei, que indica presença em um local, nem com nach, usado para cidades e países sem artigo."]}}
**Note:** O DE zum é a contração de “zu dem”; corrigi a tradução e removi os resíduos de letão e as traduções erradas dos exemplos e das comparações.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "zum",
  "lv": "ao • para o",
  "level": "A1",
  "study": {
    "id": "a1-zum",
    "layout": "standardStudy",
    "translation": "ao • para o",
    "explanation": [
      "Ideia principal: zum é a contração de zu + dem.",
      "A forma completa é zu dem.",
      "É usada com substantivos masculinos e neutros no dativo, geralmente para indicar direção, destino ou finalidade.",
      "Na prática, zum aparece em expressões como ao médico, à estação e para o amigo.",
      "Quase sempre se usa a forma contraída zum, e não a forma completa zu dem."
    ],
    "examples": [
      {
        "de": "Ich gehe zum Arzt.",
        "lv": "Vou ao médico."
      },
      {
        "de": "Wir fahren zum Bahnhof.",
        "lv": "Vamos até a estação."
      },
      {
        "de": "Sie geht zum Supermarkt.",
        "lv": "Ela vai ao supermercado."
      },
      {
        "de": "Komm zum Essen!",
        "lv": "Venha comer!"
      },
      {
        "de": "Er fährt zum Flughafen.",
        "lv": "Ele vai para o aeroporto."
      },
      {
        "de": "Wir gehen zum Konzert.",
        "lv": "Nós vamos ao concerto."
      },
      {
        "de": "Das Geschenk ist zum Geburtstag.",
        "lv": "O presente é para o aniversário."
      },
      {
        "de": "Ich gehe zum Friseur.",
        "lv": "Vou ao cabeleireiro."
      }
    ],
    "comparison": [
      {
        "word": "zum",
        "meaning": "ao • para o",
        "example": "zum Arzt – ao médico"
      },
      {
        "word": "zur",
        "meaning": "à • para a",
        "example": "zur Schule – à escola"
      },
      {
        "word": "zu",
        "meaning": "para • junto de",
        "example": "zu Hause – em casa"
      },
      {
        "word": "nach",
        "meaning": "para cidades e países, geralmente sem artigo",
        "example": "nach Berlin – para Berlim"
      },
      {
        "word": "bei",
        "meaning": "junto de • no local de",
        "example": "beim Arzt – no consultório médico"
      }
    ],
    "tip": [
      "Lembre-se: zu + dem → zum.",
      "Com substantivos femininos, use zu + der → zur."
    ],
    "important": [
      "Zum = zu dem e é usado com substantivos masculinos ou neutros no dativo.",
      "Pode indicar direção, destino ou finalidade: ao médico, à estação ou ao amigo.",
      "Para substantivos femininos, use zur: zur Bank, zur Post.",
      "Não confunda zum com bei, que indica presença em um local, nem com nach, usado para cidades e países sem artigo."
    ]
  },
  "index": 672
}
```

---

## Finding 5

**Audit ID:** `LRB081-0005`
**Finding Stable ID:** `g2/a1/ro|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ro
**Card:** `a1-uhr`
**Field / path:** `a1.card.a1-uhr.study.examples[5].native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Ceas
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Uhr","de_article":"die","de_plural":"die Uhren","lv":"Ceas • Oră","level":"A1","study":{"id":"a1-uhr","layout":"standardStudy","translation":"Ceas • Oră","explanation":["Ideea principală: die Uhr poate însemna un ceas sau ora indicată de ceas.","Pentru dispozitiv, die Uhr înseamnă ceas: meine Uhr.","După un număr, Uhr indică ora: Es ist acht Uhr."],"examples":[{"de":"Es ist acht Uhr.","lv":"Este ora opt."},{"de":"Es ist acht Uhr.","lv":"Este ora opt."},{"de":"Meine Uhr ist kaputt.","lv":"Ceasul meu este stricat."},{"de":"Es ist acht Uhr.","lv":"Este ora opt."},{"de":"Es ist acht Uhr.","lv":"Este ora opt."},{"de":"die Uhr","lv":"ceas • oră"}],"tip":["Dispozitiv → ceas.","După un număr, Uhr indică ora."],"important":["Die Uhr poate desemna dispozitivul sau ora, în funcție de context."]}}
**Note:** Pentru DE „Uhr”, sunt necesare sensurile românești „ceas” și „oră”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Uhr",
  "de_article": "die",
  "de_plural": "die Uhren",
  "lv": "Ceas • Oră",
  "level": "A1",
  "study": {
    "id": "a1-uhr",
    "layout": "standardStudy",
    "translation": "Ceas • Oră",
    "explanation": [
      "Ideea principală: die Uhr poate însemna un ceas sau ora indicată de ceas.",
      "Pentru dispozitiv, die Uhr înseamnă ceas: meine Uhr.",
      "După un număr, Uhr indică ora: Es ist acht Uhr."
    ],
    "examples": [
      {
        "de": "Es ist acht Uhr.",
        "lv": "Este ora opt."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Este ora opt."
      },
      {
        "de": "Meine Uhr ist kaputt.",
        "lv": "Ceasul meu este stricat."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Este ora opt."
      },
      {
        "de": "Es ist acht Uhr.",
        "lv": "Este ora opt."
      },
      {
        "de": "die Uhr",
        "lv": "ceas • oră"
      }
    ],
    "tip": [
      "Dispozitiv → ceas.",
      "După un număr, Uhr indică ora."
    ],
    "important": [
      "Die Uhr poate desemna dispozitivul sau ora, în funcție de context."
    ]
  },
  "index": 698
}
```

---

## Finding 6

**Audit ID:** `LRB081-0006`
**Finding Stable ID:** `g2/a1/ro|ab|idx:17|lv / study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `ab|idx:17`
**Field / path:** `lv / study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Din","study.translation":"Din","study.explanation":"Folosit atunci când ceva începe dintr-un anumit moment, loc sau punct. Adesea înseamnă „începând de la”.","study.examples":"[{\"de\":\"ab heute\",\"lv\":\"De azi\",\"level\":\"A1\"},{\"de\":\"ab Montag\",\"lv\":\"De luni\"},{\"de\":\"ab 8 Uhr\",\"lv\":\"De la 8\"},{\"de\":\"ab Bahnhof\",\"lv\":\"Din gară\"}]","study.comparison":"[{\"word\":\"ab\",\"meaning\":\"Pornind de la punct/timp\",\"example\":\"ab Montag – De luni\"},{\"word\":\"von\",\"meaning\":\"De la cineva/ceva • Origine\",\"example\":\"de la mine – no manis\"},{\"word\":\"aus\",\"meaning\":\"Afară din interior\",\"example\":\"aus dem Haus – Din casă / afară din casă\"}]","study.tip":"{\"text\":\"Amintiți-vă: punctul de plecare în timp/loc → ab.\"}","study.important":"[\"Ab arată punctul de plecare în timp sau loc.\",\"Dacă gândul provine sau se mișcă spre exterior din interior, von sau aus este mai des folosit.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"ab","lv":"De la • Începând cu","level":"A1","study":{"id":"a1-ab","layout":"standardStudy","translation":"De la • Începând cu","explanation":"Ideea principală: folosit pentru a indica momentul sau punctul de la care începe ceva. Înseamnă adesea „începând de la”.","examples":[{"de":"ab heute","lv":"De azi","level":"A1"},{"de":"ab Montag","lv":"De luni"},{"de":"ab 8 Uhr","lv":"De la ora 8"},{"de":"ab Bahnhof","lv":"De la gară"}],"comparison":[{"word":"ab","meaning":"Pornind de la un punct sau moment","example":"ab Montag – De luni"},{"word":"von","meaning":"De la cineva sau ceva • Origine","example":"von mir – de la mine"},{"word":"aus","meaning":"Din interior spre exterior","example":"aus dem Haus – Din casă / din interiorul casei"}],"tip":{"text":"Reține: punctul de plecare în timp sau loc → ab."},"important":["Ab indică punctul de plecare în timp sau spațiu.","Dacă este vorba despre origine sau despre o mișcare din interior spre exterior, se folosesc mai des von sau aus."]}}
**Note:** Pentru DE „ab”, am înlocuit formulările amestecate cu explicații și exemple românești despre punctul de pornire.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ab",
  "lv": "De la • Începând cu",
  "level": "A1",
  "study": {
    "id": "a1-ab",
    "layout": "standardStudy",
    "translation": "De la • Începând cu",
    "explanation": "Ideea principală: folosit pentru a indica momentul sau punctul de la care începe ceva. Înseamnă adesea „începând de la”.",
    "examples": [
      {
        "de": "ab heute",
        "lv": "De azi",
        "level": "A1"
      },
      {
        "de": "ab Montag",
        "lv": "De luni"
      },
      {
        "de": "ab 8 Uhr",
        "lv": "De la ora 8"
      },
      {
        "de": "ab Bahnhof",
        "lv": "De la gară"
      }
    ],
    "comparison": [
      {
        "word": "ab",
        "meaning": "Pornind de la un punct sau moment",
        "example": "ab Montag – De luni"
      },
      {
        "word": "von",
        "meaning": "De la cineva sau ceva • Origine",
        "example": "von mir – de la mine"
      },
      {
        "word": "aus",
        "meaning": "Din interior spre exterior",
        "example": "aus dem Haus – Din casă / din interiorul casei"
      }
    ],
    "tip": {
      "text": "Reține: punctul de plecare în timp sau loc → ab."
    },
    "important": [
      "Ab indică punctul de plecare în timp sau spațiu.",
      "Dacă este vorba despre origine sau despre o mișcare din interior spre exterior, se folosesc mai des von sau aus."
    ]
  },
  "index": 17
}
```

---

## Finding 7

**Audit ID:** `LRB081-0007`
**Finding Stable ID:** `g2/a1/ro|aber|idx:21|lv / study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `aber|idx:21`
**Field / path:** `lv / study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Dar","study.translation":"Dar","study.explanation":"Folosit pentru a introduce un contrast sau a exprima o obiecție. Adesea înseamnă „dar”, „totuși” sau „dar”.","study.examples":"[{\"de\":\"Ich möchte mitkommen, aber ich habe keine Zeit.\",\"lv\":\"Vreau să vin, dar nu am timp.\"},{\"de\":\"Das Essen war lecker, aber zu teuer.\",\"lv\":\"Mâncarea a fost delicioasă, dar prea scumpă.\"},{\"de\":\"Er hat recht, aber ich sehe das anders.\",\"lv\":\"Are dreptate dar eu cred altfel.\"}]","study.comparison":"[{\"word\":\"aber\",\"meaning\":\"Opus • Obiecţie • Totuşi\",\"example\":\"Ich komme, aber später. – Vin, dar mai târziu.\"},{\"word\":\"sondern\",\"meaning\":\"Nu • Dar\",\"example\":\"Ich wollte keinen Tee, sondern Kaffee. – Am vrut ceai, nu cafea.\"},{\"word\":\"jedoch\",\"meaning\":\"Cu toate acestea\",\"example\":\"Es ist kalt, jedoch sonnig. – E frig, dar însorit.\"}]","study.tip":"{\"text\":\"Amintiți-vă: opus/opoziție → aber.\"}","study.important":"[\"Aber arată contrariul sau opoziţia.\",\"Când opusul este „nu..., dar...”, sondern este de obicei folosit în germană.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"aber","lv":"Dar • Totuși","level":"A1","study":{"id":"a1-aber","layout":"standardStudy","translation":"Dar • Totuși","explanation":"Ideea principală: folosit pentru a introduce un contrast sau pentru a exprima o obiecție. Înseamnă „dar” sau „totuși”.","examples":[{"de":"Ich möchte mitkommen, aber ich habe keine Zeit.","lv":"Aș vrea să vin și eu, dar nu am timp."},{"de":"Das Essen war lecker, aber zu teuer.","lv":"Mâncarea a fost gustoasă, dar prea scumpă."},{"de":"Er hat recht, aber ich sehe das anders.","lv":"Are dreptate, dar eu văd lucrurile altfel."}],"comparison":[{"word":"aber","meaning":"Contrast • Obiecție • Totuși","example":"Ich komme, aber später. – Vin, dar mai târziu."},{"word":"sondern","meaning":"Nu…, ci…","example":"Ich wollte keinen Tee, sondern Kaffee. – Nu am vrut ceai, ci cafea."},{"word":"jedoch","meaning":"Cu toate acestea","example":"Es ist kalt, jedoch sonnig. – Este frig, dar este însorit."}],"tip":{"text":"Reține: contrastul sau opoziția → aber."},"important":["Aber introduce un contrast sau o opoziție.","În construcția „nu…, ci…”, în germană se folosește de obicei sondern."]}}
**Note:** Pentru DE „aber”, am eliminat repetițiile și am corectat exemplele pentru a reda clar contrastul în română.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aber",
  "lv": "Dar • Totuși",
  "level": "A1",
  "study": {
    "id": "a1-aber",
    "layout": "standardStudy",
    "translation": "Dar • Totuși",
    "explanation": "Ideea principală: folosit pentru a introduce un contrast sau pentru a exprima o obiecție. Înseamnă „dar” sau „totuși”.",
    "examples": [
      {
        "de": "Ich möchte mitkommen, aber ich habe keine Zeit.",
        "lv": "Aș vrea să vin și eu, dar nu am timp."
      },
      {
        "de": "Das Essen war lecker, aber zu teuer.",
        "lv": "Mâncarea a fost gustoasă, dar prea scumpă."
      },
      {
        "de": "Er hat recht, aber ich sehe das anders.",
        "lv": "Are dreptate, dar eu văd lucrurile altfel."
      }
    ],
    "comparison": [
      {
        "word": "aber",
        "meaning": "Contrast • Obiecție • Totuși",
        "example": "Ich komme, aber später. – Vin, dar mai târziu."
      },
      {
        "word": "sondern",
        "meaning": "Nu…, ci…",
        "example": "Ich wollte keinen Tee, sondern Kaffee. – Nu am vrut ceai, ci cafea."
      },
      {
        "word": "jedoch",
        "meaning": "Cu toate acestea",
        "example": "Es ist kalt, jedoch sonnig. – Este frig, dar este însorit."
      }
    ],
    "tip": {
      "text": "Reține: contrastul sau opoziția → aber."
    },
    "important": [
      "Aber introduce un contrast sau o opoziție.",
      "În construcția „nu…, ci…”, în germană se folosește de obicei sondern."
    ]
  },
  "index": 21
}
```

---

## Finding 8

**Audit ID:** `LRB081-0008`
**Finding Stable ID:** `g2/a1/ro|also|idx:26|lv; study.translation; study.explanation; study.examples; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `also|idx:26`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Prin urmare","study.translation":"Prin urmare","study.explanation":"Folosit pentru a trage o concluzie sau a arăta un rezultat. Înseamnă „prin urmare”, „prin urmare”.","study.examples":"[{\"de\":\"Es regnet, also bleibe ich zu Hause.\",\"lv\":\"Ploua asa ca stau acasa.\"},{\"de\":\"Du bist krank, also gehst du nicht zur Arbeit.\",\"lv\":\"Esti bolnav asa ca nu mergi la munca.\"},{\"de\":\"Ich habe viel gelernt, also verstehe ich es jetzt.\",\"lv\":\"Am studiat mult, așa că acum am înțeles.\"}]","study.important":"[\"Arată și o concluzie: următorul gând decurge din cele spuse mai sus.\",\"„Așa” letonă poate fi adesea și deshalb.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"also","lv":"Așadar • Prin urmare","level":"A1","study":{"id":"a1-also","layout":"standardStudy","translation":"Așadar • Prin urmare","explanation":"Ideea principală: folosit pentru a trage o concluzie sau pentru a arăta un rezultat. Înseamnă „așadar”, „deci” sau „prin urmare”.","examples":[{"de":"Es regnet, also bleibe ich zu Hause.","lv":"Plouă, așa că rămân acasă."},{"de":"Du bist krank, also gehst du nicht zur Arbeit.","lv":"Ești bolnav, așa că nu mergi la serviciu."},{"de":"Ich habe viel gelernt, also verstehe ich es jetzt.","lv":"Am învățat mult, așa că acum înțeleg."}],"comparison":[{"word":"also","meaning":"Deci • Prin urmare","example":"Es regnet, also bleibe ich zu Hause. – Plouă, așa că stau acasă."},{"word":"auch","meaning":"și • de asemenea","example":"Ich komme auch. – Vin și eu."},{"word":"deshalb","meaning":"Prin urmare","example":"Es regnet, deshalb bleibe ich zu Hause. – Plouă, așa că stau acasă."}],"tip":{"text":"Reține: concluzie sau rezultat → also."},"important":["Also introduce o concluzie: următoarea idee rezultă din cele spuse anterior.","În funcție de context, also se poate traduce prin „așadar”, „deci” sau „așa că”."]}}
**Note:** Pentru DE „also”, am înlocuit valorile nepotrivite și am făcut naturale toate exemplele românești de concluzie.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "also",
  "lv": "Așadar • Prin urmare",
  "level": "A1",
  "study": {
    "id": "a1-also",
    "layout": "standardStudy",
    "translation": "Așadar • Prin urmare",
    "explanation": "Ideea principală: folosit pentru a trage o concluzie sau pentru a arăta un rezultat. Înseamnă „așadar”, „deci” sau „prin urmare”.",
    "examples": [
      {
        "de": "Es regnet, also bleibe ich zu Hause.",
        "lv": "Plouă, așa că rămân acasă."
      },
      {
        "de": "Du bist krank, also gehst du nicht zur Arbeit.",
        "lv": "Ești bolnav, așa că nu mergi la serviciu."
      },
      {
        "de": "Ich habe viel gelernt, also verstehe ich es jetzt.",
        "lv": "Am învățat mult, așa că acum înțeleg."
      }
    ],
    "comparison": [
      {
        "word": "also",
        "meaning": "Deci • Prin urmare",
        "example": "Es regnet, also bleibe ich zu Hause. – Plouă, așa că stau acasă."
      },
      {
        "word": "auch",
        "meaning": "și • de asemenea",
        "example": "Ich komme auch. – Vin și eu."
      },
      {
        "word": "deshalb",
        "meaning": "Prin urmare",
        "example": "Es regnet, deshalb bleibe ich zu Hause. – Plouă, așa că stau acasă."
      }
    ],
    "tip": {
      "text": "Reține: concluzie sau rezultat → also."
    },
    "important": [
      "Also introduce o concluzie: următoarea idee rezultă din cele spuse anterior.",
      "În funcție de context, also se poate traduce prin „așadar”, „deci” sau „așa că”."
    ]
  },
  "index": 26
}
```

---

## Finding 9

**Audit ID:** `LRB081-0009`
**Finding Stable ID:** `g2/a1/ro|an|idx:12|lv / study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `an|idx:12`
**Field / path:** `lv / study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"La • La • Prezent","study.translation":"La • La suprafaţă • La margine","study.explanation":"Folosit atunci când ceva se află lângă un perete, fereastră, ușă, râu, malul mării sau altă margine/suprafață.","study.examples":"[{\"de\":\"an der Wand\",\"lv\":\"Pe perete / pe perete\"},{\"de\":\"am Fenster\",\"lv\":\"La fereastră\"},{\"de\":\"am Meer\",\"lv\":\"Lângă mare\"}]","study.comparison":"[{\"word\":\"an\",\"meaning\":\"La suprafata sau marginea\",\"example\":\"la perete – pie sienas\"},{\"word\":\"auf\",\"meaning\":\"Pe o suprafață orizontală\",\"example\":\"pe masă – uz galda\"},{\"word\":\"bei\",\"meaning\":\"Unei persoane sau unui loc\",\"example\":\"beim Arzt – La doctor\"}]","study.tip":"{\"text\":\"Amintiți-vă: la perete/fereastră/margine → an.\"}","study.important":"[\"An nu este orice „at”. Aceasta înseamnă adesea lângă o suprafață, perete, fereastră sau margine.\",\"Auf este de obicei folosit pe o suprafață orizontală.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"an","lv":"la • pe","level":"A1","study":{"id":"a1-an","layout":"standardStudy","translation":"la • pe","explanation":"Ideea principală: an indică adesea contactul cu o suprafață verticală sau poziția lângă o margine, o fereastră, un râu ori mare.","examples":[{"de":"an der Wand","lv":"Pe perete"},{"de":"am Fenster","lv":"La fereastră"},{"de":"am Meer","lv":"La mare"}],"comparison":[{"word":"an","meaning":"pe o suprafață verticală • la o margine","example":"an der Wand – pe perete"},{"word":"auf","meaning":"Pe o suprafață orizontală","example":"auf dem Tisch – pe masă"},{"word":"bei","meaning":"În apropierea unei persoane sau a unui loc","example":"beim Arzt – la medic"}],"tip":{"text":"Reține: la perete, fereastră sau margine → an."},"important":["An nu înseamnă orice „la”; indică adesea apropierea de o suprafață, un perete, o fereastră sau o margine.","Auf se folosește de obicei pentru o suprafață orizontală."]}}
**Note:** Pentru DE „an”, am corectat exemplele și comparațiile pentru a reda apropierea de o suprafață sau margine.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "an",
  "lv": "la • pe",
  "level": "A1",
  "study": {
    "id": "a1-an",
    "layout": "standardStudy",
    "translation": "la • pe",
    "explanation": "Ideea principală: an indică adesea contactul cu o suprafață verticală sau poziția lângă o margine, o fereastră, un râu ori mare.",
    "examples": [
      {
        "de": "an der Wand",
        "lv": "Pe perete"
      },
      {
        "de": "am Fenster",
        "lv": "La fereastră"
      },
      {
        "de": "am Meer",
        "lv": "La mare"
      }
    ],
    "comparison": [
      {
        "word": "an",
        "meaning": "pe o suprafață verticală • la o margine",
        "example": "an der Wand – pe perete"
      },
      {
        "word": "auf",
        "meaning": "Pe o suprafață orizontală",
        "example": "auf dem Tisch – pe masă"
      },
      {
        "word": "bei",
        "meaning": "În apropierea unei persoane sau a unui loc",
        "example": "beim Arzt – la medic"
      }
    ],
    "tip": {
      "text": "Reține: la perete, fereastră sau margine → an."
    },
    "important": [
      "An nu înseamnă orice „la”; indică adesea apropierea de o suprafață, un perete, o fereastră sau o margine.",
      "Auf se folosește de obicei pentru o suprafață orizontală."
    ]
  },
  "index": 12
}
```

---

## Finding 10

**Audit ID:** `LRB081-0010`
**Finding Stable ID:** `g2/a1/ro|Appetit|idx:689|lv / study.translation / study.*.lv|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Appetit|idx:689`
**Field / path:** `lv / study.translation / study.*.lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Pofta de mancare","study.translation":"Pofta de mancare","study.*.lv":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Appetit","de_article":"der","lv":"poftă de mâncare","level":"A1","study":{"id":"a1-appetit","layout":"standardStudy","translation":"poftă de mâncare","explanation":["Ideea principală: der Appetit este senzația sau dorința de a mânca.","Der Appetit se folosește numai la singular.","O expresie foarte frecventă este Guten Appetit!"],"examples":[{"de":"Guten Appetit!","lv":"Poftă bună!"},{"de":"Guten Appetit!","lv":"Poftă bună!"},{"de":"Ich habe keinen Appetit.","lv":"Nu am poftă de mâncare."}],"tip":["Der Appetit = poftă de mâncare.","Guten Appetit! = Poftă bună!"],"important":["Der Appetit se folosește numai la singular.","Corect: der Appetit; incorect: die Appetite.","Se spune Ich habe Appetit, nu *Ich bin Appetit."]}}
**Note:** Pentru DE „Appetit”, am corectat ortografia românească și am folosit expresia firească „poftă de mâncare”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Appetit",
  "de_article": "der",
  "lv": "poftă de mâncare",
  "level": "A1",
  "study": {
    "id": "a1-appetit",
    "layout": "standardStudy",
    "translation": "poftă de mâncare",
    "explanation": [
      "Ideea principală: der Appetit este senzația sau dorința de a mânca.",
      "Der Appetit se folosește numai la singular.",
      "O expresie foarte frecventă este Guten Appetit!"
    ],
    "examples": [
      {
        "de": "Guten Appetit!",
        "lv": "Poftă bună!"
      },
      {
        "de": "Guten Appetit!",
        "lv": "Poftă bună!"
      },
      {
        "de": "Ich habe keinen Appetit.",
        "lv": "Nu am poftă de mâncare."
      }
    ],
    "tip": [
      "Der Appetit = poftă de mâncare.",
      "Guten Appetit! = Poftă bună!"
    ],
    "important": [
      "Der Appetit se folosește numai la singular.",
      "Corect: der Appetit; incorect: die Appetite.",
      "Se spune Ich habe Appetit, nu *Ich bin Appetit."
    ]
  },
  "index": 689
}
```

---

## Finding 11

**Audit ID:** `LRB081-0011`
**Finding Stable ID:** `g2/a1/ro|auch|idx:48|lv; study.translation; study.examples|MEANING_ERROR|gpt-5.6-luna`
**Lang:** ro
**Card:** `auch|idx:48`
**Field / path:** `lv; study.translation; study.examples`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"Asemenea","study.translation":"Asemenea","study.examples":"[{\"de\":\"Ich komme auch.\",\"lv\":\"Vin si eu.\"},{\"de\":\"Sie arbeitet auch hier.\",\"lv\":\"Vin si eu\"},{\"de\":\"Ich wünsche Ihnen auch einen schönen Tag.\",\"lv\":\"Lucrează și ea aici.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"auch","lv":"Și • De asemenea","level":"A1","study":{"id":"a1-auch-study","layout":"standardStudy","translation":"Și • De asemenea","explanation":["Ideea principală: auch este cel mai frecvent și neutru cuvânt german pentru «și» sau «de asemenea».","Auch adaugă o persoană, un lucru sau o acțiune la ceea ce s-a spus deja.","Poziția lui auch depinde de partea propoziției asupra căreia cade accentul."],"examples":[{"de":"Ich komme auch.","lv":"Vin și eu."},{"de":"Sie arbeitet auch hier.","lv":"Și ea lucrează aici."},{"de":"Ich wünsche Ihnen auch einen schönen Tag.","lv":"Vă doresc și eu o zi frumoasă."}],"tip":["Auch = și • de asemenea.","În Ich komme auch, auch înseamnă «și eu»."],"important":["Auch este cuvântul neutru obișnuit pentru «de asemenea».","Corect: Ich wünsche Ihnen auch einen schönen Tag.","Incorect: *Ich auch wünsche Ihnen einen schönen Tag."]}}
**Note:** Pentru DE „auch”, am corectat traducerea și am realiniat fiecare exemplu la sensul de „și” sau „de asemenea”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "auch",
  "lv": "Și • De asemenea",
  "level": "A1",
  "study": {
    "id": "a1-auch-study",
    "layout": "standardStudy",
    "translation": "Și • De asemenea",
    "explanation": [
      "Ideea principală: auch este cel mai frecvent și neutru cuvânt german pentru «și» sau «de asemenea».",
      "Auch adaugă o persoană, un lucru sau o acțiune la ceea ce s-a spus deja.",
      "Poziția lui auch depinde de partea propoziției asupra căreia cade accentul."
    ],
    "examples": [
      {
        "de": "Ich komme auch.",
        "lv": "Vin și eu."
      },
      {
        "de": "Sie arbeitet auch hier.",
        "lv": "Și ea lucrează aici."
      },
      {
        "de": "Ich wünsche Ihnen auch einen schönen Tag.",
        "lv": "Vă doresc și eu o zi frumoasă."
      }
    ],
    "tip": [
      "Auch = și • de asemenea.",
      "În Ich komme auch, auch înseamnă «și eu»."
    ],
    "important": [
      "Auch este cuvântul neutru obișnuit pentru «de asemenea».",
      "Corect: Ich wünsche Ihnen auch einen schönen Tag.",
      "Incorect: *Ich auch wünsche Ihnen einen schönen Tag."
    ]
  },
  "index": 48
}
```

---

## Finding 12

**Audit ID:** `LRB081-0012`
**Finding Stable ID:** `g2/a1/ro|auf|idx:49|lv; study.translation; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `auf|idx:49`
**Field / path:** `lv; study.translation; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"La","study.translation":"La","study.important":"[\"Auf nu este orice „pornit”. Adesea înseamnă să te miști sau să fii pe/deasupra suprafeței.\",\"Dacă ceva se află lângă o suprafață verticală, de multe ori aveți nevoie de un • Dacă intră, ai nevoie de intră.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"auf","lv":"pe","level":"A1","study":{"id":"a1-auf","layout":"standardStudy","translation":"pe","explanation":"Ideea principală: auf indică poziția pe o suprafață sau deplasarea către o suprafață ori un loc deschis.","examples":[{"de":"Ich stelle das Buch auf den Tisch.","lv":"Pun cartea pe masă."},{"de":"Wir fahren auf den Berg.","lv":"Urcăm pe munte cu un mijloc de transport."},{"de":"Die Katze springt auf das Sofa.","lv":"Pisica sare pe canapea."}],"comparison":[{"word":"auf","meaning":"pe o suprafață sau către o suprafață","example":"Ich stelle das Glas auf den Tisch. – Pun paharul pe masă."},{"word":"an","meaning":"la o suprafață verticală","example":"Ich hänge das Bild an die Wand. – Agăț tabloul pe perete."},{"word":"in","meaning":"în interior","example":"Ich lege das Buch in die Tasche. – Pun cartea în geantă."}],"tip":{"text":"Reține: pe o suprafață sau către ea → auf."},"important":["Auf poate indica poziția pe o suprafață sau deplasarea către aceasta.","Pentru o suprafață verticală se folosește adesea an, iar pentru interiorul unui spațiu se folosește in."]}}
**Note:** Pentru DE „auf”, am eliminat fragmentele neinteligibile și am clarificat opoziția dintre suprafață, margine și interior.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "auf",
  "lv": "pe",
  "level": "A1",
  "study": {
    "id": "a1-auf",
    "layout": "standardStudy",
    "translation": "pe",
    "explanation": "Ideea principală: auf indică poziția pe o suprafață sau deplasarea către o suprafață ori un loc deschis.",
    "examples": [
      {
        "de": "Ich stelle das Buch auf den Tisch.",
        "lv": "Pun cartea pe masă."
      },
      {
        "de": "Wir fahren auf den Berg.",
        "lv": "Urcăm pe munte cu un mijloc de transport."
      },
      {
        "de": "Die Katze springt auf das Sofa.",
        "lv": "Pisica sare pe canapea."
      }
    ],
    "comparison": [
      {
        "word": "auf",
        "meaning": "pe o suprafață sau către o suprafață",
        "example": "Ich stelle das Glas auf den Tisch. – Pun paharul pe masă."
      },
      {
        "word": "an",
        "meaning": "la o suprafață verticală",
        "example": "Ich hänge das Bild an die Wand. – Agăț tabloul pe perete."
      },
      {
        "word": "in",
        "meaning": "în interior",
        "example": "Ich lege das Buch in die Tasche. – Pun cartea în geantă."
      }
    ],
    "tip": {
      "text": "Reține: pe o suprafață sau către ea → auf."
    },
    "important": [
      "Auf poate indica poziția pe o suprafață sau deplasarea către aceasta.",
      "Pentru o suprafață verticală se folosește adesea an, iar pentru interiorul unui spațiu se folosește in."
    ]
  },
  "index": 49
}
```

---

## Finding 13

**Audit ID:** `LRB081-0013`
**Finding Stable ID:** `g2/a1/ro|aufs|idx:60|lv; study.translation; study.explanation; study.important|MEANING_ERROR|gpt-5.6-luna`
**Lang:** ro
**Card:** `aufs|idx:60`
**Field / path:** `lv; study.translation; study.explanation; study.important`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"lv":"La • Pe • Unde?","study.translation":"La • Pe • Unde?","study.explanation":"[\"Aufs este o abreviere a prepoziției auf și a articolului das.\",\"Forma completă: auf das (unde?).\",\"Folosit atunci când acțiunea indică o direcție către un anumit lucru sau suprafață - răspunde la întrebarea unde?\",\"Adesea folosit cu mișcare: urcă, sta jos, pune jos, conduce la ceva.\",\"În vorbirea colocvială și de zi cu zi, aufs este aproape întotdeauna folosit în locul completului auf das.\"]","study.important":"[\"Aufs = auf das, numai cu un substantiv de orice gen, unde? în inflexiune.\",\"Raspunde unde? — deplasarea către un anumit loc sau suprafață.\",\"Pe o suprafață orizontală, auf den este adesea folosit în loc de aufs.\",\"A nu se confunda cu un (pe perete) sau cu interiorul (în interiorul camerei).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"aufs","lv":"pe","level":"A1","study":{"id":"a1-aufs","layout":"standardStudy","translation":"pe","explanation":["Ideea principală: aufs este forma prescurtată a prepoziției auf și a articolului das.","Forma completă este auf das.","Este folosit când acțiunea indică o direcție către un anumit lucru sau către o suprafață și răspunde la întrebarea „încotro?”.","Apare frecvent cu verbe de mișcare, de exemplu când cineva urcă, se așază sau pune ceva pe o suprafață.","În vorbirea de zi cu zi, aufs este folosit adesea în locul formei complete auf das."],"examples":[{"de":"Ich gehe aufs Dach.","lv":"Mă duc pe acoperiș."},{"de":"Sie setzt sich aufs Sofa.","lv":"Ea se așază pe canapea."},{"de":"Wir fahren aufs Land.","lv":"Mergem la țară."},{"de":"Stell die Tasche aufs Bett.","lv":"Pune geanta pe pat."},{"de":"Er springt aufs Pferd.","lv":"El urcă pe cal."},{"de":"Leg das Buch aufs Regal.","lv":"Pune cartea pe raft."},{"de":"Komm schnell aufs Boot!","lv":"Urcă repede în barcă!"},{"de":"Wir gehen aufs Fest.","lv":"Mergem la o petrecere."}],"comparison":[{"word":"aufs","meaning":"pe • către o suprafață, cu substantiv neutru la acuzativ","example":"aufs Dach – pe acoperiș"},{"word":"auf","meaning":"pe o suprafață sau către o suprafață","example":"auf den Tisch – pe masă"},{"word":"an","meaning":"la o suprafață verticală","example":"an die Wand – pe perete"},{"word":"ins","meaning":"în interiorul unui spațiu","example":"ins Zimmer – în cameră"},{"word":"zum","meaning":"la • către, cu dativ","example":"zum Arzt – la medic"}],"tip":["Reține: auf + das → aufs.","Aufs indică de obicei direcția și cere acuzativul."],"important":["Aufs = auf das și se folosește înaintea unui substantiv neutru la acuzativ.","Răspunde la întrebarea „încotro?” și indică deplasarea către un loc sau o suprafață.","Pentru o suprafață orizontală se poate folosi și auf den, în funcție de substantiv.","Nu se confundă cu an, folosit adesea pentru apropierea de un perete, și nici cu in, folosit pentru interiorul unui spațiu."]}}
**Note:** Pentru DE „aufs”, am corectat cazul gramatical și întrebarea „încotro?”, deoarece forma indică direcția către un substantiv neutru.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aufs",
  "lv": "pe",
  "level": "A1",
  "study": {
    "id": "a1-aufs",
    "layout": "standardStudy",
    "translation": "pe",
    "explanation": [
      "Ideea principală: aufs este forma prescurtată a prepoziției auf și a articolului das.",
      "Forma completă este auf das.",
      "Este folosit când acțiunea indică o direcție către un anumit lucru sau către o suprafață și răspunde la întrebarea „încotro?”.",
      "Apare frecvent cu verbe de mișcare, de exemplu când cineva urcă, se așază sau pune ceva pe o suprafață.",
      "În vorbirea de zi cu zi, aufs este folosit adesea în locul formei complete auf das."
    ],
    "examples": [
      {
        "de": "Ich gehe aufs Dach.",
        "lv": "Mă duc pe acoperiș."
      },
      {
        "de": "Sie setzt sich aufs Sofa.",
        "lv": "Ea se așază pe canapea."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Mergem la țară."
      },
      {
        "de": "Stell die Tasche aufs Bett.",
        "lv": "Pune geanta pe pat."
      },
      {
        "de": "Er springt aufs Pferd.",
        "lv": "El urcă pe cal."
      },
      {
        "de": "Leg das Buch aufs Regal.",
        "lv": "Pune cartea pe raft."
      },
      {
        "de": "Komm schnell aufs Boot!",
        "lv": "Urcă repede în barcă!"
      },
      {
        "de": "Wir gehen aufs Fest.",
        "lv": "Mergem la o petrecere."
      }
    ],
    "comparison": [
      {
        "word": "aufs",
        "meaning": "pe • către o suprafață, cu substantiv neutru la acuzativ",
        "example": "aufs Dach – pe acoperiș"
      },
      {
        "word": "auf",
        "meaning": "pe o suprafață sau către o suprafață",
        "example": "auf den Tisch – pe masă"
      },
      {
        "word": "an",
        "meaning": "la o suprafață verticală",
        "example": "an die Wand – pe perete"
      },
      {
        "word": "ins",
        "meaning": "în interiorul unui spațiu",
        "example": "ins Zimmer – în cameră"
      },
      {
        "word": "zum",
        "meaning": "la • către, cu dativ",
        "example": "zum Arzt – la medic"
      }
    ],
    "tip": [
      "Reține: auf + das → aufs.",
      "Aufs indică de obicei direcția și cere acuzativul."
    ],
    "important": [
      "Aufs = auf das și se folosește înaintea unui substantiv neutru la acuzativ.",
      "Răspunde la întrebarea „încotro?” și indică deplasarea către un loc sau o suprafață.",
      "Pentru o suprafață orizontală se poate folosi și auf den, în funcție de substantiv.",
      "Nu se confundă cu an, folosit adesea pentru apropierea de un perete, și nici cu in, folosit pentru interiorul unui spațiu."
    ]
  },
  "index": 60
}
```

---

## Finding 14

**Audit ID:** `LRB081-0014`
**Finding Stable ID:** `g2/a1/ro|aus|idx:57|lv; study.translation; study.explanation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `aus|idx:57`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Din • Afară","study.translation":"Din • Afară","study.explanation":"Folosit atunci când ceva vine din interior, iese sau indică originea.","study.examples":"[{\"de\":\"Ich komme aus Deutschland.\",\"lv\":\"Sunt din germania.\"},{\"de\":\"Er geht aus dem Haus.\",\"lv\":\"El pleacă din casă.\"},{\"de\":\"Ich nehme das Buch aus der Tasche.\",\"lv\":\"Scot cartea din geantă.\"}]","study.comparison":"[{\"word\":\"aus\",\"meaning\":\"Din interior, din afara\",\"example\":\"aus dem Haus – De acasă\"},{\"word\":\"von\",\"meaning\":\"De la persoană, loc, suprafață\",\"example\":\"de la prietenul meu – no mana drauga\"},{\"word\":\"ab\",\"meaning\":\"Pornind de la un punct sau timp\",\"example\":\"ab Montag – De luni\"}]","study.important":"[\"Aus arată de obicei mișcare din interior sau origine.\",\"Dacă este vorba doar despre un punct de plecare în timp sau loc, ab este adesea folosit.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"aus","lv":"Din • Afară din","level":"A1","study":{"id":"a1-aus","layout":"standardStudy","translation":"Din • Afară din","explanation":"Ideea principală: folosit atunci când ceva vine din interior, iese dintr-un loc sau indică originea.","examples":[{"de":"Ich komme aus Deutschland.","lv":"Sunt din Germania."},{"de":"Er geht aus dem Haus.","lv":"El iese din casă."},{"de":"Ich nehme das Buch aus der Tasche.","lv":"Scot cartea din geantă."}],"comparison":[{"word":"aus","meaning":"Din interior sau dintr-un loc","example":"aus dem Haus – Din casă"},{"word":"von","meaning":"De la o persoană, un loc sau o suprafață","example":"von meinem Freund – de la prietenul meu"},{"word":"ab","meaning":"Începând de la un punct sau moment","example":"ab Montag – De luni"}],"tip":{"text":"Amintiți-vă: afară din interior → aus."},"important":["Aus indică de obicei mișcare din interior sau originea.","Dacă este vorba doar despre un punct de plecare în timp sau spațiu, se folosește adesea ab."]}}
**Note:** Pentru DE „aus”, am înlocuit toate fragmentele letone și am corectat formularea românească despre ieșirea din interior și origine.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "aus",
  "lv": "Din • Afară din",
  "level": "A1",
  "study": {
    "id": "a1-aus",
    "layout": "standardStudy",
    "translation": "Din • Afară din",
    "explanation": "Ideea principală: folosit atunci când ceva vine din interior, iese dintr-un loc sau indică originea.",
    "examples": [
      {
        "de": "Ich komme aus Deutschland.",
        "lv": "Sunt din Germania."
      },
      {
        "de": "Er geht aus dem Haus.",
        "lv": "El iese din casă."
      },
      {
        "de": "Ich nehme das Buch aus der Tasche.",
        "lv": "Scot cartea din geantă."
      }
    ],
    "comparison": [
      {
        "word": "aus",
        "meaning": "Din interior sau dintr-un loc",
        "example": "aus dem Haus – Din casă"
      },
      {
        "word": "von",
        "meaning": "De la o persoană, un loc sau o suprafață",
        "example": "von meinem Freund – de la prietenul meu"
      },
      {
        "word": "ab",
        "meaning": "Începând de la un punct sau moment",
        "example": "ab Montag – De luni"
      }
    ],
    "tip": {
      "text": "Amintiți-vă: afară din interior → aus."
    },
    "important": [
      "Aus indică de obicei mișcare din interior sau originea.",
      "Dacă este vorba doar despre un punct de plecare în timp sau spațiu, se folosește adesea ab."
    ]
  },
  "index": 57
}
```

---

## Finding 15

**Audit ID:** `LRB081-0015`
**Finding Stable ID:** `g2/a1/ro|baden|idx:68|lv; study.translation; study.explanation; study.examples; study.comparison; study.important|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `baden|idx:68`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"A înota","study.translation":"A înota","study.explanation":"[\"Ideea principală: baden înseamnă a te scălda, a fi în apă sau a te bucura de apă.\",\"Baden este folosit atunci când vine vorba de recreere în apă, lac, mare sau piscină.\",\"Baden poate însemna și a face baie.\",\"Când se pune accent pe mișcarea sau sportul înotului în sine, schwimmen este folosit mai frecvent în germană.\"]","study.examples":"[{\"de\":\"Ich gehe baden.\",\"lv\":\"Merg la inot\"},{\"de\":\"Wir gehen im See baden.\",\"lv\":\"Mergem la înot în lac.\"},{\"de\":\"Er schwimmt sehr gut.\",\"lv\":\"El inoata foarte bine.\"},{\"de\":\"Ich schwimme jeden Montag.\",\"lv\":\"Merg la înot în fiecare luni.\"}]","study.comparison":"[{\"word\":\"baden\",\"meaning\":\"Înota / fi în apă / spăla\",\"example\":\"Mă duc să înot.\"},{\"word\":\"schwimmen\",\"meaning\":\"A înota ca mișcare sau sport\",\"example\":\"El înoată foarte bine.\"},{\"word\":\"duschen\",\"meaning\":\"Fă un duș\",\"example\":\"Mă spăl dimineaţa.\"},{\"word\":\"schwimmen gehen\",\"meaning\":\"Merge la înot\",\"example\":\"Astăzi mă duc să înot.\"}]","study.important":"[\"Baden și schwimmen nu sunt sinonime.\",\"Letona spune adesea pur și simplu „a înota”, dar în germană trebuie să alegi în funcție de situație.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"baden","lv":"a face baie • a se scălda","level":"A1","study":{"id":"a1-baden","layout":"standardStudy","translation":"a face baie • a se scălda","explanation":["Ideea principală: baden înseamnă a face baie, a fi în apă sau a se bucura de apă.","Baden se folosește când este vorba despre recreere în apă, de exemplu într-un lac, în mare sau într-o piscină.","Baden poate însemna și a face baie.","Când accentul cade pe mișcarea sau pe sportul înotului, în germană se folosește mai frecvent schwimmen."],"examples":[{"de":"Ich gehe baden.","lv":"Mă duc să fac baie."},{"de":"Wir gehen im See baden.","lv":"Mergem să facem baie în lac."},{"de":"Er schwimmt sehr gut.","lv":"El înoată foarte bine."},{"de":"Ich schwimme jeden Montag.","lv":"Înot în fiecare zi de luni."}],"comparison":[{"word":"baden","meaning":"a face baie • a fi în apă • a se scălda","example":"Ich gehe baden. – Mă duc să fac baie."},{"word":"schwimmen","meaning":"a înota ca mișcare sau sport","example":"Er schwimmt sehr gut. – El înoată foarte bine."},{"word":"duschen","meaning":"a face duș","example":"Ich dusche am Morgen. – Fac duș dimineața."},{"word":"schwimmen gehen","meaning":"a merge la înot","example":"Ich gehe heute schwimmen. – Astăzi mă duc să înot."}],"tip":{"text":"Reține: recreere sau baie în apă → baden; mișcarea de înot ori sportul → schwimmen."},"important":["Baden și schwimmen nu sunt sinonime.","În română se poate spune adesea simplu «a înota», dar în germană alegerea depinde de situație."]}}
**Note:** Pentru DE „baden”, am înlocuit traducerea „a înota” cu „a face baie • a se scălda” și am eliminat formulările nefirești sau rămășițele letone din explicații și exemple.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "baden",
  "lv": "a face baie • a se scălda",
  "level": "A1",
  "study": {
    "id": "a1-baden",
    "layout": "standardStudy",
    "translation": "a face baie • a se scălda",
    "explanation": [
      "Ideea principală: baden înseamnă a face baie, a fi în apă sau a se bucura de apă.",
      "Baden se folosește când este vorba despre recreere în apă, de exemplu într-un lac, în mare sau într-o piscină.",
      "Baden poate însemna și a face baie.",
      "Când accentul cade pe mișcarea sau pe sportul înotului, în germană se folosește mai frecvent schwimmen."
    ],
    "examples": [
      {
        "de": "Ich gehe baden.",
        "lv": "Mă duc să fac baie."
      },
      {
        "de": "Wir gehen im See baden.",
        "lv": "Mergem să facem baie în lac."
      },
      {
        "de": "Er schwimmt sehr gut.",
        "lv": "El înoată foarte bine."
      },
      {
        "de": "Ich schwimme jeden Montag.",
        "lv": "Înot în fiecare zi de luni."
      }
    ],
    "comparison": [
      {
        "word": "baden",
        "meaning": "a face baie • a fi în apă • a se scălda",
        "example": "Ich gehe baden. – Mă duc să fac baie."
      },
      {
        "word": "schwimmen",
        "meaning": "a înota ca mișcare sau sport",
        "example": "Er schwimmt sehr gut. – El înoată foarte bine."
      },
      {
        "word": "duschen",
        "meaning": "a face duș",
        "example": "Ich dusche am Morgen. – Fac duș dimineața."
      },
      {
        "word": "schwimmen gehen",
        "meaning": "a merge la înot",
        "example": "Ich gehe heute schwimmen. – Astăzi mă duc să înot."
      }
    ],
    "tip": {
      "text": "Reține: recreere sau baie în apă → baden; mișcarea de înot ori sportul → schwimmen."
    },
    "important": [
      "Baden și schwimmen nu sunt sinonime.",
      "În română se poate spune adesea simplu «a înota», dar în germană alegerea depinde de situație."
    ]
  },
  "index": 68
}
```

---

## Finding 16

**Audit ID:** `LRB081-0016`
**Finding Stable ID:** `g2/a1/ro|bei|idx:78|lv; study.translation; study.explanation; study.examples; study.comparison; study.important|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `bei|idx:78`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"La","study.translation":"La","study.explanation":"Folosit atunci când ceva este aproape de o persoană, organizație, loc sau se întâmplă în anumite circumstanțe.","study.examples":"[{\"de\":\"Ich bin bei meinem Freund.\",\"lv\":\"Sunt acasă la prietenul meu.\"},{\"de\":\"Sie arbeitet bei Siemens.\",\"lv\":\"Ea lucrează pentru Siemens.\"},{\"de\":\"Bei Regen bleiben wir zu Hause.\",\"lv\":\"Stăm acasă când plouă.\"}]","study.comparison":"[{\"word\":\"bei\",\"meaning\":\"La o persoană, companie sau în anumite circumstanțe\",\"example\":\"Ich bin bei meiner Schwester. – Sunt la sora mea.\"},{\"word\":\"an\",\"meaning\":\"La perete, marginea, malul, marginea suprafetei\",\"example\":\"Das Bild hängt an der Wand. – Poza atârnă pe perete.\"},{\"word\":\"zu\",\"meaning\":\"Cine se duce la (direcția)\",\"example\":\"Mă duc la prietenul meu. – Es eju pie sava drauga.\"}]","study.important":"[\"Bei înseamnă adesea la o persoană, la un loc sau la o companie.\",\"Când vine vorba de mutarea la suprafață, de obicei aveți nevoie de auf, nu de bei.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"bei","lv":"la • în apropierea","level":"A1","study":{"id":"a1-bei","layout":"standardStudy","translation":"la • în apropierea","explanation":"Ideea principală: bei indică aflarea la o persoană, la o organizație sau într-un loc și poate introduce anumite împrejurări.","examples":[{"de":"Ich bin bei meinem Freund.","lv":"Sunt la prietenul meu."},{"de":"Sie arbeitet bei Siemens.","lv":"Ea lucrează la Siemens."},{"de":"Bei Regen bleiben wir zu Hause.","lv":"Când plouă, rămânem acasă."}],"comparison":[{"word":"bei","meaning":"la o persoană, la o companie sau în anumite circumstanțe","example":"Ich bin bei meiner Schwester. – Sunt la sora mea."},{"word":"an","meaning":"la un perete, la o margine sau pe mal","example":"Das Bild hängt an der Wand. – Tabloul atârnă pe perete."},{"word":"zu","meaning":"la cineva, indicând direcția","example":"Ich gehe zu meinem Freund. – Mă duc la prietenul meu."}],"tip":{"text":"Reține: la o persoană, la o organizație sau în anumite împrejurări → bei."},"important":["Bei înseamnă adesea «la» o persoană, «la» o companie sau «în» anumite circumstanțe.","Când este vorba despre așezarea pe o suprafață, se folosește de obicei auf, nu bei."]}}
**Note:** Pentru DE „bei”, am corectat exemplul de la Siemens și comparația „zu”, eliminând textul leton și păstrând sensurile românești „la” și „în anumite circumstanțe”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bei",
  "lv": "la • în apropierea",
  "level": "A1",
  "study": {
    "id": "a1-bei",
    "layout": "standardStudy",
    "translation": "la • în apropierea",
    "explanation": "Ideea principală: bei indică aflarea la o persoană, la o organizație sau într-un loc și poate introduce anumite împrejurări.",
    "examples": [
      {
        "de": "Ich bin bei meinem Freund.",
        "lv": "Sunt la prietenul meu."
      },
      {
        "de": "Sie arbeitet bei Siemens.",
        "lv": "Ea lucrează la Siemens."
      },
      {
        "de": "Bei Regen bleiben wir zu Hause.",
        "lv": "Când plouă, rămânem acasă."
      }
    ],
    "comparison": [
      {
        "word": "bei",
        "meaning": "la o persoană, la o companie sau în anumite circumstanțe",
        "example": "Ich bin bei meiner Schwester. – Sunt la sora mea."
      },
      {
        "word": "an",
        "meaning": "la un perete, la o margine sau pe mal",
        "example": "Das Bild hängt an der Wand. – Tabloul atârnă pe perete."
      },
      {
        "word": "zu",
        "meaning": "la cineva, indicând direcția",
        "example": "Ich gehe zu meinem Freund. – Mă duc la prietenul meu."
      }
    ],
    "tip": {
      "text": "Reține: la o persoană, la o organizație sau în anumite împrejurări → bei."
    },
    "important": [
      "Bei înseamnă adesea «la» o persoană, «la» o companie sau «în» anumite circumstanțe.",
      "Când este vorba despre așezarea pe o suprafață, se folosește de obicei auf, nu bei."
    ]
  },
  "index": 78
}
```

---

## Finding 17

**Audit ID:** `LRB081-0017`
**Finding Stable ID:** `g2/a1/ro|Besuch|idx:87|lv; study.translation; study.explanation; study.examples; study.comparison; study.important|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Besuch|idx:87`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"vizită","study.translation":"vizită","study.explanation":"[\"Ideea principală: der Besuch înseamnă o vizită, întâlnire sau apel.\",\"Dacă vorbim despre un loc sau eveniment, în limba letonă cuvântul potrivit este apmeklējums.\",\"Dacă se vorbeşte despre vizitarea unei persoane, în limba letonă putem spune apciemojums sau vizīte.\",\"Pluralul este die Besuche.\"]","study.examples":"[{\"de\":\"Der Besuch im Museum war interessant.\",\"lv\":\"Vizita la muzeu a fost interesantă.\"},{\"de\":\"Danke für deinen Besuch.\",\"lv\":\"Mulţumesc pentru vizita ta.\"},{\"de\":\"Der Arzt macht einen Besuch.\",\"lv\":\"Medicul merge în vizită.\"}]","study.comparison":"[{\"word\":\"der Besuch\",\"meaning\":\"vizită • întâlnire • apel\",\"example\":\"Mulţumesc pentru vizita ta. – Paldies par tavu apciemojumu.\"},{\"word\":\"der Besucher\",\"meaning\":\"Vizitator\",\"example\":\"Vizitator aşteaptă afară. – Apmeklētājs gaida ārā.\"},{\"word\":\"besuchen\",\"meaning\":\"a vizita • a apela\",\"example\":\"Vizitez bunicii mei. – Es apciemoju savus vecvecākus.\"}]","study.important":"[\"der Besuch nu este doar o vizită; poate fi, de asemenea, o întâlnire sau un apel.\",\"Pluralul: die Besuche.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Besuch","de_article":"der","de_plural":"die Besuche","lv":"vizită","level":"A1","study":{"id":"a1-besuch","layout":"standardStudy","translation":"vizită","explanation":["Ideea principală: der Besuch înseamnă o vizită sau vizitarea unei persoane, a unui loc ori a unui eveniment.","Pentru un loc sau un eveniment, der Besuch desemnează vizitarea acestuia.","Pentru o persoană, der Besuch desemnează o vizită.","Pluralul este die Besuche."],"examples":[{"de":"Der Besuch im Museum war interessant.","lv":"Vizita la muzeu a fost interesantă."},{"de":"Danke für deinen Besuch.","lv":"Mulțumesc pentru vizita ta."},{"de":"Der Arzt macht einen Besuch.","lv":"Medicul face o vizită."}],"comparison":[{"word":"der Besuch","meaning":"vizită","example":"Danke für deinen Besuch. – Mulțumesc pentru vizita ta."},{"word":"der Besucher","meaning":"vizitator","example":"Der Besucher wartet draußen. – Vizitatorul așteaptă afară."},{"word":"besuchen","meaning":"a vizita","example":"Ich besuche meine Großeltern. – Îmi vizitez bunicii."}],"tip":{"text":"Reține: Besuch este vizita, iar Besucher este persoana care vizitează."},"important":["Der Besuch înseamnă „vizită” și poate desemna vizitarea unei persoane, a unui loc sau a unui eveniment.","Pluralul este die Besuche."]}}
**Note:** Pentru DE „Besuch”, am înlăturat referințele letone și am corectat substantivele și exemplele românești, inclusiv „Vizitatorul” și „Îmi vizitez bunicii”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Besuch",
  "de_article": "der",
  "de_plural": "die Besuche",
  "lv": "vizită",
  "level": "A1",
  "study": {
    "id": "a1-besuch",
    "layout": "standardStudy",
    "translation": "vizită",
    "explanation": [
      "Ideea principală: der Besuch înseamnă o vizită sau vizitarea unei persoane, a unui loc ori a unui eveniment.",
      "Pentru un loc sau un eveniment, der Besuch desemnează vizitarea acestuia.",
      "Pentru o persoană, der Besuch desemnează o vizită.",
      "Pluralul este die Besuche."
    ],
    "examples": [
      {
        "de": "Der Besuch im Museum war interessant.",
        "lv": "Vizita la muzeu a fost interesantă."
      },
      {
        "de": "Danke für deinen Besuch.",
        "lv": "Mulțumesc pentru vizita ta."
      },
      {
        "de": "Der Arzt macht einen Besuch.",
        "lv": "Medicul face o vizită."
      }
    ],
    "comparison": [
      {
        "word": "der Besuch",
        "meaning": "vizită",
        "example": "Danke für deinen Besuch. – Mulțumesc pentru vizita ta."
      },
      {
        "word": "der Besucher",
        "meaning": "vizitator",
        "example": "Der Besucher wartet draußen. – Vizitatorul așteaptă afară."
      },
      {
        "word": "besuchen",
        "meaning": "a vizita",
        "example": "Ich besuche meine Großeltern. – Îmi vizitez bunicii."
      }
    ],
    "tip": {
      "text": "Reține: Besuch este vizita, iar Besucher este persoana care vizitează."
    },
    "important": [
      "Der Besuch înseamnă „vizită” și poate desemna vizitarea unei persoane, a unui loc sau a unui eveniment.",
      "Pluralul este die Besuche."
    ]
  },
  "index": 87
}
```

---

## Finding 18

**Audit ID:** `LRB081-0018`
**Finding Stable ID:** `g2/a1/ro|besuchen|idx:89|lv; study.translation; study.explanation; study.examples; study.comparison; study.important|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `besuchen|idx:89`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"a vizita","study.translation":"a vizita","study.explanation":"[\"Ideea principală: besuchen se foloseşte pentru a vizita un loc, un eveniment sau o persoană.\",\"Un loc, eveniment sau curs este vizitat de obicei.\",\"Dacă besuchen se referă la o persoană, în limba letonă este adesea mai natural să spunem apciemot.\",\"În limba germană, besuchen se foloseşte fără prepoziţie şi cu acuzativul.\"]","study.examples":"[{\"de\":\"Ich besuche das Museum.\",\"lv\":\"Vizitez muzeu.\"},{\"de\":\"Wir besuchen einen Deutschkurs.\",\"lv\":\"Vizităm cursul de limba germană.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"Vizitez bunicii mei.\"}]","study.comparison":"[{\"word\":\"besuchen\",\"meaning\":\"a vizita un loc sau eveniment • a apela o persoană\",\"example\":\"Vizitez bunicii mei. – Es apciemoju savus vecvecākus.\"},{\"word\":\"treffen\",\"meaning\":\"a întâlni\",\"example\":\"Îl întâlnesc pe prietenul meu. – Es satieku savu draugu.\"},{\"word\":\"zu jemandem gehen\",\"meaning\":\"a merge la cineva\",\"example\":\"Mă duc la prietenul meu. – Es eju pie sava drauga.\"}]","study.important":"[\"besuchen se foloseşte fără prepoziţie: Ich besuche meine Freundin.\",\"Traducerea în limba letonă depinde de obiect: a vizita un loc, a apela o persoană.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"besuchen","lv":"a vizita","level":"A1","study":{"id":"a1-besuchen","layout":"standardStudy","translation":"a vizita","explanation":["Ideea principală: besuchen se folosește pentru a vizita un loc, un eveniment sau o persoană.","De obicei se vizitează un loc, un eveniment sau un curs.","Când besuchen se referă la o persoană, în română se spune în mod firesc «a vizita». ","În germană, besuchen se folosește fără prepoziție și cu acuzativul."],"examples":[{"de":"Ich besuche das Museum.","lv":"Vizitez muzeul."},{"de":"Wir besuchen einen Deutschkurs.","lv":"Participăm la un curs de germană."},{"de":"Ich besuche meine Großeltern.","lv":"Îmi vizitez bunicii."}],"comparison":[{"word":"besuchen","meaning":"a vizita un loc, un eveniment sau o persoană","example":"Ich besuche meine Großeltern. – Îmi vizitez bunicii."},{"word":"treffen","meaning":"a întâlni","example":"Ich treffe meinen Freund. – Mă întâlnesc cu prietenul meu."},{"word":"zu jemandem gehen","meaning":"a merge la cineva","example":"Ich gehe zu meinem Freund. – Mă duc la prietenul meu."}],"tip":{"text":"Reține: besuchen se folosește fără prepoziție și are obiect direct la acuzativ."},"important":["Besuchen se folosește fără prepoziție: Ich besuche meine Freundin.","Traducerea românească este «a vizita», indiferent dacă obiectul este un loc, un eveniment sau o persoană."]}}
**Note:** Pentru DE „besuchen”, am înlocuit explicațiile și exemplele cu română naturală și am eliminat expresiile letone „apciemot”, „Es apciemoju” și „Es eju”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "besuchen",
  "lv": "a vizita",
  "level": "A1",
  "study": {
    "id": "a1-besuchen",
    "layout": "standardStudy",
    "translation": "a vizita",
    "explanation": [
      "Ideea principală: besuchen se folosește pentru a vizita un loc, un eveniment sau o persoană.",
      "De obicei se vizitează un loc, un eveniment sau un curs.",
      "Când besuchen se referă la o persoană, în română se spune în mod firesc «a vizita». ",
      "În germană, besuchen se folosește fără prepoziție și cu acuzativul."
    ],
    "examples": [
      {
        "de": "Ich besuche das Museum.",
        "lv": "Vizitez muzeul."
      },
      {
        "de": "Wir besuchen einen Deutschkurs.",
        "lv": "Participăm la un curs de germană."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Îmi vizitez bunicii."
      }
    ],
    "comparison": [
      {
        "word": "besuchen",
        "meaning": "a vizita un loc, un eveniment sau o persoană",
        "example": "Ich besuche meine Großeltern. – Îmi vizitez bunicii."
      },
      {
        "word": "treffen",
        "meaning": "a întâlni",
        "example": "Ich treffe meinen Freund. – Mă întâlnesc cu prietenul meu."
      },
      {
        "word": "zu jemandem gehen",
        "meaning": "a merge la cineva",
        "example": "Ich gehe zu meinem Freund. – Mă duc la prietenul meu."
      }
    ],
    "tip": {
      "text": "Reține: besuchen se folosește fără prepoziție și are obiect direct la acuzativ."
    },
    "important": [
      "Besuchen se folosește fără prepoziție: Ich besuche meine Freundin.",
      "Traducerea românească este «a vizita», indiferent dacă obiectul este un loc, un eveniment sau o persoană."
    ]
  },
  "index": 89
}
```

---

## Finding 19

**Audit ID:** `LRB081-0019`
**Finding Stable ID:** `g2/a1/ro|bis|idx:91|lv; study.translation; study.explanation; study.examples; study.comparison; study.important|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `bis|idx:91`
**Field / path:** `lv; study.translation; study.explanation; study.examples; study.comparison; study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Până","study.translation":"Până","study.explanation":"Se referă la o limită, un moment în timp sau o condiție.","study.examples":"[{\"de\":\"Ich warte bis zu deiner Ankunft.\",\"lv\":\"Astept sosirea ta.\"},{\"de\":\"Bleib hier, bis ich zurückkomme.\",\"lv\":\"Stai aici până mă întorc.\"},{\"de\":\"Ich lerne Deutsch bis zum Abend.\",\"lv\":\"Studiez germana pana seara.\"},{\"de\":\"Bis jetzt habe ich nichts verstanden.\",\"lv\":\"Pana acum nu am inteles nimic.\"}]","study.comparison":"[{\"word\":\"bis\",\"meaning\":\"Până când (se atinge momentul)\",\"example\":\"Ich bleibe bis morgen. – Voi sta până la 6:00 p.m.\"},{\"word\":\"bis zu\",\"meaning\":\"Până la (până la o anumită oră)\",\"example\":\"bis zum Bahnhof – Lucrez de la 9 la 17.\"},{\"word\":\"bis jetzt\",\"meaning\":\"Până\",\"example\":\"Bis jetzt habe ich nichts verstanden. – Te astept sa vii.\"},{\"word\":\"Bis jetzt\",\"meaning\":\"Până acum, până în ziua de azi\",\"example\":\"Bis jetzt ist alles gut. – Până acum, bine.\"}]","study.important":"[\"Bis = până la o limită sau un punct în timp.\",\"Bis jetzt = până acum • Bis dass = până când.\",\"până acum înseamnă până în prezent.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"bis","lv":"până","level":"A1","study":{"id":"a1-bis","layout":"standardStudy","translation":"până","explanation":"Ideea principală: se referă la o limită, la un moment în timp sau la o condiție.","examples":[{"de":"Ich warte bis zu deiner Ankunft.","lv":"Aștept până la sosirea ta."},{"de":"Bleib hier, bis ich zurückkomme.","lv":"Rămâi aici până mă întorc."},{"de":"Ich lerne Deutsch bis zum Abend.","lv":"Învăț germană până seara."},{"de":"Bis jetzt habe ich nichts verstanden.","lv":"Până acum nu am înțeles nimic."}],"comparison":[{"word":"bis","meaning":"până când sau până la un anumit moment","example":"Ich bleibe bis morgen. – Rămân până mâine."},{"word":"bis zu","meaning":"până la o anumită limită","example":"bis zum Bahnhof – până la gară"},{"word":"bis jetzt","meaning":"până acum","example":"Bis jetzt habe ich nichts verstanden. – Până acum nu am înțeles nimic."}],"tip":{"text":"Amintiți-vă: granița în timp/condiție → bis."},"important":["Bis indică o limită sau un punct în timp.","Bis zu se folosește înaintea unei limite concrete: bis zum Bahnhof.","Bis jetzt înseamnă „până acum”."]}}
**Note:** Pentru DE „bis”, am reparat exemplele contradictorii și comparațiile, inclusiv traducerea „Bis jetzt” și diferența dintre „bis” și „bis zu”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "bis",
  "lv": "până",
  "level": "A1",
  "study": {
    "id": "a1-bis",
    "layout": "standardStudy",
    "translation": "până",
    "explanation": "Ideea principală: se referă la o limită, la un moment în timp sau la o condiție.",
    "examples": [
      {
        "de": "Ich warte bis zu deiner Ankunft.",
        "lv": "Aștept până la sosirea ta."
      },
      {
        "de": "Bleib hier, bis ich zurückkomme.",
        "lv": "Rămâi aici până mă întorc."
      },
      {
        "de": "Ich lerne Deutsch bis zum Abend.",
        "lv": "Învăț germană până seara."
      },
      {
        "de": "Bis jetzt habe ich nichts verstanden.",
        "lv": "Până acum nu am înțeles nimic."
      }
    ],
    "comparison": [
      {
        "word": "bis",
        "meaning": "până când sau până la un anumit moment",
        "example": "Ich bleibe bis morgen. – Rămân până mâine."
      },
      {
        "word": "bis zu",
        "meaning": "până la o anumită limită",
        "example": "bis zum Bahnhof – până la gară"
      },
      {
        "word": "bis jetzt",
        "meaning": "până acum",
        "example": "Bis jetzt habe ich nichts verstanden. – Până acum nu am înțeles nimic."
      }
    ],
    "tip": {
      "text": "Amintiți-vă: granița în timp/condiție → bis."
    },
    "important": [
      "Bis indică o limită sau un punct în timp.",
      "Bis zu se folosește înaintea unei limite concrete: bis zum Bahnhof.",
      "Bis jetzt înseamnă „până acum”."
    ]
  },
  "index": 91
}
```

---

## Finding 20

**Audit ID:** `LRB081-0020`
**Finding Stable ID:** `g2/a1/ro|das|idx:129|lv, study.translation, study.examples[].lv, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** ro
**Card:** `das|idx:129`
**Field / path:** `lv, study.translation, study.examples[].lv, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Articol hotărât neutru","study.translation":"Articol hotărât neutru","study.examples[].lv":null,"study.comparison":"[{\"word\":\"das\",\"meaning\":\"It (articol / pronume)\",\"example\":\"Aceasta este maşina mea. – Tas ir mans auto.\"},{\"word\":\"dies\",\"meaning\":\"Aceasta\",\"example\":\"Dies ist mein Auto. – Aceasta este mașina mea.\"},{\"word\":\"welches\",\"meaning\":\"Cine • Care • Cine\",\"example\":\"Das ist das Buch, welches ich lese. – Este o carte pe care o citesc.\"}]","study.important":"[\"La nivelul A1, das este studiat mai întâi ca un articol de genul mijlociu.\",\"Das nu este același lucru cu dass - das poate fi un articol sau un pronume, dass înseamnă „acela”.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"das","lv":"articol hotărât de gen neutru","level":"A1","study":{"id":"a1-das","layout":"standardStudy","translation":"articol hotărât de gen neutru","explanation":"Ideea principală: das se folosește ca articol cu substantive neutre și poate funcționa și ca pronume sau pronume relativ.","examples":[{"de":"Das ist mein Auto.","lv":"Aceasta este mașina mea."},{"de":"Das ist gut.","lv":"Asta este bine."},{"de":"Das Buch, das ich lese, ist interessant.","lv":"Cartea pe care o citesc este interesantă."}],"comparison":[{"word":"das","meaning":"acesta/aceasta • articol sau pronume","example":"Das ist mein Auto. – Acesta este automobilul meu."},{"word":"dies","meaning":"acesta/aceasta","example":"Dies ist mein Auto. – Acesta este automobilul meu."},{"word":"welches","meaning":"care","example":"Das ist das Buch, welches ich lese. – Aceasta este cartea pe care o citesc."}],"tip":{"text":"Reține: gen neutru → das; conjuncția «că» → dass."},"important":["La nivelul A1, das este studiat mai întâi ca articol hotărât de gen neutru.","Das nu trebuie confundat cu dass: das poate fi articol sau pronume, iar dass introduce o propoziție subordonată."]}}
**Note:** Pentru DE „das”, am corectat explicația gramaticală și comparația, eliminând „It”, „Tas ir mans auto” și formularea greșită despre sensul lui dass.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "das",
  "lv": "articol hotărât de gen neutru",
  "level": "A1",
  "study": {
    "id": "a1-das",
    "layout": "standardStudy",
    "translation": "articol hotărât de gen neutru",
    "explanation": "Ideea principală: das se folosește ca articol cu substantive neutre și poate funcționa și ca pronume sau pronume relativ.",
    "examples": [
      {
        "de": "Das ist mein Auto.",
        "lv": "Aceasta este mașina mea."
      },
      {
        "de": "Das ist gut.",
        "lv": "Asta este bine."
      },
      {
        "de": "Das Buch, das ich lese, ist interessant.",
        "lv": "Cartea pe care o citesc este interesantă."
      }
    ],
    "comparison": [
      {
        "word": "das",
        "meaning": "acesta/aceasta • articol sau pronume",
        "example": "Das ist mein Auto. – Acesta este automobilul meu."
      },
      {
        "word": "dies",
        "meaning": "acesta/aceasta",
        "example": "Dies ist mein Auto. – Acesta este automobilul meu."
      },
      {
        "word": "welches",
        "meaning": "care",
        "example": "Das ist das Buch, welches ich lese. – Aceasta este cartea pe care o citesc."
      }
    ],
    "tip": {
      "text": "Reține: gen neutru → das; conjuncția «că» → dass."
    },
    "important": [
      "La nivelul A1, das este studiat mai întâi ca articol hotărât de gen neutru.",
      "Das nu trebuie confundat cu dass: das poate fi articol sau pronume, iar dass introduce o propoziție subordonată."
    ]
  },
  "index": 129
}
```

---

## Finding 21

**Audit ID:** `LRB081-0021`
**Finding Stable ID:** `g2/a1/ro|dass|idx:130|lv, study.translation, study.examples[].lv, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** ro
**Card:** `dass|idx:130`
**Field / path:** `lv, study.translation, study.examples[].lv, study.comparison, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Că","study.translation":"Că","study.examples[].lv":null,"study.comparison":"[{\"word\":\"dass\",\"meaning\":\"Că\",\"example\":\"Ich weiß, dass er kommt. – Știu că va veni.\"},{\"word\":\"weil\",\"meaning\":\"Pentru că • Pentru că\",\"example\":\"Ich bleibe zu Hause, weil es regnet. – Stau acasă pentru că plouă.\"},{\"word\":\"damit\",\"meaning\":\"La\",\"example\":\"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Învăț limba germană ca să pot lucra în Germania.\"},{\"word\":\"ob\",\"meaning\":\"Sau\",\"example\":\"Ich weiß nicht, ob er kommt. – Nu știu dacă va veni.\"}]","study.important":"[\"Dass înseamnă „acea” și introduce o clauză auxiliară.\",\"A nu se confunda cu das, care poate fi un articol sau „acela”.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"dass","lv":"că","level":"A1","study":{"id":"a1-dass","layout":"standardStudy","translation":"că","explanation":"Ideea principală: dass introduce o propoziție subordonată care exprimă un fapt, un gând sau o afirmație.","examples":[{"de":"Ich weiß, dass du müde bist.","lv":"Știu că ești obosit."},{"de":"Er sagt, dass er kommt.","lv":"El spune că vine."},{"de":"Ich glaube, dass das stimmt.","lv":"Cred că este corect."}],"comparison":[{"word":"dass","meaning":"că","example":"Ich weiß, dass er kommt. – Știu că va veni."},{"word":"weil","meaning":"pentru că","example":"Ich bleibe zu Hause, weil es regnet. – Rămân acasă pentru că plouă."},{"word":"damit","meaning":"pentru ca • ca să","example":"Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Învăț germană ca să pot lucra în Germania."},{"word":"ob","meaning":"dacă","example":"Ich weiß nicht, ob er kommt. – Nu știu dacă va veni."}],"tip":{"text":"Amintiți-vă: că → dass."},"important":["Dass înseamnă «că» și introduce o propoziție subordonată.","Nu trebuie confundat cu das, care poate fi articol sau pronume."]}}
**Note:** Pentru DE „dass”, am înlocuit sensul greșit „acea” cu „că” și am corectat sensurile românești ale lui „damit” și „ob”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dass",
  "lv": "că",
  "level": "A1",
  "study": {
    "id": "a1-dass",
    "layout": "standardStudy",
    "translation": "că",
    "explanation": "Ideea principală: dass introduce o propoziție subordonată care exprimă un fapt, un gând sau o afirmație.",
    "examples": [
      {
        "de": "Ich weiß, dass du müde bist.",
        "lv": "Știu că ești obosit."
      },
      {
        "de": "Er sagt, dass er kommt.",
        "lv": "El spune că vine."
      },
      {
        "de": "Ich glaube, dass das stimmt.",
        "lv": "Cred că este corect."
      }
    ],
    "comparison": [
      {
        "word": "dass",
        "meaning": "că",
        "example": "Ich weiß, dass er kommt. – Știu că va veni."
      },
      {
        "word": "weil",
        "meaning": "pentru că",
        "example": "Ich bleibe zu Hause, weil es regnet. – Rămân acasă pentru că plouă."
      },
      {
        "word": "damit",
        "meaning": "pentru ca • ca să",
        "example": "Ich lerne Deutsch, damit ich in Deutschland arbeiten kann. – Învăț germană ca să pot lucra în Germania."
      },
      {
        "word": "ob",
        "meaning": "dacă",
        "example": "Ich weiß nicht, ob er kommt. – Nu știu dacă va veni."
      }
    ],
    "tip": {
      "text": "Amintiți-vă: că → dass."
    },
    "important": [
      "Dass înseamnă «că» și introduce o propoziție subordonată.",
      "Nu trebuie confundat cu das, care poate fi articol sau pronume."
    ]
  },
  "index": 130
}
```

---

## Finding 22

**Audit ID:** `LRB081-0022`
**Finding Stable ID:** `g2/a1/ro|der|idx:134|lv, study.translation, study.examples[].lv, study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** ro
**Card:** `der|idx:134`
**Field / path:** `lv, study.translation, study.examples[].lv, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Articolul hotărât masculin","study.translation":"Articolul hotărât masculin","study.examples[].lv":null,"study.important":"[\"La nivelul A1, ar trebui să înveți mai întâi ca un articol masculin.\",\"Utilizările pronumelor și relative vin mai târziu.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"der","lv":"articol hotărât de gen masculin","level":"A1","study":{"id":"a1-der","layout":"standardStudy","translation":"articol hotărât de gen masculin","explanation":"Ideea principală: folosit cu substantive masculine. În unele propoziții, „der” poate funcționa și ca pronume sau pronume relativ.","examples":[{"de":"Der Mann ist hier.","lv":"Bărbatul este aici."},{"de":"Der Bus kommt.","lv":"Autobuzul vine."},{"de":"Der Lehrer spricht.","lv":"Profesorul vorbește."}],"tip":{"text":"Reține: gen masculin → der."},"important":["La nivelul A1, der este studiat mai întâi ca articol hotărât de gen masculin.","Alte utilizări ale lui der, inclusiv ca pronume sau pronume relativ, se studiază mai târziu."]}}
**Note:** Pentru DE „der”, am corectat formularea nenaturală „ca un articol masculin” în „articol hotărât de gen masculin” și am clarificat utilizările ulterioare.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "der",
  "lv": "articol hotărât de gen masculin",
  "level": "A1",
  "study": {
    "id": "a1-der",
    "layout": "standardStudy",
    "translation": "articol hotărât de gen masculin",
    "explanation": "Ideea principală: folosit cu substantive masculine. În unele propoziții, „der” poate funcționa și ca pronume sau pronume relativ.",
    "examples": [
      {
        "de": "Der Mann ist hier.",
        "lv": "Bărbatul este aici."
      },
      {
        "de": "Der Bus kommt.",
        "lv": "Autobuzul vine."
      },
      {
        "de": "Der Lehrer spricht.",
        "lv": "Profesorul vorbește."
      }
    ],
    "tip": {
      "text": "Reține: gen masculin → der."
    },
    "important": [
      "La nivelul A1, der este studiat mai întâi ca articol hotărât de gen masculin.",
      "Alte utilizări ale lui der, inclusiv ca pronume sau pronume relativ, se studiază mai târziu."
    ]
  },
  "index": 134
}
```

---

## Finding 23

**Audit ID:** `LRB081-0023`
**Finding Stable ID:** `g2/a1/ro|die|idx:137|lv, study.translation, study.examples[].lv, study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** ro
**Card:** `die|idx:137`
**Field / path:** `lv, study.translation, study.examples[].lv, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Articolul hotărât feminin","study.translation":"Articolul hotărât feminin","study.examples[].lv":null,"study.important":"[\"La nivelul A1, moarul este studiat mai întâi ca un articol feminin.\",\"Moarul plural este folosit și pentru toate genurile.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"die","lv":"articol hotărât de gen feminin","level":"A1","study":{"id":"a1-die","layout":"standardStudy","translation":"articol hotărât de gen feminin","explanation":"Ideea principală: die se folosește ca articol cu substantive feminine și poate funcționa și ca pronume sau pronume relativ.","examples":[{"de":"Die Frau ist hier.","lv":"Femeia este aici."},{"de":"Die Katze schläft.","lv":"Pisica doarme."},{"de":"Die Lehrerin erklärt.","lv":"Profesoara explică."}],"tip":{"text":"Reține: gen feminin → die."},"important":["La nivelul A1, die este studiat mai întâi ca articol hotărât de gen feminin.","Die este folosit și la plural, pentru toate genurile."]}}
**Note:** Pentru DE „die”, am eliminat typo-ul „moarul” și formularea nefirească, precizând corect folosirea la feminin și la plural.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "die",
  "lv": "articol hotărât de gen feminin",
  "level": "A1",
  "study": {
    "id": "a1-die",
    "layout": "standardStudy",
    "translation": "articol hotărât de gen feminin",
    "explanation": "Ideea principală: die se folosește ca articol cu substantive feminine și poate funcționa și ca pronume sau pronume relativ.",
    "examples": [
      {
        "de": "Die Frau ist hier.",
        "lv": "Femeia este aici."
      },
      {
        "de": "Die Katze schläft.",
        "lv": "Pisica doarme."
      },
      {
        "de": "Die Lehrerin erklärt.",
        "lv": "Profesoara explică."
      }
    ],
    "tip": {
      "text": "Reține: gen feminin → die."
    },
    "important": [
      "La nivelul A1, die este studiat mai întâi ca articol hotărât de gen feminin.",
      "Die este folosit și la plural, pentru toate genurile."
    ]
  },
  "index": 137
}
```

---

## Finding 24

**Audit ID:** `LRB081-0024`
**Finding Stable ID:** `g2/a1/ro|dieser|idx:139|lv, study.translation, study.examples[].lv, study.important|WRONG_LANGUAGE|gpt-5.6-luna`
**Lang:** ro
**Card:** `dieser|idx:139`
**Field / path:** `lv, study.translation, study.examples[].lv, study.important`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Aceasta","study.translation":"Aceasta","study.examples[].lv":null,"study.important":"[\"Dieser, diese și dieses se schimbă după gen.\",\"Forma de plural este din nou diese.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"dieser","lv":"acest • acesta","level":"A1","study":{"id":"a1-dieser","layout":"standardStudy","translation":"acest • acesta","explanation":"Ideea principală: indică o persoană, un lucru sau un animal din apropiere. Folosit cu un substantiv masculin.","examples":[{"de":"Dieser Mann ist nett.","lv":"Acest bărbat este amabil."},{"de":"Ich sehe diesen Hund.","lv":"Văd acest câine."},{"de":"Dieser Stift ist neu.","lv":"Acest pix este nou."}],"tip":{"text":"Reține: acest/acesta + gen masculin → dieser."},"important":["Dieser, diese și dieses se schimbă în funcție de gen și de caz.","Forma de plural este diese."]}}
**Note:** Pentru DE „dieser”, am înlocuit singularul românesc incomplet „Aceasta” cu formele demonstrative „acesta • aceasta • acest” și am păstrat pluralul corect „diese”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "dieser",
  "lv": "acest • acesta",
  "level": "A1",
  "study": {
    "id": "a1-dieser",
    "layout": "standardStudy",
    "translation": "acest • acesta",
    "explanation": "Ideea principală: indică o persoană, un lucru sau un animal din apropiere. Folosit cu un substantiv masculin.",
    "examples": [
      {
        "de": "Dieser Mann ist nett.",
        "lv": "Acest bărbat este amabil."
      },
      {
        "de": "Ich sehe diesen Hund.",
        "lv": "Văd acest câine."
      },
      {
        "de": "Dieser Stift ist neu.",
        "lv": "Acest pix este nou."
      }
    ],
    "tip": {
      "text": "Reține: acest/acesta + gen masculin → dieser."
    },
    "important": [
      "Dieser, diese și dieses se schimbă în funcție de gen și de caz.",
      "Forma de plural este diese."
    ]
  },
  "index": 139
}
```

---

## Finding 25

**Audit ID:** `LRB081-0025`
**Finding Stable ID:** `g2/a1/ro|ein|idx:154|study.examples[3].lv|MISTRANSLATION|gpt-5.6-luna`
**Lang:** ro
**Card:** `ein|idx:154`
**Field / path:** `study.examples[3].lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"ein","lv":"articol nehotărât","level":"A1","study":{"id":"a1-ein","layout":"standardStudy","translation":"articol nehotărât","explanation":["Ideea principală: ein este articolul nehotărât pentru substantive masculine și neutre.","La nominativ se spune ein Mann și ein Buch.","Pentru genul feminin se folosește eine.","La acuzativ, forma masculină este einen."],"examples":[{"de":"Ein Mann wartet draußen.","lv":"Un bărbat așteaptă afară."},{"de":"Ich habe ein Buch.","lv":"Am o carte."},{"de":"Er sucht einen Stift.","lv":"El caută un stilou."},{"de":"Ein Kind spielt.","lv":"Un copil se joacă."}],"tip":{"text":"Reține: ein nu înseamnă întotdeauna numeralul «unu»; adesea este doar articol nehotărât."},"important":["Ein se folosește la nominativ cu substantive masculine și neutre.","Eine se folosește pentru genul feminin.","Einen este forma de acuzativ masculin."],"comparison":[{"word":"ein Mann","meaning":"genul masculin","example":"Ein Mann wartet draußen. – Un bărbat așteaptă afară."},{"word":"eine Frau","meaning":"genul feminin","example":"eine Frau – o femeie"},{"word":"ein Buch","meaning":"genul neutru","example":"Ich habe ein Buch. – Am o carte."},{"word":"einen Mann","meaning":"acuzativ","example":"einen Mann – un bărbat"}]}}
**Note:** Pentru DE „ein”, înlocuiesc valoarea incorectă cu termenul românesc natural „articolul nehotărât”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ein",
  "lv": "articol nehotărât",
  "level": "A1",
  "study": {
    "id": "a1-ein",
    "layout": "standardStudy",
    "translation": "articol nehotărât",
    "explanation": [
      "Ideea principală: ein este articolul nehotărât pentru substantive masculine și neutre.",
      "La nominativ se spune ein Mann și ein Buch.",
      "Pentru genul feminin se folosește eine.",
      "La acuzativ, forma masculină este einen."
    ],
    "examples": [
      {
        "de": "Ein Mann wartet draußen.",
        "lv": "Un bărbat așteaptă afară."
      },
      {
        "de": "Ich habe ein Buch.",
        "lv": "Am o carte."
      },
      {
        "de": "Er sucht einen Stift.",
        "lv": "El caută un stilou."
      },
      {
        "de": "Ein Kind spielt.",
        "lv": "Un copil se joacă."
      }
    ],
    "tip": {
      "text": "Reține: ein nu înseamnă întotdeauna numeralul «unu»; adesea este doar articol nehotărât."
    },
    "important": [
      "Ein se folosește la nominativ cu substantive masculine și neutre.",
      "Eine se folosește pentru genul feminin.",
      "Einen este forma de acuzativ masculin."
    ],
    "comparison": [
      {
        "word": "ein Mann",
        "meaning": "genul masculin",
        "example": "Ein Mann wartet draußen. – Un bărbat așteaptă afară."
      },
      {
        "word": "eine Frau",
        "meaning": "genul feminin",
        "example": "eine Frau – o femeie"
      },
      {
        "word": "ein Buch",
        "meaning": "genul neutru",
        "example": "Ich habe ein Buch. – Am o carte."
      },
      {
        "word": "einen Mann",
        "meaning": "acuzativ",
        "example": "einen Mann – un bărbat"
      }
    ]
  },
  "index": 154
}
```

---

## Finding 26

**Audit ID:** `LRB081-0026`
**Finding Stable ID:** `g2/a1/ro|Eis|idx:157|study.translation; study.comparison[1]|MISTRANSLATION|gpt-5.6-luna`
**Lang:** ro
**Card:** `Eis|idx:157`
**Field / path:** `study.translation; study.comparison[1]`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** {"study.translation":"Înghețată • Înghețată","study.comparison[1]":"{\"word\":\"der Schnee\",\"meaning\":\"Va ninge\",\"example\":\"Zăpada este albă. = Sniegs ir balts.\"}"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Eis","de_article":"das","lv":"gheață • înghețată","level":"A1","study":{"id":"a1-eis","layout":"standardStudy","translation":"gheață • înghețată","explanation":["Ideea principală: das Eis poate însemna atât «gheață», cât și «înghețată».","Pentru apa înghețată, în română se spune «gheață».","Pentru desert, în română se spune «înghețată».","Contextul arată care dintre cele două sensuri este potrivit.","La nivelul A1 sunt importante expresii precum ein Eis essen și Eis auf dem See."],"examples":[{"de":"Ich esse ein Eis.","lv":"Mănânc o înghețată."},{"de":"Möchtest du ein Eis?","lv":"Vrei o înghețată?"},{"de":"Im Winter liegt Eis auf dem See.","lv":"Iarna este gheață pe lac."},{"de":"Das Eis ist kalt.","lv":"Gheața este rece."},{"de":"Ich nehme ein Eis mit Schokolade.","lv":"Iau o înghețată cu ciocolată."}],"comparison":[{"word":"das Eis","meaning":"gheață • înghețată","example":"Ich esse ein Eis. – Mănânc o înghețată."},{"word":"der Schnee","meaning":"zăpadă","example":"Der Schnee ist weiß. – Zăpada este albă."},{"word":"kalt","meaning":"rece","example":"Das Wasser ist kalt. – Apa este rece."},{"word":"das Dessert","meaning":"desert","example":"Eis ist ein Dessert. – Înghețata este un desert."}],"tip":{"text":"Reține: desert → înghețată; apă înghețată → gheață."},"important":["În română, «gheață» și «înghețată» sunt cuvinte diferite, dar în germană ambele sensuri pot fi exprimate prin das Eis.","Contextul diferențiază desertul de apa înghețată."]}}
**Note:** Pentru DE „Eis”, corectez sensurile în „gheață” și „înghețată” și elimin letona din exemplul asociat lui „der Schnee”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Eis",
  "de_article": "das",
  "lv": "gheață • înghețată",
  "level": "A1",
  "study": {
    "id": "a1-eis",
    "layout": "standardStudy",
    "translation": "gheață • înghețată",
    "explanation": [
      "Ideea principală: das Eis poate însemna atât «gheață», cât și «înghețată».",
      "Pentru apa înghețată, în română se spune «gheață».",
      "Pentru desert, în română se spune «înghețată».",
      "Contextul arată care dintre cele două sensuri este potrivit.",
      "La nivelul A1 sunt importante expresii precum ein Eis essen și Eis auf dem See."
    ],
    "examples": [
      {
        "de": "Ich esse ein Eis.",
        "lv": "Mănânc o înghețată."
      },
      {
        "de": "Möchtest du ein Eis?",
        "lv": "Vrei o înghețată?"
      },
      {
        "de": "Im Winter liegt Eis auf dem See.",
        "lv": "Iarna este gheață pe lac."
      },
      {
        "de": "Das Eis ist kalt.",
        "lv": "Gheața este rece."
      },
      {
        "de": "Ich nehme ein Eis mit Schokolade.",
        "lv": "Iau o înghețată cu ciocolată."
      }
    ],
    "comparison": [
      {
        "word": "das Eis",
        "meaning": "gheață • înghețată",
        "example": "Ich esse ein Eis. – Mănânc o înghețată."
      },
      {
        "word": "der Schnee",
        "meaning": "zăpadă",
        "example": "Der Schnee ist weiß. – Zăpada este albă."
      },
      {
        "word": "kalt",
        "meaning": "rece",
        "example": "Das Wasser ist kalt. – Apa este rece."
      },
      {
        "word": "das Dessert",
        "meaning": "desert",
        "example": "Eis ist ein Dessert. – Înghețata este un desert."
      }
    ],
    "tip": {
      "text": "Reține: desert → înghețată; apă înghețată → gheață."
    },
    "important": [
      "În română, «gheață» și «înghețată» sunt cuvinte diferite, dar în germană ambele sensuri pot fi exprimate prin das Eis.",
      "Contextul diferențiază desertul de apa înghețată."
    ]
  },
  "index": 157
}
```

---

## Finding 27

**Audit ID:** `LRB081-0027`
**Finding Stable ID:** `g2/a1/ro|erst|idx:165|study.examples[0].lv|MISTRANSLATION|gpt-5.6-luna`
**Lang:** ro
**Card:** `erst|idx:165`
**Field / path:** `study.examples[0].lv`
**Severity:** HIGH
**Category:** SEMANTIC_OR_MEANING_ERROR
**CURRENT (captured scope):** 
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"erst","lv":"doar","level":"A1","study":{"id":"a1-erst","layout":"standardStudy","translation":"doar","explanation":["Ideea principală: erst poate însemna «doar», «abia» sau «mai întâi», în funcție de context.","Cu vârsta, ora sau un moment, erst arată adesea că valoarea ori momentul este mai mic sau mai târziu decât se aștepta.","Ich bin erst 18. – Am doar 18 ani.","Es ist erst Montag. – Este abia luni.","Erst lernen, dann spielen. – Mai întâi învață, apoi joacă-te."],"examples":[{"de":"Erst lernen, dann spielen.","lv":"Mai întâi învață, apoi joacă-te."},{"de":"Ich komme erst morgen.","lv":"Vin abia mâine."},{"de":"Er ist erst 18 Jahre alt.","lv":"Are doar 18 ani."},{"de":"Wir essen erst um acht Uhr.","lv":"Mâncăm doar la opt."}],"comparison":[{"word":"erst","meaning":"mai întâi • doar","example":"Erst lernen, dann spielen. – Mai întâi învață, apoi joacă-te."},{"word":"zuerst","meaning":"mai întâi • la început","example":"Zuerst frühstücken wir. – Mai întâi luăm micul dejun."},{"word":"nur","meaning":"doar","example":"Ich habe nur 5 Euro. – Am doar 5 euro."},{"word":"dann","meaning":"apoi","example":"Dann gehen wir nach Hause. – Apoi mergem acasă."}],"tip":{"text":"Reține: timp sau etapă încă neatinsă → erst; limitarea unei cantități → nur."},"important":["Erst și nur se pot traduce uneori prin «doar», dar nu sunt identice.","Erst se referă frecvent la timp, ordine sau o etapă; nur limitează o cantitate ori o posibilitate.","Zuerst înseamnă de obicei «mai întâi»."]}}
**Note:** Pentru DE „erst”, traducerea corectă a sensului indicat este „doar”, nu o valoare goală sau neinterpretabilă.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "erst",
  "lv": "doar",
  "level": "A1",
  "study": {
    "id": "a1-erst",
    "layout": "standardStudy",
    "translation": "doar",
    "explanation": [
      "Ideea principală: erst poate însemna «doar», «abia» sau «mai întâi», în funcție de context.",
      "Cu vârsta, ora sau un moment, erst arată adesea că valoarea ori momentul este mai mic sau mai târziu decât se aștepta.",
      "Ich bin erst 18. – Am doar 18 ani.",
      "Es ist erst Montag. – Este abia luni.",
      "Erst lernen, dann spielen. – Mai întâi învață, apoi joacă-te."
    ],
    "examples": [
      {
        "de": "Erst lernen, dann spielen.",
        "lv": "Mai întâi învață, apoi joacă-te."
      },
      {
        "de": "Ich komme erst morgen.",
        "lv": "Vin abia mâine."
      },
      {
        "de": "Er ist erst 18 Jahre alt.",
        "lv": "Are doar 18 ani."
      },
      {
        "de": "Wir essen erst um acht Uhr.",
        "lv": "Mâncăm doar la opt."
      }
    ],
    "comparison": [
      {
        "word": "erst",
        "meaning": "mai întâi • doar",
        "example": "Erst lernen, dann spielen. – Mai întâi învață, apoi joacă-te."
      },
      {
        "word": "zuerst",
        "meaning": "mai întâi • la început",
        "example": "Zuerst frühstücken wir. – Mai întâi luăm micul dejun."
      },
      {
        "word": "nur",
        "meaning": "doar",
        "example": "Ich habe nur 5 Euro. – Am doar 5 euro."
      },
      {
        "word": "dann",
        "meaning": "apoi",
        "example": "Dann gehen wir nach Hause. – Apoi mergem acasă."
      }
    ],
    "tip": {
      "text": "Reține: timp sau etapă încă neatinsă → erst; limitarea unei cantități → nur."
    },
    "important": [
      "Erst și nur se pot traduce uneori prin «doar», dar nu sunt identice.",
      "Erst se referă frecvent la timp, ordine sau o etapă; nur limitează o cantitate ori o posibilitate.",
      "Zuerst înseamnă de obicei «mai întâi»."
    ]
  },
  "index": 165
}
```

---

## Finding 28

**Audit ID:** `LRB081-0028`
**Finding Stable ID:** `g2/a1/ro|essen|idx:690|lv / study.translation / study.*.lv|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `essen|idx:690`
**Field / path:** `lv / study.translation / study.*.lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Să mănânce","study.translation":"Să mănânce","study.*.lv":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"essen","lv":"a mânca","level":"A1","study":{"id":"a1-essen","layout":"standardStudy","translation":"a mânca","explanation":["Ideea principală: essen este verbul „a mânca”.","Essen descrie acțiunea de a consuma alimente.","Nu trebuie confundat cu substantivul das Essen, care înseamnă mâncare sau masă."],"examples":[{"de":"Ich esse gern Pizza.","lv":"Îmi place să mănânc pizza."},{"de":"Was wollt ihr essen?","lv":"Ce vreți să mâncați?"},{"de":"Wir essen um 12 Uhr.","lv":"Mâncăm la ora 12."},{"de":"Das Essen ist fertig.","lv":"Mâncarea este gata."},{"de":"Das Essen schmeckt sehr gut.","lv":"Mâncarea are un gust foarte bun."},{"de":"Das Essen schmeckt gut.","lv":"Mâncarea are gust bun."}],"tip":["Essen = a mânca.","Das Essen = mâncare • masă."],"important":["Essen este verb și se scrie cu literă mică.","Das Essen este substantiv și se scrie cu literă mare."]}}
**Note:** Pentru DE „essen”, corectez forma românească la infinitivul „a mânca”, deoarece este verb, nu „să mănânce”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "essen",
  "lv": "a mânca",
  "level": "A1",
  "study": {
    "id": "a1-essen",
    "layout": "standardStudy",
    "translation": "a mânca",
    "explanation": [
      "Ideea principală: essen este verbul „a mânca”.",
      "Essen descrie acțiunea de a consuma alimente.",
      "Nu trebuie confundat cu substantivul das Essen, care înseamnă mâncare sau masă."
    ],
    "examples": [
      {
        "de": "Ich esse gern Pizza.",
        "lv": "Îmi place să mănânc pizza."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Ce vreți să mâncați?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Mâncăm la ora 12."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Mâncarea este gata."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Mâncarea are un gust foarte bun."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Mâncarea are gust bun."
      }
    ],
    "tip": [
      "Essen = a mânca.",
      "Das Essen = mâncare • masă."
    ],
    "important": [
      "Essen este verb și se scrie cu literă mică.",
      "Das Essen este substantiv și se scrie cu literă mare."
    ]
  },
  "index": 690
}
```

---

## Finding 29

**Audit ID:** `LRB081-0029`
**Finding Stable ID:** `g2/a1/ro|Essen|idx:691|lv; study.translation; study.explanation; study.examples.lv; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Essen|idx:691`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.tip; study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Mâncare • Masă","study.translation":"Mâncare • Masă","study.explanation":"[\"Ideea principală: Substantiv - mâncare sau întreaga masă.\",\"Das Essen înseamnă în primul rând: a consuma alimente.\",\"Descrie adesea: acțiune.\",\"Das Essen înseamnă practic: mâncare sau masă.\",\"Descrie adesea: ploaie.\",\"Essen înseamnă a mânca.\",\"Das Essen poate însemna mâncare sau o masă în general.\"]","study.examples.lv":null,"study.tip":"[\"Das Essen = a mânca\",\"Folosiți das Essen atunci când contextul se potrivește acestui sens.\"]","study.important":"[\"Essen este un verb fără articol.\",\"Das Essen nu este același lucru cu essen.\",\"Acțiune: essen.\",\"Caz/masă: das Essen.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Essen","de_article":"das","lv":"mâncare • masă","level":"A1","study":{"id":"a1-essen-study","layout":"standardStudy","translation":"mâncare • masă","explanation":["Ideea principală: das Essen este substantivul pentru mâncare sau o masă.","Das Essen desemnează alimentele ori masa în ansamblu.","Verbul essen înseamnă „a mânca”.","Majuscula și articolul das arată că Essen este substantiv."],"examples":[{"de":"Das Essen schmeckt gut.","lv":"Mâncarea are gust bun."},{"de":"Was wollt ihr essen?","lv":"Ce vreți să mâncați?"},{"de":"Wir essen um 12 Uhr.","lv":"Mâncăm la ora 12."},{"de":"Das Essen ist fertig.","lv":"Mâncarea este gata."},{"de":"Das Essen schmeckt sehr gut.","lv":"Mâncarea are un gust foarte bun."},{"de":"Das Essen schmeckt gut.","lv":"Mâncarea are gust bun."}],"tip":["Das Essen = mâncare • masă.","Essen = a mânca."],"important":["Das Essen este substantiv; essen este verb.","Nu confunda das Essen cu essen."]}}
**Note:** Pentru DE „Essen”, repar confuzia dintre substantivul „Das Essen” și verbul „essen”, elimin referința greșită la ploaie și păstrez explicațiile integral în română.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Essen",
  "de_article": "das",
  "lv": "mâncare • masă",
  "level": "A1",
  "study": {
    "id": "a1-essen-study",
    "layout": "standardStudy",
    "translation": "mâncare • masă",
    "explanation": [
      "Ideea principală: das Essen este substantivul pentru mâncare sau o masă.",
      "Das Essen desemnează alimentele ori masa în ansamblu.",
      "Verbul essen înseamnă „a mânca”.",
      "Majuscula și articolul das arată că Essen este substantiv."
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Mâncarea are gust bun."
      },
      {
        "de": "Was wollt ihr essen?",
        "lv": "Ce vreți să mâncați?"
      },
      {
        "de": "Wir essen um 12 Uhr.",
        "lv": "Mâncăm la ora 12."
      },
      {
        "de": "Das Essen ist fertig.",
        "lv": "Mâncarea este gata."
      },
      {
        "de": "Das Essen schmeckt sehr gut.",
        "lv": "Mâncarea are un gust foarte bun."
      },
      {
        "de": "Das Essen schmeckt gut.",
        "lv": "Mâncarea are gust bun."
      }
    ],
    "tip": [
      "Das Essen = mâncare • masă.",
      "Essen = a mânca."
    ],
    "important": [
      "Das Essen este substantiv; essen este verb.",
      "Nu confunda das Essen cu essen."
    ]
  },
  "index": 691
}
```

---

## Finding 30

**Audit ID:** `LRB081-0030`
**Finding Stable ID:** `g2/a1/ro|euch|idx:170|lv, study.translation, study.examples, study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `euch|idx:170`
**Field / path:** `lv, study.translation, study.examples, study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Tu • Tu","study.translation":"Tu • Tu","study.examples":"[{\"de\":\"Ich sehe euch.\",\"lv\":\"Te văd\"},{\"de\":\"Ich helfe euch.\",\"lv\":\"Te ajut\"},{\"de\":\"Ich gebe euch das Buch.\",\"lv\":\"Iti dau o carte\"},{\"de\":\"Ich danke euch.\",\"lv\":\"Iti multumesc\"},{\"de\":\"Ihr erinnert euch.\",\"lv\":\"Iti amintesti\"}]","study.comparison":"[{\"word\":\"ihr\",\"meaning\":\"Tu\",\"example\":\"Voi sunteţi prietenoşi. = Jūs esat draudzīgi.\"},{\"word\":\"euch\",\"meaning\":\"Tu/la tine\",\"example\":\"Vă ajut. = Es jums palīdzu.\"},{\"word\":\"euer\",\"meaning\":\"A ta\",\"example\":\"Aceasta este casa voastră. = Tā ir jūsu māja.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"euch","lv":"vă • vouă","level":"A1","study":{"id":"a1-euch","layout":"standardStudy","translation":"vă • vouă","explanation":"Ideea principală: euch este pronumele personal pentru persoana a doua plural la acuzativ și dativ.","examples":[{"de":"Ich sehe euch.","lv":"Vă văd."},{"de":"Ich helfe euch.","lv":"Vă ajut."},{"de":"Ich gebe euch das Buch.","lv":"Vă dau cartea."},{"de":"Ich danke euch.","lv":"Vă mulțumesc."},{"de":"Ihr erinnert euch.","lv":"Vă amintiți."}],"comparison":[{"word":"ihr","meaning":"Voi","example":"Ihr seid freundlich. – Voi sunteți prietenoși."},{"word":"euch","meaning":"Vă • vouă","example":"Ich helfe euch. – Vă ajut."},{"word":"euer","meaning":"Al vostru • a voastră • ai voștri • ale voastre","example":"Das ist euer Haus. – Aceasta este casa voastră."}],"info":["ihr = voi, forma de nominativ","euch = vă/vouă, forma de acuzativ sau dativ","euer = al vostru/a voastră, formă posesivă"],"tip":{"text":"Reține: ihr este subiectul, iar euch este complement direct sau indirect.","example":"Ich sehe euch. = Vă văd. • Ich helfe euch. = Vă ajut."},"important":["Euch este forma de acuzativ și dativ pentru persoana a doua plural.","În română se traduce după context prin «vă» sau «vouă»."]}}
**Note:** Pentru DE „euch”, corectez pronumele la persoana a doua plural și înlocuiesc toate formele greșite de singular și toate fragmentele letone.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "euch",
  "lv": "vă • vouă",
  "level": "A1",
  "study": {
    "id": "a1-euch",
    "layout": "standardStudy",
    "translation": "vă • vouă",
    "explanation": "Ideea principală: euch este pronumele personal pentru persoana a doua plural la acuzativ și dativ.",
    "examples": [
      {
        "de": "Ich sehe euch.",
        "lv": "Vă văd."
      },
      {
        "de": "Ich helfe euch.",
        "lv": "Vă ajut."
      },
      {
        "de": "Ich gebe euch das Buch.",
        "lv": "Vă dau cartea."
      },
      {
        "de": "Ich danke euch.",
        "lv": "Vă mulțumesc."
      },
      {
        "de": "Ihr erinnert euch.",
        "lv": "Vă amintiți."
      }
    ],
    "comparison": [
      {
        "word": "ihr",
        "meaning": "Voi",
        "example": "Ihr seid freundlich. – Voi sunteți prietenoși."
      },
      {
        "word": "euch",
        "meaning": "Vă • vouă",
        "example": "Ich helfe euch. – Vă ajut."
      },
      {
        "word": "euer",
        "meaning": "Al vostru • a voastră • ai voștri • ale voastre",
        "example": "Das ist euer Haus. – Aceasta este casa voastră."
      }
    ],
    "info": [
      "ihr = voi, forma de nominativ",
      "euch = vă/vouă, forma de acuzativ sau dativ",
      "euer = al vostru/a voastră, formă posesivă"
    ],
    "tip": {
      "text": "Reține: ihr este subiectul, iar euch este complement direct sau indirect.",
      "example": "Ich sehe euch. = Vă văd. • Ich helfe euch. = Vă ajut."
    },
    "important": [
      "Euch este forma de acuzativ și dativ pentru persoana a doua plural.",
      "În română se traduce după context prin «vă» sau «vouă»."
    ]
  },
  "index": 170
}
```

---

## Finding 31

**Audit ID:** `LRB081-0031`
**Finding Stable ID:** `g2/a1/ro|fahren|idx:172|lv, study.translation, study.explanation, study.examples, study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `fahren|idx:172`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Conduce • Conduce • Ia","study.translation":"Conduce • Conduce • Ia","study.explanation":"[\"Ideea principală: fahren înseamnă a conduce un vehicul și în unele propoziții și a lua sau a lua pe cineva.\",\"Fahren este utilizat atunci când călătoriți cu mașina, autobuzul, trenul, bicicleta sau alt vehicul.\",\"Dacă propoziția are ca obiect o persoană, fahren poate însemna să conducă sau să ia.\",\"Dacă mișcarea este pe jos, se folosește de obicei gehen sau laufen.\"]","study.examples":"[{\"de\":\"Ich fahre nach Berlin.\",\"lv\":\"Mă duc la Berlin.\"},{\"de\":\"Ich fahre mit dem Auto.\",\"lv\":\"Conduc o mașină.\"},{\"de\":\"Ich fahre meine Tochter zur Schule.\",\"lv\":\"Îmi duc fiica la școală.\"},{\"de\":\"Ich fahre dich nach Hause.\",\"lv\":\"Te voi duce acasă\"},{\"de\":\"Wir fahren morgen nach München.\",\"lv\":\"Mergem maine la Munchen.\"}]","study.comparison":"[{\"word\":\"fahren\",\"meaning\":\"Plimbare cu transportul\",\"example\":\"Calatoresc cu autobuzul.\"},{\"word\":\"gehen\",\"meaning\":\"Mergi pe jos\",\"example\":\"Mă duc acasă.\"},{\"word\":\"laufen\",\"meaning\":\"Alerga / mergi\",\"example\":\"El aleargă repede.\"},{\"word\":\"bringen\",\"meaning\":\"Aduce / livrează\",\"example\":\"Aduc cartea.\"},{\"word\":\"mitnehmen\",\"meaning\":\"Ia cu tine\",\"example\":\"Te iau cu mine.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"fahren","lv":"a merge cu un vehicul • a duce","level":"A1","study":{"id":"a1-fahren","layout":"standardStudy","translation":"a merge cu un vehicul • a duce","explanation":["Ideea principală: fahren înseamnă a merge cu un vehicul și, în unele construcții, a duce pe cineva.","Fahren se folosește când călătoriți cu mașina, autobuzul, trenul, bicicleta sau alt vehicul.","Dacă propoziția are ca obiect o persoană, fahren poate însemna a duce sau a transporta acea persoană.","Dacă deplasarea este pe jos, se folosesc de obicei gehen sau laufen."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Merg la Berlin."},{"de":"Ich fahre mit dem Auto.","lv":"Merg cu mașina."},{"de":"Ich fahre meine Tochter zur Schule.","lv":"Îmi duc fiica la școală."},{"de":"Ich fahre dich nach Hause.","lv":"Te duc acasă."},{"de":"Wir fahren morgen nach München.","lv":"Mergem mâine la München."}],"comparison":[{"word":"fahren","meaning":"a merge cu un vehicul","example":"Ich fahre mit dem Bus. – Merg cu autobuzul."},{"word":"gehen","meaning":"a merge pe jos","example":"Ich gehe nach Hause. – Merg acasă."},{"word":"laufen","meaning":"a alerga • a merge pe jos","example":"Er läuft schnell. – El aleargă repede."},{"word":"bringen","meaning":"a aduce","example":"Ich bringe das Buch. – Aduc cartea."},{"word":"mitnehmen","meaning":"a lua cu sine","example":"Ich nehme dich mit. – Te iau cu mine."}],"tip":{"text":"Reține: deplasare cu un vehicul → fahren; deplasare pe jos → gehen."},"important":{"text":"Fahren nu înseamnă numai «a conduce».","example":"În funcție de construcție, fahren poate însemna «a merge cu un vehicul», «a duce» sau «a transporta». "}}}
**Note:** Pentru DE „fahren”, corectez traducerile și exemplele pentru deplasarea cu vehiculul, conducere și transportul unei persoane, eliminând formulările nefirești.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "fahren",
  "lv": "a merge cu un vehicul • a duce",
  "level": "A1",
  "study": {
    "id": "a1-fahren",
    "layout": "standardStudy",
    "translation": "a merge cu un vehicul • a duce",
    "explanation": [
      "Ideea principală: fahren înseamnă a merge cu un vehicul și, în unele construcții, a duce pe cineva.",
      "Fahren se folosește când călătoriți cu mașina, autobuzul, trenul, bicicleta sau alt vehicul.",
      "Dacă propoziția are ca obiect o persoană, fahren poate însemna a duce sau a transporta acea persoană.",
      "Dacă deplasarea este pe jos, se folosesc de obicei gehen sau laufen."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Merg la Berlin."
      },
      {
        "de": "Ich fahre mit dem Auto.",
        "lv": "Merg cu mașina."
      },
      {
        "de": "Ich fahre meine Tochter zur Schule.",
        "lv": "Îmi duc fiica la școală."
      },
      {
        "de": "Ich fahre dich nach Hause.",
        "lv": "Te duc acasă."
      },
      {
        "de": "Wir fahren morgen nach München.",
        "lv": "Mergem mâine la München."
      }
    ],
    "comparison": [
      {
        "word": "fahren",
        "meaning": "a merge cu un vehicul",
        "example": "Ich fahre mit dem Bus. – Merg cu autobuzul."
      },
      {
        "word": "gehen",
        "meaning": "a merge pe jos",
        "example": "Ich gehe nach Hause. – Merg acasă."
      },
      {
        "word": "laufen",
        "meaning": "a alerga • a merge pe jos",
        "example": "Er läuft schnell. – El aleargă repede."
      },
      {
        "word": "bringen",
        "meaning": "a aduce",
        "example": "Ich bringe das Buch. – Aduc cartea."
      },
      {
        "word": "mitnehmen",
        "meaning": "a lua cu sine",
        "example": "Ich nehme dich mit. – Te iau cu mine."
      }
    ],
    "tip": {
      "text": "Reține: deplasare cu un vehicul → fahren; deplasare pe jos → gehen."
    },
    "important": {
      "text": "Fahren nu înseamnă numai «a conduce».",
      "example": "În funcție de construcție, fahren poate însemna «a merge cu un vehicul», «a duce» sau «a transporta». "
    }
  },
  "index": 172
}
```

---

## Finding 32

**Audit ID:** `LRB081-0032`
**Finding Stable ID:** `g2/a1/ro|Ferien|idx:694|lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Ferien|idx:694`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.comparison; study.tip; study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Vacanțe (școală)","study.translation":"Vacanțe (școală)","study.explanation":"[\"Ideea principală: numai la plural. Vacanțe școlare sau de studii - întotdeauna la plural.\",\"Die Ferien înseamnă practic: vacanțe școlare.\",\"Caracterizat adesea prin: numai la plural.\",\"Die Ferien este doar plural — întotdeauna la plural (in den Ferien).\"]","study.examples.lv":null,"study.comparison":"[{\"word\":\"die Ferien\",\"meaning\":\"Pauză de școală/studiu (doar dsk.)\",\"example\":\"In den Ferien fahren wir weg. – Mergem undeva în weekend.\"},{\"word\":\"der Urlaub\",\"meaning\":\"Plec de la serviciu (doar toate)\",\"example\":\"Ich habe zwei Wochen Urlaub. – Am două săptămâni de vacanță.\"}]","study.tip":"[\"Numai la plural. Vacanțe școlare sau de studii - întotdeauna la plural.\",\"Folosiți die Ferien atunci când contextul se potrivește cu acest sens.\"]","study.important":"[\"Ferien mereu cu dativ: in den Ferien.\",\"Incorect: in der Ferien → Corect: in den Ferien\",\"Școală: die Ferien (numai la plural).\",\"Numai la plural. Vacanțe școlare sau de studii - întotdeauna la plural.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Ferien","de_article":"die","lv":"vacanță școlară","level":"A1","study":{"id":"a1-ferien","layout":"standardStudy","translation":"vacanță școlară","explanation":["Ideea principală: vacanță școlară; în germană se folosește numai la plural.","Die Ferien înseamnă vacanță școlară.","Se referă adesea la perioadele fără cursuri.","Die Ferien este numai la plural — de exemplu, in den Ferien."],"examples":[{"de":"In den Ferien fahren wir ans Meer.","lv":"În vacanță mergem la mare."},{"de":"In den Ferien habe ich viel Zeit.","lv":"În vacanță am mult timp."},{"de":"Was macht ihr in den Ferien?","lv":"Ce faceți în vacanță?"},{"de":"Die Schule ist in den Ferien zu.","lv":"Școala este închisă în timpul vacanței."},{"de":"In den Ferien fahren wir ans Meer.","lv":"În vacanță mergem la mare."},{"de":"In den Ferien","lv":"în vacanța școlară."}],"comparison":[{"word":"die Ferien","meaning":"vacanță școlară","example":"In den Ferien fahren wir weg. – În vacanță plecăm undeva."},{"word":"der Urlaub","meaning":"concediu","example":"Ich habe zwei Wochen Urlaub. – Am două săptămâni de concediu."}],"tip":["Die Ferien înseamnă vacanță școlară și se folosește numai la plural.","Folosiți die Ferien atunci când contextul se referă la vacanța școlară."],"important":["Ferien se folosește la plural: in den Ferien.","Incorect: in der Ferien → corect: in den Ferien.","Pentru vacanța școlară se folosește die Ferien.","Pentru concediul de la serviciu se folosește der Urlaub."]}}
**Note:** Pentru DE „Ferien”, corectez diferența față de „Urlaub”, exemplul greșit cu weekendul și explicațiile despre plural și cazul dativ.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Ferien",
  "de_article": "die",
  "lv": "vacanță școlară",
  "level": "A1",
  "study": {
    "id": "a1-ferien",
    "layout": "standardStudy",
    "translation": "vacanță școlară",
    "explanation": [
      "Ideea principală: vacanță școlară; în germană se folosește numai la plural.",
      "Die Ferien înseamnă vacanță școlară.",
      "Se referă adesea la perioadele fără cursuri.",
      "Die Ferien este numai la plural — de exemplu, in den Ferien."
    ],
    "examples": [
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "În vacanță mergem la mare."
      },
      {
        "de": "In den Ferien habe ich viel Zeit.",
        "lv": "În vacanță am mult timp."
      },
      {
        "de": "Was macht ihr in den Ferien?",
        "lv": "Ce faceți în vacanță?"
      },
      {
        "de": "Die Schule ist in den Ferien zu.",
        "lv": "Școala este închisă în timpul vacanței."
      },
      {
        "de": "In den Ferien fahren wir ans Meer.",
        "lv": "În vacanță mergem la mare."
      },
      {
        "de": "In den Ferien",
        "lv": "în vacanța școlară."
      }
    ],
    "comparison": [
      {
        "word": "die Ferien",
        "meaning": "vacanță școlară",
        "example": "In den Ferien fahren wir weg. – În vacanță plecăm undeva."
      },
      {
        "word": "der Urlaub",
        "meaning": "concediu",
        "example": "Ich habe zwei Wochen Urlaub. – Am două săptămâni de concediu."
      }
    ],
    "tip": [
      "Die Ferien înseamnă vacanță școlară și se folosește numai la plural.",
      "Folosiți die Ferien atunci când contextul se referă la vacanța școlară."
    ],
    "important": [
      "Ferien se folosește la plural: in den Ferien.",
      "Incorect: in der Ferien → corect: in den Ferien.",
      "Pentru vacanța școlară se folosește die Ferien.",
      "Pentru concediul de la serviciu se folosește der Urlaub."
    ]
  },
  "index": 694
}
```

---

## Finding 33

**Audit ID:** `LRB081-0033`
**Finding Stable ID:** `g2/a1/ro|fernsehen|idx:687|lv / study.translation / study.*.lv|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `fernsehen|idx:687`
**Field / path:** `lv / study.translation / study.*.lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Uită la TV","study.translation":"Uită la TV","study.*.lv":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"fernsehen","lv":"a se uita la televizor","level":"A1","study":{"id":"a1-fernsehen","layout":"standardStudy","translation":"a se uita la televizor","explanation":["Ideea principală: fernsehen este un verb separabil și înseamnă „a se uita la televizor”.","La prezent se separă: ich sehe fern, du siehst fern.","Nu trebuie confundat cu substantivul das Fernsehen, care desemnează televiziunea ca mediu sau program."],"examples":[{"de":"Ich sehe heute Abend fern.","lv":"În seara aceasta mă uit la televizor."},{"de":"Siehst du oft fern?","lv":"Te uiți des la televizor?"},{"de":"Die Kinder sehen am Nachmittag fern.","lv":"Copiii se uită la televizor după-amiaza."}],"comparison":[{"word":"fernsehen","meaning":"a se uita la televizor","example":"Ich sehe fern. – Mă uit la televizor."},{"word":"das Fernsehen","meaning":"televiziune ca mediu","example":"Im Fernsehen läuft ein Film. – La televizor rulează un film."},{"word":"sehen","meaning":"a vedea","example":"Ich sehe einen Film. – Văd un film."}],"tip":{"leftBlocks":[{"text":"Pentru acțiune se folosește fernsehen; pentru mediu sau program se folosește das Fernsehen."}]},"important":{"text":"Fernsehen este verb separabil; das Fernsehen este substantiv și se folosește numai la singular."}}}
**Note:** Pentru DE „fernsehen”, înlocuiesc formularea nefirească „Uită la TV” cu infinitivul românesc „a se uita la televizor”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "fernsehen",
  "lv": "a se uita la televizor",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen",
    "layout": "standardStudy",
    "translation": "a se uita la televizor",
    "explanation": [
      "Ideea principală: fernsehen este un verb separabil și înseamnă „a se uita la televizor”.",
      "La prezent se separă: ich sehe fern, du siehst fern.",
      "Nu trebuie confundat cu substantivul das Fernsehen, care desemnează televiziunea ca mediu sau program."
    ],
    "examples": [
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "În seara aceasta mă uit la televizor."
      },
      {
        "de": "Siehst du oft fern?",
        "lv": "Te uiți des la televizor?"
      },
      {
        "de": "Die Kinder sehen am Nachmittag fern.",
        "lv": "Copiii se uită la televizor după-amiaza."
      }
    ],
    "comparison": [
      {
        "word": "fernsehen",
        "meaning": "a se uita la televizor",
        "example": "Ich sehe fern. – Mă uit la televizor."
      },
      {
        "word": "das Fernsehen",
        "meaning": "televiziune ca mediu",
        "example": "Im Fernsehen läuft ein Film. – La televizor rulează un film."
      },
      {
        "word": "sehen",
        "meaning": "a vedea",
        "example": "Ich sehe einen Film. – Văd un film."
      }
    ],
    "tip": {
      "leftBlocks": [
        {
          "text": "Pentru acțiune se folosește fernsehen; pentru mediu sau program se folosește das Fernsehen."
        }
      ]
    },
    "important": {
      "text": "Fernsehen este verb separabil; das Fernsehen este substantiv și se folosește numai la singular."
    }
  },
  "index": 687
}
```

---

## Finding 34

**Audit ID:** `LRB081-0034`
**Finding Stable ID:** `g2/a1/ro|Fernsehen|idx:688|lv / study.translation / study.*.lv|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Fernsehen|idx:688`
**Field / path:** `lv / study.translation / study.*.lv`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Televiziune","study.translation":"Televiziune","study.*.lv":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Fernsehen","de_article":"das","lv":"televiziune","level":"A1","study":{"id":"a1-fernsehen-study","layout":"standardStudy","translation":"televiziune","explanation":["Ideea principală: das Fernsehen este un substantiv folosit numai la singular și desemnează televiziunea ca mediu sau program.","Fernsehen este substantivul pentru televiziune ca mediu.","Verbul fernsehen înseamnă „a se uita la televizor” și este separabil: ich sehe fern.","Das Fernsehen nu are formă de plural."],"examples":[{"de":"Was gibt es heute im Fernsehen?","lv":"Ce este astăzi la televizor?"},{"de":"Was gibt es heute im Fernsehen?","lv":"Ce este astăzi la televizor?"},{"de":"Im Fernsehen läuft ein Film.","lv":"La televizor rulează un film."},{"de":"Das Fernsehen ist heute langweilig.","lv":"Programul de televiziune este plictisitor astăzi."},{"de":"Ich sehe heute Abend fern.","lv":"În seara aceasta mă uit la televizor."},{"de":"Was gibt es im Fernsehen?","lv":"Ce este la televizor?"}],"tip":["Pentru acțiune se folosește fernsehen; pentru mediu sau program se folosește das Fernsehen.","Das Fernsehen este substantiv și se folosește numai la singular."],"important":["Fernsehen este verb separabil: sehen + fern.","Das Fernsehen nu are plural.","Corect: das Fernsehen; incorect: die Fernsehen."]}}
**Note:** Pentru DE „Fernsehen”, păstrez sensul substantival corect și îl normalizez în română ca „televiziune”, fără conținut din altă limbă.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Fernsehen",
  "de_article": "das",
  "lv": "televiziune",
  "level": "A1",
  "study": {
    "id": "a1-fernsehen-study",
    "layout": "standardStudy",
    "translation": "televiziune",
    "explanation": [
      "Ideea principală: das Fernsehen este un substantiv folosit numai la singular și desemnează televiziunea ca mediu sau program.",
      "Fernsehen este substantivul pentru televiziune ca mediu.",
      "Verbul fernsehen înseamnă „a se uita la televizor” și este separabil: ich sehe fern.",
      "Das Fernsehen nu are formă de plural."
    ],
    "examples": [
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Ce este astăzi la televizor?"
      },
      {
        "de": "Was gibt es heute im Fernsehen?",
        "lv": "Ce este astăzi la televizor?"
      },
      {
        "de": "Im Fernsehen läuft ein Film.",
        "lv": "La televizor rulează un film."
      },
      {
        "de": "Das Fernsehen ist heute langweilig.",
        "lv": "Programul de televiziune este plictisitor astăzi."
      },
      {
        "de": "Ich sehe heute Abend fern.",
        "lv": "În seara aceasta mă uit la televizor."
      },
      {
        "de": "Was gibt es im Fernsehen?",
        "lv": "Ce este la televizor?"
      }
    ],
    "tip": [
      "Pentru acțiune se folosește fernsehen; pentru mediu sau program se folosește das Fernsehen.",
      "Das Fernsehen este substantiv și se folosește numai la singular."
    ],
    "important": [
      "Fernsehen este verb separabil: sehen + fern.",
      "Das Fernsehen nu are plural.",
      "Corect: das Fernsehen; incorect: die Fernsehen."
    ]
  },
  "index": 688
}
```

---

## Finding 35

**Audit ID:** `LRB081-0035`
**Finding Stable ID:** `g2/a1/ro|finden|idx:187|lv, study.translation, study.explanation, study.examples, study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `finden|idx:187`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Găsi • Considera","study.translation":"Găsi • Considera","study.explanation":"[\"Ideea principală: finden cel mai adesea înseamnă a găsi.\",\"În conversație, finden de foarte multe ori înseamnă, de asemenea, să te gândești sau să te gândești la ceva.\",\"Dacă este vorba despre un lucru pierdut, se traduce prin găsire.\",\"Când vine vorba de o opinie, aceasta se traduce prin a gândi sau a părea.\"]","study.examples":"[{\"de\":\"Ich finde meinen Schlüssel.\",\"lv\":\"Nu-mi găsesc cheia\"},{\"de\":\"Ich finde das gut.\",\"lv\":\"Ti-ai gasit telefonul?\"},{\"de\":\"Wie findest du den Film?\",\"lv\":\"Mi se pare bine.\"},{\"de\":\"Wie findest du den Film?\",\"lv\":\"Ce parere ai despre film?\"}]","study.comparison":"[{\"word\":\"finden\",\"meaning\":\"Găsi / considera\",\"example\":\"Cred că e bine. = Man tas šķiet labi.\"},{\"word\":\"Suchen\",\"meaning\":\"A căuta\",\"example\":\"Ich suche den Schlüssel. = Caut cheia.\"},{\"word\":\"Gandeste-te\",\"meaning\":\"A gândi\",\"example\":\"Ich denke an dich. = Mă gândesc la tine.\"},{\"word\":\"Glauben\",\"meaning\":\"Crede / gândește\",\"example\":\"Ich glaube, er kommt. = Cred că va veni.\"}]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"finden","lv":"a găsi • a considera","level":"A1","study":{"id":"a1-finden","layout":"standardStudy","translation":"a găsi • a considera","explanation":["Ideea principală: finden înseamnă cel mai adesea «a găsi».","În conversație, finden poate însemna și «a considera» sau «a avea o părere despre ceva».","Când este vorba despre un lucru pierdut, se traduce prin «a găsi».","Când este vorba despre o opinie, poate fi tradus prin «a considera» sau «a găsi că»."],"examples":[{"de":"Ich finde meinen Schlüssel.","lv":"Îmi găsesc cheia."},{"de":"Ich finde das gut.","lv":"Consider că este bine."},{"de":"Wie findest du den Film?","lv":"Ce părere ai despre film?"}],"comparison":[{"word":"finden","meaning":"a găsi • a considera","example":"Ich finde das gut. – Consider că este bine."}],"tip":{"text":"Reține: obiect pierdut → finden = a găsi; opinie → ich finde ... = consider/mi se pare."},"important":["Finden nu înseamnă numai «a găsi».","Ich finde das gut înseamnă «Consider că este bine» sau «Mi se pare bine»."]}}
**Note:** Pentru finden, traducerea și exemplele trebuie să exprime «a găsi» și «a considera», nu sensuri sau exemple rămase din letonă.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "finden",
  "lv": "a găsi • a considera",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "a găsi • a considera",
    "explanation": [
      "Ideea principală: finden înseamnă cel mai adesea «a găsi».",
      "În conversație, finden poate însemna și «a considera» sau «a avea o părere despre ceva».",
      "Când este vorba despre un lucru pierdut, se traduce prin «a găsi».",
      "Când este vorba despre o opinie, poate fi tradus prin «a considera» sau «a găsi că»."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Îmi găsesc cheia."
      },
      {
        "de": "Ich finde das gut.",
        "lv": "Consider că este bine."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Ce părere ai despre film?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "a găsi • a considera",
        "example": "Ich finde das gut. – Consider că este bine."
      }
    ],
    "tip": {
      "text": "Reține: obiect pierdut → finden = a găsi; opinie → ich finde ... = consider/mi se pare."
    },
    "important": [
      "Finden nu înseamnă numai «a găsi».",
      "Ich finde das gut înseamnă «Consider că este bine» sau «Mi se pare bine»."
    ]
  },
  "index": 187
}
```

---

## Finding 36

**Audit ID:** `LRB081-0036`
**Finding Stable ID:** `g2/a1/ro|Frau|idx:198|lv, study.translation, study.explanation, study.examples, study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Frau|idx:198`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Femeie • Soţie","study.translation":"Femeie • Soţie","study.explanation":"[\"Ideea principală: die Frau poate însemna femeie (sex) sau soție (soție).\",\"Dacă este pur și simplu o chestiune de gen sau persoană, die Frau = femeie.\",\"În cazul unui soț, die Frau = soție (meine Frau = soția mea).\",\"Pronumele posesiv (meine/deine/seine Frau) înseamnă aproape întotdeauna soție - soție.\",\"Plural: die Frauen.\",\"Forma masculină der Mann are același dublu sens: bărbat ȘI soț.\"]","study.examples":"[{\"de\":\"Sie ist eine nette Frau.\",\"lv\":\"Este o femeie drăguță.\"},{\"de\":\"Das ist meine Frau.\",\"lv\":\"Aceasta este sotia mea.\"},{\"de\":\"Wie viele Frauen sind hier?\",\"lv\":\"Cate femei sunt aici?\"},{\"de\":\"Meine Frau arbeitet in Berlin.\",\"lv\":\"Soția mea lucrează la Berlin.\"},{\"de\":\"Die Frau trägt ein Kleid.\",\"lv\":\"O femeie poartă o rochie.\"},{\"de\":\"Seine Frau ist Ärztin.\",\"lv\":\"Sotia lui este medic.\"}]","study.comparison":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Frau","de_article":"die","de_plural":"die Frauen","lv":"femeie • soție","level":"A1","study":{"id":"a1-frau","layout":"standardStudy","translation":"femeie • soție","explanation":["Ideea principală: die Frau poate însemna «femeie» sau «soție».","Dacă este vorba pur și simplu despre gen sau despre o persoană, die Frau înseamnă «femeie».","În contextul unui soț, die Frau înseamnă «soție»; meine Frau înseamnă «soția mea». ","Pronumele posesive meine Frau, deine Frau și seine Frau înseamnă aproape întotdeauna «soția mea», «soția ta» și «soția lui». ","Pluralul este die Frauen.","Forma masculină der Mann are același dublu sens: «bărbat» și «soț»."],"examples":[{"de":"Sie ist eine nette Frau.","lv":"Este o femeie drăguță."},{"de":"Das ist meine Frau.","lv":"Aceasta este soția mea."},{"de":"Wie viele Frauen sind hier?","lv":"Câte femei sunt aici?"},{"de":"Meine Frau arbeitet in Berlin.","lv":"Soția mea lucrează la Berlin."},{"de":"Die Frau trägt ein Kleid.","lv":"Femeia poartă o rochie."},{"de":"Seine Frau ist Ärztin.","lv":"Soția lui este medic."}],"tip":["Pronumele posesiv (meine/deine/seine Frau) înseamnă aproape întotdeauna soție.","Fără un posesiv (die Frau, eine Frau) înseamnă de obicei o femeie."],"important":["Die Frau = femeie SAU soție – în funcție de context.","Meine Frau = soția mea (nu „femeia mea”).","Plural: die Frauen."]}}
**Note:** Pentru Frau, termenii românești «femeie» și «soție» și toate exemplele trebuie să redea cele două sensuri ale cuvântului german.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Frau",
  "de_article": "die",
  "de_plural": "die Frauen",
  "lv": "femeie • soție",
  "level": "A1",
  "study": {
    "id": "a1-frau",
    "layout": "standardStudy",
    "translation": "femeie • soție",
    "explanation": [
      "Ideea principală: die Frau poate însemna «femeie» sau «soție».",
      "Dacă este vorba pur și simplu despre gen sau despre o persoană, die Frau înseamnă «femeie».",
      "În contextul unui soț, die Frau înseamnă «soție»; meine Frau înseamnă «soția mea». ",
      "Pronumele posesive meine Frau, deine Frau și seine Frau înseamnă aproape întotdeauna «soția mea», «soția ta» și «soția lui». ",
      "Pluralul este die Frauen.",
      "Forma masculină der Mann are același dublu sens: «bărbat» și «soț»."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "Este o femeie drăguță."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "Aceasta este soția mea."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Câte femei sunt aici?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Soția mea lucrează la Berlin."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Femeia poartă o rochie."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Soția lui este medic."
      }
    ],
    "tip": [
      "Pronumele posesiv (meine/deine/seine Frau) înseamnă aproape întotdeauna soție.",
      "Fără un posesiv (die Frau, eine Frau) înseamnă de obicei o femeie."
    ],
    "important": [
      "Die Frau = femeie SAU soție – în funcție de context.",
      "Meine Frau = soția mea (nu „femeia mea”).",
      "Plural: die Frauen."
    ]
  },
  "index": 198
}
```

---

## Finding 37

**Audit ID:** `LRB081-0037`
**Finding Stable ID:** `g2/a1/ro|für|idx:216|lv, study.translation, study.explanation, study.examples, study.comparison|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `für|idx:216`
**Field / path:** `lv, study.translation, study.explanation, study.examples, study.comparison`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Pentru • Pentru","study.translation":"Pentru • Pentru","study.explanation":"[\"Ideea principală: für este o prepoziție care guvernează întotdeauna cazul acuzativ - de obicei pentru sau pentru în letonă.\",\"Când vorbim de destinatar sau intenție, für = pentru (für dich = pentru tine).\",\"Când vorbim de schimb, onorariu sau motiv, für = pentru (danke für das Geschenk = mulțumesc pentru cadou).\",\"Für cere întotdeauna acuzativul, indiferent de sens.\"]","study.examples":"[{\"de\":\"Das ist für dich.\",\"lv\":\"Este pentru tine.\"},{\"de\":\"Danke für die Hilfe.\",\"lv\":\"Vă mulțumim pentru ajutor.\"},{\"de\":\"Ich kaufe ein Geschenk für meine Mutter.\",\"lv\":\"Cumpăr un cadou pentru mama mea.\"},{\"de\":\"Was bezahlst du für das Auto?\",\"lv\":\"Cat platesti pentru o masina?\"},{\"de\":\"Das Buch ist für Kinder.\",\"lv\":\"Cartea este pentru copii.\"},{\"de\":\"Für heute ist das genug.\",\"lv\":\"Este suficient pentru azi.\"}]","study.comparison":null}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"für","lv":"pentru","level":"A1","study":{"id":"a1-fuer","layout":"standardStudy","translation":"pentru","explanation":["Ideea principală: für este o prepoziție care cere întotdeauna cazul acuzativ.","Când indică destinatarul sau scopul, für înseamnă «pentru»; für dich înseamnă «pentru tine».","Când indică un schimb, un preț sau un motiv, für se traduce tot prin «pentru»; danke für das Geschenk înseamnă «mulțumesc pentru cadou».","Für cere întotdeauna acuzativul, indiferent de sens."],"examples":[{"de":"Das ist für dich.","lv":"Asta este pentru tine."},{"de":"Danke für die Hilfe.","lv":"Mulțumesc pentru ajutor."},{"de":"Ich kaufe ein Geschenk für meine Mutter.","lv":"Cumpăr un cadou pentru mama mea."},{"de":"Was bezahlst du für das Auto?","lv":"Cât plătești pentru mașină?"},{"de":"Das Buch ist für Kinder.","lv":"Cartea este pentru copii."},{"de":"Für heute ist das genug.","lv":"Pentru azi este suficient."}],"tip":["Für cere întotdeauna acuzativul, indiferent de sens.","Destinatar sau scop → pentru; schimb, preț ori motiv → tot pentru."],"important":["Für + acuzativ: für mich, für dich, für das Kind.","Danke für și bezahlen für se traduc în română cu «pentru»."]}}
**Note:** Pentru für, prepoziția germană cere acuzativul și se traduce consecvent prin «pentru» în explicații și exemple.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "für",
  "lv": "pentru",
  "level": "A1",
  "study": {
    "id": "a1-fuer",
    "layout": "standardStudy",
    "translation": "pentru",
    "explanation": [
      "Ideea principală: für este o prepoziție care cere întotdeauna cazul acuzativ.",
      "Când indică destinatarul sau scopul, für înseamnă «pentru»; für dich înseamnă «pentru tine».",
      "Când indică un schimb, un preț sau un motiv, für se traduce tot prin «pentru»; danke für das Geschenk înseamnă «mulțumesc pentru cadou».",
      "Für cere întotdeauna acuzativul, indiferent de sens."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "Asta este pentru tine."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Mulțumesc pentru ajutor."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Cumpăr un cadou pentru mama mea."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Cât plătești pentru mașină?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Cartea este pentru copii."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "Pentru azi este suficient."
      }
    ],
    "tip": [
      "Für cere întotdeauna acuzativul, indiferent de sens.",
      "Destinatar sau scop → pentru; schimb, preț ori motiv → tot pentru."
    ],
    "important": [
      "Für + acuzativ: für mich, für dich, für das Kind.",
      "Danke für și bezahlen für se traduc în română cu «pentru»."
    ]
  },
  "index": 216
}
```

---

## Finding 38

**Audit ID:** `LRB081-0038`
**Finding Stable ID:** `g2/a1/ro|Fußball|idx:218|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Fußball|idx:218`
**Field / path:** `lv; study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"fotbal","study.translation":"fotbal","study.explanation":"[\"Ideea principală: Fußball cel mai des înseamnă fotbal ca sport.\",\"Cu articolul şi forma numerabilă, der Fußball poate înseamna şi o minge de fotbal.\",\"Pluralul die Fußbälle înseamnă mingi de fotbal, nu mai multe sporturi.\"]","study.examples":"[{\"de\":\"Ich spiele Fußball.\",\"lv\":\"joc fotbal.\"},{\"de\":\"Der Fußball liegt im Garten.\",\"lv\":\"mingea de fotbal este în grădină.\"},{\"de\":\"Wir kaufen zwei Fußbälle.\",\"lv\":\"cumpărăm două mingi de fotbal.\"}]","study.comparison":"[{\"word\":\"Fußball\",\"meaning\":\"fotbal ca sport\",\"example\":\"Joc fotbal. – Es spēlēju futbolu.\"},{\"word\":\"der Fußball\",\"meaning\":\"minge de fotbal\",\"example\":\"Mingea de fotbal este nouă. – Futbola bumba ir jauna.\"}]","study.tip":"[\"Fără articol spielen Fußball înseamnă de obicei a juca fotbal.\",\"Forma numerabilă ein Fußball şi die Fußbälle sunt o minge de fotbal şi mingi de fotbal.\"]","study.important":"[\"die Fußbälle înseamnă mingi de fotbal.\",\"Sportul Fußball este de obicei folosit în singular.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Fußball","de_article":"der","de_plural":"die Fußbälle","lv":"fotbal","level":"A1","study":{"id":"a1-fussball-study","layout":"standardStudy","translation":"fotbal","explanation":["Ideea principală: Fußball înseamnă cel mai des fotbalul ca sport.","Cu articol și într-o formă numărabilă, der Fußball poate însemna și o minge de fotbal.","Pluralul die Fußbälle înseamnă mingi de fotbal, nu mai multe sporturi."],"examples":[{"de":"Ich spiele Fußball.","lv":"Joc fotbal."},{"de":"Der Fußball liegt im Garten.","lv":"Mingea de fotbal este în grădină."},{"de":"Wir kaufen zwei Fußbälle.","lv":"Cumpărăm două mingi de fotbal."}],"comparison":[{"word":"Fußball","meaning":"fotbal ca sport","example":"Ich spiele Fußball. – Joc fotbal."},{"word":"der Fußball","meaning":"minge de fotbal","example":"Der Fußball ist neu. – Mingea de fotbal este nouă."}],"tip":["Fără articol, spielen Fußball înseamnă de obicei «a juca fotbal».","Forma numărabilă ein Fußball și pluralul die Fußbälle înseamnă «o minge de fotbal» și «mingi de fotbal»."],"important":["Die Fußbälle înseamnă «mingi de fotbal».","Sportul Fußball se folosește de obicei la singular."]}}
**Note:** Pentru Fußball, exemplele și comparația trebuie să folosească româna, păstrând distincția germană dintre sport și minge.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Fußball",
  "de_article": "der",
  "de_plural": "die Fußbälle",
  "lv": "fotbal",
  "level": "A1",
  "study": {
    "id": "a1-fussball-study",
    "layout": "standardStudy",
    "translation": "fotbal",
    "explanation": [
      "Ideea principală: Fußball înseamnă cel mai des fotbalul ca sport.",
      "Cu articol și într-o formă numărabilă, der Fußball poate însemna și o minge de fotbal.",
      "Pluralul die Fußbälle înseamnă mingi de fotbal, nu mai multe sporturi."
    ],
    "examples": [
      {
        "de": "Ich spiele Fußball.",
        "lv": "Joc fotbal."
      },
      {
        "de": "Der Fußball liegt im Garten.",
        "lv": "Mingea de fotbal este în grădină."
      },
      {
        "de": "Wir kaufen zwei Fußbälle.",
        "lv": "Cumpărăm două mingi de fotbal."
      }
    ],
    "comparison": [
      {
        "word": "Fußball",
        "meaning": "fotbal ca sport",
        "example": "Ich spiele Fußball. – Joc fotbal."
      },
      {
        "word": "der Fußball",
        "meaning": "minge de fotbal",
        "example": "Der Fußball ist neu. – Mingea de fotbal este nouă."
      }
    ],
    "tip": [
      "Fără articol, spielen Fußball înseamnă de obicei «a juca fotbal».",
      "Forma numărabilă ein Fußball și pluralul die Fußbälle înseamnă «o minge de fotbal» și «mingi de fotbal»."
    ],
    "important": [
      "Die Fußbälle înseamnă «mingi de fotbal».",
      "Sportul Fußball se folosește de obicei la singular."
    ]
  },
  "index": 218
}
```

---

## Finding 39

**Audit ID:** `LRB081-0039`
**Finding Stable ID:** `g2/a1/ro|ganz|idx:219|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `ganz|idx:219`
**Field / path:** `lv; study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Sănătos","study.translation":"Sănătos","study.explanation":"[\"Ideea principală: ganz alături de substantiv înseamnă întreg sau tot.\",\"Înainte de un adjectiv sau adverb ganz poate înseamna complet, destul sau destul de.\",\"ganz nu este acelaşi lucru cu pronumele alles.\"]","study.examples":"[{\"de\":\"Ich arbeite den ganzen Tag.\",\"lv\":\"lucrez toată ziua.\"},{\"de\":\"Das ganze Haus ist sauber.\",\"lv\":\"toată casa este curată.\"},{\"de\":\"Das ist ganz sicher.\",\"lv\":\"aceasta este complet sigur.\"},{\"de\":\"Das Essen ist ganz gut.\",\"lv\":\"mâncarea este destul de bună.\"}]","study.comparison":"[{\"word\":\"ganz\",\"meaning\":\"întreg • toate • complet\",\"example\":\"toată ziua – visa diena\"},{\"word\":\"alles\",\"meaning\":\"Tot\",\"example\":\"Totul e bine. – Viss ir kārtībā.\"}]","study.tip":"[\"Înainte de substantiv ganz adesea înseamnă tot sau întreg.\",\"Înainte de un adjectiv ganz adesea înseamnă complet sau destul de.\"]","study.important":"[\"der ganze Tag = toată ziua.\",\"alles = tot ca pronume.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"ganz","lv":"întreg • complet","level":"A1","study":{"id":"a1-ganz-study","layout":"standardStudy","translation":"întreg • complet","explanation":["Ideea principală: ganz alături de un substantiv înseamnă «întreg» sau «tot». ","Înaintea unui adjectiv sau adverb, ganz poate însemna «complet» sau «destul de».","Ganz nu este același lucru cu pronumele alles."],"examples":[{"de":"Ich arbeite den ganzen Tag.","lv":"Lucrez toată ziua."},{"de":"Das ganze Haus ist sauber.","lv":"Toată casa este curată."},{"de":"Das ist ganz sicher.","lv":"Asta este absolut sigur."},{"de":"Das Essen ist ganz gut.","lv":"Mâncarea este destul de bună."}],"comparison":[{"word":"ganz","meaning":"întreg • tot • complet","example":"der ganze Tag – toată ziua"},{"word":"alles","meaning":"totul","example":"Alles ist gut. – Totul este bine."}],"tip":["Înaintea unui substantiv, ganz înseamnă adesea «tot» sau «întreg».","Înaintea unui adjectiv, ganz înseamnă adesea «complet» sau «destul de»."],"important":["Der ganze Tag = toată ziua.","Alles = totul, folosit ca pronume."]}}
**Note:** Pentru ganz, traducerea «sănătos» este greșită; cuvântul german exprimă «întreg», «tot» sau «complet».

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ganz",
  "lv": "întreg • complet",
  "level": "A1",
  "study": {
    "id": "a1-ganz-study",
    "layout": "standardStudy",
    "translation": "întreg • complet",
    "explanation": [
      "Ideea principală: ganz alături de un substantiv înseamnă «întreg» sau «tot». ",
      "Înaintea unui adjectiv sau adverb, ganz poate însemna «complet» sau «destul de».",
      "Ganz nu este același lucru cu pronumele alles."
    ],
    "examples": [
      {
        "de": "Ich arbeite den ganzen Tag.",
        "lv": "Lucrez toată ziua."
      },
      {
        "de": "Das ganze Haus ist sauber.",
        "lv": "Toată casa este curată."
      },
      {
        "de": "Das ist ganz sicher.",
        "lv": "Asta este absolut sigur."
      },
      {
        "de": "Das Essen ist ganz gut.",
        "lv": "Mâncarea este destul de bună."
      }
    ],
    "comparison": [
      {
        "word": "ganz",
        "meaning": "întreg • tot • complet",
        "example": "der ganze Tag – toată ziua"
      },
      {
        "word": "alles",
        "meaning": "totul",
        "example": "Alles ist gut. – Totul este bine."
      }
    ],
    "tip": [
      "Înaintea unui substantiv, ganz înseamnă adesea «tot» sau «întreg».",
      "Înaintea unui adjectiv, ganz înseamnă adesea «complet» sau «destul de»."
    ],
    "important": [
      "Der ganze Tag = toată ziua.",
      "Alles = totul, folosit ca pronume."
    ]
  },
  "index": 219
}
```

---

## Finding 40

**Audit ID:** `LRB081-0040`
**Finding Stable ID:** `g2/a1/ro|geben|idx:223|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `geben|idx:223`
**Field / path:** `lv; study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"A da","study.translation":"A da","study.explanation":"[\"Ideea principală: geben înseamnă a da.\",\"Geben este folosit atunci când cineva dă ceva altei persoane.\",\"Aceasta este direcția opusă a lui nehmen.\",\"Bekommen înseamnă a primi, deci a fi cel care primește ceva.\"]","study.examples":"[{\"de\":\"Gib mir bitte das Buch.\",\"lv\":\"Da-mi te rog cartea\"},{\"de\":\"Ich gebe dir meine Nummer.\",\"lv\":\"Iti dau numarul meu\"},{\"de\":\"Ich nehme das Buch.\",\"lv\":\"Iau cartea\"},{\"de\":\"Ich bekomme ein Geschenk.\",\"lv\":\"Primesc un cadou\"}]","study.comparison":"[{\"word\":\"geben\",\"meaning\":\"A da\",\"example\":\"Dă-mi cartea.\"},{\"word\":\"nehmen\",\"meaning\":\"A lua / a lua\",\"example\":\"Iau cartea.\"},{\"word\":\"bekommen\",\"meaning\":\"Primi / primi\",\"example\":\"Primesc un cadou.\"},{\"word\":\"bringen\",\"meaning\":\"Aduce / livrează\",\"example\":\"Îţi aduc cartea.\"}]","study.tip":"{\"text\":\"Amintiți-vă: dați → geben • Ia pentru tine → nehmen.\"}","study.important":"[\"Geben și nehmen sunt direcții opuse.\",\"Bekommen înseamnă a primi, nu a da.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"geben","lv":"a da","level":"A1","study":{"id":"a1-geben","layout":"standardStudy","translation":"a da","explanation":["Ideea principală: geben înseamnă «a da».","Geben se folosește atunci când cineva oferă ceva altei persoane.","Este opusul lui nehmen.","Bekommen înseamnă «a primi», adică a fi persoana care primește ceva."],"examples":[{"de":"Gib mir bitte das Buch.","lv":"Dă-mi, te rog, cartea."},{"de":"Ich gebe dir meine Nummer.","lv":"Îți dau numărul meu."},{"de":"Ich nehme das Buch.","lv":"Iau cartea."},{"de":"Ich bekomme ein Geschenk.","lv":"Primesc un cadou."}],"comparison":[{"word":"geben","meaning":"a da","example":"Gib mir das Buch. – Dă-mi cartea."},{"word":"nehmen","meaning":"a lua","example":"Ich nehme das Buch. – Iau cartea."},{"word":"bekommen","meaning":"a primi","example":"Ich bekomme ein Geschenk. – Primesc un cadou."},{"word":"bringen","meaning":"a aduce","example":"Ich bringe dir das Buch. – Îți aduc cartea."}],"tip":{"text":"Amintește-ți: a da → geben • a lua pentru tine → nehmen."},"important":["Geben și nehmen exprimă direcții opuse.","Bekommen înseamnă «a primi», nu «a da»."]}}
**Note:** Pentru geben, exemplele și comparația trebuie să redea corect opoziția germană geben–nehmen și sensul lui bekommen.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "geben",
  "lv": "a da",
  "level": "A1",
  "study": {
    "id": "a1-geben",
    "layout": "standardStudy",
    "translation": "a da",
    "explanation": [
      "Ideea principală: geben înseamnă «a da».",
      "Geben se folosește atunci când cineva oferă ceva altei persoane.",
      "Este opusul lui nehmen.",
      "Bekommen înseamnă «a primi», adică a fi persoana care primește ceva."
    ],
    "examples": [
      {
        "de": "Gib mir bitte das Buch.",
        "lv": "Dă-mi, te rog, cartea."
      },
      {
        "de": "Ich gebe dir meine Nummer.",
        "lv": "Îți dau numărul meu."
      },
      {
        "de": "Ich nehme das Buch.",
        "lv": "Iau cartea."
      },
      {
        "de": "Ich bekomme ein Geschenk.",
        "lv": "Primesc un cadou."
      }
    ],
    "comparison": [
      {
        "word": "geben",
        "meaning": "a da",
        "example": "Gib mir das Buch. – Dă-mi cartea."
      },
      {
        "word": "nehmen",
        "meaning": "a lua",
        "example": "Ich nehme das Buch. – Iau cartea."
      },
      {
        "word": "bekommen",
        "meaning": "a primi",
        "example": "Ich bekomme ein Geschenk. – Primesc un cadou."
      },
      {
        "word": "bringen",
        "meaning": "a aduce",
        "example": "Ich bringe dir das Buch. – Îți aduc cartea."
      }
    ],
    "tip": {
      "text": "Amintește-ți: a da → geben • a lua pentru tine → nehmen."
    },
    "important": [
      "Geben și nehmen exprimă direcții opuse.",
      "Bekommen înseamnă «a primi», nu «a da»."
    ]
  },
  "index": 223
}
```

---

## Finding 41

**Audit ID:** `LRB081-0041`
**Finding Stable ID:** `g2/a1/ro|gefallen|idx:225|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `gefallen|idx:225`
**Field / path:** `lv; study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Să placă","study.translation":"Să placă","study.explanation":"[\"Ideea principală: gefallen înseamnă a plăcea, dar construcţia propoziţiei în germană este diferită de limba letonă.\",\"Lucrul care place este subiectul propoziţiei în limba germană.\",\"Persoana căreia îi place ceva este în dativ: mir, dir, ihm, ihr, uns, euch, ihnen.\"]","study.examples":"[{\"de\":\"Das gefällt mir.\",\"lv\":\"îmi place.\"},{\"de\":\"Gefällt dir das Kleid?\",\"lv\":\"ţi se pare frumoasă rochia?\"},{\"de\":\"Der Film gefällt uns.\",\"lv\":\"ne place filmul.\"}]","study.comparison":"[{\"word\":\"gefallen\",\"meaning\":\"a plăcea • persoană în dativ\",\"example\":\"Asta îmi place. – Man tas patīk.\"},{\"word\":\"mögen\",\"meaning\":\"a plăcea • a prefera\",\"example\":\"Asta îmi place. – Man tas patīk.\"}]","study.tip":"[\"Aminteşte-ţi construcţia: Das gefällt mir.\",\"Nu construi ordinea cuvintelor literală din limba letonă.\"]","study.important":"[\"gefallen se foloseşte cu dativul: mir, dir, ihm, ihr.\",\"Das gefällt mir = îmi place.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"gefallen","lv":"a plăcea","level":"A1","study":{"id":"a1-gefallen-study","layout":"standardStudy","translation":"a plăcea","explanation":["Ideea principală: gefallen înseamnă «a plăcea», iar construcția germană este asemănătoare cu cea românească.","Lucrul care place este subiectul propoziției.","Persoana căreia îi place ceva este la dativ: mir, dir, ihm, ihr, uns, euch, ihnen."],"examples":[{"de":"Das gefällt mir.","lv":"Îmi place asta."},{"de":"Gefällt dir das Kleid?","lv":"Îți place rochia?"},{"de":"Der Film gefällt uns.","lv":"Ne place filmul."}],"comparison":[{"word":"gefallen","meaning":"a plăcea • persoană la dativ","example":"Das gefällt mir. – Îmi place asta."},{"word":"mögen","meaning":"a plăcea • a prefera","example":"Ich mag das. – Îmi place asta."}],"tip":["Reține construcția: Das gefällt mir. – Îmi place asta.","Persoana apare la dativ, la fel ca în construcția românească «îmi/îți place»."],"important":["Gefallen se folosește cu dativul: mir, dir, ihm, ihr.","Das gefällt mir = Îmi place asta."]}}
**Note:** Pentru gefallen, exemplele trebuie să arate construcția germană cu obiectul ca subiect și persoana la dativ.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gefallen",
  "lv": "a plăcea",
  "level": "A1",
  "study": {
    "id": "a1-gefallen-study",
    "layout": "standardStudy",
    "translation": "a plăcea",
    "explanation": [
      "Ideea principală: gefallen înseamnă «a plăcea», iar construcția germană este asemănătoare cu cea românească.",
      "Lucrul care place este subiectul propoziției.",
      "Persoana căreia îi place ceva este la dativ: mir, dir, ihm, ihr, uns, euch, ihnen."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "Îmi place asta."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "Îți place rochia?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "Ne place filmul."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "a plăcea • persoană la dativ",
        "example": "Das gefällt mir. – Îmi place asta."
      },
      {
        "word": "mögen",
        "meaning": "a plăcea • a prefera",
        "example": "Ich mag das. – Îmi place asta."
      }
    ],
    "tip": [
      "Reține construcția: Das gefällt mir. – Îmi place asta.",
      "Persoana apare la dativ, la fel ca în construcția românească «îmi/îți place»."
    ],
    "important": [
      "Gefallen se folosește cu dativul: mir, dir, ihm, ihr.",
      "Das gefällt mir = Îmi place asta."
    ]
  },
  "index": 225
}
```

---

## Finding 42

**Audit ID:** `LRB081-0042`
**Finding Stable ID:** `g2/a1/ro|Gemüse|idx:692|lv; study.translation; study.explanation; study.examples.lv; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Gemüse|idx:692`
**Field / path:** `lv; study.translation; study.explanation; study.examples.lv; study.tip; study.important`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Legume","study.translation":"Legume","study.explanation":"[\"Ideea principală: Legumele în general. Germana nu are o formă de plural pentru *die Gemüse.\",\"Das Gemüse înseamnă în principal: legume în general.\",\"Descris adesea: în orice gen (numai singular).\"]","study.examples.lv":null,"study.tip":"[\"Das Gemüse = legume\",\"Folosiți das Gemüse atunci când contextul corespunde acestui sens.\"]","study.important":"[\"Incorect: die Gemüse, die Obsts.\",\"Incorect: die Gemüse → Corect: das Gemüse\",\"Das Gemüse = legume (în general).\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Gemüse","de_article":"das","lv":"legume","level":"A1","study":{"id":"a1-gemuese","layout":"standardStudy","translation":"legume","explanation":["Ideea principală: Gemüse înseamnă legume în general.","Das Gemüse înseamnă în principal «legume» ca noțiune generală.","În germană, Gemüse se folosește de obicei la singular și nu are, în acest sens, un plural obișnuit."],"examples":[{"de":"Ich esse gern Gemüse.","lv":"Îmi place să mănânc legume."},{"de":"Ich esse gern Gemüse.","lv":"Îmi place să mănânc legume."},{"de":"Das Gemüse ist frisch.","lv":"Legumele sunt proaspete."},{"de":"Wir kaufen Gemüse auf dem Markt.","lv":"Cumpărăm legume de la piață."},{"de":"Ich mag Obst und Gemüse.","lv":"Îmi plac fructele și legumele."},{"de":"Ich esse Gemüse.","lv":"Mănânc legume."}],"tip":["Das Gemüse = legume.","Folosește das Gemüse când te referi la legume în general."],"important":["În mod obișnuit nu se spune die Gemüse sau die Obsts.","Das Gemüse = legume în general."]}}
**Note:** Pentru Gemüse, formularea românească trebuie să explice substantivul german colectiv folosit de obicei la singular.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Gemüse",
  "de_article": "das",
  "lv": "legume",
  "level": "A1",
  "study": {
    "id": "a1-gemuese",
    "layout": "standardStudy",
    "translation": "legume",
    "explanation": [
      "Ideea principală: Gemüse înseamnă legume în general.",
      "Das Gemüse înseamnă în principal «legume» ca noțiune generală.",
      "În germană, Gemüse se folosește de obicei la singular și nu are, în acest sens, un plural obișnuit."
    ],
    "examples": [
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Îmi place să mănânc legume."
      },
      {
        "de": "Ich esse gern Gemüse.",
        "lv": "Îmi place să mănânc legume."
      },
      {
        "de": "Das Gemüse ist frisch.",
        "lv": "Legumele sunt proaspete."
      },
      {
        "de": "Wir kaufen Gemüse auf dem Markt.",
        "lv": "Cumpărăm legume de la piață."
      },
      {
        "de": "Ich mag Obst und Gemüse.",
        "lv": "Îmi plac fructele și legumele."
      },
      {
        "de": "Ich esse Gemüse.",
        "lv": "Mănânc legume."
      }
    ],
    "tip": [
      "Das Gemüse = legume.",
      "Folosește das Gemüse când te referi la legume în general."
    ],
    "important": [
      "În mod obișnuit nu se spune die Gemüse sau die Obsts.",
      "Das Gemüse = legume în general."
    ]
  },
  "index": 692
}
```

---

## Finding 43

**Audit ID:** `LRB081-0043`
**Finding Stable ID:** `g2/a1/ro|Geschichte|idx:233|lv; study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Geschichte|idx:233`
**Field / path:** `lv; study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"poveste","study.translation":"poveste","study.explanation":"[\"Ideea principală: Geschichte poate înseamna o poveste sau istorie.\",\"Pluralul die Geschichten de obicei înseamnă poveşti.\",\"Când înseamnă istorie, cuvântul Geschichte este de obicei folosit în singular.\"]","study.examples":"[{\"de\":\"Er erzählt eine Geschichte.\",\"lv\":\"el povesteşte o poveste.\"},{\"de\":\"Ich lerne Geschichte.\",\"lv\":\"învăţ istorie.\"},{\"de\":\"Das ist die Geschichte Deutschlands.\",\"lv\":\"aceasta este istoria Germaniei.\"}]","study.comparison":"[{\"word\":\"eine Geschichte\",\"meaning\":\"poveste\",\"example\":\"o poveste interesantă – interesants stāsts\"},{\"word\":\"Geschichte\",\"meaning\":\"istorie\",\"example\":\"Să înveţi istorie – mācīties vēsturi\"}]","study.tip":"[\"Cu o formă numerabilă şi plurală, vorbim de obicei despre o poveste.\",\"Ca materie de studiu, Geschichte înseamnă istorie.\"]","study.important":"[\"die Geschichten = poveşti.\",\"Geschichte ca istorie este de obicei în singular.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Geschichte","de_article":"die","de_plural":"die Geschichten","lv":"poveste","level":"A1","study":{"id":"a1-geschichte-study","layout":"standardStudy","translation":"poveste","explanation":["Ideea principală: Geschichte poate însemna «poveste» sau «istorie». ","Pluralul die Geschichten înseamnă de obicei «povești».","Când înseamnă «istorie» ca materie, Geschichte se folosește de obicei la singular."],"examples":[{"de":"Er erzählt eine Geschichte.","lv":"El povestește o poveste."},{"de":"Ich lerne Geschichte.","lv":"Învăț istorie."},{"de":"Das ist die Geschichte Deutschlands.","lv":"Aceasta este istoria Germaniei."}],"comparison":[{"word":"eine Geschichte","meaning":"poveste","example":"eine interessante Geschichte – o poveste interesantă"},{"word":"Geschichte","meaning":"istorie","example":"Geschichte lernen – a învăța istorie"}],"tip":["Cu o formă numărabilă și la plural, vorbim de obicei despre o poveste.","Ca materie de studiu, Geschichte înseamnă «istorie»."],"important":["Die Geschichten = poveștile.","Geschichte cu sensul de istorie se folosește de obicei la singular."]}}
**Note:** Pentru Geschichte, comparația trebuie să distingă clar sensurile germane «poveste» și «istorie» în română.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Geschichte",
  "de_article": "die",
  "de_plural": "die Geschichten",
  "lv": "poveste",
  "level": "A1",
  "study": {
    "id": "a1-geschichte-study",
    "layout": "standardStudy",
    "translation": "poveste",
    "explanation": [
      "Ideea principală: Geschichte poate însemna «poveste» sau «istorie». ",
      "Pluralul die Geschichten înseamnă de obicei «povești».",
      "Când înseamnă «istorie» ca materie, Geschichte se folosește de obicei la singular."
    ],
    "examples": [
      {
        "de": "Er erzählt eine Geschichte.",
        "lv": "El povestește o poveste."
      },
      {
        "de": "Ich lerne Geschichte.",
        "lv": "Învăț istorie."
      },
      {
        "de": "Das ist die Geschichte Deutschlands.",
        "lv": "Aceasta este istoria Germaniei."
      }
    ],
    "comparison": [
      {
        "word": "eine Geschichte",
        "meaning": "poveste",
        "example": "eine interessante Geschichte – o poveste interesantă"
      },
      {
        "word": "Geschichte",
        "meaning": "istorie",
        "example": "Geschichte lernen – a învăța istorie"
      }
    ],
    "tip": [
      "Cu o formă numărabilă și la plural, vorbim de obicei despre o poveste.",
      "Ca materie de studiu, Geschichte înseamnă «istorie»."
    ],
    "important": [
      "Die Geschichten = poveștile.",
      "Geschichte cu sensul de istorie se folosește de obicei la singular."
    ]
  },
  "index": 233
}
```

---

## Finding 44

**Audit ID:** `LRB081-0044`
**Finding Stable ID:** `g2/a1/ro|Geschwister|idx:234|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Geschwister|idx:234`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"fraţi şi surori","study.translation":"fraţi şi surori","study.explanation":"[\"Ideea principală: Geschwister înseamnă fraţii şi surorile împreună.\",\"Acest cuvânt se foloseşte de obicei doar la plural.\",\"Pentru o persoană se foloseşte Bruder sau Schwester.\"]","study.examples":"[{\"de\":\"Ich habe zwei Geschwister.\",\"lv\":\"am doi fraţi sau surori.\"},{\"de\":\"Meine Geschwister wohnen in Berlin.\",\"lv\":\"fraţii şi surorile mele locuiesc în Berlin.\"}]","study.comparison":"[{\"word\":\"Geschwister\",\"meaning\":\"fraţi şi surori\",\"example\":\"Fraţii mei – mani brāļi un māsas\"},{\"word\":\"Bruder\",\"meaning\":\"Frate\",\"example\":\"fratele meu – mans brālis\"},{\"word\":\"Schwester\",\"meaning\":\"Sora\",\"example\":\"sora mea – mana māsa\"}]","study.tip":"[\"Geschwister se foloseşte de obicei la plural.\",\"Pentru o persoană alege Bruder sau Schwester.\"]","study.important":"[\"Nu folosi ein Geschwister ca o formă regulată de singular A1.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Geschwister","de_article":"die","lv":"frați și surori","level":"A1","study":{"id":"a1-geschwister-study","layout":"standardStudy","translation":"frați și surori","explanation":["Ideea principală: Geschwister înseamnă frați și surori împreună.","Acest cuvânt se folosește de obicei numai la plural.","Pentru o singură persoană se folosesc Bruder sau Schwester."],"examples":[{"de":"Ich habe zwei Geschwister.","lv":"Am doi frați."},{"de":"Meine Geschwister wohnen in Berlin.","lv":"Frații și surorile mele locuiesc în Berlin."}],"comparison":[{"word":"Geschwister","meaning":"frați și surori","example":"Meine Geschwister – frații și surorile mele"},{"word":"Bruder","meaning":"frate","example":"mein Bruder – fratele meu"},{"word":"Schwester","meaning":"soră","example":"meine Schwester – sora mea"}],"tip":["Geschwister se folosește de obicei la plural.","Pentru o singură persoană, alege Bruder sau Schwester."],"important":["Nu folosi ein Geschwister ca formă regulată de singular la nivel A1."]}}
**Note:** Pentru Geschwister, sensul german colectiv «frați și surori» și exemplele trebuie prezentate integral în română.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Geschwister",
  "de_article": "die",
  "lv": "frați și surori",
  "level": "A1",
  "study": {
    "id": "a1-geschwister-study",
    "layout": "standardStudy",
    "translation": "frați și surori",
    "explanation": [
      "Ideea principală: Geschwister înseamnă frați și surori împreună.",
      "Acest cuvânt se folosește de obicei numai la plural.",
      "Pentru o singură persoană se folosesc Bruder sau Schwester."
    ],
    "examples": [
      {
        "de": "Ich habe zwei Geschwister.",
        "lv": "Am doi frați."
      },
      {
        "de": "Meine Geschwister wohnen in Berlin.",
        "lv": "Frații și surorile mele locuiesc în Berlin."
      }
    ],
    "comparison": [
      {
        "word": "Geschwister",
        "meaning": "frați și surori",
        "example": "Meine Geschwister – frații și surorile mele"
      },
      {
        "word": "Bruder",
        "meaning": "frate",
        "example": "mein Bruder – fratele meu"
      },
      {
        "word": "Schwester",
        "meaning": "soră",
        "example": "meine Schwester – sora mea"
      }
    ],
    "tip": [
      "Geschwister se folosește de obicei la plural.",
      "Pentru o singură persoană, alege Bruder sau Schwester."
    ],
    "important": [
      "Nu folosi ein Geschwister ca formă regulată de singular la nivel A1."
    ]
  },
  "index": 234
}
```

---

## Finding 45

**Audit ID:** `LRB081-0045`
**Finding Stable ID:** `g2/a1/ro|gleich|idx:243|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `gleich|idx:243`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Imediat • Egal","study.translation":"Imediat • Egal","study.explanation":"[\"Ideea principală: gleich temporal înseamnă imediat, comparativ egal.\",\"Când vine vorba de timp, gleich = imediat/într-un moment (Ich komme gleich. = Vin imediat.).\",\"Când vine vorba de comparație, gleich = egal/același (die gleiche Farbe = aceeași culoare).\",\"Gleich poate fi folosit și ca prepoziție cu dativul, adică ca (gleich mir = ca mine).\"]","study.examples":"[{\"de\":\"Ich komme gleich.\",\"lv\":\"Vin imediat.\"},{\"de\":\"Wir haben die gleiche Farbe.\",\"lv\":\"Avem aceeasi culoare.\"},{\"de\":\"Das Essen ist gleich fertig.\",\"lv\":\"Mâncarea va fi gata în curând.\"},{\"de\":\"Beide Wege sind gleich lang.\",\"lv\":\"Ambele căi au aceeași lungime.\"},{\"de\":\"Bis gleich!\",\"lv\":\"Pe curând!\"},{\"de\":\"Sie sind gleich groß.\",\"lv\":\"Au aceeasi inaltime.\"}]","study.tip":"[\"Peste un timp (într-o clipă) → acum.\",\"Pentru comparație (la fel) → la fel.\"]","study.important":"[\"Gleich = imediat (timp) SAU egal (comparație).\",\"Bis gleich! = ne vedem curând! — o frază comună de despărțire.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"gleich","lv":"imediat • egal","level":"A1","study":{"id":"a1-gleich","layout":"standardStudy","translation":"imediat • egal","explanation":["Ideea principală: gleich poate însemna «imediat» în contexte temporale și «egal» sau «același» în contexte comparative.","Când se referă la timp, gleich înseamnă «imediat» sau «într-o clipă» (Ich komme gleich. = Vin imediat.).","În comparații, gleich înseamnă «egal» sau «același» (die gleiche Farbe = aceeași culoare)."],"examples":[{"de":"Ich komme gleich.","lv":"Vin imediat."},{"de":"Wir haben die gleiche Farbe.","lv":"Avem aceeași culoare."},{"de":"Das Essen ist gleich fertig.","lv":"Mâncarea va fi gata în curând."},{"de":"Beide Wege sind gleich lang.","lv":"Ambele drumuri au aceeași lungime."},{"de":"Bis gleich!","lv":"Pe curând!"},{"de":"Sie sind gleich groß.","lv":"Au aceeași înălțime."}],"tip":["Într-o clipă → acum sau foarte curând.","În comparații → egal sau la fel."],"important":["Gleich = «imediat» în contexte temporale sau «egal» în comparații.","Bis gleich! = «Ne vedem curând!» și este o formulă obișnuită de despărțire."]}}
**Note:** Pentru DE „gleich”, am păstrat cele două sensuri românești principale și am înlocuit formulările nefirești, inclusiv exemplul cu „aceeași culoare”.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gleich",
  "lv": "imediat • egal",
  "level": "A1",
  "study": {
    "id": "a1-gleich",
    "layout": "standardStudy",
    "translation": "imediat • egal",
    "explanation": [
      "Ideea principală: gleich poate însemna «imediat» în contexte temporale și «egal» sau «același» în contexte comparative.",
      "Când se referă la timp, gleich înseamnă «imediat» sau «într-o clipă» (Ich komme gleich. = Vin imediat.).",
      "În comparații, gleich înseamnă «egal» sau «același» (die gleiche Farbe = aceeași culoare)."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "Vin imediat."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "Avem aceeași culoare."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "Mâncarea va fi gata în curând."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "Ambele drumuri au aceeași lungime."
      },
      {
        "de": "Bis gleich!",
        "lv": "Pe curând!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "Au aceeași înălțime."
      }
    ],
    "tip": [
      "Într-o clipă → acum sau foarte curând.",
      "În comparații → egal sau la fel."
    ],
    "important": [
      "Gleich = «imediat» în contexte temporale sau «egal» în comparații.",
      "Bis gleich! = «Ne vedem curând!» și este o formulă obișnuită de despărțire."
    ]
  },
  "index": 243
}
```

---

## Finding 46

**Audit ID:** `LRB081-0046`
**Finding Stable ID:** `g2/a1/ro|groß|idx:250|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `groß|idx:250`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Mare","study.translation":"Mare","study.explanation":"[\"Ideea principala: Mari ca marime sau pentru o persoana - inalta ca inaltime.\",\"Groß înseamnă în primul rând: dimensiune mare.\",\"Deseori caracterizat prin: dimensiunea totală.\"]","study.examples":"[{\"de\":\"Das Haus ist groß.\",\"lv\":\"Casa este mare.\"},{\"de\":\"Berlin ist eine große Stadt.\",\"lv\":\"Casa este mare.\"},{\"de\":\"Er ist groß.\",\"lv\":\"El este înalt.\"},{\"de\":\"Das Zimmer ist groß.\",\"lv\":\"Camera este mare.\"}]","study.tip":"[\"Groß = mare\",\"Folosiți groß atunci când contextul se potrivește cu acest sens.\"]","study.important":"[\"Pentru o persoană, Er ist groß înseamnă înalt.\",\"Groß = mare.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"groß","lv":"mare","level":"A1","study":{"id":"a1-gross-study","layout":"standardStudy","translation":"mare","explanation":["Ideea principală: groß descrie o dimensiune mare, iar despre o persoană poate însemna «înalt».","Groß înseamnă în primul rând «mare» ca dimensiune.","Despre o persoană, groß se referă de obicei la înălțime și se traduce prin «înalt»."],"examples":[{"de":"Das Haus ist groß.","lv":"Casa este mare."},{"de":"Berlin ist eine große Stadt.","lv":"Berlinul este un oraș mare."},{"de":"Er ist groß.","lv":"El este înalt."},{"de":"Das Zimmer ist groß.","lv":"Camera este mare."}],"tip":["Groß = mare.","Despre o persoană, groß se traduce de obicei prin «înalt»."],"important":["Pentru o persoană, Er ist groß înseamnă «El este înalt».","Groß = mare sau înalt, în funcție de context."]}}
**Note:** Pentru DE „groß”, am corectat exemplul despre Berlin, care avea sensul copiat de la casă, și am clarificat traducerea pentru persoane.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "groß",
  "lv": "mare",
  "level": "A1",
  "study": {
    "id": "a1-gross-study",
    "layout": "standardStudy",
    "translation": "mare",
    "explanation": [
      "Ideea principală: groß descrie o dimensiune mare, iar despre o persoană poate însemna «înalt».",
      "Groß înseamnă în primul rând «mare» ca dimensiune.",
      "Despre o persoană, groß se referă de obicei la înălțime și se traduce prin «înalt»."
    ],
    "examples": [
      {
        "de": "Das Haus ist groß.",
        "lv": "Casa este mare."
      },
      {
        "de": "Berlin ist eine große Stadt.",
        "lv": "Berlinul este un oraș mare."
      },
      {
        "de": "Er ist groß.",
        "lv": "El este înalt."
      },
      {
        "de": "Das Zimmer ist groß.",
        "lv": "Camera este mare."
      }
    ],
    "tip": [
      "Groß = mare.",
      "Despre o persoană, groß se traduce de obicei prin «înalt»."
    ],
    "important": [
      "Pentru o persoană, Er ist groß înseamnă «El este înalt».",
      "Groß = mare sau înalt, în funcție de context."
    ]
  },
  "index": 250
}
```

---

## Finding 47

**Audit ID:** `LRB081-0047`
**Finding Stable ID:** `g2/a1/ro|Großeltern|idx:251|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `Großeltern|idx:251`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"bunici","study.translation":"bunici","study.explanation":"[\"Ideea principală: Großeltern înseamnă bunica şi bunicul împreună.\",\"Acest cuvânt se foloseşte la plural.\",\"În singular se foloseşte Großmutter sau Großvater.\"]","study.examples":"[{\"de\":\"Meine Großeltern wohnen auf dem Land.\",\"lv\":\"bunicii mei locuiesc la ţară.\"},{\"de\":\"Ich besuche meine Großeltern.\",\"lv\":\"îi vizitez pe bunicii mei.\"}]","study.comparison":"[{\"word\":\"Großeltern\",\"meaning\":\"bunici\",\"example\":\"bunicii mei – mani vecvecāki\"},{\"word\":\"Großmutter\",\"meaning\":\"Bunica\",\"example\":\"bunica mea – mana vecmāmiņa\"},{\"word\":\"Großvater\",\"meaning\":\"Bunicul\",\"example\":\"bunicul meu – mans vectētiņš\"}]","study.tip":"[\"Großeltern este plural.\",\"Pentru o persoană foloseşte Großmutter sau Großvater.\"]","study.important":"[\"die Großeltern = bunici.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"Großeltern","de_article":"die","lv":"bunici","level":"A1","study":{"id":"a1-grosseltern-study","layout":"standardStudy","translation":"bunici","explanation":["Ideea principală: Großeltern înseamnă «bunici», adică bunica și bunicul împreună.","Acest cuvânt se folosește la plural.","La singular se folosesc Großmutter pentru «bunică» și Großvater pentru «bunic»."],"examples":[{"de":"Meine Großeltern wohnen auf dem Land.","lv":"Bunicii mei locuiesc la țară."},{"de":"Ich besuche meine Großeltern.","lv":"Îi vizitez pe bunicii mei."}],"comparison":[{"word":"Großeltern","meaning":"bunici","example":"meine Großeltern – bunicii mei"},{"word":"Großmutter","meaning":"bunică","example":"meine Großmutter – bunica mea"},{"word":"Großvater","meaning":"bunic","example":"mein Großvater – bunicul meu"}],"tip":["Großeltern este un substantiv la plural.","Pentru o singură persoană se folosesc Großmutter sau Großvater."],"important":["die Großeltern = bunicii sau bunici."]}}
**Note:** Pentru DE „Großeltern”, am eliminat fragmentele letone din exemple și comparații și am redat corect formele românești pentru bunică și bunic.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Großeltern",
  "de_article": "die",
  "lv": "bunici",
  "level": "A1",
  "study": {
    "id": "a1-grosseltern-study",
    "layout": "standardStudy",
    "translation": "bunici",
    "explanation": [
      "Ideea principală: Großeltern înseamnă «bunici», adică bunica și bunicul împreună.",
      "Acest cuvânt se folosește la plural.",
      "La singular se folosesc Großmutter pentru «bunică» și Großvater pentru «bunic»."
    ],
    "examples": [
      {
        "de": "Meine Großeltern wohnen auf dem Land.",
        "lv": "Bunicii mei locuiesc la țară."
      },
      {
        "de": "Ich besuche meine Großeltern.",
        "lv": "Îi vizitez pe bunicii mei."
      }
    ],
    "comparison": [
      {
        "word": "Großeltern",
        "meaning": "bunici",
        "example": "meine Großeltern – bunicii mei"
      },
      {
        "word": "Großmutter",
        "meaning": "bunică",
        "example": "meine Großmutter – bunica mea"
      },
      {
        "word": "Großvater",
        "meaning": "bunic",
        "example": "mein Großvater – bunicul meu"
      }
    ],
    "tip": [
      "Großeltern este un substantiv la plural.",
      "Pentru o singură persoană se folosesc Großmutter sau Großvater."
    ],
    "important": [
      "die Großeltern = bunicii sau bunici."
    ]
  },
  "index": 251
}
```

---

## Finding 48

**Audit ID:** `LRB081-0048`
**Finding Stable ID:** `g2/a1/ro|gut|idx:259|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `gut|idx:259`
**Field / path:** `lv/study`
**Severity:** CRITICAL
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Bun","study.translation":"Bun","study.explanation":"[\"Ideea principală: gut este un adjectiv/adverb - bine, reușit, bine.\",\"Gut descrie calitatea, sănătatea sau cum merge ceva (Es geht mir gut. = I'm doing well.).\",\"În expresia politicoasă guten Tag/Abend/Morgen gut schimbă finalul după inflexiune.\",\"Dacă gut descrie un verb, acesta este un adverb (gut schwimmen = a înota bine).\",\"A nu se confunda cu das Gut - este un substantiv (proprietate, conac) cu majusculă și articol.\"]","study.examples":"[{\"de\":\"Das Essen ist gut.\",\"lv\":\"Mancarea este buna.\"},{\"de\":\"Wie geht es dir? – Gut, danke!\",\"lv\":\"Ce mai faci - ok, multumesc!\"},{\"de\":\"Er spricht gut Deutsch.\",\"lv\":\"Vorbeste bine germana.\"},{\"de\":\"Guten Morgen!\",\"lv\":\"Bună dimineaţa!\"},{\"de\":\"Das ist eine gute Idee.\",\"lv\":\"Este o idee bună.\"},{\"de\":\"Alles ist gut.\",\"lv\":\"Totul este bine.\"}]","study.tip":"[\"Gut fără articol este un adjectiv/adverb - bine/bine.\",\"Das Gut cu o literă mare și un articol este un cuvânt complet diferit - un substantiv (proprietate, conac).\"]","study.important":"[\"Gut = bun/bine (adjectiv/adjectiv).\",\"Das Gut = proprietate/conac (substantiv) - a nu se confunda cu gut.\",\"Guten Tag/Morgen/Abend - modificări ale intestinului care se termină după inflexiune.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"gut","lv":"bun • bine","level":"A1","study":{"id":"a1-gut-study","layout":"standardStudy","translation":"bun • bine","explanation":["Ideea principală: gut este un adjectiv sau adverb și poate însemna «bun» sau «bine».","Gut descrie calitatea, starea de sănătate sau modul în care decurge ceva (Es geht mir gut. = Mă simt bine.).","În expresii precum guten Tag, guten Abend și guten Morgen, forma gut se modifică în funcție de flexiune.","Când gut determină un verb, este adverb (gut schwimmen = a înota bine).","Das Gut este un substantiv diferit și poate însemna «proprietate» sau «moșie»."],"examples":[{"de":"Das Essen ist gut.","lv":"Mâncarea este bună."},{"de":"Wie geht es dir? – Gut, danke!","lv":"Ce mai faci? – Bine, mulțumesc!"},{"de":"Er spricht gut Deutsch.","lv":"Vorbește bine germana."},{"de":"Guten Morgen!","lv":"Bună dimineața!"},{"de":"Das ist eine gute Idee.","lv":"Este o idee bună."},{"de":"Alles ist gut.","lv":"Totul este bine."}],"tip":["Gut fără articol este un adjectiv sau adverb și poate însemna «bun» sau «bine».","Das Gut, cu majusculă și articol, este un substantiv care înseamnă «proprietate» sau «moșie»."],"important":["Gut = bun sau bine, în funcție de context.","Das Gut = proprietate sau moșie; nu trebuie confundat cu gut.","Guten Tag, Guten Morgen și Guten Abend sunt forme flexionate ale lui gut."]}}
**Note:** Pentru DE „gut”, am înlocuit exemplul în engleză și formularea eronată despre „intestin” cu explicații românești despre adjectiv, adverb și flexiune.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gut",
  "lv": "bun • bine",
  "level": "A1",
  "study": {
    "id": "a1-gut-study",
    "layout": "standardStudy",
    "translation": "bun • bine",
    "explanation": [
      "Ideea principală: gut este un adjectiv sau adverb și poate însemna «bun» sau «bine».",
      "Gut descrie calitatea, starea de sănătate sau modul în care decurge ceva (Es geht mir gut. = Mă simt bine.).",
      "În expresii precum guten Tag, guten Abend și guten Morgen, forma gut se modifică în funcție de flexiune.",
      "Când gut determină un verb, este adverb (gut schwimmen = a înota bine).",
      "Das Gut este un substantiv diferit și poate însemna «proprietate» sau «moșie»."
    ],
    "examples": [
      {
        "de": "Das Essen ist gut.",
        "lv": "Mâncarea este bună."
      },
      {
        "de": "Wie geht es dir? – Gut, danke!",
        "lv": "Ce mai faci? – Bine, mulțumesc!"
      },
      {
        "de": "Er spricht gut Deutsch.",
        "lv": "Vorbește bine germana."
      },
      {
        "de": "Guten Morgen!",
        "lv": "Bună dimineața!"
      },
      {
        "de": "Das ist eine gute Idee.",
        "lv": "Este o idee bună."
      },
      {
        "de": "Alles ist gut.",
        "lv": "Totul este bine."
      }
    ],
    "tip": [
      "Gut fără articol este un adjectiv sau adverb și poate însemna «bun» sau «bine».",
      "Das Gut, cu majusculă și articol, este un substantiv care înseamnă «proprietate» sau «moșie»."
    ],
    "important": [
      "Gut = bun sau bine, în funcție de context.",
      "Das Gut = proprietate sau moșie; nu trebuie confundat cu gut.",
      "Guten Tag, Guten Morgen și Guten Abend sunt forme flexionate ale lui gut."
    ]
  },
  "index": 259
}
```

---

## Finding 49

**Audit ID:** `LRB081-0049`
**Finding Stable ID:** `g2/a1/ro|haben|idx:261|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `haben|idx:261`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Am","study.translation":"Am","study.explanation":"[\"Ideea principală: haben înseamnă că cineva are sau are acces la ceva.\",\"Construcția dativului leton „am / tu ai” este nominativ + haben în germană: Ich habe ..., Du hast ..., Er hat ... — nu *mir habe.\",\"Haben este urmat de acuzativ: Ich habe ein Auto. = Am o mașină.\",\"Haben este folosit și ca verb auxiliar la Perfect: Ich habe gelernt.\"]","study.examples":"[{\"de\":\"Ich habe ein Auto.\",\"lv\":\"Am o mașină\"},{\"de\":\"Hast du Zeit?\",\"lv\":\"Ai timp?\"},{\"de\":\"Wir haben Hunger.\",\"lv\":\"Ne este foame.\"},{\"de\":\"Ich habe das gemacht.\",\"lv\":\"Am facut\"}]","study.comparison":"[{\"word\":\"haben\",\"meaning\":\"Am\",\"example\":\"Am timp. = Man ir laiks.\"},{\"word\":\"sein\",\"meaning\":\"A fi\",\"example\":\"Sunt aici. = Es esmu šeit.\"},{\"word\":\"bekommen\",\"meaning\":\"A primi\",\"example\":\"Primesc un cadou. = Es saņemu dāvanu.\"},{\"word\":\"machen\",\"meaning\":\"A face/a face\",\"example\":\"O fac. = Es to daru.\"}]","study.tip":"{\"text\":\"Amintiți-vă: Ich habe → I have.\"}","study.important":"[\"Letonă „am” = germană Ich habe + acuzativ. Nu folosi cazul dativului: gresit *mir habe.\",\"Cu sein și dativ: Mir ist kalt. = Mi-e frig. (nu este haben!)\",\"Perfect: Ich habe gelernt = am învățat.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"haben","lv":"a avea","level":"A1","study":{"id":"a1-haben","layout":"standardStudy","translation":"a avea","explanation":["Ideea principală: haben înseamnă «a avea» și exprimă posesia sau deținerea.","În germană se spune Ich habe ..., Du hast ..., Er hat ...; nu se folosește construcția *mir habe.","Haben este urmat de obicei de un complement în acuzativ: Ich habe ein Auto. = Am o mașină.","Haben este folosit și ca verb auxiliar la perfect: Ich habe gelernt. = Am învățat."],"examples":[{"de":"Ich habe ein Auto.","lv":"Am o mașină."},{"de":"Hast du Zeit?","lv":"Ai timp?"},{"de":"Wir haben Hunger.","lv":"Ne este foame."},{"de":"Ich habe das gemacht.","lv":"Am făcut asta."}],"comparison":[{"word":"haben","meaning":"a avea","example":"Ich habe Zeit. – Am timp."},{"word":"sein","meaning":"a fi","example":"Ich bin hier. – Sunt aici."},{"word":"bekommen","meaning":"a primi","example":"Ich bekomme ein Geschenk. – Primesc un cadou."},{"word":"machen","meaning":"a face","example":"Ich mache das. – O fac."}],"tip":{"text":"Reține: Ich habe = eu am."},"important":["Germanul Ich habe înseamnă «eu am» și este urmat adesea de un complement în acuzativ.","Cu sein și dativ se spune Mir ist kalt. = Mi-e frig., nu se folosește haben.","La perfect, Ich habe gelernt înseamnă «am învățat»."]}}
**Note:** Pentru DE „haben”, am eliminat fragmentele letone din comparații și am corectat explicația despre acuzativ și auxiliarul de perfect.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "haben",
  "lv": "a avea",
  "level": "A1",
  "study": {
    "id": "a1-haben",
    "layout": "standardStudy",
    "translation": "a avea",
    "explanation": [
      "Ideea principală: haben înseamnă «a avea» și exprimă posesia sau deținerea.",
      "În germană se spune Ich habe ..., Du hast ..., Er hat ...; nu se folosește construcția *mir habe.",
      "Haben este urmat de obicei de un complement în acuzativ: Ich habe ein Auto. = Am o mașină.",
      "Haben este folosit și ca verb auxiliar la perfect: Ich habe gelernt. = Am învățat."
    ],
    "examples": [
      {
        "de": "Ich habe ein Auto.",
        "lv": "Am o mașină."
      },
      {
        "de": "Hast du Zeit?",
        "lv": "Ai timp?"
      },
      {
        "de": "Wir haben Hunger.",
        "lv": "Ne este foame."
      },
      {
        "de": "Ich habe das gemacht.",
        "lv": "Am făcut asta."
      }
    ],
    "comparison": [
      {
        "word": "haben",
        "meaning": "a avea",
        "example": "Ich habe Zeit. – Am timp."
      },
      {
        "word": "sein",
        "meaning": "a fi",
        "example": "Ich bin hier. – Sunt aici."
      },
      {
        "word": "bekommen",
        "meaning": "a primi",
        "example": "Ich bekomme ein Geschenk. – Primesc un cadou."
      },
      {
        "word": "machen",
        "meaning": "a face",
        "example": "Ich mache das. – O fac."
      }
    ],
    "tip": {
      "text": "Reține: Ich habe = eu am."
    },
    "important": [
      "Germanul Ich habe înseamnă «eu am» și este urmat adesea de un complement în acuzativ.",
      "Cu sein și dativ se spune Mir ist kalt. = Mi-e frig., nu se folosește haben.",
      "La perfect, Ich habe gelernt înseamnă «am învățat»."
    ]
  },
  "index": 261
}
```

---

## Finding 50

**Audit ID:** `LRB081-0050`
**Finding Stable ID:** `g2/a1/ro|halten|idx:265|lv, study|LANGUAGE_MISMATCH|gpt-5.6-luna`
**Lang:** ro
**Card:** `halten|idx:265`
**Field / path:** `lv, study`
**Severity:** HIGH
**Category:** WRONG_OR_MIXED_TARGET_LANGUAGE
**CURRENT (captured scope):** {"lv":"Ţineţi • Opriţi","study.translation":"Ţineţi • Opriţi","study.explanation":"[\"Ideea principală: stopen înseamnă a ține, dar cu transport sau mișcare poate însemna a opri sau opri.\",\"Cu un obiect în mână, halten este de obicei de ținut.\",\"Cu autobuzul, trenul sau mașina, halten înseamnă adesea a opri.\",\"În sintagma de opinie ich halte das für... înseamnă a considera ca.\"]","study.examples":"[{\"de\":\"Ich halte die Tasche.\",\"lv\":\"Țin o geantă\"},{\"de\":\"Der Bus hält hier.\",\"lv\":\"Autobuzul oprește aici.\"},{\"de\":\"Bitte halten Sie an.\",\"lv\":\"Te rog opri\"},{\"de\":\"Ich halte das für richtig.\",\"lv\":\"Consider că este corect.\"}]","study.comparison":"[{\"word\":\"halten\",\"meaning\":\"Ține / opri\",\"example\":\"Autobuzul se opreşte. = Autobuss pietur.\"},{\"word\":\"nehmen\",\"meaning\":\"A lua\",\"example\":\"Iau geanta. = Es ņemu somu.\"},{\"word\":\"anhalten\",\"meaning\":\"A opri\",\"example\":\"Te rog opreşte-te. = Lūdzu, apstājieties.\"},{\"word\":\"denken\",\"meaning\":\"A gândi\",\"example\":\"Cred că este corect. = Es domāju, ka tas ir pareizi.\"}]","study.tip":"{\"text\":\"Amintiți-vă: în mână → halten • Transport → hält/stops.\"}","study.important":"[\"Halten nu este doar „ține”. Cu transportul, asta înseamnă adesea oprire.\",\"Ich halte das für... este o frază de opinie: „O consider ca...”.\",\"Te rog opreşte-te foloseşte verbul separat anhalten.\"]"}
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"de":"halten","lv":"a ține • a se opri","level":"A1","study":{"id":"a1-halten","layout":"standardStudy","translation":"a ține • a se opri","explanation":["Ideea principală: halten înseamnă «a ține», iar despre un mijloc de transport poate însemna «a se opri».","Când este vorba despre un obiect ținut în mână, halten se traduce de obicei prin «a ține».","Despre autobuz, tren sau mașină, halten înseamnă adesea «a se opri».","În expresia ich halte das für ..., halten înseamnă «a considera»."],"examples":[{"de":"Ich halte die Tasche.","lv":"Țin geanta."},{"de":"Der Bus hält hier.","lv":"Autobuzul se oprește aici."},{"de":"Bitte halten Sie an.","lv":"Vă rog să vă opriți."},{"de":"Ich halte das für richtig.","lv":"Consider că este corect."}],"comparison":[{"word":"halten","meaning":"a ține • a se opri","example":"Der Bus hält. – Autobuzul se oprește."},{"word":"nehmen","meaning":"a lua","example":"Ich nehme die Tasche. – Iau geanta."},{"word":"anhalten","meaning":"a se opri • a opri","example":"Bitte halten Sie an. – Vă rog să vă opriți."},{"word":"denken","meaning":"a gândi","example":"Ich denke, das ist richtig. – Cred că este corect."}],"tip":{"text":"Reține: un obiect în mână → halten; un mijloc de transport → hält, adică se oprește."},"important":["Halten nu înseamnă doar «a ține»; despre mijloace de transport înseamnă adesea «a se opri».","Ich halte das für ... este o expresie folosită pentru a exprima o opinie: «Consider că ...».","Pentru sensul «oprește-te», se folosește verbul separabil anhalten."]}}
**Note:** Pentru DE „halten”, am înlocuit „stopen”, englezescul „stops” și toate fragmentele letone cu forme românești corecte pentru «a ține», «a opri» și «a considera».

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "halten",
  "lv": "a ține • a se opri",
  "level": "A1",
  "study": {
    "id": "a1-halten",
    "layout": "standardStudy",
    "translation": "a ține • a se opri",
    "explanation": [
      "Ideea principală: halten înseamnă «a ține», iar despre un mijloc de transport poate însemna «a se opri».",
      "Când este vorba despre un obiect ținut în mână, halten se traduce de obicei prin «a ține».",
      "Despre autobuz, tren sau mașină, halten înseamnă adesea «a se opri».",
      "În expresia ich halte das für ..., halten înseamnă «a considera»."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "Țin geanta."
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Autobuzul se oprește aici."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Vă rog să vă opriți."
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Consider că este corect."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "a ține • a se opri",
        "example": "Der Bus hält. – Autobuzul se oprește."
      },
      {
        "word": "nehmen",
        "meaning": "a lua",
        "example": "Ich nehme die Tasche. – Iau geanta."
      },
      {
        "word": "anhalten",
        "meaning": "a se opri • a opri",
        "example": "Bitte halten Sie an. – Vă rog să vă opriți."
      },
      {
        "word": "denken",
        "meaning": "a gândi",
        "example": "Ich denke, das ist richtig. – Cred că este corect."
      }
    ],
    "tip": {
      "text": "Reține: un obiect în mână → halten; un mijloc de transport → hält, adică se oprește."
    },
    "important": [
      "Halten nu înseamnă doar «a ține»; despre mijloace de transport înseamnă adesea «a se opri».",
      "Ich halte das für ... este o expresie folosită pentru a exprima o opinie: «Consider că ...».",
      "Pentru sensul «oprește-te», se folosește verbul separabil anhalten."
    ]
  },
  "index": 265
}
```

---

