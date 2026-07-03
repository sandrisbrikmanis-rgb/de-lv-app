# Phase 4: B2-only CEFR audit — select C1/C2 uplift candidates. No ConvertTo-Json on data files.
param(
  [int]$TargetC1 = 440,
  [int]$TargetC2 = 140,
  [int]$MinC1Score = 35,
  [int]$MinC2Score = 40
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$outPath = Join-Path $PSScriptRoot "cefr-b2-c1-c2-plan.json"

$B2_KEEP = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@(
    "verantwortung","beeinflussen","nachhaltig","voraussetzung","beeinträchtigen","beeintraechtigen",
    "zusammenhang","auswirkung","beeinträchtigung","beeintraechtigung","nachhaltigkeit","verantwortlich",
    "beeinflussung","voraussetzen","beeinträchtigt","beeintraechtigt","beeinflusst","beeinflussen",
    "verantwortlichkeit","nachhaltiger","nachhaltige","nachhaltiges","beeinflussbar","beeinflussend",
    "voraussetzungen","zusammenhängend","zusammenhaengend","auswirkungen","verantwortungsvoll",
    "beeinflussend","beeinflussbar","beeinflusst","beeinträchtigend","beeintraechtigend",
    "wahrnehmung","stellungnahme","belastbarkeit","umstritten","beurteilen","nachvollziehen",
    "gewährleisten","gewaehrleisten","ausschlaggebend","unmissverständlich","unmissverstaendlich"
  ),
  [System.StringComparer]::OrdinalIgnoreCase
)

$C1_REGEX = @(
  '(?i)(\brecht\b|gesetz|gericht|klage|anwalt|notar|verfassung|gesetzbuch|zivilgesetzbuch|strafrecht|verwaltungsrecht|rechtswidrig)',
  '(?i)(paragraph|urteil|haft|kaution|prozess|einrede|rechtsmittel|vollstreckung|berufung|selbstbestimmungsrecht)',
  '(?i)(minister|parlament|diplomat|abgeordnet|bundestag|koalition|außenminister|regierungssprecher)',
  '(?i)(abkommen|abrüstung|allianz|embargo|sanktion|delegation|akkredit|gipfel|verhandlung|abrüstungs)',
  '(?i)(aktionär|aktiengesellschaft|wirtschaftsprüf|bilanz|fusion|insolvenz|konkurs|wirtschaftsblock)',
  '(?i)(hypothese|theorie|dissertation|monografie|paradigma|methodolog|empirisch|epistem)',
  '(?i)(stellungnahme|belastbarkeit|wahrnehmung|auswirkung|umstritten|ausschlaggebend|beurteilen)',
  '(?i)(affekt|abtreibung|ächten|anfechten|abstumpfen|abart)',
  '(?i)(flotten|militär|truppen|waffen|verteidigung|sicherheitsrat|stützpunkt)',
  '(?i)(freikörperkultur|frauenrechtlerin|frachtbrief|frachtgeld|alarmbereitschaft|aktionsprogramm)',
  '(?i)(ungsverhandlung|ungsabkommen|ungsprogramm|stützpunkt|gesetzbuch|rechtlerin|körperkultur|gesetzesvorlage|gerichtsverfahren|gerichtshof)$',
  '(?i)(wissenschaft|forschung|interpretation|konnotation)$'
)

$C2_REGEX = @(
  '(?i)^(konterkarieren|veranschaulichen|unmissverständlich|stichhaltigkeit|unvoreingenommenheit|nachvollziehen|gewährleisten|ausschlaggebend)$',
  '(?i)(epistemolog|hermeneut|ontolog|phänomenolog|dialektik|synergie|verallgemeinern|durchkreuzen)',
  '(?i)(präzisieren|konkretisieren|verinnerlichen|vergegenwärtigen|konterkarieren)',
  '(?i)(sorgfaltspflicht|wechselwirkung|schlussfolgerung|stichhaltigkeit|unvoreingenommenheit)$',
  '(?i)(ungsfähigkeit|haftungsausschluss|rechtswidrigkeit|selbstbestimmungsrecht)$'
)

$C1_LV = '(?i)(likums|līgums|ministrs|parlaments|diplomāt|tiesa|konstitūc|akredit|atbruņoš|jūras bāze|konosaments|civillikums|kravas pavadzīme|trauksmes gatavība|atvasara)'
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

