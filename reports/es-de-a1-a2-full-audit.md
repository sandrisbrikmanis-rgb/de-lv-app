# ES–DE A1+A2 pilns lingvistiskais un kvalitātes audits

**Datums:** 2026-08-25
**Auditors:** Cloud Agent (deterministisks + GPT-5.6 Luna)
**Standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`
**Apjoms:** `data/es/a1.js`, `data/es/a2.js` (+ `www/data/es/` mirror)
**ORIGIN_MAIN_SHA:** `941ef3bd23d87629b40a0cd553f5607d8618f47d`
**Production izmaiņas:** **0**

## 1. Kopsavilkums

| Metrika | A1 | A2 | Kopā |
|---------|----|----|------|
| Kartītes | **702/702** | **1640/1640** | **2342** |
| Study objekti (LV / ES) | **134 / 124** | **231 / 231** | **365 / 355** |
| Trūkstošie Study | **10** | **0** | **10** |
| Kartītes ar LV atlikumiem | **24** | **147** | **171** |
| `sectionAccents` neatbilstības | **45** | **581** | **626** |
| `minimalStudy` bez satura | **0** | **18** | **18** |
| Luna coverage | **100%** (2342/2342) | — | — |
| Luna validētie atradumi | **1208** | — | — |
| Luna smagums | CRITICAL **384** · HIGH **341** · MEDIUM **361** · LOW **122** | — | — |
| Luna top kategorijas | FOREIGN_REMNANT **398**, SEMANTICS **284**, TRANSLATION **230** | — | — |

## **Verdict: NEEDS_REPAIR**

## 2. Strukturālā pārbaude

| Pārbaude | Rezultāts |
|----------|-----------|
| Syntax A1/A2 | PASS |
| Mirror A1/A2 | PASS |
| Mojibake | PASS |
| Parity | FAIL |
| validate-study-design | FAIL |
| DE read-only (top-level) | FAIL |
| Luna lingvistiskais | PASS/RAN |

## 3. A1 CRITICAL — trūkstošie Study (10)

| DE | Study ID |
|----|----------|
| Besuch | `a1-besuch` |
| besuchen | `a1-besuchen` |
| Fußball | `a1-fussball-study` |
| ganz | `a1-ganz-study` |
| gefallen | `a1-gefallen-study` |
| Geschichte | `a1-geschichte-study` |
| Geschwister | `a1-geschwister-study` |
| Großeltern | `a1-grosseltern-study` |
| Hand | `a1-hand-study` |
| hübsch | `a1-huebsch` |

## 4. Luna validētie lingvistiskie atradumi

CRITICAL: **384** · HIGH: **341** · MEDIUM: **361** · LOW: **122**

#### ES-A1A2-LUNA-0001
**Card ID:** a1-anfangen-14
**Field:** esText
**CURRENT:** para empezar
**PROPOSED_ES:** empezar
**Problēma:** La entrada alemana es un infinitivo; «para empezar» es una locución y no el equivalente léxico directo.
**LV etalons (konteksts):** para empezar
**DE konteksts:** anfangen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0002
**Card ID:** a1-anders-15
**Field:** esText
**CURRENT:** de lo contrario
**PROPOSED_ES:** diferente
**Problēma:** «Anders» significa «diferente» o «de otra manera»; «de lo contrario» significa «otherwise».
**LV etalons (konteksts):** de lo contrario
**DE konteksts:** anders
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0003
**Card ID:** a1-abends-20
**Field:** esText
**CURRENT:** por la tarde
**PROPOSED_ES:** por la noche
**Problēma:** «Abends» significa «por la noche» o «por las noches», no «por la tarde».
**LV etalons (konteksts):** por la tarde
**DE konteksts:** abends
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0004
**Card ID:** a1-achten-22
**Field:** esText
**CURRENT:** observar
**PROPOSED_ES:** prestar atención
**Problēma:** «Achten» significa prestar atención o tener cuidado; «observar» corresponde más directamente a «beobachten».
**LV etalons (konteksts):** observar
**DE konteksts:** achten
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0005
**Card ID:** a1-anschauen-29
**Field:** esText
**CURRENT:** mira a
**PROPOSED_ES:** mirar
**Problēma:** La entrada alemana es un infinitivo; «mira a» es una forma imperativa incompleta.
**LV etalons (konteksts):** mira a
**DE konteksts:** anschauen
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0006
**Card ID:** a1-April-41
**Field:** esText
**CURRENT:** Abril
**PROPOSED_ES:** abril
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Abril
**DE konteksts:** April
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0007
**Card ID:** a1-Arbeit-42
**Field:** esText
**CURRENT:** trabajar
**PROPOSED_ES:** trabajo
**Problēma:** «Arbeit» es el sustantivo «trabajo»; «trabajar» es el verbo correspondiente.
**LV etalons (konteksts):** trabajar
**DE konteksts:** Arbeit
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0008
**Card ID:** a1-Arm-44
**Field:** esText
**CURRENT:** mano
**PROPOSED_ES:** brazo
**Problēma:** «Arm» significa «brazo»; «mano» se traduce como «Hand».
**LV etalons (konteksts):** mano
**DE konteksts:** Arm
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0009
**Card ID:** a1-Ärztin-46
**Field:** esText
**CURRENT:** un doctor
**PROPOSED_ES:** una doctora
**Problēma:** «Ärztin» es una médica; el artículo y el sustantivo actuales están en masculino.
**LV etalons (konteksts):** un doctor
**DE konteksts:** Ärztin
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0010
**Card ID:** a1-aufpassen-51
**Field:** esText
**CURRENT:** ten cuidado
**PROPOSED_ES:** tener cuidado
**Problēma:** La entrada alemana es un infinitivo; «ten cuidado» es una orden en segunda persona.
**LV etalons (konteksts):** ten cuidado
**DE konteksts:** aufpassen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0011
**Card ID:** a1-August-56
**Field:** esText
**CURRENT:** Agosto
**PROPOSED_ES:** agosto
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Agosto
**DE konteksts:** August
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0012
**Card ID:** a1-auf dem Bahnhof-59
**Field:** esText
**CURRENT:** en la estacion
**PROPOSED_ES:** en la estación
**Problēma:** Falta la tilde obligatoria en «estación».
**LV etalons (konteksts):** en la estacion
**DE konteksts:** auf dem Bahnhof
**Smagums:** HIGH
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0013
**Card ID:** a1-Bauch-73
**Field:** esText
**CURRENT:** estómago
**PROPOSED_ES:** barriga
**Problēma:** «Bauch» significa barriga o abdomen; «estómago» designa específicamente el órgano.
**LV etalons (konteksts):** estómago
**DE konteksts:** Bauch
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0014
**Card ID:** a1-Baum-74
**Field:** esText
**CURRENT:** un arbol
**PROPOSED_ES:** un árbol
**Problēma:** Falta la tilde obligatoria en «árbol».
**LV etalons (konteksts):** un arbol
**DE konteksts:** Baum
**Smagums:** HIGH
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0015
**Card ID:** a1-beginnen-77
**Field:** esText
**CURRENT:** para empezar
**PROPOSED_ES:** empezar
**Problēma:** El alemán es un infinitivo; «para empezar» añade una construcción de finalidad no presente en el original.
**LV etalons (konteksts):** para empezar
**DE konteksts:** beginnen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0016
**Card ID:** a1-besuchen-89
**Field:** esText
**CURRENT:** asistir • visitar
**PROPOSED_ES:** visitar
**Problēma:** «Besuchen» significa visitar; «asistir» suele significar acudir o participar en un evento.
**LV etalons (konteksts):** asistir • visitar
**DE konteksts:** besuchen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0017
**Card ID:** a1-bitten-98
**Field:** esText
**CURRENT:** preguntar
**PROPOSED_ES:** pedir
**Problēma:** «Bitten» significa pedir o rogar; «preguntar» significa hacer una pregunta.
**LV etalons (konteksts):** preguntar
**DE konteksts:** bitten
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0018
**Card ID:** a1-Blatt-99
**Field:** esText
**CURRENT:** página
**PROPOSED_ES:** hoja
**Problēma:** «Blatt» se refiere a una hoja de papel o de una planta; «página» es una cara o sección escrita.
**LV etalons (konteksts):** página
**DE konteksts:** Blatt
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0019
**Card ID:** a1-Buchstabe-117
**Field:** esText
**CURRENT:** carta
**PROPOSED_ES:** letra
**Problēma:** “Buchstabe” significa “letra” del alfabeto; “carta” significa carta de correspondencia o menú.
**LV etalons (konteksts):** carta
**DE konteksts:** Buchstabe
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0020
**Card ID:** a1-Butter-120
**Field:** esText
**CURRENT:** manteca
**PROPOSED_ES:** mantequilla
**Problēma:** “Butter” se traduce normalmente como “mantequilla”; “manteca” suele referirse a grasa animal o vegetal.
**LV etalons (konteksts):** manteca
**DE konteksts:** Butter
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0021
**Card ID:** a1-Cousine-125
**Field:** esText
**CURRENT:** primo
**PROPOSED_ES:** prima
**Problēma:** “Cousine” es un sustantivo femenino: significa “prima”, no “primo”.
**LV etalons (konteksts):** primo
**DE konteksts:** Cousine
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0022
**Card ID:** a1-deutsch-135
**Field:** esText
**CURRENT:** Alemán
**PROPOSED_ES:** alemán
**Problēma:** El nombre del idioma y el adjetivo se escriben normalmente en minúscula en español.
**LV etalons (konteksts):** Alemán
**DE konteksts:** deutsch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0023
**Card ID:** a1-Dezember-136
**Field:** esText
**CURRENT:** Diciembre
**PROPOSED_ES:** diciembre
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Diciembre
**DE konteksts:** Dezember
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0024
**Card ID:** a1-Donnerstag-141
**Field:** esText
**CURRENT:** Jueves
**PROPOSED_ES:** jueves
**Problēma:** Los nombres de los días de la semana se escriben en minúscula en español.
**LV etalons (konteksts):** Jueves
**DE konteksts:** Donnerstag
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0025
**Card ID:** a1-dürfen-150
**Field:** esText
**CURRENT:** ser permitido
**PROPOSED_ES:** poder
**Problēma:** El modal alemán “dürfen” se expresa naturalmente como “poder” con sentido de permiso; “ser permitido” es una traducción literal poco natural.
**LV etalons (konteksts):** ser permitido
**DE konteksts:** dürfen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0026
**Card ID:** a1-Esslöffel-168
**Field:** esText
**CURRENT:** cucharada
**PROPOSED_ES:** cuchara sopera
**Problēma:** “Esslöffel” es el utensilio “cuchara sopera”; “cucharada” designa principalmente una cantidad, no la cuchara.
**LV etalons (konteksts):** cucharada
**DE konteksts:** Esslöffel
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0027
**Card ID:** a1-euer-171
**Field:** esText
**CURRENT:** tuyo
**PROPOSED_ES:** vuestro
**Problēma:** “euer” es el posesivo de segunda persona plural: “vuestro”, no “tuyo”, que es singular.
**LV etalons (konteksts):** tuyo
**DE konteksts:** euer
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0028
**Card ID:** a1-Februar-178
**Field:** esText
**CURRENT:** Febrero
**PROPOSED_ES:** febrero
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Febrero
**DE konteksts:** Februar
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0029
**Card ID:** a1-Fernseher-182
**Field:** esText
**CURRENT:** televisión
**PROPOSED_ES:** televisor
**Problēma:** «Fernseher» designa el aparato de televisión; «televisión» suele referirse al medio o al servicio.
**LV etalons (konteksts):** televisión
**DE konteksts:** Fernseher
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0030
**Card ID:** a1-frei-199
**Field:** esText
**CURRENT:** gratis
**PROPOSED_ES:** libre
**Problēma:** «Gratis» significa sin coste; «frei» significa libre, disponible o no ocupado, según el contexto.
**LV etalons (konteksts):** gratis
**DE konteksts:** frei
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0031
**Card ID:** a1-frühstücken-208
**Field:** esText
**CURRENT:** desayunando
**PROPOSED_ES:** desayunar
**Problēma:** El alemán es un infinitivo; «desayunando» es un gerundio y no corresponde a la forma léxica solicitada.
**LV etalons (konteksts):** desayunando
**DE konteksts:** frühstücken
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0032
**Card ID:** a1-Fußball-218
**Field:** esText
**CURRENT:** fútbol americano
**PROPOSED_ES:** fútbol
**Problēma:** «Fußball» significa fútbol; «fútbol americano» designa otro deporte distinto.
**LV etalons (konteksts):** fútbol americano
**DE konteksts:** Fußball
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0033
**Card ID:** a1-geboren-224
**Field:** esText
**CURRENT:** nació
**PROPOSED_ES:** nacido
**Problēma:** «Nació» es una forma verbal finita en pasado; «geboren» es el participio/adjetivo «nacido».
**LV etalons (konteksts):** nació
**DE konteksts:** geboren
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0034
**Card ID:** a1-gegen-226
**Field:** esText
**CURRENT:** vs
**PROPOSED_ES:** contra
**Problēma:** «Gegen» se traduce normalmente como «contra»; «vs» es una abreviatura y no la traducción léxica adecuada.
**LV etalons (konteksts):** vs
**DE konteksts:** gegen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0035
**Card ID:** a1-halb-262
**Field:** esText
**CURRENT:** lado
**PROPOSED_ES:** medio
**Problēma:** «Halb» significa «medio», no «lado».
**LV etalons (konteksts):** lado
**DE konteksts:** halb
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0036
**Card ID:** a1-Hälfte-263
**Field:** esText
**CURRENT:** lado
**PROPOSED_ES:** mitad
**Problēma:** «Hälfte» significa «mitad»; «lado» corresponde a otra palabra alemana.
**LV etalons (konteksts):** lado
**DE konteksts:** Hälfte
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0037
**Card ID:** a1-Haltestelle-266
**Field:** esText
**CURRENT:** detener
**PROPOSED_ES:** parada
**Problēma:** «Haltestelle» es una parada, normalmente de autobús o transporte público; «detener» es un verbo.
**LV etalons (konteksts):** detener
**DE konteksts:** Haltestelle
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0038
**Card ID:** a1-Heft-273
**Field:** esText
**CURRENT:** computadora portátil
**PROPOSED_ES:** cuaderno
**Problēma:** «Heft» significa «cuaderno» o «libreta», no «computadora portátil».
**LV etalons (konteksts):** computadora portátil
**DE konteksts:** Heft
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0039
**Card ID:** a1-helfen-277
**Field:** esText
**CURRENT:** para ayudar
**PROPOSED_ES:** ayudar
**Problēma:** El infinitivo alemán corresponde a «ayudar»; «para ayudar» añade un sentido de finalidad.
**LV etalons (konteksts):** para ayudar
**DE konteksts:** helfen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0040
**Card ID:** a1-Herr-280
**Field:** esText
**CURRENT:** Señor
**PROPOSED_ES:** señor
**Problēma:** Como sustantivo común independiente en español, «señor» se escribe normalmente en minúscula.
**LV etalons (konteksts):** Señor
**DE konteksts:** Herr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0041
**Card ID:** a1-hübsch-288
**Field:** esText
**CURRENT:** ordenado • agradable
**PROPOSED_ES:** bonito
**Problēma:** «Hübsch» significa «bonito», «guapo» o «atractivo»; «ordenado» no corresponde.
**LV etalons (konteksts):** ordenado • agradable
**DE konteksts:** hübsch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0042
**Card ID:** a1-ich-291
**Field:** esText
**CURRENT:** a mí
**PROPOSED_ES:** yo
**Problēma:** «Ich» es el pronombre sujeto «yo»; «a mí» es una forma oblicua y no equivale al alemán.
**LV etalons (konteksts):** a mí
**DE konteksts:** ich
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0043
**Card ID:** a1-Januar-298
**Field:** esText
**CURRENT:** Enero
**PROPOSED_ES:** enero
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Enero
**DE konteksts:** Januar
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0044
**Card ID:** a1-jawohl-299
**Field:** esText
**CURRENT:** exactamente así
**PROPOSED_ES:** sí, señor
**Problēma:** Jawohl es una afirmación enfática, no significa «exactamente así».
**LV etalons (konteksts):** exactamente así
**DE konteksts:** jawohl
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0045
**Card ID:** a1-Juli-303
**Field:** esText
**CURRENT:** Julio
**PROPOSED_ES:** julio
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Julio
**DE konteksts:** Juli
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0046
**Card ID:** a1-Juni-305
**Field:** esText
**CURRENT:** Junio
**PROPOSED_ES:** junio
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Junio
**DE konteksts:** Juni
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0047
**Card ID:** a1-Honig-324
**Field:** esText
**CURRENT:** Miel
**PROPOSED_ES:** miel
**Problēma:** Los sustantivos comunes en español se escriben en minúscula, salvo al inicio de oración.
**LV etalons (konteksts):** Miel
**DE konteksts:** Honig
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0048
**Card ID:** a1-Koch-340
**Field:** esText
**CURRENT:** cocinar
**PROPOSED_ES:** cocinero
**Problēma:** Koch es un sustantivo que designa a una persona; «cocinar» es el verbo correspondiente.
**LV etalons (konteksts):** cocinar
**DE konteksts:** Koch
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0049
**Card ID:** a1-Köchin-341
**Field:** esText
**CURRENT:** cocinar
**PROPOSED_ES:** cocinera
**Problēma:** Köchin es el sustantivo femenino «cocinera»; «cocinar» es un verbo.
**LV etalons (konteksts):** cocinar
**DE konteksts:** Köchin
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0050
**Card ID:** a1-Lehrerin-365
**Field:** esText
**CURRENT:** un maestro
**PROPOSED_ES:** una maestra
**Problēma:** La traducción es masculina, pero Lehrerin significa profesora o maestra.
**LV etalons (konteksts):** un maestro
**DE konteksts:** Lehrerin
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0051
**Card ID:** a1-letzte-370
**Field:** esText
**CURRENT:** el ultimo
**PROPOSED_ES:** el último
**Problēma:** Falta la tilde obligatoria en último.
**LV etalons (konteksts):** el ultimo
**DE konteksts:** letzte
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0052
**Card ID:** a1-Liebe-374
**Field:** esText
**CURRENT:** amar
**PROPOSED_ES:** amor
**Problēma:** Liebe es el sustantivo amor; amar es el verbo correspondiente.
**LV etalons (konteksts):** amar
**DE konteksts:** Liebe
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0053
**Card ID:** a1-Lineal-379
**Field:** esText
**CURRENT:** gobernante
**PROPOSED_ES:** regla
**Problēma:** Lineal significa regla, el instrumento para medir; gobernante es otra acepción de ruler.
**LV etalons (konteksts):** gobernante
**DE konteksts:** Lineal
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0054
**Card ID:** a1-links-380
**Field:** esText
**CURRENT:** izquierda • izquierda
**PROPOSED_ES:** izquierda
**Problēma:** La traducción aparece duplicada innecesariamente.
**LV etalons (konteksts):** izquierda • izquierda
**DE konteksts:** links
**Smagums:** LOW
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0055
**Card ID:** a1-Mai-389
**Field:** esText
**CURRENT:** Puede
**PROPOSED_ES:** mayo
**Problēma:** Mai es el mes mayo; Puede es una forma del verbo poder.
**LV etalons (konteksts):** Puede
**DE konteksts:** Mai
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0056
**Card ID:** a1-malen-391
**Field:** esText
**CURRENT:** pintar • pintar
**PROPOSED_ES:** pintar
**Problēma:** La traducción aparece duplicada innecesariamente.
**LV etalons (konteksts):** pintar • pintar
**DE konteksts:** malen
**Smagums:** LOW
**Kategorija:** STRUCTURE
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0057
**Card ID:** a1-Mandarine-393
**Field:** esText
**CURRENT:** mandarín
**PROPOSED_ES:** mandarina
**Problēma:** Mandarine es la fruta mandarina; mandarín se refiere al idioma o a una persona.
**LV etalons (konteksts):** mandarín
**DE konteksts:** Mandarine
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0058
**Card ID:** a1-Marmelade-395
**Field:** esText
**CURRENT:** atasco
**PROPOSED_ES:** mermelada
**Problēma:** Marmelade significa mermelada, no atasco.
**LV etalons (konteksts):** atasco
**DE konteksts:** Marmelade
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0059
**Card ID:** a1-März-396
**Field:** esText
**CURRENT:** Marzo
**PROPOSED_ES:** marzo
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Marzo
**DE konteksts:** März
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0060
**Card ID:** a1-mein-401
**Field:** esText
**CURRENT:** mío
**PROPOSED_ES:** mi
**Problēma:** Como determinante posesivo, mein corresponde normalmente a mi; mío es un pronombre posesivo.
**LV etalons (konteksts):** mío
**DE konteksts:** mein
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0061
**Card ID:** a1-mitnehmen-409
**Field:** esText
**CURRENT:** llévate contigo
**PROPOSED_ES:** llevarse
**Problēma:** El alemán está en infinitivo; la traducción actual es un imperativo de segunda persona.
**LV etalons (konteksts):** llévate contigo
**DE konteksts:** mitnehmen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0062
**Card ID:** a1-Mittag-410
**Field:** esText
**CURRENT:** almuerzo
**PROPOSED_ES:** mediodía
**Problēma:** Mittag significa mediodía; almuerzo corresponde a Mittagessen.
**LV etalons (konteksts):** almuerzo
**DE konteksts:** Mittag
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0063
**Card ID:** a1-Mittwoch-412
**Field:** esText
**CURRENT:** Miércoles
**PROPOSED_ES:** miércoles
**Problēma:** Los nombres de los días se escriben en minúscula en español.
**LV etalons (konteksts):** Miércoles
**DE konteksts:** Mittwoch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0064
**Card ID:** a1-Montag-416
**Field:** esText
**CURRENT:** Lunes
**PROPOSED_ES:** lunes
**Problēma:** Los nombres de los días se escriben en minúscula en español.
**LV etalons (konteksts):** Lunes
**DE konteksts:** Montag
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0065
**Card ID:** a1-Mütze-425
**Field:** esText
**CURRENT:** sombrero
**PROPOSED_ES:** gorro
**Problēma:** Mütze significa principalmente «gorro»; «sombrero» designa otra prenda de cabeza.
**LV etalons (konteksts):** sombrero
**DE konteksts:** Mütze
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0066
**Card ID:** a1-neunzehnte-444
**Field:** esText
**CURRENT:** el diecinueve
**PROPOSED_ES:** el decimonoveno
**Problēma:** «Diecinueve» es cardinal; el alemán es un ordinal: «el decimonoveno».
**LV etalons (konteksts):** el diecinueve
**DE konteksts:** neunzehnte
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0067
**Card ID:** a1-neunzigste-446
**Field:** esText
**CURRENT:** el noventa
**PROPOSED_ES:** el nonagésimo
**Problēma:** «Noventa» es cardinal; el alemán es un ordinal: «el nonagésimo».
**LV etalons (konteksts):** el noventa
**DE konteksts:** neunzigste
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0068
**Card ID:** a1-November-453
**Field:** esText
**CURRENT:** Noviembre
**PROPOSED_ES:** noviembre
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Noviembre
**DE konteksts:** November
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0069
**Card ID:** a1-Oktober-464
**Field:** esText
**CURRENT:** Octubre
**PROPOSED_ES:** octubre
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Octubre
**DE konteksts:** Oktober
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0070
**Card ID:** a1-Polizei-479
**Field:** esText
**CURRENT:** la policia
**PROPOSED_ES:** la policía
**Problēma:** Falta la tilde en «policía».
**LV etalons (konteksts):** la policia
**DE konteksts:** Polizei
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0071
**Card ID:** a1-schmecken-515
**Field:** esText
**CURRENT:** al gusto
**PROPOSED_ES:** saber
**Problēma:** “Al gusto” significa “según el gusto”, no “saborear/tener sabor”; no traduce el verbo alemán.
**LV etalons (konteksts):** al gusto
**DE konteksts:** schmecken
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0072
**Card ID:** a1-Schnee-517
**Field:** esText
**CURRENT:** nevará
**PROPOSED_ES:** nieve
**Problēma:** “Nevará” es el futuro de “nevar”; el alemán es el sustantivo “nieve”.
**LV etalons (konteksts):** nevará
**DE konteksts:** Schnee
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0073
**Card ID:** a1-September-546
**Field:** esText
**CURRENT:** Septiembre
**PROPOSED_ES:** septiembre
**Problēma:** Los nombres de los meses se escriben en minúscula en español.
**LV etalons (konteksts):** Septiembre
**DE konteksts:** September
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0074
**Card ID:** a1-so-559
**Field:** esText
**CURRENT:** entonces
**PROPOSED_ES:** así
**Problēma:** “Entonces” suele corresponder a “dann”; el significado básico de “so” es “así”.
**LV etalons (konteksts):** entonces
**DE konteksts:** so
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0075
**Card ID:** a1-Samstag-566
**Field:** esText
**CURRENT:** Sábado
**PROPOSED_ES:** sábado
**Problēma:** Los días de la semana se escriben en minúscula en español.
**LV etalons (konteksts):** Sábado
**DE konteksts:** Samstag
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0076
**Card ID:** a1-Taxi-591
**Field:** esText
**CURRENT:** Taxi
**PROPOSED_ES:** taxi
**Problēma:** “Taxi” es un nombre común y debe escribirse en minúscula en español.
**LV etalons (konteksts):** Taxi
**DE konteksts:** Taxi
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0077
**Card ID:** a1-Teller-595
**Field:** esText
**CURRENT:** lámina
**PROPOSED_ES:** plato
**Problēma:** “Teller” significa “plato” en el contexto cotidiano; “lámina” significa una hoja o placa delgada.
**LV etalons (konteksts):** lámina
**DE konteksts:** Teller
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0078
**Card ID:** a1-Treppe-603
**Field:** esText
**CURRENT:** escaleras
**PROPOSED_ES:** escalera
**Problēma:** El alemán es un sustantivo singular; «escaleras» es plural. «Escalera» conserva el número y el significado.
**LV etalons (konteksts):** escaleras
**DE konteksts:** Treppe
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0079
**Card ID:** a1-versuchen-622
**Field:** esText
**CURRENT:** intentarlo
**PROPOSED_ES:** intentar
**Problēma:** «Intentarlo» añade el pronombre y el objeto «lo»; el infinitivo alemán sin objeto corresponde a «intentar».
**LV etalons (konteksts):** intentarlo
**DE konteksts:** versuchen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0080
**Card ID:** a1-Vorname-637
**Field:** esText
**CURRENT:** palabra
**PROPOSED_ES:** nombre de pila
**Problēma:** «Vorname» significa nombre de pila o nombre propio, no «palabra».
**LV etalons (konteksts):** palabra
**DE konteksts:** Vorname
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0081
**Card ID:** a1-sich waschen-646
**Field:** esText
**CURRENT:** lavar
**PROPOSED_ES:** lavarse
**Problēma:** El verbo alemán es reflexivo; «lavar» omite que la acción recae sobre el propio sujeto.
**LV etalons (konteksts):** lavar
**DE konteksts:** sich waschen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0082
**Card ID:** a1-welcher-652
**Field:** esText
**CURRENT:** OMS
**PROPOSED_ES:** cuál
**Problēma:** «OMS» significa Organización Mundial de la Salud y no traduce «welcher», que significa «cuál» o «qué».
**LV etalons (konteksts):** OMS
**DE konteksts:** welcher
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0083
**Card ID:** a1-zumachen-673
**Field:** esText
**CURRENT:** de cerca
**PROPOSED_ES:** cerrar
**Problēma:** Zumachen significa «cerrar»; «de cerca» significa «aus der Nähe» y no corresponde al verbo alemán.
**LV etalons (konteksts):** de cerca
**DE konteksts:** zumachen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0084
**Card ID:** a2-Abenteuer-1
**Field:** esText
**CURRENT:** aventura • asunto
**PROPOSED_ES:** aventura
**Problēma:** «Abenteuer» significa «aventura»; «asunto» es otro sustantivo y no corresponde a esta entrada alemana.
**LV etalons (konteksts):** aventura • asunto
**DE konteksts:** Abenteuer
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0085
**Card ID:** a2-abtauen-17
**Field:** esText
**CURRENT:** deshielo
**PROPOSED_ES:** descongelar
**Problēma:** «Abtauen» es un infinitivo verbal; «deshielo» es un sustantivo. La traducción adecuada es «descongelar» o «deshelar».
**LV etalons (konteksts):** deshielo
**DE konteksts:** abtauen
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0086
**Card ID:** a2-abwesend-20
**Field:** esText
**CURRENT:** prometedor
**PROPOSED_ES:** ausente
**Problēma:** «Abwesend» significa «ausente»; «prometedor» significa «vielversprechend» y expresa un sentido distinto.
**LV etalons (konteksts):** prometedor
**DE konteksts:** abwesend
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0087
**Card ID:** a2-Achse-21
**Field:** esText
**CURRENT:** culo
**PROPOSED_ES:** eje
**Problēma:** «Achse» significa «eje». «Culo» es una traducción ajena y vulgar que no corresponde al término alemán.
**LV etalons (konteksts):** culo
**DE konteksts:** Achse
**Smagums:** CRITICAL
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0088
**Card ID:** a2-Aerobic-26
**Field:** esText
**CURRENT:** aerobic
**PROPOSED_ES:** aeróbic
**Problēma:** El sustantivo español para esta actividad se escribe «aeróbic», con tilde; «aerobic» no refleja la ortografía normativa.
**LV etalons (konteksts):** aerobic
**DE konteksts:** Aerobic
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0089
**Card ID:** a2-Änderung-36
**Field:** esText
**CURRENT:** cambios
**PROPOSED_ES:** cambio
**Problēma:** El alemán es singular; «cambios» está en plural.
**LV etalons (konteksts):** cambios
**DE konteksts:** Änderung
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0090
**Card ID:** a2-Anlass-53
**Field:** esText
**CURRENT:** razón • caso
**PROPOSED_ES:** razón • ocasión
**Problēma:** «Anlass» significa motivo o ocasión; «caso» no corresponde bien a este sustantivo.
**LV etalons (konteksts):** razón • caso
**DE konteksts:** Anlass
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0091
**Card ID:** a2-anlässlich-54
**Field:** esText
**CURRENT:** debido a
**PROPOSED_ES:** con motivo de
**Problēma:** «Anlässlich» significa «con motivo de» o «con ocasión de», no simplemente «debido a».
**LV etalons (konteksts):** debido a
**DE konteksts:** anlässlich
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0092
**Card ID:** a2-anstreichen-66
**Field:** esText
**CURRENT:** color • subrayado
**PROPOSED_ES:** pintar • subrayar
**Problēma:** El alemán es un verbo: significa pintar o subrayar; «color» es un sustantivo.
**LV etalons (konteksts):** color • subrayado
**DE konteksts:** anstreichen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0093
**Card ID:** a2-anzünden-75
**Field:** esText
**CURRENT:** incendiar
**PROPOSED_ES:** encender
**Problēma:** «Anzünden» normalmente significa encender; «incendiar» implica provocar un incendio deliberadamente.
**LV etalons (konteksts):** incendiar
**DE konteksts:** anzünden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0094
**Card ID:** a2-Arm-85
**Field:** esText
**CURRENT:** mano
**PROPOSED_ES:** brazo
**Problēma:** «Arm» significa «brazo»; «mano» es solo la parte final del brazo.
**LV etalons (konteksts):** mano
**DE konteksts:** Arm
**Smagums:** CRITICAL
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0095
**Card ID:** a2-Ast-94
**Field:** esText
**CURRENT:** una sucursal
**PROPOSED_ES:** rama
**Problēma:** Ast significa «rama» de un árbol; «sucursal» es una filial o delegación comercial.
**LV etalons (konteksts):** una sucursal
**DE konteksts:** Ast
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0096
**Card ID:** a2-auf die Schulter klopfen-102
**Field:** esText
**CURRENT:** toque en el hombro
**PROPOSED_ES:** dar una palmada en el hombro
**Problēma:** La traducción actual es un sintagma nominal y no expresa la acción de dar golpecitos o palmadas.
**LV etalons (konteksts):** toque en el hombro
**DE konteksts:** auf die Schulter klopfen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0097
**Card ID:** a2-auf jeden Fall-104
**Field:** esText
**CURRENT:** en cada caso
**PROPOSED_ES:** en cualquier caso
**Problēma:** «Auf jeden Fall» significa «en cualquier caso» o «de todos modos», no «en cada caso».
**LV etalons (konteksts):** en cada caso
**DE konteksts:** auf jeden Fall
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0098
**Card ID:** a2-aufbrechen-107
**Field:** esText
**CURRENT:** poner en marcha • abrirse
**PROPOSED_ES:** ponerse en marcha • abrirse
**Problēma:** Para el sentido de partir, «aufbrechen» requiere la forma intransitiva «ponerse en marcha»; «poner» cambia el sentido.
**LV etalons (konteksts):** poner en marcha • abrirse
**DE konteksts:** aufbrechen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0099
**Card ID:** a2-Aufenthalt-110
**Field:** esText
**CURRENT:** permanecer
**PROPOSED_ES:** estancia
**Problēma:** «Aufenthalt» es un sustantivo que significa «estancia»; «permanecer» es un verbo.
**LV etalons (konteksts):** permanecer
**DE konteksts:** Aufenthalt
**Smagums:** HIGH
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
#### ES-A1A2-LUNA-0100
**Card ID:** a2-auffordern-113
**Field:** esText
**CURRENT:** invitar
**PROPOSED_ES:** pedir
**Problēma:** «Auffordern» significa pedir, instar o exhortar; «invitar» corresponde normalmente a «einladen».
**LV etalons (konteksts):** invitar
**DE konteksts:** auffordern
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Statuss:** PENDING
> … un vēl **1108** atradumi — pilns saraksts: `reports/temp/es-a1-a2-linguistic-audit.json`

## 5. Deterministiskie atradumi (kopsavilkums)

Pilns deterministiskais JSON: `reports/temp/es-de-a1-a2-audit-data.json`

- A1: 10 trūkstošie Study, 24 kartītes ar LV atlikumiem, 6 DE Study neatbilstības
- A2: 147 kartītes ar LV atlikumiem `comparison[].example`, 18 tukšas `minimalStudy`

## 6. Audita metodoloģija

| Rīks | Komanda |
|------|---------|
| Kolektors | `node scripts/audit-es-a1-a2-collect.js` |
| Luna | `node scripts/audit-es-a1-a2-linguistic.js [--test-batch] [--resume]` |
| Orķestrators | `node scripts/run-es-a1-a2-full-audit.js [--skip-luna] [--test-luna] [--fresh-luna]` |
| Paritāte | `node scripts/audit-language-parity.js --lang=es` |
| Study dizains | `node scripts/validate-study-design.js --lang=es` |
