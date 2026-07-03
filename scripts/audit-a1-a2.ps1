# Phase 1 CEFR audit — A1 <-> A2 only. Line-level parse, no ConvertTo-Json on data files.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

# Goethe-Institut A1 Grundwortschatz + Duden A1 survival vocabulary (expanded whitelist)
$A1_CORE = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "ich","du","er","sie","es","wir","ihr","euch","man","sich","ein","etwas","bis","um","vor","mal","erst","natürlich","einfach",
    "sein","haben","werden","können","müssen","sollen","wollen","dürfen","mögen","lassen","halten","heißen","kennen","bringen",
    "gehen","kommen","machen","nehmen","geben","sehen","sagen","wissen","denken","finden","essen","trinken","schlafen","wohnen",
    "leben","sterben","arbeiten","lernen","sprechen","hören","lesen","schreiben","kaufen","verkaufen","öffnen","schließen","kochen",
    "waschen","helfen","fragen","antworten","fahren","laufen","schwimmen","telefonieren","frühstücken","probieren","passen","kosten",
    "anfangen","ankommen","anrufen","anschauen","anziehen","aufstehen","aufmachen","aufpassen","aufräumen","beginnen","bekommen",
    "benutzen","besuchen","bedeuten","verstehen","verlieren","versuchen","gefallen","geboren","verheiratet","mitnehmen","zumachen",
    "groß","klein","gut","schlecht","neu","alt","jung","schön","hässlich","schnell","langsam","freundlich","langweilig",
    "warm","kalt","viel","wenig","alle","alles","allein","zusammen","hier","dort","heute","morgen","gestern","übermorgen",
    "und","oder","aber","weil","wenn","dass","vielleicht","zu viel",
    "apfel","brot","wasser","milch","kaffee","tee","fleisch","fisch","ei","käse","eis","butterbrot","erdbeere","schokolade",
    "abendessen","mittagessen","getränk","joghurt","jogurt",
    "haus","wohnung","zimmer","küche","bad","badezimmer","schwimmbad","tür","fenster","tisch","stuhl","bett","kühlschrank",
    "stadt","land","straße","platz","park","bahnhof","haltestelle","straßenbahn","hauptstadt",
    "mann","frau","kind","junge","mädchen","baby","familie","mutter","vater","bruder","schwester","großeltern","großmutter",
    "familienname","besucher","gesicht","geschichte","gesundheit",
    "hund","katze","vogel","auto","bus","zug","fahrrad","kraftwagen","liter",
    "tag","woche","monat","jahr","stunde","minute","zeit","uhr","augenblick","nachmittag","nachmittags",
    "montag","dienstag","mittwoch","donnerstag","freitag","samstag","sonntag",
    "kopf","auge","ohr","nase","mund","hand","fuß","arm","bein","augenbraue","augenfarbe",
    "rot","blau","grün","gelb","schwarz","weiß","braun","grau",
    "hallo","danke","bitte","ja","nein","name","geld","euro","schule","kindergarten","buch","beispiel","radiergummi",
    "wetter","sonne","regen","regenschirm","fernsehen",
    "an","in","auf","aus","mit","von","zu","nach","bei","für","über","unter","aufs",
    "mein","dein","wer","was","wo","wann","wie","warum","hungrig","durstig","müde","krank","teuer","billig","gern",
    "immer","oft","manchmal","nie","links","rechts","oben","unten","geradeaus","aufwärts",
    "alter","banane","orange","tomate","kartoffel","reis","nudel","suppe","salat",
    "freund","freundin","eltern","nachname","vorname","glücklich","traurig","lang","kurz","hoch","niedrig","spät","früh","bald",
    "antwort","antenne","angenehm","armbanduhr","handtasche","hemd","hose",
    "eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun","zehn","hundert","tausend",
    "zweihundert","dreihundert","vierhundert","fünfhundert","sechshundert","siebenhundert","neunhundert",
    "vierzehnte","fünfzehnte","sechzehnte","siebzehnte","neunzehnte","zwanzigste","vierzigste","fünfzigste","sechzigste","siebzigste","neunzigste",
    "weihnachten","spazieren gehen","rad fahren","auf dem boden","auf dem bahnhof"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

