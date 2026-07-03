# WARNING: Do not use ConvertTo-Json roundtrip on study-rich files (a1/a2/b1).
# It corrupts sectionAccents into {"Length": N} objects. Use scripts/build-data.ps1 instead.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bullet = [string][char]0x2022

$wordFiles = @(
  @{ file = "data/a1.js"; varName = "A1_WORDS"; level = "A1"; allowComparison = $true },
  @{ file = "data/a2.js"; varName = "A2_WORDS"; level = "A2"; allowComparison = $true },
  @{ file = "data/b1.js"; varName = "B1_WORDS"; level = "B1"; allowComparison = $true },
  @{ file = "data/b2.js"; varName = "B2_WORDS"; level = "B2"; allowComparison = $false },
  @{ file = "data/c1.js"; varName = "C1_WORDS"; level = "C1"; allowComparison = $false },
  @{ file = "data/c2.js"; varName = "C2_WORDS"; level = "C2"; allowComparison = $false }
)

$PrepPattern = '^(an|ab|auf|aus|bei|mit|von|zu|in|um|nach|vor|uber|unter|hinter|neben|gegen|durch|ohne|seit|bis|wahrend|trotz|wegen|statt|anstatt|innerhalb|ausserhalb|gegenuber|entlang|oberhalb|unterhalb|infolge|aufgrund|mithilfe|laut|entgegen|samt|minus|pro|via|per|ab|anhand|angesichts)$'
$ConjPattern = '^(aber|sondern|deshalb|deswegen|darum|jedoch|allerdings|trotzdem|weil|dass|wenn|als|obwohl|damit|sodass|bevor|nachdem|seitdem|falls|ob|denn|also|sowohl|weder|noch|entweder|sowie|indem|zwar|hingegen|dafur|dagegen|dennoch|ausserdem|zudem|folglich|somit|inzwischen|mittlerweile|eigentlich|ubrigens|bereits|kaum|fast|sogar|etwa|ungefahr|nur|auch|schon|erst)$'
$VerbPrefixPattern = '^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zer|wider|durch|uber|unter|hinter|neben|gegen|um|weg)'

function ConvertTo-MutableObject($InputObject) {
  if ($null -eq $InputObject) { return $null }
  if ($InputObject -is [System.Collections.IDictionary]) {
    $hash = [ordered]@{}
    foreach ($key in $InputObject.Keys) { $hash[$key] = ConvertTo-MutableObject $InputObject[$key] }
    return $hash
  }
  if ($InputObject -is [array] -or ($InputObject -is [System.Collections.IEnumerable] -and -not ($InputObject -is [string]))) {
    return @($InputObject | ForEach-Object { ConvertTo-MutableObject $_ })
  }
  if ($InputObject -is [psobject]) {
    $hash = [ordered]@{}
    foreach ($prop in $InputObject.PSObject.Properties) { $hash[$prop.Name] = ConvertTo-MutableObject $prop.Value }
    return $hash
  }
  return $InputObject
}

function Repair-Json([string]$Json) {
  $prev = $null
  while ($prev -ne $Json) {
    $prev = $Json
    $Json = $Json -replace ',(\s*[\]}])', '$1'
  }
  return $Json
}

