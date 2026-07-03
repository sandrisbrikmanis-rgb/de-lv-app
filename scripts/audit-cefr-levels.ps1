# Full CEFR level audit — target-driven redistribution plan (read-only).
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

$LEVELS = @("A1", "A2", "B1", "B2", "C1", "C2")
$LEVEL_INDEX = @{ A1 = 0; A2 = 1; B1 = 2; B2 = 3; C1 = 4; C2 = 5 }

$TARGETS = @(
  @{ File = "data/a1.js"; Level = "A1" },
  @{ File = "data/a2.js"; Level = "A2" },
  @{ File = "data/b1.js"; Level = "B1" },
  @{ File = "data/b2.js"; Level = "B2" },
  @{ File = "data/c1.js"; Level = "C1" },
  @{ File = "data/c2.js"; Level = "C2" }
)

$TARGET_COUNTS = @{ A1 = 733; A2 = 1900; B1 = 2900; B2 = 2550; C1 = 580; C2 = 148 }

$A1_CORE = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "ich","du","er","sie","es","wir","ihr","man","sein","haben","werden","können","müssen","sollen","wollen","dürfen",
    "gehen","kommen","machen","nehmen","geben","sehen","sagen","essen","trinken","schlafen","wohnen","arbeiten","lernen",
    "sprechen","hören","lesen","schreiben","groß","klein","gut","schlecht","neu","alt","jung","hier","dort","heute",
    "morgen","gestern","und","oder","aber","der","die","das","ein","eine","apfel","brot","wasser","milch","kaffee","tee",
    "fleisch","fisch","ei","käse","haus","wohnung","zimmer","küche","stadt","land","straße","mann","frau","kind","hund",
    "katze","auto","bus","zug","tag","woche","monat","jahr","kopf","auge","ohr","nase","mund","hand","fuß","rot","blau",
    "grün","gelb","schwarz","weiß","hallo","danke","bitte","ja","nein","name","geld","euro","schule","buch","wetter","sonne",
    "regen","uhr","tisch","stuhl","fenster","tür","alle","alles","allein","alt"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

$B1_SOCIETY = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "parlament","diplomat","ministerium","rechtsanwalt","vertrag","aktie","minister","regierung","partei","wahl",
    "steuer","versicherung","bewerbung","gehalt","kollege","chef","firma","unternehmen","kündigung","meinung",
    "erfahrung","gewohnheit","umgebung","entscheiden","vergleichen","trotzdem","allerdings","botschaft"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

$C1_REGEX = @(
  '(?i)(recht|gesetz|gericht|klage|anwalt|notar|verfassung|gesetzbuch|zivilgesetzbuch|strafrecht|verwaltungsrecht|rechtswidrig)',
  '(?i)(paragraph|urteil|haft|kaution|prozess|einrede|rechtsmittel|vollstreckung|berufung|selbstbestimmungsrecht)',
  '(?i)(minister|parlament|diplomat|abgeordnet|bundestag|koalition|außenminister|regierungssprecher)',
  '(?i)(abkommen|abrüstung|allianz|embargo|sanktion|delegation|akkredit|gipfel|verhandlung|abrüstungs)',
  '(?i)(aktionär|aktiengesellschaft|wirtschaftsprüf|bilanz|fusion|insolvenz|konkurs|wirtschaftsblock)',
  '(?i)(hypothese|theorie|dissertation|monografie|paradigma|methodolog|empirisch|epistem)',
  '(?i)(stellungnahme|belastbarkeit|wahrnehmung|auswirkung|umstritten|ausschlaggebend|beurteilen)',
  '(?i)(affekt|abtreibung|ächten|anfechten|abstumpfen|abart|kindesmisshandlung|kinderschänder)',
  '(?i)(flotten|militär|truppen|waffen|verteidigung|sicherheitsrat|stützpunkt)',
  '(?i)(freikörperkultur|frauenrechtlerin|frachtbrief|frachtgeld|alarmbereitschaft|aktionsprogramm)',
  '(?i)(ungsverhandlung|ungsabkommen|ungsprogramm|stützpunkt|gesetzbuch|rechtlerin|körperkultur|gesetzesvorlage|gerichtsverfahren|gerichtshof)$',
  '(?i)(wissenschaft|forschung|interpretation|konnotation|eigenschaft|bekanntschaft|botschaft)$'
)

