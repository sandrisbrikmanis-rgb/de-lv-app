# Safe line-level noun article / plural migration. Does NOT use ConvertTo-Json on data files.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

$targets = @(
  "data/a1.js", "data/a2.js", "data/b1.js", "data/b2.js", "data/c1.js", "data/c2.js", "data/comparisonStudy.js"
)

$lookupPath = Join-Path $PSScriptRoot "german-noun-lookup.json"
if (-not (Test-Path $lookupPath)) {
  & (Join-Path $PSScriptRoot "build-noun-lookup.ps1")
}

$parsedLookup = Get-Content $lookupPath -Raw -Encoding UTF8 | ConvertFrom-Json
$script:lookup = @{}
foreach ($row in @($parsedLookup)) {
  $key = [string]$row.noun
  if ($key) { $script:lookup[$key.ToLowerInvariant()] = $row }
}

$manual = @{}
$manualPath = Join-Path $PSScriptRoot "german-noun-manual.json"
if (Test-Path $manualPath) {
  foreach ($item in @((Get-Content $manualPath -Raw -Encoding UTF8) | ConvertFrom-Json)) {
    $manual[$([string]$item.noun).ToLowerInvariant()] = $item
  }
}

function Get-CapitalizeNoun([string]$Noun) {
  if ([string]::IsNullOrWhiteSpace($Noun)) { return $Noun }
  $n = $Noun.Trim()
  return $n.Substring(0, 1).ToUpperInvariant() + $n.Substring(1)
}

function Get-LookupForNoun([string]$Noun) {
  $key = $Noun.ToLowerInvariant()
  if ($script:lookup.ContainsKey($key)) { return $script:lookup[$key] }
  return $null
}

function Format-DePluralLine([string]$PluralWord, [string]$Indent) {
  $pl = Get-CapitalizeNoun $PluralWord
  return "$Indent`"de_plural`": `"die $pl`","
}

function Format-DeArticleLine([string]$Article, [string]$Indent) {
  return "$Indent`"de_article`": `"$Article`","
}

$dePattern = '^(?<indent>\s{4})"de":\s*"(?<art>der|die|das)\s+(?<noun>[^"]+)"\s*,?\s*$'
$deNounOnlyPattern = '^(?<indent>\s{4})"de":\s*"(?<noun>[^"]+)"\s*,?\s*$'
$articlePattern = '^(?<indent>\s{4})"de_article":\s*"(?<art>der|die|das)"\s*,?\s*$'
$pluralPattern = '^(?<indent>\s{4})"de_plural":\s*"(?<pl>[^"]+)"\s*,?\s*$'

$grand = @{
  nouns = 0
  articleFixed = 0
  pluralAdded = 0
  deSplit = 0
  capitalization = 0
  skipped = 0
  restored = 0
}