function Extract-TopLevelArray([string]$Code) {
  $start = $Code.IndexOf('[')
  if ($start -lt 0) { throw "No JSON array found" }
  $depth = 0; $inString = $false; $escape = $false
  for ($i = $start; $i -lt $Code.Length; $i++) {
    $ch = $Code[$i]
    if ($inString) {
      if ($escape) { $escape = $false; continue }
      if ($ch -eq '\') { $escape = $true; continue }
      if ($ch -eq '"') { $inString = $false }
      continue
    }
    if ($ch -eq '"') { $inString = $true; continue }
    if ($ch -eq '[') { $depth++ }
    elseif ($ch -eq ']') {
      $depth--
      if ($depth -eq 0) { return $Code.Substring($start, $i - $start + 1) }
    }
  }
  throw "Unterminated JSON array"
}

function Load-WordsFile([string]$FilePath) {
  $full = Join-Path $root $FilePath
  $code = [System.IO.File]::ReadAllText($full)
  if ($code -notmatch 'const\s+(\w+)\s*=') { throw "No array in $FilePath" }
  $varName = $Matches[1]
  $json = Repair-Json (Extract-TopLevelArray $code)
  return @{ entries = @(ConvertTo-MutableObject ($json | ConvertFrom-Json)); varName = $varName }
}

function Save-WordsFile([string]$FilePath, [string]$VarName, $Entries) {
  $json = $Entries | ConvertTo-Json -Depth 40
  $json = $json -replace '\\u003e', '>'
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllText((Join-Path $root $FilePath), "const $VarName = $json;`n`nwindow.$VarName = $VarName;`n", $utf8)
}

function Replace-ListSemicolons([string]$Value) {
  if ([string]::IsNullOrWhiteSpace($Value) -or $Value -notmatch ';') { return $Value }
  return ($Value -replace ';\s*', " $bullet ").Trim() -replace "\s+$([regex]::Escape($bullet))\s+", " $bullet "
}

function Get-CapitalizeFirst([string]$Value) {
  $text = [string]$Value
  if ([string]::IsNullOrWhiteSpace($text)) { return $text }
  return $text.Substring(0, 1).ToUpperInvariant() + $text.Substring(1)
}

function Get-SplitMeanings([string]$Lv) {
  return @([string]$Lv -split [regex]::Escape($bullet) | ForEach-Object { $_.Trim() } | Where-Object { $_ })
}

function Get-FormatTitle([string]$Lv) {
  return (@(Get-SplitMeanings $Lv | ForEach-Object { Get-CapitalizeFirst $_ }) -join " $bullet ")
}

function Get-StripArticle([string]$De) { return ($De -replace '^(?i)(der|die|das)\s+', '').Trim() }
function Get-NormalizedDe([string]$De) {
  $bare = (Get-StripArticle $De).ToLowerInvariant()
  $bare = $bare -replace [char]0x00E4, 'ae' -replace [char]0x00F6, 'oe' -replace [char]0x00FC, 'ue' -replace [char]0x00DF, 'ss'
  return $bare
}
function Get-Slugify([string]$De) {
  $bare = Get-NormalizedDe $De
  $bare = ($bare -replace '\s+', '-') -replace '[^a-z0-9-]+', '' -replace '-+', '-'
  return $bare.Trim('-')
}

function Get-UniqueTerms([string[]]$Terms) {
  $seen = @{}; $result = @()
  foreach ($term in $Terms) {
    $value = [string]$term
    if ([string]::IsNullOrWhiteSpace($value)) { continue }
    $key = $value.ToLowerInvariant()
    if ($seen.ContainsKey($key)) { continue }
    $seen[$key] = $true; $result += $value
  }
  return $result
}

function Get-ExtractTerms([string]$Text, [int]$Limit = 6) {
  return @(Get-UniqueTerms @([string]$Text -split '\s+' | ForEach-Object { $_.Trim('.,!?;:()""''„"') } | Where-Object { $_.Length -gt 1 }))[0..([Math]::Max(0, [Math]::Min($Limit, (@([string]$Text -split '\s+' | Where-Object { $_.Length -gt 1 }).Count)) - 1))]
}

function Test-HasStructuralAmbiguity($Entry) { return ([string]$Entry.lv).Contains($bullet) }
function Test-IsPrepOrConjunction($Entry) {
  $de = [string]$Entry.de
  if ($de -match '\s' -or $de -match '^(?i)(der|die|das)\s+') { return $false }
  $bare = Get-NormalizedDe $de
  return ($bare -match $PrepPattern) -or ($bare -match $ConjPattern)
}
function Test-NeedsComparison($Entry) { return (Test-HasStructuralAmbiguity $Entry) -or (Test-IsPrepOrConjunction $Entry) }

function Test-IsBadComparisonExample([string]$Example) {
  $text = [string]$Example
  if ([string]::IsNullOrWhiteSpace($text)) { return $true }
  $dePart = if ($text -match '=') { ($text -split '=', 2)[0].Trim() } else { $text.Trim() }
  if ([string]::IsNullOrWhiteSpace($dePart)) { return $true }
  if ($dePart.Contains('.') -and ($dePart -split '\s+').Count -ge 2) { return $false }
  if ($text -match '^[\w\s().-]+\s*=\s*' -and ($dePart -split '\s+').Count -le 3) { return $true }
  return $false
}

function Test-HasDuplicateComparisonWords($Comparison, [string]$MainDe) {
  $seen = @{}; $dupMain = 0
  foreach ($row in @($Comparison)) {
    $word = Get-NormalizedDe ([string]$row.word)
    if ($word -eq (Get-NormalizedDe $MainDe)) { $dupMain++ }
    if ($seen.ContainsKey($word)) { return $true }
    $seen[$word] = $true
    if ($dupMain -gt 1) { return $true }
  }
  return $false
}

function Test-IsPrefixGroupedComparison($Comparison, [string]$MainDe) {
  $mainBare = Get-NormalizedDe $MainDe
  if ($mainBare -notmatch $VerbPrefixPattern) { return $false }
  $mainPrefix = $Matches[1].ToLowerInvariant()
  if ($mainPrefix.Length -lt 2) { return $false }
  $others = @($Comparison | ForEach-Object { Get-NormalizedDe ([string]$_.word) } | Where-Object { $_ -and $_ -ne $mainBare })
  if ($others.Count -lt 2) { return $false }
  $prefixMatches = @($others | Where-Object { $_.StartsWith($mainPrefix) }).Count
  return $prefixMatches -ge [math]::Ceiling($others.Count * 0.6)
}

function Test-IsGoodComparison($Comparison, [string]$MainDe) {
  if (-not $Comparison -or $Comparison.Count -eq 0) { return $false }
  foreach ($row in $Comparison) {
    if (Test-IsBadComparisonExample ([string]$row.example)) { return $false }
  }
  if (Test-HasDuplicateComparisonWords $Comparison $MainDe) { return $false }
  if (Test-IsPrefixGroupedComparison $Comparison $MainDe) { return $false }
  return $true
}

function Parse-ExamplePair([string]$Example) {
  $text = [string]$Example
  if ($text -match '^(?<de>.+?)\s*[=–-]\s*(?<lv>.+)$') {
    return @{ de = $Matches.de.Trim(); lv = $Matches.lv.Trim() }
  }
  return @{ de = $text.Trim(); lv = '' }
}

function New-ComparisonAccents($Rows) {
  $accents = @()
  foreach ($row in @($Rows)) {
    $wordTerms = Get-UniqueTerms @([string]$row.word, (Get-StripArticle ([string]$row.word)))
    $meaningTerms = Get-UniqueTerms @([string]$row.meaning, @(Get-SplitMeanings ([string]$row.meaning)))
    $parts = Parse-ExamplePair ([string]$row.example)
    $exampleAccent = [ordered]@{}
    if ($parts.de) { $exampleAccent.green = @(Get-ExtractTerms $parts.de 6) }
    if ($parts.lv) { $exampleAccent.purple = @(Get-ExtractTerms $parts.lv 6) }
    $accents += [ordered]@{
      word = [ordered]@{ green = $wordTerms }
      meaning = [ordered]@{ purple = $meaningTerms }
      example = $exampleAccent
    }
  }
  return $accents
}

function Remove-ComparisonFromStudy($Study) {
  if ($null -eq $Study) { return }
  if ($Study -is [System.Collections.IDictionary]) {
    [void]$Study.Remove('comparison')
    if ($Study.sectionAccents -is [System.Collections.IDictionary]) {
      [void]$Study.sectionAccents.Remove('comparison')
    }
  }
}

function Fix-AccentMapToGreenPurple($AccentMap, [string[]]$DeKeys, [string[]]$LvKeys) {
  if ($null -eq $AccentMap) { return $AccentMap }
  if ($AccentMap -is [string]) { return $AccentMap }
  if ($AccentMap -isnot [System.Collections.IDictionary]) { return $AccentMap }

  $deTerms = @(); $lvTerms = @()
  foreach ($key in $AccentMap.Keys) {
    $vals = @($AccentMap[$key])
    if ($DeKeys -contains $key) { $deTerms += $vals }
    elseif ($LvKeys -contains $key) { $lvTerms += $vals }
    else {
      if ($key -in @('de','word','example','describes','wrong','right')) { $deTerms += $vals }
      else { $lvTerms += $vals }
    }
  }
  $result = [ordered]@{}
  $deUnique = Get-UniqueTerms $deTerms
  $lvUnique = Get-UniqueTerms $lvTerms
  if ($deUnique.Count) { $result.green = $deUnique }
  if ($lvUnique.Count) { $result.purple = $lvUnique }
  return $result
}

function Fix-ComparisonStudyAccents($SectionAccents) {
  if (-not $SectionAccents) { return $SectionAccents }
  $sa = ConvertTo-MutableObject $SectionAccents

  foreach ($section in @('comparisonTable','comparisonCards','examples')) {
    if (-not $sa[$section]) { continue }
    $fixed = @()
    foreach ($row in @($sa[$section])) {
      if ($row -isnot [System.Collections.IDictionary]) { $fixed += $row; continue }
      $next = [ordered]@{}
      foreach ($key in $row.Keys) {
        if ($key -in @('de','example')) {
          $next[$key] = Fix-AccentMapToGreenPurple $row[$key] @('de','example') @('lv','translation','meaning')
        } elseif ($key -in @('lv','meaning','translation','describes')) {
          $next[$key] = Fix-AccentMapToGreenPurple $row[$key] @() @('lv','meaning','translation','describes')
        } else {
          $next[$key] = $row[$key]
        }
      }
      $fixed += $next
    }
    $sa[$section] = $fixed
  }

  if ($sa.tip -is [System.Collections.IDictionary] -and $sa.tip.rightItems) {
    $sa.tip.rightItems = @($sa.tip.rightItems | ForEach-Object {
      $item = ConvertTo-MutableObject $_
      if ($item.de) { $item.de = Fix-AccentMapToGreenPurple $item.de @('de') @() }
      if ($item.lv) { $item.lv = Fix-AccentMapToGreenPurple $item.lv @() @('lv') }
      $item
    })
  }

  return $sa
}

function Get-StudyId([string]$Level, [string]$De, [System.Collections.Generic.HashSet[string]]$UsedIds) {
  $base = "$($Level.ToLowerInvariant())-$(Get-Slugify $De)"
  if (-not $base) { $base = "$($Level.ToLowerInvariant())-card" }
  $id = $base; $suffix = 2
  while ($UsedIds.Contains($id)) { $id = "$base-$suffix"; $suffix++ }
  [void]$UsedIds.Add($id)
  return $id
}

$globalUsedIds = [System.Collections.Generic.HashSet[string]]::new()
$stats = [ordered]@{}

# Pass 1: collect existing ids
foreach ($wf in $wordFiles) {
  $loaded = Load-WordsFile $wf.file
  foreach ($entry in $loaded.entries) {
    if ($entry.study -and $entry.study.id) { [void]$globalUsedIds.Add([string]$entry.study.id) }
  }
}

# Pass 2: polish word files
foreach ($wf in $wordFiles) {
  $loaded = Load-WordsFile $wf.file
  $s = @{
    semicolons = 0; comparisonsRemoved = 0; accentsFixed = 0
    idsAdded = 0; layoutFixed = 0; studies = 0
  }

  foreach ($entry in $loaded.entries) {
    if ($entry.lv -and ([string]$entry.lv).Contains(';')) {
      $entry.lv = Get-FormatTitle (Replace-ListSemicolons ([string]$entry.lv))
      $s.semicolons++
    }

    if (-not $entry.study) { continue }
    $s.studies++
    $study = $entry.study

    if (-not $study.id) {
      $study.id = Get-StudyId $wf.level ([string]$entry.de) $globalUsedIds
      $s.idsAdded++
    } elseif (-not $globalUsedIds.Contains([string]$study.id)) {
      [void]$globalUsedIds.Add([string]$study.id)
    }

    if (-not $study.layout -or $study.layout -ne 'standardStudy') {
      $study.layout = 'standardStudy'
      $s.layoutFixed++
    }

    if ($study.translation) {
      $fixed = Get-FormatTitle (Replace-ListSemicolons ([string]$study.translation))
      if ($fixed -ne $study.translation) { $study.translation = $fixed; $s.semicolons++ }
    }

    if (-not $wf.allowComparison) {
      if ($study.comparison) { Remove-ComparisonFromStudy $study; $s.comparisonsRemoved++ }
    } else {
      if ($study.comparison -and -not (Test-NeedsComparison $entry)) {
        Remove-ComparisonFromStudy $study
        $s.comparisonsRemoved++
      } elseif ($study.comparison -and -not (Test-IsGoodComparison $study.comparison ([string]$entry.de))) {
        Remove-ComparisonFromStudy $study
        $s.comparisonsRemoved++
      } elseif ($study.comparison) {
        foreach ($row in $study.comparison) {
          if ($row.meaning) { $row.meaning = Replace-ListSemicolons ([string]$row.meaning) }
          if ($row.example) { $row.example = Replace-ListSemicolons ([string]$row.example) }
        }
        if (-not $study.sectionAccents) { $study.sectionAccents = [ordered]@{} }
        $study.sectionAccents.comparison = New-ComparisonAccents $study.comparison
        $s.accentsFixed++
      }
    }
  }

  Save-WordsFile $wf.file $loaded.varName $loaded.entries
  $stats[$wf.file] = $s
  Write-Output "$($wf.file): studies=$($s.studies) semicolons=$($s.semicolons) comparisonsRemoved=$($s.comparisonsRemoved) accentsFixed=$($s.accentsFixed) idsAdded=$($s.idsAdded)"
}

# comparisonStudy.js
$compPath = Join-Path $root "data/comparisonStudy.js"
$compCode = [System.IO.File]::ReadAllText($compPath)
if ($compCode -notmatch 'const\s+(\w+)\s*=') { throw "comparisonStudy.js: no array" }
$compVar = $Matches[1]
$compJson = Repair-Json (Extract-TopLevelArray $compCode)
$compCards = @(ConvertTo-MutableObject ($compJson | ConvertFrom-Json))
$compStats = @{ cards = 0; accents = 0; semicolons = 0; ids = 0 }

foreach ($card in $compCards) {
  $compStats.cards++
  if ($card.lv -and ([string]$card.lv).Contains(';')) {
    $card.lv = Get-FormatTitle (Replace-ListSemicolons ([string]$card.lv))
    $compStats.semicolons++
  }
  if ($card.de -and ([string]$card.de).Contains(';')) {
    $card.de = Get-FormatTitle (Replace-ListSemicolons ([string]$card.de))
    $compStats.semicolons++
  }
  if (-not $card.study) { continue }
  $study = $card.study
  if (-not $study.layout) { $study.layout = 'comparisonStudy' }
  if (-not $study.id -and $card.id) { $study.id = $card.id }
  if (-not $card.id -and $study.id) { $card.id = $study.id }
  if ($study.title -and ([string]$study.title).Contains(';')) {
    $study.title = Get-FormatTitle (Replace-ListSemicolons ([string]$study.title))
    $compStats.semicolons++
  }
  if ($study.subtitle -and ([string]$study.subtitle).Contains(';')) {
    $study.subtitle = Get-FormatTitle (Replace-ListSemicolons ([string]$study.subtitle))
    $compStats.semicolons++
  }
  if ($study.sectionAccents) {
    $study.sectionAccents = Fix-ComparisonStudyAccents $study.sectionAccents
    $compStats.accents++
  }
}

$compBody = $compCards | ConvertTo-Json -Depth 40
$compBody = $compBody -replace '\\u003e', '>'
$utf8 = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($compPath, "const $compVar = $compBody;`n`nwindow.$compVar = $compVar;`n", $utf8)
Write-Output "data/comparisonStudy.js: cards=$($compStats.cards) accents=$($compStats.accents) semicolons=$($compStats.semicolons)"

Write-Output ""
Write-Output "=== BUILD! Polish complete ==="
