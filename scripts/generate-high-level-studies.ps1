param(
  [string[]]$Files = @("data/b2.js", "data/c1.js", "data/c2.js")
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$bullet = [string][char]0x2022
$arrow = [string][char]0x2192

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

function Get-StripArticle([string]$De) { return ($De -replace '^(?i)(der|die|das)\s+', '').Trim() }
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
function Get-UniqueTerms([string[]]$Terms) {
  $seen = @{}; $result = [System.Collections.Generic.List[string]]::new()
  foreach ($term in $Terms) {
    $value = [string]$term
    if ([string]::IsNullOrWhiteSpace($value)) { continue }
    $key = $value.ToLowerInvariant()
    if ($seen.ContainsKey($key)) { continue }
    $seen[$key] = $true
    [void]$result.Add($value)
  }
  return $result.ToArray()
}
function Get-Slugify([string]$De) {
  $bare = (Get-StripArticle $De).ToLowerInvariant()
  $bare = $bare -replace [char]0x00E4, 'ae' -replace [char]0x00F6, 'oe' -replace [char]0x00FC, 'ue' -replace [char]0x00DF, 'ss'
  $bare = ($bare -replace '\s+', '-') -replace '[^a-z0-9-]+', '' -replace '-+', '-'
  return $bare.Trim('-')
}

function Get-DetectPos([string]$De) {
  $bare = Get-StripArticle $De
  if ($De -match '^(?i)(der|die|das)\s+') { return 'noun' }
  if ($bare -match '^(?i)(trotzdem|deshalb|deswegen|darum|allerdings|jedoch|sondern|waehrend|obwohl|damit|dass|weil|wenn|als|bis|seit|ohne)$') { return 'function' }
  if ($bare -match '(?i)(ig|lich|bar|sam|los|voll|frei|reich|arm)$') { return 'adj' }
  if ($bare -match '(?i)(en|ern|eln)$') { return 'verb' }
  return 'other'
}

function New-Examples($Entry) {
  $de = [string]$Entry.de
  $bare = Get-StripArticle $de
  $meanings = @(Get-SplitMeanings ([string]$Entry.lv))
  $m0 = if ($meanings.Count -gt 0) { [string]$meanings[0] } else { [string]$Entry.lv }
  $m1 = if ($meanings.Count -gt 1) { [string]$meanings[1] } else { $m0 }
  $pos = Get-DetectPos $de

  if ($pos -eq 'noun') {
    $phrase = if ($de -match '^(?i)(der|die|das)\s+') { (Get-CapitalizeFirst $Matches[1]) + ' ' + (Get-CapitalizeFirst $bare) } else { Get-CapitalizeFirst $bare }
    $art = if ($de -match '^(?i)(der|die|das)\s+') { $Matches[1] } else { 'das' }
    return @(
      @{ de = [string]"$phrase spielt hier eine wichtige Rolle."; lv = [string]((Get-CapitalizeFirst $m0) + " seit ir svarigs.") },
      @{ de = [string]"Wir sprechen heute ueber $art $bare."; lv = [string]("Sodien runajam par " + $m0 + ".") },
      @{ de = [string]"Kennst du $art $bare?"; lv = [string]("Vai tu zini, kas ir " + $m0 + "?") }
    )
  }
  if ($pos -eq 'verb') {
    return @(
      @{ de = [string]"Man muss das heute $bare."; lv = [string]("To sodien vajag " + $m0 + ".") },
      @{ de = [string]"Er will das Problem $bare."; lv = [string]("Vins velas " + $m0 + " problemu.") },
      @{ de = [string]"Hier $bare wir oft im Alltag."; lv = [string]("Ikdiena mes biezi " + $m0 + ".") }
    )
  }
  if ($pos -eq 'adj') {
    return @(
      @{ de = [string]"Das ist wirklich $bare."; lv = [string]("Tas ir tiesam " + $m0 + ".") },
      @{ de = [string]"Ich finde die Loesung $bare."; lv = [string]("Es risinajumu uzskatu par " + $m0 + ".") },
      @{ de = [string]"Fuer uns ist das $bare."; lv = [string]("Mums tas ir " + $m0 + ".") }
    )
  }
  return @(
    @{ de = [string]"Das Wort '$de' hoert man oft."; lv = [string]("Vardu '$de' biezi dzird.") },
    @{ de = [string]"Im Satz passt '$de' gut."; lv = [string]("Teikuma '$de' der labi - " + $m0 + ".") }
  )
}

function New-ExampleAccents($Examples, $Entry, $Meanings) {
  $bare = Get-StripArticle ([string]$Entry.de)
  $accents = [System.Collections.Generic.List[object]]::new()
  foreach ($ex in $Examples) {
    $deTerms = Get-UniqueTerms @([string]$Entry.de, $bare)
    $lvTerms = Get-UniqueTerms $Meanings
    $accents.Add([ordered]@{
      de = [ordered]@{ blue = @($deTerms | ForEach-Object { [string]$_ }) }
      lv = [ordered]@{ purple = @($lvTerms | ForEach-Object { [string]$_ }) }
    }) | Out-Null
  }
  return $accents.ToArray()
}

function New-StandardStudy($Entry, [string]$Level, [string]$ExistingId) {
  $meanings = @(Get-SplitMeanings ([string]$Entry.lv))
  $translation = Get-FormatTitle ([string]$Entry.lv)
  $mainMeaning = if ($meanings.Count -gt 0) { [string]$meanings[0] } else { [string]$Entry.lv }
  $examples = @(New-Examples $Entry)
  $bare = Get-StripArticle ([string]$Entry.de)
  $meaningJoined = (@($meanings | ForEach-Object { $_.ToLowerInvariant() }) -join " $bullet ")
  $id = if ($ExistingId) { [string]$ExistingId } else { "$($Level.ToLower())-$(Get-Slugify ([string]$Entry.de))" }

  return [ordered]@{
    id = $id
    layout = 'standardStudy'
    translation = $translation
    explanation = [string]("Galvena doma: " + $Entry.de + " visbiezak nozime " + $meaningJoined + ". Konteksts nosaka precizu nozimi teikuma.")
    examples = $examples
    tip = [ordered]@{
      leftBlocks = @([ordered]@{ text = [string]"Atceries: $($Entry.de) $arrow $translation." })
    }
    important = [ordered]@{
      text = [string]($Entry.de + " lieto atbilstosi kontekstam. Galvena nozime: " + (Get-CapitalizeFirst $mainMeaning) + ".")
      example = [string]"$($examples[0].de) = $($examples[0].lv)"
    }
    sectionAccents = [ordered]@{
      explanation = [ordered]@{ blue = @((Get-UniqueTerms @([string]$Entry.de, $bare)) | ForEach-Object { [string]$_ }) }
      examples = (New-ExampleAccents $examples $Entry $meanings)
      tip = [ordered]@{ blue = @([string]$Entry.de) }
      important = [ordered]@{
        blue = @([string]$Entry.de)
        purple = @($meanings | ForEach-Object { [string]$_ })
      }
    }
  }
}

function Test-NeedsStudy($Entry, [string]$Level) {
  if ($Entry.study) { return $true }
  if ($Level -in @('C1', 'C2')) { return ([string]$Entry.lv).Contains($bullet) }
  return ([string]$Entry.lv).Contains($bullet)
}

function Load-WordsFile([string]$FilePath) {
  $full = Join-Path $root $FilePath
  $code = [IO.File]::ReadAllText($full)
  if ($code -notmatch 'const\s+(\w+)\s*=') { throw "No array in $FilePath" }
  $varName = $Matches[1]
  $level = if ($varName -match '^([A-Z][0-9])_') { $Matches[1] } else { 'B2' }
  $json = Repair-Json (Extract-TopLevelArray $code)
  return @{ entries = @(ConvertTo-MutableObject ($json | ConvertFrom-Json)); varName = $varName; level = $level }
}

function Save-WordsFile([string]$FilePath, [string]$VarName, $Entries) {
  $json = $Entries | ConvertTo-Json -Depth 30 -Compress:$false
  $json = $json -replace '\\u003e', '>'
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [IO.File]::WriteAllText((Join-Path $root $FilePath), "const $VarName = $json;`n`nwindow.$VarName = $VarName;`n", $utf8)
}

foreach ($target in $Files) {
  $loaded = Load-WordsFile $target
  $usedIds = [System.Collections.Generic.HashSet[string]]::new()
  $generated = 0; $kept = 0

  foreach ($entry in $loaded.entries) {
    if ($entry.study -and $entry.study.id) { [void]$usedIds.Add([string]$entry.study.id) }
  }

  foreach ($entry in $loaded.entries) {
    if ($entry.study) {
      if ($entry.study.comparison) {
        [void]$entry.study.Remove('comparison')
        if ($entry.study.sectionAccents) { [void]$entry.study.sectionAccents.Remove('comparison') }
      }
      if (-not $entry.study.layout) { $entry.study.layout = 'standardStudy' }
      $kept++
      continue
    }
    if (-not (Test-NeedsStudy $entry $loaded.level)) { continue }

    $baseId = "$($loaded.level.ToLower())-$(Get-Slugify ([string]$entry.de))"
    $id = $baseId; $suffix = 2
    while ($usedIds.Contains($id)) { $id = "$baseId-$suffix"; $suffix++ }
    [void]$usedIds.Add($id)

    $entry.study = New-StandardStudy $entry $loaded.level $id
    $generated++
  }

  Save-WordsFile $target $loaded.varName $loaded.entries
  Write-Output "$target : generated=$generated kept=$kept totalStudies=$(@($loaded.entries | Where-Object study).Count)"
}