$C2_REGEX = @(
  '(?i)^(konterkarieren|veranschaulichen|unmissverständlich|stichhaltigkeit|unvoreingenommenheit|nachvollziehen|gewährleisten|ausschlaggebend)$',
  '(?i)(epistemolog|hermeneut|ontolog|phänomenolog|dialektik|synergie|verallgemeinern|durchkreuzen)',
  '(?i)(präzisieren|konkretisieren|verinnerlichen|vergegenwärtigen|konterkarieren)',
  '(?i)(sorgfaltspflicht|wechselwirkung|schlussfolgerung|stichhaltigkeit|unvoreingenommenheit)$',
  '(?i)(ungsfähigkeit|haftungsausschluss|rechtswidrigkeit|selbstbestimmungsrecht)$'
)

$C1_LV = '(?i)(likums|līgums|sabiedrība|ministrs|parlaments|diplomāt|tiesa|konstitūc|akredit|atbruņoš|jūras bāze|konosaments|pedofil|abort|trauksmes gatavība|atvasara|civillikums|kravas pavadzīme)'
$C2_LV = '(?i)(pamatotība|nepārprotams|mijiedarbība|rūpības pienākums|secinājums|objektivitāte|izjaukt|uzskatāmi)'

function Get-BareDe([string]$De) {
  $d = [string]$De -replace '^(?i)(der|die|das)\s+', '' -replace '^(?i)sich\s+', ''
  return $d.Trim()
}

function Get-CompoundParts([string]$De) {
  $m = [regex]::Matches((Get-BareDe $De), '[A-ZÄÖÜ][a-zäöüß]+')
  if ($m.Count -gt 0) { return $m.Count }
  return 1
}

