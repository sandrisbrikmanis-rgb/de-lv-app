$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bullet = [string][char]0x2022
$arrow = [string][char]0x2192

$targets = @(
  @{ file = "data/b2.js"; varName = "B2_WORDS"; level = "B2" },
  @{ file = "data/c1.js"; varName = "C1_WORDS"; level = "C1" }
)
$sources = @(
  @{ file = "data/b1.js"; varName = "B1_WORDS" },
  @{ file = "data/a2.js"; varName = "A2_WORDS" }
)

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

function Get-StripArticle([string]$De) { return ($De -replace '^(?i)(der|die|das)\s+', '').Trim() }
function Get-Article([string]$De) { if ($De -match '^(?i)(der|die|das)\s+') { return $Matches[1] } return $null }
function Get-NormalizedDe([string]$De) { return (Get-StripArticle $De).ToLowerInvariant() }
function Get-CapitalizeFirst([string]$Value) {
  $text = [string]$Value
  if ([string]::IsNullOrWhiteSpace($text)) { return $text }
  return $text.Substring(0, 1).ToUpperInvariant() + $text.Substring(1)
}
function Get-SplitMeanings([string]$Lv) {
  return @([string]$Lv -split [string]$bullet | ForEach-Object { $_.Trim() } | Where-Object { $_ })
}
function Get-FormatTitle([string]$Lv) {
  return (@(Get-SplitMeanings $Lv | ForEach-Object { Get-CapitalizeFirst $_ }) -join " $bullet ")
}
function Get-UniqueTerms([string[]]$Terms) {
  $seen = @{}
  $result = @()
  foreach ($term in $Terms) {
    $value = [string]$term
    if ([string]::IsNullOrWhiteSpace($value)) { continue }
    $key = $value.ToLowerInvariant()
    if ($seen.ContainsKey($key)) { continue }
    $seen[$key] = $true
    $result += $value
  }
  return $result
}
function Get-Slugify([string]$De) {
  $bare = (Get-StripArticle $De).ToLowerInvariant()
  $bare = $bare.Replace([char]0x00E4, 'ae').Replace([char]0x00F6, 'oe').Replace([char]0x00FC, 'ue').Replace([char]0x00DF, 'ss')
  $bare = ($bare -replace '\s+', '-')
  $bare = ($bare -replace '[^a-z0-9-]+', '')
  $bare = ($bare -replace '-+', '-').Trim('-')
  return $bare
}

function Test-HasBrokenAccents($Value) {
  return ((ConvertTo-Json $Value -Depth 20 -Compress) -match '"Length"')
}

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
  $seen = @{}
  $dupMain = 0
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
  if ($mainBare -notmatch '^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zer|wider|durch|uber|unter|hinter|neben|gegen|um|weg)') { return $false }
  $mainPrefix = $Matches[1].ToLowerInvariant()
  if ($mainPrefix.Length -lt 2) { return $false }
  $others = @($Comparison | ForEach-Object { Get-NormalizedDe ([string]$_.word) } | Where-Object { $_ -and $_ -ne $mainBare })
  if ($others.Count -lt 2) { return $false }
  $prefixMatches = @($others | Where-Object { $_.StartsWith($mainPrefix) }).Count
  return $prefixMatches -ge [math]::Ceiling($others.Count * 0.6)
}

function Test-IsGoodStudy($Study, [string]$MainDe) {
  if ($null -eq $Study) { return $false }
  if (Test-HasBrokenAccents $Study.sectionAccents) { return $false }
  $examples = @($Study.examples)
  if ($examples.Count -eq 0) { return $false }
  foreach ($ex in $examples) {
    if ([string]$ex.de -match '^[\w\s().-]+\.\s*$') { return $false }
  }
  $comparison = @($Study.comparison)
  if ($comparison.Count -eq 0) { return $true }
  foreach ($row in $comparison) {
    if (Test-IsBadComparisonExample ([string]$row.example)) { return $false }
  }
  if (Test-HasDuplicateComparisonWords $comparison $MainDe) { return $false }
  if (Test-IsPrefixGroupedComparison $comparison $MainDe) { return $false }
  return $true
}

