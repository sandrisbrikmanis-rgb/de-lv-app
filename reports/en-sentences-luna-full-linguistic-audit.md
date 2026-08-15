# EN–DE Teikumi (Sätze) — Luna pilns lingvistiskais audits (GPT-5.6 Luna)

**Audita datums:** 2026-08-10
**Audita modelis:** gpt-5.6-luna
**Režģis:** READ-ONLY — production dati netika mainīti
**Audita faili:** `data/en/sentences.js`, mirror `www/data/en/sentences.js`
**Etalons (LV):** `data/sentences.js` (lv lauks = latviešu avots, READ-ONLY)
**DE avots:** `de` lauks (identisks LV un EN failos, READ-ONLY)

**Standarti:** LANGUAGE_AUDIT_STANDARD, APP_QUALITY_STANDARD

## Apjoms

| Metrika | Skaits |
| --- | ---: |
| Teikumi (SENTENCE_ENTRIES) | 796 |
| Luna auditēti | 796/796 |
| Batch skaits (~50 teikumi) | 16 |

## Deterministiskā pārbaude

| Pārbaude | Rezultāts |
| --- | --- |
| Ierakstu skaits (LV = EN) | PASS |
| DE lauku atbilstība | PASS |
| Sintakse (LV, EN, www) | PASS |
| Mirror (data = www) | PASS |
| Semikoli EN lv laukā | 0 |
| LV diakritiku atlikumi (auto) | 0 |
| Mojibake | 0 |
| Placeholder (TODO/TBD) | 0 |
| DE tikai lasāms | PASS |

## Luna atradumi (kvalitātes)

| Smagums | Skaits |
| --- | ---: |
| KRITISKA | 0 |
| AUGSTA | 84 |
| VIDĒJA | 143 |
| ZEMA | 21 |

| Kategorija | Skaits |
| --- | ---: |
| SEMANTICS | 78 |
| TRANSLATION | 66 |
| NATURALNESS | 50 |
| GRAMMAR | 26 |
| PUNCTUATION | 22 |
| ORTHOGRAPHY | 4 |
| REGISTER | 1 |
| FOREIGN_REMNANT | 1 |

| Nav kļūda (non-error) | Skaits |
| --- | ---: |
| DE_SOURCE_ISSUE | 0 |
| SOURCE_LV_ISSUE | 0 |
| STYLE_ONLY | 0 |
| PROJECT_CONVENTION | 0 |
| NEEDS_REVIEW | 0 |

## API lietojums

| Metrika | Skaits |
| --- | ---: |
| Batch pieprasījumi | 16 |
| Kopā tokeni | 103086 |
| Input tokeni | 47698 |
| Output tokeni | 55388 |

## Gala verdikts

**REPAIRS REQUIRED**

## Visi Luna atradumi (248)

