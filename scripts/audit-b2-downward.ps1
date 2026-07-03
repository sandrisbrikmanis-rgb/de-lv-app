# Phase 4: B2 downward CEFR audit — report A1/A2/B1 candidates only. No data file changes.
param(
  [string]$UpliftPlanPath = ""
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$outPath = Join-Path $PSScriptRoot "cefr-b2-downward-report.json"
if (-not $UpliftPlanPath) { $UpliftPlanPath = Join-Path $PSScriptRoot "cefr-b2-c1-c2-plan.json" }

$LEVELS = @("A1", "A2", "B1", "B2", "C1", "C2")

$A1_CORE = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "ich","du","er","sie","es","wir","ihr","man","sein","haben","werden","können","konnen","müssen","mussen",
    "sollen","wollen","dürfen","duerfen","mögen","moegen","gehen","kommen","machen","nehmen","geben","sehen",
    "sagen","wissen","denken","finden","essen","trinken","schlafen","wohnen","leben","sterben","arbeiten",
    "lernen","sprechen","hören","hoeren","lesen","schreiben","groß","gross","klein","gut","schlecht","neu",
    "alt","jung","schön","schoen","hässlich","haesslich","schnell","langsam","warm","kalt","viel","wenig",
    "mehr","weniger","alle","jeder","einige","viele","hier","dort","da","oben","unten","links","rechts",
    "heute","morgen","gestern","jetzt","immer","oft","nie","manchmal","und","oder","aber","weil","wenn",
    "dass","ob","apfel","brot","wasser","milch","kaffee","tee","fleisch","fisch","ei","käse","kaese",
    "butter","zucker","salz","haus","wohnung","zimmer","küche","kueche","bad","tür","tuer","fenster",
    "tisch","stuhl","bett","stadt","land","straße","strasse","platz","park","bahnhof","flughafen","mann",
    "frau","kind","junge","mädchen","maedchen","baby","familie","mutter","vater","bruder","schwester",
    "hund","katze","vogel","pferd","kuh","schwein","schaf","huhn","auto","bus","zug","fahrrad","flugzeug",
    "schiff","tag","woche","monat","jahr","stunde","minute","sekunde","zeit","uhr","datum","kopf","auge",
    "ohr","nase","mund","hand","fuß","fuss","arm","bein","herz","rot","blau","grün","gruen","gelb",
    "schwarz","weiß","weiss","braun","grau","orange","hallo","tschüss","tschuess","danke","bitte",
    "entschuldigung","ja","nein","name","adresse","telefon","nummer","geld","euro","preis","karte",
    "schule","universität","universitaet","lehrer","schüler","schueler","student","buch","heft","stift",
    "papier","wetter","sonne","regen","schnee","wind","wolke"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

$A2_EVERYDAY = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "reise","urlaub","hotel","reservierung","koffer","pass","visum","gepäck","gepaeck","einkaufen","kaufen",
    "verkaufen","markt","laden","geschäft","geschaeft","supermarkt","kasse","rabatt","restaurant","kellner",
    "speisekarte","bestellung","rechnung","trinkgeld","arzt","krankenhaus","apotheke","medizin","tablette",
    "fieber","husten","erkältung","erkaeltung","schmerz","sport","fitness","schwimmen","laufen","fußball",
    "fussball","tennis","hobby","freizeit","kino","theater","museum","werkstatt","reparatur","mechaniker",
    "elektriker","kleidung","hemd","hose","rock","jacke","schuhe","geburtstag","hochzeit","party","geschenk",
    "einladung","feier","nachbar","nachbarschaft","verein","mitgliedschaft","aal","forelle","lachs",
    "garnele","muschel","allerdings","trotzdem","deshalb","deswegen","obwohl","während","waehrend",
    "erfahrung","meinung","gewohnheit","umgebung","entscheiden","vergleichen","erinnern","datei","deck",
    "defekt","dealer","dachs"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

$B1_WORK_SOCIETY = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "beruf","karriere","bewerbung","vorstellungsgespräch","vorstellungsgespraech","gehalt","lohn","steuer",
    "versicherung","kollege","chef","abteilung","firma","unternehmen","vertrag","kündigung","kuendigung",
    "zeitung","nachrichten","fernsehen","internet","sozial","medien","umwelt","klima","recycling","energie",
    "meinung","diskutieren","argumentieren","vorschlagen","empfehlen","betrug","bilanz","prüfer","pruefer",
    "bote","beute","autonom","absurd"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

$B2_KEEP = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "verantwortung","beeinflussen","nachhaltig","voraussetzung","beeinträchtigen","beeintraechtigen",
    "zusammenhang","auswirkung","wahrnehmung","stellungnahme","belastbarkeit","umstritten","beurteilen",
    "nachvollziehen","gewährleisten","gewaehrleisten","ausschlaggebend","unmissverständlich","unmissverstaendlich"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

$C2_MARKERS = '^(?i)(konterkarieren|veranschaulichen|unmissverständlich|ausschlaggebend|nachvollziehen|gewährleisten|stichhaltigkeit|unvoreingenommenheit|wechselwirkung|sorgfaltspflicht|schlussfolgerung)$'

$C1_PATTERNS = @(
  '(?i)\b(recht|gesetz|gericht|klage|anwalt|notar|verfassung|gesetzbuch|zivilgesetzbuch|strafrecht|verwaltungsrecht)\b',
  '(?i)\b(paragraph|urteil|haft|kaution|prozess|einrede|rechtsmittel|vollstreckung|berufung)\b',
  '(?i)\b(minister|parlament|diplomat|abgeordnet|bundestag|koalition|regierungssprecher|außenminister)\b',
  '(?i)\b(abkommen|abrüstung|allianz|embargo|sanktion|delegation|akkredit|gipfel|verhandlung)\b',
  '(?i)\b(aktionär|aktien|gesellschaft|wirtschaftsprüf|bilanz|fusion|insolvenz|konkurs)\b',
  '(?i)\b(hypothese|theorie|dissertation|monografie|paradigma|epistem|methodolog|empirisch)\b',
  '(?i)\b(stellungnahme|belastbarkeit|wahrnehmung|auswirkung|umstritten|ausschlaggebend)\b',
  '(?i)(ungsverhandlung|ungsabkommen|ungsprogramm|stützpunkt|gesetzbuch|rechtlerin|körperkultur)$',
  '(?i)(wissenschaft|forschung|analyse|synthese|interpretation|konnotation|denotation)$'
)

$C2_PATTERNS = @(
  '(?i)\b(konterkarieren|veranschaulichen|unmissverständlich|stichhaltigkeit|unvoreingenommenheit)\b',
  '(?i)\b(sorgfaltspflicht|wechselwirkung|schlussfolgerung|ausschlaggebend)\b',
  '(?i)\b(epistemolog|hermeneut|ontolog|phänomenolog|dialektik|synergie)\b',
  '(?i)\b(präzisieren|konkretisieren|verallgemeinern|verinnerlichen|vergegenwärtigen)\b',
  '(?i)(ungsfähigkeit|ungsberechtigung|haftungsausschluss|rechtswidrigkeit)$'
)

function Get-BareDe([string]$De) {
  $d = [string]$De -replace '^(?i)(der|die|das)\s+', '' -replace '^(?i)sich\s+', ''
  return $d.Trim()
}

function Get-CompoundParts([string]$De) {
  $m = [regex]::Matches((Get-BareDe $De), '[A-ZÄÖÜ][a-zäöüß]+')
  if ($m.Count -gt 0) { return $m.Count }
  return 1
}

function Get-DownwardScore($Entry) {
  $de = Get-BareDe $Entry.De
  $lower = $de.ToLowerInvariant()
  $len = $lower.Length
  $parts = Get-CompoundParts $Entry.De
  $lv = [string]$Entry.Lv
  $hasStudy = $Entry.HasStudy

  $score = 2
  $reasons = [System.Collections.Generic.List[string]]::new()

  if ($A1_CORE.Contains($lower)) {
    $score = 0; [void]$reasons.Add("A1_core")
  }
  elseif ($A2_EVERYDAY.Contains($lower)) {
    $score = 1; [void]$reasons.Add("A2_everyday")
  }
  elseif ($B1_WORK_SOCIETY.Contains($lower)) {
    $score = 2; [void]$reasons.Add("B1_work")
  }

  if ($len -ge 22 -or $parts -ge 4) {
    $score = [Math]::Max($score, 4); [void]$reasons.Add("long_compound")
  }
  elseif ($len -ge 16 -or $parts -ge 3) {
    $score = [Math]::Max($score, 3); [void]$reasons.Add("compound")
  }
  elseif ($len -le 5 -and -not $hasStudy -and $lower -match '^[a-zäöüß]+$') {
    $score = [Math]::Min($score, 1); [void]$reasons.Add("short_basic")
  }

  foreach ($p in $C2_PATTERNS) {
    if ($Entry.De -match $p -or $lv -match $p) {
      $score = 5; [void]$reasons.Add("C2_pattern"); break
    }
  }
  if ($lower -match $C2_MARKERS) {
    $score = 5; [void]$reasons.Add("C2_marker")
  }

  if ($score -lt 5) {
    foreach ($p in $C1_PATTERNS) {
      if ($Entry.De -match $p -or $lv -match $p) {
        $score = [Math]::Max($score, 4); [void]$reasons.Add("C1_pattern"); break
      }
    }
  }

  if ($lv -match '(?i)\b(likums|līgums|ministrs|parlaments|diplomāt|tiesa|konstitūc|akredit|atbruņoš)\b') {
    $score = [Math]::Max($score, 4); [void]$reasons.Add("C1_lv_domain")
  }
  if ($lv -match '(?i)\b(pamatotība|nepārprotams|mijiedarbība|rūpības pienākums|secinājums|objektivitāte)\b') {
    $score = [Math]::Max($score, 5); [void]$reasons.Add("C2_lv_domain")
  }

  if ($lower -match '^(ver|be|ent|er|zer|ge)' -and $len -ge 12) {
    $score = [Math]::Max($score, 3); [void]$reasons.Add("formal_verb")
  }

  if ($score -ge 4 -and $A1_CORE.Contains($lower)) {
    $score = 0; [void]$reasons.Add("override_A1")
  }
  if ($score -ge 4 -and $A2_EVERYDAY.Contains($lower)) {
    $score = 1; [void]$reasons.Add("override_A2")
  }

  $recommended = $LEVELS[[Math]::Min($score, 5)]
  return @{ Score = $score; Recommended = $recommended; Reasons = $reasons.ToArray() }
}

function Parse-WordCards([string]$FilePath, [string]$Level) {
  $lines = [System.IO.File]::ReadAllLines((Join-Path $root $FilePath), [System.Text.Encoding]::UTF8)
  $cards = @()
  $depth = 0; $start = -1
  $de = ""; $lv = ""; $hasStudy = $false

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $open = ([regex]::Matches($line, '\{')).Count
    $close = ([regex]::Matches($line, '\}')).Count
    if ($depth -eq 0 -and $line -match '^\s*\{\s*$') {
      $start = $i; $de = ""; $lv = ""; $hasStudy = $false; $depth = 1; continue
    }
    if ($depth -le 0) { continue }
    if ($depth -eq 1 -and $line -match '^\s{4}"de":\s*"([^"]*)"') { $de = $Matches[1] }
    if ($depth -eq 1 -and $line -match '^\s{4}"lv":\s*"([^"]*)"') { $lv = $Matches[1] }
    if ($line -match '^\s{4}"study":\s*\{') { $hasStudy = $true }
    $depth += $open - $close
    if ($depth -le 0 -and $start -ge 0 -and $de) {
      $cards += [pscustomobject]@{
        De = $de; Lv = $lv; Level = $Level; File = $FilePath
        StartLine = $start; EndLine = $i; HasStudy = $hasStudy
      }
      $start = -1
    }
  }
  return $cards
}