function Get-DetectPos([string]$De) {
  $bare = Get-StripArticle $De
  if ($De -match '^(?i)(der|die|das)\s+') { return 'noun' }
  if ($bare -match '^(?i)(trotzdem|deshalb|deswegen|darum|allerdings|jedoch|sondern|waehrend|obwohl|damit|dass|weil|wenn|als|bis|seit|ohne)$') { return 'function' }
  if ($bare -match '(?i)(ig|lich|bar|sam|los|voll|frei|reich|arm)$') { return 'adj' }
  if ($bare -match '(?i)(en|ern|eln)$') { return 'verb' }
  return 'other'
}

function Get-CapitalizeNounPhrase([string]$De) {
  $article = Get-Article $De
  $bare = Get-StripArticle $De
  $noun = Get-CapitalizeFirst $bare
  if ($article) { return "$(Get-CapitalizeFirst $article) $noun" }
  return $noun
}

function Get-ExtractHighlightTerms([string]$Text, [string[]]$Seeds, [int]$Limit = 6) {
  $clean = [string]$Text
  $clean = $clean -replace '[=]', ' '
  $words = @($clean -split '\s+' | ForEach-Object { $_.Trim('.,!?;:()') } | Where-Object { $_.Length -gt 2 })
  $all = @(Get-UniqueTerms (@($Seeds) + $words))
  if ($all.Count -eq 0) { return @() }
  $max = [math]::Min($Limit, $all.Count) - 1
  return $all[0..$max]
}

function New-Examples($Entry) {
  $de = [string]$Entry.de
  $bare = Get-StripArticle $de
  $meanings = @(Get-SplitMeanings ([string]$Entry.lv))
  $m0 = if ($meanings.Count -gt 0) { $meanings[0] } else { [string]$Entry.lv }
  $m1 = if ($meanings.Count -gt 1) { $meanings[1] } else { $m0 }
  $pos = Get-DetectPos $de
  $examples = @()

  if ($pos -eq 'noun') {
    $phrase = Get-CapitalizeNounPhrase $de
    $art = if (Get-Article $de) { Get-Article $de } else { 'das' }
    $examples += @{ de = "$phrase spielt hier eine wichtige Rolle."; lv = "$m0 ir svarigs seit." }
    $examples += @{ de = "Wir sprechen heute uber $art $bare."; lv = "Sodien runajam par $m0." }
    if ($meanings.Count -gt 1) {
      $examples += @{ de = "In diesem Text bedeutet $phrase auch '$bare'."; lv = "Saja teksta $phrase nozime ari $m1." }
    } else {
      $examples += @{ de = "Kennst du $art $bare?"; lv = "Vai tu zini, kas ir $m0?" }
    }
    return @($examples | Select-Object -First 4)
  }

  if ($pos -eq 'verb') {
    $examples += @{ de = "Man muss das heute $bare."; lv = "To sodien vajag: $m0." }
    $examples += @{ de = "Er will das Problem $bare."; lv = "Problema konteksts: $m0." }
    if ($meanings.Count -gt 1) {
      $examples += @{ de = "Im anderen Satz kann man es auch so $bare."; lv = "Cita nozime: $m1." }
    } else {
      $examples += @{ de = "Hier $bare wir oft im Alltag."; lv = "Ikdiena biezi: $m0." }
    }
    return @($examples | Select-Object -First 4)
  }

  if ($pos -eq 'adj') {
    return @(
      @{ de = "Das ist wirklich $bare."; lv = "Tas ir $m0." },
      @{ de = "Ich finde die Losung $bare."; lv = "Risinajums ir $m0." },
      @{ de = "Fur uns ist das $bare."; lv = "Mums tas ir $m0." }
    )
  }

  if ($pos -eq 'function') {
    return @(
      @{ de = "$(Get-CapitalizeFirst $bare), ich bleibe zu Hause."; lv = "$m0 - es palieku majas." },
      @{ de = "Er kommt nicht, $bare er ist krank."; lv = "$m0 - vins ir slims." }
    )
  }

  return @(
    @{ de = "Das Wort '$de' hort man oft."; lv = "Vardu '$de' biezi dzird: $m0." },
    @{ de = "Im Satz passt '$de' gut."; lv = "Teikuma '$de' der labi: $m0." }
  )
}

