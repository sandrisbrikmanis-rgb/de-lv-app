# G2/A1 LRB LRB-084 — OWNER VIEW

**Batch:** LRB-084
**Rows:** 50/50
**Languages:** RU 50, SK 0
**Direction:** DESCENDING
**Reserved for:** PC2
**OWNER_AUTHORIZATION_STATUS:** APPROVED
**Linguistic reviewer:** gpt-5.6-luna
**Generated:** 2026-09-13T16:00:52.609Z
**Source commit:** `a27d110b53de418321b3633b5f2544aaa1432076`
**Branch:** `cursor/lrb-084-owner-authorization-ed35`
**Overrides SHA256:** `fbec11c89d7b1c0846d07c5b1b2c01ce2a6ed4ce23d10b5fa914450b54870661`
**Classification:** `G2_A1_LRB_OWNER_APPROVED_OVERRIDES_APPLIED`

**Summary:** 50 LABOT / 0 NELABOT / 0 PENDING

## Finding 1

**Audit ID:** `LRB084-0001`
**Finding Stable ID:** `g2/a1/ru|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-fahren`
**Field / path:** `a1.card.a1-fahren.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Водить • Вести • Забирать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Ехать • Ездить • Везти","study":{"id":"a1-fahren","layout":"standardStudy","translation":"Ехать • Ездить • Везти","explanation":["Основная идея: fahren означает ехать или ездить на транспорте, а в некоторых предложениях — везти или отвозить кого-либо.","fahren употребляют при передвижении на автомобиле, автобусе, поезде, велосипеде или другом транспортном средстве.","Если в предложении есть человек как объект, fahren может означать «везти» или «отвозить».","Если передвижение происходит пешком, обычно употребляют gehen или laufen."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Я еду в Берлин."},{"de":"Ich fahre mit dem Auto.","lv":"Я еду на машине."},{"de":"Ich fahre meine Tochter zur Schule.","lv":"Я отвожу свою дочь в школу."},{"de":"Ich fahre dich nach Hause.","lv":"Я отвожу тебя домой."},{"de":"Wir fahren morgen nach München.","lv":"Завтра мы едем в Мюнхен."}],"comparison":[{"word":"fahren","meaning":"Ехать • Ездить на транспорте","example":"Ich fahre mit dem Bus. – Я еду на автобусе."},{"word":"gehen","meaning":"Идти пешком","example":"Ich gehe nach Hause. – Я иду домой."},{"word":"laufen","meaning":"Бежать • Идти","example":"Er läuft schnell. – Он быстро бежит."},{"word":"bringen","meaning":"Приносить • Доставлять","example":"Ich bringe das Buch. – Я приношу книгу."},{"word":"mitnehmen","meaning":"Брать с собой","example":"Ich nehme dich mit. – Я беру тебя с собой."}],"tip":{"text":"Запомните: транспортное средство → fahren; пешком → gehen."},"important":{"text":"fahren означает не только «ехать»","example":"В зависимости от контекста fahren может означать «ехать», «ездить», «везти» или «отвозить»."}}}
**Note:** Pilna RU kartīte «fahren»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

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

## Finding 2

**Audit ID:** `LRB084-0002`
**Finding Stable ID:** `g2/a1/ru|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-finden`
**Field / path:** `a1.card.a1-finden.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Найти • Рассмотреть
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Находить • Считать","study":{"id":"a1-finden","layout":"standardStudy","translation":"Находить • Считать","explanation":["Основная идея: finden чаще всего означает «находить».","В разговорной речи finden очень часто означает также «считать» или выражает мнение о чём-либо.","Если речь идёт о потерянной вещи, finden переводится как «находить».","Если речь идёт о мнении, finden переводится как «считать» или конструкцией «мне кажется»."],"examples":[{"de":"Ich finde meinen Schlüssel.","lv":"Я нахожу свой ключ."},{"de":"Ich finde das gut.","lv":"Я считаю это хорошим."},{"de":"Wie findest du den Film?","lv":"Что ты думаешь о фильме?"}],"comparison":[{"word":"finden","meaning":"Находить • Считать","example":"Ich finde das gut. – Я считаю это хорошим."}],"tip":{"text":"Запомните: потерянная вещь → finden «находить»; мнение → ich finde… «я считаю…»."},"important":["finden означает не только «находить».","Ich finde das gut означает «Я считаю это хорошим» или «Мне это нравится», а не буквальное «Я нахожу это хорошо»."]}}
**Note:** Pilna RU kartīte «finden»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "finden",
  "lv": "Находить • Считать",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "Находить • Считать",
    "explanation": [
      "Основная идея: finden чаще всего означает «находить».",
      "В разговорной речи finden очень часто означает также «считать» или выражает мнение о чём-либо.",
      "Если речь идёт о потерянной вещи, finden переводится как «находить».",
      "Если речь идёт о мнении, finden переводится как «считать» или конструкцией «мне кажется»."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Я нахожу свой ключ."
      },
      {
        "de": "Ich finde das gut.",
        "lv": "Я считаю это хорошим."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Что ты думаешь о фильме?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "Находить • Считать",
        "example": "Ich finde das gut. – Я считаю это хорошим."
      }
    ],
    "tip": {
      "text": "Запомните: потерянная вещь → finden «находить»; мнение → ich finde… «я считаю…»."
    },
    "important": [
      "finden означает не только «находить».",
      "Ich finde das gut означает «Я считаю это хорошим» или «Мне это нравится», а не буквальное «Я нахожу это хорошо»."
    ]
  },
  "index": 187
}
```

---

## Finding 3

**Audit ID:** `LRB084-0003`
**Finding Stable ID:** `g2/a1/ru|a1-finden|a1.card.a1-finden.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-finden`
**Field / path:** `a1.card.a1-finden.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Найти • Рассмотреть
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Находить • Считать","study":{"id":"a1-finden","layout":"standardStudy","translation":"Находить • Считать","explanation":["Основная идея: finden чаще всего означает «находить».","В разговорной речи finden очень часто означает также «считать» или выражает мнение о чём-либо.","Если речь идёт о потерянной вещи, finden переводится как «находить».","Если речь идёт о мнении, finden переводится как «считать» или конструкцией «мне кажется»."],"examples":[{"de":"Ich finde meinen Schlüssel.","lv":"Я нахожу свой ключ."},{"de":"Ich finde das gut.","lv":"Я считаю это хорошим."},{"de":"Wie findest du den Film?","lv":"Что ты думаешь о фильме?"}],"comparison":[{"word":"finden","meaning":"Находить • Считать","example":"Ich finde das gut. – Я считаю это хорошим."}],"tip":{"text":"Запомните: потерянная вещь → finden «находить»; мнение → ich finde… «я считаю…»."},"important":["finden означает не только «находить».","Ich finde das gut означает «Я считаю это хорошим» или «Мне это нравится», а не буквальное «Я нахожу это хорошо»."]}}
**Note:** Pilna RU kartīte «finden»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "finden",
  "lv": "Находить • Считать",
  "level": "A1",
  "study": {
    "id": "a1-finden",
    "layout": "standardStudy",
    "translation": "Находить • Считать",
    "explanation": [
      "Основная идея: finden чаще всего означает «находить».",
      "В разговорной речи finden очень часто означает также «считать» или выражает мнение о чём-либо.",
      "Если речь идёт о потерянной вещи, finden переводится как «находить».",
      "Если речь идёт о мнении, finden переводится как «считать» или конструкцией «мне кажется»."
    ],
    "examples": [
      {
        "de": "Ich finde meinen Schlüssel.",
        "lv": "Я нахожу свой ключ."
      },
      {
        "de": "Ich finde das gut.",
        "lv": "Я считаю это хорошим."
      },
      {
        "de": "Wie findest du den Film?",
        "lv": "Что ты думаешь о фильме?"
      }
    ],
    "comparison": [
      {
        "word": "finden",
        "meaning": "Находить • Считать",
        "example": "Ich finde das gut. – Я считаю это хорошим."
      }
    ],
    "tip": {
      "text": "Запомните: потерянная вещь → finden «находить»; мнение → ich finde… «я считаю…»."
    },
    "important": [
      "finden означает не только «находить».",
      "Ich finde das gut означает «Я считаю это хорошим» или «Мне это нравится», а не буквальное «Я нахожу это хорошо»."
    ]
  },
  "index": 187
}
```

---

## Finding 4

**Audit ID:** `LRB084-0004`
**Finding Stable ID:** `g2/a1/ru|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-frau`
**Field / path:** `a1.card.a1-frau.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Женщина • Жена
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Женщина • Жена","study":{"id":"a1-frau","layout":"standardStudy","translation":"Женщина • Жена","explanation":["Основная идея: die Frau может означать женщину или жену.","Если речь идёт просто о человеке женского пола, die Frau = «женщина».","Если речь идёт о супруге, die Frau = «жена» (meine Frau = моя жена).","Притяжательное местоимение (meine/deine/seine Frau) почти всегда указывает на жену, то есть супругу.","Множественное число: die Frauen.","У мужской формы der Mann такое же двойное значение: мужчина И муж."],"examples":[{"de":"Sie ist eine nette Frau.","lv":"Она приятная женщина."},{"de":"Das ist meine Frau.","lv":"Это моя жена."},{"de":"Wie viele Frauen sind hier?","lv":"Сколько здесь женщин?"},{"de":"Meine Frau arbeitet in Berlin.","lv":"Моя жена работает в Берлине."},{"de":"Die Frau trägt ein Kleid.","lv":"Женщина носит платье."},{"de":"Seine Frau ist Ärztin.","lv":"Его жена — врач."}],"tip":["С притяжательным местоимением (meine/deine/seine Frau) почти всегда имеется в виду жена.","Без притяжательного местоимения (die Frau, eine Frau) обычно имеется в виду женщина."],"important":["die Frau = «женщина» ИЛИ «жена» — в зависимости от контекста.","meine Frau = «моя жена», а не «моя женщина».","Множественное число: die Frauen."]}}
**Note:** Pilna RU kartīte «Frau»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Frau",
  "de_article": "die",
  "de_plural": "die Frauen",
  "lv": "Женщина • Жена",
  "level": "A1",
  "study": {
    "id": "a1-frau",
    "layout": "standardStudy",
    "translation": "Женщина • Жена",
    "explanation": [
      "Основная идея: die Frau может означать женщину или жену.",
      "Если речь идёт просто о человеке женского пола, die Frau = «женщина».",
      "Если речь идёт о супруге, die Frau = «жена» (meine Frau = моя жена).",
      "Притяжательное местоимение (meine/deine/seine Frau) почти всегда указывает на жену, то есть супругу.",
      "Множественное число: die Frauen.",
      "У мужской формы der Mann такое же двойное значение: мужчина И муж."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "Она приятная женщина."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "Это моя жена."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Сколько здесь женщин?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Моя жена работает в Берлине."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Женщина носит платье."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Его жена — врач."
      }
    ],
    "tip": [
      "С притяжательным местоимением (meine/deine/seine Frau) почти всегда имеется в виду жена.",
      "Без притяжательного местоимения (die Frau, eine Frau) обычно имеется в виду женщина."
    ],
    "important": [
      "die Frau = «женщина» ИЛИ «жена» — в зависимости от контекста.",
      "meine Frau = «моя жена», а не «моя женщина».",
      "Множественное число: die Frauen."
    ]
  },
  "index": 198
}
```

---

## Finding 5

**Audit ID:** `LRB084-0005`
**Finding Stable ID:** `g2/a1/ru|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-frau`
**Field / path:** `a1.card.a1-frau.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Женщина • Жена
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Женщина • Жена","study":{"id":"a1-frau","layout":"standardStudy","translation":"Женщина • Жена","explanation":["Основная идея: die Frau может означать женщину или жену.","Если речь идёт просто о человеке женского пола, die Frau = «женщина».","Если речь идёт о супруге, die Frau = «жена» (meine Frau = моя жена).","Притяжательное местоимение (meine/deine/seine Frau) почти всегда указывает на жену, то есть супругу.","Множественное число: die Frauen.","У мужской формы der Mann такое же двойное значение: мужчина И муж."],"examples":[{"de":"Sie ist eine nette Frau.","lv":"Она приятная женщина."},{"de":"Das ist meine Frau.","lv":"Это моя жена."},{"de":"Wie viele Frauen sind hier?","lv":"Сколько здесь женщин?"},{"de":"Meine Frau arbeitet in Berlin.","lv":"Моя жена работает в Берлине."},{"de":"Die Frau trägt ein Kleid.","lv":"Женщина носит платье."},{"de":"Seine Frau ist Ärztin.","lv":"Его жена — врач."}],"tip":["С притяжательным местоимением (meine/deine/seine Frau) почти всегда имеется в виду жена.","Без притяжательного местоимения (die Frau, eine Frau) обычно имеется в виду женщина."],"important":["die Frau = «женщина» ИЛИ «жена» — в зависимости от контекста.","meine Frau = «моя жена», а не «моя женщина».","Множественное число: die Frauen."]}}
**Note:** Pilna RU kartīte «Frau»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Frau",
  "de_article": "die",
  "de_plural": "die Frauen",
  "lv": "Женщина • Жена",
  "level": "A1",
  "study": {
    "id": "a1-frau",
    "layout": "standardStudy",
    "translation": "Женщина • Жена",
    "explanation": [
      "Основная идея: die Frau может означать женщину или жену.",
      "Если речь идёт просто о человеке женского пола, die Frau = «женщина».",
      "Если речь идёт о супруге, die Frau = «жена» (meine Frau = моя жена).",
      "Притяжательное местоимение (meine/deine/seine Frau) почти всегда указывает на жену, то есть супругу.",
      "Множественное число: die Frauen.",
      "У мужской формы der Mann такое же двойное значение: мужчина И муж."
    ],
    "examples": [
      {
        "de": "Sie ist eine nette Frau.",
        "lv": "Она приятная женщина."
      },
      {
        "de": "Das ist meine Frau.",
        "lv": "Это моя жена."
      },
      {
        "de": "Wie viele Frauen sind hier?",
        "lv": "Сколько здесь женщин?"
      },
      {
        "de": "Meine Frau arbeitet in Berlin.",
        "lv": "Моя жена работает в Берлине."
      },
      {
        "de": "Die Frau trägt ein Kleid.",
        "lv": "Женщина носит платье."
      },
      {
        "de": "Seine Frau ist Ärztin.",
        "lv": "Его жена — врач."
      }
    ],
    "tip": [
      "С притяжательным местоимением (meine/deine/seine Frau) почти всегда имеется в виду жена.",
      "Без притяжательного местоимения (die Frau, eine Frau) обычно имеется в виду женщина."
    ],
    "important": [
      "die Frau = «женщина» ИЛИ «жена» — в зависимости от контекста.",
      "meine Frau = «моя жена», а не «моя женщина».",
      "Множественное число: die Frauen."
    ]
  },
  "index": 198
}
```

---

## Finding 6

**Audit ID:** `LRB084-0006`
**Finding Stable ID:** `g2/a1/ru|a1-fuer|a1.card.a1-fuer.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-fuer`
**Field / path:** `a1.card.a1-fuer.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Для • Для
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Для • За","study":{"id":"a1-fuer","layout":"standardStudy","translation":"Для • За","explanation":["Основная идея: für — предлог, который всегда требует винительного падежа; по-русски он обычно переводится как «для» или «за».","При указании получателя или назначения für = «для» (für dich = для тебя).","При указании обмена, платы или причины für = «за» (danke für das Geschenk = спасибо за подарок).","für всегда требует винительного падежа независимо от значения."],"examples":[{"de":"Das ist für dich.","lv":"Это для тебя."},{"de":"Danke für die Hilfe.","lv":"Спасибо за помощь."},{"de":"Ich kaufe ein Geschenk für meine Mutter.","lv":"Я покупаю подарок для своей мамы."},{"de":"Was bezahlst du für das Auto?","lv":"Сколько ты платишь за машину?"},{"de":"Das Buch ist für Kinder.","lv":"Книга предназначена для детей."},{"de":"Für heute ist das genug.","lv":"На сегодня достаточно."}],"tip":["für всегда употребляется с винительным падежом независимо от значения.","Получатель или назначение → «для»; обмен, причина или плата → «за»."],"important":["für + Akkusativ всегда: например, für mich, für dich, für das Kind.","danke für / bezahlen für = «за», а не «для»."]}}
**Note:** Pilna RU kartīte «für»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "für",
  "lv": "Для • За",
  "level": "A1",
  "study": {
    "id": "a1-fuer",
    "layout": "standardStudy",
    "translation": "Для • За",
    "explanation": [
      "Основная идея: für — предлог, который всегда требует винительного падежа; по-русски он обычно переводится как «для» или «за».",
      "При указании получателя или назначения für = «для» (für dich = для тебя).",
      "При указании обмена, платы или причины für = «за» (danke für das Geschenk = спасибо за подарок).",
      "für всегда требует винительного падежа независимо от значения."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "Это для тебя."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Спасибо за помощь."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Я покупаю подарок для своей мамы."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Сколько ты платишь за машину?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Книга предназначена для детей."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "На сегодня достаточно."
      }
    ],
    "tip": [
      "für всегда употребляется с винительным падежом независимо от значения.",
      "Получатель или назначение → «для»; обмен, причина или плата → «за»."
    ],
    "important": [
      "für + Akkusativ всегда: например, für mich, für dich, für das Kind.",
      "danke für / bezahlen für = «за», а не «для»."
    ]
  },
  "index": 216
}
```

---

## Finding 7

**Audit ID:** `LRB084-0007`
**Finding Stable ID:** `g2/a1/ru|a1-fuer|a1.card.a1-fuer.study.tip[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-fuer`
**Field / path:** `a1.card.a1-fuer.study.tip[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Получатель/намерение → для • Обмен/причина/плата → за.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Для • За","study":{"id":"a1-fuer","layout":"standardStudy","translation":"Для • За","explanation":["Основная идея: für — предлог, который всегда требует винительного падежа; по-русски он обычно переводится как «для» или «за».","При указании получателя или назначения für = «для» (für dich = для тебя).","При указании обмена, платы или причины für = «за» (danke für das Geschenk = спасибо за подарок).","für всегда требует винительного падежа независимо от значения."],"examples":[{"de":"Das ist für dich.","lv":"Это для тебя."},{"de":"Danke für die Hilfe.","lv":"Спасибо за помощь."},{"de":"Ich kaufe ein Geschenk für meine Mutter.","lv":"Я покупаю подарок для своей мамы."},{"de":"Was bezahlst du für das Auto?","lv":"Сколько ты платишь за машину?"},{"de":"Das Buch ist für Kinder.","lv":"Книга предназначена для детей."},{"de":"Für heute ist das genug.","lv":"На сегодня достаточно."}],"tip":["für всегда употребляется с винительным падежом независимо от значения.","Получатель или назначение → «для»; обмен, причина или плата → «за»."],"important":["für + Akkusativ всегда: например, für mich, für dich, für das Kind.","danke für / bezahlen für = «за», а не «для»."]}}
**Note:** Pilna RU kartīte «für»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "für",
  "lv": "Для • За",
  "level": "A1",
  "study": {
    "id": "a1-fuer",
    "layout": "standardStudy",
    "translation": "Для • За",
    "explanation": [
      "Основная идея: für — предлог, который всегда требует винительного падежа; по-русски он обычно переводится как «для» или «за».",
      "При указании получателя или назначения für = «для» (für dich = для тебя).",
      "При указании обмена, платы или причины für = «за» (danke für das Geschenk = спасибо за подарок).",
      "für всегда требует винительного падежа независимо от значения."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "Это для тебя."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Спасибо за помощь."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Я покупаю подарок для своей мамы."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Сколько ты платишь за машину?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Книга предназначена для детей."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "На сегодня достаточно."
      }
    ],
    "tip": [
      "für всегда употребляется с винительным падежом независимо от значения.",
      "Получатель или назначение → «для»; обмен, причина или плата → «за»."
    ],
    "important": [
      "für + Akkusativ всегда: например, für mich, für dich, für das Kind.",
      "danke für / bezahlen für = «за», а не «для»."
    ]
  },
  "index": 216
}
```

---

## Finding 8

**Audit ID:** `LRB084-0008`
**Finding Stable ID:** `g2/a1/ru|a1-fuer|a1.card.a1-fuer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-fuer`
**Field / path:** `a1.card.a1-fuer.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Для • Для
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Для • За","study":{"id":"a1-fuer","layout":"standardStudy","translation":"Для • За","explanation":["Основная идея: für — предлог, который всегда требует винительного падежа; по-русски он обычно переводится как «для» или «за».","При указании получателя или назначения für = «для» (für dich = для тебя).","При указании обмена, платы или причины für = «за» (danke für das Geschenk = спасибо за подарок).","für всегда требует винительного падежа независимо от значения."],"examples":[{"de":"Das ist für dich.","lv":"Это для тебя."},{"de":"Danke für die Hilfe.","lv":"Спасибо за помощь."},{"de":"Ich kaufe ein Geschenk für meine Mutter.","lv":"Я покупаю подарок для своей мамы."},{"de":"Was bezahlst du für das Auto?","lv":"Сколько ты платишь за машину?"},{"de":"Das Buch ist für Kinder.","lv":"Книга предназначена для детей."},{"de":"Für heute ist das genug.","lv":"На сегодня достаточно."}],"tip":["für всегда употребляется с винительным падежом независимо от значения.","Получатель или назначение → «для»; обмен, причина или плата → «за»."],"important":["für + Akkusativ всегда: например, für mich, für dich, für das Kind.","danke für / bezahlen für = «за», а не «для»."]}}
**Note:** Pilna RU kartīte «für»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "für",
  "lv": "Для • За",
  "level": "A1",
  "study": {
    "id": "a1-fuer",
    "layout": "standardStudy",
    "translation": "Для • За",
    "explanation": [
      "Основная идея: für — предлог, который всегда требует винительного падежа; по-русски он обычно переводится как «для» или «за».",
      "При указании получателя или назначения für = «для» (für dich = для тебя).",
      "При указании обмена, платы или причины für = «за» (danke für das Geschenk = спасибо за подарок).",
      "für всегда требует винительного падежа независимо от значения."
    ],
    "examples": [
      {
        "de": "Das ist für dich.",
        "lv": "Это для тебя."
      },
      {
        "de": "Danke für die Hilfe.",
        "lv": "Спасибо за помощь."
      },
      {
        "de": "Ich kaufe ein Geschenk für meine Mutter.",
        "lv": "Я покупаю подарок для своей мамы."
      },
      {
        "de": "Was bezahlst du für das Auto?",
        "lv": "Сколько ты платишь за машину?"
      },
      {
        "de": "Das Buch ist für Kinder.",
        "lv": "Книга предназначена для детей."
      },
      {
        "de": "Für heute ist das genug.",
        "lv": "На сегодня достаточно."
      }
    ],
    "tip": [
      "für всегда употребляется с винительным падежом независимо от значения.",
      "Получатель или назначение → «для»; обмен, причина или плата → «за»."
    ],
    "important": [
      "für + Akkusativ всегда: например, für mich, für dich, für das Kind.",
      "danke für / bezahlen für = «за», а не «для»."
    ]
  },
  "index": 216
}
```

---

## Finding 9

**Audit ID:** `LRB084-0009`
**Finding Stable ID:** `g2/a1/ru|a1-ganz-study|a1.card.a1-ganz-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-ganz-study`
**Field / path:** `a1.card.a1-ganz-study.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** целый • полностью • совсем
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Целый • Весь • Совсем","study":{"id":"a1-ganz-study","layout":"standardStudy","translation":"Целый • Весь • Совсем","explanation":["Основная идея: ganz с существительным означает «целый» или «весь».","Перед прилагательным или наречием ganz может означать «совсем», «полностью» или «довольно».","ganz — не то же самое, что местоимение alles."],"examples":[{"de":"Ich arbeite den ganzen Tag.","lv":"Я работаю весь день."},{"de":"Das ganze Haus ist sauber.","lv":"Весь дом чистый."},{"de":"Das ist ganz sicher.","lv":"Это совершенно безопасно."},{"de":"Das Essen ist ganz gut.","lv":"Еда довольно хорошая."}],"comparison":[{"word":"ganz","meaning":"Целый • Весь • Совсем","example":"der ganze Tag – весь день"},{"word":"alles","meaning":"Всё","example":"Alles ist gut. – Всё в порядке."}],"tip":["Перед существительным ganz часто означает «весь» или «целый».","Перед прилагательным ganz часто означает «совсем» или «довольно»."],"important":["der ganze Tag = «весь день».","alles = «всё» как местоимение."]}}
**Note:** Pilna RU kartīte «ganz»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ganz",
  "lv": "Целый • Весь • Совсем",
  "level": "A1",
  "study": {
    "id": "a1-ganz-study",
    "layout": "standardStudy",
    "translation": "Целый • Весь • Совсем",
    "explanation": [
      "Основная идея: ganz с существительным означает «целый» или «весь».",
      "Перед прилагательным или наречием ganz может означать «совсем», «полностью» или «довольно».",
      "ganz — не то же самое, что местоимение alles."
    ],
    "examples": [
      {
        "de": "Ich arbeite den ganzen Tag.",
        "lv": "Я работаю весь день."
      },
      {
        "de": "Das ganze Haus ist sauber.",
        "lv": "Весь дом чистый."
      },
      {
        "de": "Das ist ganz sicher.",
        "lv": "Это совершенно безопасно."
      },
      {
        "de": "Das Essen ist ganz gut.",
        "lv": "Еда довольно хорошая."
      }
    ],
    "comparison": [
      {
        "word": "ganz",
        "meaning": "Целый • Весь • Совсем",
        "example": "der ganze Tag – весь день"
      },
      {
        "word": "alles",
        "meaning": "Всё",
        "example": "Alles ist gut. – Всё в порядке."
      }
    ],
    "tip": [
      "Перед существительным ganz часто означает «весь» или «целый».",
      "Перед прилагательным ganz часто означает «совсем» или «довольно»."
    ],
    "important": [
      "der ganze Tag = «весь день».",
      "alles = «всё» как местоимение."
    ]
  },
  "index": 219
}
```

---

## Finding 10

**Audit ID:** `LRB084-0010`
**Finding Stable ID:** `g2/a1/ru|a1-gefallen-study|a1.card.a1-gefallen-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-gefallen-study`
**Field / path:** `a1.card.a1-gefallen-study.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** нравиться • лицо в дательном падеже
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Нравиться","study":{"id":"a1-gefallen-study","layout":"standardStudy","translation":"Нравиться","explanation":["Основная идея: gefallen означает «нравиться».","То, что нравится, в немецком предложении является подлежащим.","Человек, которому что-либо нравится, стоит в дательном падеже: mir, dir, ihm, ihr, uns, euch, ihnen."],"examples":[{"de":"Das gefällt mir.","lv":"Мне это нравится."},{"de":"Gefällt dir das Kleid?","lv":"Тебе нравится это платье?"},{"de":"Der Film gefällt uns.","lv":"Нам нравится этот фильм."}],"comparison":[{"word":"gefallen","meaning":"Нравиться • Человек в дательном падеже","example":"Das gefällt mir. – Мне это нравится."},{"word":"mögen","meaning":"Любить • Нравиться","example":"Ich mag das. – Мне это нравится."}],"tip":["Запомните конструкцию: Das gefällt mir.","Не копируйте русский порядок слов буквально."],"important":["gefallen употребляется с дательным падежом: mir, dir, ihm, ihr.","Das gefällt mir = «Мне это нравится»."]}}
**Note:** Pilna RU kartīte «gefallen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gefallen",
  "lv": "Нравиться",
  "level": "A1",
  "study": {
    "id": "a1-gefallen-study",
    "layout": "standardStudy",
    "translation": "Нравиться",
    "explanation": [
      "Основная идея: gefallen означает «нравиться».",
      "То, что нравится, в немецком предложении является подлежащим.",
      "Человек, которому что-либо нравится, стоит в дательном падеже: mir, dir, ihm, ihr, uns, euch, ihnen."
    ],
    "examples": [
      {
        "de": "Das gefällt mir.",
        "lv": "Мне это нравится."
      },
      {
        "de": "Gefällt dir das Kleid?",
        "lv": "Тебе нравится это платье?"
      },
      {
        "de": "Der Film gefällt uns.",
        "lv": "Нам нравится этот фильм."
      }
    ],
    "comparison": [
      {
        "word": "gefallen",
        "meaning": "Нравиться • Человек в дательном падеже",
        "example": "Das gefällt mir. – Мне это нравится."
      },
      {
        "word": "mögen",
        "meaning": "Любить • Нравиться",
        "example": "Ich mag das. – Мне это нравится."
      }
    ],
    "tip": [
      "Запомните конструкцию: Das gefällt mir.",
      "Не копируйте русский порядок слов буквально."
    ],
    "important": [
      "gefallen употребляется с дательным падежом: mir, dir, ihm, ihr.",
      "Das gefällt mir = «Мне это нравится»."
    ]
  },
  "index": 225
}
```

---

## Finding 11

**Audit ID:** `LRB084-0011`
**Finding Stable ID:** `g2/a1/ru|a1-gleich|a1.card.a1-gleich.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-gleich`
**Field / path:** `a1.card.a1-gleich.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Сразу • Равно
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Сейчас • Одинаковый","study":{"id":"a1-gleich","layout":"standardStudy","translation":"Сейчас • Одинаковый","explanation":["Основная идея: при указании времени gleich означает «сейчас» или «через минуту», а при сравнении — «одинаковый».","В значении времени gleich = «сейчас/через минуту» (Ich komme gleich. = Я сейчас приду.).","При сравнении gleich = «одинаковый/такой же» (die gleiche Farbe = одинаковый цвет).","Правильное значение определяется контекстом: временем или сравнением."],"examples":[{"de":"Ich komme gleich.","lv":"Я сейчас приду."},{"de":"Wir haben die gleiche Farbe.","lv":"У нас одинаковый цвет."},{"de":"Das Essen ist gleich fertig.","lv":"Еда скоро будет готова."},{"de":"Beide Wege sind gleich lang.","lv":"Обе дороги одинаковой длины."},{"de":"Bis gleich!","lv":"До скорого!"},{"de":"Sie sind gleich groß.","lv":"Они одинакового роста."}],"tip":["О времени (через минуту) → «сейчас».","О сравнении (такой же) → «одинаковый»."],"important":["gleich = «сейчас» (время) ИЛИ «одинаковый» (сравнение).","Bis gleich! = «До скорого!» — обычная фраза при прощании."]}}
**Note:** Pilna RU kartīte «gleich»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gleich",
  "lv": "Сейчас • Одинаковый",
  "level": "A1",
  "study": {
    "id": "a1-gleich",
    "layout": "standardStudy",
    "translation": "Сейчас • Одинаковый",
    "explanation": [
      "Основная идея: при указании времени gleich означает «сейчас» или «через минуту», а при сравнении — «одинаковый».",
      "В значении времени gleich = «сейчас/через минуту» (Ich komme gleich. = Я сейчас приду.).",
      "При сравнении gleich = «одинаковый/такой же» (die gleiche Farbe = одинаковый цвет).",
      "Правильное значение определяется контекстом: временем или сравнением."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "Я сейчас приду."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "У нас одинаковый цвет."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "Еда скоро будет готова."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "Обе дороги одинаковой длины."
      },
      {
        "de": "Bis gleich!",
        "lv": "До скорого!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "Они одинакового роста."
      }
    ],
    "tip": [
      "О времени (через минуту) → «сейчас».",
      "О сравнении (такой же) → «одинаковый»."
    ],
    "important": [
      "gleich = «сейчас» (время) ИЛИ «одинаковый» (сравнение).",
      "Bis gleich! = «До скорого!» — обычная фраза при прощании."
    ]
  },
  "index": 243
}
```

---

## Finding 12

**Audit ID:** `LRB084-0012`
**Finding Stable ID:** `g2/a1/ru|a1-gleich|a1.card.a1-gleich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-gleich`
**Field / path:** `a1.card.a1-gleich.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Сразу • Равно
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Сейчас • Одинаковый","study":{"id":"a1-gleich","layout":"standardStudy","translation":"Сейчас • Одинаковый","explanation":["Основная идея: при указании времени gleich означает «сейчас» или «через минуту», а при сравнении — «одинаковый».","В значении времени gleich = «сейчас/через минуту» (Ich komme gleich. = Я сейчас приду.).","При сравнении gleich = «одинаковый/такой же» (die gleiche Farbe = одинаковый цвет).","Правильное значение определяется контекстом: временем или сравнением."],"examples":[{"de":"Ich komme gleich.","lv":"Я сейчас приду."},{"de":"Wir haben die gleiche Farbe.","lv":"У нас одинаковый цвет."},{"de":"Das Essen ist gleich fertig.","lv":"Еда скоро будет готова."},{"de":"Beide Wege sind gleich lang.","lv":"Обе дороги одинаковой длины."},{"de":"Bis gleich!","lv":"До скорого!"},{"de":"Sie sind gleich groß.","lv":"Они одинакового роста."}],"tip":["О времени (через минуту) → «сейчас».","О сравнении (такой же) → «одинаковый»."],"important":["gleich = «сейчас» (время) ИЛИ «одинаковый» (сравнение).","Bis gleich! = «До скорого!» — обычная фраза при прощании."]}}
**Note:** Pilna RU kartīte «gleich»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "gleich",
  "lv": "Сейчас • Одинаковый",
  "level": "A1",
  "study": {
    "id": "a1-gleich",
    "layout": "standardStudy",
    "translation": "Сейчас • Одинаковый",
    "explanation": [
      "Основная идея: при указании времени gleich означает «сейчас» или «через минуту», а при сравнении — «одинаковый».",
      "В значении времени gleich = «сейчас/через минуту» (Ich komme gleich. = Я сейчас приду.).",
      "При сравнении gleich = «одинаковый/такой же» (die gleiche Farbe = одинаковый цвет).",
      "Правильное значение определяется контекстом: временем или сравнением."
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "lv": "Я сейчас приду."
      },
      {
        "de": "Wir haben die gleiche Farbe.",
        "lv": "У нас одинаковый цвет."
      },
      {
        "de": "Das Essen ist gleich fertig.",
        "lv": "Еда скоро будет готова."
      },
      {
        "de": "Beide Wege sind gleich lang.",
        "lv": "Обе дороги одинаковой длины."
      },
      {
        "de": "Bis gleich!",
        "lv": "До скорого!"
      },
      {
        "de": "Sie sind gleich groß.",
        "lv": "Они одинакового роста."
      }
    ],
    "tip": [
      "О времени (через минуту) → «сейчас».",
      "О сравнении (такой же) → «одинаковый»."
    ],
    "important": [
      "gleich = «сейчас» (время) ИЛИ «одинаковый» (сравнение).",
      "Bis gleich! = «До скорого!» — обычная фраза при прощании."
    ]
  },
  "index": 243
}
```

---

## Finding 13

**Audit ID:** `LRB084-0013`
**Finding Stable ID:** `g2/a1/ru|a1-halten|a1.card.a1-halten.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-halten`
**Field / path:** `a1.card.a1-halten.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Держи • Стоп
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Держать • Останавливаться","study":{"id":"a1-halten","layout":"standardStudy","translation":"Держать • Останавливаться","explanation":["Основная идея: halten чаще всего означает «держать».","О автобусе, поезде или другом транспорте halten может означать «останавливаться».","Отделяемый глагол anhalten означает «останавливаться» или «останавливать».","Конструкция etwas für … halten означает «считать что-либо чем-либо»."],"examples":[{"de":"Ich halte die Tasche.","lv":"Я держу сумку."},{"de":"Der Bus hält hier.","lv":"Автобус здесь останавливается."},{"de":"Bitte halten Sie an.","lv":"Пожалуйста, остановитесь."},{"de":"Ich halte das für richtig.","lv":"Я считаю это правильным."}],"comparison":[{"word":"halten","meaning":"Держать • Транспорту также останавливаться","example":"Der Bus hält. – Автобус останавливается."},{"word":"nehmen","meaning":"Брать","example":"Ich nehme die Tasche. – Я беру сумку."},{"word":"anhalten","meaning":"Останавливаться • Останавливать","example":"Bitte halten Sie an. – Пожалуйста, остановитесь."},{"word":"denken","meaning":"Думать","example":"Ich denke, das ist richtig. – Я думаю, что это правильно."}],"tip":{"text":"Запомните: держать предмет → halten; остановиться → anhalten; транспорт останавливается → hält."},"important":["halten чаще всего означает «держать».","Der Bus hält означает «Автобус останавливается».","В Bitte halten Sie an употреблён отделяемый глагол anhalten."]}}
**Note:** Pilna RU kartīte «halten»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "halten",
  "lv": "Держать • Останавливаться",
  "level": "A1",
  "study": {
    "id": "a1-halten",
    "layout": "standardStudy",
    "translation": "Держать • Останавливаться",
    "explanation": [
      "Основная идея: halten чаще всего означает «держать».",
      "О автобусе, поезде или другом транспорте halten может означать «останавливаться».",
      "Отделяемый глагол anhalten означает «останавливаться» или «останавливать».",
      "Конструкция etwas für … halten означает «считать что-либо чем-либо»."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "Я держу сумку."
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Автобус здесь останавливается."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Пожалуйста, остановитесь."
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Я считаю это правильным."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "Держать • Транспорту также останавливаться",
        "example": "Der Bus hält. – Автобус останавливается."
      },
      {
        "word": "nehmen",
        "meaning": "Брать",
        "example": "Ich nehme die Tasche. – Я беру сумку."
      },
      {
        "word": "anhalten",
        "meaning": "Останавливаться • Останавливать",
        "example": "Bitte halten Sie an. – Пожалуйста, остановитесь."
      },
      {
        "word": "denken",
        "meaning": "Думать",
        "example": "Ich denke, das ist richtig. – Я думаю, что это правильно."
      }
    ],
    "tip": {
      "text": "Запомните: держать предмет → halten; остановиться → anhalten; транспорт останавливается → hält."
    },
    "important": [
      "halten чаще всего означает «держать».",
      "Der Bus hält означает «Автобус останавливается».",
      "В Bitte halten Sie an употреблён отделяемый глагол anhalten."
    ]
  },
  "index": 265
}
```

---

## Finding 14

**Audit ID:** `LRB084-0014`
**Finding Stable ID:** `g2/a1/ru|a1-halten|a1.card.a1-halten.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-halten`
**Field / path:** `a1.card.a1-halten.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Держи • Стоп
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Держать • Останавливаться","study":{"id":"a1-halten","layout":"standardStudy","translation":"Держать • Останавливаться","explanation":["Основная идея: halten чаще всего означает «держать».","О автобусе, поезде или другом транспорте halten может означать «останавливаться».","Отделяемый глагол anhalten означает «останавливаться» или «останавливать».","Конструкция etwas für … halten означает «считать что-либо чем-либо»."],"examples":[{"de":"Ich halte die Tasche.","lv":"Я держу сумку."},{"de":"Der Bus hält hier.","lv":"Автобус здесь останавливается."},{"de":"Bitte halten Sie an.","lv":"Пожалуйста, остановитесь."},{"de":"Ich halte das für richtig.","lv":"Я считаю это правильным."}],"comparison":[{"word":"halten","meaning":"Держать • Транспорту также останавливаться","example":"Der Bus hält. – Автобус останавливается."},{"word":"nehmen","meaning":"Брать","example":"Ich nehme die Tasche. – Я беру сумку."},{"word":"anhalten","meaning":"Останавливаться • Останавливать","example":"Bitte halten Sie an. – Пожалуйста, остановитесь."},{"word":"denken","meaning":"Думать","example":"Ich denke, das ist richtig. – Я думаю, что это правильно."}],"tip":{"text":"Запомните: держать предмет → halten; остановиться → anhalten; транспорт останавливается → hält."},"important":["halten чаще всего означает «держать».","Der Bus hält означает «Автобус останавливается».","В Bitte halten Sie an употреблён отделяемый глагол anhalten."]}}
**Note:** Pilna RU kartīte «halten»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "halten",
  "lv": "Держать • Останавливаться",
  "level": "A1",
  "study": {
    "id": "a1-halten",
    "layout": "standardStudy",
    "translation": "Держать • Останавливаться",
    "explanation": [
      "Основная идея: halten чаще всего означает «держать».",
      "О автобусе, поезде или другом транспорте halten может означать «останавливаться».",
      "Отделяемый глагол anhalten означает «останавливаться» или «останавливать».",
      "Конструкция etwas für … halten означает «считать что-либо чем-либо»."
    ],
    "examples": [
      {
        "de": "Ich halte die Tasche.",
        "lv": "Я держу сумку."
      },
      {
        "de": "Der Bus hält hier.",
        "lv": "Автобус здесь останавливается."
      },
      {
        "de": "Bitte halten Sie an.",
        "lv": "Пожалуйста, остановитесь."
      },
      {
        "de": "Ich halte das für richtig.",
        "lv": "Я считаю это правильным."
      }
    ],
    "comparison": [
      {
        "word": "halten",
        "meaning": "Держать • Транспорту также останавливаться",
        "example": "Der Bus hält. – Автобус останавливается."
      },
      {
        "word": "nehmen",
        "meaning": "Брать",
        "example": "Ich nehme die Tasche. – Я беру сумку."
      },
      {
        "word": "anhalten",
        "meaning": "Останавливаться • Останавливать",
        "example": "Bitte halten Sie an. – Пожалуйста, остановитесь."
      },
      {
        "word": "denken",
        "meaning": "Думать",
        "example": "Ich denke, das ist richtig. – Я думаю, что это правильно."
      }
    ],
    "tip": {
      "text": "Запомните: держать предмет → halten; остановиться → anhalten; транспорт останавливается → hält."
    },
    "important": [
      "halten чаще всего означает «держать».",
      "Der Bus hält означает «Автобус останавливается».",
      "В Bitte halten Sie an употреблён отделяемый глагол anhalten."
    ]
  },
  "index": 265
}
```

---

## Finding 15

**Audit ID:** `LRB084-0015`
**Finding Stable ID:** `g2/a1/ru|a1-heissen|a1.card.a1-heissen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-heissen`
**Field / path:** `a1.card.a1-heissen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Называться • Значит
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Называться • Значить","study":{"id":"a1-heißen","layout":"standardStudy","translation":"Называться • Значить","explanation":["Основная идея: heißen чаще всего употребляют, чтобы сказать, как кого-либо зовут.","Фраза Ich heiße… означает «Меня зовут…».","О словах или выражениях heißen может также означать «значить».","На уровне A1 самая важная фраза — Wie heißt du?"],"examples":[{"de":"Ich heiße Anna.","lv":"Меня зовут Анна."},{"de":"Wie heißt du?","lv":"Как тебя зовут?"},{"de":"Wie heißt das auf Deutsch?","lv":"Как это называется по-немецки?"},{"de":"Was heißt das?","lv":"Что это значит?"}],"comparison":[{"word":"heißen","meaning":"Называться • Значить","example":"Ich heiße Anna. – Меня зовут Анна."},{"word":"nennen","meaning":"Называть","example":"Er nennt mich Tom. – Он называет меня Томом."},{"word":"bedeuten","meaning":"Означать","example":"Was bedeutet das? – Что это означает?"},{"word":"rufen","meaning":"Звать • Позвать","example":"Ich rufe dich. – Я зову тебя."},{"word":"anrufen","meaning":"Звонить","example":"Ich rufe dich an. – Я звоню тебе."}],"tip":{"text":"Запомните: Ich heiße… → «Меня зовут…»."},"important":["Wie heißt du? означает «Как тебя зовут?».","Was heißt das? часто означает «Что это значит?»."]}}
**Note:** Pilna RU kartīte «heißen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "heißen",
  "lv": "Называться • Значить",
  "level": "A1",
  "study": {
    "id": "a1-heißen",
    "layout": "standardStudy",
    "translation": "Называться • Значить",
    "explanation": [
      "Основная идея: heißen чаще всего употребляют, чтобы сказать, как кого-либо зовут.",
      "Фраза Ich heiße… означает «Меня зовут…».",
      "О словах или выражениях heißen может также означать «значить».",
      "На уровне A1 самая важная фраза — Wie heißt du?"
    ],
    "examples": [
      {
        "de": "Ich heiße Anna.",
        "lv": "Меня зовут Анна."
      },
      {
        "de": "Wie heißt du?",
        "lv": "Как тебя зовут?"
      },
      {
        "de": "Wie heißt das auf Deutsch?",
        "lv": "Как это называется по-немецки?"
      },
      {
        "de": "Was heißt das?",
        "lv": "Что это значит?"
      }
    ],
    "comparison": [
      {
        "word": "heißen",
        "meaning": "Называться • Значить",
        "example": "Ich heiße Anna. – Меня зовут Анна."
      },
      {
        "word": "nennen",
        "meaning": "Называть",
        "example": "Er nennt mich Tom. – Он называет меня Томом."
      },
      {
        "word": "bedeuten",
        "meaning": "Означать",
        "example": "Was bedeutet das? – Что это означает?"
      },
      {
        "word": "rufen",
        "meaning": "Звать • Позвать",
        "example": "Ich rufe dich. – Я зову тебя."
      },
      {
        "word": "anrufen",
        "meaning": "Звонить",
        "example": "Ich rufe dich an. – Я звоню тебе."
      }
    ],
    "tip": {
      "text": "Запомните: Ich heiße… → «Меня зовут…»."
    },
    "important": [
      "Wie heißt du? означает «Как тебя зовут?».",
      "Was heißt das? часто означает «Что это значит?»."
    ]
  },
  "index": 276
}
```

---

## Finding 16

**Audit ID:** `LRB084-0016`
**Finding Stable ID:** `g2/a1/ru|a1-heissen|a1.card.a1-heissen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-heissen`
**Field / path:** `a1.card.a1-heissen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Называться • Значит
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Называться • Значить","study":{"id":"a1-heißen","layout":"standardStudy","translation":"Называться • Значить","explanation":["Основная идея: heißen чаще всего употребляют, чтобы сказать, как кого-либо зовут.","Фраза Ich heiße… означает «Меня зовут…».","О словах или выражениях heißen может также означать «значить».","На уровне A1 самая важная фраза — Wie heißt du?"],"examples":[{"de":"Ich heiße Anna.","lv":"Меня зовут Анна."},{"de":"Wie heißt du?","lv":"Как тебя зовут?"},{"de":"Wie heißt das auf Deutsch?","lv":"Как это называется по-немецки?"},{"de":"Was heißt das?","lv":"Что это значит?"}],"comparison":[{"word":"heißen","meaning":"Называться • Значить","example":"Ich heiße Anna. – Меня зовут Анна."},{"word":"nennen","meaning":"Называть","example":"Er nennt mich Tom. – Он называет меня Томом."},{"word":"bedeuten","meaning":"Означать","example":"Was bedeutet das? – Что это означает?"},{"word":"rufen","meaning":"Звать • Позвать","example":"Ich rufe dich. – Я зову тебя."},{"word":"anrufen","meaning":"Звонить","example":"Ich rufe dich an. – Я звоню тебе."}],"tip":{"text":"Запомните: Ich heiße… → «Меня зовут…»."},"important":["Wie heißt du? означает «Как тебя зовут?».","Was heißt das? часто означает «Что это значит?»."]}}
**Note:** Pilna RU kartīte «heißen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "heißen",
  "lv": "Называться • Значить",
  "level": "A1",
  "study": {
    "id": "a1-heißen",
    "layout": "standardStudy",
    "translation": "Называться • Значить",
    "explanation": [
      "Основная идея: heißen чаще всего употребляют, чтобы сказать, как кого-либо зовут.",
      "Фраза Ich heiße… означает «Меня зовут…».",
      "О словах или выражениях heißen может также означать «значить».",
      "На уровне A1 самая важная фраза — Wie heißt du?"
    ],
    "examples": [
      {
        "de": "Ich heiße Anna.",
        "lv": "Меня зовут Анна."
      },
      {
        "de": "Wie heißt du?",
        "lv": "Как тебя зовут?"
      },
      {
        "de": "Wie heißt das auf Deutsch?",
        "lv": "Как это называется по-немецки?"
      },
      {
        "de": "Was heißt das?",
        "lv": "Что это значит?"
      }
    ],
    "comparison": [
      {
        "word": "heißen",
        "meaning": "Называться • Значить",
        "example": "Ich heiße Anna. – Меня зовут Анна."
      },
      {
        "word": "nennen",
        "meaning": "Называть",
        "example": "Er nennt mich Tom. – Он называет меня Томом."
      },
      {
        "word": "bedeuten",
        "meaning": "Означать",
        "example": "Was bedeutet das? – Что это означает?"
      },
      {
        "word": "rufen",
        "meaning": "Звать • Позвать",
        "example": "Ich rufe dich. – Я зову тебя."
      },
      {
        "word": "anrufen",
        "meaning": "Звонить",
        "example": "Ich rufe dich an. – Я звоню тебе."
      }
    ],
    "tip": {
      "text": "Запомните: Ich heiße… → «Меня зовут…»."
    },
    "important": [
      "Wie heißt du? означает «Как тебя зовут?».",
      "Was heißt das? часто означает «Что это значит?»."
    ]
  },
  "index": 276
}
```

---

## Finding 17

**Audit ID:** `LRB084-0017`
**Finding Stable ID:** `g2/a1/ru|a1-hoeren-study|a1.card.a1-hoeren-study.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-hoeren-study`
**Field / path:** `a1.card.a1-hoeren-study.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Слышать • Слушать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Слышать • Слушать","study":{"id":"a1-hoeren-study","layout":"standardStudy","translation":"Слышать • Слушать","explanation":["Основная идея: hören означает слышать звук или слушать музыку.","hören прежде всего обозначает восприятие звука.","Этот глагол часто употребляют со звуками, речью, рассказами и музыкой.","hören употребляют для того, что человек слышит или слушает."],"examples":[{"de":"Ich höre Musik.","lv":"Я слушаю музыку."},{"de":"Die Kinder hören eine Geschichte.","lv":"Дети слушают рассказ."},{"de":"Ich höre dich.","lv":"Я тебя слышу."}],"tip":["hören означает слышать звук или слушать музыку.","Употребляйте hören, когда контекст связан со слухом."],"important":["hören = «слышать/слушать» звук.","С музыкой hören обычно переводится как «слушать»."]}}
**Note:** Pilna RU kartīte «hören»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "hören",
  "lv": "Слышать • Слушать",
  "level": "A1",
  "study": {
    "id": "a1-hoeren-study",
    "layout": "standardStudy",
    "translation": "Слышать • Слушать",
    "explanation": [
      "Основная идея: hören означает слышать звук или слушать музыку.",
      "hören прежде всего обозначает восприятие звука.",
      "Этот глагол часто употребляют со звуками, речью, рассказами и музыкой.",
      "hören употребляют для того, что человек слышит или слушает."
    ],
    "examples": [
      {
        "de": "Ich höre Musik.",
        "lv": "Я слушаю музыку."
      },
      {
        "de": "Die Kinder hören eine Geschichte.",
        "lv": "Дети слушают рассказ."
      },
      {
        "de": "Ich höre dich.",
        "lv": "Я тебя слышу."
      }
    ],
    "tip": [
      "hören означает слышать звук или слушать музыку.",
      "Употребляйте hören, когда контекст связан со слухом."
    ],
    "important": [
      "hören = «слышать/слушать» звук.",
      "С музыкой hören обычно переводится как «слушать»."
    ]
  },
  "index": 287
}
```

---

## Finding 18

**Audit ID:** `LRB084-0018`
**Finding Stable ID:** `g2/a1/ru|a1-hoeren-study|a1.card.a1-hoeren-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-hoeren-study`
**Field / path:** `a1.card.a1-hoeren-study.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Слышать • Слушать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Слышать • Слушать","study":{"id":"a1-hoeren-study","layout":"standardStudy","translation":"Слышать • Слушать","explanation":["Основная идея: hören означает слышать звук или слушать музыку.","hören прежде всего обозначает восприятие звука.","Этот глагол часто употребляют со звуками, речью, рассказами и музыкой.","hören употребляют для того, что человек слышит или слушает."],"examples":[{"de":"Ich höre Musik.","lv":"Я слушаю музыку."},{"de":"Die Kinder hören eine Geschichte.","lv":"Дети слушают рассказ."},{"de":"Ich höre dich.","lv":"Я тебя слышу."}],"tip":["hören означает слышать звук или слушать музыку.","Употребляйте hören, когда контекст связан со слухом."],"important":["hören = «слышать/слушать» звук.","С музыкой hören обычно переводится как «слушать»."]}}
**Note:** Pilna RU kartīte «hören»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "hören",
  "lv": "Слышать • Слушать",
  "level": "A1",
  "study": {
    "id": "a1-hoeren-study",
    "layout": "standardStudy",
    "translation": "Слышать • Слушать",
    "explanation": [
      "Основная идея: hören означает слышать звук или слушать музыку.",
      "hören прежде всего обозначает восприятие звука.",
      "Этот глагол часто употребляют со звуками, речью, рассказами и музыкой.",
      "hören употребляют для того, что человек слышит или слушает."
    ],
    "examples": [
      {
        "de": "Ich höre Musik.",
        "lv": "Я слушаю музыку."
      },
      {
        "de": "Die Kinder hören eine Geschichte.",
        "lv": "Дети слушают рассказ."
      },
      {
        "de": "Ich höre dich.",
        "lv": "Я тебя слышу."
      }
    ],
    "tip": [
      "hören означает слышать звук или слушать музыку.",
      "Употребляйте hören, когда контекст связан со слухом."
    ],
    "important": [
      "hören = «слышать/слушать» звук.",
      "С музыкой hören обычно переводится как «слушать»."
    ]
  },
  "index": 287
}
```

---

## Finding 19

**Audit ID:** `LRB084-0019`
**Finding Stable ID:** `g2/a1/ru|a1-huebsch|a1.card.a1-huebsch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-huebsch`
**Field / path:** `a1.card.a1-huebsch.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** красивый • привлекательный внешне
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Красивый • Симпатичный","study":{"id":"a1-huebsch","layout":"standardStudy","translation":"Красивый • Симпатичный","explanation":["Основная идея: hübsch означает «красивый», «привлекательный» или «симпатичный» внешне.","hübsch часто описывает внешность человека, одежду, комнату или предмет.","Русское «милый» возможно в некоторых контекстах, но слишком широко для основного перевода.","Характер или доброжелательное поведение по-немецки чаще описывают словом nett."],"examples":[{"de":"Sie trägt ein hübsches Kleid.","lv":"На ней красивое платье."},{"de":"Das Zimmer ist hübsch.","lv":"Комната красивая."},{"de":"Das ist ein hübsches Bild.","lv":"Это красивая картина."}],"comparison":[{"word":"hübsch","meaning":"Красивый • Привлекательный внешне","example":"Das ist ein hübsches Kleid. – Это красивое платье."},{"word":"schön","meaning":"Красивый • Прекрасный","example":"Der Garten ist schön. – Сад красивый."},{"word":"nett","meaning":"Милый • Любезный","example":"Sie ist sehr nett. – Она очень милая."}],"tip":{"text":"Запомните: hübsch прежде всего описывает привлекательную внешность, а nett — милого человека или доброжелательное поведение."},"important":["hübsch не является универсальным переводом русского «милый».","Для характера человека или доброжелательного поведения обычно лучше подходит nett."]}}
**Note:** Pilna RU kartīte «hübsch»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "hübsch",
  "lv": "Красивый • Симпатичный",
  "level": "A1",
  "study": {
    "id": "a1-huebsch",
    "layout": "standardStudy",
    "translation": "Красивый • Симпатичный",
    "explanation": [
      "Основная идея: hübsch означает «красивый», «привлекательный» или «симпатичный» внешне.",
      "hübsch часто описывает внешность человека, одежду, комнату или предмет.",
      "Русское «милый» возможно в некоторых контекстах, но слишком широко для основного перевода.",
      "Характер или доброжелательное поведение по-немецки чаще описывают словом nett."
    ],
    "examples": [
      {
        "de": "Sie trägt ein hübsches Kleid.",
        "lv": "На ней красивое платье."
      },
      {
        "de": "Das Zimmer ist hübsch.",
        "lv": "Комната красивая."
      },
      {
        "de": "Das ist ein hübsches Bild.",
        "lv": "Это красивая картина."
      }
    ],
    "comparison": [
      {
        "word": "hübsch",
        "meaning": "Красивый • Привлекательный внешне",
        "example": "Das ist ein hübsches Kleid. – Это красивое платье."
      },
      {
        "word": "schön",
        "meaning": "Красивый • Прекрасный",
        "example": "Der Garten ist schön. – Сад красивый."
      },
      {
        "word": "nett",
        "meaning": "Милый • Любезный",
        "example": "Sie ist sehr nett. – Она очень милая."
      }
    ],
    "tip": {
      "text": "Запомните: hübsch прежде всего описывает привлекательную внешность, а nett — милого человека или доброжелательное поведение."
    },
    "important": [
      "hübsch не является универсальным переводом русского «милый».",
      "Для характера человека или доброжелательного поведения обычно лучше подходит nett."
    ]
  },
  "index": 288
}
```

---

## Finding 20

**Audit ID:** `LRB084-0020`
**Finding Stable ID:** `g2/a1/ru|a1-ihr|a1.card.a1-ihr.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-ihr`
**Field / path:** `a1.card.a1-ihr.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Ты • Она
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Вы • Ей • Её","study":{"id":"a1-ihr","layout":"standardStudy","translation":"Вы • Ей • Её","explanation":["Основная идея: ihr имеет несколько значений: обращение к нескольким людям «вы», дательная форма местоимения sie «ей» и притяжательная форма «её».","ihr со строчной буквы как обращение к нескольким людям переводится «вы» (Kommt ihr mit? = Вы идёте с нами?).","ihr как притяжательное местоимение означает «её» (ihr Buch = её книга).","ihr как дательная форма от sie означает «ей» (Ich gebe ihr das Buch. = Я даю ей книгу.).","Форма глагола (kommt, habt) показывает, что ihr означает обращение к нескольким людям.","Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr."],"examples":[{"de":"Kommt ihr heute Abend?","lv":"Вы придёте сегодня вечером?"},{"de":"Ich gebe ihr das Buch.","lv":"Я даю ей книгу."},{"de":"Wo wohnt ihr?","lv":"Где вы живёте?"},{"de":"Er schreibt ihr einen Brief.","lv":"Он пишет ей письмо."},{"de":"Habt ihr Zeit?","lv":"У вас есть время?"},{"de":"Das ist ihr Auto.","lv":"Это её машина."}],"tip":["ihr с формой глагола во множественном числе (kommt, habt) = «вы»; ihr в дательном или притяжательном значении = «ей/её».","Проверяйте: Habt ihr…? / Kommt ihr…? = «вы»; Ich gebe ihr… / ihr Buch = «ей/её»."],"important":["ihr = «вы» (несколько адресатов) ИЛИ «ей» (дательный падеж) ИЛИ «её» (притяжательное значение) — по контексту.","Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr.","Неверно: Ihr как вежливое обращение → верно: Sie."]}}
**Note:** Pilna RU kartīte «ihr»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ihr",
  "lv": "Вы • Ей • Её",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "Вы • Ей • Её",
    "explanation": [
      "Основная идея: ihr имеет несколько значений: обращение к нескольким людям «вы», дательная форма местоимения sie «ей» и притяжательная форма «её».",
      "ihr со строчной буквы как обращение к нескольким людям переводится «вы» (Kommt ihr mit? = Вы идёте с нами?).",
      "ihr как притяжательное местоимение означает «её» (ihr Buch = её книга).",
      "ihr как дательная форма от sie означает «ей» (Ich gebe ihr das Buch. = Я даю ей книгу.).",
      "Форма глагола (kommt, habt) показывает, что ihr означает обращение к нескольким людям.",
      "Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Вы придёте сегодня вечером?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Я даю ей книгу."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "Где вы живёте?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "Он пишет ей письмо."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "У вас есть время?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "Это её машина."
      }
    ],
    "tip": [
      "ihr с формой глагола во множественном числе (kommt, habt) = «вы»; ihr в дательном или притяжательном значении = «ей/её».",
      "Проверяйте: Habt ihr…? / Kommt ihr…? = «вы»; Ich gebe ihr… / ihr Buch = «ей/её»."
    ],
    "important": [
      "ihr = «вы» (несколько адресатов) ИЛИ «ей» (дательный падеж) ИЛИ «её» (притяжательное значение) — по контексту.",
      "Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr.",
      "Неверно: Ihr как вежливое обращение → верно: Sie."
    ]
  },
  "index": 292
}
```

---

## Finding 21

**Audit ID:** `LRB084-0021`
**Finding Stable ID:** `g2/a1/ru|a1-ihr|a1.card.a1-ihr.study.tip[0]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-ihr`
**Field / path:** `a1.card.a1-ihr.study.tip[0]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Ihr с глаголом dsk. форма (коммт, хабт) = ты • Ihr рядом со словом в дательном или притяжательном падеже = her/hers.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Вы • Ей • Её","study":{"id":"a1-ihr","layout":"standardStudy","translation":"Вы • Ей • Её","explanation":["Основная идея: ihr имеет несколько значений: обращение к нескольким людям «вы», дательная форма местоимения sie «ей» и притяжательная форма «её».","ihr со строчной буквы как обращение к нескольким людям переводится «вы» (Kommt ihr mit? = Вы идёте с нами?).","ihr как притяжательное местоимение означает «её» (ihr Buch = её книга).","ihr как дательная форма от sie означает «ей» (Ich gebe ihr das Buch. = Я даю ей книгу.).","Форма глагола (kommt, habt) показывает, что ihr означает обращение к нескольким людям.","Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr."],"examples":[{"de":"Kommt ihr heute Abend?","lv":"Вы придёте сегодня вечером?"},{"de":"Ich gebe ihr das Buch.","lv":"Я даю ей книгу."},{"de":"Wo wohnt ihr?","lv":"Где вы живёте?"},{"de":"Er schreibt ihr einen Brief.","lv":"Он пишет ей письмо."},{"de":"Habt ihr Zeit?","lv":"У вас есть время?"},{"de":"Das ist ihr Auto.","lv":"Это её машина."}],"tip":["ihr с формой глагола во множественном числе (kommt, habt) = «вы»; ihr в дательном или притяжательном значении = «ей/её».","Проверяйте: Habt ihr…? / Kommt ihr…? = «вы»; Ich gebe ihr… / ihr Buch = «ей/её»."],"important":["ihr = «вы» (несколько адресатов) ИЛИ «ей» (дательный падеж) ИЛИ «её» (притяжательное значение) — по контексту.","Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr.","Неверно: Ihr как вежливое обращение → верно: Sie."]}}
**Note:** Pilna RU kartīte «ihr»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ihr",
  "lv": "Вы • Ей • Её",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "Вы • Ей • Её",
    "explanation": [
      "Основная идея: ihr имеет несколько значений: обращение к нескольким людям «вы», дательная форма местоимения sie «ей» и притяжательная форма «её».",
      "ihr со строчной буквы как обращение к нескольким людям переводится «вы» (Kommt ihr mit? = Вы идёте с нами?).",
      "ihr как притяжательное местоимение означает «её» (ihr Buch = её книга).",
      "ihr как дательная форма от sie означает «ей» (Ich gebe ihr das Buch. = Я даю ей книгу.).",
      "Форма глагола (kommt, habt) показывает, что ihr означает обращение к нескольким людям.",
      "Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Вы придёте сегодня вечером?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Я даю ей книгу."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "Где вы живёте?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "Он пишет ей письмо."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "У вас есть время?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "Это её машина."
      }
    ],
    "tip": [
      "ihr с формой глагола во множественном числе (kommt, habt) = «вы»; ihr в дательном или притяжательном значении = «ей/её».",
      "Проверяйте: Habt ihr…? / Kommt ihr…? = «вы»; Ich gebe ihr… / ihr Buch = «ей/её»."
    ],
    "important": [
      "ihr = «вы» (несколько адресатов) ИЛИ «ей» (дательный падеж) ИЛИ «её» (притяжательное значение) — по контексту.",
      "Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr.",
      "Неверно: Ihr как вежливое обращение → верно: Sie."
    ]
  },
  "index": 292
}
```

---

## Finding 22

**Audit ID:** `LRB084-0022`
**Finding Stable ID:** `g2/a1/ru|a1-ihr|a1.card.a1-ihr.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-ihr`
**Field / path:** `a1.card.a1-ihr.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Ты • Она
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Вы • Ей • Её","study":{"id":"a1-ihr","layout":"standardStudy","translation":"Вы • Ей • Её","explanation":["Основная идея: ihr имеет несколько значений: обращение к нескольким людям «вы», дательная форма местоимения sie «ей» и притяжательная форма «её».","ihr со строчной буквы как обращение к нескольким людям переводится «вы» (Kommt ihr mit? = Вы идёте с нами?).","ihr как притяжательное местоимение означает «её» (ihr Buch = её книга).","ihr как дательная форма от sie означает «ей» (Ich gebe ihr das Buch. = Я даю ей книгу.).","Форма глагола (kommt, habt) показывает, что ihr означает обращение к нескольким людям.","Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr."],"examples":[{"de":"Kommt ihr heute Abend?","lv":"Вы придёте сегодня вечером?"},{"de":"Ich gebe ihr das Buch.","lv":"Я даю ей книгу."},{"de":"Wo wohnt ihr?","lv":"Где вы живёте?"},{"de":"Er schreibt ihr einen Brief.","lv":"Он пишет ей письмо."},{"de":"Habt ihr Zeit?","lv":"У вас есть время?"},{"de":"Das ist ihr Auto.","lv":"Это её машина."}],"tip":["ihr с формой глагола во множественном числе (kommt, habt) = «вы»; ihr в дательном или притяжательном значении = «ей/её».","Проверяйте: Habt ihr…? / Kommt ihr…? = «вы»; Ich gebe ihr… / ihr Buch = «ей/её»."],"important":["ihr = «вы» (несколько адресатов) ИЛИ «ей» (дательный падеж) ИЛИ «её» (притяжательное значение) — по контексту.","Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr.","Неверно: Ihr как вежливое обращение → верно: Sie."]}}
**Note:** Pilna RU kartīte «ihr»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ihr",
  "lv": "Вы • Ей • Её",
  "level": "A1",
  "study": {
    "id": "a1-ihr",
    "layout": "standardStudy",
    "translation": "Вы • Ей • Её",
    "explanation": [
      "Основная идея: ihr имеет несколько значений: обращение к нескольким людям «вы», дательная форма местоимения sie «ей» и притяжательная форма «её».",
      "ihr со строчной буквы как обращение к нескольким людям переводится «вы» (Kommt ihr mit? = Вы идёте с нами?).",
      "ihr как притяжательное местоимение означает «её» (ihr Buch = её книга).",
      "ihr как дательная форма от sie означает «ей» (Ich gebe ihr das Buch. = Я даю ей книгу.).",
      "Форма глагола (kommt, habt) показывает, что ihr означает обращение к нескольким людям.",
      "Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr."
    ],
    "examples": [
      {
        "de": "Kommt ihr heute Abend?",
        "lv": "Вы придёте сегодня вечером?"
      },
      {
        "de": "Ich gebe ihr das Buch.",
        "lv": "Я даю ей книгу."
      },
      {
        "de": "Wo wohnt ihr?",
        "lv": "Где вы живёте?"
      },
      {
        "de": "Er schreibt ihr einen Brief.",
        "lv": "Он пишет ей письмо."
      },
      {
        "de": "Habt ihr Zeit?",
        "lv": "У вас есть время?"
      },
      {
        "de": "Das ist ihr Auto.",
        "lv": "Это её машина."
      }
    ],
    "tip": [
      "ihr с формой глагола во множественном числе (kommt, habt) = «вы»; ihr в дательном или притяжательном значении = «ей/её».",
      "Проверяйте: Habt ihr…? / Kommt ihr…? = «вы»; Ich gebe ihr… / ihr Buch = «ей/её»."
    ],
    "important": [
      "ihr = «вы» (несколько адресатов) ИЛИ «ей» (дательный падеж) ИЛИ «её» (притяжательное значение) — по контексту.",
      "Вежливое обращение всегда пишется Sie с прописной буквы, а не ihr.",
      "Неверно: Ihr как вежливое обращение → верно: Sie."
    ]
  },
  "index": 292
}
```

---

## Finding 23

**Audit ID:** `LRB084-0023`
**Finding Stable ID:** `g2/a1/ru|a1-im|a1.card.a1-im.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-im`
**Field / path:** `a1.card.a1-im.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** В • Где?
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"В • Где?","study":{"id":"a1-im","layout":"standardStudy","translation":"В • Где?","explanation":["im — сокращение предлога in и артикля dem.","Полная форма: in dem.","im употребляется с существительными мужского и среднего рода в дательном падеже, когда речь идёт о местонахождении и задаётся вопрос «где?».","im также употребляется с месяцами и временами года: im Januar, im Sommer, im Winter.","На практике почти всегда употребляют im, а не полную форму in dem."],"examples":[{"de":"Ich bin im Park.","lv":"Я в парке."},{"de":"Wir wohnen im Zentrum.","lv":"Мы живём в центре."},{"de":"Im Sommer ist es warm.","lv":"Летом тепло."},{"de":"Er arbeitet im Büro.","lv":"Он работает в офисе."},{"de":"Das Kind spielt im Garten.","lv":"Ребёнок играет в саду."},{"de":"Im Januar fahre ich nach Wien.","lv":"В январе я еду в Вену."},{"de":"Sie ist im Kino.","lv":"Она в кино."},{"de":"Wir treffen uns im Restaurant.","lv":"Мы встречаемся в ресторане."}],"comparison":[{"word":"im","meaning":"Внутри • Где? (Dativ)","example":"im Park – в парке"},{"word":"ins","meaning":"Внутрь • Куда? (Akkusativ)","example":"ins Kino – в кино"},{"word":"in","meaning":"В • Внутрь (без слияния с артиклем)","example":"in Berlin – в Берлине"},{"word":"am","meaning":"У • Где? (Dativ)","example":"am Fenster – у окна"},{"word":"auf","meaning":"На поверхности","example":"auf dem Tisch – на столе"}],"tip":["Запомните: in + dem → im; это форма дательного падежа и вопрос «где?».","Куда? → ins; где? → im — не путайте эти формы."],"important":["im = in dem; употребляется с существительными мужского и среднего рода в дательном падеже.","im отвечает на вопрос «где?»: это местонахождение, а не движение.","С месяцами и временами года: im März, im Herbst.","С существительным женского рода: in der Schule, а не im Schule."]}}
**Note:** Pilna RU kartīte «im»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "im",
  "lv": "В • Где?",
  "level": "A1",
  "study": {
    "id": "a1-im",
    "layout": "standardStudy",
    "translation": "В • Где?",
    "explanation": [
      "im — сокращение предлога in и артикля dem.",
      "Полная форма: in dem.",
      "im употребляется с существительными мужского и среднего рода в дательном падеже, когда речь идёт о местонахождении и задаётся вопрос «где?».",
      "im также употребляется с месяцами и временами года: im Januar, im Sommer, im Winter.",
      "На практике почти всегда употребляют im, а не полную форму in dem."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Я в парке."
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Мы живём в центре."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "Летом тепло."
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "Он работает в офисе."
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "Ребёнок играет в саду."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "В январе я еду в Вену."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "Она в кино."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Мы встречаемся в ресторане."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "Внутри • Где? (Dativ)",
        "example": "im Park – в парке"
      },
      {
        "word": "ins",
        "meaning": "Внутрь • Куда? (Akkusativ)",
        "example": "ins Kino – в кино"
      },
      {
        "word": "in",
        "meaning": "В • Внутрь (без слияния с артиклем)",
        "example": "in Berlin – в Берлине"
      },
      {
        "word": "am",
        "meaning": "У • Где? (Dativ)",
        "example": "am Fenster – у окна"
      },
      {
        "word": "auf",
        "meaning": "На поверхности",
        "example": "auf dem Tisch – на столе"
      }
    ],
    "tip": [
      "Запомните: in + dem → im; это форма дательного падежа и вопрос «где?».",
      "Куда? → ins; где? → im — не путайте эти формы."
    ],
    "important": [
      "im = in dem; употребляется с существительными мужского и среднего рода в дательном падеже.",
      "im отвечает на вопрос «где?»: это местонахождение, а не движение.",
      "С месяцами и временами года: im März, im Herbst.",
      "С существительным женского рода: in der Schule, а не im Schule."
    ]
  },
  "index": 293
}
```

---

## Finding 24

**Audit ID:** `LRB084-0024`
**Finding Stable ID:** `g2/a1/ru|a1-im|a1.card.a1-im.study.tip[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-im`
**Field / path:** `a1.card.a1-im.study.tip[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Где? → инс • Где? → я - не путай эти два!
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"В • Где?","study":{"id":"a1-im","layout":"standardStudy","translation":"В • Где?","explanation":["im — сокращение предлога in и артикля dem.","Полная форма: in dem.","im употребляется с существительными мужского и среднего рода в дательном падеже, когда речь идёт о местонахождении и задаётся вопрос «где?».","im также употребляется с месяцами и временами года: im Januar, im Sommer, im Winter.","На практике почти всегда употребляют im, а не полную форму in dem."],"examples":[{"de":"Ich bin im Park.","lv":"Я в парке."},{"de":"Wir wohnen im Zentrum.","lv":"Мы живём в центре."},{"de":"Im Sommer ist es warm.","lv":"Летом тепло."},{"de":"Er arbeitet im Büro.","lv":"Он работает в офисе."},{"de":"Das Kind spielt im Garten.","lv":"Ребёнок играет в саду."},{"de":"Im Januar fahre ich nach Wien.","lv":"В январе я еду в Вену."},{"de":"Sie ist im Kino.","lv":"Она в кино."},{"de":"Wir treffen uns im Restaurant.","lv":"Мы встречаемся в ресторане."}],"comparison":[{"word":"im","meaning":"Внутри • Где? (Dativ)","example":"im Park – в парке"},{"word":"ins","meaning":"Внутрь • Куда? (Akkusativ)","example":"ins Kino – в кино"},{"word":"in","meaning":"В • Внутрь (без слияния с артиклем)","example":"in Berlin – в Берлине"},{"word":"am","meaning":"У • Где? (Dativ)","example":"am Fenster – у окна"},{"word":"auf","meaning":"На поверхности","example":"auf dem Tisch – на столе"}],"tip":["Запомните: in + dem → im; это форма дательного падежа и вопрос «где?».","Куда? → ins; где? → im — не путайте эти формы."],"important":["im = in dem; употребляется с существительными мужского и среднего рода в дательном падеже.","im отвечает на вопрос «где?»: это местонахождение, а не движение.","С месяцами и временами года: im März, im Herbst.","С существительным женского рода: in der Schule, а не im Schule."]}}
**Note:** Pilna RU kartīte «im»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "im",
  "lv": "В • Где?",
  "level": "A1",
  "study": {
    "id": "a1-im",
    "layout": "standardStudy",
    "translation": "В • Где?",
    "explanation": [
      "im — сокращение предлога in и артикля dem.",
      "Полная форма: in dem.",
      "im употребляется с существительными мужского и среднего рода в дательном падеже, когда речь идёт о местонахождении и задаётся вопрос «где?».",
      "im также употребляется с месяцами и временами года: im Januar, im Sommer, im Winter.",
      "На практике почти всегда употребляют im, а не полную форму in dem."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Я в парке."
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Мы живём в центре."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "Летом тепло."
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "Он работает в офисе."
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "Ребёнок играет в саду."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "В январе я еду в Вену."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "Она в кино."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Мы встречаемся в ресторане."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "Внутри • Где? (Dativ)",
        "example": "im Park – в парке"
      },
      {
        "word": "ins",
        "meaning": "Внутрь • Куда? (Akkusativ)",
        "example": "ins Kino – в кино"
      },
      {
        "word": "in",
        "meaning": "В • Внутрь (без слияния с артиклем)",
        "example": "in Berlin – в Берлине"
      },
      {
        "word": "am",
        "meaning": "У • Где? (Dativ)",
        "example": "am Fenster – у окна"
      },
      {
        "word": "auf",
        "meaning": "На поверхности",
        "example": "auf dem Tisch – на столе"
      }
    ],
    "tip": [
      "Запомните: in + dem → im; это форма дательного падежа и вопрос «где?».",
      "Куда? → ins; где? → im — не путайте эти формы."
    ],
    "important": [
      "im = in dem; употребляется с существительными мужского и среднего рода в дательном падеже.",
      "im отвечает на вопрос «где?»: это местонахождение, а не движение.",
      "С месяцами и временами года: im März, im Herbst.",
      "С существительным женского рода: in der Schule, а не im Schule."
    ]
  },
  "index": 293
}
```

---

## Finding 25

**Audit ID:** `LRB084-0025`
**Finding Stable ID:** `g2/a1/ru|a1-im|a1.card.a1-im.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-im`
**Field / path:** `a1.card.a1-im.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** В • Где?
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"В • Где?","study":{"id":"a1-im","layout":"standardStudy","translation":"В • Где?","explanation":["im — сокращение предлога in и артикля dem.","Полная форма: in dem.","im употребляется с существительными мужского и среднего рода в дательном падеже, когда речь идёт о местонахождении и задаётся вопрос «где?».","im также употребляется с месяцами и временами года: im Januar, im Sommer, im Winter.","На практике почти всегда употребляют im, а не полную форму in dem."],"examples":[{"de":"Ich bin im Park.","lv":"Я в парке."},{"de":"Wir wohnen im Zentrum.","lv":"Мы живём в центре."},{"de":"Im Sommer ist es warm.","lv":"Летом тепло."},{"de":"Er arbeitet im Büro.","lv":"Он работает в офисе."},{"de":"Das Kind spielt im Garten.","lv":"Ребёнок играет в саду."},{"de":"Im Januar fahre ich nach Wien.","lv":"В январе я еду в Вену."},{"de":"Sie ist im Kino.","lv":"Она в кино."},{"de":"Wir treffen uns im Restaurant.","lv":"Мы встречаемся в ресторане."}],"comparison":[{"word":"im","meaning":"Внутри • Где? (Dativ)","example":"im Park – в парке"},{"word":"ins","meaning":"Внутрь • Куда? (Akkusativ)","example":"ins Kino – в кино"},{"word":"in","meaning":"В • Внутрь (без слияния с артиклем)","example":"in Berlin – в Берлине"},{"word":"am","meaning":"У • Где? (Dativ)","example":"am Fenster – у окна"},{"word":"auf","meaning":"На поверхности","example":"auf dem Tisch – на столе"}],"tip":["Запомните: in + dem → im; это форма дательного падежа и вопрос «где?».","Куда? → ins; где? → im — не путайте эти формы."],"important":["im = in dem; употребляется с существительными мужского и среднего рода в дательном падеже.","im отвечает на вопрос «где?»: это местонахождение, а не движение.","С месяцами и временами года: im März, im Herbst.","С существительным женского рода: in der Schule, а не im Schule."]}}
**Note:** Pilna RU kartīte «im»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "im",
  "lv": "В • Где?",
  "level": "A1",
  "study": {
    "id": "a1-im",
    "layout": "standardStudy",
    "translation": "В • Где?",
    "explanation": [
      "im — сокращение предлога in и артикля dem.",
      "Полная форма: in dem.",
      "im употребляется с существительными мужского и среднего рода в дательном падеже, когда речь идёт о местонахождении и задаётся вопрос «где?».",
      "im также употребляется с месяцами и временами года: im Januar, im Sommer, im Winter.",
      "На практике почти всегда употребляют im, а не полную форму in dem."
    ],
    "examples": [
      {
        "de": "Ich bin im Park.",
        "lv": "Я в парке."
      },
      {
        "de": "Wir wohnen im Zentrum.",
        "lv": "Мы живём в центре."
      },
      {
        "de": "Im Sommer ist es warm.",
        "lv": "Летом тепло."
      },
      {
        "de": "Er arbeitet im Büro.",
        "lv": "Он работает в офисе."
      },
      {
        "de": "Das Kind spielt im Garten.",
        "lv": "Ребёнок играет в саду."
      },
      {
        "de": "Im Januar fahre ich nach Wien.",
        "lv": "В январе я еду в Вену."
      },
      {
        "de": "Sie ist im Kino.",
        "lv": "Она в кино."
      },
      {
        "de": "Wir treffen uns im Restaurant.",
        "lv": "Мы встречаемся в ресторане."
      }
    ],
    "comparison": [
      {
        "word": "im",
        "meaning": "Внутри • Где? (Dativ)",
        "example": "im Park – в парке"
      },
      {
        "word": "ins",
        "meaning": "Внутрь • Куда? (Akkusativ)",
        "example": "ins Kino – в кино"
      },
      {
        "word": "in",
        "meaning": "В • Внутрь (без слияния с артиклем)",
        "example": "in Berlin – в Берлине"
      },
      {
        "word": "am",
        "meaning": "У • Где? (Dativ)",
        "example": "am Fenster – у окна"
      },
      {
        "word": "auf",
        "meaning": "На поверхности",
        "example": "auf dem Tisch – на столе"
      }
    ],
    "tip": [
      "Запомните: in + dem → im; это форма дательного падежа и вопрос «где?».",
      "Куда? → ins; где? → im — не путайте эти формы."
    ],
    "important": [
      "im = in dem; употребляется с существительными мужского и среднего рода в дательном падеже.",
      "im отвечает на вопрос «где?»: это местонахождение, а не движение.",
      "С месяцами и временами года: im März, im Herbst.",
      "С существительным женского рода: in der Schule, а не im Schule."
    ]
  },
  "index": 293
}
```

---

## Finding 26

**Audit ID:** `LRB084-0026`
**Finding Stable ID:** `g2/a1/ru|a1-in|a1.card.a1-in.study.important[0]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-in`
**Field / path:** `a1.card.a1-in.study.important[0]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** «in» не всегда буквально «внутри» • На латышском языке часто говорят в Берлине, в школе, в кино.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"В • Внутрь","study":{"id":"a1-in","layout":"standardStudy","translation":"В • Внутрь","explanation":["Основная идея: in обычно означает нахождение внутри или движение внутрь помещения, страны, города либо здания.","При указании местонахождения in часто переводится как «в»: in Berlin = в Берлине.","При указании движения in означает направление внутрь: ins Kino = в кино.","Русский перевод зависит от контекста."],"examples":[{"de":"Ich bin in Berlin.","lv":"Я в Берлине."},{"de":"Ich gehe in die Schule.","lv":"Я иду в школу."},{"de":"Das Buch ist in der Tasche.","lv":"Книга находится в сумке."},{"de":"Wir gehen ins Kino.","lv":"Мы идём в кино."}],"tip":{"text":"Запомните: внутри или внутрь помещения → in."},"important":["in не всегда переводится буквально как «внутри»: по-русски часто говорят «в Берлине», «в школе», «в кино».","Если речь идёт о поверхности, часто требуется auf, а не in."]}}
**Note:** Pilna RU kartīte «in»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "in",
  "lv": "В • Внутрь",
  "level": "A1",
  "study": {
    "id": "a1-in",
    "layout": "standardStudy",
    "translation": "В • Внутрь",
    "explanation": [
      "Основная идея: in обычно означает нахождение внутри или движение внутрь помещения, страны, города либо здания.",
      "При указании местонахождения in часто переводится как «в»: in Berlin = в Берлине.",
      "При указании движения in означает направление внутрь: ins Kino = в кино.",
      "Русский перевод зависит от контекста."
    ],
    "examples": [
      {
        "de": "Ich bin in Berlin.",
        "lv": "Я в Берлине."
      },
      {
        "de": "Ich gehe in die Schule.",
        "lv": "Я иду в школу."
      },
      {
        "de": "Das Buch ist in der Tasche.",
        "lv": "Книга находится в сумке."
      },
      {
        "de": "Wir gehen ins Kino.",
        "lv": "Мы идём в кино."
      }
    ],
    "tip": {
      "text": "Запомните: внутри или внутрь помещения → in."
    },
    "important": [
      "in не всегда переводится буквально как «внутри»: по-русски часто говорят «в Берлине», «в школе», «в кино».",
      "Если речь идёт о поверхности, часто требуется auf, а не in."
    ]
  },
  "index": 295
}
```

---

## Finding 27

**Audit ID:** `LRB084-0027`
**Finding Stable ID:** `g2/a1/ru|a1-ins|a1.card.a1-ins.study.important[2]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-ins`
**Field / path:** `a1.card.a1-ins.study.important[2]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Для мужского рода: ин ден Вальд • Женщин: в die Schule.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"В • Внутрь • Куда?","study":{"id":"a1-ins","layout":"standardStudy","translation":"В • Внутрь • Куда?","explanation":["ins — сокращение предлога in и артикля das.","Полная форма: in das; она отвечает на вопрос «куда?».","ins употребляется с существительными среднего рода в винительном падеже, когда речь идёт о движении внутрь.","Часто встречается с глаголами gehen, fahren, kommen, legen, stecken.","На практике почти всегда употребляют ins, а не полную форму in das."],"examples":[{"de":"Ich gehe ins Kino.","lv":"Я иду в кино."},{"de":"Sie geht ins Bett.","lv":"Она ложится спать."},{"de":"Wir fahren ins Ausland.","lv":"Мы едем за границу."},{"de":"Komm ins Haus!","lv":"Заходи в дом!"},{"de":"Er steckt das Geld in den Geldbeutel.","lv":"Он кладёт деньги в кошелёк."},{"de":"Wir gehen ins Museum.","lv":"Мы идём в музей."},{"de":"Sie legt die Blumen ins Wasser.","lv":"Она помещает цветы в воду."},{"de":"Fahr bitte ins Zentrum.","lv":"Пожалуйста, езжай в центр."}],"comparison":[{"word":"ins","meaning":"Внутрь • Куда? (Akkusativ)","example":"ins Kino – в кино"},{"word":"im","meaning":"Внутри • Где? (Dativ)","example":"im Kino – в кино"},{"word":"in","meaning":"В • Внутрь (с отдельным артиклем)","example":"in die Stadt – в город"},{"word":"aufs","meaning":"На поверхность (Akkusativ)","example":"aufs Dach – на крышу"},{"word":"zum","meaning":"К (Dativ)","example":"zum Arzt – к врачу"}],"tip":["Запомните: in + das → ins; это направление и вопрос «куда?».","Куда? → ins; где? → im — это главное различие."],"important":["ins = in das; употребляется с существительными среднего рода в винительном падеже.","ins отвечает на вопрос «куда?»: это движение, а не местонахождение.","С существительным мужского рода: in den Wald; с существительным женского рода: in die Schule.","Не путайте: ins Kino gehen — идти в кино; im Kino sein — быть в кино."]}}
**Note:** Pilna RU kartīte «ins»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ins",
  "lv": "В • Внутрь • Куда?",
  "level": "A1",
  "study": {
    "id": "a1-ins",
    "layout": "standardStudy",
    "translation": "В • Внутрь • Куда?",
    "explanation": [
      "ins — сокращение предлога in и артикля das.",
      "Полная форма: in das; она отвечает на вопрос «куда?».",
      "ins употребляется с существительными среднего рода в винительном падеже, когда речь идёт о движении внутрь.",
      "Часто встречается с глаголами gehen, fahren, kommen, legen, stecken.",
      "На практике почти всегда употребляют ins, а не полную форму in das."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Я иду в кино."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Она ложится спать."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Мы едем за границу."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Заходи в дом!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Он кладёт деньги в кошелёк."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Мы идём в музей."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Она помещает цветы в воду."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Пожалуйста, езжай в центр."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "Внутрь • Куда? (Akkusativ)",
        "example": "ins Kino – в кино"
      },
      {
        "word": "im",
        "meaning": "Внутри • Где? (Dativ)",
        "example": "im Kino – в кино"
      },
      {
        "word": "in",
        "meaning": "В • Внутрь (с отдельным артиклем)",
        "example": "in die Stadt – в город"
      },
      {
        "word": "aufs",
        "meaning": "На поверхность (Akkusativ)",
        "example": "aufs Dach – на крышу"
      },
      {
        "word": "zum",
        "meaning": "К (Dativ)",
        "example": "zum Arzt – к врачу"
      }
    ],
    "tip": [
      "Запомните: in + das → ins; это направление и вопрос «куда?».",
      "Куда? → ins; где? → im — это главное различие."
    ],
    "important": [
      "ins = in das; употребляется с существительными среднего рода в винительном падеже.",
      "ins отвечает на вопрос «куда?»: это движение, а не местонахождение.",
      "С существительным мужского рода: in den Wald; с существительным женского рода: in die Schule.",
      "Не путайте: ins Kino gehen — идти в кино; im Kino sein — быть в кино."
    ]
  },
  "index": 296
}
```

---

## Finding 28

**Audit ID:** `LRB084-0028`
**Finding Stable ID:** `g2/a1/ru|a1-ins|a1.card.a1-ins.study.tip[1]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-ins`
**Field / path:** `a1.card.a1-ins.study.tip[1]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Где? → инс • Где? → им - это главное отличие!
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"В • Внутрь • Куда?","study":{"id":"a1-ins","layout":"standardStudy","translation":"В • Внутрь • Куда?","explanation":["ins — сокращение предлога in и артикля das.","Полная форма: in das; она отвечает на вопрос «куда?».","ins употребляется с существительными среднего рода в винительном падеже, когда речь идёт о движении внутрь.","Часто встречается с глаголами gehen, fahren, kommen, legen, stecken.","На практике почти всегда употребляют ins, а не полную форму in das."],"examples":[{"de":"Ich gehe ins Kino.","lv":"Я иду в кино."},{"de":"Sie geht ins Bett.","lv":"Она ложится спать."},{"de":"Wir fahren ins Ausland.","lv":"Мы едем за границу."},{"de":"Komm ins Haus!","lv":"Заходи в дом!"},{"de":"Er steckt das Geld in den Geldbeutel.","lv":"Он кладёт деньги в кошелёк."},{"de":"Wir gehen ins Museum.","lv":"Мы идём в музей."},{"de":"Sie legt die Blumen ins Wasser.","lv":"Она помещает цветы в воду."},{"de":"Fahr bitte ins Zentrum.","lv":"Пожалуйста, езжай в центр."}],"comparison":[{"word":"ins","meaning":"Внутрь • Куда? (Akkusativ)","example":"ins Kino – в кино"},{"word":"im","meaning":"Внутри • Где? (Dativ)","example":"im Kino – в кино"},{"word":"in","meaning":"В • Внутрь (с отдельным артиклем)","example":"in die Stadt – в город"},{"word":"aufs","meaning":"На поверхность (Akkusativ)","example":"aufs Dach – на крышу"},{"word":"zum","meaning":"К (Dativ)","example":"zum Arzt – к врачу"}],"tip":["Запомните: in + das → ins; это направление и вопрос «куда?».","Куда? → ins; где? → im — это главное различие."],"important":["ins = in das; употребляется с существительными среднего рода в винительном падеже.","ins отвечает на вопрос «куда?»: это движение, а не местонахождение.","С существительным мужского рода: in den Wald; с существительным женского рода: in die Schule.","Не путайте: ins Kino gehen — идти в кино; im Kino sein — быть в кино."]}}
**Note:** Pilna RU kartīte «ins»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "ins",
  "lv": "В • Внутрь • Куда?",
  "level": "A1",
  "study": {
    "id": "a1-ins",
    "layout": "standardStudy",
    "translation": "В • Внутрь • Куда?",
    "explanation": [
      "ins — сокращение предлога in и артикля das.",
      "Полная форма: in das; она отвечает на вопрос «куда?».",
      "ins употребляется с существительными среднего рода в винительном падеже, когда речь идёт о движении внутрь.",
      "Часто встречается с глаголами gehen, fahren, kommen, legen, stecken.",
      "На практике почти всегда употребляют ins, а не полную форму in das."
    ],
    "examples": [
      {
        "de": "Ich gehe ins Kino.",
        "lv": "Я иду в кино."
      },
      {
        "de": "Sie geht ins Bett.",
        "lv": "Она ложится спать."
      },
      {
        "de": "Wir fahren ins Ausland.",
        "lv": "Мы едем за границу."
      },
      {
        "de": "Komm ins Haus!",
        "lv": "Заходи в дом!"
      },
      {
        "de": "Er steckt das Geld in den Geldbeutel.",
        "lv": "Он кладёт деньги в кошелёк."
      },
      {
        "de": "Wir gehen ins Museum.",
        "lv": "Мы идём в музей."
      },
      {
        "de": "Sie legt die Blumen ins Wasser.",
        "lv": "Она помещает цветы в воду."
      },
      {
        "de": "Fahr bitte ins Zentrum.",
        "lv": "Пожалуйста, езжай в центр."
      }
    ],
    "comparison": [
      {
        "word": "ins",
        "meaning": "Внутрь • Куда? (Akkusativ)",
        "example": "ins Kino – в кино"
      },
      {
        "word": "im",
        "meaning": "Внутри • Где? (Dativ)",
        "example": "im Kino – в кино"
      },
      {
        "word": "in",
        "meaning": "В • Внутрь (с отдельным артиклем)",
        "example": "in die Stadt – в город"
      },
      {
        "word": "aufs",
        "meaning": "На поверхность (Akkusativ)",
        "example": "aufs Dach – на крышу"
      },
      {
        "word": "zum",
        "meaning": "К (Dativ)",
        "example": "zum Arzt – к врачу"
      }
    ],
    "tip": [
      "Запомните: in + das → ins; это направление и вопрос «куда?».",
      "Куда? → ins; где? → im — это главное различие."
    ],
    "important": [
      "ins = in das; употребляется с существительными среднего рода в винительном падеже.",
      "ins отвечает на вопрос «куда?»: это движение, а не местонахождение.",
      "С существительным мужского рода: in den Wald; с существительным женского рода: in die Schule.",
      "Не путайте: ins Kino gehen — идти в кино; im Kino sein — быть в кино."
    ]
  },
  "index": 296
}
```

---

## Finding 29

**Audit ID:** `LRB084-0029`
**Finding Stable ID:** `g2/a1/ru|a1-kein|a1.card.a1-kein.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-kein`
**Field / path:** `a1.card.a1-kein.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Никто • Ничего
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Ни один • Никакой","study":{"id":"a1-kein","layout":"standardStudy","translation":"Ни один • Никакой","explanation":["Основная идея: kein — отрицательный артикль, который отрицает существительное; по-русски в зависимости от контекста это «ни один», «никакой» или конструкция с «нет».","kein склоняется так же, как ein (kein/keine/keinen…) и стоит перед существительным.","Со счётными существительными kein часто передаётся как «ни один» (kein Mensch = ни один человек).","С неисчисляемыми или абстрактными существительными kein часто переводится конструкцией «нет» (kein Geld = нет денег).","kein отрицает существительное, тогда как nicht может отрицать глагол, признак или всё предложение."],"examples":[{"de":"Ich habe kein Geld.","lv":"У меня нет денег."},{"de":"Es gibt keine Milch mehr.","lv":"Молока больше нет."},{"de":"Kein Mensch war da.","lv":"Там не было ни одного человека."},{"de":"Ich habe keine Zeit.","lv":"У меня нет времени."},{"de":"Das ist kein Problem.","lv":"Это не проблема."},{"de":"Wir haben keine Kinder.","lv":"У нас нет детей."}],"tip":["kein отрицает существительное (kein + существительное), а nicht — глагол, признак или предложение.","kein склоняется как ein: kein/keine/keinen/keiner."],"important":["kein + существительное означает «ни одного/никакого X» или передаётся конструкцией с «нет».","Неверно: Ich habe nicht ein Geld. → верно: Ich habe kein Geld."]}}
**Note:** Pilna RU kartīte «kein»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kein",
  "lv": "Ни один • Никакой",
  "level": "A1",
  "study": {
    "id": "a1-kein",
    "layout": "standardStudy",
    "translation": "Ни один • Никакой",
    "explanation": [
      "Основная идея: kein — отрицательный артикль, который отрицает существительное; по-русски в зависимости от контекста это «ни один», «никакой» или конструкция с «нет».",
      "kein склоняется так же, как ein (kein/keine/keinen…) и стоит перед существительным.",
      "Со счётными существительными kein часто передаётся как «ни один» (kein Mensch = ни один человек).",
      "С неисчисляемыми или абстрактными существительными kein часто переводится конструкцией «нет» (kein Geld = нет денег).",
      "kein отрицает существительное, тогда как nicht может отрицать глагол, признак или всё предложение."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "У меня нет денег."
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Молока больше нет."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Там не было ни одного человека."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "У меня нет времени."
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "Это не проблема."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "У нас нет детей."
      }
    ],
    "tip": [
      "kein отрицает существительное (kein + существительное), а nicht — глагол, признак или предложение.",
      "kein склоняется как ein: kein/keine/keinen/keiner."
    ],
    "important": [
      "kein + существительное означает «ни одного/никакого X» или передаётся конструкцией с «нет».",
      "Неверно: Ich habe nicht ein Geld. → верно: Ich habe kein Geld."
    ]
  },
  "index": 308
}
```

---

## Finding 30

**Audit ID:** `LRB084-0030`
**Finding Stable ID:** `g2/a1/ru|a1-kein|a1.card.a1-kein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-kein`
**Field / path:** `a1.card.a1-kein.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Никто • Ничего
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Ни один • Никакой","study":{"id":"a1-kein","layout":"standardStudy","translation":"Ни один • Никакой","explanation":["Основная идея: kein — отрицательный артикль, который отрицает существительное; по-русски в зависимости от контекста это «ни один», «никакой» или конструкция с «нет».","kein склоняется так же, как ein (kein/keine/keinen…) и стоит перед существительным.","Со счётными существительными kein часто передаётся как «ни один» (kein Mensch = ни один человек).","С неисчисляемыми или абстрактными существительными kein часто переводится конструкцией «нет» (kein Geld = нет денег).","kein отрицает существительное, тогда как nicht может отрицать глагол, признак или всё предложение."],"examples":[{"de":"Ich habe kein Geld.","lv":"У меня нет денег."},{"de":"Es gibt keine Milch mehr.","lv":"Молока больше нет."},{"de":"Kein Mensch war da.","lv":"Там не было ни одного человека."},{"de":"Ich habe keine Zeit.","lv":"У меня нет времени."},{"de":"Das ist kein Problem.","lv":"Это не проблема."},{"de":"Wir haben keine Kinder.","lv":"У нас нет детей."}],"tip":["kein отрицает существительное (kein + существительное), а nicht — глагол, признак или предложение.","kein склоняется как ein: kein/keine/keinen/keiner."],"important":["kein + существительное означает «ни одного/никакого X» или передаётся конструкцией с «нет».","Неверно: Ich habe nicht ein Geld. → верно: Ich habe kein Geld."]}}
**Note:** Pilna RU kartīte «kein»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kein",
  "lv": "Ни один • Никакой",
  "level": "A1",
  "study": {
    "id": "a1-kein",
    "layout": "standardStudy",
    "translation": "Ни один • Никакой",
    "explanation": [
      "Основная идея: kein — отрицательный артикль, который отрицает существительное; по-русски в зависимости от контекста это «ни один», «никакой» или конструкция с «нет».",
      "kein склоняется так же, как ein (kein/keine/keinen…) и стоит перед существительным.",
      "Со счётными существительными kein часто передаётся как «ни один» (kein Mensch = ни один человек).",
      "С неисчисляемыми или абстрактными существительными kein часто переводится конструкцией «нет» (kein Geld = нет денег).",
      "kein отрицает существительное, тогда как nicht может отрицать глагол, признак или всё предложение."
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "lv": "У меня нет денег."
      },
      {
        "de": "Es gibt keine Milch mehr.",
        "lv": "Молока больше нет."
      },
      {
        "de": "Kein Mensch war da.",
        "lv": "Там не было ни одного человека."
      },
      {
        "de": "Ich habe keine Zeit.",
        "lv": "У меня нет времени."
      },
      {
        "de": "Das ist kein Problem.",
        "lv": "Это не проблема."
      },
      {
        "de": "Wir haben keine Kinder.",
        "lv": "У нас нет детей."
      }
    ],
    "tip": [
      "kein отрицает существительное (kein + существительное), а nicht — глагол, признак или предложение.",
      "kein склоняется как ein: kein/keine/keinen/keiner."
    ],
    "important": [
      "kein + существительное означает «ни одного/никакого X» или передаётся конструкцией с «нет».",
      "Неверно: Ich habe nicht ein Geld. → верно: Ich habe kein Geld."
    ]
  },
  "index": 308
}
```

---

## Finding 31

**Audit ID:** `LRB084-0031`
**Finding Stable ID:** `g2/a1/ru|a1-koennen|a1.card.a1-koennen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-koennen`
**Field / path:** `a1.card.a1-koennen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Уметь • Знать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Мочь • Уметь","study":{"id":"a1-können","layout":"standardStudy","translation":"Мочь • Уметь","explanation":["Основная идея: können означает «мочь» или «уметь» что-либо делать.","Если речь идёт о способности или навыке, по-русски часто говорят «уметь».","Если речь идёт о возможности, употребляют «мочь».","können — модальный глагол, поэтому второй глагол обычно стоит в конце предложения."],"examples":[{"de":"Ich kann Deutsch sprechen.","lv":"Я умею говорить по-немецки."},{"de":"Kannst du mir helfen?","lv":"Ты можешь мне помочь?"},{"de":"Wir können heute kommen.","lv":"Мы можем прийти сегодня."},{"de":"Er kann gut schwimmen.","lv":"Он умеет хорошо плавать."}],"comparison":[{"word":"können","meaning":"Мочь • Уметь","example":"Ich kann schwimmen. – Я умею плавать."},{"word":"dürfen","meaning":"Иметь разрешение","example":"Darf ich gehen? – Можно мне уйти?"},{"word":"müssen","meaning":"Быть должным • Нужно","example":"Ich muss lernen. – Я должен учиться."},{"word":"wissen","meaning":"Знать","example":"Ich weiß das. – Я это знаю."}],"tip":{"text":"Запомните: навык или возможность → können."},"important":["können — не то же самое, что dürfen: können = «мочь/уметь», dürfen = «иметь разрешение».","В предложении с können второй глагол часто стоит в конце: Ich kann schwimmen."]}}
**Note:** Pilna RU kartīte «können»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "können",
  "lv": "Мочь • Уметь",
  "level": "A1",
  "study": {
    "id": "a1-können",
    "layout": "standardStudy",
    "translation": "Мочь • Уметь",
    "explanation": [
      "Основная идея: können означает «мочь» или «уметь» что-либо делать.",
      "Если речь идёт о способности или навыке, по-русски часто говорят «уметь».",
      "Если речь идёт о возможности, употребляют «мочь».",
      "können — модальный глагол, поэтому второй глагол обычно стоит в конце предложения."
    ],
    "examples": [
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Я умею говорить по-немецки."
      },
      {
        "de": "Kannst du mir helfen?",
        "lv": "Ты можешь мне помочь?"
      },
      {
        "de": "Wir können heute kommen.",
        "lv": "Мы можем прийти сегодня."
      },
      {
        "de": "Er kann gut schwimmen.",
        "lv": "Он умеет хорошо плавать."
      }
    ],
    "comparison": [
      {
        "word": "können",
        "meaning": "Мочь • Уметь",
        "example": "Ich kann schwimmen. – Я умею плавать."
      },
      {
        "word": "dürfen",
        "meaning": "Иметь разрешение",
        "example": "Darf ich gehen? – Можно мне уйти?"
      },
      {
        "word": "müssen",
        "meaning": "Быть должным • Нужно",
        "example": "Ich muss lernen. – Я должен учиться."
      },
      {
        "word": "wissen",
        "meaning": "Знать",
        "example": "Ich weiß das. – Я это знаю."
      }
    ],
    "tip": {
      "text": "Запомните: навык или возможность → können."
    },
    "important": [
      "können — не то же самое, что dürfen: können = «мочь/уметь», dürfen = «иметь разрешение».",
      "В предложении с können второй глагол часто стоит в конце: Ich kann schwimmen."
    ]
  },
  "index": 319
}
```

---

## Finding 32

**Audit ID:** `LRB084-0032`
**Finding Stable ID:** `g2/a1/ru|a1-koennen|a1.card.a1-koennen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-koennen`
**Field / path:** `a1.card.a1-koennen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Уметь • Знать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Мочь • Уметь","study":{"id":"a1-können","layout":"standardStudy","translation":"Мочь • Уметь","explanation":["Основная идея: können означает «мочь» или «уметь» что-либо делать.","Если речь идёт о способности или навыке, по-русски часто говорят «уметь».","Если речь идёт о возможности, употребляют «мочь».","können — модальный глагол, поэтому второй глагол обычно стоит в конце предложения."],"examples":[{"de":"Ich kann Deutsch sprechen.","lv":"Я умею говорить по-немецки."},{"de":"Kannst du mir helfen?","lv":"Ты можешь мне помочь?"},{"de":"Wir können heute kommen.","lv":"Мы можем прийти сегодня."},{"de":"Er kann gut schwimmen.","lv":"Он умеет хорошо плавать."}],"comparison":[{"word":"können","meaning":"Мочь • Уметь","example":"Ich kann schwimmen. – Я умею плавать."},{"word":"dürfen","meaning":"Иметь разрешение","example":"Darf ich gehen? – Можно мне уйти?"},{"word":"müssen","meaning":"Быть должным • Нужно","example":"Ich muss lernen. – Я должен учиться."},{"word":"wissen","meaning":"Знать","example":"Ich weiß das. – Я это знаю."}],"tip":{"text":"Запомните: навык или возможность → können."},"important":["können — не то же самое, что dürfen: können = «мочь/уметь», dürfen = «иметь разрешение».","В предложении с können второй глагол часто стоит в конце: Ich kann schwimmen."]}}
**Note:** Pilna RU kartīte «können»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "können",
  "lv": "Мочь • Уметь",
  "level": "A1",
  "study": {
    "id": "a1-können",
    "layout": "standardStudy",
    "translation": "Мочь • Уметь",
    "explanation": [
      "Основная идея: können означает «мочь» или «уметь» что-либо делать.",
      "Если речь идёт о способности или навыке, по-русски часто говорят «уметь».",
      "Если речь идёт о возможности, употребляют «мочь».",
      "können — модальный глагол, поэтому второй глагол обычно стоит в конце предложения."
    ],
    "examples": [
      {
        "de": "Ich kann Deutsch sprechen.",
        "lv": "Я умею говорить по-немецки."
      },
      {
        "de": "Kannst du mir helfen?",
        "lv": "Ты можешь мне помочь?"
      },
      {
        "de": "Wir können heute kommen.",
        "lv": "Мы можем прийти сегодня."
      },
      {
        "de": "Er kann gut schwimmen.",
        "lv": "Он умеет хорошо плавать."
      }
    ],
    "comparison": [
      {
        "word": "können",
        "meaning": "Мочь • Уметь",
        "example": "Ich kann schwimmen. – Я умею плавать."
      },
      {
        "word": "dürfen",
        "meaning": "Иметь разрешение",
        "example": "Darf ich gehen? – Можно мне уйти?"
      },
      {
        "word": "müssen",
        "meaning": "Быть должным • Нужно",
        "example": "Ich muss lernen. – Я должен учиться."
      },
      {
        "word": "wissen",
        "meaning": "Знать",
        "example": "Ich weiß das. – Я это знаю."
      }
    ],
    "tip": {
      "text": "Запомните: навык или возможность → können."
    },
    "important": [
      "können — не то же самое, что dürfen: können = «мочь/уметь», dürfen = «иметь разрешение».",
      "В предложении с können второй глагол часто стоит в конце: Ich kann schwimmen."
    ]
  },
  "index": 319
}
```

---

## Finding 33

**Audit ID:** `LRB084-0033`
**Finding Stable ID:** `g2/a1/ru|a1-kosten|a1.card.a1-kosten.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-kosten`
**Field / path:** `a1.card.a1-kosten.study.comparison[0].meaning`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Платить (цена) • Сколько
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Стоить","study":{"id":"a1-kosten","layout":"standardStudy","translation":"Стоить","explanation":["Основная идея: kosten означает «стоить» определённую сумму; речь идёт о цене вещи.","Этот глагол употребляют, когда спрашивают или говорят, сколько что-либо стоит, а не когда человек совершает платёж.","Вопрос о цене по-немецки часто начинается с Was kostet…?","Das kostet 5 Euro. означает «Это стоит 5 евро».","Если человек отдаёт деньги за товар или услугу, по-немецки употребляют bezahlen или zahlen."],"examples":[{"de":"Das kostet 5 Euro.","lv":"Это стоит 5 евро."},{"de":"Was kostet das?","lv":"Сколько это стоит?"},{"de":"Wie viel kostet der Pullover?","lv":"Сколько стоит свитер?"},{"de":"Das Essen kostet nicht viel.","lv":"Еда стоит недорого."},{"de":"Ich bezahle die Rechnung.","lv":"Я оплачиваю счёт."},{"de":"Kann ich bar bezahlen?","lv":"Могу я заплатить наличными?"},{"de":"Er zahlt mit Karte.","lv":"Он платит картой."},{"de":"Ich zahle gleich.","lv":"Я сейчас заплачу."}],"comparison":[{"word":"kosten","meaning":"Стоить • Иметь цену","example":"Das kostet 5 Euro. – Это стоит 5 евро."},{"word":"bezahlen","meaning":"Оплачивать • Платить деньги","example":"Ich bezahle die Rechnung. – Я оплачиваю счёт."},{"word":"zahlen","meaning":"Платить • Заплатить","example":"Kann ich bar zahlen? – Можно заплатить наличными?"},{"word":"Was kostet...?","meaning":"Сколько стоит…?","example":"Was kostet das Buch? – Сколько стоит книга?"}],"tip":["Вопрос о цене → kosten (Was kostet das?).","Совершение платежа → bezahlen / zahlen (Ich bezahle die Rechnung.)."],"important":["kosten и bezahlen не синонимы: kosten = «стоить»; bezahlen = «платить деньги».","По-русски это разные глаголы, поэтому выбирайте перевод по ситуации."]}}
**Note:** Pilna RU kartīte «kosten»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kosten",
  "lv": "Стоить",
  "level": "A1",
  "study": {
    "id": "a1-kosten",
    "layout": "standardStudy",
    "translation": "Стоить",
    "explanation": [
      "Основная идея: kosten означает «стоить» определённую сумму; речь идёт о цене вещи.",
      "Этот глагол употребляют, когда спрашивают или говорят, сколько что-либо стоит, а не когда человек совершает платёж.",
      "Вопрос о цене по-немецки часто начинается с Was kostet…?",
      "Das kostet 5 Euro. означает «Это стоит 5 евро».",
      "Если человек отдаёт деньги за товар или услугу, по-немецки употребляют bezahlen или zahlen."
    ],
    "examples": [
      {
        "de": "Das kostet 5 Euro.",
        "lv": "Это стоит 5 евро."
      },
      {
        "de": "Was kostet das?",
        "lv": "Сколько это стоит?"
      },
      {
        "de": "Wie viel kostet der Pullover?",
        "lv": "Сколько стоит свитер?"
      },
      {
        "de": "Das Essen kostet nicht viel.",
        "lv": "Еда стоит недорого."
      },
      {
        "de": "Ich bezahle die Rechnung.",
        "lv": "Я оплачиваю счёт."
      },
      {
        "de": "Kann ich bar bezahlen?",
        "lv": "Могу я заплатить наличными?"
      },
      {
        "de": "Er zahlt mit Karte.",
        "lv": "Он платит картой."
      },
      {
        "de": "Ich zahle gleich.",
        "lv": "Я сейчас заплачу."
      }
    ],
    "comparison": [
      {
        "word": "kosten",
        "meaning": "Стоить • Иметь цену",
        "example": "Das kostet 5 Euro. – Это стоит 5 евро."
      },
      {
        "word": "bezahlen",
        "meaning": "Оплачивать • Платить деньги",
        "example": "Ich bezahle die Rechnung. – Я оплачиваю счёт."
      },
      {
        "word": "zahlen",
        "meaning": "Платить • Заплатить",
        "example": "Kann ich bar zahlen? – Можно заплатить наличными?"
      },
      {
        "word": "Was kostet...?",
        "meaning": "Сколько стоит…?",
        "example": "Was kostet das Buch? – Сколько стоит книга?"
      }
    ],
    "tip": [
      "Вопрос о цене → kosten (Was kostet das?).",
      "Совершение платежа → bezahlen / zahlen (Ich bezahle die Rechnung.)."
    ],
    "important": [
      "kosten и bezahlen не синонимы: kosten = «стоить»; bezahlen = «платить деньги».",
      "По-русски это разные глаголы, поэтому выбирайте перевод по ситуации."
    ]
  },
  "index": 320
}
```

