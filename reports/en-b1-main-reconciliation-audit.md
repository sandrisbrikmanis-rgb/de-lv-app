# EN–DE B1 MAIN RECONCILIATION AUDIT

**Generated:** 2026-08-09T13:50:17.027Z
**Main commit:** 223d37f4853d405c99b1c72c24051a114cd7e206

## FINAL RESULT: FAIL — MISSING APPROVED REPAIRS IN main

MISSING OWNER-approved final mappings: 175

FINAL CLOSURE STATUS: NOT YET CONFIRMED

## Baseline

- Initial FULL AUDIT: 3367/3367
- Initial repair candidates: 57
- 57 candidates reconciled in main: 4/57

## Workflow coverage

- Repair cycles discovered: 17
- Repair cycles reconciled: 17
- HIGH #1–#13 represented: 13/13
- Regression repair chain: PASS
- SectionAccent cleanup: PASS

## Repair reconciliation arithmetic

- OWNER-approved repair findings represented: 1237
- Final authoritative mappings: 1135
- Present in current main: 937
- Missing from current main: 175
- Superseded by later approved repair: 0
- Field/identity unresolved: 23

## HIGH #1–#5 summary

| Cycle | Approved | Present in main | Missing | Superseded |
| --- | --- | --- | --- | --- |
| HIGH #1 | 59 | 1 | 51 | 6 |
| HIGH #2 | 26 | 0 | 26 | 0 |
| HIGH #3 | 25 | 0 | 25 | 0 |
| HIGH #4 | 25 | 1 | 24 | 0 |
| HIGH #5 | 24 | 1 | 23 | 0 |

## HIGH #6–#13 summary

| Cycle | Approved | Present in main | Missing | Superseded |
| --- | --- | --- | --- | --- |
| HIGH #6 | 25 | 25 | 0 | 0 |
| HIGH #7 | 24 | 24 | 0 | 0 |
| HIGH #8 | 50 | 50 | 0 | 0 |
| HIGH #9 | 50 | 49 | 1 | 0 |
| HIGH #10 | 123 | 111 | 12 | 0 |
| HIGH #11 | 167 | 146 | 6 | 5 |
| HIGH #12 | 179 | 157 | 2 | 10 |
| HIGH #13 | 149 | 135 | 6 | 5 |

## Regression / micro / sectionAccent

- Regression 214/214 in main: 200/200
- Micro-regression 16/16: 16/16
- SectionAccent 24/24: 24/24
- Full-string integrity (14 explanations): 14/14
- Truncated values in main: 0

## Current main validators

| Check | Result |
| --- | --- |
| javascript | PASS |
| auditLanguageParity | PASS |
| auditTranslations | PASS |
| auditMojibake | PASS |
| validateStudyDesign | FAIL |
| mirrorParity | PASS |
| deReadOnly | PASS |
| Cards | 3367 |
| Study objects | 324/324 |

## sectionAccents

- Raw validator findings: 0
- Known false positives: 0
- Validated real findings: 0
- Unexpected findings: 0

Production changes during audit: 0

## Missing repairs

