# ES–DE A1+A2 OWNER DECISIONS — MASTER 1101–1200

**Findings:** 1101–1200
**OWNER decisions:** 100/100
**DE:** STRICT READ-ONLY
**Production apply:** NAV VEIKTS

> AUTHORITATIVE OWNER MAPPING. Apply tikai `Status: LABOT` rindas ar precīzu `Card ID` + `Field/path` + `CURRENT` exact-match. Mismatch → SKIP. Ierakstīt tieši `NEW`; netulkot, nepārfrāzēt un neimprovizēt.

| # | Finding | Card ID | Field/path | CURRENT | NEW | Status |
|---:|---|---|---|---|---|---|
| 1101 | `ES-A1A2-LUNA-1101` | `a2-stelle` | `study.examples[2].lv` | `el trabajo esta bien remunerado.` | `El trabajo está bien remunerado.` | **LABOT** |
| 1102 | `ES-A1A2-LUNA-1102` | `a2-stelle` | `study.examples[3].lv` | `Lea este lugar en el texto nuevamente.` | `Vuelva a leer este pasaje en el texto.` | **LABOT** |
| 1103 | `ES-A1A2-LUNA-1103` | `a2-stelle` | `study.comparison[0].meaning` | `vieta / darba vieta / fragments` | `lugar / puesto de trabajo / pasaje` | **LABOT** |
| 1104 | `ES-A1A2-LUNA-1104` | `a2-stelle` | `study.comparison[2].meaning` | `darba vieta` | `puesto de trabajo` | **LABOT** |
| 1105 | `ES-A1A2-LUNA-1105` | `a2-stelle` | `study.comparison[3].meaning` | `teksta vieta / fragments` | `pasaje del texto / fragmento` | **LABOT** |
| 1106 | `ES-A1A2-LUNA-1106` | `a2-stimmen` | `study.examples[1].lv` | `tava atbilde ir pareiza.` | `Tu respuesta es correcta.` | **LABOT** |
| 1107 | `ES-A1A2-LUNA-1107` | `a2-stimmen` | `study.tip.leftBlocks[0].text` | `La frase Das stimmt significa "Es" o "Está bien".` | `La frase «Das stimmt» significa «Es correcto» o «Está bien».` | **LABOT** |
| 1108 | `ES-A1A2-LUNA-1108` | `a2-stoff` | `study.examples[1].lv` | `man vajag audumu kleitai.` | `Necesito tela para el vestido.` | **LABOT** |
| 1109 | `ES-A1A2-LUNA-1109` | `a2-stoff` | `study.comparison[2].meaning` | `viela / substance` | `sustancia` | **LABOT** |
| 1110 | `ES-A1A2-LUNA-1110` | `a2-stoff` | `study.important.text` | `der Stoff nav tikai audums.` | `Stoff no significa solo tela.` | **LABOT** |
| 1111 | `ES-A1A2-LUNA-1111` | `a2-termin` | `esMain` | `nombramiento acordado • plazo` | `cita acordada • plazo` | **LABOT** |
| 1112 | `ES-A1A2-LUNA-1112` | `a2-termin` | `study.translation` | `nombramiento acordado • plazo` | `cita acordada • plazo` | **LABOT** |
| 1113 | `ES-A1A2-LUNA-1113` | `a2-termin` | `study.examples[1].lv` | `¿Puedo iniciar sesión?` | `¿Puedo concertar una cita?` | **LABOT** |
| 1114 | `ES-A1A2-LUNA-1114` | `a2-termin` | `study.examples[2].lv` | `La hora acordada son las diez.` | `La hora acordada es a las diez.` | **LABOT** |
| 1115 | `ES-A1A2-LUNA-1115` | `a2-termin` | `study.comparison[4].meaning` | `laika punkts` | `momento / plazo` | **LABOT** |
| 1116 | `ES-A1A2-LUNA-1116` | `a2-termin` | `study.tip.leftBlocks[0].text` | `En el médico, peluquero o institución der El término suele significar una cita.` | `En el médico, la peluquería o una institución, Termin suele significar una cita.` | **LABOT** |
| 1117 | `ES-A1A2-LUNA-1117` | `a2-termin` | `study.important.text` | `El mandato no es un nombramiento cualquiera.` | `Termin no es una cita cualquiera.` | **LABOT** |
| 1118 | `ES-A1A2-LUNA-1118` | `a2-tief` | `study.examples[4].lv` | `plaukts ir zems.` | `La estantería está baja.` | **LABOT** |
| 1119 | `ES-A1A2-LUNA-1119` | `a2-tief` | `study.examples[5].lv` | `kalns ir augsts.` | `La montaña es alta.` | **LABOT** |
| 1120 | `ES-A1A2-LUNA-1120` | `a2-tief` | `study.comparison[3].meaning` | `sekls / plakans` | `poco profundo / plano` | **LABOT** |
| 1121 | `ES-A1A2-LUNA-1121` | `a2-tief` | `study.comparison[1].meaning` | `baja en altura o figura` | `bajo en altura o en sentido figurado` | **LABOT** |
| 1122 | `ES-A1A2-LUNA-1122` | `a2-toll` | `study.examples[0].lv` | `koncerts bija lielisks!` | `¡El concierto fue genial!` | **LABOT** |
| 1123 | `ES-A1A2-LUNA-1123` | `a2-toll` | `study.examples[3].lv` | `genial que vengas!` | `¡Genial que vengas!` | **LABOT** |
| 1124 | `ES-A1A2-LUNA-1124` | `a2-tragen` | `study.examples[0].lv` | `vai vari nest somu?` | `¿Puedes llevar la bolsa?` | **LABOT** |
| 1125 | `ES-A1A2-LUNA-1125` | `a2-tragen` | `study.examples[4].lv` | `galds iztur lielu svaru.` | `La mesa soporta mucho peso.` | **LABOT** |
| 1126 | `ES-A1A2-LUNA-1126` | `a2-tragen` | `study.tip.leftBlocks[1].text` | `Ja gribi pateikt “uzvilkt”, lieto anziehen; ja “atnest”, lieto bringen.` | `Si quieres decir «ponerse», usa anziehen; si quieres decir «traer», usa bringen.` | **LABOT** |
| 1127 | `ES-A1A2-LUNA-1127` | `a2-treffen` | `study.important.text` | `Ich treffe dich = Es tevi satieku.` | `Ich treffe dich = Me encuentro contigo.` | **LABOT** |
| 1128 | `ES-A1A2-LUNA-1128` | `a2-übrig` | `study.translation` | `izquierda • el resto` | `restante • el resto` | **LABOT** |
| 1129 | `ES-A1A2-LUNA-1129` | `a2-übrig` | `study.comparison[1].meaning` | `pasar la noche` | `quedarse / permanecer` | **LABOT** |
| 1130 | `ES-A1A2-LUNA-1130` | `a2-übrig` | `study.comparison[2].meaning` | `atlikums` | `el resto` | **LABOT** |
| 1131 | `ES-A1A2-LUNA-1131` | `a2-übrig` | `study.examples[4].lv` | `el saldo sobra.` | `Queda saldo.` | **LABOT** |
| 1132 | `ES-A1A2-LUNA-1132` | `a2-übung` | `study.examples[3].lv` | `prakse dara meistaru.` | `La práctica hace al maestro.` | **LABOT** |
| 1133 | `ES-A1A2-LUNA-1133` | `a2-übung` | `study.comparison[0].meaning` | `ejercicio / practica` | `ejercicio / práctica` | **LABOT** |
| 1134 | `ES-A1A2-LUNA-1134` | `a2-übung` | `study.comparison[4].meaning` | `prakse` | `práctica` | **LABOT** |
| 1135 | `ES-A1A2-LUNA-1135` | `a2-umsonst` | `study.translation` | `en vano • en vano` | `gratis • en vano` | **LABOT** |
| 1136 | `ES-A1A2-LUNA-1136` | `a2-umsonst` | `study.examples[0].lv` | `ieeja ir par velti.` | `La entrada es gratis.` | **LABOT** |
| 1137 | `ES-A1A2-LUNA-1137` | `a2-umsonst` | `study.comparison[1].meaning` | `bez maksas` | `gratis` | **LABOT** |
| 1138 | `ES-A1A2-LUNA-1138` | `a2-urlaub-study` | `study.comparison[0].meaning` | `salir del trabajo (solo todos)` | `permiso laboral (para todos)` | **LABOT** |
| 1139 | `ES-A1A2-LUNA-1139` | `a2-urlaub-study` | `study.comparison[1].meaning` | `vacaciones escolares/de estudio (solo dsk.)` | `vacaciones escolares o de estudios (solo estudiantes)` | **LABOT** |
| 1140 | `ES-A1A2-LUNA-1140` | `a2-verbinden` | `study.examples[1].lv` | `vai vari mani savienot ar biroju?` | `¿Puedes comunicarme con la oficina?` | **LABOT** |
| 1141 | `ES-A1A2-LUNA-1141` | `a2-verbinden` | `study.examples[5].lv` | `es sienu kurpes.` | `Me ato los zapatos.` | **LABOT** |
| 1142 | `ES-A1A2-LUNA-1142` | `a2-verbinden` | `study.comparison[2].meaning` | `tamiz` | `vendar` | **LABOT** |
| 1143 | `ES-A1A2-LUNA-1143` | `a2-verbinden` | `study.important.text` | `verbinden nav tas pats, kas binden.` | `verbinden no es lo mismo que binden.` | **LABOT** |
| 1144 | `ES-A1A2-LUNA-1144` | `a2-verkehr` | `study.examples[4].lv` | `firmai ir daudz kontaktu ar klientiem.` | `La empresa tiene muchos contactos con los clientes.` | **LABOT** |
| 1145 | `ES-A1A2-LUNA-1145` | `a2-verkehr` | `study.comparison[3].meaning` | `kontakts / sakari` | `contactos / comunicaciones` | **LABOT** |
| 1146 | `ES-A1A2-LUNA-1146` | `a2-verkehr` | `study.important.text` | `Verkehr nav tikai auto satiksme.` | `Verkehr no significa solo tráfico de automóviles.` | **LABOT** |
| 1147 | `ES-A1A2-LUNA-1147` | `a2-verlangen` | `study.translation` | `requerir • demanda` | `exigir • pedir` | **LABOT** |
| 1148 | `ES-A1A2-LUNA-1148` | `a2-viertel` | `study.comparison[2].meaning` | `un tercero` | `un tercio` | **LABOT** |
| 1149 | `ES-A1A2-LUNA-1149` | `a2-viertel` | `study.comparison[4].meaning` | `cuadra / barrio` | `barrio / distrito` | **LABOT** |
| 1150 | `ES-A1A2-LUNA-1150` | `a2-viertel` | `study.tip.leftBlocks[0].text` | `Por cantidad, Viertel entiende una cuarta parte.` | `En cuanto a la cantidad, Viertel significa una cuarta parte.` | **LABOT** |
| 1151 | `ES-A1A2-LUNA-1151` | `a2-vorstellen` | `study.comparison[1].meaning` | `pararse delante / imaginar` | `presentarse / imaginar` | **LABOT** |
| 1152 | `ES-A1A2-LUNA-1152` | `a2-vorstellen` | `study.tip.leftBlocks[0].text` | `Cuando vorstellen está con sich y persona, a menudo significa estar delante de.` | `Cuando vorstellen aparece con sich y una persona, a menudo significa presentarse.` | **LABOT** |
| 1153 | `ES-A1A2-LUNA-1153` | `a2-vorstellen` | `study.important.text` | `Ich stelle mich vor = Estoy delante.` | `Ich stelle mich vor = Me presento.` | **LABOT** |
| 1154 | `ES-A1A2-LUNA-1154` | `a2-vorstellen` | `study.examples[5].lv` | `por favor da un paso adelante.` | `Por favor, preséntate.` | **LABOT** |
| 1155 | `ES-A1A2-LUNA-1155` | `a2-wagen` | `study.examples[2].lv` | `kravas vagons ir smagi noslogots.` | `El vagón de mercancías está muy cargado.` | **LABOT** |
| 1156 | `ES-A1A2-LUNA-1156` | `a2-wagen` | `study.comparison[1].meaning` | `vagons (vilciens)` | `vagón (tren)` | **LABOT** |
| 1157 | `ES-A1A2-LUNA-1157` | `a2-wählen` | `study.examples[5].lv` | `ella tomó el camino equivocado.` | `Ella eligió el camino equivocado.` | **LABOT** |
| 1158 | `ES-A1A2-LUNA-1158` | `a2-wählen` | `study.comparison[3].meaning` | `balsot` | `votar` | **LABOT** |
| 1159 | `ES-A1A2-LUNA-1159` | `a2-während` | `study.comparison[2].meaning` | `kad / ja` | `cuando / si` | **LABOT** |
| 1160 | `ES-A1A2-LUNA-1160` | `a2-wahrscheinlich` | `study.examples[4].lv` | `tas noteikti ir pareizi.` | `Eso definitivamente es correcto.` | **LABOT** |
| 1161 | `ES-A1A2-LUNA-1161` | `a2-wechseln` | `study.examples[2].lv` | `es nomainu kreklu.` | `Me cambio de camisa.` | **LABOT** |
| 1162 | `ES-A1A2-LUNA-1162` | `a2-weit` | `esMain` | `muy • ancho` | `lejos • amplio` | **LABOT** |
| 1163 | `ES-A1A2-LUNA-1163` | `a2-weit` | `study.translation` | `muy • ancho` | `lejos • amplio` | **LABOT** |
| 1164 | `ES-A1A2-LUNA-1164` | `a2-wert` | `study.important.text` | `wert nav tas pats, kas teuer.` | `wert no es lo mismo que teuer.` | **LABOT** |
| 1165 | `ES-A1A2-LUNA-1165` | `a2-wiegen` | `study.examples[0].lv` | `paka sver divus kilogramus.` | `El paquete pesa dos kilogramos.` | **LABOT** |
| 1166 | `ES-A1A2-LUNA-1166` | `a2-wiegen` | `study.examples[1].lv` | `cik tu sver?` | `¿Cuánto pesas?` | **LABOT** |
| 1167 | `ES-A1A2-LUNA-1167` | `a2-wiegen` | `study.examples[2].lv` | `es nosveru miltus.` | `Peso la harina.` | **LABOT** |
| 1168 | `ES-A1A2-LUNA-1168` | `a2-wiegen` | `study.examples[5].lv` | `el auto está estacionado afuera.` | `El auto pesa mucho.` | **LABOT** |
| 1169 | `ES-A1A2-LUNA-1169` | `a2-wiegen` | `study.tip.leftBlocks[1].text` | `El objeto con el que pesar es el Waage.` | `El objeto con el que se pesa es die Waage.` | **LABOT** |
| 1170 | `ES-A1A2-LUNA-1170` | `a2-ziehen` | `study.examples[0].lv` | `por favor cierra/cierra la puerta.` | `Por favor, cierra la puerta.` | **LABOT** |
| 1171 | `ES-A1A2-LUNA-1171` | `a2-ziehen` | `study.examples[4].lv` | `hay un borrador aquí.` | `Hay corriente de aire aquí.` | **LABOT** |
| 1172 | `ES-A1A2-LUNA-1172` | `a2-ziehen` | `study.tip.leftBlocks[1].text` | `Si ve es zieht, a menudo significa "borrador".` | `Si ve es zieht, a menudo significa «hay corriente de aire».` | **LABOT** |
| 1173 | `ES-A1A2-LUNA-1173` | `a2-ziehen` | `study.important.text` | `ziehen nav tikai fiziski “vilkt”.` | `ziehen no significa solamente «tirar» físicamente.` | **LABOT** |
| 1174 | `ES-A1A2-LUNA-1174` | `a2-zunehmen` | `esMain` | `aumentar de peso` | `aumentar • ganar peso` | **LABOT** |
| 1175 | `ES-A1A2-LUNA-1175` | `a2-zunehmen` | `study.translation` | `aumentar de peso` | `aumentar • ganar peso` | **LABOT** |
| 1176 | `ES-A1A2-LUNA-1176` | `a2-zunehmen` | `study.examples[1].lv` | `satiksme pieaug.` | `El tráfico aumenta.` | **LABOT** |
| 1177 | `ES-A1A2-LUNA-1177` | `a2-zunehmen` | `study.examples[2].lv` | `cenas turpina pieaugt.` | `Los precios siguen aumentando.` | **LABOT** |
| 1178 | `ES-A1A2-LUNA-1178` | `a2-zwilling` | `study.translation` | `mellizos` | `gemelo` | **LABOT** |
| 1179 | `ES-A1A2-LUNA-1179` | `a2-sehen` | `study.examples[0].lv` | `es tevi redzu.` | `Te veo.` | **LABOT** |
| 1180 | `ES-A1A2-LUNA-1180` | `a2-schauen` | `study.examples[0].lv` | `Es skatos televizoru.` | `Veo la televisión.` | **LABOT** |
| 1181 | `ES-A1A2-LUNA-1181` | `a2-schauen` | `study.examples[1].lv` | `miramos por la ventana.` | `Miramos por la ventana.` | **LABOT** |
| 1182 | `ES-A1A2-LUNA-1182` | `a2-schauen` | `study.examples[2].lv` | `es skatos televizoru.` | `Veo la televisión.` | **LABOT** |
| 1183 | `ES-A1A2-LUNA-1183` | `a2-hoeren` | `study.examples[2].lv` | `es tevi dzirdu.` | `Te oigo.` | **LABOT** |
| 1184 | `ES-A1A2-LUNA-1184` | `a2-sagen` | `study.examples[0].lv` | `ko tu pateici?` | `¿Qué dijiste?` | **LABOT** |
| 1185 | `ES-A1A2-LUNA-1185` | `a2-sagen` | `study.comparison[1].meaning` | `hablar (idioma, hablar)` | `hablar (un idioma)` | **LABOT** |
| 1186 | `ES-A1A2-LUNA-1186` | `a2-sprechen` | `study.examples[2].lv` | `hablo alemán` | `Hablo alemán.` | **LABOT** |
| 1187 | `ES-A1A2-LUNA-1187` | `a2-gross` | `study.examples[1].lv` | `la casa es grande.` | `La casa es grande.` | **LABOT** |
| 1188 | `ES-A1A2-LUNA-1188` | `a2-gross` | `study.examples[2].lv` | `el es alto.` | `Él es alto.` | **LABOT** |
| 1189 | `ES-A1A2-LUNA-1189` | `a2-gross` | `study.examples[3].lv` | `istaba ir liela.` | `La habitación es grande.` | **LABOT** |
| 1190 | `ES-A1A2-LUNA-1190` | `a2-hoch` | `study.examples[0].lv` | `Kalns ir augsts.` | `La montaña es alta.` | **LABOT** |
| 1191 | `ES-A1A2-LUNA-1191` | `a2-hoch` | `study.examples[1].lv` | `kalns ir augsts.` | `La montaña es alta.` | **LABOT** |
| 1192 | `ES-A1A2-LUNA-1192` | `a2-hoch` | `study.examples[3].lv` | `siena ir augsta.` | `La pared es alta.` | **LABOT** |
| 1193 | `ES-A1A2-LUNA-1193` | `a2-hoch` | `study.examples[4].lv` | `cenas ir augstas.` | `Los precios son altos.` | **LABOT** |
| 1194 | `ES-A1A2-LUNA-1194` | `a2-klein` | `study.examples[0].lv` | `Istaba ir maza.` | `La habitación es pequeña.` | **LABOT** |
| 1195 | `ES-A1A2-LUNA-1195` | `a2-klein` | `study.examples[1].lv` | `istaba ir maza.` | `La habitación es pequeña.` | **LABOT** |
| 1196 | `ES-A1A2-LUNA-1196` | `a2-klein` | `study.examples[2].lv` | `el niño aún es pequeño.` | `El niño aún es pequeño.` | **LABOT** |
| 1197 | `ES-A1A2-LUNA-1197` | `a2-klein` | `study.examples[3].lv` | `man ir maza soma.` | `Tengo un bolso pequeño.` | **LABOT** |
| 1198 | `ES-A1A2-LUNA-1198` | `a2-klein` | `study.examples[4].lv` | `el niño es pequeño.` | `El niño es pequeño.` | **LABOT** |
| 1199 | `ES-A1A2-LUNA-1199` | `a2-leise` | `study.translation` | `tranquilo` | `silencioso` | **LABOT** |
| 1200 | `ES-A1A2-LUNA-1200` | `a2-leise` | `study.examples[0].lv` | `Por favor, cállate.` | `Por favor, guarda silencio.` | **LABOT** |

## APPLY NOTE

- DE lauki ir **STRICT READ-ONLY**.
- Mainīt tikai tabulā norādīto `Field/path`.
- Pirms katras izmaiņas: actual current value === `CURRENT`.
- Ja exact-match nav: **SKIP** tikai konkrēto rindu.
- Pēc ieraksta: actual value === `NEW`.
- Nekāds papildu cleanup, pārfrāzēšana vai blakus lauku labošana nav atļauta.