---

## Finding 34

**Audit ID:** `LRB084-0034`
**Finding Stable ID:** `g2/a1/ru|a1-kosten|a1.card.a1-kosten.study.important[0]|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-kosten`
**Field / path:** `a1.card.a1-kosten.study.important[0]`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Костен и безахлен не являются синонимами: костень = сколько стоит • Безахлен = платить деньги.
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Стоить","study":{"id":"a1-kosten","layout":"standardStudy","translation":"Стоить","explanation":["Основная идея: kosten означает «стоить» определённую сумму; речь идёт о цене вещи.","Этот глагол употребляют, когда спрашивают или говорят, сколько что-либо стоит, а не когда человек совершает платёж.","Вопрос о цене по-немецки часто начинается с Was kostet…?","Das kostet 5 Euro. означает «Это стоит 5 евро».","Если человек отдаёт деньги за товар или услугу, по-немецки употребляют bezahlen или zahlen."],"examples":[{"de":"Das kostet 5 Euro.","lv":"Это стоит 5 евро."},{"de":"Was kostet das?","lv":"Сколько это стоит?"},{"de":"Wie viel kostet der Pullover?","lv":"Сколько стоит свитер?"},{"de":"Das Essen kostet nicht viel.","lv":"Еда стоит недорого."},{"de":"Ich bezahle die Rechnung.","lv":"Я оплачиваю счёт."},{"de":"Kann ich bar bezahlen?","lv":"Могу я заплатить наличными?"},{"de":"Er zahlt mit Karte.","lv":"Он платит картой."},{"de":"Ich zahle gleich.","lv":"Я сейчас заплачу."}],"comparison":[{"word":"kosten","meaning":"Стоить • Иметь цену","example":"Das kostet 5 Euro. – Это стоит 5 евро."},{"word":"bezahlen","meaning":"Оплачивать • Платить деньги","example":"Ich bezahle die Rechnung. – Я оплачиваю счёт."},{"word":"zahlen","meaning":"Платить • Заплатить","example":"Kann ich bar zahlen? – Можно заплатить наличными?"},{"word":"Was kostet...?","meaning":"Сколько стоит…?","example":"Was kostet das Buch? – Сколько стоит книга?"}],"tip":["Вопрос о цене → kosten (Was kostet das?).","Совершение платежа → bezahlen / zahlen (Ich bezahle die Rechnung.)."],"important":["kosten и bezahlen не синонимы: kosten = «стоить»; bezahlen = «платить деньги».","По-русски это разные глаголы, поэтому выбирайте перевод по ситуации."]}}
**Note:** Pilna RU kartīte «kosten»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "kosten",
  "lv": "Стоить",
  "level": "A1",
  "study": {
    "id": "a1-kosten",
    "layout": "standardStudy",
    "translation": "Стоить",
    "explanation": [
      "Основная идея: kosten означает «стоить» определённую сумму; речь идёт о цене вещи.",
      "Этот глагол употребляют, когда спрашивают или говорят, сколько что-либо стоит, а не когда человек совершает платёж.",
      "Вопрос о цене по-немецки часто начинается с Was kostet…?",
      "Das kostet 5 Euro. означает «Это стоит 5 евро».",
      "Если человек отдаёт деньги за товар или услугу, по-немецки употребляют bezahlen или zahlen."
    ],
    "examples": [
      {
        "de": "Das kostet 5 Euro.",
        "lv": "Это стоит 5 евро."
      },
      {
        "de": "Was kostet das?",
        "lv": "Сколько это стоит?"
      },
      {
        "de": "Wie viel kostet der Pullover?",
        "lv": "Сколько стоит свитер?"
      },
      {
        "de": "Das Essen kostet nicht viel.",
        "lv": "Еда стоит недорого."
      },
      {
        "de": "Ich bezahle die Rechnung.",
        "lv": "Я оплачиваю счёт."
      },
      {
        "de": "Kann ich bar bezahlen?",
        "lv": "Могу я заплатить наличными?"
      },
      {
        "de": "Er zahlt mit Karte.",
        "lv": "Он платит картой."
      },
      {
        "de": "Ich zahle gleich.",
        "lv": "Я сейчас заплачу."
      }
    ],
    "comparison": [
      {
        "word": "kosten",
        "meaning": "Стоить • Иметь цену",
        "example": "Das kostet 5 Euro. – Это стоит 5 евро."
      },
      {
        "word": "bezahlen",
        "meaning": "Оплачивать • Платить деньги",
        "example": "Ich bezahle die Rechnung. – Я оплачиваю счёт."
      },
      {
        "word": "zahlen",
        "meaning": "Платить • Заплатить",
        "example": "Kann ich bar zahlen? – Можно заплатить наличными?"
      },
      {
        "word": "Was kostet...?",
        "meaning": "Сколько стоит…?",
        "example": "Was kostet das Buch? – Сколько стоит книга?"
      }
    ],
    "tip": [
      "Вопрос о цене → kosten (Was kostet das?).",
      "Совершение платежа → bezahlen / zahlen (Ich bezahle die Rechnung.)."
    ],
    "important": [
      "kosten и bezahlen не синонимы: kosten = «стоить»; bezahlen = «платить деньги».",
      "По-русски это разные глаголы, поэтому выбирайте перевод по ситуации."
    ]
  },
  "index": 320
}
```

---

## Finding 35

**Audit ID:** `LRB084-0035`
**Finding Stable ID:** `g2/a1/ru|a1-land|a1.card.a1-land.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-land`
**Field / path:** `a1.card.a1-land.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Страна • Земля
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Страна • Земля • Сельская местность","study":{"id":"a1-land","layout":"standardStudy","translation":"Страна • Земля • Сельская местность","explanation":["Основная идея: das Land чаще всего означает страну или сельскую местность за пределами города.","Если речь идёт о Германии, Латвии или другой территории с границами, das Land переводится как «страна».","Если речь идёт о местности за городом, das Land переводится как «сельская местность» или «деревня»; в некоторых контекстах — «земля».","Контекст определяет, имеется ли в виду страна, сельская местность или земля."],"examples":[{"de":"Deutschland ist ein schönes Land.","lv":"Германия — красивая страна."},{"de":"Ich komme aus einem kleinen Land.","lv":"Я родом из небольшой страны."},{"de":"Wir fahren aufs Land.","lv":"Мы едем за город."},{"de":"Auf dem Land ist es ruhig.","lv":"В сельской местности тихо."}],"comparison":[{"word":"das Land","meaning":"Страна • Земля • Сельская местность","example":"Deutschland ist ein Land. – Германия — страна."},{"word":"die Stadt","meaning":"Город","example":"Ich wohne in der Stadt. – Я живу в городе."},{"word":"das Dorf","meaning":"Деревня","example":"Er lebt in einem Dorf. – Он живёт в деревне."},{"word":"die Erde","meaning":"Земля • Планета","example":"Die Erde ist rund. – Земля круглая."}],"tip":{"text":"Запомните: страна → das Land; город → die Stadt."},"important":["aufs Land означает «за город/в сельскую местность», а не «в страну».","das Land — не то же самое, что die Stadt."]}}
**Note:** Pilna RU kartīte «Land»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Land",
  "de_article": "das",
  "de_plural": "die Länder",
  "lv": "Страна • Земля • Сельская местность",
  "level": "A1",
  "study": {
    "id": "a1-land",
    "layout": "standardStudy",
    "translation": "Страна • Земля • Сельская местность",
    "explanation": [
      "Основная идея: das Land чаще всего означает страну или сельскую местность за пределами города.",
      "Если речь идёт о Германии, Латвии или другой территории с границами, das Land переводится как «страна».",
      "Если речь идёт о местности за городом, das Land переводится как «сельская местность» или «деревня»; в некоторых контекстах — «земля».",
      "Контекст определяет, имеется ли в виду страна, сельская местность или земля."
    ],
    "examples": [
      {
        "de": "Deutschland ist ein schönes Land.",
        "lv": "Германия — красивая страна."
      },
      {
        "de": "Ich komme aus einem kleinen Land.",
        "lv": "Я родом из небольшой страны."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Мы едем за город."
      },
      {
        "de": "Auf dem Land ist es ruhig.",
        "lv": "В сельской местности тихо."
      }
    ],
    "comparison": [
      {
        "word": "das Land",
        "meaning": "Страна • Земля • Сельская местность",
        "example": "Deutschland ist ein Land. – Германия — страна."
      },
      {
        "word": "die Stadt",
        "meaning": "Город",
        "example": "Ich wohne in der Stadt. – Я живу в городе."
      },
      {
        "word": "das Dorf",
        "meaning": "Деревня",
        "example": "Er lebt in einem Dorf. – Он живёт в деревне."
      },
      {
        "word": "die Erde",
        "meaning": "Земля • Планета",
        "example": "Die Erde ist rund. – Земля круглая."
      }
    ],
    "tip": {
      "text": "Запомните: страна → das Land; город → die Stadt."
    },
    "important": [
      "aufs Land означает «за город/в сельскую местность», а не «в страну».",
      "das Land — не то же самое, что die Stadt."
    ]
  },
  "index": 351
}
```

---

## Finding 36

**Audit ID:** `LRB084-0036`
**Finding Stable ID:** `g2/a1/ru|a1-land|a1.card.a1-land.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-land`
**Field / path:** `a1.card.a1-land.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Страна • Земля
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Страна • Земля • Сельская местность","study":{"id":"a1-land","layout":"standardStudy","translation":"Страна • Земля • Сельская местность","explanation":["Основная идея: das Land чаще всего означает страну или сельскую местность за пределами города.","Если речь идёт о Германии, Латвии или другой территории с границами, das Land переводится как «страна».","Если речь идёт о местности за городом, das Land переводится как «сельская местность» или «деревня»; в некоторых контекстах — «земля».","Контекст определяет, имеется ли в виду страна, сельская местность или земля."],"examples":[{"de":"Deutschland ist ein schönes Land.","lv":"Германия — красивая страна."},{"de":"Ich komme aus einem kleinen Land.","lv":"Я родом из небольшой страны."},{"de":"Wir fahren aufs Land.","lv":"Мы едем за город."},{"de":"Auf dem Land ist es ruhig.","lv":"В сельской местности тихо."}],"comparison":[{"word":"das Land","meaning":"Страна • Земля • Сельская местность","example":"Deutschland ist ein Land. – Германия — страна."},{"word":"die Stadt","meaning":"Город","example":"Ich wohne in der Stadt. – Я живу в городе."},{"word":"das Dorf","meaning":"Деревня","example":"Er lebt in einem Dorf. – Он живёт в деревне."},{"word":"die Erde","meaning":"Земля • Планета","example":"Die Erde ist rund. – Земля круглая."}],"tip":{"text":"Запомните: страна → das Land; город → die Stadt."},"important":["aufs Land означает «за город/в сельскую местность», а не «в страну».","das Land — не то же самое, что die Stadt."]}}
**Note:** Pilna RU kartīte «Land»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Land",
  "de_article": "das",
  "de_plural": "die Länder",
  "lv": "Страна • Земля • Сельская местность",
  "level": "A1",
  "study": {
    "id": "a1-land",
    "layout": "standardStudy",
    "translation": "Страна • Земля • Сельская местность",
    "explanation": [
      "Основная идея: das Land чаще всего означает страну или сельскую местность за пределами города.",
      "Если речь идёт о Германии, Латвии или другой территории с границами, das Land переводится как «страна».",
      "Если речь идёт о местности за городом, das Land переводится как «сельская местность» или «деревня»; в некоторых контекстах — «земля».",
      "Контекст определяет, имеется ли в виду страна, сельская местность или земля."
    ],
    "examples": [
      {
        "de": "Deutschland ist ein schönes Land.",
        "lv": "Германия — красивая страна."
      },
      {
        "de": "Ich komme aus einem kleinen Land.",
        "lv": "Я родом из небольшой страны."
      },
      {
        "de": "Wir fahren aufs Land.",
        "lv": "Мы едем за город."
      },
      {
        "de": "Auf dem Land ist es ruhig.",
        "lv": "В сельской местности тихо."
      }
    ],
    "comparison": [
      {
        "word": "das Land",
        "meaning": "Страна • Земля • Сельская местность",
        "example": "Deutschland ist ein Land. – Германия — страна."
      },
      {
        "word": "die Stadt",
        "meaning": "Город",
        "example": "Ich wohne in der Stadt. – Я живу в городе."
      },
      {
        "word": "das Dorf",
        "meaning": "Деревня",
        "example": "Er lebt in einem Dorf. – Он живёт в деревне."
      },
      {
        "word": "die Erde",
        "meaning": "Земля • Планета",
        "example": "Die Erde ist rund. – Земля круглая."
      }
    ],
    "tip": {
      "text": "Запомните: страна → das Land; город → die Stadt."
    },
    "important": [
      "aufs Land означает «за город/в сельскую местность», а не «в страну».",
      "das Land — не то же самое, что die Stadt."
    ]
  },
  "index": 351
}
```

---

## Finding 37

**Audit ID:** `LRB084-0037`
**Finding Stable ID:** `g2/a1/ru|a1-lang|a1.card.a1-lang.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-lang`
**Field / path:** `a1.card.a1-lang.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Длинный • Длинный
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Длинный • Долгий","study":{"id":"a1-lang","layout":"standardStudy","translation":"Длинный • Долгий","explanation":["Основная идея: lang в пространственном значении означает «длинный», а во временном — «долгий».","Если речь идёт о размере или расстоянии, lang = «длинный» (ein langer Tisch = длинный стол).","Если речь идёт о продолжительности, lang = «долгий» (ein langer Tag = долгий день).","В выражении den ganzen Tag lang это означает «весь день».","В русском «длинный» и «долгий» — разные слова, а немецкое lang охватывает оба значения."],"examples":[{"de":"Der Tisch ist sehr lang.","lv":"Стол очень длинный."},{"de":"Der Film war sehr lang.","lv":"Фильм был очень долгим."},{"de":"Wie lange dauert es?","lv":"Как долго это длится?"},{"de":"Sie hat lange Haare.","lv":"У неё длинные волосы."},{"de":"Ich warte schon lange.","lv":"Я уже давно жду."},{"de":"Den ganzen Tag lang.","lv":"Весь день."}],"tip":["О размере или расстоянии (волосы, дорога, стол) → «длинный».","О времени (день, ожидание, фильм) → «долгий» или «долго»."],"important":["lang = «длинный» (размер) ИЛИ «долгий» (время) — по контексту.","wie lange = «как долго»; это вопрос о времени, а не о размере."]}}
**Note:** Pilna RU kartīte «lang»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lang",
  "lv": "Длинный • Долгий",
  "level": "A1",
  "study": {
    "id": "a1-lang",
    "layout": "standardStudy",
    "translation": "Длинный • Долгий",
    "explanation": [
      "Основная идея: lang в пространственном значении означает «длинный», а во временном — «долгий».",
      "Если речь идёт о размере или расстоянии, lang = «длинный» (ein langer Tisch = длинный стол).",
      "Если речь идёт о продолжительности, lang = «долгий» (ein langer Tag = долгий день).",
      "В выражении den ganzen Tag lang это означает «весь день».",
      "В русском «длинный» и «долгий» — разные слова, а немецкое lang охватывает оба значения."
    ],
    "examples": [
      {
        "de": "Der Tisch ist sehr lang.",
        "lv": "Стол очень длинный."
      },
      {
        "de": "Der Film war sehr lang.",
        "lv": "Фильм был очень долгим."
      },
      {
        "de": "Wie lange dauert es?",
        "lv": "Как долго это длится?"
      },
      {
        "de": "Sie hat lange Haare.",
        "lv": "У неё длинные волосы."
      },
      {
        "de": "Ich warte schon lange.",
        "lv": "Я уже давно жду."
      },
      {
        "de": "Den ganzen Tag lang.",
        "lv": "Весь день."
      }
    ],
    "tip": [
      "О размере или расстоянии (волосы, дорога, стол) → «длинный».",
      "О времени (день, ожидание, фильм) → «долгий» или «долго»."
    ],
    "important": [
      "lang = «длинный» (размер) ИЛИ «долгий» (время) — по контексту.",
      "wie lange = «как долго»; это вопрос о времени, а не о размере."
    ]
  },
  "index": 352
}
```

---

## Finding 38

**Audit ID:** `LRB084-0038`
**Finding Stable ID:** `g2/a1/ru|a1-lang|a1.card.a1-lang.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-lang`
**Field / path:** `a1.card.a1-lang.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Длинный • Длинный
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Длинный • Долгий","study":{"id":"a1-lang","layout":"standardStudy","translation":"Длинный • Долгий","explanation":["Основная идея: lang в пространственном значении означает «длинный», а во временном — «долгий».","Если речь идёт о размере или расстоянии, lang = «длинный» (ein langer Tisch = длинный стол).","Если речь идёт о продолжительности, lang = «долгий» (ein langer Tag = долгий день).","В выражении den ganzen Tag lang это означает «весь день».","В русском «длинный» и «долгий» — разные слова, а немецкое lang охватывает оба значения."],"examples":[{"de":"Der Tisch ist sehr lang.","lv":"Стол очень длинный."},{"de":"Der Film war sehr lang.","lv":"Фильм был очень долгим."},{"de":"Wie lange dauert es?","lv":"Как долго это длится?"},{"de":"Sie hat lange Haare.","lv":"У неё длинные волосы."},{"de":"Ich warte schon lange.","lv":"Я уже давно жду."},{"de":"Den ganzen Tag lang.","lv":"Весь день."}],"tip":["О размере или расстоянии (волосы, дорога, стол) → «длинный».","О времени (день, ожидание, фильм) → «долгий» или «долго»."],"important":["lang = «длинный» (размер) ИЛИ «долгий» (время) — по контексту.","wie lange = «как долго»; это вопрос о времени, а не о размере."]}}
**Note:** Pilna RU kartīte «lang»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lang",
  "lv": "Длинный • Долгий",
  "level": "A1",
  "study": {
    "id": "a1-lang",
    "layout": "standardStudy",
    "translation": "Длинный • Долгий",
    "explanation": [
      "Основная идея: lang в пространственном значении означает «длинный», а во временном — «долгий».",
      "Если речь идёт о размере или расстоянии, lang = «длинный» (ein langer Tisch = длинный стол).",
      "Если речь идёт о продолжительности, lang = «долгий» (ein langer Tag = долгий день).",
      "В выражении den ganzen Tag lang это означает «весь день».",
      "В русском «длинный» и «долгий» — разные слова, а немецкое lang охватывает оба значения."
    ],
    "examples": [
      {
        "de": "Der Tisch ist sehr lang.",
        "lv": "Стол очень длинный."
      },
      {
        "de": "Der Film war sehr lang.",
        "lv": "Фильм был очень долгим."
      },
      {
        "de": "Wie lange dauert es?",
        "lv": "Как долго это длится?"
      },
      {
        "de": "Sie hat lange Haare.",
        "lv": "У неё длинные волосы."
      },
      {
        "de": "Ich warte schon lange.",
        "lv": "Я уже давно жду."
      },
      {
        "de": "Den ganzen Tag lang.",
        "lv": "Весь день."
      }
    ],
    "tip": [
      "О размере или расстоянии (волосы, дорога, стол) → «длинный».",
      "О времени (день, ожидание, фильм) → «долгий» или «долго»."
    ],
    "important": [
      "lang = «длинный» (размер) ИЛИ «долгий» (время) — по контексту.",
      "wie lange = «как долго»; это вопрос о времени, а не о размере."
    ]
  },
  "index": 352
}
```

---

## Finding 39

**Audit ID:** `LRB084-0039`
**Finding Stable ID:** `g2/a1/ru|a1-lassen|a1.card.a1-lassen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-lassen`
**Field / path:** `a1.card.a1-lassen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Уйти • Пусть
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Оставлять • Позволять","study":{"id":"a1-lassen","layout":"standardStudy","translation":"Оставлять • Позволять","explanation":["Основная идея: lassen означает оставлять что-либо или позволять чему-либо произойти.","Если что-либо остаётся на месте, lassen переводится как «оставлять».","Если кому-либо дают разрешение, lassen переводится как «позволять».","В разговорной речи часто встречается Lass mich! = «Оставь меня!» или «Позволь мне!»."],"examples":[{"de":"Ich lasse die Tasche hier.","lv":"Я оставляю сумку здесь."},{"de":"Lass das bitte auf dem Tisch.","lv":"Оставь это, пожалуйста, на столе."},{"de":"Meine Eltern lassen mich gehen.","lv":"Родители позволяют мне уйти."},{"de":"Lass mich in Ruhe!","lv":"Оставь меня в покое!"}],"comparison":[{"word":"lassen","meaning":"Оставлять • Позволять","example":"Ich lasse das hier. – Я оставляю это здесь."},{"word":"bleiben","meaning":"Оставаться","example":"Ich bleibe hier. – Я остаюсь здесь."},{"word":"erlauben","meaning":"Разрешать","example":"Sie erlaubt mir das. – Она разрешает мне это."},{"word":"geben","meaning":"Давать","example":"Gib mir das Buch. – Дай мне книгу."}],"tip":{"text":"Запомните: что-либо оставляют на месте → lassen; кому-либо позволяют что-либо → lassen."},"important":["lassen означает не только «оставлять», но часто и «позволять».","Lass mich in Ruhe! — очень частая фраза: «Оставь меня в покое!»."]}}
**Note:** Pilna RU kartīte «lassen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lassen",
  "lv": "Оставлять • Позволять",
  "level": "A1",
  "study": {
    "id": "a1-lassen",
    "layout": "standardStudy",
    "translation": "Оставлять • Позволять",
    "explanation": [
      "Основная идея: lassen означает оставлять что-либо или позволять чему-либо произойти.",
      "Если что-либо остаётся на месте, lassen переводится как «оставлять».",
      "Если кому-либо дают разрешение, lassen переводится как «позволять».",
      "В разговорной речи часто встречается Lass mich! = «Оставь меня!» или «Позволь мне!»."
    ],
    "examples": [
      {
        "de": "Ich lasse die Tasche hier.",
        "lv": "Я оставляю сумку здесь."
      },
      {
        "de": "Lass das bitte auf dem Tisch.",
        "lv": "Оставь это, пожалуйста, на столе."
      },
      {
        "de": "Meine Eltern lassen mich gehen.",
        "lv": "Родители позволяют мне уйти."
      },
      {
        "de": "Lass mich in Ruhe!",
        "lv": "Оставь меня в покое!"
      }
    ],
    "comparison": [
      {
        "word": "lassen",
        "meaning": "Оставлять • Позволять",
        "example": "Ich lasse das hier. – Я оставляю это здесь."
      },
      {
        "word": "bleiben",
        "meaning": "Оставаться",
        "example": "Ich bleibe hier. – Я остаюсь здесь."
      },
      {
        "word": "erlauben",
        "meaning": "Разрешать",
        "example": "Sie erlaubt mir das. – Она разрешает мне это."
      },
      {
        "word": "geben",
        "meaning": "Давать",
        "example": "Gib mir das Buch. – Дай мне книгу."
      }
    ],
    "tip": {
      "text": "Запомните: что-либо оставляют на месте → lassen; кому-либо позволяют что-либо → lassen."
    },
    "important": [
      "lassen означает не только «оставлять», но часто и «позволять».",
      "Lass mich in Ruhe! — очень частая фраза: «Оставь меня в покое!»."
    ]
  },
  "index": 356
}
```

---

## Finding 40

**Audit ID:** `LRB084-0040`
**Finding Stable ID:** `g2/a1/ru|a1-lassen|a1.card.a1-lassen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-lassen`
**Field / path:** `a1.card.a1-lassen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Уйти • Пусть
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Оставлять • Позволять","study":{"id":"a1-lassen","layout":"standardStudy","translation":"Оставлять • Позволять","explanation":["Основная идея: lassen означает оставлять что-либо или позволять чему-либо произойти.","Если что-либо остаётся на месте, lassen переводится как «оставлять».","Если кому-либо дают разрешение, lassen переводится как «позволять».","В разговорной речи часто встречается Lass mich! = «Оставь меня!» или «Позволь мне!»."],"examples":[{"de":"Ich lasse die Tasche hier.","lv":"Я оставляю сумку здесь."},{"de":"Lass das bitte auf dem Tisch.","lv":"Оставь это, пожалуйста, на столе."},{"de":"Meine Eltern lassen mich gehen.","lv":"Родители позволяют мне уйти."},{"de":"Lass mich in Ruhe!","lv":"Оставь меня в покое!"}],"comparison":[{"word":"lassen","meaning":"Оставлять • Позволять","example":"Ich lasse das hier. – Я оставляю это здесь."},{"word":"bleiben","meaning":"Оставаться","example":"Ich bleibe hier. – Я остаюсь здесь."},{"word":"erlauben","meaning":"Разрешать","example":"Sie erlaubt mir das. – Она разрешает мне это."},{"word":"geben","meaning":"Давать","example":"Gib mir das Buch. – Дай мне книгу."}],"tip":{"text":"Запомните: что-либо оставляют на месте → lassen; кому-либо позволяют что-либо → lassen."},"important":["lassen означает не только «оставлять», но часто и «позволять».","Lass mich in Ruhe! — очень частая фраза: «Оставь меня в покое!»."]}}
**Note:** Pilna RU kartīte «lassen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "lassen",
  "lv": "Оставлять • Позволять",
  "level": "A1",
  "study": {
    "id": "a1-lassen",
    "layout": "standardStudy",
    "translation": "Оставлять • Позволять",
    "explanation": [
      "Основная идея: lassen означает оставлять что-либо или позволять чему-либо произойти.",
      "Если что-либо остаётся на месте, lassen переводится как «оставлять».",
      "Если кому-либо дают разрешение, lassen переводится как «позволять».",
      "В разговорной речи часто встречается Lass mich! = «Оставь меня!» или «Позволь мне!»."
    ],
    "examples": [
      {
        "de": "Ich lasse die Tasche hier.",
        "lv": "Я оставляю сумку здесь."
      },
      {
        "de": "Lass das bitte auf dem Tisch.",
        "lv": "Оставь это, пожалуйста, на столе."
      },
      {
        "de": "Meine Eltern lassen mich gehen.",
        "lv": "Родители позволяют мне уйти."
      },
      {
        "de": "Lass mich in Ruhe!",
        "lv": "Оставь меня в покое!"
      }
    ],
    "comparison": [
      {
        "word": "lassen",
        "meaning": "Оставлять • Позволять",
        "example": "Ich lasse das hier. – Я оставляю это здесь."
      },
      {
        "word": "bleiben",
        "meaning": "Оставаться",
        "example": "Ich bleibe hier. – Я остаюсь здесь."
      },
      {
        "word": "erlauben",
        "meaning": "Разрешать",
        "example": "Sie erlaubt mir das. – Она разрешает мне это."
      },
      {
        "word": "geben",
        "meaning": "Давать",
        "example": "Gib mir das Buch. – Дай мне книгу."
      }
    ],
    "tip": {
      "text": "Запомните: что-либо оставляют на месте → lassen; кому-либо позволяют что-либо → lassen."
    },
    "important": [
      "lassen означает не только «оставлять», но часто и «позволять».",
      "Lass mich in Ruhe! — очень частая фраза: «Оставь меня в покое!»."
    ]
  },
  "index": 356
}
```

---

## Finding 41

**Audit ID:** `LRB084-0041`
**Finding Stable ID:** `g2/a1/ru|a1-laufen|a1.card.a1-laufen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-laufen`
**Field / path:** `a1.card.a1-laufen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Бежать • Работать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Бежать • Работать","study":{"id":"a1-laufen","layout":"standardStudy","translation":"Бежать • Работать","explanation":["Основная идея: laufen означает «бежать», а об устройстве может означать «работать».","О человеке или животном laufen часто означает бежать или быстро идти.","О фильме, машине или программе laufen означает, что они идут, работают или выполняются.","Для движения пешком на уровне A1 чаще всего сравнивают gehen и laufen."],"examples":[{"de":"Er läuft sehr schnell.","lv":"Он бежит очень быстро."},{"de":"Die Kinder laufen im Park.","lv":"Дети бегают в парке."},{"de":"Der Film läuft schon.","lv":"Фильм уже идёт."},{"de":"Die Maschine läuft gut.","lv":"Машина работает хорошо."}],"comparison":[{"word":"laufen","meaning":"Бежать • Работать","example":"Er läuft schnell. – Он быстро бежит."},{"word":"gehen","meaning":"Идти пешком","example":"Ich gehe nach Hause. – Я иду домой."},{"word":"fahren","meaning":"Ехать на транспорте","example":"Ich fahre mit dem Bus. – Я еду на автобусе."},{"word":"funktionieren","meaning":"Работать • Функционировать","example":"Das funktioniert gut. – Это хорошо работает."}],"tip":{"text":"Запомните: быстрое движение ногами → laufen; движение на транспорте → fahren."},"important":["laufen означает не только «бежать»: о фильме или устройстве оно может означать «идти» или «работать».","Ich laufe обозначает движение пешком, а не поездку на транспорте."]}}
**Note:** Pilna RU kartīte «laufen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "laufen",
  "lv": "Бежать • Работать",
  "level": "A1",
  "study": {
    "id": "a1-laufen",
    "layout": "standardStudy",
    "translation": "Бежать • Работать",
    "explanation": [
      "Основная идея: laufen означает «бежать», а об устройстве может означать «работать».",
      "О человеке или животном laufen часто означает бежать или быстро идти.",
      "О фильме, машине или программе laufen означает, что они идут, работают или выполняются.",
      "Для движения пешком на уровне A1 чаще всего сравнивают gehen и laufen."
    ],
    "examples": [
      {
        "de": "Er läuft sehr schnell.",
        "lv": "Он бежит очень быстро."
      },
      {
        "de": "Die Kinder laufen im Park.",
        "lv": "Дети бегают в парке."
      },
      {
        "de": "Der Film läuft schon.",
        "lv": "Фильм уже идёт."
      },
      {
        "de": "Die Maschine läuft gut.",
        "lv": "Машина работает хорошо."
      }
    ],
    "comparison": [
      {
        "word": "laufen",
        "meaning": "Бежать • Работать",
        "example": "Er läuft schnell. – Он быстро бежит."
      },
      {
        "word": "gehen",
        "meaning": "Идти пешком",
        "example": "Ich gehe nach Hause. – Я иду домой."
      },
      {
        "word": "fahren",
        "meaning": "Ехать на транспорте",
        "example": "Ich fahre mit dem Bus. – Я еду на автобусе."
      },
      {
        "word": "funktionieren",
        "meaning": "Работать • Функционировать",
        "example": "Das funktioniert gut. – Это хорошо работает."
      }
    ],
    "tip": {
      "text": "Запомните: быстрое движение ногами → laufen; движение на транспорте → fahren."
    },
    "important": [
      "laufen означает не только «бежать»: о фильме или устройстве оно может означать «идти» или «работать».",
      "Ich laufe обозначает движение пешком, а не поездку на транспорте."
    ]
  },
  "index": 357
}
```

---

## Finding 42

**Audit ID:** `LRB084-0042`
**Finding Stable ID:** `g2/a1/ru|a1-laufen|a1.card.a1-laufen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-laufen`
**Field / path:** `a1.card.a1-laufen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Бежать • Работать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Бежать • Работать","study":{"id":"a1-laufen","layout":"standardStudy","translation":"Бежать • Работать","explanation":["Основная идея: laufen означает «бежать», а об устройстве может означать «работать».","О человеке или животном laufen часто означает бежать или быстро идти.","О фильме, машине или программе laufen означает, что они идут, работают или выполняются.","Для движения пешком на уровне A1 чаще всего сравнивают gehen и laufen."],"examples":[{"de":"Er läuft sehr schnell.","lv":"Он бежит очень быстро."},{"de":"Die Kinder laufen im Park.","lv":"Дети бегают в парке."},{"de":"Der Film läuft schon.","lv":"Фильм уже идёт."},{"de":"Die Maschine läuft gut.","lv":"Машина работает хорошо."}],"comparison":[{"word":"laufen","meaning":"Бежать • Работать","example":"Er läuft schnell. – Он быстро бежит."},{"word":"gehen","meaning":"Идти пешком","example":"Ich gehe nach Hause. – Я иду домой."},{"word":"fahren","meaning":"Ехать на транспорте","example":"Ich fahre mit dem Bus. – Я еду на автобусе."},{"word":"funktionieren","meaning":"Работать • Функционировать","example":"Das funktioniert gut. – Это хорошо работает."}],"tip":{"text":"Запомните: быстрое движение ногами → laufen; движение на транспорте → fahren."},"important":["laufen означает не только «бежать»: о фильме или устройстве оно может означать «идти» или «работать».","Ich laufe обозначает движение пешком, а не поездку на транспорте."]}}
**Note:** Pilna RU kartīte «laufen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "laufen",
  "lv": "Бежать • Работать",
  "level": "A1",
  "study": {
    "id": "a1-laufen",
    "layout": "standardStudy",
    "translation": "Бежать • Работать",
    "explanation": [
      "Основная идея: laufen означает «бежать», а об устройстве может означать «работать».",
      "О человеке или животном laufen часто означает бежать или быстро идти.",
      "О фильме, машине или программе laufen означает, что они идут, работают или выполняются.",
      "Для движения пешком на уровне A1 чаще всего сравнивают gehen и laufen."
    ],
    "examples": [
      {
        "de": "Er läuft sehr schnell.",
        "lv": "Он бежит очень быстро."
      },
      {
        "de": "Die Kinder laufen im Park.",
        "lv": "Дети бегают в парке."
      },
      {
        "de": "Der Film läuft schon.",
        "lv": "Фильм уже идёт."
      },
      {
        "de": "Die Maschine läuft gut.",
        "lv": "Машина работает хорошо."
      }
    ],
    "comparison": [
      {
        "word": "laufen",
        "meaning": "Бежать • Работать",
        "example": "Er läuft schnell. – Он быстро бежит."
      },
      {
        "word": "gehen",
        "meaning": "Идти пешком",
        "example": "Ich gehe nach Hause. – Я иду домой."
      },
      {
        "word": "fahren",
        "meaning": "Ехать на транспорте",
        "example": "Ich fahre mit dem Bus. – Я еду на автобусе."
      },
      {
        "word": "funktionieren",
        "meaning": "Работать • Функционировать",
        "example": "Das funktioniert gut. – Это хорошо работает."
      }
    ],
    "tip": {
      "text": "Запомните: быстрое движение ногами → laufen; движение на транспорте → fahren."
    },
    "important": [
      "laufen означает не только «бежать»: о фильме или устройстве оно может означать «идти» или «работать».",
      "Ich laufe обозначает движение пешком, а не поездку на транспорте."
    ]
  },
  "index": 357
}
```

---

## Finding 43

**Audit ID:** `LRB084-0043`
**Finding Stable ID:** `g2/a1/ru|a1-liegen|a1.card.a1-liegen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-liegen`
**Field / path:** `a1.card.a1-liegen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Быть • Спать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Лежать • Находиться","study":{"id":"a1-liegen","layout":"standardStudy","translation":"Лежать • Находиться","explanation":["Основная идея: liegen означает «лежать» или «находиться в горизонтальном положении».","О человеке liegen часто означает «лежать».","О предмете liegen означает, что он где-либо находится или лежит.","liegen отличается от legen, которое означает «класть» что-либо."],"examples":[{"de":"Das Buch liegt auf dem Tisch.","lv":"Книга лежит на столе."},{"de":"Mein Handy liegt im Auto.","lv":"Мой телефон лежит в машине."},{"de":"Er liegt im Bett.","lv":"Он лежит в постели."},{"de":"Ich lege das Buch auf den Tisch.","lv":"Я кладу книгу на стол."}],"comparison":[{"word":"liegen","meaning":"Лежать • Находиться","example":"Das Buch liegt hier. – Книга лежит здесь."},{"word":"legen","meaning":"Класть","example":"Ich lege das Buch hierhin. – Я кладу книгу сюда."},{"word":"stehen","meaning":"Стоять • Находиться вертикально","example":"Die Flasche steht auf dem Tisch. – Бутылка стоит на столе."},{"word":"sein","meaning":"Быть","example":"Ich bin hier. – Я здесь."}],"tip":{"text":"Запомните: предмет уже лежит на месте → liegen; вы кладёте его → legen."},"important":["liegen обозначает состояние или местонахождение.","legen обозначает действие: кто-либо кладёт что-либо."]}}
**Note:** Pilna RU kartīte «liegen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "liegen",
  "lv": "Лежать • Находиться",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "Лежать • Находиться",
    "explanation": [
      "Основная идея: liegen означает «лежать» или «находиться в горизонтальном положении».",
      "О человеке liegen часто означает «лежать».",
      "О предмете liegen означает, что он где-либо находится или лежит.",
      "liegen отличается от legen, которое означает «класть» что-либо."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Книга лежит на столе."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Мой телефон лежит в машине."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "Он лежит в постели."
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Я кладу книгу на стол."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "Лежать • Находиться",
        "example": "Das Buch liegt hier. – Книга лежит здесь."
      },
      {
        "word": "legen",
        "meaning": "Класть",
        "example": "Ich lege das Buch hierhin. – Я кладу книгу сюда."
      },
      {
        "word": "stehen",
        "meaning": "Стоять • Находиться вертикально",
        "example": "Die Flasche steht auf dem Tisch. – Бутылка стоит на столе."
      },
      {
        "word": "sein",
        "meaning": "Быть",
        "example": "Ich bin hier. – Я здесь."
      }
    ],
    "tip": {
      "text": "Запомните: предмет уже лежит на месте → liegen; вы кладёте его → legen."
    },
    "important": [
      "liegen обозначает состояние или местонахождение.",
      "legen обозначает действие: кто-либо кладёт что-либо."
    ]
  },
  "index": 377
}
```

---

## Finding 44

**Audit ID:** `LRB084-0044`
**Finding Stable ID:** `g2/a1/ru|a1-liegen|a1.card.a1-liegen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-liegen`
**Field / path:** `a1.card.a1-liegen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Быть • Спать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Лежать • Находиться","study":{"id":"a1-liegen","layout":"standardStudy","translation":"Лежать • Находиться","explanation":["Основная идея: liegen означает «лежать» или «находиться в горизонтальном положении».","О человеке liegen часто означает «лежать».","О предмете liegen означает, что он где-либо находится или лежит.","liegen отличается от legen, которое означает «класть» что-либо."],"examples":[{"de":"Das Buch liegt auf dem Tisch.","lv":"Книга лежит на столе."},{"de":"Mein Handy liegt im Auto.","lv":"Мой телефон лежит в машине."},{"de":"Er liegt im Bett.","lv":"Он лежит в постели."},{"de":"Ich lege das Buch auf den Tisch.","lv":"Я кладу книгу на стол."}],"comparison":[{"word":"liegen","meaning":"Лежать • Находиться","example":"Das Buch liegt hier. – Книга лежит здесь."},{"word":"legen","meaning":"Класть","example":"Ich lege das Buch hierhin. – Я кладу книгу сюда."},{"word":"stehen","meaning":"Стоять • Находиться вертикально","example":"Die Flasche steht auf dem Tisch. – Бутылка стоит на столе."},{"word":"sein","meaning":"Быть","example":"Ich bin hier. – Я здесь."}],"tip":{"text":"Запомните: предмет уже лежит на месте → liegen; вы кладёте его → legen."},"important":["liegen обозначает состояние или местонахождение.","legen обозначает действие: кто-либо кладёт что-либо."]}}
**Note:** Pilna RU kartīte «liegen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "liegen",
  "lv": "Лежать • Находиться",
  "level": "A1",
  "study": {
    "id": "a1-liegen",
    "layout": "standardStudy",
    "translation": "Лежать • Находиться",
    "explanation": [
      "Основная идея: liegen означает «лежать» или «находиться в горизонтальном положении».",
      "О человеке liegen часто означает «лежать».",
      "О предмете liegen означает, что он где-либо находится или лежит.",
      "liegen отличается от legen, которое означает «класть» что-либо."
    ],
    "examples": [
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "lv": "Книга лежит на столе."
      },
      {
        "de": "Mein Handy liegt im Auto.",
        "lv": "Мой телефон лежит в машине."
      },
      {
        "de": "Er liegt im Bett.",
        "lv": "Он лежит в постели."
      },
      {
        "de": "Ich lege das Buch auf den Tisch.",
        "lv": "Я кладу книгу на стол."
      }
    ],
    "comparison": [
      {
        "word": "liegen",
        "meaning": "Лежать • Находиться",
        "example": "Das Buch liegt hier. – Книга лежит здесь."
      },
      {
        "word": "legen",
        "meaning": "Класть",
        "example": "Ich lege das Buch hierhin. – Я кладу книгу сюда."
      },
      {
        "word": "stehen",
        "meaning": "Стоять • Находиться вертикально",
        "example": "Die Flasche steht auf dem Tisch. – Бутылка стоит на столе."
      },
      {
        "word": "sein",
        "meaning": "Быть",
        "example": "Ich bin hier. – Я здесь."
      }
    ],
    "tip": {
      "text": "Запомните: предмет уже лежит на месте → liegen; вы кладёте его → legen."
    },
    "important": [
      "liegen обозначает состояние или местонахождение.",
      "legen обозначает действие: кто-либо кладёт что-либо."
    ]
  },
  "index": 377
}
```

---

## Finding 45

**Audit ID:** `LRB084-0045`
**Finding Stable ID:** `g2/a1/ru|a1-machen|a1.card.a1-machen.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-machen`
**Field / path:** `a1.card.a1-machen.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Сделать • Сделать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Делать • Создавать","study":{"id":"a1-machen","layout":"standardStudy","translation":"Делать • Создавать","explanation":["Основная идея: machen — очень частый глагол со значениями «делать» и «готовить».","Если речь идёт о действии вообще, machen переводится как «делать».","Если что-либо создают или готовят, machen переводится как «делать» или «готовить».","Во многих выражениях machen нужно переводить естественно по смыслу, а не буквально."],"examples":[{"de":"Was machst du?","lv":"Что ты делаешь?"},{"de":"Ich mache Hausaufgaben.","lv":"Я делаю домашнее задание."},{"de":"Wir machen Pizza.","lv":"Мы готовим пиццу."},{"de":"Das macht Spaß.","lv":"Это весело."}],"tip":{"text":"Запомните: Was machst du? = «Что ты делаешь?»."},"important":["machen имеет очень широкое значение, поэтому по-русски его часто переводят по ситуации.","Das macht Spaß означает «Это весело», а не переводится буквально как «Это делает удовольствие»."]}}
**Note:** Pilna RU kartīte «machen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "machen",
  "lv": "Делать • Создавать",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "Делать • Создавать",
    "explanation": [
      "Основная идея: machen — очень частый глагол со значениями «делать» и «готовить».",
      "Если речь идёт о действии вообще, machen переводится как «делать».",
      "Если что-либо создают или готовят, machen переводится как «делать» или «готовить».",
      "Во многих выражениях machen нужно переводить естественно по смыслу, а не буквально."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "Что ты делаешь?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Я делаю домашнее задание."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Мы готовим пиццу."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "Это весело."
      }
    ],
    "tip": {
      "text": "Запомните: Was machst du? = «Что ты делаешь?»."
    },
    "important": [
      "machen имеет очень широкое значение, поэтому по-русски его часто переводят по ситуации.",
      "Das macht Spaß означает «Это весело», а не переводится буквально как «Это делает удовольствие»."
    ]
  },
  "index": 386
}
```

---

## Finding 46

**Audit ID:** `LRB084-0046`
**Finding Stable ID:** `g2/a1/ru|a1-machen|a1.card.a1-machen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-machen`
**Field / path:** `a1.card.a1-machen.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Сделать • Сделать
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Делать • Создавать","study":{"id":"a1-machen","layout":"standardStudy","translation":"Делать • Создавать","explanation":["Основная идея: machen — очень частый глагол со значениями «делать» и «готовить».","Если речь идёт о действии вообще, machen переводится как «делать».","Если что-либо создают или готовят, machen переводится как «делать» или «готовить».","Во многих выражениях machen нужно переводить естественно по смыслу, а не буквально."],"examples":[{"de":"Was machst du?","lv":"Что ты делаешь?"},{"de":"Ich mache Hausaufgaben.","lv":"Я делаю домашнее задание."},{"de":"Wir machen Pizza.","lv":"Мы готовим пиццу."},{"de":"Das macht Spaß.","lv":"Это весело."}],"tip":{"text":"Запомните: Was machst du? = «Что ты делаешь?»."},"important":["machen имеет очень широкое значение, поэтому по-русски его часто переводят по ситуации.","Das macht Spaß означает «Это весело», а не переводится буквально как «Это делает удовольствие»."]}}
**Note:** Pilna RU kartīte «machen»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "machen",
  "lv": "Делать • Создавать",
  "level": "A1",
  "study": {
    "id": "a1-machen",
    "layout": "standardStudy",
    "translation": "Делать • Создавать",
    "explanation": [
      "Основная идея: machen — очень частый глагол со значениями «делать» и «готовить».",
      "Если речь идёт о действии вообще, machen переводится как «делать».",
      "Если что-либо создают или готовят, machen переводится как «делать» или «готовить».",
      "Во многих выражениях machen нужно переводить естественно по смыслу, а не буквально."
    ],
    "examples": [
      {
        "de": "Was machst du?",
        "lv": "Что ты делаешь?"
      },
      {
        "de": "Ich mache Hausaufgaben.",
        "lv": "Я делаю домашнее задание."
      },
      {
        "de": "Wir machen Pizza.",
        "lv": "Мы готовим пиццу."
      },
      {
        "de": "Das macht Spaß.",
        "lv": "Это весело."
      }
    ],
    "tip": {
      "text": "Запомните: Was machst du? = «Что ты делаешь?»."
    },
    "important": [
      "machen имеет очень широкое значение, поэтому по-русски его часто переводят по ситуации.",
      "Das macht Spaß означает «Это весело», а не переводится буквально как «Это делает удовольствие»."
    ]
  },
  "index": 386
}
```

---

## Finding 47

**Audit ID:** `LRB084-0047`
**Finding Stable ID:** `g2/a1/ru|a1-mann|a1.card.a1-mann.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-mann`
**Field / path:** `a1.card.a1-mann.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Мужчина • Муж
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Мужчина • Муж","study":{"id":"a1-mann","layout":"standardStudy","translation":"Мужчина • Муж","explanation":["Основная идея: der Mann может означать мужчину или мужа.","Если речь идёт просто о человеке мужского пола, der Mann = «мужчина».","Если речь идёт о супруге, der Mann = «муж» (mein Mann = мой муж).","Притяжательное местоимение (mein/dein/ihr Mann) почти всегда указывает на мужа, то есть супруга.","Множественное число: die Männer.","У женской формы die Frau такое же двойное значение: женщина И жена."],"examples":[{"de":"Er ist ein netter Mann.","lv":"Он приятный мужчина."},{"de":"Das ist mein Mann.","lv":"Это мой муж."},{"de":"Wie viele Männer sind hier?","lv":"Сколько здесь мужчин?"},{"de":"Mein Mann arbeitet in Berlin.","lv":"Мой муж работает в Берлине."},{"de":"Der Mann trägt einen Anzug.","lv":"Мужчина носит костюм."},{"de":"Ihr Mann ist Arzt.","lv":"Её муж — врач."}],"tip":["С притяжательным местоимением (mein/dein/ihr Mann) почти всегда имеется в виду муж.","Без притяжательного местоимения (der Mann, ein Mann) обычно имеется в виду мужчина."],"important":["der Mann = «мужчина» ИЛИ «муж» — по контексту.","mein Mann = «мой муж», а не «мой мужчина».","Множественное число: die Männer."]}}
**Note:** Pilna RU kartīte «Mann»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Mann",
  "de_article": "der",
  "de_plural": "die Männer",
  "lv": "Мужчина • Муж",
  "level": "A1",
  "study": {
    "id": "a1-mann",
    "layout": "standardStudy",
    "translation": "Мужчина • Муж",
    "explanation": [
      "Основная идея: der Mann может означать мужчину или мужа.",
      "Если речь идёт просто о человеке мужского пола, der Mann = «мужчина».",
      "Если речь идёт о супруге, der Mann = «муж» (mein Mann = мой муж).",
      "Притяжательное местоимение (mein/dein/ihr Mann) почти всегда указывает на мужа, то есть супруга.",
      "Множественное число: die Männer.",
      "У женской формы die Frau такое же двойное значение: женщина И жена."
    ],
    "examples": [
      {
        "de": "Er ist ein netter Mann.",
        "lv": "Он приятный мужчина."
      },
      {
        "de": "Das ist mein Mann.",
        "lv": "Это мой муж."
      },
      {
        "de": "Wie viele Männer sind hier?",
        "lv": "Сколько здесь мужчин?"
      },
      {
        "de": "Mein Mann arbeitet in Berlin.",
        "lv": "Мой муж работает в Берлине."
      },
      {
        "de": "Der Mann trägt einen Anzug.",
        "lv": "Мужчина носит костюм."
      },
      {
        "de": "Ihr Mann ist Arzt.",
        "lv": "Её муж — врач."
      }
    ],
    "tip": [
      "С притяжательным местоимением (mein/dein/ihr Mann) почти всегда имеется в виду муж.",
      "Без притяжательного местоимения (der Mann, ein Mann) обычно имеется в виду мужчина."
    ],
    "important": [
      "der Mann = «мужчина» ИЛИ «муж» — по контексту.",
      "mein Mann = «мой муж», а не «мой мужчина».",
      "Множественное число: die Männer."
    ]
  },
  "index": 394
}
```

---

## Finding 48

**Audit ID:** `LRB084-0048`
**Finding Stable ID:** `g2/a1/ru|a1-mann|a1.card.a1-mann.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-mann`
**Field / path:** `a1.card.a1-mann.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** Мужчина • Муж
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"Мужчина • Муж","study":{"id":"a1-mann","layout":"standardStudy","translation":"Мужчина • Муж","explanation":["Основная идея: der Mann может означать мужчину или мужа.","Если речь идёт просто о человеке мужского пола, der Mann = «мужчина».","Если речь идёт о супруге, der Mann = «муж» (mein Mann = мой муж).","Притяжательное местоимение (mein/dein/ihr Mann) почти всегда указывает на мужа, то есть супруга.","Множественное число: die Männer.","У женской формы die Frau такое же двойное значение: женщина И жена."],"examples":[{"de":"Er ist ein netter Mann.","lv":"Он приятный мужчина."},{"de":"Das ist mein Mann.","lv":"Это мой муж."},{"de":"Wie viele Männer sind hier?","lv":"Сколько здесь мужчин?"},{"de":"Mein Mann arbeitet in Berlin.","lv":"Мой муж работает в Берлине."},{"de":"Der Mann trägt einen Anzug.","lv":"Мужчина носит костюм."},{"de":"Ihr Mann ist Arzt.","lv":"Её муж — врач."}],"tip":["С притяжательным местоимением (mein/dein/ihr Mann) почти всегда имеется в виду муж.","Без притяжательного местоимения (der Mann, ein Mann) обычно имеется в виду мужчина."],"important":["der Mann = «мужчина» ИЛИ «муж» — по контексту.","mein Mann = «мой муж», а не «мой мужчина».","Множественное число: die Männer."]}}
**Note:** Pilna RU kartīte «Mann»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "Mann",
  "de_article": "der",
  "de_plural": "die Männer",
  "lv": "Мужчина • Муж",
  "level": "A1",
  "study": {
    "id": "a1-mann",
    "layout": "standardStudy",
    "translation": "Мужчина • Муж",
    "explanation": [
      "Основная идея: der Mann может означать мужчину или мужа.",
      "Если речь идёт просто о человеке мужского пола, der Mann = «мужчина».",
      "Если речь идёт о супруге, der Mann = «муж» (mein Mann = мой муж).",
      "Притяжательное местоимение (mein/dein/ihr Mann) почти всегда указывает на мужа, то есть супруга.",
      "Множественное число: die Männer.",
      "У женской формы die Frau такое же двойное значение: женщина И жена."
    ],
    "examples": [
      {
        "de": "Er ist ein netter Mann.",
        "lv": "Он приятный мужчина."
      },
      {
        "de": "Das ist mein Mann.",
        "lv": "Это мой муж."
      },
      {
        "de": "Wie viele Männer sind hier?",
        "lv": "Сколько здесь мужчин?"
      },
      {
        "de": "Mein Mann arbeitet in Berlin.",
        "lv": "Мой муж работает в Берлине."
      },
      {
        "de": "Der Mann trägt einen Anzug.",
        "lv": "Мужчина носит костюм."
      },
      {
        "de": "Ihr Mann ist Arzt.",
        "lv": "Её муж — врач."
      }
    ],
    "tip": [
      "С притяжательным местоимением (mein/dein/ihr Mann) почти всегда имеется в виду муж.",
      "Без притяжательного местоимения (der Mann, ein Mann) обычно имеется в виду мужчина."
    ],
    "important": [
      "der Mann = «мужчина» ИЛИ «муж» — по контексту.",
      "mein Mann = «мой муж», а не «мой мужчина».",
      "Множественное число: die Männer."
    ]
  },
  "index": 394
}
```

---

## Finding 49

**Audit ID:** `LRB084-0049`
**Finding Stable ID:** `g2/a1/ru|a1-nach|a1.card.a1-nach.native|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-nach`
**Field / path:** `a1.card.a1-nach.native`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** До • После
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"В • После","study":{"id":"a1-nach","layout":"standardStudy","translation":"В • После","explanation":["Основная идея: nach означает направление «в» с некоторыми географическими названиями и «после» при указании времени или последовательности.","С городами и странами без артикля nach часто переводится как «в».","При указании времени nach означает «после».","В выражении nach Hause оно означает «домой»."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Я еду в Берлин."},{"de":"Wir gehen nach Hause.","lv":"Мы идём домой."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"После еды мы идём гулять."},{"de":"Es ist zehn nach acht.","lv":"Сейчас десять минут девятого."}],"comparison":[{"word":"nach","meaning":"В • После","example":"Ich fahre nach Berlin. – Я еду в Берлин."},{"word":"zu","meaning":"К","example":"Ich gehe zum Arzt. – Я иду к врачу."},{"word":"in","meaning":"Внутрь • В место с артиклем","example":"Ich gehe in die Schule. – Я иду в школу."},{"word":"vor","meaning":"До • Перед","example":"Vor dem Essen wasche ich die Hände. – Перед едой я мою руки."}],"tip":{"text":"Запомните: nach Hause — домой; nach Berlin — в Берлин; nach dem Essen — после еды."},"important":["nach употребляется не со всеми названиями мест.","«В школу» обычно in die Schule, а не nach Schule."]}}
**Note:** Pilna RU kartīte «nach»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nach",
  "lv": "В • После",
  "level": "A1",
  "study": {
    "id": "a1-nach",
    "layout": "standardStudy",
    "translation": "В • После",
    "explanation": [
      "Основная идея: nach означает направление «в» с некоторыми географическими названиями и «после» при указании времени или последовательности.",
      "С городами и странами без артикля nach часто переводится как «в».",
      "При указании времени nach означает «после».",
      "В выражении nach Hause оно означает «домой»."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Я еду в Берлин."
      },
      {
        "de": "Wir gehen nach Hause.",
        "lv": "Мы идём домой."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "После еды мы идём гулять."
      },
      {
        "de": "Es ist zehn nach acht.",
        "lv": "Сейчас десять минут девятого."
      }
    ],
    "comparison": [
      {
        "word": "nach",
        "meaning": "В • После",
        "example": "Ich fahre nach Berlin. – Я еду в Берлин."
      },
      {
        "word": "zu",
        "meaning": "К",
        "example": "Ich gehe zum Arzt. – Я иду к врачу."
      },
      {
        "word": "in",
        "meaning": "Внутрь • В место с артиклем",
        "example": "Ich gehe in die Schule. – Я иду в школу."
      },
      {
        "word": "vor",
        "meaning": "До • Перед",
        "example": "Vor dem Essen wasche ich die Hände. – Перед едой я мою руки."
      }
    ],
    "tip": {
      "text": "Запомните: nach Hause — домой; nach Berlin — в Берлин; nach dem Essen — после еды."
    },
    "important": [
      "nach употребляется не со всеми названиями мест.",
      "«В школу» обычно in die Schule, а не nach Schule."
    ]
  },
  "index": 426
}
```