| ID | DE | EN (pašreiz) | Ieteikums | Smagums | Kategorija | Pamatojums |
| --- | --- | --- | --- | --- | --- | --- |
| satze-2 | Das kann ich mir denken! | I know that! | I can imagine that! | HIGH | SEMANTICS | The German means that the speaker can imagine or infer it, not simply that they know it. |
| satze-5 | Desto mehr. | The more. | All the more. | MEDIUM | TRANSLATION | As a standalone comparative phrase, “desto mehr” is naturally translated as “all the more.” |
| satze-6 | Je mehr, desto besser. | The more the better. | The more, the better. | MEDIUM | PUNCTUATION | The English correlative comparative requires a comma between the two clauses. |
| satze-7 | Alles deutet auf Regen. | Everything points to the case. | Everything points to rain. | HIGH | SEMANTICS | The German refers to rain, not to a case. |
| satze-8 | Damit ist mir wenig gedient. | It makes little sense to me. | That is of little use to me. | MEDIUM | SEMANTICS | The German says something is of little use to the speaker, not that it lacks meaning. |
| satze-10 | Sprechen Sie doch! | Speak up! | Go on, speak! | MEDIUM | SEMANTICS | “Speak up” can mean speak louder, while the German urges the person to start speaking. |
| satze-11 | Es donnert. | Thunder roars. | It is thundering. | HIGH | SEMANTICS | The German is an impersonal weather statement, not a description of thunder roaring. |
| satze-17 | Kein Durchgang! | Do not go through! • Exit closed! | No passage! • Exit closed! | MEDIUM | NATURALNESS | “No passage!” matches the German noun-phrase sign and is more natural than the imperative. |
| satze-18 | Darf ich Sie bitten? | May i ask you | May I ask you? | MEDIUM | ORTHOGRAPHY | The pronoun “I” must be capitalised and the full sentence needs a question mark. |
| satze-26 | Du bildest dir nur ein, krank zu sein. | You just imagine that you are sick. | You're only imagining that you're ill. | MEDIUM | NATURALNESS | The current wording is unnatural and does not clearly convey “only imagining”. |
| satze-27 | Was fällt dir ein? | What comes to your mind? | How dare you? | HIGH | SEMANTICS | This German idiom expresses indignation, not a question about someone's thoughts. |
| satze-28 | Es war einmal. | Once there was. | Once upon a time. | HIGH | NATURALNESS | “Once there was” is incomplete and unnatural as the standard opening of a fairy tale. |
| satze-34 | Entschuldigen Sie bitte! | Excuse me, please! | Excuse me! | LOW | NATURALNESS | “Excuse me, please” is awkward in natural English because “excuse me” already functions as the polite formula. |
| satze-42 | Heraus mit der Sprache! | Talk! • Stories! | Out with it! • Tell me! | HIGH | SEMANTICS | The second English item is a noun, whereas both German items are imperatives urging someone to speak. |
| satze-47 | heute Nacht | Last night | Tonight | HIGH | SEMANTICS | “Heute Nacht” means “tonight”, whereas “last night” refers to the previous night. |
| satze-50 | Kannst du das bitte wiederholen? | Can you repeat that please? | Can you repeat that, please? | LOW | PUNCTUATION | A comma is conventionally used before the sentence-final politeness marker “please”. |
| satze-65 | Darauf musst du achten. | You should pay attention to that. | You must pay attention to that. | MEDIUM | SEMANTICS | “Musst” expresses obligation, whereas “should” weakens it to advice. |
| satze-82 |  |  |  | MEDIUM | TRANSLATION |  |
| satze-92 | Kannst du mich später anrufen? | Can you call me later | Can you call me later? | MEDIUM | PUNCTUATION | The English question is missing its final question mark. |
| satze-98 | Anklang finden. | Find an echo. • Find responsiveness | Resonate. • Find favour. | HIGH | NATURALNESS | The current wording is a literal, unnatural rendering and “responsiveness” is not idiomatic here. |
| satze-99 | Es kommt darauf an. | It depends on that. | It depends. | MEDIUM | NATURALNESS | As an isolated phrase, English normally omits “on that” unless a specific referent is stated. |
| satze-100 | Aus diesem Anlass. | Because of this time. • In this regard | On this occasion. • For this reason. | HIGH | SEMANTICS | The first translation is unidiomatic and the second does not convey the meaning of Anlass. |
| satze-102 | Was hast du da angerichtet? | What have you done there | What have you done there? | MEDIUM | PUNCTUATION | The full English question is missing its question mark. |
| satze-106 | Stell dich nicht so an! | Don't pretend! | Don't make such a fuss! | HIGH | SEMANTICS | The German idiom means to make a fuss or be difficult, not to pretend. |
| satze-107 | An die Arbeit gehen. | Get to work. | To get to work. | LOW | GRAMMAR | The German is an infinitive phrase, whereas the English is an imperative. |
| satze-109 | Guten Appetit! | Good appetite! | Enjoy your meal! | HIGH | NATURALNESS | “Good appetite” is not the normal English expression used before a meal. |
| satze-111 | Auf jeden Fall. | In each case. | In any case. | HIGH | SEMANTICS | The German means “in any case” or “definitely”, not “in each case”. |
| satze-114 | Er hat den Kredit aufgenommen. | He took a loan. | He took out a loan. | MEDIUM | NATURALNESS | English normally uses “take out a loan” for obtaining borrowed money. |
| satze-116 | Ich höre jetzt auf. | I will stop now. | I'm stopping now. | MEDIUM | SEMANTICS | The German uses a present-tense announcement, best expressed by the present progressive here. |
| satze-122 | Für den Schaden aufkommen. | Cover the damages. | To pay for the damage. | MEDIUM | GRAMMAR | The German is an infinitive phrase, and “pay for the damage” is the natural meaning. |
| satze-124 | Aufrecht sitzen. | Sit up straight. | To sit up straight. | LOW | GRAMMAR | The German is an infinitive phrase, whereas the English is an imperative. |
| satze-125 | Er ist auf. | He has stood up. | He is up. | HIGH | SEMANTICS | The German describes his current state, not the completed action of standing up. |
| satze-126 | Alle Kräfte aufwenden. | Devote all your strength. | To use all one's strength. | LOW | GRAMMAR | The German is an infinitive phrase; the current English is an imperative with “your”. |
| satze-127 | Viel Mühe aufwenden. | Try very hard. | To make a great effort. | LOW | GRAMMAR | The German is an infinitive phrase, whereas the English is an imperative. |
| satze-128 | Geh mir aus den Augen! | Don't look at me again! | Get out of my sight! | HIGH | SEMANTICS | The German is a strong dismissal, not a request not to look at the speaker. |
| satze-129 | Unter vier Augen. | In two. • Quietly | In private. • Between the two of us. | HIGH | SEMANTICS | The idiom means privately or confidentially, not simply “in two” or “quietly”. |
| satze-133 | Auf Äußerlichkeiten Wert legen. | Give importance to appearance. | To attach importance to outward appearance. | MEDIUM | NATURALNESS | The current wording is awkward and lacks the German infinitive form. |
| satze-134 | Im äußersten Fall. | In the worst case. | In the most extreme case. | MEDIUM | SEMANTICS | “Äußersten” means most extreme, not necessarily worst. |
| satze-137 | Er hat gute Aussichten. | He has a good chance. | He has good prospects. | MEDIUM | SEMANTICS | The German uses plural “Aussichten” and refers to prospects, not one chance. |
| satze-140 | Wann wurden die Meisterschaftskämpfe ausgetragen? | When was the championship? | When were the championship matches held? | MEDIUM | SEMANTICS | The current version loses both the plural matches and the meaning of “were held”. |
| satze-142 | Einfluss ausüben. | To influence. | To exert influence. | MEDIUM | SEMANTICS | The German expression specifically means to exert or wield influence. |
| satze-148 | Auf die lange Bank schieben. | Procrastinate. • Drag to length • Postpone indefinitely | Procrastinate. • Drag it out. • Postpone indefinitely. | HIGH | SEMANTICS | “Drag to length” is not an English expression; the idiom is “drag it out”. |
| satze-151 | Mist bauen. | Shoot. • Make a fool of yourself | Mess up. • Make a fool of yourself | HIGH | TRANSLATION | “Mist bauen” means to mess up or make a blunder, not “shoot”. |
| satze-164 | Bei Beginn. | Starting | At the start. | MEDIUM | TRANSLATION | “Starting” is incomplete and does not naturally represent this prepositional phrase. |
| satze-166 | Mit seiner Begleitung. | With accompaniment. | With his companion. | MEDIUM | SEMANTICS | “Begleitung” here means a person accompanying him, not musical or other accompaniment. |
| satze-167 | Er ist schwer von Begriff. | He is slow to perceive. • He has slow thinking | He is slow to understand. • He is slow-witted. | HIGH | NATURALNESS | The current wording is unnatural and does not express the German idiom naturally. |
| satze-168 | Im Gedächtnis behalten. | Remember. • Keep in memory | Remember. • Keep in mind | MEDIUM | NATURALNESS | “Keep in memory” is not idiomatic English; “keep in mind” is the natural expression. |
| satze-172 | Bei weitem nicht so. | Not at all. | Not nearly so. | HIGH | SEMANTICS | The German means “not nearly so”, retaining a comparison; “not at all” changes the meaning. |
| satze-173 | Alle beide. | Both two. | Both. | MEDIUM | NATURALNESS | “Both two” is redundant and unidiomatic; “both” expresses the meaning naturally. |
| satze-175 | Beifall finden. | Obtain consent. | Meet with approval. | HIGH | SEMANTICS | The phrase means to receive approval or applause, not to obtain consent. |
| satze-180 | Beitrag leisten. | Invest your share. | Make a contribution. | HIGH | TRANSLATION | “Beitrag leisten” means to make or provide a contribution, not to invest a share. |
| satze-183 | Belegte Brötchen. | Sandwiches with toppings. | Filled bread rolls. | MEDIUM | NATURALNESS | “Sandwiches with toppings” is awkward and does not reflect the specific meaning of Brötchen. |
| satze-188 | Bereit sein. | Be ready. • Be at peace | Be ready. • Be willing | HIGH | SEMANTICS | The second meaning is “be willing” or “be agreeable”, not “be at peace”. |
| satze-190 | Bericht erstatten. | Report. • Provide a report • Provide an overview | Report. • Provide a report • Give an account | MEDIUM | SEMANTICS | “Bericht” means a report or account, not specifically an overview. |
| satze-192 | Neue Besen kehren gut. | A new broom sweeps well. | New brooms sweep clean. | MEDIUM | NATURALNESS | The current literal translation is understandable but misses the established English proverb. |
| satze-195 | Desto besser. | The better. | All the better. | MEDIUM | GRAMMAR | “The better” is incomplete in English; “all the better” is the natural phrase. |
| satze-197 | Beim besten Willen. | Whatever you want. | Despite my best efforts. | HIGH | SEMANTICS | The German phrase expresses inability despite good intentions, not granting someone whatever they want. |
| satze-198 | Am besten. | The best. | Ideally. | MEDIUM | GRAMMAR | “Am besten” is an adverbial phrase; “the best” is a noun phrase and does not fit here. |
| satze-202 | Ganz bestimmt. | Definitely. • Completely safe | Definitely. | MEDIUM | SEMANTICS | “Completely safe” does not correspond to the German phrase and introduces an unrelated meaning. |
| satze-204 | Zu Besuch sein. | To visit. • To visit | To be visiting. • To be a guest. | MEDIUM | SEMANTICS | The German means being on a visit or being a guest, not simply visiting. |
| satze-210 | Alle beiden. | Both two. | Both of them. | HIGH | GRAMMAR | “Both two” is ungrammatical English; the German is an emphatic reference to both persons or things. |
| satze-212 |  |  |  | MEDIUM | TRANSLATION |  |
| satze-213 | Bitte schön. | Please | Please. | LOW | PUNCTUATION | As a full sentence, the English translation needs terminal punctuation. |
| satze-214 | Wie bitte? | How please | Pardon? | HIGH | TRANSLATION | “How please” is not an English expression; “Wie bitte?” means “Pardon?” or “What did you say?” |
| satze-215 | Bitte sehr. | Please | Please. | LOW | PUNCTUATION | As a full sentence, the English translation needs terminal punctuation. |
| satze-216 | Ich habe eine Bitte an Sie. | I have a request for you. | I have a request to make of you. | MEDIUM | NATURALNESS | “A request to make of you” is the natural English construction for this formal phrase. |
| satze-217 | Trompete blasen. | Blow the trumpet. | Play the trumpet. | LOW | NATURALNESS | English normally says “play the trumpet” for producing music with the instrument. |
| satze-218 | In einem Buch blättern. | Sort the book. | Leaf through a book. | HIGH | SEMANTICS | “Blättern” means to leaf through or browse pages, not to sort a book. |
| satze-219 | Mit bloßen Füßen. | Bare feet. | Barefoot. | MEDIUM | SEMANTICS | The current text is a noun phrase and omits the German meaning “with bare feet.” |
| satze-223 | Bitte checken. | Check. • Check | Please check. | MEDIUM | TRANSLATION | “Bitte” is omitted, and the repeated second translation does not reflect a separate German meaning. |
| satze-225 | Alles spricht dafür. | Everything speaks well. | Everything points to it. | MEDIUM | SEMANTICS | The German means that all the evidence supports or points to something, not that everything speaks well. |
| satze-226 | Ich kann nichts dafür. | I can't do anything there. | It's not my fault. | HIGH | SEMANTICS | This German expression means “It's not my fault” or “I can't help it,” not inability to act there. |
| satze-230 | Mit der Dame ziehen. | Make a lady's move. | Move the queen. | HIGH | SEMANTICS | In chess, “die Dame” is the queen; “lady's move” is not the intended English meaning. |
| satze-239 | Lass den Kopf nicht hängen! | Don't lower your head! | Don't let your head hang! | MEDIUM | NATURALNESS | The German is an idiom meaning not to become discouraged; “lower your head” is overly literal. |
| satze-242 | von Haus aus | Since childhood • From the very beginning | By nature. • From the outset. | MEDIUM | SEMANTICS | “Von Haus aus” commonly means inherently or by nature; “since childhood” is not the core meaning. |
| satze-243 | Meinen herzlichsten Glückwunsch! | Congratulations! | My warmest congratulations! | MEDIUM | SEMANTICS | The current translation omits the possessive and superlative warmth expressed by “meinen herzlichsten.” |
| satze-244 | Seien Sie so gut! | Be so kind! • Be so good! | Please! • Be so kind! | MEDIUM | NATURALNESS | “Be so good” is not natural as a standalone English request; “Please” conveys this use better. |
| satze-251 | gestern Abend | Last night | Yesterday evening | MEDIUM | SEMANTICS | “Last night” usually means the previous night, while Abend means evening. |
| satze-254 | Mach keine Geschichten! | Don't do nonsense! • Don't make jokes! | Don't make a fuss! • Don't cause trouble! | HIGH | TRANSLATION | Both current versions are unnatural or change the idiomatic meaning of the German. |
| satze-255 | Geschweige denn... | Not to mention that. • Where else | Not to mention that... • Let alone... | HIGH | TRANSLATION | “Where else” is not the meaning of “geschweige denn”; the first version also needs the source ellipsis. |
| satze-257 | Wie geht es Ihnen? | How are you • How are you? | How are you? • How are you? | MEDIUM | PUNCTUATION | The first complete English question is missing its question mark. |
| satze-258 | Frag ihn gelegentlich, ob... | Ask him if he comes out if... | Ask him occasionally whether... | HIGH | TRANSLATION | “Gelegentlich” means occasionally, not “comes out”; the current sentence is ungrammatical. |
| satze-262 | Aus diesem Brief folgt, dass... | It appears from this letter that... | It follows from this letter that... | MEDIUM | SEMANTICS | “Folgt” expresses a conclusion that follows, not merely an appearance or impression. |
| satze-263 | Fahre fort! | Keep it up! | Go on! | MEDIUM | TRANSLATION | “Keep it up” implies praise for continuing good work; “Fahre fort” simply means continue or go on. |
| satze-264 | Er ist kein Freund von... | He doesn't like... | He is no friend of... | MEDIUM | SEMANTICS | The German idiom means he is no friend or supporter of something, not simply that he dislikes it. |
| satze-266 | Gedenkst du meiner? | Do you remember me • Have you thought about me? | Do you remember me? • Have you thought about me? | MEDIUM | PUNCTUATION | The first complete English question is missing its question mark. |
| satze-269 | Es jammert mich zu sehen... | Sad to watch... | It saddens me to see... | HIGH | TRANSLATION | The current wording is an incomplete fragment and omits the German expression of personal sadness. |
| satze-270 | je mehr, desto besser | The more the better | The more, the better | MEDIUM | PUNCTUATION | The standard correlative comparative requires a comma between the two clauses. |
| satze-272 | Wie komme ich zum Bahnhof? | How to get to the station? | How do I get to the station? | MEDIUM | GRAMMAR | The current wording is an English-style fragment rather than a complete natural question. |
| satze-281 | Na, wie läufts? | How are you | How's it going? | MEDIUM | PUNCTUATION | The current translation lacks question punctuation and does not reflect the informal “how's it going” expression. |
| satze-283 | Leben Sie wohl! | Live healthy! • Goodbye! | Farewell! • Goodbye! | HIGH | TRANSLATION | “Live healthy” is not a natural English farewell and incorrectly renders “wohl” as “healthy.” |
| satze-286 | Das war ein anstrengender Tag. | It was a busy day. | It was a tiring day. | MEDIUM | SEMANTICS | “Anstrengend” means tiring or demanding, not necessarily busy. |
| satze-294 | Der Hund ist los. | The dog has been released. | The dog is loose. | MEDIUM | SEMANTICS | “Ist los” means the dog is loose or running free; “has been released” suggests a deliberate release event. |
| satze-297 | Was machst du? | What are you doing | What are you doing? | MEDIUM | PUNCTUATION | The complete English question is missing its question mark. |
| satze-298 | Sag mal! | Say yes! | Tell me! | HIGH | TRANSLATION | “Sag mal” is an informal prompt meaning “tell me” or “say,” not “say yes.” |
| satze-299 | Was meinen Sie damit? | What do you mean by that? • What do you think? | What do you mean by that? • What do you mean? | MEDIUM | TRANSLATION | The second version incorrectly changes “what do you mean?” to “what do you think?” |
| satze-305 | am Montag | On monday | On Monday | MEDIUM | ORTHOGRAPHY | Days of the week are capitalized in English. |
| satze-309 | Nehmen Sie Platz! | Sit down! | Please take a seat! | MEDIUM | REGISTER | The direct imperative “Sit down!” can sound brusque for the formal German request. |
| satze-310 | Letzte Neuheit! | The latest news! | The latest novelty! | MEDIUM | TRANSLATION | Neuheit means a novelty or new product, not news in general. |
| satze-312 | Nicht doch! | No, of course! • Don't! | No, no! • Don't! | HIGH | TRANSLATION | “No, of course!” does not express the usual contradiction or protest in “Nicht doch!”. |
| satze-317 | Nicht parken! | Parking is prohibited! | No parking! | MEDIUM | TRANSLATION | The German is a direct prohibition; “No parking!” is the standard English sign wording. |
| satze-321 | Glückliche Reise! | Happy journey! | Have a good journey! | HIGH | NATURALNESS | “Happy journey!” is not idiomatic English for a travel farewell. |
| satze-324 | Schon gut! | It's already good! | That's all right! | HIGH | TRANSLATION | “Schon gut!” is an idiom meaning that something is all right or need not be continued. |
| satze-329 | Wie sehr auch... | How much... | However much... | HIGH | TRANSLATION | “Wie sehr auch...” introduces a concessive expression, not a simple question about quantity. |
| satze-335 | Spaß beiseite! | No joke! • Jokes on the edge! | Joking aside! • All jokes aside! | HIGH | TRANSLATION | “Jokes on the edge!” is a literal, unidiomatic rendering and does not convey the idiom. |
| satze-336 | Wie spät ist es? | What time is it | What time is it? | MEDIUM | PUNCTUATION | The full English question requires a question mark. |
| satze-337 | Durchfahrt gesperrt! | Driving through is prohibited! | No through traffic! | MEDIUM | NATURALNESS | “No through traffic!” is the idiomatic English wording for this road sign. |
| satze-340 | Wie steht’s? | How are you | How are you? | MEDIUM | PUNCTUATION | The full English question requires a question mark. |
| satze-347 | Nicht übel! | Very good! • There is no objection | Not bad! • Pretty good! | HIGH | TRANSLATION | “Nicht übel!” is an idiom meaning “not bad”; the second current rendering is unidiomatic. |
| satze-350 | So ist es üblich. | It is accepted. | That's customary. | MEDIUM | SEMANTICS | “Accepted” means approved or tolerated, not customary or usual. |
| satze-351 | Deine Uhr geht nach. | Your watch is behind. | Your watch is slow. | MEDIUM | NATURALNESS | A watch that runs behind is normally described as “slow” in English. |
| satze-354 | umso mehr | The more | All the more | HIGH | SEMANTICS | “The more” requires a paired comparative clause and does not translate this standalone phrase. |
| satze-356 | Und ob! | And what else! | You bet! | HIGH | TRANSLATION | This is an emphatic agreement, not a question or statement about something else. |
| satze-360 | Keine Ursache! | Nothing for nothing! | You're welcome! | HIGH | TRANSLATION | The German phrase is a reply to thanks; the current English is a different expression. |
| satze-363 | Falsch verbunden! | Wrong connection! | You've got the wrong number! | HIGH | TRANSLATION | This is the conventional English telephone expression for being connected to the wrong person. |
| satze-367 | Seine Ansicht vertreten. | Defend your opinion. | To defend one's opinion. | MEDIUM | GRAMMAR | The German is an infinitive phrase, while the current English is an imperative. |
| satze-368 | Streit verursachen. | Cause an argument. | To cause an argument. | MEDIUM | GRAMMAR | The German is an infinitive phrase, while the current English is an imperative. |
| satze-371 | Vom Hörensagen. | After hearing. | By hearsay. | HIGH | TRANSLATION | The German idiom means information learned indirectly, not simply something heard. |
| satze-378 | Vor Freude. | For fun. | With joy. | HIGH | SEMANTICS | The German refers to joy as a cause, whereas “for fun” means for amusement. |
| satze-379 | Vor allem. | First of all. • First of all | Above all • First and foremost | HIGH | TRANSLATION | “Vor allem” means chiefly or especially, not “first of all”. The current meanings are also duplicated. |
| satze-380 | Im Voraus. | Previously. | In advance. | HIGH | TRANSLATION | “Im Voraus” refers to something done beforehand, not something done previously. |
| satze-382 | Unter dem Vorbehalt. | Conditionally. | Subject to a proviso. | MEDIUM | NATURALNESS | The German is a noun phrase; “conditionally” is an adverb and is less precise here. |
| satze-383 | Vorhanden sein. | To be. • Be present • Be available | To exist • To be present • To be available | MEDIUM | SEMANTICS | “To be” alone is too broad, and the bullet translations should use matching infinitive forms. |
| satze-385 | Vorkehrungen treffen. | Take measures for protection. | To take precautions. | MEDIUM | SEMANTICS | The German means taking precautions or making arrangements; the current wording adds an unnecessary restriction to prote |
| satze-388 | Heute Vormittag. | This morning. • Today in the morning | This morning | LOW | NATURALNESS | “Today in the morning” is unnatural English, and the two listed translations express the same meaning. |
| satze-391 | Von vornherein. | At the very beginning. | From the outset. | MEDIUM | NATURALNESS | The idiomatic English equivalent is “from the outset”; the current wording suggests a physical or chronological beginnin |
| satze-394 | Wach werden. | Wake up. | To wake up. | MEDIUM | GRAMMAR | The German is an infinitive phrase, while the current English is an imperative. |
| satze-395 | Auf Wache sein. | Stand guard. | To be on guard. | MEDIUM | GRAMMAR | The German is an infinitive phrase; “stand guard” is a different verb form and aspect. |
| satze-396 | Während eines Jahres. | During the year. | Over the course of a year. | MEDIUM | SEMANTICS | The German uses an indefinite year, while “the year” incorrectly implies a specific known year. |
| satze-398 | Gegen eine Wand reden. | Talk in vain. | To talk to a brick wall. | MEDIUM | TRANSLATION | The German uses an idiom for speaking to someone who will not listen; the current version loses that meaning. |
| satze-402 | Auf eine Nachricht warten. | Wait for the message. | To wait for a message. | MEDIUM | SEMANTICS | The English uses an imperative and changes the indefinite meaning to a specific message. |
| satze-404 | Was für ein...? | Who...? • What about...? | What kind of...? | HIGH | TRANSLATION | The German asks about type or kind, not about a person or a topic. |
| satze-406 | Auf diesem Wege. | That way. • For such funds | In this way. • By these means | HIGH | TRANSLATION | This way is deictically wrong, and funds does not mean means in the second sense. |
| satze-407 | Auf friedlichem Wege. | In the path of peace. | By peaceful means. | MEDIUM | TRANSLATION | The phrase means using peaceful methods, not being on a path of peace. |
| satze-409 | Von Rechts wegen. | By justice. | By rights. | HIGH | TRANSLATION | The established English equivalent is by rights, meaning according to what is legally or morally due. |
| satze-413 | Art und Weise. | Type. | Way and manner. | MEDIUM | TRANSLATION | Art und Weise means manner or way, not type. |
| satze-414 | Ohne weiteres. | Immediately. • Immediately | Without further ado. | HIGH | TRANSLATION | The German idiom means without further ado or without difficulty, not immediately. |
| satze-420 | In wenigen Tagen. | In some days. | In a few days. | MEDIUM | NATURALNESS | A few days is the natural English equivalent of wenigen Tagen. |
| satze-423 | Wer da? | What's there? | Who's there? | HIGH | TRANSLATION | Wer asks who, whereas what's there asks about an object or situation. |
| satze-430 | In Wettbewerb treten. | Enter the competition. | To enter a competition. | MEDIUM | GRAMMAR | The German is an infinitive phrase, while the current English is an imperative with a definite article. |
| satze-431 | Um die Wette laufen. | Run the race. | To race each other. | MEDIUM | SEMANTICS | The phrase describes competing against one another, not simply running a particular race. |
| satze-432 | Was gilt die Wette? | What are we bargaining for? | What are we betting? | HIGH | TRANSLATION | The German asks what is being wagered, not what is being negotiated or bargained for. |
| satze-434 | Wettkampf im Turnen. | Competitions in gymnastics. | Gymnastics competition. | MEDIUM | SEMANTICS | The German singular refers to one competition, not multiple competitions. |
| satze-438 | Wie lange? | How long | How long? | LOW | PUNCTUATION | The English question is missing its question mark. |
| satze-442 | Herzlich willkommen! | Warm greetings! | A warm welcome! | HIGH | TRANSLATION | The German is a welcoming expression, not a general greeting. |
| satze-443 | Du musst ziehen. | You have a move. | You must make a move. | HIGH | SEMANTICS | The German says it is necessary for you to move, typically in a game. |
| satze-444 | Es zieht. | Pull | It pulls. | MEDIUM | GRAMMAR | The current text is an imperative and lacks the German sentence's subject and punctuation. |
| satze-450 | Von Tag zu Tag. | On a daily basis. | Day by day. | HIGH | TRANSLATION | The German means gradual change from one day to the next, not simply something done daily. |
| satze-452 | Wasser zum Trinken. | Water for drinking. | Drinking water. | MEDIUM | NATURALNESS | The current wording is understandable but unnatural; “drinking water” is the standard English phrase. |
| satze-453 | Zu Fuß. | For legs. | On foot. | HIGH | TRANSLATION | The German idiom means travelling by walking, not something intended for legs. |
| satze-454 | Zu Pferde. | Yes. | On horseback. | HIGH | TRANSLATION | The current English is unrelated to the German expression, which means travelling on a horse. |
| satze-463 | Zugrunde legen. | Put on the basis. • Take as a basis. | Use as a basis. • Take as a basis. | MEDIUM | NATURALNESS | “Put on the basis” is not idiomatic English for using something as a foundation or starting point. |
| satze-471 | Freier Zutritt. | Free entry. | Free access. | MEDIUM | SEMANTICS | “Free entry” usually means admission at no cost; “free access” better conveys unrestricted Zutritt. |
| satze-474 | Zuwider werden. | Become disgusting. • Get sick | Become repulsive. • Become distasteful. | HIGH | TRANSLATION | The second translation means becoming repulsive or distasteful, not becoming physically ill. |
| satze-477 | Ohne Zweifel. | Without hesitation. | Without doubt. | HIGH | TRANSLATION | “Ohne Zweifel” expresses certainty, whereas “without hesitation” concerns decisiveness or speed. |
| satze-481 | Gute Reise! | Happy journey! | Have a good trip! | MEDIUM | NATURALNESS | “Happy journey” is not a natural English farewell; “Have a good trip” is idiomatic. |
| satze-483 | Wären Sie bitte so nett? | Would you please be so kind? | Would you be so kind? | LOW | NATURALNESS | “Please” is redundant with “be so kind” in this polite request and makes the phrasing awkward. |
| satze-489 | Schläfst du noch? | Are you still sleeping | Are you still sleeping? | MEDIUM | PUNCTUATION | The English question is missing its question mark. |
| satze-495 | Finn, fang bitte an! | Finn, start, please! | Finn, please start! | LOW | NATURALNESS | The current word order is awkward in English; the revised order is the natural polite imperative. |
| satze-496 | Lest bitte mit! | Read on, please! | Read along, please! | HIGH | TRANSLATION | “Mitlesen” means reading along with someone or something, not continuing to read. |
| satze-497 | Emma, schau bitte nicht aus dem Fenster! | Emma, ​​please don't look out the window! | Emma, please don't look out the window! | LOW | ORTHOGRAPHY | The English contains extraneous invisible spacing characters after the comma. |
| satze-499 | Geh bitte zurück an deinen Platz! | Go back to your place! | Please go back to your place! | MEDIUM | TRANSLATION | The German includes a polite request marker that is missing from the English translation. |
| satze-505 | Vergiss nicht, das Zimmer zu lüften! | Do not forget to ventilate the room! | Do not forget to air the room! | MEDIUM | NATURALNESS | “Air the room” is the more natural British English expression for ventilating a room. |
| satze-506 | Wo ist das Handtuch? | Where is the towel | Where is the towel? | LOW | PUNCTUATION | The full English question is missing its question mark. |
| satze-519 | Am liebsten trinke ich schwarzen Kaffee. | I drink black coffee best. | I prefer black coffee. | MEDIUM | SEMANTICS | The current wording is unnatural and does not correctly express preference. |
| satze-523 | Gib mir bitte ein Brötchen mit Käse. | Give me a cheese bun, please. | Give me a bread roll with cheese, please. | MEDIUM | NATURALNESS | “Cheese bun” can suggest a bun made with cheese rather than a bread roll served with cheese. |
| satze-528 | Wann esst ihr zu Mittag? | When do you eat lunch | When do you eat lunch? | LOW | PUNCTUATION | The full English question is missing its question mark. |
| satze-534 | Danke, ich habe schon. | Thanks, I already have. | Thanks, I've already got some. | MEDIUM | GRAMMAR | “I already have” is incomplete here; the English needs an understood object such as “some”. |
| satze-538 | Bist du heute Abend frei? | Are you free tonight | Are you free tonight? | LOW | PUNCTUATION | The full English question is missing its question mark. |
| satze-544 | Wann gehst du ins Bett? | When do you go to sleep | When do you go to sleep? | LOW | PUNCTUATION | The full English question is missing its question mark. |
| satze-547 | Es ist schönes Wetter. | It's a nice time. | The weather is nice. | HIGH | TRANSLATION | “A nice time” refers to an occasion, not weather, so it changes the German meaning. |
| satze-548 | Willst du mit mir spazieren gehen? | Do you want to walk with me? | Do you want to go for a walk with me? | MEDIUM | NATURALNESS | “Go for a walk” is the natural English expression for this invitation. |
| satze-549 | Sieh mal, es wird gleich regnen. | Look, it will rain soon. | Look, it's going to rain soon. | MEDIUM | NATURALNESS | “It's going to rain” is the natural form for an imminent event indicated by present signs. |
| satze-553 | Glaubst du, dass es den ganzen Tag regnen wird? | Think it's going to rain all day? | Do you think it's going to rain all day? | MEDIUM | GRAMMAR | The English is an informal fragment, but the German is a complete question. |
| satze-554 | Es hört auf zu regnen. | The rain stops. | The rain is stopping. | MEDIUM | SEMANTICS | The German describes rain stopping now, not a habitual or general event. |
| satze-556 | Es ist sehr warm. | It is very hot. | It is very warm. | MEDIUM | TRANSLATION | Warm and hot differ in meaning; the German says warm, not hot. |
| satze-558 | Wir bekommen gleich ein Gewitter. | We're about to get a storm. | There's a storm coming. | MEDIUM | NATURALNESS | “Get a storm” is unnatural English for an approaching thunderstorm. |
| satze-559 | Das Gewitter zieht vorüber. | The storm has passed. | The storm is passing. | MEDIUM | SEMANTICS | The German uses a present form and describes the storm passing now, not after it has finished. |
| satze-561 | Siehst du den Regenbogen? | See the rainbow? | Can you see the rainbow? | MEDIUM | GRAMMAR | The English fragment is less suitable for a complete learner-facing question. |
| satze-562 | Der Winter ist da, es hat geschneit. | Winter is here, it snowed at night. | Winter is here; it has snowed. | MEDIUM | SEMANTICS | “At night” is not expressed in the German and changes the meaning. |
| satze-566 | Draußen ist Glatteis, pass auf! | It's slippery outside, be careful! | There's black ice outside, be careful! | MEDIUM | TRANSLATION | Glatteis specifically means black ice, not merely a generally slippery surface. |
| satze-569 | Es ist halb sieben. | It is half past seven. | It is half past six. | HIGH | TRANSLATION | In German, halb sieben means 6:30, not 7:30. |
| satze-570 | Meine Uhr geht fünf Minuten vor. | My watch is fast five minutes. | My watch is five minutes fast. | MEDIUM | GRAMMAR | The time expression requires “five minutes fast” or “five minutes ahead”. |
| satze-576 | Wie geht es dir? | How are you | How are you? | LOW | PUNCTUATION | The complete English question is missing its question mark. |
| satze-580 | Ich komme, um dich zum Spaziergang abzuholen. | I came to take you for a walk. | I've come to pick you up for a walk. | MEDIUM | TRANSLATION | Abholen means pick someone up; the current version omits this meaning. |
| satze-582 | Ich bin zum ersten Mal in dieser Gegend. | I am here for the first time. | I'm in this area for the first time. | MEDIUM | SEMANTICS | The translation omits “in this area”, an important part of the German meaning. |
| satze-587 | Welcher ist der kürzeste Weg? | Which is the shortest path? | Which is the shortest route? | MEDIUM | NATURALNESS | For asking directions, “route” is the natural equivalent of Weg here. |
| satze-589 | Wie komme ich am schnellsten zum Bahnhof? | How to get to the station faster? | What is the quickest way to get to the station? | MEDIUM | GRAMMAR | The current English is an incomplete question and does not naturally express “quickest”. |
| satze-593 | Finn fährt bis Berlin mit, dann geht er ans Meer. | Finn is driving to Berlin, then he will go to the sea. | Finn is travelling as far as Berlin, then he'll go to the seaside. | MEDIUM | TRANSLATION | The German does not say Finn is driving, and “go to the sea” is unnatural for the destination. |
| satze-595 | In einer halben Stunde. | After half an hour. | In half an hour. | MEDIUM | TRANSLATION | For a future departure time, English uses “in half an hour”, not “after”. |
| satze-599 | Der Zug fährt um halb sieben ab. | The train leaves at half past seven. | The train leaves at half past six. | HIGH | TRANSLATION | In German, halb sieben means 6:30, not 7:30. |
| satze-603 | Ist der Schalter schon offen? | Is the box office open yet? | Is the ticket counter open yet? | MEDIUM | TRANSLATION | In a railway context, Schalter means ticket counter, not box office. |
| satze-607 | Muss ich in Koblenz umsteigen? | Do I have to change seats in Koblenz? | Do I have to change trains in Koblenz? | HIGH | SEMANTICS | Umsteigen in this travel context means changing trains, not changing seats. |
| satze-608 | Ja, dort musst du umsteigen. | Yes, you have to change seats there. | Yes, you have to change trains there. | HIGH | SEMANTICS | Umsteigen means changing trains or connections, not changing seats. |
| satze-612 | Stell mein Handgepäck ins Gepäcknetz. | Put my carry-on in the grid. | Put my carry-on in the luggage net. | HIGH | TRANSLATION | Gepäcknetz is a luggage net or rack; grid is the wrong meaning. |
| satze-614 | Es zieht, schließ bitte das Fenster! | Pull through, please close the window! | There's a draught, please close the window! | HIGH | FOREIGN_REMNANT | Pull through is a literal mistranslation; Es zieht means there is a draught. |
| satze-616 | Wie lange hält der Zug? | How long does the train stand? | How long does the train stop here? | MEDIUM | NATURALNESS | English trains stop or wait; stand is not natural in this question. |
| satze-617 | Wo muss ich umsteigen? | Where should I transfer? | Where do I have to change trains? | HIGH | SEMANTICS | In this rail context, umsteigen means changing trains, while transfer is ambiguous. |
| satze-621 | Hast du etwas zu verzollen? | Do you have something to clear? | Do you have anything to declare? | HIGH | TRANSLATION | The standard customs question asks whether someone has anything to declare. |
| satze-626 | Was kostet das Zimmer pro Nacht? | How much is the room per night? | How much does the room cost per night? | MEDIUM | NATURALNESS | The proposed wording is the natural standard way to ask about a room's price. |
| satze-628 | Die Rechnung, bitte! | Bill, please! | The bill, please! | MEDIUM | GRAMMAR | In this restaurant phrase, English normally uses the definite article before bill. |
| satze-636 | Kellner, die Speisekarte, bitte! | Waiters, menu, please! | Waiter, the menu, please! | HIGH | GRAMMAR | Kellner is singular here, so Waiters is incorrect; the restaurant request also needs the article. |
| satze-639 | Kellner, zahlen bitte! | Waiters, please pay! | Waiter, the bill, please! | HIGH | TRANSLATION | The German requests the bill, not that the waiters pay; Kellner is singular. |
| satze-640 | Ich gehe ins Café einen Kaffee trinken. | I will go to a cafe to drink coffee. | I'm going to the café to have a coffee. | MEDIUM | NATURALNESS | This is the natural English expression for going to a café for coffee. |
| satze-643 | Bitte schneller, ich habe es eilig! | Faster please, I have to hurry! | Faster, please, I have to hurry! | MEDIUM | PUNCTUATION | The introductory request requires a comma after Faster. |
| satze-651 | Erinnere mich morgen daran zu schreiben! | Remind me to sign tomorrow! | Remind me to write tomorrow! | HIGH | TRANSLATION | The German says “to write”, whereas the English says “to sign”. |
| satze-654 | Kann ich dich später anrufen? | Can i call you later | Can I call you later? | HIGH | GRAMMAR | The pronoun “I” must be capitalised, and the full question needs a question mark. |
| satze-657 | Hinten bitte nicht zu kurz. | In the back, please, not too short. | Not too short at the back, please. | MEDIUM | NATURALNESS | The current wording is understandable but unnatural for a request to a hairdresser. |
| satze-659 | Es fängt um halb acht an. | It starts at half past eight. | It starts at half past seven. | HIGH | TRANSLATION | In German, “halb acht” means half past seven, not half past eight. |
| satze-660 | Alle Plätze sind ausverkauft. | All tickets are sold out. | All the seats are taken. | MEDIUM | SEMANTICS | “Plätze” means seats here; the current English changes the subject to tickets. |
| satze-662 | Wir lassen die Jacken in der Garderobe. | Let's leave the jackets in the wardrobe. | Let's leave the jackets in the cloakroom. | MEDIUM | TRANSLATION | In the theatre context, “Garderobe” means cloakroom, not wardrobe. |
| satze-663 | Bitte schnell, der Vorhang geht gleich auf! | Quicker please, the curtain is about to open! | Quickly, please—the curtain is about to go up! | MEDIUM | PUNCTUATION | The current sentence has faulty comma punctuation and is less idiomatic in this theatre context. |
| satze-673 | Hast du alles eingepackt? | Is everything already boxed? | Is everything packed already? | MEDIUM | TRANSLATION | The German asks whether everything is packed; “boxed” adds a narrower meaning. |
| satze-674 | Ich stehe mit meinem Freund in Kontakt. | I am in correspondence with my friend. | I am in contact with my friend. | MEDIUM | SEMANTICS | “In Kontakt stehen” means being in contact, not specifically corresponding in writing. |
| satze-678 | Nun können wir alles wieder aufräumen. | Now we can put everything back together. | Now we can tidy everything up again. | HIGH | TRANSLATION | “Aufräumen” means tidy up or clear up, not reassemble something. |
| satze-680 | Im Sommer fahre ich ans Meer. | I will go to the sea in the summer. | I will go to the seaside in the summer. | MEDIUM | NATURALNESS | “Go to the sea” is unnatural English for travelling to the coast or seaside. |
| satze-681 | Kannst du schwimmen? | Can you swim | Can you swim? | HIGH | GRAMMAR | The full English question requires a question mark. |
| satze-689 | Ich fühle mich nicht wohl. | I feel bad. | I don't feel well. | MEDIUM | NATURALNESS | “I don't feel well” is the natural English equivalent for feeling physically unwell. |
| satze-703 | Kann ich das auf Raten kaufen? | Can I buy in installments? | Can I buy it in instalments? | MEDIUM | SEMANTICS | The definite object “das” is omitted, making the sentence less precise. |
| satze-705 | Noah hat in zwei Wochen schwimmen gelernt. | Noah learned to swim in two weeks. | Noah learned to swim within two weeks. | MEDIUM | SEMANTICS | “In two weeks” can mean after two weeks rather than within a two-week period. |
| satze-707 | Sprichst du Deutsch? | Do you speak german | Do you speak German? | MEDIUM | ORTHOGRAPHY | The language name must be capitalised and the question needs a question mark. |
| satze-712 | Ich suche immer Gelegenheit, Deutsch zu sprechen. | Always looking for an opportunity to speak German. | I am always looking for an opportunity to speak German. | MEDIUM | GRAMMAR | The English text is a sentence fragment, whereas the German is a full sentence. |
| satze-713 | Ist das Buch noch vorrätig? | Is this book still available? | Is this book still in stock? | MEDIUM | TRANSLATION | “Vorrätig” specifically means available in stock, not merely generally available. |
| satze-720 | Können Sie mir ein halbes Kilo abwiegen? | Can you weigh half a kilo? | Can you weigh out half a kilo for me? | MEDIUM | NATURALNESS | “Weigh out” better expresses portioning a requested quantity for the customer. |
| satze-723 | Wiegen Sie mir bitte zwei Kilo ab. | Please weigh two kilograms. | Please weigh out two kilograms for me. | MEDIUM | NATURALNESS | The current wording sounds incomplete for a shop request and omits the recipient implied by “mir”. |
| satze-725 | Haben Sie gutes Rindfleisch? | Do you have good beef? | Do you have good-quality beef? | LOW | NATURALNESS | “Good-quality beef” is the more natural way to express quality here. |
| satze-727 | Ein Laib Brot, bitte, aber nicht zu knusprig. | One loaf of bread, please, but not too hard. | One loaf of bread, please, but not too crusty. | HIGH | SEMANTICS | “Knusprig” means crusty or crispy, not hard. |
| satze-733 | Können Sie mir alles nach Hause liefern? | Can you deliver everything to your home? | Can you deliver everything to my home? | HIGH | SEMANTICS | The English says the recipient's home, but the German speaker means their own home. |
| satze-738 | Können Sie die Möbel in meine Wohnung liefern? | Can you deliver furniture to the apartment? | Can you deliver the furniture to my apartment? | MEDIUM | SEMANTICS | The German specifies both the furniture and the speaker’s apartment. |
| satze-739 | Bitte an der Kasse zahlen. | Please pay at the cashier. | Please pay at the checkout. | MEDIUM | NATURALNESS | “Cashier” is the person, whereas “Kasse” refers to the checkout or till. |
| satze-742 | Dieser Stoff gefällt mir. | I love this fabric. | I like this fabric. | MEDIUM | SEMANTICS | “Gefällt mir” expresses liking, while “love” is stronger than the German meaning. |
| satze-743 | Schneiden Sie mir bitte drei Meter ab. | Please cut three meters. | Please cut off three metres for me. | MEDIUM | TRANSLATION | “Abschneiden” means cut off, and “mir” indicates the portion is for the speaker. |
| satze-746 | Geben Sie mir eine hellere. | Give brighter. | Give me a lighter one. | HIGH | GRAMMAR | The current text lacks an object and is grammatically incomplete. |
| satze-748 | Welche Handschuhe wünschen Sie? | What kind of gloves do you want? | Which gloves would you like? | MEDIUM | TRANSLATION | “Welche” asks which gloves, while “what kind” asks about the type and “want” is less polite. |
| satze-750 | So, nun passen sie gut. | So, it works fine now. | So, now they fit well. | MEDIUM | SEMANTICS | The English changes the plural subject and omits the meaning of passen: to fit. |
| satze-755 | Die Hose ist zu lang. | The pants are too long. | The trousers are too long. | MEDIUM | NATURALNESS | In British English, pants usually means underwear; trousers is the appropriate garment term. |
| satze-759 | Können Sie die Schuhe heute reparieren? | Can you fix your shoes today? | Can you fix the shoes today? | MEDIUM | SEMANTICS | The German refers to the shoes, not the listener's shoes. |
| satze-760 | Wann kann ich die Schuhe abholen? | When can I bring the shoes? | When can I pick up the shoes? | HIGH | SEMANTICS | Abholen means collect or pick up, whereas bring expresses the opposite direction. |
| satze-762 | Sie geht fünf Minuten vor. | It's five minutes early. | It's five minutes fast. | HIGH | SEMANTICS | A watch that vorgeht is fast, not early. |
| satze-769 | Bitte packen Sie es ein und schicken Sie es mir nach Hause. | Please pack and send home. | Please pack it and send it to me at home. | MEDIUM | SEMANTICS | The English omits both objects and the recipient, making the instruction incomplete and ambiguous. |
| satze-775 | Die Aufnahme ist gelungen. | The photo was successful. | The photo turned out well. | MEDIUM | NATURALNESS | Successful is not idiomatic for a photograph; turned out well conveys the German meaning naturally. |
| satze-781 | Der Ring ist mir etwas zu weit. | The ring is a little too big for me. | The ring is a little too loose for me. | MEDIUM | SEMANTICS | For a ring, zu weit refers to looseness or an overly large fit, not general physical size. |
| satze-782 | Ich kann ihn enger machen. | I can narrow it down. | I can make it smaller. | MEDIUM | NATURALNESS | Narrow it down is not natural for resizing a ring; make it smaller is idiomatic. |
| satze-783 | Dieser Ring passt mir. | This ring suits me. | This ring fits me. | MEDIUM | SEMANTICS | The German says the ring fits physically; suits me describes appearance or compatibility instead. |
| satze-784 | Zeigen Sie mir schöne Geschenkideen. | Showcase beautiful gift ideas. | Show me some beautiful gift ideas. | MEDIUM | SEMANTICS | Showcase means display or promote, not ask someone to show the speaker something. |
| satze-788 | Das ist kein echter Stein, das ist Glas. | This is not real stone, it is glass. | This isn't a real stone. It's glass. | MEDIUM | NATURALNESS | Real stone is unnatural here, and the comma splice should be replaced with sentence punctuation. |
| satze-790 | Es ist besonders schön gearbeitet. | It is extremely finely crafted. | It is particularly finely crafted. | LOW | SEMANTICS | Extremely overstates besonders; particularly preserves the original degree more accurately. |
| satze-792 | Bekomme ich die Schachtel gratis? | Did I get the box for free? | Can I have the box for free? | HIGH | SEMANTICS | The German asks whether the speaker may receive it, not whether they already received it. |
