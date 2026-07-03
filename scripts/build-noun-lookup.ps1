# Build compact noun lookup (article + plural) for project nouns from Wiktionary CSV.
$ErrorActionPreference = "Stop"
$csvPath = Join-Path $PSScriptRoot "german-nouns-lookup.csv"
$extractedPath = Join-Path $PSScriptRoot "extracted-nouns.json"
$outPath = Join-Path $PSScriptRoot "german-noun-lookup.json"
$manualPath = Join-Path $PSScriptRoot "german-noun-manual.json"

function Get-GenusToArticle([string]$Genus) {
  switch ($Genus.ToLowerInvariant()) {
    "m" { return "der" }
    "f" { return "die" }
    "n" { return "das" }
    default { return $null }
  }
}

function Get-CapitalizeNoun([string]$Noun) {
  if ([string]::IsNullOrWhiteSpace($Noun)) { return $Noun }
  $n = $Noun.Trim()
  return $n.Substring(0, 1).ToUpperInvariant() + $n.Substring(1)
}

function Get-SuffixArticle([string]$Noun) {
  $n = $Noun.Trim()
  if ($n -match '(?i)(chen|lein)$') { return "das" }
  if ($n -match '(?i)(ung|heit|keit|schaft|tion|sion|tät|ik|ei|anz|enz|ität|ur)$') { return "die" }
  if ($n -match '(?i)(tum|ment|um|nis)$') { return "das" }
  if ($n -match '(?i)test$') { return "der" }
  if ($n -match '(?i)ling$') { return "der" }
  return $null
}

function Get-SuffixPlural([string]$Noun, [string]$Article) {
  $n = $Noun.Trim()
  $lower = $n.ToLowerInvariant()
  # invariant plurals
  if ($lower -match '(?i)(chen|lein)$') { return $n }
  if ($lower -match '(?i)er$' -and $Article -eq "der") { return $n }
  if ($lower -match '(?i)e$') { return $n }
  # -ung, -heit, -keit, -tion → -en
  if ($lower -match '(?i)(ung|heit|keit|tion|sion|tät|ik|ei|anz|enz|ität)$') {
    return $n + "en"
  }
  # -um → -en
  if ($lower -match '(?i)um$') { return $n.Substring(0, $n.Length - 2) + "en" }
  # -nis → -se
  if ($lower -match '(?i)nis$') { return $n.Substring(0, $n.Length - 3) + "se" }
  # foreign -s
  if ($lower -match '(?i)(t|n|r|l|m|o|u|i)$') { return $n + "s" }
  # default -e
  return $n + "e"
}

Write-Output "Loading Wiktionary CSV..."
$lemmaMap = @{}
Import-Csv $csvPath | ForEach-Object {
  $lemma = [string]$_.lemma
  if ([string]::IsNullOrWhiteSpace($lemma)) { return }
  if ($_.pos -notmatch "Substantiv") { return }
  $genusList = @(
    [string]$_.genus, [string]$_.'genus 1', [string]$_.'genus 2', [string]$_.'genus 3', [string]$_.'genus 4'
  ) | Where-Object { $_ -match '^[mfn]$' } | Select-Object -Unique
  if ($genusList.Count -eq 0) { return }
  $plural = [string]$_.'nominativ plural'
  if ([string]::IsNullOrWhiteSpace($plural)) { $plural = [string]$_.'nominativ plural 1' }
  $key = $lemma.ToLowerInvariant()
  if (-not $lemmaMap.ContainsKey($key)) { $lemmaMap[$key] = @() }
  foreach ($g in $genusList) {
    $art = switch ($g) { "m" { "der" } "f" { "die" } "n" { "das" } default { $null } }
    if ($art) {
      $lemmaMap[$key] += [pscustomobject]@{ article = $art; plural = $plural; genus = $g }
    }
  }
}

$manual = @{}
if (Test-Path $manualPath) {
  foreach ($item in ((Get-Content $manualPath -Raw -Encoding UTF8) | ConvertFrom-Json)) {
    $manual[$([string]$item.noun).ToLowerInvariant()] = $item
  }
}

$extracted = @() # populated below after manual block
$lookup = New-Object System.Collections.Generic.List[object]
$stats = @{ found = 0; manual = 0; suffix = 0; kept = 0; missing = 0 }

$extractedRaw = Get-Content $extractedPath -Raw -Encoding UTF8 | ConvertFrom-Json
$extracted = @($extractedRaw)

foreach ($item in $extracted) {
  $noun = [string]$item.noun
  $currentArt = [string]$item.article
  $key = $noun.ToLowerInvariant()
  $article = $null
  $plural = $null
  $source = "kept"

  if ($manual.ContainsKey($key)) {
    $article = [string]$manual[$key].article
    $plural = [string]$manual[$key].plural
    $source = "manual"
    $stats.manual++
  } elseif ($lemmaMap.ContainsKey($key)) {
    $candidates = @($lemmaMap[$key])
    $article = $currentArt
    $match = @($candidates | Where-Object { $_.article -eq $currentArt })
    if ($match.Count -ge 1 -and $match[0].plural) {
      $plural = $match[0].plural
    } elseif ($candidates.Count -eq 1 -and $candidates[0].plural) {
      $plural = $candidates[0].plural
    }
    $source = "wiktionary"
    $stats.found++
  }

  if (-not $article) {
    $article = $currentArt
    $stats.kept++
  }

  if ([string]::IsNullOrWhiteSpace($plural)) {
    $plural = Get-SuffixPlural (Get-CapitalizeNoun $noun) $article
    if ($source -eq "kept") { $stats.missing++ }
  }

  $plural = $plural.Trim()
  if ($plural -match '^(der|die|das)\s+') { $plural = ($plural -replace '^(?i)(der|die|das)\s+', '').Trim() }

  [void]$lookup.Add([pscustomobject]@{
    noun = Get-CapitalizeNoun $noun
    article = $article
    plural = Get-CapitalizeNoun $plural
    source = $source
    wasArticle = $currentArt
    articleFix = ($article -ne $currentArt)
  })
}

$utf8 = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($outPath, (@($lookup.ToArray()) | ConvertTo-Json -Depth 4), $utf8)

$fixes = @($lookup | Where-Object { $_.articleFix })
Write-Output "Lookup entries: $($lookup.Count)"
Write-Output "Wiktionary hits: $($stats.found) manual: $($stats.manual) suffix: $($stats.suffix) kept: $($stats.kept)"
Write-Output "Article corrections needed: $($fixes.Count)"
$fixes | Select-Object -First 30 | ForEach-Object {
  Write-Output "  $($_.wasArticle) $($_.noun) => $($_.article) [$($_.source)]"
}