$A2_MARKERS = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "reise","urlaub","hotel","reservierung","koffer","pass","gepäck","bezahlen","vergessen","einladung","ändern","restaurant",
    "kellner","speisekarte","bestellung","rechnung","trinkgeld","arzt","krankenhaus","apotheke","medizin","tablette","fieber",
    "husten","erkältung","schmerz","sport","fitness","schwimmen","laufen","fußball","tennis","hobby","freizeit","kino","theater",
    "museum","geburtstag","hochzeit","party","geschenk","feier","nachbar","nachbarschaft","verein","demnächst","pünktlich","nützlich",
    "aktiv","allgemein","angebot","aktuell","allerdings","trotzdem","deshalb","deswegen","obwohl","während","erfahrung","meinung",
    "gewohnheit","umgebung","entscheiden","vergleichen","erinnern","beschreiben","erklären","vorbereiten","flughafen","visum","zoll",
    "reparatur","werkstatt","mechaniker","hemd","hose","rock","jacke","schuhe","kleidung","alkohol","vielleicht","wahrscheinlich",
    "aufhören","ausgehen","einkaufen","interessieren","kümmern","freuen","auffallen","auffassen","auffordern",
    "aufgeben","aufgehen","aufhalten","aufmerksam","bedanken","ausziehen","ab und zu"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

# A2 everyday -ung nouns that must NOT be flagged as B1
$A2_UNG_WHITELIST = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "einladung","erkältung","bestellung","bedeutung","bedienung","begrüßung","beschreibung","freundschaft"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

$B1_MARKERS = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "beruf","karriere","bewerbung","vorstellungsgespräch","gehalt","lohn","steuer","versicherung","kollege","chef","abteilung",
    "firma","unternehmen","vertrag","kündigung","zeitung","nachrichten","fernsehen","internet","medien","umwelt","klima",
    "recycling","energie","diskutieren","argumentieren","vorschlagen","empfehlen","parlament","diplomat","ministerium",
    "rechtsanwalt","regierung","partei","wahl","botschaft","delegation","abkommen","verhandlung","gesellschaft","wirtschaft",
    "bilanz","fusion","insolvenz","verantwortung","verantwortlichkeit","zusammenhang","zusammenarbeit","beeinflussen",
    "unterstützen","organisieren","entwickeln","verbessern"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

$B1_REGEX = @(
  '(?i)\b(beruf|karriere|bewerbung|gehalt|steuer|versicherung|kollege|chef|firma|unternehmen|vertrag|kündigung)\b',
  '(?i)\b(parlament|diplomat|minister|regierung|partei|wahl|botschaft)\b',
  '(?i)\b(umwelt|klima|recycling|energie|gesellschaft|wirtschaft)\b',
  '(?i)\b(diskutieren|argumentieren|vorschlagen|empfehlen|beeinflussen|organisieren|entwickeln|verbessern)\b',
  '(?i)\b(verantwortung|zusammenhang|zusammenarbeit|verhandlung|abkommen)\b'
)

function Test-IsGermanVerb([string]$Bare) {
  if ($Bare -match '\s') { return $false }
  return $Bare -match '(?i)(en|ern|eln)$'
}

function Test-IsPhrase([string]$De) {
  if ($De -match '^(?i)(sich\s|jemanden\s|jemandem\s)') { return $true }
  if ($De -match '(?i)(ab und zu|na gut|auf jeden fall|auf der stelle|auf die|auf dem|spazieren gehen|rad fahren|zu viel)') { return $true }
  $words = @(($De -split '\s+') | Where-Object { $_ -ne '' })
  if ($words.Count -ge 3) { return $true }
  return $false
}

function Get-BareDe([string]$De) {
  $d = [string]$De -replace '^(?i)(der|die|das)\s+', '' -replace '^(?i)sich\s+', ''
  return $d.Trim()
}

function Get-CompoundParts([string]$De) {
  $m = [regex]::Matches((Get-BareDe $De), '[A-ZÄÖÜ][a-zäöüß]+')
  if ($m.Count -gt 0) { return $m.Count }
  return 1
}