foreach ($rel in $targets) {
  $filePath = Join-Path $root $rel
  if (-not (Test-Path $filePath)) { continue }

  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.AddRange([string[]][System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8))

  $stats = @{
    nouns = 0; articleFixed = 0; pluralAdded = 0; deSplit = 0; capitalization = 0; skipped = 0; restored = 0
  }

  $i = 0
  while ($i -lt $lines.Count) {
    $line = $lines[$i]
    $matchedSplit = $line -match $dePattern
    $matchedNounOnly = $false

    if (-not $matchedSplit) {
      if ($line -notmatch $deNounOnlyPattern) { $i++; continue }
      $matchedNounOnly = $true
      $nounRaw = $Matches['noun'].Trim()
      if ($nounRaw -match '^(?i)(der|die|das)\b') { $i++; continue }
      $indent = $Matches['indent']
      $key = $nounRaw.ToLowerInvariant()
      $hit = Get-LookupForNoun $nounRaw
      if (-not $hit) { $hit = Get-LookupForNoun (Get-CapitalizeNoun $nounRaw) }
      if (-not $hit -and $manual.ContainsKey($key)) {
        $manualHit = $manual[$key]
        $hit = [pscustomobject]@{
          noun = [string]$manualHit.noun
          article = [string]$manualHit.article
          plural = [string]$manualHit.plural
        }
      }
      if (-not $hit) { $stats.skipped++; $i++; continue }
      $hasArticle = $false
      for ($j = $i + 1; $j -lt [Math]::Min($i + 6, $lines.Count); $j++) {
        if ($lines[$j] -match $articlePattern) { $hasArticle = $true; break }
        if ($lines[$j] -match '^\s{4}"(lv|level|id|study)"') { break }
      }
      if ($hasArticle) { $i++; continue }
      $artInDe = [string]$hit.article
    } else {
      $artInDe = $Matches['art']
      $nounRaw = $Matches['noun'].Trim()
      $indent = $Matches['indent']
      $hit = Get-LookupForNoun $nounRaw
      if (-not $hit) { $stats.skipped++; $i++; continue }
    }

    $stats.nouns++
    $key = $nounRaw.ToLowerInvariant()
    $article = $artInDe
    if ($manual.ContainsKey($key)) {
      $article = [string]$manual[$key].article
    }
    $noun = Get-CapitalizeNoun ([string]$hit.noun)
    if ($noun -ne $nounRaw) { $stats.capitalization++ }

    if ($matchedNounOnly) { $stats.restored++ }
    elseif ($artInDe -ne $article) { $stats.articleFixed++ }

    $pluralWord = [string]$hit.plural
    if ([string]::IsNullOrWhiteSpace($pluralWord)) { $pluralWord = $noun + "e" }

    $newDeLine = "$indent`"de`": `"$noun`","
    if ($line -ne $newDeLine) { $stats.deSplit++ }
    $lines[$i] = $newDeLine

    $j = $i + 1
    $hasArticle = $false
    $hasPlural = $false

    while ($j -lt $lines.Count -and $j -le $i + 6) {
      if ($lines[$j] -match $articlePattern) {
        $hasArticle = $true
        $oldArt = $Matches['art']
        if ($oldArt -ne $article) { $stats.articleFixed++ }
        $lines[$j] = (Format-DeArticleLine $article $indent)
      } elseif ($lines[$j] -match $pluralPattern) {
        $hasPlural = $true
        $lines[$j] = (Format-DePluralLine $pluralWord $indent)
      } elseif ($lines[$j] -match '^\s{4}"(lv|level|id|study)"') {
        break
      }
      $j++
    }

    if (-not $hasArticle) {
      $lines.Insert($i + 1, (Format-DeArticleLine $article $indent))
      $stats.pluralAdded++
      $j++
    }
    if (-not $hasPlural) {
      $insertAt = $i + 1
      if (-not $hasArticle) { $insertAt++ } else {
        $k = $i + 1
        while ($k -lt $lines.Count -and $lines[$k] -match $articlePattern) { $insertAt = $k + 1; $k++ }
      }
      $lines.Insert($insertAt, (Format-DePluralLine $pluralWord $indent))
      $stats.pluralAdded++
    }

    $i++
  }

  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllLines($filePath, $lines.ToArray(), $utf8)

  Write-Output "$rel : nouns=$($stats.nouns) restored=$($stats.restored) articleFixed=$($stats.articleFixed) deSplit=$($stats.deSplit) pluralFields=$($stats.pluralAdded) capitalization=$($stats.capitalization) skipped=$($stats.skipped)"
  $grand.nouns += $stats.nouns
  $grand.restored += $stats.restored
  $grand.articleFixed += $stats.articleFixed
  $grand.pluralAdded += $stats.pluralAdded
  $grand.deSplit += $stats.deSplit
  $grand.capitalization += $stats.capitalization
  $grand.skipped += $stats.skipped
}

Write-Output ""
Write-Output "=== Noun article audit complete ==="
Write-Output "Total nouns processed: $($grand.nouns)"
Write-Output "Missing de_article restored: $($grand.restored)"
Write-Output "Wrong articles fixed: $($grand.articleFixed)"
Write-Output "de field split (article removed): $($grand.deSplit)"
Write-Output "de_article/de_plural fields added/updated: $($grand.pluralAdded)"
Write-Output "Capitalization fixes: $($grand.capitalization)"
Write-Output "Skipped (no lookup): $($grand.skipped)"
Write-Output ""
Write-Output "################################"
Write-Output "#         BUILD!               #"
Write-Output "################################"