function Get-B2CefrScores($Entry) {
  $de = Get-BareDe $Entry.De
  $lower = $de.ToLowerInvariant()
  $len = $lower.Length
  $parts = Get-CompoundParts $Entry.De
  $lv = [string]$Entry.Lv
  $c1 = 0; $c2 = 0
  $reasons = [System.Collections.Generic.List[string]]::new()

  if ($B2_KEEP.Contains($lower)) {
    return @{ C1 = 0; C2 = 0; Reasons = @("B2_keep") }
  }
  foreach ($keepFrag in $B2_KEEP) {
    if ($lower.Contains($keepFrag) -and $keepFrag.Length -ge 8) {
      return @{ C1 = 0; C2 = 0; Reasons = @("B2_keep_fragment") }
    }
  }

  foreach ($rx in $C2_REGEX) {
    if ($Entry.De -match $rx -or $lv -match $rx) { $c2 += 80; [void]$reasons.Add("C2_pattern") }
  }
  if ($lv -match $C2_LV) { $c2 += 70; [void]$reasons.Add("C2_lv") }

  foreach ($rx in $C1_REGEX) {
    if ($Entry.De -match $rx -or $lv -match $rx) { $c1 += 60; [void]$reasons.Add("C1_pattern") }
  }
  if ($lv -match $C1_LV) { $c1 += 50; [void]$reasons.Add("C1_lv") }

  if ($len -ge 20 -or $parts -ge 4) {
    $c1 += 40; $c2 += 25; [void]$reasons.Add("long_compound")
  }
  elseif ($len -ge 16 -or $parts -ge 3) {
    $c1 += 30; $c2 += 15; [void]$reasons.Add("compound")
  }
  elseif ($len -ge 12 -or $parts -ge 2) {
    $c1 += 15; [void]$reasons.Add("medium_compound")
  }

  if ($lower -match '^(ver|be|ent|er|zer|ge).{10,}') {
    $c1 += 20; $c2 += 15; [void]$reasons.Add("formal_verb")
  }
  elseif ($lower -match '^(ver|be|ent|er|zer|ge).{6,}') {
    $c1 += 10; [void]$reasons.Add("prefix_verb")
  }

  if ($lower -match '(ung|keit|schaft|ierung|ismus)$' -and $len -ge 12 -and -not $B2_KEEP.Contains($lower)) {
    if ($Entry.De -match '(?i)(verantwort|zusammenhang|wissenschaft|verhandlung|verfassung|regierung|minister|diplomat|recht|gesetz|prozess|urteil|haftung)') {
      $c1 += 20; [void]$reasons.Add("abstract_formal")
    }
  }

  if ($len -ge 18 -and $c2 -lt 40) { $c2 += 20; [void]$reasons.Add("length_c2_boost") }
  if ($len -ge 22 -and $c2 -lt 50) { $c2 += 15; [void]$reasons.Add("very_long") }

  return @{ C1 = $c1; C2 = $c2; Reasons = $reasons.ToArray() }
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

function Get-ExistingDeSet([string]$FilePath) {
  $set = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
  foreach ($c in (Parse-WordCards $FilePath "X")) { [void]$set.Add($c.De) }
  return $set
}

$b2Cards = Parse-WordCards "data/b2.js" "B2"
$c1Existing = Get-ExistingDeSet "data/c1.js"
$c2Existing = Get-ExistingDeSet "data/c2.js"

$scored = foreach ($c in $b2Cards) {
  if ($c1Existing.Contains($c.De) -or $c2Existing.Contains($c.De)) { continue }
  $s = Get-B2CefrScores $c
  if ($s.Reasons -contains "B2_keep" -or $s.Reasons -contains "B2_keep_fragment") { continue }
  $bare = Get-BareDe $c.De
  [pscustomobject]@{
    De = $c.De; Lv = $c.Lv; File = $c.File
    StartLine = $c.StartLine; EndLine = $c.EndLine; StudyId = $c.StudyId
    C1 = $s.C1; C2 = $s.C2; Len = $bare.Length
    Parts = (Get-CompoundParts $c.De)
    Reasons = ($s.Reasons -join ", ")
  }
}

$c2Candidates = @($scored | Where-Object { $_.C2 -ge $MinC2Score } | Sort-Object C2, Len, Parts -Descending)
$c2Selected = @($c2Candidates | Select-Object -First $TargetC2)
$c2Keys = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
foreach ($x in $c2Selected) { [void]$c2Keys.Add("$($x.File)|$($x.StartLine)") }

$c1Pool = @($scored | Where-Object { -not $c2Keys.Contains("$($_.File)|$($_.StartLine)") })
$c1Candidates = @($c1Pool | Where-Object { $_.C1 -ge $MinC1Score } | Sort-Object C1, Len, Parts -Descending)
$c1Selected = @($c1Candidates | Select-Object -First $TargetC1)

if ($c2Selected.Count -lt $TargetC2) {
  $need = $TargetC2 - $c2Selected.Count
  $extra = @($c1Pool | Where-Object {
    -not $c2Keys.Contains("$($_.File)|$($_.StartLine)") -and $_.Len -ge 14
  } | Sort-Object @{ E = { $_.C2 * 2 + $_.Len + $_.C1 }; Descending = $true } | Select-Object -First $need)
  $c2Selected += $extra
  foreach ($x in $extra) { [void]$c2Keys.Add("$($x.File)|$($x.StartLine)") }
}

if ($c1Selected.Count -lt $TargetC1) {
  $need = $TargetC1 - $c1Selected.Count
  $c1Keys = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
  foreach ($x in $c1Selected) { [void]$c1Keys.Add("$($x.File)|$($x.StartLine)") }
  $extra = @($c1Pool | Where-Object {
    -not $c2Keys.Contains("$($_.File)|$($_.StartLine)") -and
    -not $c1Keys.Contains("$($_.File)|$($_.StartLine)") -and
    ($_.C1 -ge 20 -or $_.Len -ge 14)
  } | Sort-Object C1, Len -Descending | Select-Object -First $need)
  $c1Selected += $extra
}

$moves = [System.Collections.Generic.List[object]]::new()
$seenLines = [System.Collections.Generic.HashSet[string]]::new()
foreach ($x in $c2Selected) {
  $key = "$($x.File)|$($x.StartLine)"
  if ($seenLines.Contains($key)) { continue }
  [void]$seenLines.Add($key)
  [void]$moves.Add([ordered]@{
    de = $x.De; lv = $x.Lv; from = "B2"; to = "C2"; file = "data/b2.js"
    startLine = $x.StartLine; endLine = $x.EndLine; studyId = $x.StudyId; reasons = $x.Reasons
  })
}
foreach ($x in $c1Selected) {
  $key = "$($x.File)|$($x.StartLine)"
  if ($seenLines.Contains($key)) { continue }
  [void]$seenLines.Add($key)
  [void]$moves.Add([ordered]@{
    de = $x.De; lv = $x.Lv; from = "B2"; to = "C1"; file = "data/b2.js"
    startLine = $x.StartLine; endLine = $x.EndLine; studyId = $x.StudyId; reasons = $x.Reasons
  })
}

$c1Moves = @($moves | Where-Object { $_.to -eq "C1" }).Count
$c2Moves = @($moves | Where-Object { $_.to -eq "C2" }).Count

$b2Count = $b2Cards.Count
$c1Count = $c1Existing.Count
$c2Count = $c2Existing.Count

$plan = [ordered]@{
  generatedAt = (Get-Date).ToString("o")
  phase = "B2-C1-C2-only"
  targets = @{ C1 = $TargetC1; C2 = $TargetC2 }
  thresholds = @{ MinC1 = $MinC1Score; MinC2 = $MinC2Score }
  currentCounts = @{ B2 = $b2Count; C1 = $c1Count; C2 = $c2Count }
  selected = @{ C1 = $c1Moves; C2 = $c2Moves; Total = $moves.Count }
  predictedAfter = @{
    B2 = $b2Count - $moves.Count
    C1 = $c1Count + $c1Moves
    C2 = $c2Count + $c2Moves
  }
  moves = @($moves)
}

$plan | ConvertTo-Json -Depth 8 | Set-Content $outPath -Encoding UTF8

Write-Output "=== B2 -> C1/C2 CEFR AUDIT (Phase 4) ==="
Write-Output ""
Write-Output "B2 current: $b2Count | C1: $c1Count | C2: $c2Count"
Write-Output "Selected: C1=$c1Moves, C2=$c2Moves, Total=$($moves.Count)"
Write-Output "Predicted: B2=$($plan.predictedAfter.B2), C1=$($plan.predictedAfter.C1), C2=$($plan.predictedAfter.C2)"
Write-Output ""
if ($c2Moves -gt 0) {
  Write-Output "C2 samples (first 15):"
  $c2Selected | Select-Object -First 15 | ForEach-Object { Write-Output "  $($_.De)  [C2=$($_.C2) $($_.Reasons)]" }
}
Write-Output ""
if ($c1Moves -gt 0) {
  Write-Output "C1 samples (first 20):"
  $c1Selected | Select-Object -First 20 | ForEach-Object { Write-Output "  $($_.De)  [C1=$($_.C1) $($_.Reasons)]" }
}
Write-Output ""
Write-Output "Plan saved: $outPath"