function Get-A1A2Score($Entry) {
  $de = Get-BareDe $Entry.De
  $lower = $de.ToLowerInvariant()
  $len = $lower.Length
  $parts = Get-CompoundParts $Entry.De
  $lv = [string]$Entry.Lv
  $polysemy = $lv.Contains([char]0x2022) -or $lv.Contains('•')
  $isPhrase = Test-IsPhrase $Entry.De
  $score = 0
  $reasons = [System.Collections.Generic.List[string]]::new()

  if ($A1_CORE.Contains($lower)) {
    return @{ Score = 0; Reasons = @("A1_core") }
  }

  if ($A2_MARKERS.Contains($lower)) {
    $score = 1; [void]$reasons.Add("A2_marker")
  }

  if ($isPhrase) {
    if ($score -lt 1) { $score = 1 }; [void]$reasons.Add("phrase_idiom")
  }

  # Separable/prefix verbs only when clearly verb form (not nouns like Antenne, Antwort)
  if ((Test-IsGermanVerb $de) -and $lower -match '^(ver|be|ent|er|zer|auf|ab|aus|ein|mit|nach|vor|zu|zurück|weg|hin|her)' -and $len -ge 8) {
    if ($score -lt 1) { $score = 1 }; [void]$reasons.Add("advanced_verb")
  }

  # Health / travel / leisure domain (Goethe A2 topics)
  if ($lower -match '(?i)(apotheke|arzt|krankenhaus|flughafen|hotel|restaurant|museum|theater|kino|sport|party|pass|koffer|rechnung|reise|urlaub)') {
    if ($score -lt 1) { $score = 1 }; [void]$reasons.Add("A2_domain")
  }

  if ($len -ge 16 -or $parts -ge 4) {
    if ($score -lt 1) { $score = 1 }; [void]$reasons.Add("long_compound")
  }

  if ($Entry.HasStudy -and $polysemy -and $isPhrase) {
    if ($score -lt 1) { $score = 1 }; [void]$reasons.Add("polysemy_phrase")
  }

  if ($lower -match 'lich$' -and $len -ge 10 -and -not $A1_CORE.Contains($lower)) {
    if ($score -lt 1) { $score = 1 }; [void]$reasons.Add("adverb_lich")
  }

  if ($B1_MARKERS.Contains($lower)) {
    if ($score -lt 2) { $score = 2 }; [void]$reasons.Add("B1_marker")
  }
  foreach ($rx in $B1_REGEX) {
    if ($Entry.De -match $rx -or $lv -match $rx) {
      if ($score -lt 2) { $score = 2 }; [void]$reasons.Add("B1_pattern"); break
    }
  }
  if ($score -lt 2 -and $lower -match '(ung|keit|schaft|ierung|ismus)$' -and $len -ge 10 -and -not $A2_UNG_WHITELIST.Contains($lower)) {
    if ($score -lt 2) { $score = 2 }; [void]$reasons.Add("abstract_B1")
  }

  return @{ Score = $score; Reasons = $reasons.ToArray() }
}

function Parse-WordCards([string]$FilePath, [string]$Level) {
  $lines = [System.IO.File]::ReadAllLines((Join-Path $root $FilePath), [System.Text.Encoding]::UTF8)
  $cards = @()
  $depth = 0; $start = -1
  $de = ""; $lv = ""; $hasStudy = $false; $studyId = ""

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $open = ([regex]::Matches($line, '\{')).Count
    $close = ([regex]::Matches($line, '\}')).Count
    if ($depth -eq 0 -and $line -match '^\s*\{\s*$') {
      $start = $i; $de = ""; $lv = ""; $hasStudy = $false; $studyId = ""
      $depth = 1; continue
    }
    if ($depth -le 0) { continue }
    if ($depth -eq 1 -and $line -match '^\s{4}"de":\s*"([^"]*)"') { $de = $Matches[1] }
    if ($depth -eq 1 -and $line -match '^\s{4}"lv":\s*"([^"]*)"') { $lv = $Matches[1] }
    if ($line -match '^\s{6}"id":\s*"([^"]*)"') { $studyId = $Matches[1] }
    if ($line -match '^\s{4}"study":\s*\{') { $hasStudy = $true }
    $depth += $open - $close
    if ($depth -le 0 -and $start -ge 0 -and $de) {
      $cards += [pscustomobject]@{
        De = $de; Lv = $lv; Level = $Level; File = $FilePath
        StartLine = $start; EndLine = $i; HasStudy = $hasStudy; StudyId = $studyId
      }
      $start = -1
    }
  }
  return $cards
}