1. HIGH #1 / b1-abhängen / study.translation / expected: To depend / to be dependent / current: To be addicted
2. HIGH #1 / b1-abhängen / study.important.text / expected: abhängen von means to depend on or be dependent on someone or something; it shou / current: abhängen von is a stable construction; in Latvian it is not translated literally
3. HIGH #1 / b1-abschnitt / study.important.text / expected: der Abschnitt usually means a section or part of a larger text, document, route, / current: In Latvian, "fragment" does not always fit; der Abschnitt is more often a sectio
4. HIGH #1 / b1-abschnitt / study.sectionAccents.important.purple / expected: ["Abschnitt"] / current: ["abschnitt"]
5. HIGH #1 / b1-antrag / study.important.text / expected: For a job application, German normally uses die Bewerbung. der Antrag is an appl / current: Darba pieteikums parasti ir die Bewerbung, nevis der Antrag.
6. HIGH #1 / b1-berichten / study.important.text / expected: berichten is commonly used with über + accusative for what is being reported abo / current: berichten parasti lieto ar über + ko? vai von + kam?.
7. HIGH #1 / b1-berichten / study.sectionAccents.important.purple / expected: ["über","accusative","von","dative"] / current: ["über + ko?","von + kam?"]
8. HIGH #1 / b1-blase / study.important.text / expected: The context determines the meaning: on the skin, Blase usually means “blister”;  / current: On the foot, Blase is usually "blister" in Latvian, not "bladder". In medicine B
9. HIGH #1 / b1-blase / study.sectionAccents.explanation.purple / expected: ["blister"] / current: ["blister","Main","Main"]
10. HIGH #1 / b1-bloß / study.explanation / expected: Main idea: bloß very often means just or simply in colloquial language. As an ad / current: Main idea: bloß very often means just or simply in colloquial language. As an ad
11. HIGH #1 / b1-entlassen / study.explanation / expected: Main idea: entlassen means to dismiss, discharge, or release someone, depending  / current: Main idea: entlassen means to dismiss or release from an institution. The Latvia
12. HIGH #1 / b1-entlassen / study.important.text / expected: From a hospital, entlassen usually means “to discharge”; in employment, it usual / current: From the hospital, entlassen is usually "discharge" in Latvian, not "dismiss".
13. HIGH #1 / b1-entlassen / study.sectionAccents.explanation.purple / expected: ["dismiss","discharge","release"] / current: ["release","release"]
14. HIGH #1 / b1-fördern / study.explanation / expected: Main idea: fördern means to promote the development or support of a person, proj / current: Main idea: förden means to promote the development or support of a person, proje
15. HIGH #1 / b1-fördern / study.important.text / expected: Do not confuse fördern and fordern: fördern means to promote or support, while f / current: Nejauc fördern un fordern: viens veicina vai atbalsta, otrs prasa.
16. HIGH #1 / b1-fördern / study.sectionAccents.important.purple / expected: ["promote","support","demand"] / current: ["veicina","atbalsta","prasa"]
17. HIGH #1 / b1-hort / study.explanation / expected: ["Main idea: der Hort (also Schulhort/Kinderhort) is an after-school care facili / current: ["Main idea: Hort (also Schulhort/Kinderhort) is an after-school care facility f
18. HIGH #1 / b1-hort / study.sectionAccents.explanation.purple / expected: ["after-school care facility","school-aged children"] / current: ["extended day group","children's day centre"]
19. HIGH #1 / b1-jagen / study.important.text / expected: jagen usually means to hunt or chase. The exact English equivalent depends on wh / current: Not every Latvian "drive" is jagen; the choice is determined by the context.
20. HIGH #1 / b1-jagen / study.sectionAccents.important.purple / expected: ["hunt","chase"] / current: ["Not"]
21. HIGH #1 / b1-kader / study.explanation / expected: ["Main Idea: der Kader means a (qualified) cadre or nucleus—a group of people wi / current: ["Main Idea: Kader means a (qualified) cadre or nucleus—a group of people with a
22. HIGH #1 / b1-kader / study.tip / expected: ["der Kader = squad/core (group of people) - in sports, politics, organizations. / current: ["der Kader = squad/core (group of people) - in sports, politics, organizations.
23. HIGH #1 / b1-kern / study.important.text / expected: The exact English equivalent depends on context: Kern can refer to a seed or pit / current: Kern is sometimes translated as a seed or stone in Latvian for fruits; the conte
24. HIGH #1 / b1-kern / study.sectionAccents.important.purple / expected: ["seed","pit","core"] / current: ["fruits"]
25. HIGH #1 / b1-kommando / study.important / expected: A sports team is normally die Mannschaft or das Team, not das Kommando. / current: Sporta komanda parasti ir die Mannschaft vai das Team, nevis das Kommando.
26. HIGH #1 / b1-kommando / study.sectionAccents.important.purple / expected: ["Mannschaft","Team"] / current: ["Sporta komanda"]
27. HIGH #1 / b1-kurs / study.explanation / expected: Main idea: der Kurs is a course as a set of learning lessons or a direction. In  / current: Main idea: der A course is a course as a set of learning lessons or a direction.
28. HIGH #1 / b1-kurs / study.tip / expected: Lessons, a ship’s course, or an exchange rate → der Kurs. / current: Training, ship direction or exchange price → der Course.
29. HIGH #1 / b1-kurs / study.important / expected: der Kurs can refer to a course of lessons, a direction or course, or a rate such / current: In Latvian, 'course' can have several meanings, but in German, the context deter
30. HIGH #1 / b1-kurs / study.sectionAccents.tip.purple / expected: ["Lessons","exchange rate"] / current: ["Training"]
31. HIGH #1 / b1-kurs / study.sectionAccents.important.purple / expected: ["course","direction","exchange rate"] / current: ["Latvian"]
32. HIGH #1 / b1-kastanie / study.tip / expected: Tree or fruit? The context determines whether die Kastanie refers to the chestnu / current: Koks vai auglis? Skaties kontekstu ap die Kastanie.
33. HIGH #1 / b1-kastanie / study.important / expected: die Kastanie can refer both to a chestnut tree and to its fruit; the context usu / current: In Latvian, it is often necessary to distinguish chestnut as a tree and chestnut
34. HIGH #1 / b1-kastanie / study.sectionAccents.tip.purple / expected: ["Tree","fruit"] / current: ["koks","auglis"]
35. HIGH #1 / b1-rasen / study.translation / expected: To race / to speed / current: To ionise
36. HIGH #1 / b1-rasen / study.explanation / expected: Main idea: rasen means to race, speed, or move extremely fast, often excessively / current: Main idea: rasen means to rush or rush very quickly, often too quickly. For a st
37. HIGH #1 / b1-rasen / study.sectionAccents.explanation.purple / expected: ["race","speed"] / current: ["Main"]
38. HIGH #1 / b1-rasen / study.sectionAccents.important.red / expected: drive / current: braukt
39. HIGH #1 / b1-schale / study.tip / expected: For fruit peel or a nut shell, Schale is common; for tree bark, use Rinde. / current: Auglim un riekstam Schale; kokam Rinde.
40. HIGH #1 / b1-schale / study.important / expected: For tree bark, German normally uses die Rinde, not die Schale. / current: Koka mizai parasti lieto die Rinde, nevis die Schale.
41. HIGH #1 / b1-schlag / study.important / expected: der Schlag is highly context-dependent and can mean a blow, strike, stroke, or o / current: Schlag is highly contextual; lightning often means kick in Latvian.
42. HIGH #1 / b1-schlag / study.sectionAccents.important.red / expected: context / current: kick
43. HIGH #1 / b1-senken / study.explanation / expected: senken means to lower or bring something down. / current: Main idea: senken means to lower or lower something. Unlike sinken, it usually h
44. HIGH #1 / b1-senken / study.important / expected: senken is transitive and takes an object: someone lowers something. sinken is us / current: senken ir ar objektu; sinken parasti notiek pats.
45. HIGH #1 / b1-sich-sorgen / study.explanation / expected: Main idea: sich sorgen means to worry about someone or something. It is commonly / current: Main idea: sich sorgen means to worry about someone or something. Commonly used 
46. HIGH #1 / b1-sich-sorgen / study.important / expected: sich sorgen is commonly used with um: sich um jemanden oder etwas sorgen means t / current: sich sorgen lieto ar um: sich um jemanden sorgen.
47. HIGH #1 / b1-stellung / study.sectionAccents.important.red / expected: job / current: darba vietu
48. HIGH #1 / b1-tank / study.important.text / expected: German der Tank usually means a fuel tank or storage tank. A military tank is de / current: Latvian tank in German is usually der Panzer, not der Tank.
49. HIGH #1 / b1-teilnehmen / study.explanation / expected: The correct construction is teilnehmen an + dative: teilnehmen an etwas means “t / current: Main idea: To participate means to take part in an event, course, conversation o
50. HIGH #1 / b1-teilnehmen / study.important.text / expected: Use an dem Kurs teilnehmen or the contracted form am Kurs teilnehmen, not den Ku / current: Saki an dem Kurs teilnehmen vai am Kurs teilnehmen, nevis den Kurs teilnehmen.
51. HIGH #1 / b1-verlegen / study.important.text / expected: Schlüssel verlegen means to misplace a key. Unlike verlieren, verlegen usually i / current: Schlüssel verlegen nav tas pats, kas verlieren: lieta parasti ir kaut kur nolikt
52. HIGH #2 / b1-weder / study.explanation / expected: Main idea: weder is used with noch. The construction weder ... noch means neithe / current: Main idea: weder is used with noch. The construction weder ... noch means neithe
53. HIGH #2 / b1-weder / study.sectionAccents.comparison[1].meaning.purple / expected: Either ... or / current: vai nu
54. HIGH #2 / b1-zeugnis / study.translation / expected: Certificate / school report / current: Testimony
55. HIGH #2 / b1-sich-befinden-study / study.tip.leftBlocks[1].text / expected: To say “to feel,” use sich fühlen, not sich befinden. / current: Ja gribi pateikt “justies”, lieto sich fühlen, nevis sich befinden.
56. HIGH #2 / b1-beruf / study.examples[1].lv / expected: I am a teacher. / current: My profession is a teacher.
57. HIGH #2 / b1-Umgebung / lv / expected: Surroundings / current: Neighborhood
58. HIGH #2 / b1-Aktentasche / lv / expected: Briefcase / current: Portfolio
59. HIGH #2 / b1-Alarm / lv / expected: Alarm / current: Anxiety
60. HIGH #2 / b1-Angehörige / lv / expected: Relative / current: Belonging to
61. HIGH #2 / b1-abfragen / lv / expected: To query / to test / current: To request
62. HIGH #2 / b1-abhängig / lv / expected: Dependent / current: Depends
63. HIGH #2 / b1-Ablauf / lv / expected: Process / sequence / current: Progress
64. HIGH #2 / b1-absichern / lv / expected: To secure / safeguard / current: To provide
65. HIGH #2 / b1-absperren / lv / expected: To cordon off / block / current: Delimiting
66. HIGH #2 / b1-abschaffen / lv / expected: To abolish / current: Atcelt
67. HIGH #2 / b1-Ambulanz / lv / expected: Outpatient clinic / current: Emergency assistance
68. HIGH #2 / b1-Anklang / lv / expected: Appeal / resonance / current: Responsiveness
69. HIGH #2 / b1-anknüpfen / lv / expected: To connect / build on / current: To attract
70. HIGH #2 / b1-Anlauf / lv / expected: Run-up / attempt / current: Run in
71. HIGH #2 / b1-anlehnen / lv / expected: To lean against / current: Push
72. HIGH #2 / b1-anliegend / lv / expected: Attached / enclosed / current: In the appendix
73. HIGH #2 / b1-Anrede / lv / expected: Form of address / salutation / current: Speech
74. HIGH #2 / b1-Ansager / lv / expected: Announcer / current: The applicant
75. HIGH #2 / b1-anschaulich / lv / expected: Clear / vivid / current: Considered
76. HIGH #2 / b1-anschreiben / lv / expected: To write to / current: To write down
77. HIGH #2 / b1-Ansichtskarte / lv / expected: Postcard / current: View card
78. HIGH #3 / b1-anstiften-149 / lv / expected: To incite / current: To encourage
79. HIGH #3 / b1-Antiquariat-156 / lv / expected: Second-hand bookshop / current: Antique store
80. HIGH #3 / b1-anweisen-160 / lv / expected: To instruct / current: Indicate
81. HIGH #3 / b1-Anzahlung-163 / lv / expected: Down payment / deposit / current: Contribution
82. HIGH #3 / b1-Appell-164 / lv / expected: Appeal / current: Invitation
83. HIGH #3 / b1-Auflauf-179 / lv / expected: Casserole / current: Concoction
84. HIGH #3 / b1-Aufschnitt-185 / lv / expected: Cold cuts / current: Cold snaps
85. HIGH #3 / b1-aufgeregt-197 / lv / expected: Excited / nervous / current: Worried
86. HIGH #3 / b1-sich aufregen-200 / lv / expected: To get upset / current: To worry
87. HIGH #3 / b1-ausziehbar-224 / lv / expected: Extendable / pull-out / current: Retractable
88. HIGH #3 / b1-beauftragen-254 / lv / expected: To commission / assign / current: To ask
89. HIGH #3 / b1-bedrücken-267 / lv / expected: To weigh down / depress / current: To suppress
90. HIGH #3 / b1-Behälter-302 / lv / expected: Container / current: Tank
91. HIGH #3 / b1-behindern-308 / lv / expected: To hinder / obstruct / current: Disturb
92. HIGH #3 / b1-beitragen-322 / lv / expected: To contribute / current: Promote
93. HIGH #3 / b1-belasten-327 / lv / expected: To burden / put a strain on / current: To bother
94. HIGH #3 / b1-beleidigen-331 / lv / expected: To insult / offend / current: Take offence
95. HIGH #3 / b1-Beleidigung-332 / lv / expected: Insult / offence / current: Resentment
96. HIGH #3 / b1-beleuchten-333 / lv / expected: To illuminate / light / current: To enlighten
97. HIGH #3 / b1-beliebig-335 / lv / expected: Any / arbitrary / current: Anyone
98. HIGH #3 / b1-Bergführer-357 / lv / expected: Mountain guide / current: A companion in the mountains
99. HIGH #3 / b1-Bericht-362 / lv / expected: Report / current: Message
100. HIGH #3 / b1-sich berühren-372 / lv / expected: To touch each other / current: To face
101. HIGH #3 / b1-beseitigen-385 / lv / expected: To remove / eliminate / current: To prevent
102. HIGH #3 / b1-besiegen-388 / lv / expected: To defeat / current: To win
103. HIGH #4 / b1-Bestandteil-394 / lv / expected: Component / part / current: Ingredient
104. HIGH #4 / b1-betreiben-409 / lv / expected: To run / operate / current: To lead
105. HIGH #4 / b1-Beule-415 / lv / expected: Bump / dent / current: Pun
106. HIGH #4 / b1-beugen-414 / lv / expected: To bend / current: To put
107. HIGH #4 / b1-Bevölkerung-418 / lv / expected: Population / current: Residents
108. HIGH #4 / b1-bewachen-420 / lv / expected: To guard / watch over / current: To protect
109. HIGH #4 / b1-bewirten-426 / lv / expected: To host / serve guests / current: To tolerate
110. HIGH #4 / b1-biegen-440 / lv / expected: To bend / current: To put
111. HIGH #4 / b1-sich blamieren-453 / lv / expected: To embarrass oneself / current: Get confused
112. HIGH #4 / b1-Bombe-478 / lv / expected: Bomb / current: Ball
113. HIGH #4 / b1-Brathuhn-490 / lv / expected: Roast chicken / current: Fried chicken
114. HIGH #4 / b1-Brieftasche-505 / lv / expected: Wallet / current: Pocket briefcase
115. HIGH #4 / b1-desto-579 / lv / expected: The more ... the more ... / all the more / current: Because
116. HIGH #4 / b1-Dose-601 / lv / expected: Can / tin / current: Box
117. HIGH #4 / b1-Durcheinander-624 / lv / expected: A muddle / a mess / current: Juku jukam • A mess
118. HIGH #4 / b1-ehemals-646 / lv / expected: Formerly / current: Earlier
119. HIGH #4 / b1-sich eignen-657 / lv / expected: To be suitable / current: To bet
120. HIGH #4 / b1-einigermaßen-686 / lv / expected: To some extent / more or less / current: Half way
121. HIGH #4 / b1-einnehmen-695 / lv / expected: To take / occupy / current: To conceive
122. HIGH #4 / b1-einschließen-703 / lv / expected: To include / enclose / current: To count
123. HIGH #4 / b1-erfordern-779 / lv / expected: To require / current: Ask for
124. HIGH #4 / b1-erfüllen-784 / lv / expected: To fulfil / current: To execute
125. HIGH #4 / b1-sich erhalten-790 / lv / expected: To remain preserved / survive / current: To preserve
126. HIGH #4 / b1-Erklärung-795 / lv / expected: Explanation / statement / current: Notification
127. HIGH #5 / b1-sich ernähren-807 / lv / expected: To feed oneself / live on / current: To make a living
128. HIGH #5 / b1-erschrecken-820 / lv / expected: To get frightened / be startled / current: Get confused
129. HIGH #5 / b1-Erwartung-829 / lv / expected: Expectation / current: Waiting
130. HIGH #5 / b1-erwecken-830 / lv / expected: To awaken / current: Wake up
131. HIGH #5 / b1-faszinieren-871 / lv / expected: To fascinate / current: Get carried away
132. HIGH #5 / b1-Feinwäsche-882 / lv / expected: Delicates / current: Fine linen
133. HIGH #5 / b1-fernbleiben-885 / lv / expected: To stay away / current: Don't come
134. HIGH #5 / b1-Fischgericht-902 / lv / expected: Fish dish / current: Fish food
135. HIGH #5 / b1-fortbleiben-936 / lv / expected: To stay away / remain absent / current: Don't come
136. HIGH #5 / b1-Fußnote-971 / lv / expected: Footnote / current: Subtext note
137. HIGH #5 / b1-sich füllen-964 / lv / expected: To fill up / become full / current: To fulfil
138. HIGH #5 / b1-gedankenlos-1006 / lv / expected: Thoughtless / current: Reckless
139. HIGH #5 / b1-Gefallen-1014 / lv / expected: Favor / current: Service
140. HIGH #5 / b1-genial-1059 / lv / expected: Brilliant / current: Genius
141. HIGH #5 / b1-genügen-1063 / lv / expected: To be enough / current: Enough
142. HIGH #5 / b1-Genuss-1065 / lv / expected: Enjoyment / current: Enjoying
143. HIGH #5 / b1-geräumig-1069 / lv / expected: Spacious / current: Wide
144. HIGH #5 / b1-gerecht-1071 / lv / expected: Fair / just / current: Righteous
145. HIGH #5 / b1-gesamt-1080 / lv / expected: Entire / total / current: Everything
146. HIGH #5 / b1-geschickt-1085 / lv / expected: Skillful / current: Neat
147. HIGH #5 / b1-gewöhnen-1109 / lv / expected: To accustom / get used to / current: Tame
148. HIGH #5 / b1-Glatteis-1119 / lv / expected: Black ice / current: Again
149. HIGH #5 / b1-Glocke-1130 / lv / expected: Bell / current: Call
150. HIGH #9 / b1-Tageordnung-2835 / lv / expected: Conference / meeting / current: Agenda
151. HIGH #10 / b1-sich-aufhalten / study.explanation / expected: Without sich, aufhalten means to delay. / current: Main idea: sich aufhalten means to stay or be in a place for a period of time. W
152. HIGH #10 / b1-becken / study.sectionAccents.tip.leftBlocks[0].text.purple / expected: pelvis; container / current: ["in the pool","pelvis","container","a bowl"]
153. HIGH #10 / b1-bedeutend / study.explanation / expected: bedeutend; bedeutend besser / current: Main idea: bedeutend means significant or notable. As an intensifier, it means '
154. HIGH #10 / b1-bedeutend / study.tip.leftBlocks[0].text / expected: bedeutend = significant/notable / current: Before the noun bedeutend = significant/notable; before better/worse = significa
155. HIGH #10 / b1-bedeutend / study.sectionAccents.tip.leftBlocks / expected: significant, notable, considerably / current: [{"text":{"purple":["significant","notable","considerably"]}}]
156. HIGH #10 / b1-sich-bedienen / study.sectionAccents.tip.leftBlocks / expected: take it yourself, serve / current: [{"text":{"purple":["take it yourself","serve"]}}]
157. HIGH #10 / b1-belegen / study.sectionAccents.tip.leftBlocks / expected: place, course, statement / current: [{"text":{"purple":["place","course","statement"]}}]
158. HIGH #10 / b1-sich-bemühen / study.explanation / expected: to make an earnest effort or to try hard / current: Main idea: sich bemühen means to make an earnest effort or to try hard. It is of
159. HIGH #10 / b1-sich-bemühen / study.sectionAccents.tip.leftBlocks / expected: solution / current: [{"text":{"purple":["solution"]}}]
160. HIGH #10 / b1-sich-beruhigen / study.sectionAccents.tip.leftBlocks[0].text.purple / expected: will calm down, calm / current: ["calms itself","appease"]
161. HIGH #10 / b1-berühmtheit / study.sectionAccents.examples[1].lv.purple / expected: null / current: ["late"]
162. HIGH #10 / b1-besorgen / study.important.text / expected: sich kümmern um, not besorgen / current: To worry is sich Sorgen machen; to take care of someone is sich kümmern um, not 
163. HIGH #11 / b1-bestimmen / study.tip.leftBlocks[0].text / expected: Usually use bestimmen. / current: If the decision determines the price, dose, term or purpose, Usually use bestimm
164. HIGH #11 / b1-einholen / study.important.text / expected: Genehmigung / current: einholen is not the usual 'get it all'; it is very often used with Informationen
165. HIGH #11 / b1-einsetzen / study.explanation / expected: the technology or equipment is used / current: Main idea: einsetzen means to use or involve something for a purpose. The object
166. HIGH #11 / b1-einsetzen / study.important.text / expected: one-size-fits-all / current: The key is the object: einsetzen is not a one-size-fits-all translation.
167. HIGH #11 / b1-eintreten / study.important.text / expected: the effect occurs / current: eintreten with an event does not mean to physically enter: Die Wirkung tritt ein
168. HIGH #11 / b1-folge / study.important.text / expected: In a TV series, Folge means an episode. / current: Folge changes the meaning according to the context: in a cause-and-effect text i
169. HIGH #12 / b1-greifen / study.explanation / expected: zu Maßnahmen greifen / current: Main idea: greifen means to grasp or reach for something with the hand. In a fig
170. HIGH #12 / b1-leistung / study.sectionAccents.comparison[0].meaning.purple / expected: Performance, achievement, power / current: ["Performance","achievement","Performance"]
171. HIGH #13 / b1-spitze / study.comparison[0].meaning / expected: Tip, peak, leadership / current: Peak, top, head
172. HIGH #13 / b1-taufen / study.examples[2].lv / expected: named / current: They named the ship Emma.
173. HIGH #13 / b1-ton / study.examples[1].lv / expected: calm tone / current: Please speak in a calm tone.
174. HIGH #13 / b1-zünden / study.explanation / expected: ["ignite","work"] / current: Main idea: zünden means to ignite, to set in motion, or to work. Anzünden is oft
175. HIGH #13 / b1-zünden / study.tip.leftBlocks[0].text / expected: starts working / current: A mechanism, fire, or idea starts working: zünden.

DO NOT MERGE OLD BRANCHES BLINDLY.

Next: EN–DE B1 MAIN MISSING-REPAIRS INTEGRATION