---

## Finding 50

**Audit ID:** `LRB084-0050`
**Finding Stable ID:** `g2/a1/ru|a1-nach|a1.card.a1-nach.study.translation|MULTI_TRANSLATION|deterministic/multi-translation`
**Lang:** ru
**Card:** `a1-nach`
**Field / path:** `a1.card.a1-nach.study.translation`
**Severity:** MEDIUM
**Category:** MULTI_TRANSLATION_REVIEW_REQUIRED
**CURRENT (captured scope):** До • После
**OWNER STATUS:** LABOT
**OWNER_DECISION:** LABOT
**NEW (OWNER mapping):** {"lv":"В • После","study":{"id":"a1-nach","layout":"standardStudy","translation":"В • После","explanation":["Основная идея: nach означает направление «в» с некоторыми географическими названиями и «после» при указании времени или последовательности.","С городами и странами без артикля nach часто переводится как «в».","При указании времени nach означает «после».","В выражении nach Hause оно означает «домой»."],"examples":[{"de":"Ich fahre nach Berlin.","lv":"Я еду в Берлин."},{"de":"Wir gehen nach Hause.","lv":"Мы идём домой."},{"de":"Nach dem Essen gehen wir spazieren.","lv":"После еды мы идём гулять."},{"de":"Es ist zehn nach acht.","lv":"Сейчас десять минут девятого."}],"comparison":[{"word":"nach","meaning":"В • После","example":"Ich fahre nach Berlin. – Я еду в Берлин."},{"word":"zu","meaning":"К","example":"Ich gehe zum Arzt. – Я иду к врачу."},{"word":"in","meaning":"Внутрь • В место с артиклем","example":"Ich gehe in die Schule. – Я иду в школу."},{"word":"vor","meaning":"До • Перед","example":"Vor dem Essen wasche ich die Hände. – Перед едой я мою руки."}],"tip":{"text":"Запомните: nach Hause — домой; nach Berlin — в Берлин; nach dem Essen — после еды."},"important":["nach употребляется не со всеми названиями мест.","«В школу» обычно in die Schule, а не nach Schule."]}}
**Note:** Pilna RU kartīte «nach»: individuāli pārbaudīta un pilnībā atjaunota pēc oriģinālās LV→DE mācību kartītes; saglabāti visi DE piemēri un kontrasti.