$a1Cards = Parse-WordCards "data/a1.js" "A1"
$a2Cards = Parse-WordCards "data/a2.js" "A2"

$a1ToA2 = [System.Collections.Generic.List[object]]::new()
$a2ToB1 = [System.Collections.Generic.List[object]]::new()

foreach ($c in $a1Cards) {
  $s = Get-A1A2Score $c
  if ($s.Score -ge 1) {
    [void]$a1ToA2.Add([ordered]@{
      de = $c.De; lv = $c.Lv; from = "A1"; to = "A2"; file = $c.File
      startLine = $c.StartLine; endLine = $c.EndLine; studyId = $c.StudyId; reasons = ($s.Reasons -join ", ")
    })
  }
}

foreach ($c in $a2Cards) {
  $s = Get-A1A2Score $c
  if ($s.Score -ge 2) {
    [void]$a2ToB1.Add([ordered]@{
      de = $c.De; lv = $c.Lv; from = "A2"; to = "B1"; file = $c.File
      startLine = $c.StartLine; endLine = $c.EndLine; studyId = $c.StudyId; reasons = ($s.Reasons -join ", ")
    })
  }
}

$plan = [ordered]@{
  generatedAt = (Get-Date).ToString("o")
  phase = "A1-A2-only"
  currentCounts = @{ A1 = $a1Cards.Count; A2 = $a2Cards.Count }
  a1ToA2 = [ordered]@{
    count = $a1ToA2.Count
    predictedA1 = $a1Cards.Count - $a1ToA2.Count
    predictedA2 = $a2Cards.Count + $a1ToA2.Count
    moves = @($a1ToA2)
  }
  a2ToB1Report = [ordered]@{
    count = $a2ToB1.Count
    note = "Listed only - do NOT move in this phase"
    candidates = @($a2ToB1)
  }
  moves = @($a1ToA2 | ForEach-Object {
    [ordered]@{
      de = $_.de; from = $_.from; to = $_.to; file = $_.file
      startLine = $_.startLine; endLine = $_.endLine; studyId = $_.studyId; reasons = $_.reasons
    }
  })
}

$outPath = Join-Path $PSScriptRoot "cefr-a1-a2-plan.json"
$plan | ConvertTo-Json -Depth 8 | Set-Content $outPath -Encoding UTF8

Write-Output "=== A1/A2 CEFR AUDIT (Phase 1) ==="
Write-Output ""
Write-Output "A1 current: $($a1Cards.Count) words"
Write-Output "A2 current: $($a2Cards.Count) words"
Write-Output ""
Write-Output "A1 -> A2 moves: $($a1ToA2.Count) words"
Write-Output "  After: A1=$($a1Cards.Count - $a1ToA2.Count), A2=$($a2Cards.Count + $a1ToA2.Count)"
Write-Output ""
Write-Output "A2 -> B1 report (list only): $($a2ToB1.Count) words"
Write-Output ""
if ($a1ToA2.Count -gt 0) {
  Write-Output "A1->A2 samples (first 25):"
  $a1ToA2 | Select-Object -First 25 | ForEach-Object { Write-Output "  $($_.de)  [$($_.reasons)]" }
}
Write-Output ""
if ($a2ToB1.Count -gt 0) {
  Write-Output "A2->B1 samples (first 20):"
  $a2ToB1 | Select-Object -First 20 | ForEach-Object { Write-Output "  $($_.de)  [$($_.reasons)]" }
}
Write-Output ""
Write-Output "Plan saved: $outPath"