function New-CleanStudy($Entry, [string]$Level, [string]$ExistingId) {
  $meanings = @(Get-SplitMeanings ([string]$Entry.lv))
  $translation = Get-FormatTitle ([string]$Entry.lv)
  $mainMeaning = if ($meanings.Count -gt 0) { $meanings[0] } else { [string]$Entry.lv }
  $examples = @(New-Examples $Entry)
  $id = if ($ExistingId) { $ExistingId } else { "$($Level.ToLower())-$(Get-Slugify ([string]$Entry.de))" }
  $bare = Get-StripArticle ([string]$Entry.de)
  $meaningJoined = ($meanings -join " $bullet ")

  $exampleAccents = @()
  foreach ($ex in $examples) {
    $exampleAccents += @{
      de = @{ blue = @(Get-ExtractHighlightTerms ([string]$ex.de) @([string]$Entry.de, $bare) 5) }
      lv = @{ purple = @(Get-ExtractHighlightTerms ([string]$ex.lv) $meanings 5) }
    }
  }

  return [ordered]@{
    id = $id
    layout = 'standardStudy'
    translation = $translation
    explanation = "Galvena doma: $($Entry.de) visbiezak nozime $meaningJoined. Konteksts nosaka precizu nozimi teikuma."
    examples = $examples
    tip = @{ leftBlocks = @(@{ text = "Atceries: $($Entry.de) $arrow $translation." }) }
    important = @{
      text = "$($Entry.de) lieto atbilstosi kontekstam. Galvena nozime: $(Get-CapitalizeFirst $mainMeaning)."
      example = "$($examples[0].de) = $($examples[0].lv)"
    }
    sectionAccents = [ordered]@{
      explanation = @{ blue = @(Get-UniqueTerms @([string]$Entry.de, $bare)) }
      examples = $exampleAccents
      tip = @{ blue = @(Get-UniqueTerms @([string]$Entry.de)) }
      important = @{
        blue = @(Get-UniqueTerms @([string]$Entry.de))
        purple = @(Get-UniqueTerms $meanings)
      }
    }
  }
}

function Copy-StudyForEntry($SourceStudy, $Entry, [string]$Level) {
  $cloned = ConvertTo-MutableObject $SourceStudy
  $cloned.id = if ($Entry.study.id) { $Entry.study.id } else { "$($Level.ToLower())-$(Get-Slugify ([string]$Entry.de))" }
  $cloned.layout = 'standardStudy'
  if ($cloned.translation) { $cloned.translation = Get-FormatTitle ([string]$Entry.lv) }
  return $cloned
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
  $depth = 0
  $inString = $false
  $escape = $false
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
  $code = [System.IO.File]::ReadAllText((Join-Path $root $FilePath))
  if ($code -notmatch 'const\s+(\w+)\s*=') { throw "Could not detect array name in $FilePath" }
  $varName = $Matches[1]
  $json = Repair-Json (Extract-TopLevelArray $code)
  $entries = ConvertTo-MutableObject ($json | ConvertFrom-Json)
  return @{ entries = @($entries); varName = $varName }
}

function Save-WordsFile([string]$FilePath, [string]$VarName, $Entries) {
  $json = $Entries | ConvertTo-Json -Depth 30
  $json = $json -replace '\\u003e', '>'
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllText((Join-Path $root $FilePath), "const $VarName = $json;`n`nwindow.$VarName = $VarName;`n", $utf8)
}

Write-Output "Processing targets (skip external source index)..."
$goodIndex = @{}

foreach ($target in $targets) {
  $loaded = Load-WordsFile $target.file
  $fixedFromSource = 0
  $rebuiltClean = 0
  $alreadyGood = 0
  $noStudy = 0

  foreach ($entry in $loaded.entries) {
    if (-not $entry.study) { $noStudy++; continue }
    if (Test-IsGoodStudy $entry.study ([string]$entry.de)) { $alreadyGood++; continue }

    $key = Get-NormalizedDe ([string]$entry.de)
    if ($goodIndex.ContainsKey($key)) {
      $entry.study = Copy-StudyForEntry $goodIndex[$key] $entry $target.level
      $fixedFromSource++
    } else {
      $existingId = if ($entry.study.id) { [string]$entry.study.id } else { $null }
      $entry.study = New-CleanStudy $entry $target.level $existingId
      $rebuiltClean++
    }
  }

  Save-WordsFile $target.file $loaded.varName $loaded.entries
  Write-Output "$($target.file): total=$($loaded.entries.Count) noStudy=$noStudy alreadyGood=$alreadyGood fixedFromSource=$fixedFromSource rebuiltClean=$rebuiltClean"
}