function Get-CefrScores($Entry) {
  $de = Get-BareDe $Entry.De
  $lower = $de.ToLowerInvariant()
  $len = $lower.Length
  $parts = Get-CompoundParts $Entry.De
  $lv = [string]$Entry.Lv
  $c1 = 0; $c2 = 0; $a2 = 0; $b2 = 0
  $reasons = @()

  if ($A1_CORE.Contains($lower)) { return @{ C1 = 0; C2 = 0; A2 = 100; B2 = 0; Reasons = @("A1_core") } }

  foreach ($rx in $C2_REGEX) {
    if ($Entry.De -match $rx -or $lv -match $rx) { $c2 += 80; $reasons += "C2_pattern" }
  }
  if ($lv -match $C2_LV) { $c2 += 70; $reasons += "C2_lv" }

  foreach ($rx in $C1_REGEX) {
    if ($Entry.De -match $rx -or $lv -match $rx) { $c1 += 60; $reasons += "C1_pattern" }
  }
  if ($lv -match $C1_LV) { $c1 += 50; $reasons += "C1_lv" }

  if ($len -ge 20 -or $parts -ge 4) { $c1 += 40; $reasons += "long_compound" }
  elseif ($len -ge 14 -or $parts -ge 3) { $c1 += 25; $b2 += 20; $reasons += "compound" }
  elseif ($len -ge 10 -or $parts -ge 2) { $b2 += 15; $reasons += "medium_compound" }

  if ($lower -match '^(ver|be|ent|er|zer|ge).{8,}') { $c1 += 15; $b2 += 10; $reasons += "formal_verb" }
  if ($lower -match 'sommer$|weibersommer') { $c1 += 30; $reasons += "idiom" }

  if ($B1_SOCIETY.Contains($lower)) { $b2 += 30; $reasons += "B1_society" }

  if ($len -le 6 -and $parts -eq 1 -and $lower -match '^[a-zäöüß]+$' -and -not $Entry.HasStudy) {
    $a2 += 50; $reasons += "short_basic"
  }
  if ($len -le 8 -and $parts -eq 1 -and $Entry.Level -eq "B1") { $a2 += 20 }

  if ($Entry.Level -eq "C1" -and $c1 -lt 20 -and $a2 -ge 30) { $a2 += 60; $reasons += "C1_too_simple" }
  if ($Entry.Level -eq "C2" -and $c2 -lt 20) { $c1 += 40; $reasons += "C2_downgrade" }

  return @{ C1 = $c1; C2 = $c2; A2 = $a2; B2 = $b2; Reasons = $reasons }
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

$allWords = @()
foreach ($t in $TARGETS) { $allWords += Parse-WordCards $t.File $t.Level }

$scored = $allWords | ForEach-Object {
  $s = Get-CefrScores $_
  [pscustomobject]@{
    De = $_.De; Lv = $_.Lv; Level = $_.Level; File = $_.File
    StartLine = $_.StartLine; EndLine = $_.EndLine; StudyId = $_.StudyId
    C1 = $s.C1; C2 = $s.C2; A2 = $s.A2; B2 = $s.B2; Reasons = ($s.Reasons -join ", ")
  }
}

$currentCounts = @{}
foreach ($l in $LEVELS) { $currentCounts[$l] = @($scored | Where-Object Level -eq $l).Count }

$selected = [System.Collections.Generic.List[object]]::new()
$running = @{}; foreach ($l in $LEVELS) { $running[$l] = $currentCounts[$l] }

function Add-Move($w, [string]$to, [string]$reason) {
  if ($w.Level -eq $to) { return }
  $script:running[$w.Level]--
  $script:running[$to]++
  [void]$script:selected.Add([pscustomobject]@{
    De = $w.De; From = $w.Level; To = $to; File = $w.File
    StartLine = $w.StartLine; EndLine = $w.EndLine; StudyId = $w.StudyId; Reasons = $reason
  })
  $w | Add-Member -NotePropertyName Level -NotePropertyValue $to -Force
}

# Phase 1: Fix C1/C2 words that are too simple (down)
foreach ($w in @($scored | Where-Object { $_.Level -eq "C1" -and $_.A2 -ge 60 })) {
  Add-Move $w "A2" "C1_too_simple"
}
foreach ($w in @($scored | Where-Object { $_.Level -eq "C2" -and $_.C1 -gt $_.C2 -and $_.C1 -ge 40 })) {
  Add-Move $w "C1" "C2_overrated"
}

# Phase 2: Fill C2 from B1/B2 (top scores)
$c2Need = $TARGET_COUNTS.C2 - $running.C2
$c2Candidates = $scored | Where-Object { $_.Level -in @("B1","B2") -and $_.C2 -gt 0 } | Sort-Object C2 -Descending
foreach ($w in $c2Candidates) {
  if ($c2Need -le 0) { break }
  Add-Move $w "C2" "C2_uplift"; $c2Need--
}

# Phase 3: Fill C1 from B1/B2
$c1Need = $TARGET_COUNTS.C1 - $running.C1
$c1Candidates = $scored | Where-Object { $_.Level -in @("B1","B2") -and $_.C1 -gt 0 } | Sort-Object C1, C2 -Descending
foreach ($w in $c1Candidates) {
  if ($c1Need -le 0) { break }
  Add-Move $w "C1" "C1_uplift"; $c1Need--
}

# Phase 4: If C1 still short, take longest compounds from B2 then B1
if ($c1Need -gt 0) {
  $extra = $scored | Where-Object { $_.Level -in @("B2","B1") } | ForEach-Object {
    $bare = Get-BareDe $_.De
    [pscustomobject]@{ W = $_; Len = $bare.Length; Parts = (Get-CompoundParts $_.De) }
  } | Sort-Object Len, Parts -Descending
  foreach ($item in $extra) {
    if ($c1Need -le 0) { break }
    if ($item.Len -lt 12) { break }
    Add-Move $item.W "C1" "C1_length_fill"; $c1Need--
  }
}

# Phase 5: Reduce B1 — move simple words to A2
$b1Need = $running.B1 - $TARGET_COUNTS.B1
$a2Room = $TARGET_COUNTS.A2 - $running.A2
$b1ToA2 = $scored | Where-Object { $_.Level -eq "B1" -and $_.B2 -lt 20 -and $_.C1 -lt 20 } |
  Sort-Object @{ E = "A2"; Descending = $true }, @{ E = { (Get-BareDe $_.De).Length }; Ascending = $true }
foreach ($w in $b1ToA2) {
  if ($b1Need -le 0 -or $a2Room -le 0) { break }
  if ($w.C1 -ge 20) { continue }
  $bare = Get-BareDe $w.De
  if ($bare.Length -gt 10) { continue }
  if ($B1_SOCIETY.Contains($bare.ToLowerInvariant())) { continue }
  Add-Move $w "A2" "B1_simplify"; $b1Need--; $a2Room--
}

# Phase 2b: Fill C2 — formal/rare from B2 (and high-C1 B2 words)
$c2Need = $TARGET_COUNTS.C2 - $running.C2
if ($c2Need -gt 0) {
  $c2Extra = $scored | Where-Object { $_.Level -eq "B2" } | ForEach-Object {
    $bare = Get-BareDe $_.De
    $formal = 0
    if ($_.C2 -gt 0) { $formal += $_.C2 }
    if ($bare.Length -ge 18) { $formal += 30 }
    if ($bare -match '^(ver|be|ent|er|zer|ge).{10,}') { $formal += 25 }
    if ($_.De -match '(?i)(widrig|widrigkeit|haftung|bestimmungsrecht|veranschaul|konterkar|unmissverständ|stichhalt|voreingenommen|wechselwirkung|schlussfolgerung|sorgfaltspflicht)') { $formal += 40 }
    [pscustomobject]@{ W = $_; Score = $formal }
  } | Where-Object { $_.Score -ge 25 } | Sort-Object Score -Descending
  foreach ($item in $c2Extra) {
    if ($c2Need -le 0) { break }
    Add-Move $item.W "C2" "C2_formal_fill"; $c2Need--
  }
}

# Phase 2c: Still short on C2 — longest rare compounds from B2
if ($c2Need -gt 0) {
  $c2Len = $scored | Where-Object { $_.Level -eq "B2" } | ForEach-Object {
    [pscustomobject]@{ W = $_; Len = (Get-BareDe $_.De).Length; Parts = (Get-CompoundParts $_.De) }
  } | Where-Object { $_.Len -ge 16 -or $_.Parts -ge 4 } | Sort-Object Len, Parts -Descending
  foreach ($item in $c2Len) {
    if ($c2Need -le 0) { break }
    Add-Move $item.W "C2" "C2_length_fill"; $c2Need--
  }
}

# Phase 5b: B1 → B2 for compounds / medium-advanced
$b1ToB2Batch = $scored | Where-Object { $_.Level -eq "B1" } | ForEach-Object {
  $bare = Get-BareDe $_.De
  $parts = Get-CompoundParts $_.De
  $score = $_.B2
  if ($parts -ge 2) { $score += 20 }
  if ($bare.Length -ge 11) { $score += 15 }
  if ($B1_SOCIETY.Contains($bare.ToLowerInvariant())) { $score += 25 }
  [pscustomobject]@{ W = $_; Score = $score }
} | Where-Object { $_.Score -ge 25 } | Sort-Object Score -Descending

$b1Over = $running.B1 - $TARGET_COUNTS.B1
$b2Room = [Math]::Max(0, $TARGET_COUNTS.B2 - $running.B2)
foreach ($item in $b1ToB2Batch) {
  if ($b1Over -le 0) { break }
  if ($b2Room -le 0) { break }
  Add-Move $item.W "B2" "B1_compound_batch"; $b1Over--; $b2Room--
}

# Phase 5c: B1 → B2 overflow — any B1 word with 2+ compound parts while B1 over target
if ($running.B1 -gt $TARGET_COUNTS.B1) {
  $moreB1B2 = $scored | Where-Object { $_.Level -eq "B1" -and (Get-CompoundParts $_.De) -ge 2 } |
    Sort-Object @{ E = { (Get-BareDe $_.De).Length }; Descending = $true }
  foreach ($w in $moreB1B2) {
    if ($running.B1 -le $TARGET_COUNTS.B1) { break }
    if ($running.B2 -ge [int]($TARGET_COUNTS.B2 * 1.08)) { break }
    Add-Move $w "B2" "B1_compound_overflow"
  }
}

# Phase 5d: Final C2 top-up from remaining B2
$c2Need = $TARGET_COUNTS.C2 - $running.C2
if ($c2Need -gt 0) {
  $c2Final = $scored | Where-Object { $_.Level -eq "B2" } | ForEach-Object {
    [pscustomobject]@{ W = $_; Len = (Get-BareDe $_.De).Length }
  } | Sort-Object Len -Descending
  foreach ($item in $c2Final) {
    if ($c2Need -le 0) { break }
    Add-Move $item.W "C2" "C2_final_fill"; $c2Need--
  }
}

# Phase 7: Trim B2 to target by moving excess compounds to C1 if room
if ($running.B2 -gt $TARGET_COUNTS.B2 -and $running.C1 -lt $TARGET_COUNTS.C1) {
  $b2Trim = $scored | Where-Object { $_.Level -eq "B2" } | ForEach-Object {
    [pscustomobject]@{ W = $_; Len = (Get-BareDe $_.De).Length }
  } | Sort-Object Len -Descending
  foreach ($item in $b2Trim) {
    if ($running.B2 -le $TARGET_COUNTS.B2 -or $running.C1 -ge $TARGET_COUNTS.C1) { break }
    Add-Move $item.W "C1" "B2_trim_to_C1"
  }
}

$routes = $selected | Group-Object { "$($_.From)->$($_.To)" } | Sort-Object Count -Descending

Write-Output "=== CEFR LEVEL AUDIT (v2) ==="
Write-Output ""
Write-Output "CURRENT COUNTS:"
foreach ($l in $LEVELS) { Write-Output "  $l`: $($currentCounts[$l])" }
Write-Output ""
Write-Output "TARGET COUNTS:"
foreach ($l in $LEVELS) { Write-Output "  $l`: $($TARGET_COUNTS[$l])" }
Write-Output ""
Write-Output "Selected for move: $($selected.Count)"
Write-Output ""
Write-Output "PREDICTED AFTER MOVES:"
foreach ($l in $LEVELS) { Write-Output "  $l`: $($running[$l])" }
Write-Output ""
Write-Output "MOVE ROUTES (selected):"
foreach ($g in $routes) {
  $sample = ($g.Group | Select-Object -First 5 | ForEach-Object { $_.De }) -join ", "
  Write-Output "  $($g.Name): $($g.Count)  e.g. $sample"
}

$plan = [ordered]@{
  generatedAt = (Get-Date).ToString("o")
  currentCounts = $currentCounts
  targetCounts = $TARGET_COUNTS
  totalWords = $allWords.Count
  selectedMoves = $selected.Count
  predictedAfterMoves = $running
  routes = @{}
  moves = @($selected | ForEach-Object {
    [ordered]@{
      de = $_.De; from = $_.From; to = $_.To; file = $_.File
      startLine = $_.StartLine; endLine = $_.EndLine
      studyId = $_.StudyId; reasons = $_.Reasons
    }
  })
}
foreach ($g in $routes) {
  $plan.routes[$g.Name] = @{
    count = $g.Count
    sample = @($g.Group | Select-Object -First 10 | ForEach-Object { $_.De })
  }
}

$outPath = Join-Path $PSScriptRoot "cefr-redistribution-plan.json"
$plan | ConvertTo-Json -Depth 6 | Set-Content $outPath -Encoding UTF8
Write-Output ""
Write-Output "Plan saved: $outPath"