### Gala card (approved NEW composite — full materialized card)

```json
{
  "de": "nach",
  "lv": "В • После",
  "level": "A1",
  "study": {
    "id": "a1-nach",
    "layout": "standardStudy",
    "translation": "В • После",
    "explanation": [
      "Основная идея: nach означает направление «в» с некоторыми географическими названиями и «после» при указании времени или последовательности.",
      "С городами и странами без артикля nach часто переводится как «в».",
      "При указании времени nach означает «после».",
      "В выражении nach Hause оно означает «домой»."
    ],
    "examples": [
      {
        "de": "Ich fahre nach Berlin.",
        "lv": "Я еду в Берлин."
      },
      {
        "de": "Wir gehen nach Hause.",
        "lv": "Мы идём домой."
      },
      {
        "de": "Nach dem Essen gehen wir spazieren.",
        "lv": "После еды мы идём гулять."
      },
      {
        "de": "Es ist zehn nach acht.",
        "lv": "Сейчас десять минут девятого."
      }
    ],
    "comparison": [
      {
        "word": "nach",
        "meaning": "В • После",
        "example": "Ich fahre nach Berlin. – Я еду в Берлин."
      },
      {
        "word": "zu",
        "meaning": "К",
        "example": "Ich gehe zum Arzt. – Я иду к врачу."
      },
      {
        "word": "in",
        "meaning": "Внутрь • В место с артиклем",
        "example": "Ich gehe in die Schule. – Я иду в школу."
      },
      {
        "word": "vor",
        "meaning": "До • Перед",
        "example": "Vor dem Essen wasche ich die Hände. – Перед едой я мою руки."
      }
    ],
    "tip": {
      "text": "Запомните: nach Hause — домой; nach Berlin — в Берлин; nach dem Essen — после еды."
    },
    "important": [
      "nach употребляется не со всеми названиями мест.",
      "«В школу» обычно in die Schule, а не nach Schule."
    ]
  },
  "index": 426
}
```

---