$upliftKeys = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
if (Test-Path $UpliftPlanPath) {
  $uplift = Get-Content $UpliftPlanPath -Raw -Encoding UTF8 | ConvertFrom-Json
  foreach ($m in @($uplift.moves)) { [void]$upliftKeys.Add($m.de) }
}

$b2Cards = Parse-WordCards "data/b2.js" "B2"
$candidates = [System.Collections.Generic.List[object]]::new()

foreach ($c in $b2Cards) {
  $bare = Get-BareDe $c.De
  if ($B2_KEEP.Contains($bare)) { continue }
  if ($upliftKeys.Contains($c.De)) { continue }

  $s = Get-DownwardScore $c
  if ($s.Score -ge 3) { continue }

  [void]$candidates.Add([ordered]@{
    de = $c.De; lv = $c.Lv; current = "B2"; recommended = $s.Recommended
    score = $s.Score; reasons = ($s.Reasons -join ", ")
    startLine = $c.StartLine; endLine = $c.EndLine
  })
}

$byLevel = @{ A1 = @(); A2 = @(); B1 = @() }
foreach ($x in $candidates) {
  if ($byLevel.ContainsKey($x.recommended)) {
    $byLevel[$x.recommended] += $x
  }
}

$report = [ordered]@{
  generatedAt = (Get-Date).ToString("o")
  phase = "B2-downward-report-only"
  b2Total = $b2Cards.Count
  downwardCandidates = $candidates.Count
  byLevel = @{
    A1 = $byLevel.A1.Count
    A2 = $byLevel.A2.Count
    B1 = $byLevel.B1.Count
  }
  candidates = @($candidates)
}

$report | ConvertTo-Json -Depth 6 | Set-Content $outPath -Encoding UTF8

Write-Output "=== B2 DOWNWARD CEFR AUDIT (report only) ==="
Write-Output ""
Write-Output "B2 total: $($b2Cards.Count)"
Write-Output "Downward candidates: $($candidates.Count) (A1=$($byLevel.A1.Count), A2=$($byLevel.A2.Count), B1=$($byLevel.B1.Count))"
Write-Output ""
if ($byLevel.A1.Count -gt 0) {
  Write-Output "A1 candidates ($($byLevel.A1.Count)):"
  $byLevel.A1 | ForEach-Object { Write-Output "  $($_.de) -> $($_.recommended) [$($_.reasons)]" }
  Write-Output ""
}
if ($byLevel.A2.Count -gt 0) {
  Write-Output "A2 candidates (first 30 of $($byLevel.A2.Count)):"
  $byLevel.A2 | Select-Object -First 30 | ForEach-Object { Write-Output "  $($_.de) -> $($_.recommended) [$($_.reasons)]" }
  Write-Output ""
}
if ($byLevel.B1.Count -gt 0) {
  Write-Output "B1 candidates (first 40 of $($byLevel.B1.Count)):"
  $byLevel.B1 | Select-Object -First 40 | ForEach-Object { Write-Output "  $($_.de) -> $($_.recommended) [$($_.reasons)]" }
}
Write-Output ""
Write-Output "Report saved: $outPath"
